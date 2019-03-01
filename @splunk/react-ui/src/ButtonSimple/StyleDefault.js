import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { ifDark, lightOrDark, transformVariable, variables } from '@splunk/react-ui/Themes';

import { chromed } from './StyleBase';

const shadowColor = tinycolor('black')
    .setAlpha(0.1)
    .toRgbString();

// This file is currently ignored by stylelint (see .stylelintignore).
// Due to the way multiple box-shadow are used in the focus-state, the individual definitions
// here cannot contain 'box-shadow: '. However, that causes stylelint to throw a syntax error,
// which cannot be disabled using stylelint- or sc- comments.
const shadow = css`inset 0 -1px 0 ${lightOrDark(shadowColor, variables.gray30)}`;
const hoverShadow = css`inset 0 -1px 0 ${lightOrDark(shadowColor, variables.gray25)}`;
const activeShadow = css`inset 0 -1px 0 ${lightOrDark(shadowColor, variables.gray22)}`;
const selectedShadow = css`inset 0 1px 0 ${lightOrDark(shadowColor, variables.black)}`;
const appendFocusShadow = css`inset -1px 0 0 ${variables.borderColor}`;

const defaultHoverBackgroundColor = transformVariable('gray96', variable =>
    tinycolor(variable)
        .darken(2.5)
        .toHexString()
);

const defaultAppearance = css`
    ${chromed};

    box-shadow: ${shadow};

    &:not([disabled]) {
        background-color: ${lightOrDark(variables.gray98, variables.gray45)};
        border: ${variables.border};
        color: ${lightOrDark(variables.gray45, variables.white)};
        transition: background 0.2s, border 0.2s, box-shadow 0.2s, text-decoration 0.2s;

        &[data-selected] {
            box-shadow: ${selectedShadow};
            background-color: ${lightOrDark(variables.gray92, variables.gray22)};
            border-color: ${ifDark(variables.gray20)};

            &:hover {
                box-shadow: ${selectedShadow};
            }

            &[data-prepend] {
                border-left: ${variables.border};
            }
        }

        &:hover {
            box-shadow: ${hoverShadow};
            background-color: ${lightOrDark(defaultHoverBackgroundColor, variables.gray30)};
        }

        &:active {
            background-color: ${lightOrDark(variables.gray92, variables.gray22)};
            box-shadow: ${activeShadow};
            border-color: ${ifDark(variables.gray20)};
            transition: none;

            &[data-prepend] {
                border-left: ${variables.border};
            }
        }

        &:focus {
            box-shadow: ${shadow}, ${variables.focusShadow};

            &:hover {
                box-shadow: ${hoverShadow}, ${variables.focusShadow};
            }

            &:active {
                box-shadow: ${activeShadow}, ${variables.focusShadow};
            }

            &[data-selected] {
                box-shadow: ${selectedShadow}, ${variables.focusShadow};
            }

            &[data-append] {
                box-shadow: ${shadow}, ${variables.focusShadow}, ${appendFocusShadow};

                &[data-selected] {
                    box-shadow: ${selectedShadow}, ${variables.focusShadow}, ${appendFocusShadow};
                }
            }
        }
    }

    &[disabled] {
        color: ${variables.textDisabledColor};
        background-color: ${lightOrDark(variables.gray96, variables.gray30)};
        border: 1px solid ${lightOrDark(variables.borderLightColor, variables.gray30)};
        cursor: not-allowed;

        &:not([data-selected]) {
            box-shadow: none;
        }
    }

    &[data-append] {
        border-right: none;
    }
`;

const secondary = css`
    ${defaultAppearance};
    font-weight: ${variables.fontWeightSemiBold};
`;

export { defaultAppearance, secondary };
