import React from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled } = getStyled('Paragraph');

const propTypes = {
    /** Generally text, but may also include [Links](./Link). */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
};

const defaultProps = {};

export default function Paragraph(props) {
    const { children, elementRef } = props;

    return (
        <Styled data-test="paragraph" innerRef={elementRef} {...props}>
            {children}
        </Styled>
    );
}

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;
