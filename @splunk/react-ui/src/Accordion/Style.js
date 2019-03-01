import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';

import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('block')};
    margin-bottom: 0;
    background: ${variables.backgroundColor};
`;

registerStyles('Accordion', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
});
