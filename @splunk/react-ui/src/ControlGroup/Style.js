import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('block')};
    ${mixins.clearfix()};
    display: block;
    max-width: 600px;
    margin-bottom: calc(${variables.spacing} * 0.75);

    &[aria-invalid] {
        color: ${variables.errorColor};
    }
`;

const controlsStack = css`
    flex-direction: column;
`;

const label = css`
    ${mixins.reset('block')};
    padding: 6px 0;
    word-wrap: break-word;
    color: inherit;
    flex: 0 0 auto;

    &[data-size='small'] {
        font-size: ${variables.fontSizeSmall};
        padding: 4px 0;
    }
`;

const labelLeft = css`
    ${label};
    float: left;
    text-align: right;
`;

const help = css`
    font-size: ${variables.fontSizeSmall};
    color: ${variables.textGray};
    margin-top: 2px;

    [aria-invalid] > & {
        color: inherit;
    }
`;

registerStyles('ControlGroup', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
    StyledControlsStackBox: { component: Box, styles: controlsStack },
    StyledLabel: { component: 'div', styles: label },
    StyledLabelLeft: { component: 'div', styles: labelLeft },
    StyledHelp: { component: 'div', styles: help },
});
