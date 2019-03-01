/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const fixtureSelector = '[data-test="sidepanel-fixture"]';
const openSelector = `${fixtureSelector} [data-test="open"]`;

const panelSelector = '[data-test="side-panel"]';
const contentSelector = `${panelSelector} [data-test="content"]`;
const contentSelectSelector = `${panelSelector} [data-test="content-select"]`;
const contentSelectToggleSelector = `${contentSelectSelector} [data-test="toggle"]`;

describe('SidePanel', () => {
    const open = () => {
        browser.click(openSelector);
        browser.waitForVisible(panelSelector);
    };

    const checkOpenAndNotClosing = () => {
        assert.isTrue(browser.isVisible(panelSelector));
        assert.strictEqual(browser.getAttribute(panelSelector, 'data-test-open'), 'true');
    };

    it('Closes on click away', () => {
        open();
        browser.moveToObject('body', 10, 10);
        browser.leftClick();
        browser.waitUntil(() => !browser.isVisible(panelSelector));
    });

    it('Closes on ESC key', () => {
        open();
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(panelSelector));
    });

    it("Doesn't close on side panel content click", () => {
        open();
        browser.click(contentSelector);
        checkOpenAndNotClosing();
    });

    it("Doesn't close on side panel select item click", () => {
        open();
        browser.click(contentSelectToggleSelector);
        const menuSelector = `#${browser.getAttribute(
            contentSelectSelector,
            'data-test-popover-id'
        )}`;
        browser.waitForVisible(menuSelector);
        browser.click(`${menuSelector} [data-test="option"][data-test-value="1"]`);
        checkOpenAndNotClosing();
    });

    it("Doesn't close if select closed with ESC key", () => {
        open();
        browser.click(contentSelectToggleSelector);
        const menuSelector = `#${browser.getAttribute(
            contentSelectSelector,
            'data-test-popover-id'
        )}`;
        browser.waitForVisible(menuSelector);
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(menuSelector));
        checkOpenAndNotClosing();
    });
});
