import React, { Component } from 'react';
import Color from '@splunk/react-ui/Color';
import ControlGroup from '@splunk/react-ui/ControlGroup';

class Fixture extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            value: '#000000',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ value }) {
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <ControlGroup label="a label" help="a description">
                    <Color
                        data-test="color-fixture"
                        onChange={this.handleChange}
                        palette={['#CCCCCC', '#FFFFFF']}
                        value={this.state.value}
                    />
                </ControlGroup>
                <button data-test="away" />
            </div>
        );
    }
}

export default Fixture;
