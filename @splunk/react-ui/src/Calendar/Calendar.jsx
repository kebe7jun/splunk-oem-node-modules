import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import moment from '@splunk/moment';
import { getStyled } from '@splunk/react-ui/Themes';

import DateTable from './DateTable';
import MonthHeader from './MonthHeader';
import './Style';

const { StyledBox } = getStyled('Calendar');

// PropType validator that provided string is formatted correctly.
// eslint-disable-next-line consistent-return
function validateDate(props, propName, componentName) {
    if (!moment(props[propName], 'YYYY-MM-DD').isValid()) {
        return new Error(
            `Invalid ${propName} ${props[propName]} passed to ${componentName}.
${propName} must be a string date formateed 'YYYY-MM-DD'.`
        );
    }
}

class Calendar extends Component {
    static propTypes = {
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /** Locale set by language and localization specifiers. */
        locale: PropTypes.string,
        /**
         * Called when a date is selected from the Calendar.
         */
        onChange: PropTypes.func,
        /**
         * The current date value formatted 'YYYY-MM-DD'.
         */
        value: validateDate,
    };

    static defaultProps = {
        locale: 'en_US',
        onChange() {},
        value: moment().format('YYYY-MM-DD'),
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            internalValue: props.value,
        };
    }

    handleMonthChange = (e, { value }) => {
        this.setState({
            internalValue: value,
        });
    };

    render() {
        const { describedBy, labelledBy, locale, onChange, value } = this.props;

        const displayValue = this.state.internalValue;

        return (
            <StyledBox
                inline
                aria-labelledby={labelledBy}
                aria-describedby={describedBy}
                {...omit(this.props, keys(Calendar.propTypes))}
            >
                <MonthHeader
                    value={displayValue}
                    locale={locale}
                    onChange={this.handleMonthChange}
                />
                <DateTable
                    displayValue={displayValue}
                    selectedValue={value}
                    locale={locale}
                    onChange={onChange}
                />
            </StyledBox>
        );
    }
}

export default Calendar;
