/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const fixtureSelector = '[data-test="paginator-fixture"]';

describe('Paginator', () => {
    it('has the correct initial value', () => {
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-current'), '5');
    });

    it('updates when "next" is clicked', () => {
        browser.click(`${fixtureSelector} [data-test="next"]`);
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-current'), '6');
    });

    it('updates when "prev" is clicked', () => {
        browser.click(`${fixtureSelector} [data-test="prev"]`);
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-current'), '4');
    });

    it('updates when "last" is clicked', () => {
        browser.click(`${fixtureSelector} [data-test="last"]`);
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-current'), '30');
    });

    it('updates when page 1 is clicked', () => {
        browser.click(`${fixtureSelector} [data-test="page"][data-test-page="1"]`);
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-current'), '1');
    });

    it('updates when page 7 is clicked', () => {
        browser.click(`${fixtureSelector} [data-test="page"][data-test-page="7"]`);
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-current'), '7');
    });

    it('updates when page 3 is clicked', () => {
        browser.click(`${fixtureSelector} [data-test="page"][data-test-page="3"]`);
        assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-current'), '3');
    });
});
