import React, { Component } from 'react';
import Paginator from '@splunk/react-ui/Paginator';

class Fixture extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            page: 5,
        };
    }

    handleChange = (e, { page }) => {
        this.setState({ page });
    };

    render() {
        return (
            <Paginator
                data-test="paginator-fixture"
                onChange={this.handleChange}
                current={this.state.page}
                alwaysShowLastPageLink
                totalPages={30}
            />
        );
    }
}

export default Fixture;
