/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isFirefox, setTextValue } from '@splunk/wdio-functional-test-runner/utils';

describe('Multiselect:Arbitrary Values', () => {
    const defaultValues = ['1', '2'];
    const fixtureSelector = '[data-test="arbitrary-multiselect-fixture"]';
    const textboxSelector = `${fixtureSelector} [data-test="textbox"]`;

    function assertSelectedOptionVisible(value) {
        assert.isTrue(
            browser.isVisible(
                `${fixtureSelector} [data-test="selected-option"][data-test-value="${value}"]`
            ),
            `${value} is selected`
        );
    }

    function assertSelectedOptions(expected) {
        // Check that the test attribute has the correct data.
        const actual = JSON.parse(browser.getAttribute(fixtureSelector, 'data-test-values'));
        assert.deepEqual(actual, expected, 'The selected values are as expected');

        // Check that a selected option button exists for each expected value.
        expected.forEach(assertSelectedOptionVisible);
    }

    it('allows arbitrary values', () => {
        setTextValue(textboxSelector, 'not-an-option');
        browser.keys('Enter');
        assertSelectedOptions(defaultValues.concat('not-an-option'));

        // TODO: reactivate once firefox >= 48 is used for functional testing
        if (!isFirefox()) {
            setTextValue(textboxSelector, 'still-not-an-option');
            const menuSelector = `#${browser.getAttribute(
                fixtureSelector,
                'data-test-popover-id'
            )}`;
            browser.click(
                `${menuSelector} [data-test="option"][data-test-value="still-not-an-option"]`
            );
            assertSelectedOptions(defaultValues.concat('not-an-option', 'still-not-an-option'));
        }
    });
});
