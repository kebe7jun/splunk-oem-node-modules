import React from 'react';
import ComboBox from '@splunk/react-ui/ComboBox';

function Fixture() {
    return (
        <ComboBox data-test="my-project:chart-combobox" inline>
            <ComboBox.Option value="Line Chart" description="Recommended" />
            <ComboBox.Option value="Area Chart" />
            <ComboBox.Option value="Column Chart" />
            <ComboBox.Option value="Bar Chart" />
            <ComboBox.Option value="Pie Chart" />
            <ComboBox.Option value="Scatter Chart" />
            <ComboBox.Option value="Bubble Chart" />
        </ComboBox>
    );
}

export default Fixture;
