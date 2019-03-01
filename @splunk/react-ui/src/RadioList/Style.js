import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { registerStyles } from '@splunk/react-ui/Themes';

const main = css`
    flex-direction: column;
    align-items: flex-start;
`;

registerStyles('RadioList', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
});
