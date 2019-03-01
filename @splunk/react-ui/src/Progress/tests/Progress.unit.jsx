/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Progress from '@splunk/react-ui/Progress';

describe('Progress', () => {
    it('renders empty without percentage', () => {
        const wrapper = mount(<Progress />);
        assert.lengthOf(wrapper.find('div'), 1);
    });

    it('renders with percentage', () => {
        const wrapper = mount(<Progress percentage={30} />);
        assert.isAbove(wrapper.find('div').length, 1);
    });

    it('has aria attributes', () => {
        const wrapper = mount(<Progress percentage={30} />);
        const props = wrapper.find('Tooltip').props();

        assert.equal(props.role, 'progressbar');
        assert.equal(props['aria-valuemin'], 0);
        assert.equal(props['aria-valuenow'], 30);
        assert.equal(props['aria-valuemax'], 100);
    });

    it('updates', () => {
        const wrapper = mount(<Progress />);
        assert.lengthOf(wrapper.find('div'), 1);
        wrapper.setProps({ percentage: 0 });
        assert.isAbove(wrapper.find('div').length, 1);
        wrapper.setProps({ percentage: 30 });
        assert.isAbove(wrapper.find('div').length, 1);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <Progress elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
