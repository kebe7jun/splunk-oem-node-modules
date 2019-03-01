/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isIE, setTextValue, resetFocus } from '@splunk/wdio-functional-test-runner/utils';

const fixtureSelector = '[data-test="color-fixture"]';
const toggleSelector = `${fixtureSelector} [data-test="toggle"]`;

function getBackgroundColor(element) {
    return element.getCssProperty('background-color').parsed.hex;
}

describe('Color', () => {
    let popoverSelector;
    afterEach(() => {
        popoverSelector = null;
    });

    function open() {
        browser.click(toggleSelector);
        popoverSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(popoverSelector);
    }

    it('honors the default color', () => {
        assert.strictEqual(getBackgroundColor(browser.$(toggleSelector)), '#000000');
    });

    it('can be opened with the keyboard', () => {
        resetFocus();
        browser.keys(['Tab', 'Enter']);
        browser.waitForVisible(`#${browser.getAttribute(toggleSelector, 'aria-owns')}`);
    });

    it('palette in popover has the correct state', () => {
        open();
        const swatchSelector = `${popoverSelector} [data-test="swatch"]`;
        const swatches = browser.$$(swatchSelector);
        assert.isTrue(browser.hasFocus(swatchSelector), 'the first swatch is focused');
        assert.lengthOf(swatches, 2, 'there are two swatches in the palette');
        assert.strictEqual(
            getBackgroundColor(swatches[0]),
            '#cccccc',
            'first swatch has the correct background color as defined by the palette'
        );
        assert.strictEqual(
            getBackgroundColor(swatches[1]),
            '#ffffff',
            'second swatch has the correct background color as defined by the palette'
        );
    });

    it('textbox in popover has the correct state', () => {
        open();
        const inputSelector = `${popoverSelector} [data-test="textbox"]`;
        assert.strictEqual(
            browser.getAttribute(inputSelector, 'value'),
            '000000',
            'textbox has the correct value with leading # stripped'
        );
        assert.strictEqual(
            getBackgroundColor(browser.$(`${popoverSelector} [data-test="textbox-swatch"]`)),
            '#000000',
            'textbox swatch has same color as textbox'
        );
    });

    it('closes on click away', () => {
        open();
        browser.click('[data-test="away"]');
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.isFalse(browser.hasFocus(toggleSelector), 'toggle does not take focus');
    });

    it('updates correctly when second swatch is clicked', () => {
        open();
        browser.click(`${popoverSelector} [data-test="swatch"][data-test-value="#FFFFFF"]`);
        assert.strictEqual(
            getBackgroundColor(browser.$(toggleSelector)),
            '#ffffff',
            'toggle has updated background color'
        );
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            '#FFFFFF',
            'input value has updated'
        );
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.isTrue(browser.hasFocus(toggleSelector), 'focus is on the toggle');
    });

    it('entering a custom color in the textbox and clicking away sets the color', () => {
        open();

        setTextValue(`${popoverSelector} [data-test="textbox"]`, '666666');
        assert.equal(
            getBackgroundColor(browser.$(`${popoverSelector} [data-test="textbox-swatch"]`)),
            '#666666',
            'textbox swatch relects custom color'
        );
        browser.click('[data-test="away"]');
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.strictEqual(
            getBackgroundColor(browser.$(toggleSelector)),
            '#666666',
            'toggle background reflects custom color'
        );
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            '#666666',
            'input value has updated'
        );
        assert.isFalse(browser.hasFocus(toggleSelector), 'focus is on the toggle');
    });

    it('entering a custom color and clicking on the adjacent input button sets the color', () => {
        open();
        setTextValue(`${popoverSelector} [data-test="textbox"]`, 'ebb7d0');
        browser.click(`${popoverSelector} [data-test="textbox-swatch"]`);
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.strictEqual(
            getBackgroundColor(browser.$(toggleSelector)),
            '#ebb7d0',
            'toggle background reflects custom color'
        );
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            '#ebb7d0',
            'input value has updated'
        );
        assert.isTrue(browser.hasFocus(toggleSelector), 'focus is on the toggle');
    });

    it('entering a custom color followed by the ESC key does not set the color', () => {
        open();
        setTextValue(`${popoverSelector} [data-test="textbox"]`, 'd85e3d');
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(popoverSelector));
        assert.strictEqual(
            getBackgroundColor(browser.$(toggleSelector)),
            '#000000',
            'background color of toggle has not changed'
        );
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-value'),
            '#000000',
            'input value has not changed'
        );
        assert.isTrue(browser.hasFocus(toggleSelector), 'focus is on the toggle');
    });

    // TODO: investigate why this one isn't working on IE
    if (!isIE()) {
        it('entering a custom color followed by the ENTER key sets the color', () => {
            open();
            setTextValue(`${popoverSelector} [data-test="textbox"]`, '956e96');
            browser.keys('Enter');
            browser.waitUntil(() => !browser.isVisible(popoverSelector));
            assert.strictEqual(
                getBackgroundColor(browser.$(toggleSelector)),
                '#956e96',
                'background color of toggle has updated'
            );
            assert.strictEqual(
                browser.getAttribute(fixtureSelector, 'data-test-value'),
                '#956e96',
                'input value has updated'
            );
            assert.isTrue(browser.hasFocus(toggleSelector), 'focus is on the toggle');
        });
    }

    describe('accessibility', () => {
        it('provides a reference to the control group label', () => {
            const labelId = browser.getAttribute(toggleSelector, 'aria-labelledby');
            assert.strictEqual(
                browser.getText(`#${labelId}`),
                'a label',
                'The toggle has the correct labelledby attribute.'
            );
        });

        it('provides a reference to the control group help text', () => {
            const helpId = browser.getAttribute(toggleSelector, 'aria-describedby');
            assert.strictEqual(
                browser.getText(`#${helpId}`),
                'a description',
                'The toggle has the correct describedby attribute.'
            );
        });
    });
});
