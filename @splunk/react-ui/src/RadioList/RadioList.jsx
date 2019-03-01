import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import Option from './Option';
import './Style';

const { StyledBox } = getStyled('RadioList');

class RadioList extends Component {
    static propTypes = {
        /**
         * `children` should be `RadioList.Option`s.
         */
        children: PropTypes.node,
        /**
         * Set this property instead of value to make value uncontrolled. */
        defaultValue: PropTypes.any,
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Highlight the field as having an error. The buttons and labels will turn red.
         */
        error: PropTypes.bool,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /** The name is returned with onChange events, which can be used to identify the
         * control when multiple controls share an onChange callback. */
        name: PropTypes.string,
        /**
         * A callback to receive the change events.
         * If value is set, this callback is required. This must set the value prop to retain the
         * change.
         */
        onChange: PropTypes.func,
        /** The size of the text label. */
        size: PropTypes.oneOf(['small', 'medium']),
        /** The current selected value.  Setting this value makes the property controlled. A
         * callback is required. */
        value: PropTypes.any,
    };

    static defaultProps = {
        disabled: false,
        error: false,
        onChange() {},
        size: 'medium',
    };

    static Option = Option;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');

        this.state = {
            value: props.defaultValue,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            throw new Error("RadioList 'defaultValue' prop is not compatible with 'value' prop.");
        }

        if (__DEV__ && this.isControlled() && props.onChange === RadioList.defaultProps.onChange) {
            throw new Error(
                "RadioList 'onChange' prop is required. This must update the 'value' prop to retain user input."
            );
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            throw new Error(
                "Cannot change RadioList from an uncontrolled component to a controlled one. Prop 'value' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            throw new Error("Cannot change RadioList 'defaultValue' after set.");
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleClick = (e, data) => {
        const { name } = this.props;

        if (!this.isControlled()) {
            this.setState({
                value: data.value,
            });
        }
        this.props.onChange(e, { ...data, name });
    };

    render() {
        const {
            children,
            describedBy,
            disabled,
            error,
            labelledBy,
            size,
            value,
            ...otherProps
        } = this.props;

        const selectedValue = this.isControlled() ? value : this.state.value;

        const clonedChildren = Children.toArray(children)
            .filter(isValidElement)
            .map((option, i) =>
                cloneElement(option, {
                    selected: option.props.value === selectedValue,
                    key: option.key || i,
                    disabled: disabled || option.props.disabled,
                    error,
                    size,
                    onClick: this.handleClick,
                })
            );

        return (
            <StyledBox
                flex
                data-test="radio-list"
                data-test-value={value}
                role="radiogroup"
                aria-labelledby={labelledBy}
                aria-describedby={describedBy}
                {...otherProps}
            >
                {clonedChildren}
            </StyledBox>
        );
    }
}
export default RadioList;
export { Option };
