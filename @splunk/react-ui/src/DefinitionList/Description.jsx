import React from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled } = getStyled('DefinitionList.Description');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
};

/**
 * Container component for a `DefinitionList` description.
 */
export default function Description(props) {
    const { children, elementRef, ...otherProps } = props;

    return (
        <Styled data-test="description" innerRef={elementRef} {...otherProps}>
            {children}
        </Styled>
    );
}

Description.propTypes = propTypes;
