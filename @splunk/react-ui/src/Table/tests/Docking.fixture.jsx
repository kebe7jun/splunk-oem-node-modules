import React from 'react';
import Table from '@splunk/react-ui/Table';

export default function() {
    return (
        <div data-test="docking-table-fixture">
            <Table stripeRows headType="docked" dockScrollBar>
                <Table.Head>
                    <Table.HeadCell width={200}>Name</Table.HeadCell>
                    <Table.HeadCell width={2000}>Email</Table.HeadCell>
                    <Table.HeadCell width={200}>Age</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            Bob
                            <div style={{ height: 1000, width: 10 }} />
                            <button data-test="focusable-content" />
                            <div style={{ height: 1000, width: 10 }} />
                        </Table.Cell>
                        <Table.Cell>bob@domain.com</Table.Cell>
                        <Table.Cell>41</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <div data-test="end" />
        </div>
    );
}
