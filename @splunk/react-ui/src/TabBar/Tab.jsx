import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createDOMID } from '@splunk/ui-utils/id';
import Popover from '@splunk/react-ui/Popover';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import { getStyled } from '@splunk/react-ui/Themes';

import './StyleTab';

const {
    StyledClickable,
    StyledUnderline,
    StyledIcon,
    StyledLabel,
    StyledTooltipContent,
} = getStyled('TabBar.Tab');

class Tab extends Component {
    static propTypes = {
        /** @private. Is the tab active. */
        active: PropTypes.bool,
        /**
         * The ariaControls prop is the element id of the content displayed when the tab is selected.
         */
        ariaControls: PropTypes.string,
        /** Prevents user from clicking the tab. */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** See Icon documention for more information. */
        icon: PropTypes.node,
        /** @private. Size of icon. */
        iconSize: PropTypes.oneOf(['inline', 'small', 'large']),
        /**
         * This is placed on the clickable element. For accessibility, the related content should
         * have a aria-labelledby attribute which matches this id. The id must be unique
         * within the document, unlike tabId, which must be unique within the TabBar instance.
         */
        id: PropTypes.string,
        /** The text shown in the button. */
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        /** @private. The layout of tabs */
        layout: PropTypes.oneOf(['horizontal', 'vertical']),
        /** @private. Call back function when activated */
        onClick: PropTypes.func,
        /** A unique id for this tab and used by the TabBar to keep track of the open tab. */
        tabId: PropTypes.string,
        /**
         * Content to show in a tooltip.
         */
        tooltip: PropTypes.node,
    };

    static defaultProps = {
        active: false,
        disabled: false,
        onClick() {},
    };
    constructor(props, ...rest) {
        super(props, ...rest);

        this.popoverId = createDOMID('popover');

        this.state = {
            open: false,
            anchor: null,
        };
    }

    handleMount = el => {
        const { elementRef } = this.props;

        this.setState({
            anchor: el,
        });

        if (elementRef) {
            elementRef(el);
        }
    };

    handleTooltipOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleTooltipClose = () => {
        this.setState({
            open: false,
        });
    };

    handleClick = e => {
        const { onClick, tabId } = this.props;
        onClick(e, { tabId });
        e.preventDefault();
    };

    render() {
        const {
            active,
            ariaControls,
            elementRef,
            disabled,
            icon,
            iconSize,
            label,
            layout,
            tabId,
            tooltip,
            ...otherProps
        } = this.props;
        const { anchor, open } = this.state;

        return (
            <StyledClickable
                role="tab"
                aria-controls={ariaControls}
                aria-selected={active}
                data-test="tab"
                data-test-tab-id={tabId}
                disabled={disabled}
                data-tab-layout={layout}
                data-test-popover-id={tooltip ? this.popoverId : undefined}
                data-tab-has-icon={icon && iconSize !== 'inline' ? true : undefined}
                tabIndex={active ? -1 : undefined}
                {...otherProps}
                onClick={active ? undefined : this.handleClick}
                onFocus={this.handleTooltipOpen}
                onMouseEnter={this.handleTooltipOpen}
                onBlur={this.handleTooltipClose}
                onMouseLeave={this.handleTooltipClose}
                elementRef={this.handleMount}
            >
                <StyledLabel data-test="label">
                    {icon && <StyledIcon data-icon-size={iconSize}>{icon}</StyledIcon>}
                    {label}
                </StyledLabel>
                <StyledUnderline />

                {!disabled &&
                    tooltip && (
                        <Popover
                            anchor={anchor}
                            appearance="dark"
                            closeReasons={[]}
                            id={this.popoverId}
                            defaultPlacement={layout === 'vertical' ? 'right' : 'above'}
                            open={anchor && open}
                        >
                            <StyledTooltipContent>{tooltip}</StyledTooltipContent>
                        </Popover>
                    )}
                {tooltip && <ScreenReaderContent>{tooltip}</ScreenReaderContent>}
            </StyledClickable>
        );
    }
}

export default Tab;
