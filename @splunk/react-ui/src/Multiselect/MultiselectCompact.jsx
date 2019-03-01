import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import {
    extend,
    find,
    forEachRight,
    get,
    defer,
    has,
    includes,
    isUndefined,
    omit,
    pick,
    uniq,
    without,
} from 'lodash';
import { keywordLocations, stringToKeywords, testPhrase } from '@splunk/ui-utils/filter';
import { createDOMID } from '@splunk/ui-utils/id';
import { _ } from '@splunk/ui-utils/i18n';
import { keycode } from '@splunk/ui-utils/keyboard';
import Button from '@splunk/react-ui/Button';
import Link from '@splunk/react-ui/Link';
import ResultsMenu from '@splunk/react-ui/ResultsMenu';
import Text from '@splunk/react-ui/Text';
import { getStyled } from '@splunk/react-ui/Themes';

import Option from './Option';
import './StyleCompact';

const { StyledDropdown, StyledFilter, StyledCount, StyledToggleAllControls } = getStyled(
    'MultiselectCompact'
);

class Compact extends Component {
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
        /**
         * Style properties to apply to the Menu. */
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
         * Value will be matched to one of the children to deduce the label and/or icon for the
         * toggle.
         */
        values: PropTypes.array,
    };

    static defaultProps = {
        animateLoading: false,
        allowNewValues: false,
        disabled: false,
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
    };

    static Option = Option;

    static Divider = ResultsMenu.Divider;
    static Heading = ResultsMenu.Heading;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'values');

        this.state = {
            open: false,
            textHasFocus: false,
            values: props.defaultValues || [],
            activeIndex: 0,
            filterKeyword: '',
            el: null,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValues')) {
            throw new Error(
                "Multiselect 'defaultValues' prop is not compatible with 'value' prop."
            );
        }

        if (__DEV__ && this.isControlled() && props.onChange === Compact.defaultProps.onChange) {
            throw new Error(
                "Multiselect 'onChange' prop is required. This must update the 'value' prop to retain user input."
            );
        }

        this.activeItemId = createDOMID('active-item');
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
        if (this.state.dropdown) {
            this.state.dropdown.focus();
        }
    }

    toggleValue(e, value) {
        const values = this.getCurrentValues();
        const currentIndex = this.getCurrentValues().indexOf(value);
        const { name } = this.props;
        let newValues;

        if (currentIndex >= 0) {
            newValues = [...values.slice(0, currentIndex), ...values.slice(currentIndex + 1)];
        } else {
            newValues = values.concat([value]);
        }

        if (!this.isControlled()) {
            this.setState({
                values: newValues,
                open: true,
            });
        }

        this.props.onChange(e, { values: newValues, name });
    }

    removeValue(e, value) {
        const values = without(this.getCurrentValues(), value);
        const { name } = this.props;

        if (!this.isControlled()) {
            this.setState({ values });
        }

        this.props.onChange(e, { values, name });
    }

    handleSelectAll = e => {
        let values = uniq(this.getCurrentValues().concat(this.displayedValues));
        const { name, children } = this.props;
        if (!this.isControlled()) {
            values = React.Children.toArray(children)
                .filter(child => includes(values, child.props.value) && !child.props.disabled)
                .map(child => child.props.value);
            this.setState({ values });
        }

        this.props.onChange(e, { values, name });
    };

    handleClearAll = e => {
        // Clear the filtered items, items when filtering. Else clear all the items.
        const values = this.state.filterKeyword
            ? without(this.getCurrentValues(), ...this.displayedValues)
            : [];
        const { name } = this.props;

        if (!this.isControlled()) {
            this.setState({ values });
        }

        this.props.onChange(e, { values, name });
    };

    handleRequestRemove = (e, { value }) => {
        defer(() => this.removeValue(e, value)); // allow the event to bubble before removing.
    };

    handleTextKeyDown = e => {
        if (keycode(e) === 'tab') {
            e.preventDefault();
        }

        if (e.shiftKey || e.metaKey || e.ctrlKey) {
            return;
        }

        if (keycode(e) === 'down') {
            e.preventDefault();

            this.setState({
                activeIndex: Math.min(this.state.activeIndex + 1, this.availableOptionCount - 1),
            });

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
            this.setState({
                activeIndex: Math.max(this.state.activeIndex - 1, 0),
            });
        }

        if (keycode(e) === 'enter' && !isUndefined(this.activeValue) && this.state.open) {
            this.toggleValue(e, this.activeValue);
        }
    };

    handleMenuOptionClick = (e, { value }) => {
        e.preventDefault();
        this.toggleValue(e, value);
    };

    handleTextChange = (e, { value }) => {
        this.setState({
            filterKeyword: value,
            open: true,
            activeIndex: 0,
        });

        this.props.onFilterChange(e, { keyword: value });
    };

    handleTextFocus = () => {
        this.setState({
            textHasFocus: true,
        });
    };

    handleTextBlur = () => {
        this.setState({
            textHasFocus: false,
        });
    };

    handleRequestOpen = e => {
        this.setState({
            open: true,
            activeIndex: 0,
            topValues: this.getCurrentValues(),
            filterKeyword: '',
        });

        this.props.onFilterChange(e, { keyword: '' });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleScrollBottom = () => {
        if (this.state.open && !this.state.isLoadingOptions) {
            this.props.onScrollBottom();
        }
    };

    handleMount = container => {
        this.setState({
            dropdown: container,
        });
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

    renderControls({ placement, hasChildren }) {
        const selectControls = (
            <StyledToggleAllControls data-placement={placement} key="selectAll">
                <Link
                    onClick={this.handleSelectAll}
                    disabled={!(this.availableOptionCount - this.selectedOptionCount)}
                    data-test="select-all"
                    style={{
                        marginRight: 20,
                    }}
                >
                    {this.state.filterKeyword ? _('Select All Matches') : _('Select All')}
                </Link>
                <Link
                    onClick={this.handleClearAll}
                    disabled={!this.selectedOptionCount}
                    data-test="clear-all"
                >
                    {this.state.filterKeyword ? _('Clear All Matches') : _('Clear All')}
                </Link>
            </StyledToggleAllControls>
        );

        /* eslint-disable jsx-a11y/tabindex-no-positive */
        return (
            <div key="controls">
                {placement === 'above' && hasChildren && selectControls}
                <StyledFilter key="filter" data-test="filter" data-placement={placement}>
                    <Text
                        autoComplete={false}
                        value={this.state.filterKeyword}
                        appearance="search"
                        onChange={this.handleTextChange}
                        onKeyDown={this.handleTextKeyDown}
                        onKeyUp={this.handleTextKeyUp}
                        onFocus={this.handleTextFocus}
                        onBlur={this.handleTextBlur}
                        placeholder={_('filter')}
                        tabIndex={1}
                        aria-activedescendant={this.activeItemId}
                        ref={this.handleInputMount}
                    />
                </StyledFilter>
                {placement !== 'above' && hasChildren && selectControls}
            </div>
        );
        /* eslint-enable jsx-a11y/tabindex-no-positive */
    }

    renderMenu = ({ anchorWidth, maxHeight, placement }) => {
        const { filterKeyword, textHasFocus, topValues } = this.state;
        const { allowNewValues, controlledFilter } = this.props;
        const currentValues = this.getCurrentValues();

        this.availableOptionCount = 0;
        this.selectedOptionCount = 0;
        this.activeValue = undefined;

        let foundExactMatch;
        let childrenTopCount = 0;

        function isOption(child) {
            return get(child, ['props', 'value'], false);
        }

        let children = Children.toArray(this.props.children).reduce((acc, item, i) => {
            // ignore Headings and Dividers
            if (!isOption(item)) {
                acc.push(item);
                return acc;
            }

            // Find out if the search string exactly matches a value
            if (item.props.value === this.state.filterKeyword) {
                foundExactMatch = true;
            }

            // Format the Menu.Item
            const clonedItem = cloneElement(item, {
                key: item.key || i,
                onClick: this.handleMenuOptionClick,
                selectable: false,
                selected: currentValues && currentValues.indexOf(item.props.value) >= 0,
                compact: true,
                role: 'option',
            });

            // Move previously selected items to the top section
            if (topValues && topValues.indexOf(item.props.value) >= 0) {
                if (childrenTopCount === 0) {
                    acc.splice(childrenTopCount, 0, <ResultsMenu.Divider key="topDivider" />);
                }
                acc.splice(childrenTopCount, 0, clonedItem);

                childrenTopCount += 1;
            } else {
                acc.push(clonedItem);
            }

            return acc;
        }, []);

        // Add missing items
        forEachRight(currentValues, value => {
            const matchedItem = find(children, item => item.props && item.props.value === value);
            if (!matchedItem) {
                if (value === this.state.filterKeyword) {
                    foundExactMatch = true;
                }

                const isTopValue = topValues && topValues.indexOf(value) >= 0;

                children.splice(
                    isTopValue ? 0 : childrenTopCount + 1,
                    0,
                    <Option
                        label={String(value)}
                        value={value}
                        key={`missing-value-${value}`}
                        onClick={this.handleMenuOptionClick}
                        compact
                        selected
                    />
                );
                if (isTopValue) {
                    childrenTopCount += 1;
                }
            }
        });

        // Filter the items
        const keywords = stringToKeywords(filterKeyword);
        children = controlledFilter
            ? children
            : children
                  .filter(option => {
                      if (isOption(option)) {
                          return testPhrase(option.props.label, keywords);
                      }
                      return true; // Keep all headers and non-interactive options
                  })
                  // hightlight the matched text
                  .map(option => {
                      if (!isOption(option)) {
                          return option;
                      }

                      // highlight matched text
                      const matchRanges =
                          keywords && keywordLocations(option.props.label, keywords);

                      return cloneElement(option, {
                          matchRanges: matchRanges || undefined,
                      });
                  });

        // Add the option to add the new value
        if (allowNewValues && !foundExactMatch && filterKeyword) {
            children.splice(
                childrenTopCount,
                0,
                <Option
                    label={`${filterKeyword} (new value)`}
                    value={filterKeyword}
                    key="newValue"
                    compact
                    onClick={this.handleMenuOptionClick}
                />
            );
        }

        // Highlight the selected Items and remove hidden
        children = children.reduce((acc, item) => {
            // ignore Dividers & Headings
            if (!isOption(item)) {
                acc.push(item);
                return acc;
            }

            // Ignore any hidden items
            if (item.props && item.props.hidden) {
                return acc;
            }

            const active = this.availableOptionCount === this.state.activeIndex;
            this.availableOptionCount += 1;

            this.selectedOptionCount += item.props.selected ? 1 : 0;

            if (!active || !textHasFocus) {
                acc.push(item);
                return acc;
            }

            if (!item.props.disabled) {
                this.activeValue = item.props.value;
            }

            const clonedItem = cloneElement(item, {
                active,
                id: this.activeItemId,
                ref: this.handleActiveOptionMount,
            });

            acc.push(clonedItem);
            return acc;
        }, []);

        this.displayedValues = children.reduce((acc, item) => {
            if (item.props && item.props.value) {
                acc.push(item.props.value);
            }
            return acc;
        }, []);

        return (
            <ResultsMenu
                childrenStart={this.renderControls({ placement, hasChildren: !!children.length })}
                placement={placement}
                maxHeight={maxHeight}
                onScrollBottom={this.props.onScrollBottom ? this.handleScrollBottom : undefined}
                data-test="results-menu"
                isLoading={this.props.isLoadingOptions}
                {...pick(
                    this.props,
                    'className',
                    'noOptionsMessage',
                    'footerMessage',
                    'animateLoading',
                    'loadingMessage'
                )}
                style={extend({ width: Math.max(anchorWidth, 200) }, this.props.menuStyle)}
            >
                {children}
            </ResultsMenu>
        );
    };

    render() {
        const {
            children,
            describedBy,
            disabled,
            error,
            inline,
            labelledBy,
            placeholder,
            scrollContainer,
            size,
            ...otherProps
        } = this.props;

        // Generate buttonLabels
        const currentValues = this.getCurrentValues();
        const childrenArray = Children.toArray(children);
        const buttonLabel = currentValues.reduce((acc, value, index, orig) => {
            const matchedItem = find(childrenArray, item => item.props.value === value);
            if (matchedItem) {
                acc.push(matchedItem.props.children || matchedItem.props.label);
            } else {
                acc.push(value);
            }
            if (index < orig.length - 1) {
                acc.push(_(', '));
            }

            return acc;
        }, []);

        const toggle = (
            <Button
                label={buttonLabel || placeholder}
                error={error}
                inline={inline}
                size={size}
                disabled={disabled || null}
                isMenu
                role="listbox"
                aria-labelledby={labelledBy}
                aria-describedby={describedBy}
                aria-multiselectable="true"
            >
                {!!currentValues.length && (
                    <StyledCount data-role="count">({currentValues.length})</StyledCount>
                )}
            </Button>
        );

        return (
            <StyledDropdown
                data-test-values={JSON.stringify(currentValues)}
                closeReasons={['clickAway', 'escapeKey', 'offScreen', 'toggleClick']}
                inline={inline}
                toggle={toggle}
                {...omit(
                    otherProps,
                    'allowNewValues',
                    'animateLoading',
                    'className',
                    'controlledFilter',
                    'defaultValues',
                    'footerMessage',
                    'inputRef',
                    'isLoadingOptions',
                    'menuStyle',
                    'noOptionsMessage',
                    'onChange',
                    'onFilterChange',
                    'onScrollBottom',
                    'values',
                    'useClickawayOverlay'
                )}
                onClick={disabled ? null : this.handleClick}
                onRequestOpen={this.handleRequestOpen}
                onRequestClose={this.handleRequestClose}
                open={this.state.open}
                repositionMode="flip"
                scrollContainer={scrollContainer}
                defaultPlacement="vertical"
                canCoverAnchor={window.innerHeight < 500}
                innerRef={this.handleMount}
            >
                {this.renderMenu}
            </StyledDropdown>
        );
    }
}

export default Compact;
