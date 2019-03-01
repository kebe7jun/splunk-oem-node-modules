var path = require('path');
var testRunner = require('@splunk/karma-unit-test-runner');
var splunkEnv = require('./environment.es');

if (!process.env.SPLUNK_SOURCE) {
    log.error('Need to set $SPLUNK_SOURCE.');
    process.exit(1);
}

var basePath = path.join(process.env.SPLUNK_SOURCE);
var splunkSource = path.join(process.env.SPLUNK_SOURCE);

var settings = {
    basePath: basePath,
    appDir: path.join('cfg', 'bundles'),
    testDir: path.join('appserver', 'test'),
    supportDir: path.join('appserver', 'test', 'support'),
    testRegexp: 'appserver\\/test\\/(.*\\btest_.+)(?:\\.js|\\.es|\\.jsx)$',
    testStyle: 'tdd',
    wpVersion: 1,
    features: {
        chai: true,
        coverage: {
            direct: true,
            babel: true
        },
        pcssmStub: true,
        sinon: true,
        stubModules: ['util\\/ajax_no_cache'],
        timezone: 'US/Pacific'
    },
    externalSourcePaths: {
        '<core>': path.join(splunkSource, 'web', 'search_mrsparkle', 'exposed', 'js')
    },
    outputDir: path.join('web', 'test'),
    bootstrapConfig: path.join(__dirname, 'bootstrap-config'),
    exclusions: {
        'corejs_test': [
            //these three have been a constant source of grief - problem appears to have something
            // to do with jquery animations / setTimeout use.
            'views/shared/test_responsive_header_page.js',
            'views/pivot/config_popups/test_pivot_config_wizard.js',
            'widgets/test_widget_slidenav.js',

            //fail in single mode:

            //TODO: investigate, seems to do a redirect to dmc/enabler?
            'routers/managementconsole/test_managementconsole_add_app.js',

            //window.$C mod, we could make this work but do we want to?
            'routers/test_dependency_aggregation_base.js',

            //couple of changes due to webpack -> change after migration
            'require/test_shims.js',

            //'jQuery' is not exported to window – not supposed to work any longer -> change after migration
            'require/test_jquery_1_10_2.js',
            'require/test_jquery_1_8_2.js',
            'require/test_jquery_1_8_3.js'
        ]
    }
}

module.exports = function(config) {
    testRunner.config(config, settings);
    splunkEnv.config(config, {splunkSource: splunkSource});
};

module.exports.settings = settings;
