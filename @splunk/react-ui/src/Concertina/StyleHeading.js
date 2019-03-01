import { css } from 'styled-components';
import Clickable from '@splunk/react-ui/Clickable';
import { lightOrDark, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    display: block;
    width: 100%;
    cursor: pointer;
    position: relative;
    padding: 6px ${variables.spacing};
    line-height: ${variables.lineHeight};
    border-radius: 0;
    color: ${variables.textColor};

    *:not(:first-child) > &[data-position='inner'] {
        border-top: 2px solid ${variables.backgroundColor};
    }

    *:not(:last-child) > &[data-position='inner'] {
        border-bottom: 2px solid ${variables.backgroundColor};
    }

    & + &:not([data-position='inner']) {
        border-top: 2px solid ${variables.backgroundColor};
    }

    &:focus:not([disabled]) {
        box-shadow: ${variables.focusShadowInset};
    }

    &:not([data-status]) {
        background-color: ${lightOrDark(variables.gray96, variables.gray45)};

        &:hover:not([disabled]) {
            background-color: ${lightOrDark(variables.gray92, variables.gray30)};
        }
    }

    &[data-status='disabled'] {
        background-color: ${lightOrDark(variables.gray96, variables.gray80)};
    }

    &[data-status='error'] {
        background-color: ${variables.errorColor};
        color: ${variables.white};

        &:hover:not([disabled]) {
            background-color: ${variables.errorColorD10};
        }
    }

    &[data-status='warning'] {
        background-color: ${variables.warningColor};
        color: ${variables.white};

        &:hover:not([disabled]) {
            background-color: ${variables.warningColorD10};
            box-shadow: none;
        }
    }
`;

const headingContent = css`
    display: flex;
    justify-content: space-between;
`;

const description = css`
    font-size: ${variables.fontSizeSmall};
`;

registerStyles('Concertina.Heading', 'enterprise.light', {
    StyledClickable: { component: Clickable, styles: main },
    StyledHeadingContent: { component: 'span', styles: headingContent },
    StyledDescription: { component: 'span', styles: description },
});
