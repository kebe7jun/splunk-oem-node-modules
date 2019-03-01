import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import Clickable from '@splunk/react-ui/Clickable';
import { mixins, registerStyles, transformVariable, variables } from '@splunk/react-ui/Themes';

const swatchFocusColor = transformVariable('focusColor', variable =>
    tinycolor(variable)
        .setAlpha(0.8)
        .toRgbString()
);

const dropdown = css`
    width: 180px;
    padding: ${variables.spacingHalf};
`;

const swatches = css`
    ${mixins.reset('block')};
    ${mixins.clearfix()};
    margin-bottom: 6px;
    margin-right: -6px;
`;

const swatch = css`
    ${mixins.reset('inline-block')};
    margin-right: ${variables.spacingQuarter};
    margin-bottom: ${variables.spacingQuarter};
`;

const input = css`
    display: flex;
    width: 100%;
`;

const hashIcon = css`
    display: block;
    transform: translateY(2px);
    font-size: ${variables.fontSizeLarge};
`;

const swatchMain = css`
    display: block;
    border: ${variables.border};
    flex: 0 0 auto;

    &:focus {
        border-color: ${swatchFocusColor};
        box-shadow: ${variables.focusShadow};
    }

    &[data-size='small'] {
        width: ${variables.inputHeightSmall};
        height: ${variables.inputHeightSmall};
    }

    &[data-size='medium'] {
        width: ${variables.inputHeight};
        height: ${variables.inputHeight};
    }

    &[data-prepend='append'] {
        border-right: none;
    }

    &[disabled] {
        background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));
    }

    &[aria-invalid] {
        box-shadow: inset 0 0 0 2px white;
        border-color: ${variables.errorColor};
    }
`;

registerStyles('Color', 'enterprise.light', {
    StyledDropdown: { component: 'div', styles: dropdown },
    StyledSwatches: { component: 'ul', styles: swatches },
    StyledSwatch: { component: 'li', styles: swatch },
    StyledInput: { component: 'div', styles: input },
    StyledHashIcon: { component: 'span', styles: hashIcon },
});

registerStyles('Color.Swatch', 'enterprise.light', {
    StyledClickable: { component: Clickable, styles: swatchMain },
});
