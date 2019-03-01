/* This file is written in es5, and disables many eslint features */
/* eslint-disable max-len, no-var, object-shorthand, prefer-arrow-callback, func-names, space-before-function-paren, no-param-reassign, comma-dangle */

var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var baseConfig = require('@splunk/webpack-configs').default;

module.exports = webpackMerge(baseConfig, {
    resolve: {
        alias: {
            '@splunk/react-ui': path.resolve(__dirname, './src'),

            // the following are required for visual regression testing
            'components/Markdown': path.resolve(__dirname, './src/Markdown'),
            'core/history': path.resolve(__dirname, '../docs/src/core/history'),
            fixtures: path.resolve(__dirname, '../docs/src/fixtures'),
        },
    },
    plugins: [new webpack.DefinePlugin({ __DEV__: true })],
});
