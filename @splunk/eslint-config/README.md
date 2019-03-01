# Splunk's Shared Eslint Configuration

This package provides extendable eslint configuration objects. Currently, four configs are available:

* `browser` - For code that runs in the browser.
* `browser-prettier` - For browser code that is formatted by [prettier](https://github.com/prettier/prettier)
* `node` - For node scripts.
* `node-prettier` - For node scripts that are automatically formatted with [prettier](https://github.com/prettier/prettier).

## Usage

Install this package and its peer dependencies.

1. Install `@splunk/eslint-config`
    ```
    yarn add --dev @splunk/eslint-config
    ```
    Or
    ```
    npm install --save-dev @splunk/eslint-config
    ```

2. Get peer dependencies:
    ```
    yarn info "@splunk/eslint-config" peerDependencies
    ```
    Or
    ```
    npm info "@splunk/eslint-config" peerDependencies
    ```

    Eslint requires dependencies to be installed as peers. See [this issue on github](https://github.com/eslint/eslint/issues/3458) for more background on this.
3. Install the correct version of each peer dependency as dev dependency to your project.

4. Add the appropriate entry to your eslint configuration:
    ```
    extends: "@splunk/eslint-config/browser"
    ```
    Or
    ```
    extends: "@splunk/eslint-config/browser-prettier"
    ```
    Or
    ```
    extends: "@splunk/eslint-config/node"
    ```
    Or
    ```
    extends: "@splunk/eslint-config/node-prettier"
    ```
