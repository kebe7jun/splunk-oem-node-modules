/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const radioBarSelector = '[data-test="button-group-fixture"]';

describe('ButtonGroup', () => {
    it('has correct accessibility attributes', () => {
        assert.strictEqual(
            browser.getAttribute(radioBarSelector, 'role'),
            'menubar',
            'The container has the correct role.'
        );
        assert.lengthOf(
            browser.$$(`${radioBarSelector} [role="menuitem"]`),
            2,
            'There are 2 menu items.'
        );
    });
});
