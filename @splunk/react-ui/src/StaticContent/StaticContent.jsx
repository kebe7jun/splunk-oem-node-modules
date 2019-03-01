import React from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledBox } = getStyled('StaticContent');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /** When true, display as inline-block with auto width. */
    inline: PropTypes.bool,
    /** The small size will align with small Text, Select and other controls. */
    size: PropTypes.oneOf(['small', 'medium']),
};

const defaultProps = {
    inline: false,
    size: 'medium',
};

/**
 * This component is intended for use in a control group, either to display a static value or
 * between two controls.
 */
export default function StaticContent(props) {
    const { children, size, ...otherProps } = props;
    return (
        <StyledBox data-test="static-content" data-size={size} {...otherProps}>
            {children}
        </StyledBox>
    );
}

StaticContent.propTypes = propTypes;
StaticContent.defaultProps = defaultProps;
