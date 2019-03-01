/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Heading from '@splunk/react-ui/Heading';
import Link from '@splunk/react-ui/Link';

describe('Heading', () => {
    it('renders children correctly', () => {
        const wrapper = mount(
            <Heading level={1}>
                Hello <Link>World</Link>
            </Heading>
        );
        assert.equal(wrapper.text(), 'Hello World', 'Renders text');
        assert.ok(wrapper.find('Link').exists(), 'Renders Child elements');
    });

    it('uses correct tag', () => {
        for (let i = 1; i <= 4; i += 1) {
            const wrapper = mount(<Heading level={i}>Heading {i}</Heading>);
            assert.equal(wrapper.html().substring(0, 3), `<h${i}`, `level ${i} uses h${i} tag`);
        }
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const wrapper = mount(
            <Heading level={1} elementRef={elementRef}>
                Hello <Link>World</Link>
            </Heading>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
