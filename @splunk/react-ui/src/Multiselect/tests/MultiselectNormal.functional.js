/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { setTextValue } from '@splunk/wdio-functional-test-runner/utils';

describe('Multiselect:Normal', () => {
    const defaultValues = ['Chart1', 'Value3'];
    const fixtureSelector = '[data-test="normal-multiselect-fixture"]';
    const textboxSelector = `${fixtureSelector} [data-test="textbox"]`;
    const clickawayButton = '#clickaway';

    let menuSelector;
    afterEach(() => {
        menuSelector = null;
    });

    function assertSelectedOptionVisible(value) {
        assert.isTrue(
            browser.isVisible(
                `${fixtureSelector} [data-test="selected-option"][data-test-value="${value}"]`
            ),
            `${value} is selected`
        );
    }

    function assertSelectedOptionNotVisible(value) {
        assert.isFalse(
            browser.isVisible(
                `${fixtureSelector} [data-test="selected-option"][data-test-value="${value}"]`
            ),
            `${value} is not selected`
        );
    }

    function assertSelectedOptions(expected) {
        // Check that the test attribute has the correct data.
        const actual = JSON.parse(browser.getAttribute(fixtureSelector, 'data-test-values'));
        assert.deepEqual(actual, expected, 'The selected values are as expected');

        // Check that a selected option button exists for each expected value.
        expected.forEach(assertSelectedOptionVisible);
    }

    function open() {
        browser.click(textboxSelector);
        menuSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(menuSelector);
    }

    it('honors default values', () => {
        assertSelectedOptions(defaultValues);
    });

    it('filters when typing and highlights matching text', () => {
        open();
        setTextValue(`${textboxSelector}`, 'pleth map', { click: false }); // clicking is incompatible with the overlay
        assert.lengthOf(browser.$$(`${menuSelector} [data-test="option"]`), 1);
        assert.lengthOf(browser.$$(`${menuSelector} [data-test="match"]`), 2);
    });

    it('adds items on enter', () => {
        setTextValue(textboxSelector, 'Gauge');
        browser.keys('Enter');
        assertSelectedOptions(defaultValues.concat('Value2'));
    });

    it('adds items with a click', () => {
        open();
        browser.click(`${menuSelector} [data-test="option"][data-test-value="Map1"]`);
        assertSelectedOptions(defaultValues.concat('Map1'));
    });

    it('removes option on selected option click', () => {
        browser.click(`${fixtureSelector} [data-test="selected-option"][data-test-value="Value3"]`);
        assertSelectedOptions(['Chart1']);
        assertSelectedOptionNotVisible('Value3');
    });

    it('renders children instead of label', () => {
        open();

        const itemSelector = `${menuSelector} [data-test="option"][data-test-value="Chart7"]`;
        assert.strictEqual(browser.getText(itemSelector), 'Bubble Chart');
        assert.isTrue(browser.isVisible(`${menuSelector} [data-test="bold"]`));

        browser.click(itemSelector);
        assert.isTrue(
            browser.isVisible(
                `${fixtureSelector} [data-test="selected-option"][data-test-value="Chart7"] [data-test="bold"]`
            )
        );
    });

    it('closes on escape key', () => {
        open();
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(menuSelector));
    });

    it("doesn't add arbitrary values", () => {
        setTextValue(textboxSelector, 'not-an-option');
        browser.keys('Enter');
        assertSelectedOptions(defaultValues);
        assertSelectedOptionNotVisible('not-an-option');
    });

    // SUI-498: Multiselect should clear the filter text on blur
    // Note that the fix implemented for this clears the text on focus, not on blur
    it('clears incomplete filter on focus', () => {
        setTextValue(textboxSelector, 'hello');
        browser.keys('Tab');
        browser.click(textboxSelector);
        assert.equal(browser.getValue(textboxSelector), '');
    });

    // SUI-517: Disabled option in Select/Multiselect/ComboBox can be selected using the keyboard
    it('prevents selection of disabled items using keyboard', () => {
        browser.click(textboxSelector);
        browser.keys(['ArrowDown', 'Enter']); // second item is disabled
        assertSelectedOptions(defaultValues);
    });

    it('ensure clickaway overlay prevents clicks, but not otherwise', () => {
        const expectedErrorSnippet = /is not clickable|is obscured/;
        browser.click(clickawayButton); // Should just pass
        open();
        try {
            browser.click(clickawayButton);
            // This doesn't cause an error on IE so check to make sure button doesn't have focus
            assert.isFalse(browser.hasFocus(clickawayButton));
        } catch (err) {
            assert.isTrue(expectedErrorSnippet.test(err.message));
        }
    });
});
