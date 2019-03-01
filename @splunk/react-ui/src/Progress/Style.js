import { css, keyframes } from 'styled-components';
import Tooltip from '@splunk/react-ui/Tooltip';
import { registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    background-color: ${variables.accentColorD10};
    height: 3px;
    position: relative;
    transition: width 300ms;
    overflow: hidden;
    padding-left: ${variables.spacingHalf};
`;

const pulse = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const puck = css`
    animation-duration: 1500ms;
    animation-name: ${pulse};
    animation-iteration-count: infinite;
    animation-direction: alternate;
    height: 3px;
    width: 300px;
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(
        90deg,
        ${variables.accentColorD10},
        ${variables.accentColorL10},
        40%,
        ${variables.accentColorL40},
        80%,
        ${variables.accentColorL40}
    );
`;

registerStyles('Progress', 'enterprise.light', {
    StyledTooltip: { component: Tooltip, styles: main },
    StyledPuck: { component: 'div', styles: puck },
});
