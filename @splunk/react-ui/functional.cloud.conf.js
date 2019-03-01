const base = require('@splunk/wdio-functional-test-runner/functional.base').default;
const cloud = require('@splunk/wdio-functional-test-runner/functional.cloud').default;
const httpServer = require('@splunk/wdio-functional-test-runner/functional.httpServer').default;

const settings = require('./functional.settings');

const config = base(settings);
cloud(config);
httpServer(config);

config.capabilities = [
    { browserName: 'chrome', platform: 'Windows 10', version: '64.0', timeZone: 'Los Angeles' },
    {
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11.0',
        timeZone: 'Los Angeles',
    },
    {
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '17.17134',
        timeZone: 'Los Angeles',
    },
    //latest version where browser.keys works. once the new driver stabilizes, use that
    { browserName: 'firefox', platform: 'Windows 8.1', version: '47.0', timeZone: 'Los Angeles' },
];

config.maxInstances = config.capabilities.length * 10;

module.exports.config = config;
