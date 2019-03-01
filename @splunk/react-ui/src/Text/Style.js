import { css } from 'styled-components';
import { getReference, mixins, registerStyles, variables } from '@splunk/react-ui/Themes';
import Box from '@splunk/react-ui/Box';

const text = css`
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;

    &[data-inline] {
        width: 230px;
        flex-basis: 230px;

        [data-inline] + & {
            margin-left: ${variables.spacingHalf};
        }
    }

    &[data-size='small'] {
        font-size: ${variables.fontSizeSmall};
    }

    &[data-size='large'] {
        font-size: ${variables.fontSizeLarge};
        line-height: ${variables.lineHeight};
    }
`;

/* Some of these need greater specificity than input[type=text] */
const input = css`
    &,
    &[type] {
        /* needed for composition */
        box-sizing: border-box;
        display: block;
        margin: 0;
        line-height: inherit;
        color: ${variables.textColor};
        border-radius: ${variables.borderRadius};
        background-color: ${variables.white};
        border: ${variables.border};
        font-size: inherit;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        transition: border linear 0.2s, box-shadow linear 0.2s;
        width: 100%;
        padding: ${variables.spacingQuarter} ${variables.spacingHalf};
        min-height: ${variables.inputHeight};

        /* Changing position on :focus breaks event bubbling in Firefox SUI-1030 */
        position: relative;

        [data-size='small'] > & {
            padding: 3px ${variables.spacingQuarter};
            min-height: ${variables.inputHeightSmall};
        }

        [data-size='large'] > & {
            padding: 8px 11px;
            min-height: ${variables.inputHeightLarge};
        }

        &[data-append] {
            margin-right: -1px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right: none;
        }

        &[data-prepend] {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        /*  Focus state */
        &:focus {
            box-shadow: ${variables.focusShadow};
            color: ${variables.textColor};
            outline: 0;
            border-collapse: separate; /* Fix IE9 Issue with box-shadow */
            z-index: 1;

            &[data-can-clear] {
                padding-right: 28px;

                [data-size='small'] > & {
                    padding-right: 24px;
                }

                [data-size='large'] > & {
                    padding-right: 36px;
                }
            }
        }

        &[data-error] {
            border-color: ${variables.errorColor};
            color: ${variables.errorColor};
        }

        &::-ms-clear {
            display: none;
            width: 0; /* IE 11 on windows 8 */
            height: 0; /* IE 11 on windows 8 */
        }

        &::placeholder {
            color: ${variables.textGray};
            opacity: 1;
        }
    }

    textarea& {
        resize: none;
    }
`;

const inputSearchBase = css`
    &[type] {
        padding-right: 28px;

        [data-size='small'] > & {
            padding-right: 24px;
        }

        [data-size='large'] > & {
            padding-right: 36px;
        }
    }
`;

const inputSearch = css`
    ${input};
    ${inputSearchBase};
`;

const inputDisabledBase = css`
    &,
    &[type] {
        color: ${variables.textDisabledColor};
        background-color: ${variables.gray96};
        border-color: ${variables.gray92};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.025);
        cursor: not-allowed;
        overflow: hidden; /* prevent text from wrapping, but still cut it off like an input does */
        white-space: nowrap;
        text-overflow: ellipsis;

        &[data-multiline] {
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-y: auto;
            height: auto;
            min-height: 43px;
            max-height: 140px;
            text-overflow: clip;
        }
    }
`;

const inputDisabled = css`
    ${input};
    ${inputDisabledBase};
`;

const searchIconWrapper = css`
    color: ${variables.gray60};
    position: absolute;
    z-index: 1;

    [data-size='small'] > & {
        right: 6px;
        top: 6px;
    }

    [data-size='medium'] > & {
        right: 8px;
        top: 8px;
    }

    [data-size='large'] > & {
        right: 11px;
        top: 11px;
    }
`;

const clear = css`
    ${mixins.reset('inline')};
    position: absolute;
    right: 1px;
    top: 2px;
    font-size: 0.83333em; /* sets height and width */
    color: ${variables.gray60};
    cursor: pointer;
    z-index: 1;

    [data-size='small'] > & {
        padding: 7px;
    }

    [data-size='medium'] > & {
        padding: 8px;
    }

    [data-size='large'] > & {
        padding: 11px;
    }
`;

const placeholder = css`
    color: ${variables.textGray};
    position: absolute;
    max-width: 100%;
    font-size: inherit;
    line-height: inherit;
    z-index: 1;

    /* stylelint-disable no-duplicate-selectors */
    ${/* sc-sel */ getReference('Text', 'StyledInputSearchInput')} ~ & {
        margin-left: ${variables.spacingQuarter};
    }

    ${/* sc-sel */ getReference('Text', 'StyledInputSearchTextarea')} ~ & {
        margin-left: ${variables.spacingQuarter};
    }
    /* stylelint-enable no-duplicate-selectors */

    [data-size='small'] > & {
        top: 4px;
        left: 5px;
    }

    [data-size='medium'] > & {
        top: 5px;
        left: 7px;
    }

    [data-size='large'] > & {
        top: 10px;
        left: 12px;
    }
`;

const searchIconWrapperDark = css`
    ${searchIconWrapper};
    color: ${variables.white};
`;

const clearDark = css`
    ${clear};
    color: ${variables.white};
`;

const inputDark = css`
    ${input};

    &,
    &[type] {
        background-color: ${variables.gray22};
        border: 1px solid ${variables.gray20};
    }
`;

const inputSearchDark = css`
    ${inputDark};
    ${inputSearchBase};
`;
const inputDisabledDark = css`
    ${inputDark};
    ${inputDisabledBase};

    &,
    &[type] {
        background-color: ${variables.gray22};
        border-color: ${variables.gray30};
    }
`;

registerStyles('Text', 'enterprise.light', {
    StyledBox: { component: Box, styles: text },
    StyledInputInput: { component: 'input', styles: input },
    StyledInputTextarea: { component: 'textarea', styles: input },
    StyledInputSearchInput: { component: 'input', styles: inputSearch },
    StyledInputSearchTextarea: { component: 'textarea', styles: inputSearch },
    StyledInputDisabled: { component: 'span', styles: inputDisabled },
    StyledSearchIconWrapper: { component: 'span', styles: searchIconWrapper },
    StyledClear: { component: 'span', styles: clear },
    StyledPlaceholder: { component: 'span', styles: placeholder },
});

registerStyles('Text', 'enterprise.dark', {
    StyledInputInput: { component: 'input', styles: inputDark },
    StyledInputTextarea: { component: 'textarea', styles: inputDark },
    StyledSearchIconWrapper: { component: 'span', styles: searchIconWrapperDark },
    StyledInputSearchInput: { component: 'input', styles: inputSearchDark },
    StyledInputSearchTextarea: { component: 'textarea', styles: inputSearchDark },
    StyledInputDisabled: { component: 'span', styles: inputDisabledDark },
    StyledClear: { component: 'span', styles: clearDark },
});
