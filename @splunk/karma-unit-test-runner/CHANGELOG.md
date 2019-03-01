Change Log
============

1.0.0 - January 4, 2017
----------
* Version bump.

0.13.0 - November 20, 2017
----------
Bug Fix:
* The test runner no longer fails to load bundled Karma plugins in certain situations.

New Feature:
* `jsdom` is now a supported browser.

Deprecation Notices:
* `PhantomJS` will no longer be the default browser in the next release. `karma-phantomjs-launcher`
will no longer be included. Projects will be able to continue using PhantomJS, but will have to add
the dependency manually.


0.12.0 - September 25, 2017
----------
API Changes:
* Chai is no longer loaded by default. Use the new `chai` feature flag to restore the previous
behavior.

New Feature:
* The `features.chai` flag was added (default: `false`). Enabling it causes Chai and assertion
styles to be available as globals.
* The `--coverage-maps` flag was added. Enabling it will write Istanbul `CoverageMap` objects to disk.

Bug Fix:
* Webpack 2 rules without `use` no longer throw an error.


0.11.0 - July 24, 2017
----------
* Alphanumeric filter terms are now embedded in `**`, e.g. `--filter foo` now filters for `**/foo/**`.


0.10.0 - May 25, 2017
----------
The name of the package was changed from `splunk-ui-test-runner` to `@splunk/karma-unit-test-runner`.

To upgrade:
* Uninstall `splunk-ui-test-runner`.
* Install `@splunk/karma-unit-test-runner`.
* Find and replace all imports of `splunk-ui-test-runner` with `@splunk/karma-unit-test-runner`.
* In your package.json update scripts that call `splunk-ui-test-runner` to call `splunk-karma-unit-test-runner` instead.

Bug Fix:
* Webpack profiles in the `profiles` subdirectory were ignored

New Feature:
* Added `webpack.config` to the list of valid profile names


0.9.4 - April 20, 2017
----------
* Bugfix: Webpack profiles outside the base path were loaded


0.9.3 - March 28, 2017
----------
* Bugfix: bugfix in 0.9.2 wasn't working if `--apps` was missing


0.9.2 - March 28, 2017
----------
* Bugfix: `--apps` was ignored in non-discovery mode


0.9.1 - March 23, 2017
----------
* Bugfix: `virtual-module-loader` `install` was setting an incorrect webpack config value


0.9.0 - March 7, 2017
----------
* Webpack is now a peer dependency
* Initial support for Webpack 2
  * pcssm stubbing is not yet supported
* License changed to `UNLICENSED`
