import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';
import { getStyled } from '@splunk/react-ui/Themes';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

import './Style';

const { Styled, StyledClickable, StyledFirefoxFlexHack } = getStyled('Card');

class Card extends Component {
    static propTypes = {
        /**
         * Any renderable children can be passed to the card.
         *
         * To take advantage of the default Splunk card styles, use the
         * Card.Header, Card.Body, and Card.Footer.
         */
        children: PropTypes.node,
        /** @private */
        className: ClassNamePropCheck,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** @private */
        margin: PropTypes.number,
        /** @private */
        minWidth: PropTypes.number,
        /** @private */
        maxWidth: PropTypes.number,
        /**
         * Callback when card loses focus.
         */
        onBlur: PropTypes.func,
        /**
         * Callback when card is clicked.
         */
        onClick: PropTypes.func,
        /**
         * To open the `to` link in a new window, set openInNewContext to true.
         */
        openInNewContext: PropTypes.bool,
        /**
         * If card is selected.
         */
        selected: PropTypes.bool,
        /** Card has border. */
        showBorder: PropTypes.bool,
        /** @private */
        style: PropTypes.object,
        /**
         * A url to go to when card is clicked.
         */
        to: PropTypes.string,
        /** Returns a value on click. Use when composing or have multiple selectable cards. */
        value: PropTypes.any,
    };

    static defaultProps = {
        selected: false,
        style: {},
        showBorder: true,
        openInNewContext: false,
    };

    static Header = Header;

    static Body = Body;

    static Footer = Footer;

    handleCardClick = e => {
        const { selected, value } = this.props;
        this.props.onClick(e, { selected, value });
    };

    render() {
        const {
            children,
            elementRef,
            minWidth,
            maxWidth,
            margin,
            onBlur,
            onClick,
            openInNewContext,
            showBorder,
            selected,
            style,
            to,
            ...otherProps
        } = this.props;
        const isClickable = !!onClick || !!to;
        const cardStyle = {
            minWidth,
            maxWidth,
            margin,
            ...style,
        };
        if (isClickable) {
            return (
                <StyledClickable
                    data-clickable
                    data-selected={selected}
                    data-card-has-border={showBorder}
                    elementRef={elementRef}
                    style={{ ...cardStyle }}
                    data-test="card"
                    role="presentation"
                    {...otherProps}
                    onClick={onClick ? this.handleCardClick : undefined}
                    onBlur={onBlur}
                    openInNewContext={openInNewContext}
                    to={to || undefined}
                >
                    {/* Wrap button children in a flex element to force Firefox to render as flex
                    See https://bugzilla.mozilla.org/show_bug.cgi?id=1397768 (partial fix for this in https://bugzilla.mozilla.org/show_bug.cgi?id=984869). */}
                    <StyledFirefoxFlexHack>{children}</StyledFirefoxFlexHack>
                </StyledClickable>
            );
        }
        return (
            <Styled
                data-selected={selected}
                data-card-has-border={showBorder}
                innerRef={elementRef}
                style={cardStyle}
                data-test="card"
                role="presentation"
                {...otherProps}
            >
                {children}
            </Styled>
        );
    }
}

export default Card;
export { Header, Body, Footer };
