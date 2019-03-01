import React, { Component, Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled } = getStyled('CardLayout');

class CardLayout extends Component {
    static propTypes = {
        /** Align cards in layout. */
        alignCards: PropTypes.oneOf(['left', 'center', 'right']),
        /**
         * Must be [Cards](./Card)
         */
        children: PropTypes.node,
        /** Width of each card. */
        cardWidth: PropTypes.number,
        /** Minimum width of each Card. */
        cardMinWidth: PropTypes.number,
        /** Maximum width of each Card. */
        cardMaxWidth: PropTypes.number,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** Space in pixels between Cards. */
        gutterSize: PropTypes.number,
        /** @private */
        style: PropTypes.object,
        /** Let cards wrap to new line when container gets narrow. */
        wrapCards: PropTypes.bool,
    };

    static defaultProps = {
        alignCards: 'left',
        gutterSize: 10,
        style: {},
        wrapCards: true,
    };

    render() {
        const {
            alignCards,
            children,
            cardWidth,
            cardMinWidth,
            cardMaxWidth,
            elementRef,
            gutterSize,
            style,
            wrapCards,
            ...otherProps
        } = this.props;
        const clonedChildren = Children.toArray(children)
            .filter(isValidElement)
            .map(child =>
                cloneElement(child, {
                    minWidth: cardWidth || cardMinWidth || undefined,
                    maxWidth: cardWidth || cardMaxWidth || undefined,
                    margin: gutterSize / 2,
                })
            );
        return (
            <Styled
                innerRef={elementRef}
                style={{ padding: gutterSize / 2, ...style }}
                data-align-cards={alignCards}
                data-test="card-layout"
                data-wrap-cards={wrapCards}
                role="presentation"
                {...otherProps}
            >
                {clonedChildren}
            </Styled>
        );
    }
}

export default CardLayout;
