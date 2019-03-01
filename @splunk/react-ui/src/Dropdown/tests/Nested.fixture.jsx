import React from 'react';
import Button from '@splunk/react-ui/Button';
import Dropdown from '@splunk/react-ui/Dropdown';
import { without } from 'lodash';

export default function Nested() {
    const topToggle = <Button id="topToggle" />;
    const nestToggle = <Button id="nestedToggle" />;
    const reasons = without(Dropdown.possibleCloseReasons, 'contentClick');

    return (
        <Dropdown closeReasons={reasons} id="topDropdown" toggle={topToggle}>
            <div id="topPopover">
                <Dropdown id="nestedDropdown" toggle={nestToggle}>
                    <span id="nestedPopover">Goodbye, cruel world!</span>
                </Dropdown>
            </div>
        </Dropdown>
    );
}
