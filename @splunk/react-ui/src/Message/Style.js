import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import Box from '@splunk/react-ui/Box';
import {
    getReference,
    mixins,
    registerStyles,
    transformVariable,
    variables,
} from '@splunk/react-ui/Themes';

const transformTypeColor = type =>
    transformVariable(`${type}Color`, variable =>
        tinycolor(variable)
            .setAlpha(0.5)
            .toRgbString()
    );

const iconReferences = [
    getReference('Message', 'StyledIconInfo'),
    getReference('Message', 'StyledIconSuccess'),
    getReference('Message', 'StyledIconWarning'),
    getReference('Message', 'StyledIconError'),
];

const iconSpacing = iconReference => css`
    &[data-fill] > ${/* sc-sel */ iconReference} {
        left: ${variables.spacingQuarter};
    }
`;

const main = css`
    ${mixins.reset('block')};
    position: relative;
    margin-bottom: ${variables.spacingHalf};
    padding: ${variables.spacingHalf} 0 ${variables.spacingHalf} 40px;
    word-wrap: break-word;

    &[data-fill='info'] {
        background-color: ${variables.infoColorL50};
        border: 1px solid ${variables.infoColor};
        border-radius: ${variables.spacingQuarter};
    }

    &[data-fill='success'] {
        background-color: ${variables.successColorL50};
        border: 1px solid ${variables.successColor};
        border-radius: ${variables.spacingQuarter};
    }

    &[data-fill='warning'] {
        background-color: ${variables.warningColorL50};
        border: 1px solid ${variables.warningColor};
        border-radius: ${variables.spacingQuarter};
    }

    &[data-fill='error'] {
        background-color: ${variables.errorColorL50};
        border: 1px solid ${variables.errorColor};
        border-radius: ${variables.spacingQuarter};
    }

    ${iconReferences.map(iconReference => iconSpacing(iconReference))};
`;

const icon = css`
    position: absolute;
    top: 7px;
    left: 0;
    width: 25px;
    text-align: center;
    color: ${variables.white};
`;

const info = css`
    ${icon};
    color: ${variables.infoColor};
`;

const success = css`
    ${icon};
    color: ${variables.successColor};
`;

const warning = css`
    ${icon};
    color: ${variables.warningColor};
`;

const error = css`
    ${icon};
    color: ${variables.errorColor};
`;

const mainDark = css`
    ${main};

    &[data-fill='info'] {
        background-color: ${transformTypeColor('info')};
    }

    &[data-fill='success'] {
        background-color: ${transformTypeColor('success')};
    }

    &[data-fill='warning'] {
        background-color: ${transformTypeColor('warning')};
    }

    &[data-fill='error'] {
        background-color: ${transformTypeColor('error')};
    }
`;

registerStyles('Message', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
    StyledIcon: { component: 'span', styles: icon },
    StyledIconInfo: { component: 'span', styles: info },
    StyledIconSuccess: { component: 'span', styles: success },
    StyledIconWarning: { component: 'span', styles: warning },
    StyledIconError: { component: 'span', styles: error },
});

registerStyles('Message', 'enterprise.dark', {
    StyledBox: { component: Box, styles: mainDark },
});
