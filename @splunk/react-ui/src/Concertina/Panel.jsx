import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import { delay, keys, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import Heading from './Heading';
import './Style';

const { StyledPanelBody } = getStyled('Concertina.Panel');

class Panel extends Component {
    static propTypes = {
        /** @private */
        children: PropTypes.node,
        /** Displays right-aligned text in the title bar of the `panel`. */
        description: PropTypes.node,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** @private */
        index: PropTypes.number,
        /** @private */
        onHeadingClick: PropTypes.func,
        /** @private */
        onChange: PropTypes.func,
        /** An optional id that will be displayed in the markup for testing. */
        panelId: PropTypes.string,
        /** @private */
        style: PropTypes.object,
        /**
         * Set the state of a `panel` to 'error' (red), 'warning' (yellow), or 'disabled' (grey).
         * Disabled panels do not allow user interaction, and do not display content.
         */
        status: PropTypes.oneOf(['normal', 'warning', 'error', 'disabled']),
        /**
         * Displays left-aligned title text in the title bar of the `panel`.
         */
        title: PropTypes.node.isRequired,
    };

    static defaultProps = {
        elementRef() {},
        onHeadingClick() {},
        onChange() {},
        status: 'normal',
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {};
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.children !== prevProps.children || !prevState.containerEl) {
            this.measureHeight();
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    delayUpdate() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = delay(this.measureHeight, 300);
    }

    measureHeight = e => {
        this.delayUpdate();

        if (!this.state.containerEl) {
            return;
        }

        const newHeight = this.state.containerEl.clientHeight;

        if (newHeight === this.lastHeight) {
            return;
        }

        const data = {
            panelId: this.props.panelId,
            index: this.props.index,
            height: this.state.containerEl.offsetHeight,
            headingHeight: this.state.containerEl.offsetHeight - this.state.bodyEl.offsetHeight,
        };

        this.lastHeight = newHeight;

        this.props.onChange(e, data);
    };

    focus() {
        this.state.heading.focus();
    }

    handleMount = containerEl => {
        this.setState({ containerEl });
        this.props.elementRef(containerEl);
    };

    handleHeadingMount = heading => {
        this.setState({ heading });
    };

    handleBodyMount = bodyEl => {
        this.setState({ bodyEl });
    };

    render() {
        const {
            children,
            description,
            // eslint-disable-next-line no-unused-vars
            elementRef,
            index,
            onHeadingClick,
            // eslint-disable-next-line no-unused-vars
            onChange,
            panelId,
            status,
            style,
            title,
        } = this.props;

        return (
            <div
                ref={this.handleMount}
                data-status={status}
                data-test="panel"
                data-test-panel-id={panelId}
                {...omit(this.props, keys(Panel.propTypes))}
            >
                <Heading
                    onClick={onHeadingClick}
                    ref={this.handleHeadingMount}
                    description={description}
                    index={index}
                    panelId={panelId}
                    position="inner"
                    status={status}
                >
                    {title}
                </Heading>
                <EventListener target={window} onResize={this.measureHeight} />
                <StyledPanelBody data-test="body" style={style} innerRef={this.handleBodyMount}>
                    {children}
                </StyledPanelBody>
            </div>
        );
    }
}

export default Panel;
