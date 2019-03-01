'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _resolve = require('resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _logger = require('karma/lib/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // This module instantiates and controls compilation/webpack-compilation.
//
// Responsibilities:
//  Listening to the initial file list creation event
//  Building entry points for webpack, looking for app's webpack config
//  Forking a webpack-compilation instance and communicating with it
//  Providing a middleware for Karma
//    Acting on everything /webpack-prefixed
//    Forwarding requests to webpack-compilation, which reads it from the internal memory fs

var webpackChildren = {};

function WebpackPlugin(config, executor, emitter) {
    var log = _logger2.default.create('webpack-plugin');
    var testRegexp = new RegExp(config.talos.settings.testRegexp, 'i');
    var appsConfig = config.talos.apps;
    var dumpFiles = _lodash2.default.includes(config.talos.debugFlags, 'dump');
    var debugDir = _path2.default.join(config.basePath, config.talos.settings.outputDir, 'webpack_debug');

    // safety (user is specifically asking for something unsupported)
    if (config.autoWatch) {
        log.error("Enabling Karma's auto-watching mode is unsupported due to webpack " + 'integration. Note that auto-watching (via webpack) is enabled by default.');
        process.exit(3);
    }

    function findAppProfilePath(app, appPath) {
        // find the app's webpack profile to use - in order:
        var resolvedBasePath = _path2.default.resolve(config.basePath);
        var profilePath = null;
        (0, _lodash2.default)(['test', 'build', 'pages', 'pages-enterprise', 'webpack']).map(function (n) {
            return ['profiles/webpack.' + n + '.config', 'profiles/' + n + '.config', 'webpack.' + n + '.config', n + '.config'];
        }).flatten().each(function (n) {
            var possibleProfilePath = _lodash2.default.attempt(function () {
                return _resolve2.default.sync(n, {
                    basedir: appPath,
                    extensions: ['.es', '.js'],
                    moduleDirectory: ['']
                });
            });
            if (_lodash2.default.isError(possibleProfilePath) || !_lodash2.default.startsWith(possibleProfilePath, resolvedBasePath)) {
                return true;
            }
            profilePath = possibleProfilePath;
            return false;
        });
        return profilePath;
    }

    // receive Karma's final file list, after all filters etc. are applied. Karma's watch mode is
    // disabled because webpack is watching instead => this event will only ever reach us once.
    emitter.on('file_list_modified', function (files) {
        log.debug('Initiating webpack compilation because file list has changed');

        // convert file list to { appName -> list of test files }
        var appTests = (0, _lodash2.default)(files.served).map('path').filter(function (file) {
            return testRegexp.test(file);
        }) // select all test source files
        .map(function (file) {
            // extract test name
            var app = _lodash2.default.findKey(appsConfig, function (appConfig) {
                return _lodash2.default.startsWith(file, appConfig.path);
            });
            if (app) {
                var name = testRegexp.exec(file.substring(appsConfig[app].path.length + 1))[1];
                return { app: app, name: name, path: file };
            }
            return null;
        }).compact() // files outside apps can make it through a lax test regexp filter
        .groupBy('app') // group by test application
        .tap(function (tests) {
            // deactivate apps with no tests/all tests filtered out
            // note that appsConfig is modified here, not the entry point list
            appsConfig = _lodash2.default.pick(appsConfig, _lodash2.default.keys(tests));
        }).value();

        // eslint-disable-next-line no-param-reassign
        config.client.talos.testFiles = _lodash2.default.omit(appTests, '<bootstrap>');

        // let other components know that we've determined a set of apps and tests
        emitter.emit('__test_apps_filtered', appsConfig, appTests);

        // add fake bootstrap app
        appTests['<bootstrap>'] = [];

        // prepare debug directory (empty it)
        if (dumpFiles) {
            log.info('Cleaning debug dir ', debugDir);
            _fsExtra2.default.emptyDirSync(debugDir);
        }

        // determine which (if any) type of source map to use
        var noSourceMaps = dumpFiles || _lodash2.default.some(config.browsers, function (b) {
            return _lodash2.default.includes(b, 'PhantomJS');
        });
        log.debug('Source maps are disabled:', noSourceMaps);

        // for each test application, build a webpack config and spawn compilation
        var appsCompiling = _lodash2.default.keys(appTests);

        _lodash2.default.each(appTests, function (tests, app) {
            log.debug('Building webpack config for app: ' + app);

            var isBootstrap = app === '<bootstrap>';

            // determine app profile path to use - no profile means app is deactivated
            var appProfilePath = app === '<bootstrap>' ? null : findAppProfilePath(app, appsConfig[app].path);
            if (!appProfilePath && !isBootstrap) {
                log.warn('Unable to find application profile for app: ' + app);
            }
            log.debug('Profile path for app ' + app + ' is: ' + appProfilePath);

            var entryPoints = {};
            if (isBootstrap) {
                var bootstrapPath = _path2.default.join(__dirname, 'client', 'test-bootstrap');
                entryPoints['test-bootstrap'] = bootstrapPath;
            } else {
                // convert test file list to entry points
                _lodash2.default.transform(tests, function (ep, test) {
                    entryPoints['/test/' + test.name] = test.path;
                }, entryPoints);

                // use app hooks file if available, if not, create empty bundle
                var hookPath = _path2.default.join(appsConfig[app].path, config.talos.settings.supportDir, 'hooks.js');
                if (_fsExtra2.default.existsSync(hookPath)) {
                    entryPoints.hooks = hookPath;
                } else {
                    entryPoints.hooks = _path2.default.join(__dirname, 'compilation', 'empty.js');
                    log.debug('No hook file for application:', app);
                }
            }

            // do all compiling in a child process to prevent Karma from timing out
            var webpackChildLog = _logger2.default.create('webpack-' + app);
            webpackChildren[app] = _child_process2.default.fork(_path2.default.join(__dirname, 'compilation', 'webpack-compilation'));

            webpackChildren[app].on('message', function (msg) {
                // forward log messages from webpack-compilation
                if (_lodash2.default.has(msg, 'log')) {
                    webpackChildLog[msg.log[0]].apply(webpackChildLog, _toConsumableArray(msg.log.slice(1)));
                } else if (_lodash2.default.has(msg, 'done')) {
                    // start tests once compilation has finished
                    if (_lodash2.default.has(msg.done, 'error')) {
                        log.error('Critical compilation error for app: ' + msg.done.app + ', ' + msg.done.error);
                    }

                    // let other components know about this app's changed config (compilation
                    // discovers a few entries)
                    if (msg.done.app !== '<bootstrap>') {
                        emitter.emit('__test_app_changed', app, msg.done.appConfig);
                    }

                    appsCompiling = _lodash2.default.without(appsCompiling, msg.done.app);
                    if (_lodash2.default.isEmpty(appsCompiling)) {
                        log.debug('All apps compiled, starting tests');
                        // in single run mode, Karma will start the tests (and then exit)
                        // in watch mode, we have to kick off the tests manually
                        // also set autoWatch to true: causes tests to also run on browser refresh
                        // cannot set this earlier, doing so would enable Karma's file watcher
                        if (!config.singleRun) {
                            config.autoWatch = true;
                            executor.schedule();
                        }
                    }
                }
            });

            // tell webpack-compilation to start compiling
            webpackChildren[app].send({
                compile: {
                    app: app,
                    appConfig: appsConfig[app] || {},
                    appProfilePath: appProfilePath,
                    entryPoints: entryPoints,
                    settings: config.talos.settings,
                    singleRun: config.singleRun,
                    dumpFiles: dumpFiles,
                    noSourceMaps: noSourceMaps,
                    debugDir: _path2.default.join(debugDir, app)
                }
            });
        });
    });
}

// Returns a middleware fn that forwards every /webpack-prefixed request to webpack-compilation.
// File contents are returned by webpack-compilation using a local socket. Have to do that because
// using the IPC functionality node.js comes with (.send) is very slow for large strings, and
// the commons chunk can easily exceed ten megabytes.
function createWebpackMiddleware() {
    var log = _logger2.default.create('webpack-middleware');

    return function (request, response, next) {
        if (request.url.startsWith('/webpack')) {
            log.debug('webpack-prefixed request:', request.url);
            var url = decodeURI(request.url).substring('/webpack/'.length);
            var idx = url.indexOf('/');
            var app = url.substring(0, idx);
            var filePath = url.substring(idx);

            // remove any query params
            filePath = _lodash2.default.includes(filePath, '?') ? filePath.substring(0, filePath.lastIndexOf('?')) : filePath;

            if (_lodash2.default.has(webpackChildren, app)) {
                var server = _net2.default.createServer(function (client) {
                    var notEmpty = false;
                    client.on('data', function (data) {
                        notEmpty = true;
                        response.write(data);
                    });
                    client.on('end', function () {
                        if (notEmpty) {
                            response.statusCode = 200;
                            response.end();
                        } else {
                            response.statusCode = 404;
                            response.end('not found');
                        }
                        server.close();
                    });
                }).listen();

                webpackChildren[app].send({
                    processRequest: {
                        filePath: filePath,
                        port: server.address().port
                    }
                });
            } else {
                log.debug('Received request for unknown or terminated app: ' + app);
                response.statusCode = 404;
                response.end('unknown app');
            }
        } else {
            next();
        }
    };
}

WebpackPlugin.$inject = ['config', 'executor', 'emitter'];
module.exports = {
    'framework:webpack': ['type', WebpackPlugin],
    'middleware:webpack': ['factory', createWebpackMiddleware]
};