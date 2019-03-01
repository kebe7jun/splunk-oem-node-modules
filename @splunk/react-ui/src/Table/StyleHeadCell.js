import { css } from 'styled-components';
import { getReference, mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('table-cell')};
    background-color: ${variables.gray92};
    box-sizing: content-box;
    vertical-align: top;
    text-align: left;

    + ${/* sc-sel */ getReference('Table.HeadCell', 'Styled')} {
        border-left: 1px solid ${variables.backgroundColor};
    }

    &:focus {
        box-shadow: ${variables.focusShadowInset};
        outline: none;
    }

    &[data-dragging] {
        background: ${variables.gray80};
        box-shadow: none;
    }
`;

const headCellReference = getReference('Table.HeadCell', 'Styled');

const guideLine = css`
    ${mixins.reset('block')};
    width: 1px;
    position: absolute;
    background-color: ${variables.linkColor};
    height: 100%;
    top: 0;
    z-index: 1;

    &[data-position='before'] {
        float: left;

        /* prettier-ignore */
        ${/* sc-sel */ headCellReference}:not(:first-child) > & {
            margin-left: -1px;
        }
    }

    &[data-position='after'] {
        right: 0;
    }
`;

const mainDark = css`
    ${main};
    background-color: #212527;

    &[data-dragging] {
        background: ${variables.gray20};
    }
`;

registerStyles('Table.HeadCell', 'enterprise.light', {
    Styled: { component: 'th', styles: main },
    StyledGuideLine: { component: 'div', styles: guideLine },
});

registerStyles('Table.HeadCell', 'enterprise.dark', {
    Styled: { component: 'th', styles: mainDark },
});
