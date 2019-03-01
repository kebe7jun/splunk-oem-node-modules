/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import RenderToLayer from '@splunk/react-ui/RenderToLayer';

describe('RenderToLayer', () => {
    it('renders correctly', () => {
        function render() {
            return 'Hello';
        }
        const wrapper = mount(<RenderToLayer render={render} />);
        assert.ok(wrapper);
    });
});
