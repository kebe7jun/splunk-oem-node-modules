import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import Clickable from '@splunk/react-ui/Clickable';
import { getReference, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    > button {
        transition: background 0.2s, border 0.2s, box-shadow 0.2s;
    }

    + ${/* sc-sel */ getReference('CollapsiblePanel', 'StyledBox')} {
        margin-top: 2px;
    }
`;

const title = css`
    width: 100%;
    border-bottom: 0;
    cursor: pointer;
    position: relative;
    display: block;
    padding: 6px calc(${variables.spacing} + ${variables.spacingHalf});
    line-height: ${variables.lineHeight};
    color: ${variables.textColor};

    &[aria-expanded='false'] {
        background-color: ${variables.gray96};
        border-radius: 0;
    }

    &[aria-expanded='true'] ${/* sc-sel */ getReference('CollapsiblePanel', 'StyledIcon')} {
        transform: rotate(90deg);
    }

    &[disabled] {
        cursor: default;
        color: ${variables.textColor};
    }

    &:focus {
        box-shadow: ${variables.focusShadowInset};
    }

    &:hover:not([disabled]) {
        background-color: ${variables.gray92};
    }
`;

const icon = css`
    position: absolute;
    left: 12px;
    transition: transform 300ms;
`;

const titleDark = css`
    ${title};

    &[aria-expanded='false'] {
        background-color: ${variables.gray45};
    }

    &:hover:not([disabled]) {
        background-color: ${variables.gray30};
    }
`;

registerStyles('CollapsiblePanel', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
    StyledTitleClickable: { component: Clickable, styles: title },
    StyledIcon: { component: 'span', styles: icon },
});

registerStyles('CollapsiblePanel', 'enterprise.dark', {
    StyledTitleClickable: { component: Clickable, styles: titleDark },
});
