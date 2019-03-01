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
/******/ 	return __webpack_require__(__webpack_require__.s = 114);
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Switch__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_utils_TestSupport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Status_css__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Status_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Status_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/table/columns/Status.jsx';

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

/**
 * Status column component.
 * By default, the Status column content shows a control that allows the user to enable/disable the object.
 * The object needs to support enable/disable.
 * When user clicks the control to enable/disable, a confirmation modal opens.
 */

var ColumnStatus = function (_Component) {
    _inherits(ColumnStatus, _Component);

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */
    function ColumnStatus() {
        var _ref;

        _classCallCheck(this, ColumnStatus);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ColumnStatus.__proto__ || Object.getPrototypeOf(ColumnStatus)).call.apply(_ref, [this].concat(args)));

        _this.handleEnableDisableClick = function () {
            _this.setState({
                isChangeStatusOpen: true
            });
        };

        _this.handleRequestClose = function () {
            _this.setState({
                isChangeStatusOpen: false
            });
        };

        _this.state = {
            /** boolean indicating whether the confirmation modal is open */
            isChangeStatusOpen: false
        };

        _this.objectPermissions = _this.objectPermissions();
        return _this;
    }

    /**
     * Check the object permissions.
     */


    _createClass(ColumnStatus, [{
        key: 'objectPermissions',
        value: function objectPermissions() {
            var objectPerms = {
                read: true,
                write: true,
                delete: true
            };
            if (this.props.object.permissions) {
                objectPerms.read = this.props.object.permissions.read;
                objectPerms.write = this.props.object.permissions.write;
                objectPerms.delete = this.props.object.permissions.delete;
            }
            return objectPerms;
        }

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
         * @returns {XML} Markup of the Status column.
         */
        value: function render() {
            var _props = this.props,
                object = _props.object,
                idAttribute = _props.idAttribute,
                objectsCollectionPath = _props.objectsCollectionPath,
                objectNameSingular = _props.objectNameSingular,
                objectNamePlural = _props.objectNamePlural,
                isEnabled = _props.isEnabled,
                nameAttribute = _props.nameAttribute,
                errorFormatter = _props.errorFormatter,
                permissions = _props.permissions,
                ModalChangeStatus = _props.ModalChangeStatus,
                handleRefreshListing = _props.handleRefreshListing,
                handleUpdateItem = _props.handleUpdateItem,
                otherProps = _objectWithoutProperties(_props, ['object', 'idAttribute', 'objectsCollectionPath', 'objectNameSingular', 'objectNamePlural', 'isEnabled', 'nameAttribute', 'errorFormatter', 'permissions', 'ModalChangeStatus', 'handleRefreshListing', 'handleUpdateItem']);

            var enabled = isEnabled(object);
            // eslint-disable-next-line no-nested-ternary
            return this.objectPermissions.write && permissions.write ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                _extends({ className: __WEBPACK_IMPORTED_MODULE_4__Status_css___default.a.status }, Object(__WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Switch___default.a,
                    {
                        'data-test-name': 'change-status',
                        key: 'status-' + object[idAttribute],
                        value: enabled,
                        onClick: this.handleEnableDisableClick,
                        selected: enabled,
                        appearance: 'toggle',
                        size: 'medium',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 111
                        },
                        __self: this
                    },
                    enabled ? gettext('Enabled') : gettext('Disabled')
                ),
                this.state.isChangeStatusOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalChangeStatus, _extends({
                    key: 'status-modal-' + object[idAttribute],
                    open: this.state.isChangeStatusOpen,
                    handleRequestClose: this.handleRequestClose,
                    object: object,
                    objectsCollectionPath: objectsCollectionPath,
                    objectNameSingular: objectNameSingular,
                    objectNamePlural: objectNamePlural,
                    idAttribute: idAttribute,
                    isEnabled: isEnabled,
                    permissions: permissions,
                    nameAttribute: nameAttribute,
                    errorFormatter: errorFormatter,
                    handleRefreshListing: handleRefreshListing,
                    handleUpdateItem: handleUpdateItem,
                    selectedRows: []
                }, otherProps, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 123
                    },
                    __self: this
                }))
            ) : enabled ? gettext('Enabled') : gettext('Disabled');
        }
    }]);

    return ColumnStatus;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ColumnStatus.propTypes = {
    object: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    objectNameSingular: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectNamePlural: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    ModalChangeStatus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    idAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    isEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    nameAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    errorFormatter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleRefreshListing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleUpdateItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    permissions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
ColumnStatus.defaultProps = {};


/* harmony default export */ __webpack_exports__["default"] = (ColumnStatus);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/table/columns/Status.jsx"))

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Switch");

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(118)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/@splunk/css-loader/lib/index.js?debug!./Status.css", function() {
			var newContent = require("!!../../../node_modules/@splunk/css-loader/lib/index.js?debug!./Status.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {
                    var styles = {"enterprise":"/**  Brand Colors\n *  -------------------------\n */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/*  Variables\n *  ================================================== */\n/**  Basic Colors\n *  -------------------------\n */\n/** ### Grayscale */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Accent */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Semantic Colors\n *  ------------------------- */\n/** ### Error */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Alert */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Warning */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Success */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Info */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Categorical Colors\n *  ------------------------- */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Diverging Colors\n *  ------------------------- */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Usage-based Colors\n *  ------------------------- */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-border */\n/* @docs-color-border */\n/* @docs-color */\n/* @docs-color-background */\n/**  Syntax Colors\n *  -------------------------\n * The following colors should only be used for syntax coloring of code. */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/**  Shadows\n *  ------------------------- */\n/* @docs-box-shadow */\n/* @docs-box-shadow */\n/* @docs-box-shadow */\n/**  Backgrounds\n *  ------------------------- */\n/* @docs-background */\n/**  Border\n *  ------------------------- */\n/* @docs-string */\n/* @docs-string */\n/**  Measures\n *  -------------------------\nSpacing is used for margin on any element or padding on containers, but could be used for other\n * properties that position elements.\n * * Larger containers, such as Cards or Modals use $spacing.\n * * $spacingHalf and $spacingQuarter are primarily for horizontal spacing between smaller elements.\n * * Just because a desired value equals 20, 10 or 5 pixels, does not mean it's appropriate to\n * use spacing variables.\n */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/**  Fonts\n *  ------------------------- */\n/* @docs-string */\n/* @docs-font-family */\n/* @docs-font-family */\n/* @docs-font-family */\n/* @docs-font-family */\n/**  Layers\n *  -------------------------\n *  If a variable does not suit your purpose, set a value relatively such as, zindexModal +1 */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/*  Mixins */\n/*  ================== */\n/**  reset\n * --------------------------------------------------\n * The reset mixin resets all css properties to their browser defaults, plus many to Splunk UI\n * specific values. This ensures an element is not inheriting any inappropriate styles.\n * The mixin may be optionally passed it's display property which defaults to inline.\n *\n *  ##### Example\n *  ``` css\n *  .myButton {\n *      @mixin reset inline-block;\n *      border-style: solid;\n *      padding: $spacingHalf;\n *  }\n *  ```\n */\n/** clearfix\n *  --------\n * Clearfix is used on a container to ensure it's height is at least as tall as any floating\n * children.\n *\n * ##### Example\n * ``` css\n * .container {\n *     @mixin clearfix;\n * }\n * ```\n */\n/**  ellipsis\n *  -------------------------\n *  Ellipsis overflowing text.  Requires inline-block or block;\n *\n *  ##### Example\n * ``` css\n * .button {\n *     @mixin ellipsis;\n *     display: inline-block;\n * }\n * ```\n */\n/**  print\n *  ------------------\n * Several print mixins are helpful for creating print stylesheets.\n *\n * ### print-width-100-percent\n * Force an element to be exactly 100% wide so that it doesn't overflow the page.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .container {\n *         @mixin print-width-100-percent;\n *     }\n * }\n * ```\n */\n/** ### print-hide\n * Hide an element, such as a button, when printing.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-hide;\n *     }\n * }\n * ```\n */\n/** ### print-no-background\n * Remove a background gradients and images when printing.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-no-background;\n *     }\n * }\n * ```\n */\n/** ### print-wrap-all\n * Ensure that all text wraps so that it doesn't overflow the page.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-wrap-all;\n *     }\n * }\n * ```\n */\n/**  Brand Colors\n *  -------------------------\n */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/*  Variables\n *  ================================================== */\n/**  Basic Colors\n *  -------------------------\n */\n/** ### Grayscale */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Accent */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Semantic Colors\n *  ------------------------- */\n/** ### Error */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Alert */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Warning */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Success */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Info */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Categorical Colors\n *  ------------------------- */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Diverging Colors\n *  ------------------------- */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Usage-based Colors\n *  ------------------------- */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-border */\n/* @docs-color-border */\n/* @docs-color */\n/* @docs-color-background */\n/**  Syntax Colors\n *  -------------------------\n * The following colors should only be used for syntax coloring of code. */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/**  Shadows\n *  ------------------------- */\n/* @docs-box-shadow */\n/* @docs-box-shadow */\n/* @docs-box-shadow */\n/**  Backgrounds\n *  ------------------------- */\n/* @docs-background */\n/**  Border\n *  ------------------------- */\n/* @docs-string */\n/* @docs-string */\n/**  Measures\n *  -------------------------\nSpacing is used for margin on any element or padding on containers, but could be used for other\n * properties that position elements.\n * * Larger containers, such as Cards or Modals use $spacing.\n * * $spacingHalf and $spacingQuarter are primarily for horizontal spacing between smaller elements.\n * * Just because a desired value equals 20, 10 or 5 pixels, does not mean it's appropriate to\n * use spacing variables.\n */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/**  Fonts\n *  ------------------------- */\n/* @docs-string */\n/* @docs-font-family */\n/* @docs-font-family */\n/* @docs-font-family */\n/* @docs-font-family */\n/**  Layers\n *  -------------------------\n *  If a variable does not suit your purpose, set a value relatively such as, zindexModal +1 */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/*  Mixins */\n/*  ================== */\n/**  reset\n * --------------------------------------------------\n * The reset mixin resets all css properties to their browser defaults, plus many to Splunk UI\n * specific values. This ensures an element is not inheriting any inappropriate styles.\n * The mixin may be optionally passed it's display property which defaults to inline.\n *\n *  ##### Example\n *  ``` css\n *  .myButton {\n *      @mixin reset inline-block;\n *      border-style: solid;\n *      padding: $spacingHalf;\n *  }\n *  ```\n */\n/** clearfix\n *  --------\n * Clearfix is used on a container to ensure it's height is at least as tall as any floating\n * children.\n *\n * ##### Example\n * ``` css\n * .container {\n *     @mixin clearfix;\n * }\n * ```\n */\n/**  ellipsis\n *  -------------------------\n *  Ellipsis overflowing text.  Requires inline-block or block;\n *\n *  ##### Example\n * ``` css\n * .button {\n *     @mixin ellipsis;\n *     display: inline-block;\n * }\n * ```\n */\n/**  print\n *  ------------------\n * Several print mixins are helpful for creating print stylesheets.\n *\n * ### print-width-100-percent\n * Force an element to be exactly 100% wide so that it doesn't overflow the page.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .container {\n *         @mixin print-width-100-percent;\n *     }\n * }\n * ```\n */\n/** ### print-hide\n * Hide an element, such as a button, when printing.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-hide;\n *     }\n * }\n * ```\n */\n/** ### print-no-background\n * Remove a background gradients and images when printing.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-no-background;\n *     }\n * }\n * ```\n */\n/** ### print-wrap-all\n * Ensure that all text wraps so that it doesn't overflow the page.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-wrap-all;\n *     }\n * }\n * ```\n */\n.status_Status__guid__4fb1ff div[data-test-name='change-status'] {\n    padding: 0;\n}\n","lite":"/**  Brand Colors\n *  -------------------------\n */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/*  Variables\n *  ================================================== */\n/**  Basic Colors\n *  -------------------------\n */\n/** ### Grayscale */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Accent */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Semantic Colors\n *  ------------------------- */\n/** ### Error */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Alert */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Warning */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Success */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Info */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Categorical Colors\n *  ------------------------- */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Diverging Colors\n *  ------------------------- */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Usage-based Colors\n *  ------------------------- */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-border */\n/* @docs-color-border */\n/* @docs-color */\n/* @docs-color-background */\n/**  Syntax Colors\n *  -------------------------\n * The following colors should only be used for syntax coloring of code. */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/**  Shadows\n *  ------------------------- */\n/* @docs-box-shadow */\n/* @docs-box-shadow */\n/* @docs-box-shadow */\n/**  Backgrounds\n *  ------------------------- */\n/* @docs-background */\n/**  Border\n *  ------------------------- */\n/* @docs-string */\n/* @docs-string */\n/**  Measures\n *  -------------------------\nSpacing is used for margin on any element or padding on containers, but could be used for other\n * properties that position elements.\n * * Larger containers, such as Cards or Modals use $spacing.\n * * $spacingHalf and $spacingQuarter are primarily for horizontal spacing between smaller elements.\n * * Just because a desired value equals 20, 10 or 5 pixels, does not mean it's appropriate to\n * use spacing variables.\n */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/**  Fonts\n *  ------------------------- */\n/* @docs-string */\n/* @docs-font-family */\n/* @docs-font-family */\n/* @docs-font-family */\n/* @docs-font-family */\n/**  Layers\n *  -------------------------\n *  If a variable does not suit your purpose, set a value relatively such as, zindexModal +1 */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/*  Mixins */\n/*  ================== */\n/**  reset\n * --------------------------------------------------\n * The reset mixin resets all css properties to their browser defaults, plus many to Splunk UI\n * specific values. This ensures an element is not inheriting any inappropriate styles.\n * The mixin may be optionally passed it's display property which defaults to inline.\n *\n *  ##### Example\n *  ``` css\n *  .myButton {\n *      @mixin reset inline-block;\n *      border-style: solid;\n *      padding: $spacingHalf;\n *  }\n *  ```\n */\n/** clearfix\n *  --------\n * Clearfix is used on a container to ensure it's height is at least as tall as any floating\n * children.\n *\n * ##### Example\n * ``` css\n * .container {\n *     @mixin clearfix;\n * }\n * ```\n */\n/**  ellipsis\n *  -------------------------\n *  Ellipsis overflowing text.  Requires inline-block or block;\n *\n *  ##### Example\n * ``` css\n * .button {\n *     @mixin ellipsis;\n *     display: inline-block;\n * }\n * ```\n */\n/**  print\n *  ------------------\n * Several print mixins are helpful for creating print stylesheets.\n *\n * ### print-width-100-percent\n * Force an element to be exactly 100% wide so that it doesn't overflow the page.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .container {\n *         @mixin print-width-100-percent;\n *     }\n * }\n * ```\n */\n/** ### print-hide\n * Hide an element, such as a button, when printing.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-hide;\n *     }\n * }\n * ```\n */\n/** ### print-no-background\n * Remove a background gradients and images when printing.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-no-background;\n *     }\n * }\n * ```\n */\n/** ### print-wrap-all\n * Ensure that all text wraps so that it doesn't overflow the page.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-wrap-all;\n *     }\n * }\n * ```\n */\n/**  Brand Colors\n *  -------------------------\n */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/*  Variables\n *  ================================================== */\n/**  Basic Colors\n *  -------------------------\n */\n/** ### Grayscale */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Accent */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Semantic Colors\n *  ------------------------- */\n/** ### Error */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Alert */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Warning */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Success */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/** ### Info */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Categorical Colors\n *  ------------------------- */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Diverging Colors\n *  ------------------------- */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/* @docs-color */\n/**  Usage-based Colors\n *  ------------------------- */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-border */\n/* @docs-color-border */\n/* @docs-color */\n/* @docs-color-background */\n/**  Syntax Colors\n *  -------------------------\n * The following colors should only be used for syntax coloring of code. */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/* @docs-color-text */\n/**  Shadows\n *  ------------------------- */\n/* @docs-box-shadow */\n/* @docs-box-shadow */\n/* @docs-box-shadow */\n/**  Backgrounds\n *  ------------------------- */\n/* @docs-background */\n/**  Border\n *  ------------------------- */\n/* @docs-string */\n/* @docs-string */\n/**  Measures\n *  -------------------------\nSpacing is used for margin on any element or padding on containers, but could be used for other\n * properties that position elements.\n * * Larger containers, such as Cards or Modals use $spacing.\n * * $spacingHalf and $spacingQuarter are primarily for horizontal spacing between smaller elements.\n * * Just because a desired value equals 20, 10 or 5 pixels, does not mean it's appropriate to\n * use spacing variables.\n */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/**  Fonts\n *  ------------------------- */\n/* @docs-string */\n/* @docs-font-family */\n/* @docs-font-family */\n/* @docs-font-family */\n/* @docs-font-family */\n/**  Layers\n *  -------------------------\n *  If a variable does not suit your purpose, set a value relatively such as, zindexModal +1 */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/* @docs-string */\n/*  Mixins */\n/*  ================== */\n/**  reset\n * --------------------------------------------------\n * The reset mixin resets all css properties to their browser defaults, plus many to Splunk UI\n * specific values. This ensures an element is not inheriting any inappropriate styles.\n * The mixin may be optionally passed it's display property which defaults to inline.\n *\n *  ##### Example\n *  ``` css\n *  .myButton {\n *      @mixin reset inline-block;\n *      border-style: solid;\n *      padding: $spacingHalf;\n *  }\n *  ```\n */\n/** clearfix\n *  --------\n * Clearfix is used on a container to ensure it's height is at least as tall as any floating\n * children.\n *\n * ##### Example\n * ``` css\n * .container {\n *     @mixin clearfix;\n * }\n * ```\n */\n/**  ellipsis\n *  -------------------------\n *  Ellipsis overflowing text.  Requires inline-block or block;\n *\n *  ##### Example\n * ``` css\n * .button {\n *     @mixin ellipsis;\n *     display: inline-block;\n * }\n * ```\n */\n/**  print\n *  ------------------\n * Several print mixins are helpful for creating print stylesheets.\n *\n * ### print-width-100-percent\n * Force an element to be exactly 100% wide so that it doesn't overflow the page.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .container {\n *         @mixin print-width-100-percent;\n *     }\n * }\n * ```\n */\n/** ### print-hide\n * Hide an element, such as a button, when printing.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-hide;\n *     }\n * }\n * ```\n */\n/** ### print-no-background\n * Remove a background gradients and images when printing.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-no-background;\n *     }\n * }\n * ```\n */\n/** ### print-wrap-all\n * Ensure that all text wraps so that it doesn't overflow the page.\n *\n * ##### Example\n * ``` css\n * @media print {\n *     .interactiveElement {\n *         @mixin print-wrap-all;\n *     }\n * }\n * ```\n */\n.status_Status__guid__4fb1ff div[data-test-name='change-status'] {\n    padding: 0;\n}\n"};
                    var themeLocals = {"enterprise":{"status":"status_Status__guid__4fb1ff"},"lite":{"status":"status_Status__guid__4fb1ff"}};

                    var partialsTheme =
                        window.__splunkd_partials__ &&
                        window.__splunkd_partials__['/services/server/info'] &&
                        window.__splunkd_partials__['/services/server/info']
                            .entry[0].content.product_type;
                    var windowTheme = window.__splunk_ui_theme__;
                    var cTheme = window.$C && window.$C.SPLUNK_UI_THEME;
                    var targetTheme = windowTheme || cTheme || partialsTheme;

                    /* Ensure theme defaults to 'enterprise'. It's possible targetTheme is set to an
                    /* unsupported value, such as 'splunkbase', 'enterprise2018' or false. */
                    var theme = targetTheme === 'lite' ? 'lite' : 'enterprise';

                    function s4() {
                      return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                    }
                    var guid = module.guid ||  s4() + s4() + s4() + s4();
                    // Add guid to locals
                    Object.keys(themeLocals[theme]).forEach(function(className) {
                        var value = themeLocals[theme][className];
                        themeLocals[theme][className] =
                            value.replace(/_guid_/g, guid);
                    });
                    //  Add guid to styles
                    styles[theme] = styles[theme].replace(/_guid_/g, guid);
                    module.exports = [[module.i, styles[theme], '']];
                    module.exports.locals = themeLocals[theme];
                    module.guid = guid;
                
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/TestSupport");

/***/ })

/******/ });