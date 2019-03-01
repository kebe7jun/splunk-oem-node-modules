import React, { cloneElement, Children, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import { debounce, forEach, has, indexOf, isNumber, pick, omit, throttle } from 'lodash';
import { keycode } from '@splunk/ui-utils/keyboard';
import { getStyled } from '@splunk/react-ui/Themes';

// Exposed as static members of the Table class
import Body from './Body';
import Cell from './Cell';
import Head from './Head';
import HeadCell from './HeadCell';
import HeadDropdownCell from './HeadDropdownCell';
import Row from './Row';

// Internal Helper Modules
import HeadTable from './HeadTable';

import './Style';

const {
    Styled,
    StyledTableContainer,
    StyledTable,
    StyledDockedScrollbar,
    StyledDockedScrollbarContent,
} = getStyled('Table');

class Table extends Component {
    static propTypes = {
        /**
         * `children` should be `Table.Head`, or `Table.Body`.
         */
        children: PropTypes.node,
        /**
         * Sets the offset from the top of the window. Only applies when headType
         * is 'docked'
         */
        dockOffset: PropTypes.number,
        /**
         * Docks the horizontal scroll bar at the bottom of the window when the bottom of the
         * table is below the viewport.
         */
        dockScrollBar: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Sets the table head type:
         *
         *  * `docked` - The head will dock against the window
         *  * `fixed` - The head will be fixed in the table. The table can scroll
         *          independently from the head.
         *  * `inline` - The head is not fixed, but will scroll with the rest of
         *          rest of the table.
         */
        headType: PropTypes.oneOf(['docked', 'fixed', 'inline']),
        /**
         * Style specification for the inner container (which is the scrolling container).
         */
        innerStyle: PropTypes.object,
        /**
         * Sets the left padding on the first cell and the right padding on the last cell:
         *
         * * `page` - Typically used when the table is the full width of the page.
         *   The padding is larger.
         * * `panel` - Smaller padding when the table is placed in a Dashboard panel.
         */
        firstLastPadding: PropTypes.oneOf(['page', 'panel']),
        /**
         * Callback invoked when a user clicks the row selection toggle in the header.
         */
        onRequestToggleAllRows: PropTypes.func,
        /**
         * Callback invoked when a scoll event occurs on the inner (scrolling) container.
         */
        onScroll: PropTypes.func,
        /**
         * Style specification for the outer container.
         */
        outerStyle: PropTypes.object,
        /**
         * Adds a column to the table with an expansion button for each row that has expansion
         * content. Supported values:
         *
         * * `single` - Only one row can be expanded at a time. If another expansion button is
         * clicked, the currently expanded row will close and the new one will open.
         * * `multi` - Allows mulitple rows to be expanded at the same time.
         * * `none` - No row expansion (default).
         */
        rowExpansion: PropTypes.oneOf(['single', 'multi', 'none']),
        /**
         * When an `onRequestToggleAllRows` handler is defined, this prop determines the appearance
         * of the toggle all rows button.
         */
        rowSelection: PropTypes.oneOf(['all', 'some', 'none']),
        /**
         * Alternate rows are given a darker background to improve readability.
         */
        stripeRows: PropTypes.bool,
        /** @private */
        // eslint-disable-next-line consistent-return
        style: props => {
            if (has(props, 'style')) {
                return new Error(
                    "Table does not support the 'style' prop. Use 'innerStyle', 'outerStyle', or 'tableStyle' instead."
                    // eslint-disable-next-line max-len
                );
            }
        },
        /**
         * The style attribute for the table. This is primarily useful for setting the table-layout
         * property.
         */
        tableStyle: PropTypes.object,
        /**
         * An event handler for handle the re order action of Table. The function is passed an
         * options object with `fromIndex` and `toIndex`.
         */
        onRequestMoveColumn: PropTypes.func,
        /**
         * An event handler for resize of columns. The function is passed an event and an
         * options object with `columnId`, `index`, and `width`.
         */
        onRequestResizeColumn: PropTypes.func,
    };

    static defaultProps = {
        dockOffset: 0,
        headType: 'inline',
        innerStyle: {},
        firstLastPadding: 'page',
        onScroll() {},
        outerStyle: {},
        rowExpansion: 'none',
        rowSelection: 'none',
    };

    static Head = Head;
    static HeadCell = HeadCell;
    static HeadDropdownCell = HeadDropdownCell;
    static Body = Body;
    static Row = Row;
    static Cell = Cell;

    /**
     * @private
     * @private
     * Returns and object describing the focus state of the provided `head`.
     * @param head - A reference to a mounted `Head` component.
     * @returns {Object} focusState - An object containing a target (either 'headCell' or
     * 'resizeButton') and an index.
     */
    // eslint-disable-next-line consistent-return
    static getHeadFocusState(head) {
        const headCells = head.getEl().children[0].children;
        const activeHeadCellIndex = indexOf(headCells, document.activeElement);
        if (activeHeadCellIndex > -1) {
            return {
                target: 'headCell',
                index: activeHeadCellIndex,
            };
        }
        const resizeButtons = head.getEl().querySelectorAll('[data-test=resize]');
        const activeResizeButtonIndex = indexOf(resizeButtons, document.activeElement);
        if (activeResizeButtonIndex > -1) {
            return {
                target: 'resizeButton',
                index: activeResizeButtonIndex,
            };
        }
    }

    static getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset,
        };
    }

    /**
     * @private
     * @private
     * Applies the provided `headFocusState` to the provided `head`.
     * @param head - A reference to a mounted `Head` component.
     * @param {Object} headFocusState
     * @param {String} headFocusState.target - Focus can be applied to a 'headCell' or a
     * 'resizeButton'.
     * @param {Number} headFocusState.index - The index of the element to set focus on.
     */
    static applyHeadFocusState(head, { target, index }) {
        if (__DEV__) {
            if (!['headCell', 'resizeButton'].includes(target)) {
                throw new Error(`Invalid target ${target} provided to Table.applyHeadFocusState.`);
            }
            if (!isNumber(index) || index < 0) {
                throw new Error(`Invalid index ${index} provided to Table.applyHeadFocusState.`);
            }
        }
        let targetEl;
        if (target === 'headCell') {
            targetEl = head.getEl().children[0].children[index];
        } else if (target === 'resizeButton') {
            targetEl = head.getEl().querySelectorAll('[data-test=resize]')[index];
        }

        if (__DEV__ && !targetEl) {
            throw new Error('Target dom element not found in applyHeadFocusState.');
        }
        if (targetEl) {
            targetEl.focus();
        }
    }

    constructor(...args) {
        super(...args);
        this.handleScroll = throttle(this.updateDockedHeadState, 0);
        this.handleResize = throttle(this.updateDockedHeadState, 50);
        this.updateDragPositon = throttle(this.updateDragPositon, 100, { trailing: false });
        this.componentDidMount = this.updateDockedHeadState;
        this.componentWillReceiveProps = debounce(this.updateDockedHeadState);
        this.state = {
            dragPosition: null,
        };
    }

    componentWillUnmount() {
        this.handleScroll.cancel();
        this.handleResize.cancel();
        this.componentWillReceiveProps.cancel();
        this.cleanupDrag();
    }

    createHead(base) {
        const {
            onRequestMoveColumn,
            onRequestResizeColumn,
            onRequestToggleAllRows,
            rowExpansion,
            rowSelection,
        } = this.props;
        const { dragIndex } = this.state;
        const headCells = Children.toArray(base.props.children).filter(isValidElement);

        return cloneElement(
            base,
            {
                ref: this.handleHeadMount,
                onRequestMoveColumn,
                onRequestResizeColumn,
                onDragStart: onRequestMoveColumn && this.handleDragStart,
                dragIndex,
                dragPosition: this.state.dragPosition,
                hasInfoColumn: rowExpansion !== 'none',
                onAutosizeColumn: this.handleAutosizeColumn,
                onRequestToggleAllRows,
                rowSelection,
            },
            headCells
        );
    }

    createBody(base) {
        const bodyProps = pick(this.props, 'stripeRows', 'rowExpansion', 'onRequestMoveColumn');
        return cloneElement(base, bodyProps);
    }

    isInline() {
        return this.props.headType === 'inline';
    }

    headerIsDocked() {
        return this.props.headType === 'docked';
    }

    isFixed() {
        return this.props.headType === 'fixed';
    }

    showDockedHeader() {
        if (!this.headerIsDocked() || !this.table || !this.head) {
            return false;
        }
        const { dockOffset } = this.props;
        const tableTop = Table.getOffset(this.tableContainer).top;
        return window.pageYOffset >= tableTop - dockOffset;
    }

    showDockedScrollBar() {
        if (!this.props.dockScrollBar || !this.table) {
            return false;
        }
        const rect = this.tableContainer.getBoundingClientRect();

        const show = rect.bottom > window.innerHeight && rect.top < window.innerHeight;
        return show;
    }

    showFixed() {
        return this.head && this.isFixed();
    }

    updateDockedHeadState = () => {
        if (this.isInline()) {
            return;
        }
        const { tableContainer, head, table } = this;
        const { dockOffset } = this.props;

        const cellWidths = head.getCellWidths();
        const headHeight = head.getClientHeight();
        const tableTopWrtWindow =
            Table.getOffset(table).top - window.pageYOffset - headHeight + table.offsetHeight;
        const top = Math.min(tableTopWrtWindow, dockOffset);

        this.setState({
            width: tableContainer.clientWidth,
            tableWidth: table.clientWidth,
            cellWidths,
            top,
        });
    };

    handleContainerScroll = (...args) => {
        this.props.onScroll(...args);
        if (this.isFixed() || this.headerIsDocked()) {
            this.setState({
                horizontalOffset: -this.tableContainer.scrollLeft,
            });
        }
        if (this.dockedScrollBar && this.scrollSource !== 'dockedScrollBar') {
            this.scrollSource = 'container';
            this.dockedScrollBar.scrollLeft = this.tableContainer.scrollLeft;
        } else {
            this.scrollSource = '';
        }
    };

    handleDockedScrollBarScroll = () => {
        if (this.scrollSource !== 'container') {
            this.scrollSource = 'dockedScrollBar';
            this.tableContainer.scrollLeft = this.dockedScrollBar.scrollLeft;
        } else {
            this.scrollSource = '';
        }
    };

    handleDragStart = ({ dragIndex }) => {
        this.setState({ dragIndex });
        window.addEventListener('dragenter', this.handleDragEnter);
        window.addEventListener('dragover', this.handleDragOver);
        window.addEventListener('drop', this.handleDrop);
        window.addEventListener('dragend', this.handleDragEnd);
    };

    handleDragOver = e => {
        e.preventDefault(); // necessary for the drop event to fire
        e.dataTransfer.dropEffect = 'move';
        this.updateDragPositon(e.clientX);
    };

    handleDragEnter = e => {
        e.preventDefault(); // necessary for the drop event to fire
        this.setState({ dragPosition: e.clientX });
    };

    handleDragEnd = () => {
        this.setState({ dragPosition: null });
        this.cleanupDrag();
    };

    handleDrop = e => {
        e.preventDefault(); // necessary to prevent cell from animating to original position;
    };

    handleHeadMount = comp => {
        this.head = comp;
    };

    handleHeadTableMount = headTable => {
        if (headTable) {
            // On mount, focus the applicable docked head cell if a primary head cell was focused.
            if (this.headFocusState) {
                Table.applyHeadFocusState(headTable.getHead(), this.headFocusState);
                this.headFocusState = null;
            }
        } else {
            // On unmount, focus the applicable primary head cell if a docked head cell was focused.
            const focusState = Table.getHeadFocusState(this.headTable.getHead());
            if (focusState) {
                Table.applyHeadFocusState(this.head, focusState);
            }
        }
        this.headTable = headTable;
    };

    handleHeadTableElementMount = el => {
        this.headTableEl = el;
    };

    /* Shifting focus within the docked header can cause the element to scroll,
     * even though it's not a scrolling element and doesn't trigger a scroll event.
     * Here the scroll is shifted to the main table wrapper, which triggers the normal sync
     * handlers.
     */
    handleHeadTableKeyUp = e => {
        if (keycode(e) !== 'tab') {
            return;
        }
        const scrollAdjust = this.headTableEl.scrollLeft;

        if (scrollAdjust !== 0) {
            this.headTableEl.scrollLeft = 0;
            this.tableContainer.scrollLeft = this.tableContainer.scrollLeft + scrollAdjust;
        }
    };

    handleAutosizeColumn = (e, { index, columnId }) => {
        const offset = this.props.rowExpansion === 'none' ? 1 : 2;

        const cells = this.tableContainer.querySelectorAll(
            `thead th:nth-child(${index + offset}), tbody td:nth-child(${index + offset})`
        );
        const wrapper = document.createElement('div');
        // TODO: find a styled-components compliant way to do this
        wrapper.style.float = 'left';
        wrapper.style.position = 'fixed';
        wrapper.style.top = -100;
        wrapper.style.left = 0;
        wrapper.style.maxHeight = '10px';
        wrapper.style.overflow = 'hidden';

        forEach(cells, cell => {
            const clone = cell.cloneNode(true);
            clone.style.display = 'block';
            clone.style.width = 'auto';
            wrapper.appendChild(clone);
        });
        document.body.appendChild(wrapper);

        this.props.onRequestResizeColumn(e, { index, columnId, width: wrapper.clientWidth + 1 });

        wrapper.parentNode.removeChild(wrapper);
    };

    updateDragPositon(dragPosition) {
        this.setState({ dragPosition });
    }

    cleanupDrag() {
        window.removeEventListener('dragenter', this.handleDragEnter);
        window.removeEventListener('dragover', this.handleDragOver);
        window.removeEventListener('drop', this.handleDrop);
        window.removeEventListener('dragend', this.handleDragEnd);
        this.updateDragPositon.cancel(); // cancel throttle
    }

    renderHeadTable(tHead, isFixedColumn) {
        const showDockedHeader = this.showDockedHeader();
        if ((this.showFixed() || showDockedHeader) && this.state.cellWidths) {
            if (showDockedHeader) {
                // Save the current head focus state so that it can be applied to the docked version
                // after the `HeadTable` mounts.
                this.headFocusState = Table.getHeadFocusState(this.head);
            }
            return (
                <HeadTable
                    headType={this.props.headType}
                    tHead={tHead}
                    {...omit(this.state, 'dragPosition')}
                    tableStyle={this.props.tableStyle}
                    isFixedColumn={isFixedColumn}
                    data-padding={this.props.firstLastPadding}
                    ref={this.handleHeadTableMount}
                    onKeyUp={this.handleHeadTableKeyUp}
                    elementRef={this.handleHeadTableElementMount}
                    hasRowExpansion={this.props.rowExpansion !== 'none'}
                    hasRowSelection={this.props.rowSelection !== 'none'}
                />
            );
        }
        return false;
    }

    renderDockedScrollbar() {
        if (!this.showDockedScrollBar()) {
            return false;
        }
        let shiftPosition = 0;

        if (this.dockedScrollBar && this.head) {
            const availableSpace =
                window.innerHeight -
                this.table.getBoundingClientRect().top -
                this.head.getEl().offsetHeight;

            shiftPosition = Math.min(availableSpace - this.dockedScrollBar.offsetHeight, 0);
        }

        return (
            <StyledDockedScrollbar
                style={{ width: this.state.width, marginBottom: shiftPosition }}
                onScroll={this.handleDockedScrollBarScroll}
                data-test="docked-scroll-bar"
                innerRef={el => {
                    this.dockedScrollBar = el;
                }}
            >
                <StyledDockedScrollbarContent
                    style={{ width: this.state.tableWidth }}
                    data-test="docked-scroll-content"
                />
            </StyledDockedScrollbar>
        );
    }

    render() {
        const {
            children,
            elementRef,
            innerStyle,
            firstLastPadding,
            rowSelection,
            outerStyle,
            onRequestResizeColumn,
            onRequestToggleAllRows,
            tableStyle,
        } = this.props;

        let tHead;
        let tBody;
        let isFixedColumn = !!onRequestResizeColumn;

        Children.forEach(children, child => {
            const { splunkUiType } = child.type;
            if (splunkUiType === 'Table.Head') {
                tHead = this.createHead(child);

                if (!isFixedColumn) {
                    // if all the HeadCells are fixed width, then the table is fixed.
                    isFixedColumn = !Children.toArray(child.props.children)
                        .filter(isValidElement)
                        .some(th => !has(th.props, 'width'));
                }
            } else if (splunkUiType === 'Table.Body') {
                tBody = this.createBody(child);
            }
        });

        const headTable = this.renderHeadTable(tHead, isFixedColumn);
        // When a `headTable` is used, suppress focus interactions in the primary `Head`. Focus
        // interactions will be handled by the overlaid `headTable` instead.
        const headCells = Children.map(tHead.props.children, cell =>
            cloneElement(cell, {
                visible: !headTable,
            })
        );
        tHead = cloneElement(tHead, {}, headCells);

        return (
            <Styled
                data-test="table"
                innerRef={elementRef}
                style={outerStyle}
                data-test-row-selection={onRequestToggleAllRows ? rowSelection : undefined}
                {...omit(this.props, Object.keys(Table.propTypes))}
            >
                <EventListener
                    target="window"
                    onScroll={this.handleScroll}
                    onResize={this.handleResize}
                />
                {headTable}
                <StyledTableContainer
                    onScroll={this.handleContainerScroll}
                    innerRef={el => {
                        this.tableContainer = el;
                    }}
                    style={innerStyle}
                >
                    <StyledTable
                        innerRef={el => (this.table = el)}
                        data-test="main-table"
                        style={tableStyle}
                        data-fixed-column={isFixedColumn ? 'true' : undefined}
                        data-padding={firstLastPadding}
                    >
                        {tHead}
                        {tBody}
                    </StyledTable>
                </StyledTableContainer>
                {this.renderDockedScrollbar()}
            </Styled>
        );
    }
}
export default Table;
export { Head, HeadCell, HeadDropdownCell, Body, Row, Cell };
