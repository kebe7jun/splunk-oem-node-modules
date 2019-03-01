import { css } from 'styled-components';
import Box from '@splunk/react-ui/Box';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('block')};
    display: flex;
    position: relative;
    margin: 0;
    font-weight: ${variables.fontWeightSemiBold};
    word-wrap: break-word;

    &[data-size='medium'] {
        min-height: ${variables.inputHeight};
        line-height: ${variables.lineHeight};
        padding: 6px 7px;
    }

    &[data-size='small'] {
        min-height: ${variables.inputHeightSmall};
        font-size: ${variables.fontSizeSmall};
        line-height: ${variables.lineHeight};
        padding: 4px 5px;
    }

    [data-inline] + &[data-inline] {
        margin-left: ${variables.spacingQuarter};
    }
`;

registerStyles('StaticContent', 'enterprise.light', {
    StyledBox: { component: Box, styles: main },
});
