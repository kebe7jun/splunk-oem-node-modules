import { css } from 'styled-components';
import { lightOrDark, registerStyles, variables } from '@splunk/react-ui/Themes';

const appearances = {
    corporate: '#97999b',
    enterprise: '#5cc05c', // splunk enterprise green
    light: '#f58220', // splunk lite orange
};

const main = css`
    flex: 0 0 auto;
    stroke-width: 0;

    &[data-inline='true'] {
        vertical-align: middle;
        display: inline-block;
    }

    &[data-inline='false'] {
        display: block;
        margin: 0 auto;
    }

    &[data-inverted='false'] > [data-color='text'] {
        fill: ${lightOrDark(variables.gray20, variables.white)};
    }

    &[data-inverted='true'] > [data-color='text'] {
        fill: ${lightOrDark(variables.white, variables.gray20)};
    }

    > [data-color='brand'] {
        fill: ${({ appearance }) => appearances[appearance]};
    }
`;

registerStyles('Logo', 'enterprise.light', {
    StyledSvg: { component: 'svg', styles: main },
});
