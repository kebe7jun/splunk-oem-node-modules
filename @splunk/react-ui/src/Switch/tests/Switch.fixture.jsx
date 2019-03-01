import React, { Component } from 'react';
import Switch from '@splunk/react-ui/Switch';

export default class Basic extends Component {
    constructor(...args) {
        super(...args);
        this.state = { selected: false };
    }

    handleClick = () => {
        this.setState({ selected: !this.state.selected });
    };

    render() {
        return (
            <Switch
                data-test="switch-fixture"
                selected={this.state.selected}
                onClick={this.handleClick}
                value="Test"
            >
                Test
            </Switch>
        );
    }
}
