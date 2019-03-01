import { css } from 'styled-components';
import Clickable from '@splunk/react-ui/Clickable';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const item = css`
    ${mixins.reset('block')};
    padding: 6px ${variables.spacingHalf};
    position: relative;
    cursor: pointer;
    font-weight: normal;
    line-height: ${variables.lineHeight};
    color: ${variables.gray45};
    text-decoration: none;
    word-wrap: break-word;
    max-width: 100%;
    width: 100%;

    /* stylelint-disable length-zero-no-unit */
    flex: 1 0 0px;
    /* stylelint-enable */

    &[data-selectable='true'] {
        padding-left: 28px;
    }

    &[data-selectable-appearance='checkbox'] {
        padding-left: 32px;
    }

    /*  truncated dropdown text */
    &[data-truncation='false'] {
        white-space: normal;
    }

    /*  truncated dropdown text */
    &[data-truncation='true'] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &:not([disabled]) {
        &:hover {
            background: ${variables.backgroundColorHover};
        }

        &:focus {
            outline: 0;
            box-shadow: ${variables.focusShadowInset};
        }
    }

    &[data-active] {
        box-shadow: ${variables.focusShadowInset};
    }

    [disabled] {
        color: ${variables.textDisabledColor};
        cursor: not-allowed;
    }
`;

const label = css`
    overflow: inherit;
    white-space: inherit;
    text-overflow: inherit;
    max-width: 100%;

    [data-truncation='true'] > & {
        display: block;
        clear: both;
    }
`;

const match = css`
    color: ${variables.accentColor};
`;

const itemDescription = css`
    color: ${variables.textGray};
    font-size: ${variables.fontSizeSmall};
    overflow: inherit;
    white-space: inherit;
    text-overflow: inherit;

    [disabled] > & {
        color: inherit;
    }
`;

const itemDescriptionBottom = css`
    ${itemDescription};
    display: block;
`;

const itemDescriptionRight = css`
    ${itemDescription};
    float: right;
    padding-left: ${variables.spacing};
    max-width: 50%;
    text-align: right;
    box-sizing: border-box;
`;

const itemSelectedIcon = css`
    position: absolute;
    left: 8px;
    top: 5px;
    color: ${variables.accentColorL10};
`;

const itemIcon = css`
    padding-right: 3px;
    min-width: 10px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    transform: translateY(-1px);
`;

const submenu = css`
    float: right;
    padding-left: ${variables.spacingHalf};
    color: ${variables.textGray};
`;

const itemDark = css`
    ${item};
    color: ${variables.gray96}; /* light mode doesn't use textColor */
`;

registerStyles('Menu.Item', 'enterprise.light', {
    StyledClickable: { component: Clickable, styles: item },
    StyledLabel: { component: 'span', styles: label },
    StyledMatch: { component: 'span', styles: match },
    StyledItemSelectedIcon: { component: 'div', styles: itemSelectedIcon },
    StyledSubmenu: { component: 'span', styles: submenu },
    StyledItemDescriptionBottom: { component: 'span', styles: itemDescriptionBottom },
    StyledItemDescriptionRight: { component: 'span', styles: itemDescriptionRight },
    StyledItemIcon: { component: 'span', styles: itemIcon },
});

registerStyles('Menu.Item', 'enterprise.dark', {
    StyledClickable: { component: Clickable, styles: itemDark },
});
