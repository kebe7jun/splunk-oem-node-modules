import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { extend, has, includes, isFunction, keys, omit } from 'lodash';
import { createDOMID } from '@splunk/ui-utils/id';
import Popover from '@splunk/react-ui/Popover';
import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { StyledBox } = getStyled('Dropdown');

class Dropdown extends Component {
    /**
     * Enumeration of the possible reasons for closing the Select.
     * 'clickAway', 'escapeKey', and 'offScreen' are inherited from Popover, but repeated here for
     * docs extraction.
     */
    static possibleCloseReasons = [
        'clickAway',
        'contentClick',
        'escapeKey',
        'offScreen',
        'toggleClick',
    ];

    static propTypes = {
        /**
         * If there is not enough room to render the `Dropdown` in a direction, this option
         * enables it to be rendered over the toggle.
         */
        canCoverAnchor: PropTypes.bool,
        /**
         * The content of the `Dropdown`. If a function is provided, it will be invoked with an
         * object containing `anchorHeight`, `anchorWidth`, `maxHeight`, `maxWidth`, and
         * `placement`.
         */
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        /**
         * An array of reasons for which this `Dropdown` should close.
         */
        closeReasons: PropTypes.arrayOf(PropTypes.oneOf(Dropdown.possibleCloseReasons)),
        /**
         * The default placement of the `Dropdown`. It might be rendered in a different direction
         * depending upon the space available and the `repositionMode`.
         */
        defaultPlacement: PropTypes.oneOf([
            'above',
            'below',
            'left',
            'right',
            'vertical',
            'horizontal',
        ]),
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * An array of reasons for which to set focus on the toggle. Only subset of `closeReasons`
         * will be honored. When Menu.Items open a Modal or other dialog, it may be necessary to
         * remove the 'contentClick' reason to allow focus to be passed to the dialog.
         */
        focusToggleReasons: PropTypes.arrayOf(PropTypes.oneOf(Dropdown.possibleCloseReasons)),
        /**
         * Inline or block element.
         * Setting inline to false will remove the dropdown fills the width of it's container.
         */
        inline: PropTypes.bool,
        /**
         * A callback function invoked with a data object containing the event (if applicable) and
         * a reason for the close request.
         */
        onRequestClose: PropTypes.func,
        /**
         * A callback function invoked with a data object containing the event. (The reason is
         * always toggleClick).
         */
        onRequestOpen: PropTypes.func,
        /**
         * If an open prop is provided, this component will behave as a
         * [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components).
         * This means that the consumer is responsible for handling the open/close state. If no
         * open prop is provided, the component will handle the open/close state internally.
         */
        open: PropTypes.bool,
        /**
         * See `repositionMode` on `Popover` for details.
         */
        repositionMode: PropTypes.oneOf(['none', 'flip', 'any']),
        /**
         * Keep focus within the Popover while open. Note, Menu handles it's own focus by default,
         * so this is only necessary when the popover contains other types of content.
         */
        retainFocus: PropTypes.bool,
        /**
         * The container with which the popover must scroll to stay aligned with the anchor.
         */
        scrollContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        /**
         * When true, the Popover will automatically take focus when 'open' changes to true.
         * Disable this for a Popover that has shows on hover, such as a tooltip.
         */
        takeFocus: PropTypes.bool,
        /**
         * A toggle, such as a button, must be a passed. `aria-haspopup`, `aria-expanded`, and
         * `aria-owns` attributes will be applied to the toggle to support accessibility.
         * Recommendation: The element should have a `focus` method to support keyboard navigation
         * and accessibility.
         */
        toggle: PropTypes.element.isRequired,
    };

    static defaultProps = {
        canCoverAnchor: true,
        closeReasons: Dropdown.possibleCloseReasons,
        defaultPlacement: 'below',
        elementRef() {},
        focusToggleReasons: ['contentClick', 'escapeKey', 'toggleClick'],
        inline: true,
        onRequestClose() {},
        onRequestOpen() {},
        retainFocus: false,
        repositionMode: 'flip',
        scrollContainer: 'window',
        takeFocus: true,
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            open: false,
            anchor: null,
        };
        this.controlledExternally = has(props, 'open');

        this.popoverId = createDOMID('popover');
        this.toggleId = createDOMID('toggle');
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'open')) {
            throw new Error(
                "Cannot change Dropdown from an uncontrolled component to a controlled one. Prop 'open' is not valid in subsequent renders if not provided in the initial render"
            );
        }
    }

    isOpen() {
        return this.isControlled() ? this.props.open : this.state.open;
    }

    handleContainerMount = el => {
        this.setState({
            anchor: el,
        });
        this.props.elementRef(el);
    };

    handleToggleClick = event => {
        if (this.props.toggle.props.onClick) {
            this.props.toggle.props.onClick(event);
        }
        if (this.isOpen()) {
            this.handleRequestClose({
                reason: 'toggleClick',
                event,
            });
        } else {
            this.props.onRequestOpen(event, { reason: 'toggleClick' });

            if (!this.isControlled()) {
                this.setState({
                    open: true,
                });
            }
        }
    };

    handleRequestClose = info => {
        const { reason, event } = info;
        const { closeReasons, focusToggleReasons, onRequestClose } = this.props;

        if (reason === 'clickAway') {
            let el = event.target;
            const toggleId = this.props.toggle.props.id || this.toggleId;

            while (el) {
                // Ignore clicks on toggle.
                if (el.id === toggleId) {
                    return;
                }
                el = el.parentNode;
            }
        }

        if (this.isOpen() && includes(closeReasons, reason)) {
            if (includes(focusToggleReasons, reason)) {
                this.focus();
            }
            if (!this.isControlled()) {
                this.setState({
                    open: false,
                });
            }
            onRequestClose(info);
        }
    };

    handleContentClick = event => {
        this.handleRequestClose({
            reason: 'contentClick',
            event,
        });
    };

    /**
     * Place focus on the toggle.
     */
    focus() {
        if (this.toggle && this.toggle.focus) {
            this.toggle.focus();
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    renderToggle() {
        return cloneElement(this.props.toggle, {
            onClick: this.handleToggleClick,
            style: extend({ minWidth: '100%' }, this.props.toggle.props.style),
            ref: c => (this.toggle = c),
            'aria-haspopup': true,
            'aria-owns': this.popoverId,
            'aria-expanded': this.isOpen(),
            'data-test': this.props.toggle.props['data-test'] || 'toggle',
            id: this.props.toggle.props.id || this.toggleId,
        });
    }

    render() {
        const {
            canCoverAnchor,
            children,
            closeReasons,
            defaultPlacement,
            inline,
            repositionMode,
            retainFocus,
            scrollContainer,
            takeFocus,
        } = this.props;
        const { anchor } = this.state;
        const { handleRequestClose, handleContentClick } = this;
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <StyledBox
                elementRef={this.handleContainerMount}
                data-test="dropdown"
                data-test-popover-id={this.popoverId}
                inline={inline}
                {...omit(this.props, keys(Dropdown.propTypes))}
            >
                {this.renderToggle()}
                <Popover
                    open={!!anchor && this.isOpen()}
                    autoCloseWhenOffScreen={includes(closeReasons, 'offScreen')}
                    anchor={anchor}
                    appearance="light"
                    canCoverAnchor={canCoverAnchor}
                    retainFocus={retainFocus}
                    defaultPlacement={defaultPlacement}
                    onRequestClose={handleRequestClose}
                    repositionMode={repositionMode}
                    scrollContainer={scrollContainer}
                    id={this.popoverId}
                    aria-labelledby={this.props.toggle.props.id || this.toggleId}
                    takeFocus={takeFocus}
                >
                    {isFunction(children) ? (
                        (...args) => <div onClick={handleContentClick}>{children(...args)}</div>
                    ) : (
                        <div onClick={handleContentClick}>{children}</div>
                    )}
                </Popover>
            </StyledBox>
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
}

export default Dropdown;
