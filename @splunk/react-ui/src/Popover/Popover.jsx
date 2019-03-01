import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import EventListener from 'react-event-listener';
import { Motion, spring } from 'react-motion';
import {
    clamp,
    defer,
    every,
    has,
    includes,
    intersection,
    isFunction,
    isFinite,
    keys,
    omit,
    throttle,
} from 'lodash';
import { takeFocus, handleTab } from '@splunk/ui-utils/focus';
import RenderToLayer from '@splunk/react-ui/RenderToLayer';
import { getStyled } from '@splunk/react-ui/Themes';

import getPlacement from './getPlacement';
import './Style';

const {
    Styled,
    StyledBoxWrapper,
    StyledBox,
    StyledLight,
    StyledDark,
    StyledLightArrow,
    StyledDarkArrow,
    StyledLowerRightCorner,
} = getStyled('Popover');

function everyApproxEqual(a, b, threshold = 1) {
    return (
        !!a &&
        !!b &&
        every(a, (val, key) => {
            if (isFinite(val)) {
                return Math.abs(b[key] - val) <= threshold;
            }
            return b[key] === val;
        })
    );
}

/**
 * Popover is used to create layovers such as dropdowns, contextual menus or tooltips. Only use
 * this when the other components do not provide sufficient functionality or control. A controlled
 * Dropdown will cover use cases where one would consider using Popover directly.
 */
class Popover extends Component {
    static possibleCloseReasons = ['clickAway', 'escapeKey', 'offScreen'];

    static propTypes = {
        /**
         * This is the element or component that will be used to set the position of the popover. It
         * is required when the Popover is open and must be mounted.
         */
        // eslint-disable-next-line consistent-return
        anchor: (props, ...rest) => {
            if (props.open) {
                return PropTypes.object.isRequired(props, ...rest);
            }
        },
        /**
         * By default, the popover points to and is aligned to, the center of the anchor.
         * This prop allows the popover to point to and aligned to a different part of the anchor.
         * The x and y values are relative to the upper left corner of the anchor. It will always
         * point to the edge of the anchor. When positioned above or below, only the x value is
         * used. When positioned left or right, only the y value is used.
         */
        pointTo: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
        /**
         * If true, the popover will apply transitions when
         * it is added to the DOM.
         */
        animation: PropTypes.bool,
        /**
         * The light appearance is used for menus, while the dark appearance is for tooltips.
         * None is a transparent box.
         */
        appearance: PropTypes.oneOf(['light', 'dark', 'none']),
        /**
         * If true, the popover will hide when the anchor is scrolled off the screen.
         */
        autoCloseWhenOffScreen: PropTypes.bool,
        /**
         * If there is not enough room to render the `Popover` in a direction, this option enables
         * it to be rendered over the anchor.
         */
        canCoverAnchor: PropTypes.bool,
        /**
         * The content of the `Popover`. If a function is provided, it will be invoked with an
         * object containing `anchorHeight`, `anchorWidth`, `maxHeight`, `maxWidth`, and
         * `placement`.
         */
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        /**
         * An array of reasons for which this Popover should close.
         */
        closeReasons: PropTypes.arrayOf(PropTypes.oneOf(Popover.possibleCloseReasons)),
        /**
         * The default placement of the `Popover`. It might be rendered in a different direction
         * depending upon the space available and the `repositionMode`.
         */
        defaultPlacement: PropTypes.oneOf([
            'above',
            'below',
            'left',
            'right',
            'vertical',
            'horizontal',
        ]),
        /**
         * @private.
         */
        id: PropTypes.string,
        /**
         * Callback function fired when the popover is requested to be closed.
         *
         * @param {object} data
         * @param {string} data.reason The reason for the close request.
         */
        onRequestClose: PropTypes.func,
        /**
         * If true, the popover is visible.
         */
        open: PropTypes.bool,
        /**
         * If the `Popover` does not fit in the `defaultPlacement`, `repositionMode` determines if
         * and how the `Popover` will reposition itself to fit on the page.
         *     * `none` - Do not reposition the `Popover`. It will always render in the
         * `defaultPlacement` direction.
         *     * `flip` - Allows the `Popover` to reposition to the opposite of the
         *                `defaultPlacement`
         * if it can fit there (and not in the `defaultPlacement`).
         *     * `any` - Allows the `Popover` to reposition in any direction if it can fit on the
         *               page.
         */
        repositionMode: PropTypes.oneOf(['none', 'flip', 'any']),
        /**
         * Keep focus within the Popover while open.
         */
        retainFocus: PropTypes.bool,
        /**
         * The container with which the popover must scroll to stay aligned with the anchor.
         */
        scrollContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        /**
         * When true, the Popover will automatically take focus when 'open' changes to true.
         * Disable this for a Popover that has shows on hover, such as a tooltip.
         */
        takeFocus: PropTypes.bool,
    };

    static defaultProps = {
        animation: true,
        appearance: 'light',
        autoCloseWhenOffScreen: true,
        canCoverAnchor: false,
        closeReasons: Popover.possibleCloseReasons,
        defaultPlacement: 'below',
        onRequestClose() {},
        open: false,
        repositionMode: 'flip',
        retainFocus: true,
        scrollContainer: 'window',
        takeFocus: false,
    };

    static getArrowStyle({ anchorPos, placement, outerContainerStyle, outerContainerEl }) {
        if (placement === 'misaligned') {
            return { display: 'none' };
        }

        const style = {
            top: null,
            right: null,
            bottom: null,
            left: null,
            display: 'block',
        };

        const ah = 8; // arrowHeight === arrowHalfWidth
        const maxVertDiff = outerContainerEl.offsetHeight / 2 - 22;
        const minVertDiff = -(outerContainerEl.offsetHeight / 2 - 15);
        const initVertDiff =
            anchorPos.center -
            (outerContainerStyle.top + outerContainerEl.offsetHeight / 2) -
            ah / 2;
        const vertDiff = clamp(initVertDiff, minVertDiff, maxVertDiff);

        const horizontalDiff =
            anchorPos.middle - (outerContainerStyle.left + outerContainerEl.offsetWidth / 2) - ah;
        const transform = {
            left: `translate(${ah / 2}px, ${vertDiff}px) rotate(90deg)`,
            right: `translate(-${ah / 2}px, ${vertDiff}px) rotate(-90deg)`,
            above: `translateX(${horizontalDiff}px) rotate(180deg)`,
            below: `translateX(${horizontalDiff}px) rotate(0)`,
        };
        style.transform = transform[placement];

        // set new positions
        const origin1 = {
            left: 'right',
            right: 'left',
            above: 'bottom',
            below: 'top',
        };
        style[origin1[placement]] = '1px';

        const origin2 = {
            left: 'top',
            right: 'top',
            above: 'left',
            below: 'left',
        };
        style[origin2[placement]] = '50%';

        return style;
    }

    constructor(props, ...rest) {
        super(props, ...rest);
        this.handleScroll = throttle(this.setPlacement.bind(this, true), 0);
        this.setPlacement = throttle(this.setPlacement, 0, { leading: false });

        this.state = {
            animating: false,
            anchorEl: null,
        };
    }

    componentDidMount() {
        this.handleNewAnchor(this.props.anchor);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.open !== nextProps.open) {
            this.setState({
                animating: nextProps.animation,
            });
        }
        if (this.props.anchor !== nextProps.anchor) {
            this.handleNewAnchor(nextProps.anchor);
        }
    }

    componentDidUpdate(prevProps) {
        if (!this.innerContainerEl) {
            return;
        }

        if (this.props.open || this.state.animating) {
            this.setPlacement();

            if (!prevProps.open && this.props.takeFocus) {
                takeFocus(this.innerContainerEl);
            }
        }
    }

    componentWillUnmount() {
        this.setPlacement.cancel();
        this.handleScroll.cancel();
        clearTimeout(this.timeout);
    }

    getElPosition = anchorEl => {
        const rect = anchorEl.getBoundingClientRect();
        const a = {
            top: rect.top,
            left: rect.left,
            width: anchorEl.offsetWidth,
            height: anchorEl.offsetHeight,
        };

        const { pointTo } = this.props;

        a.right = rect.right || a.left + a.width;
        a.bottom = rect.bottom || a.top + a.height;
        a.middle =
            pointTo && has(pointTo, 'x') ? a.left + pointTo.x : a.left + (a.right - a.left) / 2;
        a.center =
            pointTo && has(pointTo, 'y') ? a.top + pointTo.y : a.top + (a.bottom - a.top) / 2;

        return a;
    };

    setPlacement = scrolling => {
        // If these conditions are not met, we cannot set the popover.
        if (!this.props.open || !this.outerContainer || !this.props.anchor) {
            return;
        }

        const {
            autoCloseWhenOffScreen,
            canCoverAnchor,
            defaultPlacement,
            repositionMode,
            scrollContainer,
        } = this.props;

        // eslint-disable-next-line react/no-find-dom-node
        const outerContainerEl = findDOMNode(this.outerContainer);
        const anchorPos = this.getElPosition(this.state.anchorEl);
        const scrollContainerPos =
            scrollContainer !== 'window' && this.getElPosition(scrollContainer);

        if (scrolling && autoCloseWhenOffScreen) {
            if (this.autoCloseWhenOffScreen(anchorPos, scrollContainerPos)) {
                return;
            }
        }

        const { placement, outerContainerStyle, maxHeight, maxWidth } = getPlacement({
            anchorPos,
            scrollContainerPos,
            canCoverAnchor,
            defaultPlacement,
            repositionMode,
            outerContainerEl,
            windowWidth: this.windowSizeMeasurementEl.offsetLeft,
            windowHeight: this.windowSizeMeasurementEl.offsetTop,
        });

        const arrowStyle =
            this.arrow &&
            Popover.getArrowStyle({
                anchorPos,
                outerContainerStyle,
                placement,
                outerContainerEl,
            });

        // If none of the position data has changed, do not set state.
        if (
            everyApproxEqual(anchorPos, this.state.anchorPos) &&
            everyApproxEqual(outerContainerStyle, this.state.outerContainerStyle) &&
            everyApproxEqual(arrowStyle, this.state.arrowStyle) &&
            placement === this.state.placement &&
            maxHeight === this.state.maxHeight &&
            maxWidth === this.state.maxWidth
        ) {
            return;
        }
        this.setState({
            anchorPos,
            arrowStyle,
            outerContainerStyle,
            placement,
            maxHeight,
            maxWidth,
        });
    };

    handleNewAnchor = anchor => {
        // eslint-disable-next-line react/no-find-dom-node
        const anchorEl = anchor ? findDOMNode(anchor) : null;
        const anchorPos = anchorEl ? this.getElPosition(anchorEl) : null;
        this.setState({ anchorEl, anchorPos });
    };

    handleInnerContainerMount = element => {
        this.innerContainerEl = element;
        if (element && this.props.takeFocus) {
            defer(takeFocus, element);
        }
    };

    autoCloseWhenOffScreen(anchorPosition, scrollContainerPosition) {
        if (
            anchorPosition.top < 0 ||
            anchorPosition.top > window.innerHeight ||
            anchorPosition.left < 0 ||
            anchorPosition.left > window.innerWidth
        ) {
            this.requestClose({
                reason: 'offScreen',
            });
            return true;
        }
        if (scrollContainerPosition) {
            if (
                anchorPosition.height + anchorPosition.top < scrollContainerPosition.top ||
                anchorPosition.top > scrollContainerPosition.bottom ||
                anchorPosition.width + anchorPosition.left < scrollContainerPosition.left ||
                anchorPosition.left > scrollContainerPosition.right
            ) {
                this.requestClose({
                    reason: 'offScreen',
                });
                return true;
            }
        }
        return false;
    }

    requestClose(data) {
        if (includes(this.props.closeReasons, data.reason)) {
            this.props.onRequestClose(data);
        }
    }

    handleTab = e => {
        handleTab(this.innerContainerEl, e);
    };

    handleRequestClose = data => {
        if (this.props.open) {
            this.requestClose(data);
        }
    };

    handleAnimationEnd = () => {
        this.setState({
            animating: false,
        });
    };

    renderLayer = () => {
        const { animation, appearance, children, id, open } = this.props;

        const { anchorPos, arrowStyle, outerContainerStyle, placement } = this.state;

        let { maxHeight, maxWidth } = this.state;

        // Accomodate the arrow in the maxHeight and maxWidth.
        if (appearance !== 'none') {
            if (isFinite(maxHeight)) {
                maxHeight -= 20;
            }
            if (isFinite(maxWidth)) {
                maxWidth -= 20;
            }
        }

        const childData = {
            anchorHeight: anchorPos ? anchorPos.height : null,
            anchorWidth: anchorPos ? anchorPos.width : null,
            placement,
            maxHeight,
            maxWidth,
        };

        const motionStyle = animation
            ? {
                  opacity: spring(open ? 1 : 0, { stiffness: 300, damping: 40, precision: 1 }),
              }
            : {
                  opacity: 1,
              };

        const StyledBoxComponent = appearance === 'none' ? StyledBox : StyledBoxWrapper;
        const StyledArrow = appearance === 'light' ? StyledLightArrow : StyledDarkArrow;
        const StyledAppearance = appearance === 'light' ? StyledLight : StyledDark;

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return (
            <Motion
                defaultStyle={{ opacity: animation ? 0 : 1 }}
                style={motionStyle}
                onRest={this.handleAnimationEnd}
            >
                {({ opacity }) => (
                    <Styled
                        style={{ ...outerContainerStyle, opacity }}
                        innerRef={c => (this.outerContainer = c)}
                    >
                        {(open || this.state.animating) && (
                            <StyledBoxComponent
                                data-test="popover"
                                innerRef={this.handleInnerContainerMount}
                                tabIndex={-1}
                                id={id}
                                onKeyDown={this.props.retainFocus ? this.handleTab : null}
                                {...omit(this.props, keys(Popover.propTypes))}
                            >
                                {appearance === 'none' && children}
                                {appearance !== 'none' && (
                                    <StyledArrow
                                        innerRef={arrow => (this.arrow = arrow)}
                                        style={arrowStyle}
                                    />
                                )}
                                {appearance !== 'none' && (
                                    <StyledAppearance>
                                        {isFunction(children) ? children(childData) : children}
                                    </StyledAppearance>
                                )}
                            </StyledBoxComponent>
                        )}
                        <StyledLowerRightCorner
                            innerRef={el => (this.windowSizeMeasurementEl = el)}
                        />
                    </Styled>
                )}
            </Motion>
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    };

    render() {
        return [
            <EventListener
                target={this.props.scrollContainer || 'window'}
                onScroll={this.handleScroll}
                onResize={this.setPlacement}
                key="eventListener"
            />,
            <RenderToLayer
                closeReasons={intersection(
                    this.props.closeReasons,
                    RenderToLayer.possibleCloseReasons
                )}
                ref={c => (this.layer = c)}
                open={this.props.open || this.state.animating}
                onRequestClose={this.handleRequestClose}
                render={this.renderLayer}
                key="renderToLayer"
            />,
        ];
    }
}

export default Popover;
