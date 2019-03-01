import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import Box from '@splunk/react-ui/Box';
import { mixins, registerStyles, transformVariable, variables } from '@splunk/react-ui/Themes';

const sliderThumbActiveBorderColor = transformVariable('focusColor', variable =>
    tinycolor(variable)
        .setAlpha(0.8)
        .toRgbString()
);

const main = css`
    ${mixins.reset('block')};
    flex: 1 1 auto;

    &[data-inline] {
        width: 300px;
    }
`;

const input = css`
    /* stylelint-disable length-zero-no-unit */
    flex: 1 0 0px;
    /* stylelint-enable */
    vertical-align: middle;
    position: relative;
    cursor: default;
    height: ${variables.inputHeight};
    max-width: 100%;
`;

const sliderBar = css`
    position: absolute;
    top: 12px;
    left: 0;
    height: 5px;
    width: 100%;
    border-radius: 2.5px;

    &[data-disabled] {
        background-color: ${variables.gray92};
    }
`;

const sliderThumb = css`
    ${mixins.reset()};
    display: block;
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    border-width: 0;
    background-color: ${variables.gray45};

    :not([data-disabled]) {
        cursor: pointer;
    }

    &:focus,
    &:hover:not([data-disabled]),
    &:active {
        border-color: ${sliderThumbActiveBorderColor};
        outline: 0;
        box-shadow: ${variables.focusShadow};
        z-index: 1;
    }

    &[data-disabled] {
        background-color: ${variables.gray92};
    }
`;

const label = css`
    flex: 0 0 auto;
    line-height: ${variables.inputHeight};

    &[data-disabled] {
        color: ${variables.textDisabledColor};
    }
`;

const minLabel = css`
    ${label};
    margin-right: 15px;
    text-align: right;
`;

const maxLabel = css`
    ${label};
    margin-left: 15px;
    text-align: left;
`;

registerStyles('Slider', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
    StyledInput: { component: 'div', styles: input },
    StyledSliderBar: { component: 'div', styles: sliderBar },
    StyledSliderThumb: { component: 'button', styles: sliderThumb },
    StyledMinLabelBox: { component: Box, styles: minLabel },
    StyledMaxLabelBox: { component: Box, styles: maxLabel },
});
