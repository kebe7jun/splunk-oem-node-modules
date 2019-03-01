/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import CardLayout from '@splunk/react-ui/CardLayout';

describe('CardLayout', () => {
    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <CardLayout elementRef={elementRef}>Hello</CardLayout>;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });

    it('handles empty children', () => {
        const element = <CardLayout />;
        const wrapper = shallow(element);
        assert.strictEqual(wrapper.children().length, 0, 'No children to render');
    });

    it('ignores null children', () => {
        const element = <CardLayout>{null}</CardLayout>;
        const wrapper = shallow(element);
        assert.strictEqual(wrapper.children().length, 0, 'No children to render');
    });

    it('ignores text children', () => {
        const element = <CardLayout>oh hello there</CardLayout>;
        const wrapper = shallow(element);
        assert.strictEqual(wrapper.children().length, 0, 'No children to render');
    });

    it('passes through children that are React elements', () => {
        const element = (
            <CardLayout>
                <div />
                <div />
            </CardLayout>
        );
        const wrapper = shallow(element);
        assert.strictEqual(wrapper.children().length, 2, 'Two children rendered');
    });

    it('sets gutterSize as a combo of padding and margins on children', () => {
        const props = { gutterSize: 20 };
        const element = (
            <CardLayout {...props}>
                <div />
                <div />
            </CardLayout>
        );
        const wrapper = shallow(element);
        assert.strictEqual(wrapper.get(0).props.style.padding, props.gutterSize / 2, 'Padding set');
        wrapper.children().forEach(child => {
            assert.strictEqual(child.get(0).props.margin, props.gutterSize / 2, 'Margin set');
        });
    });

    it('injects card width into children', () => {
        const props = { cardWidth: 200 };
        const element = (
            <CardLayout {...props}>
                <div />
                <div />
            </CardLayout>
        );
        const wrapper = shallow(element);
        assert.strictEqual(wrapper.children().length, 2, 'Two children rendered');
        wrapper.children().forEach(child => {
            const childProps = child.get(0).props;
            assert.strictEqual(childProps.minWidth, props.cardWidth, 'Minimum width set');
            assert.strictEqual(childProps.maxWidth, props.cardWidth, 'Maximum width set');
        });
    });

    it('injects card minimum width into children', () => {
        const props = { cardMinWidth: 200 };
        const element = (
            <CardLayout {...props}>
                <div />
                <div />
            </CardLayout>
        );
        const wrapper = shallow(element);
        assert.strictEqual(wrapper.children().length, 2, 'Two children rendered');
        wrapper.children().forEach(child => {
            const childProps = child.get(0).props;
            assert.strictEqual(childProps.minWidth, props.cardMinWidth, 'Minimum width set');
            assert.strictEqual(childProps.maxWidth, undefined, 'No maximum width set');
        });
    });

    it('injects card maximum width into children', () => {
        const props = { cardMaxWidth: 200 };
        const element = (
            <CardLayout {...props}>
                <div />
                <div />
            </CardLayout>
        );
        const wrapper = shallow(element);
        assert.strictEqual(wrapper.children().length, 2, 'Two children rendered');
        wrapper.children().forEach(child => {
            const childProps = child.get(0).props;
            assert.strictEqual(childProps.minWidth, undefined, 'Minimum width set');
            assert.strictEqual(childProps.maxWidth, props.cardMaxWidth, 'No maximum width set');
        });
    });
});
