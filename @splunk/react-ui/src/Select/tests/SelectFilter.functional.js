/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { setTextValue } from '@splunk/wdio-functional-test-runner/utils';

const fixtureSelector = '[data-test="select-filter-fixture"]';
const toggleSelector = `${fixtureSelector} [data-test="toggle"]`;

describe('Select with filter', () => {
    let popoverSelector;
    let filterSelector;
    afterEach(() => {
        popoverSelector = null;
        filterSelector = null;
    });

    function open() {
        browser.click(toggleSelector);
        popoverSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        filterSelector = `${popoverSelector} [data-test="textbox"]`;
        browser.waitForVisible(popoverSelector);
    }

    it('has correct default value', () => {
        assert.strictEqual(browser.getAttribute(`${fixtureSelector}`, 'data-test-value'), '3');
        assert.include(browser.getText(toggleSelector), 'Left');
    });

    it('focus is on filter input', () => {
        open();
        assert.isTrue(browser.hasFocus(filterSelector));
    });

    it('selected option is active', () => {
        open();
        const activeOptionId = browser.$(filterSelector).getAttribute('aria-activedescendant');
        assert.include(
            browser.$(`#${activeOptionId}`).getText(),
            'Left',
            'The active option is the expected one'
        );
    });

    it('select option with a click', () => {
        open();
        browser.click(`${popoverSelector} [data-test="option"][data-test-value="2"]`);
        assert.strictEqual(
            browser.getAttribute(`${fixtureSelector}`, 'data-test-value'),
            '2',
            'The value is now "2"'
        );
        assert.include(browser.getText(toggleSelector), 'Right', 'The toggle label has updated');

        // Popover closes on selection.
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.isTrue(browser.hasFocus(toggleSelector), 'The toggle has focus after closing');
    });

    it('filter and select option with the keyboard', () => {
        open();
        setTextValue(filterSelector, 'Rig');
        const activeOptionId = browser.$(filterSelector).getAttribute('aria-activedescendant');
        assert.include(
            browser.$(`#${activeOptionId}`).getText(),
            'Right',
            'The active option is the expected one'
        );
        browser.keys('Enter');
        assert.strictEqual(
            browser.getAttribute(`${fixtureSelector}`, 'data-test-value'),
            '2',
            'The value is now "2"'
        );
        assert.include(browser.getText(toggleSelector), 'Right', 'The toggle label has updated');

        // Popover closes on selection.
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.isTrue(browser.hasFocus(toggleSelector), 'The toggle has focus after closing');
    });

    it('filter highlights matching text', () => {
        open();
        setTextValue(filterSelector, 'down out');
        const activeOptionId = browser.$(filterSelector).getAttribute('aria-activedescendant');
        assert.lengthOf(
            browser.$$(`#${activeOptionId} [data-test="match"]`),
            2,
            'matches two pieces of text'
        );
    });

    it('select option with down arrow and enter', () => {
        open();
        browser.keys('ArrowUp');
        const activeOptionId = browser.$(filterSelector).getAttribute('aria-activedescendant');
        assert.include(
            browser.$(`#${activeOptionId}`).getText(),
            'Right',
            'The active option is the expected one'
        );
        browser.keys('Enter');
        assert.strictEqual(
            browser.getAttribute(`${fixtureSelector}`, 'data-test-value'),
            '2',
            'The value is now "2"'
        );
        assert.include(browser.getText(toggleSelector), 'Right', 'The toggle label has updated');

        // Popover closes on selection.
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.isTrue(browser.hasFocus(toggleSelector), 'The toggle has focus after closing');
    });

    it('closes on escape', () => {
        open();
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.isTrue(browser.hasFocus(toggleSelector), 'The toggle has focus after closing');
    });

    // SUI-1389 When using a controlled fetching select, the filter is not cleared out upon clicking away
    it('closes on clickAway, filterKeyword keeps value', () => {
        open();
        setTextValue(filterSelector, 'down');
        browser.click('[data-test="away"]');

        open();
        assert.strictEqual(browser.getValue(filterSelector), 'down', 'Filter key still show.');

        const options = browser.$$(`${popoverSelector} [data-test="option"]`);
        assert.strictEqual(options.length, 1, '1 option show.');
    });

    it('closes on toggle click while open', () => {
        open();
        browser.click(toggleSelector);
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.isTrue(browser.hasFocus(toggleSelector), 'The toggle has focus after closing');
    });
});
