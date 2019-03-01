/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

// A selector added to the `ComboBox` to uniquely identify it on the page.
const fixtureSelector = '[data-test="my-project:chart-combobox"]';
const textboxSelector = `${fixtureSelector} [data-test="textbox"]`;

describe('ComboBox test api', () => {
    it('select a value with the mouse', () => {
        // Click the textbox to open the menu.
        browser.click(textboxSelector);

        // Get the popover id and wait for it to open.
        const popoverSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(popoverSelector);

        // Click on the Scatter Chart option.
        browser.click(`${popoverSelector} [data-test="option"][data-test-value="Scatter Chart"]`);

        const currentValue = browser.getAttribute(fixtureSelector, 'data-test-value');
        assert.strictEqual(currentValue, 'Scatter Chart');

        // The popover closes when an option is selected.
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
    });
});
