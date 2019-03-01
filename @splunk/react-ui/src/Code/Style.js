import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const pre = css`
    ${mixins.reset('block')};
    line-height: 17px;
    text-align: left;
    tab-size: 4;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    hyphens: none;
    overflow-x: auto;
    margin-bottom: 1.3em;
`;

const code = css`
    font-family: ${variables.monoFontFamily};
`;

const indent = css`
    &:not(:last-child) {
        background-image: linear-gradient(
            to left,
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent
        );
    }
`;

const tokenColors = {
    comment: 'syntaxGray',
    prolog: 'syntaxGray',
    doctype: 'syntaxGray',
    cdata: 'syntaxGray',
    punctuation: 'syntaxGray',
    property: 'syntaxPurple',
    tag: 'syntaxPurple',
    boolean: 'syntaxPurple',
    number: 'syntaxPurple',
    constant: 'syntaxPurple',
    symbol: 'syntaxPurple',
    deleted: 'syntaxPurple',
    selector: 'syntaxGreen',
    'attr-name': 'syntaxGreen',
    string: 'syntaxGreen',
    char: 'syntaxGreen',
    builtin: 'syntaxGreen',
    inserted: 'syntaxGreen',
    operator: 'syntaxBrown',
    entity: 'syntaxBrown',
    url: 'syntaxBrown',
    atrule: 'syntaxBlue',
    'attr-value': 'syntaxBlue',
    keyword: 'syntaxBlue',
    function: 'syntaxRed',
    regex: 'syntaxOrange',
    important: 'syntaxOrange',
    variable: 'syntaxOrange',
};

const tokenColorsDark = {
    comment: 'gray60',
    prolog: 'gray60',
    doctype: 'gray60',
    cdata: 'gray60',
    punctuation: 'gray60',
    property: 'syntaxPurpleLight',
    tag: 'syntaxPurpleLight',
    boolean: 'syntaxPurpleLight',
    number: 'syntaxPurpleLight',
    constant: 'syntaxPurpleLight',
    symbol: 'syntaxPurpleLight',
    deleted: 'syntaxPurpleLight',
    selector: 'syntaxGreenLight',
    'attr-name': 'syntaxGreenLight',
    string: 'syntaxGreenLight',
    char: 'syntaxGreenLight',
    builtin: 'syntaxGreenLight',
    inserted: 'syntaxGreenLight',
    operator: 'syntaxBrown',
    entity: 'syntaxBrown',
    url: 'syntaxBrown',
    atrule: 'syntaxBlueLight',
    'attr-value': 'syntaxBlueLight',
    keyword: 'syntaxBlueLight',
    function: 'syntaxRedLight',
    regex: 'syntaxOrange',
    important: 'syntaxOrange',
    variable: 'syntaxOrange',
};

const token = css`
    color: ${props => variables[tokenColors[props.partType]]};
    cursor: ${props => (props.partType === 'entity' ? 'help' : null)};
    opacity: ${props => (props.partType === 'namespace' ? 0.7 : null)};
    font-style: ${props => (props.partType === 'italic' ? 'italic' : null)};
    font-weight: ${props =>
        props.partType === 'important' || props.partType === 'bold' ? 'bold' : null};
`;

const preDark = css`
    ${pre};
    color: ${variables.gray92};
`;

const tokenDark = css`
    ${token};
    color: ${props => variables[tokenColorsDark[props.partType]]};
`;

registerStyles('Code', 'enterprise.light', {
    Styled: { component: 'pre', styles: pre },
    StyledCode: { component: 'code', styles: code },
    StyledIndent: { component: 'span', styles: indent },
    StyledToken: { component: 'span', styles: token },
});

registerStyles('Code', 'enterprise.dark', {
    Styled: { component: 'pre', styles: preDark },
    StyledToken: { component: 'span', styles: tokenDark },
});
