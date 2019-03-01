/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const examples = __EXAMPLES__; // eslint-disable-line no-undef
const options = __OPTIONS__; // eslint-disable-line no-undef

const visualPass = results =>
    results.every(({ isWithinMisMatchTolerance }) => isWithinMisMatchTolerance);

examples.sort().forEach(component => {
    describe(`${component}: visual regression tests`, () => {
        it('matches reference', () => {
            browser.url(`${browser.getUrl()}?${component}`);
            assert.isTrue(visualPass(browser.checkElement('body', options[component] || {})));
        });
    });
});
