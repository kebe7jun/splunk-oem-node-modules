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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRangeSeriesConfig = exports.isRangeSeriesDataSet = undefined;

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRangeSeriesDataSet = exports.isRangeSeriesDataSet = function isRangeSeriesDataSet(dataSet) {
    var allFields = dataSet.allFields();
    return (0, _underscore2.default)(allFields).any(function (f) {
        return (/^_predicted/.test(f)
        );
    }) && (0, _underscore2.default)(allFields).any(function (f) {
        return (/^_lower/.test(f)
        );
    }) && (0, _underscore2.default)(allFields).any(function (f) {
        return (/^_upper/.test(f)
        );
    });
};

var getRangeSeriesConfig = exports.getRangeSeriesConfig = function getRangeSeriesConfig(dataSet) {
    var predictedFields = (0, _underscore2.default)(dataSet.allFields()).filter(function (f) {
        return (/^_predicted/.test(f)
        );
    });

    return (0, _underscore2.default)(predictedFields).map(function (predictedField) {
        var sourceField = predictedField.replace(/^_predicted/, '');
        var lowerField = '_lower' + sourceField;
        var upperField = '_upper' + sourceField;
        var predictedName = (0, _underscore2.default)(dataSet.getSeries(predictedField)).find(function (value) {
            return !!value;
        });
        var lowerName = (0, _underscore2.default)(dataSet.getSeries(lowerField)).find(function (value) {
            return !!value;
        });
        var upperName = (0, _underscore2.default)(dataSet.getSeries(upperField)).find(function (value) {
            return !!value;
        });

        return {
            predicted: predictedName,
            lower: lowerName,
            upper: upperName
        };
    });
};

/***/ })

/******/ });