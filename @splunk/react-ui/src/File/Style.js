import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { lightOrDark, mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const input = css`
    &[type='file'] {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
`;

const mediumDropTarget = css`
    ${mixins.reset('flex')};
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: ${variables.borderRadius};
    padding: ${variables.spacingQuarter};
    min-height: 73px;
    line-height: calc(${variables.inputHeight} - 2px);
    border: 1px dashed ${lightOrDark(variables.borderColor, variables.textGray)};

    &[data-drag-over] {
        border: 1px solid ${variables.accentColorL10};
    }

    &[data-error]:not([data-drag-over]) {
        border: 1px solid ${variables.errorColor};
    }

    &[data-disabled] {
        border: none;
        color: ${variables.textGray};
        cursor: not-allowed;

        &[data-file-count='0'] {
            background: ${lightOrDark(variables.gray96, variables.gray60)};
        }
    }
`;

const smallDropTarget = css`
    ${mediumDropTarget};
    padding: 3px;
    min-height: 63px;
`;

const largeDropTarget = css`
    position: relative;
    text-align: center;
    min-height: 250px;
    padding: ${variables.spacing};

    &[data-disabled='true'] {
        color: ${variables.textGray};
    }
`;

const icon = css`
    fill: ${lightOrDark(variables.gray60, variables.gray80)};
`;

const mediumIcon = css`
    ${icon};
    height: 1.4em;
    width: 1.4em;
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 3px;
`;

const largeIcon = css`
    ${icon};
    height: 48px;
    width: 48px;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
`;

const smallText = css`
    display: block;
    font-size: ${variables.fontSizeSmall};
`;

const mediumText = css`
    display: inline-block;
`;

const largeText = css`
    font-size: ${variables.fontSizeXLarge};
    margin-top: calc(${variables.spacing} * 4);
    margin-bottom: ${variables.spacingHalf};
`;

const link = css`
    ${mixins.reset()};
    color: ${variables.linkColor};
    cursor: pointer;
    font-size: inherit;
    font-weight: inherit;

    &:hover,
    &[data-focused] {
        text-decoration: underline;
    }

    &[data-focused] {
        box-shadow: ${variables.focusShadowInset};
    }
`;

const help = css`
    margin-bottom: calc(${variables.spacing} * 1.5);
`;

const windowDrop = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 5px solid ${variables.accentColorL10};
    z-index: ${variables.zindexModal} + 10;
`;

registerStyles('File', 'enterprise.light', {
    StyledInput: { component: 'input', styles: input },
    StyledSmallDropTargetBox: { component: Box, styles: smallDropTarget },
    StyledMediumDropTargetBox: { component: Box, styles: mediumDropTarget },
    StyledLargeDropTargetBox: { component: Box, styles: largeDropTarget },
    StyledMediumIcon: { component: 'svg', styles: mediumIcon },
    StyledLargeIcon: { component: 'svg', styles: largeIcon },
    StyledSmallText: { component: 'div', styles: smallText },
    StyledMediumText: { component: 'div', styles: mediumText },
    StyledLargeText: { component: 'div', styles: largeText },
    StyledLink: { component: 'label', styles: link },
    StyledHelp: { component: 'div', styles: help },
    StyledWindowDrop: { component: 'div', styles: windowDrop },
});
