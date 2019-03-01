# React Icons
A library of icons.

## Install

1. Use Splunk's internal npm repository to create a
   `.npmrc` file in the root of your project.
1. Add a registry entry to the `.npmrc` file.
    ```
    registry=https://repo.splunk.com/artifactory/api/npm/npm
    ```
1. Intall two peer dependencies: `react` and `react-dom`.
    ```
    npm install react react-dom
    ```
1. Install the icons package.
    ```
    npm install @splunk/react-icons
    ```

## Production Builds

`@splunk/react-icons` and React support production and development builds. The production build removes warnings and guidance from the output. To create a production build, set the environment variable `NODE_ENV` to `"production"` and use the webpack [DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin) to inject the variable into the code.
