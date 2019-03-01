import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import Button from '@splunk/react-ui/Button';
import CloseButton from '@splunk/react-ui/CloseButton';
import Tooltip from '@splunk/react-ui/Tooltip';
import { getStyled } from '@splunk/react-ui/Themes';

import PeekIcon from './PeekIcon';
import './Style';

const { StyledBox, StyledTitle, StyledCloseWrapper, StyledClose } = getStyled('Modal.Header');

/**
 * A styled container for modal header content.
 */
class Header extends Component {
    static propTypes = {
        /**
         * Children may be passed *instead* of a title. Note that children will not
         * be rendered if a title is provided.
         */
        children: PropTypes.node,

        /** @private */
        isPeeking: PropTypes.bool,
        /**
         * If an `onRequestClose` function is provided, the header will include a close
         * button, which will invoke the `onRequestClose` callback when clicked.
         */
        onRequestClose: PropTypes.func,
        /** @private */
        peekHandlers: PropTypes.object,
        /**
         * Used as the main heading.
         */
        title: PropTypes.string,
    };

    constructor(...args) {
        super(...args);
        this.state = { tooltipOpen: false };
    }

    handleRequestOpenTooltip = () => {
        this.setState({ tooltipOpen: true });
    };

    handleRequestCloseTooltip = () => {
        this.setState({ tooltipOpen: false });
    };

    render() {
        const { isPeeking, peekHandlers, onRequestClose, title, children } = this.props;
        return (
            <StyledBox
                data-has-close={!!onRequestClose || null}
                data-test="header"
                {...omit(this.props, keys(Header.propTypes))}
            >
                {title ? <StyledTitle>{title}</StyledTitle> : children}
                {(onRequestClose || peekHandlers) && (
                    <StyledCloseWrapper>
                        {peekHandlers && (
                            <Tooltip
                                content="Peek behind this dialog."
                                defaultPlacement="left"
                                onRequestOpen={this.handleRequestOpenTooltip}
                                onRequestClose={this.handleRequestCloseTooltip}
                                open={!isPeeking && this.state.tooltipOpen}
                                inline={false}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    transform: onRequestClose
                                        ? 'rotate(90deg) translate(-50%, -50%) translateX(-34px)'
                                        : 'rotate(90deg) translate(-50%, -50%)',
                                }}
                            >
                                <Button
                                    appearance="pill"
                                    data-test="peek"
                                    icon={<PeekIcon />}
                                    {...peekHandlers}
                                />
                            </Tooltip>
                        )}
                        {onRequestClose && (
                            <StyledClose>
                                <CloseButton onClick={onRequestClose} data-test="close" />
                            </StyledClose>
                        )}
                    </StyledCloseWrapper>
                )}
            </StyledBox>
        );
    }
}
export default Header;
