/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultFetchInit = undefined;
exports.findErrorMessage = findErrorMessage;
exports.handleResponse = handleResponse;
exports.handleError = handleError;

var _lodash = require('lodash');

var _config = require('./config');

/**
 * A collection of utils for making [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
 * requests to the [Splunk REST API](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTprolog)
 * and working with the responses.
 * @file
 */

/**
 * A default initialization object for fetch requests. It includes the required credentials and headers.
 * @constant
 * @public
 */
var defaultFetchInit = exports.defaultFetchInit = {
    method: 'GET',
    credentials: 'include',
    headers: {
        'X-Splunk-Form-Key': _config.CSRFToken,
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

/**
 * Finds an error message (if available) in a Splunk REST response.
 * @param {Object} response - The response from the Splunk server.
 * @returns {Object|undefined} The error message object or undefined if no error was found.
 * @public
 */
// eslint-disable-next-line consistent-return
function findErrorMessage() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        messages = _ref.messages;

    if (Array.isArray(messages)) {
        return (0, _lodash.find)(messages, function (_ref2) {
            var type = _ref2.type;
            return type === 'ERROR' || type === 'FATAL';
        });
    }
}

/**
 * Rejects responses with a status different than the expected. Otherwise, resolves with the json
 * response.
 *
 * @param {Number} expectedStatus - The status code of a successful response.
 * @returns {Function} A response handler.
 * @public
 */
function handleResponse(expectedStatus) {
    return function (res) {
        if (res.status !== expectedStatus) {
            return Promise.reject(res);
        }
        if (expectedStatus === 204) {
            return null;
        }
        return res.json();
    };
}

/**
 * Handles a failed Splunk REST response by looking for an error message in the response. Returns
 * a rejection for further handling by the end consumer.
 *
 * @param {String} defaultMessage - This is only used if a message from the server
 * is not found.
 * @returns {Function} An error handler.
 * @public
 */
function handleError(defaultMessage) {
    return function (res) {
        return res.json().then(function (data) {
            // If the action failed, most of the time we will get an error message.
            var errorMessage = findErrorMessage(data);
            if (errorMessage) {
                return Promise.reject(new Error(errorMessage.text));
            }

            // Sometimes there is no error message.
            return Promise.reject(new Error(defaultMessage));
        });
    };
}