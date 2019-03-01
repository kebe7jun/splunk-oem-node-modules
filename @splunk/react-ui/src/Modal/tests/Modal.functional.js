/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

// Selectors added to the fixture to uniquely identify various elements.
const toggleSelector = '[data-test="modal-toggle"]';
const fixtureSelector = '[data-test="modal-fixture"]';
const selectSelector = '[data-test="super-select"]';
const selectToggleSelector = `${selectSelector} [data-test="toggle"]`;

function open() {
    browser.$(toggleSelector).click();
    browser.waitForVisible(fixtureSelector);
}

function waitForModalRemoval() {
    browser.waitUntil(() => !browser.isVisible(fixtureSelector));
}

function assertModalOpenAndNotClosing() {
    assert.isTrue(browser.isVisible(fixtureSelector), 'The modal is open.');
    // The fixture uses a data attribute to surface the open state. This is checked to ensure
    // that the modal is not only open, but that it is not animating closed either.
    assert.strictEqual(
        browser.getAttribute(fixtureSelector, 'data-test-open'),
        'true',
        'The modal is not closing.'
    );
}

describe('Modal', () => {
    it('can be opened', () => {
        assert.isFalse(browser.isVisible(fixtureSelector), 'The Modal is not visible.');
        open();
        assert.isTrue(browser.isVisible(fixtureSelector), 'The Modal is visible after opening.');
    });

    it('closes when ESC key used', () => {
        open();
        browser.keys('Escape');
        waitForModalRemoval();
    });

    it('closes on body click', () => {
        open();
        browser.$('body').click();
        waitForModalRemoval();
    });

    it('closes when header close button is clicked', () => {
        open();
        browser.$(`${fixtureSelector} [data-test="header"] [data-test="close"]`).click();
        waitForModalRemoval();
    });

    it('focuses on first focusable element on Tab key', () => {
        open();
        browser.keys('Tab');
        assert.isTrue(
            browser.hasFocus(`${fixtureSelector} [data-test="header"] [data-test="close"]`),
            'Focus is on the header close button.'
        );
    });

    it('does not close when modal body content clicked', () => {
        open();
        browser.$(`${fixtureSelector} [data-test="random-list"]`).click();
        assertModalOpenAndNotClosing();
    });

    it('does not close with select item click', () => {
        open();
        browser.$(selectToggleSelector).click();
        const menuSelector = `#${browser.getAttribute(selectSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(menuSelector);
        browser.click(`${menuSelector} [data-test="option"][data-test-value="1"]`);
        assertModalOpenAndNotClosing();
    });

    it('does not close when select closed with ESC key', () => {
        open();
        browser.click(selectToggleSelector);
        const menuSelector = `#${browser.getAttribute(selectSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(menuSelector);
        browser.keys('Escape');
        browser.waitUntil(() => !browser.isVisible(menuSelector));
        assertModalOpenAndNotClosing();
    });
});
