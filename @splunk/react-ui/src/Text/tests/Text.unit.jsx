/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Text from '@splunk/react-ui/Text';

describe('Text', () => {
    describe('Controlled', () => {
        it('honors value', () => {
            assert.equal(
                mount(<Text value="goodbye" />)
                    .find('[data-test="textbox"]')
                    .hostNodes()
                    .instance().value,
                'goodbye'
            );
        });

        it('invokes the onChange callback', () => {
            const name = 'malta';
            const handleChange = sinon.spy();
            mount(<Text onChange={handleChange} value="" name={name} />)
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('change', { target: { value: 'hello' } });
            assert(handleChange.calledOnce, 'The onChange handler is called exactly once');
            assert.equal(
                handleChange.args[0][1].value,
                'hello',
                'The onChange handler is passed the new value'
            );

            assert.equal(handleChange.args[0][1].value, 'hello');
            assert.equal(handleChange.args[0][1].name, name);
        });

        it('callback can update value', () => {
            let input;
            const handleChange = sinon.spy((e, { value }) => input.setProps({ value }));
            input = mount(<Text onChange={handleChange} value="" />);

            input
                .find('[data-test="textbox"]')
                .hostNodes()
                .simulate('change', { target: { value: 'hello' } });

            assert.equal(
                input
                    .find('[data-test="textbox"]')
                    .hostNodes()
                    .instance().value,
                'hello',
                'The user can update the controlled field value'
            );
        });
    });

    describe('Uncontrolled', () => {
        it('sets default value', () => {
            const input = mount(<Text defaultValue="goodbye" />);
            assert.equal(
                input
                    .find('[data-test="textbox"]')
                    .hostNodes()
                    .instance().value,
                'goodbye',
                'The default value populates the field'
            );
        });

        it('invokes the onChange callback', () => {
            const name = 'liechtenstein';
            const handleChange = sinon.spy();
            const input = mount(<Text defaultValue="goodbye" onChange={handleChange} name={name} />)
                .find('[data-test="textbox"]')
                .hostNodes();

            input.simulate('change', { target: { value: 'hello' } });
            assert.equal(
                input.instance().value,
                'hello',
                'The user can update the uncontrolled field value'
            );

            assert.equal(handleChange.args[0][1].value, 'hello');
            assert.equal(handleChange.args[0][1].name, name);
        });

        it('throws if mixing controlled and uncontrolled', () => {
            const handleChange = sinon.spy();
            assert.throws(() =>
                mount(<Text value="goodbye" onChange={handleChange} defaultValue="hello" />)
            );
        });

        it('throws if update defaultValue', () => {
            const input = mount(<Text defaultValue="hello" />);
            assert.throws(() => input.setProps({ defaultValue: 'goodbye' }));
        });
    });

    it('supports elementRef', () => {
        const elementRef = sinon.spy();
        const element = <Text elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
