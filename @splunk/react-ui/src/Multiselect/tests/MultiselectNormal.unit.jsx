/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import { keycode } from '@splunk/ui-utils/keyboard';
import Multiselect, { Heading, Option, Divider } from '@splunk/react-ui/Multiselect';

describe('Multiselect Normal', () => {
    let wrapper;
    const handleChange = spy();

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        handleChange.reset();
    });

    describe('uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <Multiselect defaultValues={['1', '2']}>
                    <Multiselect.Option label="Up" value="3" />
                    <Multiselect.Option label="Up and Down" value="8" />
                    <Multiselect.Divider />
                    <Multiselect.Option label="Down" value="4" />
                    <Multiselect.Option label="Down and Under" value="5" />
                </Multiselect>
            );
        });

        it('honors default values', () => {
            assert.lengthOf(
                wrapper.find('[data-test="selected-option"]').hostNodes(),
                2,
                'There are two selected options.'
            );
        });

        it('adds items on enter', () => {
            const input = wrapper.find('[data-test="textbox"]').hostNodes();
            input.simulate('change', { target: { value: 'Up' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.lengthOf(
                wrapper.find('[data-test="selected-option"]').hostNodes(),
                3,
                'There are now three selected options.'
            );
        });

        it('removes item on item click', done => {
            wrapper
                .find('[data-test="selected-option"]')
                .at(1)
                .simulate('click');

            /* The button removal is deferred to allow the event to bubble properly,
             * So this test must also be deferred */
            setTimeout(() => {
                wrapper.update();
                assert.lengthOf(
                    wrapper.find('[data-test="selected-option"]').hostNodes(),
                    1,
                    'One selected option remains.'
                );
                done();
            }, 0);
        });

        it("doesn't add arbitrary values", () => {
            const input = wrapper.find('[data-test="textbox"]').hostNodes();
            input.simulate('change', { target: { value: 'not-an-option' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.lengthOf(
                wrapper.find('[data-test="selected-option"]').hostNodes(),
                2,
                'There are still only two selected options.'
            );
        });

        it('throws if update defaultValues', () => {
            assert.throws(() => wrapper.setProps({ defaultValues: [8] }));
        });

        it('throws if convert to controlled', () => {
            assert.throws(() => wrapper.setProps({ values: [8] }));
        });
    });

    describe('allow new values', () => {
        beforeEach(() => {
            wrapper = mount(
                <Multiselect defaultValues={['1', '2']} allowNewValues>
                    <Multiselect.Option label="Up" value="1" />
                    <Multiselect.Option label="Up and Down" value="8" />
                    <Multiselect.Divider />
                    <Multiselect.Option label="Down" value="2" />
                    <Multiselect.Option label="Down and Under" value="3" />
                </Multiselect>
            );
        });

        it('adds arbitrary values', () => {
            const input = wrapper.find('[data-test="textbox"]').hostNodes();

            input.simulate('change', { target: { value: 'not-an-option' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.lengthOf(wrapper.find('[data-test="selected-option"]').hostNodes(), 3);
        });

        it("doesn't allow a new value to be added twice", () => {
            const input = wrapper.find('[data-test="textbox"]').hostNodes();

            input.simulate('change', { target: { value: 'user-added-option' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.lengthOf(wrapper.find('[data-test="selected-option"]').hostNodes(), 3);

            input.simulate('change', { target: { value: 'user-added-option' } });
            input.simulate('keyDown', { keyCode: keycode('enter') });

            assert.lengthOf(wrapper.find('[data-test="selected-option"]').hostNodes(), 3);
        });
    });

    describe('controlled', () => {
        const name = 'direction';

        beforeEach(() => {
            wrapper = mount(
                <Multiselect values={['1', '2']} onChange={handleChange} name={name}>
                    <Multiselect.Option label="Up" value="1" />
                    <Multiselect.Option label="Up and Down" value="8" />
                    <Multiselect.Divider />
                    <Multiselect.Option label="Down" value="2" />
                    <Multiselect.Option label="Down and Under" value="3" />
                </Multiselect>
            );
        });

        it('change triggers callback', () => {
            const input = wrapper.find('[data-test="textbox"]').hostNodes();

            input.simulate('change', { target: { value: 'Up' } });
            assert.equal(handleChange.callCount, 0, 'input change does not trigger onChange');

            input.simulate('keyDown', { keyCode: keycode('enter') });
            assert(handleChange.calledOnce, 'The onChange handler is called exactly once');
            assert.equal(handleChange.args[0][1].name, name, 'The onChange handler passes name.');
        });

        it('can update value', () => {
            wrapper.setProps({ values: ['8'] });
            assert.lengthOf(wrapper.find('[data-test="selected-option"]').hostNodes(), 1);
        });
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Option, Multiselect.Option);
        assert.equal(Heading, Multiselect.Heading);
        assert.equal(Divider, Multiselect.Divider);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Multiselect onChange={handleChange} defaultValues={['1']}>
                <Multiselect.Option label="Up" value="1" />
                {false}
                <Multiselect.Option label="Up and Down" value="8" />
                {undefined}
                {null}
                <Multiselect.Option label="Down and Under" value="3" /> word
            </Multiselect>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        wrapper = mount(
            <Multiselect onChange={handleChange} name={name} elementRef={elementRef} />
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });

    it('supports inputRef', () => {
        const inputRef = spy();
        wrapper = mount(<Multiselect onChange={handleChange} name={name} inputRef={inputRef} />);
        assert.isTrue(inputRef.calledOnce, 'inputRef was called');
        wrapper.unmount();
        assert.isTrue(inputRef.calledTwice, 'inputRef was called again on unmount');
        assert.isNull(inputRef.args[1][0], 'inputRef was called with null on unmount');
    });

    it('supports adding overlay', () => {
        wrapper = mount(<Multiselect />);
        assert.equal(wrapper.find('[data-test="overlay"]').hostNodes().length, 0);
        wrapper.setProps({ useClickawayOverlay: true });
        assert.equal(wrapper.find('[data-test="overlay"]').hostNodes().length, 0);
        wrapper
            .find('[data-test="textbox"]')
            .hostNodes()
            .simulate('change', { target: { value: 'Up' } });
        assert.equal(wrapper.find('[data-test="overlay"]').hostNodes().length, 1);
    });
});
