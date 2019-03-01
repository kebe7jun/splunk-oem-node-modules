/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getISO = getISO;

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _lodash = require('lodash');

var _url = require('@splunk/splunk-utils/url');

var _fetch = require('@splunk/splunk-utils/fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This utility currently only has one function for parsing a time string on the server.
 * ```
 *  import { getISO } from '@splunk/time-range-utils/timeParser'
 * ```
 *
 * @file
 */

/**
 * Fetches the parsed time from splunkd with a browser fetch.
 * When the promise is resolved, a data object is returned with up to three properties:
 * * time (the original time provided for for validation and identification purposes)
 * * iso (the parsed time value)
 * * error.
 *
 * Example usage:
 * ```
 * getISO('-2d@h')
 *     .then(data => {
 *         this.setState({
 *             parseLatest: {error: data.error, iso: data.iso, time: data.time, },
 *         });
 *     })
 *     .catch(data => {
 *         this.setState({
 *             parseLatest: {error: data.error, iso: '', time: data.time, },
 *         });
 *     });
 * ```
 * @public
 * @function
 * @name getISO
 * @param {string} time - The time string such as `47165491` or `-2h@m`.
 * @returns {promise}
 */
function getISO(time) {
  var qs = _querystring2.default.stringify({ output_mode: 'json', time: time });
  var path = (0, _url.createRESTURL)('search/timeparser');

  return fetch(path + '?' + qs, _fetch.defaultFetchInit).then((0, _fetch.handleResponse)(200)).then(function (data) {
    // can get away with doing this below because only one timestamp will be returned
    var value = (0, _lodash.keys)(data)[0];

    return { error: null, iso: data[value], time: time };
  }).catch(function (error) {
    return { error: error, time: time };
  });
}

exports.default = { getISO: getISO };