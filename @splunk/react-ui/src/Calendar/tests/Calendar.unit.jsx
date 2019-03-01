/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Calendar from '@splunk/react-ui/Calendar';

describe('Calendar', () => {
    it('renders', () => {
        const wrapper = mount(<Calendar />);
        assert.ok(wrapper);
    });

    it('renders with props', () => {
        const wrapper = mount(<Calendar value="1776-7-4" />);
        assert.ok(wrapper);
    });

    it('returns object with date string on day click', () => {
        const handleChange = sinon.spy();
        const wrapper = mount(<Calendar value="1776-7-4" onChange={handleChange} />);
        wrapper
            .find('[data-test-day="1"]')
            .hostNodes()
            .simulate('click');
        assert.deepEqual(handleChange.args[0][1].value, '1776-07-01');
    });
});
