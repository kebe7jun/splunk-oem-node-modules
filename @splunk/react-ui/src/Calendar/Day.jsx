import React from 'react';
import PropTypes from 'prop-types';
import moment from '@splunk/moment';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledTableData, StyledButton, StyledButtonSelected } = getStyled('Calendar.Day');

const propTypes = {
    /** Day number to be displayed */
    value: PropTypes.string,
    /** Locale set by language and localization specifiers. */
    locale: PropTypes.string,
    /** Callback for click */
    onClick: PropTypes.func,
    /** Whether or not this day is selected */
    selected: PropTypes.bool,
};

const defaultProps = {
    locale: 'en_US',
    onClick() {},
    selected: false,
};

export default function Day(props) {
    const { onClick, selected, value } = props;

    function handleClick(e) {
        onClick(e, { value });
    }

    const day = value && moment(value, 'YYYY-MM-DD', props.locale).format('D');
    const StyledButtonComponent = selected ? StyledButtonSelected : StyledButton;

    return (
        <StyledTableData>
            <StyledButtonComponent
                tabIndex={selected ? -1 : undefined}
                aria-checked={selected}
                data-test="day-of-month"
                data-test-day={day}
                role="menuitemradio"
                onClick={handleClick}
            >
                {day}
            </StyledButtonComponent>
        </StyledTableData>
    );
}

Day.propTypes = propTypes;
Day.defaultProps = defaultProps;
