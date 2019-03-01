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
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
/******/ })
/************************************************************************/
/******/ ({

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_Constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_Constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_Constants__);
/* global browser */
/* eslint-env mocha */





// const appSelect = '[data-test-name="app-filter"]';
// const ownerSelect = '[data-test-name="owner-filter"]';
// const appSelectorToggle = `${appSelect} [data-test="toggle"]`;
// const ownerSelectorToggle = `${ownerSelect} [data-test="toggle"]`;

var pageSelect = '[data-test-name="page-count-selector"]';
var pageSelectorToggle = pageSelect + ' [data-test="toggle"]';

describe('Select', function () {
    var popoverSelector = void 0;
    afterEach(function () {
        popoverSelector = null;
    });

    function openSelect(select, toggle) {
        browser.click(toggle);
        popoverSelector = '#' + browser.getAttribute(select, 'data-test-popover-id');
        browser.waitForVisible(popoverSelector);
    }

    it('focus is on selected item', function () {
        openSelect(pageSelect, pageSelectorToggle);
        __WEBPACK_IMPORTED_MODULE_0_chai__["assert"].isTrue(browser.hasFocus(popoverSelector + ' [data-test="option"][data-test-value="' + __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_Constants___default.a.COUNTS_PER_PAGE[0] + '"]'), 'The page selector focus is on Default value');
    });

    it('select option with a click', function () {
        openSelect(pageSelect, pageSelectorToggle);
        browser.click(popoverSelector + ' [data-test="option"][data-test-value="' + __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_Constants___default.a.COUNTS_PER_PAGE[1] + '"]');
        __WEBPACK_IMPORTED_MODULE_0_chai__["assert"].strictEqual(browser.getAttribute('' + pageSelect, 'data-test-value'), __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_Constants___default.a.COUNTS_PER_PAGE[1], 'The value is now "' + __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_Constants___default.a.COUNTS_PER_PAGE[1] + '"');
        __WEBPACK_IMPORTED_MODULE_0_chai__["assert"].include(browser.getText(pageSelectorToggle), __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_Constants___default.a.COUNTS_PER_PAGE[1] + ' per page', 'The page selector toggle label has updated');

        // Popover closes on selection.
        browser.waitUntil(function () {
            return !browser.isVisible(popoverSelector);
        });
        __WEBPACK_IMPORTED_MODULE_0_chai__["assert"].isTrue(browser.hasFocus(pageSelectorToggle), 'The page selector toggle has focus after closing');
    });
});

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/Constants");

/***/ })

/******/ });