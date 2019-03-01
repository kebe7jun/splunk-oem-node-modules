import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@splunk/react-ui/Switch';

const propTypes = {
    /** @private. This will be be passed to the Switch component untouched. */
    children: PropTypes.node,
    /**
     * The selectable value. If this matches the ControlRadioList value, the item is selceted.
     */
    value: PropTypes.any.isRequired,
};

function Option(props) {
    const { children, ...otherProps } = props;
    return (
        <Switch data-test="option" appearance="radio" {...otherProps}>
            {children}
        </Switch>
    );
}

Option.propTypes = propTypes;
export default Option;
