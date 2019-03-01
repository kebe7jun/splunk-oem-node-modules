/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus } from '@splunk/wdio-functional-test-runner/utils';

const fixtureSelector = '[data-test="menu-fixture"]';

describe('Menu', () => {
    it('truncates text', () => {
        const wrappedHeight = browser.getElementSize(
            `${fixtureSelector} [data-test="item"][value="one"]`
        ).height;
        const truncatedHeight = browser.getElementSize(
            `${fixtureSelector} [data-test="item"][value="two"]`
        ).height;

        // The wrapped item should be significantly taller than the truncated item, not just a pixel.
        assert.isAbove(wrappedHeight, truncatedHeight * 1.5, 'The first button has focus');
    });

    it('retains focus within the menu and on the items with retainFocus', () => {
        resetFocus();
        browser.keys('Tab');
        assert.isTrue(browser.hasFocus('[data-test="first-button"]'), 'The first button has focus');

        browser.keys('Tab');
        assert.isTrue(
            browser.hasFocus(`${fixtureSelector} [data-test="item"][value="one"]`),
            'The first menu item is focused'
        );

        browser.keys('Tab');
        assert.isTrue(
            browser.hasFocus(`${fixtureSelector} [data-test="item"][value="two"]`),
            'The second menu item is focused'
        );

        browser.keys('Tab');
        assert.isTrue(
            browser.hasFocus(`${fixtureSelector} [data-test="item"][value="one"]`),
            'The first item is focused again'
        );
    });
});
