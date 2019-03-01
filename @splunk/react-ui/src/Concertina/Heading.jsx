import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './StyleHeading';

const { StyledClickable, StyledHeadingContent, StyledDescription } = getStyled(
    'Concertina.Heading'
);
class Heading extends Component {
    static propTypes = {
        /** @private */
        children: PropTypes.string.isRequired,
        /** Text to place to the right of the title */
        description: PropTypes.string,
        /** @private */
        index: PropTypes.number.isRequired,
        /** @private */
        onClick: PropTypes.func.isRequired,
        /** @private */
        panelId: PropTypes.string.isRequired,
        /** @private */
        position: PropTypes.oneOf(['top', 'inner', 'bottom']),
        /** The panel can be in an warning, error or disabled state. */
        status: PropTypes.oneOf(['normal', 'warning', 'error', 'disabled']),
    };

    static defaultProps = {
        position: 'inner',
    };

    handleClick = e => {
        this.props.onClick(e, {
            index: this.props.index,
            panelId: this.props.panelId,
            position: this.props.position,
        });
    };

    handleMount = container => {
        this.container = container;
    };

    focus() {
        this.container.focus();
    }

    render() {
        const { children, description, panelId, position, status } = this.props;

        return (
            <StyledClickable
                data-status={status === 'normal' ? null : status}
                disabled={status === 'disabled'}
                data-position={position}
                onClick={this.handleClick}
                innerRef={this.handleMount}
                data-test="heading"
                data-test-panel-id={panelId}
                {...omit(this.props, keys(Heading.propTypes))}
            >
                <StyledHeadingContent>
                    <span data-concertina-role="title">{children}</span>
                    {description && (
                        <StyledDescription data-concertina-role="description">
                            {description}
                        </StyledDescription>
                    )}
                </StyledHeadingContent>
            </StyledClickable>
        );
    }
}

export default Heading;
