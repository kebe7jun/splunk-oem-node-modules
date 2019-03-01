import React, { Component } from 'react';
import TabLayout from '@splunk/react-ui/TabLayout';

class Basic extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { activePanelId: 'two' };
    }

    handleChange = (e, data) => {
        this.setState({ activePanelId: data.activePanelId });
    };

    render() {
        return (
            <TabLayout
                data-test="tab-layout-fixture"
                activePanelId={this.state.activePanelId}
                onChange={this.handleChange}
            >
                <TabLayout.Panel label="One" panelId="one">
                    One
                </TabLayout.Panel>
                <TabLayout.Panel label="Two" panelId="two">
                    Two
                </TabLayout.Panel>
                <TabLayout.Panel label="Three" panelId="three">
                    Three
                </TabLayout.Panel>
                <TabLayout.Panel label="Four" panelId="four" disabled>
                    Four
                </TabLayout.Panel>
            </TabLayout>
        );
    }
}

export default Basic;
