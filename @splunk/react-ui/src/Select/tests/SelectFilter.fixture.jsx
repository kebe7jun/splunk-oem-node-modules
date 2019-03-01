import React from 'react';
import Select from '@splunk/react-ui/Select';

export default () => (
    <div>
        <Select data-test="select-filter-fixture" filter defaultValue="3">
            <Select.Option label="Up" value="1" />
            <Select.Option label="Right" value="2" />
            <Select.Option label="Left" value="3" />
            <Select.Option label="Down" value="4" hidden />
            <Select.Option label="Down or out" value="5" />
        </Select>
        <button data-test="away" />
    </div>
);
