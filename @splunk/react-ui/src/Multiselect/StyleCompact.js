import { css } from 'styled-components';
import Dropdown from '@splunk/react-ui/Dropdown';
import { registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    &[data-inline] {
        width: 400px;
    }
`;

const filter = css`
    padding: 8px;
    min-width: 160px;

    :not([data-placement='above']) > & {
        border-bottom: ${variables.border};
    }

    [data-placement='above'] > & {
        border-top: ${variables.border};
    }
`;

const count = css`
    padding-right: ${variables.spacingQuarter};
`;

const toggleAllControls = css`
    padding: ${variables.spacingQuarter} 8px;

    &:not([data-placement='above']) {
        border-bottom: ${variables.border};
    }

    &[data-placement='above'] {
        border-top: ${variables.border};
    }
`;

registerStyles('MultiselectCompact', 'enterprise.light', {
    StyledDropdown: { component: Dropdown, styles: main },
    StyledFilter: { component: 'div', styles: filter },
    StyledCount: { component: 'span', styles: count },
    StyledToggleAllControls: { component: 'div', styles: toggleAllControls },
});
