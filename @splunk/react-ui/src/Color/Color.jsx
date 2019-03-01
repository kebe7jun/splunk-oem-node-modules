import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, keys, trimStart, omit } from 'lodash';
import { keycode } from '@splunk/ui-utils/keyboard';
import Button from '@splunk/react-ui/Button';
import Dropdown from '@splunk/react-ui/Dropdown';
import Text from '@splunk/react-ui/Text';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';
import Swatch from './Swatch';

const { StyledDropdown, StyledSwatches, StyledSwatch, StyledInput, StyledHashIcon } = getStyled(
    'Color'
);

class Color extends Component {
    static propTypes = {
        /** Append removes border from the right side. */
        append: PropTypes.bool,
        /** Set this property instead of value to make value uncontrolled. */
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
        /** Add an error attribute. */
        error: PropTypes.bool,
        /** The name is returned with onChange events, which can be used to identify the
         * control when multiple controls share an onChange callback. */
        name: PropTypes.string,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /** An array of optional color swatch values (hexadecimal). */
        palette: PropTypes.array,
        /** This has no affect on the appearance at this time but is recommend to be used when a
         * control is joined to the left. Styles may change in the future. */
        prepend: PropTypes.bool,
        /** A callback that receives the value of a newly selected color. */
        onChange: PropTypes.func,
        /** The size of the swatch. */
        size: PropTypes.oneOf(['small', 'medium']),
        /**
         * The value of the color (hexadecimal). Setting this value makes the property controlled.
          A callback is required.
         */
        value: PropTypes.string,
    };

    static defaultProps = {
        append: false,
        disabled: false,
        error: false,
        onChange() {},
        palette: [],
        prepend: false,
        size: 'medium',
    };

    static isValidHEX(value) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
    }

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'value');
        const value = props.defaultValue || '';
        this.state = {
            value,
            displayValue: value,
            open: false,
        };
        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            throw new Error("'defaultValue' prop is not compatible with 'value' prop.");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            throw new Error(
                "Cannot change Color from an uncontrolled component to a controlled one. Prop 'value' is not valid in subsequent updates if not provided in the initial props."
            );
        }
        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            throw new Error("Cannot change 'defaultValue' after set.");
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    /**
     * Place focus on the input.
     */
    focus() {
        this.dropdown.focus();
    }

    handleSwatchClick = (e, { value }) => {
        const hasColorChanged = value !== this.state.value;
        const { name } = this.props;

        if (!this.isControlled()) {
            this.setState({ value });
        }
        this.setState({ open: false });
        if (hasColorChanged) {
            this.props.onChange({ value, name });
        }
        this.focus();
        e.preventDefault();
    };

    handleTextChange = (e, { value }) => {
        this.setState({ displayValue: `#${value}` });
    };

    handleTextKeyDown = e => {
        if (keycode(e) === 'enter') {
            this.handleRequestClose({ reason: 'enterKey' });
            this.focus();
            e.preventDefault();
        }
    };

    handleButtonClick = e => {
        this.handleRequestClose({ reason: 'buttonClick' });
        this.focus();
        e.preventDefault();
    };

    handleRequestClose = ({ reason }) => {
        const value = this.state.displayValue;
        if (reason !== 'contentClick') {
            this.setState({ open: false });
        }
        if (reason !== 'escapeKey') {
            this.submitValue(value);
        }
    };

    submitValue(value) {
        if (Color.isValidHEX(value)) {
            const hasColorChanged = value !== this.state.value;
            const { name } = this.props;

            if (!this.isControlled()) {
                this.setState({ value });
            }
            if (hasColorChanged) {
                this.props.onChange({ value, name });
            }
        }
    }

    handleRequestOpen = () => {
        const displayValue = this.isControlled() ? this.props.value : this.state.value;
        this.setState({ displayValue, open: true });
    };

    renderInput() {
        const displayValue = this.state.displayValue;
        return (
            <StyledInput>
                <Button append disabled icon={<StyledHashIcon>#</StyledHashIcon>} />
                <Text
                    append
                    prepend
                    onKeyDown={this.handleTextKeyDown}
                    onChange={this.handleTextChange}
                    value={trimStart(displayValue, '#')}
                />
                <Swatch
                    data-test="textbox-swatch"
                    onClick={this.handleButtonClick}
                    value={displayValue}
                    tabIndex="-1"
                    prepend
                >
                    <ScreenReaderContent>Apply Color</ScreenReaderContent>
                </Swatch>
            </StyledInput>
        );
    }

    renderPalette() {
        return (
            <StyledSwatches>
                {this.props.palette.map(value => (
                    <StyledSwatch key={value}>
                        <Swatch value={value} onClick={this.handleSwatchClick} />
                    </StyledSwatch>
                ))}
            </StyledSwatches>
        );
    }

    render() {
        const {
            disabled,
            describedBy,
            elementRef,
            error,
            labelledBy,
            name,
            size,
            value,
        } = this.props;
        const displayValue = this.isControlled() ? value : this.state.value;
        const toggle = (
            <Swatch
                aria-describedby={describedBy}
                aria-labelledby={labelledBy}
                aria-invalid={error || null}
                disabled={disabled}
                name={name}
                size={size}
                value={displayValue}
            />
        );
        return (
            <Dropdown
                closeReasons={['clickAway', 'escapeKey', 'offScreen', 'toggleClick']}
                data-test="color"
                data-test-value={displayValue}
                elementRef={elementRef}
                onRequestClose={this.handleRequestClose}
                onRequestOpen={this.handleRequestOpen}
                open={this.state.open}
                ref={c => {
                    this.dropdown = c;
                }}
                retainFocus
                toggle={toggle}
                {...omit(this.props, keys(Color.propTypes))}
            >
                <StyledDropdown>
                    {this.renderPalette()}
                    {this.renderInput()}
                </StyledDropdown>
            </Dropdown>
        );
    }
}

export default Color;
