/* This file is written in es5, and disables many eslint features */
/* eslint-disable max-len, object-shorthand, prefer-arrow-callback, func-names, space-before-function-paren, no-param-reassign, comma-dangle */

const path = require('path');
const fs = require('fs');
const webpackMerge = require('webpack-merge');
const baseComponentConfig = require('@splunk/webpack-configs/component.config').default;

const srcDir = path.resolve(__dirname, 'src');
const entries = fs
    .readdirSync(srcDir)
    .filter(function(fileName) {
        // Ignore files begining with a dot (.DS_Store) and the `crossComponentTests` directories.
        return (
            !/^\./.test(fileName) &&
            !/^crossComponentTests$/.test(fileName) &&
            !/^visualRegressionTests$/.test(fileName)
        );
    })
    .reduce(function(accum, file) {
        accum[file] = path.join(srcDir, file);
        return accum;
    }, {});

module.exports = webpackMerge(baseComponentConfig, {
    entry: entries,
    output: {
        path: __dirname,
    },
});
