import { css } from 'styled-components';
import { getReference, mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    text-align: center;
    margin-top: ${variables.spacing};

    &[data-flex='true'] {
        display: flex;

        > ${/* sc-sel */ getReference('TabLayout', 'StyledPanel')} {
            width: 100%;
        }

        > [role='tablist'] {
            flex: 0 0 auto;
        }
    }
`;

const panel = css`
    ${mixins.reset('block')};
`;

registerStyles('TabLayout', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
    StyledPanel: { component: 'div', styles: panel },
});
