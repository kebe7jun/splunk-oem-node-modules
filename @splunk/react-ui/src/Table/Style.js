import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('block')};
    max-width: 100%;
    position: relative;

    @media print {
        max-height: none !important;
    }
`;

const tableContainer = css`
    overflow: auto;
`;

const table = css`
    ${mixins.reset('table')};
    position: relative;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 100%;

    &[data-fixed-column='true'] {
        table-layout: fixed;
        min-width: 0;
        width: 0;
    }

    @media print {
        width: 100%;
        max-width: 100%;
        table-layout: auto;
    }
`;

const dockedScrollBar = css`
    position: fixed;
    bottom: 0;
    overflow: auto;
    z-index: calc(${variables.zindexFixedNavbar} - 1);
`;

const dockedScrollBarContent = css`
    height: 1px;
`;

const headTable = css`
    ${table};
    min-width: 0;
    table-layout: fixed;
`;

const headTableDockedContainer = css`
    overflow: hidden;
    position: fixed;
    box-shadow: ${variables.overlayShadow};
    z-index: ${variables.zindexFixedNavbar};

    @media print {
        display: none;
    }
`;

const headTableFixedContainer = css`
    ${headTableDockedContainer};
    position: absolute;
    box-shadow: none;
    z-index: 1;
`;

const body = css`
    ${mixins.reset('table-row-group')};
`;

const head = css`
    ${mixins.reset('table-header-group')};
`;

registerStyles('Table', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
    StyledTableContainer: { component: 'div', styles: tableContainer },
    StyledTable: { component: 'table', styles: table },
    StyledDockedScrollbar: { component: 'div', styles: dockedScrollBar },
    StyledDockedScrollbarContent: { component: 'div', styles: dockedScrollBarContent },
});

registerStyles('Table.HeadTable', 'enterprise.light', {
    Styled: { component: 'table', styles: headTable },
    StyledDockedContainer: { component: 'div', styles: headTableDockedContainer },
    StyledFixedContainer: { component: 'div', styles: headTableFixedContainer },
});

registerStyles('Table.Body', 'enterprise.light', {
    Styled: { component: 'tbody', styles: body },
});

registerStyles('Table.Head', 'enterprise.light', {
    Styled: { component: 'thead', styles: head },
});
