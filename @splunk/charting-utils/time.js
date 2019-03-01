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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("underscore");

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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _moment = __webpack_require__(51);

var _moment2 = _interopRequireDefault(_moment);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _logger = __webpack_require__(6);

var logger = _interopRequireWildcard(_logger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TimeUtils

var BD_TIME_REGEX_MILLIS = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d+)[+-]{1}\d{2}[:]?\d{2}$/;

var BD_TIME_REGEX_NO_MILLIS = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})[+-]{1}\d{2}[:]?\d{2}$/;

function BdTime(isoString) {
    var bdPieces = BD_TIME_REGEX_MILLIS.exec(isoString) || BD_TIME_REGEX_NO_MILLIS.exec(isoString);
    if (!bdPieces) {
        this.isInvalid = true;
    } else {
        this.year = parseInt(bdPieces[1], 10);
        this.month = parseInt(bdPieces[2], 10);
        this.day = parseInt(bdPieces[3], 10);
        this.hour = parseInt(bdPieces[4], 10);
        this.minute = parseInt(bdPieces[5], 10);
        this.second = parseInt(bdPieces[6], 10);
        this.millisecond = bdPieces.length > 7 ? parseInt(bdPieces[7], 10) : 0;
    }
}

var _extractBdTime = function _extractBdTime(timeString) {
    return new BdTime(timeString);
};

var _calculateTimeFormat = function _calculateTimeFormat(time, spanSeries) {
    var span = parseFloat(spanSeries[0]);
    if (!(time instanceof BdTime)) {
        time = _extractBdTime(time);
    }
    if (!span) {
        return time.millisecond === 0 ? 'second' : 'millisecond';
    }

    if (span >= 0 && span < 1 || time.millisecond !== 0) {
        return 'millisecond';
    }
    if (span >= 1 && span < 60 || time.second !== 0) {
        return 'second';
    }
    if (span >= 60 && span < 3600 || time.minute !== 0) {
        return 'minute';
    }
    if (span >= 3600 && span <= 82800 || time.hour !== 0) {
        // 23 hour (82800)
        return 'hour';
    }
    if (span > 82800 && span <= 2419200 || time.day !== 1) {
        // 1 day to 28 days
        return 'day';
    }
    if (span > 2419200 && span <= 31535999 || time.month !== 1) {
        // 28 days - 1 year
        return 'month';
    }
    if (span >= 31536000) {
        // year
        return 'year';
    }
    logger.log('_span value (' + span + ') did not meet any time formatting condition');
    return 'second';
};

var bdTimeToDateObject = function bdTimeToDateObject(bdTime) {
    var year = bdTime.year;
    var month = bdTime.month - 1;
    var day = bdTime.day;
    var hour = bdTime.hour;
    var minute = bdTime.minute;
    var second = bdTime.second;
    var millisecond = bdTime.millisecond;

    return new Date(year, month, day, hour, minute, second, millisecond);
};

// Not used?
//
// const getTimezoneString = dateObj => {
//     const timezoneOffset = dateObj.getTimezoneOffset();
//     const absoluteValueTimezoneOffset = Math.abs(timezoneOffset);
//     const hours = Math.floor(absoluteValueTimezoneOffset / 60);
//     const minutes = absoluteValueTimezoneOffset % 60;
//     const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
//     const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//     return `${(timezoneOffset > 0 ? '-' : '+') + formattedHours}:${formattedMinutes}`;
// };
//
// const isValidIsoTime = str => BD_TIME_REGEX_MILLIS.test(str) || BD_TIME_REGEX_NO_MILLIS.test(str);

var TimeUtils = {
    SECS_PER_MIN: 60,
    SECS_PER_HOUR: 60 * 60,

    isoToDateObject: function isoToDateObject(isoString) {
        return (0, _moment2.default)(isoString).toDate();
    },


    // Returns the epoch seconds in string form.
    getEpochTimeFromISO: function getEpochTimeFromISO(timeString) {
        var millis = TimeUtils.isoToDateObject(timeString).getTime();
        return (millis / 1000).toFixed(3);
    },
    extractBdTime: function extractBdTime(timeString) {
        return _extractBdTime(timeString);
    },
    determineLabelGranularity: function determineLabelGranularity(times, spanSeries) {
        if (!(times[0] instanceof BdTime)) {
            times = (0, _underscore2.default)(times).map(TimeUtils.extractBdTime);
        }
        times = (0, _underscore2.default)(times).filter(function (time) {
            return !time.isInvalid;
        });
        if (times.length === 1 && (!spanSeries || spanSeries.length === 0)) {
            return times[0].millisecond === 0 ? 'second' : 'millisecond';
        }
        if (times.length === 1 && spanSeries) {
            return _calculateTimeFormat(times[0], spanSeries);
        }
        var milliseconds = [];
        var seconds = [];
        var minutes = [];
        var hours = [];
        var days = [];
        var months = [];

        var allInListMatch = function allInListMatch(list, matchMe) {
            for (var i = 0; i < list.length; i++) {
                if (list[i] !== matchMe) {
                    return false;
                }
            }
            return true;
        };

        (0, _underscore2.default)(times).each(function (time) {
            milliseconds.push(time.millisecond);
            seconds.push(time.second);
            minutes.push(time.minute);
            hours.push(time.hour);
            days.push(time.day);
            months.push(time.month);
        });

        if (!allInListMatch(milliseconds, 0)) {
            return 'millisecond';
        }
        if (!allInListMatch(seconds, 0)) {
            return 'second';
        }
        if (!allInListMatch(minutes, 0)) {
            return 'minute';
        }
        if (!allInListMatch(hours, 0)) {
            return 'hour';
        }
        if (!allInListMatch(days, 1)) {
            return 'day';
        }
        if (!allInListMatch(months, 1)) {
            return 'month';
        }
        return 'year';
    },
    formatBdTimeAsAxisLabel: function formatBdTimeAsAxisLabel(time, prevBdTime, granularity) {
        if (time.isInvalid) {
            return null;
        }
        var dateTime = bdTimeToDateObject(time);
        var showDay = granularity in { millisecond: true, second: true, minute: true, hour: true, day: true };
        var showTimes = granularity in { millisecond: true, second: true, minute: true, hour: true };
        var showSeconds = granularity in { millisecond: true, second: true };
        var showMillis = granularity === 'millisecond';
        var timeFormat = showSeconds ? 'medium' : 'short';
        var dateFormat = showDay ? 'ccc MMM d' : 'MMMM';

        var formatTime = function formatTime(dt, format) {
            if (showMillis) {
                return _i18n2.default.format_time_microseconds(dt, format);
            }
            return _i18n2.default.format_time(dt, format);
        };

        if (granularity === 'year') {
            return [_i18n2.default.format_date(dateTime, 'YYYY')];
        }
        if (prevBdTime && prevBdTime.year === time.year && time.month === prevBdTime.month && time.day === prevBdTime.day) {
            return [formatTime(dateTime, timeFormat)];
        }
        var formattedPieces = showTimes ? [formatTime(dateTime, timeFormat), _i18n2.default.format_date(dateTime, dateFormat)] : [_i18n2.default.format_date(dateTime, dateFormat)];

        if (!prevBdTime || time.year !== prevBdTime.year) {
            formattedPieces.push(_i18n2.default.format_date(dateTime, 'YYYY'));
        }
        return formattedPieces;
    }
};

exports.default = TimeUtils;
module.exports = exports['default'];

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _console = window.console;

var setLoggingConsole = exports.setLoggingConsole = function setLoggingConsole(newConsole) {
    _console = newConsole;
};

var bindConsole = function bindConsole(fnName) {
    return function () {
        var _console2;

        (_console2 = _console)[fnName].apply(_console2, arguments);
    };
};

var debug = exports.debug = bindConsole('debug');
var info = exports.info = bindConsole('info');
var warn = exports.warn = bindConsole('warn');
var error = exports.error = bindConsole('error');
var log = exports.log = bindConsole('log');
var trace = exports.trace = bindConsole('trace');

exports.default = {
    setLoggingConsole: setLoggingConsole,
    debug: debug,
    info: info,
    warn: warn,
    error: error,
    log: log,
    trace: trace
};

/***/ })

/******/ });