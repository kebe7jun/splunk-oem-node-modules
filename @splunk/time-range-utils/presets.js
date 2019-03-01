/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPresets = undefined;

var _lodash = require('lodash');

var _config = require('@splunk/splunk-utils/config');

var _url = require('@splunk/splunk-utils/url');

var _fetch = require('@splunk/splunk-utils/fetch');

/**
 * This utility currently only has one function for fetching presets.
 * ```
 *  import { getPresets } from '@splunk/time-range-utils/presets'
 * ```
 *
 * @file
 */

var timePath = (0, _url.createRESTURL)('data/ui/times', { app: _config.app, owner: _config.username });

/**
 * Fetches presets from splunkd with a browser fetch.
 * When the promise is resolved, an array of presets is returned in the format compatible
 * with @splunk/react-time-range components and sorted primarly by order and then alphabetically.
 * ```
 *  [
 *    { label: '30 second window', earliest: 'rt-30s', latest: 'rt' },
 *    { label: '1 hour window', earliest: 'rt-1h', latest: 'rt' },
 *    { label: 'All time (real-time)', earliest: 'rt', latest: 'rt' },
 *    { label: 'Today', earliest: '@d', latest: 'now' },
 *    { label: 'Year to date', earliest: '@y', latest: 'now' },
 *    { label: 'Previous year', earliest: '-1y@y', latest: '@y' },
 *    { label: 'All time', earliest: '0', latest: '' },
 *  ]
 * ```
 * Example usage:
 * ```
 * getPresets()
 *     .then(data => {
 *         this.setState({
 *             presets: data,
 *         });
 *     })
 *     .catch(error => {
 *         console.log('Time presets could not be loaded from splunkweb.', error);
 *     });
 * ```
 *
 * @public
 * @kind function
 * @returns {promise}
 */
var getPresets = exports.getPresets = (0, _lodash.memoize)(function () {
    return fetch(timePath + '?output_mode=json&count=-1', _fetch.defaultFetchInit).then((0, _fetch.handleResponse)(200)).then(function (data) {
        return data.entry.sort(function (a, b) {
            if (parseInt(a.content.label.toUpperCase(), 10) > parseInt(b.content.label.toUpperCase(), 10)) {
                return 1;
            }
            return -1;
        }).sort(function (a, b) {
            if (parseInt(a.content.order, 10) > parseInt(b.content.order, 10)) {
                return 1;
            }
            return -1;
        }).filter(function (preset) {
            return preset.content.earliest_time || preset.content.latest_time;
        }).map(function (preset) {
            return {
                label: preset.content.label,
                earliest: preset.content.earliest_time || '',
                latest: preset.content.latest_time || ''
            };
        });
    }).catch(function (error) {
        // eslint-disable-next-line no-console
        console.log('preset times fetch failed', error);
    });
});
exports.default = { getPresets: getPresets };