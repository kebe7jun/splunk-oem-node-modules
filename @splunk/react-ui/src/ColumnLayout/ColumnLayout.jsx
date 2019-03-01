import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import Column from './Column';
import Row from './Row';
import './Style';

const { Styled, StyledDivider } = getStyled('ColumnLayout');

/**
 * `ColumnLayout` provides simple API for laying out content into columns. It is based on flexbox
 * and has 12 columns.
 */
class ColumnLayout extends Component {
    static propTypes = {
        /** `children` must be `ColumnLayout.Row` elements. */
        children: PropTypes.node,
        /** Show dividers between columns. */
        divider: PropTypes.oneOf(['none', 'vertical', 'horizontal']),
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** Set gutter width in pixels. This is propagated down to its `children`. */
        gutter: PropTypes.number,
    };

    static defaultProps = {
        divider: 'none',
        gutter: 30,
    };

    static Row = Row;
    static Column = Column;

    cloneRow = (row, idx) => {
        const { gutter, divider, children } = this.props;
        const isFirstChild = idx === 0;
        const isLastChild = idx === Children.count(children) - 1;
        return cloneElement(row, {
            gutter,
            divider: divider === 'vertical',
            isFirstChild,
            isLastChild,
        });
    };

    insertDividers = (acc, row, idx, original) => {
        acc.push(row);
        if (this.props.divider === 'horizontal' && idx < original.length - 1) {
            acc.push(<StyledDivider key={`${idx}-divider`} />);
        }
        return acc;
    };

    render() {
        const { children, elementRef } = this.props;

        const childrenCloned = Children.toArray(children)
            .filter(isValidElement)
            .map(this.cloneRow)
            .reduce(this.insertDividers, []);

        return (
            <Styled
                data-test="column-layout"
                innerRef={elementRef}
                {...omit(this.props, keys(ColumnLayout.propTypes))}
            >
                {childrenCloned}
            </Styled>
        );
    }
}
export default ColumnLayout;
export { Row, Column };
