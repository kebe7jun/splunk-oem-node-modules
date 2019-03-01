import React from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const {
    Styled,
    StyledSvg,
    StyledPrevOrActiveRect,
    StyledPrevOrActiveCircle,
    StyledGray,
    StyledNext,
} = getStyled('StepBar.Step');

const propTypes = {
    /** @private */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /** @private. */
    isFirst: PropTypes.bool,
    /** @private. */
    isLast: PropTypes.bool,
    /** @private. Is the tab active. */
    status: PropTypes.oneOf(['prev', 'active', 'next']),
    /**
     * A unique id for this step and used by the StepBar to keep track of the open Step.
     * Defaults to a zero-based index matching the component's position in StepBar.
     */
    stepId: PropTypes.any,
};

const defaultProps = {
    status: 'next',
    isLast: false,
    isFirst: false,
};

export default function Step(props) {
    const { children, elementRef, isFirst, isLast, status, stepId, ...otherProps } = props;

    return (
        <Styled
            data-status={status}
            data-test="step"
            data-test-step-id={stepId}
            innerRef={elementRef}
            {...otherProps}
        >
            <StyledSvg
                data-status={status}
                focusable="false"
                width="100%"
                height="15px"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <StyledGray
                    x={isFirst ? '50' : '0'}
                    y="6"
                    width={isLast || isFirst ? '50%' : '100%'}
                    height="3"
                />
                {status === 'active' &&
                    !isFirst && <StyledPrevOrActiveRect x="0" y="6" width="50%" height="3" />}
                {status === 'prev' && (
                    <StyledPrevOrActiveRect
                        x={isFirst ? '50%' : '0'}
                        y="6"
                        width="100%"
                        height="3"
                    />
                )}
            </StyledSvg>
            <StyledSvg
                data-status={status}
                focusable="false"
                width="100%"
                height="15px"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
            >
                {status !== 'next' && <StyledPrevOrActiveCircle cx="50%" cy="50%" r="7.5" />}
                {status === 'next' && <StyledNext cx="50%" cy="50%" r="6" />}
            </StyledSvg>
            {children}
        </Styled>
    );
}

Step.propTypes = propTypes;
Step.defaultProps = defaultProps;
