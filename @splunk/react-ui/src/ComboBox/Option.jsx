import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Item } from '@splunk/react-ui/Menu';

/**
 * An option within a `ComboBox`. This inherits from
 * [PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent)
 * so any elements passed to it must also be pure.
 */
class Option extends PureComponent {
    static propTypes = {
        /** @private */
        active: PropTypes.bool,
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
         * The icon to show before the label. See the [react-icons](/Packages/react-icons) package for
         * drop in icons.
         *
         * Caution: The element(s) passed here must be pure. All icons in the react-icons package are pure.
         */
        icon: PropTypes.node,
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
        onClick: PropTypes.func,
        /**
         * When `true`, wrapping is disabled and any additional text is ellipsised.
         */
        truncate: PropTypes.bool,
        /**
         * The value of this option and the label shown for it.
         */
        value: PropTypes.string.isRequired,
    };

    static defaultProps = {
        active: false,
        descriptionPosition: 'bottom',
        disabled: false,
        onClick() {},
        truncate: false,
    };

    scrollIntoViewIfNeeded() {
        this.c.scrollIntoViewIfNeeded();
    }

    handleClick = e => {
        const { disabled, onClick, value } = this.props;
        if (!disabled) {
            onClick(e, { value });
        }
    };

    render() {
        // eslint-disable-next-line no-unused-vars
        const { value, ...otherProps } = this.props;
        return (
            <Item
                ref={c => (this.c = c)}
                data-test="option"
                data-test-value={value}
                {...otherProps}
                onClick={this.handleClick}
                role="option"
                aria-selected={false}
            >
                {value}
            </Item>
        );
    }
}
export default Option;
