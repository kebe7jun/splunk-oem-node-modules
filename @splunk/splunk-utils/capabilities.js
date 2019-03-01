/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchCapabilities = fetchCapabilities;
exports.getChildrenObject = getChildrenObject;
exports.getRole = getRole;
exports.getUser = getUser;

var _lodash = require('lodash');

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _fetch = require('./fetch');

var _url = require('./url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * calls splunk 'authorization/capabilities' endpoint to fetch the list of capabilities
 * @returns {Promise<Response>}
 */
function fetchCapabilities() {
    var path = (0, _url.createRESTURL)('authorization/capabilities', {}, {});
    var qs = _querystring2.default.encode({ output_mode: 'json' });
    return fetch(path + '?' + qs, _fetch.defaultFetchInit).then((0, _fetch.handleResponse)(200)).catch((0, _fetch.handleError)('Failed to fetch capabilities.'));
}

/**
 * Takes an entity object and replaces the roles with the entity object (containing capabilities, imported_capabilities)
 * per role or just the entity object if roles is an empty array
 * @param {object} entityObj
 * @param {number} depth
 * @returns {Promise<*>}
 */
function getChildrenObject(entityObj, depth) {
    if (entityObj.roles.length > 0 && depth > 0) {
        var promises = [];
        entityObj.roles.map(function (role) {
            return (
                // eslint-disable-next-line no-use-before-define
                promises.push(getRole(role, depth - 1))
            );
        });
        return Promise.all(promises).then(function (roles) {
            Object.assign(entityObj, { roles: roles });
            return entityObj;
        });
    }
    return Promise.resolve(entityObj);
}

/**
 * Returns role object for given role
 * @param {string} roleName - role name
 * @param {number} depth - children roles depth
 * @returns {object} {name: 'admin', type: 'role', capabilities: ['cap1', 'cap2'], importedCap: ['cap3'], importedRoles: [{RoleObj}] || ['role1', 'role2']}
 */
function getRole(roleName, depth) {
    var path = (0, _url.createRESTURL)('authorization/roles/' + roleName, {}, {});
    var qs = _querystring2.default.encode({ output_mode: 'json' });
    return fetch(path + '?' + qs, _fetch.defaultFetchInit).then((0, _fetch.handleResponse)(200)).then(function (result) {
        var roleObj = (0, _lodash.find)(result.entry, function (obj) {
            return obj.name === roleName;
        }).content;
        return getChildrenObject({
            name: roleName,
            type: 'role',
            capabilities: roleObj.capabilities,
            imported_capabilities: roleObj.imported_capabilities,
            roles: roleObj.imported_roles
        }, depth);
    }).catch((0, _fetch.handleError)('Failed to fetch role results.'));
}

/**
 * fetches role object for the selected user
 * @param {string} userName - user name
 * @param {number} depth - children roles depth
 * @returns {Promise<Response>}
 */
function getUser(userName, depth) {
    var path = (0, _url.createRESTURL)('authentication/users/' + userName, {}, {});
    var qs = _querystring2.default.encode({ output_mode: 'json' });
    return fetch(path + '?' + qs, _fetch.defaultFetchInit).then((0, _fetch.handleResponse)(200)).then(function (result) {
        var userObj = (0, _lodash.find)(result.entry, function (obj) {
            return obj.name === userName;
        }).content;
        var rolePromises = [];
        userObj.roles.map(function (role) {
            return rolePromises.push(getRole(role, depth - 1));
        });
        return Promise.all(rolePromises);
    }).catch((0, _fetch.handleError)('Failed to fetch user results.'));
}