import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import Clickable from '@splunk/react-ui/Clickable';
import { mixins, registerStyles, transformVariable, variables } from '@splunk/react-ui/Themes';

const focusShadowColor = transformVariable('focusColor', variable =>
    tinycolor(variable)
        .setAlpha(0.6)
        .toRgbString()
);

const main = css`
    ${mixins.reset('inline')};
    color: ${variables.linkColor};
    text-decoration: none;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;

    &:not([disabled]) {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }

        &:focus {
            box-shadow: 0 0 1px 2px ${focusShadowColor};
            text-decoration: none;
            outline: 0;

            &:active {
                box-shadow: none;
            }
        }
    }

    &[disabled] {
        color: ${variables.textDisabledColor};
    }

    /* Fix for oversized buttons in Firefox */
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
`;

registerStyles('Link', 'enterprise.light', {
    StyledClickable: { component: Clickable, styles: main },
});
