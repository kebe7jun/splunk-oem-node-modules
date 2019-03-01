import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has } from 'lodash';
import { createDOMID } from '@splunk/ui-utils/id';
import Popover from '@splunk/react-ui/Popover';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const {
    Styled,
    StyledInline,
    StyledToggle,
    StyledToggleInline,
    StyledContent,
    StyledLink,
} = getStyled('Tooltip');

/**
 * The Tooltip component wraps arbitrary content to be displayed when the target element is hovered
 * or focused.
 */
class Tooltip extends Component {
    static propTypes = {
        /**
         * Provide children to replace the default question mark.
         * For accessibility, ensure the child can take focus.
         */
        children: PropTypes.node,
        /**
         * The content of the tooltip. If the content is falsy and the `open` prop
         * is uncontrolled, the tooltip will never display.
         */
        content: PropTypes.node,
        /**
         * The default placement of the `Tooltip`. It may render in a different location if there is
         * not enough space in the default direction.
         */
        defaultPlacement: PropTypes.oneOf(['above', 'below', 'left', 'right']),
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Set inline to false when adding a tooltip to a block element.
         */
        inline: PropTypes.bool,
        /**
         * Callback function fired when the popover is requested to be closed.
         *
         * @param {event} event
         * @param {object} data
         * @param {string} data.reason The reason for the close request.
         */
        onRequestClose: PropTypes.func,
        /**
         * Callback function fired when the popover is requested to be opened.
         *
         * @param {event} event
         * @param {object} data
         * @param {string} data.reason The reason for the open request.
         */
        onRequestOpen: PropTypes.func,
        /**
         * Whether or not the tooltip is shown. Setting this value makes the property controlled.
         * The onRequestClose and onRequestOpen callbacks are usually used .
         */
        open: PropTypes.bool,
    };

    static defaultProps = {
        defaultPlacement: 'above',
        inline: true,
        onRequestClose() {},
        onRequestOpen() {},
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'open');
        this.popoverId = createDOMID('popover');

        this.state = {
            open: false,
            anchor: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'open')) {
            throw new Error(
                "Cannot change Tooltip from an uncontrolled component to a controlled one. Prop 'open' is not valid in subsequent updates if not provided in the initial props."
            );
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleMount = el => {
        // Handle mouseenter and mouseleave with native events due to current issues with how they
        // are handled by react. See https://github.com/facebook/react/issues/4251 and SUI-1232.
        if (el) {
            el.addEventListener('mouseenter', this.handleMouseEnter);
            el.addEventListener('mouseleave', this.handleMouseLeave);
        } else if (this.state.anchor) {
            this.state.anchor.removeEventListener('mouseenter', this.handleMouseEnter);
            this.state.anchor.removeEventListener('mouseleave', this.handleMouseLeave);
        }
        this.setState({
            anchor: el,
        });
    };

    handleRequestOpen(e, data) {
        if (!this.isControlled()) {
            this.setState({
                open: true,
            });
        }
        this.props.onRequestOpen(e, data);
    }

    handleRequestClose(e, data) {
        if (!this.isControlled()) {
            this.setState({
                open: false,
            });
        }

        this.props.onRequestClose(e, data);
    }

    handleMouseEnter = e => {
        this.handleRequestOpen(e, { reason: 'mouseEnterToggle' });
    };

    handleFocus = e => {
        this.handleRequestOpen(e, { reason: 'focusToggle' });
    };

    handleMouseLeave = e => {
        this.handleRequestClose(e, { reason: 'mouseLeaveToggle' });
    };

    handleBlur = e => {
        this.handleRequestClose(e, { reason: 'blurToggle' });
    };

    render() {
        const {
            children,
            content,
            elementRef,
            inline,
            // eslint-disable-next-line no-unused-vars
            onRequestClose,
            // eslint-disable-next-line no-unused-vars
            onRequestOpen,
            open,
            defaultPlacement,
            ...otherProps
        } = this.props;
        const { anchor } = this.state;

        const openRender = !!anchor && this.isControlled() ? open : !!content && this.state.open;

        const StyledComp = inline ? StyledInline : Styled;
        const StyledToggleComp = inline ? StyledToggleInline : StyledToggle;

        return (
            <StyledComp
                data-test="tooltip"
                data-test-open={openRender}
                data-test-popover-id={this.popoverId}
                innerRef={elementRef}
                {...otherProps}
            >
                <StyledToggleComp
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    innerRef={this.handleMount}
                    data-test="toggle"
                >
                    {children}
                    {!children && !!content && <StyledLink aria-hidden="true">?</StyledLink>}
                    {!!content && <ScreenReaderContent>{content}</ScreenReaderContent>}
                </StyledToggleComp>
                <Popover
                    anchor={anchor}
                    appearance="dark"
                    closeReasons={[]}
                    defaultPlacement={defaultPlacement}
                    id={this.popoverId}
                    open={openRender}
                >
                    <StyledContent>{content}</StyledContent>
                </Popover>
            </StyledComp>
        );
    }
}
export default Tooltip;
