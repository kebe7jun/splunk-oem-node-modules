import React from 'react';
import Button from '@splunk/react-ui/Button';
import Menu, { Divider, Heading, Item } from '@splunk/react-ui/Menu';

function Basic() {
    return (
        <div>
            <Button data-test="first-button" label="First" />
            <Menu data-test="menu-fixture" style={{ width: 100 }} retainFocus>
                <Item value="one">Events Events Events Events Events Events Events Events</Item>
                <Heading>Chart</Heading>
                <Divider />
                <Item value="two" truncate>
                    Bar Chart Bar Chart Bar Chart Bar ChartBar Chart Bar Chart
                </Item>
            </Menu>
            <Button data-test="last-button" label="Last" />
        </div>
    );
}

export default Basic;
