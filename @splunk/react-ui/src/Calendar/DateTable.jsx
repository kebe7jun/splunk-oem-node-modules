import React from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';
import moment from '@splunk/moment';
import { getStyled } from '@splunk/react-ui/Themes';

import Day from './Day';
import './Style';

const { Styled, StyledTableHeader } = getStyled('Calendar.DateTable');

const propTypes = {
    displayValue: PropTypes.string.isRequired,
    locale: PropTypes.string,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string.isRequired,
};

const defaultProps = {
    locale: 'en_US',
    onChange() {},
};

function renderPaddingCells(count) {
    return times(count, i => <td key={`${i}`} />);
}

function renderDays({ selectedDate, startDate, endDate, locale, onChange }) {
    const cursor = moment(startDate)
        .locale(locale)
        .startOf('month');
    const days = [];
    while (cursor.isSameOrBefore(endDate)) {
        const cursorString = cursor.format('YYYY-MM-DD');
        days.push(
            <Day
                key={cursorString}
                value={cursorString}
                locale={locale}
                onClick={onChange}
                selected={selectedDate.isSame(cursor)}
            />
        );
        cursor.add(1, 'day');
    }
    return days;
}

function renderRows(cells) {
    return cells
        .reduce((accum, el, i) => {
            const row = Math.floor(i / 7);
            accum[row].push(el);
            return accum;
        }, times(7, () => []))
        .map((row, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={`$week-${i}`}>{row}</tr>
        ));
}

function renderHeader(locale) {
    return (
        <thead>
            <tr>
                {times(7, i => {
                    const label = moment()
                        .locale(locale)
                        .weekday(i)
                        .format('ddd');
                    return <StyledTableHeader key={label}>{label}</StyledTableHeader>;
                })}
            </tr>
        </thead>
    );
}

export default function DateTable(props) {
    const { displayValue, locale, onChange, selectedValue } = props;
    const displayDate = moment(displayValue, 'YYYY-MM-DD', locale);
    const selectedDate = moment(selectedValue, 'YYYY-MM-DD', locale);
    const startDate = moment(displayDate).startOf('month');
    const endDate = moment(displayDate)
        .endOf('month')
        .startOf('day');

    const cells = renderPaddingCells(startDate.format('e'))
        .concat(renderDays({ selectedDate, startDate, endDate, locale, onChange }))
        .concat(renderPaddingCells(6 - endDate.format('e')));

    return (
        <div role="menu">
            <Styled>
                {renderHeader(locale)}
                <tbody>{renderRows(cells)}</tbody>
            </Styled>
        </div>
    );
}

DateTable.propTypes = propTypes;
DateTable.defaultProps = defaultProps;
