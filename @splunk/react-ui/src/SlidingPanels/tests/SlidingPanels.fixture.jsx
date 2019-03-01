import React, { Component } from 'react';
import Button from '@splunk/react-ui/Button';
import SlidingPanels from '@splunk/react-ui/SlidingPanels';

class Fixture extends Component {
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
        return (
            <div>
                <Button data-test="backward" onClick={this.goBack}>
                    Backward
                </Button>
                <Button data-test="forward" onClick={this.goForward}>
                    Forward
                </Button>
                <SlidingPanels data-test="sliding-panels-fixture" {...this.state}>
                    <SlidingPanels.Panel key="one" panelId="one">
                        First Panel
                    </SlidingPanels.Panel>
                    <SlidingPanels.Panel key="two" panelId="two">
                        Second Panel
                    </SlidingPanels.Panel>
                </SlidingPanels>
            </div>
        );
    }
}

export default Fixture;
