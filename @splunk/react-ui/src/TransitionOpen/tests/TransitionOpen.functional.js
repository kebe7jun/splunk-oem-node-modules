/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('TransitionOpen', () => {
    const fixtureSelector = '[data-test="transition-open-fixture"]';
    const toggleSelector = '[data-test="toggle"]';
    const innerSelector = `${fixtureSelector} [data-test="inner"]`;

    it('opens and closes', () => {
        assert.isFalse(browser.isVisible(innerSelector), 'The panel is closed');
        browser.click(toggleSelector);
        browser.waitForVisible(innerSelector);
        browser.click(toggleSelector);
        browser.waitUntil(() => !browser.isVisible(innerSelector));
    });
});
