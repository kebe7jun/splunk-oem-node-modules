import React, { Component } from 'react';
import Text from '@splunk/react-ui/Text';

class Fixture extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            value: 'Hello',
        };
    }

    handleChange = (e, { value }) => {
        this.setState({ value });
    };

    render() {
        return (
            <div>
                <Text data-test="uncontrolled-text" defaultValue="Hello" canClear />
                <Text
                    data-test="controlled-text"
                    canClear
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Fixture;
