import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const codeBlock = css`
    background-color: ${variables.gray96};
    padding: ${variables.spacingHalf};
    margin: ${variables.spacingHalf} 0;
`;

const codeInline = css`
    ${mixins.reset('inline')};
    background-color: ${variables.gray92};
    font-family: ${variables.monoFontFamily};
`;

const codeBlockDark = css`
    ${codeBlock};
    background-color: ${variables.gray22};
`;

const codeInlineDark = css`
    ${codeInline};
    background-color: ${variables.gray22};
    font-family: ${variables.monoFontFamily};
`;

registerStyles('Markdown', 'enterprise.light', {
    StyledCodeBlock: { component: 'div', styles: codeBlock },
    StyledCodeInline: { component: 'code', styles: codeInline },
});

registerStyles('Markdown', 'enterprise.dark', {
    StyledCodeBlock: { component: 'div', styles: codeBlockDark },
    StyledCodeInline: { component: 'code', styles: codeInlineDark },
});
