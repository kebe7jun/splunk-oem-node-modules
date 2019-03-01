import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has } from 'lodash';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

/**
 * Clickable is a utility to abstract `<a>` and `<button>` tags. It is up to the implementer to
 * set styles for appropriate appearance, including focus and hover styles. It has several
 * security, usability and developer convenience features:
 *
 * * A link can be disabled.
 * * Users can hold modifier keys to open links in a new window, even when clicks normally
 *   preventDefault.
 * * Links that go to a different server and open a new context do not pass referrer information.
 * * Normalizes Firefox buttons styles.
 */

const { StyledA, StyledButton } = getStyled('Clickable');

class Clickable extends Component {
    static propTypes = {
        children: PropTypes.node,
        /** Add a disabled attribute and prevent clicking. */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * The onClick event handler will be ignored if ctrl or meta keys are pressed and
         * `to` is defined, which allows the link to open in a new context.
         */
        onClick: PropTypes.func,
        /**
         * To open the link in a new window, set openInNewContext to true.
         */
        openInNewContext: PropTypes.bool,
        /**
         * A url for a link. If set and not disabled, an <a> tag will be used instead of <button>.
         */
        to: PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        elementRef() {},
        openInNewContext: false,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        if (__DEV__ && has(props, 'href')) {
            throw new Error("Use Clickable's 'to' prop instead of 'href'.");
        }
    }

    /**
     * Place focus on the element.
     */
    focus() {
        this.el.focus();
    }

    handleMount = el => {
        this.el = el;
        this.props.elementRef(el);
    };

    handleOnClick = e => {
        // when user command-click on mac or ctrl-click on other platforms, and
        // Tag is an <a>, let the click pass through, let the <a> to achieve user's
        // intent of 'open in new context'
        // on mac, ctrl-click will be caught and open option menu even before hitting
        // the DOM, so we're safe to check both metaKey and ctrlKey here
        // without platform sniffing
        if ((e.metaKey || e.ctrlKey) && this.props.to) {
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    };

    render() {
        const { to, openInNewContext, children, ...otherProps } = this.props;

        let Styled;

        // Only set the href attribute when enabled, and therefore using an <a> tag
        if (to && !otherProps.disabled) {
            Styled = StyledA;
            otherProps.href = to;
        } else {
            Styled = StyledButton;
            otherProps.type = otherProps.type || 'button';
        }

        if (to && openInNewContext) {
            otherProps.target = '_blank';
            if (/^http/.test(to)) {
                otherProps.rel = 'noopener noreferrer';
            }
        }

        return (
            <Styled
                data-test="clickable"
                innerRef={this.handleMount}
                onClick={this.handleOnClick}
                {...otherProps}
            >
                {children}
            </Styled>
        );
    }
}

export default Clickable;
