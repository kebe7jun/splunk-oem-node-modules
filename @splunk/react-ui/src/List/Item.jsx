import React from 'react';
import PropTypes from 'prop-types';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { Styled } = getStyled('List.Item');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /** @private */
    className: ClassNamePropCheck,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
};

/**
 * A container for items of a `List`.
 */
export default function Item(props) {
    const { children, elementRef, ...otherProps } = props;

    return (
        <Styled data-test="item" innerRef={elementRef} {...otherProps}>
            {children}
        </Styled>
    );
}

Item.propTypes = propTypes;
