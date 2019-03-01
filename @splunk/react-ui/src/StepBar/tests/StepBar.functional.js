/* global browser */
/* eslint-env mocha */

import { assert } from 'chai';

describe('StepBar', () => {
    const fixtureSelector = '[data-test="step-bar-fixture"]';
    const active = 'active';
    const next = 'next';
    const prev = 'prev';
    const dataSteps = {};
    let nextButton;
    let prevButton;
    let steps;

    // Loads selector elements for buttons and steps so they don't rerun in the assertStepStatus loop.
    function loadTestElements() {
        browser.waitForVisible(fixtureSelector);
        nextButton = browser.$('#next');
        prevButton = browser.$('#previous');
        steps = browser.$$(`${fixtureSelector} [data-test="step"]`);

        for (let i = 0; i < steps.length; i += 1) {
            dataSteps[i] = browser.$(`${fixtureSelector} [data-test-step-id="${i}"]`);
        }
    }

    function assertStepStatus(status, stepId) {
        assert.strictEqual(
            dataSteps[stepId].getAttribute('data-status'),
            status,
            `Step ${stepId} has status ${status}`
        );
    }

    function assertState(expected) {
        // Each step has the correct status.
        expected.forEach(assertStepStatus);

        // There are the correct number of steps.
        const expectedNumSteps = expected.length;
        assert.lengthOf(steps, expectedNumSteps, `There are ${expectedNumSteps} steps`);

        // The `data-test-active-step-id` attribute is correct.
        const activeStepId = expected.indexOf(active).toString();
        assert.strictEqual(
            browser.getAttribute(fixtureSelector, 'data-test-active-step-id'),
            activeStepId,
            `The active step id is ${activeStepId}`
        );
    }

    it('navigation', () => {
        loadTestElements();

        assertState([active, next, next, next]);

        nextButton.click();
        assertState([prev, active, next, next]);

        nextButton.click();
        assertState([prev, prev, active, next]);

        nextButton.click();
        assertState([prev, prev, prev, active]);

        prevButton.click();
        assertState([prev, prev, active, next]);

        prevButton.click();
        assertState([prev, active, next, next]);

        prevButton.click();
        assertState([active, next, next, next]);
    });
});
