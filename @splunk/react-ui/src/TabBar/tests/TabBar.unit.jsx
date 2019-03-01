/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import TabBar, { Tab } from '@splunk/react-ui/TabBar';

describe('TabBar', () => {
    let wrapper;
    const handleChange = spy();

    beforeEach(() => {
        wrapper = mount(
            <TabBar onChange={handleChange} activeTabId="one">
                <TabBar.Tab label="One" tabId="one" />
                <TabBar.Tab label="Two" tabId="two" />
            </TabBar>
        );
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
        handleChange.reset();
    });

    it('fires callback', () => {
        wrapper
            .find('button')
            .at(1)
            .simulate('click');
        assert.ok(handleChange.calledOnce);
        assert.equal(handleChange.args[0][1].selectedTabId, 'two');
    });

    it('prop change', () => {
        wrapper.setProps({ activeTabId: 'two' });
        const secondTab = wrapper.find('Tab').at(1);
        assert.isTrue(secondTab.prop('active'));
        assert.strictEqual(secondTab.prop('tabId'), 'two');
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Tab, TabBar.Tab);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <TabBar onChange={handleChange} activeTabId="one">
                {null}
                {undefined}
                <TabBar.Tab label="One" tabId="one" />
                <TabBar.Tab label="Two" tabId="two" />
                {false} word
            </TabBar>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const tabRef = spy();
        const element = (
            <TabBar activeTabId="one" elementRef={elementRef}>
                <TabBar.Tab label="One" tabId="one" elementRef={tabRef} />
            </TabBar>
        );
        wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        assert.isTrue(tabRef.calledOnce, 'tabRef was called.');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isTrue(tabRef.calledTwice, 'tabRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
        assert.isNull(tabRef.args[1][0], 'tabRef was called with null on unmount');
    });
});
