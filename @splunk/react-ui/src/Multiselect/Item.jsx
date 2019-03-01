import React from 'react';
import PropTypes from 'prop-types';
import Remove from '@splunk/react-icons/Remove';
import { getStyled } from '@splunk/react-ui/Themes';

import './StyleItem';

const { StyledClickable, StyledInner, StyledIcon, StyledLabel, StyledRemove } = getStyled(
    'Multiselect.Item'
);

const propTypes = {
    /** @private  */
    children: PropTypes.any,
    /** Disabled click events.  */
    disabled: PropTypes.bool,
    /**
     * The icon to show before the label. See the Icon component for more information.
     */
    icon: PropTypes.node,
    /** Adds a remove link to the right.  */
    onRequestRemove: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium']),
    /** value is included in data for onLabelClick and onRequestRemove */
    value: PropTypes.any.isRequired,
};

const defaultProps = {
    size: 'medium',
};

export default function Item(props) {
    const { disabled, icon, children, onRequestRemove, size, value, ...otherProps } = props;

    function handleRemoveClick(e) {
        onRequestRemove(e, { value });
    }

    return (
        <StyledClickable
            data-size={size}
            data-test="selected-option"
            data-test-value={value}
            role="option"
            {...otherProps}
            onClick={handleRemoveClick}
            disabled={disabled}
            aria-selected
            value={value}
        >
            <StyledInner>
                {icon && <StyledIcon>{icon}</StyledIcon>}
                <StyledLabel data-test="label">{children}</StyledLabel>
                {!disabled && (
                    <StyledRemove>
                        <Remove size={0.85} />
                    </StyledRemove>
                )}
            </StyledInner>
        </StyledClickable>
    );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
