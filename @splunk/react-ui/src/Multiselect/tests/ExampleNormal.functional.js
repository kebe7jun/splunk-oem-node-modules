/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { setTextValue } from '@splunk/wdio-functional-test-runner/utils';

describe('Multiselect test API example', () => {
    // A selector added to the `Multiselect` to uniquely identify it on the page.
    const fixtureSelector = '[data-test="my-project:chart-multiselect"]';
    const textboxSelector = `${fixtureSelector} [data-test="textbox"]`;

    it('select an option with the keyboard', () => {
        // Enter text into the textbox and press enter to select an option.
        setTextValue(textboxSelector, 'Line');
        browser.keys('Enter');

        // Read the selected values from the DOM.
        const selectedValues = JSON.parse(
            browser.getAttribute(fixtureSelector, 'data-test-values')
        );

        assert.deepEqual(selectedValues, ['1']);
    });

    it('select an option with the mouse', () => {
        // Click the textbox and wait for the menu to open.
        browser.click(textboxSelector);
        const menuSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(menuSelector);

        // Click on an option in the menu.
        browser.click(`${menuSelector} [data-test=option][data-test-value="2"]`);

        // Read the selected values from the DOM.
        const selectedValues = JSON.parse(
            browser.getAttribute(fixtureSelector, 'data-test-values')
        );
        assert.deepEqual(selectedValues, ['2']);
    });
});
