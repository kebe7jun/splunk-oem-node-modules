/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

// A selector added to the `Select` to uniquely identify it on the page.
const fixtureSelector = '[data-test="my-project:select-direction"]';

describe('Select test API example', () => {
    it('select an option with the mouse', () => {
        // Open the menu.
        browser.click(`${fixtureSelector} [data-test="toggle"]`);
        const popoverId = browser.getAttribute(fixtureSelector, 'data-test-popover-id');
        browser.waitForVisible(`#${popoverId}`);

        // Click an option.
        browser.click(`#${popoverId} [data-test="option"][data-test-value="2"]`);

        // Assert the value has updated.
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-value'), '2');
    });

    it('select an option with the keyboard', () => {
        // Open the menu.
        browser.click(`${fixtureSelector} [data-test="toggle"]`);
        const popoverId = browser.getAttribute(fixtureSelector, 'data-test-popover-id');
        browser.waitForVisible(`#${popoverId}`);

        // Select an option.
        browser.keys(['ArrowUp', 'Enter']);

        // Assert the value has updated.
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-value'), '2');
    });
});
