import React, { Children, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { getSortedTabbableElements, handleTab } from '@splunk/ui-utils/focus';
import { keycode } from '@splunk/ui-utils/keyboard';
import ClassNamePropCheck from '@splunk/react-ui/ClassNamePropCheck';
import { getStyled } from '@splunk/react-ui/Themes';

import Divider from './Divider';
import Heading from './Heading';
import Item from './Item';
import './Style';

const { Styled, StyledScroll } = getStyled('Menu');

class Menu extends Component {
    static propTypes = {
        /**
         * `children` should be `Menu.Item`, `Menu.Heading`, or `Menu.Divider`.
         */
        children: PropTypes.node,
        /** @private */
        className: ClassNamePropCheck,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * Keep focus within the menu while navigating by keyboard. Tabbing from the last item
         * returns user to the first item.
         */
        retainFocus: PropTypes.bool,
        /**
         * Prevents scrolling from propogating to the parent container(s) when the top or bottom of
         * the `Menu` is reached.
         */
        stopScrollPropagation: PropTypes.bool,
    };

    static defaultProps = {
        elementRef() {},
        retainFocus: true,
        stopScrollPropagation: false,
    };

    static Item = Item;
    static Divider = Divider;
    static Heading = Heading;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {};

        this.handleMount = this.handleMount.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleMount(containerEl) {
        this.setState({ containerEl });
        this.props.elementRef(containerEl);
    }

    handleKeyDown(e) {
        if (keycode(e) === 'tab' && this.props.retainFocus) {
            handleTab(this.state.containerEl, e);
            return;
        }

        if (keycode(e) !== 'down' && keycode(e) !== 'up') {
            return;
        }

        const tabbableElements = getSortedTabbableElements(this.state.containerEl);
        const currentIndex = tabbableElements.indexOf(e.target);

        if (currentIndex === -1) {
            return;
        }

        if (keycode(e) === 'up' && currentIndex > 0) {
            tabbableElements[currentIndex - 1].focus();
        } else if (keycode(e) === 'down' && currentIndex < tabbableElements.length - 1) {
            tabbableElements[currentIndex + 1].focus();
        }
        e.preventDefault();
    }

    render() {
        const {
            children,
            // eslint-disable-next-line no-unused-vars
            elementRef,
            // eslint-disable-next-line no-unused-vars
            retainFocus,
            stopScrollPropagation,
            ...otherProps
        } = this.props;

        const StyledComponentType = stopScrollPropagation ? StyledScroll : Styled;
        const componentProps = stopScrollPropagation
            ? {
                  stopScrollPropagation: true,
                  elementRef: this.handleMount,
              }
            : { innerRef: this.handleMount };

        const childrenCleaned = Children.toArray(children)
            .filter(isValidElement)
            .reduce((acc, item, index, original) => {
                /* Filter out initial Dividers
                 * Requires reduce() over filter() because a Heading may have been
                 * before the Divider.
                 */
                if (item.type.filterFirst && acc.length === 0) {
                    return acc;
                }

                // Filter out consecutive Dividers and Headings
                if (
                    item.type.filterConsecutive &&
                    original.length > index + 1 &&
                    original[index + 1].type.filterConsecutive
                ) {
                    return acc;
                }

                // Filter out last Dividers and Headings
                if (item.type.filterLast && index === original.length - 1) {
                    return acc;
                }

                acc.push(item);
                return acc;
            }, []);

        return (
            <StyledComponentType
                data-test="menu"
                onKeyDown={this.handleKeyDown}
                role="menu"
                {...componentProps}
                {...otherProps}
            >
                {childrenCleaned}
            </StyledComponentType>
        );
    }
}

export default Menu;
export { Item, Heading, Divider };
