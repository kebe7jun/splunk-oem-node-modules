import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from '@splunk/moment';
import Button from '@splunk/react-ui/Button';
import ChevronLeft from '@splunk/react-icons/ChevronLeft';
import ChevronRight from '@splunk/react-icons/ChevronRight';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledBox, StyledHeading } = getStyled('Calendar.MonthHeader');

class MonthHeader extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        locale: PropTypes.string,
        value: PropTypes.string.isRequired,
    };

    static defaultProps = {
        locale: 'en_US',
        onChange() {},
    };

    static monthYearFormats = {
        default: 'MMMM YYYY',
        ja: 'YYYY年MMM',
        ko: 'YYYY년 MMMM',
        'zh-cn': 'YYYY年MMM',
        'zh-tw': 'YYYY年MMM',
    };

    static getMonthYearFormat(locale) {
        const localeNormalized = locale.toLowerCase().replace('_', '-');
        return (
            MonthHeader.monthYearFormats[localeNormalized] || // full locale match
            MonthHeader.monthYearFormats[localeNormalized.substr(0, 2)] || // language match
            MonthHeader.monthYearFormats.default
        ); // default
    }

    handleChange(e, diff) {
        const newValue = moment(this.props.value, 'YYYY-MM-DD')
            .add(diff, 'M')
            .format('YYYY-MM-DD');
        this.props.onChange(e, { value: newValue });
    }

    handlePrevMonthClick = e => {
        this.handleChange(e, -1);
    };

    handleNextMonthClick = e => {
        this.handleChange(e, 1);
    };

    render() {
        const { locale, value } = this.props;

        const date = moment(value, 'YYYY-MM-DD', locale);
        const monthYear = date.format(MonthHeader.getMonthYearFormat(locale));
        const buttonStyles = {
            flex: '0 0 auto',
        };
        return (
            <StyledBox>
                <Button
                    appearance="pill"
                    icon={<ChevronLeft size={1} screenReaderText="Previous Month" />}
                    data-test="previous-month"
                    onClick={this.handlePrevMonthClick}
                    style={buttonStyles}
                />
                <StyledHeading data-test="header-label">{monthYear}</StyledHeading>
                <Button
                    appearance="pill"
                    icon={<ChevronRight size={1} screenReaderText="Next Month" />}
                    data-test="next-month"
                    onClick={this.handleNextMonthClick}
                    style={buttonStyles}
                />
            </StyledBox>
        );
    }
}

export default MonthHeader;
