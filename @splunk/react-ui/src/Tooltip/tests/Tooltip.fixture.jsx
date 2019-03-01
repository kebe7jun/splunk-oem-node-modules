import React from 'react';
import Tooltip from '@splunk/react-ui/Tooltip';

function Fixture() {
    return (
        <div>
            Obscure Label{' '}
            <Tooltip content="I explain the obscure label." data-test="tooltip-fixture" />
            <Tooltip data-test="content-undefined-fixture" />
            <Tooltip content="" data-test="content-empty-fixture" />
            <Tooltip content={false} data-test="content-false-fixture" />
            <Tooltip data-test="content-undefined-children-fixture">
                <button data-test="toggle">toggle</button>
            </Tooltip>
            <Tooltip content="" data-test="content-empty-children-fixture">
                <button data-test="toggle">toggle</button>
            </Tooltip>
            <Tooltip content={false} data-test="content-false-children-fixture">
                <button data-test="toggle">toggle</button>
            </Tooltip>
            <Tooltip content="I explain the obscure label." data-test="disabled-child">
                <button disabled>toggle</button>
            </Tooltip>
            <button id="not-tooltip">X</button>
        </div>
    );
}

export default Fixture;
