/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import ResultsMenu, { Item, Heading, Divider } from '@splunk/react-ui/ResultsMenu';

describe('ResultsMenu', () => {
    it('renders', () => {
        const wrapper = mount(<ResultsMenu />);
        assert.ok(wrapper);
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Item, ResultsMenu.Item);
        assert.equal(Heading, ResultsMenu.Heading);
        assert.equal(Divider, ResultsMenu.Divider);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <ResultsMenu>
                <ResultsMenu.Item label="Lorem" />
                {false}
                <ResultsMenu.Item label="Ipsum" />
                {undefined}
                {null} word
            </ResultsMenu>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('shows a no results message when there are no items', () => {
        const element = (
            <ResultsMenu>
                <Heading>Veni</Heading>
                <Divider />
                <Divider />
                <Divider />
                <Heading>Vidi</Heading>
                <Heading>Vici</Heading>
            </ResultsMenu>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find('[data-test="no-results-message"]').hostNodes(), 1);
        assert.lengthOf(wrapper.find('[data-test="heading"]').hostNodes(), 0);
        assert.lengthOf(wrapper.find('[data-test="divider"]').hostNodes(), 0);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <ResultsMenu elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
