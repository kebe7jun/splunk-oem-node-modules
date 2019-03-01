import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import { omit } from 'lodash';
import { _ } from '@splunk/ui-utils/i18n';
import { keycode } from '@splunk/ui-utils/keyboard';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import Caret from '@splunk/react-icons/Caret';
import Sort from '@splunk/react-icons/Sort';
import SortedDown from '@splunk/react-icons/SortedDown';
import SortedUp from '@splunk/react-icons/SortedUp';
import { getStyled } from '@splunk/react-ui/Themes';

import './StyleHeadInner';

const {
    Styled,
    StyledResize,
    StyledLabel,
    StyledSortIcon,
    StyledMenuIcon,
    StyledDragContainer,
    StyledDrag,
} = getStyled('Table.HeadInner');

class HeadInner extends Component {
    static propTypes = {
        align: PropTypes.oneOf(['left', 'center', 'right']),
        columnId: PropTypes.any,
        id: PropTypes.string,
        index: PropTypes.number,
        isMenu: PropTypes.bool,
        label: PropTypes.any,
        onAutosizeColumn: PropTypes.func,
        onDragStart: PropTypes.func,
        // eslint-disable-next-line consistent-return
        onRequestResize: props => {
            if (props.onRequestResize && !props.truncate) {
                return new Error(
                    'Head cells do not support truncate=false with resizable columns.'
                );
            }
        },
        onDragEnd: PropTypes.func,
        resizable: PropTypes.bool,
        sortDir: PropTypes.string,
        truncate: PropTypes.bool,
        width: PropTypes.number,
    };

    static defaultProps = {
        align: 'left',
        isMenu: false,
        resizable: true,
        truncate: true,
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            resizing: false,
            isDragging: false,
            showGuideline: 'none',
            open: false,
        };
    }

    componentWillUnmount() {
        this.cleanupDrag();
    }

    handleMount = el => {
        this.el = el;
    };

    handleResizeKeyDown = e => {
        const { index, columnId, id } = this.props;

        if (keycode(e) === 'left') {
            const newWidth = Math.max(this.props.width - 10, 20);
            this.props.onRequestResize(e, { index, columnId, id, width: newWidth });
        }
        if (keycode(e) === 'right') {
            const newWidth = this.props.width + 10;
            this.props.onRequestResize(e, { index, columnId, id, width: newWidth });
        }
    };

    handleStartResize = e => {
        e.preventDefault(); // prevent text selection
        this.setState({
            startClientX: e.clientX,
            startWidth: this.props.width,
            resizing: true,
        });
    };

    handleResize = e => {
        const { startClientX, startWidth } = this.state;
        const { index, columnId, id } = this.props;

        const change = startClientX - e.clientX;
        const width = Math.max(startWidth - change, 16);
        this.props.onRequestResize(e, { index, columnId, id, width });
    };

    handleEndResize = () => {
        this.setState({
            resizing: false,
        });
    };

    handleDragStart = e => {
        if (e.dataTransfer.setDragImage) {
            // not supported in IE11
            const rect = this.el.parentElement.getBoundingClientRect();

            this.cloneEl = this.el.cloneNode(true);
            this.cloneEl.style.width = `${rect.width}px`;
            this.cloneEl.style.height = `${rect.height}px`;
            this.cloneEl.setAttribute('data-helper', 'true');
            document.body.appendChild(this.cloneEl);

            e.dataTransfer.setDragImage(this.cloneEl, e.clientX - rect.left, e.clientY - rect.top);
            this.setState({ isDragging: true });
        }
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', this.el.textContent); // Required for Firefox

        this.props.onDragStart(this.props.index, this.props.columnId);
    };

    handleDragEnd = () => {
        this.cleanupDrag();
        this.setState({ isDragging: false });
        this.props.onDragEnd();
    };

    handleAutosizeColumn = e => {
        const { index, columnId } = this.props;
        this.props.onAutosizeColumn(e, { index, columnId });
    };

    handleDoubleClick = e => {
        const { index, columnId } = this.props;
        this.props.onAutosizeColumn(e, { index, columnId });
    };

    cleanupDrag() {
        if (this.cloneEl) {
            if (this.cloneEl.remove) {
                this.cloneEl.remove();
            } else {
                this.cloneEl.parentNode.removeChild(this.cloneEl); // IE
            }
            this.cloneEl = null;
        }
    }

    render() {
        const {
            align,
            label,
            isMenu,
            onDragStart,
            onRequestResize,
            resizable,
            sortDir,
            truncate,
        } = this.props;

        const draggable = !!onDragStart;
        return (
            <Styled
                draggable={draggable || undefined}
                onDragStart={draggable ? this.handleDragStart : undefined}
                onDragEnd={draggable ? this.handleDragEnd : undefined}
                innerRef={this.handleMount}
                data-text-align={align}
                data-draggable={draggable || undefined}
                data-clickable={draggable || sortDir || isMenu || undefined}
                data-dragging={this.state.isDragging || undefined}
                {...omit(this.props, Object.keys(HeadInner.propTypes))}
            >
                {this.state.resizing && (
                    <EventListener
                        target="window"
                        onMouseUp={this.handleEndResize}
                        onMouseMove={this.handleResize}
                    />
                )}
                {onRequestResize &&
                    resizable && (
                        <StyledResize
                            onMouseDown={this.handleStartResize}
                            onDoubleClick={this.handleDoubleClick}
                            onKeyDown={this.handleResizeKeyDown}
                            data-test="resize"
                        />
                    )}
                {draggable && (
                    <StyledDragContainer>
                        <StyledDrag>
                            <ScreenReaderContent>
                                {_('Press left or right arrow key to reorder the columns.')}
                            </ScreenReaderContent>
                        </StyledDrag>
                    </StyledDragContainer>
                )}
                <StyledLabel
                    data-sortable={sortDir || undefined}
                    data-text-align={align}
                    data-truncate={truncate || undefined}
                    data-fill={isMenu || undefined}
                >
                    {label}
                    {sortDir && (
                        <StyledSortIcon data-sorted={sortDir !== 'none' || undefined}>
                            {sortDir === 'none' && <Sort />}
                            {sortDir === 'asc' && <SortedUp />}
                            {sortDir === 'desc' && <SortedDown />}
                        </StyledSortIcon>
                    )}
                </StyledLabel>

                {isMenu && (
                    <StyledMenuIcon>
                        <Caret screenReaderText={null} size={0.5} />
                    </StyledMenuIcon>
                )}
            </Styled>
        );
    }
}

export default HeadInner;
