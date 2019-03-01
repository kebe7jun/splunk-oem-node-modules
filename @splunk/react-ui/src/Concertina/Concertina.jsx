import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { debounce, take, takeRight } from 'lodash';
import EventListener from 'react-event-listener';
import { getStyled } from '@splunk/react-ui/Themes';

import Heading from './Heading';
import Panel from './Panel';
import './Style';

const { StyledBox, StyledScroll, StyledTop, StyledBottom } = getStyled('Concertina');

class Concertina extends Component {
    static propTypes = {
        /**
         * `Concertina` `children` must be `Concertina.Panel`.
         */
        children: PropTypes.node,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
    };

    static Panel = Panel;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            panelsTopCount: 0,
            panelsBottomCount: 0,
            scrollTop: 0,
            innerWidth: '100%',
        };

        this.panelPositions = [];
        this.updateHeadings = debounce(this.updateHeadings, 0);
    }

    componentWillUnmount() {
        this.updateHeadings.cancel();
    }

    handleUpdate = (e, data) => {
        this.panelPositions[data.index] = data;

        let total = 0;
        this.panelPositions.forEach(panel => {
            // eslint-disable-next-line no-param-reassign
            panel.offsetTop = total;
            total += panel.height || 0;
        });

        this.updateHeadings();
    };

    handleElementMount = scrollEl => {
        this.setState({ scrollEl });

        // The scrollEl gets unmounted during the animation, it's necessary to cache the
        // recorded height until it is remounted.
        if (scrollEl) {
            this.setState({
                innerWidth: scrollEl.clientWidth,
            });
        }
    };

    handleResize = () => {
        this.setState({
            innerWidth: this.state.scrollEl.clientWidth,
        });
    };

    handleScroll = () => {
        this.updateHeadings();
    };

    handleScrollComplete = () => {
        this.setState({
            targetTop: undefined,
        });
    };

    handleClick = (e, { index, position }) => {
        const scrollEl = this.state.scrollEl;

        const headingsBeforeHeight = take(this.panelPositions, index)
            .map(item => item.headingHeight)
            .reduce((a, b) => a + b, 0); // sum the heights

        const headingsAfterHeight = takeRight(
            this.panelPositions,
            this.panelPositions.length - index - 1
        )
            .map(item => item.headingHeight)
            .reduce((a, b) => a + b, 0); // sum the heights

        const availableHeight = scrollEl.clientHeight - headingsBeforeHeight - headingsAfterHeight;
        const panelHeight = this.panelPositions[index].height;

        const topPosition = this.panelPositions[index].offsetTop - headingsBeforeHeight;
        const bottomPosition = topPosition - (availableHeight - panelHeight);

        const shouldPartlyPopUp =
            availableHeight > panelHeight && (position === 'bottom' || position === 'inner');

        // if the entire panel is in view, do nothing
        if (shouldPartlyPopUp && bottomPosition < scrollEl.scrollTop) {
            return;
        }

        const targetTop = shouldPartlyPopUp ? bottomPosition : topPosition;

        // handleRest will shift focus;
        if (position !== 'inner') {
            e.currentTarget.blur();
        }

        this.setState({ targetTop });
    };

    updateHeadings = () => {
        if (!this.state.scrollEl) {
            return;
        }

        const scrollEl = this.state.scrollEl;

        let top = scrollEl.scrollTop;

        function reduceTop(show, panel) {
            if (panel.offsetTop < top) {
                top += panel.headingHeight;
                return show + 1;
            }
            return show;
        }

        let bottom = top + scrollEl.clientHeight;
        function reduceBottom(show, panel) {
            if (panel.offsetTop + panel.headingHeight > bottom) {
                bottom -= panel.headingHeight;
                return show + 1;
            }
            return show;
        }

        this.setState({
            panelsTopCount: this.panelPositions.reduce(reduceTop, 0),
            panelsBottomCount: this.panelPositions.reduceRight(reduceBottom, 0),
        });
    };

    renderHeadings(items, position) {
        const headings = Children.toArray(items).map(item => (
            <Heading
                onClick={this.handleClick}
                description={item.props.description}
                panelId={item.props.panelId}
                index={item.props.index}
                position={position}
                status={item.props.status}
                key={item.props.panelId}
                tabIndex={-1}
            >
                {item.props.title}
            </Heading>
        ));
        return headings;
    }

    render() {
        const { children, ...otherProps } = this.props;

        const childrenCleaned = Children.toArray(children)
            .filter(isValidElement)
            .map((item, i) =>
                cloneElement(item, {
                    panelId: item.props.panelId || `${i}`,
                    index: i,
                    onHeadingClick: this.handleClick,
                    onChange: this.handleUpdate,
                })
            );

        const topPanels = take(childrenCleaned, this.state.panelsTopCount);
        const bottomPanels = takeRight(childrenCleaned, this.state.panelsBottomCount);

        return (
            <StyledBox data-test="concertina" {...otherProps}>
                <EventListener target="window" onResize={this.handleResize} />
                {this.state.panelsTopCount > 0 && (
                    <StyledTop style={{ width: this.state.innerWidth }} data-test="dock-top">
                        {this.renderHeadings(topPanels, 'top')}
                    </StyledTop>
                )}

                <StyledScroll
                    onScroll={this.handleScroll}
                    stopScrollPropagation
                    key="scroll-container"
                    elementRef={this.handleElementMount}
                    data-test="scroll"
                    top={this.state.targetTop}
                    onScrollComplete={this.handleScrollComplete}
                >
                    {childrenCleaned}
                </StyledScroll>
                {this.state.panelsBottomCount > 0 && (
                    <StyledBottom style={{ width: this.state.innerWidth }} data-test="dock-bottom">
                        {this.renderHeadings(bottomPanels, 'bottom')}
                    </StyledBottom>
                )}
            </StyledBox>
        );
    }
}

export default Concertina;
export { Panel };
