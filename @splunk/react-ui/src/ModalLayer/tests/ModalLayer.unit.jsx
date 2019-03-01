/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import ModalLayer from '@splunk/react-ui/ModalLayer';

describe('ModalLayer', () => {
    it('renders', () => {
        const wrapper = mount(<ModalLayer />);
        assert.ok(wrapper);
    });
});
