/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import StepBar, { Step } from '@splunk/react-ui/StepBar';

describe('StepBar', () => {
    it('step selection 0', () => {
        const wrapper = mount(
            <StepBar activeStepId={0}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                <StepBar.Step label="Three" />
            </StepBar>
        );
        const steps = wrapper.find('Step');
        const step1 = steps.at(0);
        assert.equal(step1.prop('status'), 'active', 'step 1 is status active');
        assert.isFalse(step1.prop('isLast'), 'step 1 is not last');
        const step2 = steps.at(1);
        assert.equal(step2.prop('status'), 'next', 'step 2 is status next');
        assert.isFalse(step1.prop('isLast'), 'step 2 is not last');
        const step3 = steps.at(2);
        assert.equal(step3.prop('status'), 'next', 'step 3 is status next');
        assert.isTrue(step3.prop('isLast'), 'step 3 is last');
    });

    it('step selection 1', () => {
        const wrapper = mount(
            <StepBar activeStepId={1}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                <StepBar.Step label="Three" />
            </StepBar>
        );
        const steps = wrapper.find('Step');
        const step1 = steps.at(0);
        assert.equal(step1.prop('status'), 'prev', 'step 1 is status prev');
        assert.isFalse(step1.prop('isLast'), 'step 1 is not last');
        const step2 = steps.at(1);
        assert.equal(step2.prop('status'), 'active', 'step 2 is status active');
        assert.isFalse(step1.prop('isLast'), 'step 2 is not last');
        const step3 = steps.at(2);
        assert.equal(step3.prop('status'), 'next', 'step 3 is status next');
        assert.isTrue(step3.prop('isLast'), 'step 3 is last');
    });

    it('step selection 2', () => {
        const wrapper = mount(
            <StepBar activeStepId={2}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                <StepBar.Step label="Three" />
            </StepBar>
        );
        const steps = wrapper.find('Step');
        const step1 = steps.at(0);
        assert.equal(step1.prop('status'), 'prev', 'step 1 is status prev');
        assert.isFalse(step1.prop('isLast'), 'step 1 is not last');
        const step2 = steps.at(1);
        assert.equal(step2.prop('status'), 'prev', 'step 2 is status active');
        assert.isFalse(step1.prop('isLast'), 'step 2 is not last');
        const step3 = steps.at(2);
        assert.equal(step3.prop('status'), 'active', 'step 3 is status next');
        assert.isTrue(step3.prop('isLast'), 'step 3 is last');
    });

    it('handles `false` children correctly', () => {
        const wrapper = mount(
            <StepBar activeStepId={2}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                {false && <StepBar.Step id="hidden" label="Hidden" />}
            </StepBar>
        );
        assert.isFalse(wrapper.find('#hidden').exists());
    });

    it('should handle subcomponents as named exports', () => {
        const wrapper = mount(
            <StepBar activeStepId={2}>
                <Step label="One" />
                <Step label="Two" />
            </StepBar>
        );
        assert.ok(wrapper);
    });

    it('should handle invalid values in children correctly', () => {
        assert.equal(Step, StepBar.Step);
    });

    it('has correctly derived aria attributes', () => {
        const wrapper = mount(
            <StepBar activeStepId={1}>
                <StepBar.Step label="One" />
                <StepBar.Step label="Two" />
                <StepBar.Step label="Three" />
            </StepBar>
        );
        const ul = wrapper.find('ul');
        assert.equal(ul.prop('aria-valuemin'), '1', 'aria min value correct');
        assert.equal(ul.prop('aria-valuemax'), '3', 'aria max value correct');
        assert.equal(ul.prop('aria-valuenow'), '2', 'aria now value correct');
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const stepRef = spy();
        const wrapper = mount(
            <StepBar activeStepId={1} elementRef={elementRef}>
                <StepBar.Step label="Two" elementRef={stepRef} />
            </StepBar>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        assert.isTrue(stepRef.calledOnce, 'stepRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isTrue(stepRef.calledTwice, 'stepRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
        assert.isNull(stepRef.args[1][0], 'stepRef was called with null on unmount');
    });
});
