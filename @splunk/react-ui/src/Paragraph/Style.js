import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('block')};
    margin: 0 0 calc(${variables.lineHeight} / 2);
`;

registerStyles('Paragraph', 'enterprise.light', {
    Styled: { component: 'p', styles: main },
});
