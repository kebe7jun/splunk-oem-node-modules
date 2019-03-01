/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Number from '@splunk/react-ui/Number';

describe('Number', () => {
    describe('Uncontrolled', () => {
        let wrapper = null;
        const name = 'monaco';

        const handleChange = spy();

        beforeEach(() => {
            wrapper = mount(<Number onChange={handleChange} defaultValue={2} name={name} />);
            assert.ok(wrapper);
        });

        afterEach(() => {
            handleChange.reset();
            wrapper.unmount();
            wrapper = null;
        });

        it('honors the defaultValue', () => {
            assert.equal(
                wrapper
                    .find('[data-test="textbox"]')
                    .hostNodes()
                    .prop('value'),
                2,
                'The value is set to the default'
            );
        });

        it('handles state changes internally', () => {
            wrapper
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('change', { target: { value: '300' } });
            assert.equal(wrapper.state('stringValue'), '300');

            assert(handleChange.calledOnce, 'The onChange handler is called exactly once');
            assert.isTrue(handleChange.calledOnce, 'callback is called');
            assert.equal(handleChange.args[0][1].name, name, 'The onChange handler passes name.');
        });

        it('increments', () => {
            wrapper
                .find('[data-test="increment"]')
                .hostNodes()
                .simulate('click');
            assert.equal(wrapper.state('stringValue'), '3');
        });

        it('decrements', () => {
            wrapper
                .find('[data-test="decrement"]')
                .hostNodes()
                .simulate('click');
            assert.equal(wrapper.state('stringValue'), '1');
        });

        it('throws when trying to set value', () => {
            assert.throws(() => wrapper.setProps({ value: 1 }));
        });

        it('throws when trying to change the defaultValue', () => {
            assert.throws(() => wrapper.setProps({ defaultValue: 1 }));
        });
    });

    describe('Limits', () => {
        let wrapper = null;
        const handleChange = spy();
        beforeEach(() => {
            wrapper = mount(
                <Number onChange={handleChange} min={-1} max={1} step={0.3} defaultValue={0} />
            );
            assert.ok(wrapper);
        });

        afterEach(() => {
            handleChange.reset();
            wrapper.unmount();
            wrapper = null;
        });

        it('max is applied', () => {
            wrapper
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('change', { target: { value: '300' } });
            assert.equal(wrapper.state('value'), 1);
            assert.equal(wrapper.state('stringValue'), '300');
            wrapper
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('blur');
            assert.equal(wrapper.state('stringValue'), '1', 'string value updates on blur');
        });

        it('min is applied', () => {
            wrapper
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('change', { target: { value: '-300' } });
            assert.equal(wrapper.state('value'), -1);
            assert.equal(wrapper.state('stringValue'), '-300');
            wrapper
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('blur');
            assert.equal(wrapper.state('stringValue'), '-1', 'string value updates on blur');
        });

        it('increments by step', () => {
            wrapper
                .find('[data-test="increment"]')
                .hostNodes()
                .simulate('click');
            assert.equal(wrapper.state('stringValue'), '0.3');
        });

        it('decrements by step', () => {
            wrapper
                .find('[data-test="decrement"]')
                .hostNodes()
                .simulate('click');
            assert.equal(wrapper.state('stringValue'), '-0.3');
        });

        it('increments to max', () => {
            wrapper
                .find('[data-test="increment"]')
                .hostNodes()
                .simulate('click')
                .simulate('click')
                .simulate('click')
                .simulate('click');
            assert.equal(wrapper.state('stringValue'), '1');
        });

        it('decrements to min', () => {
            wrapper
                .find('[data-test="decrement"]')
                .hostNodes()
                .simulate('click')
                .simulate('click')
                .simulate('click')
                .simulate('click');
            assert.equal(wrapper.state('stringValue'), '-1');
        });
    });

    describe('Controlled', () => {
        let wrapper = null;
        const name = 'monaco';
        const handleChange = spy();

        beforeEach(() => {
            wrapper = mount(
                <Number onChange={handleChange} value={2} min={-1} max={1} name={name} />
            );
            assert.ok(wrapper);
        });

        afterEach(() => {
            handleChange.reset();
            wrapper.unmount();
            wrapper = null;
        });

        it('honors the value', () => {
            assert.equal(wrapper.state('stringValue'), '2');
        });

        it('invokes the onChange handler with limits applied', () => {
            wrapper
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('change', { target: { value: '-300' } });
            assert.isTrue(handleChange.calledOnce, 'callback is called');
            assert.equal(handleChange.args[0][1].value, -1, 'min is applied');
            assert.equal(handleChange.args[0][1].name, name, 'The onChange handler passes name.');
        });
    });

    describe('rounding', () => {
        it('rounds to decimal', () => {
            const wrapper = mount(<Number roundTo={2} />);
            wrapper
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('change', { target: { value: '3.0555' } });
            assert.equal(wrapper.state('value'), 3.06);
        });
        it('rounds to integer', () => {
            const wrapper = mount(<Number roundTo={0} />);
            wrapper
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('change', { target: { value: '3.0555' } });
            assert.equal(wrapper.state('value'), 3);
        });
        it('rounds to hundreds', () => {
            const wrapper = mount(<Number roundTo={-2} />);
            wrapper
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('change', { target: { value: '1355' } });
            assert.equal(wrapper.state('value'), 1400);
        });
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <Number elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });

    it('hide step buttons', () => {
        const element = <Number hideStepButtons value={2} />;
        const wrapper = mount(element);
        const increment = wrapper.find('[data-test="increment"]');
        const decrement = wrapper.find('[data-test="decrement"]');
        assert.lengthOf(increment, 0);
        assert.lengthOf(decrement, 0);
    });
});
