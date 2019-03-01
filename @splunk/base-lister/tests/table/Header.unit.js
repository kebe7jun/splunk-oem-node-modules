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
/******/ 	return __webpack_require__(__webpack_require__.s = 128);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chai__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_enzyme__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_enzyme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_enzyme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_table_Header__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_table_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_table_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_utils_mock_modals_NewEditClone__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_utils_mock_modals_NewEditClone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_utils_mock_modals_NewEditClone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/tests/table/Header.unit.jsx',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-env mocha */









/**
 * Helper method to instantiate the Header tests to avoid duplication of code.
 *
 * @param {Object} override object with props values that will override the defaults.
 * @returns {Object} Main node with the props.
 */
function getHeaderWithProps(override) {
    var defaults = {
        headerDescription: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["headerDescription"],
        permissions: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["permissions"],
        additionalCreateOptions: []
    };

    var properties = _extends({}, defaults, override);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_table_Header___default.a, _extends({
        objects: [],
        objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectsCollectionPath"],
        idAttribute: 'id',
        nameAttribute: 'title',
        errorFormatter: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["errorFormatter"],
        additionalCreateOptions: properties.additionalCreateOptions,
        objectNamePlural: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNamePlural"],
        objectNameSingular: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNameSingular"],
        permissions: properties.permissions,
        headerDescription: properties.headerDescription,
        ModalNew: __WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_utils_mock_modals_NewEditClone___default.a,
        handleRefreshListing: function handleRefreshListing() {}
    }, properties, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        },
        __self: this
    }));
}
describe('Header', function () {
    var wrapper = null;

    afterEach(function () {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('renders correctly', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getHeaderWithProps({}));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="page-description"]').exists(), 'Header description should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('[data-test="label"]').exists(), 'Header button should render correctly');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(wrapper.find('button').prop('data-is-menu'), null, 'Header button should NOT be a menu');
        var propsKeys = Object.keys(wrapper.props());
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(propsKeys.length, 12, 'Header should have 12 props');
    });

    it('renders correctly and honors "headerDescription" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getHeaderWithProps({
            headerDescription: null
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('[data-test="page-description"]').exists(), 'Header description should NOT be rendered');
    });

    it('renders correctly and honors "permissions" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getHeaderWithProps({
            permissions: {
                canCreate: false
            }
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isFalse(wrapper.find('[data-test="label"]').exists(), 'Header button should NOT be rendered');
    });

    it('renders correctly and honors "additionalCreateOptions" prop', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(getHeaderWithProps({
            additionalCreateOptions: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["mockAdditionalCreateObject"]
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(wrapper.find('button').prop('data-is-menu'), 'Header button should be a menu');
    });

    it('renders correctly and pass down all the appropriate props to ModalNew', function () {
        wrapper = Object(__WEBPACK_IMPORTED_MODULE_2_enzyme__["mount"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_table_Header___default.a, {
            objects: [],
            idAttribute: 'id',
            nameAttribute: 'title',
            objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectsCollectionPath"],
            errorFormatter: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["errorFormatter"],
            additionalCreateOptions: [],
            objectNamePlural: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNamePlural"],
            objectNameSingular: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNameSingular"],
            permissions: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["permissions"],
            headerDescription: __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["headerDescription"],
            ModalNew: __WEBPACK_IMPORTED_MODULE_4__splunk_base_lister_utils_mock_modals_NewEditClone___default.a,
            handleRefreshListing: function handleRefreshListing() {},
            foo: 'bar',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 125
            },
            __self: _this
        }));
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].ok(wrapper);
        wrapper.setState({ isNewObjectModalOpen: true });
        var ModalNew = wrapper.find('MockModalNewEditClone');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalNew.props().action, 'new', 'ModalNew should have the appropriate "action" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isTrue(ModalNew.props().open, 'ModalNew should have the appropriate "open" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalNew.props().objectNameSingular, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNameSingular"], 'ModalNew should have the appropriate "objectNameSingular" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalNew.props().objectNamePlural, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectNamePlural"], 'ModalNew should have the appropriate "objectNamePlural" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(ModalNew.props().handleRequestClose), 'function', 'ModalNew should have the appropriate "handleRequestClose" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(ModalNew.props().setShouldRefreshOnClose), 'function', 'ModalNew should have the appropriate "setShouldRefreshOnClose" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(ModalNew.props().errorFormatter), 'function', 'ModalNew should have the appropriate "errorFormatter" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(_typeof(ModalNew.props().handleRefreshListing), 'function', 'ModalNew should have the appropriate "handleRefreshListing" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(ModalNew.props().permissions, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["permissions"], 'ModalNew should have the appropriate "permissions" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(ModalNew.props().object, {}, 'ModalNew should have the appropriate "object" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].deepEqual(ModalNew.props().objects, [], 'ModalNew should have the appropriate "objects" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalNew.props().objectsCollectionPath, __WEBPACK_IMPORTED_MODULE_5__splunk_base_lister_utils_mock_Data__["objectsCollectionPath"], 'ModalNew should have the appropriate "objectsCollectionPath" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].equal(ModalNew.props().foo, 'bar', 'ModalNew should have the appropriate custom "foo" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isUndefined(ModalNew.props().ModalNew, 'ModalNew should have the appropriate "ModalNew" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isUndefined(ModalNew.props().headerDescription, 'ModalNew should have the appropriate "headerDescription" prop');
        __WEBPACK_IMPORTED_MODULE_1_chai__["assert"].isUndefined(ModalNew.props().additionalCreateOptions, 'ModalNew should have the appropriate "additionalCreateOptions" prop');
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

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/Header");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/Data");

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/modals/NewEditClone");

/***/ })

/******/ });