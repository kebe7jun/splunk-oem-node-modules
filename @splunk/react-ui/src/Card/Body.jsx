import React from 'react';
import PropTypes from 'prop-types';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledBox } = getStyled('Card.Body');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
};

/**
 * A styled container for card body content.
 */
function Body(props) {
    const { children, ...otherProps } = props;
    return (
        <StyledBox data-test="body" {...otherProps}>
            {children}
        </StyledBox>
    );
}

Body.propTypes = propTypes;
export default Body;
