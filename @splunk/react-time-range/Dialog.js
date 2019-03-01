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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/i18n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@splunk/time-range-utils/time");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Select");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@splunk/moment");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/ControlGroup");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-time-range/themes");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Accordion");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Button");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Message");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Date");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/keyboard");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/ClassNamePropCheck");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Text");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/RadioList");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@splunk/splunk-utils/config");

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Link");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/StaticContent");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Number");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@splunk/moment"
var moment_ = __webpack_require__(6);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment_);

// EXTERNAL MODULE: external "@splunk/time-range-utils/time"
var time_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@splunk/splunk-utils/config"
var config_ = __webpack_require__(18);

// EXTERNAL MODULE: external "@splunk/react-ui/Accordion"
var Accordion_ = __webpack_require__(9);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);

// EXTERNAL MODULE: external "@splunk/react-ui/ClassNamePropCheck"
var ClassNamePropCheck_ = __webpack_require__(15);
var ClassNamePropCheck_default = /*#__PURE__*/__webpack_require__.n(ClassNamePropCheck_);

// EXTERNAL MODULE: external "@splunk/ui-utils/i18n"
var i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@splunk/ui-utils/keyboard"
var keyboard_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@splunk/react-ui/Button"
var Button_ = __webpack_require__(10);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@splunk/react-ui/ControlGroup"
var ControlGroup_ = __webpack_require__(7);
var ControlGroup_default = /*#__PURE__*/__webpack_require__.n(ControlGroup_);

// EXTERNAL MODULE: external "@splunk/react-ui/Link"
var Link_ = __webpack_require__(20);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@splunk/react-ui/Message"
var Message_ = __webpack_require__(11);
var Message_default = /*#__PURE__*/__webpack_require__.n(Message_);

// EXTERNAL MODULE: external "@splunk/react-ui/Text"
var Text_ = __webpack_require__(16);
var Text_default = /*#__PURE__*/__webpack_require__.n(Text_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(14);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@splunk/react-time-range/themes"
var themes_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/Dialog/AbsoluteValueStyles.js
var _templateObject = _taggedTemplateLiteral(['\n    min-height: ', ';\n    min-width: 100px;\n    border-radius: ', ';\n    background-color: ', ';\n    font-size: ', ';\n    margin-top: 5px;\n    padding: 0 ', ';\n    color: ', ';\n'], ['\n    min-height: ', ';\n    min-width: 100px;\n    border-radius: ', ';\n    background-color: ', ';\n    font-size: ', ';\n    margin-top: 5px;\n    padding: 0 ', ';\n    color: ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Styled = external_styled_components_default.a.div(_templateObject, Object(themes_["variable"])('lineHeight'), Object(themes_["variable"])('borderRadius'), Object(themes_["variable"])('AbsoluteValue', 'backgroundColor'), Object(themes_["variable"])('fontSizeSmall'), Object(themes_["variable"])('spacingQuarter'), Object(themes_["variable"])('textGray'));
// CONCATENATED MODULE: ./src/Dialog/AbsoluteValue.jsx
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var propTypes = {
    error: external_prop_types_default.a.object,
    displayValue: external_prop_types_default.a.string // last parsed displayValue
};

function AbsoluteValue(props) {
    var error = props.error,
        displayValue = props.displayValue,
        rest = _objectWithoutProperties(props, ['error', 'displayValue']);

    return external_react_default.a.createElement(
        Styled,
        _extends({ 'data-test': 'absolute-value' }, rest),
        error && Object(i18n_["_"])('Invalid Value'),
        !error && displayValue
    );
}

AbsoluteValue.propTypes = propTypes;
/* harmony default export */ var Dialog_AbsoluteValue = (AbsoluteValue);
// CONCATENATED MODULE: ./src/Dialog/Styles.js
var Styles_templateObject = Styles_taggedTemplateLiteral(['\n    padding: 0 ', ';\n'], ['\n    padding: 0 ', ';\n']),
    _templateObject2 = Styles_taggedTemplateLiteral(['\n    display: flex;\n    padding: ', ' ', ' 0;\n\n    ', ' + & {\n        padding-top: 0;\n    }\n'], ['\n    display: flex;\n    padding: ', ' ', ' 0;\n\n    ', ' + & {\n        padding-top: 0;\n    }\n']),
    _templateObject3 = Styles_taggedTemplateLiteral(['\n    text-align: right;\n    padding: 0 ', ' ', ';\n\n    & > button {\n        min-width: 100px;\n    }\n'], ['\n    text-align: right;\n    padding: 0 ', ' ', ';\n\n    & > button {\n        min-width: 100px;\n    }\n']),
    _templateObject4 = Styles_taggedTemplateLiteral(['\n    display: flex;\n    margin-bottom: ', ';\n'], ['\n    display: flex;\n    margin-bottom: ', ';\n']);

function Styles_taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledError = external_styled_components_default.a.div(Styles_templateObject, Object(themes_["variable"])('spacing'));

var StyledCGWrapper = external_styled_components_default.a.div(_templateObject2, Object(themes_["variable"])('spacingHalf'), Object(themes_["variable"])('spacing'), /* sc-sel */StyledError);

var StyledApplyContainer = external_styled_components_default.a.div(_templateObject3, Object(themes_["variable"])('spacing'), Object(themes_["variable"])('spacing'));

var StyledFromControl = external_styled_components_default.a.div(_templateObject4, Object(themes_["variable"])('spacingHalf'));
// CONCATENATED MODULE: ./src/Dialog/Advanced.jsx
var Advanced_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var Advanced_Advanced = function (_Component) {
    _inherits(Advanced, _Component);

    _createClass(Advanced, null, [{
        key: 'parseIsValid',
        value: function parseIsValid(stateValue, parseValue, defaultValue) {
            var stateValueCleaned = stateValue.trim() || defaultValue;
            return Object(time_["removeRealTime"])(stateValueCleaned) === parseValue.trim();
        }
    }]);

    function Advanced(props) {
        var _ref;

        _classCallCheck(this, Advanced);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Advanced.__proto__ || Object.getPrototypeOf(Advanced)).call.apply(_ref, [this, props].concat(rest)));

        Advanced_initialiseProps.call(_this);

        _this.state = {
            earliest: props.earliest,
            latest: props.latest,
            errorMessage: null
        };

        if (props.open) {
            props.onRequestParseEarliest(props.earliest.trim() ? props.earliest : '0', props.panelId);
            props.onRequestParseLatest(props.latest.trim() ? props.latest : 'now', props.panelId);
        }
        return _this;
    }

    _createClass(Advanced, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref2) {
            var earliest = _ref2.earliest,
                latest = _ref2.latest,
                open = _ref2.open,
                onRequestParseEarliest = _ref2.onRequestParseEarliest,
                onRequestParseLatest = _ref2.onRequestParseLatest,
                panelId = _ref2.panelId;

            if (earliest !== this.props.earliest) {
                this.setState({
                    earliest: earliest,
                    errorMessage: null
                });

                // get a new earliest while open
                if (open) {
                    onRequestParseEarliest(earliest, panelId);
                }
            }

            if (latest !== this.props.latest) {
                this.setState({
                    latest: latest,
                    errorMessage: null
                });

                // get a new latest while open
                if (open && this.props.open) {
                    onRequestParseLatest(latest, panelId);
                }
            }

            if (open && !this.props.open) {
                if (this.state.earliest !== earliest && Object(time_["isValidTime"])(this.state.earliest)) {
                    onRequestParseEarliest(this.state.earliest, panelId);
                } else {
                    onRequestParseEarliest(earliest, panelId);
                }

                if (this.state.latest !== latest && Object(time_["isValidTime"])(this.state.latest)) {
                    onRequestParseLatest(this.state.latest, panelId);
                } else {
                    onRequestParseLatest(latest, panelId);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                documentationURL = _props.documentationURL,
                open = _props.open,
                panelId = _props.panelId,
                parseEarliest = _props.parseEarliest,
                parseLatest = _props.parseLatest;
            var _state = this.state,
                earliest = _state.earliest,
                latest = _state.latest,
                errorMessage = _state.errorMessage;

            var earliestParseValid = parseEarliest && Advanced.parseIsValid(earliest, parseEarliest.time, '0');
            var latestParseValid = parseLatest && Advanced.parseIsValid(latest, parseLatest.time, 'now');
            var inputValid = (Object(time_["isValidTime"])(earliest) && parseEarliest ? parseEarliest.error === null : false) && (Object(time_["isValidTime"])(latest) && parseLatest ? parseLatest.error === null : false);

            return external_react_default.a.createElement(
                Accordion_default.a.Panel,
                Advanced_extends({
                    title: Object(i18n_["_"])('Advanced'),
                    open: open,
                    panelId: panelId
                }, Object(external_lodash_["omit"])(this.props, Object(external_lodash_["keys"])(Advanced.propTypes))),
                errorMessage && external_react_default.a.createElement(
                    Message_default.a,
                    { type: 'error', 'data-test': 'error-message', style: { margin: '0 20px' } },
                    errorMessage
                ),
                external_react_default.a.createElement(
                    StyledCGWrapper,
                    null,
                    external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: Object(i18n_["_"])('Earliest:'),
                            labelPosition: 'top',
                            style: { flex: 1, paddingRight: 10 }
                        },
                        external_react_default.a.createElement(Text_default.a, {
                            value: earliest,
                            'data-test': 'earliest',
                            onChange: this.handleEarliestChange,
                            onKeyDown: inputValid ? this.handleKeydown : undefined
                        }),
                        external_react_default.a.createElement(Dialog_AbsoluteValue, {
                            'data-test': 'earliest-absolute-value',
                            error: earliestParseValid ? parseEarliest.error : new Error('invalid'),
                            displayValue: earliestParseValid ? parseEarliest.displayValue : undefined
                        })
                    ),
                    external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: Object(i18n_["_"])('Latest:'),
                            labelPosition: 'top',
                            style: { flex: 1 }
                        },
                        external_react_default.a.createElement(Text_default.a, {
                            value: latest,
                            'data-test': 'latest',
                            onChange: this.handleLatestChange,
                            onKeyDown: inputValid ? this.handleKeydown : undefined
                        }),
                        external_react_default.a.createElement(Dialog_AbsoluteValue, {
                            'data-test': 'latest-absolute-value',
                            error: latestParseValid ? parseLatest.error : new Error('invalid'),
                            displayValue: latestParseValid ? parseLatest.displayValue : undefined
                        })
                    )
                ),
                external_react_default.a.createElement(
                    StyledApplyContainer,
                    null,
                    !!documentationURL && external_react_default.a.createElement(
                        Link_default.a,
                        { to: documentationURL, style: { marginRight: 20 }, openInNewContext: true },
                        Object(i18n_["_"])('Documentation')
                    ),
                    external_react_default.a.createElement(Button_default.a, {
                        disabled: !inputValid,
                        label: Object(i18n_["_"])('Apply'),
                        onClick: this.handleApply,
                        'data-test': 'apply'
                    })
                )
            );
        }
    }]);

    return Advanced;
}(external_react_["Component"]);

Advanced_Advanced.propTypes = {
    documentationURL: external_prop_types_default.a.string,
    earliest: external_prop_types_default.a.string.isRequired,
    latest: external_prop_types_default.a.string.isRequired,
    onChange: external_prop_types_default.a.func,
    onRequestParseEarliest: external_prop_types_default.a.func,
    onRequestParseLatest: external_prop_types_default.a.func,
    open: external_prop_types_default.a.bool,
    panelId: external_prop_types_default.a.string,
    parseEarliest: external_prop_types_default.a.object,
    parseLatest: external_prop_types_default.a.object,
    inputTypes: external_prop_types_default.a.arrayOf(external_prop_types_default.a.string).isRequired
};
Advanced_Advanced.defaultProps = {
    onChange: external_lodash_["noop"],
    open: false
};

var Advanced_initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleEarliestChange = function (e, _ref3) {
        var value = _ref3.value;

        _this2.setState(function (prevState, props) {
            var val = value.trim();
            var isValid = Object(time_["isValidTime"])(val);
            if (prevState.earliest.trim() !== val && isValid) {
                props.onRequestParseEarliest(val || '0', props.panelId);
            } else if (!isValid) {
                // if user input invalid value, we need to recover parser value
                // so that switch to other panel will not cause issue.
                props.onRequestParseEarliest(props.earliest, props.panelId);
            }
            return { earliest: value };
        });
    };

    this.handleLatestChange = function (e, _ref4) {
        var value = _ref4.value;

        _this2.setState(function (prevState, props) {
            var val = value.trim();
            var isValid = Object(time_["isValidTime"])(val);
            if (prevState.latest.trim() !== val && isValid) {
                props.onRequestParseLatest(val || 'now', props.panelId);
            } else if (!isValid) {
                props.onRequestParseLatest(props.latest, props.panelId);
            }
            return { latest: value };
        });
    };

    this.handleKeydown = function (e) {
        if (Object(keyboard_["keycode"])(e) === 'enter') {
            _this2.handleApply(e);
        }
    };

    this.handleApply = function (e) {
        var _state2 = _this2.state,
            earliest = _state2.earliest,
            latest = _state2.latest;
        var _props2 = _this2.props,
            inputTypes = _props2.inputTypes,
            parseEarliest = _props2.parseEarliest,
            parseLatest = _props2.parseLatest;


        var errorMessage = '';

        var ASTEarliest = Object(time_["parseTimeString"])(earliest);
        var ASTLatest = Object(time_["parseTimeString"])(latest);
        var absoluteTypes = ['iso', 'epoch'];

        if (!ASTEarliest.isFullyParsed && earliest || moment_default()(parseEarliest.iso).valueOf() > moment_default()().valueOf()) {
            errorMessage = Object(i18n_["_"])('The earliest time is invalid.');
        } else if (!ASTLatest.isFullyParsed && latest) {
            errorMessage = Object(i18n_["_"])('The latest time is invalid.');
        } else if (earliest && earliest === latest) {
            errorMessage = Object(i18n_["_"])('You cannot have equivalent times.');
        } else if (!Object(external_lodash_["includes"])(inputTypes, 'relative') && ASTEarliest.type !== 'realTime' && !Object(external_lodash_["includes"])(absoluteTypes, ASTLatest.type)) {
            errorMessage = Object(i18n_["_"])('Relative searches are not supported.');
        } else if (!Object(external_lodash_["includes"])(inputTypes, 'relative') && ASTLatest.type !== 'realTime' && ASTLatest.type !== 'epoch' && ASTLatest.type !== 'iso') {
            errorMessage = Object(i18n_["_"])('Relative searches are not supported.');
        } else if (!Object(external_lodash_["includes"])(inputTypes, 'realTime') && (ASTLatest.type === 'realTime' || ASTEarliest.type === 'realTime')) {
            errorMessage = Object(i18n_["_"])('Real-time searches are not supported.');
        } else if ((ASTLatest.type === 'realTime' || ASTEarliest.type === 'realTime') && ASTLatest.type !== ASTEarliest.type) {
            errorMessage = Object(i18n_["_"])('You must set a rt value for both earliest and latest time.');
        } else if (!Object(external_lodash_["includes"])(inputTypes, 'dateTime') && (Object(external_lodash_["includes"])(absoluteTypes, ASTLatest.type) || Object(external_lodash_["includes"])(absoluteTypes, ASTEarliest.type))) {
            errorMessage = Object(i18n_["_"])('Epoch and ISO times are not supported.');
        } else if (!Object(external_lodash_["includes"])(inputTypes, 'allTime') && Object(time_["isEarliestEmpty"])(earliest) && Object(time_["isLatestNow"])(latest)) {
            errorMessage = Object(i18n_["_"])('All-time searches are not supported.');
        } else if (parseEarliest.error) {
            errorMessage = Object(i18n_["_"])('Earliest could not be validated.');
        } else if (parseLatest.error) {
            errorMessage = Object(i18n_["_"])('Latest could not be validated.');
        } else if (moment_default()(parseEarliest.iso).valueOf() >= moment_default()(parseLatest.iso).valueOf()) {
            errorMessage = Object(i18n_["_"])('Earliest must be before latest.');
        }

        _this2.setState({ errorMessage: errorMessage });

        if (!errorMessage) {
            _this2.props.onChange(e, { earliest: earliest, latest: latest });
        }
    };
};

/* harmony default export */ var Dialog_Advanced = (Advanced_Advanced);
// EXTERNAL MODULE: external "@splunk/react-ui/Date"
var Date_ = __webpack_require__(12);
var Date_default = /*#__PURE__*/__webpack_require__.n(Date_);

// EXTERNAL MODULE: external "@splunk/react-ui/Select"
var Select_ = __webpack_require__(5);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@splunk/react-ui/StaticContent"
var StaticContent_ = __webpack_require__(21);
var StaticContent_default = /*#__PURE__*/__webpack_require__.n(StaticContent_);

// CONCATENATED MODULE: ./src/Dialog/DateRange.jsx
var DateRange_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DateRange_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function DateRange_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DateRange_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DateRange_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var DateRange_DateRange = function (_Component) {
    DateRange_inherits(DateRange, _Component);

    function DateRange(props) {
        var _ref;

        DateRange_classCallCheck(this, DateRange);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = DateRange_possibleConstructorReturn(this, (_ref = DateRange.__proto__ || Object.getPrototypeOf(DateRange)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleTypeChange = function (e, _ref2) {
            var value = _ref2.value;

            _this.setState({
                type: value
            });
        };

        _this.handleEarliestChange = function (e, _ref3) {
            var value = _ref3.value;

            _this.setState({
                earliest: value
            });
        };

        _this.handleLatestChange = function (e, _ref4) {
            var value = _ref4.value;

            _this.setState({
                latest: value
            });
        };

        _this.handleKeyDown = function (e) {
            if (Object(keyboard_["keycode"])(e) === 'enter') {
                // must allow the enter key to process change before applying.
                Object(external_lodash_["defer"])(function () {
                    return _this.handleApply();
                });
            }
        };

        _this.handleApply = function (e) {
            var _this$state = _this.state,
                earliest = _this$state.earliest,
                latest = _this$state.latest,
                type = _this$state.type;

            // in 'between' mode latest is inclusive (also see convertPropsToState)

            var latestAdjusted = type === 'between' ? moment_default()(latest).add({ day: 1 }).format(Date_default.a.momentFormat) : latest;

            var errorMessage = '';

            if (type === 'between' && moment_default()(earliest).valueOf() >= moment_default()(latestAdjusted).valueOf()) {
                errorMessage = Object(i18n_["_"])('Earliest must be before latest.');
            }

            _this.setState({ errorMessage: errorMessage });

            if (!errorMessage) {
                _this.props.onChange(e, {
                    earliest: type === 'before' ? '' : earliest + 'T00:00:00.000',
                    latest: type === 'since' ? '' : latestAdjusted + 'T00:00:00.000'
                });
            }
        };

        _this.state = _this.convertPropsToState(props.earliest, props.latest);
        return _this;
    }

    DateRange_createClass(DateRange, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref5) {
            var earliest = _ref5.earliest,
                latest = _ref5.latest;

            this.setState(this.convertPropsToState(earliest, latest));
        }
    }, {
        key: 'convertPropsToState',
        value: function convertPropsToState(earliest, latest) {
            var state = {
                earliest: earliest ? moment_default()(earliest).format(Date_default.a.momentFormat) : moment_default.a.unix(0).format(Date_default.a.momentFormat),
                latest: moment_default()(latest || undefined).format(Date_default.a.momentFormat),
                errorMessage: earliest !== this.props.earliest || latest !== this.props.latest ? '' : undefined
            };

            if (earliest && (!latest || latest === 'now')) {
                state.type = 'since';
            } else if (latest && (!earliest || earliest === '0')) {
                state.type = 'before';
            } else {
                state.type = 'between';
                // in 'between' mode latest is inclusive (see latestAdjusted in handleApply)
                if (Object(time_["isWholeDay"])(latest)) {
                    state.latest = moment_default()(latest).subtract({ days: 1 }).format(Date_default.a.momentFormat);
                }
            }

            return state;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                earliest = _state.earliest,
                latest = _state.latest,
                errorMessage = _state.errorMessage,
                type = _state.type;
            var locale = this.props.locale;

            /* Due to IE11 bug (SUI-909) the Type Select needs to grow slightly,
             * so it takes 1% of the extra space. */

            var typeStyles = { flex: '0 1 auto', marginRight: 10 };
            var dateStyles = { flex: 1 };

            return external_react_default.a.createElement(
                Accordion_default.a.Panel,
                DateRange_extends({
                    title: Object(i18n_["_"])('Date Range')
                }, Object(external_lodash_["omit"])(this.props, Object(external_lodash_["keys"])(DateRange.propTypes))),
                errorMessage && external_react_default.a.createElement(
                    Message_default.a,
                    { type: 'error', 'data-test': 'error-message', style: { margin: '0 20px' } },
                    errorMessage
                ),
                external_react_default.a.createElement(
                    StyledCGWrapper,
                    null,
                    external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: '',
                            labelPosition: 'top',
                            style: typeStyles
                        },
                        external_react_default.a.createElement(
                            Select_default.a,
                            {
                                value: type,
                                'data-test': 'range-type',
                                onChange: this.handleTypeChange
                            },
                            external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Between'), value: 'between' }),
                            external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Before'), value: 'before' }),
                            external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Since'), value: 'since' })
                        )
                    ),
                    external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: '',
                            labelPosition: 'top',
                            help: '00:00:00',
                            style: dateStyles
                        },
                        external_react_default.a.createElement(Date_default.a, {
                            value: type !== 'before' ? earliest : latest,
                            onChange: type !== 'before' ? this.handleEarliestChange : this.handleLatestChange,
                            onKeyDown: this.handleKeyDown,
                            inline: false,
                            locale: locale,
                            style: dateStyles,
                            'data-test': type !== 'before' ? 'earliest-date' : 'latest-date'
                        })
                    ),
                    type !== 'before' && external_react_default.a.createElement(
                        ControlGroup_default.a,
                        { controlsLayout: 'none', label: '', labelPosition: 'top' },
                        external_react_default.a.createElement(
                            StaticContent_default.a,
                            { style: { marginLeft: type === 'between' ? 0 : 10 } },
                            type === 'between' ? Object(i18n_["_"])('and') : Object(i18n_["_"])('until now')
                        )
                    ),
                    type === 'between' && external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: '',
                            labelPosition: 'top',
                            help: '24:00:00',
                            style: dateStyles
                        },
                        external_react_default.a.createElement(Date_default.a, {
                            value: latest,
                            onChange: this.handleLatestChange,
                            inline: false,
                            locale: locale,
                            onKeyDown: this.handleKeyDown,
                            'data-test': 'latest-date'
                        })
                    )
                ),
                external_react_default.a.createElement(
                    StyledApplyContainer,
                    null,
                    external_react_default.a.createElement(Button_default.a, { label: Object(i18n_["_"])('Apply'), 'data-test': 'apply', onClick: this.handleApply })
                )
            );
        }
    }]);

    return DateRange;
}(external_react_["Component"]);

DateRange_DateRange.propTypes = {
    earliest: external_prop_types_default.a.string.isRequired,
    latest: external_prop_types_default.a.string.isRequired,
    locale: external_prop_types_default.a.string,
    onChange: external_prop_types_default.a.func
};
DateRange_DateRange.defaultProps = {
    placeholder: 'Select...'
};


/* harmony default export */ var Dialog_DateRange = (DateRange_DateRange);
// CONCATENATED MODULE: ./src/Dialog/DateTimeRange.jsx
var DateTimeRange_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DateTimeRange_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function DateTimeRange_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DateTimeRange_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DateTimeRange_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var DateTimeRange_DateTimeRange = function (_Component) {
    DateTimeRange_inherits(DateTimeRange, _Component);

    DateTimeRange_createClass(DateTimeRange, null, [{
        key: 'inferType',
        value: function inferType(earliest, latest) {
            if (earliest && !latest) {
                return 'since';
            }

            if (latest && !earliest) {
                return 'before';
            }

            return 'between';
        }
    }, {
        key: 'validateTime',


        // Validate the string is formatted correctly. Does not validate the values.
        value: function validateTime(time) {
            return time.match(/^\d\d:\d\d(:\d\d|:\d\d\.\d?\d?\d?)?$/);
        }
    }]);

    function DateTimeRange(props) {
        var _ref;

        DateTimeRange_classCallCheck(this, DateTimeRange);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = DateTimeRange_possibleConstructorReturn(this, (_ref = DateTimeRange.__proto__ || Object.getPrototypeOf(DateTimeRange)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleTypeChange = function (e, _ref2) {
            var value = _ref2.value;

            _this.setState({
                type: value
            });
        };

        _this.handleEarliestDateChange = function (e, _ref3) {
            var value = _ref3.value;

            _this.setState({
                earliestDate: value
            });
        };

        _this.handleEarliestTimeChange = function (e, _ref4) {
            var value = _ref4.value;

            _this.setState({
                earliestTime: value
            });
        };

        _this.handleLatestDateChange = function (e, _ref5) {
            var value = _ref5.value;

            _this.setState({
                latestDate: value
            });
        };

        _this.handleLatestTimeChange = function (e, _ref6) {
            var value = _ref6.value;

            _this.setState({
                latestTime: value
            });
        };

        _this.handleTimeKeyDown = function (e) {
            if (Object(keyboard_["keycode"])(e) === 'enter') {
                _this.handleApply(e);
            }
        };

        _this.handleDateKeyDown = function (e) {
            if (Object(keyboard_["keycode"])(e) === 'enter') {
                // must allow the enter key to process change before applying.
                Object(external_lodash_["defer"])(function () {
                    return _this.handleApply();
                });
            }
        };

        _this.handleApply = function (e) {
            var _this$state = _this.state,
                earliestDate = _this$state.earliestDate,
                earliestTime = _this$state.earliestTime,
                latestDate = _this$state.latestDate,
                latestTime = _this$state.latestTime,
                type = _this$state.type;


            var errorMessage = '';

            var earliest = type === 'before' ? '' : earliestDate + 'T' + earliestTime;
            var latest = type === 'since' ? '' : latestDate + 'T' + latestTime;

            /* validateTime() checks the string is formatted correctly for splunkd.
             * moment() validates that it is a valid time, such as not having 61 minutes.
             */
            if (type !== 'before' && !(DateTimeRange.validateTime(earliestTime) && moment_default()(earliest).isValid())) {
                errorMessage = Object(i18n_["_"])('Earliest time is invalid.');
            } else if (type !== 'since' && !(DateTimeRange.validateTime(latestTime) && moment_default()(latest).isValid())) {
                errorMessage = Object(i18n_["_"])('Latest time is invalid.');
            } else if (type === 'between' && moment_default()(earliest).valueOf() >= moment_default()(latest).valueOf()) {
                errorMessage = Object(i18n_["_"])('Earliest must be before latest.');
            }

            _this.setState({ errorMessage: errorMessage });

            if (!errorMessage) {
                _this.props.onChange(e, {
                    earliest: earliest,
                    latest: latest
                });
            }
        };

        _this.state = _this.convertPropsToState(props.earliest, props.latest);
        return _this;
    }

    DateTimeRange_createClass(DateTimeRange, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref7) {
            var earliest = _ref7.earliest,
                latest = _ref7.latest;

            this.setState(this.convertPropsToState(earliest, latest));
        }
    }, {
        key: 'convertPropsToState',
        value: function convertPropsToState(earliest, latest) {
            var earliestDateTime = earliest ? moment_default()(earliest) : moment_default.a.unix(0);
            var latestDateTime = moment_default()(latest || undefined);

            var state = {
                earliestDate: earliestDateTime.format(Date_default.a.momentFormat),
                earliestTime: earliestDateTime.format(DateTimeRange.timeFormat),
                latestDate: latestDateTime.format(Date_default.a.momentFormat),
                latestTime: latestDateTime.format(DateTimeRange.timeFormat),
                type: DateTimeRange.inferType(earliest, latest)
            };

            if (this.state && (earliest !== this.state.earliestDate + ' ' + this.state.earliestTime || latest !== this.state.latestDate + ' ' + this.state.latestTime)) {
                state.hasError = false;
            }

            state.type = DateTimeRange.inferType(earliest, latest);

            return state;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                earliestDate = _state.earliestDate,
                earliestTime = _state.earliestTime,
                errorMessage = _state.errorMessage,
                latestDate = _state.latestDate,
                latestTime = _state.latestTime,
                type = _state.type;
            var locale = this.props.locale;

            /* Due to IE11 bug (SUI-909) the Type Select needs to grow slightly,
             * so it takes 1% of the extra space. */

            var typeStyles = { flex: '0 1 auto', marginRight: 10 };
            var dateStyles = { flex: '0 1 110px', marginRight: 10 };
            var latestTimeStyles = { flex: 1 };
            var earliestTimeStyles = { flex: 1 };

            return external_react_default.a.createElement(
                Accordion_default.a.Panel,
                DateTimeRange_extends({
                    title: Object(i18n_["_"])('Date & Time Range')
                }, Object(external_lodash_["omit"])(this.props, Object(external_lodash_["keys"])(DateTimeRange.propTypes))),
                errorMessage && external_react_default.a.createElement(
                    Message_default.a,
                    { type: 'error', 'data-test': 'error-message', style: { margin: '0 20px' } },
                    errorMessage
                ),
                external_react_default.a.createElement(
                    StyledCGWrapper,
                    null,
                    external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: '',
                            'data-role': 'rangetype',
                            labelPosition: 'top',
                            style: typeStyles
                        },
                        external_react_default.a.createElement(
                            Select_default.a,
                            {
                                value: type,
                                'data-test': 'range-type',
                                onChange: this.handleTypeChange
                            },
                            external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Between'), value: 'between' }),
                            external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Before'), value: 'before' }),
                            external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Since'), value: 'since' })
                        )
                    ),
                    type !== 'before' && external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: '',
                            labelPosition: 'top',
                            style: dateStyles
                        },
                        external_react_default.a.createElement(Date_default.a, {
                            value: earliestDate,
                            onChange: this.handleEarliestDateChange,
                            onKeyDown: this.handleDateKeyDown,
                            inline: false,
                            locale: locale,
                            'data-test': 'earliest-date'
                        })
                    ),
                    type !== 'before' && external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: '',
                            labelPosition: 'top',
                            help: 'HH:MM:SS.SSS',
                            style: earliestTimeStyles
                        },
                        external_react_default.a.createElement(Text_default.a, {
                            value: earliestTime,
                            onChange: this.handleEarliestTimeChange,
                            onKeyDown: this.handleTimeKeyDown,
                            'data-test': 'earliest-time'
                        })
                    ),
                    type !== 'before' && external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: '',
                            labelPosition: 'top',
                            inline: false
                        },
                        external_react_default.a.createElement(
                            StaticContent_default.a,
                            { style: { marginLeft: type === 'between' ? 0 : 10 } },
                            type === 'between' ? Object(i18n_["_"])('and') : Object(i18n_["_"])('until now')
                        )
                    ),
                    type !== 'since' && external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: '',
                            labelPosition: 'top',
                            style: dateStyles
                        },
                        external_react_default.a.createElement(Date_default.a, {
                            value: latestDate,
                            onChange: this.handleLatestDateChange,
                            onKeyDown: this.handleDateKeyDown,
                            inline: false,
                            locale: locale,
                            'data-test': 'latest-date'
                        })
                    ),
                    type !== 'since' && external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: '',
                            labelPosition: 'top',
                            help: Object(i18n_["_"])('HH:MM:SS.SSS'),
                            style: latestTimeStyles
                        },
                        external_react_default.a.createElement(Text_default.a, {
                            value: latestTime,
                            onChange: this.handleLatestTimeChange,
                            onKeyDown: this.handleTimeKeyDown,
                            'data-test': 'latest-time'
                        })
                    )
                ),
                external_react_default.a.createElement(
                    StyledApplyContainer,
                    null,
                    external_react_default.a.createElement(Button_default.a, { label: Object(i18n_["_"])('Apply'), 'data-test': 'apply', onClick: this.handleApply })
                )
            );
        }
    }]);

    return DateTimeRange;
}(external_react_["Component"]);

DateTimeRange_DateTimeRange.propTypes = {
    earliest: external_prop_types_default.a.string.isRequired,
    latest: external_prop_types_default.a.string.isRequired,
    locale: external_prop_types_default.a.string,
    onChange: external_prop_types_default.a.func,
    moment: external_prop_types_default.a.func
};
DateTimeRange_DateTimeRange.defaultProps = {
    placeholder: 'Select...'
};
DateTimeRange_DateTimeRange.timeFormat = 'HH:mm:ss.SSS';


/* harmony default export */ var Dialog_DateTimeRange = (DateTimeRange_DateTimeRange);
// CONCATENATED MODULE: ./src/Dialog/PresetLink.jsx
var PresetLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var PresetLink_propTypes = {
    children: external_prop_types_default.a.string.isRequired,
    /** @private */
    className: ClassNamePropCheck_default.a,
    earliest: external_prop_types_default.a.string.isRequired,
    latest: external_prop_types_default.a.string.isRequired,
    onClick: external_prop_types_default.a.func
};

function PresetLink(props) {
    var handleClick = function handleClick(e) {
        props.onClick(e, { earliest: props.earliest, latest: props.latest });
    };

    return external_react_default.a.createElement(
        Link_default.a,
        PresetLink_extends({ style: { display: 'block' }, onClick: handleClick }, Object(external_lodash_["omit"])(props, Object(external_lodash_["keys"])(PresetLink_propTypes))),
        props.children
    );
}

/* harmony default export */ var Dialog_PresetLink = (PresetLink);
PresetLink.propTypes = PresetLink_propTypes;
// CONCATENATED MODULE: ./src/Dialog/PresetsStyles.js
var PresetsStyles_templateObject = PresetsStyles_taggedTemplateLiteral(['\n    display: flex;\n    padding: ', ';\n'], ['\n    display: flex;\n    padding: ', ';\n']),
    PresetsStyles_templateObject2 = PresetsStyles_taggedTemplateLiteral(['\n    flex: 1 0 auto;\n    padding-right: ', ';\n'], ['\n    flex: 1 0 auto;\n    padding-right: ', ';\n']),
    PresetsStyles_templateObject3 = PresetsStyles_taggedTemplateLiteral(['\n    ', ';\n    color: ', ';\n    min-height: ', ';\n    min-width: 20px;\n'], ['\n    ', ';\n    color: ', ';\n    min-height: ', ';\n    min-width: 20px;\n']);

function PresetsStyles_taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var PresetsStyles_Styled = external_styled_components_default.a.div(PresetsStyles_templateObject, Object(themes_["variable"])('spacing'));

var StyledColumn = external_styled_components_default.a.div(PresetsStyles_templateObject2, Object(themes_["variable"])('spacingHalf'));

var StyledHeading = external_styled_components_default.a.h5(PresetsStyles_templateObject3, Object(themes_["mixin"])('reset')('block'), Object(themes_["variable"])('textGray'), Object(themes_["variable"])('lineHeight'));
// CONCATENATED MODULE: ./src/Dialog/Presets.jsx
var Presets_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Presets_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Presets_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Presets_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Presets_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Presets_Presets = function (_Component) {
    Presets_inherits(Presets, _Component);

    function Presets() {
        var _ref;

        var _temp, _this, _ret;

        Presets_classCallCheck(this, Presets);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = Presets_possibleConstructorReturn(this, (_ref = Presets.__proto__ || Object.getPrototypeOf(Presets)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e, _ref2) {
            var earliest = _ref2.earliest,
                latest = _ref2.latest;

            _this.props.onRequestParseEarliest(earliest, _this.props.panelId);
            _this.props.onRequestParseLatest(latest, _this.props.panelId);
            _this.props.onChange(e, { earliest: earliest, latest: latest });
        }, _temp), Presets_possibleConstructorReturn(_this, _ret);
    }

    Presets_createClass(Presets, [{
        key: 'renderPresets',
        value: function renderPresets() {
            var _this2 = this;

            var realtime = [];
            var past = [];
            var latest = [];
            var other = [];

            this.props.presets.forEach(function (ps) {
                var parseEarliest = Object(time_["parseTimeString"])(ps.earliest);
                var parseEarliestM = parseEarliest.modifiers[0];
                var parseLatest = Object(time_["parseTimeString"])(ps.latest);

                var link = external_react_default.a.createElement(
                    Dialog_PresetLink,
                    {
                        key: ps.earliest + ' ' + ps.latest,
                        earliest: ps.earliest,
                        latest: ps.latest,
                        onClick: _this2.handleClick,
                        label: ps.label,
                        'data-test': ps.label
                    },
                    Object(i18n_["_"])(ps.label)
                );

                if (parseEarliest === false) {
                    other.push(link);
                } else if (parseEarliest.type === 'realTime' || parseLatest.type === 'realTime') {
                    realtime.push(link);
                } else if (Object(time_["isLatestNow"])(ps.latest) && parseEarliestM && parseEarliestM.unit) {
                    latest.push(link);
                } else if (parseEarliestM && (parseEarliestM.amount || parseEarliestM.snap)) {
                    past.push(link);
                } else {
                    other.push(link);
                }
            });

            return external_react_default.a.createElement(
                PresetsStyles_Styled,
                null,
                !!realtime.length && external_react_default.a.createElement(
                    StyledColumn,
                    { 'data-test': 'real-time-column' },
                    external_react_default.a.createElement(
                        StyledHeading,
                        null,
                        Object(i18n_["_"])('Real-time')
                    ),
                    realtime
                ),
                !!past.length && external_react_default.a.createElement(
                    StyledColumn,
                    {
                        'data-test': 'relative-column',
                        'data-test-column-id': 'past',
                        'data-divider': !!realtime.length
                    },
                    external_react_default.a.createElement(
                        StyledHeading,
                        null,
                        Object(i18n_["_"])('Relative')
                    ),
                    past
                ),
                !!latest.length && external_react_default.a.createElement(
                    StyledColumn,
                    {
                        'data-test': 'relative-column',
                        'data-test-column-id': 'latest',
                        'data-divider': !!realtime.length && !past.length
                    },
                    external_react_default.a.createElement(
                        StyledHeading,
                        null,
                        !past.length && Object(i18n_["_"])('Relative')
                    ),
                    latest
                ),
                !!other.length && external_react_default.a.createElement(
                    StyledColumn,
                    {
                        'data-test': 'other-column',
                        'data-divider': !!realtime.length || !!past.length || !!latest.length
                    },
                    external_react_default.a.createElement(
                        StyledHeading,
                        null,
                        Object(i18n_["_"])('Other')
                    ),
                    other
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return external_react_default.a.createElement(
                Accordion_default.a.Panel,
                Presets_extends({
                    title: Object(i18n_["_"])('Presets'),
                    panelId: this.props.panelId
                }, Object(external_lodash_["omit"])(this.props, Object(external_lodash_["keys"])(Presets.propTypes))),
                this.renderPresets()
            );
        }
    }]);

    return Presets;
}(external_react_["Component"]);

Presets_Presets.propTypes = {
    earliest: external_prop_types_default.a.string.isRequired,
    latest: external_prop_types_default.a.string.isRequired,
    onChange: external_prop_types_default.a.func,
    onRequestParseEarliest: external_prop_types_default.a.func,
    onRequestParseLatest: external_prop_types_default.a.func,
    panelId: external_prop_types_default.a.string,
    presets: external_prop_types_default.a.array.isRequired
};
Presets_Presets.defaultProps = {
    placeholder: 'Select...'
};


/* harmony default export */ var Dialog_Presets = (Presets_Presets);
// EXTERNAL MODULE: external "@splunk/react-ui/Number"
var Number_ = __webpack_require__(22);
var Number_default = /*#__PURE__*/__webpack_require__.n(Number_);

// CONCATENATED MODULE: ./src/Dialog/RealTime.jsx
var RealTime_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RealTime_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function RealTime_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RealTime_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function RealTime_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var RealTime_RealTime = function (_Component) {
    RealTime_inherits(RealTime, _Component);

    RealTime_createClass(RealTime, null, [{
        key: 'getStateFromEarliest',
        value: function getStateFromEarliest(earliest) {
            var parseEarliest = Object(time_["parseTimeString"])(earliest).modifiers[0];

            return {
                fromNumber: parseEarliest && parseInt(Math.abs(parseEarliest.amount), 10) || 0,
                fromUnit: parseEarliest && parseEarliest.unit || 's'
            };
        }
    }]);

    function RealTime(props) {
        var _ref;

        RealTime_classCallCheck(this, RealTime);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = RealTime_possibleConstructorReturn(this, (_ref = RealTime.__proto__ || Object.getPrototypeOf(RealTime)).call.apply(_ref, [this, props].concat(rest)));

        _this.requestParseEarliest = function () {
            _this.props.onRequestParseEarliest(_this.getEarliestFromState(), _this.props.panelId);
        };

        _this.handleFromNumberChange = function (e, _ref2) {
            var value = _ref2.value;

            _this.setState({ fromNumber: value }, _this.requestParseEarliest);
        };

        _this.handleFromUnitChange = function (e, _ref3) {
            var value = _ref3.value;

            _this.setState({ fromUnit: value }, _this.requestParseEarliest);
        };

        _this.handleKeyDown = function (e) {
            if (Object(keyboard_["keycode"])(e) === 'enter') {
                _this.handleApply(e);
            }
        };

        _this.handleApply = function (e) {
            if (!isFinite(_this.state.fromNumber)) {
                _this.setState({
                    hasError: true
                });
                return;
            }

            var earliest = _this.getEarliestFromState(_this.state);
            var latest = 'rt';

            _this.props.onChange(e, { earliest: earliest, latest: latest });
        };

        _this.state = RealTime.getStateFromEarliest(props.earliest);

        _this.state.hasError = false;

        if (props.open) {
            _this.requestParseEarliest();
        }
        return _this;
    }

    RealTime_createClass(RealTime, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref4) {
            var earliest = _ref4.earliest,
                open = _ref4.open;

            if (open && (earliest !== this.props.earliest || !this.props.open)) {
                var newState = RealTime.getStateFromEarliest(earliest);
                newState.hasError = false;

                var needsEarliestUpdate = !this.props.open || newState.fromNumber !== this.state.fromNumber || newState.fromUnit !== this.state.fromUnit;

                this.setState(newState, needsEarliestUpdate ? this.requestParseEarliest : undefined);
            }
        }
    }, {
        key: 'getEarliestFromState',
        value: function getEarliestFromState() {
            var _state = this.state,
                fromNumber = _state.fromNumber,
                fromUnit = _state.fromUnit;


            return 'rt-' + fromNumber + fromUnit;
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                fromNumber = _state2.fromNumber,
                fromUnit = _state2.fromUnit,
                hasError = _state2.hasError;
            var _props = this.props,
                open = _props.open,
                panelId = _props.panelId,
                parseEarliest = _props.parseEarliest;


            var earliest = Object(time_["removeRealTime"])(this.getEarliestFromState(this.state));
            var earliestParseValid = parseEarliest && earliest === parseEarliest.time;

            return external_react_default.a.createElement(
                Accordion_default.a.Panel,
                RealTime_extends({
                    title: Object(i18n_["_"])('Real-time'),
                    open: open,
                    panelId: panelId
                }, Object(external_lodash_["omit"])(this.props, Object(external_lodash_["keys"])(RealTime.propTypes))),
                hasError && external_react_default.a.createElement(
                    StyledError,
                    null,
                    external_react_default.a.createElement(
                        Message_default.a,
                        { type: 'error', 'data-test': 'error-message' },
                        Object(i18n_["_"])('A number is required for earliest.')
                    )
                ),
                external_react_default.a.createElement(
                    StyledCGWrapper,
                    null,
                    external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: Object(i18n_["_"])('Earliest:'),
                            labelPosition: 'top',
                            style: { paddingRight: 20, flex: 1 }
                        },
                        external_react_default.a.createElement(
                            StyledFromControl,
                            null,
                            external_react_default.a.createElement(Number_default.a, {
                                onChange: this.handleFromNumberChange,
                                onKeyDown: this.handleKeyDown,
                                min: 1,
                                roundTo: 0,
                                value: fromNumber,
                                style: { flex: 1 },
                                append: true,
                                'data-test': 'earliest-number'
                            }),
                            external_react_default.a.createElement(
                                Select_default.a,
                                {
                                    value: fromUnit,
                                    onChange: this.handleFromUnitChange,
                                    style: { flex: '0 1 auto' },
                                    prepend: true,
                                    'data-test': 'earliest-unit'
                                },
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Seconds Ago'), value: 's' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Minutes Ago'), value: 'm' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Hours Ago'), value: 'h' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Days Ago'), value: 'd' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Weeks Ago'), value: 'w' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Months Ago'), value: 'mon' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Quarters Ago'), value: 'q' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Years Ago'), value: 'y' })
                            )
                        ),
                        external_react_default.a.createElement(Dialog_AbsoluteValue, {
                            error: earliestParseValid ? parseEarliest.error : undefined,
                            displayValue: earliestParseValid ? parseEarliest.displayValue : undefined
                        })
                    ),
                    external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: Object(i18n_["_"])('Latest:'),
                            labelPosition: 'top',
                            style: { flex: 1 }
                        },
                        external_react_default.a.createElement(Text_default.a, { value: 'now', 'data-test': 'now', disabled: true })
                    )
                ),
                external_react_default.a.createElement(
                    StyledApplyContainer,
                    null,
                    external_react_default.a.createElement(Button_default.a, {
                        label: Object(i18n_["_"])('Apply'),
                        'data-test': 'apply',
                        disabled: !earliestParseValid || !!(parseEarliest && parseEarliest.error),
                        onClick: this.handleApply
                    })
                )
            );
        }
    }]);

    return RealTime;
}(external_react_["Component"]);

RealTime_RealTime.propTypes = {
    /** @private */
    className: ClassNamePropCheck_default.a,
    earliest: external_prop_types_default.a.string.isRequired,
    latest: external_prop_types_default.a.string.isRequired,
    onChange: external_prop_types_default.a.func,
    onRequestParseEarliest: external_prop_types_default.a.func,
    onRequestParseLatest: external_prop_types_default.a.func,
    open: external_prop_types_default.a.bool,
    panelId: external_prop_types_default.a.string,
    parseEarliest: external_prop_types_default.a.object,
    parseLatest: external_prop_types_default.a.object
};
RealTime_RealTime.defaultProps = {
    onChange: external_lodash_["noop"],
    open: false
};


/* harmony default export */ var Dialog_RealTime = (RealTime_RealTime);
// EXTERNAL MODULE: external "@splunk/react-ui/RadioList"
var RadioList_ = __webpack_require__(17);
var RadioList_default = /*#__PURE__*/__webpack_require__.n(RadioList_);

// CONCATENATED MODULE: ./src/Dialog/Relative.jsx
var Relative_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Relative_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Relative_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Relative_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Relative_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var Relative_Relative = function (_Component) {
    Relative_inherits(Relative, _Component);

    Relative_createClass(Relative, null, [{
        key: 'getStateFromRange',
        value: function getStateFromRange(earliest, latest) {
            var parseEarliest = Object(time_["parseTimeString"])(earliest).modifiers[0];
            var parseLatest = Object(time_["parseTimeString"])(latest).modifiers[0];

            return {
                fromNumber: parseEarliest && parseInt(Math.abs(parseEarliest.amount), 10) || 0,
                fromSnap: !!parseEarliest && !!parseEarliest.snap,
                fromUnit: parseEarliest && parseEarliest.unit || 's',
                toSnap: parseLatest && !!parseLatest.snap || false
            };
        }
    }]);

    function Relative(props) {
        var _ref;

        Relative_classCallCheck(this, Relative);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = Relative_possibleConstructorReturn(this, (_ref = Relative.__proto__ || Object.getPrototypeOf(Relative)).call.apply(_ref, [this, props].concat(rest)));

        _this.requestParseEarliest = function () {
            _this.props.onRequestParseEarliest(_this.getEarliestFromState(), _this.props.panelId);
        };

        _this.requestParseLatest = function () {
            _this.props.onRequestParseLatest(_this.getLatestFromState(), _this.props.panelId);
        };

        _this.handleFromNumberChange = function (e, _ref2) {
            var value = _ref2.value;

            _this.setState({ fromNumber: value }, _this.requestParseEarliest);
        };

        _this.handleFromUnitChange = function (e, _ref3) {
            var value = _ref3.value;

            _this.setState({ fromUnit: value }, function () {
                _this.requestParseEarliest();
                _this.requestParseLatest();
            });
        };

        _this.handleFromSnapChange = function (e, _ref4) {
            var value = _ref4.value;

            _this.setState({ fromSnap: value }, _this.requestParseEarliest);
        };

        _this.handleToSnapChange = function (e, _ref5) {
            var value = _ref5.value;

            _this.setState({ toSnap: value }, _this.requestParseLatest);
        };

        _this.handleKeyDown = function (e) {
            if (Object(keyboard_["keycode"])(e) === 'enter') {
                _this.handleApply(e);
            }
        };

        _this.handleApply = function (e) {
            if (!Object(external_lodash_["isFinite"])(_this.state.fromNumber)) {
                _this.setState({
                    hasError: true
                });
                return;
            }

            var earliest = _this.getEarliestFromState();
            var latest = _this.getLatestFromState();

            _this.props.onChange(e, { earliest: earliest, latest: latest });
        };

        _this.state = Relative.getStateFromRange(props.earliest, props.latest);
        _this.state.hasError = false;

        if (props.open) {
            _this.requestParseEarliest();
            _this.requestParseLatest();
        }
        return _this;
    }

    Relative_createClass(Relative, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref6) {
            var _this2 = this;

            var earliest = _ref6.earliest,
                latest = _ref6.latest,
                open = _ref6.open;

            if (open && (earliest !== this.props.earliest || latest !== this.props.latest || !this.props.open)) {
                var newState = Relative.getStateFromRange(earliest, latest);
                newState.hasError = false;

                var needsEarliestUpdate = !this.props.open || Object(external_lodash_["keys"])(newState).reduce(function (mismatch, key) {
                    return mismatch || newState[key] !== _this2.state[key];
                }, false);
                var newsLatestUpdates = newState.toSnap !== this.state.toSnap || !this.props.open;

                this.setState(newState, function () {
                    if (needsEarliestUpdate) {
                        _this2.requestParseEarliest();
                    }
                    if (newsLatestUpdates) {
                        _this2.requestParseLatest();
                    }
                });
            }
        }
    }, {
        key: 'getEarliestFromState',
        value: function getEarliestFromState() {
            var _state = this.state,
                fromNumber = _state.fromNumber,
                fromSnap = _state.fromSnap,
                fromUnit = _state.fromUnit;


            var earliestSnap = fromSnap ? '@' + fromUnit : '';
            return '-' + fromNumber + fromUnit + earliestSnap;
        }
    }, {
        key: 'getLatestFromState',
        value: function getLatestFromState() {
            var _state2 = this.state,
                fromUnit = _state2.fromUnit,
                toSnap = _state2.toSnap;


            return toSnap ? '@' + fromUnit : 'now';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                open = _props.open,
                panelId = _props.panelId,
                parseEarliest = _props.parseEarliest,
                parseLatest = _props.parseLatest;
            var _state3 = this.state,
                fromNumber = _state3.fromNumber,
                fromUnit = _state3.fromUnit,
                fromSnap = _state3.fromSnap,
                hasError = _state3.hasError,
                toSnap = _state3.toSnap;


            var earliest = this.getEarliestFromState();
            var latest = this.getLatestFromState();
            var earliestParseValid = parseEarliest && earliest === parseEarliest.time;
            var latestParseValid = parseLatest && latest === parseLatest.time;

            var timeUnit = Object(time_["getUnitLabel"])(fromUnit);

            return external_react_default.a.createElement(
                Accordion_default.a.Panel,
                Relative_extends({
                    title: Object(i18n_["_"])('Relative'),
                    open: open,
                    panelId: panelId
                }, Object(external_lodash_["omit"])(this.props, Object(external_lodash_["keys"])(Relative.propTypes))),
                hasError && external_react_default.a.createElement(
                    StyledError,
                    null,
                    external_react_default.a.createElement(
                        Message_default.a,
                        { type: 'error', 'data-test': 'error-message' },
                        Object(i18n_["_"])('A number is required for earliest.')
                    )
                ),
                external_react_default.a.createElement(
                    StyledCGWrapper,
                    null,
                    external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: Object(i18n_["_"])('Earliest:'),
                            labelPosition: 'top',
                            style: { paddingRight: 20, flex: 1 }
                        },
                        external_react_default.a.createElement(
                            StyledFromControl,
                            null,
                            external_react_default.a.createElement(Number_default.a, {
                                style: { flex: 1 },
                                onChange: this.handleFromNumberChange,
                                onKeyDown: this.handleKeyDown,
                                min: 0,
                                roundTo: 0,
                                value: fromNumber,
                                append: true,
                                'data-test': 'earliest-number'
                            }),
                            external_react_default.a.createElement(
                                Select_default.a,
                                {
                                    value: fromUnit,
                                    onChange: this.handleFromUnitChange,
                                    prepend: true,
                                    style: { flex: '0 1 auto' },
                                    'data-test': 'earliest-unit'
                                },
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Seconds Ago'), value: 's' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Minutes Ago'), value: 'm' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Hours Ago'), value: 'h' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Days Ago'), value: 'd' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Weeks Ago'), value: 'w' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Months Ago'), value: 'mon' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Quarters Ago'), value: 'q' }),
                                external_react_default.a.createElement(Select_default.a.Option, { label: Object(i18n_["_"])('Years Ago'), value: 'y' })
                            )
                        ),
                        external_react_default.a.createElement(
                            RadioList_default.a,
                            { value: fromSnap, onChange: this.handleFromSnapChange },
                            external_react_default.a.createElement(
                                RadioList_default.a.Option,
                                { 'data-test': 'no-snap-to', value: false },
                                Object(i18n_["_"])('No snap-to')
                            ),
                            external_react_default.a.createElement(
                                RadioList_default.a.Option,
                                { 'data-test': 'earliest-begin', value: true },
                                Object(i18n_["_"])('Beginning of %s').replace('%s', timeUnit)
                            )
                        ),
                        external_react_default.a.createElement(Dialog_AbsoluteValue, {
                            'data-test': 'earliest-absolute-value',
                            error: earliestParseValid ? parseEarliest.error : undefined,
                            displayValue: earliestParseValid ? parseEarliest.displayValue : undefined
                        })
                    ),
                    external_react_default.a.createElement(
                        ControlGroup_default.a,
                        {
                            controlsLayout: 'none',
                            label: Object(i18n_["_"])('Latest:'),
                            labelPosition: 'top',
                            style: { flex: 1 }
                        },
                        external_react_default.a.createElement(
                            RadioList_default.a,
                            { value: toSnap, onChange: this.handleToSnapChange },
                            external_react_default.a.createElement(
                                RadioList_default.a.Option,
                                { 'data-test': 'now', value: false },
                                Object(i18n_["_"])('Now')
                            ),
                            external_react_default.a.createElement(
                                RadioList_default.a.Option,
                                { 'data-test': 'latest-begin', value: true },
                                Object(i18n_["_"])('Beginning of current %s').replace('%s', timeUnit)
                            )
                        ),
                        external_react_default.a.createElement(Dialog_AbsoluteValue, {
                            'data-test': 'latest-absolute-value',
                            error: latestParseValid ? parseLatest.error : undefined,
                            displayValue: latestParseValid ? parseLatest.displayValue : undefined
                        })
                    )
                ),
                external_react_default.a.createElement(
                    StyledApplyContainer,
                    null,
                    external_react_default.a.createElement(Button_default.a, {
                        label: Object(i18n_["_"])('Apply'),
                        disabled: !earliestParseValid || !latestParseValid || !!(parseEarliest && parseEarliest.error) || !!(parseEarliest && parseLatest.error),
                        'data-test': 'apply',
                        onClick: this.handleApply
                    })
                )
            );
        }
    }]);

    return Relative;
}(external_react_["Component"]);

Relative_Relative.propTypes = {
    /** @private */
    className: ClassNamePropCheck_default.a,
    earliest: external_prop_types_default.a.string.isRequired,
    latest: external_prop_types_default.a.string.isRequired,
    onChange: external_prop_types_default.a.func,
    onRequestParseEarliest: external_prop_types_default.a.func,
    onRequestParseLatest: external_prop_types_default.a.func,
    open: external_prop_types_default.a.bool,
    panelId: external_prop_types_default.a.string,
    parseEarliest: external_prop_types_default.a.object,
    parseLatest: external_prop_types_default.a.object
};
Relative_Relative.defaultProps = {
    onChange: external_lodash_["noop"],
    open: false
};


/* harmony default export */ var Dialog_Relative = (Relative_Relative);
// CONCATENATED MODULE: ./src/Dialog/Dialog.jsx
var Dialog_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Dialog_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Dialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Dialog_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Dialog_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var Dialog_locale = config_["locale"] || 'en_US';

var Dialog_TimeRangeDialog = function (_Component) {
    Dialog_inherits(TimeRangeDialog, _Component);

    Dialog_createClass(TimeRangeDialog, null, [{
        key: 'bestPanel',
        value: function bestPanel(props) {
            var advancedInputTypes = props.advancedInputTypes,
                earliest = props.earliest,
                formInputTypes = props.formInputTypes,
                latest = props.latest,
                presets = props.presets;
            // Presets

            if (Object(time_["findPresetLabel"])(presets, earliest, latest)) {
                return 'presets';
            }

            // RealTime or Relative
            var earliestParse = Object(time_["parseTimeString"])(earliest);
            var earliestMods = earliestParse.modifiers;
            var latestParse = Object(time_["parseTimeString"])(latest);

            if (earliestParse.isFullyParsed && latestParse.isFullyParsed && earliestMods.length === 1) {
                // Relative
                if (Object(external_lodash_["includes"])(formInputTypes, 'relative') && earliestParse.type !== 'realTime' && latestParse.type !== 'realTime' && (!earliestMods[0].snap || earliestMods[0].unit === earliestMods[0].snap)) {
                    if (Object(time_["isLatestNow"])(latest)) {
                        return 'relative';
                    }
                    var mod = latestParse.modifiers[0];
                    if (mod && !mod.amount && mod.snap === earliestMods[0].unit) {
                        return 'relative';
                    }
                }

                // RealTime
                if (Object(external_lodash_["includes"])(formInputTypes, 'realTime') && earliestParse.type === 'realTime' && !earliestMods[0].snap && (latest === 'rt' || latest === 'rtnow')) {
                    return 'realTime';
                }
            }
            // DateRange or DateTimeRange
            if (Object(time_["isISO"])(earliest) && latest === '') {
                if (Object(external_lodash_["includes"])(formInputTypes, 'date') && Object(time_["isWholeDay"])(earliest)) {
                    return 'date';
                }
                if (Object(external_lodash_["includes"])(formInputTypes, 'dateTime')) {
                    return 'dateTime';
                }
            } else if (Object(time_["isISO"])(latest) && earliest === '') {
                if (Object(external_lodash_["includes"])(formInputTypes, 'date') && Object(time_["isWholeDay"])(latest)) {
                    return 'date';
                }
                if (Object(external_lodash_["includes"])(formInputTypes, 'dateTime')) {
                    return 'dateTime';
                }
            } else if (Object(time_["isISO"])(earliest) && Object(time_["isISO"])(latest)) {
                if (Object(external_lodash_["includes"])(formInputTypes, 'date') && Object(time_["isWholeDay"])(earliest) && Object(time_["isWholeDay"])(latest)) {
                    return 'date';
                }
                if (Object(external_lodash_["includes"])(formInputTypes, 'dateTime')) {
                    return 'dateTime';
                }
            } else if (Object(time_["isEpoch"])(earliest) && Object(time_["isEpoch"])(latest)) {
                return 'dateTime';
            }

            // Advanced
            if (advancedInputTypes.length) {
                return 'advanced';
            }

            // Fallback to first available
            if (presets.length) {
                return 'presets';
            }
            return formInputTypes[0];
        }
    }, {
        key: 'convertToISO',
        value: function convertToISO(time, parse) {
            var isEarliest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (Object(time_["isISO"])(time)) {
                return time;
            } else if (isEarliest && Object(time_["isEarliestEmpty"])(time)) {
                return '';
            } else if (!isEarliest && Object(time_["isLatestNow"])(time)) {
                return '';
            } else if (parse && parse.iso) {
                return parse.iso; // remove timezone
            }
            return '';
        }
    }, {
        key: 'enrichParse',
        value: function enrichParse(parse) {
            if (!parse) {
                return;
            }

            /* ISO doesn't spec dates before the year 0000 or after 9999. Splunk's time parser is not
             * compatible with moment or the native Date methods in these cases (SUI-1330).
             * If the iso time is incompatible, the display value is removed and an error is added.
             * */
            var iso = parse.iso && Object(time_["isISO"])(parse.iso) ? Object(time_["removeISOTimezone"])(parse.iso) : undefined;

            // eslint-disable-next-line consistent-return
            return {
                error: parse.error || iso ? parse.error : new Error('The iso time could not be converted to a JavaScript Date.'),
                iso: iso,
                displayValue: iso ? moment_default()(iso).locale(Dialog_locale).format('LLL') : undefined,
                time: parse.time
            };
        }
    }]);

    function TimeRangeDialog(props) {
        var _ref;

        Dialog_classCallCheck(this, TimeRangeDialog);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = Dialog_possibleConstructorReturn(this, (_ref = TimeRangeDialog.__proto__ || Object.getPrototypeOf(TimeRangeDialog)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleAccordionChange = function (e, _ref2) {
            var panelId = _ref2.panelId;

            _this.setState({ openPanelId: panelId });
        };

        _this.handleRequestParseEarliest = function (time, panelId) {
            if (panelId === _this.state.openPanelId) {
                var timeCleaned = Object(time_["removeRealTime"])(time || '0');
                _this.props.onRequestParseEarliest(timeCleaned);
            }
        };

        _this.handleRequestParseLatest = function (time, panelId) {
            if (panelId === _this.state.openPanelId) {
                var timeCleaned = Object(time_["removeRealTime"])(time || 'now');
                _this.props.onRequestParseLatest(timeCleaned);
            }
        };

        _this.state = {
            openPanelId: TimeRangeDialog.bestPanel(props)
        };
        return _this;
    }

    Dialog_createClass(TimeRangeDialog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                onRequestParseEarliest = _props.onRequestParseEarliest,
                onRequestParseLatest = _props.onRequestParseLatest,
                earliest = _props.earliest,
                latest = _props.latest;

            /* Since these onRequestParseEarliest and onRequestParseLatest can be set by
             * SplunkwebConnector when it clones this component, it's not possible to make these fields
             * required in the propTypes because it will produce console errors before it's cloned.
             *
             * If it gets mounted and these props were not set, then there is a problem.
             */

            if (false) {}

            /* Get the necessary data to populate the data and date-time panels.
             * Real-time, relative and advanced panels will call parse on mount, so it's not necessary
             * to cover those cases here.
             */
            if (Object(time_["isEpoch"])(earliest) || this.state.openPanelId === 'presets') {
                onRequestParseEarliest(earliest);
            }
            if (Object(time_["isEpoch"])(latest) || this.state.openPanelId === 'presets') {
                onRequestParseLatest(latest);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.earliest !== this.props.earliest && Object(time_["isEpoch"])(props.earliest)) {
                props.onRequestParseEarliest(props.earliest);
            }
            if (props.latest !== this.props.latest && Object(time_["isEpoch"])(props.latest)) {
                props.onRequestParseLatest(props.latest);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                advancedInputTypes = _props2.advancedInputTypes,
                documentationURL = _props2.documentationURL,
                earliest = _props2.earliest,
                formInputTypes = _props2.formInputTypes,
                latest = _props2.latest,
                onChange = _props2.onChange,
                presets = _props2.presets,
                style = _props2.style;
            var openPanelId = this.state.openPanelId;


            var panelProps = {
                earliest: earliest,
                latest: latest,
                onChange: onChange
            };

            var parseEarliest = TimeRangeDialog.enrichParse(this.props.parseEarliest);
            var parseLatest = TimeRangeDialog.enrichParse(this.props.parseLatest);

            var parserProps = {
                onRequestParseEarliest: this.handleRequestParseEarliest,
                onRequestParseLatest: this.handleRequestParseLatest,
                parseEarliest: parseEarliest,
                parseLatest: parseLatest
            };

            var panelISOProps = {
                earliest: TimeRangeDialog.convertToISO(earliest, parseEarliest, true),
                latest: TimeRangeDialog.convertToISO(latest, parseLatest, false),
                onChange: onChange,
                locale: Dialog_locale
            };

            var children = [];

            if (presets && presets.length) {
                children.push(external_react_default.a.createElement(Dialog_Presets, Dialog_extends({
                    panelId: 'presets',
                    key: 'presets',
                    presets: presets,
                    onRequestParseLatest: this.handleRequestParseLatest,
                    onRequestParseEarliest: this.handleRequestParseEarliest
                }, panelProps)));
            }
            if (Object(external_lodash_["includes"])(formInputTypes, 'relative')) {
                children.push(external_react_default.a.createElement(Dialog_Relative, Dialog_extends({ panelId: 'relative', key: 'relative' }, panelProps, parserProps)));
            }
            if (Object(external_lodash_["includes"])(formInputTypes, 'realTime')) {
                children.push(external_react_default.a.createElement(Dialog_RealTime, Dialog_extends({ panelId: 'realTime', key: 'realTime' }, panelProps, parserProps)));
            }
            if (Object(external_lodash_["includes"])(formInputTypes, 'date')) {
                children.push(external_react_default.a.createElement(Dialog_DateRange, Dialog_extends({ panelId: 'date', key: 'date' }, panelISOProps)));
            }
            if (Object(external_lodash_["includes"])(formInputTypes, 'dateTime')) {
                children.push(external_react_default.a.createElement(Dialog_DateTimeRange, Dialog_extends({ panelId: 'dateTime', key: 'dateTime' }, panelISOProps)));
            }
            if (advancedInputTypes.length) {
                children.push(external_react_default.a.createElement(Dialog_Advanced, Dialog_extends({
                    panelId: 'advanced',
                    key: 'advanced',
                    inputTypes: advancedInputTypes,
                    documentationURL: documentationURL
                }, panelProps, parserProps)));
            }

            return external_react_default.a.createElement(
                Accordion_default.a,
                Dialog_extends({
                    openPanelId: openPanelId,
                    onChange: this.handleAccordionChange,
                    'data-test': 'time-range-dialog',
                    'data-test-earliest': earliest,
                    'data-test-latest': latest,
                    style: Dialog_extends({ minWidth: 680 }, style)
                }, Object(external_lodash_["omit"])(this.props, Object(external_lodash_["keys"])(TimeRangeDialog.propTypes))),
                children
            );
        }
    }]);

    return TimeRangeDialog;
}(external_react_["Component"]);

Dialog_TimeRangeDialog.possibleFormInputTypes = ['relative', 'realTime', 'date', 'dateTime'];
Dialog_TimeRangeDialog.possibleAdvancedInputTypes = ['relative', 'realTime', 'allTime', 'dateTime'];
Dialog_TimeRangeDialog.propTypes = {
    /**
     * An array of types of input allowed in the Advanced panel.
     * Defaults to ['realTime', 'relative', 'allTime', 'dateTime'].
     */
    advancedInputTypes: external_prop_types_default.a.arrayOf(external_prop_types_default.a.oneOf(Dialog_TimeRangeDialog.possibleAdvancedInputTypes)),
    /** @private */
    className: ClassNamePropCheck_default.a,
    /**
     * The id of the description. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's help component.
     */
    describedBy: external_prop_types_default.a.string,
    /**
     * A URL for the documentation link in the Advanced Panel.
     */
    documentationURL: external_prop_types_default.a.string,
    earliest: external_prop_types_default.a.string.isRequired,
    /**
     * An array of types of input allowed in the forms. Removing a value will disable
     * the related panel. Defaults to ['realTime', 'relative', 'date', 'dateTime'].
     */
    formInputTypes: external_prop_types_default.a.arrayOf(external_prop_types_default.a.oneOf(Dialog_TimeRangeDialog.possibleFormInputTypes)),
    /** Make the control an inline block with variable width. */
    inline: external_prop_types_default.a.bool,
    latest: external_prop_types_default.a.string.isRequired,
    /**
     * A callback to receive the change events.
     * If value is set, this callback is required. This must set the value prop to retain the
     * change. The callback is passed an object with two properties: 'earliest' and 'latest'.
     */
    onChange: external_prop_types_default.a.func,
    /**
     * A callback to passed a time string. This function must update the parseEarliest prop. This
     * function is required when not using the SplunkwebConnector.
     */
    onRequestParseEarliest: external_prop_types_default.a.func,
    /**
     * A callback to passed a time string. This function must update the parseLatest prop. This
     * function is required when not using the SplunkwebConnector.
     */
    onRequestParseLatest: external_prop_types_default.a.func,
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
    parseEarliest: external_prop_types_default.a.shape({
        error: external_prop_types_default.a.object,
        iso: external_prop_types_default.a.string,
        time: external_prop_types_default.a.string.isRequired
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
    parseLatest: external_prop_types_default.a.shape({
        error: external_prop_types_default.a.object,
        iso: external_prop_types_default.a.string,
        time: external_prop_types_default.a.string.isRequired
    }),
    placeholder: external_prop_types_default.a.string,
    /**
     * A definition of the presets. The time util can be used to inpect and filter certain
     * types of time ranges before setting this prop. This property is required to display the
     * presets panel when not using the SplunkwebConnector.
     */
    presets: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
        label: external_prop_types_default.a.string.isRequired,
        earliest: external_prop_types_default.a.string.isRequired,
        latest: external_prop_types_default.a.string
    })),
    /**
     * Styles to place on the wrapper.
     */
    style: external_prop_types_default.a.object
};
Dialog_TimeRangeDialog.defaultProps = {
    advancedInputTypes: Dialog_TimeRangeDialog.possibleAdvancedInputTypes,
    formInputTypes: Dialog_TimeRangeDialog.possibleFormInputTypes,
    placeholder: 'Select...',
    onChange: external_lodash_["noop"]
};


/* harmony default export */ var Dialog = __webpack_exports__["default"] = (Dialog_TimeRangeDialog);

/***/ })
/******/ ]);