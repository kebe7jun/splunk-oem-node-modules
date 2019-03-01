import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, keys, omit } from 'lodash';
import { _ } from '@splunk/ui-utils/i18n';
import { createGUID } from '@splunk/ui-utils/id';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';
import TransitionOpen from '@splunk/react-ui/TransitionOpen';
import ChevronRight from '@splunk/react-icons/ChevronRight';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledBox, StyledTitleClickable, StyledIcon } = getStyled('CollapsiblePanel');

class CollapsiblePanel extends Component {
    static propTypes = {
        /** @private */
        children: PropTypes.node,
        /** @private */
        className: ClassNamePropCheck,
        /**
         * Sets the initial state of a panel to expanded. Incompatible with
         `open`; use 'open' or 'defaultOpen', not both.
         */
        defaultOpen: PropTypes.bool,
        /**
         * Prevents the panel from expanding or collapsing.
         */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Identifies a specific panel. Splunk UI uses `panelId` for callbacks
         and managing expanded and collapsed states.
         */
        panelId: PropTypes.any,
        /**
         * Invokes a callback when user requests to collapse the panel. Passes
         an object containing the `panelId`.
         */
        onRequestClose: PropTypes.func,
        /**
         * Invokes a callback when user requests to expand the panel. Passes an
         object containing the `panelId`.
         */
        onRequestOpen: PropTypes.func,
        /**
         * Controls the expanded state of a panel. Incompatible with
         `defaultOpen`; use 'open' or 'defaultOpen', not both.
         */
        open: PropTypes.bool,
        /**
         * Displays the name of the `panel` in the panel's title bar.
         */
        title: PropTypes.node.isRequired,
    };

    static defaultProps = {
        disabled: false,
        onRequestClose() {},
        onRequestOpen() {},
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'open');

        if (!this.isControlled()) {
            this.state = {
                open: props.defaultOpen || false,
            };
        }

        if (__DEV__ && this.isControlled() && has(props, 'defaultOpen')) {
            throw new Error(
                "The 'defaultOpen' prop is not compatible with 'open' prop in CollapsiblePanel."
            );
        }
        this.containerId = `container-${createGUID()}`;
        this.toggleId = `toggle-${createGUID()}`;
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'open')) {
            throw new Error(
                "Cannot change CollapsiblePanel from an uncontrolled component to a controlled one. Prop 'open' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultOpen !== this.props.defaultOpen) {
            throw new Error(
                "Cannot change 'defaultOpen' after initial render in CollapsiblePanel. Consider using a controlled component instead."
            );
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleRequestClose = event => {
        const { panelId, onRequestClose } = this.props;
        onRequestClose({ event, panelId, reason: 'toggleClick' });
        if (!this.isControlled()) {
            this.setState({ open: false });
        }
    };

    handleRequestOpen = event => {
        const { panelId, onRequestOpen } = this.props;
        onRequestOpen({ event, panelId, reason: 'toggleClick' });
        if (!this.isControlled()) {
            this.setState({ open: true });
        }
    };

    render() {
        const { children, disabled, elementRef, title } = this.props;
        const open = this.isControlled() ? this.props.open : this.state.open;
        return (
            <StyledBox
                data-test="collapsible-panel"
                elementRef={elementRef}
                {...omit(this.props, keys(CollapsiblePanel.propTypes))}
            >
                <StyledTitleClickable
                    disabled={disabled}
                    onClick={open ? this.handleRequestClose : this.handleRequestOpen}
                    id={this.toggleId}
                    aria-owns={this.containerId}
                    aria-expanded={open}
                    data-test="toggle"
                >
                    <StyledIcon>
                        <ChevronRight
                            screenReaderText={open ? _('Panel is open') : _('Panel is closed')}
                        />
                    </StyledIcon>
                    {title}
                </StyledTitleClickable>
                <TransitionOpen
                    id={this.containerId}
                    aria-labelledby={this.toggleId}
                    data-test="body"
                    open={open}
                >
                    {children}
                </TransitionOpen>
            </StyledBox>
        );
    }
}

export default CollapsiblePanel;
