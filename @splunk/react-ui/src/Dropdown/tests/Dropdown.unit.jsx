/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Button from '@splunk/react-ui/Button';
import Dropdown from '@splunk/react-ui/Dropdown';

describe('Dropdown', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
        wrapper = null;
    });

    it('closes with reason contentClick when content is clicked', done => {
        const toggle = <Button>Toggle</Button>;
        wrapper = mount(
            <Dropdown
                toggle={toggle}
                onRequestClose={({ reason }) => {
                    assert.equal(reason, 'contentClick');
                    done();
                }}
            >
                <div id="content">Hello World!</div>
            </Dropdown>
        );
        wrapper.find('Button').simulate('click');
        assert.isTrue(wrapper.state('open'));

        document.querySelector('#content').click();
        assert.isFalse(wrapper.state('open'));
    });

    it('throws when setting open with a prop after initial render (in dev mode)', () => {
        const toggle = <Button>Toggle</Button>;
        wrapper = mount(
            <Dropdown toggle={toggle}>
                <div>Hello World!</div>
            </Dropdown>
        );
        assert.throws(() => wrapper.setProps({ open: true }));
    });

    it('can be opened with a prop on initial render', () => {
        const toggle = <Button>Toggle</Button>;
        wrapper = mount(
            <Dropdown open toggle={toggle}>
                <div id="should-be-found">Hello World!</div>
            </Dropdown>
        );
        assert.ok(document.querySelector('#should-be-found'));
    });

    it('can be be toggled open and closed with props', () => {
        const toggle = <Button>Toggle</Button>;
        wrapper = mount(
            <Dropdown open={false} toggle={toggle}>
                <div id="might-be-found">Hello World!</div>
            </Dropdown>
        );
        assert.isFalse(wrapper.find('Popover').props().open);
        wrapper.setProps({ open: true });
        assert.isTrue(wrapper.find('Popover').props().open);
        wrapper.setProps({ open: false });
        assert.isFalse(wrapper.find('Popover').props().open);
    });

    it('supports elementRef', () => {
        const toggle = <Button>Toggle</Button>;
        const elementRef = spy();
        wrapper = mount(
            <Dropdown elementRef={elementRef} toggle={toggle}>
                Hello
            </Dropdown>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef was called on mount');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
    });
});
