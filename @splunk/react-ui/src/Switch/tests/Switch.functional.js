/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const switchSelector = '[data-test="switch-fixture"]';
const switchButtonSelector = `${switchSelector} [data-test="button"]`;
const switchLabelSelector = `${switchSelector} [data-test="label"]`;

describe('Switch', () => {
    it('switches state on button click', () => {
        browser.click(switchButtonSelector);
        assert.strictEqual(browser.getAttribute(switchButtonSelector, 'aria-checked'), 'true');
    });

    it('switches state on label click', () => {
        browser.click(switchLabelSelector);
        assert.strictEqual(browser.getAttribute(switchButtonSelector, 'aria-checked'), 'true');
    });
});
