/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const fixture = '[data-test="fixture"]';
const inputSelector = `${fixture} [data-test="textbox"]`;
const incrementSelector = `${fixture} [data-test="increment"]`;
const decrementSelector = `${fixture} [data-test="decrement"]`;

describe('Number', () => {
    it('supports up/down of value using arrow key', () => {
        browser.$(inputSelector).click();
        assert.equal(browser.getAttribute(fixture, 'data-test-value'), null);
        browser.keys('Up arrow');
        assert.equal(browser.getAttribute(fixture, 'data-test-value'), '1');
        browser.keys('Down arrow');
        assert.equal(browser.getAttribute(fixture, 'data-test-value'), '0');
    });

    it('supports use of the increment and decrement buttons', () => {
        assert.equal(browser.getAttribute(fixture, 'data-test-value'), null);
        browser.click(incrementSelector);
        assert.equal(browser.getAttribute(fixture, 'data-test-value'), '1');
        browser.click(decrementSelector);
        assert.equal(browser.getAttribute(fixture, 'data-test-value'), '0');
    });
});
