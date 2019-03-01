import React from 'react';
import PropTypes from 'prop-types';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { Styled } = getStyled('Box');

const propTypes = {
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    flex: PropTypes.bool,
    inline: PropTypes.bool,
};

const defaultProps = {
    flex: false,
    inline: false,
};

/**
 * Box is a utility component to normalize and abstact common layout styles.
 */
function Box({ children, elementRef, flex, inline, ...otherProps }) {
    return (
        <Styled
            innerRef={elementRef}
            {...otherProps}
            data-inline={inline || undefined}
            data-flex={flex || undefined}
        >
            {children}
        </Styled>
    );
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
