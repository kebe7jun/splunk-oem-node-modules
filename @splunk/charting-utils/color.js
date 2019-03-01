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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interpolateColors = exports.getComputedOpacity = exports.getLuminance = exports.addAlphaToColor = exports.hexFromColor = exports.normalizeColor = exports.stripOutAlpha = exports.colorFromHex = undefined;

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// converts a hex number to its css-friendly counterpart, with optional alpha transparency field
// returns null if the input is cannot be parsed to a valid number or if the number is out of range
/* eslint-disable no-bitwise */
var colorFromHex = exports.colorFromHex = function colorFromHex(hexNum, alpha) {
    if (typeof hexNum !== 'number') {
        hexNum = parseInt(hexNum, 16);
    }
    if ((0, _underscore2.default)(hexNum).isNaN() || hexNum < 0x000000 || hexNum > 0xffffff) {
        return null;
    }
    var r = (hexNum & 0xff0000) >> 16;
    var g = (hexNum & 0x00ff00) >> 8;
    var b = hexNum & 0x0000ff;

    return alpha === undefined ? 'rgb(' + r + ',' + g + ',' + b + ')' : 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
};

// converts an rgba value to rgb by stripping out the alpha.  willl return the unchanged parameter
// if an rgb value is passed rather than rgba
var stripOutAlpha = exports.stripOutAlpha = function stripOutAlpha(color) {
    var rgb = color.split(',');
    var thirdChar = rgb[0].charAt(3);

    if (thirdChar === 'a') {
        rgb[0] = rgb[0].replace('rgba', 'rgb');
        rgb[rgb.length - 1] = ')';
        rgb = rgb.join();
        rgb = rgb.replace(',)', ')');
        return rgb;
    }
    return color;
};

/**
 * Take an RGB value and convert to HEX equivalent.
 *
 * @param {String} rgb A RGB value following rgb(XXX, XXX, XXX) convention.
 * @type String
 * @return A HEX equivalent for a given RGB value with a leading '#' character.
 */
var getHEX = function getHEX(rgb) {
    var parts = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var hex = (parts[1] << 16 | parts[2] << 8 | parts[3]).toString(16);
    return '#' + Array(6 - hex.length).concat([hex]).toString().replace(/,/g, 0);
};

/**
 * Take an arbitrary RGB or HEX in long or shorthand notation and normalize to standard long HEX form with leading '#' character.
 *
 * @param {String} color A RGB or HEX color value in long or short notation.
 * @type String or null
 * @return A fully qualified 6 character hexadecimal value or with leading '#' character or null if it can't be processed.
 */
var normalizeColor = exports.normalizeColor = function normalizeColor(color) {
    var normalizedColor = null;
    if (typeof color === 'string' && color.charAt(0) === '#') {
        if (color.length === 4) {
            normalizedColor = color + color.charAt(1) + color.charAt(2) + color.charAt(3);
        } else {
            normalizedColor = color;
        }
    } else {
        try {
            normalizedColor = getHEX(color);
        } catch (e) {} // eslint-disable-line no-empty
    }
    return normalizedColor;
};

// coverts a color string in either hex (must be long form) or rgb format into its corresponding hex number
// returns zero if the color string can't be parsed as either format
// TODO: either add support for short form or emit an error
var hexFromColor = exports.hexFromColor = function hexFromColor(color) {
    var normalizedColor = normalizeColor(color);
    return normalizedColor ? parseInt(normalizedColor.replace('#', '0x'), 16) : 0;
};

// given a color string (in long-form hex or rgb form) or a hex number,
// formats the color as an rgba string with the given alpha transparency
// TODO: currently fails somewhat silently if an un-parseable or out-of-range input is given
var addAlphaToColor = exports.addAlphaToColor = function addAlphaToColor(color, alpha) {
    var colorAsHex = typeof color === 'number' ? color : hexFromColor(color);
    return colorFromHex(colorAsHex, alpha);
};

// calculate the luminance of a color based on its hex value
// returns zero if the input is cannot be parsed to a valid number or if the number is out of range
// equation for luminance found at http://en.wikipedia.org/wiki/Luma_(video)
var getLuminance = exports.getLuminance = function getLuminance(hexNum) {
    if (typeof hexNum !== 'number') {
        hexNum = parseInt(hexNum, 16);
    }
    if (isNaN(hexNum) || hexNum < 0x000000 || hexNum > 0xffffff) {
        return 0;
    }
    var r = (hexNum & 0xff0000) >> 16;
    var g = (hexNum & 0x00ff00) >> 8;
    var b = hexNum & 0x0000ff;

    return Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b);
};

// compute the user-visible fill opacity of an SVG element
// an opacity defined as part of the 'fill' color with rgba(...) syntax will take precedence over the 'fill-opacity'
var getComputedOpacity = exports.getComputedOpacity = function getComputedOpacity(element) {
    var fill = _jquery2.default.trim(element.attr('fill'));

    var enforceValidOpacity = function enforceValidOpacity(opacityStr) {
        var parsed = parseFloat(opacityStr);
        return parsed >= 0 && parsed <= 1 ? parsed : 1;
    };

    if (!/^rgba/.test(fill)) {
        return enforceValidOpacity(element.attr('fill-opacity'));
    }
    var rgba = fill.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
    return rgba && rgba.length > 4 ? enforceValidOpacity(rgba[4]) : 1;
};

var interpolateColors = exports.interpolateColors = function interpolateColors(color1, color2, p) {
    var r1 = color1 >> 16 & 0xff;
    var g1 = color1 >> 8 & 0xff;
    var b1 = color1 & 0xff;
    var r2 = color2 >> 16 & 0xff;
    var g2 = color2 >> 8 & 0xff;
    var b2 = color2 & 0xff;
    var rInterp = r1 + Math.round((r2 - r1) * p);
    var gInterp = g1 + Math.round((g2 - g1) * p);
    var bInterp = b1 + Math.round((b2 - b1) * p);

    return rInterp << 16 | gInterp << 8 | bInterp;
};

/***/ })
/******/ ]);