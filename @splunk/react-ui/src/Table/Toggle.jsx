import React from 'react';
import PropTypes from 'prop-types';
import { _ } from '@splunk/ui-utils/i18n';
import Switch from '@splunk/react-ui/Switch';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';

const propTypes = {
    /** @private */
    className: ClassNamePropCheck,
    selected: PropTypes.oneOf([true, false, 'some']),
    allRows: PropTypes.bool,
    disabled: PropTypes.bool,
};

const defaultProps = {
    selected: 'no',
    allRows: false,
};

export default function Toggle(props) {
    const { selected, allRows, disabled, ...otherProps } = props;
    return (
        <Switch
            {...otherProps}
            interactive={false}
            disabled={disabled}
            value=""
            selected={selected}
            style={{ margin: '-6px 0' }}
            selectedLabel={allRows ? _('All rows selected') : _('Row selected')}
            unselectedLabel={allRows ? _('No rows selected') : _('Row unselected')}
            someSelectedLabel={_('Some rows selected')}
        />
    );
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;
