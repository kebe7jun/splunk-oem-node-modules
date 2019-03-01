import React, { Component } from 'react';
import Button from '@splunk/react-ui/Button';
import File from '@splunk/react-ui/File';

class Example extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            dropAnywhere: false,
            isDragOver: false,
            disabled: false,
        };
    }

    /**
     * When #trigger is clicked, it sends a dragover event to the window object.
     */
    handleTriggerWindowClick = () => {
        window.dispatchEvent(new Event('dragover', { bubbles: true }));
    };

    /**
     * when #toggle is clicked, it toggles the dropAnywhere flag.
     */
    handleDropAnywhereClick = () => {
        this.setState({
            dropAnywhere: !this.state.dropAnywhere,
        });
    };

    /**
     * when #toggle is clicked, it toggles the disabled flag.
     */
    handleDisabledClick = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    };

    render() {
        return (
            <div>
                <Button id="trigger" onClick={this.handleTriggerWindowClick}>
                    Trigger Drag on Window
                </Button>
                <Button id="toggle" onClick={this.handleDropAnywhereClick}>
                    Toggle Drop Anywhere
                </Button>
                <Button id="disable" onClick={this.handleDisabledClick}>
                    Toggle Disable
                </Button>
                <File
                    id="file"
                    size="medium"
                    dropAnywhere={this.state.dropAnywhere}
                    disabled={this.state.disabled}
                >
                    {this.state.filename && <File.Item name={this.state.filename} />}
                </File>
            </div>
        );
    }
}

export default Example;
