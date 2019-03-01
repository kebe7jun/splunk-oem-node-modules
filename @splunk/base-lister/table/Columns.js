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
/******/ 	return __webpack_require__(__webpack_require__.s = 101);
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

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Table__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_DefinitionList__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_DefinitionList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_DefinitionList__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/table/Columns.jsx';

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
 * Main column component.
 * This components creates the columns content. It's responsible for maintaining a predefined order which is the following:
 * Columns:
 *  - Name
 *  - Actions
 *  - Status
 *  - Owner
 *  - App
 *  - Sharing
 *  - Custom columns (if any)
 *  This component is also responsible for the rendering of the expansion row.
 *  A default getExpansionRow function is defined but can be overridden.
 */

var Columns = function (_Component) {
    _inherits(Columns, _Component);

    function Columns() {
        _classCallCheck(this, Columns);

        return _possibleConstructorReturn(this, (Columns.__proto__ || Object.getPrototypeOf(Columns)).apply(this, arguments));
    }

    _createClass(Columns, [{
        key: 'getExpansionRow',


        /**
         * Override the default expansion row function.
         * @param {Object} object current object
         * @param {Number} colSpan number of columns for colSpan props of Table.Cell
         * @returns {XML} markup of the expansion row component
         */

        /**
         * Tells the framework that this is the body of the table.
         * @type {string}
         */
        value: function getExpansionRow(object, colSpan) {
            var objectKey = object[this.props.idAttribute];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Table___default.a.Row,
                { key: 'expansion-row-' + objectKey, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Table___default.a.Cell,
                    {
                        key: 'expansion-cell-' + objectKey,
                        style: { borderTop: 'none' },
                        colSpan: colSpan,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_DefinitionList___default.a,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_DefinitionList___default.a.Term,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                },
                                __self: this
                            },
                            gettext('Description')
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_DefinitionList___default.a.Description,
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 64
                                },
                                __self: this
                            },
                            object.description
                        )
                    )
                )
            );
        } // Used internally by @splunk/react-ui/Table
        /**
         * See base-lister/src/Main.jsx for propTypes definition.
         */

    }, {
        key: 'isDisabled',
        value: function isDisabled(object) {
            return this.props.isDefaultObject(object) || !this.props.permissions.write || (object.permissions ? !object.permissions.write : false);
        }

        /**
         * Renders the element.
         * @returns {XML} Markup of the Main component.
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                objects = _props.objects,
                handleToggleRow = _props.handleToggleRow,
                idAttribute = _props.idAttribute,
                isDefaultObject = _props.isDefaultObject,
                isTableSelectionEnabled = _props.isTableSelectionEnabled,
                selectedRows = _props.selectedRows,
                permissions = _props.permissions,
                columns = _props.columns,
                getExpansionRow = _props.getExpansionRow,
                rowExpansion = _props.rowExpansion,
                stripeRows = _props.stripeRows,
                otherProps = _objectWithoutProperties(_props, ['objects', 'handleToggleRow', 'idAttribute', 'isDefaultObject', 'isTableSelectionEnabled', 'selectedRows', 'permissions', 'columns', 'getExpansionRow', 'rowExpansion', 'stripeRows']);

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Table___default.a.Body,
                { rowExpansion: rowExpansion, stripeRows: stripeRows, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                    },
                    __self: this
                },
                objects.map(function (object) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Table___default.a.Row,
                        {
                            'data-test-name': 'row-' + object[idAttribute],
                            key: 'row-' + object[idAttribute],
                            data: object[idAttribute],
                            onRequestToggle: isTableSelectionEnabled ? handleToggleRow : undefined,
                            expansionRow: typeof getExpansionRow === 'function' ? getExpansionRow(object, columns.length) : _this2.getExpansionRow(object, columns.length),
                            selected: isTableSelectionEnabled ? selectedRows.indexOf(object[idAttribute]) !== -1 : undefined,
                            disabled: _this2.isDisabled(object),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 103
                            },
                            __self: _this2
                        },
                        columns.map(function (column) {
                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Table___default.a.Cell,
                                {
                                    'data-test-name': 'cell-' + column.key,
                                    key: 'cell-' + object[idAttribute] + '-' + column.key,
                                    style: column.key === 'actions' ? { padding: '0', verticalAlign: 'middle' } : { verticalAlign: 'middle' },
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 121
                                    },
                                    __self: _this2
                                },
                                column.content ? column.content(object, Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["merge"])(otherProps, {
                                    objects: objects,
                                    idAttribute: idAttribute
                                })) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(column.Component, _extends({
                                    object: object,
                                    objects: objects,
                                    idAttribute: idAttribute,
                                    isDefaultObject: isDefaultObject,
                                    permissions: permissions
                                }, Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["omit"])(otherProps, 'handleToggleRow', 'getExpansionRow'), {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 139
                                    },
                                    __self: _this2
                                }))
                            );
                        })
                    );
                })
            );
        }
    }]);

    return Columns;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Columns.splunkUiType = 'Table.Body';
Columns.propTypes = {
    objects: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    idAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    handleToggleRow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    selectedRows: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    isTableSelectionEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    isDefaultObject: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    permissions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    columns: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    getExpansionRow: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};


/* harmony default export */ __webpack_exports__["default"] = (Columns);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Table");

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/DefinitionList");

/***/ })

/******/ });