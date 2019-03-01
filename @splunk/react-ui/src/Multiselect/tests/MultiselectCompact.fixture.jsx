import React from 'react';
import Multiselect from '@splunk/react-ui/Multiselect';

const defaultValues = ['Chart1', 'Value3'];

function Fixture() {
    return (
        <Multiselect data-test="compact-multiselect-fixture" defaultValues={defaultValues} compact>
            <Multiselect.Option label="Events" value="Basic1" />
            <Multiselect.Divider />
            <Multiselect.Option disabled label="Statistics Table" value="Basic2" />
            <Multiselect.Heading>Chart</Multiselect.Heading>
            <Multiselect.Option label="Line Chart" value="Chart1" />
            <Multiselect.Option label="Area Chart" value="Chart2" />
            <Multiselect.Option label="Column Chart" value="Chart3" />
            <Multiselect.Option label="Bar Chart" value="Chart4" />
            <Multiselect.Option label="Pie Chart" value="Chart5" />
            <Multiselect.Option label="Scatter Chart" value="Chart6" />
            <Multiselect.Option label="Bubble Chart" value="Chart7">
                Bubble <b data-test="bold">Chart</b>
            </Multiselect.Option>
            <Multiselect.Heading>Value</Multiselect.Heading>
            <Multiselect.Option label="Single Value" value="Value1" />
            <Multiselect.Option label="Radial Gauge" value="Value2" />
            <Multiselect.Option label="Filler Gauge" value="Value3" />
            <Multiselect.Option label="Marker Gauge" value="Value4" />
            <Multiselect.Heading>Map</Multiselect.Heading>
            <Multiselect.Option label="Cluster Map" value="Map1" />
            <Multiselect.Option label="Choropleth Map" value="Map2" />
        </Multiselect>
    );
}

export default Fixture;
