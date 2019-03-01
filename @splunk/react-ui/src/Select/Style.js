import { css } from 'styled-components';
import Dropdown from '@splunk/react-ui/Dropdown';
import { registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    &[data-select-appearance='link'] {
        vertical-align: baseline;
    }
`;

const filter = css`
    padding: 8px;
    min-width: 160px;

    &:first-child {
        border-bottom: ${variables.border};
    }

    &:last-child {
        border-top: ${variables.border};
    }
`;

const linkIcon = css`
    padding-right: 2px;
`;

const linkCaret = css`
    padding-left: 2px;
`;

registerStyles('Select', 'enterprise.light', {
    StyledDropdown: { component: Dropdown, styles: main },
    StyledFilter: { component: 'div', styles: filter },
    StyledLinkIcon: { component: 'span', styles: linkIcon },
    StyledLinkCaret: { component: 'span', styles: linkCaret },
});
