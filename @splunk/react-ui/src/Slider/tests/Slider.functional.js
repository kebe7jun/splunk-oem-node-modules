/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { times } from 'lodash';
import { resetFocus } from '@splunk/wdio-functional-test-runner/utils';

const fixtureSelector = '[data-test="slider-fixture"]';
const handleSelector = `${fixtureSelector} [data-test="handle"]`;

describe('Slider', () => {
    it('honors the default value', () => {
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-value'), '300');
    });

    it('can be set with the keyboard', () => {
        resetFocus();
        browser.keys(['Tab', 'ArrowRight']);
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-value'), '325');
    });

    it('honors the maximum', () => {
        resetFocus();
        browser.keys(['Tab']);
        browser.keys(times(15, () => 'ArrowRight'));
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-value'), '500');
    });

    it('honors the minimum', () => {
        resetFocus();
        browser.keys(['Tab']);
        browser.keys(times(15, () => 'ArrowLeft'));
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-value'), '100');
    });

    describe('accessibility', () => {
        it('provides the "role" of the component', () => {
            assert.strictEqual(
                browser.getAttribute(handleSelector, 'role'),
                'slider',
                'The component has the correct role.'
            );
        });

        it('provides the max value', () => {
            assert.strictEqual(
                browser.getAttribute(handleSelector, 'aria-valuemax'),
                '500',
                'The max value is accessible.'
            );
        });

        it('provides the min value', () => {
            assert.strictEqual(
                browser.getAttribute(handleSelector, 'aria-valuemin'),
                '100',
                'The min value is accessible.'
            );
        });

        it('provides the current value.', () => {
            assert.strictEqual(
                browser.getAttribute(handleSelector, 'aria-valuenow'),
                '300',
                'The current value is accessible.'
            );
        });

        it('provides a reference to the label', () => {
            const labelId = browser.getAttribute(handleSelector, 'aria-labelledby');
            assert.strictEqual(
                browser.getText(`#${labelId}`),
                'a label',
                'The handle has the correct labelledby attribute.'
            );
        });

        it('provides a reference to the description', () => {
            const descriptionId = browser.getAttribute(handleSelector, 'aria-describedby');
            assert.strictEqual(
                browser.getText(`#${descriptionId}`),
                'a description',
                'The handle has the correct describedby attribute.'
            );
        });
    });
});
