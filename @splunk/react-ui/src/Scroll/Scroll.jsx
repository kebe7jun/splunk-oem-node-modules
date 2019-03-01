import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { isFinite } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledInner } = getStyled('Scroll');

class Scroll extends Component {
    static propTypes = {
        /** @private */
        children: PropTypes.node,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** A callback for when an animated update completes. Ensure the animate prop is set back to
         * false and return control to the user. */
        onScrollComplete: PropTypes.func,
        /** A callback for when the scroll position changes. */
        onScroll: PropTypes.func,
        /** Set this to animate to a specific scroll position. Remove this property onScrollComplete to
         restore control to the user. */
        top: PropTypes.number,
        /** Set this to animate to a specific scroll position. Remove this property onScrollComplete to
         restore control to the user. */
        left: PropTypes.number,
        /** prevent mouseWheel events from scrolling the page or other containers. 'window' only
         * stops the window from scrolling by removing the scroll bars, which has better performance
         * but can affect layout. */
        stopScrollPropagation: PropTypes.oneOf([true, false, 'window']),
        tagName: PropTypes.string,
    };

    static defaultProps = {
        onScroll() {},
        onScrollComplete() {},
        stopScrollPropagation: false,
        tagName: 'div',
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            currentLeft: 0,
            currentTop: 0,
        };
    }

    handleMount = inner => {
        this.inner = inner;
    };

    handleRest = () => {
        this.props.onScrollComplete();
    };

    handleScroll = e => {
        this.setState({
            currentLeft: e.currentTarget.scrollLeft,
            currentTop: e.currentTarget.scrollTop,
        });

        this.props.onScroll(e);
    };

    renderInner = targetScroll => {
        const {
            children,
            elementRef,
            // eslint-disable-next-line no-unused-vars
            left,
            top,
            onScrollComplete,
            ...otherProps
        } = this.props;

        return (
            <StyledInner
                data-test="scroll"
                {...otherProps}
                key="inner"
                top={isFinite(top) ? targetScroll.top : undefined}
                left={isFinite(left) ? targetScroll.left : undefined}
                innerRef={this.handleMount}
                elementRef={elementRef}
                onScroll={this.handleScroll}
            >
                {children}
            </StyledInner>
        );
    };

    render() {
        const { left, top } = this.props;
        const { currentLeft, currentTop } = this.state;
        const targetScroll = {};

        // When isFinite, the prop is defined and therefore animating.
        if (isFinite(left)) {
            targetScroll.left = spring(left, { precision: 10 });
        } else {
            targetScroll.left = currentLeft;
        }
        if (isFinite(top)) {
            targetScroll.top = spring(top, { precision: 10 });
        } else {
            targetScroll.top = currentTop;
        }

        return (
            <Motion
                defaultStyle={{ left: 0, top: 0 }}
                style={targetScroll}
                onRest={this.handleRest}
            >
                {this.renderInner}
            </Motion>
        );
    }
}

export default Scroll;
