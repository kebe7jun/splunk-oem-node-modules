import { css } from 'styled-components';
import Text from '@splunk/react-ui/Text';
import { registerStyles } from '@splunk/react-ui/Themes';

const main = css`
    &[data-inline] {
        width: 105px;
        flex-basis: 105px;

        &[data-size='large'] {
            width: 130px;
            flex-basis: 130px;
        }
    }
`;

registerStyles('Date', 'enterprise.light', {
    StyledText: { component: Text, styles: main },
});
