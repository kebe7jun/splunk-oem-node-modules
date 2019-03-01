/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Button from '@splunk/react-ui/Button';
import ButtonGroup from '@splunk/react-ui/ButtonGroup';

describe('ButtonGroup', () => {
    let wrapper;
    const handleClick = spy();

    beforeEach(() => {
        wrapper = mount(
            <ButtonGroup>
                <Button id="with_click_handler" onClick={handleClick} label="One" />
                <Button label="Two" />
                {null}
                <Button selected label="Three" />
                <Button label="Four Four Four" />
                {false && <Button id="not_rendered" label="Should not be rendered!" />}
            </ButtonGroup>
        );
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
        handleClick.reset();
    });

    it('renders correctly', () => {
        assert.lengthOf(wrapper.find('button'), 4);
    });

    it('does not block onClick callback of children', () => {
        wrapper
            .find('#with_click_handler')
            .hostNodes()
            .simulate('click');
        assert.isTrue(handleClick.calledOnce);
    });

    it('applies the correct append/prepend prop to each child', () => {
        const buttons = wrapper.find(Button);

        assert.isTrue(buttons.get(0).props.append);
        assert.isFalse(buttons.get(0).props.prepend);

        assert.isTrue(buttons.get(1).props.append);
        assert.isTrue(buttons.get(1).props.prepend);

        assert.isTrue(buttons.get(2).props.append);
        assert.isTrue(buttons.get(2).props.prepend);

        assert.isFalse(buttons.get(3).props.append);
        assert.isTrue(buttons.get(3).props.prepend);
    });

    it('handles false value in children correctly', () => {
        assert.isFalse(wrapper.find('#not_rendered').exists());
    });

    it('elementRef supports', () => {
        const elementRef = spy();
        const element = <ButtonGroup elementRef={elementRef} />;
        wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
