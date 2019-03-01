/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('Markdown', () => {
    it('Renders HTML elements instead of text', () => {
        assert.lengthOf(browser.$$('ul'), 2); // list
        assert.lengthOf(browser.$$('li'), 5);
        assert.lengthOf(browser.$$('code'), 1); // inline code
        assert.lengthOf(browser.$$('a'), 1); // link

        // SUI-356: codeInline in Markdown should be monospaced
        assert.include(browser.getCssProperty('code', 'font-family').parsed.value, 'monospace');
    });
});
