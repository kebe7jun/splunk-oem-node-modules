import { css } from 'styled-components';
import Clickable from '@splunk/react-ui/Clickable';
import { getReference, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    background-color: ${variables.gray92};
    border-radius: 2px;
    height: 32px;
    color: ${variables.textGray};
    display: inline-flex;
    flex: 0 1 auto;
    line-height: 16px;
    margin-right: 2px;
    margin-bottom: 2px;

    &[data-size='small'] {
        height: calc(${variables.inputHeightSmall} - 6px);
        padding: 2px ${variables.spacingQuarter};
        font-size: ${variables.fontSizeSmall};
        max-width: calc(100% - 3px);
    }

    &[data-size='medium'] {
        height: calc(${variables.inputHeight} - 6px);
        padding: ${variables.spacingQuarter} 8px;
        max-width: calc(100% - 3px);
    }

    &:focus {
        box-shadow: ${variables.focusShadow};
        color: ${variables.linkColor};
    }

    &:not([disabled]):hover {
        background-color: ${variables.gray96};
        color: ${variables.linkColor};
    }

    &[disabled] {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

const inner = css`
    display: flex;
    max-width: 100%;
`;

const icon = css`
    flex: 0 0 auto;
    margin-right: 3px;
    color: ${variables.textColor};

    [disabled] > ${/* sc-sel */ getReference('Multiselect.Item', 'StyledInner')} > & {
        color: ${variables.textDisabledColor};
    }
`;

const label = css`
    flex: 0 1 auto;
    color: ${variables.textColor};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    [disabled] > ${/* sc-sel */ getReference('Multiselect.Item', 'StyledInner')} > & {
        color: ${variables.textDisabledColor};
    }
`;

const remove = css`
    color: inherit;
    font-size: 0.75em;
    padding-left: ${variables.spacingQuarter};
    flex: 0 0 auto;
`;

const mainDark = css`
    ${main};
    background-color: ${variables.gray45};

    &:not([disabled]):hover {
        background-color: ${variables.gray30};
        color: ${variables.linkColor};
    }

    &[disabled] {
        background-color: rgba(0, 0, 0, 0.15);
    }
`;

registerStyles('Multiselect.Item', 'enterprise.light', {
    StyledClickable: { component: Clickable, styles: main },
    StyledInner: { component: 'div', styles: inner },
    StyledIcon: { component: 'div', styles: icon },
    StyledLabel: { component: 'div', styles: label },
    StyledRemove: { component: 'span', styles: remove },
});

registerStyles('Multiselect.Item', 'enterprise.dark', {
    StyledClickable: { component: Clickable, styles: mainDark },
});
