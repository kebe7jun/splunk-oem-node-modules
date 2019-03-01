/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isIE } from '@splunk/wdio-functional-test-runner/utils';

function click(selector) {
    browser.$(selector).click();
}

function toggleDropAnywhere() {
    click('#toggle');
}

function triggerDragOver() {
    click('#trigger');
}

function toggleDisabled() {
    click('#disable');
}

describe('File', () => {
    if (!isIE()) {
        it('Simulate file drag over medium size with dropAnywhere=true', () => {
            toggleDropAnywhere();
            triggerDragOver();
            browser.waitForVisible('[data-test="file-window-drop"]');
        });
    }

    it('Render File', () => {
        const input = browser.$('[data-test="file-input"]');
        assert.strictEqual(
            input.getAttribute('disabled'),
            null,
            'Input text disabled attr should be null'
        );
    });

    it('Disabled File', () => {
        toggleDisabled();
        const input = browser.$('[data-test="file-input"]');
        assert.strictEqual(
            input.getAttribute('disabled'),
            'true',
            'Input text disabled attr should be true'
        );
    });
});
