import React, { Component } from 'react';
import ComboBox from '@splunk/react-ui/ComboBox';
import Text from '@splunk/react-ui/Text';

class Fixture extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            value: '',
        };
    }

    handleChange = (e, { value }) => {
        this.setState({ value });
    };

    render() {
        return (
            <div>
                <Text data-test="separate-text-input" defaultValue="Text input" canClear />
                <ComboBox
                    data-test="combobox-fixture"
                    inline
                    onChange={this.handleChange}
                    value={this.state.value}
                >
                    <ComboBox.Option value="Events" />
                    <ComboBox.Option value="Statistics Table" />
                    <ComboBox.Heading>Chart</ComboBox.Heading>
                    <ComboBox.Option value="Line Chart" />
                    <ComboBox.Option value="Area Chart" />
                    <ComboBox.Option value="Column Chart" />
                    <ComboBox.Option value="Bar Chart" />
                    <ComboBox.Option value="Pie Chart" />
                    <ComboBox.Option value="Scatter Chart" />
                    <ComboBox.Option value="Bubble Chart" />
                    <ComboBox.Heading>Value</ComboBox.Heading>
                    <ComboBox.Option value="Single Value" />
                    <ComboBox.Option value="Radial Gauge" />
                    <ComboBox.Option value="Filler Gauge" />
                    <ComboBox.Option value="Marker Gauge" />
                    <ComboBox.Heading>Map</ComboBox.Heading>
                    <ComboBox.Option value="Cluster Map" />
                    <ComboBox.Option value="Choropleth Map" />
                </ComboBox>
            </div>
        );
    }
}

export default Fixture;
