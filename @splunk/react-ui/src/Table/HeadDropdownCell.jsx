import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { includes, isFinite, isFunction, merge, omit } from 'lodash';
import { keycode } from '@splunk/ui-utils/keyboard';
import { createDOMID } from '@splunk/ui-utils/id';
import Popover from '@splunk/react-ui/Popover';
import { getStyled } from '@splunk/react-ui/Themes';

import HeadInner from './HeadInner';
import './StyleHeadCell';

const { Styled, StyledGuideLine } = getStyled('Table.HeadCell');

class HeadDropdownCell extends Component {
    static splunkUiType = 'Table.HeadDropdownCell';

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
        /** Align the text in the label. */
        align: PropTypes.oneOf(['left', 'center', 'right']),
        /**
         * If there is not enough room to render the `Popover` in a direction, this option
         * enables it to be rendered over the Head.
         */
        canCoverHead: PropTypes.bool,
        /** @private. */
        children: PropTypes.node.isRequired,
        /**
         * An array of reasons for which this `Popover` should close.
         */
        closeReasons: PropTypes.arrayOf(PropTypes.oneOf(HeadDropdownCell.possibleCloseReasons)),
        /**
         * An id that will be returned in the draggable, open, close and resize events.
         */
        columnId: PropTypes.any,
        /**
         * The default placement of the `Popover`. It might be rendered in a different direction
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
        focusToggleReasons: PropTypes.arrayOf(
            PropTypes.oneOf(HeadDropdownCell.possibleCloseReasons)
        ),
        id: PropTypes.string,

        /** @private The index of the cell, skipping the info column. */
        index: PropTypes.number,
        /**
         * The label on the heading, which may simply be text or may contain an element with
         * icons or other markup.
         */
        label: PropTypes.any,
        /** @private. */
        onAutosizeColumn: PropTypes.func,
        /** @private. */
        onDragStart: PropTypes.func,
        /**
         * @private. This will be passed through, and will work as expected.
         */
        onKeyDown: PropTypes.func,
        /**
         * A callback function invoked with a data object containing the event (if applicable) and
         * a reason for the close request.
         */
        onRequestClose: PropTypes.func,
        /** @private. */
        onRequestMoveColumn: PropTypes.func,
        /**
         * A callback function invoked with a data object containing the event. (The reason is
         * always toggleClick).
         */
        onRequestOpen: PropTypes.func,
        /** @private. */
        // eslint-disable-next-line consistent-return
        onRequestResize: props => {
            if (props.onRequestResize && !props.truncate) {
                return new Error(
                    'HeadDropdownCell does not support truncate=false with resizable columns.'
                );
            }
        },
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
         * Allow the user to resize the column when onRequestResize is passed to the `Table`. Set
         * resizable to false to prevent some columns for resizing.
         */
        resizable: PropTypes.bool,
        /**
         * Keep focus within the Popover while open. Note, Menu handles it's own focus by default,
         * so this is only necessary when the popover contains other types of content.
         */
        retainFocus: PropTypes.bool,
        /**
         * The container with which the popover must scroll to stay aligned with the Head.
         */
        scrollContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        /** @private. */
        showGuideline: PropTypes.oneOf(['none', 'before', 'after']),
        /** @private. */
        style: PropTypes.object,
        /**
         * When true, the Popover will automatically take focus when 'open' changes to true.
         * Disable this for a Popover that has shows on hover, such as a tooltip.
         */
        takeFocus: PropTypes.bool,
        /**
         * Truncate the text in the label. `truncate=false` is not compatible with `Table`'s
         * `onRequestResize`.
         */
        truncate: PropTypes.bool,
        /**
         * @private
         * Used internally to suppress focus when this `HeadDropdownCell` is superseded by one in an
         * overlaid `HeadTable` for user interactions.
         */
        visible: PropTypes.bool,
        /**
         * The width of the column in pixels.
         */
        width: PropTypes.number,
    };

    static defaultProps = {
        align: 'left',
        canCoverHead: true,
        closeReasons: HeadDropdownCell.possibleCloseReasons,
        defaultPlacement: 'below',
        elementRef() {},
        focusToggleReasons: ['contentClick', 'escapeKey', 'toggleClick'],
        onKeyDown() {},
        onRequestClose() {},
        onRequestOpen() {},
        resizable: true,
        retainFocus: false,
        repositionMode: 'flip',
        scrollContainer: 'window',
        takeFocus: true,
        truncate: true,
        visible: true,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            showGuideline: 'none',
            open: false,
        };

        this.popoverId = createDOMID('popover');
        this.cellId = createDOMID('cellId');
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.visible && this.props.visible) {
            this.handleRequestClose({ reason: 'offScreen' });
        }
    }

    /**
     * Place focus on the toggle.
     */
    focus() {
        this.state.el.focus();
    }

    handleMount = el => {
        this.setState({ el });
        this.props.elementRef(el);
    };

    isOpen() {
        return this.isControlled() ? this.props.open : this.state.open;
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleRequestClose = ({ reason, event }) => {
        const { closeReasons, columnId, focusToggleReasons, index, onRequestClose } = this.props;

        if (reason === 'clickAway') {
            let el = event.target;

            while (el) {
                // Ignore clicks on toggle.
                if (el === this.state.el) {
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
            onRequestClose(event, { index, reason, columnId });
        }
    };

    handleClick = e => {
        const { columnId, index } = this.props;

        // ignore clicks on the resize handle
        if (e.target.getAttribute('data-test') === 'resize') {
            return;
        }

        this.setState({
            clientX: e.clientX || undefined,
        });

        if (this.isOpen()) {
            this.handleRequestClose({
                reason: 'toggleClick',
                event: e,
            });
        } else {
            this.props.onRequestOpen(e, {
                reason: 'toggleClick',
                columnId,
                index,
            });

            if (!this.isControlled()) {
                this.setState({
                    open: true,
                });
            }
        }
    };

    handleKeyDown = e => {
        const { columnId, index, onKeyDown, onRequestMoveColumn } = this.props;

        if (e.target.getAttribute('data-test') !== 'resize') {
            if (keycode(e) === 'enter') {
                this.handleClick(e);
            } else if (keycode(e) === 'left' && onRequestMoveColumn && index > 0) {
                onRequestMoveColumn({
                    fromIndex: index,
                    toIndex: index - 1,
                    columnId,
                });
            } else if (keycode(e) === 'right' && onRequestMoveColumn) {
                onRequestMoveColumn({
                    fromIndex: index,
                    toIndex: index + 1,
                    columnId,
                });
            }
        }
        if (onKeyDown) {
            onKeyDown(e, { index, columnId });
        }
    };

    handleContentClick = event => {
        this.handleRequestClose({
            reason: 'contentClick',
            event,
        });
    };

    handleDragStart = (index, columnId) => {
        this.setState({ isDragging: true });
        this.props.onDragStart(index, columnId);
    };

    handleDragEnd = () => {
        this.setState({ isDragging: false });
    };

    render() {
        const {
            align,
            visible,
            canCoverHead,
            children,
            columnId,
            id,
            index,
            label,
            onDragStart,
            onAutosizeColumn,
            onRequestResize,
            resizable,
            showGuideline,
            style,
            truncate,
            width,
            closeReasons,
            retainFocus,
            defaultPlacement,
            repositionMode,
            scrollContainer,
            takeFocus,
        } = this.props;

        const { el, clientX } = this.state;
        const cellId = id || this.cellId;

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <Styled
                style={merge(style, { width })}
                data-test="head-cell"
                data-dragging={this.state.isDragging || undefined}
                id={visible ? cellId : undefined}
                tabIndex={visible && 0}
                innerRef={this.handleMount}
                {...omit(this.props, Object.keys(HeadDropdownCell.propTypes))}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
                aria-haspopup
                aria-owns={this.popoverId}
                aria-expanded={this.isOpen()}
            >
                <HeadInner
                    label={label}
                    align={align}
                    columnId={columnId}
                    id={id}
                    index={index}
                    isMenu
                    resizable={visible && resizable}
                    onDragStart={onDragStart && this.handleDragStart}
                    onDragEnd={onDragStart && this.handleDragEnd}
                    onAutosizeColumn={onAutosizeColumn}
                    onRequestResize={onRequestResize}
                    truncate={truncate}
                    width={width}
                />
                {showGuideline !== 'none' && <StyledGuideLine data-position={showGuideline} />}
                <Popover
                    open={!!el && this.isOpen()}
                    autoCloseWhenOffScreen={includes(closeReasons, 'offScreen')}
                    anchor={el}
                    appearance="light"
                    canCoverAnchor={canCoverHead}
                    retainFocus={retainFocus}
                    defaultPlacement={defaultPlacement}
                    onRequestClose={this.handleRequestClose}
                    repositionMode={repositionMode}
                    scrollContainer={scrollContainer}
                    id={this.popoverId}
                    aria-labelledby={id || this.cellId}
                    takeFocus={takeFocus}
                    pointTo={
                        isFinite(clientX)
                            ? { x: clientX - (!!el && el.getBoundingClientRect().left) }
                            : undefined
                    }
                >
                    {isFunction(children) ? (
                        (...args) => (
                            <div onClick={this.handleContentClick}>{children(...args)}</div>
                        )
                    ) : (
                        <div onClick={this.handleContentClick}>{children}</div>
                    )}
                </Popover>
            </Styled>
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
}

export default HeadDropdownCell;
