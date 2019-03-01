module.exports = {
    parser: 'babel-eslint',
    extends: 'eslint-config-airbnb',
    globals: {
        __DEV__: true,
    },
    rules: {
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/no-webpack-loader-syntax': 'off',
        'import/prefer-default-export': 'off',

        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],

        // disabled until this issue is fixed:
        //  https://github.com/eslint/eslint/issues/5150#issuecomment-317525339
        'no-return-assign': 'off',

        'react/forbid-prop-types': 'off',
        'react/require-default-props': 'off',
    },
};
