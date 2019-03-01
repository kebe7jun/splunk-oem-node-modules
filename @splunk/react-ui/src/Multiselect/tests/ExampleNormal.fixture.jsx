import React from 'react';
import Multiselect from '@splunk/react-ui/Multiselect';

function Fixture() {
    return (
        <Multiselect data-test="my-project:chart-multiselect">
            <Multiselect.Option label="Line Chart" value="1" />
            <Multiselect.Option label="Area Chart" value="2" />
            <Multiselect.Option label="Column Chart" value="3" />
        </Multiselect>
    );
}

export default Fixture;
