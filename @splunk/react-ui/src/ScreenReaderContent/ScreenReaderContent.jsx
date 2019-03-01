import React from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled } = getStyled('ScreenReaderContent');

const propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
};

/**
 * The screen reader text is used to wrap content that
 * is only accessible via screen readers.
 */
export default function ScreenReaderContent(props) {
    const { children, elementRef, ...otherProps } = props;
    return (
        <Styled data-test="screen-reader-content" innerRef={elementRef} {...otherProps}>
            {children}
        </Styled>
    );
}

ScreenReaderContent.propTypes = propTypes;
