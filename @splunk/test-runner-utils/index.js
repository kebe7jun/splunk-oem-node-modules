'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeCoverageMaps = mergeCoverageMaps;
exports.writeCoverageReports = writeCoverageReports;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _istanbulLibCoverage = require('istanbul-lib-coverage');

var _istanbulLibCoverage2 = _interopRequireDefault(_istanbulLibCoverage);

var _istanbulLibReport = require('istanbul-lib-report');

var _istanbulLibReport2 = _interopRequireDefault(_istanbulLibReport);

var _istanbulReports = require('istanbul-reports');

var _istanbulReports2 = _interopRequireDefault(_istanbulReports);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Smart merge multiple istanbul coverage map files into one.
 *
 * @param {String[]} mapPaths Array of paths containing JSON coverage maps. Subdirs are not
 *  traversed (non-recursive).
 * @return {CoverageMap} The merged instanbul coverage map.
 * @public
 */
function mergeCoverageMaps(mapPaths) {
    var coverageMap = _istanbulLibCoverage2.default.createCoverageMap();

    var mapFilePaths = mapPaths.map(function (mapPath) {
        return _fs2.default.readdirSync(mapPath).map(function (mapFile) {
            return _path2.default.join(mapPath, mapFile);
        });
    });

    (0, _lodash.flatten)(mapFilePaths).filter(function (mapFile) {
        return (0, _lodash.endsWith)(mapFile, '.json');
    }).map(function (mapFile) {
        return _fs2.default.readFileSync(mapFile);
    }).map(function (contents) {
        return JSON.parse(contents);
    }).forEach(function (individualCovMap) {
        coverageMap.merge(individualCovMap);
    });

    return coverageMap;
}

/**
 * Run one or more istanbul reports using a CoverageMap object.
 *
 * @param {Object} settings
 * @param {String} settings.outputPath The report output path (for reports that write files).
 * @param {CoverageMap} settings.coverageMap The istanbul coverage map to report on.
 * @param {String[]} settings.reporters Array of istanbul report types to execute.
 * @public
 */
function writeCoverageReports(_ref) {
    var outputPath = _ref.outputPath,
        coverageMap = _ref.coverageMap,
        reporters = _ref.reporters;

    var reporterContext = _istanbulLibReport2.default.createContext({ dir: outputPath });
    var tree = _istanbulLibReport2.default.summarizers.pkg(coverageMap);
    reporters.forEach(function (reporter) {
        tree.visit(_istanbulReports2.default.create(reporter), reporterContext);
    });
}