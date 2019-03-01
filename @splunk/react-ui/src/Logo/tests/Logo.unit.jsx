/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { Splunk, Enterprise, Light, Cloud, Hunk } from '@splunk/react-ui/Logo';

describe('Logo', () => {
    it('Splunk renders', () => {
        const wrapper = mount(<Splunk />);
        assert.ok(wrapper);
    });
    it('Enterprise renders', () => {
        const wrapper = mount(<Enterprise />);
        assert.ok(wrapper);
    });
    it('Light renders', () => {
        const wrapper = mount(<Light />);
        assert.ok(wrapper);
    });
    it('Cloud renders', () => {
        const wrapper = mount(<Cloud />);
        assert.ok(wrapper);
    });
    it('Hunk renders', () => {
        const wrapper = mount(<Hunk />);
        assert.ok(wrapper);
    });
    it('Splunk inverted renders', () => {
        const wrapper = mount(<Splunk invert />);
        assert.ok(wrapper);
    });
});
