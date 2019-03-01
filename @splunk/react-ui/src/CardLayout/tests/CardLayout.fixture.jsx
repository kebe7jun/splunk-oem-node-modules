import React, { Component } from 'react';
import Card from '@splunk/react-ui/Card';
import CardLayout from '@splunk/react-ui/CardLayout';
import P from '@splunk/react-ui/Paragraph';
import Button from '@splunk/react-ui/Button';

class Basic extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            wrapCards: true,
        };
    }

    onHandleWrapCards = () => {
        this.setState({ wrapCards: !this.state.wrapCards });
    };

    render() {
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
        const cards = [];
        for (let i = 0; i < 10; i += 1) {
            cards.push(
                <Card key={i} id={`card-${i}`}>
                    <Card.Header title={`Card ${i + 1}`} />
                    <Card.Body>{content}</Card.Body>
                </Card>
            );
        }
        return (
            <div>
                <Button label="Default" id="wrapCards" onClick={this.onHandleWrapCards} />
                <CardLayout cardWidth={200} wrapCards={this.state.wrapCards}>
                    {cards}
                </CardLayout>
            </div>
        );
    }
}

export default Basic;
