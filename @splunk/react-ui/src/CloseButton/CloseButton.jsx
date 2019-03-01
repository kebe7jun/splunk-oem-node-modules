import React from 'react';
import PropTypes from 'prop-types';
import { _ } from '@splunk/ui-utils/i18n';
import Close from '@splunk/react-icons/Close';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledButtonSimple } = getStyled('CloseButton');

const propTypes = {
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    screenReaderText: PropTypes.string,
};

const defaultProps = {
    screenReaderText: _('Close'),
};

export default function CloseButton(props) {
    const { elementRef, screenReaderText, ...otherProps } = props;

    return (
        <StyledButtonSimple appearance="pill" innerRef={elementRef} {...otherProps}>
            <Close inline={false} size="13px" screenReaderText={screenReaderText} />
        </StyledButtonSimple>
    );
}

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
