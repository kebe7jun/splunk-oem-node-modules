/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import File, { Item } from '@splunk/react-ui/File';

describe('File', () => {
    it('calls the onRequestAdd callback', () => {
        const handleRequestAdd = spy();
        const wrapper = mount(<File onRequestAdd={handleRequestAdd} />);

        wrapper
            .find('[data-test="file-input"]')
            .hostNodes()
            .simulate('change');
        assert.isTrue(handleRequestAdd.calledOnce);
    });

    it('calls the onRequestRemove callback', () => {
        const handleRemoveFile = spy();
        const wrapper = mount(
            <File onRequestRemove={handleRemoveFile}>
                <File.Item name="a file name" />
            </File>
        );

        wrapper
            .find('[data-test="item"] [data-test="remove"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(handleRemoveFile.calledOnce);
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Item, File.Item);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <File>
                {undefined}
                {false}
                <File.Item name="a file name" />
                {null} word
            </File>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('[data-test="item"]').hostNodes(), 1);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const itemRef = spy();
        const wrapper = mount(
            <File elementRef={elementRef}>
                <File.Item name="a file name" elementRef={itemRef} />
            </File>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef called on mount');
        assert.isTrue(itemRef.calledOnce, 'itemRef called on mount');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef called again on unmount');
        assert.isTrue(itemRef.calledTwice, 'itemRef called again on unmount');
    });
});
