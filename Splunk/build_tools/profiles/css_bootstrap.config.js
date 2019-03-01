var path = require('path');
var mergeConfigs = require('../util/mergeConfigs');
var cssConfig = require('./common/css.config');

var outputPath = path.join(process.env.SPLUNK_SOURCE, 'web/search_mrsparkle/exposed/build/css');
var entryPath = path.join(process.env.SPLUNK_SOURCE, 'web/search_mrsparkle/exposed/pcss/base/bootstrap.pcss');

module.exports = ['enterprise', 'lite', 'dark'].map(theme => mergeConfigs(cssConfig(theme, `bootstrap-${theme}.css`), {
    output: { path: outputPath },
    entry: { bootstrap: entryPath },
}));
