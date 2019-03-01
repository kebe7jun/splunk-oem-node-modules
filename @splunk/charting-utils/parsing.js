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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRotation = exports.getYAxisProperties = exports.getXAxisProperties = exports.yAxisKeyIsTrumped = exports.xAxisKeyIsTrumped = exports.getLegendProperties = exports.arraysAreEquivalent = exports.stringToHexObject = exports.stringToHexArray = exports.capitalize = exports.stringToArray = exports.stringToFieldList = exports.stringToObject = exports.normalizeBoolean = exports.filterPropsByRegex = exports.escapeSVG = exports.escapeHtml = exports.unescapeChars = exports.escapeSafeSplit = exports.trimWhitespace = undefined;

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _color = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: replace with $.trim
var trimWhitespace = exports.trimWhitespace = function trimWhitespace(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
};

// Remove leading and trailing quotes (single or double) -- must be the first and last char.
// ["'] matches a quote, \1 matches whichever type of quote was captured by the first match.
/* eslint-disable no-continue */
var trimQuotes = function trimQuotes(str) {
    return str.replace(/^(["'])(.*)\1$/, '$2');
};

var escapeSafeSplit = exports.escapeSafeSplit = function escapeSafeSplit(str, delimiter, escapeChar) {
    escapeChar = escapeChar || '\\';
    var unescapedPieces = str.split(delimiter);

    // the escaped pieces list initially contains the first element of the unescaped pieces list
    // we use shift() to also remove that element from the unescaped pieces
    var escapedPieces = [unescapedPieces.shift()];

    // now loop over the remaining unescaped pieces
    // if the last escaped piece ends in an escape character, perform a concatenation to undo the split
    // otherwise append the new piece to the escaped pieces list
    (0, _underscore2.default)(unescapedPieces).each(function (piece) {
        var lastEscapedPiece = (0, _underscore2.default)(escapedPieces).last();
        if ((0, _underscore2.default)(lastEscapedPiece).last() === escapeChar) {
            escapedPieces[escapedPieces.length - 1] += delimiter + piece;
        } else {
            escapedPieces.push(piece);
        }
    });
    return escapedPieces;
};

var unescapeChars = exports.unescapeChars = function unescapeChars(str, charList) {
    (0, _underscore2.default)(charList).each(function (chr) {
        // looks weird, but the first four slashes add a single escaped '\' to the regex
        // and the next two escape the character itself within the regex
        var regex = new RegExp('\\\\\\' + chr, 'g');
        str = str.replace(regex, chr);
    });
    return str;
};

var escapeHtml = exports.escapeHtml = function escapeHtml(input) {
    return ('' + input).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
};

var escapeSVG = exports.escapeSVG = function escapeSVG(input) {
    return ('' + input).replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

// uses the given regex to filter out any properties whose key doesn't match
// will return an empty object if the props input is not a map
var filterPropsByRegex = exports.filterPropsByRegex = function filterPropsByRegex(props, regex) {
    if (!(regex instanceof RegExp)) {
        return props;
    }
    var key = void 0;
    var filtered = {};

    // eslint-disable-next-line no-restricted-syntax
    for (key in props) {
        // eslint-disable-next-line no-prototype-builtins
        if (props.hasOwnProperty(key) && regex.test(key)) {
            filtered[key] = props[key];
        }
    }
    return filtered;
};

// normalize a boolean, a default state can optionally be defined for when the value is undefined
var normalizeBoolean = exports.normalizeBoolean = function normalizeBoolean(value, defaultState) {
    if ((0, _underscore2.default)(value).isUndefined()) {
        return !!defaultState;
    }
    if (typeof value === 'string') {
        value = value.toLowerCase();
    }

    switch (value) {
        case true:
        case 1:
        case '1':
        case 'yes':
        case 'on':
        case 'true':
            return true;

        case false:
        case 0:
        case '0':
        case 'no':
        case 'off':
        case 'false':
            return false;

        default:
            return value;
    }
};

// translates a JSON-style serialized map in to a primitive object
// cannot handle nested objects
// value strings should be un-quoted or double-quoted and will be stripped of leading/trailing whitespace
// will not cast to numbers or booleans
var stringToObject = exports.stringToObject = function stringToObject(str) {
    if (!str) {
        return false;
    }
    var i = void 0;
    var loopKv = void 0;
    var loopKey = void 0;
    var map = {};

    str = trimWhitespace(str);
    var strLen = str.length;
    if (str.charAt(0) !== '{' || str.charAt(strLen - 1) !== '}') {
        return false;
    }

    if (/^{\s*}$/.test(str)) {
        return {};
    }
    str = str.substr(1, strLen - 2);
    var propList = escapeSafeSplit(str, ',');
    for (i = 0; i < propList.length; i++) {
        loopKv = escapeSafeSplit(propList[i], ':');
        if (loopKv.length !== 2) {
            return false;
        }
        loopKey = trimWhitespace(loopKv[0]);
        if (loopKey[0] === '"') {
            loopKey = loopKey.substring(1);
        }
        if ((0, _underscore2.default)(loopKey).last() === '"') {
            loopKey = loopKey.substring(0, loopKey.length - 1);
        }
        loopKey = unescapeChars(loopKey, ['{', '}', '[', ']', '(', ')', ',', ':', '"']);
        map[loopKey] = trimQuotes(trimWhitespace(loopKv[1]));
    }
    return map;
};

/**
 * Deserializes a string into a field list.
 */
var stringToFieldList = exports.stringToFieldList = function stringToFieldList(strList) {
    if (typeof strList !== 'string' || !strList) return [];
    var items = [];
    var fieldNameBuffer = [];
    var inquote = false;
    var str = _jquery2.default.trim(strList);
    for (var i = 0, j = str.length; i < j; i++) {
        if (str.charAt(i) === '\\') {
            var nextidx = i + 1;
            if (j > nextidx && (str.charAt(nextidx) === '\\' || str.charAt(nextidx) === '"')) {
                fieldNameBuffer.push(str.charAt(nextidx));
                i++;
                continue;
            } else {
                fieldNameBuffer.push(str.charAt(i));
                continue;
            }
        }

        if (str.charAt(i) === '"') {
            if (!inquote) {
                inquote = true;
                continue;
            } else {
                inquote = false;
                items.push(fieldNameBuffer.join(''));
                fieldNameBuffer = [];
                continue;
            }
        }

        if ((str.charAt(i) === ' ' || str.charAt(i) === ',') && !inquote) {
            if (fieldNameBuffer.length > 0) {
                items.push(fieldNameBuffer.join(''));
            }
            fieldNameBuffer = [];
            continue;
        }
        fieldNameBuffer.push(str.charAt(i));
    }
    if (fieldNameBuffer.length > 0) items.push(fieldNameBuffer.join(''));
    return items;
};

// translates a JSON-style serialized list in to a primitive array
// cannot handle nested arrays
var stringToArray = exports.stringToArray = function stringToArray(str) {
    if (!str) {
        return false;
    }
    str = trimWhitespace(str);
    var strLen = str.length;

    if (str.charAt(0) !== '[' || str.charAt(strLen - 1) !== ']') {
        return false;
    }
    if (/^\[\s*]$/.test(str)) {
        return [];
    }
    str = str.substr(1, strLen - 2);
    return stringToFieldList(str);
};

/**
    * Changes the first letter of first word in a string to upper-case.
    * All other letters remain unchanged.
    *
    * @param str {String} - string to capitalize.
    * @returns {String} - Returns a string with the first letter of first word upper-case.
    */
var capitalize = exports.capitalize = function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

var looseParseColor = function looseParseColor(colorStr) {
    if (_underscore2.default.isNumber(colorStr)) {
        return colorStr;
    }
    if (colorStr.substring(0, 1) === '#') {
        return (0, _color.hexFromColor)(colorStr);
    }
    // For legacy reasons, assume that any string is a hex number representation,
    // regardless of whether it starts with a '0x' (SPL-124191)
    return parseInt(colorStr, 16);
};

var stringToHexArray = exports.stringToHexArray = function stringToHexArray(colorStr) {
    var i = void 0;
    var hexColor = void 0;
    var colors = void 0;

    try {
        colors = JSON.parse(colorStr);
    } catch (e) {
        colors = stringToArray(colorStr);
    }

    if (!colors) {
        return false;
    }
    for (i = 0; i < colors.length; i++) {
        hexColor = looseParseColor(colors[i]);
        if (isNaN(hexColor)) {
            return false;
        }
        colors[i] = hexColor;
    }
    return colors;
};

var stringToHexObject = exports.stringToHexObject = function stringToHexObject(colorStr) {
    var parsedInput = void 0;
    try {
        parsedInput = JSON.parse(colorStr);
    } catch (e) {
        parsedInput = stringToObject(colorStr);
    }
    if (!parsedInput) {
        return false;
    }
    var hexObject = {};
    (0, _underscore2.default)(parsedInput).each(function (color, key) {
        hexObject[key] = looseParseColor(color) || 0;
    });
    return hexObject;
};

// a simple utility method for comparing arrays, assumes one-dimensional arrays of primitives,
// performs strict comparisons
var arraysAreEquivalent = exports.arraysAreEquivalent = function arraysAreEquivalent(array1, array2) {
    // make sure these are actually arrays
    if (!(array1 instanceof Array) || !(array2 instanceof Array)) {
        return false;
    }
    if (array1 === array2) {
        // true if they are the same object
        return true;
    }
    if (array1.length !== array2.length) {
        // false if they are different lengths
        return false;
    }
    // false if any of their elements don't match
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

var getLegendProperties = exports.getLegendProperties = function getLegendProperties(properties) {
    var remapped = {};
    var legendProps = filterPropsByRegex(properties, /legend[.]/);

    (0, _underscore2.default)(legendProps).each(function (value, key) {
        remapped[key.replace(/^legend[.]/, '')] = value;
    });
    return remapped;
};

// checks if the given x-axis key is deprecated, and if so returns true if that key's
// non-deprecated counterpart is set in the properties map, otherwise returns false
var xAxisKeyIsTrumped = exports.xAxisKeyIsTrumped = function xAxisKeyIsTrumped(key, properties) {
    if (!/primaryAxis/.test(key)) {
        return false;
    }
    if (/primaryAxisTitle/.test(key)) {
        return properties[key.replace(/primaryAxisTitle/, 'axisTitleX')];
    }
    return properties[key.replace(/primaryAxis/, 'axisX')];
};

// checks if the given y-axis key is deprecated, and if so returns true if that key's
// non-deprecated counterpart is set in the properties map, otherwise returns false
var yAxisKeyIsTrumped = exports.yAxisKeyIsTrumped = function yAxisKeyIsTrumped(key, properties) {
    if (!/secondaryAxis/.test(key)) {
        return false;
    }
    if (/secondaryAxisTitle/.test(key)) {
        return properties[key.replace(/secondaryAxisTitle/, 'axisTitleY')];
    }
    return properties[key.replace(/secondaryAxis/, 'axisY')];
};

// returns a map of properties that apply either to the x-axis or to x-axis labels
// all axis-related keys are renamed to 'axis' and all axis-label-related keys are renamed to 'axisLabels'
var getXAxisProperties = exports.getXAxisProperties = function getXAxisProperties(properties) {
    var key = void 0;
    var newKey = void 0;
    var remapped = {};
    var axisProps = filterPropsByRegex(properties, /(axisX|primaryAxis|axisLabelsX|axisTitleX|gridLinesX)/);
    // eslint-disable-next-line no-restricted-syntax
    for (key in axisProps) {
        // eslint-disable-next-line no-prototype-builtins
        if (axisProps.hasOwnProperty(key)) {
            if (!xAxisKeyIsTrumped(key, properties)) {
                newKey = key.replace(/(axisX|primaryAxis)/, 'axis');
                newKey = newKey.replace(/axisLabelsX/, 'axisLabels');
                newKey = newKey.replace(/axisTitleX/, 'axisTitle');
                newKey = newKey.replace(/gridLinesX/, 'gridLines');
                remapped[newKey] = axisProps[key];
            }
        }
    }
    return remapped;
};

// returns a map of properties that apply either to the y-axis or to y-axis labels
// all axis-related keys are renamed to 'axis' and all axis-label-related keys are renamed to 'axisLabels'
var getYAxisProperties = exports.getYAxisProperties = function getYAxisProperties(properties, axisIndex) {
    var key = void 0;
    var newKey = void 0;
    var remapped = {};
    var axisProps = void 0;
    axisIndex = (properties && normalizeBoolean(properties['layout.splitSeries']) ? 0 : axisIndex) || 0;
    if (axisIndex === 0) {
        axisProps = filterPropsByRegex(properties, /(axisY[^2]|secondaryAxis|axisLabelsY(?!2.*|\.majorLabelStyle\.rotation|\.majorLabelStyle\.overflowMode)|axisTitleY[^2]|gridLinesY[^2])/);
    } else if (axisIndex === 1) {
        axisProps = filterPropsByRegex(properties, /(axisY2(?!\.enabled)|axisLabelsY2(?!\.majorLabelStyle\.rotation|\.majorLabelStyle\.overflowMode)|axisTitleY2|gridLinesY2)/);
        if (!axisProps['axisY2.scale'] || axisProps['axisY2.scale'] === 'inherit') {
            axisProps['axisY2.scale'] = properties ? properties['axisY.scale'] || 'linear' : 'linear';
        }
        // An empty or invalid value for showing the grid lines for the second y-axis should map to hiding them.
        if (_underscore2.default.isUndefined(axisProps['gridLinesY2.showMajorLines']) || typeof normalizeBoolean(axisProps['gridLinesY2.showMajorLines']) !== 'boolean') {
            axisProps['gridLinesY2.showMajorLines'] = 0;
        }
        axisProps['axisLabelsY2.extendsAxisRange'] = properties ? properties['axisLabelsY.extendsAxisRange'] || true : true;
    } else {
        throw new Error('Axis index must be 0 or 1');
    }

    // eslint-disable-next-line no-restricted-syntax
    for (key in axisProps) {
        // eslint-disable-next-line no-prototype-builtins
        if (axisProps.hasOwnProperty(key)) {
            if (!yAxisKeyIsTrumped(key, properties)) {
                newKey = key.replace(/(axisY2|axisY|secondaryAxis)/, 'axis');
                newKey = newKey.replace(/axisLabelsY2|axisLabelsY/, 'axisLabels');
                newKey = newKey.replace(/axisTitleY2|axisTitleY/, 'axisTitle');
                newKey = newKey.replace(/gridLinesY2|gridLinesY/, 'gridLines');
                remapped[newKey] = axisProps[key];
            }
        }
    }
    return remapped;
};

// gets axis label rotation
var getRotation = exports.getRotation = function getRotation(rotationProperty) {
    var PERMITTED_ROTATIONS = [-90, -45, 0, 45, 90];
    var DEFAULT_ROTATION = 0;
    var labelRotation = parseInt(rotationProperty, 10);
    if (_underscore2.default.indexOf(PERMITTED_ROTATIONS, labelRotation) === -1) {
        return DEFAULT_ROTATION;
    }
    return labelRotation;
};

/***/ }),

/***/ 3:
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

/******/ });