/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Link from '@splunk/react-ui/Link';

describe('Link', () => {
    it('renders children correctly', () => {
        const wrapper = mount(<Link to="/home">Go Home</Link>);
        assert.equal(wrapper.text(), 'Go Home');
    });

    it('renders with the correct href', () => {
        const wrapper = mount(<Link to="/home">Go Home</Link>);
        assert.equal(wrapper.find('a').prop('href'), '/home');
    });

    it('adds an icon when external', () => {
        const wrapper = mount(
            <Link to="/home" openInNewContext>
                Go Home
            </Link>
        );
        assert.isTrue(wrapper.find('svg').exists());
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const wrapper = mount(<Link to="/Hello" elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
    });
});
