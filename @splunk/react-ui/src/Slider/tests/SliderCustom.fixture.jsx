import React, { Component } from 'react';
import Slider from '@splunk/react-ui/Slider';

class Fixture extends Component {
    static convertValueToLabel(value) {
        const trueValue = 10 ** value;
        const trueValueRounded = Math.round(trueValue * 100) / 100;

        return `${trueValueRounded}px`;
    }
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            value: 1,
            displayValue: Fixture.convertValueToLabel(1),
        };
    }

    handleChange = (e, { value }) => {
        this.setState({
            value,
            displayValue: Fixture.convertValueToLabel(value),
        });
    };

    render() {
        return (
            <Slider
                inline
                displayValue={this.state.displayValue}
                min={0}
                minLabel={null}
                max={2}
                maxLabel={null}
                step={0.1}
                onChange={this.handleChange}
                value={this.state.value}
                data-test="slider-fixture"
            />
        );
    }
}

export default Fixture;
