/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { keys } from 'lodash';
import { isIE, resetFocus } from '@splunk/wdio-functional-test-runner/utils';

describe('Tooltip', () => {
    describe('uncontrolled', () => {
        const fixtureSelector = '[data-test="tooltip-fixture"]';

        function popoverSelector() {
            return `#${browser.getAttribute(fixtureSelector, 'data-test-popover-id')}`;
        }

        it('is closed initially', () => {
            assert.isTrue(
                browser.isExisting(`${fixtureSelector} [data-test=toggle]`),
                'The toggle is visible'
            );
            assert.isFalse(browser.isVisible(popoverSelector(), 'The popover is not visible'));
        });

        if (!isIE()) {
            it('opens on hover, has the correct content, and closes when the mouse moves away', () => {
                browser.moveToObject(`${fixtureSelector} [data-test="toggle"]`);
                assert.strictEqual(
                    browser.getAttribute(fixtureSelector, 'data-test-open'),
                    'true',
                    `data-test-open was set to open`
                );
                browser.waitForVisible(popoverSelector());
                assert.strictEqual(
                    browser.getText(popoverSelector()).trim(),
                    'I explain the obscure label.',
                    'The tooltip content is correct'
                );

                browser.moveToObject('#not-tooltip');
                assert.strictEqual(
                    browser.getAttribute(fixtureSelector, 'data-test-open'),
                    'false',
                    `data-test-open was set to false`
                );
                browser.waitUntil(() => !browser.isVisible(popoverSelector()));
            });
        }

        it('opens on focus and closes on blur', () => {
            resetFocus();
            browser.keys('Tab');
            browser.waitForVisible(popoverSelector());
            browser.keys('Tab');
            browser.waitUntil(() => !browser.isVisible(popoverSelector()));
        });
    });

    describe('with empty content', () => {
        it('hides the "?"', () => {
            const selectors = {
                'is empty string': '[data-test="content-empty-fixture"]',
                'is undefined': '[data-test="content-undefined-fixture"]',
                'is false': '[data-test="content-false-fixture"]',
            };

            keys(selectors).forEach(key => {
                assert.strictEqual(
                    browser.getText(`${selectors[key]} [data-test=toggle]`),
                    '',
                    `when content prop ${key}`
                );
            });
        });
        it('does not display the tooltip when there are children', () => {
            const selectors = {
                'is empty string': '[data-test="content-empty-children-fixture"]',
                'is undefined': '[data-test="content-undefined-children-fixture"]',
                'is false': '[data-test="content-false-children-fixture"]',
            };

            keys(selectors).forEach(key => {
                browser.moveToObject(`${selectors[key]} [data-test=toggle]`);
                assert.strictEqual(
                    browser.getAttribute(selectors[key], 'data-test-open'),
                    'false',
                    `when content prop ${key}`
                );
            });
        });
    });

    if (!isIE()) {
        it('opens and closes when the child is a disabled button (SUI-1232)', () => {
            const fixtureSelector = '[data-test="disabled-child"]';
            browser.moveToObject(`${fixtureSelector} [data-test="toggle"]`);
            assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-open'), 'true');

            browser.moveToObject('#not-tooltip');
            assert.strictEqual(browser.getAttribute(fixtureSelector, 'data-test-open'), 'false');
        });
    }
});
