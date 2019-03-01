import React, { Component } from 'react';
import Button from '@splunk/react-ui/Button';
import StepBar from '@splunk/react-ui/StepBar';

const numSteps = 4;

class Fixture extends Component {
    constructor(...args) {
        super(...args);
        this.state = { activeStepId: 0 };
    }

    handlePrevious = () => {
        this.setState({ activeStepId: this.state.activeStepId - 1 });
    };

    handleNext = () => {
        this.setState({ activeStepId: this.state.activeStepId + 1 });
    };

    render() {
        const { activeStepId } = this.state;
        return (
            <div>
                <StepBar data-test="step-bar-fixture" activeStepId={this.state.activeStepId}>
                    <StepBar.Step>Select Item</StepBar.Step>
                    <StepBar.Step>Configure Required</StepBar.Step>
                    <StepBar.Step>Configure Optional</StepBar.Step>
                    <StepBar.Step>Review</StepBar.Step>
                </StepBar>
                <br />
                <br />
                <Button
                    id="previous"
                    label="Previous"
                    disabled={activeStepId === 0}
                    onClick={this.handlePrevious}
                />
                <Button
                    id="next"
                    label="Next"
                    disabled={activeStepId === numSteps - 1}
                    onClick={this.handleNext}
                />
            </div>
        );
    }
}

export default Fixture;
