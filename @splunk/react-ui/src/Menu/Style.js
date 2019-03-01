import { css } from 'styled-components';
import Scroll from '@splunk/react-ui/Scroll';
import { getReference, mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('block')};
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: ${variables.backgroundColor};
    min-width: 60px;
    border-radius: ${variables.borderRadius};
    overflow: auto;

    + ${/* sc-sel */ getReference('Menu', 'Styled')} {
        border-top: 1px solid #999;
    }
`;

const heading = css`
    ${mixins.reset('block')};
    padding: ${variables.spacingQuarter} ${variables.spacingHalf} 6px;
    border-top: 1px solid transparent;

    &:not(:first-child) {
        border-top: ${variables.border};
    }
`;

const divider = css`
    border-top: ${variables.border};
`;

const headingDark = css`
    ${heading};

    &:not(:first-child) {
        border-top: ${variables.borderLight};
        border-top-color: ${variables.gray22};
    }
`;

const dividerDark = css`
    border-top: ${variables.borderLight};
    border-top-color: ${variables.gray22};
`;

registerStyles('Menu', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
    StyledScroll: { component: Scroll, styles: main },
});
registerStyles('Menu.Heading', 'enterprise.light', {
    Styled: { component: 'div', styles: heading },
});
registerStyles('Menu.Divider', 'enterprise.light', {
    Styled: { component: 'div', styles: divider },
});

registerStyles('Menu.Heading', 'enterprise.dark', {
    Styled: { component: 'div', styles: headingDark },
});
registerStyles('Menu.Divider', 'enterprise.dark', {
    Styled: { component: 'div', styles: dividerDark },
});
