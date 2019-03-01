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
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = Refresh;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* eslint-disable max-len */
function Refresh(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default.a,
        _extends({ screenReaderText: Object(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__["_"])('Refresh'), viewBox: '0 0 1500 1487' }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M625.26 163.63c42.843-9.843 87.24-15.614 132.967-15.614 326.386 0 591.95 265.563 591.95 591.95 0 163.23-66.373 311.217-173.516 418.36l104.85 104.85c133.855-133.93 216.654-318.914 216.654-523.21 0-408.668-331.27-739.937-739.937-739.937-57.27 0-112.766 7.176-166.264 19.46l33.297 144.14zM872.917 1321.556c-42.842 9.84-87.238 15.612-132.966 15.612-326.386 0-591.95-265.563-591.95-591.95 0-163.23 66.373-311.217 173.516-418.36L216.666 222.01C82.814 355.938.015 540.922.015 745.22c0 408.666 331.27 739.936 739.937 739.936 57.272 0 112.767-7.178 166.264-19.46l-33.297-144.14z' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M459.196 500.997c.148 32.41-37.884 46.764-63.338 25.676-25.454-21.09-358.722-295.9-382.326-314.62-24.196-19.166-13.984-59.048 16.057-64.524C65.105 141.09 389.42 77.826 412.8 74.35c21.458-3.182 46.69 17.536 46.542 38.328l-.148 388.32z' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M459.18 501.002c.147 32.41-37.886 46.764-63.34 25.676-25.454-21.088-358.72-295.9-382.325-314.62C-10.68 192.892-.47 153.01 29.57 147.533c35.518-6.437 359.833-69.702 383.215-73.18 21.458-3.18 46.69 17.537 46.542 38.33L459.18 501zM1036.096 997.557c-.148-32.41 37.885-46.764 63.34-25.676 25.453 21.09 358.72 295.902 382.324 314.622 24.196 19.165 13.985 59.047-16.057 64.523-35.517 6.437-359.83 69.702-383.213 73.18-21.458 3.18-46.69-17.537-46.542-38.33l.148-388.318z' })
    );
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-icons/SVG");

/***/ })

/******/ });