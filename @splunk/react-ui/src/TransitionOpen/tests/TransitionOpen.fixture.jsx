import React, { Component } from 'react';
import Button from '@splunk/react-ui/Button';
import TransitionOpen from '@splunk/react-ui/TransitionOpen';

class Example extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }

    handleTogle = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return (
            <div>
                <Button data-test="toggle" onClick={this.handleTogle}>
                    Open / Close
                </Button>
                <TransitionOpen data-test="transition-open-fixture" open={this.state.open}>
                    <div data-test="inner">
                        <p>Hello World</p>
                        <p>Hello World</p>
                        <p>Hello World</p>
                        <p>Hello World</p>
                        <p>Hello World</p>
                    </div>
                </TransitionOpen>
            </div>
        );
    }
}

export default Example;
