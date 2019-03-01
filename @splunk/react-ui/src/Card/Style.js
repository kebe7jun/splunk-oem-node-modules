import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import Clickable from '@splunk/react-ui/Clickable';
import { getReference, mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const cardTransitionTime = '0.2s';

const titleContainer = css`
    &[data-truncate-title='true'] {
        overflow: hidden;

        /* prettier-ignore */
        > ${/* sc-sel */ getReference('Card.Header', 'StyledTitle')},
        > ${/* sc-sel */ getReference('Card.Header', 'StyledSubtitle')} {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    &:not(:last-child) {
        margin-right: ${variables.spacingHalf};
    }
`;

const title = css`
    ${mixins.reset('block')};
    font-size: ${variables.fontSizeLarge};
    font-weight: ${variables.fontWeightSemiBold};
    line-height: 1.2;
    margin: 0;
    overflow-wrap: break-word;
    padding: 0;
`;

const subtitle = css`
    ${mixins.reset('inline')};
    font-size: ${variables.fontSizeSmall};
    color: ${variables.textGray};
    margin: 0;
    padding: 0;
    font-weight: normal;
`;

const header = css`
    display: flex;
    flex: 0 0 auto;
    position: relative;
    min-height: 30px;
    padding: ${variables.spacing};

    > :not(${/* sc-sel */ getReference('Card.Header', 'StyledTitleContainer')}) {
        flex: 1 0 auto;
    }
`;

const footer = css`
    padding: ${variables.spacing};
    text-align: right;
    color: ${variables.textGray};

    &[data-show-top-border='true'] {
        border-top: 1px solid ${variables.gray92};
    }

    &:first-child {
        border-top: none;
    }
`;

const body = css`
    padding: ${variables.spacing};
    flex: 1 1 auto;
    overflow: auto;
    height: 100%;

    &:not(:first-child) {
        padding-top: 0;
    }
`;

const card = css`
    ${mixins.reset('inline')};
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${variables.backgroundColor};
    min-width: 100px;
    flex: 1;
    vertical-align: top;
    border: 1px solid transparent;
    /* stylelint-disable value-list-comma-newline-after */
    transition: height ${cardTransitionTime}, width ${cardTransitionTime},
        min-width ${cardTransitionTime}, max-width ${cardTransitionTime},
        margin ${cardTransitionTime}, box-shadow ${cardTransitionTime},
        border-color ${cardTransitionTime};
    /* stylelint-enable value-list-comma-newline-after */

    &[data-clickable='true'] {
        cursor: pointer;

        &:hover {
            box-shadow: ${variables.overlayShadow};
        }

        &:focus {
            box-shadow: ${variables.focusShadow};
        }

        &[data-selected='true'] {
            border-color: ${variables.focusColor};
        }
    }

    &[data-card-has-border='true'] {
        border-color: ${variables.borderLightColor};
    }
`;

/* A child element we add to <button>s to make flexbox work.
   Without this wrapper element, child elements won't flex
   in Firefox.
   This unfortunately exposes some fragility in IE (e.g., adding
   a flex: 1 style here will cause the card to collapse) so test
   across the supported browsers if making a change here.
*/
const firefoxFlexHack = css`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    height: 100%;
`;

registerStyles('Card', 'enterprise.light', {
    Styled: { component: 'div', styles: card },
    StyledClickable: { component: Clickable, styles: card },
    StyledFirefoxFlexHack: { component: 'div', styles: firefoxFlexHack },
});

registerStyles('Card.Header', 'enterprise.light', {
    StyledBox: { component: Box, styles: header },
    StyledTitleContainer: { component: 'div', styles: titleContainer },
    StyledTitle: { component: 'h1', styles: title },
    StyledSubtitle: { component: 'h2', styles: subtitle },
});

registerStyles('Card.Footer', 'enterprise.light', {
    StyledBox: { component: Box, styles: footer },
});

registerStyles('Card.Body', 'enterprise.light', {
    StyledBox: { component: Box, styles: body },
});
