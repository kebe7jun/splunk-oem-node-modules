import { createRegistry } from '@splunk/styled-themes/registry';
import {
    ifDark,
    ifLight,
    lightOrDark,
    mixins,
    transformVariable,
    variables,
} from '@splunk/styled-themes/utils';

export const { registerStyles, getStyled, getReference } = createRegistry();

export { ifDark, ifLight, lightOrDark, mixins, transformVariable, variables };

// TODO: remove ifDark, ifLight, lightOrDark, mixins, transformVariable, variables forwards
