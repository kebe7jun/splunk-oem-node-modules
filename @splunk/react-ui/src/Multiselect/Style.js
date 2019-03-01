import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    border: ${variables.border};
    border-radius: ${variables.borderRadius};
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 2px 0 0 2px;
    min-height: ${variables.inputHeight};
    background-color: ${variables.white};
    max-height: 300px;
    overflow-y: auto;

    [data-inline='true'] + & {
        margin-left: ${variables.spacingHalf};
    }

    &[data-hasfocus] {
        box-shadow: ${variables.focusShadow};
    }

    &[aria-disabled] {
        cursor: not-allowed;
        background-color: ${variables.gray96};
    }

    &[aria-invalid] {
        border-color: ${variables.errorColor};
        color: ${variables.errorColor};
    }

    &[data-size='small'] {
        min-height: ${variables.inputHeightSmall};
    }

    &[data-inline] {
        width: 400px;
    }

    &[data-popoveropen='true'] {
        position: relative;
        z-index: calc(${variables.zindexFixedNavbar} - 1);
    }
`;

const input = css`
    ${mixins.reset('block')};
    flex: 1 0 auto;
    max-width: 100%;
    line-height: 12px;
    padding: ${variables.spacingQuarter};

    &[data-size='small'] {
        padding: 3px;
        font-size: ${variables.fontSizeSmall};
    }
`;

const overlay = css`
    &[data-popoveropen='true'] {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: calc(${variables.zindexFixedNavbar} - 2);
    }
`;

const mainDark = css`
    ${main};
    background-color: ${variables.gray22};
    border: 1px solid ${variables.gray20};

    &[aria-disabled] {
        background-color: ${variables.gray22};
        border-color: ${variables.gray30};
    }
`;

registerStyles('MultiselectNormal', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
    StyledInput: { component: 'input', styles: input },
    StyledOverlay: { component: 'div', styles: overlay },
});

registerStyles('MultiselectNormal', 'enterprise.dark', {
    StyledBox: { component: Box, styles: mainDark },
});
