/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('Popover', () => {
    it('First element takes focus if takeFocus enabled', () => {
        browser.click('[data-test="popover-taking-focus-anchor"]');
        browser.waitForVisible('[data-test="popover-taking-focus"]');
        assert.isTrue(browser.hasFocus('[data-test="popover-taking-focus-button"]'));
    });

    it("First element doesn't take focus if takeFocus disabled", () => {
        browser.click('[data-test="popover-not-taking-focus-anchor"]');
        browser.waitForVisible('[data-test="popover-not-taking-focus"]');
        assert.isFalse(browser.hasFocus('[data-test="popover-not-taking-focus-button"]'));
    });

    it('Container takes focus if text-only contents and takeFocus enabled', () => {
        browser.click('[data-test="popover-taking-focus-text-only-anchor"]');
        browser.waitForVisible('[data-test="popover-taking-focus-text-only"]');
        assert.isTrue(browser.hasFocus('[data-test="popover-taking-focus-text-only"]'));
    });
});
