/* global browser */
/* eslint-env mocha */

import _ from 'lodash';
import { assert } from 'chai';

describe('Basic Link', () => {
    it('Navigates to link on click', () => {
        browser.$('[data-test="link_regular"]').click();
        browser.waitUntil(() => browser.getUrl() === 'https://duckduckgo.com/');
    });

    it('Navigates to link in new tab on click', () => {
        const testUrl = browser.getUrl();
        const testTabId = browser.getCurrentTabId();
        assert.equal(browser.getTabIds().length, 1);

        browser.$('[data-test="link_newtab"]').click();
        browser.waitUntil(() => browser.getUrl() === testUrl);
        assert.equal(browser.getTabIds().length, 2);

        const newTabId = _.without(browser.getTabIds(), testTabId)[0];
        browser.switchTab(newTabId);
        browser.waitUntil(() => browser.getUrl() === 'https://duckduckgo.com/');
    });

    it("Doesn't navigate to link on click if link is disabled", () => {
        const testUrl = browser.getUrl();
        const link = browser.$('[data-test="link_disabled"]');

        assert.isFalse(link.isEnabled());
        try {
            link.click();
        } catch (e) {
            // throws InvalidElementState on Firefox
        }
        browser.waitUntil(() => browser.getUrl() === testUrl);
    });
});
