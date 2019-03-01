import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { findIndex, keys, map, omit } from 'lodash';
import Info from '@splunk/react-icons/Info';
import { getStyled } from '@splunk/react-ui/Themes';

import HeadCell from './HeadCell';
import Row from './Row';
import './Style';
import Toggle from './Toggle';

const { Styled } = getStyled('Table.Head');

class Head extends Component {
    static splunkUiType = 'Table.Head';

    static propTypes = {
        /**
         * `children` should be `Table.HeadCell`.
         */
        // eslint-disable-next-line consistent-return
        children: props => {
            if (props.onRequestResizeColumn) {
                const hasChildWithoutWidth = Children.toArray(props.children)
                    .filter(isValidElement)
                    .some(child => !child.props.width);

                if (hasChildWithoutWidth) {
                    return new Error(
                        'Every Table.HeadCell must have a width prop when using onRequestResizeColumn.'
                    );
                }
            }
        },
        /** @private. */
        dragPosition: PropTypes.number,
        /** @private. */
        dragIndex: PropTypes.number,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** @private. */
        hasInfoColumn: PropTypes.bool,
        /** @private. */
        onAutosizeColumn: PropTypes.func,
        /** @private. */
        onDragStart: PropTypes.func,
        /** @private. */
        onRequestMoveColumn: PropTypes.func,
        /** @private. */
        onRequestResizeColumn: PropTypes.func,
        /** @private. */
        onRequestToggleAllRows: PropTypes.func,
        /** @private. */
        rowSelection: PropTypes.oneOf(['all', 'some', 'none']),
    };

    static defaultProps = {
        elementRef() {},
    };

    constructor(props) {
        super(props);

        this.state = {
            dragColumnId: undefined, // the item being reordered
        };
    }

    componentWillUnmount() {
        this.cleanupDrag();
    }

    onRequestMoveColumn = ({ columnId, fromIndex, toIndex }) => {
        if (toIndex < this.props.children.length) {
            // HeadCell never requests less than zero
            this.props.onRequestMoveColumn({
                fromIndex,
                toIndex,
                columnId,
            });
        }
    };

    getCellWidths() {
        const headRowCells = this.el.firstElementChild.children;
        return map(headRowCells, el => {
            const computedStyle = window.getComputedStyle(el);
            return (
                el.clientWidth -
                parseFloat(computedStyle.getPropertyValue('padding-right')) -
                parseFloat(computedStyle.getPropertyValue('padding-left'))
            );
        });
    }

    getClientHeight() {
        return this.el.clientHeight;
    }

    getEl() {
        return this.el;
    }

    handleMount = el => {
        this.el = el;
        this.props.elementRef(el);
    };

    cleanupDrag() {
        window.removeEventListener('dragend', this.handleDragEnd);
        this.cells = null;
    }

    calculateGuideIndex() {
        const { dragIndex, dragPosition, hasInfoColumn } = this.props;

        if (this.props.dragPosition === null || !this.el) {
            return -1;
        }

        this.cells = Array.prototype.slice
            .call(this.el.firstElementChild.children)
            .slice(hasInfoColumn ? 1 : 0);

        const overIndex = findIndex(this.cells, cell => {
            const rect = cell.getBoundingClientRect();
            return dragPosition > rect.left && dragPosition < rect.right;
        });

        if (overIndex === -1) {
            // must be too far left or right;
            const rect = this.el.getBoundingClientRect();
            return dragPosition < rect.left ? 0 : this.cells.length;
        }

        if (overIndex > dragIndex) {
            return overIndex + 1;
        }
        return overIndex;
    }

    handleDragStart = (dragIndex, dragColumnId) => {
        this.setState({ dragColumnId });
        window.addEventListener('dragend', this.handleDragEnd);
        this.props.onDragStart({ dragIndex });
    };

    handleDragEnd = () => {
        const { dragColumnId } = this.state;
        const { dragIndex } = this.props;
        const guidelineIndex = this.calculateGuideIndex();

        // The new index is not necessarily the same as the guidelineIndex
        const toIndex = dragIndex < guidelineIndex ? guidelineIndex - 1 : guidelineIndex;

        if (dragIndex !== toIndex) {
            this.props.onRequestMoveColumn({
                fromIndex: dragIndex,
                toIndex,
                columnId: dragColumnId,
            });
        }
        this.cleanupDrag();
    };

    render() {
        const {
            children,
            hasInfoColumn,
            onRequestMoveColumn,
            onRequestResizeColumn,
            onRequestToggleAllRows,
            rowSelection,
            onAutosizeColumn,
            ...otherProps
        } = this.props;
        const guidelineIndex = this.calculateGuideIndex();

        const clonedChildren = Children.toArray(children).map((child, index, original) => {
            let showGuideline = 'none';

            if (guidelineIndex === original.length && index + 1 === original.length) {
                showGuideline = 'after';
            } else if (guidelineIndex === index) {
                showGuideline = 'before';
            }

            return cloneElement(child, {
                index,
                showGuideline,
                onRequestResize: onRequestResizeColumn,
                onDragStart: onRequestMoveColumn && this.handleDragStart,
                onRequestMoveColumn: onRequestMoveColumn && this.onRequestMoveColumn,
                onAutosizeColumn,
                key: child.key || child.props.columnId || index,
            });
        });

        const toggleStateMap = {
            all: true,
            none: false,
            some: 'some',
        };
        const toggleState = toggleStateMap[rowSelection];

        return (
            <Styled
                innerRef={this.handleMount}
                data-test="head"
                {...omit(otherProps, keys(Head.propTypes))}
            >
                <Row>
                    {onRequestToggleAllRows && (
                        <HeadCell
                            key="toggleAll"
                            data-test="toggle-all"
                            width={42}
                            resizable={false}
                            onClick={onRequestToggleAllRows}
                        >
                            <Toggle selected={toggleState} allRows />
                        </HeadCell>
                    )}
                    {hasInfoColumn && (
                        <HeadCell
                            key="more_info_head_cell"
                            data-test="more-info-head-cell"
                            align="center"
                            width={32}
                            resizable={false}
                        >
                            <Info />
                        </HeadCell>
                    )}
                    {clonedChildren}
                </Row>
            </Styled>
        );
    }
}

export default Head;
