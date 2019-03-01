import React, { Component } from 'react';
import Button from '@splunk/react-ui/Button';
import Link from '@splunk/react-ui/Link';
import List from '@splunk/react-ui/List';
import Modal, { Header, Body, Footer } from '@splunk/react-ui/Modal';
import P from '@splunk/react-ui/Paragraph';
import Select from '@splunk/react-ui/Select';

class Basic extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }

    handleRequestOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <Button data-test="modal-toggle" onClick={this.handleRequestOpen} label="Open" />
                <Modal
                    data-test="modal-fixture"
                    onRequestClose={this.handleRequestClose}
                    open={this.state.open}
                    data-test-open={this.state.open}
                >
                    <Header title="Header" onRequestClose={this.handleRequestClose} />
                    <Body>
                        <P>
                            <Link data-test="duck-link" to="https://duckduckgo.com">
                                Go to DuckDuckGo
                            </Link>
                            <List data-test="random-list">
                                <List.Item>Lorem ipsum dolor sit amet</List.Item>
                                <List.Item>Excepteur sint occaecat cupidatat non</List.Item>
                                <List.Item>Sed ut perspiciatis unde omnis</List.Item>
                            </List>
                            <Select data-test="super-select">
                                <Select.Option label="One" value="1" />
                                <Select.Option label="Two" value="2" />
                            </Select>
                        </P>
                    </Body>
                    <Footer>
                        <Button
                            data-test="submit"
                            onClick={this.handleRequestClose}
                            label="Submit"
                        />
                    </Footer>
                </Modal>
            </div>
        );
    }
}

export default Basic;
