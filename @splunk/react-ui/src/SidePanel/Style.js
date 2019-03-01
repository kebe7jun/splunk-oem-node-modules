import { css } from 'styled-components';
import TransitionOpen from '@splunk/react-ui/TransitionOpen';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const panel = css`
    ${mixins.reset()};
    position: fixed;
    display: flex;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
    flex-direction: column;
    background-color: ${variables.backgroundColor};
    z-index: ${variables.zindexModal};
`;

const leftPanel = css`
    ${panel};
    top: 0;
    left: 0;
    height: 100vh;
`;

const rightPanel = css`
    ${panel};
    right: 0;
    top: 0;
    height: 100vh;
`;

const topPanel = css`
    ${panel};
    top: 0;
    left: 0;
    width: 100vw;
`;

const bottomPanel = css`
    ${panel};
    left: 0;
    bottom: 0;
    width: 100vw;
`;

registerStyles('SidePanel', 'enterprise.light', {
    StyledLeftPanelTransitionOpen: { component: TransitionOpen, styles: leftPanel },
    StyledRightPanelTransitionOpen: { component: TransitionOpen, styles: rightPanel },
    StyledTopPanelTransitionOpen: { component: TransitionOpen, styles: topPanel },
    StyledBottomPanelTransitionOpen: { component: TransitionOpen, styles: bottomPanel },
});
