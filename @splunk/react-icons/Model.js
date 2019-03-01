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
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-icons/SVG");

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = Model;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* eslint-disable max-len */
function Model(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__splunk_react_icons_SVG___default.a,
        _extends({ viewBox: '0 0 24 24', screenReaderText: Object(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_i18n__["_"])('Model') }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
            d: 'M20,10.5c-1.1,0-2.022,0.715-2.357,1.701l-2.148-0.27c-0.022-1.162-0.609-2.184-1.5-2.804l1.362-2.724 C15.563,6.46,15.775,6.5,16,6.5c1.381,0,2.5-1.119,2.5-2.5S17.381,1.5,16,1.5S13.5,2.619,13.5,4c0,0.798,0.381,1.5,0.963,1.957 l-1.367,2.735C12.75,8.577,12.385,8.5,12,8.5c-0.786,0-1.503,0.269-2.087,0.705L6.084,5.376C6.347,4.981,6.5,4.509,6.5,4 c0-1.381-1.119-2.5-2.5-2.5S1.5,2.619,1.5,4S2.62,6.5,4,6.5c0.509,0,0.982-0.154,1.377-0.416l3.829,3.828 C8.769,10.496,8.5,11.213,8.5,12c0,0.702,0.211,1.354,0.568,1.901l-3.561,3.115c-0.42-0.32-0.938-0.518-1.507-0.518 c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-0.449-0.128-0.865-0.336-1.229l3.569-3.125 C10.346,15.17,11.13,15.5,12,15.5c0.385,0,0.75-0.078,1.095-0.193l1.367,2.736C13.881,18.5,13.5,19.203,13.5,20 c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5c-0.224,0-0.437,0.039-0.644,0.094l-1.362-2.723 c0.664-0.461,1.147-1.148,1.367-1.947l2.158,0.27c0.102,1.289,1.166,2.309,2.48,2.309c1.381,0,2.5-1.119,2.5-2.5 C22.5,11.621,21.381,10.5,20,10.5z'
        })
    );
}

/***/ })

/******/ });