import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('block')};
`;

const header = css`
    padding-left: ${variables.spacingHalf};
`;

const rows = css`
    position: relative;
`;

const rowMain = css`
    padding: 3px calc(${variables.inputHeight} + 3px) 3px 0;
    position: relative;

    &.sorting {
        z-index: calc(${variables.zindexPopover} + 1);
    }

    &[data-sortable='true'] {
        padding-left: ${variables.spacingHalf};
    }

    &:focus {
        outline: 0;
        box-shadow: ${variables.focusShadow};
    }
`;

const button = css`
    position: absolute;
    right: 0;
    top: 3px;
    float: right;
`;

const drag = css`
    position: absolute;
    left: 0;
    right: 0;
    top: 4px;
    bottom: 3px;
    content: '';
    cursor: move;
    width: 7px;
    background: ${variables.draggableBackground};
    opacity: 0.5;
`;

registerStyles('FormRows', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
    StyledHeader: { component: 'div', styles: header },
    StyledRows: { component: 'div', styles: rows },
});

registerStyles('FormRows.Row', 'enterprise.light', {
    Styled: { component: 'div', styles: rowMain },
    StyledButton: { component: 'div', styles: button },
    StyledDrag: { component: 'div', styles: drag },
});
