var path = require('path');
var _ = require('lodash');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DEFAULT_OPTIONS = {
    variables: {},
    path: [],
    extractText: false,
    extractTextFilename: "[name].css",
    splunkVersion: 'dev',
    profileName: '',
    loadTheme: 'enterprise'
};

/**
 * A function that returns a webpack configuration object to use post css. The
 * config only contains parameters necessary to make postcss work, and is
 * intended to be merged with a base configuration object.
 *
 * @param {Object} [options]
 * @param {Object} [options.variables] - A map of variable names and values that
 * will be passed to the postcss-simple-vars plugin.
 * @param {String|String[]} [options.path = 'search_mrsparkle/exposed'] - Passed
 * to postcss-import plugin to resolve import statements.
 * @param {Boolean} [options.modules = true] - Use css modules.
 * @param {Boolean} [options.extractText = false] - Use the ExtractTextPlugin to
 * output a css file.
 * @param {String} [options.extractTextFilename = '[name].css'] - A name file
 * name to use with the extract text plugin.
 * @param {String} [options.loadTheme = 'enterprise'] - Determines the brand
 * color. Must be 'enterprise' or 'lite'.
 * @returns {Object} webpack configuration object
 */
module.exports = function(options) {
    options = _.merge({}, DEFAULT_OPTIONS, options);

    var isDev = process.env.NODE_ENV === 'development';
    var styleLoader = 'style-loader!';
    var cssLoader = 'css-loader' + (isDev ? '?sourceMap!' : '!');
    var cssLoaderModules = 'css-loader?modules&importLoaders=1&' + (isDev ? 'sourceMap&' : '')
        + 'localIdentName=[local]---' + options.profileName + '---' + options.splunkVersion.replace('.', '-') + '---[hash:base64:5]!';
    var postcssLoader = 'postcss-loader';
    var plugins = [];
    var loaders = [];

    if (options.extractText) {
        plugins.push(
            new ExtractTextPlugin(options.extractTextFilename, {
                allChunks: true
            })
        );
        loaders.push({
            test: /\.pcss$/,
            loader: ExtractTextPlugin.extract(cssLoader + postcssLoader)
        });
        loaders.push({
            test: /\.pcssm$/,
            loader: ExtractTextPlugin.extract(cssLoaderModules + postcssLoader)
        });
    } else {
        loaders.push({
            test: /\.pcss$/,
            loader: styleLoader + cssLoader + postcssLoader
        });
        loaders.push({
            test: /\.pcssm$/,
            loader: styleLoader + cssLoaderModules + postcssLoader
        });
    }

    return {
        plugins: plugins,
        module: {
            loaders: loaders
        },
        postcss: function (webpack) {

            return [
                require('../../postcss_plugins/splunk-postcss-theme-import')({ theme: options.loadTheme }),
                require('postcss-import')({
                    path: options.path,
                    addDependencyTo: webpack
                }),
                require('postcss-mixins'),
                require('postcss-for'),
                require('postcss-simple-vars')({
                    variables: _.merge({ theme: options.loadTheme }, options.variables)
                }),
                require('postcss-conditionals'),
                require('postcss-calc'),
                require('postcss-color-function'),
                require('postcss-initial')({ replace: true }),
                require('autoprefixer')({ browsers: ['last 2 versions'] }),
                require('postcss-nested')
            ];
        }
    };
};
