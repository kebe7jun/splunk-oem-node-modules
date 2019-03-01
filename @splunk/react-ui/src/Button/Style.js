import { css } from 'styled-components';
import ButtonSimple from '@splunk/react-ui/ButtonSimple';
import { getReference, registerStyles, variables } from '@splunk/react-ui/Themes';

const button = css`
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    white-space: nowrap;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
    padding: ${variables.spacingQuarter} ${variables.fontSize};
    line-height: ${variables.lineHeight};
    min-height: ${variables.inputHeight};

    &[data-size='small'] {
        padding: 2px ${variables.fontSize};
        font-size: ${variables.fontSizeSmall};
        min-height: ${variables.inputHeightSmall};
    }

    &[data-size='large'] {
        padding: 8px calc(${variables.fontSize} * 2);
        font-size: ${variables.fontSizeLarge};
        min-height: ${variables.inputHeightLarge};
    }

    @media all and (-ms-high-contrast: none) {
        max-width: calc(100% - 0.01px); /* fixes IE11 flex bug */
    }

    &:not([data-inline]):not([data-append]):not([data-prepend]) {
        width: 100%;
    }

    &[data-inline] {
        display: inline-block;
        /* stylelint-disable declaration-block-no-ignored-properties */
        width: auto; /* required to work with flex-basis: auto */
        /* stylelint-enable */

        vertical-align: middle;

        [data-inline] + & {
            margin-bottom: 0;

            &:not([data-prepend]) {
                margin-left: ${variables.spacingHalf};
            }
        }
    }

    &[data-icon-only='true'] {
        padding: 0 ${variables.spacingQuarter};
        min-width: ${variables.inputHeight};

        &[data-size='small'] {
            padding: 0 2px;
            min-width: ${variables.inputHeightSmall};
        }

        &[data-size='large'] {
            padding: 0 8px;
            min-width: ${variables.inputHeightLarge};
        }

        ${/* sc-sel */ getReference('Button', 'StyledIcon')} {
            padding-right: 0;
        }
    }
`;

const contentWrapper = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 100%;

    [data-appearance='primary'] > &,
    [data-error] > & {
        padding: 1px;
    }

    /* Prevent IE11 from shifting the button labels on click */
    :focus > &,
    :active > & {
        position: relative;
        left: 0;
        top: 0;
    }
`;

const icon = css`
    display: inline-block;
    transform: translateY(-1px);
    padding-right: 3px;
`;

const label = css`
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 0 1 auto;

    &:not(:last-child) {
        padding-right: 3px;
    }

    [data-is-menu] > ${/* sc-sel */ getReference('Button', 'StyledContentWrapper')} > & {
        flex: 1 1 auto;
        text-align: left;
    }
`;

registerStyles('Button', 'enterprise.light', {
    StyledButtonSimple: { component: ButtonSimple, styles: button },
    StyledContentWrapper: { component: 'span', styles: contentWrapper },
    StyledLabel: { component: 'span', styles: label },
    StyledIcon: { component: 'span', styles: icon },
});
