/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus, setTextValue } from '@splunk/wdio-functional-test-runner/utils';

const fixtureSelector = '[data-test="date-fixture"]';
const textboxSelector = `${fixtureSelector} [data-test=textbox]`;
const dateDisabledSelector = '[data-test="date-disabled"]';
const buttonSelector = '[data-test="button-foo"]';
const defaultValue = '1988-09-29'; // As set in fixture

function popoverSelector() {
    return `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
}

describe('Date', () => {
    it('opens calendar on click, calendar displays correct month, and closes on external click', () => {
        assert.isFalse(browser.$(popoverSelector()).isExisting(), 'The calendar is closed');
        browser.click(textboxSelector);
        browser.waitForVisible(popoverSelector());
        const headerLabel = browser.getText(`${popoverSelector()} [data-test="header-label"]`);
        assert.strictEqual(headerLabel, 'September 1988', 'Calendar header displays correct month');
        browser.$('body').click();
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
    });

    it('opens calender on tab and closes on esc', () => {
        resetFocus();
        assert.isFalse(browser.$(popoverSelector()).isExisting(), 'The calender is closed');
        browser.keys('Tab');
        assert.isTrue(browser.waitUntil(() => browser.$(popoverSelector()).isVisible()));
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
    });

    it('next month button advances the caldendar, but does not update the value', () => {
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            defaultValue,
            'The initial value is the default'
        );
        browser.click(textboxSelector);
        browser.waitForVisible(popoverSelector());
        browser.click(`${popoverSelector()} [data-test="next-month"]`);
        const headerLabel = browser.getText(`${popoverSelector()} [data-test="header-label"]`);
        assert.strictEqual(headerLabel, 'October 1988', 'Calendar header displays next month');
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            defaultValue,
            'The value is still the default'
        );
        assert.isTrue(browser.isVisible(popoverSelector()), 'The popover remains open');
    });

    it('can be selected by clicking a date in the calendar', () => {
        browser.click(textboxSelector);
        browser.waitForVisible(popoverSelector());
        browser.click(`${popoverSelector()} [data-test="day-of-month"][data-test-day="20"]`);
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            '1988-09-20',
            'The value has updated'
        );
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
        assert.isTrue(browser.hasFocus(textboxSelector), 'Focus is on the textbox');

        // Verify step for bug: SUI-808
        browser.click(textboxSelector);
        browser.waitForVisible(popoverSelector());
    });

    it('can be selected by entering a date in the textbox and pressing enter', () => {
        setTextValue(textboxSelector, '3/14/2015');
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            defaultValue,
            'The value has not updated'
        );
        browser.keys(['Enter']);
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            '2015-03-14',
            'The value has updated'
        );
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
        assert.isTrue(browser.hasFocus(textboxSelector), 'Focus is on the textbox');
    });

    it('only one popover shows and second date control has the focus after press tab', () => {
        browser.click(textboxSelector);
        browser.waitUntil(() => browser.isVisible(popoverSelector()));
        browser.keys('Tab');
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
        assert.isTrue(browser.hasFocus(buttonSelector));
    });

    it('append blank space would not break date control popover and focus, SUI-807', () => {
        browser.addValue(textboxSelector, ' ');
        browser.click(buttonSelector);
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
        assert.isTrue(browser.hasFocus(buttonSelector));
    });

    it('calendar would not popup clicking on disabed Date, SUI-1252', () => {
        browser.click(dateDisabledSelector);
        assert.isTrue(
            !browser.isVisible(
                `#${browser.getAttribute(dateDisabledSelector, 'data-test-popover-id')}`
            )
        );
    });

    it('close calender on esc and do text input, SUI-1400', () => {
        resetFocus();
        browser.click(textboxSelector);
        browser.waitUntil(() => browser.isVisible(popoverSelector()));
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
        setTextValue(textboxSelector, '3/14/2015');
        browser.click(buttonSelector);
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            '2015-03-14',
            'The value has updated'
        );
    });
});
