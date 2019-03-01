import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const clickable = css`
    ${mixins.reset('inline')};
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
        color: ${variables.textDisabledColor};
    }

    /* Fix for oversized buttons in Firefox */
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
`;

registerStyles('Clickable', 'enterprise.light', {
    StyledA: { component: 'a', styles: clickable },
    StyledButton: { component: 'button', styles: clickable },
});
