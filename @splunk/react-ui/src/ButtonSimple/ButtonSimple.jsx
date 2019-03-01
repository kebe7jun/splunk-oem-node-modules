import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _ } from '@splunk/ui-utils/i18n';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledClickable } = getStyled('ButtonSimple');

export default class ButtonSimple extends Component {
    static propTypes = {
        /** Returns a value on click. Use when composing or testing. */
        action: PropTypes.string,
        /** Changes the style of the button. */
        appearance: PropTypes.oneOf(['default', 'secondary', 'primary', 'pill']),
        /** Removes the right border and border-radius of the button so you can
         * append things to it. */
        append: PropTypes.bool,
        /** @private */
        children: PropTypes.node,
        /** Add a disabled attribute and prevent clicking. */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Restricts the horizontal size of the button. Set `inline` to false to
         * remove the right margin and stretch the button to the full width of
         * its container.  */
        inline: PropTypes.bool,
        /** Open  the 'to' link in a new tab. */
        openInNewContext: PropTypes.bool,
        /** Removes the left border and border-radius of the button so you can
         * prepend things to it. */
        prepend: PropTypes.bool,
        /** Adds the style to make the button appear selected. */
        selected: PropTypes.bool,
        /** Turns the button red. If you use this prop, apply other error
         * indicators such as an error message, to meet accessibility
         * requirements. */
        status: PropTypes.oneOf(['normal', 'error']),
        /** Identifies the url for a link. If set, Splunk UI applies an <a> tag
         * instead of a <button> tag. */
        to: PropTypes.string,
    };

    static defaultProps = {
        appearance: 'default',
        append: false,
        disabled: false,
        status: 'normal',
        inline: true,
        openInNewContext: false,
        prepend: false,
        selected: false,
    };

    /**
     * Places focus on the button.
     */
    focus() {
        if (this.component) {
            this.component.focus();
        }
    }

    render() {
        const { appearance, append, children, status, prepend, selected } = this.props;

        return (
            <StyledClickable
                aria-invalid={status === 'error' || null}
                data-test="button-simple"
                data-appearance={appearance}
                data-error={status === 'error' ? true : null}
                data-append={append || null}
                data-prepend={prepend || null}
                data-selected={selected || null}
                innerRef={c => (this.component = c)}
                {...this.props}
            >
                {children}
                {selected && <ScreenReaderContent>{_('Selected')}</ScreenReaderContent>}
            </StyledClickable>
        );
    }
}
