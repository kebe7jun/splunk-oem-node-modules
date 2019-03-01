import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { lightOrDark, mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('inline')};
    top: calc(${variables.spacing} * 2);
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - ${variables.spacing} * 4);
    max-width: calc(100vw - ${variables.spacing} * 4);
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${variables.zindexModal};
    box-shadow: 0 1px 5px ${variables.black};
`;

const bodyMain = css`
    background-color: ${variables.backgroundColor};
    padding: calc(${variables.fontSize} * 2);
    flex: 0 1 auto;
    overflow: auto;

    /* IE11 hack */
    @media all and (-ms-high-contrast: none) {
        *::-ms-backdrop,
        & {
            max-height: calc(100vh - 180px);
        }
    }
`;

const footerMain = css`
    flex: 0 0 auto;
    padding: ${variables.spacing};
    text-align: right;
    background-color: ${variables.backgroundColor};
    border-top: 1px solid ${lightOrDark(variables.borderColor, variables.gray20)};

    & > button {
        min-width: 80px;
    }
`;

const headerMain = css`
    flex: 0 0 auto;
    border-bottom: 1px solid ${lightOrDark(variables.borderColor, variables.gray20)};
    position: relative;
    min-height: 30px;
    background-color: ${variables.backgroundColor};

    &[data-has-close] {
        padding-right: calc(${variables.spacing} * 2);
    }
`;

const headerCloseWrapper = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 50%;
    width: 0;
    max-height: 35px;
    transform-origin: bottom right;
    transform: rotate(-90deg) translateX(100%);
`;

const headerClose = css`
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(90deg) translate(-50%, -50%);
`;

const headerTitle = css`
    ${mixins.reset('block')};
    font-size: 20px;
    line-height: 22px;
    margin: 0;
    overflow-wrap: break-word;
    padding: 25px calc(${variables.fontSize} * 2);
    font-weight: ${variables.fontWeightSemiBold};
`;

registerStyles('Modal', 'enterprise.light', {
    Styled: { component: 'div', styles: main },
});
registerStyles('Modal.Header', 'enterprise.light', {
    StyledBox: { component: Box, styles: headerMain },
    StyledTitle: { component: 'h1', styles: headerTitle },
    StyledCloseWrapper: { component: 'div', styles: headerCloseWrapper },
    StyledClose: { component: 'div', styles: headerClose },
});
registerStyles('Modal.Body', 'enterprise.light', {
    StyledBox: { component: Box, styles: bodyMain },
});
registerStyles('Modal.Footer', 'enterprise.light', {
    StyledBox: { component: Box, styles: footerMain },
});
