/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import JSONTree from '@splunk/react-ui/JSONTree';

const obj = {
    a: 1,
    b: [1, 2, 3],
    c: {
        d: 'this',
        e: ['is', 'a', 'test'],
    },
    f: true,
};
const json = JSON.stringify(obj);

describe('JSONTree', () => {
    it('correct number of values if expandChildren is false', () => {
        const wrapper = mount(<JSONTree json={json} expandChildren={false} />);
        assert.lengthOf(wrapper.find(`[valueType="number"]`), 1);
        assert.lengthOf(wrapper.find(`[valueType="string"]`), 0);
        assert.lengthOf(wrapper.find(`[valueType="boolean"]`), 1);
    });

    it('correct number of values if expandChildren is true', () => {
        const wrapper = mount(<JSONTree json={obj} expandChildren />);
        assert.lengthOf(wrapper.find(`[valueType="number"]`), 4);
        assert.lengthOf(wrapper.find(`[valueType="string"]`), 4);
        assert.lengthOf(wrapper.find(`[valueType="boolean"]`), 1);
    });

    it('calls onClickValue handler with correct key and value', () => {
        const onClickHandler = spy();
        const wrapper = mount(<JSONTree json={obj} onClickValue={onClickHandler} />);
        wrapper
            .find(`[valueType="boolean"]`)
            .first()
            .simulate('click');
        assert.isTrue(onClickHandler.calledOnce);
        assert.deepEqual(onClickHandler.args[0][1], { key: '.f', value: 'true' });
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const wrapper = mount(<JSONTree json={obj} expandChildren elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
