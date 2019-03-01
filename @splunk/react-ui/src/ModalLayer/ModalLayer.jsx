import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import RenderToLayer from '@splunk/react-ui/RenderToLayer';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledClickAwayOverlay, StyledPeekOverlay } = getStyled('ModalLayer');
class ModalLayer extends Component {
    static propTypes = {
        /**
         * A function that returns a default style object for react-motion. The values will be
         * used as initial values.
         */
        getDefaultMotionStyle: PropTypes.func,
        /**
         * A function that returns a react-motion style object. The resulting interpolated style
         * will be passed to `renderModal`.
         */
        getMotionStyle: PropTypes.func,
        /**
         * A function that will be called when a close event occurs.
         * The callback will be passed a reason (either 'escapeKey', 'clickAway' or 'clickUnpeek') and the event.
         */
        onRequestClose: PropTypes.func,
        /**
         * Function that renders the modal.
         * @param {Object} intepolatedStyle - The current style object as interpolated by
         * react-motion.
         * @return {PropTypes.node}
         */
        renderModal: PropTypes.func.isRequired,
        /**
         * Indicates whether to add an overlay mask on the whole page, blocking other interactions
         * while the Modal is open.
         */
        useLayerForClickAway: PropTypes.bool,
        /**
         * Indicates whether the modal is currently open.
         */
        open: PropTypes.bool,
        /**
         * Indicates whether the modal is in peek mode.
         */
        peek: PropTypes.bool,
    };

    static defaultProps = {
        getDefaultMotionStyle: () => ({}),
        open: false,
        peek: false,
        renderModal() {},
        useLayerForClickAway: true,
        getMotionStyle: () => ({}),
        onRequestClose() {},
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            animating: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.open !== nextProps.open) {
            this.setState({
                animating: true,
            });
        }
    }

    handleClickAway = event => {
        this.props.onRequestClose({ reason: 'clickAway', event });
    };

    handleClickUnpeek = event => {
        event.preventDefault(); // prevent focus loss
        this.props.onRequestClose({ reason: 'clickUnpeek', event });
    };

    handleAnimationEnd = () => {
        this.setState({
            animating: false,
        });
    };

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    renderLayer = () => {
        const {
            getMotionStyle,
            getDefaultMotionStyle,
            peek,
            renderModal,
            useLayerForClickAway,
        } = this.props;
        const open = this.props.open || this.state.animating;
        const modalOpenOpacity = peek ? 0.1 : 1;

        return (
            <Motion
                defaultStyle={{
                    ...getDefaultMotionStyle(),
                    overlayOpacity: 0,
                    opacity: 0,
                }}
                style={{
                    ...getMotionStyle(),
                    overlayOpacity: spring(this.props.open && !peek ? 1 : 0, { precision: 1 }),
                    opacity: spring(this.props.open ? modalOpenOpacity : 0, { precision: 1 }),
                }}
                onRest={this.handleAnimationEnd}
            >
                {intepolatedStyle => (
                    <div>
                        {renderModal(intepolatedStyle)}
                        {open &&
                            useLayerForClickAway &&
                            peek && (
                                <StyledPeekOverlay
                                    onMouseDown={this.handleClickUnpeek}
                                    key={'peek'}
                                />
                            )}
                        {open &&
                            useLayerForClickAway && (
                                <StyledClickAwayOverlay
                                    onMouseDown={this.handleClickAway}
                                    key={'clickAway'}
                                    style={{ opacity: intepolatedStyle.overlayOpacity }}
                                />
                            )}
                    </div>
                )}
            </Motion>
        );
    };
    /* eslint-enable jsx-a11y/no-static-element-interactions */

    render() {
        return (
            <RenderToLayer
                open={this.props.open || this.state.animating}
                closeReasons={['escapeKey']}
                render={this.renderLayer}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

export default ModalLayer;
