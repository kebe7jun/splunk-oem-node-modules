import React from 'react';
import Select from '@splunk/react-ui/Select';

export default () => (
    <Select data-test="select-fixture" defaultValue="3">
        <Select.Option label="Up" value="1" />
        <Select.Option label="Right" value="2" />
        <Select.Option label="Left" value="3" />
        <Select.Option label="Down" value="4" hidden />
        <Select.Option label="Down and out" value="5">
            Down <b data-test="and">and</b> out
        </Select.Option>
    </Select>
);
