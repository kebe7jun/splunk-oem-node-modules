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
/******/ 	return __webpack_require__(__webpack_require__.s = 123);
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

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chai__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_enzyme__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_enzyme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_enzyme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sinon__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sinon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sinon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_mock_columns_CustomColumn__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_mock_columns_CustomColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_mock_columns_CustomColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_table_Content__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_table_Content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_table_Content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_table_Columns__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_table_Columns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_table_Columns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_table_columns_Actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_table_columns_Actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_table_columns_Actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_ChangeStatus__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_ChangeStatus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_ChangeStatus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_modals_Delete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_modals_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_modals_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_modals_EditPerms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_modals_EditPerms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_modals_EditPerms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_NewEditClone__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_NewEditClone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_NewEditClone__);
var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/tests/table/Content.unit.jsx',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-env mocha */
/* eslint-disable no-underscore-dangle */



















/**
 * Helper method to instantiate the Content tests to avoid duplication of code.
 *
 * @param {Array} spies array of spies
 * @param {Object} override object with props values that will override the defaults.
 * @returns {Object} Content node with the props.
 */
function getContentWithProps(spies, override) {
    var defaults = {
        fetching: false, // OK
        objects: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"], // OK
        idAttribute: 'id', // OK
        nameAttribute: 'name',
        nameSortAttribute: 'id',
        isEnabled: function isEnabled(object) {
            return !object.content.disabled;
        }, // OK
        hasRowExpansion: true, // OK
        sortKey: 'id', // OK
        sortDirection: 'asc', // OK
        getEditUrl: function getEditUrl(object) {
            return 'object/' + object.id;
        }, // OK
        showActionsColumn: true, // OK
        showAppColumn: true, // OK
        showOwnerColumn: true, // OK
        showSharingColumn: true, // OK
        showStatusColumn: true, // OK
        selectedRows: [], // OK
        customColumns: [] // OK
    };

    var properties = _extends({}, defaults, override);

    if (override.objects) {
        properties.objects = override.objects;
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_table_Content___default.a, {
        canMoveColumns: true,
        fetching: properties.fetching,
        objects: properties.objects,
        objectNamePlural: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNamePlural"],
        objectNameSingular: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNameSingular"],
        objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectsCollectionPath"],
        idAttribute: properties.idAttribute,
        nameAttribute: properties.nameAttribute,
        nameSortAttribute: properties.nameSortAttribute,
        isDefaultObject: function isDefaultObject() {
            return false;
        },
        rowSelectionState: function rowSelectionState() {
            return 'none';
        },
        isEnabled: properties.isEnabled,
        hasRowExpansion: properties.hasRowExpansion,
        sortKey: properties.sortKey,
        sortDirection: properties.sortDirection,
        getEditUrl: properties.getEditUrl,
        filterApp: 'all',
        filterOwner: 'all',
        filterString: '',
        initialAppFilter: 'all',
        initialOwnerFilter: 'all',
        initialStringFilter: '',
        getExpansionRow: properties.getExpansionRow,
        permissions: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["permissions"],
        showActionsColumn: properties.showActionsColumn,
        showAppColumn: properties.showAppColumn,
        showOwnerColumn: properties.showOwnerColumn,
        showSharingColumn: properties.showSharingColumn,
        showStatusColumn: properties.showStatusColumn,
        handleToggleRow: spies.handleToggleRow,
        handleToggleAllRows: spies.handleToggleAllRows,
        handleRefreshListing: spies.handleRefreshListing,
        handleColumnSort: spies.handleColumnSort,
        handleUpdateItem: spies.handleUpdateItem,
        selectedRows: properties.selectedRows,
        ColumnActions: __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_table_columns_Actions___default.a,
        ColumnsView: __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_table_Columns___default.a,
        ModalChangeStatus: __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_ChangeStatus___default.a,
        ModalClone: __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_NewEditClone___default.a,
        ModalDelete: __WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_modals_Delete___default.a,
        ModalEdit: __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_NewEditClone___default.a,
        ModalEditTitleOrDescription: __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_NewEditClone___default.a,
        ModalEditPerms: __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_modals_EditPerms___default.a,
        customActions: [],
        customBulkActions: [],
        customColumns: properties.customColumns,
        errorFormatter: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["errorFormatter"],
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        },
        __self: this
    });
}
describe('Content', function () {
    var wrapper = null;
    var handleToggleRow = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handleToggleAllRows = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handleRefreshListing = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handleColumnSort = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handleUpdateItem = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();

    var spies = {
        handleToggleRow: handleToggleRow,
        handleToggleAllRows: handleToggleAllRows,
        handleRefreshListing: handleRefreshListing,
        handleColumnSort: handleColumnSort,
        handleUpdateItem: handleUpdateItem
    };

    afterEach(function () {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }

        Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["forEach"])(spies, function (_spy) {
            return _spy.reset();
        });
    });

    it('renders correctly', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {}));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="@splunk/base-lister/table/Content"]').exists(), 'Table should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="head"]').exists(), 'Table should have 1 table head');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="body"]').exists(), 'Table should have 1 table body');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th').length, 8, 'Table should have 8 columns');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test="toggle-all"]').exists(), 'Table should have "toggle-all" column header');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test="more-info-head-cell"]').exists(), 'Table should have "more-info-head-cell" column header');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').length, 6, 'Table should have 6 data columns');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="Name"]').exists(), 'Table should have "Name" column header');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="Actions"]').exists(), 'Table should have "showActionsColumn" column header');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="Status"]').exists(), 'Table should have "Status" column header');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="Owner"]').exists(), 'Table should have "Owner" column header');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="App"]').exists(), 'Table should have "App" column header');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="Sharing"]').exists(), 'Table should have "Sharing" column header');
        // Check order
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(0).prop('data-test-label'), 'Name', 'Column 1 should be "Name" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(1).prop('data-test-label'), 'Actions', 'Column 2 should be "Actions" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(2).prop('data-test-label'), 'Status', 'Column 3 should be "Status" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(3).prop('data-test-label'), 'Owner', 'Column 4 should be "Owner" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(4).prop('data-test-label'), 'App', 'Column 5 should be "App" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(5).prop('data-test-label'), 'Sharing', 'Column 6 should be "Sharing" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').at(0).prop('href'), 'object/' + __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][0].id, 'Attribute "href" of link has incorrect value');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').at(1).prop('href'), 'object/' + __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][1].id, 'Attribute "href" of link has incorrect value');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length, 'Table should have as many links as objects');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="Name"] [data-test-sort-dir="asc"]').exists(), 'Table should have sorting enabled on the "Name" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test-sort-dir="none"]').length, 3, 'Table should have "Owner", "App", "Sharing" columns sortable');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test-sort-dir="none"]').at(0).prop('data-test-label'), 'Owner', '"Owner" column should be sortable');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test-sort-dir="none"]').at(1).prop('data-test-label'), 'App', '"App" column should be sortable');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test-sort-dir="none"]').at(2).prop('data-test-label'), 'Sharing', '"Sharing" column should be sortable');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('tr[data-test="row"]').length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length + 1, // header is also a valid row
        'Table should have ' + (__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length + 1) + ' rows');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test-row-selection="none"]').exists(), 'Table should have data-test-row-selection="none" state.');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('button[role="switch"]').length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length, 'Table should have as many status switches as objects');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('button[role="switch"]').at(0).prop('aria-checked'), !__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][0].content.disabled, 'Row 1 should have status switch enabled');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('button[role="switch"]').at(1).prop('aria-checked'), !__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][1].content.disabled, 'Row 2 should have status switch disabled');
    });

    it('renders correctly and honors "objects" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            objects: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"],
            idAttribute: '_key',
            nameAttribute: 'identifying_name',
            isEnabled: function isEnabled(object) {
                return !!object.enabled;
            },
            getEditUrl: function getEditUrl(object) {
                return 'object/' + object._key;
            }
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('tr[data-test="row"]').length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"].length + 1, // header is also a valid row
        'Table should honor "objects" ' + (__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"].length + 1) + ' rows');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').at(0).prop('href'), 'object/' + __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"][0]._key, 'Attribute "href" of link has incorrect value');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').at(1).prop('href'), 'object/' + __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"][1]._key, 'Attribute "href" of link has incorrect value');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').at(0).text(), __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"][0].identifying_name, 'Link has incorrect value');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').at(1).text(), __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"][1].identifying_name, 'Link has incorrect value');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('button[role="switch"]').length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"].length, 'Table should have as many status switches as objects');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('button[role="switch"]').at(0).prop('aria-checked'), !!__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"][0].enabled, 'Row 1 should have status switch enabled');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('button[role="switch"]').at(1).prop('aria-checked'), !!__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjectsAlternative"][1].enabled, 'Row 2 should have status switch disabled');
    });

    it('renders correctly and honors "fetching" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            fetching: true
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('[data-test="table"]').exists(), 'Table container should NOT be rendered when prop "fetching" is true.');
    });

    it('renders correctly and honors "hasRowExpansion" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            hasRowExpansion: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('th[data-test="more-info-head-cell"]').exists(), 'Table should NOT have "more-info-head-cell" when prop "hasRowExpansion" is false');
    });

    it('renders correctly and honors "showActionsColumn" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            showActionsColumn: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('th[data-test-label="Actions"]').exists(), 'Table should NOT have "Actions" column when prop "showActionsColumn" is false');
    });

    it('renders correctly and honors "showAppColumn" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            showAppColumn: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('th[data-test-label="App"]').exists(), 'Table should NOT have "App" column when prop "showAppColumn" is false');
    });

    it('renders correctly and honors "showOwnerColumn" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            showOwnerColumn: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('th[data-test-label="Owner"]').exists(), 'Table should NOT have "Owner" column when prop "showOwnerColumn" is false');
    });

    it('renders correctly and honors "showSharingColumn" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            showSharingColumn: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('th[data-test-label="Sharing"]').exists(), 'Table should NOT have "Sharing" column when prop "showSharingColumn" is false');
    });

    it('renders correctly and honors "showStatusColumn" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            showStatusColumn: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('th[data-test-label="Status"]').exists(), 'Table should NOT have "Status" column when prop "showStatusColumn" is false');
    });

    it('renders correctly and honors "selectedRows" prop (some) 1', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            selectedRows: [__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][0].id]
        }));
        // assert.isTrue(
        //     wrapper.find('[data-test-row-selection="some"]').exists(),
        //     'Table should have data-test-row-selection="some" state.'
        // );
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('td[data-test="toggle"] svg').exists(), 'Table should have at least one checkbox selected');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('td[data-test="toggle"] svg').closest('tr[data-test="row"]').prop('data'), __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][0].id, 'Row 1 should be selected');
    });

    it('renders correctly and honors "selectedRows" prop (some) 2', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            selectedRows: [__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][1].id]
        }));
        // assert.isTrue(
        //     wrapper.find('[data-test-row-selection="some"]').exists(),
        //     'Table should have data-test-row-selection="some" state.'
        // );
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('td[data-test="toggle"] svg').exists(), 'Table should have at least one checkbox selected');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('td[data-test="toggle"] svg').closest('tr[data-test="row"]').prop('data'), __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][1].id, 'Row 2 should be selected');
    });

    it('renders correctly and honors "selectedRows" prop (all)', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            selectedRows: Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["map"])(__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"], function (object) {
                return object.id;
            })
        }));
        // assert.isTrue(
        //     wrapper.find('[data-test-row-selection="all"]').exists(),
        //     'Table should have data-test-row-selection="all" state.'
        // );
    });

    it('renders correctly and honors "customColumns" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            customColumns: [{
                key: 'TestContentCustomColumnHeader',
                label: 'TestContentCustomColumnHeader',
                content: function content(object) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { 'data-test': 'custom-column-content', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 551
                            },
                            __self: _this
                        },
                        object.description
                    );
                }
            }, {
                key: 'TestComponentCustomColumnHeader',
                label: 'TestComponentCustomColumnHeader',
                Component: __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_mock_columns_CustomColumn___default.a
            }]
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="TestContentCustomColumnHeader"]').exists(), 'Table should have "TestContentCustomColumnHeader" column header');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="TestComponentCustomColumnHeader"]').exists(), 'Table should have "TestComponentCustomColumnHeader" column header');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('div[data-test="custom-column-content"]').length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length, 'Table should have rows with custom column content data');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('div[data-test="custom-column-component"]').length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length, 'Table should have rows with custom column component data');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').length, 8, 'Table should have 8 columns');
        // Check order
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(0).prop('data-test-label'), 'Name', 'Column 1 should be "Name" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(1).prop('data-test-label'), 'Actions', 'Column 2 should be "Actions" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(2).prop('data-test-label'), 'Status', 'Column 3 should be "Status" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(3).prop('data-test-label'), 'Owner', 'Column 4 should be "Owner" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(4).prop('data-test-label'), 'App', 'Column 5 should be "App" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(5).prop('data-test-label'), 'Sharing', 'Column 6 should be "Sharing" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(6).prop('data-test-label'), 'TestContentCustomColumnHeader', 'Column 7 should be "TestContentCustomColumnHeader" column');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('th[data-test="head-cell"]').at(7).prop('data-test-label'), 'TestComponentCustomColumnHeader', 'Column 8 should be "TestComponentCustomColumnHeader" column');
    });

    it('renders correctly and honors "getEditUrl" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            getEditUrl: function getEditUrl(object) {
                return 'test/custom/edit/url/prop/' + object.name;
            }
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').at(0).prop('href'), 'test/custom/edit/url/prop/' + __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][0].name, 'Attribute "href" of link has incorrect value');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').at(1).prop('href'), 'test/custom/edit/url/prop/' + __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"][1].name, 'Attribute "href" of link has incorrect value');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('a[data-test="link"]').length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length, 'Table should have as many links as objects');
    });

    it('renders correctly and honors "sortKey" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            sortKey: 'name'
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('th[data-test-label="Name"] [data-test-sort-dir="asc"]').exists(), 'Table should NOT have sorting enabled on the "Name" column');
    });

    it('renders correctly and honors "sortDirection" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            sortDirection: 'desc'
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('th[data-test-label="Name"] [data-test-sort-dir="desc"]').exists(), 'Table should have sorting enabled on the "Name" column');
    });

    it('renders correctly and honors "isEnabled" prop 1', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            isEnabled: function isEnabled() {
                return true;
            }
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('button[role="switch"]').filterWhere(function (o) {
            return o.prop('aria-checked') === true;
        }).length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length, 'All status switches should be enabled');
    });

    it('renders correctly and honors "isEnabled" prop 2', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getContentWithProps(spies, {
            isEnabled: function isEnabled() {
                return false;
            }
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('button[role="switch"]').filterWhere(function (o) {
            return o.prop('aria-checked') === false;
        }).length, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length, 'All status switches should be disabled');
    });
});

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/columns/CustomColumn");

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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/Data");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = require("sinon");

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