import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { _ } from '@splunk/ui-utils/i18n';
import { keycode } from '@splunk/ui-utils/keyboard';
import ChevronDown from '@splunk/react-icons/ChevronDown';
import ChevronRight from '@splunk/react-icons/ChevronRight';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import { getStyled } from '@splunk/react-ui/Themes';

import Cell from './Cell';
import './StyleRow';
import Toggle from './Toggle';

const {
    StyledStripeOdd,
    StyledStripeEven,
    StyledStripeNone,
    StyledCellSelectionDisabled,
    StyledCellExpansionDisabled,
} = getStyled('Table.Row');

const StyledStripeComponents = {
    odd: StyledStripeOdd,
    even: StyledStripeEven,
    none: StyledStripeNone,
};

class Row extends Component {
    static propTypes = {
        /** `children` should be `Table.Cell`.
         */
        children: PropTypes.node,
        /** This data is returned with the onClick and toggle events as the second argument. */
        data: PropTypes.any,
        /** Indicates whether the row selection is disabled. */
        disabled: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** @private. */
        expandable: PropTypes.bool,
        /** @private. */
        expanded: PropTypes.bool,
        /**
         * An optional row that will be displayed when this row is expanded, or an array of rows.
         */
        expansionRow: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element),
        ]),
        /** Providing an `onClick` handler will enable focus, hover and related styles. */
        onClick: PropTypes.func,
        /** @private. */
        onExpansion: PropTypes.func,
        /** @private. This will be passed through, and will work as expected. */
        onKeyDown: PropTypes.func,
        /** @private. Generally passed by Table rather than added directly. */
        onRequestMoveColumn: PropTypes.func,
        /**
         * An event handler for toggle of the row. resize of columns. The function is passed the event and the `data` prop for this row.
         */
        onRequestToggle: PropTypes.func,
        /**
         * When an `onRequestToggle` handler is defined, this prop determines the appearance
         * of the toggle.
         */
        selected: PropTypes.bool,
        /** @private. */
        stripe: PropTypes.oneOf(['odd', 'even', 'none']),
    };

    static defaultProps = {
        stripe: 'none',
        onExpansion() {},
        onKeyDown() {},
    };

    handleClick = e => {
        const { data, onClick } = this.props;
        onClick(e, data);
    };

    handleKeyDown = e => {
        const { data, onClick, onKeyDown } = this.props;

        if (keycode(e) === 'enter' && onClick) {
            onClick(e, data);
        }
        onKeyDown(e);
    };

    handleToggle = e => {
        const { data, disabled, onRequestToggle } = this.props;

        if (!disabled) {
            onRequestToggle(e, data);
        }
    };

    render() {
        const {
            children,
            disabled,
            elementRef,
            expandable,
            expanded,
            expansionRow,
            onExpansion,
            onClick,
            onKeyDown,
            onRequestToggle,
            onRequestMoveColumn,
            selected,
            stripe,
            ...otherProps
        } = this.props;

        const childrenCloned = !onClick
            ? Children.toArray(children) // ensure consistent keys
            : Children.toArray(children)
                  .filter(isValidElement)
                  .map(child => cloneElement(child, { appearance: 'rowLink' }));

        const StyledStripe = StyledStripeComponents[stripe];
        const StyledCellToggle = disabled ? StyledCellSelectionDisabled : Cell;

        return (
            <StyledStripe
                data-test="row"
                data-test-selected={onRequestToggle ? selected : undefined}
                data-clickable={onClick ? true : undefined}
                data-has-movable-columns={onRequestMoveColumn ? 'true' : undefined}
                innerRef={elementRef}
                tabIndex={onClick ? 0 : undefined}
                {...otherProps}
                onClick={onClick ? this.handleClick : undefined}
                onKeyDown={this.handleKeyDown}
            >
                {onRequestToggle && (
                    <StyledCellToggle
                        data-test="toggle"
                        data-role="toggle"
                        data-movable-column={onRequestMoveColumn ? 'false' : undefined}
                        onClick={this.handleToggle}
                        rowSpan={expanded ? Children.count(expansionRow) + 1 : null}
                        appearance="data"
                    >
                        <ScreenReaderContent>
                            {selected === true && _('Row selected')}
                            {selected === false && _('Row unselected')}
                        </ScreenReaderContent>
                        <Toggle
                            disabled={disabled}
                            selected={selected}
                            onClick={this.handleToggleFocus}
                        />
                    </StyledCellToggle>
                )}
                {expandable &&
                    expansionRow && (
                        <Cell
                            data-test="expand"
                            data-role="expand"
                            data-movable-column={onRequestMoveColumn ? 'false' : undefined}
                            onClick={onExpansion}
                            rowSpan={expanded ? Children.count(expansionRow) + 1 : null}
                            appearance="data"
                            align="center"
                        >
                            {expanded ? <ChevronDown /> : <ChevronRight />}
                        </Cell>
                    )}
                {expandable &&
                    !expansionRow && (
                        <StyledCellExpansionDisabled
                            data-role="expand"
                            data-movable-column={onRequestMoveColumn ? 'false' : undefined}
                        />
                    )}
                {childrenCloned}
            </StyledStripe>
        );

        /* eslint-enable */
    }
}

Row.splunkUiType = 'Table.Row';
export default Row;
