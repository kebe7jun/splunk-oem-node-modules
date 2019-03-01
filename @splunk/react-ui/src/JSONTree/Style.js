import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const base = css`
    ${mixins.reset('block')};
    font-family: ${variables.monoFontFamily};
`;

const scroll = css`
    ${base};
    overflow-x: auto;
    white-space: nowrap;
`;

const wrap = css`
    ${base};
    white-space: pre-wrap;
`;

registerStyles('JSONTree', 'enterprise.light', {
    StyledScrollCode: { component: 'code', styles: scroll },
    StyledWrapCode: { component: 'code', styles: wrap },
});
