var path = require('path');
var createBabelLoader = require('../../util/createBabelLoader');
var mergeConfigs = require('../../util/mergeConfigs');
var sharedConfig = require('./shared.config');
var postcssConfig = require('./postcss.config');

module.exports = function(appDir, options) {
    return mergeConfigs(sharedConfig, postcssConfig(options), {
        resolve: {
            root: [
                path.join(appDir, 'src'),
                path.join(appDir, 'bower_components'),
            ],
        },
        module: {
            loaders: [
                createBabelLoader({
                    test: /\.es$/,
                    include: new RegExp(appDir),
                    presets: ['babel-preset-es2015'],
                }),
                createBabelLoader({
                    test: /\.jsx$/,
                    include: new RegExp(appDir),
                    presets: ['babel-preset-es2015', 'babel-preset-react'],
                }),
            ],
        },
    });
}
