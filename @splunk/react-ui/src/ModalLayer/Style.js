import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { mixins, registerStyles, transformVariable, variables } from '@splunk/react-ui/Themes';

const clickAwayOverlayBackgroundColor = transformVariable('gray30', variable =>
    tinycolor(variable)
        .setAlpha(0.8)
        .toRgbString()
);

const overlay = css`
    ${mixins.reset('block')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const clickAwayOverlay = css`
    ${overlay};
    z-index: ${variables.zindexModalBackdrop};
    background-color: ${clickAwayOverlayBackgroundColor};
`;

const peekOverlay = css`
    ${overlay};
    z-index: ${variables.zindexModal};
`;

registerStyles('ModalLayer', 'enterprise.light', {
    StyledClickAwayOverlay: { component: 'div', styles: clickAwayOverlay },
    StyledPeekOverlay: { component: 'div', styles: peekOverlay },
});
