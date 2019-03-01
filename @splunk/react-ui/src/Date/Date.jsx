import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, omit } from 'lodash';
import moment from '@splunk/moment';
import { createDOMID } from '@splunk/ui-utils/id';
import { keycode } from '@splunk/ui-utils/keyboard';
import Calendar from '@splunk/react-ui/Calendar';
import Popover from '@splunk/react-ui/Popover';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledText } = getStyled('Date');

class Date extends Component {
    static propTypes = {
        /** Default date to display. Set this instead of value to make the Date uncontrolled. */
        defaultValue: PropTypes.string,
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        /** Add a disabled attribute and prevent clicking. */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Highlight the field as having an error. The border and text will turn red.
         */
        error: PropTypes.bool,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /** Locale set by language and localization specifiers. */
        locale: PropTypes.string,
        /** When false, display as inline-block with the default width. */
        inline: PropTypes.bool,
        onBlur: PropTypes.func,
        /**
         * Return event and data object with date string (in YYYY-MM-DD format) when a date is
         * selected.
         */
        onChange: PropTypes.func,
        onClick: PropTypes.func,
        onFocus: PropTypes.func,
        onKeyDown: PropTypes.func,
        /** The overall size of the input. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /** Setting this value makes the property controlled. An onChange callback is required.
         *
         * The value must be in the format 'YYYY-MM-DD'. To simplify creation of these strings,
         * Date provides a Moment.js formatting string:
         * ```
         * moment().format(Date.momentFormat);
         * ```
         */
        value: PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        error: false,
        inline: true,
        locale: 'en_US',
        onBlur() {},
        onChange() {},
        onClick() {},
        onFocus() {},
        onKeyDown() {},
        size: 'medium',
    };
    /**
     * This static value can be used to convert a moment date to a compatible string
     * to set the `value` prop.
     * ```
     * moment().format(Date.momentFormat);
     * ```
     * @public
     * @name momentFormat
     * @memberOf Date
     * @type string
     */
    static momentFormat = 'YYYY-MM-DD';

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');

        const dateString = this.isControlled()
            ? props.value
            : props.defaultValue ||
              moment()
                  .locale(props.locale)
                  .format(Date.momentFormat);
        const dateObject = moment(dateString, Date.momentFormat, props.locale);
        this.state = {
            value: this.isControlled() ? null : dateString,
            displayDate: dateObject,
            calendarOpen: false,
            tempTextInputDate: null,
        };

        this.popoverId = createDOMID('calender');

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            throw new Error("Date's 'defaultValue' prop is not compatible with 'value' prop.");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            throw new Error(
                "Cannot change Date from an uncontrolled component to a controlled one. Prop 'value' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            throw new Error(
                "Cannot change 'defaultValue' after set. Consider using a controlled component instead."
            );
        }
        const dateObject = moment(nextProps.value, Date.momentFormat, nextProps.locale);
        if (this.isControlled()) {
            this.setState({
                displayDate: dateObject,
            });
        }
    }

    getValue() {
        return this.isControlled() ? this.props.value : this.state.value;
    }

    getTextInputValue() {
        return this.state.tempTextInputDate === null
            ? moment(this.getValue(), Date.momentFormat, this.props.locale).format('l')
            : this.state.tempTextInputDate;
    }

    focus() {
        this.state.anchor.focus();
    }

    applyTextChange = e => {
        const date = moment(this.state.tempTextInputDate, 'l', this.props.locale);
        if (date.isValid()) {
            this.handleDateChange(e, {
                value: date.format(Date.momentFormat),
                origin: 'textInput',
            });
        } else {
            this.setState({
                tempTextInputDate: null,
                calendarOpen: false,
            });
        }
    };

    handleDateChange = (e, { value, origin }) => {
        const dateObject = moment(value, Date.momentFormat, this.props.locale);

        if (origin !== 'textInput') {
            this.focusCalledInternally = true;
            this.focus();
        }
        if (this.getValue() !== value) {
            this.setState({
                value: this.isControlled() ? null : value,
                displayDate: dateObject,
                tempTextInputDate: null,
                calendarOpen: false,
            });
            this.props.onChange(e, { value });
        } else {
            this.setState({
                calendarOpen: false,
            });
        }
    };

    handleFocus = e => {
        /* SUI-930 On IE 11 this handler is essentially deferred after calling
         * this.textInput.focus(). this.focusCalledInternally enables the focus event to be ignored
         * when the menu closes. */
        if (this.focusCalledInternally) {
            this.focusCalledInternally = false;
        } else {
            this.setState({
                calendarOpen: true,
            });
        }

        this.props.onFocus(e);
    };

    handleClick = e => {
        if (!this.state.calendarOpen) {
            this.setState({
                calendarOpen: true,
            });
        }
        this.props.onClick(e);
    };

    handleInputChange = (e, { value }) => {
        this.setState({
            tempTextInputDate: value,
            calendarOpen: true,
        });
    };

    handleKeyDown = e => {
        if (keycode(e) === 'enter' || keycode(e) === 'tab') {
            this.applyTextChange();
        } else if ((keycode(e) === 'up' || keycode(e) === 'down') && !this.state.calendarOpen) {
            this.setState({
                calendarOpen: true,
            });
        } else if (keycode(e) === 'esc') {
            this.setState({
                tempTextInputDate: null,
                calendarOpen: false,
            });
            this.focus();
        }
        this.props.onKeyDown(e);
    };

    handleMount = comp => {
        this.setState({
            anchor: comp,
        });
    };

    handleRequestClose = ({ event, reason }) => {
        if (
            (reason === 'clickAway' || reason === 'escapeKey') &&
            event.target !== this.state.anchor.input
        ) {
            this.applyTextChange();
        }
    };

    isControlled() {
        return this.controlledExternally;
    }

    render() {
        const currentValue = this.getValue();
        return (
            <StyledText
                data-test="date"
                data-test-value={currentValue}
                data-test-popover-id={this.popoverId}
                onChange={this.handleInputChange}
                onClick={this.handleClick}
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyDown}
                value={this.getTextInputValue()}
                innerRef={this.handleMount}
                {...omit(
                    this.props,
                    'className',
                    'defaultValue',
                    'onClick',
                    'onFocus',
                    'onKeyDown',
                    'locale',
                    'onChange',
                    'value'
                )}
            >
                <Popover
                    anchor={this.state.anchor}
                    id={this.popoverId}
                    open={this.props.disabled ? false : this.state.calendarOpen}
                    onRequestClose={this.handleRequestClose}
                >
                    <Calendar
                        value={currentValue}
                        locale={this.props.locale}
                        onChange={this.handleDateChange}
                    />
                </Popover>
            </StyledText>
        );
    }
}

export default Date;
