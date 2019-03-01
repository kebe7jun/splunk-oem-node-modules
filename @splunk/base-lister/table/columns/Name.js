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
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Link__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Tooltip__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_utils_TestSupport__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/table/columns/Name.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/**
 * Name column component.
 * By default, the Name column content is the name of the object.
 * nameAttribute is the default attribute used to get the name from the object but can be overridden.
 */

var ColumnName = function (_Component) {
    _inherits(ColumnName, _Component);

    function ColumnName() {
        var _ref;

        _classCallCheck(this, ColumnName);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ColumnName.__proto__ || Object.getPrototypeOf(ColumnName)).call.apply(_ref, [this].concat(args)));

        _this.setShouldRefreshOnClose = function () {
            _this.setState({
                shouldRefreshOnClose: true
            });
        };

        _this.handleEditClick = function () {
            _this.setState({
                isEditModalOpen: true
            });
        };

        _this.handleRequestClose = function () {
            if (_this.state.shouldRefreshOnClose) {
                _this.props.handleRefreshListing();
            }
            _this.setState({
                isEditModalOpen: false
            });
        };

        _this.state = {
            isEditModalOpen: false,
            shouldRefreshOnClose: false,
            tooltipText: null
        };
        return _this;
    }

    /** @inheritDoc */

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */


    _createClass(ColumnName, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.name && this.name.scrollWidth > this.name.offsetWidth) {
                // eslint-disable-next-line react/no-did-mount-set-state
                this.setState({
                    tooltipText: this.props.object[this.props.nameAttribute]
                });
            }
        }

        /**
         * Setter method that can be used when any action of a Modal should trigger
         * a refresh of the objects list when the Modal closes.
         */


        /**
         * Handles the user click event on the enable/disable control.
         */


        /**
         * Handles the confirmation modal close event.
         */

    }, {
        key: 'render',


        /**
         * Renders the element.
         * @returns {XML} Markup of the Name column.
         */
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                object = _props.object,
                getEditUrl = _props.getEditUrl,
                ModalEdit = _props.ModalEdit,
                idAttribute = _props.idAttribute,
                objectNameSingular = _props.objectNameSingular,
                objectNamePlural = _props.objectNamePlural,
                errorFormatter = _props.errorFormatter,
                handleRefreshListing = _props.handleRefreshListing,
                isEnabled = _props.isEnabled,
                nameAttribute = _props.nameAttribute,
                otherProps = _objectWithoutProperties(_props, ['object', 'getEditUrl', 'ModalEdit', 'idAttribute', 'objectNameSingular', 'objectNamePlural', 'errorFormatter', 'handleRefreshListing', 'isEnabled', 'nameAttribute']);

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                _extends({}, Object(__WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Tooltip___default.a,
                    { content: this.state.tooltipText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Link___default.a,
                        {
                            'data-test-name': 'action-link',
                            style: {
                                textOverflow: 'ellipsis',
                                maxWidth: '400px',
                                display: 'block',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap'
                            },
                            to: getEditUrl ? getEditUrl(object) : undefined,
                            onClick: !getEditUrl ? this.handleEditClick : undefined,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 104
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { ref: function ref(c) {
                                    return _this2.name = c;
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 116
                                },
                                __self: this
                            },
                            object[nameAttribute]
                        )
                    ),
                    !getEditUrl && this.state.isEditModalOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalEdit, _extends({
                        action: 'edit',
                        key: 'edit-modal-' + object[idAttribute],
                        open: this.state.isEditModalOpen,
                        handleRequestClose: this.handleRequestClose,
                        object: object,
                        objectNameSingular: objectNameSingular,
                        objectNamePlural: objectNamePlural,
                        idAttribute: idAttribute,
                        isEnabled: isEnabled,
                        nameAttribute: nameAttribute,
                        errorFormatter: errorFormatter,
                        handleRefreshListing: handleRefreshListing,
                        setShouldRefreshOnClose: this.setShouldRefreshOnClose
                    }, otherProps, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 120
                        },
                        __self: this
                    }))
                )
            );
        }
    }]);

    return ColumnName;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ColumnName.propTypes = {
    object: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    objects: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    objectNameSingular: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectNamePlural: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    idAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    nameAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    isEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    ModalEdit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    errorFormatter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleRefreshListing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    getEditUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};


/* harmony default export */ __webpack_exports__["default"] = (ColumnName);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/table/columns/Name.jsx"))

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Tooltip");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/TestSupport");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Link");

/***/ })

/******/ });