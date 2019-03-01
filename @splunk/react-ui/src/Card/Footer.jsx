import React from 'react';
import PropTypes from 'prop-types';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledBox } = getStyled('Card.Footer');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /** @private */
    className: ClassNamePropCheck,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /** Show top border of footer */
    showBorder: PropTypes.bool,
};

const defaultProps = {
    showBorder: true,
};

/**
 * A styled container for card footer content.
 */
function Footer(props) {
    const { children, showBorder, ...otherProps } = props;

    return (
        <StyledBox data-test="footer" data-show-top-border={showBorder} {...otherProps}>
            {children}
        </StyledBox>
    );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
export default Footer;
