import { css } from 'styled-components';
import { mixins, registerStyles } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('flex')};

    &[data-wrap-cards='true'] {
        flex-wrap: wrap;
    }

    &[data-align-cards='center'] {
        justify-content: center;
    }

    &[data-align-cards='right'] {
        justify-content: flex-end;
    }
`;

registerStyles('CardLayout', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
});
