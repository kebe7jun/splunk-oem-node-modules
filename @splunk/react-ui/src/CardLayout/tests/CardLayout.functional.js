/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

// Selectors added to the fixture to uniquely identify various elements.
const fixtureSelector = '[data-test="card-layout"]';
const cardsSelector = '[data-test="card"]';
const wrapCardsButtonSelector = '#wrapCards';

describe('CardLayout', () => {
    it('Renders', () => {
        assert.isTrue(browser.isVisible(fixtureSelector), 'The layout is visible.');
        assert.strictEqual(10, browser.$$(cardsSelector).length, 'There are 10 cards.');
    });

    it('Cards are 200px wide', () => {
        const card1 = browser.$('#card-1');
        const card2 = browser.$('#card-2');
        assert.strictEqual(200, card1.getElementSize().width, 'Card 1 is 200px wide.');
        assert.strictEqual(200, card2.getElementSize().width, 'Card 2 is 200px wide.');
    });

    it('No Wrapping Cards', () => {
        const layoutWrap = browser.$(fixtureSelector);
        const heightWrap = layoutWrap.getElementSize().height;

        browser.click(wrapCardsButtonSelector);

        assert.isTrue(
            heightWrap > layoutWrap.getElementSize().height,
            'Height of No Wrapping layout should be shorter than Wrapping Layout'
        );
    });
});
