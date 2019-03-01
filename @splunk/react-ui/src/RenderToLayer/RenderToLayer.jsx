import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import EventListener from 'react-event-listener';
import { includes, last, remove } from 'lodash';
import PropTypes from 'prop-types';
import { keycode } from '@splunk/ui-utils/keyboard';

class RenderToLayer extends Component {
    static possibleCloseReasons = ['escapeKey', 'clickAway'];

    static propTypes = {
        closeReasons: PropTypes.arrayOf(PropTypes.oneOf(RenderToLayer.possibleCloseReasons)),
        /**
         * Invoked when a potential close event occurs. The function is passed a data object
         * containing the event and a reason. Possible reasons are `escapeKey` and `clickAway`.
         */
        onRequestClose: PropTypes.func,
        /**
         * Whether the component is currently open.
         */
        open: PropTypes.bool,
        /**
         * The render function for the detached sub-tree.
         */
        render: PropTypes.func.isRequired,
    };

    static defaultProps = {
        closeReasons: RenderToLayer.possibleCloseReasons,
        onRequestClose() {},
        open: false,
    };

    /**
     * @private
     * RenderToLayer.instanceStack keeps track of the current instances of RenderToLayer. This is
     * used by RenderToLayer#handleKeyDown to determine if the escapeKey event should be handled by
     * the current instance. Only the topmost RenderToLayer instance should honor the escapeKey.
     */
    static instanceStack = [];

    componentWillMount() {
        if (!RenderToLayer.layerContainer) {
            RenderToLayer.layerContainer = document.createElement('div');
            document.body.appendChild(RenderToLayer.layerContainer);
        }

        if (this.props.open) {
            RenderToLayer.instanceStack.push(this);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.open && nextProps.open) {
            RenderToLayer.instanceStack.push(this);
        } else if (this.props.open && !nextProps.open) {
            remove(RenderToLayer.instanceStack, this);
        }
    }

    handleClickOnLayer = ({ nativeEvent }) => {
        this.layerClickEvent = nativeEvent;
    };

    handleClickOnWindow = event => {
        // clicks inside the layer should not be considered clickAways
        if (
            !this.props.open ||
            !includes(this.props.closeReasons, 'clickAway') ||
            this.layerClickEvent === event
        ) {
            return;
        }

        this.props.onRequestClose({ event, reason: 'clickAway' });
    };

    handleKeyDownOnWindow = event => {
        if (
            this.props.open &&
            keycode(event) === 'esc' &&
            last(RenderToLayer.instanceStack) === this &&
            includes(this.props.closeReasons, 'escapeKey')
        ) {
            this.props.onRequestClose({ event, reason: 'escapeKey' });
        }
    };

    render() {
        const { open, render: renderLayer } = this.props;
        let renderedElement = null;

        if (open) {
            // A hook, `data-portal-layer`, is added to facilitate interactions with Backbone components.
            renderedElement = createPortal(
                <div data-portal-layer="" onMouseDown={this.handleClickOnLayer} role="presentation">
                    {renderLayer()}
                </div>,
                RenderToLayer.layerContainer
            );
        }

        return [
            open && (
                <EventListener
                    key="eventListener"
                    target="window"
                    onKeyDown={this.handleKeyDownOnWindow}
                    onMouseDown={this.handleClickOnWindow}
                    onTouchStart={this.handleClickOnWindow}
                />
            ),
            renderedElement,
        ];
    }
}

export default RenderToLayer;
