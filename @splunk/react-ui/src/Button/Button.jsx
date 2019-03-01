import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { toClassName } from '@splunk/ui-utils/style';
import Caret from '@splunk/react-icons/Caret';
import External from '@splunk/react-icons/External';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledButtonSimple, StyledContentWrapper, StyledLabel, StyledIcon } = getStyled('Button');

class Button extends Component {
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
        /** @private */
        className: PropTypes.string,
        /** @private An additional className to add to the button. */
        classNamePrivate: PropTypes.string,
        /** Prevents user from clicking the button. */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** Turns the button red. If you use this prop, apply other error
         * indicators such as an error message, to meet accessibility
         * requirements. */
        error: PropTypes.bool,
        /** Applies the text that displays on the button. */
        label: PropTypes.node,
        /** Applies an icon to the button. See [React Icons](/Packages/react-icons) documention for
         * more information. */
        icon: PropTypes.node,
        /**
         * Restricts the horizontal size of the button. Set `inline` to false to
         * remove the right margin and stretch the button to the full width of
         * its container.  */
        inline: PropTypes.bool,
        /** Displays the chevron-down icon to indicate that the button behaves
         * as a menu. */
        isMenu: PropTypes.bool,
        /** Prevents callback when the button is disabled. */
        onClick: PropTypes.func,
        /** Opens the 'to' link in a new browser tab.  */
        openInNewContext: PropTypes.bool,
        /** Removes the left border and border-radius of the button so you can
         * prepend things to it. */
        prepend: PropTypes.bool,
        /** Adds the style to make the button appear selected. */
        selected: PropTypes.bool,
        /** Adjusts the size of the button. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /** Identifies the url for a link. If set, Splunk UI applies an <a> tag
         * instead of a <button> tag. */
        to: PropTypes.string,
        /** Returns a value on click. Use when composing or testing. */
        value: PropTypes.any,
    };

    static defaultProps = {
        appearance: 'default',
        append: false,
        disabled: false,
        error: false,
        inline: true,
        isMenu: false,
        onClick() {},
        openInNewContext: false,
        prepend: false,
        selected: false,
        size: 'medium',
    };

    /**
     * Places focus on the button.
     */
    focus() {
        if (this.component) {
            this.component.focus();
        }
    }

    handleClick = e => {
        const { label, icon, value, action, onClick } = this.props;
        onClick(e, { label, icon, value, action });
    };

    render() {
        const {
            action,
            className,
            classNamePrivate,
            error,
            icon,
            inline,
            isMenu,
            openInNewContext,
            size,
            value,
        } = this.props;

        let { children, label } = this.props;
        if (!label && isString(children)) {
            label = children;
            children = null;
        }

        return (
            <StyledButtonSimple
                aria-haspopup={isMenu || null}
                aria-invalid={error || null}
                data-test="button"
                {...this.props}
                className={toClassName(className, classNamePrivate)}
                data-action={action}
                data-inline={inline || null}
                data-is-menu={isMenu || null}
                data-icon-only={icon && !label && !isMenu && !children}
                data-size={size}
                status={error ? 'error' : 'normal'}
                value={value}
                onClick={this.handleClick}
                innerRef={c => (this.component = c)}
                openInNewContext={openInNewContext}
            >
                <StyledContentWrapper>
                    {icon && <StyledIcon>{icon}</StyledIcon>}
                    {label && <StyledLabel data-test="label">{label}</StyledLabel>}
                    {children}
                    {isMenu && <Caret size={0.5} screenReaderText={null} />}
                    {openInNewContext && (
                        <External size={0.8} style={{ verticalAlign: 'baseline' }} />
                    )}
                </StyledContentWrapper>
            </StyledButtonSimple>
        );
    }
}

export default Button;
