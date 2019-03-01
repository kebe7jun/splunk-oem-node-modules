import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Item } from '@splunk/react-ui/Menu';

/**
 * An option within a `Multiselect`. This inherits from
 * [PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent)
 * so any elements passed to it must also be pure.
 */
class Option extends PureComponent {
    static propTypes = {
        /**
         * When provided, `children` is rendered instead of the `label`.
         *
         * Caution: The element(s) passed here must be pure.
         */
        children: PropTypes.node,
        /**
         * @private this is passed down from Multiselect.
         */
        compact: PropTypes.bool,
        /**
         * Additional information to explain the option, such as "Recommended".
         */
        description: PropTypes.string,
        /**
         * The description text may appear to the right of the label or under the label.
         */
        descriptionPosition: PropTypes.oneOf(['right', 'bottom']),
        /**
         * If disabled=true, the option is grayed out and cannot be clicked.
         */
        disabled: PropTypes.bool,
        /**
         * Adding hidden options can be useful for resolving the selected display label and icon,
         * when the option should not be in the list. This scenario can arise when Select's filter is
         * controlled, because the selected item may be filtered out; and when a legacy option is
         * valid, but should no longer be displayed as a selectable option.
         */
        hidden: PropTypes.bool,
        /**
         * The icon to show before the label. See the [react-icons](/Packages/react-icons) package for
         * drop in icons.
         *
         * Caution: The element(s) passed here must be pure. All icons in the react-icons package are pure.
         */
        icon: PropTypes.node,
        /**
         * The text to show for the option when `children` is not defined. When filtering, the
         * `label` is used for matching to the filter text.
         */
        label: PropTypes.string.isRequired,
        /** @private */
        onClick: PropTypes.func,
        /**
         * Sections of the label string to highlight as a match. This is automatically set for
         * uncontrolled filters, so it's not normally necessary to set this property when using
         * filtering.
         */
        matchRanges: PropTypes.arrayOf(
            PropTypes.shape({
                start: PropTypes.number.isRequired,
                end: PropTypes.number.isRequired,
            })
        ),
        /** @private */
        selected: PropTypes.bool,
        /**
         * When `true`, wrapping is disabled and any additional text is ellipsised.
         */
        truncate: PropTypes.bool,
        /**
         * The label and/or icon will be placed on the Control's toggle if it matches this value.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    };

    static defaultProps = {
        compact: false,
        descriptionPosition: 'bottom',
        disabled: false,
        onClick() {},
        selected: false,
        truncate: false,
    };

    scrollIntoViewIfNeeded() {
        this.c.scrollIntoViewIfNeeded();
    }

    handleClick = e => {
        const { onClick, value, disabled } = this.props;
        if (!disabled) {
            onClick(e, { value });
        }
    };

    render() {
        const { value, children, compact, label, ...otherProps } = this.props;
        const ariaProps = {};
        if (compact) {
            ariaProps['aria-checked'] = this.props.selected;
        } else {
            ariaProps['aria-selected'] = this.props.selected;
        }

        return (
            <Item
                ref={c => (this.c = c)}
                data-test="option"
                data-test-value={value}
                {...otherProps}
                selectable={compact}
                selectableAppearance={compact ? 'checkbox' : undefined}
                onClick={this.handleClick}
                // ariaProps contains the required attributes
                // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                role="option"
                value={value}
                {...ariaProps}
            >
                {children || label}
            </Item>
        );
    }
}
export default Option;
