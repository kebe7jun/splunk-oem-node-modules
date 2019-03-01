import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const tableCellPadding = '28px';

const main = css`
    ${mixins.reset('table-cell')};
    padding: 6px 12px;
    vertical-align: top;
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
    word-wrap: break-word;

    &[data-text-align='right'] {
        text-align: right;
    }

    &[data-text-align='center'] {
        text-align: center;
    }

    &[data-appearance='link'] {
        color: ${variables.linkColor};
    }

    &[data-appearance='rowLink'] {
        color: ${variables.linkColor};

        *:hover > & {
            cursor: pointer;
        }
    }

    &[data-clickable] {
        cursor: pointer;

        &:hover {
            background-color: ${variables.accentColorL50};
        }

        &:focus {
            box-shadow: ${variables.focusShadowInset};
        }
    }

    &[data-role='expand'] {
        padding-left: 0;
        padding-right: 0;
    }

    /* (Bottom of previous cell above 6px) + 8px = 14px; */
    [data-expansion-row='true'] > &:first-child {
        padding-top: calc(${tableCellPadding} - ${variables.spacing});
    }

    [data-expansion-row='true'] > &:last-child {
        padding-bottom: calc(${tableCellPadding} / 2);
    }

    [data-has-movable-columns='true'] > &:not([data-movable-column='false']) {
        padding-left: calc(${tableCellPadding} + 1px);

        &:first-child {
            padding-left: ${tableCellPadding};
        }
    }
`;

const mainDark = css`
    ${main};

    &[data-clickable] {
        &:hover {
            background-color: ${variables.accentColorD50};
        }
    }
`;

registerStyles('Table.Cell', 'enterprise.light', {
    Styled: { component: 'td', styles: main },
});

registerStyles('Table.Cell', 'enterprise.dark', {
    Styled: { component: 'td', styles: mainDark },
});
