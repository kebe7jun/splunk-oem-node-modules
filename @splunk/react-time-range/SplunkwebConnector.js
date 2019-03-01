/*!
 * Copyright © 2018 Splunk Inc.
 * SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
 * without a valid written license from Splunk Inc. is PROHIBITED.
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Message");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@splunk/splunk-utils/config");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/promise");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@splunk/time-range-utils/timeParser");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@splunk/time-range-utils/presets");

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _splunk_ui_utils_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _splunk_ui_utils_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_splunk_ui_utils_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _splunk_time_range_utils_presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _splunk_time_range_utils_presets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_splunk_time_range_utils_presets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _splunk_time_range_utils_timeParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _splunk_time_range_utils_timeParser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_splunk_time_range_utils_timeParser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _splunk_splunk_utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _splunk_splunk_utils_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_splunk_splunk_utils_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _splunk_react_ui_Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _splunk_react_ui_Message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_Message__WEBPACK_IMPORTED_MODULE_7__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var SplunkwebConnector = function (_Component) {
    _inherits(SplunkwebConnector, _Component);

    function SplunkwebConnector(props) {
        var _ref;

        _classCallCheck(this, SplunkwebConnector);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = SplunkwebConnector.__proto__ || Object.getPrototypeOf(SplunkwebConnector)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleRequestParseEarliest = function (time) {
            if (_this.cancelableEarliestTimeParser) {
                _this.cancelableEarliestTimeParser.cancel();
            }

            _this.cancelableEarliestTimeParser = Object(_splunk_ui_utils_promise__WEBPACK_IMPORTED_MODULE_3__["makeCancelable"])(Object(_splunk_time_range_utils_timeParser__WEBPACK_IMPORTED_MODULE_5__["getISO"])(time));
            _this.cancelableEarliestTimeParser.promise.then(function (data) {
                _this.setState({
                    parseEarliest: _extends({ error: null, time: time }, data)
                });
            }).catch(function (error) {
                _this.setState({
                    parseEarliest: { error: error, time: time }
                });
            });
        };

        _this.handleRequestParseLatest = function (time) {
            if (_this.cancelableLatestTimeParser) {
                _this.cancelableLatestTimeParser.cancel();
            }

            _this.cancelableLatestTimeParser = Object(_splunk_ui_utils_promise__WEBPACK_IMPORTED_MODULE_3__["makeCancelable"])(Object(_splunk_time_range_utils_timeParser__WEBPACK_IMPORTED_MODULE_5__["getISO"])(time));
            _this.cancelableLatestTimeParser.promise.then(function (data) {
                _this.setState({
                    parseLatest: data
                });
            }).catch(function (data) {
                _this.setState({
                    parseLatest: data
                });
            });
        };

        _this.state = {
            presets: SplunkwebConnector.sharedPresets,
            earliestParse: '',
            latestParse: ''
        };

        SplunkwebConnector.instances.push(_this);
        return _this;
    }

    _createClass(SplunkwebConnector, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var index = SplunkwebConnector.instances.indexOf(this);
            SplunkwebConnector.instances.splice(index, 1);
        }
    }, {
        key: 'updatePresets',
        value: function updatePresets() {
            this.setState({
                presets: SplunkwebConnector.sharedPresets
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                presetsTransform = _props.presetsTransform;


            if (!_splunk_splunk_utils_config__WEBPACK_IMPORTED_MODULE_6__["isAvailable"]) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _splunk_react_ui_Message__WEBPACK_IMPORTED_MODULE_7___default.a,
                    { type: 'error' },
                    'Cannot access splunkweb.'
                );
            }

            return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(children, {
                presets: presetsTransform(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.state.presets)),
                onRequestParseEarliest: this.handleRequestParseEarliest,
                onRequestParseLatest: this.handleRequestParseLatest,
                parseEarliest: this.state.parseEarliest,
                parseLatest: this.state.parseLatest
            });
        }
    }]);

    return SplunkwebConnector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

SplunkwebConnector.propTypes = {
    /**
     * Must be either a Time Range `Dialog` or `Dropdown`.
     */
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
    /**
     * A function to transform presets before they are passed to the wrapped component.
     * Should accept and return a presets array.
     */
    presetsTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
SplunkwebConnector.defaultProps = {
    presetsTransform: function presetsTransform(presets) {
        return presets;
    }
};
SplunkwebConnector.instances = [];
SplunkwebConnector.sharedPresets = [];


if (_splunk_splunk_utils_config__WEBPACK_IMPORTED_MODULE_6__["isAvailable"]) {
    Object(_splunk_time_range_utils_presets__WEBPACK_IMPORTED_MODULE_4__["getPresets"])().then(function (data) {
        data.forEach(function (preset) {
            return SplunkwebConnector.sharedPresets.push(preset);
        });
        SplunkwebConnector.instances.forEach(function (instance) {
            return instance.updatePresets();
        });
    }).catch(function () {
        // eslint-disable-next-line no-console, max-len
        console.log('Time presets could not be loaded from splunkweb.');
    });
}

/* harmony default export */ __webpack_exports__["default"] = (SplunkwebConnector);

/***/ })
/******/ ]);