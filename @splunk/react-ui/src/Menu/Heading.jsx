import React from 'react';
import PropTypes from 'prop-types';
import H from '@splunk/react-ui/Heading';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { Styled } = getStyled('Menu.Heading');

const propTypes = {
    /** @private */
    children: PropTypes.node,
};

/**
 * A non-interactive menu item used to separate and label groups of menu items.
 */
function Heading(props) {
    const { children, ...otherProps } = props;
    return (
        <Styled>
            <H style={{ margin: 0 }} level={'ss'} data-test="heading" {...otherProps}>
                {children}
            </H>
        </Styled>
    );
}

Heading.propTypes = propTypes;

/* Remove consecutive items with filterConsecutive = true (Dividers and Headings) */
Heading.filterConsecutive = true;
/* Remove the item if it is the last item after filtering. */
Heading.filterLast = true;

export default Heading;
