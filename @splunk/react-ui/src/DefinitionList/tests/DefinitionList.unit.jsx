/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import DL, { Term, Description } from '@splunk/react-ui/DefinitionList';
import Link from '@splunk/react-ui/Link';
import P from '@splunk/react-ui/Paragraph';

describe('DefinitionList', () => {
    it('renders', () => {
        const wrapper = mount(
            <DL>
                <DL.Term>First Item</DL.Term>
                <DL.Description>
                    Description: <Link to="https://duckduckgo.com/">Go to DuckDuckGo</Link>
                </DL.Description>
                <DL.Term>Another Item</DL.Term>
                <DL.Description>
                    <P>Description</P>
                    <P>Description</P>
                </DL.Description>
                <DL.Term>Third Item</DL.Term>
                <DL.Description>Description</DL.Description>
                <DL.Term>Last Item</DL.Term>
                <DL.Description>Description</DL.Description>
            </DL>
        );
        assert.ok(wrapper);
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Term, DL.Term);
        assert.equal(Description, DL.Description);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <DL>
                <DL.Term id="first_item">First Item</DL.Term>
                {undefined}
                <DL.Description id="first_description">Description</DL.Description>
                {false}
                {null} word
            </DL>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('supports elementRef', () => {
        const spys = {
            elementRef: spy(),
            termRef: spy(),
            descRef: spy(),
        };
        const wrapper = mount(
            <DL elementRef={spys.elementRef}>
                <DL.Term elementRef={spys.termRef}>First Item</DL.Term>
                <DL.Description elementRef={spys.descRef} />
            </DL>
        );
        Object.keys(spys).forEach(refSpy => {
            assert.isTrue(spys[refSpy].calledOnce, `${refSpy} was called.`);
        });
        wrapper.unmount();
        Object.keys(spys).forEach(refSpy => {
            assert.isTrue(spys[refSpy].calledTwice, `${refSpy} was called again on unmount`);
            assert.isNull(spys[refSpy].args[1][0], `${refSpy} was called with null on unmount`);
        });
    });
});
