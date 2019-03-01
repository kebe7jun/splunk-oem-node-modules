# BaseLister

Add all information required to get started with @splunk/base-lister here.

Note: This component is using the fetch method:
Fetch needs a polyfill to work in IE11. Also, Fetch is using a Promise object which also requires a polyfill.
The polyfills for fetch and Promise can be defined in the build.config as follows:

```
new webpack.ProvidePlugin({
    Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
    fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
})

To deploy the demo page in a standalone webserver:

1. Run the following commands:
$ cd splunk-ui/packages/base-lister
$ yarn start:demo
(this is executing: webpack-dev-server --config demo/webpack.standalone.config.js)

2. Go to: http://localhost:8080/
