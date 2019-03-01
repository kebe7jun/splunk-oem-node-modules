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
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
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

/***/ 102:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Table__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_table_columns_Name__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_table_columns_Name___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_table_columns_Name__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_table_columns_Status__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_table_columns_Status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_table_columns_Status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_modals_Error__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_modals_Error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_modals_Error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/table/Content.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

var TableContent = function (_Component) {
    _inherits(TableContent, _Component);

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */
    function TableContent() {
        var _ref,
            _this2 = this;

        _classCallCheck(this, TableContent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = TableContent.__proto__ || Object.getPrototypeOf(TableContent)).call.apply(_ref, [this].concat(args)));

        _this.handlerRequestMoveColumn = function (_ref2) {
            var fromIndex = _ref2.fromIndex,
                toIndex = _ref2.toIndex;

            var columns = [].concat(_toConsumableArray(_this.state.columns)); // clone
            var headerToMove = columns[fromIndex];

            var insertionIndex = toIndex < fromIndex ? toIndex : toIndex + 1;
            columns.splice(insertionIndex, 0, headerToMove);

            var removalIndex = toIndex < fromIndex ? fromIndex + 1 : fromIndex;
            columns.splice(removalIndex, 1);

            _this.setState({ columns: columns });
        };

        _this.handleRequestErrorModalClose = function () {
            _this.setState({
                errorModalOpen: false
            });
        };

        _this.state = {
            errorModalOpen: false,
            errorMessage: '',
            columns: [{
                key: 'title',
                sortKey: _this.props.nameSortAttribute,
                label: gettext('Name'),
                content: function content(object, otherProps) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_table_columns_Name___default.a, _extends({
                        object: object,
                        idAttribute: otherProps.idAttribute,
                        nameAttribute: otherProps.nameAttribute,
                        getEditUrl: otherProps.getEditUrl,
                        objectNamePlural: otherProps.objectNamePlural,
                        objectNameSingular: otherProps.objectNameSingular
                    }, otherProps, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        },
                        __self: _this2
                    }));
                }
            }].concat(_toConsumableArray(_this.props.showActionsColumn ? [{
                key: 'actions',
                label: gettext('Actions'),
                Component: _this.props.ColumnActions
            }] : []), _toConsumableArray(_this.props.showStatusColumn ? [{
                key: 'status',
                label: gettext('Status'),
                Component: __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_table_columns_Status___default.a
            }] : []), _toConsumableArray(_this.props.showOwnerColumn ? [{
                key: 'owner',
                sortKey: 'owner',
                label: gettext('Owner'),
                content: function content(object) {
                    return object.acl.owner;
                }
            }] : []), _toConsumableArray(_this.props.showAppColumn ? [{
                key: 'app',
                sortKey: 'app',
                label: gettext('App'),
                content: function content(object) {
                    var eaiAcl = object.acl;
                    if (!eaiAcl) {
                        return 'search';
                    }
                    return eaiAcl.app;
                }
            }] : []), _toConsumableArray(_this.props.showSharingColumn ? [{
                key: 'sharing',
                sortKey: 'sharing',
                label: gettext('Sharing'),
                content: function content(object) {
                    var sharing = object.acl.sharing;
                    if (sharing === 'global') {
                        return gettext('Global');
                    } else if (sharing === 'app') {
                        return gettext('App');
                    }
                    return gettext('Private');
                }
            }] : []), _toConsumableArray(_this.props.customColumns))
        };
        return _this;
    }

    /**
     * Checks if any filter is applied to give the user a meaningful empty message.
     * @returns {String} user friendly empty message
     */


    _createClass(TableContent, [{
        key: 'getEmptyMessage',
        value: function getEmptyMessage() {
            if (this.props.filterApp !== this.props.initialAppFilter || this.props.filterOwner !== this.props.initialOwnerFilter || this.props.filterString !== this.props.initialStringFilter) {
                return Object(__WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__["sprintf"])(gettext('No %s found with the current filters.'), this.props.objectNamePlural.toLowerCase());
            }
            return this.props.emptyMessage || Object(__WEBPACK_IMPORTED_MODULE_3__splunk_ui_utils_format__["sprintf"])(gettext('No %s found.'), this.props.objectNamePlural.toLowerCase());
        }

        /**
         * Function that checks if the table selection should be enabled.
         */

    }, {
        key: 'isTableSelectionEnabled',
        value: function isTableSelectionEnabled() {
            var _this3 = this;

            return this.props.permissions.canBulkChangeStatus || this.props.permissions.canBulkDelete || this.props.permissions.canBulkEditPermissions || Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"])(this.props.customBulkActions, function (customBulkAction) {
                if (typeof customBulkAction.isVisible === 'function') {
                    return customBulkAction.isVisible(_this3.props);
                }
                return true;
            }).length > 0;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                fetching = _props.fetching,
                objects = _props.objects,
                hasRowExpansion = _props.hasRowExpansion,
                canMoveColumns = _props.canMoveColumns,
                permissions = _props.permissions,
                selectedRows = _props.selectedRows,
                ColumnsView = _props.ColumnsView,
                handleToggleAllRows = _props.handleToggleAllRows,
                handleColumnSort = _props.handleColumnSort,
                sortKey = _props.sortKey,
                sortDirection = _props.sortDirection,
                otherProps = _objectWithoutProperties(_props, ['fetching', 'objects', 'hasRowExpansion', 'canMoveColumns', 'permissions', 'selectedRows', 'ColumnsView', 'handleToggleAllRows', 'handleColumnSort', 'sortKey', 'sortDirection']);

            var _state = this.state,
                columns = _state.columns,
                errorMessage = _state.errorMessage,
                errorModalOpen = _state.errorModalOpen;

            var isTableSelectionEnabled = this.isTableSelectionEnabled();
            return [!fetching && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: 'table-container', style: { padding: '10px 20px 20px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 222
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Table___default.a,
                    _extends({
                        key: 'table',
                        innerStyle: { background: '#ffffff' },
                        onRequestToggleAllRows: isTableSelectionEnabled ? handleToggleAllRows : undefined,
                        onRequestMoveColumn: canMoveColumns ? this.handlerRequestMoveColumn : undefined,
                        rowExpansion: hasRowExpansion ? 'single' : 'none',
                        rowSelection: isTableSelectionEnabled ? this.props.rowSelectionState() : undefined,
                        stripeRows: true
                    }, Object(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 223
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Table___default.a.Head,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 239
                            },
                            __self: this
                        },
                        columns.map(function (headData, i) {
                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Table___default.a.HeadCell,
                                {
                                    key: headData.sortKey || i,
                                    onSort: headData.sortKey ? handleColumnSort : undefined,
                                    sortKey: headData.sortKey,
                                    sortDir: headData.sortKey === sortKey ? sortDirection : 'none',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 241
                                    },
                                    __self: _this4
                                },
                                headData.label
                            );
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ColumnsView, _extends({
                        objects: objects,
                        isTableSelectionEnabled: isTableSelectionEnabled,
                        selectedRows: selectedRows,
                        columns: columns,
                        permissions: permissions
                    }, Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["omit"])(otherProps, 'fetching', 'ColumnActions', 'showActionsColumn', 'showStatusColumn', 'showOwnerColumn', 'showAppColumn', 'showSharingColumn', 'customColumns', 'nameSortAttribute', 'emptyMessage', 'filterApp', 'filterOwner', 'filterString', 'initialAppFilter', 'initialOwnerFilter', 'initialStringFilter', 'customBulkActions'), {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 251
                        },
                        __self: this
                    }))
                )
            ), fetching && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: 'loading', style: { padding: '15px 20px', background: '#ffffff' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 282
                    },
                    __self: this
                },
                gettext('Loading...')
            ), !fetching && objects.length === 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: 'no-objects', style: { padding: '15px 20px', background: '#ffffff' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 288
                    },
                    __self: this
                },
                this.getEmptyMessage()
            ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_modals_Error___default.a, {
                key: 'error-modal',
                open: errorModalOpen,
                errorMessage: errorMessage,
                handleRequestClose: this.handleRequestErrorModalClose,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 292
                },
                __self: this
            })];
        }
    }]);

    return TableContent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

TableContent.propTypes = {
    fetching: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    objects: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    objectNamePlural: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    nameSortAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    hasRowExpansion: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    canMoveColumns: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    sortKey: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    sortDirection: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    permissions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    handleColumnSort: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleToggleAllRows: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    selectedRows: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    rowSelectionState: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    customColumns: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    customBulkActions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    ColumnsView: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    ColumnActions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    showActionsColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    showAppColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    showOwnerColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    showSharingColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    showStatusColumn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    filterApp: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    filterString: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    filterOwner: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    initialAppFilter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    initialOwnerFilter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    initialStringFilter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    handleUpdateItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    emptyMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
TableContent.defaultProps = {};


/* harmony default export */ __webpack_exports__["default"] = (TableContent);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/table/Content.jsx"))

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/columns/Name");

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/columns/Status");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/Error");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/TestSupport");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Table");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/format");

/***/ })

/******/ });