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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
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

/***/ 72:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/modals/Delete.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

var ModalDelete = function (_Component) {
    _inherits(ModalDelete, _Component);

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */
    function ModalDelete(props, context) {
        _classCallCheck(this, ModalDelete);

        var _this = _possibleConstructorReturn(this, (ModalDelete.__proto__ || Object.getPrototypeOf(ModalDelete)).call(this, props, context));

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

        _this.deleteActionDispatcher = function () {
            _this.setState({
                isWorking: true
            });
            if (_this.props.isBulk) {
                _this.bulkDeleteAction();
            } else {
                _this.deleteAction();
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
            _this.props.setShouldRefreshOnClose();
            _this.props.handleDeleteChange(_this.props.selectedRows.length !== 0 ? _this.props.selectedRows.length : 1);
            _this.handleClose();
        };

        _this.deleteAction = function () {
            var deleteFetchInit = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["create"])(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["defaultFetchInit"]);
            deleteFetchInit.method = 'DELETE';
            fetch(_this.props.objectsCollectionPath + '/' + _this.props.object[_this.props.idAttribute], deleteFetchInit).then(Object(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["handleResponse"])(204)).then(function () {
                _this.handleSuccess();
            }).catch(function (response) {
                _this.handleError(Object(__WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__["sprintf"])(gettext('Could not delete %s.'), _this.props.objectNameSingular.toLowerCase()), response);
            });
        };

        _this.bulkDeleteAction = function () {
            var deleteFetchInit = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["create"])(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["defaultFetchInit"]);
            deleteFetchInit.method = 'DELETE';
            var objectsToDelete = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["map"])(_this.props.selectedRows, function (object) {
                var toDelete = {};
                toDelete[_this.props.idAttribute] = object;
                return toDelete;
            });
            var filterObj = {
                $or: objectsToDelete
            };
            var jsonFilter = {
                shared: true,
                filter_string: filterObj
            };

            fetch(_this.props.objectsCollectionPath + '?filter=' + JSON.stringify(jsonFilter), deleteFetchInit).then(Object(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["handleResponse"])(204)).then(function () {
                _this.handleSuccess();
            }).catch(function (response) {
                _this.handleError(Object(__WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__["sprintf"])(gettext('Could not bulk delete %s.'), _this.props.objectNamePlural.toLowerCase()), response);
            });
        };

        _this.state = {
            /** Boolean indicating whether the page is working (saving, deleting, ...). Used to disable button. */
            isWorking: false,
            /** String containing the error message, if any */
            errorMessage: ''
        };
        return _this;
    }

    _createClass(ModalDelete, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.setState({
                isWorking: false,
                errorMessage: ''
            });
        }

        /**
         * Error handler
         * @param {String} message error message.
         * @param {String} response request response containing some more useful information.
         */

    }, {
        key: 'render',
        value: function render() {
            var modalTitle = Object(__WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__["sprintf"])(gettext('%s Delete %s'), this.props.isBulk ? gettext('Bulk') : '', this.props.selectedRows.length > 1 ? this.props.objectNamePlural : this.props.objectNameSingular);
            var modalContent = '';
            if (this.props.isBulk) {
                modalContent = Object(__WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__["sprintf"])(gettext('Are you sure you want to delete %s %s?'), this.props.selectedRows.length, this.props.selectedRows.length > 1 ? this.props.objectNamePlural.toLowerCase() : this.props.objectNameSingular.toLowerCase());
            } else {
                modalContent = Object(__WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__["sprintf"])(gettext("Are you sure you want to delete '%s'?"), this.props.object[this.props.nameAttribute]);
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default.a,
                _extends({
                    onRequestClose: this.handleClose,
                    open: this.props.open,
                    style: { width: '500px' }
                }, Object(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 195
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default.a.Header, { title: modalTitle, onRequestClose: this.handleClose, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 201
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default.a.Body,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 202
                        },
                        __self: this
                    },
                    this.state.errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message___default.a,
                        { type: 'error', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 204
                            },
                            __self: this
                        },
                        this.state.errorMessage
                    ),
                    this.props.warningMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message___default.a,
                        { type: 'warning', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 207
                            },
                            __self: this
                        },
                        this.props.warningMessage
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { style: { wordBreak: 'break-word' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 209
                            },
                            __self: this
                        },
                        modalContent
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Modal___default.a.Footer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 211
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button___default.a, {
                        'data-test-name': 'cancel-btn',
                        onClick: this.handleClose,
                        label: gettext('Cancel'),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 212
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Button___default.a, {
                        appearance: 'primary',
                        'data-test-name': 'delete-btn',
                        disabled: this.state.isWorking,
                        onClick: this.deleteActionDispatcher,
                        label: this.state.isWorking ? gettext('Deleting...') : gettext('Delete'),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 217
                        },
                        __self: this
                    })
                )
            );
        }
    }]);

    return ModalDelete;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ModalDelete.propTypes = {
    open: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    object: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectNameSingular: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectNamePlural: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    idAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    nameAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    handleRequestClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleDeleteChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    errorFormatter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    selectedRows: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    setShouldRefreshOnClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    /** boolean indicating whether the delete action is bulk */
    isBulk: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    /** Warning message to display at the top of the modal */
    warningMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
ModalDelete.defaultProps = {
    isBulk: false,
    warningMessage: ''
};


/* harmony default export */ __webpack_exports__["default"] = (ModalDelete);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/modals/Delete.jsx"))

/***/ })

/******/ });