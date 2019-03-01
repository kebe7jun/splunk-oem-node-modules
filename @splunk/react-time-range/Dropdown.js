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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Button");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-time-range/Dialog");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Dropdown");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _splunk_time_range_utils_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _splunk_time_range_utils_time__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_splunk_time_range_utils_time__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _splunk_react_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _splunk_react_ui_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _splunk_react_ui_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _splunk_react_ui_Dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_Dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _splunk_react_time_range_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _splunk_react_time_range_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_time_range_Dialog__WEBPACK_IMPORTED_MODULE_6__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var TimeRange = function (_Component) {
    _inherits(TimeRange, _Component);

    function TimeRange(props) {
        var _ref;

        _classCallCheck(this, TimeRange);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = TimeRange.__proto__ || Object.getPrototypeOf(TimeRange)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleChange = function (e, data) {
            _this.setState({ open: false });
            _this.props.onChange(e, data);
            _this.focus();
        };

        _this.handleRequestClose = function (_ref2) {
            var reason = _ref2.reason;

            if (reason !== 'contentClick') {
                _this.setState({
                    open: false
                });
            }
        };

        _this.handleRequestOpen = function () {
            _this.setState({
                open: true
            });
        };

        _this.handleDropdownMount = function (component) {
            _this.dropdown = component;
        };

        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(TimeRange, [{
        key: 'focus',
        value: function focus() {
            if (this.dropdown) {
                this.dropdown.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                appearance = _props.appearance,
                append = _props.append,
                describedBy = _props.describedBy,
                disabled = _props.disabled,
                earliest = _props.earliest,
                inline = _props.inline,
                labelMaxChars = _props.labelMaxChars,
                latest = _props.latest,
                prepend = _props.prepend,
                presets = _props.presets;
            var open = this.state.open;


            var label = Object(_splunk_time_range_utils_time__WEBPACK_IMPORTED_MODULE_3__["createRangeLabel"])(earliest, latest, { presets: presets, maxChars: labelMaxChars });

            var toggle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
                appearance: appearance,
                disabled: disabled,
                label: label,
                append: append,
                prepend: prepend,
                inline: inline,
                isMenu: true
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _splunk_react_ui_Dropdown__WEBPACK_IMPORTED_MODULE_5___default.a,
                _extends({
                    inline: inline,
                    open: open,
                    retainFocus: true,
                    toggle: toggle,
                    closeReasons: ['clickAway', 'escapeKey', 'offScreen', 'toggleClick'],
                    onRequestClose: this.handleRequestClose,
                    onRequestOpen: this.handleRequestOpen,
                    'aria-describedby': describedBy,
                    'data-test': 'time-range-dropdown',
                    'data-test-earliest': earliest,
                    'data-test-latest': latest,
                    ref: this.handleDropdownMount
                }, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(this.props, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["keys"])(TimeRange.propTypes))),
                open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_time_range_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
                    onChange: this.handleChange,
                    style: { width: 640 }
                }, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(this.props, 'appearance', 'disabled', 'prepend', 'append', 'describedBy', 'onChange', 'labelMaxChars', 'data-test')))
            );
        }
    }]);

    return TimeRange;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TimeRange.propTypes = {
    /**
     * An array of types of input allowed in the Advanced panel.
     * Defaults to ['realTime', 'relative', 'allTime', 'dateTime'].
     */
    advancedInputTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(_splunk_react_time_range_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a.possibleAdvancedInputTypes)),
    /** Change the style of the toggle. */
    appearance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['default', 'primary', 'pill']),
    /**
     * Remove rounding from the left side of the toggle.
     */
    append: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    /**
     * The id of the description. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's help component.
     */
    describedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    /** Prevents user from clicking the toggle. */
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    /**
     * A URL for the documentation link in the Advanced Panel.
     */
    documentationURL: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    earliest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    /**
     * An array of types of input allowed in the forms. Removing a value will disable
     * the related panel. Defaults to ['realTime', 'relative', 'date', 'dateTime'].
     */
    formInputTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(_splunk_react_time_range_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a.possibleFormInputTypes)),
    /** Make the control an inline block with variable width. */
    inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    latest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    /** If the generated label is too long, it will abbreviate
     * to a more generic form, such as 'Between Date-times' instead of
     * 'Feb 17, 2017 6:00 AM to Feb 18, 2017 12:20 AM'. `Infinity` and `0` allow labels of any
     * length. The label may truncate with ellipsis regardless if there is insufficient room
     * for the label. */
    labelMaxChars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    /**
     * A callback to receive the change events.
     * If value is set, this callback is required. This must set the value prop to retain the
     * change. The callback is passed an object with three properties: 'earliest' and 'latest'.
     */
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    /**
     * A callback to passed a time string. This function must update the parseEarliest prop. This
     * function is required when not using the SplunkwebConnector.
     */
    onRequestParseEarliest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    /**
     * A callback to passed a time string. This function must update the parseLatest prop. This
     * function is required when not using the SplunkwebConnector.
     */
    onRequestParseLatest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    /**
     * The parseEarliest is used to preview earliest times and validate form data. The `time`
     * value must be the time string passed to the onRequestParseEarliest function. Example
     * return format:
     * ```
     * {
     *     error: null,
     *     iso: '2017-05-08T00:00:00.000',
     *     time: '-7d'
     * }
     * ```
     */
    parseEarliest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        iso: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        time: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    /**
     * The parseLatest is used to preview latest times and validate form data. The `time`
     * value must be the time string passed to the onRequestParseLatest function. Example
     * return format:
     * ```
     * {
     *     error: null,
     *     iso: '2017-05-08T00:00:00.000',
     *     time: '-7d'
     * }
     * ```
     */
    parseLatest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        iso: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        time: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    /**
     * A definition of the presets. The time util can be used to inpect and filter certain
     * types of time ranges before setting this prop. This property is required to display the
     * presets panel.
     */
    presets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        earliest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
        latest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })),
    /**
     * Remove rounding from the right side of the toggle.
     */
    prepend: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
TimeRange.defaultProps = {
    appearance: 'default',
    advancedInputTypes: _splunk_react_time_range_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a.possibleAdvancedInputTypes,
    disabled: false,
    inline: true,
    formInputTypes: _splunk_react_time_range_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a.possibleFormInputTypes,
    labelMaxChars: 30,
    onChange: lodash__WEBPACK_IMPORTED_MODULE_2__["noop"]
};


/* harmony default export */ __webpack_exports__["default"] = (TimeRange);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@splunk/time-range-utils/time");

/***/ })

/******/ });