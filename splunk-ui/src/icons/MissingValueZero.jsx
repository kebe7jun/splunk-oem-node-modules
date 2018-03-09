import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function MissingValueZero(props) {
    return (
        <SVG
            screenReaderText={_('Missing Value Zero')}
            viewBox="0 0 1500 1350"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1275 0c-124.315 0-225 100.685-225 225 0 54.442 19.315 104.363 51.462 143.27L788.47 903.273C775.97 901.122 763.115 900 750 900c-29.522 0-57.712 5.678-83.537 16.003l-244.41-282.27C439.863 601.508 450 564.443 450 525c0-124.315-100.685-225-225-225S0 400.685 0 525s100.685 225 225 225c30.277 0 59.152-5.972 85.512-16.804l243.482 281.2C535.534 1047.05 525 1084.79 525 1125c0 124.315 100.685 225 225 225s225-100.685 225-225c0-56.957-21.136-108.954-55.996-148.58l310.647-530.987c14.65 2.994 29.816 4.567 45.35 4.567 124.315 0 225-100.685 225-225S1399.315 0 1275 0zM225 150c41.096 0 75-33.904 75-75S266.096 0 225 0s-75 33.904-75 75 33.904 75 75 75zm525 0c41.096 0 75-33.904 75-75S791.096 0 750 0s-75 33.904-75 75 33.904 75 75 75zm0 300c41.096 0 75-33.904 75-75s-33.904-75-75-75-75 33.904-75 75 33.904 75 75 75zm0 300c41.096 0 75-33.904 75-75s-33.904-75-75-75-75 33.904-75 75 33.904 75 75 75zm525-150c-41.096 0-75 33.904-75 75s33.904 75 75 75 75-33.904 75-75-33.904-75-75-75zM225 900c-41.096 0-75 33.904-75 75s33.904 75 75 75 75-33.904 75-75-33.904-75-75-75zm1050 0c-41.096 0-75 33.904-75 75s33.904 75 75 75 75-33.904 75-75-33.904-75-75-75zM225 1200c-41.096 0-75 33.904-75 75s33.904 75 75 75 75-33.904 75-75-33.904-75-75-75zm1050 0c-41.096 0-75 33.904-75 75s33.904 75 75 75 75-33.904 75-75-33.904-75-75-75z" />
        </SVG>
    );
}