/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Menu, { Item, Heading, Divider } from '@splunk/react-ui/Menu';

describe('Menu', () => {
    it('should handle subcomponents as named exports', () => {
        assert.equal(Item, Menu.Item);
        assert.equal(Divider, Menu.Divider);
        assert.equal(Heading, Menu.Heading);
    });

    it('should handle invalid values in children correctly', () => {
        const wrapper = mount(
            <Menu>
                {' '}
                word
                <Item label="Lorem" />
                {false}
                <Item label="Ipsum" />
                {undefined}
                {null} word
            </Menu>
        );
        assert.lengthOf(wrapper.find(Item), 2);
    });

    it('should render the correct number of elements', () => {
        const wrapper = mount(
            <Menu>
                <Item label="Events" />
                <Item label="Statistics Table" />
                <Heading>Chart</Heading>
                <Item label="Line Chart" />
                <Item label="Area Chart" />
                <Item label="Column Chart" />
                <Divider />
                <Item label="Bar Chart" />
                <Item label="Pie Chart" />
                <Item label="Scatter Chart" />
                <Item label="Bubble Chart" />
                <Heading>Value</Heading>
                <Item label="Single Value" />
                <Item label="Radial Gauge" />
                <Divider />
                <Item label="Filler Gauge" />
                <Item label="Marker Gauge" />
                <Heading>Map</Heading>
                <Item label="Cluster Map" />
                <Item label="Choropleth Map" />
            </Menu>
        );
        assert.lengthOf(wrapper.find(Item), 15);
        assert.lengthOf(wrapper.find(Heading), 3);
        assert.lengthOf(wrapper.find(Divider), 2);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const itemRef = spy();
        const element = (
            <Menu elementRef={elementRef}>
                <Item label="Lorem" elementRef={itemRef} />
            </Menu>
        );
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        assert.isTrue(itemRef.calledOnce, 'itemRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isTrue(itemRef.calledTwice, 'itemRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
        assert.isNull(itemRef.args[1][0], 'itemRef was called with null on unmount');
    });
});
