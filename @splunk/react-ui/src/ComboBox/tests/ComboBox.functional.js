/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus, setTextValue } from '@splunk/wdio-functional-test-runner/utils';

const fixtureSelector = '[data-test="combobox-fixture"]';
const textboxSelector = `${fixtureSelector} [data-test="textbox"]`;

function popoverSelector() {
    return `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
}

function optionSelector(value) {
    return `${popoverSelector()} [data-test="option"][data-test-value="${value}"]`;
}

function getValue() {
    return browser.getAttribute(fixtureSelector, 'data-test-value');
}

describe('ComboBox', () => {
    it('opens on textbox click and closes on click away', () => {
        browser.click(textboxSelector);
        browser.waitForVisible(popoverSelector());
        assert.isTrue(browser.hasFocus(textboxSelector), 'textbox has focus');
        browser.click('body');
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
        assert.isFalse(browser.hasFocus(textboxSelector), 'textbox no longer has focus');
    });

    it('opens when tabbed to and closes when tabbed away', () => {
        resetFocus();
        browser.keys(['Tab', 'Tab']);
        browser.waitForVisible(popoverSelector());
        assert.isTrue(browser.hasFocus(textboxSelector), 'textbox has focus');
        browser.keys(['Tab']);
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
        assert.isFalse(browser.hasFocus(textboxSelector), 'textbox no longer has focus');
    });

    it('closes on click on a separate Text input (SUI-1038)', () => {
        browser.click(textboxSelector);
        browser.waitForVisible(popoverSelector());

        // Click on the right side of the separate text input, where the clear button will be
        // rendered.
        const { width, height } = browser.getElementSize('[data-test="separate-text-input"]');
        browser.leftClick('[data-test="separate-text-input"]', width - 5, height / 2);
        browser.waitUntil(() => !browser.isVisible(popoverSelector()));
    });

    it('stays open when the clear button is clicked', () => {
        setTextValue(textboxSelector, 'testing');
        browser.click(`${fixtureSelector} [data-test="clear"]`);
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-open'), 'true');
    });

    describe('selecting options', () => {
        beforeEach(() => {
            browser.click(textboxSelector);
            browser.waitForVisible(popoverSelector());
        });

        it('options can be selected with a click', () => {
            browser.click(optionSelector('Area Chart'));
            assert.strictEqual(getValue(), 'Area Chart');
            // Popover closes on selection
            browser.waitUntil(() => !browser.isVisible(popoverSelector()));
            assert.isTrue(browser.hasFocus(textboxSelector), 'textbox has focus');
        });

        it('options can be selected with the down arrow', () => {
            browser.keys(['ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'Enter']);
            assert.strictEqual(getValue(), 'Column Chart');
            // Popover closes on selection
            browser.waitUntil(() => !browser.isVisible(popoverSelector()));
            assert.isTrue(browser.hasFocus(textboxSelector), 'textbox has focus');
        });

        it('filters options when text is entered', () => {
            assert.lengthOf(browser.$$(`${popoverSelector()} [data-test="option"]`), 15);

            setTextValue(textboxSelector, 'Chart');
            assert.lengthOf(browser.$$(`${popoverSelector()} [data-test="option"]`), 8);

            setTextValue(textboxSelector, 'pleth map');
            assert.lengthOf(browser.$$(`${popoverSelector()} [data-test="option"]`), 2);
            assert.lengthOf(browser.$$(`${popoverSelector()} [data-test="match"]`), 2);
        });
    });
});
