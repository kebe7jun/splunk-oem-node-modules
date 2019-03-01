/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Table, { Head, Body, Row, Cell, HeadCell } from '@splunk/react-ui/Table';

describe('Table', () => {
    it('should handle subcomponents as named exports', () => {
        assert.equal(Head, Table.Head);
        assert.equal(HeadCell, Table.HeadCell);
        assert.equal(Body, Table.Body);
        assert.equal(Row, Table.Row);
        assert.equal(Cell, Table.Cell);
    });

    it('onClick cell returns data', () => {
        const data = { test: 'test' };
        const handleCellClick = spy();

        const element = (
            <Table stripeRows>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    <Table.Row key="first">
                        <Table.Cell
                            onClick={handleCellClick}
                            data={data}
                            data-test="clickable-cell"
                        >
                            Lorem
                        </Table.Cell>
                        <Table.Cell>Ipsum</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );

        const wrapper = mount(element);

        wrapper
            .find('[data-test="clickable-cell"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(handleCellClick.calledOnce);
        assert.strictEqual(handleCellClick.firstCall.args[1], data);
    });

    it('onClick row returns data', () => {
        const data = { test: 'test' };
        const handleRowClick = spy();

        const element = (
            <Table stripeRows>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    <Table.Row
                        key="first"
                        onClick={handleRowClick}
                        data-test="clickable-row"
                        data={data}
                    >
                        <Table.Cell data={data}>Lorem</Table.Cell>
                        <Table.Cell>Ipsum</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );

        const wrapper = mount(element);

        wrapper
            .find('[data-test="clickable-row"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(handleRowClick.calledOnce);
        assert.strictEqual(handleRowClick.firstCall.args[1], data);
    });

    it('accepts element as an expansionRow', () => {
        const expansionRow = (
            <Table.Row key="ex">
                <Table.Cell colSpan={2} data-test="expanded-row">
                    Some content
                </Table.Cell>
            </Table.Row>
        );

        const element = (
            <Table stripeRows rowExpansion="single">
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    <Table.Row key="first" expansionRow={expansionRow}>
                        <Table.Cell>Lorem</Table.Cell>
                        <Table.Cell>Ipsum</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );

        const wrapper = mount(element);

        wrapper
            .find('[data-test="expand"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(wrapper.find('[data-test="expanded-row"]').exists());
    });

    it('accepts array as an expansionRow', () => {
        const expansionRow = [
            <Table.Row key="ex">
                <Table.Cell colSpan={2} data-test="expanded-row-1">
                    Some content
                </Table.Cell>
            </Table.Row>,
            <Table.Row key="ex">
                <Table.Cell colSpan={2} data-test="expanded-row-2">
                    Some content
                </Table.Cell>
            </Table.Row>,
        ];

        const element = (
            <Table stripeRows rowExpansion="single">
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    <Table.Row key="first" expansionRow={expansionRow}>
                        <Table.Cell>Lorem</Table.Cell>
                        <Table.Cell>Ipsum</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );

        const wrapper = mount(element);

        wrapper
            .find('[data-test="expand"]')
            .hostNodes()
            .simulate('click');
        assert.isTrue(wrapper.find('[data-test="expanded-row-1"]').exists());
        assert.isTrue(wrapper.find('[data-test="expanded-row-2"]').exists());
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Table stripeRows>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    {false}
                    {null}
                    {undefined}
                </Table.Head>
                <Table.Body>
                    {false}
                    {null}
                    {undefined}
                    <Table.Row key="first">
                        <Table.Cell>Lorem</Table.Cell>
                        <Table.Cell>Ipsum</Table.Cell>
                        {false}
                        {null}
                        {undefined}
                    </Table.Row>
                </Table.Body>
            </Table>
        );
        const wrapper = mount(element);
        assert.ok(wrapper);
    });

    it('accepts boolean as disabled attribute and invokes the onClick callback when appropriate', () => {
        const dummyToggleAll = () => {};
        const dummyToggleRow1 = spy();
        const dummyToggleRow2 = spy();
        const element = (
            <Table stripeRows onRequestToggleAllRows={dummyToggleAll}>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    <Table.Row
                        key="first"
                        disabled
                        selected={false}
                        onRequestToggle={dummyToggleRow1}
                    >
                        <Table.Cell>Lorem</Table.Cell>
                        <Table.Cell>Ipsum</Table.Cell>
                    </Table.Row>
                    <Table.Row
                        key="second"
                        disabled={false}
                        selected={false}
                        onRequestToggle={dummyToggleRow2}
                    >
                        <Table.Cell>Ipsum</Table.Cell>
                        <Table.Cell>Lorem</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );

        const wrapper = mount(element);

        // Note: index 0 contains the toggleAll rows Switch
        assert.strictEqual(
            wrapper
                .find('[data-test="button"]')
                .hostNodes()
                .at(1)
                .prop('disabled'),
            true,
            'Toggle 1 should be disabled'
        );
        assert.strictEqual(
            wrapper
                .find('[data-test="button"]')
                .hostNodes()
                .at(2)
                .prop('disabled'),
            false,
            'Toggle 2 should be enabled'
        );

        wrapper
            .find('[data-test="button"]')
            .hostNodes()
            .at(1)
            .simulate('click');
        wrapper
            .find('[data-test="button"]')
            .hostNodes()
            .at(2)
            .simulate('click');
        assert.isTrue(dummyToggleRow1.notCalled, 'Disabled row should not be toggled.');
        assert.isTrue(dummyToggleRow2.calledOnce, 'Enabled row may be toggled.');
    });

    it('supports elementRef', () => {
        const spys = {
            tableRef: spy(),
            headRef: spy(),
            headCellRef: spy(),
            bodyRef: spy(),
            tableRowRef: spy(),
            tableCellRef: spy(),
        };
        const element = (
            <Table stripeRows elementRef={spys.tableRef}>
                <Table.Head elementRef={spys.headRef}>
                    <Table.HeadCell elementRef={spys.headCellRef}>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                </Table.Head>
                <Table.Body elementRef={spys.bodyRef}>
                    <Table.Row key="first" elementRef={spys.tableRowRef}>
                        <Table.Cell elementRef={spys.tableCellRef}>Lorem</Table.Cell>
                        <Table.Cell>Ipsum</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
        const wrapper = mount(element);
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
