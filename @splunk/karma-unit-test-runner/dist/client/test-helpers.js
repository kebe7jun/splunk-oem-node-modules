'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bootstrapConfig = require('bootstrap-config');

var _bootstrapConfig2 = _interopRequireDefault(_bootstrapConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// QUnit copies additional properties to the test context - simulate this behavior
// signature is typically 'util, hooks', but might be 'util, util, hooks', hooks are optional
function enableUtil() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var utilInstance = _lodash2.default.extend.apply(_lodash2.default, [{}].concat(args));

    suiteSetup(function copyUtilProperties() {
        var _this = this;

        Object.keys(utilInstance).filter(function (key) {
            return !_lodash2.default.includes(['setup', 'teardown', 'suiteSetup', 'suiteTeardown'], key);
        }).forEach(function (key) {
            _this[key] = utilInstance[key];
        });
    });

    if (utilInstance.suiteSetup) {
        suiteSetup(utilInstance.suiteSetup);
    }

    if (utilInstance.suiteTeardown) {
        suiteTeardown(utilInstance.suiteTeardown);
    }

    if (utilInstance.setup) {
        setup(utilInstance.setup);
    }

    if (utilInstance.teardown) {
        teardown(utilInstance.teardown);
    }
}

// tell PhantomJS to save a screenshot - also see karma.conf.js, where the call is handled
function phantomJsScreenshot() {
    // silently ignore screenshot requests if the current browser isn't PhantomJS
    if (_lodash2.default.isUndefined(window.top.callPhantom)) {
        return;
    }

    window.top.callPhantom({ name: 'screenshot' });
}

// this is the only patch we apply to Mocha – it's idempotent and doesn't change the signature, so
// should be fairly future-proof. Strictly speaking it's optional, but it prevents broken classname
// attributes in XML output if empty suite titles are used
function mochaSuitePatch(mochaSuite) {
    return function patchedSuite() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        // ensure proper classname attributes in XML output (Mocha idiosyncrasy)
        if (args[0] === '') {
            window.console.warn('empty suite name detected, replacing');
            args[0] = 'Untitled';
        }

        return mochaSuite.apply(this, args);
    };
}

exports.default = function (target, mochaSuite) {
    _lodash2.default.assign(target, _bootstrapConfig2.default.testHelpers());
    target.util = enableUtil;
    target.screenshot = phantomJsScreenshot;
    target.suite = mochaSuitePatch(mochaSuite);
};