/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.snapUnits = exports.timeUnits = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _i18n = require('@splunk/ui-utils/i18n');

var u = {};
/* eslint-disable no-multi-assign */
u.s = u.sec = u.secs = u.second = u.seconds = {
    abbr: 's',
    singular: (0, _i18n._)('second'),
    plural: (0, _i18n._)('seconds')
};
u.m = u.min = u.mins = u.minute = u.minutes = {
    abbr: 'm',
    singular: (0, _i18n._)('minute'),
    plural: (0, _i18n._)('minutes')
};
u.h = u.hr = u.hrs = u.hour = u.hours = { abbr: 'h', singular: (0, _i18n._)('hour'), plural: (0, _i18n._)('hours') };
u.d = u.day = u.days = { abbr: 'd', singular: (0, _i18n._)('day'), plural: (0, _i18n._)('days') };
u.w = u.week = u.weeks = { abbr: 'w', singular: (0, _i18n._)('week'), plural: (0, _i18n._)('weeks') };
u.mon = u.month = u.months = { abbr: 'mon', singular: (0, _i18n._)('month'), plural: (0, _i18n._)('months') };
u.q = u.qtr = u.qtrs = u.quarter = u.quarters = {
    abbr: 'q',
    singular: (0, _i18n._)('quarter'),
    plural: (0, _i18n._)('quarters')
};
u.y = u.yr = u.yrs = u.year = u.years = { abbr: 'y', singular: (0, _i18n._)('year'), plural: (0, _i18n._)('years') };
/* eslint-enable no-multi-assign */

var timeUnits = exports.timeUnits = u;

// snap units can additionally include days of the week.
var snapUnits = exports.snapUnits = _extends({}, u);
snapUnits.w0 = { abbr: 'w0', singular: (0, _i18n._)('Sunday'), plural: (0, _i18n._)('Sundays') };
snapUnits.w1 = { abbr: 'w1', singular: (0, _i18n._)('Monday'), plural: (0, _i18n._)('Mondays') };
snapUnits.w2 = { abbr: 'w2', singular: (0, _i18n._)('Tuesday'), plural: (0, _i18n._)('Tuesdays') };
snapUnits.w3 = { abbr: 'w3', singular: (0, _i18n._)('Wednesday'), plural: (0, _i18n._)('Wednesdays') };
snapUnits.w4 = { abbr: 'w4', singular: (0, _i18n._)('Thursday'), plural: (0, _i18n._)('Thursdays') };
snapUnits.w5 = { abbr: 'w5', singular: (0, _i18n._)('Friday'), plural: (0, _i18n._)('Fridays') };
snapUnits.w6 = { abbr: 'w6', singular: (0, _i18n._)('Saturday'), plural: (0, _i18n._)('Saturdays') };
snapUnits.w7 = { abbr: 'w7', singular: (0, _i18n._)('Sunday'), plural: (0, _i18n._)('Sundays') };