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

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/i18n");

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = SpeechBubble;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* eslint-disable max-len */
function SpeechBubble(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default.a,
        _extends({ screenReaderText: Object(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__["_"])('Speech Bubble') }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M153.082 0h1193.836c44.52 0 81.164 14.15 109.93 42.453C1485.617 70.755 1500 106.806 1500 150.606v879.38c0 43.8-14.384 79.852-43.15 108.154-28.768 28.302-65.412 42.453-109.932 42.453h-115.07L784.933 1500l117.123-319.407H153.082c-44.52 0-81.164-14.15-109.93-42.453C14.383 1109.838 0 1073.787 0 1029.987v-879.38c0-43.8 14.384-79.852 43.15-108.154C71.92 14.15 108.563 0 153.083 0zM1275 368.935V221.36H225v147.575h1050zm0 295.15V516.508H225v147.574h1050zM225 811.657v147.574h900V811.658H225z' })
    );
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-icons/SVG");

/***/ })

/******/ });