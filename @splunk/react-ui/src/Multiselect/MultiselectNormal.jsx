import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { extend, get, has, isUndefined, last, defer, omit, pick, without } from 'lodash';
import { keywordLocations, stringToKeywords, testPhrase } from '@splunk/ui-utils/filter';
import { createDOMID } from '@splunk/ui-utils/id';
import { _ } from '@splunk/ui-utils/i18n';
import { keycode } from '@splunk/ui-utils/keyboard';
import ResultsMenu from '@splunk/react-ui/ResultsMenu';
import Popover from '@splunk/react-ui/Popover';
import { getStyled } from '@splunk/react-ui/Themes';

import Item from './Item';
import Option from './Option';
import './Style';

const { StyledBox, StyledInput, StyledOverlay } = getStyled('MultiselectNormal');
class Normal extends Component {
    static propTypes = {
        /*
         * Whether or not to show the wait spinner when loading. It's recommended to set this to
         * `true` when loading may take more than one second.
         */
        animateLoading: PropTypes.bool,
        /**
         * Allow the user to add arbitrary values.
         */
        allowNewValues: PropTypes.bool,
        /**
         * `children` should be `Multiselect.Option`, `Multiselect.Heading`, or
         * `Multiselect.Divider`.
         */
        children: PropTypes.node,
        /** If true, this component will not handle filtering. The parent must update the
         * Options based on the onFilterChange value. */
        controlledFilter: PropTypes.bool,
        /**
         * Set this property instead of value to keep the value uncontrolled.
         */
        defaultValues: PropTypes.array,
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        /** Disable adding and removing. */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** Display as in an error. */
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
        /**
         * A callback to receive the change events.  If values is set, this callback is required.
         * This must set the values prop to retain the change.
         */
        onChange: PropTypes.func,
        /**
         *  A callback function when the list is scrolled to the bottom. Use to fetch more results and append to list.
         *  Note: Set to null when all items are loaded.
         */
        onScrollBottom: PropTypes.func,
        /**
         * A callback with the change event and value of the filter box. Providing this callback and
         * setting controlledFilter to true enables you to filter and update the children by other
         * criteria.
         */
        onFilterChange: PropTypes.func,
        /**
         * If 'value' is undefined or don't match an item, the Button will display this text.
         */
        placeholder: PropTypes.string,
        /**
         * The container with which the popover must scroll to stay aligned with the anchor.
         */
        scrollContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        /** The overall size of the control. */
        size: PropTypes.oneOf(['small', 'medium']),
        /**
         * Specifies whether or not to add a overlay div to clickaway from the popover. This is
         * to avoid cases where some other element is accidentally clicked when the popover is open
         */
        useClickawayOverlay: PropTypes.bool,
        /**
         * Value will be matched to one of the children to deduce the label and/or icon for the
         * toggle.
         */
        values: PropTypes.array,
    };

    static defaultProps = {
        animateLoading: false,
        allowNewValues: false,
        disabled: false,
        elementRef() {},
        inline: false,
        inputRef() {},
        isLoadingOptions: false,
        menuStyle: {},
        noOptionsMessage: _('No matches'),
        onChange() {},
        onFilterChange() {},
        placeholder: _('Select...'),
        scrollContainer: 'window',
        size: 'medium',
        useClickawayOverlay: false,
    };

    static Option = Option;

    static Divider = ResultsMenu.Divider;
    static Heading = ResultsMenu.Heading;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'values');

        this.state = {
            hasFocus: false,
            open: false,
            values: props.defaultValues || [],
            activeIndex: 0,
            filterKeyword: '',
            el: null,
        };

        this.popoverId = createDOMID('popover');
        this.activeItemId = createDOMID('active-item');

        if (__DEV__ && this.isControlled() && has(props, 'defaultValues')) {
            throw new Error(
                "Multiselect 'defaultValues' prop is not compatible with 'values' prop."
            );
        }

        if (__DEV__ && this.isControlled() && props.onChange === Normal.defaultProps.onChange) {
            throw new Error(
                "Multiselect 'onChange' prop is required. This must update the 'values' prop to retain user input."
            );
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'values')) {
            throw new Error(
                "Cannot change Multiselect from an uncontrolled component to a controlled one. Prop 'values' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultValues !== this.props.defaultValues) {
            throw new Error("Cannot change Multiselect 'defaultValues' after set.");
        }

        if (this.isControlled() && nextProps.values !== this.props.values) {
            this.setState({
                filterKeyword: '',
                activeIndex: 0,
            });

            if (this.state.filterKeyword !== '') {
                this.props.onFilterChange(null, { keyword: '' });
            }
        }
    }

    getCurrentValues() {
        return this.isControlled() ? this.props.values : this.state.values;
    }

    isControlled() {
        return this.controlledExternally;
    }

    /**
     * Place focus on the text input.
     */
    focus() {
        if (this.input) {
            this.input.focus();
        }
    }

    addValue(e, value) {
        const values = this.getCurrentValues().concat([value]);
        const { name } = this.props;

        if (!this.isControlled()) {
            this.setState({
                values,
                activeIndex: 0,
                open: true,
                filterKeyword: '',
            });
        }

        this.props.onChange(e, { values, name });
    }

    removeValue(e, value) {
        const values = without(this.getCurrentValues(), value);
        const { name } = this.props;

        if (!this.isControlled()) {
            this.setState({ values });
        }

        this.props.onChange(e, { values, name });
    }

    handleClick = () => {
        this.input.focus();
    };

    handleRequestRemove = (e, { value }) => {
        defer(() => this.removeValue(e, value)); // allow the event to bubble before removing.
    };

    handleInputFocus = e => {
        if (this.state.filterKeyword !== '') {
            this.props.onFilterChange(e, { keyword: '' });
        }
        this.setState({
            filterKeyword: '',
            hasFocus: true,
            open: true,
        });
    };

    handleInputKeyDown = e => {
        if (keycode(e) === 'tab' && this.state.open) {
            this.setState({
                open: false,
            });
        }

        if (e.shiftKey || e.metaKey || e.ctrlKey) {
            return;
        }

        if (keycode(e) === 'down') {
            e.preventDefault();

            if (this.state.open) {
                this.setState({
                    activeIndex: Math.min(
                        this.state.activeIndex + 1,
                        this.availableOptionCount - 1
                    ),
                });
            } else {
                this.setState({
                    activeIndex: 0,
                    open: true,
                });
            }

            if (this.props.children && this.props.onScrollBottom) {
                const children = this.props.children;
                const beforeLastChild = children.length - (2 + this.getCurrentValues().length);

                if (this.state.activeIndex === beforeLastChild) {
                    this.props.onScrollBottom();
                }
            }
        }

        if (keycode(e) === 'up') {
            e.preventDefault();

            if (this.state.open) {
                this.setState({
                    activeIndex: Math.max(this.state.activeIndex - 1, 0),
                });
            } else {
                this.setState({
                    activeIndex: 0,
                    open: true,
                });
            }
        }

        if (keycode(e) === 'enter' && !isUndefined(this.activeValue) && this.state.open) {
            this.addValue(e, this.activeValue);
        }

        if (
            keycode(e) === 'backspace' &&
            this.input.value === '' &&
            this.getCurrentValues().length
        ) {
            this.removeValue(e, last(this.getCurrentValues()));
        }
    };

    handleInputChange = e => {
        this.setState({
            filterKeyword: e.target.value,
            open: true,
            activeIndex: 0,
        });

        this.props.onFilterChange(e, { keyword: e.target.value });
    };

    handleMenuOptionClick = (e, { value }) => {
        this.addValue(e, value);
        this.input.focus();
    };

    handleInputBlur = ({ relatedTarget }) => {
        const popoverEl = document.getElementById(this.popoverId);
        const blurTo = relatedTarget || document.activeElement; // IE11 doesn't support relatedTarget but sets activeElement
        const isBlurToOwnOption = popoverEl && blurTo && popoverEl.contains(blurTo);

        const filterKeyword = isBlurToOwnOption ? this.state.filterKeyword : '';
        this.setState({
            filterKeyword,
            hasFocus: false,
        });
    };

    handleRequestClose = ({ reason, event }) => {
        if (
            reason === 'escapeKey' ||
            reason === 'offScreen' ||
            !this.state.el.contains(event.target)
        ) {
            this.setState({
                open: false,
            });
        }

        if (reason === 'escapeKey') {
            this.input.focus();
        }
    };

    handleScrollBottom = () => {
        if (this.state.open && !this.state.isLoadingOptions) {
            this.props.onScrollBottom();
        }
    };

    handleMount = el => {
        this.setState({ el });
        this.props.elementRef(el);
    };

    handleInputMount = el => {
        this.input = el;
        this.props.inputRef(el);
    };

    handleActiveOptionMount = c => {
        if (c) {
            c.scrollIntoViewIfNeeded();
        }
    };

    renderButtons(selectedItems) {
        // selectedItems may contain items or unmatched values at this point
        return selectedItems.map(item => (
            <Item
                icon={item.props ? item.props.icon : null}
                key={item.props ? item.props.value : item}
                size={this.props.size}
                disabled={this.props.disabled}
                onRequestRemove={this.handleRequestRemove}
                value={item.props ? item.props.value : item}
            >
                {item.props ? item.props.children || item.props.label : item}
            </Item>
        ));
    }

    renderMenu = ({ anchorWidth, maxHeight, placement }) => (
        <ResultsMenu
            placement={placement}
            maxHeight={maxHeight}
            isLoading={this.props.isLoadingOptions}
            onScrollBottom={this.props.onScrollBottom ? this.handleScrollBottom : undefined}
            {...pick(
                this.props,
                'noOptionsMessage',
                'footerMessage',
                'animateLoading',
                'loadingMessage'
            )}
            style={extend({ width: Math.max(anchorWidth, 200) }, this.props.menuStyle)}
        >
            {this.children}
        </ResultsMenu>
    );

    render() {
        const {
            allowNewValues,
            children,
            controlledFilter,
            describedBy,
            disabled,
            error,
            inline,
            labelledBy,
            placeholder,
            scrollContainer,
            size,
            useClickawayOverlay,
            ...otherProps
        } = this.props;

        const currentValues = this.getCurrentValues();
        const selectedItems = currentValues.slice(0);
        let foundExactMatch = currentValues.indexOf(this.state.filterKeyword) >= 0;

        // Map Options to selected values
        if (currentValues && currentValues.length) {
            Children.forEach(children, item => {
                if (isValidElement(item)) {
                    const selectedIndex = currentValues.indexOf(item.props.value);

                    if (selectedIndex !== -1) {
                        selectedItems[selectedIndex] = item;
                    }
                }
            });
        }

        // Filter the items
        const keywords = stringToKeywords(this.state.filterKeyword);
        const childrenFiltered = controlledFilter
            ? Children.toArray(children) // ensure consistent keys
            : Children.toArray(children).filter(option => {
                  if (get(option, ['props', 'label'], false)) {
                      return testPhrase(option.props.label, keywords);
                  }
                  return true; // Keep all headers and non-interactive options
              });

        this.availableOptionCount = 0;
        this.activeValue = undefined;

        this.children = Children.map(childrenFiltered, (item, i) => {
            if (!item.props || !has(item.props, 'value')) {
                // ignore Headings and Dividers
                return item;
            }

            // find out if the search string exactly matches a value
            if (item.props.value === this.state.filterKeyword) {
                foundExactMatch = true;
            }

            // remove items that are already selected
            const selectedIndex = currentValues.indexOf(item.props.value);
            if (selectedIndex >= 0) {
                return null;
            }

            // highlight matched text
            const { label, matchRanges } = item.props;
            const matchRangesCalc =
                !controlledFilter && !matchRanges && keywords && keywordLocations(label, keywords);

            // clone item
            const clonedItem = cloneElement(item, {
                key: i,
                onClick: this.handleMenuOptionClick,
                matchRanges: matchRanges || matchRangesCalc || undefined,
            });

            return clonedItem;
        });

        // Add the option to add the new value
        if (allowNewValues && !foundExactMatch && this.state.filterKeyword) {
            this.children.unshift(
                <Option
                    label={`${this.state.filterKeyword} (new value)`}
                    value={this.state.filterKeyword}
                    key="newValue"
                    onClick={this.handleMenuOptionClick}
                />
            );
        }
        if (open) {
            // highlight the selected Item
            this.children = Children.map(this.children, item => {
                if (!item.props || !has(item.props, 'value')) {
                    // ignore Headings and Dividers
                    return item;
                }

                const active = this.availableOptionCount === this.state.activeIndex;
                this.availableOptionCount += 1;

                if (!active) {
                    return item;
                }

                if (!item.props.disabled) {
                    this.activeValue = item.props.value;
                }

                const clonedItem = cloneElement(item, {
                    active,
                    id: this.activeItemId,
                    ref: this.handleActiveOptionMount,
                });

                return clonedItem;
            });
        }

        const inputWidth = `${this.state.filterKeyword.length * 0.8}em`;

        return [
            <StyledBox
                key="control"
                data-test-values={JSON.stringify(currentValues)}
                inline={inline}
                data-hasfocus={this.state.hasFocus || null}
                {...omit(
                    otherProps,
                    'animateLoading',
                    'className',
                    'controlledFilter',
                    'defaultValues',
                    'footerMessage',
                    'inputRef',
                    'isLoadingOptions',
                    'labelledBy',
                    'menuStyle',
                    'noOptionsMessage',
                    'onChange',
                    'onFilterChange',
                    'onScrollBottom',
                    'values',
                    'useClickawayOverlay'
                )}
                onClick={disabled ? null : this.handleClick}
                data-disabled={disabled || null}
                data-size={size}
                data-test-popover-id={this.popoverId}
                data-popoveropen={this.state.open}
                flex
                elementRef={this.handleMount}
                role="combobox"
                aria-haspopup={!disabled || null}
                aria-disabled={disabled || null}
                aria-expanded={this.state.open}
                aria-invalid={error || null}
                aria-controls={this.state.open ? this.popoverId : null}
                aria-activedescendant={disabled ? null : this.activeItemId}
                aria-labelledby={labelledBy}
                aria-describedby={describedBy}
            >
                {this.renderButtons(selectedItems)}
                {!disabled && (
                    <StyledInput
                        data-test="textbox"
                        innerRef={this.handleInputMount}
                        onBlur={this.handleInputBlur}
                        onFocus={this.handleInputFocus}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleInputKeyDown}
                        value={this.state.filterKeyword}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        aria-autocomplete="list"
                        style={{ flexBasis: inputWidth, width: inputWidth }}
                        placeholder={currentValues.length ? '' : placeholder}
                        data-size={size}
                    />
                )}
                {!disabled && (
                    <Popover
                        open={this.state.open && !!this.state.el}
                        autoCloseWhenOffScreen
                        anchor={this.state.el}
                        appearance="light"
                        onRequestClose={this.handleRequestClose}
                        scrollContainer={scrollContainer}
                        canCoverAnchor={false}
                        defaultPlacement="vertical"
                        repositionMode="flip"
                        id={this.popoverId}
                    >
                        {this.renderMenu}
                    </Popover>
                )}
            </StyledBox>,
            useClickawayOverlay && this.state.open ? (
                <StyledOverlay
                    key="overlay"
                    data-popoveropen={this.state.open}
                    data-test="overlay"
                    innerRef={this.handleOverlayMount}
                />
            ) : null,
        ];
    }
}

export default Normal;
