import React from 'react';
import PropTypes from 'prop-types';
import ErrorIcon from '@splunk/react-icons/Error';
import WarningIcon from '@splunk/react-icons/Warning';
import SuccessIcon from '@splunk/react-icons/Success';
import InfoCircleIcon from '@splunk/react-icons/InfoCircle';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const {
    StyledBox,
    StyledIconInfo,
    StyledIconSuccess,
    StyledIconWarning,
    StyledIconError,
} = getStyled('Message');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /**
     * Adds a background and border.
     */
    fill: PropTypes.bool,
    /** The severity or type of warning */
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
};

const defaultProps = {
    fill: false,
    type: 'warning',
};

export default function Message({ children, type, fill, ...otherProps }) {
    const Icon = {
        info: InfoCircleIcon,
        success: SuccessIcon,
        warning: WarningIcon,
        error: ErrorIcon,
    }[type];

    const StyledIcon = {
        info: StyledIconInfo,
        success: StyledIconSuccess,
        warning: StyledIconWarning,
        error: StyledIconError,
    }[type];

    return (
        <StyledBox
            data-test="message"
            data-fill={fill ? type : undefined}
            data-test-type={type}
            {...otherProps}
        >
            <StyledIcon>
                <Icon width="24px" height="24px" />
            </StyledIcon>
            <span data-test="content">{children}</span>
        </StyledBox>
    );
}

Message.propTypes = propTypes;
Message.defaultProps = defaultProps;
