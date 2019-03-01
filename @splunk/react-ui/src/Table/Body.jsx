import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { has, includes, without } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled } = getStyled('Table.Body');

class Body extends Component {
    static splunkUiType = 'Table.Body';

    static propTypes = {
        /**
         * `children` should be `Table.Row`.
         */
        children: PropTypes.node,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** @private. Generally passed by Table rather than added directly. */
        rowExpansion: PropTypes.oneOf(['single', 'multi', 'none']),
        /** @private. Generally passed by Table rather than added directly. */
        onRequestMoveColumn: PropTypes.func,
        /** @private. Generally passed by Table rather than added directly. */
        stripeRows: PropTypes.bool,
    };

    static defaultProps = {
        rowExpansion: 'none',
        stripeRows: false,
    };

    constructor(...args) {
        super(...args);
        this.state = {
            expanded: [],
        };
    }

    handleRowExpansion(key) {
        const current = this.state.expanded;
        if (this.props.rowExpansion === 'single') {
            if (includes(current, key)) {
                this.setState({
                    expanded: [],
                });
            } else {
                this.setState({
                    expanded: [key],
                });
            }
        } else if (this.props.rowExpansion === 'multi') {
            if (includes(current, key)) {
                this.setState({
                    expanded: without(current, key),
                });
            } else {
                this.setState({
                    expanded: current.concat(key),
                });
            }
        }
    }

    render() {
        const {
            children,
            elementRef,
            onRequestMoveColumn,
            rowExpansion,
            stripeRows,
            ...otherProps
        } = this.props;
        const rows = [];
        Children.forEach(children, (child, i) => {
            if (child) {
                if (__DEV__ && !has(child, 'key')) {
                    throw new Error("Table rows must have a 'key' property");
                }
                const key = child.key;
                const oddOrEven = i % 2 ? 'even' : 'odd';
                const stripe = stripeRows ? oddOrEven : 'none';
                const expanded = includes(this.state.expanded, key);
                rows.push(
                    cloneElement(child, {
                        stripe,
                        expanded,
                        expandable: rowExpansion !== 'none',
                        onExpansion: () => this.handleRowExpansion(key),
                        onRequestMoveColumn,
                    })
                );
                if (expanded && child.props.expansionRow) {
                    Children.forEach(child.props.expansionRow, (expansionRow, index) =>
                        rows.push(
                            cloneElement(expansionRow, {
                                key: `${key}-expansion-${index}`,
                                stripe,
                                onRequestMoveColumn,
                                'data-expansion-row': 'true',
                            })
                        )
                    );
                }
            }
        });

        if (rows.length === 0) {
            return null;
        }

        return (
            <Styled data-test="body" innerRef={elementRef} {...otherProps}>
                {rows}
            </Styled>
        );
    }
}

export default Body;
