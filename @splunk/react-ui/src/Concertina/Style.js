import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import Box from '@splunk/react-ui/Box';
import Scroll from '@splunk/react-ui/Scroll';
import { lightOrDark, registerStyles, transformVariable, variables } from '@splunk/react-ui/Themes';

const warningBackgroundColorDark = transformVariable(`warningColor`, variable =>
    tinycolor(variable)
        .setAlpha(0.5)
        .toRgbString()
);

const errorBackgroundColorDark = transformVariable(`errorColor`, variable =>
    tinycolor(variable)
        .setAlpha(0.5)
        .toRgbString()
);

const scroll = css`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`;

const main = css`
    ${scroll};
    overflow: hidden;
`;

const top = css`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
    background-color: ${variables.backgroundColor};

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        height: 10px;
        left: 0;
        right: 0;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
    }
`;

const bottom = css`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${variables.backgroundColor};

    &::before {
        content: '';
        position: absolute;
        top: -5px;
        height: 5px;
        left: 0;
        right: 0;
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
    }
`;

const panelBody = css`
    :not([data-status]) > & {
        background-color: ${variables.backgroundColor};
    }

    [data-status='error'] > & {
        background-color: ${lightOrDark(variables.errorColorL50, errorBackgroundColorDark)};
    }

    [data-status='warning'] > & {
        background-color: ${lightOrDark(variables.warningColorL50, warningBackgroundColorDark)};
    }

    [data-status='disabled'] > & {
        display: none;
    }
`;

registerStyles('Concertina', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
    StyledScroll: { component: Scroll, styles: scroll },
    StyledTop: { component: 'div', styles: top },
    StyledBottom: { component: 'div', styles: bottom },
});

registerStyles('Concertina.Panel', 'enterprise.light', {
    StyledPanelBody: { component: 'div', styles: panelBody },
});
