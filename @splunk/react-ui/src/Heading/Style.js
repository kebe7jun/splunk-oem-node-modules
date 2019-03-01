import { css } from 'styled-components';
import { mixins, registerStyles, variables } from '@splunk/react-ui/Themes';

const isSection = level => level.toString().charAt(0) === 's';
export const levelToElement = {
    '1': 'h1',
    '2': 'h2',
    '3': 'h3',
    '4': 'h4',
    s: 'h4',
    ss: 'h5',
};

const section = css`
    color: ${variables.gray45};
    margin: 0.707em 0 0.2em;
    text-transform: uppercase;
`;

const heading = css`
    ${mixins.reset('block')};
    margin: 1.414em 0 0.4em;
    text-rendering: optimizelegibility; /* Fix the character spacing for headings */
    ${props => (isSection(props.level) ? section : null)};
    font-size: ${props =>
        levelToElement[props.level] === 'h1' ? variables.fontSizeXXLarge : null};
    font-size: ${props => (levelToElement[props.level] === 'h2' ? variables.fontSizeXLarge : null)};
    font-size: ${props => (levelToElement[props.level] === 'h3' ? variables.fontSizeLarge : null)};
    font-size: ${props =>
        levelToElement[props.level] === 'h5' && isSection(props.level) ? '12px' : null};
    /* stylelint-disable value-list-max-empty-lines */
    font-weight: ${props =>
        levelToElement[props.level] === 'h4' && !isSection(props.level)
            ? 'bold'
            : variables.fontWeightSemiBold};
    /* stylelint-enable value-list-max-empty-lines */
`;

const headingDark = css`
    ${heading};
    color: ${props => (isSection(props.level) ? variables.gray80 : null)};
`;

registerStyles('Heading', 'enterprise.light', {
    StyledH1: { component: 'h1', styles: heading },
    StyledH2: { component: 'h2', styles: heading },
    StyledH3: { component: 'h3', styles: heading },
    StyledH4: { component: 'h4', styles: heading },
    StyledH5: { component: 'h5', styles: heading },
});

registerStyles('Heading', 'enterprise.dark', {
    StyledH1: { component: 'h1', styles: headingDark },
    StyledH2: { component: 'h2', styles: headingDark },
    StyledH3: { component: 'h3', styles: headingDark },
    StyledH4: { component: 'h4', styles: headingDark },
    StyledH5: { component: 'h5', styles: headingDark },
});
