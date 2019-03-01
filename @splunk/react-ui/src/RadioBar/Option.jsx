import React from 'react';
import PropTypes from 'prop-types';
import Button from '@splunk/react-ui/Button';

const propTypes = {
    /** Add a disabled attribute and prevent clicking. */
    disabled: PropTypes.bool,
    /** Applies an icon to the button. See [React Icons](/Packages/react-icons) documention for
     * more information. */
    icon: PropTypes.node,
    /** The text shown on the button. */
    label: PropTypes.string,
    /** @private Set by TabBar */
    onClick: PropTypes.func,
    /** @private Set by TabBar */
    selected: PropTypes.bool,
    /** The value to populate the TabBar. */
    value: PropTypes.any.isRequired,
};

function Option(props) {
    const { disabled, onClick, selected, value } = props;
    return (
        <Button
            data-test="option"
            data-test-value={value}
            {...props}
            onClick={selected ? undefined : onClick}
            role="radio"
            disabled={selected ? false : disabled}
            aria-checked={selected}
            tabIndex={selected ? -1 : null}
        />
    );
}

Option.propTypes = propTypes;
export default Option;
