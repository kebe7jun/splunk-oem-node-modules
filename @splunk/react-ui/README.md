# React UI
A library of UI components that implement the Splunk design language in React.

## Install

Configure `npm` to use Splunk's internal npm repository.

1. Create a
   `.npmrc` file in the root of your project.
1. Add a registry entry to the `.npmrc` file.
    ```
    registry=https://repo.splunk.com/artifactory/api/npm/npm
    ```

Install React UI and its dependencies.

1. Install two peer dependencies: `react` and `react-dom`.
    ```
    npm install react react-dom
    ```
1. Install the components package.
    ```
    npm install @splunk/react-ui
    ```

## Production Builds

@splunk/react-ui and React support production and development builds. The production build removes warnings and guidance from the output. To create a production build, set the environment variable `NODE_ENV` to `"production"` and use the webpack [DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin) to inject the variable into the code.

## Understand API Status Indicators
The documentation refers to **API Status** indicators. The indicators
signal the stability level of the API. There are five status levels:

* **Deprecated**: The API is problematic. Do not use it. Do not expect backward
  compatibility.

* **Alpha**: The API is new and not well established. It may change or be
  deleted.

* **Beta**: The API is in use and solidifying. It may change, but is on
  track to becoming Stable.

* **Stable**: The API is established and stable. Do not expect many changes.

* **Locked**: The API is Stable and only experiences changes related to
  security, performance, or bug fixes.


## Using the Components

### Children
Nearly all components accept `node` children. Only those components that
require specific constraints include information about the `children` prop in
their documentation.


### Styling
Use components to make sure your app conforms to Splunk style
standards. Splunk updates the component library to reflect any
updates to visual design standards. Components do not support themes or other changes in visual
appearance.

* Pass style to control layout, margins, or positioning, like the
  following example:
  ```js
  <Button label="Hello" style={{ flexBasis: '200px' }} />
  ```

* Alternatively, you can use a component's inline property to switch between
  `inline-block/inline-flex` and `block/flex`. You can use this property instead
  of passing a style prop, like the following example:
  ```js
  <Button inline={false} />
  ```

* In some cases, you can pass a `className` as a prop in a utility component.
  Check the  docs to determine which utility components support this
  behavior.

* Avoid overriding stylesheets. When selector specificity changes, the change
  can break stylesheet overrides.

The **generated markup is not an API** and may change at any time without notice, even in a patch
release. Neither is the selector specificity, which may also change at any time without notice.


### Defining Fonts
The component library does not define fonts. You must define and load them in a @font-face
declaration. By default, the components render in "Splunk Platform Sans", an alias of "Proxima Nova", and "Splunk Platform Mono", an alias of "Inconsolata".

These fonts are defined in the Splunk global stylesheets, which would fulfill this dependency.

For quick reference, Splunk UI uses the following font-family stack:

    Sans (Default): Splunk Platform Sans, Proxima Nova, Roboto, Droid, Helvetica Neue,
        Helvetica, Arial, sans-serif;
    Mono: Splunk Platform Mono, Inconsolata, Consolas, Droid Sans Mono, Monaco,
        Courier New, Courier, monospace;
