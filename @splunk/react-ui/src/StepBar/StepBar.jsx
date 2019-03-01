import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { getStyled } from '@splunk/react-ui/Themes';

import Step from './Step';
import './Style';

const { Styled } = getStyled('StepBar');

const propTypes = {
    /** The `stepId` of the `StepBar.Step` to activate. */
    activeStepId: PropTypes.any.isRequired,
    /**
     * `children` should be `StepBar.Step`.
     */
    children: PropTypes.node,
    /**
     * Invoked with the DOM element when the component mounts and null when it unmounts.
     */
    elementRef: PropTypes.func,
    /**
     * Setting inline to true will make the Step Bar inline element. It will assume it's minimum
     * width.
     */
    inline: PropTypes.bool,
};

const defaultProps = {
    inline: false,
};

export default function StepBar(props) {
    let activeIndex = 0;
    let foundActive = false;
    const { activeStepId, children, elementRef, inline, ...otherProps } = props;
    const validChildren = Children.toArray(children).filter(isValidElement);
    const lastChildIndex = validChildren.length - 1;
    const clonedChildren = validChildren.map((child, idx) => {
        const stepId = child.props.stepId || idx;
        const active = activeStepId === stepId;
        const childProps = { status: 'prev', stepId };
        if (foundActive) {
            childProps.status = 'next';
        }
        if (active) {
            childProps.status = 'active';
            foundActive = true;
            activeIndex = idx;
        }
        if (idx === 0) {
            childProps.isFirst = true;
        }
        if (idx === lastChildIndex) {
            childProps.isLast = true;
        }
        return cloneElement(child, childProps);
    });
    return (
        <Styled
            data-inline={inline || null}
            data-test="step-bar"
            data-test-active-step-id={activeStepId}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="progressbar"
            aria-valuemin="1"
            aria-valuemax={lastChildIndex + 1}
            aria-valuenow={activeIndex + 1}
            innerRef={elementRef}
            {...otherProps}
        >
            {clonedChildren}
        </Styled>
    );
}

StepBar.propTypes = propTypes;
StepBar.defaultProps = defaultProps;
StepBar.Step = Step;
export { Step };
