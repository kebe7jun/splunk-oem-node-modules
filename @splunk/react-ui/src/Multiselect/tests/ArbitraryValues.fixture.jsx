import React from 'react';
import Multiselect from '@splunk/react-ui/Multiselect';

const defaultValues = ['1', '2'];

function Fixture() {
    return (
        <Multiselect
            data-test="arbitrary-multiselect-fixture"
            defaultValues={defaultValues}
            allowNewValues
        >
            <Multiselect.Option label="Line Chart" value="1" />
            <Multiselect.Option label="Area Chart" value="2" />
            <Multiselect.Option label="Column Chart" value="3" />
            <Multiselect.Option label="Bar Chart" value="4" />
            <Multiselect.Option label="Pie Chart" value="5" />
            <Multiselect.Option label="Scatter Chart" value="6" />
            <Multiselect.Option label="Bubble Chart" value="7" />
        </Multiselect>
    );
}

export default Fixture;
