import { css } from 'styled-components';
import {
    lightOrDark,
    getReference,
    mixins,
    registerStyles,
    variables,
} from '@splunk/react-ui/Themes';

const edgeWidth = '9px';
const edgeLength = '14px';
const edgePadding = '3px';
const cornerSize = '11px';

const main = css`
    ${mixins.reset('block')};
    position: relative;

    &[data-border-n] {
        margin-top: ${edgeWidth};
    }

    &[data-border-e] {
        margin-right: ${edgeWidth};
    }

    &[data-border-s] {
        margin-bottom: ${edgeWidth};
    }

    &[data-border-w] {
        margin-left: ${edgeWidth};
    }
`;

const resize = css`
    ${mixins.reset('block')};
    color: ${lightOrDark(variables.borderColor, variables.gray92)};

    &:hover,
    &:focus {
        color: ${variables.linkColor};
    }

    &[data-hover] {
        opacity: 0;
        transition: opacity 200ms;

        ${/* sc-sel */ getReference('Resize', 'Styled')}:hover > &,
        &:focus {
            opacity: 1;
        }
    }
`;

const svg = css`
    display: block;
    width: ${cornerSize};
    height: ${cornerSize};
`;

const path = css`
    stroke-width: 1.1px;
    stroke: currentColor;
`;

const resizeCorner = css`
    ${resize};
    width: ${cornerSize};
    height: ${cornerSize};
    position: absolute;
    background-clip: content-box;
    z-index: 2; /* Must be above resize border */
`;

const resizeNW = css`
    ${resizeCorner};
    top: 0;
    left: 0;
    cursor: nwse-resize;

    > ${/* sc-sel */ getReference('Resize', 'StyledSvg')} {
        transform: rotate(180deg);
    }

    [data-border-n] > & {
        top: -${edgeWidth};
    }

    [data-border-w] > & {
        left: -${edgeWidth};
    }
`;

const resizeNE = css`
    ${resizeCorner};
    right: 0;
    top: 0;
    cursor: nesw-resize;

    > ${/* sc-sel */ getReference('Resize', 'StyledSvg')} {
        transform: rotate(-90deg);
    }

    [data-border-n] > & {
        top: -${edgeWidth};
    }

    [data-border-e] > & {
        right: -${edgeWidth};
    }
`;

const resizeSE = css`
    ${resizeCorner};
    right: 0;
    bottom: 0;
    cursor: nwse-resize;

    [data-border-s] > & {
        bottom: -${edgeWidth};
    }

    [data-border-e] > & {
        right: -${edgeWidth};
    }
`;

const resizeSW = css`
    ${resizeCorner};
    left: 0;
    bottom: 0;
    cursor: nesw-resize;

    > ${/* sc-sel */ getReference('Resize', 'StyledSvg')} {
        transform: rotate(90deg);
    }

    [data-border-s] > & {
        bottom: -${edgeWidth};
    }

    [data-border-w] > & {
        left: -${edgeWidth};
    }
`;

const resizeEdge = css`
    ${resize};
    padding: ${edgePadding};
    position: absolute;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        height: calc(${edgeWidth} - ${edgePadding} * 2);
        width: calc(${edgeWidth} - ${edgePadding} * 2);
        box-sizing: border-box;
        border: 0 solid currentColor;
    }
`;

const resizeVert = css`
    ${resizeEdge};
    width: ${edgeLength};
    height: ${edgeWidth};
    left: calc(50% - ${edgeLength} / 2);
    cursor: ns-resize;

    &::after {
        width: ${edgeLength};
        border-width: 1px 0;
        top: ${edgePadding};
        left: calc(50% - ${edgeLength} / 2);
    }

    &[data-border] {
        left: 0;
        width: 100%;
    }
`;

const resizeN = css`
    ${resizeVert};
    top: 0;

    &[data-border] {
        top: -${edgeWidth};
    }
`;

const resizeS = css`
    ${resizeVert};
    bottom: 0;

    &[data-border] {
        bottom: -${edgeWidth};
    }
`;

const resizeHorz = css`
    ${resizeEdge};
    height: ${edgeLength};
    width: ${edgeWidth};
    top: calc(50% - ${edgeLength} / 2);
    cursor: ew-resize;

    &::after {
        height: ${edgeLength};
        border-width: 0 1px;
        left: ${edgePadding};
        top: calc(50% - ${edgeLength} / 2);
    }

    &[data-border] {
        height: 100%;
        top: 0;
    }
`;

const resizeE = css`
    ${resizeHorz};
    right: 0;

    &[data-border] {
        right: -${edgeWidth};
    }
`;

const resizeW = css`
    ${resizeHorz};
    left: 0;

    &[data-border] {
        left: -${edgeWidth};
    }
`;

registerStyles('Resize', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
    StyledSvg: { component: 'svg', styles: svg },
    StyledPath: { component: 'path', styles: path },
    StyledResizeNW: { component: 'button', styles: resizeNW },
    StyledResizeNE: { component: 'button', styles: resizeNE },
    StyledResizeSE: { component: 'button', styles: resizeSE },
    StyledResizeSW: { component: 'button', styles: resizeSW },
    StyledResizeN: { component: 'button', styles: resizeN },
    StyledResizeS: { component: 'button', styles: resizeS },
    StyledResizeE: { component: 'button', styles: resizeE },
    StyledResizeW: { component: 'button', styles: resizeW },
});
