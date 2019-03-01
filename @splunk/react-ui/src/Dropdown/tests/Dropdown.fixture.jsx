import React, { Component } from 'react';
import Button from '@splunk/react-ui/Button';
import Dropdown from '@splunk/react-ui/Dropdown';
import Switch from '@splunk/react-ui/Switch';

export default class extends Component {
    constructor(...args) {
        super(...args);
        this.state = { selected: false };
    }

    render() {
        const toggle = <Button label="Toggle" />;

        return (
            <div>
                <Switch
                    data-test="outside-switch"
                    appearance="toggle"
                    value="Switch"
                    onClick={() => {
                        this.setState({ selected: !this.state.selected });
                    }}
                    selected={this.state.selected}
                >
                    Switch
                </Switch>
                <Dropdown toggle={toggle}>
                    <div data-test="inside">Test</div>
                </Dropdown>
            </div>
        );
    }
}
