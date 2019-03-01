/* global browser */
/* eslint-env mocha */

import 'core-js/es6/promise';
import { assert } from 'chai';

const fixtureSelector = '[data-test="select-load-more"]';
const textboxSelector = `${fixtureSelector} [data-test="textbox"]`;
const numberOfItemsAttribute = 'data-number-of-items';
const testOptionSelector = '[data-test-value="10 Cloverfield Lane"]';

describe('Select load more on scroll bottom', () => {
    function open() {
        browser.click(textboxSelector);
        const popoverSelector = `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        browser.waitForVisible(popoverSelector);
    }

    function getNumberOfItems() {
        return browser.getAttribute(fixtureSelector, numberOfItemsAttribute);
    }

    it('Open menu and press down arrow to last item to load more', () => {
        const numberOfItemsOnLoad = getNumberOfItems();

        open();
        browser.waitForVisible(testOptionSelector);
        const keyPresses = [];
        for (let i = 0; i < numberOfItemsOnLoad; i += 1) {
            keyPresses.push('ArrowDown');
        }
        browser.keys(keyPresses);

        const numberOfItemsAfterLoadMore = getNumberOfItems();
        assert.isTrue(numberOfItemsAfterLoadMore > numberOfItemsOnLoad);
    });
});
