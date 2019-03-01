/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.versionLabel = exports.username = exports.splunkdPath = exports.serverTimezoneInfo = exports.rootPath = exports.portNumber = exports.locale = exports.config = exports.buildPushNumber = exports.buildNumber = exports.appBuild = exports.app = exports.isAvailable = exports.CSRFToken = undefined;
exports.extractAppName = extractAppName;

var _lodash = require('lodash');

var _cookie = require('@splunk/ui-utils/cookie');

/**
 * A set of constants describing the server environment. If window.$C is not defined, most of the
 * values below will be undefined.
 *
 * They may be imported independently, such as:
 * ```
 * import { buildNumber, locale, rootPath } from '@splunk/splunk-utils/config';
 * @file
 */

/* global global */
// If this is running in Node, the root is the `global` object. If it is running in the browser,
// root is the `window` object.
var root = typeof window === 'undefined' ? global : window;

/**
 * A function to get a $C prop. Returns undefined if $C is not available.
 * @private
 */
function get$CEntry(prop) {
  return (0, _lodash.get)(root, ['$C', prop]);
}

/**
 * The CSRF token. This may be `null` if the token is not found in the cookie.
 *
 * @constant
 *
 * @public
 */
var CSRFToken = exports.CSRFToken = (0, _cookie.getEntry)('splunkweb_csrf_token_' + get$CEntry('MRSPARKLE_PORT_NUMBER'));

/**
 * If `window.$C` is undefined or invalid, isAvailable will be `false`.
 * @constant
 * @public
 */
var isAvailable = exports.isAvailable = !!get$CEntry('SPLUNKD_PATH');

/**
 * Extracts app name from the URL. To enable testing, this function is exported and pathname
 * can be overridden
 * @private
 */
function extractAppName() {
  var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _lodash.get)(root, ['document', 'location', 'pathname'], '');

  var pathMatch = pathname.match(/\w\w.\w\w\/(app|manager)\/([^/]+)/);

  return pathMatch ? pathMatch[2] : undefined;
}

/**
 * The name of the current app as shown in the url (not the display name).
 * @constant
 * @public
 */
var app = exports.app = extractAppName();

/**
 * The build number of the current app.
 * @constant
 * @public
 */
var appBuild = exports.appBuild = get$CEntry('APP_BUILD');

/**
 * A hash string of the current build.
 * @constant
 * @type {string}
 * @public
 */
var buildNumber = exports.buildNumber = get$CEntry('BUILD_NUMBER');

/**
 * A incremented number configured per instance. Defaults to zero.
 * @constant
 * @public
 */
var buildPushNumber = exports.buildPushNumber = get$CEntry('BUILD_PUSH_NUMBER');

/**
 * The full object of window.$C.
 * @constant
 * @public
 */
var config = exports.config = (0, _lodash.get)(root, '$C');

/**
 * The current locale, such as 'en-US'.
 * @constant
 * @public
 */
var locale = exports.locale = get$CEntry('LOCALE');

/**
 * The port which splunkweb is using. Defaults to 8000.
 * @constant
 * @public
 */
var portNumber = exports.portNumber = get$CEntry('MRSPARKLE_PORT_NUMBER');

/**
 * Splunk may not be running in the root directory, so the locale may not be the first element
 * in the pathname. If it is running in the root directory, ```rootPath``` is an empty]
 * string. Otherwise it returns the root. For instance, on the page:
 * ```
 * http://splunk.domain.com/my-root-dir/en-US/app/search/search
 * ```
 * ```rootPath``` is set to ```'my-root-dir'```.
 * @constant
 * @public
 */
var rootPath = exports.rootPath = get$CEntry('MRSPARKLE_ROOT_PATH');

/**
 * The splunk serialize time zone data. This can be parsed for use in formatting epoch times
 * on the client.
 * @constant
 * @public
 */
var serverTimezoneInfo = exports.serverTimezoneInfo = get$CEntry('SERVER_ZONEINFO');

/**
 * The splunkweb proxing to splunkd, such as ```/en-US/splunkd/__raw```.
 * @constant
 * @public
 */
var splunkdPath = exports.splunkdPath = get$CEntry('SPLUNKD_PATH');

/**
 * The username of the current user.
 * @constant
 * @public
 */
var username = exports.username = get$CEntry('USERNAME');

/**
 * The version label of splunkd.
 * @constant
 * @public
 */
var versionLabel = exports.versionLabel = get$CEntry('VERSION_LABEL');