import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isString, merge, omit } from 'lodash';
import { keycode } from '@splunk/ui-utils/keyboard';
import { getStyled } from '@splunk/react-ui/Themes';

import HeadInner from './HeadInner';
import './StyleHeadCell';

const { Styled, StyledGuideLine } = getStyled('Table.HeadCell');

class HeadCell extends Component {
    static splunkUiType = 'Table.HeadCell';

    static propTypes = {
        /** Align the text in the label. */
        align: PropTypes.oneOf(['left', 'center', 'right']),
        /** @private. */
        children: PropTypes.node,
        /**
         * An id that will be returned in the draggable, sort and resize events.
         */
        columnId: PropTypes.any,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** @private */
        id: PropTypes.string,
        /** @private The index of the cell, skipping the info column. */
        index: PropTypes.number,
        /** @private. */
        onAutosizeColumn: PropTypes.func,
        /**
         * A callback invoked when this head cell is clicked. If provided, this HeadCell will be
         * sortable and render the appropriate user interface.
         */
        onSort: PropTypes.func,
        /** @private. */
        onDragStart: PropTypes.func,
        /**
         * @private. This will be passed through, and will work as expected.
         */
        onKeyDown: PropTypes.func,
        /** @private. */
        onClick: PropTypes.func,
        /** @private. */
        onRequestMoveColumn: PropTypes.func,
        /** @private. */
        // eslint-disable-next-line consistent-return
        onRequestResize: PropTypes.func,
        /**
         * Allow the user to resize the column when onRequestResize is passed to the `Table`. Set
         * resizable to false to prevent some columns for resizing.
         */
        resizable: PropTypes.bool,
        /** @private. */
        showGuideline: PropTypes.oneOf(['none', 'before', 'after']),
        /**
         * The current sort direction of this column.
         */
        sortDir: PropTypes.oneOf(['asc', 'desc', 'none']),
        /**
         * The `sortKey` will be passed in the data object to the `onSort` callback, if provided.
         */
        sortKey: PropTypes.string,
        /** @private */
        style: PropTypes.object,
        /**
         * Truncate the text in the label. `truncate=false` is not compatible with `Table`'s
         * `onRequestResize`.
         */
        truncate: PropTypes.bool,
        /**
         * @private
         * Used internally to suppress focus and id when this `HeadCell` is superseded by one in an
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
        visible: true,
        onClick() {},
        onKeyDown() {},
        sortDir: 'none',
        resizable: true,
        showGuideline: 'none',
        truncate: true,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            showGuideline: 'none',
            isDragging: false,
        };
    }

    handleClick = e => {
        // ignore clicks on the resize handle
        if (e.target.getAttribute('data-test') !== 'resize' && this.props.onSort) {
            const { sortKey, sortDir, id, index, columnId } = this.props;
            this.props.onSort(e, { sortKey, sortDir, id, columnId, index });
        }
        this.props.onClick();
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
            children,
            columnId,
            elementRef,
            id,
            index,
            onClick,
            onSort,
            onAutosizeColumn,
            onDragStart,
            onRequestResize,
            resizable,
            sortDir,
            showGuideline,
            style,
            truncate,
            width,
        } = this.props;

        const draggable = !!onDragStart;
        const hasOnClick = onClick !== HeadCell.defaultProps.onClick;

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <Styled
                style={merge(style, { width })}
                innerRef={elementRef}
                data-test="head-cell"
                data-test-label={isString(children) ? children : undefined}
                data-test-sort-dir={onSort && sortDir}
                id={visible ? id : undefined}
                onClick={onSort || hasOnClick ? this.handleClick : undefined}
                tabIndex={visible && (draggable || onSort || hasOnClick) ? 0 : undefined}
                data-dragging={this.state.isDragging || undefined}
                {...omit(this.props, Object.keys(HeadCell.propTypes))}
                onKeyDown={draggable || onSort || hasOnClick ? this.handleKeyDown : undefined}
            >
                <HeadInner
                    label={children}
                    align={align}
                    columnId={columnId}
                    id={id}
                    index={index}
                    resizable={visible && resizable}
                    onDragStart={onDragStart && this.handleDragStart}
                    onDragEnd={onDragStart && this.handleDragEnd}
                    onAutosizeColumn={onAutosizeColumn}
                    onRequestResize={onRequestResize}
                    sortDir={onSort && sortDir}
                    truncate={truncate}
                    width={width}
                />
                {showGuideline !== 'none' && <StyledGuideLine data-position={showGuideline} />}
            </Styled>
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
}

export default HeadCell;
