import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SortableHandle } from 'react-sortable-hoc';
import { omit } from 'lodash';
import { _ } from '@splunk/ui-utils/i18n';
import CloseButton from '@splunk/react-ui/CloseButton';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled, StyledButton, StyledDrag } = getStyled('FormRows.Row');

class Row extends Component {
    static propTypes = {
        /** @private */
        children: PropTypes.node,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** Index of the row */
        index: PropTypes.number,
        /** @private */
        onKeyDown: PropTypes.func,
        /** Callback when remove button is clicked. */
        onRequestRemove: PropTypes.func,
        /**
         * @private
         * Sortable HOC consumes and removes `index`, so we have `rowIndex` to keep
         * track of it internally.
         */
        rowIndex: PropTypes.number,
        /** @private */
        sortable: PropTypes.bool,
        /** The contents of Row */
        value: PropTypes.node,
    };

    static defaultProps = {
        sortable: true,
    };

    handleKeyDown = e => {
        this.props.onKeyDown(e, { index: this.props.rowIndex });
    };

    handleRequestRemove = e => {
        this.props.onRequestRemove(e, { index: this.props.rowIndex });
    };

    render() {
        const { children, sortable, elementRef, ...otherProps } = this.props;
        const DragHandle = SortableHandle(() => (
            <StyledDrag data-test="drag-handle">
                <ScreenReaderContent>
                    Press arrow up or arrow down to re-order items
                </ScreenReaderContent>
            </StyledDrag>
        ));
        return (
            <Styled // eslint-disable-line jsx-a11y/no-static-element-interactions
                data-sortable={sortable}
                data-test="row"
                innerRef={elementRef}
                onKeyDown={this.handleKeyDown}
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={sortable ? 0 : undefined}
                {...omit(otherProps, ['onKeyDown', 'onRequestRemove', 'rowIndex'])}
            >
                {sortable && <DragHandle />}
                {children}
                <StyledButton>
                    <CloseButton
                        data-test="remove"
                        onClick={this.handleRequestRemove}
                        screenReaderText={_('Remove Row')}
                    />
                </StyledButton>
            </Styled>
        );
    }
}

export default Row;
