import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { _ } from '@splunk/ui-utils/i18n';
import Button from '@splunk/react-ui/Button';
import PlusIcon from '@splunk/react-icons/Plus';
import { keycode } from '@splunk/ui-utils/keyboard';
import { getStyled } from '@splunk/react-ui/Themes';

import UnsortableRow from './Row';
import './Style';

const { StyledBox, StyledHeader, StyledRows } = getStyled('FormRows');

const SortableList = SortableContainer(({ children }) => <StyledRows>{children}</StyledRows>);
const Row = SortableElement(UnsortableRow);

class FormRows extends Component {
    static propTypes = {
        /** Label on the Add Row Button. Ignored when menu prop is defined. */
        addLabel: PropTypes.string,
        /** @private */
        children: PropTypes.node,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** Header for the rows. */
        header: PropTypes.node,
        /** Replaces Add Row Button with custom content or controls. */
        menu: PropTypes.node,
        /** Callback when add button is clicked. */
        onRequestAdd: PropTypes.func,
        /** Callback when sort action completes. Omit this to make rows unsortable. */
        onRequestMove: PropTypes.func,
        /** Callback when remove button is clicked. */
        onRequestRemove: PropTypes.func,
    };

    static defaultProps = {
        addLabel: _('Add Row'),
        header: null,
        onRequestAdd() {},
        onRequestMove() {},
        onRequestRemove() {},
    };

    /**
     * Static function for adding a row.
     *
     * Example Use:
     *
     *      onRequestAdd() => {
     *          this.setState({
     *              items: FormRows.addRow(
     *                  <FormRows.Row
     *                      index={this.state.items.length}
     *                      key={createDOMID()}
     *                      onRequestRemove={this.handleRequestRemove}
     *                  >
     *                      <Text />
     *                  </FormRows.Row>,
     *                  this.state.items
     *              ),
     *          });
     *      };
     *
     * @param element Row element to add.
     * @param items Array of current FormRows to add to.
     * @return New array of FormRows with new Row added.
     */
    static addRow(element, items) {
        return items.concat(element);
    }

    /**
     * Static function for moving a row.
     *
     * Example Use:
     *
     *      onRequestMove({ fromIndex, toIndex }) => {
     *          this.setState({
     *              items: FormRows.moveRow(fromIndex, toIndex, this.state.items),
     *          });
     *      };
     *
     * @param fromIndex Current index of row to move.
     * @param toIndex New index to move row to.
     * @param items Array of current FormRows.
     * @return New array of FormRows arranged in new order.
     */
    static moveRow(fromIndex, toIndex, items) {
        const tempArray = items.filter((val, idx) => idx !== fromIndex);
        tempArray.splice(toIndex, 0, items[fromIndex]);
        return tempArray.map((item, index) => cloneElement(item, { index }));
    }

    /**
     * Static function for removing a row.
     *
     * Example Use:
     *
     *      onRequestRemove(e, { index }) => {
     *          this.setState({
     *              items: FormRows.removeRow(index, this.state.items),
     *          });
     *      };
     *
     * @param index Index of Row to delete.
     * @param items Array of current FormRows.
     * @return New array of FormRows with Row of given index deleted.
     */
    static removeRow(index, items) {
        return items
            .filter((val, idx) => idx !== index)
            .map((item, idx) => cloneElement(item, { index: idx }));
    }

    handleKeyDown = (e, { index }) => {
        if (e.currentTarget !== e.target) {
            return;
        }
        if (keycode(e) === 'up') {
            e.preventDefault();
            if (index > 0) {
                this.props.onRequestMove({
                    fromIndex: index,
                    toIndex: index - 1,
                });
            }
        } else if (keycode(e) === 'down') {
            e.preventDefault();
            if (index < this.props.children.length - 1) {
                this.props.onRequestMove({
                    fromIndex: index,
                    toIndex: index + 1,
                });
            }
        }
    };

    handleSortEnd = ({ oldIndex, newIndex }) => {
        this.props.onRequestMove({
            fromIndex: oldIndex,
            toIndex: newIndex,
        });
    };

    render() {
        const {
            addLabel,
            children,
            header,
            menu,
            onRequestAdd,
            onRequestMove,
            onRequestRemove,
            ...otherProps
        } = this.props;
        const sortable = onRequestMove !== FormRows.defaultProps.onRequestMove;
        const StyledHeaderComp = sortable ? StyledHeader : 'div';

        const clonedChildren = Children.toArray(children)
            .filter(isValidElement)
            .map(item =>
                cloneElement(item, {
                    onKeyDown: this.handleKeyDown,
                    rowIndex: item.props.index,
                    sortable,
                })
            );

        return (
            <StyledBox data-test="form-rows" {...otherProps}>
                {header && <StyledHeaderComp>{header}</StyledHeaderComp>}
                <SortableList
                    helperClass={'sorting'}
                    onSortEnd={this.handleSortEnd}
                    onRequestRemove={onRequestRemove}
                    sortable={sortable}
                    useDragHandle
                >
                    {clonedChildren}
                </SortableList>
                {menu || (
                    <Button
                        appearance="pill"
                        data-test="add-row"
                        icon={<PlusIcon />}
                        label={addLabel}
                        onClick={onRequestAdd}
                    />
                )}
            </StyledBox>
        );
    }
}

FormRows.Row = Row;
export default FormRows;
export { Row };
