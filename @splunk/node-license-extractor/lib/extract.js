#!/usr/bin/env node
/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = extractLicenses;

var _fs = require('fs');

var _os = require('os');

var _path = require('path');

var _lodash = require('lodash');

var _axios = require('axios');

var _chalk = require('chalk');

var _execa = require('execa');

var _listr = require('listr');

var _listr2 = _interopRequireDefault(_listr);

var _semver = require('semver');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generates a list of all dependencies for packages, including resolved versions, licenses, and repositories.
// Uses 'yarn licenses' internally and is compatible with Yarn Workspaces.
// Output is:
//   - a JSON file

var outFileJson = 'licenses.json';

// according to the spdx.org FAQ, this license database is licensed PDDL-1.0
var licenseDBUrl = 'https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json';

var licenseUrl = function licenseUrl(licenses, name) {
    return 'https://spdx.org/' + (0, _path.normalize)('licenses/' + licenses[name].reference);
};

var findDependency = function findDependency(ctx, name, range) {
    // find all versions of the dependency
    var depVersions = ctx.yarnLicenses.filter(function (dep) {
        return dep[0] === name;
    });
    var versionNumbers = depVersions.map(function (depVersion) {
        return depVersion[1];
    });

    // figure out which one best matches the version range of the current dep
    var usedVersion = (0, _semver.maxSatisfying)(versionNumbers, range);
    var usedDep = depVersions.find(function (depVersion) {
        return depVersion[1] === usedVersion;
    });

    var _usedDep = _slicedToArray(usedDep, 6),
        version = _usedDep[1],
        license = _usedDep[2],
        repoUrl = _usedDep[3],
        vendorUrl = _usedDep[4],
        vendorName = _usedDep[5];

    var dep = { version: version, license: license, repoUrl: repoUrl, vendorUrl: vendorUrl, vendorName: vendorName };
    if ((0, _lodash.has)(ctx.licenses, license)) {
        dep.licenseLink = licenseUrl(ctx.licenses, license);
    }

    return dep;
};

var tasks = new _listr2.default([{
    title: 'Downloading spdx license database',
    task: function task(ctx) {
        return (0, _axios.get)(licenseDBUrl).then(function (_ref) {
            var licenses = _ref.data.licenses;

            if ((0, _lodash.isUndefined)(licenses) || (0, _lodash.isEmpty)(licenses)) {
                throw new Error('Download of license database failed');
            }
            ctx.licenses = (0, _lodash.keyBy)(licenses, 'licenseId');
        });
    }
}, {
    title: 'Running yarn license list task',
    task: function task(ctx) {
        return (0, _execa.shell)('yarn --no-progress --json licenses list').then(function (result) {
            ctx.licenseTaskRaw = result.stdout;
            ctx.warnings = [];
            if (result.stderr) {
                ctx.warnings = ['License task warnings (usually safe to ignore):', result.stderr.split(_os.EOL), _os.EOL];
            }
        });
    }
}, {
    title: 'Parsing yarn license list task output',
    task: function task(ctx) {
        ctx.yarnLicenses = ctx.licenseTaskRaw.split(_os.EOL).map(JSON.parse).find(function (i) {
            return i.type === 'table';
        }).data.body;
    }
}, {
    title: 'Extracting dependency information',
    task: function task(ctx) {
        return new _listr2.default(ctx.packagePaths.map(function (packagePath) {
            return {
                title: 'Collecting (' + packagePath + ')',
                task: function task() {
                    // eslint-disable-next-line global-require, import/no-dynamic-require
                    var pkgInfo = require((0, _path.resolve)((0, _path.join)(packagePath, 'package.json')));

                    ctx.packages[packagePath] = {};
                    ['dependencies', 'devDependencies'].forEach(function (depType) {
                        ctx.packages[packagePath][depType] = (0, _lodash.mapValues)(pkgInfo[depType], function (range, name) {
                            return findDependency(ctx, name, range);
                        });
                    });
                }
            };
        }), { concurrent: 5 });
    }
}, {
    title: 'Writing dependency information',
    task: function task(ctx) {
        return new _listr2.default(ctx.packagePaths.map(function (packagePath) {
            return {
                title: 'Writing JSON (' + packagePath + ')',
                task: function task() {
                    (0, _fs.writeFileSync)((0, _path.join)(packagePath, outFileJson), JSON.stringify(ctx.packages[packagePath], null, 2));
                },
                enabled: function enabled() {
                    return (0, _lodash.includes)(ctx.options, '--json');
                }
            };
        }), { concurrent: 5 });
    }
}]);

function extractLicenses(args) {
    var options = args.filter(function (arg) {
        return arg.startsWith('--');
    });
    var packagePaths = args.filter(function (arg) {
        return !arg.startsWith('--');
    });
    if ((0, _lodash.isEmpty)(options)) {
        options.push('--json');
    }
    if ((0, _lodash.isEmpty)(packagePaths)) {
        packagePaths.push('.');
    }

    return tasks.run({ options: options, packagePaths: packagePaths, packages: {} }).then(function (ctx) {
        if (!(0, _lodash.isEmpty)(ctx.warnings)) {
            // eslint-disable-next-line no-console
            console.log('' + _os.EOL + ctx.warnings.join(_os.EOL));
        }
    }).catch(function (err) {
        // eslint-disable-next-line no-console
        console.log((0, _chalk.red)(err.message));
        process.exitCode = 1;
    });
}