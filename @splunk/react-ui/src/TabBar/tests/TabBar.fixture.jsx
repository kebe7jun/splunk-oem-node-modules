import React, { Component } from 'react';
import TabBar from '@splunk/react-ui/TabBar';

class Basic extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { activeTabId: 'two' };
    }

    handleChange = (e, { selectedTabId }) => {
        this.setState({ activeTabId: selectedTabId });
    };

    render() {
        return (
            <TabBar
                data-test="tab-bar-fixture"
                activeTabId={this.state.activeTabId}
                onChange={this.handleChange}
            >
                <TabBar.Tab label="One" tabId="one" />
                <TabBar.Tab label="Two" tabId="two" tooltip="I explain the obscure label." />
                <TabBar.Tab label="Three" tabId="three" />
            </TabBar>
        );
    }
}

export default Basic;
