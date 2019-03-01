/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Clickable from '@splunk/react-ui/Clickable';
import CollapsiblePanel from '@splunk/react-ui/CollapsiblePanel';

describe('CollapsiblePanel', () => {
    let wrapper = null;
    const handleRequestClose = spy();
    const handleRequestOpen = spy();
    const elementRef = spy();

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
        handleRequestOpen.reset();
        handleRequestClose.reset();
        elementRef.reset();
    });

    function findPanel() {
        return wrapper.find('TransitionOpen');
    }

    function assertPanelOpen() {
        assert.isTrue(findPanel().props().open, 'Panel is open');
    }

    function assertPanelClosed() {
        assert.isFalse(findPanel().props().open, 'Panel is closed');
    }

    function assertCallbackData(data) {
        assert.propertyVal(data, 'panelId', 'Test');
        assert.propertyVal(data, 'reason', 'toggleClick');
    }

    describe('Uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <CollapsiblePanel
                    elementRef={elementRef}
                    onRequestClose={handleRequestClose}
                    onRequestOpen={handleRequestOpen}
                    panelId="Test"
                    title="Test"
                >
                    <div id="panel-content">Hello World!</div>
                </CollapsiblePanel>
            );
            assert.ok(wrapper);
        });

        it('handles open/closed state internally', () => {
            assertPanelClosed();
            wrapper.find(Clickable).simulate('click');
            assertPanelOpen();
            wrapper.find(Clickable).simulate('click');
            assertPanelClosed();
        });

        it('invokes the onRequestClose handler', () => {
            wrapper.setState({ open: true });
            assert.isFalse(handleRequestClose.called);
            wrapper.find(Clickable).simulate('click');
            assert.isTrue(handleRequestClose.calledOnce);
            assertCallbackData(handleRequestClose.args[0][0]);
            assert.isFalse(handleRequestOpen.called);
        });

        it('invokes the onRequestOpen handler', () => {
            assert.isFalse(handleRequestOpen.called);
            wrapper.find(Clickable).simulate('click');
            assert.isTrue(handleRequestOpen.calledOnce);
            assertCallbackData(handleRequestOpen.args[0][0]);
            assert.isFalse(handleRequestClose.called);
        });

        it('honors the defaultValue', () => {
            wrapper = mount(
                <CollapsiblePanel title="Test" defaultOpen>
                    <div id="panel-content">Hello World!</div>
                </CollapsiblePanel>
            );
            assertPanelOpen();
        });

        it('supports elementRef', () => {
            assert.isTrue(elementRef.calledOnce, 'elementRef called on mount');
            wrapper.unmount();
            assert.isTrue(elementRef.calledTwice, 'elementRef called again on unmount');
        });

        it('throws when trying to set open', () => {
            assert.throws(() => wrapper.setProps({ open: true }));
        });

        it('throws when trying to change the defaultOpen', () => {
            assert.throws(() => wrapper.setProps({ defaultOpen: true }));
        });
    });

    describe('Controlled', () => {
        beforeEach(() => {
            wrapper = mount(
                <CollapsiblePanel
                    onRequestClose={handleRequestClose}
                    onRequestOpen={handleRequestOpen}
                    open
                    panelId="Test"
                    title="Test"
                >
                    <div id="panel-content">Hello World!</div>
                </CollapsiblePanel>
            );
            assert.ok(wrapper);
        });

        it('honors the open prop', () => {
            assertPanelOpen();
        });

        it('can be updated with the open prop', () => {
            wrapper.setProps({ open: false });
            assertPanelClosed();
        });

        it('does not update internally', () => {
            assertPanelOpen();
            wrapper.find(Clickable).simulate('click');
            assertPanelOpen();
        });

        it('invokes the onRequestClose handler', () => {
            assert.isFalse(handleRequestClose.called);
            wrapper.find(Clickable).simulate('click');
            assert.isTrue(handleRequestClose.calledOnce);
            assertCallbackData(handleRequestClose.args[0][0]);
            assert.isFalse(handleRequestOpen.called);
        });

        it('invokes the onRequestOpen handler', () => {
            wrapper.setProps({ open: false });
            assert.isFalse(handleRequestOpen.called);
            wrapper.find(Clickable).simulate('click');
            assert.isTrue(handleRequestOpen.calledOnce);
            assertCallbackData(handleRequestOpen.args[0][0]);
            assert.isFalse(handleRequestClose.called);
        });

        it('does not accept a defaultOpen', () => {
            assert.throws(
                () =>
                    (wrapper = mount(
                        <CollapsiblePanel defaultOpen={false} open={false} title="Test" />
                    ))
            );
        });
    });
});
