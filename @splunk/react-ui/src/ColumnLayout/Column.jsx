import React from 'react';
import PropTypes from 'prop-types';
import { defaults } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled } = getStyled('ColumnLayout.Column');

const propTypes = {
    /** @private. */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /** @private. This prop must only inherit from parent component */
    gutter: PropTypes.number,
    /** The number of columns the element should span. */
    span: PropTypes.number,
    /** @private. This prop should be calculated and set by parent component */
    isFirstChild: PropTypes.bool,
    /** @private. This prop should be calculated and set by parent component */
    isLastChild: PropTypes.bool,
    /** @private. */
    style: PropTypes.object,
};

const defaultProps = {
    span: 1,
};

export default function Column(props) {
    const {
        children,

        elementRef,
        gutter,
        span,
        isFirstChild,
        isLastChild,
        style,
        ...otherProps
    } = props;

    const width = gutter
        ? `calc((100% - ${11 * gutter}px) * ${span / 12} + (${gutter}px * ${span - 1}))`
        : `${(100 / 12) * span}%`;

    const calcStyle = {
        marginLeft: isFirstChild ? undefined : gutter / 2,
        marginRight: isLastChild ? undefined : gutter / 2,
        flex: `${span} ${span} auto`, // may accomodate small rounding errors and dividers
        width,
    };

    return (
        <Styled
            data-test="column"
            innerRef={elementRef}
            style={defaults({}, style, calcStyle)}
            {...otherProps}
        >
            {children}
        </Styled>
    );
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;
