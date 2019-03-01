/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import StaticContent from '@splunk/react-ui/StaticContent';

describe('StaticContent', () => {
    it('renders, with string', () => {
        const wrapper = mount(
            <ControlGroup>
                <StaticContent> Hello, world! </StaticContent>
            </ControlGroup>
        );
        assert.include(wrapper.text(), 'Hello, world!');
    });

    it('supports elements as child', () => {
        const wrapper = mount(
            <ControlGroup>
                <StaticContent>
                    <div>Static Content</div>
                </StaticContent>
            </ControlGroup>
        );
        assert.include(wrapper.text(), 'Static Content');
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <StaticContent elementRef={elementRef}>Tesing</StaticContent>;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
