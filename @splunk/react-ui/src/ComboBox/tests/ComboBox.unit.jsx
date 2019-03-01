/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { keycode } from '@splunk/ui-utils/keyboard';
import ComboBox, { Heading, Option, Divider } from '@splunk/react-ui/ComboBox';

describe('ComboBox', () => {
    let wrapper;
    let input;
    const handleChange = spy();

    afterEach(() => {
        input = null;
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        handleChange.reset();
    });

    describe('uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <ComboBox onChange={handleChange}>
                    <ComboBox.Option value="one" />
                    <ComboBox.Option value="two" />
                    <ComboBox.Option value="three" />
                </ComboBox>
            );
            assert.ok(wrapper);
            input = wrapper.find('input');
        });

        it('opens when input is focused', () => {
            assert.isFalse(wrapper.state('open'));
            input.simulate('focus');
            assert.isTrue(wrapper.state('open'));
        });

        it('closes when item is selected', () => {
            input.simulate('focus');
            input.simulate('keyDown', { keyCode: keycode('down') });
            input.simulate('keyDown', { keyCode: keycode('enter') });
            assert.isFalse(wrapper.state('open'));
        });

        it('can be navigated with the keyboard', () => {
            input.simulate('focus');
            assert.equal(wrapper.state('activeIndex'), 0);
            input.simulate('keyDown', { keyCode: keycode('down') });
            assert.equal(wrapper.state('activeIndex'), 1);
            input.simulate('keyDown', { keyCode: keycode('down') });
            assert.equal(wrapper.state('activeIndex'), 2);
            input.simulate('keyDown', { keyCode: keycode('down') });
            assert.equal(wrapper.state('activeIndex'), 2); // Stays at bottom

            input.simulate('keyDown', { keyCode: keycode('up') });
            assert.equal(wrapper.state('activeIndex'), 1);
            input.simulate('keyDown', { keyCode: keycode('up') });
            assert.equal(wrapper.state('activeIndex'), 0);

            input.simulate('keyDown', { keyCode: keycode('up') });
            assert.equal(wrapper.state('activeIndex'), 0); // Stays at top
        });

        it('sets the active value on enter', () => {
            input.simulate('focus');
            input.simulate('keyDown', { keyCode: keycode('enter') });
            assert.isTrue(handleChange.calledOnce);
            assert.equal(handleChange.args[0][1].value, 'one');
        });

        it('handles `false` correctly in `children`', () => {
            assert.isFalse(wrapper.find('#should_not_be_rendered').exists());
        });

        it('throws if convert to controlled', () => {
            assert.throws(() => wrapper.setProps({ value: 'x' }));
        });
    });

    describe('controlled value', () => {
        const name = 'maldives';
        const value = 'testing';

        beforeEach(() => {
            wrapper = mount(
                <ComboBox value="" onChange={handleChange} name={name}>
                    <ComboBox.Option value="one" />
                    <ComboBox.Option value="two" />
                    <ComboBox.Option value="three" />
                </ComboBox>
            );
            assert.ok(wrapper);
            input = wrapper.find('input');
        });

        it('honors the value prop', () => {
            assert.strictEqual(input.render().attr('value'), '');
        });

        it('can be updated with the value prop', () => {
            wrapper.setProps({ value });
            assert.strictEqual(input.render().attr('value'), value);
        });

        it('triggers the onChange callback', () => {
            input.simulate('change', { target: { value } });
            assert.isTrue(handleChange.calledOnce);
            assert.equal(handleChange.args[0][1].value, value);
            assert.equal(handleChange.args[0][1].name, name, 'returns name on change');
        });
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Option, ComboBox.Option);
        assert.equal(Heading, ComboBox.Heading);
        assert.equal(Divider, ComboBox.Divider);
    });

    it("shouldn't open menu when disabled", () => {
        const element = (
            <ComboBox defaultValue="Hello" disabled>
                <ComboBox.Option value="one" />
                <ComboBox.Option value="two" />
            </ComboBox>
        );
        wrapper = mount(element);
        wrapper
            .find('[data-test="disabled-textbox"]')
            .hostNodes()
            .simulate('click');

        assert.isFalse(wrapper.state('open'), 'popover did not open onClick');
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <ComboBox onChange={handleChange}>
                {undefined}
                <ComboBox.Option value="one" />
                {null}
                <ComboBox.Option value="two" />
                {false} word
            </ComboBox>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        wrapper = mount(
            <ComboBox elementRef={elementRef}>
                <ComboBox.Option value="hello" />
            </ComboBox>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef called on mount');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef called again on unmount');
    });

    it('supports inputRef', () => {
        const inputRef = spy();
        wrapper = mount(
            <ComboBox inputRef={inputRef}>
                <ComboBox.Option value="hello" />
            </ComboBox>
        );
        assert.isTrue(inputRef.calledOnce, 'inputRef called on mount');
        wrapper.unmount();
        assert.isTrue(inputRef.calledTwice, 'inputRef called again on unmount');
    });
});
