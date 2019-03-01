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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/i18n");

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = Star;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* eslint-disable max-len */
function Star(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default.a,
        _extends({ screenReaderText: Object(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__["_"])('Star'), viewBox: '0 0 1500 1498' }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M976.35 507.662L811.46 47.968C800.8 15.988 780.146 0 749.5 0c-29.98 0-50.3 15.656-60.96 46.97L521.653 507.66c-7.328 16.655-19.986 24.983-37.974 24.983H70.953c-21.32 0-38.475 6.33-51.466 18.987C6.497 564.29 0 579.28 0 596.602c0 20.653 9.993 38.64 29.98 53.964l342.77 254.83c8.662 7.33 12.993 16.656 12.993 27.982 0 4.663-.333 7.994-1 9.993L257.83 1411.06c-2 6.662-2.998 13.657-2.998 20.985 0 19.32 6.662 35.31 19.987 47.968 13.324 12.66 29.314 18.32 47.968 16.99 15.99-1.333 28.98-6.663 38.974-15.99l364.756-271.82c7.328-5.995 15.323-8.993 23.984-8.993 9.993 0 18.32 2.998 24.983 8.994l358.76 269.82c9.994 9.327 22.986 14.657 38.975 15.99h4.997c17.32 0 32.31-6.163 44.97-18.488 12.658-12.325 18.987-27.482 18.987-45.47 0-6.662-1-13.658-2.998-20.986l-126.916-466.69c-.666-1.998-1-4.662-1-7.994 0-13.324 4.998-23.317 14.99-29.98l343.772-253.83c19.987-15.99 29.98-34.31 29.98-54.964 0-17.322-6.496-32.312-19.487-44.97-12.99-12.658-30.147-18.987-51.466-18.987h-413.724c-18.654 0-31.645-8.328-38.974-24.983z' })
    );
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-icons/SVG");

/***/ })

/******/ });