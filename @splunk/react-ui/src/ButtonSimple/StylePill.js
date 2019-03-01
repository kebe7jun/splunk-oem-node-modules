import { css } from 'styled-components';
import { lightOrDark, variables } from '@splunk/react-ui/Themes';

import { button } from './StyleBase';

const pill = css`
    ${button};
    color: ${lightOrDark(variables.gray45, variables.white)};
    border: 1px solid transparent;

    &:not([disabled]) {
        transition: background 0.2s, border 0.2s, box-shadow 0.2s, text-decoration 0.2s;

        &:hover {
            color: ${lightOrDark(variables.linkColor, null)};
            background-color: ${variables.backgroundColorHover};
            border-color: ${lightOrDark(variables.gray80, variables.gray22)};
        }

        &:focus {
            color: ${lightOrDark(variables.linkColor, null)};
            box-shadow: ${variables.focusShadow};
        }

        &:active,
        &[aria-expanded='true'] {
            background-color: ${lightOrDark(variables.gray92, variables.gray22)};
            transition: none;
        }
    }

    &[aria-invalid]:not([disabled]) {
        &,
        &:hover {
            color: ${variables.errorColor};
        }
    }

    &[data-selected] {
        border-color: ${variables.accentColor};

        &[disabled] {
            border-color: ${variables.borderLightColor};
        }
    }

    &[disabled] {
        color: ${variables.textDisabledColor};
        cursor: not-allowed;
    }
`;

export { pill };
