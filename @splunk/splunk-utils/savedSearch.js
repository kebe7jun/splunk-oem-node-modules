/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.get = get;
exports.dispatch = dispatch;
exports.getHistory = getHistory;
exports.getLatest = getLatest;

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _fetch = require('./fetch');

var _url = require('./url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A set of utilities for working with Splunk saved searches, including getting them, dispatching
 * them, and getting their history.
 * @file
 */

/**
 * Makes a GET request to the `saved/searches/{name}` REST endpoint.
 *
 * @param {Object} savedSearch - Identify the target saved search by its name (required), app (optional), and owner (optional).
 * @param {String} savedSearch.name - The name of the target saved search.
 * @param {String} [savedSearch.app] - The app of the target saved search.
 * @param {String} [savedSearch.owner] - The owner of the target saved search.
 * @param {Object} [params] - The request parameters. See the [Splunk documentation on the
 * `saved/searches/{name}` REST endpoint](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#saved.2Fsearches.2F.7Bname.7D)
 * for available parameters.
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} A Promise with the results from the server.
 * @public
 */
function get(_ref) {
    var name = _ref.name,
        app = _ref.app,
        owner = _ref.owner;
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    var url = (0, _url.createRESTURL)('saved/searches/' + name, { app: app, owner: owner }, configOptions);
    var qs = _querystring2.default.encode(_extends({ output_mode: 'json' }, params));
    return fetch(url + '?' + qs, baseFetchInit).then((0, _fetch.handleResponse)(200)).catch((0, _fetch.handleError)('Failed to get saved search: ' + name));
}

/**
 * Makes a POST request to the `saved/searches/{name}/dispatch` REST endpoint.
 *
 * @param {Object} savedSearch - Identify the target saved search by its name (required), app (optional), and owner (optional).
 * @param {String} savedSearch.name - The name of the target saved search.
 * @param {String} [savedSearch.app] - The app of the target saved search.
 * @param {String} [savedSearch.owner] - The owner of the target saved search.
 * @param {Object} [params] - The request parameters. See the [Splunk documentation on the
 * `saved/searches/{name}/dispatch` REST endpoint](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#saved.2Fsearches.2F.7Bname.7D.2Fdispatch)
 * for available parameters.
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} A Promise with the results from the server.
 * @public
 */
function dispatch(_ref2) {
    var name = _ref2.name,
        app = _ref2.app,
        owner = _ref2.owner;
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    var url = (0, _url.createRESTURL)('saved/searches/' + name + '/dispatch', { app: app, owner: owner }, configOptions);
    return fetch(url, _extends({}, baseFetchInit, {
        method: 'POST',
        body: _querystring2.default.encode(_extends({}, params, {
            output_mode: 'json'
        }))
    })).then((0, _fetch.handleResponse)(201)).catch((0, _fetch.handleError)('Failed to dispatch saved search: ' + name));
}

/**
 * Makes a GET request to the `saved/searches/{name}/history` REST endpoint.
 *
 * @param {Object} savedSearch - Identify the target saved search by its name (required), app (optional), and owner (optional).
 * @param {String} savedSearch.name - The name of the target saved search.
 * @param {String} [savedSearch.app] - The app of the target saved search.
 * @param {String} [savedSearch.owner] - The owner of the target saved search.
 * @param {Object} [params] - The request parameters. See the [Splunk documentation on the
 * `saved/searches/{name}/history` REST endpoint](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#saved.2Fsearches.2F.7Bname.7D.2Fhistory)
 * for available parameters.
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} A Promise with the results from the server.
 * @public
 */
function getHistory(_ref3) {
    var name = _ref3.name,
        app = _ref3.app,
        owner = _ref3.owner;
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    var url = (0, _url.createRESTURL)('saved/searches/' + name + '/history', { app: app, owner: owner }, configOptions);
    var qs = _querystring2.default.encode(_extends({ output_mode: 'json' }, params));
    return fetch(url + '?' + qs, baseFetchInit).then((0, _fetch.handleResponse)(200)).catch((0, _fetch.handleError)('Failed to get history for saved search: ' + name));
}

/**
 * Gets the most recent search job for the specified saved search.
 *
 * @param {Object} savedSearch - Identify the target saved search by its name (required), app (optional), and owner (optional).
 * @param {String} savedSearch.name - The name of the target saved search.
 * @param {String} [savedSearch.app] - The app of the target saved search.
 * @param {String} [savedSearch.owner] - The owner of the target saved search.
 * @param {Object} [params] - The request parameters. See the [Splunk documentation on the
 * `saved/searches/{name}/history` REST endpoint](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#saved.2Fsearches.2F.7Bname.7D.2Fhistory)
 * for available parameters.
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} A Promise that resolves with the latest search job or `undefined` if no search
 * jobs exist for the specified saved search.
 * @public
 */
function getLatest(savedSearch) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    return getHistory(savedSearch, _extends({}, params, {
        sort_key: 'start',
        sort_dir: 'desc',
        count: 1
    }), configOptions, baseFetchInit).then(function (data) {
        return data.entry[0];
    });
}