/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Select, { Heading, Option, Divider } from '@splunk/react-ui/Select';

describe('Select', () => {
    it('should handle subcomponents as named exports', () => {
        assert.equal(Option, Select.Option);
        assert.equal(Heading, Select.Heading);
        assert.equal(Divider, Select.Divider);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Select>
                <Option label="Up" value="1" />
                {false}
                <Option label="Up and Down" value="8" />
                {undefined}
                {null}
                <Option label="Down and Under" value="3" /> word
            </Select>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <Select elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
