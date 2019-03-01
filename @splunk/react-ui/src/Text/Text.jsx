import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import { defer, has, keys, noop, omit, pickBy, throttle } from 'lodash';
import { toClassName } from '@splunk/ui-utils/style';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import ClearIcon from '@splunk/react-icons/Clear';
import SearchIcon from '@splunk/react-icons/Search';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const {
    StyledBox,
    StyledInputInput,
    StyledInputTextarea,
    StyledInputSearchInput,
    StyledInputSearchTextarea,
    StyledInputDisabled,
    StyledSearchIconWrapper,
    StyledClear,
    StyledPlaceholder,
} = getStyled('Text');

/** Note, Text places role and aria props onto the input. All other props are placed on the wrapper.
 */
class Text extends Component {
    static propTypes = {
        /** Setting the appearance to search will create a rounded input. */
        appearance: PropTypes.oneOf(['default', 'search']),
        /** Append removes rounded borders and border from the right side. */
        append: PropTypes.bool,
        /** Enable or disable the browsers autoComplete functionality. */
        autoComplete: PropTypes.bool,
        /** Specify that the input / textarea should request focus when mounted. */
        autoFocus: PropTypes.bool,
        /** Include an "X" button to clear the value. */
        canClear: PropTypes.bool,
        /** @private */
        children: PropTypes.node,
        /** @private */
        className: PropTypes.string,
        /** @private. */
        classNamePrivate: PropTypes.string,
        /**
         * Set this property instead of value to make value uncontrolled. */
        defaultValue: PropTypes.string,
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        /** Whether or not the input is editable. */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Highlight the field as having an error. The border and text will turn red.
         */
        error: PropTypes.bool,
        /** When false, display as inline-block with the default width. */
        inline: PropTypes.bool,
        /** @private. */
        inputClassName: PropTypes.string,
        /**
         * An id for the input, which may be necessary for accessibility, such as for aria
         * attributes.
         */
        inputId: PropTypes.string,
        /**
         * Invoked with the input DOM element when the component mounts and null when it unmounts.
         */
        inputRef: PropTypes.func,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /** When true, allows multiline input and ignores the 'type' property. */
        multiline: PropTypes.bool,
        /** The name is returned with onChange events, which can be used to identify the
         * control when multiple controls share an onChange callback. */
        name: PropTypes.string,
        /** A callback for when the input loses focus. */
        onBlur: PropTypes.func,
        /**
         * This is equivalent to onInput which is called on keydown, paste, etc.
         * If value is set, this callback is required. This must set the value prop to retain the
         * change.
         */
        onChange: PropTypes.func,
        /** A callback for when the input takes focus. */
        onFocus: PropTypes.func,
        /** A keydown callback can be used to prevent certain input by returning false. */
        onKeyDown: PropTypes.func,
        /** A callback for when the text selection or cursor position changes. */
        onSelect: PropTypes.func,
        /** The gray text shown when the input is empty. */
        placeholder: PropTypes.string,
        /** Prepend removes rounded borders from the left side. */
        prepend: PropTypes.bool,
        /** Maximum number of rows to display when multiLine option is set to true. */
        rowsMax: PropTypes.number,
        /** Minimum number of rows to display when multiLine option is set to true. */
        rowsMin: PropTypes.number,
        /** The overall size of the input. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        tabIndex: PropTypes.number,
        type: PropTypes.oneOf(['text', 'password']),
        /** Some browsers remove placeholder text on focus. The synthetic placeholder never does. */
        useSyntheticPlaceholder: PropTypes.bool,
        /**
         * The contents of the input. Setting this value makes the property controlled. A callback
         * is required. */
        value: PropTypes.string,
    };

    static defaultProps = {
        appearance: 'default',
        append: false,
        autoComplete: true,
        autoFocus: false,
        canClear: false,
        disabled: false,
        error: false,
        inline: false,
        inputRef() {},
        multiline: false,
        onChange() {},
        onKeyDown() {},
        onSelect() {},
        onBlur() {},
        onFocus() {},
        placeholder: '',
        prepend: false,
        rowsMax: 8,
        rowsMin: 2,
        size: 'medium',
        tabIndex: 0,
        type: 'text',
        useSyntheticPlaceholder: false,
    };

    static validateRows({ rowsMin, rowsMax }) {
        if (__DEV__ && rowsMin > rowsMax) {
            throw new Error("Text's 'rowsMin' prop must be less than 'rowsMax' prop.");
        }
    }

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');

        this.state = {
            hasFocus: false,
            value: props.defaultValue || '',
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            throw new Error("'defaultValue' prop is not compatible with 'value' prop.");
        }

        Text.validateRows(props);

        this.handleResize = throttle(this.handleResize, 100);
    }

    componentDidMount() {
        defer(this.syncHeightWithShadow); // wait for styles to load
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            throw new Error(
                "Cannot change Text from an uncontrolled component to a controlled one. Prop 'value' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            throw new Error('Cannot change defaultValue after set.');
        }

        Text.validateRows(nextProps);
    }

    componentDidUpdate() {
        if (this.props.multiline) {
            this.syncHeightWithShadow();
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    blur() {
        this.input.blur();
    }

    /**
     * Place focus on the input.
     */
    focus() {
        this.input.focus();
    }

    select() {
        this.input.select();
    }

    handleResize = () => {
        this.syncHeightWithShadow();
    };

    handleInputMount = el => {
        this.input = el;
        this.props.inputRef(el);
    };

    handleInputChange = e => {
        const value = e.target.value;
        const { name } = this.props;

        if (!this.isControlled()) {
            this.setState({ value });
        }
        this.props.onChange(e, { value, name });
    };

    handleInputKeyDown = e => {
        this.props.onKeyDown(e);
    };

    handleInputSelect = e => {
        this.props.onSelect(e);
    };

    handleInputFocus = e => {
        this.setState({ hasFocus: true });
        this.props.onFocus(e);
    };

    handleInputBlur = e => {
        this.setState({ hasFocus: false });
        this.props.onBlur(e);
    };

    handleClear = e => {
        // Only respond to left mouse button.
        if (e.button === 0) {
            e.preventDefault();
            const value = '';
            const { name } = this.props;
            if (!this.isControlled()) {
                this.setState({ value });
            }
            this.props.onChange(e, { value, name });
        }
    };

    handlePlaceholderMouseDown = () => {
        this.focus();
    };

    syncHeightWithShadow = () => {
        /* Heavily inspired by material UI
        * https://github.com/callemall/material-ui/blob/master/src/TextField/EnhancedTextarea.js
        */
        const shadow = this.shadow;
        if (this.props.multiline && shadow) {
            const style = window.getComputedStyle(shadow);
            const lineHeight = parseInt(style.getPropertyValue('line-height'), 10);
            const paddingTop = parseInt(style.getPropertyValue('padding-top'), 10);
            const paddingBottom = parseInt(style.getPropertyValue('padding-bottom'), 10);
            const borderTop = parseInt(style.getPropertyValue('border-top-width'), 10);
            const borderBottom = parseInt(style.getPropertyValue('border-bottom-width'), 10);

            let newHeight = shadow.scrollHeight + borderTop + borderBottom;

            if (newHeight === undefined) {
                return;
            }

            if (this.props.rowsMax >= this.props.rowsMin) {
                const maxHeight =
                    this.props.rowsMax * lineHeight +
                    paddingTop +
                    paddingBottom +
                    borderTop +
                    borderBottom +
                    1; // need one extra.
                newHeight = Math.min(maxHeight, newHeight);
            }

            const minHeight =
                this.props.rowsMin * lineHeight +
                paddingTop +
                paddingBottom +
                borderTop +
                borderBottom +
                1; // need one extra.
            newHeight = Math.max(minHeight, newHeight);

            if (this.state.height !== newHeight) {
                this.setState({
                    height: newHeight,
                });
            }
        }
    };

    render() {
        const {
            appearance,
            append,
            autoComplete,
            autoFocus,
            canClear,
            children,
            className,
            classNamePrivate,
            disabled,
            describedBy,
            elementRef,
            error,
            inputClassName,
            inputId,
            labelledBy,
            multiline,
            name,
            placeholder,
            prepend,
            size,
            tabIndex,
            type,
            useSyntheticPlaceholder,
            value,
            ...otherProps
        } = this.props;

        const ariaProps = {
            ...pickBy(otherProps, (val, key) => key === 'role' || key.indexOf('aria-') === 0),
            'aria-describedby': describedBy,
            'aria-labelledby': labelledBy,
            'aria-invalid': error || null,
            'aria-multiline': multiline,
        };

        const boxProps = omit(otherProps, [
            'className',
            'inputRef',
            'onChange',
            'onKeyDown',
            'onSelect',
            'onFocus',
            'onBlur',
            'rowsMax',
            'rowsMin',
            ...keys(ariaProps),
        ]);

        const displayValue = this.isControlled() ? value : this.state.value;
        const StyledInputTag = multiline ? StyledInputTextarea : StyledInputInput;
        const StyledInputTagSearch = multiline ? StyledInputSearchTextarea : StyledInputSearchInput;
        const StyledInput = appearance === 'search' ? StyledInputTagSearch : StyledInputTag;

        const canClearOrSearch = canClear || appearance === 'search';

        // These props are used by both the input and its shadow.
        const displayProps = {
            className: toClassName(className, inputClassName),
            'data-append': append || null,
            'data-can-clear': canClearOrSearch || null,
            'data-error': error || null,
            'data-prepend': prepend || null,
            value: displayValue,
        };

        const inputProps = {
            ...displayProps,
            ...ariaProps,
            'data-test': 'textbox',
            autoComplete: autoComplete ? 'on' : 'off',
            autoFocus,
            id: inputId,
            placeholder: placeholder && !useSyntheticPlaceholder ? placeholder : null,
            name,
            onChange: this.handleInputChange,
            onKeyDown: this.handleInputKeyDown,
            onSelect: this.handleInputSelect,
            onFocus: this.handleInputFocus,
            onBlur: this.handleInputBlur,
            innerRef: this.handleInputMount,
            role: 'textbox',
            style: { height: this.state.height },
            tabIndex,
            type: multiline ? null : type,
        };

        const haveSyntheticPlaceholder = useSyntheticPlaceholder && placeholder && !displayValue;

        return (
            <StyledBox
                className={toClassName(className, classNamePrivate)}
                data-size={size}
                data-test="text"
                data-test-value={displayValue}
                disabled={disabled}
                elementRef={elementRef}
                {...boxProps}
            >
                {disabled ? (
                    <StyledInputDisabled
                        className={toClassName(className, classNamePrivate)}
                        data-multiline={multiline || null}
                        data-test="disabled-textbox"
                        {...ariaProps}
                    >
                        {displayValue}
                    </StyledInputDisabled>
                ) : (
                    <StyledInput {...inputProps} />
                )}
                {!disabled &&
                    multiline && (
                        <StyledInput
                            {...displayProps}
                            onChange={noop}
                            style={{
                                width: '100%',
                                position: 'absolute',
                                overflow: 'hidden',
                                left: -10000,
                                top: -10000,
                            }}
                            tabIndex={-1}
                            innerRef={el => (this.shadow = el)}
                        />
                    )}
                {!disabled &&
                    multiline && <EventListener target="window" onResize={this.handleResize} />}
                {haveSyntheticPlaceholder && (
                    <ScreenReaderContent>{placeholder}</ScreenReaderContent>
                )}
                {haveSyntheticPlaceholder && (
                    <StyledPlaceholder
                        data-role="placeholder"
                        onMouseDown={this.handlePlaceholderMouseDown}
                        aria-hidden
                    >
                        {placeholder}
                    </StyledPlaceholder>
                )}
                {canClearOrSearch &&
                    !!displayValue &&
                    (this.state.hasFocus || appearance === 'search') && (
                        <StyledClear data-test="clear" onMouseDown={this.handleClear} tabIndex={-1}>
                            <ClearIcon inline={false} size={1} />
                        </StyledClear>
                    )}

                {appearance === 'search' &&
                    !displayValue && (
                        <StyledSearchIconWrapper>
                            <SearchIcon inline={false} size="16px" />
                        </StyledSearchIconWrapper>
                    )}
                {children}
            </StyledBox>
        );
    }
}

export default Text;
