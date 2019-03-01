import { css } from 'styled-components';
import { getReference, mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const tableHorizontalSpacing = '12px';

const main = css`
    ${mixins.reset('flex')};
    ${mixins.clearfix()};
    padding: 6px ${tableHorizontalSpacing};
    position: relative;

    &[data-dragging] {
        opacity: 0;
    }

    &[data-draggable] {
        padding-left: 16px;
        -webkit-user-drag: element;
        user-select: none;
    }

    &[data-clickable]:hover {
        color: ${variables.linkColorHover};
    }

    &[data-text-align='left'] {
        justify-content: flex-start;
    }

    &[data-text-align='right'] {
        justify-content: flex-end;
    }

    &[data-text-align='center'] {
        justify-content: center;
    }

    /* The drag ghost */
    &[data-helper] {
        background-color: ${variables.accentColorL50};
        position: absolute;
        left: -10000px;
        top: -10000px;
        box-shadow: ${variables.overlayShadow};
        box-sizing: border-box;
        background-repeat: repeat-x;
        border: 1px solid ${variables.borderColor};
    }

    @media print {
        background-image: none;
    }
`;

const label = css`
    flex: 0 1 auto;
    position: relative;
    overflow: hidden;
    word-wrap: break-word;

    &[data-truncate] {
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &[data-fill] {
        flex: 1 0 0px; /* stylelint-disable-line length-zero-no-unit  */
    }

    &[data-sortable] {
        padding-right: calc(${tableHorizontalSpacing} + 4px);
    }

    [data-text-align='left'] > & {
        text-align: left;
    }

    [data-text-align='right'] > & {
        text-align: right;
    }

    [data-text-align='center'] > & {
        text-align: center;
    }

    ${/* sc-sel */ getReference('Table.HeadInner', 'StyledDragContainer')} + & {
        margin-left: ${tableHorizontalSpacing};
    }
`;

const sortIcon = css`
    padding-left: ${tableHorizontalSpacing};
    position: absolute;
    right: 0;
    top: -1px;
    color: ${variables.textGray};

    &[data-sorted] {
        color: ${variables.accentColor};
    }
`;

const menuIcon = css`
    color: ${variables.textGray};
    padding-left: 4px;
    padding-top: 1px;
`;

const resize = css`
    ${mixins.reset('block')};
    position: absolute;
    right: -5px;
    width: 9px;
    top: 0;
    bottom: 0;
    z-index: 1;
    cursor: col-resize;

    th:last-child > ${/* sc-sel */ getReference('Table.HeadInner', 'Styled')} > & {
        right: 0;
        width: 5px;
    }

    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &:focus {
        outline: none;

        &::before {
            content: '';
            position: absolute;
            background: ${variables.focusColor};
            box-shadow: ${variables.focusShadow};
            left: 4px;
            width: 1px;
            top: 0;
            bottom: 0;
        }
    }
`;

const dragContainer = css`
    position: absolute;
    cursor: move;
    top: 0;
    left: 0;
    padding: 9px ${tableHorizontalSpacing} 7px;
`;

const drag = css`
    display: block;
    width: 7px;
    height: 16px;
    cursor: move;
    background: ${variables.draggableBackground};
    opacity: 0.5;
`;

const mainDark = css`
    ${main};

    &[data-helper] {
        background-color: ${variables.accentColorD50};
    }
`;

registerStyles('Table.HeadInner', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
    StyledResize: { component: 'button', styles: resize },
    StyledLabel: { component: 'span', styles: label },
    StyledSortIcon: { component: 'span', styles: sortIcon },
    StyledMenuIcon: { component: 'span', styles: menuIcon },
    StyledDragContainer: { component: 'div', styles: dragContainer },
    StyledDrag: { component: 'div', styles: drag },
});

registerStyles('Table.HeadInner', 'enterprise.dark', {
    Styled: { component: 'div', styles: mainDark },
});
