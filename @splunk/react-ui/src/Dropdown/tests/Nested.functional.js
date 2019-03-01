/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('Nested Dropdown', () => {
    it('closes popovers on toggle clicks', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestedDropdown');
        browser.$('#nestedToggle').click();
        browser.waitForVisible('#nestedPopover');

        browser.$('#nestedToggle').click();
        browser.waitUntil(() => !browser.isVisible('#nestedPopover'));

        browser.$('#topToggle').click();
        browser.waitUntil(() => !browser.isVisible('#topPopover'));
    });

    it('closes all popovers on top toggle click', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestedDropdown');
        browser.$('#nestedToggle').click();
        browser.waitForVisible('#nestedPopover');

        browser.$('#topToggle').click();
        browser.waitUntil(() => !browser.isVisible('#nestedPopover'));
        browser.waitUntil(() => !browser.isVisible('#topPopover'));
    });

    it('closes popovers in order on Esc', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestedDropdown');
        browser.$('#nestedToggle').click();
        browser.waitForVisible('#nestedPopover');

        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible('#nestedPopover'));
        assert.isTrue(browser.hasFocus('#nestedToggle'));

        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible('#topPopover'));
        assert.isTrue(browser.hasFocus('#topToggle'));
    });

    it('closes nested popover only on nested toggle click', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestedDropdown');
        browser.$('#nestedToggle').click();
        browser.waitForVisible('#nestedPopover');

        browser.$('#nestedToggle').click();
        browser.waitUntil(() => !browser.isVisible('#nestedPopover'));
        assert.isTrue(browser.hasFocus('#nestedToggle'));
    });

    it('closes nested popover only on nested popover click', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestedDropdown');
        browser.$('#nestedToggle').click();
        browser.waitForVisible('#nestedPopover');

        browser.$('#nestedPopover').click();
        browser.waitUntil(() => !browser.isVisible('#nestedPopover'));
        assert.isTrue(browser.hasFocus('#nestedToggle'));
    });

    it('closes both popovers on background click', () => {
        browser.$('#topToggle').click();
        browser.waitForVisible('#nestedDropdown');
        browser.$('#nestedToggle').click();
        browser.waitForVisible('#nestedPopover');

        browser.$('body').click();
        browser.waitUntil(() => !browser.isVisible('#nestedPopover'));
        browser.waitUntil(() => !browser.isVisible('#topPopover'));
    });
});
