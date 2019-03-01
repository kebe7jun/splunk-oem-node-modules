/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Scroll from '@splunk/react-ui/Scroll';

describe('Scroll', () => {
    it('renders', () => {
        const wrapper = mount(<Scroll />);
        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <Scroll elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
