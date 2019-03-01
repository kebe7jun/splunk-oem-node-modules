/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Link from '@splunk/react-ui/Link';
import Paragraph from '@splunk/react-ui/Paragraph';

const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut';

describe('Paragraph', () => {
    it('renders children correctly', () => {
        const wrapper = mount(<Paragraph>{lorem}</Paragraph>);
        assert.equal(wrapper.text(), lorem);
    });

    it('handles links within text correctly', () => {
        const wrapper = mount(
            <Paragraph>
                Find a <Link to="http://www.duckduckgo.com">Duck</Link>!
            </Paragraph>
        );
        assert.equal(wrapper.text(), 'Find a Duck!');
        assert.isTrue(wrapper.find('Link').exists());
        assert.equal(wrapper.find('Link').props().to, 'http://www.duckduckgo.com');
    });

    it('handles attributes correctly', () => {
        const wrapper = mount(<Paragraph data-test>{lorem}</Paragraph>);
        assert.isTrue(wrapper.find('[data-test]').exists());
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <Paragraph elementRef={elementRef}>{lorem}</Paragraph>;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
