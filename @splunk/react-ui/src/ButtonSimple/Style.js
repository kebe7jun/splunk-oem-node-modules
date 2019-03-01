import { css } from 'styled-components';
import Clickable from '@splunk/react-ui/Clickable';
import { registerStyles } from '@splunk/react-ui/Themes';

import { defaultAppearance, secondary } from './StyleDefault';
import { primary, error } from './StyleColored';
import { pill } from './StylePill';

const appearances = { default: defaultAppearance, error, primary, secondary, pill };
const main = css`
    ${({ status, appearance }) => appearances[status === 'error' ? 'error' : appearance]};
`;

registerStyles('ButtonSimple', 'enterprise.light', {
    StyledClickable: { component: Clickable, styles: main },
});
