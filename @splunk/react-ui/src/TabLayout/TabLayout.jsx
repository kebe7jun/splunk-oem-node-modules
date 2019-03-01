import React, { cloneElement, Children, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has, keys, omit } from 'lodash';
import { createDOMID } from '@splunk/ui-utils/id';
import TabBar from '@splunk/react-ui/TabBar';
import { getStyled } from '@splunk/react-ui/Themes';

import Panel from './Panel';
import './Style';

const { Styled } = getStyled('TabLayout');

/**
 * The `TabLayout` is a group of managed `Panels`. Only one panel can be open at a time.
 * TabLayout supports both the controlled and uncontrolled patterns.
 */
class TabLayout extends Component {
    static propTypes = {
        /**
         * `children` should be `TabLayout.Panel`.
         */
        children: PropTypes.node,
        /**
         * Sets the active panel on the initial render. It should match the `panelId` of one of
         * the child `TabLayout.Panel`s. Only use `defaultActivePanelId` when using `TabLayout`
         * as an uncontrolled component.
         */
        defaultActivePanelId: PropTypes.any,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** Size of icon in `TabLayout.Panel` if it has an icon */
        iconSize: PropTypes.oneOf(['inline', 'small', 'large']),
        /** The layout of tabs */
        layout: PropTypes.oneOf(['horizontal', 'vertical']),
        /** Width of each tab in pixels (Must be greater than 10 pixels). Leave blank for auto width. */
        tabWidth: PropTypes.number,
        /** A callback that receives the event and data (selectedPanelId). */
        onChange: PropTypes.func,
        /** The `panelId` of the `TabLayout.Panel` to activate. */
        activePanelId: PropTypes.any,
    };

    static defaultProps = {
        iconSize: 'inline',
        layout: 'horizontal',
        onChange() {},
    };

    static Panel = Panel;

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'activePanelId');
        if (!this.isControlled()) {
            this.state = {
                activePanelId: props.defaultActivePanelId,
            };
        }
        if (__DEV__ && this.isControlled() && has(props, 'defaultActivePanelId')) {
            throw new Error(
                "The 'defaultActivePanelId' prop is not compatible with 'activePanelId' prop in TabLayout."
            );
        }

        this.guid = createDOMID();
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'activePanelId')) {
            throw new Error(
                "Cannot change TabLayout from an uncontrolled component to a controlled one. Prop 'activePanelId' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultActivePanelId !== this.props.defaultActivePanelId) {
            throw new Error(
                "Cannot change 'defaultActivePanelId' after set. Consider using a controlled component instead."
            );
        }
    }

    handleChange = (e, data) => {
        const activePanelId = data.selectedTabId;
        if (!this.isControlled()) {
            this.setState({ activePanelId });
        }
        this.props.onChange(e, { activePanelId });
    };

    isControlled() {
        return this.controlledExternally;
    }

    render() {
        let panel;
        const activePanelId = this.isControlled()
            ? this.props.activePanelId
            : this.state.activePanelId;
        const { children } = this.props;
        const tabs = Children.toArray(children)
            .filter(isValidElement)
            .map(child => {
                const props = child.props;
                const id = `${this.guid}-${props.panelId}`;
                const tabId = `${this.guid}-${props.panelId}-tab`;
                if (props.panelId === activePanelId) {
                    panel = cloneElement(child, {
                        'aria-labelledby': tabId,
                        id,
                    });
                }
                return (
                    <TabBar.Tab
                        icon={props.icon}
                        key={props.panelId}
                        label={props.label}
                        tabId={props.panelId}
                        id={tabId}
                        ariaControls={id}
                        tooltip={props.tooltip}
                        disabled={props.disabled}
                    />
                );
            });
        if (__DEV__ && !panel) {
            throw new Error(
                "Invalid 'activePanelId' in 'TabLayout'. 'activePanelId' must match a 'Panel'."
            );
        }
        return (
            <Styled
                data-test="tab-layout"
                data-test-active-panel-id={activePanelId}
                data-flex={this.props.layout === 'vertical' || undefined}
                innerRef={this.props.elementRef}
                {...omit(this.props, keys(TabLayout.propTypes))}
            >
                <TabBar
                    activeTabId={activePanelId}
                    onChange={this.handleChange}
                    iconSize={this.props.iconSize}
                    tabWidth={this.props.tabWidth}
                    layout={this.props.layout}
                >
                    {tabs}
                </TabBar>
                {panel}
            </Styled>
        );
    }
}

export default TabLayout;
export { Panel };
