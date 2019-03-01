/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import ButtonSimple from '@splunk/react-ui/ButtonSimple';

describe('ButtonSimple', () => {
    let wrapper;
    const handleClick = spy();

    beforeEach(() => {
        wrapper = mount(<ButtonSimple onClick={handleClick}>World</ButtonSimple>);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
        handleClick.reset();
    });

    it('renders children', () => {
        assert.equal(wrapper.text(), 'World');
    });

    it('renders a `button` element', () => {
        assert.isTrue(wrapper.find('button').exists());
    });

    it('renders an `a` element when the `to` prop is provided', () => {
        wrapper = mount(<ButtonSimple label="Hello" to="World" />);
        assert.isTrue(wrapper.find('a').exists());
    });

    it('invokes the `onClick` callback when clicked', () => {
        wrapper.simulate('click');
        assert.isTrue(handleClick.calledOnce);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <ButtonSimple elementRef={elementRef}>Hello</ButtonSimple>;
        wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
