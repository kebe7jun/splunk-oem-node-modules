/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Multiselect, { Heading, Option, Divider } from '@splunk/react-ui/Multiselect';

describe('Multiselect Compact', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    describe('uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <Multiselect defaultValues={['1', '2']} compact>
                    <Option label="Up" value="1" />
                    <Option label="Up and Down" value="8" />
                    <Divider />
                    <Option label="Down" value="2" />
                    <Option label="Down and Under" value="3" />
                </Multiselect>
            );
        });

        it('sets default', () => {
            const toggle = wrapper.find('[data-test="toggle"]').hostNodes();
            assert.strictEqual(toggle.text(), 'Up, Down(2)');
        });
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Option, Multiselect.Option);
        assert.equal(Heading, Multiselect.Heading);
        assert.equal(Divider, Multiselect.Divider);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Multiselect compact>
                <Option label="Up" value="1" />
                {false}
                <Option label="Up and Down" value="8" />
                {undefined}
                {null}
                <Option label="Down and Under" value="3" /> word
            </Multiselect>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        wrapper = mount(<Multiselect compact elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });

    it('supports inputRef', () => {
        const inputRef = spy();
        wrapper = mount(<Multiselect compact inputRef={inputRef} />);
        wrapper
            .find('[data-test="toggle"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(inputRef.calledOnce, 'inputRef was called');
        wrapper.unmount();
        assert.isTrue(inputRef.calledTwice, 'inputRef was called again on unmount');
        assert.isNull(inputRef.args[1][0], 'inputRef was called with null on unmount');
    });

    it('does not support adding overlay', () => {
        wrapper = mount(<Multiselect compact />);
        assert.equal(wrapper.find('div[className*="overlay"]').length, 0);
        wrapper.setProps({ useClickawayOverlay: true });
        assert.equal(wrapper.find('div[className*="overlay"]').length, 0);
    });
});
