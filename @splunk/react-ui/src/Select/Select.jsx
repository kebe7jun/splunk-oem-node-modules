import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has, keys, omit, pick } from 'lodash';
import { keywordLocations, stringToKeywords, testPhrase } from '@splunk/ui-utils/filter';
import { _ } from '@splunk/ui-utils/i18n';
import { keycode } from '@splunk/ui-utils/keyboard';
import { createDOMID } from '@splunk/ui-utils/id';
import Button from '@splunk/react-ui/Button';
import Link from '@splunk/react-ui/Link';
import ResultsMenu, { Divider, Heading } from '@splunk/react-ui/ResultsMenu';
import Text from '@splunk/react-ui/Text';
import Caret from '@splunk/react-icons/Caret';

import { getStyled } from '@splunk/react-ui/Themes';
import Option from './Option';
import './Style';

const { StyledDropdown, StyledFilter, StyledLinkIcon, StyledLinkCaret } = getStyled('Select');

class Select extends Component {
    static propTypes = {
        /*
         * Whether or not to show the wait spinner when loading. It's recommended to set this to
         * `true` when loading may take more than one second.
         */
        animateLoading: PropTypes.bool,
        /** Change the style of the button or link. */
        appearance: PropTypes.oneOf(['default', 'link', 'primary', 'pill']),
        /**
         * Remove rounding from the left side of the toggle.
         */
        append: PropTypes.bool,
        /**
         * `children` should be `Select.Option`, `Select.Header`, or `Select.Divider`.
         */
        children: PropTypes.node,
        /**
         * Set this property instead of value to keep the value uncontrolled.
         */
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        /**
         * disabled to toggle.
         */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Highlight the field as having an error. The button will turn red.
         */
        error: PropTypes.bool,
        /**
         * Whether to show the filter box. When true, the children are automatically
         * filtered based on the label. When controlled, the parent component must provide a
         * onFilterChange callback and update the children. This can also be used to fetch new
         * results. */
        filter: PropTypes.oneOf([false, true, 'controlled']),
        /**
         * The footer message can show additional information, such as a truncation message.
         */
        footerMessage: PropTypes.node,
        /** Make the control an inline block with variable width. */
        inline: PropTypes.bool,
        /*
         * Whether or not to show the loading message and/or wait spinner. It's recommended to
         * remove the old children while loading new children to ensure the loading message is
         * not hidden.
         */
        isLoadingOptions: PropTypes.bool,
        /**
         * The id of the label. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's label. This property is not used when `labelText` is provided.
         */
        labelledBy: PropTypes.string,
        /**
         * Text presented in the label for this field.
         * This is used to supply this text along with the current value to a screenreader.
         */
        labelText: PropTypes.string,
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
         * A callback to receive the change events.
         * If value is set, this callback is required. This must set the value prop to retain the
         * change.
         */
        onChange: PropTypes.func,
        /**
         * A callback function when the list is scrolled to the bottom. Use to fetch more results and append to list.
         * Note: Set to null when all items are loaded.
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
         * When used outside of a control group, it can be useful to include the label on the toggle.
         */
        prefixLabel: PropTypes.string,
        /**
         * Remove rounding from the left side of the toggle.
         */
        prepend: PropTypes.bool,
        /**
         * The container with which the popover must scroll to stay aligned with the anchor.
         */
        scrollContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        /** The size of the toggle. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * Places this string after the selected label.
         */
        suffixLabel: PropTypes.string,
        /**
         * Value will be matched to one of the children to deduce the label and/or icon for the
         * toggle.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    };

    static defaultProps = {
        animateLoading: false,
        appearance: 'default',
        append: false,
        children: [],
        disabled: false,
        error: false,
        filter: false,
        inline: true,
        isLoadingOptions: false,
        menuStyle: {},
        noOptionsMessage: _('No matches'),
        onFilterChange() {},
        onChange() {},
        placeholder: _('Select...'),
        prepend: false,
        scrollContainer: 'window',
        size: 'medium',
    };

    static Option = Option;

    static Divider = Divider;
    static Heading = Heading;

    static validateAppearance(props) {
        if (__DEV__ && props.appearance === 'link') {
            if (props.error) {
                throw new Error("The link 'appearance' does not support 'error'");
            }

            if (props.append) {
                throw new Error("The link 'appearance' does not support 'append'");
            }

            if (props.prepend) {
                throw new Error("The link 'appearance' does not support 'prepend'");
            }

            if (props.size !== 'medium') {
                throw new Error("The link 'appearance' does not support 'size'");
            }
        }
    }

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');

        this.state = {
            value: has(props, 'defaultValue') ? props.defaultValue : '',
            open: false,
            filterKeyword: this.props.filter ? '' : null,
            activeIndex: null,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            throw new Error("Select 'defaultValue' prop is not compatible with 'value' prop.");
        }

        if (__DEV__ && this.isControlled() && props.onChange === Select.defaultProps.onChange) {
            throw new Error(
                "Select 'onChange' prop is required. This must update the 'value' prop to retain user input."
            );
        }

        Select.validateAppearance(props);

        this.menuId = createDOMID('menu');
        this.activeItemId = createDOMID('active-item');
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            throw new Error(
                "Cannot change Select from an uncontrolled component to a controlled one. Prop 'value' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            throw new Error("Cannot change Select 'defaultValue' after set.");
        }

        Select.validateAppearance(nextProps);
    }

    getCurrentValue() {
        return this.isControlled() ? this.props.value : this.state.value;
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleActiveOptionMount = comp => {
        if (comp) {
            comp.scrollIntoViewIfNeeded();
        }
    };

    handleTextKeyDown = e => {
        if (keycode(e) === 'tab') {
            e.preventDefault();
            return;
        }

        if (e.shiftKey || e.metaKey || e.ctrlKey) {
            return;
        }

        if (keycode(e) === 'down') {
            e.preventDefault();

            this.setState({
                activeIndex: Math.min(this.state.activeIndex + 1, this.availableOptionCount - 1),
            });
        }

        if (keycode(e) === 'up') {
            e.preventDefault();

            this.setState({
                activeIndex: Math.max(this.state.activeIndex - 1, 0),
            });
        }

        if (keycode(e) === 'enter' && this.activeValue) {
            e.preventDefault();
            this.selectValue(e, { value: this.activeValue });
        }
    };

    handleTextChange = (e, data) => {
        e.preventDefault();

        this.setState({
            activeIndex: 0,
            filterKeyword: data.value,
            open: true,
        });

        this.props.onFilterChange(e, { keyword: data.value });
    };

    handleTextKeyUp = e => {
        if (keycode(e) === 'tab') {
            e.preventDefault();
        }
    };

    handleSelectedItemMount = c => {
        this.selectedOption = c;
    };

    /**
     * Place focus on the toggle.
     */
    focus() {
        if (this.dropdown) {
            this.dropdown.focus();
        }
    }

    handleItemClick = (e, { value }) => {
        this.selectValue(e, { value });
    };

    handleRequestOpen = () => {
        this.setState(
            {
                open: true,
            },
            () => {
                if (this.selectedOption && !this.props.filter) {
                    this.selectedOption.focus();
                } else if (this.props.filter) {
                    this.setState({
                        activeIndex: this.selectedOptionIndex || 0,
                    });
                }
            }
        );
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
            activeIndex: 0,
        });
    };

    handleScrollBottom = () => {
        if (this.state.open && !this.state.isLoadingOptions) {
            this.props.onScrollBottom();
        }
    };

    selectValue(e, { value }) {
        const { name } = this.props;

        if (!this.isControlled()) {
            this.setState({ value });
        }

        this.handleRequestClose();

        this.focus();

        if (this.getCurrentValue() !== value) {
            this.props.onChange(e, { value, name });
        }
    }

    // Setup Filter
    renderFilter() {
        /* eslint-disable jsx-a11y/tabindex-no-positive */
        return this.props.filter ? (
            <StyledFilter key="filter">
                <Text
                    value={this.state.filterKeyword}
                    appearance="search"
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleTextKeyDown}
                    onKeyUp={this.handleTextKeyUp}
                    placeholder={_('filter')}
                    tabIndex={1}
                    role="combobox"
                    aria-activedescendant={this.activeItemId}
                    aria-expanded="true"
                    aria-controls={this.menuId}
                />
            </StyledFilter>
        ) : null;
        /* eslint-enable jsx-a11y/tabindex-no-positive */
    }

    render() {
        const {
            appearance,
            children,
            describedBy,
            disabled,
            elementRef,
            error,
            filter,
            inline,
            isLoadingOptions,
            labelledBy,
            labelText,
            menuStyle,
            onScrollBottom,
            placeholder,
            scrollContainer,
        } = this.props;

        const { filterKeyword, open } = this.state;
        let label;
        let icon;
        const keywords = stringToKeywords(filterKeyword);

        function isOption(child) {
            return has(child, ['props', 'value']);
        }

        const childrenCloned = Children.toArray(children)
            .filter(isValidElement)
            .map(item => {
                if (!isOption(item)) {
                    // ignore Headings and Dividers
                    return item;
                }

                const selected = item.props.value === this.getCurrentValue();
                const stringLabel = has(item.props, 'label') ? item.props.label : item.props.value;

                // If selected, set up the label and icon for the toggle button.
                if (selected) {
                    label = item.props.children || stringLabel;
                    icon = item.props.icon;
                    if (this.props.prefixLabel) {
                        label = `${this.props.prefixLabel}: ${label}`;
                    }
                    if (this.props.suffixLabel) {
                        label = `${label} ${this.props.suffixLabel}`;
                    }
                }

                if (item.props.hidden) {
                    return null;
                }

                return cloneElement(item, {
                    selected,
                    selectable: true,
                    ref: selected ? this.handleSelectedItemMount : undefined,
                });
            })
            .filter(item => {
                if (isOption(item) && filter === true) {
                    return testPhrase(item.props.label, keywords);
                }
                return item !== null; // Keep all headers and non-interactive options
            })
            .map(item => {
                const props = {};

                if (isOption(item)) {
                    props.onClick = this.handleItemClick;
                }

                if (isOption(item) && filter === true) {
                    props.matchRanges = keywordLocations(item.props.label, keywords) || undefined;
                }

                return cloneElement(item, props);
            });

        /* Hightlight Active Option
         * The active option is shown as highlighted when focused in the filter.
         * Pressing enter selects the active option, just as if the user clicked it.
         * Up and down arrows shifts the active option to the previous or next.
         */

        // availableOptionCount defines the max value for this.state.activeIndex.
        this.availableOptionCount = 0;
        // On enter keypress in the filter, the activeValue is selected.
        this.activeValue = undefined;
        // On mount, selectedOptionIndex is used to highlight selected the item.
        this.selectedOptionIndex = undefined;

        const highlightActive = item => {
            if (!has(item.props, 'active')) {
                // ignore Headings and Dividers
                return item;
            }

            if (item.props.selected && !item.props.disabled) {
                this.selectedOptionIndex = this.availableOptionCount;
            }

            const active = this.availableOptionCount === this.state.activeIndex;
            this.availableOptionCount += 1;

            if (!active) {
                return item;
            }

            if (!item.props.disabled) {
                this.activeValue = item.props.value;
            }

            return cloneElement(item, {
                ref: this.handleActiveOptionMount,
                active: true,
                id: this.activeItemId,
            });
        };

        const ariaLabel = `${labelText ? `${labelText}, ` : ''}${label || placeholder}`;

        const finalChildren = filter
            ? Children.map(childrenCloned, highlightActive)
            : Children.toArray(childrenCloned); // ensure consistent keys

        const toggle =
            appearance === 'link' ? (
                <Link
                    label={label || placeholder}
                    disabled={disabled}
                    role="listbox"
                    aria-label={ariaLabel}
                    aria-labelledby={labelText ? null : labelledBy}
                >
                    {!!icon && <StyledLinkIcon>{icon}</StyledLinkIcon>}
                    {label || placeholder}
                    <StyledLinkCaret>
                        <Caret screenReaderText={null} />
                    </StyledLinkCaret>
                </Link>
            ) : (
                <Button
                    error={error}
                    icon={icon}
                    inline={false}
                    isMenu
                    label={label || placeholder}
                    role="listbox"
                    aria-label={ariaLabel}
                    aria-labelledby={labelText ? null : labelledBy}
                    {...pick(this.props, 'appearance', 'append', 'disabled', 'prepend', 'size')}
                />
            );

        const createMenu = ({ anchorWidth, maxHeight, placement }) => (
            <ResultsMenu
                childrenStart={this.renderFilter()}
                maxHeight={maxHeight}
                onScrollBottom={onScrollBottom ? this.handleScrollBottom : undefined}
                placement={placement}
                isLoading={isLoadingOptions}
                id={this.menuId}
                {...pick(
                    this.props,
                    'className',
                    'noOptionsMessage',
                    'footerMessage',
                    'animateLoading',
                    'loadingMessage'
                )}
                style={{
                    minWidth: anchorWidth,
                    maxWidth: Math.max(anchorWidth, 300),
                    ...menuStyle,
                }}
            >
                {finalChildren}
            </ResultsMenu>
        );

        return (
            <StyledDropdown
                toggle={toggle}
                data-test="select"
                data-test-value={this.getCurrentValue()}
                inline={appearance === 'link' || inline}
                open={open}
                retainFocus={!filter}
                takeFocus={!!filter}
                closeReasons={['clickAway', 'escapeKey', 'offScreen', 'toggleClick']}
                onRequestClose={this.handleRequestClose}
                onRequestOpen={this.handleRequestOpen}
                aria-describedby={describedBy}
                data-select-appearance={appearance}
                defaultPlacement={filter ? 'vertical' : undefined}
                canCoverAnchor={window.innerHeight < 500}
                innerRef={c => (this.dropdown = c)}
                elementRef={elementRef}
                scrollContainer={scrollContainer}
                {...omit(this.props, keys(Select.propTypes))}
            >
                {createMenu}
            </StyledDropdown>
        );
    }
}

export default Select;
export { Option, Divider, Heading };
