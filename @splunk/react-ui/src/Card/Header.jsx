import React from 'react';
import PropTypes from 'prop-types';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledBox, StyledTitleContainer, StyledTitle, StyledSubtitle } = getStyled('Card.Header');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /** @private */
    className: ClassNamePropCheck,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /**
     * Used as the sub heading.
     */
    subtitle: PropTypes.node,
    /**
     * Used as the main heading.
     */
    title: PropTypes.node,
    /**
     * Do not wrap Title and Subtitle. Long titles will truncate with ellipsis.
     */
    truncateTitle: PropTypes.bool,
};

const defaultProps = {
    truncateTitle: true,
};

/**
 * A styled container for card header content.
 */
function Header(props) {
    const { title, subtitle, truncateTitle, children, ...otherProps } = props;
    return (
        <StyledBox data-test="header" {...otherProps}>
            {(title || subtitle) && (
                <StyledTitleContainer data-truncate-title={truncateTitle}>
                    {title && <StyledTitle>{title}</StyledTitle>}
                    {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
                </StyledTitleContainer>
            )}
            {children}
        </StyledBox>
    );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
