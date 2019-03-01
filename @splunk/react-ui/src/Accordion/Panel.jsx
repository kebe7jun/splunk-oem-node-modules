import React from 'react';
import PropTypes from 'prop-types';
import CollapsiblePanel from '@splunk/react-ui/CollapsiblePanel';

const propTypes = {
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /**
     * Identifies the unique id for a `panel`. Accordion uses 'panelID' to track
     * the expanded panel.
     */
    panelId: PropTypes.any.isRequired,
    /**
     * Displays the the name of the `panel` in the panel's title bar.
     */
    title: PropTypes.node.isRequired,
};

/**
 * `Accordian.Panel` operates as a container component for content in an
 * `Accordion`.
 */
function Panel(props) {
    return <CollapsiblePanel data-test="panel" data-test-panel-id={props.panelId} {...props} />;
}

Panel.propTypes = propTypes;
export default Panel;
