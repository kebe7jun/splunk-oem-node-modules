var webpack = require('webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var crypto = require('crypto');
/**
 * Production configuration settings
 * @type {Object}
 */
module.exports = {
    plugins: [
        // Prints progress of the build to the console
        new ProgressPlugin(function(progress, msg) {
            process.stdout.write('\r                                                      ');
            if (progress !== 1) {
                process.stdout.write('\rProgress: ' + Math.round(progress * 100) + '% ' + msg);
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'production'",
            'process.env.SC_ATTR': JSON.stringify(`core_sc${crypto.randomBytes(8).toString('hex')}`),
        }),
        new webpack.optimize.UglifyJsPlugin({
           compress: {
               warnings: false,
               drop_debugger: false
           },
           mangle: false
        })
    ]
};
