import React from 'react';
import Table from '@splunk/react-ui/Table';
import { clone } from 'lodash';

export default class ReorderColumns extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            headers: [
                { label: 'Name', key: 'name', width: 200 },
                { label: 'Age', key: 'age', width: 60 },
                { label: 'Email Address', key: 'email', width: 400 },
            ],
            data: [
                { name: 'Rylan', age: 12, email: 'Angelita_Weimann42@gmail.com' },
                { name: 'Amelia', age: 23, email: 'Dexter.Trantow57@hotmail.com' },
                { name: 'Estevan', age: 19, email: 'Aimee7@hotmail.com' },
                { name: 'Florence', age: 20, email: 'Jarrod.Bernier13@yahoo.com' },
                { name: 'Tressa', age: 22, email: 'Yadira1@hotmail.com' },
            ],
        };
    }
    handleResizeColumn = (event, { index, width }) => {
        const state = clone(this.state);

        state.headers[index].width = width;

        this.setState(state);
    };
    render() {
        const { headers, data } = this.state;
        return (
            <Table
                stripeRows
                onRequestResizeColumn={this.handleResizeColumn}
                data-test="resizable-table-fixture"
            >
                <Table.Head>
                    {headers.map(header => (
                        <Table.HeadCell
                            key={header.key}
                            id={header.key}
                            columnId={header.key}
                            resizable
                            width={header.width}
                        >
                            {header.label}
                        </Table.HeadCell>
                    ))}
                </Table.Head>
                <Table.Body>
                    {data.map(row => (
                        <Table.Row key={row.email}>
                            {headers.map(header => (
                                <Table.Cell key={row[header.key]}>{row[header.key]}</Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );
    }
}
