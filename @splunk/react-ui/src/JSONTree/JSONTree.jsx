import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import JSONTreeNode from './JSONTreeNode';
import './Style';

const { StyledWrapCode, StyledScrollCode } = getStyled('JSONTree');

/**
 * Used to visualize a JSON string.
 */
class JSONTree extends Component {
    static propTypes = {
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * The JSON string to visualize. Alternatively, this prop also accepts objects and other
         * possible return types of `JSON.parse`. Note that `JSONTree` doesn't perform any type
         * validation – if the passed value contains circular dependencies, or types not
         * representable in JSON (functions, symbols, …), the component behavior is unspecified.
         */
        json: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
            PropTypes.array,
            PropTypes.number,
            PropTypes.bool,
        ]).isRequired,
        /**
         * Number of space characters per level of indentation.
         */
        indent: PropTypes.number,
        /**
         * Optional event handler to call if values are clicked on.
         * The function signature is `onClickValue({key, value})`, where `key` is the property path
         * (for example `.a.b`) and `value` the value that was clicked.
         */
        onClickValue: PropTypes.func,
        /**
         * Start with all nodes expanded if `true`. The default is `false`, which expands only the first
         * level of properties.
         */
        expandChildren: PropTypes.bool,
        /**
         * Handle overflow by either wrapping values or by enabling scrolling.
         */
        overflow: PropTypes.oneOf(['wrap', 'scroll']),
    };

    static defaultProps = {
        indent: 4,
        expandChildren: false,
        overflow: 'scroll',
    };

    render() {
        const {
            json,
            elementRef,
            expandChildren,
            onClickValue,
            indent,
            overflow,
            ...otherProps
        } = this.props;
        const obj = isString(json) ? JSON.parse(json) : json;

        const StyledCode = overflow === 'wrap' ? StyledWrapCode : StyledScrollCode;

        return (
            <StyledCode
                data-test="json-tree"
                data-language="language-json"
                innerRef={elementRef}
                role="tree"
                {...otherProps}
            >
                <JSONTreeNode
                    obj={obj}
                    defaultOpen
                    expandChildren={expandChildren}
                    onClickValue={onClickValue}
                    indent={indent}
                    overflow={overflow}
                />
            </StyledCode>
        );
    }
}

export default JSONTree;
