/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus } from '@splunk/wdio-functional-test-runner/utils';

function toggleSelector(panelId) {
    return `[data-test="panel-${panelId}"] [data-test="toggle"]`;
}

function containerSelector(panelId) {
    return `[data-test="panel-${panelId}"] [data-test="body"]`;
}

function assertPanelOpen(panelId) {
    assert.isTrue(browser.$(containerSelector(panelId)).isVisible());
}

function assertPanelClosed(panelId) {
    assert.isFalse(browser.$(containerSelector(panelId)).isVisible());
}

function waitUntilPanelClosed(panelId) {
    browser.waitUntil(() => !browser.$(containerSelector(panelId)).isVisible());
}

describe('Multiple CollapsiblePanels', () => {
    it('can be opened and closed clicking', () => {
        browser.click(toggleSelector(1));
        assertPanelOpen(1);
        assertPanelClosed(2);
        assertPanelClosed(3);
        browser.click(toggleSelector(2));
        assertPanelOpen(1);
        assertPanelOpen(2);
        assertPanelClosed(3);
        browser.click(toggleSelector(1));
        browser.click(toggleSelector(2));
        waitUntilPanelClosed(1);
        waitUntilPanelClosed(2);
        assertPanelClosed(3);
        browser.click(toggleSelector(3));
        assertPanelClosed(1);
        assertPanelClosed(2);
        assertPanelOpen(3);
    });

    it('can be opened and closed with the keyboard', () => {
        resetFocus();
        browser.keys(['Tab', 'Tab', 'Enter']);
        assertPanelClosed(1);
        assertPanelOpen(2);
        assertPanelClosed(3);
        browser.keys(['Enter', 'Tab', 'Enter']);
        assertPanelClosed(1);
        waitUntilPanelClosed(2);
        assertPanelOpen(3);
    });

    it('keeps focus on the Header button after opening', () => {
        browser.click(toggleSelector(1));
        assert.isTrue(browser.hasFocus(toggleSelector(1)));
    });
});
