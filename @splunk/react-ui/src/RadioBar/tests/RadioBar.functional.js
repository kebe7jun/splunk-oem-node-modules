/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus } from '@splunk/wdio-functional-test-runner/utils';

describe('RadioBar', () => {
    const radioBarSelector = '[data-test="radio-bar-fixture"]';

    function optionSelector(value) {
        return `${radioBarSelector} [data-test="option"][data-test-value="${value}"]`;
    }

    function assertSelected(value) {
        assert.strictEqual(
            browser.getAttribute(radioBarSelector, 'data-test-value'),
            value,
            'The data-test-value attribute is correct'
        );
        assert.strictEqual(
            browser.getAttribute(optionSelector(value), 'aria-checked'),
            'true',
            'The selected button has the correct aria attribute'
        );
    }

    function assertNotSelected(value) {
        assert.strictEqual(
            browser.getAttribute(optionSelector(value), 'aria-checked'),
            'false',
            `The ${value} button is not selected`
        );
    }

    it('has the correct default state', () => {
        assertNotSelected('1');
        assertSelected('2');
        assertNotSelected('3');
    });

    it('updates when an option is selected with the mouse', () => {
        browser.click(optionSelector('1'));
        assertSelected('1');
        assertNotSelected('2');
        assertNotSelected('3');
    });

    it('updates when an option is selected with the keyboard', () => {
        resetFocus();
        browser.keys(['Tab']);
        assert.isTrue(browser.hasFocus(optionSelector('1')));
        browser.keys(['Enter']);
        assertSelected('1');
        assertNotSelected('2');
        assertNotSelected('3');
    });

    it('does not allow selection of disabled option with the mouse', () => {
        browser.click(optionSelector('3'));
        assertNotSelected('1');
        assertSelected('2');
        assertNotSelected('3');
    });

    it('does not allow selection of disabled option with the keyboard', () => {
        resetFocus();
        browser.keys(['Tab']);
        assert.isTrue(browser.hasFocus(optionSelector('1')));
        browser.keys(['Tab']);
        assert.isFalse(
            browser.hasFocus(optionSelector('2')),
            'The current value is to focusable with the keyboard'
        );
        assert.isFalse(
            browser.hasFocus(optionSelector('3')),
            'A disabled value is not focusable with the keyboard'
        );
    });

    it('has correct accessibility attributes', () => {
        assert.strictEqual(
            browser.getAttribute(radioBarSelector, 'role'),
            'radiogroup',
            'The container has the correct role'
        );
        assert.lengthOf(browser.$$(`${radioBarSelector} [role="radio"]`), 3, 'There are 3 radios');
        assert.strictEqual(
            browser.getAttribute(optionSelector('3'), 'disabled'),
            'true',
            'The third option is disabled'
        );
    });
});
