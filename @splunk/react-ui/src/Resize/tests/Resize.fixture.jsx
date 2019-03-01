import React, { Component } from 'react';
import Resize from '@splunk/react-ui/Resize';

class Basic extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            height: 100,
            width: 100,
        };
    }

    onRequestResize = (e, { height, width }) => {
        this.setState({ height, width });
    };

    render() {
        const { height, width } = this.state;

        return (
            <div style={{ padding: 100 }} data-test="resize-fixture">
                <Resize
                    resizeHandles={['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']}
                    onRequestResize={this.onRequestResize}
                    style={{
                        height,
                        width,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            backgroundColor: '#d9edf7',
                        }}
                    />
                </Resize>
            </div>
        );
    }
}

export default Basic;
