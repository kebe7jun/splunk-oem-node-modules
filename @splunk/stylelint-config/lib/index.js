'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var postcssAtRules = ['if', 'else', 'mixin', 'define-mixin'];

exports.default = {
    extends: 'stylelint-config-standard',
    rules: {
        // postcss
        'at-rule-no-unknown': [true, { ignoreAtRules: postcssAtRules }],
        'property-no-unknown': [true, { ignoreProperties: ['composes'] }],

        // prettier / formatting
        'at-rule-empty-line-before': null,
        'block-closing-brace-newline-after': null,
        'declaration-colon-newline-after': null,
        indentation: 4
    }
};
module.exports = exports['default'];