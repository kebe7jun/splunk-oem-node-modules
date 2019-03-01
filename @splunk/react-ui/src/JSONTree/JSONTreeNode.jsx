import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isArray, fill, isObject, keys, repeat } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './StyleTreeNode';

const {
    StyledValue,
    StyledValueInteractiveClickable,
    StyledProperty,
    StyledExpandLinkClickable,
} = getStyled('JSONTree.JSONTreeNode');

/**
 * An internal container class for expandable tree nodes (objects and arrays).
 */
export default class JSONTreeNode extends Component {
    static propTypes = {
        /** @private */
        obj: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array,
            PropTypes.number,
            PropTypes.string,
            PropTypes.bool,
        ]),
        /** @private */
        dataPath: PropTypes.string,
        /** @private */
        onClickValue: PropTypes.func,
        /** @private */
        defaultOpen: PropTypes.bool,
        /** @private */
        expandChildren: PropTypes.bool,
        /** @private */
        indent: PropTypes.number,
        /** @private */
        indentLevel: PropTypes.number,
        /** @private */
        overflow: PropTypes.oneOf(['wrap', 'scroll']),
    };

    static defaultProps = {
        dataPath: '',
        defaultOpen: false,
        expandChildren: false,
        indent: 4,
        indentLevel: 1,
        overflow: 'scroll',
    };

    constructor(props) {
        super(props);
        this.state = { open: props.defaultOpen };

        this.regularIndent = fill(Array(props.indentLevel), repeat('\u00a0', props.indent));
        this.closingIndent = fill(Array(props.indentLevel - 1), repeat('\u00a0', props.indent));
    }

    handleExpandClick = () => {
        this.setState({ open: !this.state.open });
    };

    handleClickValue = e => {
        this.props.onClickValue(e, { key: e.target.dataset.path, value: e.target.textContent });
    };

    renderExpandLink() {
        return (
            <StyledExpandLinkClickable
                onClick={this.handleExpandClick}
                aria-expanded={this.state.open}
                data-test="toggle"
            >
                {'\u00a0'}
                {this.state.open ? '[-]' : '[+]'}
                {'\u00a0'}
            </StyledExpandLinkClickable>
        );
    }

    renderValue(value, propertyDataPath) {
        const { indent, indentLevel, onClickValue, expandChildren, overflow } = this.props;
        const isPrimitive = !isObject(value); // isObject is true for arrays
        let representation = value;

        if (!isPrimitive) {
            representation = (
                <JSONTreeNode
                    obj={value}
                    dataPath={propertyDataPath}
                    defaultOpen={expandChildren}
                    expandChildren={expandChildren}
                    onClickValue={onClickValue}
                    indent={indent}
                    indentLevel={indentLevel + 1}
                    overflow={overflow}
                />
            );
        } else if (typeof value === 'string') {
            representation = `"${value}"`;
        } else if (typeof value === 'boolean') {
            representation = value.toString();
        }

        if (isPrimitive) {
            if (onClickValue) {
                return (
                    <StyledValueInteractiveClickable
                        valueType={typeof value}
                        overflowType={overflow}
                        onClick={this.handleClickValue}
                        data-path={propertyDataPath}
                    >
                        {representation}
                    </StyledValueInteractiveClickable>
                );
            }

            return (
                <StyledValue valueType={typeof value} overflowType={overflow}>
                    {representation}
                </StyledValue>
            );
        }

        return representation;
    }

    renderObject() {
        const { obj, dataPath } = this.props;

        if (isObject(obj) || isArray(obj)) {
            return keys(obj).map((key, index, properties) => {
                const value = obj[key];
                const propertyDataPath = `${dataPath}.${key}`;
                const representation = this.renderValue(value, propertyDataPath);

                const propertyLabel = !isArray(obj) ? (
                    <span>
                        <StyledProperty>{key}</StyledProperty>:{' '}
                    </span>
                ) : null;

                return (
                    <div key={propertyDataPath} role="treeitem" data-test-path={propertyDataPath}>
                        {this.regularIndent}
                        {propertyLabel}
                        {representation}
                        {index + 1 < properties.length ? ',' : null}
                    </div>
                );
            });
        }

        // edge case: a single number/string/boolean being rendered (still valid JSON)
        return (
            <div role="treeitem" data-test-path=".">
                {this.renderValue(obj, '.')}
            </div>
        );
    }

    render() {
        const { open } = this.state;
        const { obj } = this.props;
        const isExpandable = isObject(obj) || isArray(obj);

        return (
            <span
                data-test={isExpandable ? 'node' : null}
                data-test-expanded={isExpandable ? this.state.open : null}
            >
                {isExpandable && (isArray(obj) ? '[' : '{')}
                {isExpandable && this.renderExpandLink()}
                {!isExpandable || open ? this.renderObject() : null}
                {!isExpandable || open ? this.closingIndent : null}
                {isExpandable && (isArray(obj) ? ']' : '}')}
            </span>
        );
    }
}
