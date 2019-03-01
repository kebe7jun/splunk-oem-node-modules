/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { isIE, resetFocus, focusOnSelector } from '@splunk/wdio-functional-test-runner/utils';

describe('Complex Table', () => {
    const fixtureSelector = '[data-test="complex-table-fixture"]';

    function rowSelector(key) {
        return `${fixtureSelector} [data-test="body"] [data-test="${key}"]`;
    }

    function columnHeadSelector(key, detached = true) {
        return `${fixtureSelector} [data-test="${
            detached ? 'fixed-' : ''
        }head"] [data-test="${key}"]`;
    }

    describe('column resize', () => {
        /**
         * A helper function that returns the width of the table. In doing so, it asserts
         * that the main table has the same width as the detached fixed head table.
         */
        function getTableWidth() {
            const mainTableWidth = browser.getElementSize(
                `${fixtureSelector} [data-test="main-table"]`,
                'width'
            );
            const fixedHeadTableWidth = browser.getElementSize(
                `${fixtureSelector} [data-test="fixed-head-table"]`,
                'width'
            );
            assert.strictEqual(
                mainTableWidth,
                fixedHeadTableWidth,
                'Main table and fixed head table have the same width'
            );
            return mainTableWidth;
        }

        /**
         * A helper function that returns the width of the specified column. In doing so, it asserts
         * that the main table column has the same width as the detached fixed head column.
         */
        function getColumnWidth(key) {
            const inlineColumnWidth = browser.getElementSize(
                columnHeadSelector(key, false),
                'width'
            );
            const detachedColumnWidth = browser.getElementSize(columnHeadSelector(key), 'width');
            assert.strictEqual(
                inlineColumnWidth,
                detachedColumnWidth,
                'Column in the fixed head has the same measurement as the column in the inline head'
            );
            return inlineColumnWidth;
        }

        it('regular head cell with the keyboard', () => {
            resetFocus();

            const initialTableWidth = getTableWidth();
            const initialColumnWidth = getColumnWidth('status');

            focusOnSelector(`${columnHeadSelector('status')} [data-test="resize"]`);
            browser.keys(['ArrowRight', 'ArrowRight']);

            const endTableWidth = getTableWidth();
            const endColumnWidth = getColumnWidth('status');

            assert.isAbove(endTableWidth, initialTableWidth, 'Table is now wider');
            assert.isAbove(endColumnWidth, initialColumnWidth, 'Column is now wider');
        });

        if (!isIE()) {
            it('regular head cell with drag', () => {
                const moveAmount = 50;
                const initialTableWidth = getTableWidth();
                const initialColumnWidth = getColumnWidth('name');

                browser.moveToObject(`${columnHeadSelector('name')} [data-test="resize"]`);
                browser.buttonDown();
                browser.moveTo(null, moveAmount, 0);
                browser.buttonUp();

                const endTableWidth = getTableWidth();
                const endCellWidth = getColumnWidth('name');

                assert.strictEqual(initialTableWidth + moveAmount, endTableWidth, 'Table resized');
                assert.strictEqual(initialColumnWidth + moveAmount, endCellWidth, 'Column resized');
            });

            it('dropdown head cell with drag', () => {
                const moveAmount = 50;
                const initialTableWidth = getTableWidth();
                const initialColumnWidth = getColumnWidth('age');

                browser.moveToObject(`${columnHeadSelector('age')} [data-test="resize"]`);
                browser.buttonDown();
                browser.moveTo(null, moveAmount, 0);
                browser.buttonUp();

                const endTableWidth = getTableWidth();
                const endCellWidth = getColumnWidth('age');

                assert.strictEqual(initialTableWidth + moveAmount, endTableWidth, 'Table resized');
                assert.strictEqual(initialColumnWidth + moveAmount, endCellWidth, 'Column resized');
            });
        }
    });

    describe('column reorder', () => {
        /**
         * Asserts that the specified column is in the specified position in both the inline head and
         * the detached head.
         */
        function assertColumnPosition(key, position) {
            assert.isTrue(
                browser.isVisible(`${columnHeadSelector(key, false)}:nth-child(${position})`),
                `${key} column is in position ${position} in inline head`
            );
            assert.isTrue(
                browser.isVisible(`${columnHeadSelector(key)}:nth-child(${position})`),
                `${key} column is in position ${position} in detached head`
            );
        }

        it('regular head cell with the keyboard', () => {
            resetFocus();
            assertColumnPosition('status', 4);

            focusOnSelector(columnHeadSelector('status'));
            browser.keys(['ArrowRight', 'ArrowRight']);

            assertColumnPosition('status', 6);
        });

        it('dropdown head cell with the keyboard', () => {
            resetFocus();
            assertColumnPosition('age', 6);

            focusOnSelector(columnHeadSelector('age'));
            browser.keys(['ArrowRight']);

            assertColumnPosition('age', 7);
        });
    });

    describe('sorting', () => {
        /**
         * Asserts that the specified row is in the specified position.
         */
        function assertRowPosition(key, position) {
            assert.isTrue(
                browser.isVisible(`${rowSelector(key)}:nth-child(${position})`),
                `${key} row is in position ${position}`
            );
        }

        it('regular head cell with a click', () => {
            assertRowPosition('amelia@hotmail.com', 2);

            // Click the column in the detached head to sort (by birthState).
            browser.click(columnHeadSelector('birthState'));

            assertRowPosition('amelia@hotmail.com', 10);

            // Click the column in the detached head to reverse sort (by birthState).
            browser.click(columnHeadSelector('birthState'));

            assertRowPosition('amelia@hotmail.com', 1);
        });
    });

    describe('dropdown in head cell', () => {
        const dropdownHeadCellSelector = columnHeadSelector('age');

        function open() {
            browser.click(dropdownHeadCellSelector);
            browser.waitForVisible('#popoverContent');
        }

        it('opens and closes on toggle click', () => {
            open();
            browser.click(dropdownHeadCellSelector);
            browser.waitUntil(() => !browser.isVisible('#popoverContent'));
            assert.isTrue(
                browser.hasFocus(dropdownHeadCellSelector),
                'Toggle has focus after closing'
            );
        });

        it('closes on content click', () => {
            open();
            browser.click('#popoverContent');
            browser.waitUntil(() => !browser.isVisible('#popoverContent'));
            assert.isTrue(
                browser.hasFocus(dropdownHeadCellSelector),
                'Toggle has focus after closing'
            );
        });

        it('opens and closes with the keyboard', () => {
            resetFocus();
            focusOnSelector(dropdownHeadCellSelector);
            browser.keys('Enter');
            browser.waitForVisible('#popoverContent');
            browser.keys('Escape');
            browser.waitUntil(() => !browser.isVisible('#popoverContent'));
            assert.isTrue(
                browser.hasFocus(dropdownHeadCellSelector),
                'Toggle has focus after closing'
            );
        });

        it('closes on click away', () => {
            open();
            browser.click('#offTable');
            browser.waitUntil(() => !browser.isVisible('#popoverContent'));
        });
    });

    describe('row expansion', () => {
        function expansionRowSelector(key) {
            return `${fixtureSelector} [data-test="body"] [data-test="${key}-expansion"]`;
        }
        it('expands and collapses on click', () => {
            assert.isFalse(
                browser.isVisible(`${fixtureSelector} [data-test="expansion-row"]`),
                'No expansion rows are visible'
            );
            browser.click(`${rowSelector('amelia@hotmail.com')} [data-test="expand"]`);
            browser.waitForVisible(expansionRowSelector('amelia@hotmail.com'));
            browser.click(`${rowSelector('amelia@hotmail.com')} [data-test="expand"]`);
            browser.waitUntil(() => !browser.isVisible(expansionRowSelector('amelia@hotmail.com')));
        });

        it('collapses when a different row is expanded', () => {
            // Expand a row.
            browser.click(`${rowSelector('amelia@hotmail.com')} [data-test="expand"]`);
            browser.waitForVisible(expansionRowSelector('amelia@hotmail.com'));

            // Expand a different row.
            browser.click(`${rowSelector('adrian7456@gmail.com')} [data-test="expand"]`);

            // Previously expanded row collapses.
            browser.waitUntil(() => !browser.isVisible(expansionRowSelector('amelia@hotmail.com')));

            // Correct row is expanded.
            assert.isTrue(
                browser.isVisible(expansionRowSelector('adrian7456@gmail.com')),
                'Row is expanded'
            );
        });
    });

    describe('row selection', () => {
        function assertRowSelected(email, value = true) {
            assert.strictEqual(
                browser.getAttribute(rowSelector(email), 'data-test-selected'),
                value ? 'true' : 'false',
                `Row selected is ${value}`
            );
        }

        function assertAllRowSelection(value) {
            assert.strictEqual(
                browser.getAttribute(fixtureSelector, 'data-test-row-selection'),
                value,
                `All row selection is ${value}`
            );
        }

        it('selects and deselects on click', () => {
            const email = 'amelia@hotmail.com';
            assertRowSelected(email, false);

            browser.click(`${rowSelector(email)} [data-test="toggle"]`);
            assertRowSelected(email, true);
            assertAllRowSelection('some');

            browser.click(`${rowSelector(email)} [data-test="toggle"]`);
            assertRowSelected(email, false);
        });

        it('selects and deselects on enter', () => {
            const email = 'amelia@hotmail.com';
            assertRowSelected(email, false);

            focusOnSelector(`${rowSelector(email)} [data-test="toggle"]`);
            browser.keys('Enter');
            assertRowSelected(email, true);
            assertAllRowSelection('some');

            browser.keys('Enter');
            assertRowSelected(email, false);
        });

        it('selects and deselects all on toggle all click', () => {
            assertAllRowSelection('none');

            // Select all
            browser.click(`${fixtureSelector} [data-test="toggle-all"]`);
            // testing a sample
            assertRowSelected('amelia@hotmail.com', true);
            assertRowSelected('adrian7456@gmail.com', true);
            assertRowSelected('felixfelix@hotmail.com', true);
            assertAllRowSelection('all');

            // Deselect all
            browser.click(`${fixtureSelector} [data-test="toggle-all"]`);
            // testing a sample
            assertRowSelected('amelia@hotmail.com', false);
            assertRowSelected('adrian7456@gmail.com', false);
            assertRowSelected('felixfelix@hotmail.com', false);
            assertAllRowSelection('none');
        });

        it('selects and deselects all on toggle all enter', () => {
            assertAllRowSelection('none');

            // Select all
            focusOnSelector(`${fixtureSelector} [data-test="toggle-all"]`);
            browser.keys('Enter');
            // testing a sample
            assertRowSelected('amelia@hotmail.com', true);
            assertRowSelected('adrian7456@gmail.com', true);
            assertRowSelected('felixfelix@hotmail.com', true);
            assertAllRowSelection('all');

            // Deselect all
            browser.keys('Enter');
            // testing a sample
            assertRowSelected('amelia@hotmail.com', false);
            assertRowSelected('adrian7456@gmail.com', false);
            assertRowSelected('felixfelix@hotmail.com', false);
            assertAllRowSelection('none');
        });
    });
});
