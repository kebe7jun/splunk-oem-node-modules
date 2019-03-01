import { css } from 'styled-components';
import ButtonSimple from '@splunk/react-ui/ButtonSimple';
import { registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    min-width: ${variables.inputHeight};
    text-align: center;
    padding: ${variables.spacingQuarter};
`;

const prevNext = css`
    padding: 0 3px;
    white-space: nowrap;
`;

registerStyles('Paginator.PaginatorButton', 'enterprise.light', {
    StyledButtonSimple: { component: ButtonSimple, styles: main },
    StyledPrevNext: { component: 'div', styles: prevNext },
});
