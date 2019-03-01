/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';

describe('WaitSpinner', () => {
    it('renders with title', () => {
        const wrapper = mount(<WaitSpinner />);
        assert.equal(wrapper.find('title').text(), 'Waiting');
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <WaitSpinner elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
