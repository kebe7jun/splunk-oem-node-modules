import { css } from 'styled-components';
import { mixins, variables } from '@splunk/react-ui/Themes';

const button = css`
    ${mixins.reset('block')};
    border-radius: ${variables.borderRadius};
    cursor: pointer;
    position: relative;

    @media all and (-ms-high-contrast: none) {
        max-width: calc(100% - 0.01px); /* fixes IE11 flex bug */
    }

    &:focus {
        z-index: 3;
    }
`;

const chromed = css`
    ${button};

    &[data-append] {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;
    }

    &[data-prepend] {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &[data-selected] {
        box-shadow: ${variables.coloredSelectedShadow};
    }
`;

export { button, chromed };
