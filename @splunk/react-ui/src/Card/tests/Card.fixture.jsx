import React, { Component } from 'react';
import Card from '@splunk/react-ui/Card';
import P from '@splunk/react-ui/Paragraph';

class Basic extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            to: null,
            onClick: null,
        };
    }

    renderCard = () => {
        this.setState({ to: null, onClick: null });
    };

    renderLinkCard = () => {
        this.setState({ to: 'http://example.com', onClick: null });
    };

    renderButtonCard = () => {
        this.setState({ onClick: () => {}, to: null });
    };

    render() {
        const { to, onClick } = this.state;
        const content = (
            <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum metus enim, ac
                ullamcorper ante condimentum at. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Duis laoreet sit amet mauris eget
                ullamcorper. Nullam eu tempor enim. Etiam non enim ac nibh feugiat congue. Nullam
                neque elit, varius vel rhoncus sollicitudin, molestie sit amet sapien. Nunc nibh
                enim, dictum sit amet nisl nec, scelerisque dignissim lacus. Pellentesque placerat
                pulvinar justo id commodo. Nullam maximus nisl quis neque malesuada tempus. Vivamus
                ultricies pellentesque magna a luctus. Mauris vel facilisis odio. Pellentesque
                fringilla ullamcorper nisi, ac condimentum libero viverra id. Donec non suscipit
                dolor.
            </P>
        );
        return (
            <div>
                <div>
                    <button data-test="render-card-button" onClick={this.renderCard}>
                        Default
                    </button>
                    <button data-test="render-link-card-button" onClick={this.renderLinkCard}>
                        Link
                    </button>
                    <button data-test="render-button-card-button" onClick={this.renderButtonCard}>
                        Button
                    </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', height: '300px' }}>
                    <Card minWidth={200} maxWidth={200} onClick={onClick} to={to}>
                        <Card.Header title="Card fixture" />
                        <Card.Body>{content}</Card.Body>
                        <Card.Footer>Footer</Card.Footer>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Basic;
