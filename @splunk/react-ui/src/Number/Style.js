import { css } from 'styled-components';
import Button from '@splunk/react-ui/Button';
import Text from '@splunk/react-ui/Text';
import { ifDark, registerStyles, variables } from '@splunk/react-ui/Themes';

const incrementorWidthSmall = '16px';
const incrementorWidth = '20px';
const incrementorWidthLarge = '30px';

const main = css`
    &[data-size='small'] {
        &[data-inline] {
            width: 80px;
        }

        &[data-position='first'] {
            padding-right: ${incrementorWidthSmall};
        }

        &[data-position='last'] {
            padding-left: ${incrementorWidthSmall};
        }
    }

    &[data-size='medium'] {
        &[data-inline] {
            width: 100px;
        }

        &[data-position='first'] {
            padding-right: ${incrementorWidth};
        }

        &[data-position='last'] {
            padding-left: ${incrementorWidth};
        }
    }

    &[data-size='large'] {
        &[data-inline] {
            width: 140px;
        }

        &[data-position='first'] {
            padding-right: ${incrementorWidthLarge};
        }

        &[data-position='last'] {
            padding-left: ${incrementorWidthLarge};
        }
    }
`;

const controls = css`
    position: absolute;
    top: 0;
    bottom: 0;
    width: ${incrementorWidth};

    [data-size='small'] > & {
        width: ${incrementorWidthSmall};
    }

    [data-size='large'] > & {
        width: ${incrementorWidthLarge};
    }

    &[data-position='last'] {
        right: 0;
    }

    &[data-position='first'] {
        left: 0;
    }
`;

const incrementor = css`
    position: absolute;
    padding: 3px;
    font-size: inherit;
    min-height: 0;
    height: calc(50% + 0.5px);
    width: 100%;

    &:not([disabled]) {
        border-color: ${ifDark(variables.gray20)};
    }

    &[disabled] {
        border-color: ${ifDark(variables.gray22)};
    }
`;

const plus = css`
    ${incrementor};
    top: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`;

const minus = css`
    ${incrementor};
    bottom: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

registerStyles('Number', 'enterprise.light', {
    StyledText: { component: Text, styles: main },
    StyledControls: { component: 'div', styles: controls },
    StyledPlusButton: { component: Button, styles: plus },
    StyledMinusButton: { component: Button, styles: minus },
});
