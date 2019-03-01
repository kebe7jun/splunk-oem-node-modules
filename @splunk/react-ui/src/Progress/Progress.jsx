import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNumber } from 'lodash';
import Box from '@splunk/react-ui/Box';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledTooltip, StyledPuck } = getStyled('Progress');

class Progress extends Component {
    static propTypes = {
        /**
         * Invoked with the DOM element when the component mounts and null when it unmounts.
         */
        elementRef: PropTypes.func,
        /**
         * The percentage complete. If unset, no progress bar will be shown.
         * Percentage must be number between 0 and 100.
         */
        percentage: (props, propName) => {
            if (
                props[propName] !== undefined &&
                !(props[propName] >= 0 && props[propName] <= 100)
            ) {
                return new RangeError(
                    'Percentage must be number between 0 and 100 in Progress component.'
                );
            }
            return null;
        },
        /** Tooltip will default to the percentage complete. */
        tooltip: PropTypes.node,
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            tooltipOpen: false,
        };
    }

    handleMouseEnter = () => {
        this.setState({
            tooltipOpen: true,
        });
    };

    handleMouseLeave = () => {
        this.setState({
            tooltipOpen: false,
        });
    };

    render() {
        // eslint-disable-next-line no-unused-vars
        const { percentage, tooltip, ...otherProps } = this.props;

        return (
            <Box
                data-test="progress"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                {...otherProps}
            >
                {isNumber(percentage) && (
                    <StyledTooltip
                        inline={false}
                        open={this.state.tooltipOpen}
                        content={tooltip || `${percentage}%`}
                        style={{ width: `${percentage}%` }}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        <StyledPuck />
                    </StyledTooltip>
                )}
            </Box>
        );
    }
}

export default Progress;
