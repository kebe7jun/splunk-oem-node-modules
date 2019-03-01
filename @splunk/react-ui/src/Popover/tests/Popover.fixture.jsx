import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@splunk/react-ui/Button';
import Popover from '@splunk/react-ui/Popover';

class Basic extends Component {
    static propTypes = {
        testName: PropTypes.string.isRequired,
        takeFocus: PropTypes.bool.isRequired,
        children: PropTypes.node,
    };

    constructor(props, context) {
        super(props, context);
        this.state = { anchor: null, open: false };
    }

    handleAnchorMount = component => {
        this.setState({ anchor: component });
    };

    handleAnchorClick = () => {
        this.setState({ open: true });
    };

    render() {
        const { takeFocus, testName, children } = this.props;
        const { open, anchor } = this.state;

        return (
            <div>
                <Button
                    ref={this.handleAnchorMount}
                    onClick={this.handleAnchorClick}
                    data-test={`popover-${testName}-anchor`}
                    label="Open"
                />
                <Popover
                    takeFocus={takeFocus}
                    open={open}
                    anchor={anchor}
                    data-test={`popover-${testName}`}
                >
                    {children}
                </Popover>
            </div>
        );
    }
}

export default function() {
    return (
        <div>
            <Basic testName="taking-focus" takeFocus>
                <Button data-test="popover-taking-focus-button">First</Button>
                <Button>Second</Button>
            </Basic>
            <Basic testName="not-taking-focus" takeFocus={false}>
                <Button data-test="popover-not-taking-focus-button">First</Button>
                <Button>Second</Button>
            </Basic>
            <Basic testName="taking-focus-text-only" takeFocus>
                Text only
            </Basic>
        </div>
    );
}
