/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Color from '@splunk/react-ui/Color';

describe('Color', () => {
    it('mount color, uncontrolled', () => {
        const wrapper = mount(<Color defaultValue="#fff" />);
        assert.ok(wrapper);
        wrapper.find('[data-test="color"]');
        wrapper.unmount();
    });

    it('mount color, controlled', () => {
        const wrapper = mount(<Color value="#abcdef9" />);
        assert.ok(wrapper);
        wrapper.find('[data-test="color"]');
        wrapper.unmount();
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <Color elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });

    [
        { color: '#23FD58', expected: true },
        { color: '^23FD58', expected: false },
        { color: '#23fd58', expected: true },
        { color: '#0000', expected: false },
        { color: '#FFFFFF', expected: true },
        { color: '#000', expected: true },
        { color: '#FFF', expected: true },
        { color: '0', expected: false },
        { color: 'fff', expected: false },
    ].forEach(({ color, expected }) => {
        it(`isValidHEX - ${color}`, () => {
            assert.strictEqual(
                Color.isValidHEX(color),
                expected,
                `color '${color}' is ${expected ? 'valid' : 'invalid'}.`
            );
        });
    });
});
