import React from 'react';
import ButtonGroup from '@splunk/react-ui/ButtonGroup';
import Button from '@splunk/react-ui/Button';

export default () => (
    <ButtonGroup data-test="button-group-fixture">
        <Button label="one" />
        <Button label="two" />
    </ButtonGroup>
);
