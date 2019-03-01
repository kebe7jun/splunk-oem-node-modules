import { css } from 'styled-components';
import ButtonSimple from '@splunk/react-ui/ButtonSimple';
import { registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    float: right;
    width: ${variables.inputHeight};
    height: ${variables.inputHeight};
    text-align: center;
`;

registerStyles('CloseButton', 'enterprise.light', {
    StyledButtonSimple: { component: ButtonSimple, styles: main },
});
