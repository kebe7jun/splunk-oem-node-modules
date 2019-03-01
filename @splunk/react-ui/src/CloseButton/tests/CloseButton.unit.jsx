/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import CloseButton from '@splunk/react-ui/CloseButton';

describe('CloseButton', () => {
    it('calls the click handler', () => {
        const handleClick = spy();
        const wrapper = mount(<CloseButton onClick={handleClick} />);
        wrapper.simulate('click');
        assert.isTrue(handleClick.calledOnce, 'the click handler was called');
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const wrapper = mount(<CloseButton elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef called on mount');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef called again on unmount');
    });
});
