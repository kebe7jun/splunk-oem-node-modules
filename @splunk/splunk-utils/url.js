/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.insertCacheBuster = insertCacheBuster;
exports.createURL = createURL;
exports.createStaticURL = createStaticURL;
exports.createRESTURL = createRESTURL;
exports.createDocsURLFromParams = createDocsURLFromParams;
exports.createDocsURL = createDocsURL;
exports.createAppDocsURL = createAppDocsURL;

var _querystring = require('querystring');

var _config = require('@splunk/splunk-utils/config');

/**
 * A set of functions for generating splunkweb urls. They may be imported independently, such as:
 * ```
 * import { createURL, createStaticURL } from '@splunk/splunk-utils/url';
 * ```
 * @file
 */

/**
 * Inserts a cache buster into the given path.
 *
 * @param path {String} - The path to inject the cache buster into.
 * @param configOptions {Object} - Config options including `appBuild`, `buildPushNumber`, and
 * `buildNumber`. Defaults to the values provided by `@splunk/splunk-utils/config`.
 * @return {String} Returns the path with the cache buster `/@9850fc87a5ee`.
 * @private
 */
function insertCacheBuster(path) {
    var configOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var options = _extends({ appBuild: _config.appBuild, buildPushNumber: _config.buildPushNumber, buildNumber: _config.buildNumber }, configOptions);
    var match = path.match(/(^|\w\w-\w\w\/)static\//);

    if (!match) {
        return path;
    }
    var insertPosition = match.index + match[0].length - 1;

    var isApp = path.match(/(^|\w\w-\w\w|)static\/app/);
    var appBuildString = isApp ? ':' + (options.appBuild || 0) : '';
    var buildPushString = options.buildPushNumber ? '.' + options.buildPushNumber : '';
    var cacheBusterString = '/@' + options.buildNumber + buildPushString + appBuildString;

    var before = path.substr(0, insertPosition);
    var after = path.substr(insertPosition);

    return '' + before + cacheBusterString + after;
}

/**
 * Returns a full path for the current appserver location.
 * This is required for proxy compatiblity, localization and cache busting.
 *
 * For example:
 * ```js
 * createURL('app/search/job'); // "/splunk/en-US/app/search/job"
 * createURL('/app/search/job'); // "/splunk/en-US/app/search/job"
 * createURL('app/search/job', {id:3, user:'me' }); // "/splunk/en-US/app/search/job?id=3&user=me"
 * ```
 *
 * Static paths are augmented with a cache buster:
 * ```js
 * createURL('/static/js/foo.js'); // "/splunk/en-US/static/@12345/js/foo.js"
 * createURL('/static/js/foo.js'); // "/splunk/en-US/static/@12345.1/js/foo.js"
 * createURL('/static/app/search/js/foo.js'); // "/splunk/en-US/static/@12345.1:0/app/search/js/foo.js"
 * ```
 *
 * @param path {String}
 * @param [queryParams] {Object} An object of the query parameters.
 * @param configOptions {Object} - Config options including `appBuild`, `buildPushNumber`,
 * `buildNumber`, `rootPath`, and `locale`. Defaults to the values provided by
 * `@splunk/splunk-utils/config`.
 * @return {String} Returns a valid url with correct root path, locale and cache buster.
 * @public
 */
function createURL(pathInput, queryParams) {
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var options = _extends({ appBuild: _config.appBuild, buildPushNumber: _config.buildPushNumber, buildNumber: _config.buildNumber, rootPath: _config.rootPath, locale: _config.locale }, configOptions);
    var path = pathInput || '/';
    var query = queryParams ? '?' + (0, _querystring.stringify)(queryParams) : '';

    if (path.charAt(0) !== '/') {
        path = '/' + path;
    }

    path = (options.rootPath || '') + '/' + options.locale + path + query;

    return insertCacheBuster(path, options);
}

/**
 * Prepends splunkweb path information necessary to access a static asset. For example:
 * ```
 * createURL('fonts/roboto-regular-webfont.woff'); // "/splunk/en-US/static/@12345/fonts/roboto-regular-webfont.woff"
 * createURL('app/search/fonts/roboto-regular-webfont.woff'); // "/splunk/en-US/static/@12345.1:0/app/search/fonts/roboto-regular-webfont.woff"
 * ```
 * @public
 * @param {String} path - A path to a static resource.
 * @param [queryParams] {Object} An object of the query parameters.
 * @param configOptions {Object} - Config options including `appBuild`, `buildPushNumber`,
 * `buildNumber`, `rootPath`, and `locale`. Defaults to the values provided by
 * `@splunk/splunk-utils/config`.
 * @return {String} Returns a valid url with correct root path, locale and cache buster.
 */
function createStaticURL(path) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    return createURL.apply(undefined, ['static/' + path].concat(rest));
}

/**
 * Creates a fully qualified URL for the specified endpoint.
 * For example:
 * ```
 * createRESTURL('server/info'); // "/en-US/splunkd/__raw/services/server/info"
 * createRESTURL('saved/searches', {app: 'search'}); // "/en-US/splunkd/__raw/servicesNS/-/search/saved/searches"
 * ```
 * @public
 * @param {String} endpoint - A endpoint to a REST API.
 * @param {Object} options
 * @param {String} [options.app] - App namespace to use.
 * @param {String} [options.owner] - User namespace to use.
 * @param {Sting} [options.sharing] - Must be one of [ '' | 'app' | 'global' | 'system' ].
 * @param {Object} [configOptions] - Config options including `splunkdPath`. Defaults to the value
 *  provided by `@splunk/splunk-utils/config`.
 * @return {String} The url of the REST endpoint.
 */
function createRESTURL(endpoint) {
    var namespaceOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    // Return the endpoint if it is a full path.
    if (/^http[s]?:\/\//.test(endpoint)) {
        return endpoint;
    }

    var basePath = configOptions.splunkdPath || _config.splunkdPath || '';

    // If it is an absolute path
    if (/^\/.*/.test(endpoint)) {
        // Append the splunkdPath if the endpoint includes services. Otherwise, return the endpoint.
        return (/^\/services/.test(endpoint) ? '' + basePath + endpoint : endpoint
        );
    }

    // If neither an app nor owner is provided, use /services/ endpoint.
    if (!namespaceOptions.app && !namespaceOptions.owner) {
        return basePath + '/services/' + endpoint;
    }

    // Build a namespaced path.
    var owner = void 0;
    if (namespaceOptions.sharing) {
        owner = 'nobody';
    } else if (namespaceOptions.owner) {
        owner = encodeURIComponent(namespaceOptions.owner);
    } else {
        owner = '-';
    }

    var app = void 0;
    if (namespaceOptions.sharing === 'system') {
        app = 'system';
    } else if (namespaceOptions.app) {
        app = encodeURIComponent(namespaceOptions.app);
    } else {
        app = '-';
    }

    return basePath + '/servicesNS/' + owner + '/' + app + '/' + endpoint;
}

/** Create docs URL private method.
 * @param {Object} [params]
 * @private
 */
function createDocsURLFromParams(params, configOptions) {
    return createURL('/help', params, configOptions);
}

/** Create docs URL using location string.
 * For example:
 * ```
 * createDocsURL('learnmore.timerange.picker'); // "/en-US/help?location=learnmore.timerange.picker"
 * ```
 * @public
 * @param {String} location - Required.
 * @return {String} The url of the Splunk help document.
 */
function createDocsURL(location, configOptions) {
    return createDocsURLFromParams({ location: location }, configOptions);
}

/** Create App docs URL using location string, which needs to add [appName:appVersion] prefix before location string.
 * For example:
 * ```
 * createAppDocsURL('learnmore.timerange.picker', { appName: 'splunk_app_aws', appVersion: '5.0.3'}); // "/en-US/help?location=learnmore.timerange.picker"
 * ```
 * @public
 * @param {String} location - Required.
 * @param {Object} options - Required.
 * @param {String} options.appName - App name.
 * @param {String} options.appVersion - App version.
 * @return {String} The url of the Splunk app help document.
 */
function createAppDocsURL(location, _ref, configOptions) {
    var appName = _ref.appName,
        appVersion = _ref.appVersion;

    return createDocsURLFromParams({ location: '[' + appName + ':' + appVersion + ']' + location }, configOptions);
}