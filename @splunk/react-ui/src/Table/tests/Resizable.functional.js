/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isIE, resetFocus } from '@splunk/wdio-functional-test-runner/utils';

describe('Table Resizable', () => {
    const fixtureSelector = '[data-test="resizable-table-fixture"]';
    const tableSelector = `${fixtureSelector}  [data-test="main-table"]`;

    it('handles keyboard resize', () => {
        resetFocus();

        const initialTableWidth = browser.getElementSize(tableSelector, 'width');
        const initialAgeCellWidth = browser.getElementSize('#age', 'width');

        browser.keys(['Tab', 'Tab', 'ArrowRight', 'ArrowRight']);

        const endTableWidth = browser.getElementSize(tableSelector, 'width');
        const endAgeCellWidth = browser.getElementSize('#age', 'width');

        assert.isAbove(endTableWidth, initialTableWidth, 'Table is now larger');
        assert.isAbove(endAgeCellWidth, initialAgeCellWidth, 'The target column is now larger');
    });

    it('handles double click resize', () => {
        const initialTableWidth = browser.getElementSize(tableSelector, 'width');
        const initialNameCellWidth = browser.getElementSize('#name', 'width');

        browser.doubleClick('#name [data-test="resize"]');

        const endTableWidth = browser.getElementSize(tableSelector, 'width');
        const endNameCellWidth = browser.getElementSize('#name', 'width');

        assert.isBelow(endTableWidth, initialTableWidth, 'Table resized');
        assert.isBelow(endNameCellWidth, initialNameCellWidth, 'Target column resized');
    });

    if (!isIE()) {
        it('handles drag resize', () => {
            const initialTableWidth = browser.getElementSize(tableSelector, 'width');
            const initialNameCellWidth = browser.getElementSize('#name', 'width');
            const moveAmount = 50;

            browser.moveToObject('#name [data-test="resize"]');
            browser.buttonDown();
            browser.moveTo(null, moveAmount, 0);
            browser.buttonUp();

            const endTableWidth = browser.getElementSize(tableSelector, 'width');
            const endNameCellWidth = browser.getElementSize('#name', 'width');

            assert.isAbove(endTableWidth, initialTableWidth, 'Table resized');
            assert.isAbove(endNameCellWidth, initialNameCellWidth, 'Target column resized');
        });
    }
});
