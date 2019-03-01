/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Paginator from '@splunk/react-ui/Paginator';
import PaginatorButton from '@splunk/react-ui/Paginator/PaginatorButton';

describe('Paginator', () => {
    describe('onChange callback', () => {
        const handleChange = spy();
        let wrapper;
        beforeEach(() => {
            wrapper = mount(
                <Paginator
                    alwaysShowLastPageLink
                    onChange={handleChange}
                    current={10}
                    totalPages={30}
                />
            );
        });

        afterEach(() => {
            wrapper.unmount();
            wrapper = null;
            handleChange.reset();
        });

        it('is invoked when "next" is clicked', () => {
            wrapper
                .find('[data-test="next"]')
                .hostNodes()
                .simulate('click');
            assert.isTrue(handleChange.calledOnce);
            assert.strictEqual(handleChange.args[0][1].page, 11);
        });

        it('is invoked when "prev" is clicked', () => {
            wrapper
                .find('[data-test="prev"]')
                .hostNodes()
                .simulate('click');
            assert.isTrue(handleChange.calledOnce);
            assert.strictEqual(handleChange.args[0][1].page, 9);
        });

        it('is invoked when "last" is clicked', () => {
            wrapper
                .find('[data-test="last"]')
                .hostNodes()
                .simulate('click');
            assert.isTrue(handleChange.calledOnce);
            assert.strictEqual(handleChange.args[0][1].page, 30);
        });
    });

    it('renders the correct number of links when numPageLinks is greater than total pages', () => {
        const wrapper = mount(<Paginator totalPages={5} numPageLinks={10} current={5} />);
        assert.lengthOf(wrapper.find(PaginatorButton), 7); // 5 pages plus 2 for forward and back.
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        const element = <Paginator totalPages={100} current={99} elementRef={elementRef} />;
        const wrapper = mount(element);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
