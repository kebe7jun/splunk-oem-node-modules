import { css } from 'styled-components';
import Clickable from '@splunk/react-ui/Clickable';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const size = '16px';

const main = css`
    ${mixins.reset('block')};
`;

const mainInline = css`
    ${mixins.reset('inline-block')};
`;

const toggle = css`
    display: block;
`;

const toggleInline = css`
    display: inline-block;
`;

const content = css`
    padding: ${variables.spacingHalf};
    font-size: ${variables.fontSizeSmall};
    line-height: 18px;
`;

const link = css`
    display: inline-block;
    width: ${size};
    height: ${size};
    border: 2px solid ${variables.linkColor};
    border-radius: ${size};
    font-size: ${variables.fontSizeSmall};
    font-weight: ${variables.fontWeightSemiBold};
    line-height: calc(${size} - 2px);
    text-align: center;
    color: ${variables.linkColor};
    vertical-align: baseline;
    cursor: default;

    &:not([disabled]) {
        &:hover {
            text-decoration: none;
        }

        &:focus {
            box-shadow: ${variables.focusShadow};
        }
    }
`;

registerStyles('Tooltip', 'enterprise.light', {
    Styled: { component: 'span', styles: main },
    StyledInline: { component: 'span', styles: mainInline },
    StyledToggle: { component: 'span', styles: toggle },
    StyledToggleInline: { component: 'span', styles: toggleInline },
    StyledContent: { component: 'div', styles: content },
    StyledLink: { component: Clickable, styles: link },
});
