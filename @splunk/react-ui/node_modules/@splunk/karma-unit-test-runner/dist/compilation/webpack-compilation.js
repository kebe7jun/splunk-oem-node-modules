'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _memoryFs = require('memory-fs');

var _memoryFs2 = _interopRequireDefault(_memoryFs);

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _ProgressPlugin = require('webpack/lib/ProgressPlugin');

var _ProgressPlugin2 = _interopRequireDefault(_ProgressPlugin);

var _virtualModuleLoader = require('./virtual-module-loader');

var _virtualModuleLoader2 = _interopRequireDefault(_virtualModuleLoader);

var _webpackUtils = require('./webpack-utils');

var _webpackUtils2 = _interopRequireDefault(_webpackUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onCompilation = void 0; // This module is instantiated and controlled by webpack-plugin.
//
// Responsibilities:
//  Load and adapt an app's Webpack configuration for testing (entry points are passed in)
//  Webpack compiler management
//  Providing access to the memory file system (to retrieve built bundles)
//  Dumping generated bundles to a debug directory

var compiling = void 0;
var memFS = new _memoryFs2.default();
var log = require('./child-log');

// Accepts basic configuration (entry points, application paths) and assembles a final
// webpack compiler configuration, including loaders and plugins.
function buildConfig(_ref) {
    var app = _ref.app,
        appConfig = _ref.appConfig,
        appProfilePath = _ref.appProfilePath,
        entryPoints = _ref.entryPoints,
        noSourceMaps = _ref.noSourceMaps,
        _ref$settings = _ref.settings,
        testRegexp = _ref$settings.testRegexp,
        bootstrapConfig = _ref$settings.bootstrapConfig,
        externalSourcePaths = _ref$settings.externalSourcePaths,
        wpVersion = _ref$settings.wpVersion,
        _ref$settings$feature = _ref$settings.features,
        coverage = _ref$settings$feature.coverage,
        pcssmStub = _ref$settings$feature.pcssmStub,
        stubModules = _ref$settings$feature.stubModules;

    var wpu = (0, _webpackUtils2.default)(wpVersion);
    var isBootstrap = app === '<bootstrap>';
    var appProfile = {};

    if (appProfilePath && !isBootstrap) {
        try {
            // eslint-disable-next-line global-require, import/no-dynamic-require
            appProfile = require(appProfilePath);
            if (_lodash2.default.isFunction(appProfile)) {
                appProfile = appProfile.call(null, {}, { testRegexp: new RegExp(testRegexp, 'i') });
            }
        } catch (e) {
            log.error('Unable to load application profile for app: ' + app);
            throw e;
        }
    }

    _lodash2.default.defaultsDeep(appProfile, { resolve: { alias: {} }, plugins: [], module: {} });
    _lodash2.default.defaultsDeep(appProfile, wpVersion >= 2 ? { module: { rules: [] } } : { module: { loaders: [], preLoaders: [] } });

    // adapt the app's profile to build test files

    // replace existing output configuration (the memory fs is set later, not via the configuration)
    appProfile.output = {
        path: '/',
        filename: '[name]-bundle.js',
        publicPath: '/webpack/' + app + '/',
        jsonpFunction: 'wpJsonp' + (isBootstrap ? '_bootstrap' : '_' + app.replace(/\W/g, '_'))
    };

    // replace existing entry points with ours (one for each test file)
    appProfile.entry = entryPoints;

    // disable cache for every babel loader (clean slate for testing)
    if (wpVersion >= 2) {
        wpu.setWp2LoaderOption(wpu.getLoaders(appProfile), 'babel-loader', 'cacheDirectory', false, {});
    } else {
        _lodash2.default.each(wpu.getLoaders(appProfile), function (l) {
            if (wpu.isLoader(l, 'babel-loader')) {
                l.query.cacheDirectory = false;
            }
        });
    }

    if (isBootstrap) {
        appProfile.resolve.alias['bootstrap-config'] = bootstrapConfig || _path2.default.join(__dirname, 'bootstrap-config-stub');
    } else {
        // fix the common chunk name (or add the plugin if required)
        var commonChunkPlugin = _lodash2.default.find(appProfile.plugins, function (p) {
            return _lodash2.default.includes(p.ident, 'CommonsChunkPlugin');
        });
        if (commonChunkPlugin) {
            commonChunkPlugin.name = 'common';
            commonChunkPlugin.chunkNames = 'common';
        } else {
            appProfile.plugins.push(new _webpack2.default.optimize.CommonsChunkPlugin({
                name: 'common',
                minChunks: 2
            }));
        }

        if (_lodash2.default.isArray(stubModules)) {
            // stub out certain modules (replace with empty virtual modules)
            _lodash2.default.each(stubModules, function (stubModule) {
                log.debug('Stubbing out module:', stubModule);
                _virtualModuleLoader2.default.setVirtualModule('testing_stubs', stubModule, 'define(function() { });');
                wpu.addLoader(appProfile, new RegExp(stubModule), {
                    loader: 'virtual-module?ns=testing_stubs&id=' + stubModule
                });
            });
        }

        if (pcssmStub) {
            // optimization: enable postcss, but only for pcssm files (not pcss)
            _virtualModuleLoader2.default.setVirtualModule('testing', 'pcssEmpty', 'define(function() { return {}; });');
            _lodash2.default.each(wpu.getLoaders(appProfile), function (l) {
                // TODO: make wpv2 compatible (once we need it)
                if (l.loader && l.test && l.loader.includes('postcss-loader') && l.test.test('.pcss')) {
                    log.debug('Applying postcss optimization');
                    l.loader = 'virtual-module?ns=testing&id=pcssEmpty';
                }
            });
        }

        // enable coverage loader/plugin if patterns are provided
        if (_lodash2.default.has(appConfig, 'coveragePatterns')) {
            var unitTestingCoverage = {
                coverageSourcePaths: appConfig.sourcePaths.concat(_lodash2.default.values(externalSourcePaths)),
                coveragePatterns: appConfig.coveragePatterns
            };
            log.debug('Using coverage src dirs for app', app, unitTestingCoverage.coverageSourcePaths);

            if (wpVersion < 2) {
                appProfile.unitTestingCoverage = unitTestingCoverage;
            }

            if (coverage.direct) {
                // es5 (only for .js) - webpack loader
                wpu.addLoader(appProfile, /\.js$/, {
                    loader: require.resolve('./es5-coverage-instrumenter-loader'),
                    include: unitTestingCoverage.coverageSourcePaths,
                    options: { unitTestingCoverage: unitTestingCoverage } // only for wp >= 2
                }, true);
            }

            if (coverage.babel) {
                // es6 (extensions depend on webpack/babel config) - babel plugin
                var covPlugin = [require.resolve('./es6-coverage-instrumenter-plugin'), unitTestingCoverage];

                if (wpVersion >= 2) {
                    wpu.setWp2LoaderOption(wpu.getLoaders(appProfile), 'babel-loader', 'plugins', covPlugin, { makeOption: true, addToOption: true });
                } else {
                    _lodash2.default.each(wpu.getLoaders(appProfile), function (l) {
                        if (wpu.isLoader(l, 'babel-loader')) {
                            _lodash2.default.set(l, 'query.plugins', _lodash2.default.get(l, 'query.plugins', []).concat([covPlugin]));
                        }
                    });
                }
            }
        }
    }

    appProfile.plugins.push(new _ProgressPlugin2.default(_lodash2.default.throttle(function (progress, msg) {
        if (progress !== 1) {
            log.info('Webpack progress: ' + Math.round(progress * 100) + '% ' + msg);
        }
    }, 5000, { leading: false, trailing: true })));

    appProfile.devtool = noSourceMaps ? false : '#eval-source-map';

    _virtualModuleLoader2.default.install(appProfile, wpVersion);

    return appProfile;
}

// Accepts a webpack configuration and runs a (watching) webpack compilation. Calls any registered
// post-compilation handlers and notifies the controlling module after compilation is done.
function startCompilation(config, _ref2) {
    var _this = this;

    var app = _ref2.app,
        appConfig = _ref2.appConfig,
        singleRun = _ref2.singleRun,
        dumpFiles = _ref2.dumpFiles,
        debugDir = _ref2.debugDir;

    if (_lodash2.default.isUndefined(config)) {
        process.send({ done: { app: app, error: 'invalid config' } });
        return;
    }

    onCompilation = [];
    compiling = true;
    var isBootstrap = app === '<bootstrap>';

    var compiler = (0, _webpack2.default)(config);
    compiler.outputFileSystem = memFS;

    if (isBootstrap) {
        log.debug('Starting bootstrap compilation');
    } else {
        log.info('Starting compilation for ' + (_lodash2.default.keys(config.entry).length - 1) + ' test files');
    }

    var compilationDone = function compilationDone(err, stats) {
        log.debug('Compilation done for app: ' + app);

        compiling = false;

        if (err) {
            throw err;
        }

        var statsLevel = stats.hasWarnings() ? 'warn' : 'debug';
        if (stats.hasErrors()) {
            statsLevel = 'error';
        }
        log[statsLevel]('Compilation results:\n' + stats.toString({
            colors: true,
            assets: true,
            hash: false,
            timings: true,
            version: false,
            chunks: false,
            chunkModules: false,
            cached: false,
            reasons: false,
            source: false
        }));

        // edge case in watch mode: a change to a test that causes a webpack build fail, if that
        // test was previously built successfully, causes the lingering (stale) built bundle to get
        // served. if there are any entry points with no matching equivalent in the final chunk
        // list, and there's a matching file in the memory fs, it's deleted to prevent this.
        // note that this introduces a second bug: if the offending change is reverted 1:1, webpack
        // caching results in the bundle not being output (probably because webpack thinks it's
        // already there)
        var builtChunks = _lodash2.default.keys(stats.toJson('verbose', true).assetsByChunkName);
        (0, _lodash2.default)(config.entry).keys().difference(builtChunks).each(function (missing) {
            var bundlePath = '/' + missing + '-bundle.js';
            if (memFS.existsSync(bundlePath)) {
                log.info('Deleting stale bundle', missing);
                memFS.unlinkSync(bundlePath);
            }
        });

        if (dumpFiles) {
            log.info('Dumping generated files to', debugDir);
            _fsExtra2.default.mkdirsSync(debugDir);
            // eslint-disable-next-line no-use-before-define
            walkGenerated(debugDir, '/');
        }

        log.debug('Calling post compilation handlers');
        _lodash2.default.each(onCompilation, function (handler) {
            handler.call(_this);
        });
        onCompilation = [];

        // tell controlling module to start tests
        process.send({ done: { app: app, appConfig: appConfig } });

        // TODO: optimization: can we clean up webpack for single runs, to reduce memory usage?
    };

    if (singleRun) {
        compiler.run(compilationDone);
    } else {
        compiler.watch({ aggregateTimeout: 1000 }, compilationDone);
    }
}

// Sends back file contents to the local port specified in the original request.
function sendBackFile(buffer, port) {
    _net2.default.createConnection(port, function handler() {
        if (_lodash2.default.isNull(buffer)) {
            this.end();
        } else {
            var that = this;
            this.write(buffer, function () {
                that.end();
            });
        }
    });
}

// Handles incoming file requests from the controlling module. If a compilation is currently
// in progress, a post-compilation handler is registered, otherwise the request is answered
// immediately.
function processRequestUrl(request) {
    if (compiling) {
        log.debug('Currently compiling, delaying', request.filePath);

        onCompilation.push(function () {
            log.debug('Post compilation, now serving', request.filePath);

            if (memFS.existsSync(request.filePath)) {
                sendBackFile(memFS.readFileSync(request.filePath), request.port);
            } else {
                log.warn('Even after compilation, file not found in memfs', request.filePath);
                sendBackFile(null, request.port);
            }
        });
    } else if (memFS.existsSync(request.filePath)) {
        sendBackFile(memFS.readFileSync(request.filePath), request.port);
    } else {
        log.warn('File not found in memfs', request.filePath);
        sendBackFile(null, request.port);
    }
}

function walkGenerated(debugDir, virtualDir) {
    var entries = memFS.readdirSync(virtualDir).sort();
    _lodash2.default.each(entries, function (entry) {
        var newPath = virtualDir + '/' + entry;

        if (memFS.statSync(newPath).isDirectory()) {
            _fsExtra2.default.mkdirsSync(_path2.default.join(debugDir, newPath));
            walkGenerated(debugDir, newPath);
        } else {
            _fsExtra2.default.writeFileSync(_path2.default.join(debugDir, newPath), memFS.readFileSync(newPath));
        }
    });
}

process.on('message', function (msg) {
    if (_lodash2.default.has(msg, 'compile')) {
        try {
            var config = buildConfig(msg.compile);
            startCompilation(config, msg.compile);
        } catch (e) {
            process.send({ done: { app: msg.compile.app, error: e.toString() } });
        }
    } else if (_lodash2.default.has(msg, 'processRequest')) {
        processRequestUrl(msg.processRequest);
    }
});