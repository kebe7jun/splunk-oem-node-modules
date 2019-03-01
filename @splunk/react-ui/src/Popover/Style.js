import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { mixins, registerStyles, transformVariable, variables } from '@splunk/react-ui/Themes';

const arrowHeight = '8px';

const main = css`
    position: fixed;
    z-index: ${variables.zindexPopover};
    left: -300%;
    top: -300%;
`;

const boxWrapper = css`
    ${mixins.reset('block')};
    padding: ${arrowHeight};
`;

const box = css`
    ${mixins.reset('block')};
    background-color: transparent;
`;

const lightBoxShadowColor = transformVariable('gray20', variable =>
    tinycolor(variable)
        .setAlpha(0.1)
        .toRgbString()
);
const light = css`
    ${box};
    background-color: ${variables.backgroundColor};
    color: ${variables.textColor};
    border: ${variables.border};
    box-shadow: 0 2px 2px ${lightBoxShadowColor};
    border-radius: ${variables.borderRadius};
`;

const dark = css`
    ${box};
    background-color: ${variables.gray20};
    color: ${variables.white};
`;

const arrow = css`
    width: 0;
    height: 0;
    border-left: ${arrowHeight} solid transparent;
    border-right: ${arrowHeight} solid transparent;
    position: absolute;
    border-bottom: ${arrowHeight} solid ${variables.borderColor};

    /* IE11 hack to maintain opacity transition */
    @media all and (-ms-high-contrast: none) {
        opacity: inherit;
    }
`;

const lightArrow = css`
    ${arrow};

    &::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: ${arrowHeight} solid transparent;
        border-right: ${arrowHeight} solid transparent;
        border-bottom: ${arrowHeight} solid ${variables.backgroundColor};
        position: absolute;
        top: 1px;
        left: 0;
        margin-left: -${arrowHeight};
    }
`;

const darkArrow = css`
    ${arrow};
    border-bottom-color: ${variables.gray20};
`;

const lowerRightCorner = css`
    position: fixed;
    right: 0;
    bottom: 0;
`;

const lightDark = css`
    ${light};
    border: ${variables.borderDark};
    box-shadow: 0 1px 2px ${variables.black};
`;

const lightArrowDark = css`
    ${lightArrow};

    /* from arrow */
    border-bottom: ${arrowHeight} solid ${variables.borderDarkColor};
`;

const darkDark = css`
    ${dark};
    background-color: ${variables.white};
    color: ${variables.gray20};
`;

const darkArrowDark = css`
    ${darkArrow};
    border-bottom-color: ${variables.white};
`;

registerStyles('Popover', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
    StyledBoxWrapper: { component: 'div', styles: boxWrapper },
    StyledBox: { component: 'div', styles: box },
    StyledLight: { component: 'div', styles: light },
    StyledDark: { component: 'div', styles: dark },
    StyledLightArrow: { component: 'div', styles: lightArrow },
    StyledDarkArrow: { component: 'div', styles: darkArrow },
    StyledLowerRightCorner: { component: 'div', styles: lowerRightCorner },
});

registerStyles('Popover', 'enterprise.dark', {
    StyledLight: { component: 'div', styles: lightDark },
    StyledDark: { component: 'div', styles: darkDark },
    StyledLightArrow: { component: 'div', styles: lightArrowDark },
    StyledDarkArrow: { component: 'div', styles: darkArrowDark },
});
