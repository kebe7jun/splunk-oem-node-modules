import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const list = css`
    ${mixins.reset('block')};
    padding-left: calc(${variables.spacing} * 2);
    margin-bottom: 1.3em;
    margin-top: 1em;
`;

const item = css`
    ${mixins.reset('list-item')};
    list-style-type: inherit;
`;

registerStyles('List', 'enterprise.light', {
    StyledUl: { component: 'ul', styles: list },
    StyledOl: { component: 'ol', styles: list },
});

registerStyles('List.Item', 'enterprise.light', {
    Styled: { component: 'li', styles: item },
});
