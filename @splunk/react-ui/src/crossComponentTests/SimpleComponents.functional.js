/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('Simple components', () => {
    it('renders', () => {
        assert.isTrue(browser.isVisible('[data-test="column-layout"]'), 'The page rendered');
    });
});
