/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('SlidingPanels', () => {
    const fixtureSelector = '[data-test="sliding-panels-fixture"]';

    function panelSelector(panelId) {
        return `${fixtureSelector} [data-test-panel-id="${panelId}"]`;
    }

    function assertActivePanel(panelId) {
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-active-panel-id'),
            panelId,
            `Panel ${panelId} is active`
        );
    }

    it('initial state', () => {
        assert.isTrue(browser.isVisible(panelSelector('one')));
        assert.isFalse(browser.isVisible(panelSelector('two')));
        assertActivePanel('one');
    });

    it('transition forward', () => {
        browser.click('[data-test="forward"]');
        assertActivePanel('two');
        browser.waitForExist(panelSelector('one'), 10000, true);
        browser.waitForExist(panelSelector('two'));
    });

    it('transition backward', () => {
        browser.click('[data-test="backward"]');
        assertActivePanel('two');
        browser.waitForExist(panelSelector('one'), 10000, true);
        browser.waitForExist(panelSelector('two'));
    });
});
