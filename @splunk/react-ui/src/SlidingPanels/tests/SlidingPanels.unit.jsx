/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import SlidingPanels from '@splunk/react-ui/SlidingPanels';

describe('SlidingPanels', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <SlidingPanels activePanelId="one">
                <SlidingPanels.Panel panelId="one">Hello World!</SlidingPanels.Panel>
                <SlidingPanels.Panel panelId="two">Goodbye!</SlidingPanels.Panel>
            </SlidingPanels>
        );
    });

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('throws when the `activePanelId` is not found', () => {
        assert.throws(() => wrapper.setProps({ activePanelId: 'hidden' }));
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <SlidingPanels activePanelId="one">
                {false}
                {null}
                {undefined} word
                <SlidingPanels.Panel panelId="one">Hello World!</SlidingPanels.Panel>
                <SlidingPanels.Panel panelId="two">Goodbye!</SlidingPanels.Panel>
            </SlidingPanels>
        );
        wrapper = mount(element);
        assert.isTrue(wrapper.find('[data-test-panel-id="one"]').exists());
        assert.isFalse(wrapper.find('[data-test-panel-id="two"]').exists());
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = (
            <SlidingPanels activePanelId="one">
                <SlidingPanels.Panel panelId="one" elementRef={elementRef}>
                    Hello World!
                </SlidingPanels.Panel>
            </SlidingPanels>
        );
        wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
