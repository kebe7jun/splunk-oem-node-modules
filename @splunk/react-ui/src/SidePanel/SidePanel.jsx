import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import ModalLayer from '@splunk/react-ui/ModalLayer';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const {
    StyledLeftPanelTransitionOpen,
    StyledRightPanelTransitionOpen,
    StyledTopPanelTransitionOpen,
    StyledBottomPanelTransitionOpen,
} = getStyled('SidePanel');

const animationMap = {
    left: 'slideFromLeft',
    right: 'slideFromRight',
    top: 'slideFromTop',
    bottom: 'slideFromBottom',
};

class SidePanel extends Component {
    static propTypes = {
        /** @private */
        children: PropTypes.node,
        /**
         * The position of the panel on the screen.
         */
        dockPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        /**
         * The inner element can control the width of the side bar when placed left or right, and
         * the height when placed top or bottom.
         */
        innerClassName: PropTypes.string,
        /**
         * The inner element can control the width of the side bar when placed left or right, and
         * the height when placed top or bottom.
         */
        innerStyle: PropTypes.object,
        /**
         * A function that will be called when a close event occurs. The callback will be passed a
         * reason and the event.
         *
         * Generally, this callback should be used to togle the `open` prop.
         */
        onRequestClose: PropTypes.func,
        /**
         * Indicates the current open state of the panel.
         */
        open: PropTypes.bool,
        /**
         * The outer element grows to the width of the side bar when placed left or right, or
         * the height when placed top or bottom. It has minimal styles:
         * a white background and a box shadow. Adding styles to this container
         * could be useful when the sidebar should be shorter than the width or height of the page,
         * or multiple sidebars are shown.
         */
        outerClassName: PropTypes.string,
        /**
         * The outer element grows to the width of the side bar when placed left or right, or
         * the height when placed top or bottom. It has minimal styles:
         * a white background and a box shadow. Adding styles to this container
         * could be useful when the sidebar should be shorter than the width or height of the page,
         * or multiple sidebars are shown.
         */
        outerStyle: PropTypes.object,
        /**
         * Indicates whether to add an overlay mask on the whole page, blocking other interactions
         * while the panel is open.
         */
        useLayerForClickAway: PropTypes.bool,
    };

    static defaultProps = {
        open: false,
        dockPosition: 'right',
        onRequestClose() {},
        useLayerForClickAway: true,
    };

    renderModal = () => {
        const {
            children,
            dockPosition,
            innerClassName,
            innerStyle,
            outerClassName,
            outerStyle,
        } = this.props;

        const StyledTransitionOpen = {
            left: StyledLeftPanelTransitionOpen,
            right: StyledRightPanelTransitionOpen,
            top: StyledTopPanelTransitionOpen,
            bottom: StyledBottomPanelTransitionOpen,
        }[dockPosition];

        const defaultInnerStyle =
            dockPosition === 'left' || dockPosition === 'right'
                ? { height: '100%' }
                : { width: '100%' };

        return (
            <StyledTransitionOpen
                data-test="side-panel"
                animation={animationMap[dockPosition]}
                animateOnMount
                innerClassName={innerClassName}
                innerStyle={{ ...defaultInnerStyle, ...innerStyle }}
                open={this.props.open}
                outerClassName={outerClassName}
                outerStyle={outerStyle}
                retainFocus
                role="dialog"
                takeFocus
                tabIndex={-1}
                {...omit(this.props, keys(SidePanel.propTypes))}
            >
                {children}
            </StyledTransitionOpen>
        );
    };

    render() {
        const { open, onRequestClose, useLayerForClickAway } = this.props;
        return (
            <ModalLayer
                open={open}
                onRequestClose={onRequestClose}
                renderModal={this.renderModal}
                useLayerForClickAway={useLayerForClickAway}
            />
        );
    }
}

export default SidePanel;
