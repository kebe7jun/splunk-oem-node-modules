/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Message from '@splunk/react-ui/Message';
import Link from '@splunk/react-ui/Link';

describe('Message', () => {
    it('renders info', () => {
        const wrapper = mount(<Message type="info">Hello</Message>);
        assert.ok(wrapper.find('InfoCircle').exists(), 'renders info icon');
    });

    it('renders success', () => {
        const wrapper = mount(<Message type="success" />);
        assert.ok(wrapper.find('Success').exists(), 'renders success icon');
    });

    it('renders warning ', () => {
        const wrapper = mount(<Message type="warning" />);
        assert.ok(wrapper.find('Warning').exists(), 'renders warning icon');
    });

    it('renders error', () => {
        const wrapper = mount(<Message type="error" />);
        assert.ok(wrapper.find('Error').exists(), 'renders error icon');
    });

    it('renders children correctly', () => {
        const wrapper = mount(
            <Message>
                Hello <Link>World</Link>
            </Message>
        );

        const iconText = wrapper.find('Warning').text();

        assert.equal(wrapper.text().substring(iconText.length), 'Hello World', 'renders text');
        assert.ok(wrapper.find('Link').exists(), 'renders link');
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <Message type="error" elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });

    it('renders a hook for the content', () => {
        const wrapper = mount(
            <Message>
                Hello <Link>World</Link>
            </Message>
        );
        const content = wrapper.find('[data-test="content"]').hostNodes();
        assert.lengthOf(content, 1, 'renders a hook on the content');
        assert.strictEqual(content.text(), 'Hello World', 'the content has the correct text');
    });
});
