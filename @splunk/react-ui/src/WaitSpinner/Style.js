import { css, keyframes } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('inline-block')};
    overflow: hidden;
    text-align: center;

    &[data-size='small'] {
        height: 14px;
    }

    &[data-size='medium'] {
        height: 19px;
    }
`;

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const svg = css`
    transform-origin: center;
    animation: ${spin} 1.2s steps(64) infinite;

    [data-size='small'] > & {
        width: 14px;
        height: 14px;
    }

    [data-size='medium'] > & {
        width: 19px;
        height: 19px;
    }
`;

const circle = css`
    fill: transparent;
    stroke: ${variables.gray60};
    stroke-width: 2px;
    stroke-dasharray: 34 19;
`;

const circleDark = css`
    ${circle};
    stroke: ${variables.white};
`;

registerStyles('WaitSpinner', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
    StyledSvg: { component: 'svg', styles: svg },
    StyledCircle: { component: 'circle', styles: circle },
});

registerStyles('WaitSpinner', 'enterprise.dark', {
    StyledCircle: { component: 'circle', styles: circleDark },
});
