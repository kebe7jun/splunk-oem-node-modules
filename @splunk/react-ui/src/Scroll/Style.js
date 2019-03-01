import { css } from 'styled-components';
import { mixins, registerStyles } from '@splunk/react-ui/Themes';

import Inner from './Inner';

const main = css`
    ${mixins.reset('block')};
    overflow: auto;
    overflow-y: auto;
    overflow-x: hidden;
`;

registerStyles('Scroll', 'enterprise.light', {
    StyledInner: { component: Inner, styles: main },
});
