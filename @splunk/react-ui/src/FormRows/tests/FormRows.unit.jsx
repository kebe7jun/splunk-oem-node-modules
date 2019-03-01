/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import FormRows, { Row } from '@splunk/react-ui/FormRows';

describe('FormRows', () => {
    it('onRequestAdd fires callback', () => {
        const handleRequestAdd = spy();
        const wrapper = mount(<FormRows onRequestAdd={handleRequestAdd} />);
        wrapper
            .find('[data-test="add-row"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(handleRequestAdd.calledOnce);
    });

    it('onRequestRemove fires callback with correct index', () => {
        const handleRequestRemove = spy();
        const wrapper = mount(
            <FormRows>
                <Row key="0" index={0} onRequestRemove={handleRequestRemove}>
                    <div>Lorem ipsum</div>
                </Row>
                <Row key="1" index={1} onRequestRemove={handleRequestRemove}>
                    <div>Lorem ipsum</div>
                </Row>
            </FormRows>
        );
        wrapper
            .find('Row')
            .at(1)
            .find('[data-test="remove"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(handleRequestRemove.calledOnce, 'The callback was called once.');
        assert.strictEqual(
            handleRequestRemove.args[0][1].index,
            1,
            'The correct index was provided.'
        );
    });

    it('should handle invalid values in children correctly', () => {
        const handleRequestRemove = spy();
        const element = (
            <FormRows>
                {undefined}
                {false}
                <FormRows.Row key="rowGuy" index={0} onRequestRemove={handleRequestRemove}>
                    <div>Lorem ipsum</div>
                </FormRows.Row>
                {null} word
            </FormRows>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('Row'), 1);
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Row, FormRows.Row);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const rowRef = spy();
        const wrapper = mount(
            <FormRows elementRef={elementRef}>
                <FormRows.Row elementRef={rowRef} index={0}>
                    <div>Lorem ipsum</div>
                </FormRows.Row>
            </FormRows>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        assert.isTrue(rowRef.calledOnce, 'rowRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isTrue(rowRef.calledTwice, 'rowRef was called again on unmount');
    });
});
