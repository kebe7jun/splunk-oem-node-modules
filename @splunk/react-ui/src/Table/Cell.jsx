import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keycode } from '@splunk/ui-utils/keyboard';
import { getStyled } from '@splunk/react-ui/Themes';

import './StyleCell';

const { Styled } = getStyled('Table.Cell');

class Cell extends Component {
    static splunkUiType = 'Table.Cell';

    static propTypes = {
        /** Align the text in the cell. */
        align: PropTypes.oneOf(['left', 'center', 'right']),
        /** The cell's appearance will default to `'link'` when a `onClick` handler is provided.
         * 'data': Is used for regular text and row expansion. The text does not turn blue.
         * 'link': The text is blue and darker on cell hover.
         * 'rowLink': The text is blue and darker on row hover.
         * @private. */
        appearance: PropTypes.oneOf(['data', 'link', 'rowLink']),
        /** @private. */
        children: PropTypes.node,
        /** This data is returned with the onClick events as the second argument. */
        data: PropTypes.any,
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /** Providing an `onClick` handler will enable focus, hover and related styles. */
        onClick: PropTypes.func,
        /** @private. This will be passed through, and will work as expected. */
        onKeyDown: PropTypes.func,
    };

    static defaultProps = {
        align: 'left',
        elementRef() {},
        onClick() {},
        onKeyDown() {},
    };

    handleMount = el => {
        this.el = el;
        this.props.elementRef(el);
    };

    handleClick = e => {
        const { data, onClick } = this.props;
        onClick(e, data);
    };

    handleKeyDown = e => {
        const { data, onClick, onKeyDown } = this.props;

        if (keycode(e) === 'enter') {
            onClick(e, data);
        }
        onKeyDown(e);
    };

    render() {
        const {
            align,
            appearance,
            children,
            // eslint-disable-next-line no-unused-vars
            elementRef,
            onClick,
            onKeyDown,
            ...otherProps
        } = this.props;
        const clickable = onClick !== Cell.defaultProps.onClick;
        const defaultAppearance = clickable ? 'link' : 'data';

        return (
            <Styled
                data-test="cell"
                onKeyDown={this.handleKeyDown}
                data-text-align={align}
                data-appearance={appearance || defaultAppearance}
                data-clickable={clickable ? true : undefined}
                onClick={this.handleClick}
                innerRef={this.handleMount}
                tabIndex={clickable ? 0 : undefined}
                {...otherProps}
            >
                {children}
            </Styled>
        );
    }
}

export default Cell;
