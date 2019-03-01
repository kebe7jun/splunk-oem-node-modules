/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const treeSelector = '[data-test="tree-fixture"]';
const expTreeSelector = '[data-test="expanded-tree-fixture"]';

const lukeNameSelector = '[data-test-path=".names.1.given"]';
const namesNodeSelector = '[data-test-path=".names"] > [data-test="node"]';
const namesNodeToggleSelector = `${namesNodeSelector} > [data-test="toggle"]`;
const lukeNodeToggleSelector =
    '[data-test-path=".names.1"] > [data-test="node"] > [data-test="toggle"]';

describe('JSONTree', () => {
    it('handles expandChildren correctly', () => {
        // expands first level nodes by default
        assert.isFalse(browser.isVisible(`${treeSelector} ${lukeNameSelector}`));

        assert.strictEqual(
            browser.getAttribute(`${treeSelector} ${namesNodeSelector}`, 'data-test-expanded'),
            'false'
        );

        // expands all nodes if expandChildren is true
        assert.isTrue(browser.isVisible(`${expTreeSelector} ${lukeNameSelector}`));
        assert.strictEqual(
            browser.getAttribute(`${expTreeSelector} ${namesNodeSelector}`, 'data-test-expanded'),
            'true'
        );
    });

    it('expands and collapses if node toggle is clicked', () => {
        // expand names array
        browser.click(`${treeSelector} ${namesNodeToggleSelector}`);

        // expand luke object
        browser.click(`${treeSelector} ${lukeNodeToggleSelector}`);

        assert.isTrue(browser.isVisible(`${treeSelector} ${lukeNameSelector}`));

        // collapse names array
        browser.click(`${treeSelector} ${namesNodeToggleSelector}`);

        assert.isFalse(browser.isVisible(`${treeSelector} ${lukeNameSelector}`));
    });
});
