import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { defaults, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled, StyledDivider } = getStyled('ColumnLayout.Row');

export default class Row extends Component {
    static propTypes = {
        /** Set vertical alignment of columns in a row */
        alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
        /** `children` must be `ColumnLayout.Column` elements */
        // eslint-disable-next-line consistent-return
        children: props => {
            if (props.children) {
                const total = Children.toArray(props.children)
                    .filter(isValidElement)
                    .reduce((sum, child) => sum + child.props.span, 0);

                if (total > 0 && total < 12) {
                    return new Error(`Column spans must add up to 12. Current total is ${total}`);
                }
            }
        },
        /** @private. This prop must only inherit from parent component */
        divider: PropTypes.bool,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** @private. This prop must only inherit from parent component */
        gutter: PropTypes.number,
        /** @private. This prop should be calculated and set by parent component */
        isFirstChild: PropTypes.bool,
        /** @private. This prop should be calculated and set by parent component */
        isLastChild: PropTypes.bool,
        /** @private. */
        style: PropTypes.object,
    };

    static defaultProps = {
        alignItems: 'stretch',
    };

    cloneColumn = (column, idx) => {
        const { gutter, children } = this.props;
        const isFirstChild = idx === 0;
        const isLastChild = idx === Children.count(children) - 1;
        return cloneElement(column, { gutter, isFirstChild, isLastChild });
    };

    insertDividers = (acc, row, idx, original) => {
        acc.push(row);
        if (this.props.divider && idx < original.length - 1) {
            acc.push(<StyledDivider key={`${idx}-divider`} />);
        }
        return acc;
    };

    render() {
        const {
            alignItems,
            children,
            elementRef,
            gutter,
            isFirstChild,
            isLastChild,
            style,
            ...otherProps
        } = this.props;

        const gutterStyle = {
            marginTop: isFirstChild ? undefined : gutter / 2,
            marginBottom: isLastChild ? undefined : gutter / 2,
        };

        const childrenCloned = Children.toArray(children)
            .filter(isValidElement)
            .map(this.cloneColumn)
            .reduce(this.insertDividers, []);

        return (
            <Styled
                style={defaults({}, style, gutterStyle)}
                data-align-items={alignItems}
                data-test="row"
                innerRef={elementRef}
                {...omit(otherProps, 'divider')}
            >
                {childrenCloned}
            </Styled>
        );
    }
}
