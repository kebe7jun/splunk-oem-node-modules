import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { _ } from '@splunk/ui-utils/i18n';
import Switch from '@splunk/react-ui/Switch';
import Check from '@splunk/react-icons/Check';
import ChevronRight from '@splunk/react-icons/ChevronRight';

import { getStyled } from '@splunk/react-ui/Themes';
import './StyleItem';

const {
    StyledClickable,
    StyledLabel,
    StyledMatch,
    StyledItemSelectedIcon,
    StyledSubmenu,
    StyledItemDescriptionBottom,
    StyledItemDescriptionRight,
    StyledItemIcon,
} = getStyled('Menu.Item');

class Item extends Component {
    static propTypes = {
        /**
         * Active shows a temporary selected state similar to focus. This is used when filtering the
         * menu items in Multiselect, Select and ComboBox and navigating with arrows.
         */
        active: PropTypes.bool,
        /** `children` become the label. Must be a string if using matchRanges. */
        children: (props, ...rest) => {
            if (props.matchRanges && !isString(props.children)) {
                return new Error('The matchRanges prop can only be used when chilren is a string.');
            }
            return PropTypes.any(props, ...rest);
        },
        /**
         * Additional information to explain the option, such as "Recommended".
         */
        description: PropTypes.string,
        /**
         * The description text may appear to the right of the label or under the label.
         */
        descriptionPosition: PropTypes.oneOf(['right', 'bottom']),
        /**
         * If disabled=true, the item is grayed out and cannot be clicked.
         */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * And icon to the right to show there is a submenu.
         */
        hasSubmenu: PropTypes.bool,
        /**
         * An icon to insert before the children.
         */
        icon: PropTypes.node,
        /**
         * Sections of the label string to highlight as a match.
         */
        matchRanges: PropTypes.arrayOf(
            PropTypes.shape({
                start: PropTypes.number.isRequired,
                end: PropTypes.number.isRequired,
            })
        ),
        /**
         * Callback for click events.
         */
        onClick: PropTypes.func,
        /**
         * To open the link in a new window, set openInNewContext to true. An icon will be added
         * indicating the the behavior.
         */
        openInNewContext: PropTypes.bool,
        /**
         * The default role is inferred from the other props. `selectable` with a
         * `selectableAppearance` of checkmark will default to `menuitemradio`, `selectable` with a
         * `selectableAppearance` of checkbox will default to `menuitemcheckbox`. Otherwise defaults
         * to `menuitem`.
         */
        role: PropTypes.oneOf([
            'menuitem',
            'menuitemradio',
            'menuitemcheckbox',
            'listboxitem',
            'option',
        ]),
        /**
         * If selectable is true, whitespace will be left where the checkmark can be shown.
         */
        selectable: PropTypes.bool,
        /**
         * If selectable is true, whitespace will be left where the checkmark can be shown.
         */
        selectableAppearance: PropTypes.oneOf(['checkmark', 'checkbox']),
        /**
         * If selected is true, a checkmark will show the item is selected.
         */
        selected: PropTypes.bool,
        /* A url or path to link to.  */
        to: PropTypes.string,
        /**
         * When `true`, wrapping is disabled and any additional text is ellipsised.
         */
        truncate: PropTypes.bool,
    };

    static defaultProps = {
        active: false,
        descriptionPosition: 'bottom',
        disabled: false,
        elementRef() {},
        hasSubmenu: false,
        openInNewContext: false,
        selectable: false,
        selectableAppearance: 'checkmark',
        selected: false,
        truncate: false,
    };

    static validateProps(props) {
        if (__DEV__ && props.truncate && props.descriptionPosition === 'right') {
            throw new Error("'truncate' is not compatible with descriptions on the right.");
        }
    }

    constructor(props, ...rest) {
        super(props, ...rest);

        Item.validateProps(props);
    }

    componentWillReceiveProps(nextProps) {
        Item.validateProps(nextProps);
    }

    focus() {
        this.el.focus();
    }

    handleMount = el => {
        this.el = el;
        this.props.elementRef(el);
    };

    scrollIntoViewIfNeeded() {
        const el = this.el;
        const parentEl = el.offsetParent;
        if (!parentEl) {
            return;
        }

        // Below the bottom of the container.
        if (parentEl.scrollTop + parentEl.clientHeight < el.offsetTop + el.clientHeight) {
            parentEl.scrollTop = el.offsetTop + el.clientHeight - parentEl.clientHeight;

            // Above the top of the container.
        } else if (parentEl.scrollTop > el.offsetTop) {
            parentEl.scrollTop = el.offsetTop;
        }
    }

    renderLabel() {
        const { children, matchRanges } = this.props;

        if (!matchRanges || !isString(children)) {
            return children;
        }

        const segments = [];

        // before first match. May be empty string.
        segments.push(children.substring(0, matchRanges[0].start));

        matchRanges.forEach((match, index) => {
            segments.push(
                // eslint-disable-next-line react/no-array-index-key
                <StyledMatch key={index} data-test="match">
                    {children.substring(match.start, match.end)}
                </StyledMatch>
            );

            if (index < matchRanges.length - 1) {
                segments.push(children.substring(match.end, matchRanges[index + 1].start));
            } else {
                segments.push(children.substring(match.end, children.length));
            }
        });
        return segments;
    }

    render() {
        const {
            active,
            children,
            hasSubmenu,
            selectable,
            selectableAppearance,
            selected,
            icon,
            description,
            disabled,
            matchRanges,
            onClick,
            role,
            to,
            truncate,
            descriptionPosition,
            openInNewContext,
            ...otherProps
        } = this.props;

        const isSelectable = selectable || selected;

        const defaultRole = {
            nonselectable: 'menuitem',
            checkmark: 'menuitemradio',
            checkbox: 'menuitemcheckbox',
        }[isSelectable ? selectableAppearance : 'nonselectable'];

        const ariaProps = {};
        if (hasSubmenu) {
            ariaProps['aria-haspopup'] = true;
        }

        return (
            <StyledClickable
                data-selectable={isSelectable}
                data-selectable-appearance={selectableAppearance}
                data-test="item"
                data-has-icon={!!icon}
                data-truncation={truncate}
                data-active={active ? true : null}
                disabled={disabled}
                onClick={onClick}
                role={role || defaultRole}
                to={to}
                title={truncate && isString(children) ? children : null}
                openInNewContext={openInNewContext}
                {...ariaProps}
                {...otherProps}
                elementRef={this.handleMount}
            >
                {selected &&
                    selectableAppearance === 'checkmark' && (
                        <StyledItemSelectedIcon>
                            <Check screenReaderText={_('Selected')} size={0.85} />
                        </StyledItemSelectedIcon>
                    )}
                {selectable &&
                    selectableAppearance === 'checkbox' && (
                        <Switch
                            style={{
                                position: 'absolute',
                                left: 8,
                                top: 2,
                            }}
                            interactive={false}
                            selected={selected}
                            selectedLabel="Selected"
                            unselectedLabel=""
                            value="menu-item"
                        />
                    )}
                {hasSubmenu && (
                    <StyledSubmenu>
                        <ChevronRight />
                    </StyledSubmenu>
                )}
                {description &&
                    descriptionPosition === 'right' && (
                        <StyledItemDescriptionRight data-test="description">
                            {description}
                        </StyledItemDescriptionRight>
                    )}
                <StyledLabel data-test="label">
                    {icon && <StyledItemIcon>{icon}</StyledItemIcon>}
                    {this.renderLabel()}
                </StyledLabel>
                {description &&
                    descriptionPosition === 'bottom' && (
                        <StyledItemDescriptionBottom data-test="description">
                            {description}
                        </StyledItemDescriptionBottom>
                    )}
            </StyledClickable>
        );
    }
}
export default Item;
