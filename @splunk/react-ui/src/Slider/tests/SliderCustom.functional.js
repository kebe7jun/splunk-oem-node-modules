/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isIE } from '@splunk/wdio-functional-test-runner/utils';

const fixtureSelector = '[data-test="slider-fixture"]';
const handleSelector = `${fixtureSelector} [data-test="handle"]`;
const toggleSelector = `${fixtureSelector} [data-test-popover-id]`;

function trimWhiteSpace(value) {
    return value.replace(/^\s+|\s+$/g, '');
}

describe('Slider', () => {
    it('honors the display value prop', () => {
        if (!isIE()) {
            /* 10, 10 is necessary for the test to Pass in Windows Chrome.
             * Perhaps it doesn't position on the center of the element. */
            browser.moveToObject(handleSelector, 10, 10);

            const popoverId = browser.getAttribute(toggleSelector, 'data-test-popover-id');
            const popoverSelector = `#${popoverId}`;

            browser.waitForVisible(popoverSelector);
            assert.strictEqual(
                trimWhiteSpace(browser.getText(popoverSelector)),
                '10px',
                'initial display values correct'
            );

            browser.buttonDown();
            browser.moveTo(null, 30, 0);
            assert.strictEqual(
                trimWhiteSpace(browser.getText(popoverSelector)),
                '15.85px',
                'display value updates on drag'
            );
        }
    });
});
