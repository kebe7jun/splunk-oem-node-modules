/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Concertina, { Panel } from '@splunk/react-ui/Concertina';

describe('Concertina', () => {
    let container;
    let wrapper;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }

        container.remove();
        container = null;
    });

    it('ok', () => {
        const styles = {
            position: 'relative',
            height: '400px',
            maxWidth: '600px',
            border: '1px solid #ccc',
        };

        wrapper = mount(
            <Concertina style={styles}>
                <Concertina.Panel title="Panel 1">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                <Concertina.Panel title="Panel 2">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                <Concertina.Panel title="Panel 3">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                <Concertina.Panel title="Panel 4">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                {false && (
                    <Concertina.Panel title="Hidden" id="should_not_be_rendered">
                        Should not be rendered.
                    </Concertina.Panel>
                )}
            </Concertina>,
            { attachTo: container }
        );

        const scrollContainer = wrapper.find('[data-test="scroll"]').hostNodes();
        scrollContainer.simulate('scroll');

        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const panelRef = spy();
        wrapper = mount(
            <Concertina elementRef={elementRef}>
                <Concertina.Panel title="Panel 1" elementRef={panelRef}>
                    Hello
                </Concertina.Panel>
            </Concertina>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef was called on mount');
        assert.isTrue(panelRef.calledOnce, 'panelRef was called on mount');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isTrue(panelRef.calledTwice, 'panelRef was called again on unmount');
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Panel, Concertina.Panel);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Concertina>
                {null}
                <Concertina.Panel title="Panel 1">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                {undefined}
                {false} word
            </Concertina>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('should render disabled panel headers', () => {
        const styles = {
            position: 'relative',
            height: '400px',
            maxWidth: '600px',
            border: '1px solid #ccc',
        };

        wrapper = mount(
            <Concertina style={styles}>
                <Concertina.Panel title="Panel 1" status="disabled">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
            </Concertina>,
            { attachTo: container }
        );

        assert.ok(wrapper);
        assert.isTrue(wrapper.find('button[disabled]').exists());
    });
});
