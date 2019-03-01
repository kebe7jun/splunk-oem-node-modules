import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { variables } from '@splunk/react-ui/Themes';

import { chromed } from './StyleBase';

const shadowColor = tinycolor('black')
    .setAlpha(0.1)
    .toRgbString();
const shadow = `inset 0 -2px 0 ${shadowColor}`;
const selectedShadow = `inset 0 2px 0 ${shadowColor}`;

const colorButton = color => css`
    ${chromed};
    font-weight: ${variables.fontWeightSemiBold};

    &:not([disabled]) {
        background-color: ${variables[`${color}Color`]};
        color: ${variables.white};
        box-shadow: ${shadow};
        transition: background 0.2s, border 0.2s, box-shadow 0.2s, text-decoration 0.2s;

        &[data-selected] {
            box-shadow: ${selectedShadow};
            background-color: ${variables[`${color}ColorD20`]};
        }

        &[data-prepend] {
            border-left: 1px solid ${variables[`${color}ColorD20`]};
        }

        &:hover {
            background-color: ${variables[`${color}ColorD20`]};
        }

        &:active {
            background-color: ${variables[`${color}ColorD30`]};
            transition: none;
        }

        &:focus {
            box-shadow: ${shadow}, ${variables.focusShadow};

            &.selected {
                box-shadow: ${selectedShadow}, ${variables.focusShadow};
            }
        }
    }

    &[disabled] {
        color: ${variables[`${color}ColorL30`]};
        background-color: ${variables[`${color}ColorL10`]};
        cursor: not-allowed;

        &:not([data-selected]) {
            box-shadow: none;
        }
    }
`;

const primary = css`
    ${colorButton('brand')};
`;

const error = css`
    ${colorButton('error')};
`;

export { primary, error };
