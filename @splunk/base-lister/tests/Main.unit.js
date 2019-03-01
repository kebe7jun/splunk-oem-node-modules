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
/******/ 	return __webpack_require__(__webpack_require__.s = 119);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/EditPerms");

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chai__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_enzyme__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_enzyme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_enzyme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_table_Content__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_table_Content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_table_Content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_table_Header__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_table_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_table_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_table_Columns__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_table_Columns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_table_Columns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_table_columns_Actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_table_columns_Actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_table_columns_Actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_modals_EditPerms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_modals_EditPerms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_modals_EditPerms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_modals_Delete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_modals_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_modals_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_NewEditClone__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_NewEditClone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_NewEditClone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_mock_Main__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_mock_Main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_mock_Main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_mock_table_Filters__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_mock_table_Filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_mock_table_Filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_utils_mock_modals_ChangeStatus__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_utils_mock_modals_ChangeStatus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_utils_mock_modals_ChangeStatus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_utils_mock_modals_Delete__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_utils_mock_modals_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_utils_mock_modals_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_utils_mock_modals_NewEditClone__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_utils_mock_modals_NewEditClone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_utils_mock_modals_NewEditClone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/tests/Main.unit.jsx',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-env mocha */





















/**
 * Helper method to instantiate the Main tests to avoid duplication of code.
 *
 * @param {Object} override object with props values that will override the defaults.
 * @returns {Object} Main node with the props.
 */
function getMainWithProps(override) {
    var defaults = {
        showHeader: true,
        showFilters: true
    };

    var properties = _extends({}, defaults, override);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_mock_Main___default.a, _extends({
        showHeader: properties.showHeader,
        showFilters: properties.showFilters,
        objectNamePlural: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["objectNamePlural"],
        objectNameSingular: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["objectNameSingular"],
        objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["objectsCollectionPath"],
        headerDescription: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["headerDescription"],
        permissions: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["permissions"],
        TableFilters: __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_mock_table_Filters___default.a,
        ModalChangeStatus: __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_utils_mock_modals_ChangeStatus___default.a,
        ModalClone: __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_utils_mock_modals_NewEditClone___default.a,
        ModalDelete: __WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_utils_mock_modals_Delete___default.a,
        ModalEdit: __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_utils_mock_modals_NewEditClone___default.a,
        ModalEditTitleOrDescription: __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_utils_mock_modals_NewEditClone___default.a,
        ModalNew: __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_utils_mock_modals_NewEditClone___default.a
    }, properties, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        },
        __self: this
    }));
}
describe('Main', function () {
    var wrapper = null;

    afterEach(function () {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('renders correctly', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getMainWithProps({}));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="@splunk/base-lister/Main"]').exists(), 'Main base-lister component should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="@splunk/base-lister/table/Header"]').exists(), 'Header component should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="@splunk/base-lister/table/Filters"]').exists(), 'Filters container should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="@splunk/base-lister/table/Content"]').exists(), 'Table should render correctly');
    });

    it('renders correctly and honors "showHeader" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getMainWithProps({
            showHeader: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('[data-test="header"]').exists(), 'Header component NOT should render correctly');
    });

    it('renders correctly and honors "showFilters" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getMainWithProps({
            showFilters: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('[data-test="filters"]').exists(), 'Filters container should NOT be rendered');
    });

    it('renders correctly and has the appropriate props', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_mock_Main___default.a, {
            objectNamePlural: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["objectNamePlural"],
            objectNameSingular: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["objectNameSingular"],
            objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["objectsCollectionPath"],
            appsCollectionPath: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["appsCollectionPath"],
            usersCollectionPath: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["usersCollectionPath"],
            permissions: __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["permissions"],
            TableFilters: __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_mock_table_Filters___default.a,
            foo: 'bar',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 124
            },
            __self: _this
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        wrapper.setState({ isNewObjectModalOpen: true });
        var Main = wrapper.find('MockMain');
        var propsKeys = Object.keys(wrapper.props());
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(propsKeys.length, 48, 'Main should have 48 props');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().objectNameSingular, __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["objectNameSingular"], 'Main should have the appropriate "objectNameSingular" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().objectNamePlural, __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["objectNamePlural"], 'Main should have the appropriate "objectNamePlural" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(Main.props().errorFormatter), 'function', 'Main should have the appropriate "errorFormatter" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(Main.props().getObjectsCollectionFetchData), 'function', 'Main should have the appropriate "getObjectsCollectionFetchData" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(Main.props().getObjectsCountFetchData), 'function', 'Main should have the appropriate "getObjectsCountFetchData" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(Main.props().isEnabled), 'function', 'Main should have the appropriate "isEnabled" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(Main.props().isDefaultObject), 'function', 'Main should have the appropriate "isDefaultObject" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(Main.props().permissions, __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["permissions"], 'Main should have the appropriate "permissions" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().objectsCollectionPath, __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["objectsCollectionPath"], 'Main should have the appropriate "objectsCollectionPath" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().appsCollectionPath, __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["appsCollectionPath"], 'Main should have the appropriate "appsCollectionPath" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().usersCollectionPath, __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_utils_mock_Data__["usersCollectionPath"], 'Main should have the appropriate "usersCollectionPath" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().showHeader, 'Main should have the appropriate "showHeader" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(Main.props().canMoveColumns, 'Main should have the appropriate "canMoveColumns" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(Main.props().isSingleRowTableFilter, 'Main should have the appropriate "isSingleRowTableFilter" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().showFilters, 'Main should have the appropriate "showFilters" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().hasRowExpansion, 'Main should have the appropriate "hasRowExpansion" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().showActionsColumn, 'Main should have the appropriate "showActionsColumn" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().showAppColumn, 'Main should have the appropriate "showAppColumn" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().showOwnerColumn, 'Main should have the appropriate "showOwnerColumn" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().showSharingColumn, 'Main should have the appropriate "showSharingColumn" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().showStatusColumn, 'Main should have the appropriate "showStatusColumn" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().showAppFilter, 'Main should have the appropriate "showAppFilter" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(Main.props().showOwnerFilter, 'Main should have the appropriate "showOwnerFilter" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().TableContent, __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_table_Content___default.a, 'Main should have the appropriate "TableContent" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().TableFilters, __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_mock_table_Filters___default.a, 'Main should have the appropriate "TableFilters" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().TableHeader, __WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_table_Header___default.a, 'Main should have the appropriate "TableHeader" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().ColumnActions, __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_table_columns_Actions___default.a, 'Main should have the appropriate "ColumnActions" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().ColumnsView, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_table_Columns___default.a, 'Main should have the appropriate "ColumnsView" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().ModalDelete, __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_modals_Delete___default.a, 'Main should have the appropriate "ModalDelete" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().ModalChangeStatus, __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus___default.a, 'Main should have the appropriate "ModalChangeStatus" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().ModalClone, __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_NewEditClone___default.a, 'Main should have the appropriate "ModalClone" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().ModalNew, __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_NewEditClone___default.a, 'Main should have the appropriate "ModalNew" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().ModalEdit, __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_NewEditClone___default.a, 'Main should have the appropriate "ModalEdit" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().ModalEditTitleOrDescription, __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_NewEditClone___default.a, 'Main should have the appropriate "ModalEditTitleOrDescription" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().ModalEditPerms, __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_modals_EditPerms___default.a, 'Main should have the appropriate "ModalEditPerms" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().headerDescription, '', 'Main should have the appropriate "headerDescription" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().nameAttribute, 'name', 'Main should have the appropriate "nameAttribute" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().nameSortAttribute, 'name', 'Main should have the appropriate "nameSortAttribute" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().idAttribute, 'id', 'Main should have the appropriate "idAttribute" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(Main.props().customActions, [], 'Main should have the appropriate "customActions" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(Main.props().customBulkActions, [], 'Main should have the appropriate "customBulkActions" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(Main.props().customColumns, [], 'Main should have the appropriate "customColumns" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(Main.props().additionalCreateOptions, [], 'Main should have the appropriate "additionalCreateOptions" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().initialAppFilter, 'all', 'Main should have the appropriate "initialAppFilter" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().initialOwnerFilter, 'all', 'Main should have the appropriate "initialOwnerFilter" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().initialStringFilter, '', 'Main should have the appropriate "initialStringFilter" prop');
        // extra prop from Mock/Main.jsx
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(Main.props().initialObjects, 'Main should have the appropriate "initialObjects" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(Main.props().foo, 'bar', 'Main should have the appropriate custom "foo" prop');
    });
});

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/Main");

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/modals/ChangeStatus");

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/modals/Delete");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("enzyme");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/NewEditClone");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/Columns");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/columns/Actions");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/Content");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/Header");

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/table/Filters");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/Data");

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/modals/NewEditClone");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/ChangeStatus");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/Delete");

/***/ })

/******/ });