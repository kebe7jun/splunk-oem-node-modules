# View Capabilities #

A `workflow-component` that displays the capabilities associated with the Splunk `role` that any role inherits from
and/or any user is assigned to. For details on this component and/or enhancements, refer to
[PBL-13353](https://jira.splunk.com/browse/PBL-13353).

## Install ##

* Use Splunk's internal npm repository to create a `.npmrc` file in the root of your project, and add a registry entry
to the `.npmrc` file.
```bash
registry=https://repo.splunk.com/artifactory/api/npm/npm
```

* Install two peer dependencies: `react` and `react-dom`.
```bash
npm install react react-dom
```

* Install the package.
```bash
npm install @splunk/view-capabilities
```

## IE11 and Safari Support ##

`@splunk/view-capabilities` relies on `window.fetch` and `window.Promise`. IE11 requires a polyfill for both. Safari
10.0 and lower require a polyfill for fetch. Since polyfills create globals, they are not included in the
`@splunk/view-capabilities` package.

To support these browsers, ensure polyfills, such as [whatwg-fetch](https://github.com/github/fetch) and
[promise-polyfill](https://github.com/taylorhakes/promise-polyfill), are included as a part of your build.
