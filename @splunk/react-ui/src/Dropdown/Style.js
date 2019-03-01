import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    position: relative;
    flex-shrink: 1;

    [data-inline] + &[data-inline] {
        margin-left: ${variables.spacingHalf};
    }
`;

registerStyles('Dropdown', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
});
