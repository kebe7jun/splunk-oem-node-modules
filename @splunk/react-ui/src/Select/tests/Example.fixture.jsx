import React from 'react';
import Select from '@splunk/react-ui/Select';

export default () => (
    <Select data-test="my-project:select-direction" defaultValue="3">
        <Select.Option label="Up" value="1" />
        <Select.Option label="Right" value="2" />
        <Select.Option label="Left" value="3" />
        <Select.Option label="Down" value="4" hidden />
    </Select>
);
