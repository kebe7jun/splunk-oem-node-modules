import { css } from 'styled-components';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('flex')};
    flex-direction: column;
    max-height: calc(100vh - 20px);
`;

const footer = css`
    padding: 6px ${variables.spacingHalf};
    color: ${variables.textGray};

    &:not([data-placement='above']) {
        border-top: ${variables.border};
    }

    &[data-placement='above'] {
        border-bottom: ${variables.border};
    }
`;

const loading = css`
    ${mixins.reset('flex')};
    padding: 6px ${variables.spacingHalf};
`;

const wait = css`
    margin-right: ${variables.spacingQuarter};
    flex: 0 0 auto;
`;

const loadingMessage = css`
    color: ${variables.textGray};
    flex: 1 0 0px; /* stylelint-disable-line length-zero-no-unit  */
`;

registerStyles('ResultsMenu', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
    StyledFooter: { component: 'div', styles: footer },
    StyledLoading: { component: 'li', styles: loading },
    StyledWait: { component: WaitSpinner, styles: wait },
    StyledLoadingMessage: { component: 'div', styles: loadingMessage },
});
