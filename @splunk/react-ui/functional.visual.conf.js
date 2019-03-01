const path = require('path');
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const generate = require('./src/visualRegressionTests/generate');

// spec generation must happen before base config is called
// since this config is called multiple times file generation happens repeatedly too,
// for now that's just the way it is

// datetime-sensitive components are not yet supported (Date)
// animated components are not yet supported (Progress, WaitSpinner)
const disable = ['Date', 'Progress', 'WaitSpinner'];
const options = { ControlGroup: { hide: ['div=A Date Field'] } };
generate({ chunks: 10, disable, options });
process.argv.push('--filter', 'visualRegressionTests');

const config = require('./functional.cloud.conf').config;

const screenshotBase = path.join(__dirname, 'src/visualRegressionTests/screenshots');
const getScreenshotName = screenshotType => context =>
    path.join(
        screenshotBase,
        screenshotType,
        `${context.test.fullTitle}_${context.type}_${context.browser.name}.png`
    );

config.services.push('visual-regression');
config.visualRegression = {
    compare: new VisualRegressionCompare.LocalCompare({
        diffName: getScreenshotName('diff'),
        referenceName: getScreenshotName('reference'),
        screenshotName: getScreenshotName('current'),
    }),
    viewports: [{ width: 1280, height: 800 }],
};

module.exports.config = config;
