/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';
import { keys } from 'lodash';
import { isIE, focusOnSelector } from '@splunk/wdio-functional-test-runner/utils';

describe('Resize', () => {
    const fixtureSelector = '[data-test="resize-fixture"]';
    const resizeSelector = `${fixtureSelector}  [data-test="resize"]`;

    const cases = {
        n: {
            Up: { height: 1, width: 0 },
            Down: { height: -1, width: 0 },
        },
        e: {
            Right: { height: 0, width: 1 },
            Left: { height: 0, width: -1 },
        },
        s: {
            Up: { height: -1, width: 0 },
            Down: { height: 1, width: 0 },
        },
        w: {
            Right: { height: 0, width: -1 },
            Left: { height: 0, width: 1 },
        },
    };

    cases.ne = { ...cases.n, ...cases.e };
    cases.se = { ...cases.s, ...cases.e };
    cases.sw = { ...cases.s, ...cases.w };
    cases.nw = { ...cases.n, ...cases.w };

    function focusOnHandle(name) {
        focusOnSelector(`${fixtureSelector} [data-test="resize-handle-${name}"]`);
    }

    keys(cases).forEach(handle => {
        it(`handles keyboard resize for ${handle} handle`, () => {
            keys(cases[handle]).forEach(dir => {
                const thisCase = cases[handle][dir];

                focusOnHandle(handle);
                const initialSize = browser.getElementSize(resizeSelector);

                const arrowKey = `Arrow${dir}`;
                browser.keys([arrowKey, arrowKey]);

                const endSize = browser.getElementSize(resizeSelector);

                if (thisCase.height > 0) {
                    assert.isAbove(
                        endSize.height,
                        initialSize.height,
                        `Height got bigger for ${arrowKey} key.`
                    );
                } else if (thisCase.height < 0) {
                    assert.isBelow(
                        endSize.height,
                        initialSize.height,
                        `Height got smaller for ${arrowKey} key.`
                    );
                } else if (thisCase.height === 0) {
                    assert.strictEqual(
                        endSize.height,
                        initialSize.height,
                        `Height didn't change for ${arrowKey} key.`
                    );
                }

                if (thisCase.width > 0) {
                    assert.isAbove(
                        endSize.width,
                        initialSize.width,
                        `Width got bigger for ${arrowKey} key.`
                    );
                } else if (thisCase.width < 0) {
                    assert.isBelow(
                        endSize.width,
                        initialSize.width,
                        `Width got smaller for ${arrowKey} key.`
                    );
                } else if (thisCase.width === 0) {
                    assert.strictEqual(
                        endSize.width,
                        initialSize.width,
                        `Width didn't change for ${arrowKey} key.`
                    );
                }
            });
        });

        if (!isIE()) {
            it(`handles mouse resize for ${handle} handle`, () => {
                keys(cases[handle]).forEach(dir => {
                    const thisCase = cases[handle][dir];
                    const initialSize = browser.getElementSize(resizeSelector);

                    const moveAmounts = {
                        Up: { x: 0, y: -30 },
                        Down: { x: 0, y: 30 },
                        Right: { x: 30, y: 0 },
                        Left: { x: -30, y: 0 },
                    };

                    browser.moveToObject(
                        `${fixtureSelector} [data-test="resize-handle-${handle}"]`
                    );
                    browser.buttonDown();
                    browser.moveTo(null, moveAmounts[dir].x, moveAmounts[dir].y);
                    browser.buttonUp();

                    const endSize = browser.getElementSize(resizeSelector);

                    if (thisCase.height > 0) {
                        assert.isAbove(
                            endSize.height,
                            initialSize.height,
                            `Height got bigger for ${dir} mouse movement.`
                        );
                    } else if (thisCase.height < 0) {
                        assert.isBelow(
                            endSize.height,
                            initialSize.height,
                            `Height got smaller for ${dir} mouse movement.`
                        );
                    }

                    if (thisCase.width > 0) {
                        assert.isAbove(
                            endSize.width,
                            initialSize.width,
                            `Width got bigger for ${dir} mouse movement.`
                        );
                    } else if (thisCase.width < 0) {
                        assert.isBelow(
                            endSize.width,
                            initialSize.width,
                            `Width got smaller for ${dir} mouse movement.`
                        );
                    }
                });
            });
        }
    });
});
