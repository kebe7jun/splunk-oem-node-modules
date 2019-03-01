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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable func-names */
var asyncUtils = {};

asyncUtils.CANCELLED = 'cancelled';

// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating
asyncUtils.requestFrame = (0, _underscore2.default)(function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 50);
    };
}()).bind(window);

asyncUtils.cancelFrame = (0, _underscore2.default)(function () {
    return window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
    // SPL-76580, can't reference window.clearTimeout directly here, IE 7 and 8 might not have defined it yet
    function (id) {
        window.clearTimeout(id);
    };
}()).bind(window);

asyncUtils.asyncEach = function (list, callback) {
    var pendingOperation = void 0;
    var cancelled = false;
    var listLength = list.length;
    var dfd = _jquery2.default.Deferred();

    var callOnceAndWait = function callOnceAndWait(i) {
        // the cancel() method will try to de-queue the frame, but this is not always supported
        // so also logically cancel the work just to be safe
        if (cancelled) {
            return;
        }
        callback(list[i], i);
        // check if we just processed the last item in the list
        // if so, we're done, if not, queue up the next one
        if (i < listLength - 1) {
            pendingOperation = asyncUtils.requestFrame(function () {
                callOnceAndWait(i + 1);
            });
        } else {
            dfd.resolve();
        }
    };

    dfd.cancel = function () {
        cancelled = true;
        if (pendingOperation) {
            asyncUtils.cancelFrame(pendingOperation);
            dfd.reject(asyncUtils.CANCELLED);
        }
    };

    callOnceAndWait(0);
    return dfd;
};

exports.default = asyncUtils;
module.exports = exports['default'];

/***/ })

/******/ });