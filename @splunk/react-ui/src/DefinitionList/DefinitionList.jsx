import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import Description from './Description';
import './Style';
import Term from './Term';

const { Styled } = getStyled('DefinitionList');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /**
     * Defines the width, in pixels, of an item on the list.
     */
    termWidth: PropTypes.number,
};

const defaultProps = {
    termWidth: 120,
};

function processChildren(props) {
    const { children, termWidth } = props;

    return Children.toArray(children)
        .filter(isValidElement)
        .map(child => {
            let childProps;
            switch (child.type) {
                case Term:
                    childProps = { style: { width: termWidth } };
                    break;
                case Description:
                    childProps = { style: { marginLeft: termWidth + 5 } };
                    break;
                default:
                    childProps = {};
            }
            return cloneElement(child, childProps);
        });
}

export default function DefinitionList(props) {
    // eslint-disable-next-line no-unused-vars
    const { children, elementRef, termWidth, ...otherProps } = props;
    return (
        <Styled data-test="definition-list" innerRef={elementRef} {...otherProps}>
            {processChildren(props)}
        </Styled>
    );
}

DefinitionList.propTypes = propTypes;
DefinitionList.defaultProps = defaultProps;

DefinitionList.Description = Description;
DefinitionList.Term = Term;

export { Description, Term };
