const { without } = require('lodash');
const config = require('./functional.cloud.conf').config;
const ci = require('@splunk/wdio-functional-test-runner/functional.ci').default;
const s3 = require('@splunk/wdio-functional-test-runner/functional.s3').default;

ci(config, { failOnEmptySuite: true });
s3(config, { bucket: 'sui-test-bucket' });

config.services = without(config.services, 'static-server');
config.sauceConnect = false;

module.exports.config = config;
