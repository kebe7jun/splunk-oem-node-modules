/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';

describe('ScreenReaderContent', () => {
    it('renders text to the dom', () => {
        const wrapper = mount(<ScreenReaderContent>Testing</ScreenReaderContent>);
        assert.equal(wrapper.text(), 'Testing');
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <ScreenReaderContent elementRef={elementRef}>Testing</ScreenReaderContent>;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
