/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isIE, resetFocus, focusOnSelector } from '@splunk/wdio-functional-test-runner/utils';

describe('TabBar', () => {
    const fixtureSelector = '[data-test="tab-bar-fixture"]';

    function tabSelector(tabId) {
        return `${fixtureSelector} [data-test-tab-id="${tabId}"]`;
    }

    function popoverSelector(tabId) {
        return `#${browser.getAttribute(tabSelector(tabId), 'data-test-popover-id')}`;
    }

    function assertActive(tabId) {
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-active-tab-id'),
            tabId,
            `The data-test-active-tab-id attribute is "${tabId}"`
        );
        assert.strictEqual(
            browser.getAttribute(tabSelector(tabId), 'aria-selected'),
            'true',
            `Tab ${tabId} is active`
        );
    }

    function assertNotActive(tabId) {
        assert.notStrictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-active-tab-id'),
            tabId,
            `The data-test-active-tab-id attribute is not "${tabId}"`
        );
        assert.strictEqual(
            browser.getAttribute(tabSelector(tabId), 'aria-selected'),
            'false',
            `Tab ${tabId} is active`
        );
    }

    it('has the correct initial state', () => {
        assertNotActive('one');
        assertActive('two');
        assertNotActive('three');
    });

    it('tab can be selected with click', () => {
        browser.click(`${fixtureSelector} [data-test-tab-id="one"]`);
        assertActive('one');
        assertNotActive('two');
        assertNotActive('three');
    });

    it('tab can be selected with the keyboard', () => {
        resetFocus();
        browser.keys('Tab');
        assert.isTrue(browser.hasFocus(tabSelector('one')), 'Tab "one" has focus');
        browser.keys('Enter');
        assertActive('one');
        assertNotActive('two');
        assertNotActive('three');
    });

    it('active tab does not take focus', () => {
        resetFocus();
        browser.keys('Tab');
        assert.isTrue(browser.hasFocus(tabSelector('one')), 'Tab "one" has focus');
        browser.keys('Tab');
        assert.isTrue(browser.hasFocus(tabSelector('three')), 'Tab "three" has focus');
    });

    it('tooltip is closed initially', () => {
        assert.isFalse(browser.isVisible(popoverSelector('two'), 'The popover is not visible'));
    });

    if (!isIE()) {
        it('tooltip opens on hover, has the correct content, and closes when the mouse moves away', () => {
            browser.moveToObject(tabSelector('two'));
            browser.waitForVisible(popoverSelector('two'));
            assert.strictEqual(
                browser.getText(popoverSelector('two')).trim(),
                'I explain the obscure label.',
                'The tooltip content is correct'
            );
            browser.moveToObject(tabSelector('three'));
            browser.waitUntil(() => !browser.isVisible(popoverSelector('two')));
        });
    }

    it('tooltip opens on focus and closes on blur', () => {
        focusOnSelector(tabSelector('two'));
        browser.waitForVisible(popoverSelector('two'));

        focusOnSelector(tabSelector('three'));
        browser.waitUntil(() => !browser.isVisible(popoverSelector('two')));
    });
});
