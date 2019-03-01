/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus } from '@splunk/wdio-functional-test-runner/utils';

const fixtureSelector = '[data-test="accordion-fixture"]';

function panelSelector(panelId) {
    return `${fixtureSelector} [data-test-panel-id="${panelId}"]`;
}

function toggleSelector(panelId) {
    return `${panelSelector(panelId)} [data-test="toggle"]`;
}
function containerSelector(panelId) {
    return `${panelSelector(panelId)} [data-test="body"]`;
}

function assertPanelOpen(panelId) {
    assert.strictEqual(
        browser.getAttribute(fixtureSelector, 'data-test-open-panel-id'),
        panelId.toString(),
        `The open panelId is ${panelId}`
    );
    assert.isTrue(browser.isVisible(containerSelector(panelId)));
}

function assertPanelClosed(panelId) {
    assert.isFalse(browser.isVisible(containerSelector(panelId)));
}

function waitUntilPanelClosed(panelId) {
    browser.waitUntil(() => !browser.isVisible(containerSelector(panelId)));
}

describe('Basic Accordion', () => {
    it('starts with panel 2 open and the rest closed', () => {
        assertPanelClosed(1);
        assertPanelOpen(2);
        assertPanelClosed(3);
    });

    it('opens panel 1 when clicked on', () => {
        browser.click(toggleSelector(1));
        waitUntilPanelClosed(2);
        assertPanelOpen(1);
        assertPanelClosed(2);
        assertPanelClosed(3);
    });

    it('can open panel 1 with the keyboard', () => {
        resetFocus();
        browser.keys(['Tab', 'Enter']);
        waitUntilPanelClosed(2);
        assertPanelOpen(1);
        assertPanelClosed(2);
        assertPanelClosed(3);
    });
});
