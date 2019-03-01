import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import EventListener from 'react-event-listener';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import { _ } from '@splunk/ui-utils/i18n';
import { keycode } from '@splunk/ui-utils/keyboard';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const {
    Styled,
    StyledSvg,
    StyledPath,
    StyledResizeNW,
    StyledResizeNE,
    StyledResizeSE,
    StyledResizeSW,
    StyledResizeN,
    StyledResizeS,
    StyledResizeE,
    StyledResizeW,
} = getStyled('Resize');

const StyledResizes = {
    nw: StyledResizeNW,
    n: StyledResizeN,
    ne: StyledResizeNE,
    w: StyledResizeW,
    e: StyledResizeE,
    sw: StyledResizeSW,
    s: StyledResizeS,
    se: StyledResizeSE,
};

/**
 * Resize is a utility container with drag handles for resizing.
 */
class Resize extends Component {
    static propTypes = {
        /** The appearance of the resize handles. */
        appearance: PropTypes.oneOf(['border', 'overlay']),
        /** The appearance of the resize handles. */
        showHandles: PropTypes.oneOf(['always', 'on-hover']),
        /** @private */
        children: PropTypes.node,
        /** When adding styles, note that marging cannot be overridden when using the 'border'
         * appearance */
        className: PropTypes.string,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** When focused on a resize handle, the arrow keys will adjust the height or width by
         * this amount with each press. */
        keyIncrement: PropTypes.number,
        /** A callback which is passed the event and an object with the requested height and width. */
        onRequestResize: PropTypes.func.isRequired,
        /** An array of resize handles placements. */
        resizeHandles: PropTypes.arrayOf(
            PropTypes.oneOf(['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'])
        ).isRequired,
    };

    static defaultProps = {
        appearance: 'overlay',
        elementRef() {},
        showHandles: 'always',
        keyIncrement: 10,
    };

    static handleOrder = ['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'];

    static handleLabels = {
        nw: _('Resize northwest'),
        n: _('Resize north'),
        ne: _('Resize northeast'),
        w: _('Resize west'),
        e: _('Resize east'),
        sw: _('Resize southwest'),
        s: _('Resize south'),
        se: _('Resize southeast'),
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {};

        // Generate handlers for each direction.
        Resize.handleOrder.forEach(dir => {
            this[`handleDragStart${dir}`] = e => {
                this.handleDragStart(e, dir);
            };
            this[`handleKeyDown${dir}`] = e => {
                this.handleKeyDown(e, dir);
            };
        });
    }

    handleMount = el => {
        this.setState({ el });
        this.props.elementRef(el);
    };

    handleDragStart = (e, dragDirection) => {
        if (e.button > 0) {
            return;
        }
        e.preventDefault();
        this.setState({
            dragDirection,
            startWidth: this.state.el.offsetWidth,
            startHeight: this.state.el.offsetHeight,
            startX: e.clientX,
            startY: e.clientY,
        });
    };

    handleDragEnd = () => {
        this.setState({ dragDirection: null });
    };

    handleDrag = e => {
        const { dragDirection, startWidth, startHeight, startX, startY } = this.state;

        const changeX = dragDirection.match(/(w|e)$/) ? e.clientX - startX : 0;
        const changeY = dragDirection.match(/^(s|n)/) ? e.clientY - startY : 0;

        const data = {
            width: dragDirection.match(/w$/) ? startWidth - changeX : startWidth + changeX,
            height: dragDirection.match(/^n/) ? startHeight - changeY : startHeight + changeY,
        };

        this.props.onRequestResize(e, data);
    };

    handleKeyDown = (e, dir) => {
        const { keyIncrement } = this.props;
        const key = keycode(e);

        const lastDir = dir.match(/.$/)[0]; // the last letter
        const widthMap = {
            e: { right: 1, left: -1 },
            w: { right: -1, left: 1 },
        };
        const widthAdjust = (widthMap[lastDir] || {})[key] || 0;

        const firstDir = dir.charAt(0);
        const heightMap = {
            n: { down: -1, up: 1 },
            s: { down: 1, up: -1 },
        };
        const heightAdjust = (heightMap[firstDir] || {})[key] || 0;

        if (widthAdjust || heightAdjust) {
            e.preventDefault();
            const data = {
                width: this.state.el.offsetWidth + widthAdjust * keyIncrement,
                height: this.state.el.offsetHeight + heightAdjust * keyIncrement,
            };

            this.props.onRequestResize(e, data);
        }
    };

    renderHandle = dir => {
        const { appearance, showHandles } = this.props;
        const StyledResize = StyledResizes[dir];

        return (
            <StyledResize
                key={dir}
                data-test={`resize-handle-${dir}`}
                onMouseDown={this[`handleDragStart${dir}`]}
                onKeyDown={this[`handleKeyDown${dir}`]}
                data-hover={showHandles === 'on-hover' ? true : undefined}
                data-border={appearance === 'border' ? true : undefined}
            >
                {dir.length > 1 && (
                    <StyledSvg viewBox="0 0 11 11">
                        <StyledPath d="M0 8 L 8 0 M4 8 L 8 4" />
                    </StyledSvg>
                )}
                <ScreenReaderContent>{Resize.handleLabels[dir]}</ScreenReaderContent>
            </StyledResize>
        );
    };

    render() {
        const { appearance, children, resizeHandles } = this.props;
        const { dragDirection, el } = this.state;

        // Handles are inserted before and after children to optimize tab order
        const beforeHandles = Resize.handleOrder
            .slice(0, 4)
            .filter(dir => resizeHandles.indexOf(dir) > -1)
            .map(this.renderHandle);

        const afterHandles = Resize.handleOrder
            .slice(4)
            .filter(dir => resizeHandles.indexOf(dir) > -1)
            .map(this.renderHandle);

        /* When appearance is border, determine which sides need margin.
         * Converts ['se', 'n'] to { e: true, s: true, n: true}
         */
        const borderSides = {};
        if (appearance === 'border') {
            resizeHandles
                .join('')
                .split('')
                .filter((val, index, array) => array.indexOf(val) === index)
                .forEach(dir => (borderSides[dir] = true));
        }

        return (
            <Styled
                data-test="resize"
                innerRef={this.handleMount}
                {...omit(this.props, keys(Resize.propTypes))}
                data-border-n={borderSides.n}
                data-border-e={borderSides.e}
                data-border-s={borderSides.s}
                data-border-w={borderSides.w}
            >
                {el && beforeHandles}
                {children}
                {el && afterHandles}
                {dragDirection && (
                    <EventListener
                        target="window"
                        onMouseMove={this.handleDrag}
                        onMouseUp={this.handleDragEnd}
                    />
                )}
            </Styled>
        );
    }
}

export default Resize;
