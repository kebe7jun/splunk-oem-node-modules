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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Message");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Modal");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/TestSupport");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/format");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Button");

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_ui_utils_format__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_ui_utils_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_ui_utils_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Message__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Modal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_TestSupport__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/modals/EditPerms.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

var ModalEditPerms = function (_Component) {
    _inherits(ModalEditPerms, _Component);

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */
    function ModalEditPerms(props, context) {
        _classCallCheck(this, ModalEditPerms);

        var _this = _possibleConstructorReturn(this, (ModalEditPerms.__proto__ || Object.getPrototypeOf(ModalEditPerms)).call(this, props, context));

        _this.handleEditPerms = function () {
            // TODO implement edit permissions action in the future when the page being rewritten requires it.
        };

        _this.handleError = function (message, response) {
            if (response && response.text && typeof response.text === 'function') {
                response.text().then(function (body) {
                    var enrichedError = response;
                    enrichedError.responseText = body;
                    _this.setState({
                        errorMessage: _this.props.errorFormatter(message, enrichedError)
                    });
                });
            } else {
                _this.setState({
                    errorMessage: message
                });
            }
        };

        _this.handleClose = function () {
            _this.setState({
                errorMessage: ''
            });
            _this.props.handleRequestClose();
        };

        _this.state = {
            /** String containing the error message, if any */
            errorMessage: ''
        };
        return _this;
    }

    /**
     * Error handler
     * @param {String} message error message.
     * @param {String} response request response containing some more useful information.
     */


    _createClass(ModalEditPerms, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Modal___default.a,
                _extends({
                    onRequestClose: this.handleClose,
                    open: this.props.open,
                    style: { width: '500px' }
                }, Object(__WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Modal___default.a.Header, {
                    title: Object(__WEBPACK_IMPORTED_MODULE_2__splunk_ui_utils_format__["sprintf"])(gettext('%s Edit Permissions'), this.props.isBulk ? gettext('Bulk') : ''),
                    onRequestClose: this.handleClose,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Modal___default.a.Body,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        },
                        __self: this
                    },
                    this.state.errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Message___default.a,
                        { type: 'error', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 89
                            },
                            __self: this
                        },
                        this.state.errorMessage
                    ),
                    'Edit Permissions Content'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Modal___default.a.Footer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Button___default.a, {
                        'data-test-name': 'cancel-btn',
                        onClick: this.handleClose,
                        label: gettext('Cancel'),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Button___default.a, {
                        appearance: 'primary',
                        'data-test-name': 'save-btn',
                        onClick: this.handleEditPerms,
                        label: this.state.isWorking ? gettext('Saving...') : gettext('Save'),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                        },
                        __self: this
                    })
                )
            );
        }
    }]);

    return ModalEditPerms;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ModalEditPerms.propTypes = {
    open: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    handleRequestClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    errorFormatter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    /** boolean indicating whether the edit permissions is bulk */
    isBulk: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
ModalEditPerms.defaultProps = {
    isBulk: false
};


/* harmony default export */ __webpack_exports__["default"] = (ModalEditPerms);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/modals/EditPerms.jsx"))

/***/ })

/******/ });