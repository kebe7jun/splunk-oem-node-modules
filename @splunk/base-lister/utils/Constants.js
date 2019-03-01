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
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
/******/ })
/************************************************************************/
/******/ ({

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

var Constants = {
    // Count is the page limit (default is 20)
    DEFAULT_OBJECTS_COUNT_PER_PAGE: 20,

    // Defaults counts per page
    COUNTS_PER_PAGE: [20, 50, 100],

    NO_OWNER: gettext('No owner'),

    BULK_ACTION_EDIT_PERMS: {
        key: 'bulk_edit_perms',
        label: gettext('Edit permissions')
    },
    BULK_ACTION_ENABLE: {
        key: 'bulk_enable',
        label: gettext('Enable')
    },
    BULK_ACTION_DISABLE: {
        key: 'bulk_disable',
        label: gettext('Disable')
    },
    BULK_ACTION_DELETE: {
        key: 'bulk_delete',
        label: gettext('Delete')
    },

    ACTION_VIEW: {
        key: 'view',
        label: gettext('View')
    },
    ACTION_EDIT: {
        key: 'edit',
        label: gettext('Edit')
    },
    ACTION_EDIT_TITLE_DESC: {
        key: 'edit_title_desc',
        label: gettext('Edit title or description')
    },
    ACTION_EDIT_PERMS: {
        key: 'edit_perms',
        label: gettext('Edit permissions')
    },
    ACTION_CLONE: {
        key: 'clone',
        label: gettext('Clone')
    },
    ACTION_DELETE: {
        key: 'delete',
        label: gettext('Delete')
    }
};

/* harmony default export */ __webpack_exports__["default"] = (Constants);

/***/ })

/******/ });