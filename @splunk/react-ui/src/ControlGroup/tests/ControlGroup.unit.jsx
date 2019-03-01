/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Calendar from '@splunk/react-ui/Calendar';
import Color from '@splunk/react-ui/Color';
import ComboBox from '@splunk/react-ui/ComboBox';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import Date from '@splunk/react-ui/Date';
import Multiselect from '@splunk/react-ui/Multiselect';
import Number from '@splunk/react-ui/Number';
import RadioBar from '@splunk/react-ui/RadioBar';
import RadioList from '@splunk/react-ui/RadioList';
import Select from '@splunk/react-ui/Select';
import Slider from '@splunk/react-ui/Slider';
import Switch from '@splunk/react-ui/Switch';
import Text from '@splunk/react-ui/Text';

describe('ControlGroup', () => {
    [
        {
            name: 'Calendar',
            instance: Calendar,
            selector: '[data-test="calendar"]',
            attributes: { 'data-test': 'calendar' },
        },
        {
            name: 'Color',
            instance: Color,
            selector: '[data-test="toggle"]',
            attributes: {},
        },
        {
            name: 'ComboBox',
            instance: ComboBox,
            selector: '[data-test="textbox"]',
            attributes: {},
        },
        {
            name: 'Date',
            instance: Date,
            selector: '[data-test="textbox"]',
            attributes: {},
        },
        {
            name: 'Multiselect',
            instance: Multiselect,
            selector: '[data-test-values]',
            attributes: {
                values: ['a', 'b'],
                onChange: () => 'changed',
            },
        },
        {
            name: 'Multiselect Compact',
            instance: Multiselect,
            selector: '[data-test="toggle"]',
            attributes: {
                values: ['a', 'b'],
                onChange: () => 'changed',
                compact: true,
            },
        },
        {
            name: 'Number',
            instance: Number,
            selector: '[data-test="textbox"]',
            attributes: {},
        },
        {
            name: 'RadioBar',
            instance: RadioBar,
            selector: '[data-test="radio-bar"]',
            attributes: {},
        },
        {
            name: 'RadioList',
            instance: RadioList,
            selector: '[data-test="radio-list"]',
            attributes: {},
        },
        {
            name: 'Select',
            instance: Select,
            selector: '[data-test="select"]',
            toggleSelector: '[data-test="toggle"]',
            attributes: {},
        },
        {
            name: 'Slider',
            instance: Slider,
            selector: '[data-test="handle"]',
            attributes: {},
        },
        {
            name: 'Switch',
            instance: Switch,
            selector: '[data-test="button"]',
            attributes: { value: 'test' },
        },
        {
            name: 'Text',
            instance: Text,
            selector: '[data-test="textbox"]',
            attributes: {},
        },
    ].forEach(Component => {
        it(`supports react ui compoments -${Component.name} as children.`, () => {
            const wrapper = mount(
                <ControlGroup label={Component.name} help={Component.name}>
                    <Component.instance {...Component.attributes} />
                </ControlGroup>
            );

            if (Component.name !== 'Select') {
                const labelledBy = wrapper
                    .find(Component.toggleSelector || Component.selector)
                    .hostNodes()
                    .props()['aria-labelledby'];

                const expected = wrapper
                    .find('[data-test="label"]')
                    .first()
                    .props().id;

                assert.strictEqual(labelledBy, expected);
            } else {
                const ariaLabel = wrapper
                    .find(Component.toggleSelector)
                    .hostNodes()
                    .props()['aria-label'];

                assert.strictEqual(ariaLabel, `${Component.name}, Select...`);
            }

            if (Component.name !== 'Switch') {
                const describedBy = wrapper
                    .find(Component.selector)
                    .hostNodes()
                    .props()['aria-describedby'];

                assert.strictEqual(
                    describedBy,
                    wrapper
                        .find('[data-test="help"]')
                        .hostNodes()
                        .props().id
                );
            }
        });
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const wrapper = mount(
            <ControlGroup label="Hello" elementRef={elementRef}>
                <Text />
            </ControlGroup>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef called on mount');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef called again on unmount');
    });
});
