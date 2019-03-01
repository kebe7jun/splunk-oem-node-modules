/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { range } from 'lodash';

describe('SlidingPanels in Dropdown', () => {
    const fixtureSelector = '[data-test="sliding-panels-in-dropdown-fixture"]';
    let popoverSelector;
    afterEach(() => {
        popoverSelector = null;
    });

    function panelSelector(panelId) {
        return `${popoverSelector} [data-test-panel-id="${panelId}"]`;
    }

    function open() {
        browser.click(`${fixtureSelector} [data-test="toggle"]`);
        popoverSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(popoverSelector);
    }

    function assertPanelOneRenderedCorrectly() {
        assert.lengthOf(
            browser.$$(`${panelSelector('one')} [data-test="item"]`),
            10,
            'There are ten menu items'
        );
        range(10).forEach(val => {
            assert.isTrue(
                browser.isVisible(`${panelSelector('one')} [data-test="item"][value="${val}"]`),
                `Menu item ${val} is visible`
            );
        });
    }

    function assertPanelTwoRenderedCorrectly() {
        assert.lengthOf(
            browser.$$(`${panelSelector('two')} [data-test="item"]`),
            9,
            'There are nine menu items'
        );
        range(9).forEach(val => {
            assert.isTrue(
                browser.isVisible(`${panelSelector('two')} [data-test="item"][value="${val}"]`),
                `Menu item ${val} is visible`
            );
        });
    }

    it('initial state', () => {
        open();
        assert.isTrue(browser.isVisible(panelSelector('one')), 'Panel "one" is open');
        assert.isFalse(browser.isVisible(panelSelector('two')), 'Panel "two is closed"');
        assertPanelOneRenderedCorrectly();
    });

    it('navigate forward and backward', () => {
        open();

        // Click a menu item to advance to the secondary menu.
        browser.click(`${panelSelector('one')} [data-test="item"][value="1"]`);

        // Wait for panel "one" to transition out and panel "two" to transition in.
        browser.waitForExist(panelSelector('one'), 10000, true);
        browser.waitForExist(panelSelector('two'));

        assertPanelTwoRenderedCorrectly();

        // Click the back button
        browser.click(`${panelSelector('two')} [data-test="back"]`);

        // Wait for panel "two" to transition out and panel "one" to transition in.
        browser.waitForExist(panelSelector('two'), 10000, true);
        browser.waitForExist(panelSelector('one'));

        assertPanelOneRenderedCorrectly();
    });
});
