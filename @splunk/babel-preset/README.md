# Splunk's Shared Babel Preset Configuration

A standardized set of plugins for transpiling JavaScript to JavaScript.

## Usage

1. Install it:
    ```
    yarn add --dev @splunk/babel-preset
    ```
    Or
    ```
    npm install --save-dev @splunk/babel-preset
    ```
2. Add it to your babel configuration:
    ```js
    "presets": ["@splunk/babel-preset"]
    ```
    * If your project is using webpack 2 or newer it's recommended to set the `webpack` option to true:
        ```js
        "presets": [
        [
            "@splunk/babel-preset",
            {
            "webpack": true
            }
        ]
        ]
        ```
    * Transpilation targets can be set using the `targets` option.
