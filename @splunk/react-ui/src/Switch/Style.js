import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import Box from '@splunk/react-ui/Box';
import Clickable from '@splunk/react-ui/Clickable';
import {
    getReference,
    mixins,
    registerStyles,
    transformVariable,
    variables,
} from '@splunk/react-ui/Themes';

const diameter = '18px';

const indicatorBorderColor = transformVariable('borderLightColor', variable =>
    tinycolor(variable)
        .setAlpha(0.8)
        .toRgbString()
);

const toggleOutlineBorderColor = transformVariable('focusColor', variable =>
    tinycolor(variable)
        .setAlpha(0.8)
        .toRgbString()
);

const indicatorBackgroundColorHoverDark = transformVariable('gray80', variable =>
    tinycolor(variable)
        .darken(6)
        .toRgbString()
);

const main = css`
    ${mixins.reset('inline')};
    position: relative;
    padding: calc((${variables.inputHeight} - ${diameter}) / 2) 0;
    flex-shrink: 0;

    &[data-size='small'] {
        font-size: ${variables.fontSizeSmall};
        padding: calc((${variables.inputHeightSmall} - ${diameter}) / 2) 0;
    }

    &[data-error] {
        color: ${variables.errorColor};
    }

    &[data-disabled] {
        color: ${variables.textDisabledColor};
    }
`;

const switchSt = css`
    ${mixins.reset('inline-block')};
    position: relative;
    width: ${diameter};
    height: ${diameter};
    border: ${variables.border};
    color: ${variables.gray45};
    flex: 0 0 auto;

    &:focus {
        box-shadow: ${variables.focusShadow};
    }

    &[data-selected='true'],
    &[data-selected='some'] {
        border-color: ${variables.gray45};
    }

    [data-error] > & {
        border-color: ${variables.errorColorL30};
        color: ${variables.errorColor};

        &[data-selected='true']:not([disabled]) {
            border-color: ${variables.errorColor};
        }
    }

    &[disabled] {
        border-color: ${variables.gray80};
        color: ${variables.gray80};
        cursor: not-allowed;
    }
`;

const radioBase = css`
    &:not([disabled]),
    & {
        border-radius: 50%;
    }

    &[data-selected='true']::after {
        display: block;
        content: '';
        position: absolute;
        left: 4px;
        top: 4px;
        width: calc(${diameter} - 10px);
        height: calc(${diameter} - 10px);
        border-radius: 50%;
        background-color: currentColor;
    }
`;

const radio = css`
    ${switchSt};
    ${radioBase};
`;

const checkboxBase = css`
    padding: 2px;
    line-height: ${diameter};
    margin-bottom: 0;
    font-size: 10px;
    text-align: center;
    vertical-align: middle;
    border-radius: 2px;
    cursor: pointer;
`;

const checkbox = css`
    ${switchSt};
    ${checkboxBase};
`;

const some = css`
    display: block;
    margin: 2px;
    height: calc(${diameter} - 10px);
    width: calc(${diameter} - 10px);
    background: currentColor;
    border-radius: 1px;
`;

const toggleShadow = 'inset 0 2px 0 rgba(0, 0, 0, 0.1)';

const toggle = css`
    position: relative;
    width: calc(${diameter} * 2);
    height: ${diameter};
    background-color: ${variables.gray98};
    border-radius: calc(${diameter} * 0.5);
    transition: background-color 200ms;
    flex: 0 0 auto;

    &:not([disabled]) {
        border: ${variables.border};
        box-shadow: ${toggleShadow};

        ${/* sc-sel */ getReference('Switch', 'StyledIndicator')} {
            background-color: ${variables.gray98};
            border-width: 1px;
            border-style: solid;
            border-radius: 50%;
        }

        &:hover ${/* sc-sel */ getReference('Switch', 'StyledIndicator')} {
            background-color: ${variables.gray96};
        }
    }

    &[disabled] {
        border: 1px solid ${variables.borderLightColor};
        box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.06);
        background-color: ${variables.gray96};

        ${/* sc-sel */ getReference('Switch', 'StyledIndicator')} {
            border-color: ${indicatorBorderColor};
            border-width: 1px;
            border-style: solid;
        }
    }

    &[data-selected='true'] {
        background-color: ${variables.accentColorL10};
        border-color: ${variables.accentColorL10};

        &[disabled] {
            background-color: ${variables.accentColorL40};
            border-color: transparent;
        }
    }

    /* prettier-ignore */
    [data-error] > &:not([disabled]) > ${
        /* sc-sel */ getReference('Switch', 'StyledToggleOutline')
    } {
        border-color: ${variables.errorColor};
    }

    &:focus:not([disabled]) {
        outline: 0;
        box-shadow: ${variables.focusShadow}, ${toggleShadow};

        > ${/* sc-sel */ getReference('Switch', 'StyledToggleOutline')} {
            border-color: ${toggleOutlineBorderColor};
        }
    }
`;

const toggleOutline = css`
    position: absolute;
    border: 1px solid transparent;
    transition: border-color 200ms;
    border-radius: calc(${diameter} * 0.5);
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
`;

const indicator = css`
    background-color: ${variables.gray98};
    border-color: ${variables.borderColor};
    box-sizing: border-box;
    height: ${diameter};
    width: ${diameter};
    border-radius: calc(${diameter} * 0.5);
    position: absolute;
    left: -1px;
    top: -1px;
    transition: left 200ms;

    [data-selected='true'] & {
        left: calc(100% - ${diameter} + 1px);
    }
`;

const label = css`
    ${mixins.reset('inline-block')};
    /* stylelint-disable length-zero-no-unit */
    flex: 1 1 auto;
    /* stylelint-enable */
    padding-left: ${variables.spacingQuarter};
    color: inherit;

    &:not([data-disabled='true']) {
        cursor: pointer;
    }

    &[data-size='small'] {
        font-size: ${variables.fontSizeSmall};
        padding-top: 1px;
    }
`;

const switchStDark = css`
    ${switchSt};
    border-color: ${variables.gray80};
    color: ${variables.gray80};

    &[data-selected='true'],
    &[data-selected='some'] {
        border-color: ${variables.gray80};
    }

    &[disabled] {
        border-color: ${variables.gray45};
        color: ${variables.gray45};
        cursor: not-allowed;
    }

    [data-error] > & {
        border-color: ${variables.errorColor};
    }
`;

const checkboxDark = css`
    ${switchStDark};
    ${checkboxBase};
`;

const radioDark = css`
    ${switchStDark};
    ${radioBase};
`;

const toggleDark = css`
    ${toggle};
    background-color: ${variables.gray45};

    &:not([disabled]) {
        ${/* sc-sel */ getReference('Switch', 'StyledIndicator')} {
            background-color: ${variables.gray80};
        }

        &:hover ${/* sc-sel */ getReference('Switch', 'StyledIndicator')} {
            background-color: ${indicatorBackgroundColorHoverDark};
        }
    }

    &[disabled] {
        border: 1px solid ${variables.borderColor};
        background-color: ${variables.gray30};

        ${/* sc-sel */ getReference('Switch', 'StyledIndicator')} {
            background-color: ${variables.gray45};
            border-color: ${variables.gray22};
        }
    }

    &[data-selected='true'] {
        &[disabled] {
            background-color: ${variables.accentColorD20};
        }
    }
`;

registerStyles('Switch', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
    StyledRadioClickable: { component: Clickable, styles: radio },
    StyledRadioSpan: { component: 'span', styles: radio },
    StyledCheckboxClickable: { component: Clickable, styles: checkbox },
    StyledCheckboxSpan: { component: 'span', styles: checkbox },
    StyledToggleClickable: { component: Clickable, styles: toggle },
    StyledToggleSpan: { component: 'span', styles: toggle },
    StyledSome: { component: 'div', styles: some },
    StyledToggleOutline: { component: 'div', styles: toggleOutline },
    StyledIndicator: { component: 'div', styles: indicator },
    StyledLabel: { component: 'label', styles: label },
});

registerStyles('Switch', 'enterprise.dark', {
    StyledRadioClickable: { component: Clickable, styles: radioDark },
    StyledRadioSpan: { component: 'span', styles: radioDark },
    StyledCheckboxClickable: { component: Clickable, styles: checkboxDark },
    StyledCheckboxSpan: { component: 'span', styles: checkboxDark },
    StyledToggleClickable: { component: Clickable, styles: toggleDark },
    StyledToggleSpan: { component: 'span', styles: toggleDark },
});
