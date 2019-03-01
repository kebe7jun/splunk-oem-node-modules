/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

const concertinaSelector = '#concertina-fixture';
const panelSelector = `${concertinaSelector} [data-test=panel]`;
const dockTopSelector = `${concertinaSelector} [data-test=dock-top]`;
const dockBottomSelector = `${concertinaSelector} [data-test=dock-bottom]`;
const headingSelector = '[data-test=heading]';
const headingsTopSelector = `${dockTopSelector} ${headingSelector}`;
const headingsBottomSelector = `${dockBottomSelector} ${headingSelector}`;

const getBottom = element => element.getLocation('y') + element.getElementSize('height');

describe('Basic Concertina', () => {
    it('starts with three bottom buttons docked', () => {
        assert.lengthOf(browser.$$(headingsBottomSelector), 3);
    });

    it('clicking scrolls down or up', () => {
        const concertina = browser.$(concertinaSelector);
        const firstPanel = browser.$(`${panelSelector}[data-test-panel-id=panel1]`);
        const lastPanel = browser.$(`${panelSelector}[data-test-panel-id=panel4]`);

        // Last section is out of view
        assert.isTrue(getBottom(lastPanel) > getBottom(concertina));

        // Click docked last section heading
        browser.$(`${headingsBottomSelector}[data-test-panel-id=panel4]`).click();

        // Last section is in view
        browser.waitUntil(() => getBottom(lastPanel) === getBottom(concertina));

        // No buttons are on bottom docked
        assert.lengthOf(browser.$$(headingsBottomSelector), 0);

        // Click the docked first section heading
        browser.$(`${headingsTopSelector}[data-test-panel-id=panel1]`).click();

        // No buttons are docked on top
        browser.waitUntil(() => browser.$$(headingsTopSelector).length === 0);

        // First section is in view
        assert.equal(firstPanel.getLocation('y'), concertina.getLocation('y'));
    });
});
