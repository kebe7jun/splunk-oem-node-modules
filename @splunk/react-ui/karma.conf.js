var _ = require('lodash');
var fsReadDir = require('fs-readdir-recursive');
var path = require('path');
var testRunner = require('@splunk/karma-unit-test-runner');

module.exports = function(config) {
    var testRegexp = '(.+)\\.unit(?:\\.jsx?)$';

    testRunner.config(config, {
        basePath: __dirname,
        testRegexp: testRegexp,
        testApps: { sui: { path: 'src', hooks: '../unit-test-hooks.js' } },

        //all files in a test's directory should be covered, for example:
        // Button/tests/Button: Button
        coveragePatterns: {
            sui: function() {
                return _.transform(
                    fsReadDir('src'),
                    function(patterns, f) {
                        var test = new RegExp(testRegexp).exec(f);
                        if (test) {
                            patterns[test[1]] = path.dirname(path.dirname(test[1]));
                        }
                    },
                    {}
                );
            },
        },
    });

    config.browsers = ['jsdom'];
};
