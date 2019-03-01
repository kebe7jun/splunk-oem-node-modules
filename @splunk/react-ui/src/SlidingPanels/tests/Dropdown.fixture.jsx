import React, { Component } from 'react';
import { range } from 'lodash';
import Button from '@splunk/react-ui/Button';
import Dropdown from '@splunk/react-ui/Dropdown';
import Menu, { Item } from '@splunk/react-ui/Menu';
import SlidingPanels from '@splunk/react-ui/SlidingPanels';
import ChevronLeft from '@splunk/react-icons/ChevronLeft';

class DropdownExample extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            activePanelId: 'one',
        };
    }

    goBack = () => {
        const nextPanel = this.state.activePanelId === 'one' ? 'two' : 'one';
        this.setState({
            activePanelId: nextPanel,
            transition: 'backward',
        });
    };

    goForward = () => {
        const nextPanel = this.state.activePanelId === 'one' ? 'two' : 'one';
        this.setState({
            activePanelId: nextPanel,
            transition: 'forward',
        });
    };

    render() {
        const toggle = <Button isMenu />;
        const closeReasons = ['clickAway', 'escapeKey', 'offScreen', 'toggleClick'];
        return (
            <Dropdown
                data-test="sliding-panels-in-dropdown-fixture"
                closeReasons={closeReasons}
                toggle={toggle}
            >
                <SlidingPanels {...this.state}>
                    <SlidingPanels.Panel key="one" panelId="one">
                        <Menu style={{ width: 160 }}>
                            {range(10).map(val => (
                                <Item
                                    hasSubmenu
                                    key={val}
                                    label={`Category ${val}`}
                                    onClick={this.goForward}
                                    value={val}
                                />
                            ))}
                        </Menu>
                    </SlidingPanels.Panel>
                    <SlidingPanels.Panel key="two" panelId="two">
                        <Menu style={{ width: 160 }}>
                            <Item
                                data-test="back"
                                label="Back"
                                icon={<ChevronLeft />}
                                onClick={this.goBack}
                            />
                            <Menu.Divider />
                            {range(9).map(val => (
                                <Item key={val} label={`Option ${val}`} value={val} />
                            ))}
                        </Menu>
                    </SlidingPanels.Panel>
                </SlidingPanels>
            </Dropdown>
        );
    }
}

export default DropdownExample;
