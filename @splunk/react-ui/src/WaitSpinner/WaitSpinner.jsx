import React from 'react';
import PropTypes from 'prop-types';
import { _ } from '@splunk/ui-utils/i18n';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { Styled, StyledSvg, StyledCircle } = getStyled('WaitSpinner');

const propTypes = {
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /** A string to display to screen readers. Set the prop to `null` or an empty string to hide the
     * spinner from screen readers, such as when there is already a text label beside it. */
    screenReaderText: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']),
};

const defaultProps = {
    screenReaderText: _('Waiting'),
    size: 'small',
};

export default function WaitSpinner(props) {
    const { elementRef, size, screenReaderText, ...otherProps } = props;
    return (
        <Styled data-size={size} data-test="wait-spinner" {...otherProps}>
            <StyledSvg
                ref={elementRef}
                viewBox="0 0 19 19"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                {screenReaderText && <title>{screenReaderText}</title>}
                <g>
                    <StyledCircle cx="9.5" cy="9.5" r="8.5" />
                </g>
            </StyledSvg>
        </Styled>
    );
}

WaitSpinner.propTypes = propTypes;
WaitSpinner.defaultProps = defaultProps;
