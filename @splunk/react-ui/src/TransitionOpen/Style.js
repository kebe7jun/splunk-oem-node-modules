import { css } from 'styled-components';
import { mixins, registerStyles } from '@splunk/react-ui/Themes';

const open = css`
    ${mixins.reset('block')};
`;

const notOpen = css`
    ${open};
    overflow: hidden;
`;

const inner = css`
    ${mixins.reset('table')};
    ${mixins.clearfix()};
    width: 100%;
`;

registerStyles('TransitionOpen', 'enterprise.light', {
    StyledOpen: { component: 'div', styles: open },
    StyledNotOpen: { component: 'div', styles: notOpen },
    StyledInner: { component: 'div', styles: inner },
});
