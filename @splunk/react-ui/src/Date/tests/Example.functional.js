/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { setTextValue } from '@splunk/wdio-functional-test-runner/utils';

// A selector added to the `Date` to uniquely identify it on the page.
const fixtureSelector = '[data-test="my-project:date-input"]';
const textboxSelector = `${fixtureSelector} [data-test=textbox]`;

describe('Date test api', () => {
    it('dates can be entered with clicks', () => {
        // Click the textbox to open the calendar.
        browser.click(textboxSelector);

        // Click on a date in the calendar.
        const popoverSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        browser.click(`${popoverSelector} [data-test="day-of-month"][data-test-day="19"]`);

        // Assert that the date has updated.
        const currentValue = browser.getAttribute(fixtureSelector, 'data-test-value');
        assert.strictEqual(currentValue, '1988-09-19', 'The date has updated');

        // The popover calender closes on selection.
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
    });

    it('dates can be entered with the keyboard', () => {
        // Set the value.
        setTextValue(textboxSelector, '3/14/2015');

        // Press enter to submit.
        browser.keys('Enter');

        // Assert that the date has updated.
        const currentValue = browser.getAttribute(fixtureSelector, 'data-test-value');
        assert.strictEqual(currentValue, '2015-03-14', 'The date has updated');
    });
});
