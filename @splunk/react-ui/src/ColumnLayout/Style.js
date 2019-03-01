import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('flex')}; /* flex prevents margin collapse */
    flex-direction: column;
`;

const divider = css`
    border-top: ${variables.borderLightColor} 1px solid;
    height: 0;
`;

const columnMain = css`
    ${mixins.reset('block')};
`;

const rowMain = css`
    ${mixins.reset('flex')};
    flex-flow: row nowrap;

    &[data-align-items='start'] {
        align-items: flex-start;
    }

    &[data-align-items='end'] {
        align-items: flex-end;
    }

    &[data-align-items='center'] {
        align-items: center;
    }

    &[data-align-items='stretch'] {
        align-items: stretch;
    }
`;

const rowDivider = css`
    border-left: ${variables.borderLightColor} 1px solid;
    flex: 0 0 1;
    align-self: stretch;
`;

registerStyles('ColumnLayout', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
    StyledDivider: { component: 'div', styles: divider },
});

registerStyles('ColumnLayout.Column', 'enterprise.light', {
    Styled: { component: 'div', styles: columnMain },
});

registerStyles('ColumnLayout.Row', 'enterprise.light', {
    Styled: { component: 'div', styles: rowMain },
    StyledDivider: { component: 'div', styles: rowDivider },
});
