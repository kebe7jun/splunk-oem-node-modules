import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has, keys, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import Panel from './Panel';
import './Style';

const { StyledBox } = getStyled('Accordion');

class Accordion extends Component {
    static propTypes = {
        /**
         * Animates the expansion and collapse of panels.
         */
        animate: PropTypes.bool,
        /**
         * `children` of `Accordion` must be `Accordion.Panel`.
         */
        children: PropTypes.node,
        /**
         * Sets the panel to expanded on the initial render. Use only when using
         * `Accordion` as an uncontrolled component. Must match the `panelId` of
         * one of the children `Accordion.Panel`s.
         */
        defaultOpenPanelId: PropTypes.any,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Invoked on change of the open panel. Callback is passed data such as
         * the `panelId` of the `Accordion.Panel` that originated the request to
         * expand.
         */
        onChange: PropTypes.func,
        /**
         * Indicates the `panelId` of the currently expanded `Accordion.Panel`.
         * Use only when using `Accordion` as a controlled component.
         */
        openPanelId: PropTypes.any,
    };

    static defaultProps = {
        onChange() {},
    };

    static Panel = Panel;

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'openPanelId');
        if (!this.isControlled()) {
            this.state = {
                openPanelId: props.defaultOpenPanelId,
            };
        }
        if (__DEV__ && this.isControlled() && has(props, 'defaultOpenPanelId')) {
            throw new Error(
                "The 'defaultOpenPanelId' prop is not compatible with 'openPanelId' prop in Accordion."
            );
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'openPanelId')) {
            throw new Error(
                "Cannot change Accordion from an uncontrolled component to a controlled one. Prop 'openPanelId' is not valid in subsequent updates if not provided in the initial props."
            );
        }

        if (__DEV__ && nextProps.defaultOpenPanelId !== this.props.defaultOpenPanelId) {
            throw new Error(
                "Cannot change 'defaultOpenPanelId' after set. Consider using a controlled component instead."
            );
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleRequestOpen = data => {
        if (!this.isControlled()) {
            this.setState({ openPanelId: data.panelId });
        }
        this.props.onChange(data.event, data);
    };

    render() {
        const { children, elementRef } = this.props;
        const openPanelId = this.isControlled() ? this.props.openPanelId : this.state.openPanelId;

        // remove false, null, 0, etc
        const childrenCleaned = Children.toArray(children)
            .filter(isValidElement)
            .map(child =>
                cloneElement(child, {
                    disabled: openPanelId === child.props.panelId,
                    onRequestOpen: this.handleRequestOpen,
                    open: openPanelId === child.props.panelId,
                })
            );

        return (
            <StyledBox
                data-test="accordion"
                data-test-open-panel-id={openPanelId}
                elementRef={elementRef}
                {...omit(this.props, keys(Accordion.propTypes))}
            >
                {childrenCleaned}
            </StyledBox>
        );
    }
}

export default Accordion;
export { Panel };
