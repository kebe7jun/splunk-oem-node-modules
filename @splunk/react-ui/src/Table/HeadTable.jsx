import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { extend, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled, StyledDockedContainer, StyledFixedContainer } = getStyled('Table.HeadTable');

/**
 * @private
 * HeadTable is an internal component that provides a detached table head that can
 * then be positioned in different ways outside of the main table.
 */
class HeadTable extends Component {
    static propTypes = {
        dragIndex: PropTypes.number,
        elementRef: PropTypes.func,
        tHead: PropTypes.element.isRequired,
        width: PropTypes.number.isRequired,
        tableWidth: PropTypes.number.isRequired,
        cellWidths: PropTypes.arrayOf(PropTypes.number).isRequired,
        top: PropTypes.number.isRequired,
        horizontalOffset: PropTypes.number,
        headType: PropTypes.oneOf(['docked', 'fixed']).isRequired,
        tableStyle: PropTypes.object,
        hasRowExpansion: PropTypes.bool,
        hasRowSelection: PropTypes.bool,
        isFixedColumn: PropTypes.bool,
        onRequestToggleAllRows: PropTypes.func,
        rowSelection: PropTypes.oneOf(['all', 'some', 'none']),
    };

    static defaultProps = {
        horizontalOffset: 0,
    };

    getHead() {
        return this.head;
    }

    handleHeadMount = head => {
        this.head = head;
    };

    render() {
        const {
            elementRef,
            tHead,
            hasRowExpansion,
            hasRowSelection,
            isFixedColumn,
            width,
            tableWidth,
            cellWidths,
            top,
            horizontalOffset,
            headType,
            tableStyle,
            ...otherProps
        } = this.props;

        const isDocked = headType === 'docked';
        const StyledContainer = isDocked ? StyledDockedContainer : StyledFixedContainer;

        let indexOffset = 0;
        if (hasRowExpansion || hasRowSelection) {
            indexOffset = 1;
        }
        if (hasRowExpansion && hasRowSelection) {
            indexOffset = 2;
        }

        // Set the widths of the head cells if not fixed column
        const cells = isFixedColumn
            ? Children.toArray(tHead.props.children) // ensure consistent keys
            : Children.toArray(tHead.props.children)
                  .filter(isValidElement)
                  .map((cell, i) =>
                      cloneElement(cell, {
                          style: extend({}, cell.props.style, {
                              width:
                                  cellWidths[
                                      hasRowExpansion || hasRowSelection ? i + indexOffset : i
                                  ],
                          }),
                      })
                  );
        const clonedTHead = cloneElement(
            tHead,
            {
                ref: this.handleHeadMount,
                'data-test': `${headType}-head`,
            },
            cells
        );

        return (
            <StyledContainer style={{ top, width }} innerRef={elementRef}>
                <Styled
                    data-test={`${headType}-head-table`}
                    style={extend({}, tableStyle, {
                        marginLeft: horizontalOffset,
                        width: isFixedColumn ? undefined : tableWidth,
                    })}
                    data-fixed-column={isFixedColumn ? 'true' : undefined}
                    {...omit(otherProps, 'dragIndex')}
                >
                    {clonedTHead}
                </Styled>
            </StyledContainer>
        );
    }
}

export default HeadTable;
