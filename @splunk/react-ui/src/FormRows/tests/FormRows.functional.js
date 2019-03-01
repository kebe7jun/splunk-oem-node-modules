/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isIE, resetFocus } from '@splunk/wdio-functional-test-runner/utils';

const fixtureSelector = '[data-test="formrows-fixture"]';

describe('FormRows', () => {
    it('rows can be added', () => {
        assert.lengthOf(browser.$$(`${fixtureSelector} [data-test="row"]`), 2);
        browser.click(`${fixtureSelector} [data-test="add-row"]`);
        assert.lengthOf(browser.$$(`${fixtureSelector} [data-test="row"]`), 3);
    });

    it('rows can be removed', () => {
        browser.click(`${fixtureSelector} [data-test-row="1"] [data-test="remove"]`);
        assert.isTrue(
            browser.isVisible(`${fixtureSelector} [data-test-row="0"]`),
            'Row "0" is still visible.'
        );
        assert.isFalse(
            browser.isVisible(`${fixtureSelector} [data-test-row="1"]`),
            'Row "1" has been removed.'
        );
    });

    it('rows can be sorted with the keyboard', () => {
        // Verify initial row order.
        let rows = browser.$$('[data-test="row"]');
        assert.strictEqual(rows[0].getAttribute('data-test-row'), '0');
        assert.strictEqual(rows[1].getAttribute('data-test-row'), '1');

        // Move the first row down.
        resetFocus();
        browser.keys(['Tab', 'ArrowDown']);

        // Verify row order has changed.
        rows = browser.$$('[data-test="row"]');
        assert.strictEqual(rows[0].getAttribute('data-test-row'), '1');
        assert.strictEqual(rows[1].getAttribute('data-test-row'), '0');
    });

    if (!isIE()) {
        it('rows can be sorted with the mouse', () => {
            // Verify initial row order.
            let rows = browser.$$('[data-test="row"]');
            assert.strictEqual(rows[0].getAttribute('data-test-row'), '0');
            assert.strictEqual(rows[1].getAttribute('data-test-row'), '1');

            // Move the first row below the second.
            // TODO: `moveToObject` has been deprecated, but the alternative is unclear.
            browser.moveToObject(
                `${fixtureSelector} [data-test-row="0"] [data-test="drag-handle"]`
            );
            browser.buttonDown();
            browser.moveToObject(`${fixtureSelector} [data-test="add-row"]`);
            browser.buttonUp();

            // Verify row order has changed.
            rows = browser.$$('[data-test="row"]');
            assert.strictEqual(rows[0].getAttribute('data-test-row'), '1');
            assert.strictEqual(rows[1].getAttribute('data-test-row'), '0');
        });
    }
});
