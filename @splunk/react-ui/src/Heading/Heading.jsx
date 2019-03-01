import React from 'react';
import PropTypes from 'prop-types';

import { getStyled } from '@splunk/react-ui/Themes';
import { levelToElement } from './Style';

const styled = getStyled('Heading');
const styledH = {
    h1: styled.StyledH1,
    h2: styled.StyledH2,
    h3: styled.StyledH3,
    h4: styled.StyledH4,
    h5: styled.StyledH5,
};

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /**
     * Corresponds to the respective `<hX>` HTML tags. Use `s` for section-style headings (`ss` for small variant).
     */
    level: PropTypes.oneOf([1, 2, 3, 4, 's', 'ss']),
};

const defaultProps = {
    level: 2,
};

export default function Heading(props) {
    const { level, children, elementRef } = props;

    const Styled = styledH[levelToElement[level]];

    return (
        <Styled data-test="heading" innerRef={elementRef} {...props}>
            {children}
        </Styled>
    );
}

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;
