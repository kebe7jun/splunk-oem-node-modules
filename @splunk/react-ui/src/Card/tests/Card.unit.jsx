/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Card, { Header, Body, Footer } from '@splunk/react-ui/Card';

describe('Card', () => {
    it('renders', () => {
        const wrapper = mount(<Card />);
        assert.ok(wrapper);
    });

    it('all subcomponents support elementRef', () => {
        const cardRef = spy();
        const headerRef = spy();
        const bodyRef = spy();
        const footerRef = spy();

        const wrapper = mount(
            <Card elementRef={cardRef}>
                <Header elementRef={headerRef} />
                <Body elementRef={bodyRef} />
                <Footer elementRef={footerRef} />
            </Card>
        );
        assert.isTrue(cardRef.calledOnce, 'cardRef called once');
        assert.isTrue(headerRef.calledOnce, 'headerRef called once');
        assert.isTrue(bodyRef.calledOnce, 'bodyRef called once');
        assert.isTrue(footerRef.calledOnce, 'footerRef called once');
        wrapper.unmount();
        assert.isTrue(cardRef.calledTwice, 'cardRef called again on unmount');
        assert.isTrue(headerRef.calledTwice, 'headerRef called again on unmount');
        assert.isTrue(bodyRef.calledTwice, 'bodyRef called again on unmount');
        assert.isTrue(footerRef.calledTwice, 'footerRef called again on unmount');
    });

    it('should have data-clickable="true" if onClick is passed in', () => {
        const clickable = mount(<Card onClick={() => {}} />);
        assert.isTrue(clickable.find('[data-clickable]').exists());
    });

    it('should trigger onClick handler when clicked on', () => {
        const handleClick = spy();
        const clickable = mount(<Card onClick={handleClick} />);
        clickable.simulate('click');
        assert.isTrue(handleClick.calledOnce, 'The click handler was called');
    });

    it('renders an `a` element when the `to` prop is provided', () => {
        const link = mount(<Card to="www.card.com" />);
        assert.isTrue(link.find('a').exists());
    });
});
