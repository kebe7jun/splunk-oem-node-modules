import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const main = css`
    ${mixins.reset('block')};
`;

const term = css`
    ${mixins.reset('block')};
    float: left;
    width: 120px;
    overflow: hidden;
    overflow-x: hidden;
    white-space: nowrap;
    margin-right: ${variables.spacingQuarter};
    font-weight: 400;
    word-wrap: normal;

    &::after {
        content: ' ..................................................................................';
    }
`;

const description = css`
    ${mixins.reset('block')};
    line-height: ${variables.lineHeight};
    margin-left: 125px;
`;

registerStyles('DefinitionList', 'enterprise.light', {
    Styled: { component: 'dl', styles: main },
});

registerStyles('DefinitionList.Term', 'enterprise.light', {
    Styled: { component: 'dt', styles: term },
});

registerStyles('DefinitionList.Description', 'enterprise.light', {
    Styled: { component: 'dd', styles: description },
});
