/* global require, module */

const fs = require('fs-extra');
const chunk = require('lodash/chunk');
const each = require('lodash/each');
const mapValues = require('lodash/mapValues');
const groupBy = require('lodash/groupBy');
const glob = require('glob');
const path = require('path');

const outputPath = path.join(__dirname, 'generated');
const specTemplatePath = path.join(__dirname, 'VisualRegression.functional.tmpl.js');
const fixtureTemplatePath = path.join(__dirname, 'VisualRegression.fixture.tmpl.jsx');
const specTemplate = fs.readFileSync(specTemplatePath, 'utf8');
const fixtureTemplate = fs.readFileSync(fixtureTemplatePath, 'utf8');

// issues with this script that need to be resolved before this is used in production:
//  * reaches into docs app
//  * potential race condition when called by multiple wdio processes
module.exports = ({ chunks = 4, disable, options }) => {
    const reactUiDocsPath = path.join(
        path.dirname(require.resolve('@splunk/docs/package.json')), // docs package doesn't have an index file
        'src/pages/Packages/react-ui'
    );

    const exampleFiles = glob.sync('*/examples/**.jsx', { cwd: reactUiDocsPath });
    const examples = groupBy(exampleFiles, exampleFile =>
        exampleFile.slice(0, exampleFile.indexOf('/'))
    );
    disable.forEach(component => delete examples[component]);

    const exampleRequires = [JSON.stringify(mapValues(examples, () => []))];
    each(examples, (componentExamples, component) =>
        exampleRequires.push(
            ...componentExamples.map(
                componentExample =>
                    `examples['${component}'].push(require('@splunk/docs/src/pages/Packages/react-ui/${componentExample}').default);`
            )
        )
    );

    const chunkSize = Math.ceil(Object.keys(examples).length / chunks);
    const exampleChunks = chunk(Object.keys(examples), chunkSize);

    fs.emptyDirSync(outputPath);
    exampleChunks.forEach((exampleChunk, index) => {
        fs.writeFileSync(
            path.join(outputPath, `VisualRegression.${index}.functional.js`),
            specTemplate
                .replace('__EXAMPLES__', JSON.stringify(exampleChunk))
                .replace('__OPTIONS__', JSON.stringify(options))
        );
    });

    fs.writeFileSync(
        path.join(outputPath, `VisualRegression.fixture.jsx`),
        fixtureTemplate.replace('__EXAMPLES__', exampleRequires.join('\n'))
    );
};
