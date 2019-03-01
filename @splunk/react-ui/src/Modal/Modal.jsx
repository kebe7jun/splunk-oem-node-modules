import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { spring } from 'react-motion';
import { defer, keys, omit } from 'lodash';
import ModalLayer from '@splunk/react-ui/ModalLayer';
import { handleTab, takeFocus } from '@splunk/ui-utils/focus';
import { keycode } from '@splunk/ui-utils/keyboard';
import { getStyled } from '@splunk/react-ui/Themes';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import './Style';

const { Styled } = getStyled('Modal');

class Modal extends Component {
    static propTypes = {
        /**
         * Any renderable children can be passed to the modal.
         *
         * To take advantage of the default Splunk modal styles, use the
         * Modal.Header, Modal.Body, and Modal.Footer.
         */
        children: PropTypes.node,
        /**
         * `true` if this modal should have a peek button in its header. Requires a `Modal.Header` to be present in
         * the Modal's children.
         */
        enablePeek: PropTypes.bool,
        /**
         * A function that will be called when a close event occurs. The callback will be passed a
         * reason (either 'escapeKey' or 'clickAway') and the event.
         *
         * Generally, this callback should be used to toggle the `open` prop.
         */
        onRequestClose: PropTypes.func,
        /**
         * `true` if this modal is currently open, otherwise `false`.
         */
        open: PropTypes.bool,
        /** @private */
        style: PropTypes.object,
    };

    static defaultProps = {
        enablePeek: false,
        onRequestClose() {},
        open: false,
        style: {},
    };

    static Header = Header;

    static Body = Body;

    static Footer = Footer;

    static getDefaultMotionStyle() {
        return {
            top: 0,
            opacity: 0,
        };
    }

    constructor(...args) {
        super(...args);
        this.state = { peek: false };
    }

    getMotionStyle = () => {
        if (this.props.open) {
            return {
                top: spring(40, { precision: 1 }),
                opacity: spring(1, { precision: 1 }),
            };
        }
        return {
            top: spring(0, { precision: 1 }),
            opacity: spring(0, { precision: 1 }),
        };
    };

    handleModalMount = element => {
        this.el = element;
        if (element) {
            defer(takeFocus, element, 'container');
        }
    };

    handleModalKeyDown = e => {
        if (this.state.peek) {
            e.preventDefault();
        } else {
            handleTab(this.el, e);
        }
    };

    handleRequestClose = e => {
        if (this.state.peek) {
            this.setState({ peek: false });
        } else {
            this.props.onRequestClose(e);
        }
    };

    handleKeyDownPeek = e => {
        if (this.state.peek && (keycode(e) === 'space' || keycode(e) === 'enter')) {
            this.setState({ peek: false });
        }
    };

    handleClickPeek = () => {
        this.setState({ peek: !this.state.peek });
    };

    renderModal = intepolatedStyle => {
        const { enablePeek, style, children } = this.props;
        const { top, opacity } = intepolatedStyle;

        const clonedChildren = Children.toArray(children)
            .filter(isValidElement)
            .map(child => {
                if (enablePeek && child.type === Header) {
                    return cloneElement(child, {
                        isPeeking: this.state.peek,
                        peekHandlers: {
                            onClick: this.handleClickPeek,
                            onKeyDown: this.handleKeyDownPeek,
                        },
                    });
                }
                return child;
            });

        return (
            <Styled // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
                innerRef={this.handleModalMount}
                data-test="modal"
                style={{ ...style, top, opacity }}
                tabIndex={-1}
                onKeyDown={this.handleModalKeyDown}
                role="dialog"
                {...omit(this.props, keys(Modal.propTypes))}
            >
                {clonedChildren}
            </Styled>
        );
    };

    render() {
        return (
            <ModalLayer
                open={this.props.open}
                peek={this.state.peek}
                getDefaultMotionStyle={Modal.getDefaultMotionStyle}
                renderModal={this.renderModal}
                getMotionStyle={this.getMotionStyle}
                onRequestClose={this.handleRequestClose}
            />
        );
    }
}

export default Modal;
export { Header, Body, Footer };
