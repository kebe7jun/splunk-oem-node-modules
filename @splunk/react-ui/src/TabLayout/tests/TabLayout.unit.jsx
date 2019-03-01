/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import TabLayout, { Panel } from '@splunk/react-ui/TabLayout';

describe('TabLayout', () => {
    let wrapper;
    const handleChange = spy();

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        handleChange.reset();
    });

    function clickTab(idx) {
        wrapper
            .find('button')
            .at(idx)
            .simulate('click');
    }

    function assertTabActive(idx) {
        assert.isTrue(
            wrapper
                .find('Tab')
                .at(idx)
                .prop('active'),
            `Tab ${idx} is active`
        );
    }

    function assertPanelVisible(id) {
        assert.equal(
            wrapper
                .find('Panel')
                .at(0)
                .prop('panelId'),
            id,
            `Panel ${id} is visible`
        );
    }

    describe('Uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <TabLayout defaultActivePanelId="one" onChange={handleChange}>
                    <TabLayout.Panel label="One" panelId="one">
                        Lorem ipsum dolor sit amet, consectetur adipiscing In dictum metus enim, ac
                        ullamcorper ante condimentum at. Pellentesque habitant morbi tristique
                        senectus et netus et
                    </TabLayout.Panel>
                    <TabLayout.Panel label="Two" panelId="two">
                        Pellentesque habitant morbi tristique senectus et netus et Lorem ipsum dolor
                        sit amet, consectetur adipiscing In dictum metus enim, ac ullamcorper ante
                        condimentum at.
                    </TabLayout.Panel>
                </TabLayout>
            );
        });

        it('tab one active', () => {
            assertTabActive(0);
            assertPanelVisible('one');
        });

        it('fires callback', () => {
            clickTab(1);
            assert.ok(handleChange.calledOnce);
        });

        it('tab change', () => {
            clickTab(1);
            assertTabActive(1);
            assertPanelVisible('two');
        });
    });

    describe('Controlled', () => {
        beforeEach(() => {
            wrapper = mount(
                <TabLayout activePanelId="one" onChange={handleChange}>
                    <TabLayout.Panel label="One" panelId="one">
                        Lorem ipsum dolor sit amet, consectetur adipiscing In dictum metus enim, ac
                        ullamcorper ante condimentum at. Pellentesque habitant morbi tristique
                        senectus et netus et
                    </TabLayout.Panel>
                    <TabLayout.Panel label="Two" panelId="two">
                        Pellentesque habitant morbi tristique senectus et netus et Lorem ipsum dolor
                        sit amet, consectetur adipiscing In dictum metus enim, ac ullamcorper ante
                        condimentum at.
                    </TabLayout.Panel>
                </TabLayout>
            );
        });
        it('tab one active', () => {
            assertTabActive(0);
            assertPanelVisible('one');
        });
        it('fires callback', () => {
            clickTab(1);
            assert.ok(handleChange.calledOnce);
        });
        it('tab is not changed on click', () => {
            clickTab(1);
            assertTabActive(0);
            assertPanelVisible('one');
        });
        it('renders', () => {
            assert.ok(wrapper);
        });
        it('throws if the `activePanelId` cannot be found', () => {
            assert.throws(() => wrapper.setProps({ activePanelId: 'hidden' }));
        });
    });
    it('should handle subcomponents as named exports', () => {
        assert.equal(Panel, TabLayout.Panel);
    });
    it('should handle invalid values in children correctly', () => {
        const element = (
            <TabLayout activePanelId="one" onChange={handleChange}>
                <TabLayout.Panel label="One" panelId="one">
                    Lorem ipsum dolor sit amet, consectetur adipiscing In dictum metus enim, ac
                    ullamcorper ante condimentum at. Pellentesque habitant morbi tristique senectus
                    et netus et
                </TabLayout.Panel>
                {false}
                {null}
                {undefined} word
                <TabLayout.Panel label="Two" panelId="two">
                    Pellentesque habitant morbi tristique senectus et netus et Lorem ipsum dolor sit
                    amet, consectetur adipiscing In dictum metus enim, ac ullamcorper ante
                    condimentum at.
                </TabLayout.Panel>
            </TabLayout>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const panelRef = spy();
        const element = (
            <TabLayout activePanelId="one" elementRef={elementRef}>
                <TabLayout.Panel label="One" panelId="one" elementRef={panelRef}>
                    Lorem ipsum dolor sit amet
                </TabLayout.Panel>
            </TabLayout>
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

    it('supports disabled prop', () => {
        wrapper = mount(
            <TabLayout defaultActivePanelId="one" onChange={handleChange}>
                <TabLayout.Panel label="One" panelId="one">
                    Lorem ipsum dolor sit amet, consectetur adipiscing In dictum metus enim, ac
                    ullamcorper ante condimentum at. Pellentesque habitant morbi tristique senectus
                    et netus et
                </TabLayout.Panel>
                <TabLayout.Panel label="Two" panelId="two" disabled>
                    Pellentesque habitant morbi tristique senectus et netus et Lorem ipsum dolor sit
                    amet, consectetur adipiscing In dictum metus enim, ac ullamcorper ante
                    condimentum at.
                </TabLayout.Panel>
                <TabLayout.Panel label="Three" panelId="three">
                    Pellentesque habitant morbi tristique senectus et netus et Lorem ipsum dolor sit
                    amet, consectetur adipiscing In dictum metus enim, ac ullamcorper ante
                    condimentum at.
                </TabLayout.Panel>
            </TabLayout>
        );

        it('ignores tab change for disabled panel', () => {
            clickTab(1);
            assert.ok(!handleChange.called);
            assertTabActive(0);
        });

        it('performs tab change for enabled panel', () => {
            clickTab(2);
            assert.ok(handleChange.calledOnce);
            assertTabActive(2);
        });
    });
});
