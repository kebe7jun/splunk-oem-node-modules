import React, { Component } from 'react';
import { includes, without } from 'lodash';
import CollapsiblePanel from '@splunk/react-ui/CollapsiblePanel';

const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut';

class BasicControlled extends Component {
    constructor(...args) {
        super(...args);
        this.state = { open: [] };
    }

    handleRequestClose = ({ panelId }) => {
        this.setState({ open: without(this.state.open, panelId) });
    };

    handleRequestOpen = ({ panelId }) => {
        this.setState({ open: this.state.open.concat(panelId) });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <CollapsiblePanel
                    panelId={1}
                    title="Panel 1"
                    onRequestClose={this.handleRequestClose}
                    onRequestOpen={this.handleRequestOpen}
                    open={includes(open, 1)}
                    data-test="panel-1"
                >
                    {lorem}
                </CollapsiblePanel>
                <CollapsiblePanel
                    panelId={2}
                    title="Panel 2"
                    onRequestClose={this.handleRequestClose}
                    onRequestOpen={this.handleRequestOpen}
                    open={includes(open, 2)}
                    data-test="panel-2"
                >
                    {lorem}
                </CollapsiblePanel>
                <CollapsiblePanel
                    panelId={3}
                    title="Panel 3"
                    onRequestClose={this.handleRequestClose}
                    onRequestOpen={this.handleRequestOpen}
                    open={includes(open, 3)}
                    data-test="panel-3"
                >
                    {lorem}
                </CollapsiblePanel>
            </div>
        );
    }
}

export default BasicControlled;
