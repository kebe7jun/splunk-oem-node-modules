# Stylelint Config

A standard stylelint config for Splunk projects. It's designed to work well with the Splunk UI
`CSS Loader` and `prettier`, but can be used independently as well.

## Usage

1. Install it:
    ```
    yarn add --dev @splunk/stylelint-config
    ```
    Or
    ```
    npm install --save-dev @splunk/stylelint-config
    ```
2. Use it in your stylelint configuration file – if you don't have one, create `stylelint.config.js` in
the root directory of your package.
    ```
    module.exports = {
        extends: '@splunk/stylelint-config',
    };
    ```
