import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('flex')};

    &[data-inline] {
        display: inline-flex;
    }
`;

const step = css`
    ${mixins.reset('block')};
    flex: 1 1 0px; /* stylelint-disable-line length-zero-no-unit  */
    text-align: center;
    position: relative;
    padding: 25px 15px 0;

    &:not([data-status='active']):not([data-status='prev']) {
        color: ${variables.textDisabledColor};
    }
`;

const svg = css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
`;

const prevOrActive = css`
    fill: ${variables.brandColor};
`;

const gray = css`
    fill: ${variables.gray80};
`;

const next = css`
    stroke: ${variables.gray80};
    stroke-width: 3px;
    fill: ${variables.backgroundColor};
`;

registerStyles('StepBar', 'enterprise.light', {
    Styled: { component: 'ul', styles: main },
});

registerStyles('StepBar.Step', 'enterprise.light', {
    Styled: { component: 'li', styles: step },
    StyledSvg: { component: 'svg', styles: svg },
    StyledPrevOrActiveRect: { component: 'rect', styles: prevOrActive },
    StyledPrevOrActiveCircle: { component: 'circle', styles: prevOrActive },
    StyledGray: { component: 'rect', styles: gray },
    StyledNext: { component: 'circle', styles: next },
});
