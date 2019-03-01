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
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
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

/***/ 127:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_mock_table_Filters__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_mock_table_Filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_mock_table_Filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_modals_Delete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_modals_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_modals_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_EditPerms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_EditPerms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_EditPerms__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/tests/table/Filters.unit.jsx',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-env mocha */

















/**
 * Helper method to instantiate the Filter tests to avoid duplication of code.
 *
 * @param {Array} spies array of spies
 * @param {Object} override object with props values that will override the defaults.
 * @returns {Object} Filter node with the props.
 */
function getFilterWithProps(spies, override) {
    var defaults = {
        fetching: false,
        objectsCount: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length,
        page: 1,
        filterString: '',
        permissions: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["permissions"],
        showAppFilter: true,
        showOwnerFilter: true,
        countPerPage: __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.DEFAULT_OBJECTS_COUNT_PER_PAGE
    };

    var properties = _extends({}, defaults, override);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_mock_table_Filters___default.a, {
        appsCollectionPath: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["appsCollectionPath"],
        objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectsCollectionPath"],
        usersCollectionPath: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["usersCollectionPath"],
        isEnabled: function isEnabled() {
            return true;
        },
        nameAttribute: 'title',
        fetching: properties.fetching,
        errorFormatter: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["errorFormatter"],
        objectsCount: properties.objectsCount,
        objectNamePlural: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNamePlural"],
        objectNameSingular: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNameSingular"],
        idAttribute: 'id',
        isDefaultObject: function isDefaultObject() {
            return false;
        },
        page: properties.page,
        countPerPage: properties.countPerPage,
        filterApp: 'all',
        filterString: properties.filterString,
        filterOwner: 'all',
        permissions: properties.permissions,
        ModalChangeStatus: __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus___default.a,
        ModalDelete: __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_modals_Delete___default.a,
        ModalEditPerms: __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_EditPerms___default.a,
        handleClearRowSelection: spies.clear,
        handleRefreshListing: spies.refresh,
        handleCountPerChange: spies.count,
        handleAppFilterChange: spies.app,
        handleOwnerFilterChange: spies.owner,
        handleTextFilterChange: spies.text,
        handlePaginatorChange: spies.paginator,
        showAppFilter: properties.showAppFilter,
        showOwnerFilter: properties.showOwnerFilter,
        selectedRows: [],
        customBulkActions: [],
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        },
        __self: this
    });
}
describe('Filters', function () {
    var wrapper = null;
    var handleCountPerChange = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handleAppFilterChange = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handleOwnerFilterChange = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handleTextFilterChange = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handlePaginatorChange = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handleRefreshListing = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();
    var handleClearRowSelection = Object(__WEBPACK_IMPORTED_MODULE_3_sinon__["spy"])();

    var spies = {
        count: handleCountPerChange,
        app: handleAppFilterChange,
        owner: handleOwnerFilterChange,
        text: handleTextFilterChange,
        paginator: handlePaginatorChange,
        refresh: handleRefreshListing,
        clear: handleClearRowSelection
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
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies, {}));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="@splunk/base-lister/table/Filters"]').exists(), 'Filters container should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="object-count"]').exists(), 'Object count container should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('[data-test="object-count"]').text(), __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length + ' Objects', 'Object count text is wrong');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test-name="bulk-actions-dropdown"]').exists(), 'Bulk actions container should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test-name="text-filter"]').exists(), 'Owner filter container should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test-name="app-filter"]').exists(), 'App filter container should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test-name="owner-filter"]').exists(), 'Owner filter container should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test-name="page-count-selector"]').exists(), 'Page selector container should render correctly');
    });

    it('renders correctly and honors "fetching" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies, {
            fetching: true
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('[data-test="object-count"]').text(), 'Loading...', 'Object count text is wrong');
    });

    it('renders correctly and honors "showAppFilter" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies, {
            showAppFilter: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('[data-test-name="app-filter"]').exists(), 'App filter container should NOT be rendered');
    });

    it('renders correctly and honors "showOwnerFilter" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies, {
            showOwnerFilter: false
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('[data-test-name="owner-filter"]').exists(), 'Owner filter container should NOT be rendered');
    });

    it('renders correctly and honors "objectsCount" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies, {
            objectsCount: 1
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('[data-test="object-count"]').text(), '1 Object', 'Object count text is wrong');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('[data-test-name="page-count-selector"]').exists(), 'Page selector container should NOT be rendered');
    });

    it('renders correctly and honors "permissions" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies, {
            permissions: {
                read: true, // same as canRead
                write: true, // same as canEdit
                delete: true, // same as canDelete
                canCreate: true,
                canClone: true,
                canChangeStatus: true,
                canEditTitleAndDescription: true,
                canEditPermissions: false,
                canBulkChangeStatus: false,
                canBulkDelete: false,
                canBulkEditPermissions: false
            }
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('[data-test-name="bulk-actions-dropdown"]').exists(), 'Bulk actions container should NOT be rendered');
    });

    it('renders correctly and honors "page" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies, {
            page: 2
        }));
        wrapper.find('[data-test="prev"]').hostNodes().simulate('click');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(spies.paginator.calledOnce, 'handlePaginatorChange should be called once');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].strictEqual(spies.paginator.args[0][1].page, 1, 'The correct value is passed to the handlePaginatorChange callback.');
    });

    it('renders correctly and honors "countPerPage" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies, {
            countPerPage: 50
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('div[data-test-name="page-count-selector"]').prop('data-test-value'), '50', 'Page count selector is not initialized using the prop');
    });

    it('renders correctly and honors "filterText" prop', function () {
        var testString = 'world';
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies, {
            filterString: testString
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('[data-test="textbox"]').instance().value, testString, 'The "filterText" props is honored');
    });

    it('callbacks are invoked correctly for text filter and paginator change', function () {
        var testString = 'hello';
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getFilterWithProps(spies));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        wrapper.find('[data-test="textbox"]').simulate('change', { target: { value: testString } });
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(spies.text.calledOnce, 'handleTextFilterChange should be called once');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(spies.text.args[0][1].value, testString, 'The correct value is passed to the handleTextFilterChange callback.');
        wrapper.find('[data-test="next"]').hostNodes().simulate('click');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(spies.paginator.calledOnce, 'handlePaginatorChange should be called once');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].strictEqual(spies.paginator.args[0][1].page, 2, 'The correct value is passed to the handlePaginatorChange callback.');
    });

    it('renders correctly and pass down all the appropriate props to ModalToOpen', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__splunk_base_lister_utils_mock_table_Filters___default.a, {
            appsCollectionPath: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["appsCollectionPath"],
            objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectsCollectionPath"],
            usersCollectionPath: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["usersCollectionPath"],
            isEnabled: function isEnabled() {
                return true;
            },
            nameAttribute: 'title',
            fetching: false,
            errorFormatter: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["errorFormatter"],
            objectsCount: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockObjects"].length,
            objectNamePlural: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNamePlural"],
            objectNameSingular: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNameSingular"],
            idAttribute: 'id',
            isDefaultObject: function isDefaultObject() {
                return false;
            },
            page: 1,
            countPerPage: __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.DEFAULT_OBJECTS_COUNT_PER_PAGE,
            filterApp: 'all',
            filterString: '',
            filterOwner: 'all',
            permissions: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["permissions"],
            ModalChangeStatus: __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus___default.a,
            ModalDelete: __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_modals_Delete___default.a,
            ModalEditPerms: __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_modals_EditPerms___default.a,
            handleClearRowSelection: spies.clear,
            handleRefreshListing: spies.refresh,
            handleCountPerChange: spies.count,
            handleAppFilterChange: spies.app,
            handleOwnerFilterChange: spies.owner,
            handleTextFilterChange: spies.text,
            handlePaginatorChange: spies.paginator,
            showAppFilter: true,
            showOwnerFilter: true,
            selectedRows: [],
            customBulkActions: [],
            foo: 'bar',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 307
            },
            __self: _this
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        wrapper.setState({
            action: 'enable',
            isBulkActionModalOpen: true,
            ModalToOpen: __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_modals_ChangeStatus___default.a
        });
        var ModalToOpen = wrapper.find('ModalChangeStatus');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(ModalToOpen.props().isBulk, 'ModalToOpen should have the appropriate "isBulk" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(ModalToOpen.props().open, 'ModalToOpen should have the appropriate "open" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalToOpen.props().action, 'enable', 'ModalToOpen should have the appropriate "action" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalToOpen.props().objectNameSingular, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNameSingular"], 'ModalToOpen should have the appropriate "objectNameSingular" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalToOpen.props().objectNamePlural, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNamePlural"], 'ModalToOpen should have the appropriate "objectNamePlural" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalToOpen.props().idAttribute, 'id', 'ModalToOpen should have the appropriate "idAttribute" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(ModalToOpen.props().handleRequestClose), 'function', 'ModalToOpen should have the appropriate "handleRequestClose" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(ModalToOpen.props().setShouldRefreshOnClose), 'function', 'ModalToOpen should have the appropriate "setShouldRefreshOnClose" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(ModalToOpen.props().isDefaultObject), 'function', 'ModalToOpen should have the appropriate "isDefaultObject" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(ModalToOpen.props().errorFormatter), 'function', 'ModalToOpen should have the appropriate "errorFormatter" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(ModalToOpen.props().permissions, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["permissions"], 'ModalToOpen should have the appropriate "permissions" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(ModalToOpen.props().object, {}, 'ModalToOpen should have the appropriate "object" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalToOpen.props().foo, 'bar', 'ModalToOpen should have the appropriate custom "foo" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(ModalToOpen.props().selectedRows, [], 'ModalToOpen should have the appropriate "selectedRows" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isUndefined(ModalToOpen.props().ModalChangeStatus, 'ModalNew should have the appropriate "ModalChangeStatus" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isUndefined(ModalToOpen.props().ModalDelete, 'ModalNew should have the appropriate "ModalDelete" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isUndefined(ModalToOpen.props().ModalEditPerms, 'ModalNew should have the appropriate "ModalEditPerms" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isUndefined(ModalToOpen.props().fetching, 'ModalNew should have the appropriate "fetching" prop');
    });
});

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("enzyme");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/table/Filters");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/Data");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = require("sinon");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/Constants");

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