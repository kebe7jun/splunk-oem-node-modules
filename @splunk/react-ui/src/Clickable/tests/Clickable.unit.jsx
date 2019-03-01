/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Clickable from '@splunk/react-ui/Clickable';

describe('Clickable', () => {
    it('calls the click handler on click', () => {
        const handleClick = spy();
        const wrapper = mount(<Clickable onClick={handleClick} />);
        wrapper.simulate('click');
        assert.isTrue(handleClick.calledOnce, 'the click handler was called');
    });

    it('should have type="button" if it is button', () => {
        const disabled = mount(<Clickable disabled />);
        assert.equal(disabled.find('button').prop('type'), 'button');
    });

    it('should overwrite button type if needed', () => {
        const wrapper = mount(<Clickable disabled type="saywhat" />);
        assert.equal(wrapper.find('button').prop('type'), 'saywhat');
    });

    it('renders a `button` element', () => {
        const wrapper = mount(<Clickable label="Hello" />);
        assert.isTrue(wrapper.find('button').exists());
    });

    it('renders an `a` element when the `to` prop is provided', () => {
        const wrapper = mount(<Clickable label="Hello" to="World" />);
        assert.isTrue(wrapper.find('a').exists());
    });

    it('renders a disabled `button` element when the `to` prop is provided and disabled', () => {
        const wrapper = mount(<Clickable label="Hello" to="World" disabled />);
        assert.isTrue(wrapper.find('button[disabled]').exists());
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const wrapper = mount(<Clickable label="Hello" elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef called on mount');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef called again on unmount');
    });
});
