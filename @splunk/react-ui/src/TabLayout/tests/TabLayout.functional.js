/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus } from '@splunk/wdio-functional-test-runner/utils';

describe('TabLayout', () => {
    const fixtureSelector = '[data-test="tab-layout-fixture"]';

    function panelSelector(panelId) {
        return `${fixtureSelector} [data-test-panel-id="${panelId}"]`;
    }

    function assertActive(panelId) {
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-active-panel-id'),
            panelId,
            `The data-test-active-panel-id attribute is "${panelId}"`
        );
        assert.isTrue(browser.isVisible(panelSelector(panelId)), `Panel ${panelId} is visible`);
    }

    function assertNotActive(panelId) {
        assert.notStrictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-active-panel-id'),
            panelId,
            `The data-test-active-panel-id attribute is not "${panelId}"`
        );
        assert.isFalse(browser.isVisible(panelSelector(panelId)), `Tab ${panelId} is not visible`);
    }

    it('has the correct initial state', () => {
        assertNotActive('one');
        assertActive('two');
        assertNotActive('three');
    });

    it('panel can be selected with click', () => {
        browser.click(`${fixtureSelector} [data-test-tab-id="three"]`);
        assertNotActive('one');
        assertNotActive('two');
        assertActive('three');
    });

    it('panel can be selected with keyboard', () => {
        resetFocus();
        browser.keys('Tab');
        assert.isTrue(browser.hasFocus(`${fixtureSelector} [data-test-tab-id="one"]`));
        browser.keys('Enter');
        assertActive('one');
        assertNotActive('two');
        assertNotActive('three');
    });

    it('disabled panel cannot be selected with click', () => {
        browser.click(`${fixtureSelector} [data-test-tab-id="four"]`);
        assertNotActive('one');
        assertActive('two');
        assertNotActive('three');
        assertNotActive('four');
    });

    it('disabled panel cannot be selected with keyboard', () => {
        resetFocus();
        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Tab');
        // the fourth tab is disabled so it should not take focus
        assert.isFalse(browser.hasFocus(`${fixtureSelector} [data-test-tab-id="four"]`));
    });
});
