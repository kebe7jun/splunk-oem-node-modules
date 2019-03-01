/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import RadioList, { Option } from '@splunk/react-ui/RadioList';

describe('RadioList', () => {
    let wrapper;
    const handleChange = sinon.spy();

    afterEach(() => {
        handleChange.reset();
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    describe('uncontrolled', () => {
        const name = 'san marino';

        beforeEach(() => {
            wrapper = mount(
                <RadioList defaultValue={3} onChange={handleChange} name={name}>
                    <RadioList.Option value={1}>One</RadioList.Option>
                    <RadioList.Option value={2}>Two</RadioList.Option>
                    <RadioList.Option value={3}>Three Three Three</RadioList.Option>
                    <RadioList.Option value={4}>Four</RadioList.Option>
                </RadioList>
            );
            assert.ok(wrapper);
        });

        it('sets default', () => {
            const selected = wrapper
                .find('Option')
                .at(2)
                .find('button[aria-checked=true]');
            assert.equal(selected.length, 1);
        });

        it('updates state', () => {
            const getButton = () =>
                wrapper
                    .find('Option')
                    .at(0)
                    .find('button');
            assert.isFalse(getButton().prop('aria-checked'));
            getButton().simulate('click');
            assert.isTrue(getButton().prop('aria-checked'));
            assert.strictEqual(handleChange.args[0][1].value, 1);
            assert.strictEqual(handleChange.args[0][1].name, name);
        });

        it('throws if update defaultValue', () => {
            assert.throws(() => wrapper.setProps({ defaultValue: 4 }));
        });

        it('throws if convert to controlled', () => {
            assert.throws(() => wrapper.setProps({ value: 4 }));
        });
    });

    describe('controlled', () => {
        const name = 'grenada';

        beforeEach(() => {
            wrapper = mount(
                <RadioList value={3} onChange={handleChange} name={name}>
                    <RadioList.Option value={1}>One</RadioList.Option>
                    <RadioList.Option value={2}>Two</RadioList.Option>
                    <RadioList.Option value={3}>Three Three Three</RadioList.Option>
                    <RadioList.Option value={4}>Four</RadioList.Option>
                </RadioList>
            );
            assert.ok(wrapper);
        });

        it('click events trigger callbacks', () => {
            wrapper
                .find('button')
                .first()
                .simulate('click');
            assert(handleChange.calledOnce, 'The onChange handler is called exactly once');
            assert.equal(handleChange.args[0][1].value, 1);
            assert.equal(handleChange.args[0][1].name, name);
        });

        it('can update value', () => {
            wrapper.setProps({ value: 1 });
            assert.equal(wrapper.prop('value'), 1);
            const selected = wrapper
                .find('Option')
                .at(0)
                .find('button[aria-checked=true]');
            assert.equal(selected.length, 1);
        });
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Option, RadioList.Option);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <RadioList value={3} onChange={handleChange}>
                <RadioList.Option value={1}>One</RadioList.Option>
                {null}
                <RadioList.Option value={2}>Two</RadioList.Option>
                <RadioList.Option value={3}>Three Three Three</RadioList.Option>
                {false}
                <RadioList.Option value={4}>Four</RadioList.Option>
                {undefined} word
            </RadioList>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('should handle disabled correctly', () => {
        const element = (
            <RadioList value={2} onChange={handleChange}>
                <RadioList.Option value={1}>One</RadioList.Option>
                {null}
                <RadioList.Option disabled value={2}>
                    Two
                </RadioList.Option>
                <RadioList.Option value={3}>Three</RadioList.Option>
            </RadioList>
        );
        wrapper = mount(element);

        assert.lengthOf(wrapper.find(RadioList.Option), 3);
        assert.lengthOf(
            wrapper
                .find(RadioList.Option)
                .find({ disabled: true })
                .hostNodes(),
            1,
            'individual option is disabled'
        );

        wrapper.setProps({ disabled: true });
        assert.lengthOf(
            wrapper
                .find(RadioList.Option)
                .find({ disabled: true })
                .hostNodes(),
            3,
            'all options disabled (because RadioList is disabled)'
        );
    });

    it('supports elementRef', () => {
        const elementRef = sinon.spy();
        const element = <RadioList elementRef={elementRef} />;
        wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
