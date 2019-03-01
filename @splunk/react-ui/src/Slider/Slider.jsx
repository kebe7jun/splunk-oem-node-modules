import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import Decimal from 'decimal.js-light';
import { has, keys, omit } from 'lodash';
import { keycode } from '@splunk/ui-utils/keyboard';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';
import Tooltip from '@splunk/react-ui/Tooltip';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const {
    StyledBox,
    StyledInput,
    StyledSliderBar,
    StyledSliderThumb,
    StyledMinLabelBox,
    StyledMaxLabelBox,
} = getStyled('Slider');

class Slider extends Component {
    static propTypes = {
        /** @private */
        className: ClassNamePropCheck,
        /** Set this property instead of value to make value uncontrolled. */
        defaultValue: PropTypes.number,
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        /** Whether or not the slider can be moved. */
        disabled: PropTypes.bool,
        /** The label shown in the tooltip. Defaults to the value. */
        displayValue: PropTypes.string,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** When false, display as inline-block with the default width. */
        inline: PropTypes.bool,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /** The minimum value of the Slider input. */
        min: PropTypes.number,
        /**
         * The label shown to the left of the slider. Defaults to the min value.
         * Set to null to remove.
         */
        minLabel: PropTypes.node,
        /** The maximum value of the Slider input. */
        max: PropTypes.number,
        /**
         * The label shown to the left of the slider. Defaults to the max value.
         * Set to null to remove.
         */
        maxLabel: PropTypes.node,
        /**
         * The name is returned with onChange events, which can be used to identify the
         * control when multiple controls share an onChange callback.
         */
        name: PropTypes.string,
        /** Return event and data object with slider value. */
        onChange: PropTypes.func,
        /** The step value of the Slider input. */
        step: PropTypes.number,
        /**
         * The value of the slider.
         * Setting this value makes the property controlled. A callback is required.
         */
        value: PropTypes.number,
    };

    static defaultProps = {
        disabled: false,
        inline: false,
        min: 1,
        max: 5,
        onChange() {},
        step: 1,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');

        const defValue = has(props, 'defaultValue')
            ? props.defaultValue
            : this.roundValueToStep((props.max - props.min) / 2);

        this.state = {
            selected: false,
            showTooltip: false,
            position: this.valueToPosition(this.isControlled() ? this.props.value : defValue),
            value: this.isControlled() ? null : defValue,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            throw new Error('defaultValue prop is not compatible with value prop.');
        }

        if (props.min >= props.max && __DEV__) {
            throw new Error('Error in Slider: max must be greater than min');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            throw new Error(
                "Cannot change Slider from an uncontrolled component to a controlled one. Prop 'value' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            throw new Error("Cannot change 'defaultValue' after set.");
        }
        this.setState({
            position: this.valueToPosition(nextProps.value),
        });
    }

    getValue() {
        return this.isControlled() ? this.props.value : this.state.value;
    }

    setValue(e, { value }) {
        const currentValue = this.getValue();
        const { name } = this.props;
        if (currentValue !== value) {
            this.props.onChange(e, { value, name });
            if (!this.isControlled()) {
                this.setState({ value }, this.snapToPosition);
            }
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    checkPositionBounds = pos => {
        if (pos > 100) {
            return 100;
        } else if (pos < 0) {
            return 0;
        }
        return pos;
    };

    checkValueBounds = val => {
        if (val > this.props.max) {
            return this.props.max;
        } else if (val < this.props.min) {
            return this.props.min;
        }
        return val;
    };

    handleBlur = () => {
        this.setState({
            showTooltip: false,
        });
    };

    handleClick = e => {
        const pos = this.percentageFromEvent(e);
        const value = this.roundValueToStep(this.positionToValue(pos));
        this.setValue(e, { value });
    };

    handleFocus = () => {
        this.setState({
            showTooltip: true,
        });
    };

    handleKeyDown = e => {
        const step = this.props.step;
        let val = this.getValue();
        if (keycode(e) === 'right') {
            val = this.checkValueBounds(val + step);
        } else if (keycode(e) === 'left') {
            val = this.checkValueBounds(val - step);
        } else {
            return;
        }
        val = this.roundValueToStep(val);
        this.setValue(e, { value: val });
    };

    handleMouseDown = e => {
        e.preventDefault();
        this.sliderThumb.focus();
        this.setState({
            selected: true,
            showTooltip: true,
        });
    };

    handleMouseEnter = () => {
        this.setState({
            showTooltip: true,
        });
    };

    handleMouseLeave = () => {
        if (!this.state.selected) {
            this.setState({
                showTooltip: false,
            });
        }
    };

    handleMouseMove = e => {
        if (this.state.selected) {
            const pos = this.percentageFromEvent(e);
            const value = this.roundValueToStep(this.positionToValue(pos));

            this.setValue(e, { value });
            this.setState({
                position: pos,
            });
        }
    };

    handleMouseUp = () => {
        this.setState(
            {
                selected: false,
                showTooltip: false,
            },
            this.snapToPosition
        );
    };

    percentageFromEvent = e => {
        const boundingRect = this.sliderBar.getBoundingClientRect();
        const offset = e.clientX - boundingRect.left;
        return this.checkPositionBounds((offset / boundingRect.width) * 100);
    };

    positionToValue = pos => {
        const valRange = this.props.max - this.props.min;
        return (pos / 100) * valRange + this.props.min;
    };

    roundValueToStep = val => {
        const step = this.props.step;
        return new Decimal(val)
            .div(step)
            .todp(0)
            .mul(step)
            .toNumber();
    };

    snapToPosition = () => {
        this.setState({
            position: this.valueToPosition(this.getValue()),
        });
    };

    valueToPosition = val => {
        const valRange = this.props.max - this.props.min;
        return ((val - this.props.min) / valRange) * 100;
    };

    render() {
        const {
            describedBy,
            displayValue,
            disabled,
            elementRef,
            inline,
            labelledBy,
            min,
            minLabel,
            max,
            maxLabel,
        } = this.props;
        const { position, selected } = this.state;

        const boxProps = omit(this.props, keys(Slider.propTypes));
        const currentValue = this.getValue();
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <StyledBox
                data-test="slider"
                data-test-value={currentValue}
                elementRef={elementRef}
                flex
                inline={inline}
                {...boxProps}
            >
                {selected && (
                    <EventListener
                        onMouseUp={this.handleMouseUp}
                        onMouseMove={this.handleMouseMove}
                        onResize={this.handleResize}
                        target="window"
                    />
                )}
                {minLabel !== null && (
                    <StyledMinLabelBox
                        data-test="min-label"
                        data-disabled={disabled ? true : undefined}
                    >
                        {minLabel || min}
                    </StyledMinLabelBox>
                )}
                <StyledInput onClick={disabled ? undefined : this.handleClick}>
                    <StyledSliderBar
                        style={
                            disabled
                                ? undefined
                                : {
                                      background: `linear-gradient(to right, #5c6773, #5c6773 ${position}%, #c3cbd4 ${position}%, #c3cbd4)`,
                                  }
                        }
                        data-disabled={disabled ? true : undefined}
                        innerRef={el => (this.sliderBar = el)}
                    />
                    <Tooltip
                        content={displayValue || currentValue}
                        inline={false}
                        open={this.state.showTooltip}
                        style={{
                            left: `${position}%`,
                            position: 'absolute',
                            top: 6,
                            marginLeft: -8,
                        }}
                    >
                        <StyledSliderThumb
                            aria-describedby={describedBy}
                            aria-labelledby={labelledBy}
                            aria-valuemax={max}
                            aria-valuemin={min}
                            aria-valuenow={currentValue}
                            data-test="handle"
                            onBlur={this.handleBlur}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                            onKeyDown={disabled ? undefined : this.handleKeyDown}
                            onMouseDown={disabled ? undefined : this.handleMouseDown}
                            onFocus={this.handleFocus}
                            innerRef={el => (this.sliderThumb = el)}
                            role="slider"
                            data-disabled={disabled ? true : undefined}
                        />
                    </Tooltip>
                </StyledInput>
                {maxLabel !== null && (
                    <StyledMaxLabelBox
                        data-test="max-label"
                        data-disabled={disabled ? true : undefined}
                    >
                        {maxLabel || max}
                    </StyledMaxLabelBox>
                )}
            </StyledBox>
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
}

export default Slider;
