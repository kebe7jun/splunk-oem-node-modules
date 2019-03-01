/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const fixtureSelector = '[data-test="select-fixture"]';
const toggleSelector = `${fixtureSelector} [data-test="toggle"]`;

describe('Select', () => {
    let popoverSelector;
    afterEach(() => {
        popoverSelector = null;
    });

    function open() {
        browser.click(toggleSelector);
        popoverSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(popoverSelector);
    }

    it('has correct default value', () => {
        assert.strictEqual(browser.getAttribute(`${fixtureSelector}`, 'data-test-value'), '3');
        assert.include(browser.getText(toggleSelector), 'Left');
    });

    it('focus is on selected item', () => {
        open();
        assert.isTrue(
            browser.hasFocus(`${popoverSelector} [data-test="option"][data-test-value="3"]`)
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

    it('select option with down arrow and enter', () => {
        open();
        browser.keys('ArrowUp');
        assert.isTrue(
            browser.hasFocus(`${popoverSelector} [data-test="option"][data-test-value="2"]`),
            'Focus is on option 2'
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

    it('renders children instead of label', () => {
        open();

        const menuItemSelector = `${popoverSelector} [data-test="option"][data-test-value="5"]`;

        assert.strictEqual(browser.getText(menuItemSelector).trim('\n'), 'Down and out');
        assert.isTrue(browser.isVisible(`${popoverSelector} [data-test="and"]`));

        browser.click(menuItemSelector);
        assert.strictEqual(browser.getText(toggleSelector).trim('\n'), 'Down and out');
        assert.isTrue(browser.isVisible(`${toggleSelector} [data-test="and"]`));
    });

    it('closes on escape', () => {
        open();
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.isTrue(browser.hasFocus(toggleSelector), 'The toggle has focus after closing');
    });

    it('closes on toggle click while open', () => {
        open();
        browser.click(toggleSelector);
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.isTrue(browser.hasFocus(toggleSelector), 'The toggle has focus after closing');
    });
});
