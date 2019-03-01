import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledBox } = getStyled('ButtonGroup');

const propTypes = {
    /**
     * Should  be [Buttons](./Button)
     */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /** @private */
    inline: PropTypes.bool,
};

const defaultProps = {
    inline: true,
};

export default function ButtonGroup(props) {
    const { children, ...otherProps } = props;

    const childrenCleaned = Children.toArray(children)
        .filter(isValidElement)
        .map((item, i, { length }) =>
            cloneElement(item, {
                prepend: i > 0,
                append: i < length - 1,
                inline: false,
                role: (item.props && item.props.role) || 'menuitem',
            })
        );

    return (
        <StyledBox flex data-test="button-group" role="menubar" {...otherProps}>
            {childrenCleaned}
        </StyledBox>
    );
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
