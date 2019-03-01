import React from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledBox } = getStyled('Modal.Footer');

const pTypes = {
    /** @private */
    children: PropTypes.node,
};

/**
 * A styled container for modal footer content.
 */
function Footer(props) {
    const { children, ...otherProps } = props;

    return (
        <StyledBox data-test="footer" {...otherProps}>
            {children}
        </StyledBox>
    );
}

Footer.propTypes = pTypes;
export default Footer;
