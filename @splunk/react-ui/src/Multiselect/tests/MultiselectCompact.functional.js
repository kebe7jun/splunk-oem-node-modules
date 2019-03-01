/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { setTextValue } from '@splunk/wdio-functional-test-runner/utils';

describe('Multiselect:Compact', () => {
    const defaultValues = ['Chart1', 'Value3'];
    const fixtureSelector = '[data-test="compact-multiselect-fixture"]';
    const toggleSelector = `${fixtureSelector} [data-test="toggle"]`;

    let menuSelector;
    afterEach(() => {
        menuSelector = null;
    });

    function assertSelectedOptions(expected) {
        const actual = JSON.parse(browser.getAttribute(fixtureSelector, 'data-test-values'));
        assert.deepEqual(actual, expected, 'The selected values are as expected');
    }

    function open() {
        browser.click(toggleSelector);
        menuSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(menuSelector);
    }

    it('honors default values', () => {
        assertSelectedOptions(defaultValues);
    });

    it('filters when typing and highlights matching text', () => {
        open();
        setTextValue(`${menuSelector} [data-test="textbox"]`, 'pleth map');
        assert.lengthOf(browser.$$(`${menuSelector} [data-test="option"]`), 1);
        assert.lengthOf(browser.$$(`${menuSelector} [data-test="match"]`), 2);
    });

    it('add an option with the keyboard', () => {
        open();
        setTextValue(`${menuSelector} [data-test="textbox"]`, 'Map');
        browser.keys('Enter');
        assertSelectedOptions(defaultValues.concat('Map1'));
    });

    it('add an option with a click', () => {
        open();
        browser.click(`${menuSelector} [data-test="option"][data-test-value="Map1"]`);
        assertSelectedOptions(defaultValues.concat('Map1'));
    });

    it('select all works with a click', () => {
        open();
        browser.click(`[data-test='clear-all']`);
        browser.$$(`${menuSelector} [data-test="switch"][data-test-selected="true"]`, 0);
        browser.click(`[data-test='select-all']`);
        assert.lengthOf(
            browser.$$(`${menuSelector} [data-test="switch"][data-test-selected="true"]`),
            14
        );
    });

    it('remove an option with the keyboard', () => {
        open();
        setTextValue(`${menuSelector} [data-test="textbox"]`, 'Gauge');
        browser.keys('Enter');
        assertSelectedOptions(['Chart1']);
    });

    it('remove an option with a click', () => {
        open();
        browser.click(`${menuSelector} [data-test="option"][data-test-value="Value3"]`);
        assertSelectedOptions(['Chart1']);
    });

    it('renders children instead of label', () => {
        open();

        const itemSelector = `${menuSelector} [data-test="option"][data-test-value="Chart7"]`;

        assert.strictEqual(browser.getText(itemSelector).trim('\n'), 'Bubble Chart');
        assert.isTrue(browser.isVisible(`${itemSelector} [data-test="bold"]`));

        browser.click(itemSelector);

        assert.isTrue(
            browser.isVisible(`${fixtureSelector} [data-test="toggle"] [data-test="bold"]`)
        );
    });

    it('closes on escape key', () => {
        open();
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(menuSelector));
    });

    it("doesn't add arbitrary values", () => {
        open();
        setTextValue(`${menuSelector} [data-test="textbox"]`, 'not-an-option');
        browser.keys('Enter');
        assertSelectedOptions(defaultValues);
    });
});
