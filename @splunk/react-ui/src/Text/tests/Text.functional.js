/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { setTextValue } from '@splunk/wdio-functional-test-runner/utils';

describe('Text', () => {
    describe('uncontrolled', () => {
        const fixtureSelector = '[data-test="uncontrolled-text"]';
        const textboxSelector = `${fixtureSelector} [data-test="textbox"]`;

        function assertValue(expected) {
            assert.strictEqual(browser.getValue(textboxSelector), expected);
            assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-value'), expected);
        }

        it('honors the defaultValue', () => {
            assertValue('Hello');
        });

        it('value can be cleared and set', () => {
            // Click on textbox to give it focus.
            browser.click(textboxSelector);
            browser.click(`${fixtureSelector} [data-test="clear"]`);
            assertValue('');

            setTextValue(textboxSelector, 'goodbye');
            assertValue('goodbye');
        });
    });

    describe('controlled', () => {
        const fixtureSelector = '[data-test="controlled-text"]';
        const textboxSelector = `${fixtureSelector} [data-test="textbox"]`;

        function assertValue(expected) {
            assert.strictEqual(browser.getValue(textboxSelector), expected);
            assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-value'), expected);
        }

        it('has the correct initial value', () => {
            assertValue('Hello');
        });

        it('value can be cleared and set', () => {
            // Click on textbox to give it focus.
            browser.click(textboxSelector);
            browser.click(`${fixtureSelector} [data-test="clear"]`);
            assertValue('');

            setTextValue(textboxSelector, 'goodbye');
            assertValue('goodbye');
        });
    });
});
