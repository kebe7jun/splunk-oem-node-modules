/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

// Selectors added to the fixture to uniquely identify various elements.
const fixtureSelector = '[data-test="card"]';
const cardHeaderSelector = '[data-test="header"]';
const cardBodySelector = '[data-test="body"]';
const cardFooterSelector = '[data-test="footer"]';

describe('Card', () => {
    it('Renders', () => {
        assert.isTrue(browser.isVisible(fixtureSelector), 'The layout is visible.');
        assert.strictEqual(browser.$$(cardHeaderSelector).length, 1, 'Found the header');
        assert.strictEqual(browser.$$(cardBodySelector).length, 1, 'Found the body');
        assert.strictEqual(browser.$$(cardFooterSelector).length, 1, 'Found the footer');
    });

    it('Renders the card body with the correct height (SUI-1499)', () => {
        const assertHeights = cardElement => {
            const card = browser.$(fixtureSelector);
            const header = browser.$(cardHeaderSelector);
            const body = browser.$(cardBodySelector);
            const footer = browser.$(cardFooterSelector);
            assert.strictEqual(
                card.getTagName(),
                cardElement,
                'Sanity check: card element type matches expectation'
            );
            assert.isAtMost(
                header.getElementSize().height +
                    body.getElementSize().height +
                    footer.getElementSize().height,
                card.getElementSize().height,
                'Combined height of header, body, and footer matches the card height'
            );
        };

        // Assert heights for the default rendering
        assertHeights('div');

        // Assert heights for the link rendering
        browser.click('[data-test="render-link-card-button"]');
        assertHeights('a');

        // Assert heights for the button rendering
        browser.click('[data-test="render-button-card-button"]');
        assertHeights('button');
    });
});
