import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { mixins, registerStyles } from '@splunk/react-ui/Themes';

const main = css`
    overflow: hidden;
    position: relative;
`;

const panelMain = css`
    ${mixins.reset('table')};
    ${mixins.clearfix()};
`;

registerStyles('SlidingPanels', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
});

registerStyles('SlidingPanels.Panel', 'enterprise.light', {
    Styled: { component: 'div', styles: panelMain },
});
