import { css } from 'styled-components';
import { mixins, registerStyles } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('block')};
    align-items: stretch;
    align-content: stretch;
    flex-flow: row nowrap;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: flex-start;
    width: auto;
    max-width: 100%;

    @media all and (-ms-high-contrast: none) {
        max-width: calc(100% - 0.01px); /* fixes IE11 flex bug */
    }

    &[data-inline] {
        display: inline-block;
        vertical-align: middle;
    }

    &[data-flex] {
        display: flex;
    }

    &[data-flex][data-inline] {
        display: inline-flex;
    }
`;

registerStyles('Box', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
});
