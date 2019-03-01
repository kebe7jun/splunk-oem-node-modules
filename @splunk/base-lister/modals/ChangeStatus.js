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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
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

module.exports = require("@splunk/splunk-utils/fetch");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Message");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Modal");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_splunk_utils_fetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_splunk_utils_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_splunk_utils_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/modals/ChangeStatus.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

var ModalChangeStatus = function (_Component) {
    _inherits(ModalChangeStatus, _Component);

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */
    function ModalChangeStatus(props, context) {
        _classCallCheck(this, ModalChangeStatus);

        var _this = _possibleConstructorReturn(this, (ModalChangeStatus.__proto__ || Object.getPrototypeOf(ModalChangeStatus)).call(this, props, context));

        _this.handleBulkChangeStatus = function () {};

        _this.handleChangeStatus = function () {
            var inmemObject = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["extend"])(_this.props.object, {
                enabled: _this.props.object.enabled === 0 ? 1 : 0
            });
            var editObjectURL = _this.props.objectsCollectionPath + '/' + _this.props.object[_this.props.idAttribute].split('/').pop();

            var editFetchInit = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["create"])(__WEBPACK_IMPORTED_MODULE_3__splunk_splunk_utils_fetch__["defaultFetchInit"]);
            editFetchInit.method = 'PUT';
            editFetchInit.headers['Content-Type'] = 'application/json';
            editFetchInit.body = JSON.stringify(inmemObject);

            fetch('' + editObjectURL, editFetchInit).then(Object(__WEBPACK_IMPORTED_MODULE_3__splunk_splunk_utils_fetch__["handleResponse"])(200)).then(function () {
                _this.handleSuccess();
            }).catch(function (response) {
                _this.handleError(Object(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__["sprintf"])(gettext('Could not %s %s.'), _this.actionLabel.toLowerCase(), _this.props.objectNameSingular.toLowerCase()), response);
            });
        };

        _this.handleError = function (message, response) {
            if (response && response.text && typeof response.text === 'function') {
                response.text().then(function (body) {
                    var enrichedError = response;
                    enrichedError.responseText = body;
                    _this.setState({
                        isWorking: false,
                        errorMessage: _this.props.errorFormatter(message, enrichedError)
                    });
                });
            } else {
                _this.setState({
                    isWorking: false,
                    errorMessage: message
                });
            }
        };

        _this.handleClose = function () {
            _this.setState({
                isWorking: false,
                errorMessage: ''
            });
            _this.props.handleRequestClose();
        };

        _this.handleSuccess = function () {
            _this.handleClose();
        };

        _this.changeStatusActionDispatcher = function () {
            _this.setState({
                isWorking: true
            });
            if (_this.props.isBulk) {
                _this.handleBulkChangeStatus();
            } else {
                _this.handleChangeStatus();
            }
        };

        _this.state = {
            /** Boolean indicating whether the page is working (saving, deleting, ...). Used to disable button. */
            isWorking: false,
            /** String containing the error message, if any */
            errorMessage: ''
        };
        _this.enableLabel = gettext('Enable');
        _this.disableLabel = gettext('Disable');
        if (_this.props.isBulk) {
            _this.actionLabel = _this.props.action === 'bulk_enable' ? _this.enableLabel : _this.disableLabel;
        } else {
            _this.actionLabel = _this.props.isEnabled(_this.props.object) ? _this.disableLabel : _this.enableLabel;
        }
        return _this;
    }

    _createClass(ModalChangeStatus, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.setState({
                isWorking: false,
                errorMessage: ''
            });
        }
    }, {
        key: 'getButtonLabel',
        value: function getButtonLabel() {
            var enablingLabel = gettext('Enabling...');
            var disablingLabel = gettext('Disabling...');
            if (this.props.isBulk) {
                if (this.state.isWorking) {
                    return this.props.action === 'bulk_enable' ? enablingLabel : disablingLabel;
                }
                return this.props.action === 'bulk_enable' ? this.enableLabel : this.disableLabel;
            }
            if (this.state.isWorking) {
                return this.props.isEnabled(this.props.object) ? disablingLabel : enablingLabel;
            }
            return this.props.isEnabled(this.props.object) ? this.disableLabel : this.enableLabel;
        }

        // There is no generic way of doing this, this method should be overridden
        // and implemented by consumers.


        /**
         * Error handler
         * @param {String} message error message.
         * @param {String} response request response containing some more useful information.
         */

    }, {
        key: 'render',
        value: function render() {
            var modalTitle = Object(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__["sprintf"])('%s %s %s', this.props.isBulk ? gettext('Bulk') : '', this.actionLabel, this.props.selectedRows.length > 1 ? this.props.objectNamePlural : this.props.objectNameSingular);
            var modalContent = this.props.isBulk ? Object(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__["sprintf"])(gettext('Are you sure you want to %s the %s?'), this.actionLabel.toLowerCase(), this.props.selectedRows.length > 1 ? this.props.objectNamePlural.toLowerCase() : this.props.objectNameSingular.toLowerCase()) : Object(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__["sprintf"])(gettext("Are you sure you want to %s '%s'?"), this.actionLabel.toLowerCase(), this.props.object[this.props.nameAttribute]);
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default.a,
                _extends({
                    onRequestClose: this.handleClose,
                    open: this.props.open,
                    style: { width: '500px' }
                }, Object(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 193
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default.a.Header, { title: modalTitle, onRequestClose: this.handleClose, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 199
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default.a.Body,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 200
                        },
                        __self: this
                    },
                    this.state.errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message___default.a,
                        { type: 'error', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 202
                            },
                            __self: this
                        },
                        this.state.errorMessage
                    ),
                    this.props.warningMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message___default.a,
                        { type: 'warning', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 205
                            },
                            __self: this
                        },
                        this.props.warningMessage
                    ),
                    modalContent
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default.a.Footer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 209
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button___default.a, {
                        'data-test-name': 'cancel-btn',
                        onClick: this.handleClose,
                        label: gettext('Cancel'),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 210
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button___default.a, {
                        appearance: 'primary',
                        'data-test-name': 'change-status-btn',
                        disabled: this.state.isWorking,
                        onClick: this.changeStatusActionDispatcher,
                        label: this.getButtonLabel(),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 215
                        },
                        __self: this
                    })
                )
            );
        }
    }]);

    return ModalChangeStatus;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ModalChangeStatus.propTypes = {
    open: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    object: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    objectNameSingular: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectNamePlural: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    isEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    idAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    nameAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    handleRequestClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    errorFormatter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    selectedRows: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    action: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    /** boolean indicating whether the change status action is bulk */
    isBulk: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    /** Warning message to display at the top of the modal */
    warningMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
ModalChangeStatus.defaultProps = {
    isBulk: false,
    warningMessage: ''
};


/* harmony default export */ __webpack_exports__["default"] = (ModalChangeStatus);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/modals/ChangeStatus.jsx"))

/***/ })

/******/ });