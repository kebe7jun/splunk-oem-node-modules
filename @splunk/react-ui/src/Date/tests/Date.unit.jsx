/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import moment from '@splunk/moment';
import Date from '@splunk/react-ui/Date';
import { keycode } from '@splunk/ui-utils/keyboard';

describe('Date', () => {
    it('calendar opens on click', () => {
        const wrapper = mount(<Date defaultValue={'1776-07-04'} />);
        wrapper.simulate('click');
        assert.ok(wrapper.find('Calendar'));
    });

    it('updates when valid text string is entered', () => {
        const newString = '4/4/2017';
        const wrapper = mount(<Date defaultValue={'1776/07/04'} />);

        wrapper.find('input').simulate('change', { target: { value: newString } });
        wrapper.find('input').simulate('keyDown', { key: 'Enter', keyCode: keycode('Enter') });
        assert.equal(wrapper.find('input').prop('value'), newString);
    });

    it('does not update on invalid text string', () => {
        const dateString = '3/3/2017';
        const formatString = moment(dateString, Date.momentFormat).format('l');
        const invalidDate = 'garbageString!!!@';
        const wrapper = mount(<Date defaultValue={dateString} />);

        wrapper.find('input').simulate('change', { target: { value: invalidDate } });
        wrapper.find('input').simulate('keyDown', { key: 'Enter', keyCode: keycode('Enter') });
        assert.strictEqual(wrapper.find('input').prop('value'), formatString);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const wrapper = mount(<Date elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called on mount');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
    });
});
