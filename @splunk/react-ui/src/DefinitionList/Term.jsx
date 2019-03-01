import React from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled } = getStyled('DefinitionList.Term');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
};

/**
 * Container component for a `DefinitionList` term.
 */
export default function Term(props) {
    const { children, elementRef, ...otherProps } = props;
    return (
        <Styled data-test="term" innerRef={elementRef} {...otherProps}>
            {children}
        </Styled>
    );
}

Term.propTypes = propTypes;
