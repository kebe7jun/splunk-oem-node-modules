import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import Clickable from '@splunk/react-ui/Clickable';
import { lightOrDark, registerStyles, transformVariable, variables } from '@splunk/react-ui/Themes';

const typeColor = {
    string: variables.syntaxTeal,
    number: lightOrDark(variables.syntaxBlue, variables.syntaxBlueLight),
    boolean: lightOrDark(variables.syntaxPurple, variables.syntaxPurpleLight),
};

const interactiveValueFocusShadowColor = transformVariable('focusColor', variable =>
    tinycolor(variable)
        .setAlpha(0.6)
        .toRgbString()
);

const wrap = css`
    word-break: break-word;
    word-wrap: break-word;
`;

const scroll = css`
    white-space: nowrap;
`;

const value = css`
    color: ${({ valueType }) => typeColor[valueType]};
    ${({ overflowType }) => (overflowType === 'wrap' ? wrap : scroll)};
`;

const interactiveValue = css`
    ${value};
    font-family: inherit;

    &:focus {
        box-shadow: 0 0 1px 2px ${interactiveValueFocusShadowColor};
        outline: 0;

        &:active {
            box-shadow: none;
        }
    }

    &:hover {
        background-color: ${variables.backgroundColorHover};
    }
`;

const property = css`
    font-weight: bold;
    color: ${lightOrDark(variables.syntaxRed, variables.syntaxRedLight)};
`;

const expandLink = css`
    cursor: pointer;
    color: ${lightOrDark(variables.linkColor, variables.accentColorL40)};
    font-family: inherit;

    &:hover {
        background-color: ${variables.backgroundColorHover};
        text-decoration: none;
    }

    &:focus {
        box-shadow: ${variables.focusShadowInset};

        &:active {
            box-shadow: none;
        }
    }
`;

registerStyles('JSONTree.JSONTreeNode', 'enterprise.light', {
    StyledValue: { component: 'span', styles: value },
    StyledValueInteractiveClickable: { component: Clickable, styles: interactiveValue },
    StyledProperty: { component: 'span', styles: property },
    StyledExpandLinkClickable: { component: Clickable, styles: expandLink },
});
