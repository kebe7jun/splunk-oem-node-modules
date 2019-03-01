/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeUnit = normalizeUnit;
exports.normalizeSnapUnit = normalizeSnapUnit;
exports.getUnitLabel = getUnitLabel;
exports.removeRealTime = removeRealTime;
exports.removeISOTimezone = removeISOTimezone;
exports.isEpoch = isEpoch;
exports.isISO = isISO;
exports.isAbsolute = isAbsolute;
exports.parseTimeString = parseTimeString;
exports.isValidTime = isValidTime;
exports.isRealTime = isRealTime;
exports.isWholeDay = isWholeDay;
exports.isEarliestEmpty = isEarliestEmpty;
exports.isLatestNow = isLatestNow;
exports.isAllTime = isAllTime;
exports.timeRangesAreEquivalent = timeRangesAreEquivalent;
exports.findPresetLabel = findPresetLabel;
exports.createRangeLabel = createRangeLabel;
exports.formatDuration = formatDuration;

var _lodash = require('lodash');

var _format = require('@splunk/ui-utils/format');

var _config = require('@splunk/splunk-utils/config');

var _i18n = require('@splunk/ui-utils/i18n');

var _moment = require('@splunk/moment');

var _moment2 = _interopRequireDefault(_moment);

var _timeUnits = require('./timeUnits');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Utilities for interpreting, parsing, and validating time ranges. Each function can be imported
 * separately.
 * ```
 *  import { normalizeUnit, createRangeLabel } from '@splunk/time-range-utils/time'
 * ```
 *
 * @file
 */

/**
 * Normalizes units to it's shortest version, such as `s` for `sec` and `mon` for `month`.
 * @name normalizeUnit
 * @function
 * @public
 * @param {string} unit - The unit, such as `s` or `quarter`.
 * @param {bool} [removeInvalid=true] - When true, returns an empty string for invalid units,
 * when false
 * returns 's' for invalid units.
 * @returns {string} Returns the normalized unit or empty string.
 */
function normalizeUnit(abbr) {
    var removeInvalid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var hasUnit = (0, _lodash.has)(_timeUnits.timeUnits, abbr);
    var defaultUnit = removeInvalid ? '' : _timeUnits.timeUnits.s.abbr;
    return hasUnit ? _timeUnits.timeUnits[abbr].abbr : defaultUnit;
}
/**
 * Normalizes snap units to it's shortest version, this is the same as normalizeUnit, but also
 * supports weekdays, such as `w5`.
 * @public
 * @param {string} unit - The unit, such as `s`, `quarter` or `w0`.
 * @param {bool} [removeInvalid=true] - When true, returns an empty string for invalid units,
 * when false returns 's' for invalid units.
 * @returns {string} Returns the normalized unit or empty string.
 */
function normalizeSnapUnit(abbr) {
    var removeInvalid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var hasUnit = (0, _lodash.has)(_timeUnits.snapUnits, abbr);
    var defaultUnit = removeInvalid ? '' : _timeUnits.timeUnits.s.abbr;
    return hasUnit ? _timeUnits.snapUnits[abbr].abbr : defaultUnit;
}

/**
 * Returns a label for a unit abbreviation, such as 'second' for 's' or 'sec'.
 * @public
 * @param {object} unit -  The unit, such as `s`, `quarter` or `w0`.
 * @param {object} [plural=false] - Whether the returned label should be plural.
 * @returns {string}
 */
function getUnitLabel(unit) {
    var plural = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return _timeUnits.snapUnits[unit][plural ? 'plural' : 'singular'];
}

/**
 * Strips rt from the beginning of a time string when found. This makes a time string compatible
 * with the time parser. To ensure capability with the time parser 'rt' returns 'now'.
 * @public
 * @param {string} time - The time string such as `47165491` or `rt-2h@m`.
 * @returns {string} Returns the time string.
 */
function removeRealTime(time) {
    if (time === 'rt') {
        return 'now';
    }
    return time.replace(/^rt/, '');
}

/**
 * Removes the timezone from an iso time string
 * @public
 * @param {string} time - The time string such as `47165491` or `-2h@m`.
 * @returns {string}
 */
function removeISOTimezone(time) {
    return time.replace(/[+-]\d?\d:\d\d$/, '');
}

/**
 * Validates that a string represents a unix epoch time.
 * @public
 * @param {string} time - The time string such as `47165491` or `-2h@m`.
 * @returns {bool}
 */
function isEpoch(time) {
    return (0, _lodash.isFinite)(time) || (0, _lodash.isString)(time) && /^\d+((\.\d+)|(\d*))$/.test(time);
}

/**
 * Validates that a string represents an ISO time.
 * @public
 * @param {string} time - The time string such as `47165491` or `-2h@m`.
 * @returns {bool}
 */
function isISO(time) {
    return !!time.match(/^\d\d\d\d-\d\d?-\d\d?T\d\d?:\d\d?(:\d\d?)?(\.\d\d?\d?)?([+-]\d\d?:\d\d|Z)?$/);
}

/**
 * Validates that a string represents an ISO or unix epoch time.
 * @public
 * @param {string} time - The time string such as `47165491` or `-2h@m`.
 * @returns {bool}
 */
function isAbsolute(time) {
    if (time === undefined) {
        return false;
    }
    return isEpoch(time) || isISO(time);
}

/**
 * Parses a time string for inspection or form population.
 *
 * Example parse for a relative time string:
 * ```
 * {
 *     string: '-3d@qtr+2hr',
 *     type: ['relative'], // 'relative', 'realTime', 'iso', or 'epoch'
 *     isFullyParsed: true,
 *     modifiers: [
 *         {
 *             string: '-3d@qtr',
 *             isParsed: true,
 *             unit: 'd',
 *             amount: -3,
 *             snap: 'q',
 *         },
 *         {
 *             string: '+2hr',
 *             isParsed: true,
 *             unit: 'h',
 *             amount: +2,
 *             snap: false,
 *         },
 *     ],
 * }
 * ```
 * Example parse for a epoch time:
 * ```
 * {
 *     string: '89451357',
 *     type: ['epoch'],
 *     isFullyParsed: true,
 *     modifiers: [],
 * }
 *
 * @public
 * @param {string} time - The time string such as `47165491` or `-2h@m`.
 * @returns {object}
 */

function parseTimeString(timeString) {
    if (!(0, _lodash.isString)(timeString)) {
        return false;
    }

    var ast = {
        string: timeString,
        isFullyParsed: true,
        modifiers: []
    };

    if (isISO(timeString)) {
        ast.type = 'iso';
        return ast;
    } else if (isEpoch(timeString)) {
        ast.type = 'epoch';
        return ast;
    }

    var segments = timeString.trim().replace(/-/g, '\n-').replace(/\+/g, '\n+').split('\n');

    // If only snap has been provided push empty string to beginning of segments.
    if (segments[0].charAt(0) === '@') {
        segments.unshift('');
    }

    if (segments[0] === 'rt' || segments[0] === 'rtnow') {
        ast.type = 'realTime';
    } else if (['rt', 'now', 'rtnow', ''].indexOf(segments[0]) < 0) {
        ast.isFullyParsed = false;
        return ast;
    } else {
        ast.type = 'relative';
    }

    ast.modifiers = segments.slice(1).map(function (segmentString) {
        var segment = {
            string: segmentString,
            isParsed: false
        };

        var sParse = segmentString.match(/^(([-+]\d*)([a-zA-Z]*))?(@([a-zA-Z][a-zA-Z0-7]*))?$/);
        //                                          2         3      4          5

        if (sParse) {
            segment.unit = sParse[3] && normalizeUnit(sParse[3], false);
            segment.amount = segment.unit ? parseInt(sParse[2], 10) || 1 : 0;
            segment.snap = !!sParse[4] && normalizeSnapUnit(sParse[5], false);
            segment.isParsed = true;

            if (sParse[5] && !_timeUnits.snapUnits[sParse[5]] || // invalid unit
            sParse[3] && !_timeUnits.timeUnits[sParse[3]] || // invalid snap unit
            segmentString.length === 1 // unqualified - or +
            ) {
                    ast.isFullyParsed = false;
                    segment.isParsed = false;
                }
        } else {
            ast.isFullyParsed = false;
        }

        return segment;
    });

    return ast;
}

/**
 * Validates that a string is a valid time string.
 * @public
 * @param {string} time - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @returns {bool}
 */
function isValidTime(time) {
    return parseTimeString(time).isFullyParsed;
}

/**
 * Validates that a string represents a real-time search.
 * @public
 * @param {string} time - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @returns {bool}
 */
function isRealTime(time) {
    var parse = parseTimeString(time);

    return parse && parse.type === 'realTime' && parse.isFullyParsed;
}

/**
 * Validates that a iso time string is a whole day.
 * @public
 * @param {string|object} time - A time string (such as `2008-09-15T15:53:00+05:00`) or a
 * @splunk/moment time instance.
 * @returns {bool}
 */
function isWholeDay(time) {
    if ((0, _lodash.isString)(time) && isISO(time) || _moment2.default.isMoment(time) && time.isValid()) {
        var timeMoment = (0, _moment2.default)(time);
        return timeMoment.valueOf() === timeMoment.startOf('day').valueOf();
    }
    return false;
}

/**
 * Validate that a time string acts is either empty or `0`.
 * @public
 * @param {string} time - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @returns {bool}
 */
function isEarliestEmpty(time) {
    if (time === '0') {
        return true;
    }
    return !time;
}

/**
 * Validate that a time string acts is either empty or now
 * @public
 * @param {string} time - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @returns {bool}
 */
function isLatestNow(time) {
    if (!time) {
        return true;
    }
    return (0, _lodash.isString)(time) && time === 'now';
}

/**
 * Validate that a time range acts is equivalent to all-time.
 * @public
 * @param {string} earliest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @param {string} latest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @returns {bool}
 */
function isAllTime(earliest, latest) {
    return isEarliestEmpty(removeRealTime(earliest)) && isLatestNow(removeRealTime(latest));
}

/**
 * Validate that two time range are equivalent. This normalizes the two comparisons using
 * isEarliestEmpty() and isLatestNow().
 * @public
 * @param {object} range1 - The time string range  such as `{ earliest: '-1d', latest: 'now' }`.
 * @param {object} range2 -  The time string range such as `{ earliest: '0', latest: '-1d' }`.
 * @returns {bool}
 */
function timeRangesAreEquivalent(range1, range2) {
    var earliest1 = range1.earliest;
    var latest1 = range1.latest;

    var earliest2 = range2.earliest;
    var latest2 = range2.latest;

    var earliestEqual = false;
    var latestEqual = false;

    if (isEarliestEmpty(earliest1) && isEarliestEmpty(earliest2)) {
        earliestEqual = true;
    } else {
        earliestEqual = earliest1 === earliest2;
    }

    if (isLatestNow(latest1) && isLatestNow(latest2)) {
        latestEqual = true;
    } else {
        latestEqual = latest1 === latest2;
    }

    return earliestEqual && latestEqual;
}
/**
 * Searches through an array of presets and returns any equivalent labels using
 * timeRangesAreEquivalent().
 * @public
 * @param {array} presets - An array of presents such as:
 * ```
 * [
 *     { label: '30 second window', earliest: 'rt-30s', latest: 'rt' },
 *     { label: 'Today', earliest: '@d', latest: 'now' },
 *     { label: 'Previous year', earliest: '-1y@y', latest: '@y' },
 *     { label: 'Last 15 minutes', earliest: '-15m', latest: 'now' },
 *     { label: 'All time', earliest: '0', latest: '' },
 * ]
 * ```
 * @param {string} earliest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @param {string} latest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @returns {string | false } The matched preset label.
 */
function findPresetLabel(presets, earliest, latest) {
    /* JSDoc and eslint cannot agree on the appropriate format of this */
    /* eslint-disable */
    var currentPreset = (0, _lodash.find)(presets, function (preset) {
        var range2 = { earliest: preset.earliest, latest: preset.latest };

        return timeRangesAreEquivalent({ earliest: earliest, latest: latest }, range2);
    });
    /* eslint-enable */

    return currentPreset ? currentPreset.label : false;
}

/**
 * Generates a label for a real-time time search.
 * For example:  '5 minute window' or 'Real-time'
 * @private
 * @param {string} earliest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @param {string} latest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @returns {null|string}
 */
function createRealTimeLabel(earliest, latest) {
    if (isRealTime(earliest) || isRealTime(latest)) {
        var earliestParse = parseTimeString(earliest);
        var earliestModifier = earliestParse.modifiers[0];
        var latestParse = parseTimeString(latest);

        var labelTemplates = {
            s: (0, _i18n._)('%(time)d second window'),
            m: (0, _i18n._)('%(time)d minute window'),
            h: (0, _i18n._)('%(time)d hour window'),
            d: (0, _i18n._)('%(time)d day window'),
            w: (0, _i18n._)('%(time)d week window'),
            mon: (0, _i18n._)('%(time)d month window'),
            q: (0, _i18n._)('%(time)d quarter window'),
            y: (0, _i18n._)('%(time)d year window')
        };

        if (earliestModifier && earliestParse.type === 'realTime' && latestParse.type === 'realTime' && latestParse.modifiers.length === 0 && (0, _lodash.has)(labelTemplates, earliestModifier.unit) && earliestParse.modifiers.length === 1) {
            return (0, _format.sprintf)(labelTemplates[earliestModifier.unit], {
                time: Math.abs(earliestModifier.amount)
            });
        }

        // Other Real-Time.
        return (0, _i18n._)('Real-time');
    }
    return false;
}

/**
 * Generates a label for a relative time search.
 * For example:  'Last 5 minutes'
 * @private
 * @param {string} earliest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @param {string} latest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @returns {null|string}
 */
function createRelativeTimeLabel(earliest, latest) {
    var earliestParse = parseTimeString(earliest);
    var earliestModifier = earliestParse.modifiers[0];
    var latestParse = parseTimeString(latest);
    var latestModifier = latestParse.modifiers[0];

    if (earliestParse.type === 'realTime' || latestParse.type === 'realTime' || !earliestModifier || earliestParse.modifiers.length > 1 || latestParse.modifiers.length > 1) {
        return false;
    }

    if (earliestModifier.amount < 0 && (!earliestModifier.snap || earliestModifier.unit === earliestModifier.snap) && (isLatestNow(latest) || latestModifier && !latestModifier.amount) && (!latestModifier || !latestModifier.snap || earliestModifier.unit === latestModifier.snap)) {
        var amount = Math.abs(earliestModifier.amount);
        var pluralKey = amount > 1 ? 'plural' : 'singular';
        return (0, _format.sprintf)((0, _i18n._)('Last %(amount)d %(unit)s'), {
            amount: amount,
            unit: _timeUnits.timeUnits[earliestModifier.unit][pluralKey]
        });
    }
    return false;
}

/**
 * Compares two moment instances to determine if they are on the same day.
 * @private
 * @param {object} earliest - @splunk/moment time instance
 * @param {object} latest - @splunk/moment time instance
 * @returns {bool}
 */
function areSameDay(a, b) {
    var aTime = a.clone().startOf('day');
    var bTime = b.clone().startOf('day');
    return aTime.isSame(bTime);
}

/**
 * Determines whether the date is the start of a year, month or day.
 * @private
 * @param {object} date - @splunk/moment time instance
 * @returns {'year'|'month'|'date'|undefined}
 */
function largestDateUnit(date) {
    return (0, _lodash.find)(['year', 'month', 'date'], function (unit) {
        var dateStart = date.clone().startOf(unit);
        return date.isSame(dateStart);
    });
}
/**
 * Finds the largest date unit that can describe a date range: years, months or days.
 * @private
 * @param {object} earliest - @splunk/moment time instance
 * @param {object} latest - @splunk/moment time instance
 * @returns {'year'|'month'|'date'|null}
 */
function findSingleDateUnit(a, b) {
    if (!(isWholeDay(a) && isWholeDay(b))) {
        return null;
    }

    if (a.month() === 0 && b.month() === 0 && a.date() === 1 && b.date() === 1) {
        return 'year';
    }

    if (a.year() === b.year() && a.date() === 1 && b.date() === 1 || a.year() + 1 === b.year() && b.month() === 0 && a.date() === 1 && b.date() === 1) {
        return 'month';
    }

    if (a.year() === b.year() && a.month() === b.month() || a.year() === b.year() && a.month() + 1 === b.month() && b.date() === 1 || a.year() + 1 === b.year() && b.month() === 0) {
        return 'date';
    }

    return null;
}
/**
 * Generates a date range label for a single year, month or day.
 * For example:  '2017', 'Feb 2017' or 'Feb 18, 2017'
 * @private
 * @param {object} date - @splunk/moment time instance
 * @param {'year'|'month'|'date'} unit
 * @returns {string}
 */
function createSingleUnitOnLabel(date, unit) {
    switch (unit) {
        case 'year':
            return date.format('YYYY');
        case 'month':
            return (0, _format.sprintf)((0, _i18n._)('%(month)s %(year)s'), {
                month: date.format('MMM'),
                year: date.format('YYYY')
            });
        default:
            return date.format('ll');
    }
}
/**
 * Generates a date range label for a range of years, months or days.
 * For example:  '2015 though 2017', 'Feb through Apr, 2017' or 'Feb 17 through 18, 2017'
 * @private
 * @param {object} earliest - @splunk/moment time instance
 * @param {object} latest - @splunk/moment time instance
 * @param {'year'|'month'|'date'} unit
 * @returns {string}
 */
function createSingleUnitThroughLabel(a, b, unit) {
    var b2 = b.subtract(1, unit === 'date' ? 'day' : unit);

    switch (unit) {
        case 'year':
            return (0, _format.sprintf)((0, _i18n._)('%(earliestYear)s through %(latestYear)s'), {
                earliestYear: a.format('YYYY'),
                latestYear: b2.format('YYYY')
            });
        case 'month':
            return (0, _format.sprintf)((0, _i18n._)('%(earliestMonth)s through %(latestMonth)s, %(inYear)s'), {
                earliestMonth: a.format('MMM'),
                latestMonth: b2.format('MMM'),
                inYear: b2.format('YYYY')
            });
        default:
            return (0, _format.sprintf)((0, _i18n._)('%(month)s %(earliestDayOfMonth)s through %(latestDayOfMonth)s, %(inYear)s'), {
                month: a.format('MMM'),
                earliestDayOfMonth: a.format('D'),
                latestDayOfMonth: b2.format('D'),
                inYear: b2.format('YYYY')
            });
    }
}
/**
 * Generates date-time label with the minimum specificity for time:minute, seconds or milliseconds.
 * For example:  'Feb 18, 2017 4:12:30.567 AM'
 * @private
 * @param {object} date - @splunk/moment time instance
 * @returns {string}
 */
function createDateTimeLabel(date) {
    if (date.millisecond()) {
        return date.splunkFormat('llms');
    }
    if (date.second()) {
        return date.splunkFormat('lls');
    }
    return date.splunkFormat('lll');
}
/**
 * Generates time label with the minimum specificity for time: minute, seconds or milliseconds.
 * For example:  '6:00 AM', '6:00:20 AM' or '6:00:20.712 AM'
 * @private
 * @param {object} time - @splunk/moment time instance
 * @returns {string}
 */
function createTimeLabel(time) {
    if (time.millisecond()) {
        return time.splunkFormat('LTMS');
    }
    if (time.second()) {
        return time.format('LTS');
    }
    return time.format('LT');
}

/**
 * Generates a date-time label with the minimum specificity for time: minute, seconds or milliseconds.
 * For example: 'Feb 17, 2017 6:00 AM to Feb 18, 2017 12:20 AM'
 * @private
 * @param {object} earliestTime - @splunk/moment time instance
 * @param {object} latestTime - @splunk/moment time instance
 * @returns {string}
 */
function createTimeRangeLabel(a, b) {
    var format = void 0;

    if (a.millisecond() || b.millisecond()) {
        format = 'llms';
    } else if (a.second() || b.second()) {
        format = 'lls';
    } else {
        format = 'lll';
    }

    return (0, _format.sprintf)((0, _i18n._)('%(earliestDateTime)s to %(latestDateTime)s'), {
        earliestDateTime: a.splunkFormat(format),
        latestDateTime: b.splunkFormat(format)
    });
}

/**
 * Generates a label for a time range on a single date.
 * For example: '6:00:20.850 AM to 8:00:40.490 PM, Feb 17, 2017'
 * @private
 * @param {object} earliestTime - @splunk/moment time instance
 * @param {object} latestTime - @splunk/moment time instance
 * @returns {string}
 */
function createPartOfDayLabel(a, b) {
    return (0, _format.sprintf)((0, _i18n._)('%(earliestTime)s to %(latestTime)s, %(date)s'), {
        earliestTime: createTimeLabel(a),
        latestTime: createTimeLabel(b),
        date: a.format('ll')
    });
}

function conformToMaxChars(label, shortLabel, maxChars) {
    // if label is shorter than the shortLabel and longer than maxChars, use the label.
    // This scenario may arise due to long translations of the shortLabel.
    return maxChars && label.length > Math.max(shortLabel.length, maxChars) ? shortLabel : label;
}
/**
 * Generates a label for a date range when provided two ISO date formats.
 * @private
 * @param {string} earliest - An ISO time string, or other splunk time string.
 * @param {string} latest - An ISO time string, or other splunk time string .
 * @param {number} maxChars - If the generated label is too long, it will abbreviate
   to a more generic form, such as 'Between Date-times' instead of 'Feb 17, 2017 6:00 AM to Feb 18, 2017 12:20 AM'.
 * @returns {null|string}
 */
function createDateTimeRangeLabel(earliest, latest, maxChars) {
    var a = isISO(earliest) ? (0, _moment2.default)(earliest).locale(_config.locale || 'en_US') : undefined;
    var b = isISO(latest) ? (0, _moment2.default)(latest).locale(_config.locale || 'en_US') : undefined;

    if (a && b) {
        // During Year, Month Day
        var unit = findSingleDateUnit(a, b);

        // Single Year, Month or Day
        var next = unit && (0, _moment2.default)(a).add(1, unit === 'date' ? 'days' : unit);
        if (unit && next[unit]() === b[unit]()) {
            return createSingleUnitOnLabel(a, unit);
        }
        if (unit) {
            return conformToMaxChars(createSingleUnitThroughLabel(a, b, unit), (0, _i18n._)('Date Range'), maxChars);
        }

        // Part of Day
        if (areSameDay(a, b)) {
            return conformToMaxChars(createPartOfDayLabel(a, b), (0, _i18n._)('Part of a Day'), maxChars);
        }

        // Full
        return conformToMaxChars(createTimeRangeLabel(a, b), (0, _i18n._)('Between Date-times'), maxChars);
    } else if (a && isLatestNow(latest)) {
        // Since
        var _unit = largestDateUnit(a);
        var since = _unit ? createSingleUnitOnLabel(a, _unit) : createDateTimeLabel(a);
        var longLabel = (0, _format.sprintf)((0, _i18n._)('Since %(dateTime)s'), { dateTime: since });
        return conformToMaxChars(longLabel, (0, _i18n._)('Since Date-time'), maxChars);
    } else if (isEarliestEmpty(earliest) && b) {
        // Before
        var _unit2 = largestDateUnit(b);
        var before = _unit2 ? createSingleUnitOnLabel(b, _unit2) : createDateTimeLabel(b);
        var _longLabel = (0, _format.sprintf)((0, _i18n._)('Before %(dateTime)s'), { dateTime: before });
        return conformToMaxChars(_longLabel, (0, _i18n._)('Before Date-time'), maxChars);
    }

    return null;
}
/**
 * Returns 'All-time' is the search is all-time or a close equivalent.
 * @private
 * @param {string} earliest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @param {string} latest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @returns {string}
 */
function createAllTimeLabel(earliest, latest) {
    if (isEarliestEmpty(earliest) && isLatestNow(latest)) {
        return (0, _i18n._)('All time');
    }
    return false;
}

/**
 * Creates an appropriate label for a time range, using a preset label if available.
 * @public
 * @param {string} earliest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @param {string} latest - The time string such as `rt` , `rtnow` or `-2h@m`.
 * @param {object} [options] - An array of presents such as:
 * @param {string} [options.locale='en_US'] - An array of presents such as:
 * @param {number} [options.maxChars] - If the generated label is too long, it will abbreviate
 * to a more generic form, such as 'Between Date-times' instead of 'Feb 17, 2017 6:00 AM to Feb 18, 2017 12:20 AM'.
 * `Infinity` and `0` allow labels of any length.
 * @param {array} [options.presets] - An array of presents such as:
 * ```
 * [
 *     { label: '30 second window', earliest: 'rt-30s', latest: 'rt' },
 *     { label: 'Today', earliest: '@d', latest: 'now' },
 *     { label: 'Previous year', earliest: '-1y@y', latest: '@y' },
 *     { label: 'Last 15 minutes', earliest: '-15m', latest: 'now' },
 *     { label: 'All time', earliest: '0', latest: '' },
 * ]
 * ```
 * @returns {string} Returns `'Custom time'` if one cannot be made.
 */
function createRangeLabel(earliest, latest) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        presets = _ref.presets,
        maxChars = _ref.maxChars;

    var earliestTrimed = earliest.trim();
    var latestTrimed = latest.trim();

    return createAllTimeLabel(earliestTrimed, latestTrimed) || presets && findPresetLabel(presets, earliestTrimed, latestTrimed) || createRealTimeLabel(earliestTrimed, latestTrimed) || createRelativeTimeLabel(earliestTrimed, latestTrimed) || createDateTimeRangeLabel(earliestTrimed, latestTrimed, maxChars) || (0, _i18n._)('Custom time');
}

function pluralize(singular, plural, numberOf) {
    if (numberOf === 0) {
        return null;
    }
    return numberOf === 1 ? singular : (0, _format.sprintf)(plural, { numberOf: numberOf });
}

/**
 * Takes a duration in milliseconds and returns a string describing the duration in terms of
 * years, months, days, hours, minutes, seconds and milliseconds.
 * If a unit isn't needed it's omitted, e.g. durations less than a year won't include '0 years'.
 * @public
 * @param {string|number} ms - The duration in milliseconds.
 * @returns {string} A formatted duration string, for example `27 days 16 hours 36 minutes 59 seconds`.
 * Durations <= 0 return `null`.
 */
function formatDuration(ms) {
    if (ms <= 0) {
        return null;
    }

    var duration = _moment2.default.duration(ms);
    return [pluralize((0, _i18n._)('1 year'), (0, _i18n._)('%(numberOf)d years'), duration.years()), pluralize((0, _i18n._)('1 month'), (0, _i18n._)('%(numberOf)d months'), duration.months()), pluralize((0, _i18n._)('1 day'), (0, _i18n._)('%(numberOf)d days'), duration.days()), pluralize((0, _i18n._)('1 hour'), (0, _i18n._)('%(numberOf)d hours'), duration.hours()), pluralize((0, _i18n._)('1 minute'), (0, _i18n._)('%(numberOf)d minutes'), duration.minutes()), pluralize((0, _i18n._)('1 second'), (0, _i18n._)('%(numberOf)d seconds'), duration.seconds()), pluralize((0, _i18n._)('1 millisecond'), (0, _i18n._)('%(numberOf)d milliseconds'), duration.milliseconds())].filter(function (display) {
        return !!display;
    }).join(' ');
}