import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';
import Tab from './Tab';

const { Styled } = getStyled('TabBar');

const propTypes = {
    /** The `tabId` of the `TabBar.Tab` to activate. */
    activeTabId: PropTypes.any,
    /**
     * `children` should be `TabBar.Tab`.
     */
    children: PropTypes.node,
    /** @private */
    disabled: PropTypes.bool,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /** Size of icon in `TabBar.Tab` if it has an icon */
    iconSize: PropTypes.oneOf(['inline', 'small', 'large']),
    /** The layout of tabs */
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    /** A callback that receives the event and data (selectedTabId). */
    onChange: PropTypes.func.isRequired,
    /** Width of each `TabBar.Tab` in pixels (Must be greater than 50 pixels). Leave blank for auto width. */
    tabWidth: PropTypes.number,
};

const defaultProps = {
    iconSize: 'inline',
    disabled: false,
    layout: 'horizontal',
    onChange() {},
};

function TabBar(props) {
    const {
        activeTabId,
        children,
        disabled,
        elementRef,
        iconSize,
        layout,
        tabWidth,
        onChange,
    } = props;
    const clonedChildren = Children.toArray(children)
        .filter(isValidElement)
        .map(child =>
            cloneElement(child, {
                onClick: (e, data) => {
                    onChange(e, { selectedTabId: data.tabId });
                },
                active: activeTabId === child.props.tabId,
                disabled: disabled || child.props.disabled,
                style: tabWidth && tabWidth > 50 ? { width: tabWidth } : undefined,
                iconSize,
                layout,
            })
        );
    return (
        <Styled
            data-test="tab-bar"
            data-test-active-tab-id={activeTabId}
            role="tablist"
            innerRef={elementRef}
            data-tab-layout={layout}
            {...omit(props, keys(propTypes))}
        >
            {clonedChildren}
        </Styled>
    );
}

TabBar.propTypes = propTypes;
TabBar.defaultProps = defaultProps;
TabBar.Tab = Tab;

export default TabBar;
export { Tab };
