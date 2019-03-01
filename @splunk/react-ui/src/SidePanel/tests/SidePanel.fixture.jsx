import React, { Component } from 'react';
import Button from '@splunk/react-ui/Button';
import Select from '@splunk/react-ui/Select';
import SidePanel from '@splunk/react-ui/SidePanel';

export default class Basic extends Component {
    constructor(...args) {
        super(...args);
        this.state = { open: false };
    }

    openPanel = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div data-test="sidepanel-fixture">
                <Button data-test="open" onClick={this.openPanel} label="Open" />
                <SidePanel
                    open={open}
                    data-test-open={open}
                    dockPosition="right"
                    onRequestClose={this.handleRequestClose}
                    innerStyle={{ width: 300 }}
                >
                    <span data-test="content">Lorem ipsum</span>
                    <Select data-test="content-select">
                        <Select.Option label="One" value="1" />
                        <Select.Option label="Two" value="2" />
                    </Select>
                </SidePanel>
            </div>
        );
    }
}
