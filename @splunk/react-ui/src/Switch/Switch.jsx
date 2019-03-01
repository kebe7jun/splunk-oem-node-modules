import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createDOMID } from '@splunk/ui-utils/id';
import { _ } from '@splunk/ui-utils/i18n';
import { keycode } from '@splunk/ui-utils/keyboard';
import Check from '@splunk/react-icons/Check';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const {
    StyledBox,
    StyledRadioClickable,
    StyledRadioSpan,
    StyledCheckboxClickable,
    StyledCheckboxSpan,
    StyledToggleClickable,
    StyledToggleSpan,
    StyledSome,
    StyledToggleOutline,
    StyledIndicator,
    StyledLabel,
} = getStyled('Switch');

const StyledClickables = {
    radio: StyledRadioClickable,
    checkbox: StyledCheckboxClickable,
    toggle: StyledToggleClickable,
};
const StyledSpans = {
    radio: StyledRadioSpan,
    checkbox: StyledCheckboxSpan,
    toggle: StyledToggleSpan,
};

/**
 * `Switch` is a basic form control with an on/off state. For a group of radio switches,
 * the `RadioList` component would typically be used instead of `Switch`.
 */
class Switch extends Component {
    static propTypes = {
        /**
         * The `radio` appearance is used to create `RadioList` and is not intended for use in an
         * individual switch.
         */
        appearance: PropTypes.oneOf(['radio', 'checkbox', 'toggle']),
        /** @private. */
        children: PropTypes.node,
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Highlight the field as having an error.
         */
        error: PropTypes.bool,
        /**
         * If `Switch` is not provided children as the label, an id can be provided for the control.
         * Set a label's for attribute to this id to link the two elements.
         */
        id: PropTypes.string,
        /** Make the control an inline block with variable width. */
        inline: PropTypes.bool,
        /**
         * In a couple of cases, the switch is to show state, but is not interactive in itself.
         * The parent takes focus and handles click. Set interactive to false to prevent focus and
         * hover states, and remove accessibility properties.
         * @private */
        interactive: PropTypes.bool,
        /**
         * If `Switch` is not provided children as the label, an id can be provided to
         * another element.
         */
        labelledBy: PropTypes.string,
        onClick: PropTypes.func,
        /**
         * 'some' is only valid when appearance is 'checkbox'. The current value of `selected` is
         * passed to the onClick handler.
         */
        selected: PropTypes.oneOf([true, false, 'some']),
        /**
         * The selected label is shown in a tooltip and to Screen Readers.
         */
        selectedLabel: PropTypes.string,
        /** The size of the text label. */
        size: PropTypes.oneOf(['small', 'medium']),
        /**
         * The some selected label is shown in a tooltip and to Screen Readers.
         */
        someSelectedLabel: PropTypes.string,
        /**
         * The unselected label is shown in a tooltip and to Screen Readers.
         */
        unselectedLabel: PropTypes.string,
        /**
         * The `value` is used as an identifier and is passed to the `onClick` handler. This is
         * useful when managing a group of switches with a single `onClick` handler.
         */
        value: PropTypes.any,
    };

    static defaultProps = {
        appearance: 'checkbox',
        disabled: false,
        error: false,
        inline: false,
        interactive: true,
        onClick() {},
        selected: false,
        selectedLabel: _('Selected'),
        size: 'medium',
        unselectedLabel: _('Not selected'),
    };

    static validateProps({ selected, appearance }) {
        if (__DEV__ && selected === 'some' && appearance !== 'checkbox') {
            throw new Error("Switch only supports `selected='some'` when `appearance='checkbox'`.");
        }
    }

    constructor(props, ...rest) {
        super(props, ...rest);

        this.labelId = createDOMID('label');
        this.clickableId = createDOMID('clickable');

        Switch.validateProps(props);
    }

    componentWillReceiveProps = Switch.validateProps;

    /**
     * Place focus on the toggle.
     */
    focus() {
        this.toggle.focus();
    }

    handleContainerClick = e => {
        const { value, selected } = this.props;
        this.props.onClick(e, { value, selected });
    };

    handleKeyPress = e => {
        if (keycode(e) === 'space') {
            e.preventDefault();
            this.handleContainerClick(e);
        }
    };

    render() {
        const {
            appearance,
            children,
            disabled,
            error,
            id,
            inline,
            interactive,
            labelledBy,
            // eslint-disable-next-line no-unused-vars
            onClick,
            selected,
            selectedLabel,
            size,
            someSelectedLabel,
            unselectedLabel,
            value,
            ...otherProps
        } = this.props;

        let labelId = labelledBy; // consumer defined external label
        let clickableId = id; // consumer defined id

        // if has internal label defined with children....
        if (children) {
            labelId = this.labelId; // must use generated labelId
            clickableId = id || this.clickableId; // must have an id
        }

        const ariaChecked = selected === 'some' ? 'mixed' : selected;

        const switchProps = {
            disabled,
            'aria-labelledby': interactive ? labelId : undefined,
            'aria-checked': interactive ? ariaChecked : null,
            'aria-invalid': error ? true : undefined,
            id: clickableId,
            innerRef: c => (this.toggle = c),
            title: selected ? selectedLabel : unselectedLabel,
            onClick: disabled || !interactive ? null : this.handleContainerClick,
            'data-test': 'button',
            'data-selected': selected,
        };

        const StyledSwitchComponent = interactive
            ? StyledClickables[appearance]
            : StyledSpans[appearance];

        const stateLabels = {
            true: selectedLabel,
            false: unselectedLabel,
            some: someSelectedLabel,
        };

        return (
            <StyledBox
                flex
                inline={inline}
                data-size={size}
                data-test="switch"
                data-test-selected={selected}
                data-test-value={value}
                data-test-error={error ? true : undefined}
                data-error={error ? true : undefined}
                data-disabled={disabled ? true : undefined}
                {...otherProps}
            >
                {appearance === 'toggle' && (
                    <StyledSwitchComponent
                        role={interactive ? 'switch' : undefined}
                        {...switchProps}
                    >
                        <StyledIndicator />
                        <StyledToggleOutline />
                    </StyledSwitchComponent>
                )}
                {appearance !== 'toggle' && (
                    <StyledSwitchComponent
                        role={interactive ? appearance : undefined}
                        status={interactive && error ? 'error' : undefined}
                        {...switchProps}
                    >
                        {selected === true &&
                            appearance === 'checkbox' && <Check inline={false} size="12px" />}
                        {selected === 'some' && appearance === 'checkbox' && <StyledSome />}
                    </StyledSwitchComponent>
                )}
                <ScreenReaderContent>{stateLabels[`${selected}`]}</ScreenReaderContent>
                {children && (
                    <StyledLabel
                        data-test="label"
                        id={labelId}
                        htmlFor={clickableId}
                        data-size={size}
                        data-disabled={disabled || null}
                    >
                        {children}
                    </StyledLabel>
                )}
            </StyledBox>
        );
    }
}
export default Switch;
