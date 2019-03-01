/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { resetFocus } from '@splunk/wdio-functional-test-runner/utils';

describe('Table Resizable', () => {
    browser.setViewportSize({ width: 800, height: 600 });

    const fixtureSelector = '[data-test="docking-table-fixture"]';

    const dockedTableHeadSelector = `${fixtureSelector}  [data-test="docked-head-table"]`;
    const tableSelector = `${fixtureSelector}  [data-test="main-table"]`;
    const focusableContentSelector = `${fixtureSelector}  [data-test="focusable-content"]`;
    const dockedScrollSelector = `${fixtureSelector}  [data-test="docked-scroll-bar"]`;
    const dockedScrollContentSelector = `${fixtureSelector}  [data-test="docked-scroll-content"]`;

    const endSelector = `${fixtureSelector} [data-test="end"]`;

    it('initializes correctly', () => {
        // confirm initial state
        assert.isFalse(browser.isExisting(dockedTableHeadSelector), 'Table Head is not docked.');
        assert.isTrue(browser.isExisting(dockedScrollSelector), 'Scroll Bar is docked.');
    });

    it('synchonized scroll positions', () => {
        // focus on content and scroll to middle
        resetFocus();
        browser.keys(['Tab']); // this probably scrolls to the middle of the page...
        browser.scroll(focusableContentSelector); // ...but just to be sure.
        assert.isTrue(browser.isExisting(dockedTableHeadSelector), 'Table Head is docked.');

        // scroll to the right
        const startingHeadX = browser.getLocation(dockedTableHeadSelector).x;
        const startingTableX = browser.getLocation(tableSelector).x;
        const startingDockedContentX = browser.getLocation(dockedScrollContentSelector).x;

        browser.keys(['ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight']);

        assert.isAbove(
            startingHeadX,
            browser.getLocation(dockedTableHeadSelector).x,
            'Table Head did scroll'
        );
        assert.isAbove(
            startingTableX,
            browser.getLocation(tableSelector).x,
            ' Main Table did scroll'
        );
        assert.isAbove(
            startingDockedContentX,
            browser.getLocation(dockedScrollContentSelector).x,
            'Docked Scroll Bar did scroll'
        );
    });

    it('scroll bar undocks when scrolled to bottom', () => {
        browser.scroll(endSelector);
        assert.isFalse(browser.isExisting(dockedScrollSelector), 'Scroll Bar is not docked.');
    });
});
