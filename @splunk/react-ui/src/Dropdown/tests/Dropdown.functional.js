/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const toggleSelector = '[data-test="toggle"]';
const insideSelector = '[data-test="inside"]';

describe('Dropdown', () => {
    it('opens when the toggle is clicked', () => {
        assert.isFalse(browser.isVisible(insideSelector));
        browser.click(toggleSelector);
        browser.waitForVisible(insideSelector);
    });

    it('closes and shifts focus to toggle when closed by click on toggle', () => {
        browser.click(toggleSelector);
        browser.waitForVisible(insideSelector);
        browser.click(toggleSelector);
        browser.waitUntil(() => !browser.isVisible(insideSelector));
        assert.isTrue(browser.hasFocus(toggleSelector));
    });

    it('closes and shifts focus to toggle when closed by escape key', () => {
        browser.click(toggleSelector);
        browser.waitForVisible(insideSelector);
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(insideSelector));
        assert.isTrue(browser.hasFocus(toggleSelector));
    });

    // SUI-381 Dropdowns do not trigger a close when clicking certain elements
    it('closes on clickAway, even for dynamic elements', () => {
        browser.click(toggleSelector);
        browser.waitForVisible(insideSelector);

        browser.click('[data-test="outside-switch"]');
        browser.waitUntil(() => !browser.isVisible(insideSelector));
    });

    it('has the correct accessibility attributes', () => {
        assert.strictEqual(
            browser.getAttribute(toggleSelector, 'aria-expanded'),
            'false',
            '`aria-expanded` is "false"'
        );
        assert.strictEqual(
            browser.getAttribute(toggleSelector, 'aria-haspopup'),
            'true',
            '`aria-haspopup` is true'
        );
        const popoverSelector = `#${browser.getAttribute(toggleSelector, 'aria-owns')}`;
        assert.isFalse(browser.isVisible(popoverSelector), 'The popover is not open.');
        browser.click(toggleSelector);
        browser.waitForVisible(popoverSelector);
        assert.strictEqual(
            browser.getAttribute(popoverSelector, 'aria-labelledby'),
            browser.getAttribute(toggleSelector, 'id'),
            'The popover is labeled by the toggle.'
        );
        assert.strictEqual(
            browser.getAttribute(toggleSelector, 'aria-expanded'),
            'true',
            '`aria-expanded is "true"`'
        );
    });
});
