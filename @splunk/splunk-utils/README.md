# Splunk Utils

A collection of utilities for working with Splunk.

Install
-------
```
npm install @splunk/splunk-utils
```
Or
```
yarn add @splunk/splunk-utils
```

IE11 and Safari Support
-------
@splunk/splunk-utils relies on window.fetch and window.Promise. IE11 requires a polyfill
for both. Safari 10.0 and lower require a polyfill for fetch. Since polyfills create globals, they
are not included in the @splunk/splunk-utils package.

To support these browsers, ensure polyfills, such as
[whatwg-fetch](https://github.com/github/fetch) and
[promise-polyfill](https://github.com/taylorhakes/promise-polyfill),
are included as a part of your build.
