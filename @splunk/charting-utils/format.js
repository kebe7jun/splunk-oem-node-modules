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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSIPower = exports.getSIUnit = exports.abbreviateByUnit = exports.abbreviateNumber = undefined;

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _sprintf = __webpack_require__(4);

var _sprintf2 = _interopRequireDefault(_sprintf);

var _math = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A method to abbreviate number to a maximum of 4 digits
 */

var abbreviateValue = function abbreviateValue(number) {
    if (number < 1000) {
        // less than 1,000
        return _i18n2.default.format_decimal(number);
    } else if (number < 10000) {
        // less than 10,000
        return (0, _sprintf2.default)(_i18n2.default._('%sK'), _i18n2.default.format_decimal((0, _math.roundToDecimal)(number / 1000, -2)));
    } else if (number < 100000) {
        // less than 100,000
        return (0, _sprintf2.default)(_i18n2.default._('%sK'), _i18n2.default.format_decimal((0, _math.roundToDecimal)(number / 1000, -1)));
    } else if (number < 999500) {
        // less than 999,500
        return (0, _sprintf2.default)(_i18n2.default._('%sK'), _i18n2.default.format_decimal((0, _math.roundToDecimal)(number / 1000, 0)));
    } else if (number < 10000000) {
        // less than 10,000,000
        return (0, _sprintf2.default)(_i18n2.default._('%sM'), _i18n2.default.format_decimal((0, _math.roundToDecimal)(number / 1000000, -2)));
    } else if (number < 100000000) {
        // less than 100,000,000
        return (0, _sprintf2.default)(_i18n2.default._('%sM'), _i18n2.default.format_decimal((0, _math.roundToDecimal)(number / 1000000, -1)));
    } else if (number < 999500000) {
        // less than 999,500,000
        return (0, _sprintf2.default)(_i18n2.default._('%sM'), _i18n2.default.format_decimal((0, _math.roundToDecimal)(number / 1000000, 0)));
    } else if (number < 10000000000) {
        // less than 10,000,000,000
        return (0, _sprintf2.default)(_i18n2.default._('%sB'), _i18n2.default.format_decimal((0, _math.roundToDecimal)(number / 1000000000, -2)));
    } else if (number < 100000000000) {
        // less than 100,000,000,000
        return (0, _sprintf2.default)(_i18n2.default._('%sB'), _i18n2.default.format_decimal((0, _math.roundToDecimal)(number / 1000000000, -1)));
    }
    // greater than or equal to 100,000,000,000
    return (0, _sprintf2.default)(_i18n2.default._('%sB'), _i18n2.default.format_decimal((0, _math.roundToDecimal)(number / 1000000000, 0)));
}; /**
    * Util package for formatting number.
    */
var abbreviateNumber = exports.abbreviateNumber = function abbreviateNumber(number) {
    if (number < 0) {
        return '-'.concat(abbreviateValue(Math.abs(number)));
    }
    return abbreviateValue(number);
};

/**
 * A method to abbreviate number to an SI unit to a certain decimal place
 */

var abbreviateByUnit = exports.abbreviateByUnit = function abbreviateByUnit(number, unit, decimal) {
    var format = '###,###.';
    var ending = '';
    // concatonate decimal number of zeros to the ending of formatting string
    for (var i = 0; i < decimal; i++) {
        ending = ending + '0';
    }
    format += ending;

    if (number === 0) {
        return '0';
    }
    if (unit === '') {
        return _i18n2.default.format_decimal(number, format).toString();
    } else if (unit === 'K') {
        return (0, _sprintf2.default)(_i18n2.default._('%sK'), _i18n2.default.format_decimal(number / 1000, format));
    } else if (unit === 'M') {
        return (0, _sprintf2.default)(_i18n2.default._('%sM'), _i18n2.default.format_decimal(number / 1000000, format));
    } else if (unit === 'B') {
        return (0, _sprintf2.default)(_i18n2.default._('%sB'), _i18n2.default.format_decimal(number / 1000000000, format));
    } else if (unit === 'T') {
        return (0, _sprintf2.default)(_i18n2.default._('%sT'), _i18n2.default.format_decimal(number / 1000000000000, format));
    }
    return undefined;
};

/**
 * A method to return the largest SI suffix that is smaller than the number
 */

var getSIUnit = exports.getSIUnit = function getSIUnit(number) {
    if (number >= 1000000000000) {
        return 'T';
    } else if (number >= 1000000000) {
        return 'B';
    } else if (number >= 1000000) {
        return 'M';
    } else if (number >= 1000) {
        return 'K';
    }
    return '';
};

/**
 * A method to return the largest power asscoiated to an SI suffix that is smaller than the number
 */

var getSIPower = exports.getSIPower = function getSIPower(number) {
    if (number >= 1000000000000) {
        return 12;
    } else if (number >= 1000000000) {
        return 9;
    } else if (number >= 1000000) {
        return 6;
    } else if (number >= 1000) {
        return 3;
    }
    return 0;
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable */

/*
 * Copied from js/stubs/i18n.js in the core UI repository, since the logic is unlikely to change and this saves
 * us the trouble of taking a dependency on the SplunkWebCore bower module.
 */

/*
    * monkey patches to the i18n library
    * see SPL-75565
    */

// NOTE: this code block is duplicated in the util/test_i18n_patches.html unit test.
//       any changes made here must also be reflected there.
if (window.locale_name() in { ko_KR: true, zh_CN: true, zh_TW: true }) {
    window._i18n_locale.date_formats['short'] = { pattern: 'yy/MM/dd', format: '%(yy)s/%(MM)s/%(dd)s' };
    window._i18n_locale.date_formats['medium'] = { pattern: 'yyyy/MM/dd', format: '%(yyyy)s/%(MM)s/%(dd)s' };
    window._i18n_locale.time_formats['short'] = { pattern: 'H:mm', format: '%(H)s:%(mm)s' };
    window._i18n_locale.time_formats['medium'] = { pattern: 'H:mm:ss', format: '%(H)s:%(mm)s:%(ss)s' };
}

var asianLanguageDateReplacements = [[/^ccc MMM d$/, 'M/d (ccc)'], [/^YYYY-MM/, 'YYYY/MM'], [/MM-dd/, 'MM/dd']];

// maintain a hash of locales where custom string replacements are needed to get correct translation
var FORMAT_DATE_REPLACEMENTS = {
    ja_JP: asianLanguageDateReplacements,
    ko_KR: asianLanguageDateReplacements,
    zh_CN: asianLanguageDateReplacements,
    zh_TW: asianLanguageDateReplacements
};

// maintain a list of replacements needed when a locale specifies that day comes before month
var DAY_FIRST_FORMATS = [['MMM d', 'd MMM']];

var oldFormatDate = window.format_date;
window.format_date = function (date, format) {
    format = format || 'medium';
    var i,
        replacements,
        locale = window.locale_name();

    if (format && typeof format === 'string' && window.locale_uses_day_before_month()) {
        replacements = DAY_FIRST_FORMATS;
        for (i = 0; i < replacements.length; i++) {
            format = format.replace(replacements[i][0], replacements[i][1]);
        }
    }
    if (format && typeof format === 'string' && locale in FORMAT_DATE_REPLACEMENTS) {
        replacements = FORMAT_DATE_REPLACEMENTS[locale];

        for (i = 0; i < replacements.length; i++) {
            var replacement = replacements[i];
            format = format.replace(replacement[0], replacement[1]);
        }
    }
    return oldFormatDate(date, format);
};

exports.default = {
    _: window.gettext,
    ungettext: window.ungettext,
    format_decimal: window.format_decimal,
    format_number: window.format_number,
    format_percent: window.format_percent,
    format_scientific: window.format_scientific,
    format_date: window.format_date,
    format_datetime: window.format_datetime,
    format_time: window.format_time,
    format_datetime_microseconds: window.format_datetime_microseconds,
    format_time_microseconds: window.format_time_microseconds,
    locale_uses_day_before_month: window.locale_uses_day_before_month,
    format_datetime_range: window.format_datetime_range,
    locale_name: window.locale_name,
    DateTime: window.DateTime,
    moment_install: window.moment_install,
    numeral_install: window.numeral_install,
    jQuery_ui_datepicker_install: window.jQuery_ui_datepicker_install
};
module.exports = exports['default'];

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sprintf;
/* eslint-disable */
/**
* sprintf routine borrowed from http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sprintf/
* Licensed under GPL and MIT licenses
*
* Modified by Gareth to add support for Python style argument specifiers:
* sprintf("Hi %(name)s, welcome to %(application)s", { name: 'Gareth', app: 'Splunk })
*/
// prettier-ignore
function sprintf() {
    // Return a formatted string
    //
    // +    discuss at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_sprintf/
    // +       version: 810.1015
    // +   original by: Ash Searle (http://hexmen.com/blog/)
    // + namespaced by: Michael White (http://getsprink.com)
    // +    tweaked by: Jack
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: sprintf("%01.2f", 123.1);
    // *     returns 1: 123.10

    var regex = /%%|%(\d+\$)?(\([^)]+\))?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
    var a = arguments,
        i = 0,
        format = a[i++];

    // pad()
    var pad = function pad(str, len, chr, leftJustify) {
        var padding = str.length >= len ? '' : Array(1 + len - str.length >>> 0).join(chr);
        return leftJustify ? str + padding : padding + str;
    };

    // justify()
    var justify = function justify(value, prefix, leftJustify, minWidth, zeroPad) {
        var diff = minWidth - value.length;
        if (diff > 0) {
            if (leftJustify || !zeroPad) {
                value = pad(value, minWidth, ' ', leftJustify);
            } else {
                value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
            }
        }
        return value;
    };

    // formatBaseX()
    var formatBaseX = function formatBaseX(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
        // Note: casts negative numbers to positive ones
        var number = value >>> 0;
        prefix = prefix && number && { '2': '0b', '8': '0', '16': '0x' }[base] || '';
        value = prefix + pad(number.toString(base), precision || 0, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
    };

    // formatString()
    var formatString = function formatString(value, leftJustify, minWidth, precision, zeroPad) {
        if (precision != null) {
            value = value.slice(0, precision);
        }
        return justify(value, '', leftJustify, minWidth, zeroPad);
    };

    // finalFormat()
    var doFormat = function doFormat(substring, valueIndex, valueName, flags, minWidth, _, precision, type) {
        if (substring == '%%') return '%';

        // parse flags
        var leftJustify = false,
            positivePrefix = '',
            zeroPad = false,
            prefixBaseX = false;
        var flagsl = flags.length;
        for (var j = 0; flags && j < flagsl; j++) {
            switch (flags.charAt(j)) {
                case ' ':
                    positivePrefix = ' ';break;
                case '+':
                    positivePrefix = '+';break;
                case '-':
                    leftJustify = true;break;
                case '0':
                    zeroPad = true;break;
                case '#':
                    prefixBaseX = true;break;
            }
        } // parameters may be null, undefined, empty-string or real valued
        // we want to ignore null, undefined and empty-string values
        if (!minWidth) {
            minWidth = 0;
        } else if (minWidth == '*') {
            minWidth = +a[i++];
        } else if (minWidth.charAt(0) == '*') {
            minWidth = +a[minWidth.slice(1, -1)];
        } else {
            minWidth = +minWidth;
        }

        // Note: undocumented perl feature:
        if (minWidth < 0) {
            minWidth = -minWidth;
            leftJustify = true;
        }

        if (!isFinite(minWidth)) {
            throw new Error('sprintf: (minimum-)width must be finite');
        }

        if (!precision) {
            precision = 'fFeE'.indexOf(type) > -1 ? 6 : type == 'd' ? 0 : void 0;
        } else if (precision == '*') {
            precision = +a[i++];
        } else if (precision.charAt(0) == '*') {
            precision = +a[precision.slice(1, -1)];
        } else {
            precision = +precision;
        }

        // grab value using valueIndex if required?
        if (valueName) {
            valueName = valueName.substr(1, valueName.length - 2);
            var value = a[1][valueName];
        } else {
            var value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];
        }

        switch (type) {
            case 's':
                return formatString(String(value), leftJustify, minWidth, precision, zeroPad);
            case 'c':
                return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
            case 'b':
                return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'o':
                return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'x':
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'X':
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
            case 'u':
                return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'i':
            case 'd':
                {
                    var number = parseInt(+value);
                    var prefix = number < 0 ? '-' : positivePrefix;
                    value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                    return justify(value, prefix, leftJustify, minWidth, zeroPad);
                }
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
                {
                    var number = +value;
                    var prefix = number < 0 ? '-' : positivePrefix;
                    var method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                    var textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                    value = prefix + Math.abs(number)[method](precision);
                    return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                }
            default:
                return substring;
        }
    };

    return format.replace(regex, doFormat);
} // }}}

module.exports = exports['default'];

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