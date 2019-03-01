import React from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledBox } = getStyled('Modal.Body');

const propTypes = {
    /** @private */
    children: PropTypes.node,
};

/**
 * A styled container for modal body content.
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
