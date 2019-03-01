import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    width: 220px;
    height: auto;
    padding: 8px;
`;

const monthHeaderMain = css`
    ${mixins.reset('flex')};
    position: relative;
    background: transparent;
    line-height: ${variables.inputHeight};
    padding: 0 2px;
    margin-bottom: ${variables.spacingHalf};
`;

const monthHeaderHeading = css`
    ${mixins.reset('inline-block')};
    text-align: center;
    line-height: ${variables.inputHeight};
    text-transform: capitalize;
    flex: 1 0 1px;
`;

const dateTableMain = css`
    ${mixins.reset('table')};
    table-layout: fixed;
    border-spacing: 3px;
    width: 100%;
    margin: 0;
`;

const dateTableTableHeader = css`
    ${mixins.reset('table-cell')};
    text-align: center;
    padding-bottom: 2px;
    color: ${variables.textGray};
    font-size: ${variables.fontSizeSmall};
`;

const dayTableData = css`
    ${mixins.reset('table-cell')};
`;

const dayButton = css`
    ${mixins.reset('block')};
    width: 2em;
    text-align: center;
    line-height: 2em;
    color: ${variables.gray45};
    border-radius: ${variables.borderRadius};
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
        color: ${variables.linkColor};
        background-color: ${variables.backgroundColorHover};
    }

    &:focus {
        box-shadow: ${variables.focusShadow};
    }
`;

const dayButtonSelected = css`
    ${dayButton};
    border-color: ${variables.accentColor};

    &,
    &:hover,
    &:focus {
        border-color: ${variables.linkColor};
        background-color: transparent;
    }
`;

const dayButtonDark = css`
    ${dayButton};
    color: ${variables.gray98};
`;

const dayButtonSelectedDark = css`
    ${dayButtonSelected};
    color: ${variables.gray98};
`;

registerStyles('Calendar', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
});
registerStyles('Calendar.MonthHeader', 'enterprise.light', {
    StyledBox: { component: Box, styles: monthHeaderMain },
    StyledHeading: { component: 'span', styles: monthHeaderHeading },
});
registerStyles('Calendar.DateTable', 'enterprise.light', {
    Styled: { component: 'table', styles: dateTableMain },
    StyledTableHeader: { component: 'th', styles: dateTableTableHeader },
});
registerStyles('Calendar.Day', 'enterprise.light', {
    StyledTableData: { component: 'td', styles: dayTableData },
    StyledButton: { component: 'button', styles: dayButton },
    StyledButtonSelected: { component: 'button', styles: dayButtonSelected },
});

registerStyles('Calendar.Day', 'enterprise.dark', {
    StyledButton: { component: 'button', styles: dayButtonDark },
    StyledButtonSelected: { component: 'button', styles: dayButtonSelectedDark },
});
