/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Button from '@splunk/react-ui/Button';

describe('Button', () => {
    let wrapper;
    const handleClick = spy();

    beforeEach(() => {
        wrapper = mount(<Button label="World" onClick={handleClick} />);
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
        handleClick.reset();
    });

    it('renders a label', () => {
        assert.equal(wrapper.text(), 'World');
    });

    it('renders a `button` element', () => {
        assert.isTrue(wrapper.find('button').exists());
    });

    it('renders an `a` element when the `to` prop is provided', () => {
        wrapper = mount(<Button label="Hello" to="World" />);
        assert.isTrue(wrapper.find('a').exists());
    });

    it('invokes the `onClick` callback when clicked', () => {
        wrapper.simulate('click');
        assert.isTrue(handleClick.calledOnce);
    });

    it('adds an icon when external', () => {
        wrapper = mount(<Button label="Hello" to="World" openInNewContext />);
        assert.isTrue(wrapper.find('svg').exists());
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        wrapper = mount(<Button label="Hello" elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
