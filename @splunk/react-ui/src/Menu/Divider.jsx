import React from 'react';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { Styled } = getStyled('Menu.Divider');

const propTypes = {};

/**
 * A non-interactive menu item used to visually separate groups of items in the menu.
 */
function Divider(props) {
    const { ...otherProps } = props;

    return <Styled data-test="divider" {...otherProps} />;
}

export default Divider;

/* Remove the item if it is the first item after filtering */
Divider.filterFirst = true;
/* Remove consecutive items with filterConsecutive = true (Dividers and Headings) */
Divider.filterConsecutive = true;
/* Remove the item if it is the last item after filtering. */
Divider.filterLast = true;

Divider.propTypes = propTypes;
