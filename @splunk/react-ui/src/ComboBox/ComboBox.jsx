import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { extend, get, has, omit, pick, some } from 'lodash';
import { keywordLocations, stringToKeywords, testPhrase } from '@splunk/ui-utils/filter';
import { createDOMID } from '@splunk/ui-utils/id';
import { _ } from '@splunk/ui-utils/i18n';
import { addsCharacter, keycode } from '@splunk/ui-utils/keyboard';
import ResultsMenu, { Divider, Heading } from '@splunk/react-ui/ResultsMenu';
import Popover from '@splunk/react-ui/Popover';
import Text from '@splunk/react-ui/Text';

import Option from './Option';

function containsEvent(el, { clientX, clientY }) {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    return clientX > left && clientX < right && clientY > top && clientY < bottom;
}

/**
 * `ComboBox` allows the user to select a predefined string or enter a new value. Unlike `Select`
 * and `Multiselect`, `Option` value must always be a string and `Option` does not have a label
 * property.
 */
class ComboBox extends Component {
    static propTypes = {
        /*
         * Whether or not to show the wait spinner when loading. It's recommended to set this to
         * `true` when loading may take more than one second.
         */
        animateLoading: PropTypes.bool,
        /** Append removes rounded borders and border from the right side. */
        append: PropTypes.bool,
        /** All children must be instances of `ComboBox.Option`. */
        children: PropTypes.node,
        /** If true, this component will not handle filtering. The parent must update the
         * Options based on the onChange value. */
        controlledFilter: PropTypes.bool,
        /** The initial value of the input. Only applicable in uncontrolled mode. */
        defaultValue: PropTypes.string,
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
         * Highlight the field as having an error. The border and text will turn red.
         */
        error: PropTypes.bool,
        /**
         * The footer message can show additional information, such as a truncation message.
         */
        footerMessage: PropTypes.node,
        /** Make the control an inline block with variable width. */
        inline: PropTypes.bool,
        /**
         * Invoked with the input element when the component mounts and null when it unmounts.
         */
        inputRef: PropTypes.func,
        /*
         * Whether or not to show the loading message and/or wait spinner. It's recommended to
         * remove the old children while loading new children to ensure the loading message is
         * not hidden.
         */
        isLoadingOptions: PropTypes.bool,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label.
         */
        labelledBy: PropTypes.string,
        /**
         * The loading message to show when isLoadingOptions. */
        loadingMessage: PropTypes.node,
        menuStyle: PropTypes.object,
        /** The name is returned with onChange events, which can be used to identify the
         * control when multiple controls share an onChange callback. */
        name: PropTypes.string,
        /**
         * The noOptionsMessage is shown when there are no children and not loading, such as when
         * there are no Options matching the filter. This can be customized to the type of content,
         * such as "No matching dashboards"; insert other content, such as an error message; or
         * communicate a minimum number of chararters to enter to see results. */
        noOptionsMessage: PropTypes.node,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onKeyDown: PropTypes.func,
        /**
         *  A callback function when the list is scrolled to the bottom. Use to fetch more results and append to list.
         *  Note: Set to null when all items are loaded.
         */
        onScrollBottom: PropTypes.func,
        placeholder: PropTypes.string,
        /** Prepend removes rounded borders from the left side. */
        prepend: PropTypes.bool,
        /** The size of the text input. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /** The value of the input. Only applicable in controlled mode. */
        value: PropTypes.string,
    };

    static defaultProps = {
        animateLoading: false,
        controlledFilter: false,
        disabled: false,
        error: false,
        inline: false,
        inputRef() {},
        isLoadingOptions: false,
        menuStyle: {},
        onChange() {},
        onFocus() {},
        onKeyDown() {},
        placeholder: _('Select...'),
        size: 'medium',
    };

    static Option = Option;
    static Divider = Divider;
    static Heading = Heading;

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            activeIndex: null,
            anchor: null,
            open: false,
            value: props.defaultValue || '',
        };
        this.controlledExternally = has(props, 'value');
        this.popoverId = createDOMID('popover');
        this.activeItemId = createDOMID('active-item');

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            throw new Error("ComboBox 'defaultValue' prop is not compatible with 'value' prop.");
        }

        if (__DEV__ && this.isControlled() && props.onChange === ComboBox.defaultProps.onChange) {
            throw new Error(
                "ComboBox 'onChange' prop is required when the 'value' prop is provided. Use the 'onChange' callback to update the 'value' prop."
            );
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            throw new Error(
                "Cannot change ComboBox from an uncontrolled component to a controlled one. Prop 'value' is not valid in subsequent updates if not provided in the initial props."
            );
        }
    }

    getValue() {
        return this.isControlled() ? this.props.value : this.state.value;
    }

    /**
     * Focus the `ComboBox`.
     */
    focus() {
        this.textInput.focus();
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleInputMount = el => {
        this.textInput = el;
        this.setState({ anchor: el });
        this.props.inputRef(el);
    };

    handleActiveOptionMount = c => {
        if (c) {
            c.scrollIntoViewIfNeeded();
        }
    };

    handleInputFocus = (...args) => {
        /* SUI-930 On IE 11 this handler is essentially deferred after calling
         * this.textInput.focus(). this.focusCalledInternally enables the focus event to be ignored
         * when the menu closes. */
        if (this.focusCalledInternally) {
            this.focusCalledInternally = false;
        } else {
            this.open();
        }
        this.props.onFocus(...args);
    };

    open() {
        this.setState({
            open: true,
            activeIndex: 0,
        });
    }

    close() {
        this.setState({
            open: false,
        });
    }

    handleChange = (e, { value }) => {
        const { name } = this.props;

        if (!this.isControlled()) {
            this.setState({
                value,
                activeIndex: 0,
            });
        } else {
            this.setState({
                activeIndex: 0,
            });
        }
        this.props.onChange(e, { value, name });
    };

    handleSelectOption = (...args) => {
        this.handleChange(...args);
        this.focusCalledInternally = true;
        this.focus();
        this.close();
    };

    handleInputKeyDown = e => {
        const { activeIndex } = this.state;
        const numOptions = this.availableOptionCount;
        const activeOption = this.activeValue;

        if (this.state.open) {
            switch (keycode(e)) {
                case 'enter': {
                    if (activeOption) {
                        this.handleSelectOption(e, { value: activeOption });
                    }
                    break;
                }
                case 'tab':
                    this.close();
                    break;
                case 'down':
                    this.setState({
                        activeIndex: Math.min(activeIndex + 1, numOptions - 1),
                    });
                    if (this.props.children && this.props.onScrollBottom) {
                        const children = this.props.children;
                        const beforeLastChild = children.length - 2;

                        if (this.state.activeIndex === beforeLastChild) {
                            this.props.onScrollBottom();
                        }
                    }
                    break;
                case 'up':
                    this.setState({
                        activeIndex: Math.max(activeIndex - 1, 0),
                    });
                    break;
                default:
                // do nothing
            }
        } else if (
            addsCharacter(e) !== false || // Safari 9.0 returns undefined
            keycode(e) === 'enter' ||
            keycode(e) === 'backspace' ||
            keycode(e) === 'down' ||
            keycode(e) === 'up'
        ) {
            this.open();
        }
        this.props.onKeyDown(e);
    };

    handleInputClick = () => {
        if (!this.state.open && !this.props.disabled) {
            this.open();
        }
    };

    handleRequestClose = ({ event, reason }) => {
        const shouldClose =
            reason === 'offScreen' ||
            reason === 'escapeKey' ||
            (reason === 'clickAway' && !containsEvent(this.textInput, event));
        if (shouldClose) {
            this.close();
        }
    };

    handleScrollBottom = () => {
        if (this.state.open && !this.state.isLoadingOptions) {
            this.props.onScrollBottom();
        }
    };

    renderMenu = ({ anchorWidth, maxHeight }) => {
        const {
            children,
            controlledFilter,
            isLoadingOptions,
            menuStyle,
            onScrollBottom,
        } = this.props;

        const { activeIndex } = this.state;
        const value = this.getValue();

        const initialOptions = Children.toArray(children);
        const hasExactMatch = some(initialOptions, option => option.props.value === value);
        if (!hasExactMatch && value) {
            initialOptions.unshift(<Option key="currentInput" value={value} />);
        }

        // Hightlight Active
        this.availableOptionCount = 0;
        this.activeValue = undefined;

        const keywords = stringToKeywords(value);
        this.options = (controlledFilter
            ? initialOptions
            : initialOptions.filter(option => {
                  if (get(option, ['props', 'value'], false)) {
                      return testPhrase(option.props.value, keywords);
                  }
                  return true; // Keep all headers and non-interactive options
              })
        ).map((option, index) => {
            if (!has(option.props, 'active')) {
                // ignore Headings and Dividers
                return option;
            }

            const active = this.availableOptionCount === activeIndex;
            this.availableOptionCount += 1;

            const matchRangesProp = option.props.matchRanges;

            const matchRanges =
                !controlledFilter && value && (hasExactMatch || index > 0)
                    ? keywordLocations(option.props.value, keywords)
                    : undefined;

            if (active) {
                this.activeValue = option.props.value;

                return cloneElement(option, {
                    ref: this.handleActiveOptionMount,
                    id: this.activeItemId,
                    onClick: this.handleSelectOption,
                    matchRanges: matchRangesProp || matchRanges,
                    active: true,
                });
            }

            return cloneElement(option, {
                onClick: this.handleSelectOption,
                matchRanges: matchRangesProp || matchRanges,
            });
        });

        return (
            <ResultsMenu
                style={extend({ overflow: 'auto', width: Math.max(anchorWidth, 200) }, menuStyle)}
                maxHeight={maxHeight}
                onScrollBottom={onScrollBottom ? this.handleScrollBottom : undefined}
                isLoading={isLoadingOptions}
                {...pick(
                    this.props,
                    'className',
                    'noOptionsMessage',
                    'footerMessage',
                    'animateLoading',
                    'loadingMessage'
                )}
            >
                {this.options}
            </ResultsMenu>
        );
    };

    render() {
        const { anchor, open } = this.state;
        const currentValue = this.getValue();
        return (
            <Text
                canClear
                data-test="combo-box"
                {...omit(
                    this.props,
                    'animateLoading',
                    'className',
                    'controlledFilter',
                    'isLoadingOptions',
                    'loadingMessage',
                    'menuStyle',
                    'noOptionsMessage',
                    'onScrollBottom',
                    'footerMessage',
                    'defaultValue'
                )}
                data-test-popover-id={this.popoverId}
                data-test-value={currentValue}
                data-test-open={open && !!anchor}
                onFocus={this.handleInputFocus}
                onClick={this.handleInputClick}
                onChange={this.handleChange}
                onKeyDown={this.handleInputKeyDown}
                inputRef={this.handleInputMount}
                role="combobox"
                value={currentValue}
                aria-activedescendant={this.activeItemId}
                aria-expanded={open}
                aria-haspopup
                aria-controls={open ? this.popoverId : null}
            >
                <Popover
                    anchor={anchor}
                    appearance="light"
                    autoCloseWhenOffScreen
                    canCoverAnchor={false}
                    defaultPlacement="vertical"
                    id={this.popoverId}
                    onRequestClose={this.handleRequestClose}
                    open={open && !!anchor}
                    repositionMode="flip"
                >
                    {this.renderMenu}
                </Popover>
            </Text>
        );
    }
}

export default ComboBox;
export { Option, Divider, Heading };
