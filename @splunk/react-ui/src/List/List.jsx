import React from 'react';
import PropTypes from 'prop-types';
import { extend } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import Item from './Item';

import './Style';

const { StyledUl, StyledOl } = getStyled('List');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    type: PropTypes.oneOf(['disc', 'decimal', 'lower-alpha', 'upper-alpha']),
    /** @private */
    style: PropTypes.object,
};

const defaultProps = {
    type: 'disc',
};

export default function List(props) {
    const { children, elementRef, style, type, ...otherProps } = props;
    const Styled = type === 'disc' ? StyledUl : StyledOl;
    return (
        <Styled
            data-test="list"
            innerRef={elementRef}
            style={extend({ listStyleType: type }, style)}
            {...otherProps}
        >
            {children}
        </Styled>
    );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

List.Item = Item;

export { Item };
