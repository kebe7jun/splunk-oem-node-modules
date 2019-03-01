/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Accordion, { Panel } from '@splunk/react-ui/Accordion';

describe('Accordion', () => {
    let wrapper = null;
    const handleChange = spy();

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }

        handleChange.reset();
    });

    function findPanel(id) {
        return wrapper.find(Accordion.Panel).filterWhere(panel => panel.props().panelId === id);
    }

    function assertPanelOpen(id) {
        const panel = findPanel(id);
        assert.isTrue(panel.props().open, `Panel ${id} is open`);
    }

    function assertPanelClosed(id) {
        const panel = findPanel(id);
        assert.isFalse(panel.props().open, `Panel ${id} is closed`);
    }

    describe('Uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <Accordion defaultOpenPanelId={2} onChange={handleChange}>
                    <Accordion.Panel panelId={1} title="Panel 1">
                        <div id="panel1">The first panel.</div>
                    </Accordion.Panel>
                    <Accordion.Panel panelId={2} title="Panel 2">
                        <div id="panel2">The second panel.</div>
                    </Accordion.Panel>
                    <Accordion.Panel panelId={3} title="Panel 3">
                        <div id="panel3">The third panel.</div>
                    </Accordion.Panel>
                </Accordion>
            );
            assert.ok(wrapper);
        });

        it('should honor the `defaultOpenPanelId` prop', () => {
            assertPanelClosed(1);
            assertPanelOpen(2);
            assertPanelClosed(3);
        });

        it('hanldes open/close state internally', () => {
            wrapper
                .find('Clickable')
                .first()
                .simulate('click');
            assertPanelOpen(1);
            assertPanelClosed(2);
            assertPanelClosed(3);
        });

        it('invokes the onChange handler', () => {
            assert.isFalse(handleChange.called);
            wrapper
                .find('Clickable')
                .first()
                .simulate('click');
            assert.isTrue(handleChange.calledOnce);
            const callbackData = handleChange.args[0][1];
            assert.propertyVal(callbackData, 'panelId', 1);
            assert.propertyVal(callbackData, 'reason', 'toggleClick');
        });

        it('throws when trying to set `openPanelId`', () => {
            assert.throws(() => wrapper.setProps({ openPanelId: 1 }));
        });

        it('throws when trying to change the `defaultOpenPanelId`', () => {
            assert.throws(() => wrapper.setProps({ defaultOpenPanelId: 1 }));
        });
    });

    describe('Controlled', () => {
        beforeEach(() => {
            wrapper = mount(
                <Accordion openPanelId={2} onChange={handleChange}>
                    <Accordion.Panel panelId={1} title="Panel 1">
                        <div id="panel1">The first panel.</div>
                    </Accordion.Panel>
                    <Accordion.Panel panelId={2} title="Panel 2">
                        <div id="panel2">The second panel.</div>
                    </Accordion.Panel>
                    <Accordion.Panel panelId={3} title="Panel 3">
                        <div id="panel3">The third panel.</div>
                    </Accordion.Panel>
                </Accordion>
            );
            assert.ok(wrapper);
        });

        it('should honor the `value` prop', () => {
            assertPanelClosed(1);
            assertPanelOpen(2);
            assertPanelClosed(3);
        });

        it('can be updated with the `value` prop', () => {
            wrapper.setProps({ openPanelId: 1 });
            assertPanelOpen(1);
            assertPanelClosed(2);
            assertPanelClosed(3);
        });

        it('does not update internally', () => {
            wrapper
                .find('Clickable')
                .first()
                .simulate('click');
            assertPanelClosed(1);
            assertPanelOpen(2);
            assertPanelClosed(3);
        });

        it('invokes the onChange handler', () => {
            assert.isFalse(handleChange.called);
            wrapper
                .find('Clickable')
                .first()
                .simulate('click');
            assert.isTrue(handleChange.calledOnce);
            const callbackData = handleChange.args[0][1];
            assert.propertyVal(callbackData, 'panelId', 1);
            assert.propertyVal(callbackData, 'reason', 'toggleClick');
        });

        it('does not accept a `defaultOpenPanelId` prop at the same time as a `openPanelId` prop', () => {
            assert.throws(() => mount(<Accordion openPanelId={1} defaultOpenPanelId={1} />));
        });
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Panel, Accordion.Panel);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Accordion openPanelId={2} onChange={handleChange}>
                {undefined}
                <Accordion.Panel panelId={1} title="Panel 1">
                    <div id="panel1">The first panel.</div>
                </Accordion.Panel>
                {null}
                <Accordion.Panel panelId={2} title="Panel 2">
                    <div id="panel2">The second panel.</div>
                </Accordion.Panel>
                {false} word
            </Accordion>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const panelRef = spy();
        const element = (
            <Accordion elementRef={elementRef} openPanelId={2} onChange={handleChange}>
                <Accordion.Panel elementRef={panelRef} panelId={1} title="Panel 1">
                    <div id="panel1">The first panel.</div>
                </Accordion.Panel>
            </Accordion>
        );
        wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        assert.isTrue(panelRef.calledOnce, 'panelRef was called.');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isTrue(panelRef.calledTwice, 'panelRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
        assert.isNull(panelRef.args[1][0], 'panelRef was called with null on unmount');
    });
});
