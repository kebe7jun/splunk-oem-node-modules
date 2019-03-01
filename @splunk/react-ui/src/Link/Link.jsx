import React, { Component } from 'react';
import PropTypes from 'prop-types';
import External from '@splunk/react-icons/External';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledClickable } = getStyled('Link');
/**
 * Link is a simple method for configuring `Button` for inline links. For more complex behaviors,
 * see the Button documenation.
 */
class Link extends Component {
    static propTypes = {
        /** @private */
        children: PropTypes.node,
        /**
         * To open the link in a new window, set openInNewContext to true. An icon will be added
         * indicating the behavior.
         */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * To open the link in a new window, set openInNewContext to true. An icon will be added
         * indicating the the behavior
         */
        openInNewContext: PropTypes.bool,
        /* The url or path to link to.  */
        to: PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        openInNewContext: false,
    };

    /**
     * Place focus on the link.
     */
    focus() {
        if (this.component) {
            this.component.focus();
        }
    }

    handleMount = comp => {
        this.component = comp;
    };

    render() {
        const { children, openInNewContext, ...otherProps } = this.props;

        return (
            <StyledClickable
                data-test="link"
                ref={this.handleMount}
                openInNewContext={openInNewContext}
                {...otherProps}
            >
                {children}
                {openInNewContext && (
                    <External size={0.8} style={{ verticalAlign: 'baseline', marginLeft: 3 }} />
                )}
            </StyledClickable>
        );
    }
}

export default Link;
