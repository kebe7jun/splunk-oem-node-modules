import React, { Component } from 'react';
import Number from '@splunk/react-ui/Number';

class Example extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            value: null, // default empty
        };
    }

    handleChange = (e, { value }) => {
        this.setState({ value });
    };

    render() {
        return (
            <Number
                data-test="fixture"
                value={this.state.value}
                onChange={this.handleChange}
                inline
            />
        );
    }
}

export default Example;
