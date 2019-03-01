/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import ChevronLeft from '@splunk/react-icons/ChevronLeft';
import ChevronRight from '@splunk/react-icons/ChevronRight';
import Slider from '@splunk/react-ui/Slider';
import { keycode } from '@splunk/ui-utils/keyboard';

describe('Slider', () => {
    it('sets state to selected on click', () => {
        const wrapper = mount(<Slider defaultValue={1} />);
        const clickPosition = 0;
        wrapper.simulate('click', { clientX: clickPosition });
        assert.strictEqual(wrapper.state('position'), clickPosition);
    });

    it('value increases on right arrow key', () => {
        const wrapper = mount(<Slider defaultValue={1} />);
        const originalValue = wrapper.state('value');
        wrapper
            .find('[data-test="handle"]')
            .hostNodes()
            .simulate('keydown', { keyCode: keycode('right') });
        assert.strictEqual(wrapper.state('value'), originalValue + 1);
    });

    it('roundValueToStep function', () => {
        const wrapper = mount(<Slider defaultValue={3} step={0.1} />);
        const rounded = wrapper.instance().roundValueToStep(1.05);
        assert.strictEqual(rounded, 1.1);
    });

    it("roundValueToStep doesn't exhibit floating point error", () => {
        // this might seem straightforward, but isn't: (1.005).toPrecision(3) = '1.00'
        const wrapper = mount(<Slider defaultValue={1} step={0.01} />);
        const rounded = wrapper.instance().roundValueToStep(1.005);
        assert.strictEqual(rounded, 1.01);
    });

    it('onChange returns value and name', () => {
        const handleChange = sinon.spy();
        const name = 'maldives';

        const wrapper = mount(
            <Slider defaultValue={3} step={1} onChange={handleChange} name={name} />
        );
        const sliderHandle = wrapper.find('[data-test="handle"]');
        sliderHandle.hostNodes().simulate('keydown', { keyCode: 39 });

        assert.equal(handleChange.args[0][1].value, 4);
        assert.equal(handleChange.args[0][1].name, name);
    });

    it('customized min and max labels', () => {
        const wrapper = mount(<Slider defaultValue={1} minLabel="Low" maxLabel="High" />);

        assert.strictEqual(
            wrapper
                .find('[data-test="min-label"]')
                .hostNodes()
                .text(),
            'Low'
        );
        assert.strictEqual(
            wrapper
                .find('[data-test="max-label"]')
                .hostNodes()
                .text(),
            'High'
        );
    });

    it('remove min and max labels', () => {
        const wrapper = mount(<Slider defaultValue={1} minLabel={null} maxLabel={null} />);

        assert.isFalse(wrapper.find('[data-test="min-label"]').exists());
        assert.isFalse(wrapper.find('[data-test="max-label"]').exists());
    });

    it('accepts a node for min and max labels', () => {
        const wrapper = mount(
            <Slider
                defaultValue={1}
                minLabel={<ChevronLeft data-test="min-icon" />}
                maxLabel={<ChevronRight data-test="max-icon" />}
            />
        );

        assert.isTrue(wrapper.find('[data-test="min-icon"]').exists(), 'The min icon is rendered');
        assert.isTrue(wrapper.find('[data-test="max-icon"]').exists(), 'The max icon is rendered');
    });

    it('cannot be changed when disabled', () => {
        const wrapper = mount(<Slider defaultValue={1} disabled />);
        const originalValue = wrapper.state('value');
        const clickPosition = 0;

        wrapper.simulate('click', { clientX: clickPosition });
        assert.strictEqual(wrapper.state('value'), originalValue, "doesn't change value on click");

        wrapper
            .find('[data-test="handle"]')
            .hostNodes()
            .simulate('keydown', { keyCode: keycode('right') });
        assert.strictEqual(
            wrapper.state('value'),
            originalValue,
            "doesn't change value on keydown"
        );
    });

    it('supports elementRef', () => {
        const elementRef = sinon.spy();
        const element = <Slider defaultValue={1} disabled elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
