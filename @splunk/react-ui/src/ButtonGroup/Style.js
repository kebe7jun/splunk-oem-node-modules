import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    position: relative;

    [data-inline] + & {
        margin-left: ${variables.spacingHalf};
    }
`;

registerStyles('ButtonGroup', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
});
