'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testUi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-underscore-dangle: ["error", { "allow": ["__karma__"] }] */
/* global assert */

exports.requireFailureTest = requireFailureTest;
exports.printSuiteTitles = printSuiteTitles;
exports.removeRootTests = removeRootTests;
exports.scriptLoader = scriptLoader;
exports.loadHooks = loadHooks;
exports.callHooks = callHooks;
exports.callGlobalHook = callGlobalHook;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bootstrapConfig = require('bootstrap-config');

var _bootstrapConfig2 = _interopRequireDefault(_bootstrapConfig);

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hooks = {};
var log = window.console;

var testUi = exports.testUi = { ui: {}, names: {} };
if (window.__karma__.config.mocha.ui === 'bdd') {
    _lodash2.default.assign(testUi.ui, {
        suite: describe,
        test: it,
        setup: beforeEach,
        teardown: afterEach,
        suiteSetup: before,
        suiteTeardown: after
    });
    testUi.names.suite = 'describe';
} else if (window.__karma__.config.mocha.ui === 'tdd') {
    _lodash2.default.assign(testUi.ui, { suite: suite, test: test, setup: setup, teardown: teardown, suiteSetup: suiteSetup, suiteTeardown: suiteTeardown });
    testUi.names.suite = 'suite';
} else {
    throw new Error('Invalid mocha interface');
}

var CachedModuleIsolator = function () {
    _createClass(CachedModuleIsolator, null, [{
        key: 'getDefaultBlacklist',
        value: function getDefaultBlacklist() {
            return _bootstrapConfig2.default.moduleIsolatorBlacklist();
        }
    }]);

    function CachedModuleIsolator(cache) {
        _classCallCheck(this, CachedModuleIsolator);

        this.cache = cache;
        this.savedModules = {};

        // hooks and helpers have already loaded a few files - this is the initial set, and its
        // modules are never removed from the cache because hooks might have modified them.
        this.initialModules = Object.keys(cache);
        this.blacklist = CachedModuleIsolator.getDefaultBlacklist().concat(this.initialModules);
    }

    _createClass(CachedModuleIsolator, [{
        key: 'undefine',
        value: function undefine(testPath, save) {
            var _this = this;

            var willUndefine = _lodash2.default.reject(Object.keys(this.cache), function (modName) {
                return _lodash2.default.some(_this.blacklist, function (b) {
                    return _lodash2.default.isRegExp(b) ? b.test(modName) : b === modName;
                });
            });

            if (save) {
                this.savedModules[testPath] = _lodash2.default.pick(this.cache, willUndefine);
            }

            _lodash2.default.each(willUndefine, function (mod) {
                delete _this.cache[mod];
            });
        }
    }, {
        key: 'restore',
        value: function restore(testPath) {
            // clean cache before restoring modules - the saved module tree doesn't contain
            // modules loaded at runtime
            this.undefine(testPath, false);

            _lodash2.default.extend(this.cache, this.savedModules[testPath]);
            delete this.savedModules[testPath];
        }
    }]);

    return CachedModuleIsolator;
}();

// ignoring a require error during test loading results in a reduced total test count
// to cause upstream visibility, insert a fake always-failing test instead


function requireFailureTest(test, err) {
    var testDesc = 'Test ' + test;
    var testError = 'unknown';
    if (err) {
        testError = err.message ? err.message : err.toString();
    }
    // eslint-disable-next-line func-names
    var testFn = function testFn() {
        assert.fail(null, null, testDesc + ' failed during script load, with error message: ' + testError);
    };

    // suite call arguments
    return [[testDesc,
    // eslint-disable-next-line func-names
    function () {
        testUi.ui.test('require', testFn);
    }]];
}

// print suite titles, indented
function printSuiteTitles(suite, lvl, lns) {
    var level = _lodash2.default.isUndefined(lvl) ? 0 : lvl;
    var lines = _lodash2.default.isUndefined(lns) ? ['\nTest suite structure:\n'] : lns;
    var i = void 0;

    var line = _lodash2.default.isEmpty(suite.title) ? '<untitled>' : suite.title;
    line += ' (' + suite.tests.length + ')';
    for (i = 0; i < level; i += 1) {
        line = '  ' + line;
    }
    lines.push(line);

    _lodash2.default.each(suite.suites, function (s) {
        printSuiteTitles(s, i + 1, lines);
    });

    if (level === 0) {
        log.info(lines.join('\n'));
    }
}

// removes any suites/tests added to the root
function removeRootTests(suite, apps) {
    suite.tests = _lodash2.default.filter(suite.tests, function (t) {
        log.warn('removing test from root suite: ', t.title);
        return false;
    });

    suite.suites = _lodash2.default.filter(suite.suites, function (s) {
        if (!_lodash2.default.includes(apps, s.title)) {
            log.warn('removing suite from root suite: ', s.title);
            return false;
        }
        return true;
    });
}

function scriptLoader(url) {
    return new _es6Promise2.default(function (f, r) {
        window.onerror = function (err) {
            window.onerror = null;
            log.warn('Error during script loading: ' + url);
            r(err);
        };

        var script = document.createElement('script');
        script.setAttribute('src', url);
        script.addEventListener('load', function () {
            window.onerror = null;
            f();
        });
        script.addEventListener('error', function (err) {
            window.onerror(err);
        });
        document.body.appendChild(script);
    });
}

function loadHooks(app) {
    window.setupTestApp = function (appSetupFactory) {
        var appSetup = appSetupFactory({ CachedModuleIsolator: CachedModuleIsolator });
        hooks[app] = appSetup;
    };

    var hooksSrc = '/webpack/' + app + '/hooks-bundle.js';
    return scriptLoader(hooksSrc).catch(function (err) {
        log.error('Error during hook loading for app: ' + app, err);
        hooks[app] = {};
    }).then(function () {
        delete window.setupTestApp;
    });
}

function callHooks(app, hookName, param) {
    var hook = _lodash2.default.get(hooks, app + '.' + hookName);
    if (hook) {
        hook(param);
    }
}

function callGlobalHook(hookName, param) {
    var hook = _lodash2.default.get(_bootstrapConfig2.default, 'hooks.' + hookName);
    if (hook) {
        hook(param);
    }
}