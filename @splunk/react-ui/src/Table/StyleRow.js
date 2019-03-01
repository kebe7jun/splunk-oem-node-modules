import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

import Cell from './Cell';

const main = css`
    ${mixins.reset('table-row')};

    &[data-clickable] {
        cursor: pointer;

        &:hover {
            background-color: ${variables.accentColorL50};
        }

        &:focus {
            box-shadow: ${variables.focusShadowInset};
        }
    }

    @media print {
        background-color: none;
    }
`;

const odd = css`
    ${main};
`;

const even = css`
    ${main};
    background-color: ${variables.gray96};
`;

const disabledSelectionCell = css`
    && {
        /* must have higher specificity than &[data-clickable] in StyleCell */
        cursor: not-allowed;
    }
`;

const disabledExpansionCell = css`
    width: 35px;
`;

const mainDark = css`
    ${main};

    &[data-clickable] {
        &:hover {
            background-color: ${variables.accentColorD50};
        }
    }
`;

const oddDark = css`
    ${mainDark};
    background-color: ${variables.gray22};
`;

const evenDark = css`
    ${mainDark};
    background-color: ${variables.gray25};
`;

registerStyles('Table.Row', 'enterprise.light', {
    StyledStripeOdd: { component: 'tr', styles: odd },
    StyledStripeEven: { component: 'tr', styles: even },
    StyledStripeNone: { component: 'tr', styles: main },
    StyledCellSelectionDisabled: { component: Cell, styles: disabledSelectionCell },
    StyledCellExpansionDisabled: { component: Cell, styles: disabledExpansionCell },
});

registerStyles('Table.Row', 'enterprise.dark', {
    StyledStripeOdd: { component: 'tr', styles: oddDark },
    StyledStripeEven: { component: 'tr', styles: evenDark },
    StyledStripeNone: { component: 'tr', styles: mainDark },
});
