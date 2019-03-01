import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('flex')};
    content: '';
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border: 0 solid ${variables.borderLightColor};
    }

    &[data-tab-layout='horizontal'] {
        &::before {
            border-bottom-width: 1px;
        }
    }

    &[data-tab-layout='vertical'] {
        display: inline-block;

        &::before {
            border-right-width: 1px;
        }
    }
`;

registerStyles('TabBar', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
});
