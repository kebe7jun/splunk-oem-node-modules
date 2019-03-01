import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import { getStyled } from '@splunk/react-ui/Themes';

import './Style';

const { StyledButtonSimple, StyledPrevNext } = getStyled('Paginator.PaginatorButton');

class PaginatorButton extends Component {
    static propTypes = {
        children: PropTypes.node,
        label: PropTypes.string,
        /** Callback for button click event */
        onClick: PropTypes.func,
        /** Index of page */
        page: PropTypes.number,
    };

    static defaultProps = {
        onClick() {},
    };

    handleClick = e => {
        const page = this.props.page;
        this.props.onClick(e, { page });
    };

    render() {
        const { children, label, page } = this.props;
        return (
            <StyledButtonSimple
                data-test="page"
                data-test-page={page}
                appearance="pill"
                onClick={this.handleClick}
                inline={false}
                {...omit(this.props, keys(PaginatorButton.propTypes))}
            >
                {label}
                {children && <StyledPrevNext>{children}</StyledPrevNext>}
            </StyledButtonSimple>
        );
    }
}

export default PaginatorButton;
