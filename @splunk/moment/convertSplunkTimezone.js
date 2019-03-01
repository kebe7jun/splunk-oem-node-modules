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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/prefer-default-export */


var _lodash = __webpack_require__(1);

function parseY(entry, parse) {
    // -25200 YW 50 44 54 => -420 'PDT'

    var elements = entry.split(' ');
    if (elements.length < 5) {
        return parse;
    }

    var offset = parseInt(elements[0], 10);
    if (!(0, _lodash.isFinite)(offset)) {
        return parse;
    }

    var abbr = elements.splice(2).reduce(function (a, v) {
        var character = String.fromCharCode(parseInt(v, 16)); // hexidecimal character code
        return '' + a + character;
    }, '');

    return _extends({}, parse, {
        abbrs: parse.abbrs.concat([abbr]),
        offsets: parse.offsets.concat([-offset / 60]) // in minutes
    });
}

function parseAt(entry, parse) {
    // -1633269600 0
    var elements = entry.split(' ');
    if (elements.length < 2) {
        return parse;
    }

    var time = parseInt(elements[0], 10);
    if (!(0, _lodash.isFinite)(time)) {
        return parse;
    }

    var index = parseInt(elements[1], 10);
    if (!(0, _lodash.isFinite)(index) || index < 0 || index >= parse.offsets.length) {
        return parse;
    }

    return _extends({}, parse, {
        starts: parse.starts.concat([{
            time: time * 1000,
            abbr: parse.abbrs[index],
            offset: parse.offsets[index]
        }])
    });
}

/**
 * This function has no dependecies on Moment, so it's possible to use Moment's
 * Unpacked Format as a more easily read and more portable alternative to Splunk's Serialized Timezone Format.
 * @param {string} timezone - A timezone in Splunk's Serialized Timezone Format 1.0.
 * @param {string} name - An identifier for the time zone, such as America/Los_Angeles or +6:00,
 * but may be set to a guid or most any other string that does not contain a slash.
 * @returns {object} A timezone in Moment's [Unpacked Format](http://momentjs.com/timezone/docs/#/data-formats/unpacked-format/).
 * @public
 */
function convertSplunkTimezone(serializedTimeZone, name) {
    /*  Example serializedTimeZone:
     *
     *  ### SERIALIZED TIMEZONE FORMAT 1.0;
     *  Y-25200 YW 50 44 54;
     *  Y-28800 NW 50 53 54;
     *  Y-25200 YW 50 57 54;
     *  Y-25200 YG 50 50 54;
     *  @-1633269600 0;
     *  @-1615129200 1;
     *  @-1601820000 0;
     *  @-1583679600 1;
     *
     *  ### SERIALIZED TIMEZONE FORMAT 1.0;
     *  C0;
     *  Y0 NW 47 4D 54;
     */
    var parse = {
        abbrs: [],
        offsets: [],
        starts: []
    };

    serializedTimeZone.split(';').forEach(function (entry) {
        switch (entry.charAt(0)) {
            case 'C':
                // This data is duplicated in start times.
                break;
            case 'Y':
                // Labels and Offsets (GMT, PST, etc)
                parse = parseY(entry.substring(1, entry.length), parse);
                break;
            default:
                // Start Times and Label/Offset Index
                parse = parseAt(entry.substring(1, entry.length), parse);
                break;
        }
    });

    // Scaffold the output
    var output = {
        name: name,
        abbrs: [], // ['LMT', 'MUT', 'MUST', 'MUT', 'MUST', 'MUT'],
        offsets: [], // [-230, -240, -300, -240, -300, -240],
        untils: [] // [-1988164200000, 403041600000, 417034800000, 1224972000000, 1238274000000, null]
    };

    // Splunk uses starts and moment uses untils, so need to convert one to the other.
    var firstStart = parse.starts[0];
    var lastStart = parse.starts[parse.starts.length - 1];
    parse.starts.forEach(function (u, i) {
        if (u === firstStart) {
            // since first one doesn't have a label, use the constant label from the end.
            output.abbrs.push(lastStart.abbr);
            output.offsets.push(lastStart.offset);
            output.untils.push(u.time);
        } else {
            // start time is the `until` value for the previous label
            output.abbrs.push(parse.starts[i - 1].abbr);
            output.offsets.push(parse.starts[i - 1].offset);
            output.untils.push(u.time);
        }
        if (u === lastStart) {
            // Push the last label as a constant
            output.abbrs.push(u.abbr);
            output.offsets.push(u.offset);
            output.untils.push(null);
        }
    });

    return output;
}
exports.default = convertSplunkTimezone;

/***/ })
/******/ ]);