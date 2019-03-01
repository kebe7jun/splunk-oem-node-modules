/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Tooltip from '@splunk/react-ui/Tooltip';

describe('Tooltip', () => {
    describe('uncontrolled', () => {
        let container;
        let wrapper;
        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
            wrapper = mount(<Tooltip content="I'm a little tooltip." />, {
                attachTo: container,
            });
            assert.ok(wrapper);
        });

        afterEach(() => {
            container.remove();
            wrapper.unmount();
            container = null;
            wrapper = null;
        });

        it('opens and closes correctly on focus events', () => {
            assert.isFalse(wrapper.state('open'));
            wrapper.find('Clickable').simulate('focus');
            assert.isTrue(wrapper.state('open'));
            wrapper.find('Clickable').simulate('blur');
            assert.isFalse(wrapper.state('open'));
        });

        it('throws if set open prop', () => {
            assert.throws(() => wrapper.setProps({ open: true }));
        });
    });

    describe('controlled', () => {
        let container;
        let wrapper;
        const handleRequestClose = sinon.spy();
        const handleRequestOpen = sinon.spy();

        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);

            wrapper = mount(
                <Tooltip
                    content="I'm a little tooltip."
                    onRequestClose={handleRequestClose}
                    onRequestOpen={handleRequestOpen}
                    open={false}
                />,
                {
                    attachTo: container,
                }
            );
            assert.ok(wrapper);
        });

        afterEach(() => {
            container.remove();
            wrapper.unmount();
            container = null;
            wrapper = null;

            handleRequestClose.reset();
            handleRequestOpen.reset();
        });

        it('focus events trigger callbacks', () => {
            wrapper.find('Clickable').simulate('focus');
            assert(
                handleRequestOpen.calledOnce,
                'The onRequestOpen handler is called exactly once'
            );
            wrapper.find('Clickable').simulate('blur');
            assert(
                handleRequestClose.calledOnce,
                'The onRequestClose handler is called exactly once'
            );
        });
    });

    it('supports elementRef', () => {
        const elementRef = sinon.spy();
        const element = <Tooltip content="bing." elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
