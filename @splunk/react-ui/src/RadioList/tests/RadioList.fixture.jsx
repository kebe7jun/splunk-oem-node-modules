import React, { Component } from 'react';
import RadioList from '@splunk/react-ui/RadioList';
import Text from '@splunk/react-ui/Text';

class Fixture extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            value: 2,
        };
    }

    handleChange = (e, { value }) => {
        this.setState({ value });
    };

    render() {
        return (
            <RadioList
                data-test="radio-list-fixture"
                value={this.state.value}
                onChange={this.handleChange}
            >
                <RadioList.Option value={1}>One</RadioList.Option>
                <RadioList.Option value={2}>Two</RadioList.Option>
                <RadioList.Option value={3}>
                    Three or <Text inline placeholder="value" style={{ marginTop: '-4px' }} />
                </RadioList.Option>
                <RadioList.Option value={4}>Four</RadioList.Option>
            </RadioList>
        );
    }
}

export default Fixture;
