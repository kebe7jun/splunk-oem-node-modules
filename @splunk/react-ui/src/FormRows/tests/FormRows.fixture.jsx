/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import FormRows from '@splunk/react-ui/FormRows';
import Text from '@splunk/react-ui/Text';

class Fixture extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.rowCount = 0;
        const items = [
            <FormRows.Row
                index={0}
                key={`row-${this.rowCount}`}
                data-test-row={this.rowCount++}
                onRequestRemove={this.handleRequestRemove}
            >
                <Text defaultValue="Just another" />
            </FormRows.Row>,
            <FormRows.Row
                index={1}
                key={`row-${this.rowCount}`}
                data-test-row={this.rowCount++}
                onRequestRemove={this.handleRequestRemove}
            >
                <Text defaultValue="Row in the Form" />
            </FormRows.Row>,
        ];
        this.state = {
            items,
        };
    }

    handleRequestAdd = () => {
        this.setState({
            items: FormRows.addRow(
                <FormRows.Row
                    index={this.state.items.length}
                    key={`row-${this.rowCount}`}
                    data-test-row={this.rowCount++}
                    onRequestRemove={this.handleRequestRemove}
                >
                    <Text />
                </FormRows.Row>,
                this.state.items
            ),
        });
    };

    handleRequestMove = ({ fromIndex, toIndex }) => {
        this.setState({
            items: FormRows.moveRow(fromIndex, toIndex, this.state.items),
        });
    };

    handleRequestRemove = (e, data) => {
        this.setState({
            items: FormRows.removeRow(data.index, this.state.items),
        });
    };

    render() {
        return (
            <FormRows
                data-test="formrows-fixture"
                onRequestAdd={this.handleRequestAdd}
                onRequestMove={this.handleRequestMove}
                style={{ width: 300 }}
            >
                {this.state.items}
            </FormRows>
        );
    }
}

export default Fixture;
