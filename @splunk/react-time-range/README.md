Splunk Time Range Picker
===============

Install
-------
```
npm install @splunk/react-time-range

    --or--

yarn add @splunk/react-time-range
```

IE11 and Safari Support
-------
@splunk/react-time-range relies on window.fetch and window.Promise. IE11 requires a polyfill
for both. Safari 10.0 and lower require a polyfill for fetch. Since polyfills create globals, they
are not included in the @splunk/react-time-range package.

To support these browsers, ensure polyfills, such as
[whatwg-fetch](https://github.com/github/fetch) and
[promise-polyfill](https://github.com/taylorhakes/promise-polyfill),
are included as a part of your build.

After upgraded to react-dom 15.6.1, set value in textbox in 'Advanced' panel often fails on
IE11 in test automation. Issue has been submitted to [react project](https://github.com/facebook/react/issues/10776)


Base Components vs splunkweb Components
-------

* The Base Components have been completely isolated from splunkweb, so they may be ported to other
  systems. However, it doesn't have capabilities that require splunkweb:
    * No support for epoch times. Only ISO is supported.
    * Relative time strings cannot be previewed.
    * Presets must be provided.
* Splunkd components require several $C variables to be defined:
    * locale
    * splunkdPath
