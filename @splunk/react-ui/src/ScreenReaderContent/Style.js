import { css } from 'styled-components';
import { registerStyles } from '@splunk/react-ui/Themes';

const main = css`
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
`;

registerStyles('ScreenReaderContent', 'enterprise.light', {
    Styled: { component: 'span', styles: main },
});
