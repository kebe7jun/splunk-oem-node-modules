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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 108);
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Dropdown__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Heading__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Paragraph__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Paragraph___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Paragraph__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_utils_TestSupport__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/table/Header.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

var TableHeader = function (_Component) {
    _inherits(TableHeader, _Component);

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */
    function TableHeader(props, context) {
        _classCallCheck(this, TableHeader);

        var _this = _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).call(this, props, context));

        _this.setShouldRefreshOnClose = function () {
            _this.setState({
                shouldRefreshOnClose: true
            });
        };

        _this.handleNewButtonClick = function () {
            _this.setState({
                isNewObjectModalOpen: true
            });
        };

        _this.handleRequestClose = function () {
            if (_this.state.shouldRefreshOnClose) {
                _this.props.handleRefreshListing();
            }
            _this.setState({
                shouldRefreshOnClose: false,
                isNewObjectModalOpen: false
            });
        };

        _this.state = {
            /** Indicates whether the new object modal is open */
            isNewObjectModalOpen: false,
            /** Indicates whether the listing should refresh when a modal is closed */
            shouldRefreshOnClose: false
        };
        return _this;
    }

    _createClass(TableHeader, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                ModalNew = _props.ModalNew,
                objectNameSingular = _props.objectNameSingular,
                objectNamePlural = _props.objectNamePlural,
                permissions = _props.permissions,
                headerDescription = _props.headerDescription,
                additionalCreateOptions = _props.additionalCreateOptions,
                otherProps = _objectWithoutProperties(_props, ['ModalNew', 'objectNameSingular', 'objectNamePlural', 'permissions', 'headerDescription', 'additionalCreateOptions']);

            var isNewObjectModalOpen = this.state.isNewObjectModalOpen;

            var newLabel = Object(__WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__["sprintf"])(gettext('New %s'), objectNameSingular);
            var button = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Button___default.a, {
                appearance: 'primary',
                'data-test-name': 'create-btn',
                isMenu: additionalCreateOptions.length > 0,
                label: newLabel,
                style: { display: 'block' },
                onClick: additionalCreateOptions.length > 0 ? undefined : this.handleNewButtonClick,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                },
                __self: this
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                _extends({
                    style: {
                        background: '#f2f4f5',
                        padding: '20px 20px 10px'
                    }
                }, Object(__WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 99
                        },
                        __self: this
                    },
                    permissions.canCreate && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { style: { float: 'right' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 101
                            },
                            __self: this
                        },
                        additionalCreateOptions.length > 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Dropdown___default.a,
                            { toggle: button, 'data-test-name': 'create-dropdown', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 103
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Menu___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 104
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Menu___default.a.Item,
                                    {
                                        key: 'create_object',
                                        onClick: function onClick() {
                                            return _this2.handleNewButtonClick();
                                        },
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 105
                                        },
                                        __self: this
                                    },
                                    newLabel,
                                    '\xA0'
                                ),
                                additionalCreateOptions.map(function (option) {
                                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Menu___default.a.Item,
                                        {
                                            key: option.key,
                                            to: option.url,
                                            style: { whiteSpace: 'no-wrap' },
                                            onClick: typeof option.handleMenuItemClicked === 'function' ? function () {
                                                return option.handleMenuItemClicked(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["merge"])(otherProps, {
                                                    objectNameSingular: objectNameSingular,
                                                    objectNamePlural: objectNamePlural,
                                                    permissions: permissions
                                                }));
                                            } : undefined,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 112
                                            },
                                            __self: _this2
                                        },
                                        option.label,
                                        '\xA0'
                                    );
                                })
                            )
                        ) : button,
                        '\xA0',
                        isNewObjectModalOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalNew, _extends({
                            action: 'new',
                            open: isNewObjectModalOpen,
                            object: {},
                            objectNameSingular: objectNameSingular,
                            objectNamePlural: objectNamePlural,
                            handleRequestClose: this.handleRequestClose,
                            setShouldRefreshOnClose: this.setShouldRefreshOnClose,
                            permissions: permissions
                        }, Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["omit"])(otherProps, 'ModalNew', 'headerDescription', 'additionalCreateOptions'), {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 140
                            },
                            __self: this
                        }))
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Heading___default.a,
                        { level: 1, style: { margin: '0 0 10px 0', lineHeight: '24px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 159
                            },
                            __self: this
                        },
                        objectNamePlural
                    ),
                    headerDescription !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Paragraph___default.a,
                        {
                            style: { margin: '0' },
                            'data-test': 'page-description', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 163
                            },
                            __self: this
                        },
                        headerDescription
                    )
                )
            );
        }
    }]);

    return TableHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

TableHeader.propTypes = {
    ModalNew: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired, // eslint-disable-line react/no-unused-prop-types
    objectNameSingular: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectNamePlural: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    additionalCreateOptions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    permissions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    handleRefreshListing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    headerDescription: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
TableHeader.defaultProps = {
    headerDescription: null
};


/* harmony default export */ __webpack_exports__["default"] = (TableHeader);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/table/Header.jsx"))

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Heading");

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Paragraph");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/TestSupport");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Dropdown");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Menu");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/format");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Button");

/***/ })

/******/ });