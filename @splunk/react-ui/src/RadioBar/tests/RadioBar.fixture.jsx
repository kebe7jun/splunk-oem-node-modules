import React from 'react';
import RadioBar from '@splunk/react-ui/RadioBar';

export default () => (
    <RadioBar data-test="radio-bar-fixture" defaultValue={2}>
        <RadioBar.Option value={1} label="one" />
        <RadioBar.Option value={2} label="two" />
        <RadioBar.Option value={3} label="three" disabled />
    </RadioBar>
);
