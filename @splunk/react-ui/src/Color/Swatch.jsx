import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledClickable } = getStyled('Color.Swatch');

class Swatch extends Component {
    static propTypes = {
        /** Append removes border from the right side. */
        append: PropTypes.bool,
        /** The color of the swatch to be shown. */
        value: PropTypes.string,
        /** @private. Call back function when activated. */
        onClick: PropTypes.func,
        /** This has no affect on the appearance at this time but is recommend to be used when a
         * control is joined to the left. Styles may change in the future. */
        prepend: PropTypes.bool,
        /** The size of the swatch. */
        size: PropTypes.oneOf(['small', 'medium']),
        /** @private. Overide look and feel with inline styles. */
        style: PropTypes.object,
    };

    static defaultProps = {
        onClick() {},
        size: 'medium',
    };

    focus() {
        this.clickable.focus();
    }

    render() {
        const { append, onClick, prepend, size, style, value, ...otherProps } = this.props;
        function handleClick(e) {
            onClick(e, { value });
        }
        return (
            <StyledClickable
                data-append={append ? true : null}
                data-prepend={prepend ? true : null}
                data-size={size}
                data-test="swatch"
                data-test-value={value}
                value={value}
                style={{ ...style, backgroundColor: value }}
                onClick={handleClick}
                innerRef={c => {
                    this.clickable = c;
                }}
                {...otherProps}
            >
                <ScreenReaderContent>{value}</ScreenReaderContent>
            </StyledClickable>
        );
    }
}

export default Swatch;
