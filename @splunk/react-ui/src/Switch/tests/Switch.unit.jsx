/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Switch from '@splunk/react-ui/Switch';

describe('Switch', () => {
    it('invokes the onClick callback', () => {
        const handleClick = spy();
        const wrapper = mount(
            <Switch onClick={handleClick} value={1}>
                One
            </Switch>
        );
        wrapper
            .find('[data-test="button"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(handleClick.calledOnce);
        assert.strictEqual(
            handleClick.args[0][1].value,
            1,
            'The correct value is passed to the callback.'
        );
    });
    // can't test "calls click handler on label click" because enzyme doesn't propagate the event

    it('does not invoke the onClick callback when disabled', () => {
        const handleClick = spy();
        const wrapper = mount(
            <Switch onClick={handleClick} value={1} disabled>
                One
            </Switch>
        );
        wrapper
            .find('[data-test="button"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(handleClick.notCalled);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const wrapper = mount(
            <Switch value={1} elementRef={elementRef}>
                One
            </Switch>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
