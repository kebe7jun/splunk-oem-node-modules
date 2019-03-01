import React from 'react';
import Date from '@splunk/react-ui/Date';
import Button from '@splunk/react-ui/Button';

function Basic() {
    return (
        <div>
            <Date data-test="date-fixture" defaultValue="1988-09-29" />
            <Button data-test="button-foo" label="OK" />
            <Date data-test="date-disabled" disabled />
        </div>
    );
}

export default Basic;
