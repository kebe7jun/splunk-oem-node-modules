/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus } from '@splunk/wdio-functional-test-runner/utils';

describe('RadioBar', () => {
    const radioListSelector = '[data-test="radio-list-fixture"]';

    function optionSelector(value) {
        return `${radioListSelector} [data-test="option"][data-test-value="${value}"]`;
    }

    function assertSelected(value) {
        assert.strictEqual(
            browser.getAttribute(radioListSelector, 'data-test-value'),
            value,
            'The data-test-value attribute is correct'
        );
        assert.strictEqual(
            browser.getAttribute(optionSelector(value), 'data-test-selected'),
            'true',
            'The selected button has the correct aria attribute'
        );
    }

    function assertNotSelected(value) {
        assert.strictEqual(
            browser.getAttribute(optionSelector(value), 'data-test-selected'),
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
        browser.keys(['Tab', 'Enter']);
        assertSelected('1');
        assertNotSelected('2');
        assertNotSelected('3');
    });
});
