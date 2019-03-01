import { css } from 'styled-components';
import Clickable from '@splunk/react-ui/Clickable';
import { registerStyles, variables } from '@splunk/react-ui/Themes';

const tabUnderlineSize = '3px';
const tabHorizontalPadding = variables.spacing;
const tabVerticalPadding = variables.spacingHalf;

const main = css`
    flex: 0 1 auto;
    display: block;
    position: relative;
    line-height: 24px;
    text-align: center;
    white-space: nowrap;
    color: ${variables.textColor};

    &[data-tab-layout='horizontal'] {
        padding: ${tabUnderlineSize} ${tabHorizontalPadding};
        margin-bottom: 1px;
    }

    &[data-tab-layout='vertical'] {
        width: 100%;
        text-align: left;
        padding: ${tabVerticalPadding} ${tabHorizontalPadding};
        right: 1px;

        &[data-tab-has-icon] {
            text-align: center;
        }
    }

    &[aria-selected='true'] {
        cursor: default;
    }

    &[aria-selected='false'] {
        box-shadow: none;

        &:focus {
            box-shadow: ${variables.focusShadowInset};
        }
    }
`;

const underline = css`
    position: absolute;
    background: ${variables.borderLightColor};

    [data-tab-layout='horizontal'] > & {
        height: 0;
        box-sizing: border-box;
        width: calc(100% - ${tabHorizontalPadding} * 2);
        bottom: -1px;
        transition: height 0.2s;
    }

    [aria-selected='true'] > & {
        background: ${variables.accentColor};
    }

    [data-tab-layout='horizontal'][aria-selected='true'] > &,
    [data-tab-layout='horizontal']:hover:not([disabled]) > & {
        height: ${tabUnderlineSize};
    }

    [data-tab-layout='vertical'] > & {
        width: 0;
        height: calc(100% - ${tabVerticalPadding} * 2);
        top: ${tabVerticalPadding};
        right: -1px;
        transition: width 0.2s;
    }

    [data-tab-layout='vertical'][aria-selected='true'] > &,
    [data-tab-layout='vertical']:hover:not([disabled]) > & {
        width: ${tabUnderlineSize};
    }
`;

const icon = css`
    &[data-icon-size='inline'] {
        text-align: left;
        padding-right: 0.4em;

        > svg {
            transform: translateY(-1px);
        }
    }

    &[data-icon-size='small'] {
        font-size: 24px;
        height: 24px;
        text-align: center;
        display: block;
        padding: 4px 0;
    }

    &[data-icon-size='large'] {
        font-size: 48px;
        height: 48px;
        text-align: center;
        display: block;
        padding: 8px 0 0;
    }
`;

const label = css`
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 10px;
`;

const tooltipContent = css`
    padding: 8px;
    font-size: ${variables.fontSizeSmall};
`;

registerStyles('TabBar.Tab', 'enterprise.light', {
    StyledClickable: { component: Clickable, styles: main },
    StyledUnderline: { component: 'div', styles: underline },
    StyledIcon: { component: 'span', styles: icon },
    StyledLabel: { component: 'div', styles: label },
    StyledTooltipContent: { component: 'div', styles: tooltipContent },
});
