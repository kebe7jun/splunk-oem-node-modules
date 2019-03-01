/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import ColumnLayout, { Row, Column } from '@splunk/react-ui/ColumnLayout';

describe('ColumnLayout', () => {
    it('renders', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={4}>col 1</ColumnLayout.Column>
                    <ColumnLayout.Column span={4}>col 2</ColumnLayout.Column>
                    <ColumnLayout.Column span={4}>col 3</ColumnLayout.Column>
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);
        assert.lengthOf(wrapper.find(ColumnLayout.Row), 1);

        const columns = wrapper.children().find(ColumnLayout.Column);
        assert.lengthOf(columns, 3);

        for (let i = 1; i <= 3; i += 1) {
            assert.equal(columns.at(i - 1).text(), `col ${i}`);
        }
    });

    it('show gutters', () => {
        const element = (
            <ColumnLayout gutter={1}>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={6} />
                    <ColumnLayout.Column span={6} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);
        const rows = wrapper.find(ColumnLayout.Row);
        assert.lengthOf(rows, 3);

        for (let i = 1; i <= 3; i += 1) {
            const row = rows.at(i - 1);
            assert.lengthOf(row.find(ColumnLayout.Column), i);
            assert.equal(row.prop('gutter'), 1);
            assert.equal(row.prop('isFirstChild'), i === 1);
            assert.equal(row.prop('isLastChild'), i === 3);

            for (let j = 1; j <= i; j += 1) {
                const col = row.find(ColumnLayout.Column).at(j - 1);
                assert.equal(col.prop('gutter'), 1);
                assert.equal(col.prop('isFirstChild'), j === 1);
                assert.equal(col.prop('isLastChild'), j === i);
            }
        }
    });

    it('show dividers', () => {
        const element = (
            <ColumnLayout divider="vertical">
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={6} />
                    <ColumnLayout.Column span={6} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);

        const rows = wrapper.find(ColumnLayout.Row);
        assert.lengthOf(rows, 3);

        for (let i = 1; i <= 3; i += 1) {
            const row = rows.at(i - 1);
            /* Dividers are extra children inserted between the Columns defined above */
            assert.lengthOf(row.find('div'), i * 2);
        }
    });

    it('supports elementRefs', () => {
        const elementRef = spy();
        const rowRef = spy();
        const columnRef = spy();
        const wrapper = mount(
            <ColumnLayout elementRef={elementRef}>
                <ColumnLayout.Row elementRef={rowRef}>
                    <ColumnLayout.Column span={12} elementRef={columnRef}>
                        Hello
                    </ColumnLayout.Column>
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        assert.isTrue(elementRef.calledOnce, 'elementRef was called on mount');
        assert.isTrue(rowRef.calledOnce, 'rowRef was called on mount');
        assert.isTrue(columnRef.calledOnce, 'columnRef was called on mount');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isTrue(rowRef.calledTwice, 'rowRef was called again on unmount');
        assert.isTrue(columnRef.calledTwice, 'columnRef was called again on unmount');
    });

    it('sets isFirstChild and isLastChild', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={6} />
                    <ColumnLayout.Column span={6} />
                </ColumnLayout.Row>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                    <ColumnLayout.Column span={4} />
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);
        const rows = wrapper.find(ColumnLayout.Row);
        assert.lengthOf(rows, 3);

        for (let i = 1; i <= 3; i += 1) {
            const row = rows.at(i - 1);
            assert.lengthOf(row.find(ColumnLayout.Column), i);
            assert.equal(row.prop('isFirstChild'), i === 1);
            assert.equal(row.prop('isLastChild'), i === 3);

            for (let j = 1; j <= i; j += 1) {
                const col = row.find(ColumnLayout.Column).at(j - 1);
                assert.equal(col.prop('isFirstChild'), j === 1);
                assert.equal(col.prop('isLastChild'), j === i);
            }
        }
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                </ColumnLayout.Row>
                {false}
                {undefined}
                {null} word
            </ColumnLayout>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('should handle invalid values in `Row` children correctly', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12} />
                    {false}
                    {undefined}
                    {null} word
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('should handle subcomponents as named exports', () => {
        assert.equal(Row, ColumnLayout.Row);
        assert.equal(Column, ColumnLayout.Column);
    });

    it('should handle invalid values in `Column` children correctly', () => {
        const element = (
            <ColumnLayout>
                <ColumnLayout.Row>
                    <ColumnLayout.Column span={12}>
                        {false}
                        {undefined}
                        {null} word
                    </ColumnLayout.Column>
                </ColumnLayout.Row>
            </ColumnLayout>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });
});
