import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has } from 'lodash';
import ButtonGroup from '@splunk/react-ui/ButtonGroup';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';
import Option from './Option';

/**
 * RadioBar is form control that provides an affordance to select one option out of a group.
 */
class RadioBar extends Component {
    static propTypes = {
        /** The appearance of the buttons */
        appearance: PropTypes.oneOf(['default', 'pill']),
        /**
         * `children` should be `RadioBar.Option`.
         */
        children: PropTypes.node,
        /** @private */
        className: ClassNamePropCheck,
        /**
         * The default value. Only applicable if this is an uncontrolled component. Otherwise, use
         * the value prop.
         */
        defaultValue: PropTypes.any,
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Highlight the field as having an error. The buttons will turn red.
         */
        error: PropTypes.bool,
        inline: PropTypes.bool,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /** The name is returned with onChange events, which can be used to identify the
         * control when multiple controls share an onChange callback. */
        name: PropTypes.string,
        /** A callback that receives the new value */
        onChange: PropTypes.func,
        /** The size of the buttons. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * The currently selected value. Only applicable if this is a controlled component.
         */
        value: PropTypes.any,
    };

    static defaultProps = {
        appearance: 'default',
        error: false,
        inline: false,
        onChange() {},
        size: 'medium',
    };

    static Option = Option;

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'value');
        if (!this.isControlled()) {
            this.state = {
                value: props.defaultValue,
            };
        }

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            throw new Error("'defaultValue' prop is not compatible with 'value' prop.");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            throw new Error(
                "Cannot change RadioBar from an uncontrolled component to a controlled one. Prop 'value' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            throw new Error(
                "Cannot change 'defaultValue' after set. Consider using a controlled component instead."
            );
        }
    }

    handleClick = (e, data) => {
        const { name } = this.props;

        if (this.props.value !== data.value) {
            this.props.onChange(e, { ...data, name });

            if (!this.isControlled()) {
                this.setState({ value: data.value });
            }
        }
    };

    isControlled() {
        return this.controlledExternally;
    }

    render() {
        const {
            appearance,
            children,
            // eslint-disable-next-line no-unused-vars
            className,
            describedBy,
            error,
            labelledBy,
            size,
            value,
            ...otherProps
        } = this.props;

        const selectedValue = this.isControlled() ? value : this.state.value;
        const childrenFormatted = Children.toArray(children)
            .filter(isValidElement)
            .map((item, i) =>
                cloneElement(item, {
                    appearance,
                    size,
                    key: item.key || i,
                    onClick: this.handleClick,
                    role: 'radio',
                    error,
                    selected: item.props.value === selectedValue,
                })
            );

        return (
            <ButtonGroup
                data-test="radio-bar"
                data-test-value={selectedValue}
                role="radiogroup"
                aria-labelledby={labelledBy}
                aria-describedby={describedBy}
                {...otherProps}
            >
                {childrenFormatted}
            </ButtonGroup>
        );
    }
}

export default RadioBar;
export { Option };
