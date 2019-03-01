import React from 'react';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import Slider from '@splunk/react-ui/Slider';

function Fixture() {
    return (
        <ControlGroup label="a label" help="a description">
            <Slider data-test="slider-fixture" min={100} max={500} step={25} defaultValue={300} />
        </ControlGroup>
    );
}

export default Fixture;
