'use strict';

/* eslint-disable global-require, import/no-dynamic-require */

var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var log = require('karma/lib/logger').create('config');

function findApps(appPath, testDir, appFilter) {
    // finds test applications in appPath, which has to be absolute.
    // returns an object where app names are keys and paths to them are values. paths are absolute.
    // also replaces symlinks by realpath-ing paths

    return fs.readdirSync(appPath).reduce(function (apps, app) {
        if (_.isEmpty(appFilter) || _.includes(appFilter, app)) {
            try {
                if (fs.statSync(path.join(appPath, app, testDir)).isDirectory()) {
                    apps[app] = { path: fs.realpathSync(path.join(appPath, app)) };
                }
            } catch (e) {
                // intentionally blank
            }
        }
        return apps;
    }, {});
}

function loadFilterSets(app, appSupportPath) {
    try {
        return require(path.join(appSupportPath, 'filtersets.js'));
    } catch (e) {
        return {};
    }
}

module.exports = function buildConfig(config, settings) {
    var _require = require(path.join(__dirname, '../package.json')),
        pkgName = _require.name,
        pkgVersion = _require.version;

    log.debug(pkgName + ' ' + pkgVersion);

    var fileFilter = !_.isEmpty(config.filter) ? config.filter.split(',') : [];
    var appFilter = !_.isEmpty(config.apps) ? config.apps.split(',') : [];
    var debugFlags = !_.isEmpty(config.debug) ? config.debug.split(',') : [];
    var testApps = settings.testApps;

    settings.testRegexp = _.defaultTo(settings.testRegexp, '(.*)(?:\\.js|\\.es|\\.jsx)$');
    settings.appDir = _.defaultTo(settings.appDir, '.');
    settings.testDir = _.defaultTo(settings.testDir, '.');
    settings.supportDir = _.defaultTo(settings.supportDir, '.');
    settings.outputDir = _.defaultTo(settings.outputDir, '.');
    settings.externalSourcePaths = _.defaultTo(settings.externalSourcePaths, {});
    settings.wpVersion = _.defaultTo(settings.wpVersion, 2);
    settings.features = _.defaultsDeep(settings.features || {}, { coverage: { babel: true } });

    // override timezone to fix certain tests on systems with a local timezone other than Pacific
    // tested on Mac OS X with PhantomJS, Chrome, Firefox, jsdom – does NOT work with: Safari
    if (_.isString(settings.features.timezone)) {
        log.debug('Setting timezone to:', settings.features.timezone);
        process.env.TZ = settings.features.timezone;
    }

    if (testApps) {
        if (!_.isEmpty(appFilter)) {
            testApps = _.pick(testApps, appFilter);
        }
        // ensure absolute, final paths
        _.each(testApps, function (testApp) {
            testApp.path = fs.realpathSync(path.join(settings.basePath, testApp.path));
        });
    } else {
        // do discovery
        testApps = findApps(path.join(settings.basePath, settings.appDir), settings.testDir, appFilter);
    }

    if (_.isEmpty(testApps)) {
        log.error('No test applications found or enabled.');
        process.exit(2);
    }
    log.info('Enabled applications:', _.keys(testApps).join(', '));

    _.each(testApps, function (testApp) {
        if (!_.has(testApp, 'sourcePaths')) {
            testApp.sourcePaths = [testApp.path];
        }
    });

    // SUI-1174: Karma discovers plugins named karma-*, but only in the node_modules directory the main karma package
    // is located in. Tools that shift module locations (e.g. yarn workspaces) can disrupt this behavior. To ensure
    // this package can load all the plugins it specifies as dependencies (karma-chai, karma-sinon, ...), Karma's
    // behavior is replicated using the local node_modules folder.
    var runnerModulesPath = path.join(__dirname, '..', 'node_modules');
    var runnerLocalPlugins = fs.readdirSync(runnerModulesPath).filter(function (plugin) {
        return (/^karma-.*/.test(plugin)
        );
    }).map(function (plugin) {
        return path.join(runnerModulesPath, plugin);
    });

    config.set({
        plugins: runnerLocalPlugins.concat(['karma-*', require('./performance-reporter'), require('./webpack-plugin')]),

        basePath: settings.basePath,

        frameworks: ['webpack', 'mocha'].concat(settings.features.chai ? 'chai' : [], settings.features.sinon ? 'sinon' : []),

        middleware: ['webpack'],

        files: [path.join(__dirname, 'client', 'test-bootstrap-loader.js')],

        autoWatch: false, // webpack is watching

        // exclusions are added per app, below
        exclude: [],

        client: {
            mocha: {
                reporter: 'html',
                ui: _.defaultTo(settings.testStyle, 'bdd'),
                bail: false, // fail-fast mode
                timeout: 20000
            },
            talos: {
                debugFlags: debugFlags,
                logLevel: config.quietConsole ? config.LOG_ERROR : config.logLevel || config.LOG_INFO
            }
        },

        reporters: ['mocha'],

        junitReporter: {
            outputDir: path.join(settings.outputDir, config.junitDirectory || 'xml'),
            outputFile: config.junitFilename || 'output.xml',
            useBrowserName: false,

            // not forcing valid java package names, but the dot is used as a separator
            nameFormatter: function nameFormatter(browser, result) {
                // slice of the global suite and the app suite
                var name = (result.suite || []).slice(2).concat(result.description);
                return _.invokeMap(name, 'replace', /\./g, '_').join(': ');
            },
            classNameFormatter: function classNameFormatter(browser, result) {
                var name = _.get(result, 'suite[1]', 'unknown').split('/');
                name.unshift(_.get(result, 'suite[0]', 'unknown'));
                return _.invokeMap(name, 'replace', /\W/g, '_').join('.');
            }
        },

        mochaReporter: {
            showDiff: true
        },

        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS'],

        phantomjsLauncher: {
            options: {
                viewportSize: { width: 1280, height: 800 },
                onCallback: function onCallback(call) {
                    if (call && call.name === 'screenshot') {
                        // eslint-disable-next-line no-undef
                        page.render('./screenshots/' + Date.now() + '.png');
                    }
                }
            }
        },

        customLaunchers: {
            PhantomJSDebug: {
                base: 'PhantomJS',
                debug: true
            }
        },

        browserNoActivityTimeout: 30 * 1000,

        talos: { apps: testApps, debugFlags: debugFlags, settings: settings }
    });

    if (config.saucelabs) {
        if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
            log.error('Environment variables $SAUCE_USERNAME and $SAUCE_ACCESS_KEY have to be set');
            process.exit(4);
        }

        var customLaunchers = {
            IE11: {
                base: 'SauceLabs',
                browserName: 'internet explorer',
                platform: 'Windows 8.1',
                version: '11',
                timeZone: 'Los Angeles'
            },
            Edge: {
                base: 'SauceLabs',
                browserName: 'MicrosoftEdge',
                platform: 'Windows 10',
                version: '13',
                timeZone: 'Los Angeles'
            },
            Chrome: {
                base: 'SauceLabs',
                browserName: 'chrome',
                version: '50',
                timeZone: 'Los Angeles'
            },
            Firefox: {
                base: 'SauceLabs',
                browserName: 'firefox',
                version: '46',
                timeZone: 'Los Angeles'
            },
            Safari: {
                base: 'SauceLabs',
                browserName: 'safari',
                platform: 'OS X 10.11',
                timeZone: 'Los Angeles'
            },
            iOS: {
                base: 'SauceLabs',
                browserName: 'iphone',
                version: '9.2',
                timeZone: 'Los Angeles'
            },
            Android: {
                base: 'SauceLabs',
                browserName: 'android',
                version: '5.1',
                timeZone: 'Los Angeles'
            }
        };

        config.set({
            customLaunchers: customLaunchers,
            sauceLabs: {
                testName: '@splunk/karma-unit-test-runner'
            },
            browsers: Object.keys(customLaunchers),
            reporters: ['dots', 'saucelabs'],
            singleRun: true,
            captureTimeout: 300000,
            browserNoActivityTimeout: 60000
        });
    }

    // global, flag-specific configuration
    if (config.coverage || config.coverageMaps) {
        // enable and configure karma-coverage
        config.reporters.push('coverage');
        config.coverageReporter = {
            dir: path.join(settings.outputDir, 'coverage_report'),
            reporters: [{ type: 'in-memory' }].concat(config.coverage ? { type: 'html' } : []) // html output for annotated source
        };

        // register coverage_complete handler (includes console output)
        config.plugins.push(require('./coverage-plugin'));
        config.frameworks.push('coverage');
    }

    // app-specific configuration
    Object.keys(testApps).forEach(function (app, idx, apps) {
        var appTestPath = path.join(testApps[app].path, settings.testDir);

        var appHasFilter = false;

        fileFilter.forEach(function (filter) {
            var filterPatterns = [];

            // detect app-specific filters (app:models/**) and filter sets (e.g. app:feature)
            var specificForApp = _.find(apps, function (specificApp) {
                return _.startsWith(filter, specificApp + ':');
            });

            if (specificForApp) {
                if (specificForApp === app) {
                    appHasFilter = true;
                    var specificFilter = filter.substring((app + ':').length);
                    var filterSets = loadFilterSets(app, path.join(testApps[app].path, settings.supportDir));
                    if (_.has(filterSets, specificFilter)) {
                        filterPatterns = filterSets[specificFilter];
                    } else {
                        filterPatterns.push(specificFilter);
                    }
                }
            } else {
                appHasFilter = true;
                filterPatterns.push(filter);
            }

            filterPatterns.forEach(function (f) {
                config.files.push({
                    pattern: path.join(appTestPath, /^[a-z0-9]+$/i.test(f) ? '**/' + f + '/**' : f),
                    included: false
                });
            });
        });

        if (!appHasFilter) {
            config.files.push({ pattern: path.join(appTestPath, '**'), included: false });
        }

        if (_.has(settings.exclusions, app) && !config.disableExclusions) {
            settings.exclusions[app].forEach(function (test) {
                config.exclude.push(path.join(appTestPath, test));
            });
        }
    });

    // patch Karma 404 handling to ignore warnings
    if (!(config.verbose404 || false)) {
        var karmaCommon = require('karma/lib/middleware/common');
        karmaCommon.serve404 = function (response) {
            response.writeHead(404);
            return response.end('NOT FOUND');
        };
    }
};