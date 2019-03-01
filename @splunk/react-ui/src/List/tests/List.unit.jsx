/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import List, { Item } from '@splunk/react-ui/List';

describe('List', () => {
    it('should handle invalid values in children correctly', () => {
        const element = (
            <List>
                <Item>Hello</Item>
                {false}
                <Item>World</Item>
                {undefined}
                {null} word
            </List>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('[data-test="item"]').hostNodes(), 2);
    });

    it('has unordered list for for default type', () => {
        const element = (
            <List>
                <Item>Hello</Item>
            </List>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('ul'), 1);
    });

    it('has unordered list for for disc type', () => {
        const element = (
            <List type="disc">
                <Item>Hello</Item>
            </List>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('ul'), 1);
    });

    it('has ordered list for for decimal type', () => {
        const element = (
            <List type="decimal">
                <Item>Hello</Item>
            </List>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('ol'), 1);
    });

    it('has ordered list for for lower-alpha type', () => {
        const element = (
            <List type="lower-alpha">
                <Item>Hello</Item>
            </List>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('ol'), 1);
    });

    it('has ordered list for for upper-alpha type', () => {
        const element = (
            <List type="upper-alpha">
                <Item>Hello</Item>
            </List>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('ol'), 1);
    });

    it('renders the text of a List item', () => {
        const element = (
            <List type="upper-alpha">
                <Item>Hello</Item>
            </List>
        );
        const wrapper = mount(element);
        const text = wrapper
            .find('[data-test="item"]')
            .hostNodes()
            .text();
        assert.strictEqual(text, 'Hello');
    });

    it('renders the correct number of list items', () => {
        const element = (
            <List>
                <Item>One</Item>
                <Item>Two</Item>
                <Item>Three</Item>
            </List>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('[data-test="item"]').hostNodes(), 3);
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Item, List.Item);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const itemRef = spy();
        const element = (
            <List elementRef={elementRef}>
                <Item elementRef={itemRef}>Two</Item>
            </List>
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
