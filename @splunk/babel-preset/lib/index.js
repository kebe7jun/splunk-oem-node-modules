/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = babelPresetSplunk;

// Babel env has bugs and may be removed soon. https://github.com/babel/babel/issues/5276
var env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';

var devPlugins = [require.resolve('babel-plugin-transform-react-jsx-source'), require.resolve('babel-plugin-transform-react-jsx-self')];

function babelPresetSplunk(babel) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        targets = _ref.targets,
        webpack = _ref.webpack;

    var basePresetOptions = {};

    if (targets) {
        basePresetOptions.targets = targets;
    }

    if (webpack) {
        basePresetOptions.modules = false;
    }

    return {
        presets: [[require.resolve('babel-preset-env'), basePresetOptions], require.resolve('babel-preset-react')],
        plugins: [require.resolve('babel-plugin-transform-object-rest-spread'), require.resolve('babel-plugin-transform-class-properties')].concat(env === 'development' ? devPlugins : [])
    };
}