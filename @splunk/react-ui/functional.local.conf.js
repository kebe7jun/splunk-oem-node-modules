const base = require('@splunk/wdio-functional-test-runner/functional.base').default;
const local = require('@splunk/wdio-functional-test-runner/functional.local').default;
const httpServer = require('@splunk/wdio-functional-test-runner/functional.httpServer').default;

const settings = require('./functional.settings');

const config = base(settings);
local(config);
httpServer(config);

config.capabilities = [{ browserName: 'chrome' }];

module.exports.config = config;
