const xml = require('xml');
const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');
const buildJsonResults = require('jest-junit/utils/buildJsonResults');

const OUTPUT_FILENAME = 'unit-results.xml';

module.exports = report => {
    if (process.argv.indexOf('--ci') > -1) {
        const testResultsDir = path.resolve(__dirname, '../test-reports');
        const outputPath = path.join(testResultsDir, OUTPUT_FILENAME);
        mkdirp.sync(testResultsDir);

        const results = buildJsonResults(report, path.resolve(__dirname, '..'), {
            suiteName: 'unit tests',
            output: outputPath,
            classNameTemplate: '{classname} {title}',
            titleTemplate: '{classname} {title}',
            usePathForSuiteName: 'false',
        });
        const junitReport = xml(results, { indent: '  ' });

        console.log('Writing JUnit report to', outputPath);
        fs.writeFileSync(outputPath, junitReport);
    }
    return report;
};
