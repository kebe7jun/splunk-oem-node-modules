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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.roundToDecimal = exports.valuesAreNumeric = exports.isCommaSeparatedNumber = exports.getDecimalPrecision = exports.degreeToRadian = exports.roundWithMinMax = exports.roundWithMin = exports.nearestPowerOfTen = exports.absPowerTen = exports.absLogBaseTen = exports.logBaseTen = exports.parseFloat = undefined;

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEX_REGEX = /^( )*(0x|-0x)/;
var DECIMAL_OR_SCIENTIFIC_REGEX = /(^[-+]?[0-9]*[.]?[0-9]*$)|(^[-+]?[0-9][.]?[0-9]*e[-+]?[0-9][0-9]*$)/i;
var COMMA_SEPARATED_NUMBER_REGEX = /(^[-+]?([0]|([1-9][0-9]{0,2})|(([1-9][0-9]{0,2}[,])([0-9]{3}[,])*[0-9]{3}))(([.][0-9]+)?)$)/;

// an extended version of parseFloat that will handle numbers encoded in hex format (i.e. "0xff")
// and is stricter than native JavaScript parseFloat for decimal numbers
var strictParseFloat = function strictParseFloat(str) {
    // determine if the string is a hex number by checking if it begins with '0x' or '-0x',
    // in which case delegate to parseInt with a 16 radix
    if (HEX_REGEX.test(str)) {
        return parseInt(str, 16);
    }
    // if the number is not in decimal or scientific format, return NaN explicitly
    // instead of letting JavaScript do its loose parsing
    if (!DECIMAL_OR_SCIENTIFIC_REGEX.test(str)) {
        return NaN;
    }
    return parseFloat(str);
};

exports.parseFloat = strictParseFloat;

// shortcut for base-ten log, also rounds to four decimal points of precision to make pretty numbers

var logBaseTen = exports.logBaseTen = function logBaseTen(num) {
    var result = Math.log(num) / Math.LN10;
    return Math.round(result * 10000) / 10000;
};

// transforms numbers to a normalized log scale that can handle negative numbers
// rounds to four decimal points of precision
var absLogBaseTen = exports.absLogBaseTen = function absLogBaseTen(num) {
    if (typeof num !== 'number') {
        num = parseFloat(num);
    }
    if ((0, _underscore2.default)(num).isNaN()) {
        return num;
    }
    var isNegative = num < 0;

    if (isNegative) {
        num = -num;
    }
    if (num < 10) {
        num += (10 - num) / 10;
    }
    var result = logBaseTen(num);
    return isNegative ? -result : result;
};

// reverses the transformation made by absLogBaseTen above
// rounds to three decimal points of precision
var absPowerTen = exports.absPowerTen = function absPowerTen(num) {
    if (typeof num !== 'number') {
        num = parseFloat(num);
    }
    if ((0, _underscore2.default)(num).isNaN()) {
        return num;
    }
    var isNegative = num < 0;
    var result = void 0;

    if (isNegative) {
        num = -num;
    }
    // eslint-disable-next-line no-restricted-properties
    result = Math.pow(10, num);
    if (result < 10) {
        result = 10 * (result - 1) / (10 - 1);
    }
    result = isNegative ? -result : result;
    return Math.round(result * 1000) / 1000;
};

// calculates the power of ten that is closest to but not greater than the number
// negative numbers are treated as their absolute value and the sign of the result is flipped before returning
var nearestPowerOfTen = exports.nearestPowerOfTen = function nearestPowerOfTen(num) {
    if (typeof num !== 'number') {
        return NaN;
    }
    var isNegative = num < 0;
    num = isNegative ? -num : num;
    var log = logBaseTen(num);
    // eslint-disable-next-line no-restricted-properties
    var result = Math.pow(10, Math.floor(log));

    return isNegative ? -result : result;
};

var roundWithMin = exports.roundWithMin = function roundWithMin(value, min) {
    return Math.max(Math.round(value), min);
};

var roundWithMinMax = exports.roundWithMinMax = function roundWithMinMax(value, min, max) {
    var roundVal = Math.round(value);
    if (roundVal < min) {
        return min;
    }
    if (roundVal > max) {
        return max;
    }
    return roundVal;
};

var degreeToRadian = exports.degreeToRadian = function degreeToRadian(degree) {
    return degree * Math.PI / 180;
};

// returns the number of digits of precision after the decimal point
// optionally accepts a maximum number, after which point it will stop looking and return the max
var getDecimalPrecision = exports.getDecimalPrecision = function getDecimalPrecision(num, max) {
    // By spec, toFixed will throw a RangeError if called with a precision greater than 20.
    max = Math.min(max || Infinity, 20);
    var precision = 0;

    while (precision < max && num.toFixed(precision) !== num.toString()) {
        precision += 1;
    }

    return precision;
};

/**
 * Checks if the value passed in is some comma separated number
 * (e.g. "1,234", "300,000,000", and "12,345.67"). This function provides
 * a simple way to determine when a comma seperated value string should be
 * considered a number.
 *
 * @param {String} str - string to be checked
 * @returns {Boolean} - return true if (str) is a valid number grouped by either commas or decimals, false otherwise
 */
var isCommaSeparatedNumber = exports.isCommaSeparatedNumber = function isCommaSeparatedNumber(str) {
    return (
        // if str is not a number grouped with either commas or decimals
        COMMA_SEPARATED_NUMBER_REGEX.test(str)
    );
};

/**
 * Checks if a list of values can be considered "numeric".
 *
 * Returns true if half or more of the non-null values can be parsed to a float.
 *
 * @param {Array} values
 * @return {Boolean}
 */

var valuesAreNumeric = exports.valuesAreNumeric = function valuesAreNumeric(values) {
    var numericCount = 0;
    var nonNullCount = 0;

    (0, _underscore2.default)(values).each(function (value) {
        // in the case of multivalue fields, use the first value
        if ((0, _underscore2.default)(value).isArray()) {
            value = value.length > 0 ? value[0] : null;
        }
        if ((0, _underscore2.default)(value).isNull()) {
            return;
        }
        nonNullCount++;

        var isNumber = !!strictParseFloat(value) || isCommaSeparatedNumber(value);
        if (isNumber) {
            numericCount++;
        }
    });
    if (nonNullCount === 0) {
        return false;
    }
    return numericCount >= nonNullCount / 2;
};
/**
 *
 * Rounds a number to a specifice exp base 10
 *
 * @param {Number} value - number to round
 * @param {Number} exp - exp of base 10 of the decimal palce to round to
 *   eg: exp=-1 rounds to the tenths place
 *   exp=-2 rounds to the hundredth place
 *   exp=0 rounds to the ones place
 *   exp=1 rounds to the tens place
 * @return {Number|NaN}
 *
 * reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 */
var roundToDecimal = exports.roundToDecimal = function roundToDecimal(value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math.round(value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
};

// TODO Remove default export
exports.default = {
    parseFloat: strictParseFloat,
    logBaseTen: logBaseTen,
    absLogBaseTen: absLogBaseTen,
    absPowerTen: absPowerTen,
    nearestPowerOfTen: nearestPowerOfTen,
    roundWithMin: roundWithMin,
    roundWithMinMax: roundWithMinMax,
    degreeToRadian: degreeToRadian,
    getDecimalPrecision: getDecimalPrecision,
    valuesAreNumeric: valuesAreNumeric,
    roundToDecimal: roundToDecimal
};

/***/ })

/******/ });