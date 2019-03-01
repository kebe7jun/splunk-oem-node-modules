import React from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledPanel } = getStyled('TabLayout');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /** See Icon documention for more information. */
    icon: PropTypes.node,
    /** The text shown in the button. */
    label: PropTypes.string,
    /** A unique id for this panel and used by the TabLayout to keep track of the open panel. */
    panelId: PropTypes.string.isRequired,
    /**
     * Content to show in a tooltip when the user hovers over or focuses on the tab.
     */
    tooltip: PropTypes.node,
    /** Prevents user from clicking the tab. */
    disabled: PropTypes.bool,
};

const defaultProps = {
    disabled: false,
};

function Panel(props) {
    const { children, elementRef, panelId } = props;
    return (
        <StyledPanel
            data-test="panel"
            data-test-panel-id={panelId}
            innerRef={elementRef}
            role="tabpanel"
            {...omit(props, keys(propTypes))}
        >
            {children}
        </StyledPanel>
    );
}

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
export default Panel;
