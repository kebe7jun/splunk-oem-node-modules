/*!
 * Copyright © 2018 Splunk Inc.
 * SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
 * without a valid written license from Splunk Inc. is PROHIBITED.
 */
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("@splunk/themes/enterprise");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("@splunk/themes/enterpriseDark");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("@splunk/themes/lite");

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterprise", function() { return enterprise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lite", function() { return lite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterpriseDark", function() { return enterpriseDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
/* harmony import */ var _splunk_themes_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _splunk_themes_enterprise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_splunk_themes_enterprise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _splunk_themes_enterpriseDark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _splunk_themes_enterpriseDark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splunk_themes_enterpriseDark__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _splunk_themes_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _splunk_themes_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_splunk_themes_lite__WEBPACK_IMPORTED_MODULE_2__);




var enterprise = {
    'react-time-range': {
        id: 'enterprise',
        base: _splunk_themes_enterprise__WEBPACK_IMPORTED_MODULE_0___default.a,
        AbsoluteValue: {
            backkgroundColor: _splunk_themes_enterprise__WEBPACK_IMPORTED_MODULE_0___default.a.gray96
        }
    }
};

var lite = {
    'react-time-range': {
        id: 'lite',
        base: _splunk_themes_lite__WEBPACK_IMPORTED_MODULE_2___default.a,
        AbsoluteValue: {
            backkgroundColor: _splunk_themes_lite__WEBPACK_IMPORTED_MODULE_2___default.a.gray96
        }
    }
};

var enterpriseDark = {
    'react-time-range': {
        id: 'enterpriseDark',
        base: _splunk_themes_enterpriseDark__WEBPACK_IMPORTED_MODULE_1___default.a,
        AbsoluteValue: {
            backkgroundColor: _splunk_themes_enterpriseDark__WEBPACK_IMPORTED_MODULE_1___default.a.gray22
        }
    }
};

var getTheme = function getTheme(props) {
    return props.theme && props.theme['react-time-range'] ? props.theme['react-time-range'] : enterprise['react-time-range'];
};

var variable = function variable() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return function (props) {
        return args.length === 1 ? getTheme(props).base[args[0]] : args.reduce(function (acc, val) {
            return acc && acc[val] ? acc[val] : null;
        }, getTheme(props));
    };
};

var mixin = function mixin(name) {
    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return function (props) {
            var _getTheme$base$mixins;

            return (_getTheme$base$mixins = getTheme(props).base.mixins)[name].apply(_getTheme$base$mixins, args);
        };
    };
};

var themes = { enterprise: enterprise, enterpriseDark: enterpriseDark, lite: lite };

/***/ })

/******/ });