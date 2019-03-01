/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Box from '@splunk/react-ui/Box';

describe('Box', () => {
    it('renders children correctly', () => {
        const wrapper = mount(<Box>Hello World</Box>);
        assert.equal(wrapper.text(), 'Hello World');
    });

    it('passses props through', () => {
        const wrapper = mount(<Box className="test">Hello World</Box>);
        assert.isTrue(wrapper.find('div').hasClass('test'));
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const wrapper = mount(<Box elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
