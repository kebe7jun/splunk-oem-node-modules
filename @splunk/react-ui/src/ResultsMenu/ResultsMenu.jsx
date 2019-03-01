import React, { Children, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import { _ } from '@splunk/ui-utils/i18n';
import { isIE11 } from '@splunk/ui-utils/userAgent';
import Menu, { Item, Divider, Heading } from '@splunk/react-ui/Menu';

import { getStyled } from '@splunk/react-ui/Themes';
import './Style';

const { Styled, StyledFooter, StyledLoading, StyledWait, StyledLoadingMessage } = getStyled(
    'ResultsMenu'
);

class ResultsMenu extends Component {
    static propTypes = {
        /*
         * Whether or not to show the wait spinner when loading. It's recommended to set this to
         * `true` when loading may take more than one second.
         */
        animateLoading: PropTypes.bool,
        children: PropTypes.node,
        /*
         * `childrenStart` are nearest the toggle, so they are not necessarily on top.
         * This is extendable to add `childrenTop`, `childrenEnd`, and `childrenBottom` in the
         * future.
         */
        childrenStart: PropTypes.node,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /*
         * Whether or not to show the loading message and/or wait spinner. It's not recommended to
         * pass old children when loading new children. The loading animation will show below any
         * children, so therefore it may be necessary to scroll to see the animation.
         */
        isLoading: PropTypes.bool,
        loadingMessage: PropTypes.node,
        maxHeight: PropTypes.number,
        noOptionsMessage: PropTypes.node,
        /**
         * A callback function when the list is scrolled to the bottom. Set to null when all items are loaded.
         */
        onScrollBottom: PropTypes.func,
        placement: PropTypes.string,
        style: PropTypes.object,
        footerMessage: PropTypes.node,
    };

    static defaultProps = {
        animateLoading: false,
        elementRef() {},
        isLoading: false,
        loadingMessage: _('Loading...'),
        noOptionsMessage: _('No matches'),
    };

    static Item = Item;
    static Divider = Divider;
    static Heading = Heading;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            containerEl: null,
            menu: null,
            menuMaxHeight: null,
            windowTop: 0,
            mouseOver: false,
            numberOfItemsLoaded: 0,
        };

        // The remaining amount of pixels when scrolled from bottom of menu to trigger onScrollBottom().
        this.scrollBottomOffset = 400;
        this.itemMinHeight = 28;
    }

    componentDidUpdate() {
        const { containerEl, menuEl } = this.state;

        if (!isIE11 || !containerEl) {
            return;
        }

        if (this.props.maxHeight) {
            const otherElementsHeight = containerEl.scrollHeight - menuEl.clientHeight;
            const menuMaxHeight = this.props.maxHeight - otherElementsHeight;

            if (Math.abs(this.state.menuMaxHeight - menuMaxHeight) > 1) {
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({ menuMaxHeight });
            }
        }
        // If onScrollBottom is defined, determine if it should be triggered.
        if (this.props && this.props.onScrollBottom && this.props.children) {
            this.handleScrollBottomOnFullMenu();
        }
    }

    handleMenuMount = menuEl => {
        this.setState({ menuEl });
    };

    handleMount = containerEl => {
        this.setState({ containerEl });
        this.props.elementRef(containerEl);
    };

    handleMouseEnter = () => {
        this.setState({ mouseOver: true, windowTop: document.documentElement.scrollTop });
    };

    handleMouseLeave = () => {
        this.setState({ mouseOver: false, windowTop: document.documentElement.scrollTop });
    };

    handleScroll = e => {
        if (e.target && this.state.menuEl) {
            const bottomScrollMenu =
                this.state.menuEl.scrollHeight -
                this.state.menuEl.offsetHeight -
                this.scrollBottomOffset;

            // Adding 1 due to border of menu item.
            if (this.state.menuEl.scrollTop + 1 >= bottomScrollMenu) {
                this.handleScrollBottom(e);
            }
        }
    };

    handleWheelMenu = e => {
        // Safety net to ensure window doesn't scroll if menu is scrolled pass the numberOfItemsLoaded at high velocity.
        e.stopPropagation();
        document.documentElement.scrollTop = this.state.windowTop;
    };

    handleScrollBottom(e) {
        // Prevent multiple calls to onScrollBottom.
        if (!this.state.scrollBottomTriggered) {
            this.setState({ scrollBottomTriggered: true });
            this.props.onScrollBottom(e);
        }
    }

    handleScrollBottomOnFullMenu = () => {
        const currentChildrenCount = Children.count(this.props.children);
        const { childrenCount, menuEl, menuMaxHeight } = this.state;

        // If menu is full length, load more items.
        if (menuEl.scrollHeight === menuEl.offsetHeight) {
            this.handleScrollBottom();
        }
        if (menuMaxHeight && currentChildrenCount !== childrenCount) {
            // Update state if children count differs.
            this.setState({
                numberOfItemsLoaded: currentChildrenCount - childrenCount,
                childrenCount: currentChildrenCount,
                scrollBottomTriggered: false,
            });
        }
    };

    renderFooterMessage() {
        return (
            this.props.footerMessage &&
            !!this.props.children.length && (
                <StyledFooter key="footer" data-placement={this.props.placement}>
                    {this.props.footerMessage}
                </StyledFooter>
            )
        );
    }

    render() {
        const {
            animateLoading,
            children,
            childrenStart,
            isLoading,
            loadingMessage,
            noOptionsMessage,
            onScrollBottom,
            placement,
            style,
        } = this.props;

        const otherProps = omit(this.props, keys(ResultsMenu.propTypes));

        // Assumption: that you cannot be filtered if you are a result
        const hasResults = Children.toArray(children)
            .filter(isValidElement)
            .some(({ type }) => !(type.filterFirst || type.filterLast || type.filterConsecutive));

        /* eslint-disable jsx-a11y/aria-role */
        return (
            <Styled
                data-placement={placement}
                key="wrapper"
                style={style}
                innerRef={this.handleMount}
                onWheel={onScrollBottom ? this.handleWheelMenu : undefined}
                onMouseEnter={onScrollBottom ? this.handleMouseEnter : undefined}
                onMouseLeave={onScrollBottom ? this.handleMouseLeave : undefined}
                {...otherProps}
            >
                {placement !== 'above' && childrenStart}
                {placement === 'above' && this.renderFooterMessage()}
                <Menu
                    key="menu"
                    style={{
                        overflow: 'auto',
                        maxHeight: this.state.menuMaxHeight || 'calc(100vh - 20px)',
                        flexDirection: 'column',
                    }}
                    elementRef={this.handleMenuMount}
                    onScroll={onScrollBottom ? this.handleScroll : undefined}
                    stopScrollPropagation
                    role={null}
                >
                    {!hasResults &&
                        noOptionsMessage &&
                        !isLoading && (
                            <Menu.Item data-test="no-results-message" disabled>
                                {noOptionsMessage}
                            </Menu.Item>
                        )}
                    {children}
                    {onScrollBottom && (
                        // Bottom spacer fills in the space of new items being loaded by using the minimum possible height x menuItems.
                        <div
                            style={{
                                height: this.state.scrollBottomTriggered
                                    ? this.state.numberOfItemsLoaded * this.itemMinHeight || 0
                                    : 0,
                            }}
                        />
                    )}
                    {isLoading && (
                        <StyledLoading>
                            {animateLoading && <StyledWait />}
                            <StyledLoadingMessage>{loadingMessage}</StyledLoadingMessage>
                        </StyledLoading>
                    )}
                </Menu>
                {placement !== 'above' && this.renderFooterMessage()}
                {placement === 'above' && childrenStart}
            </Styled>
        );
    }
}

export default ResultsMenu;
export { Item, Divider, Heading };
