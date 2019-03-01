import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import Clickable from '@splunk/react-ui/Clickable';
import { lightOrDark, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: ${variables.spacingQuarter} auto 0;
    background-color: ${lightOrDark(variables.gray92, variables.gray45)};
    line-height: 24px;
    border-radius: 2px;
    min-height: 32px;
    color: ${variables.textGray};

    &[data-size='small'] {
        min-height: 24px;
        line-height: ${variables.lineHeight};
        font-size: ${variables.fontSizeSmall};
    }

    &[data-error] {
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${variables.errorColor};
    }
`;

const label = css`
    color: ${variables.textColor};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1 0 0px; /* stylelint-disable-line length-zero-no-unit  */
    padding: 3px 0 3px ${variables.spacingHalf};

    [data-disabled] > & {
        ${lightOrDark(variables.gray96, variables.gray60)};
        color: ${variables.textGray};
        cursor: not-allowed;
    }
`;

const remove = css`
    color: inherit;
    flex: 0 0 ${variables.inputHeight};
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    padding: 3px 0;
    text-align: center;
    height: inherit;

    [data-size='small'] > & {
        padding: 3px 0;
        flex-basis: ${variables.inputHeightSmall};
    }

    [data-error] > & {
        border: 1px solid ${variables.errorColor};
        border-left: none;
    }

    &:focus {
        box-shadow: ${variables.focusShadow};
        color: ${variables.linkColor};
    }

    &:hover {
        background-color: ${lightOrDark(variables.gray96, variables.gray30)};
        color: ${variables.linkColor};
    }
`;

registerStyles('File.Item', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
    StyledLabel: { component: 'div', styles: label },
    StyledRemoveClickable: { component: Clickable, styles: remove },
});
