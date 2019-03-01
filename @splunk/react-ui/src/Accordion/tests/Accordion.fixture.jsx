import React, { Component } from 'react';
import Accordion from '@splunk/react-ui/Accordion';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import P from '@splunk/react-ui/Paragraph';
import Select from '@splunk/react-ui/Select';
import Multiselect from '@splunk/react-ui/Multiselect';
import Text from '@splunk/react-ui/Text';

const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut';

class Controlled extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            openPanelId: 2,
        };
    }

    handleChange = (e, { panelId }) => {
        this.setState({ openPanelId: panelId });
    };

    render() {
        const { openPanelId } = this.state;
        return (
            <Accordion
                data-test="accordion-fixture"
                openPanelId={openPanelId}
                onChange={this.handleChange}
            >
                <Accordion.Panel panelId={1} data-test="panel-1" title="Panel 1">
                    <P>{lorem}</P>
                </Accordion.Panel>
                <Accordion.Panel panelId={2} data-test="panel-2" title="Panel 2">
                    <P>{lorem}</P>
                    <ControlGroup label="First Name">
                        <Text />
                    </ControlGroup>
                    <ControlGroup
                        label="Last Name"
                        controlsLayout="fillJoin"
                        tooltip="More information..."
                    >
                        <Text />
                    </ControlGroup>
                    <ControlGroup label="Office">
                        <Select defaultValue="sf">
                            <Select.Option label="San Francisco" value="sf" />
                            <Select.Option label="Cupertino" value="cu" />
                        </Select>
                    </ControlGroup>
                    <ControlGroup label="Office Multiselect">
                        <Multiselect defaultValue={['sf']}>
                            <Multiselect.Option label="San Francisco" value="sf" />
                            <Multiselect.Option label="Cupertino" value="cu" />
                        </Multiselect>
                    </ControlGroup>
                </Accordion.Panel>
                <Accordion.Panel panelId={3} data-test="panel-3" title="Panel 3">
                    <P>{lorem}</P>
                </Accordion.Panel>
            </Accordion>
        );
    }
}

export default Controlled;
