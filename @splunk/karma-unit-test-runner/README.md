# Karma unit test runner

A Karma based test runner designed to offer a comfortable and scalable unit testing experience out
of the box.


## Getting started

1. Use Splunk's internal npm repository by creating a `.npmrc` file in the root of your package,
and adding a registry entry to it:
    ```
    registry=https://repo.splunk.com/artifactory/api/npm/npm
    ```
2. Add `@splunk/karma-unit-test-runner` to your `package.json` `devDependencies`:
    ```
    npm install -D @splunk/karma-unit-test-runner
    ```
3. Create a test runner configuration in the root of your project, name it `karma.conf.js`
to have it auto-detected:
    ```
    var testRunner = require('@splunk/karma-unit-test-runner');

    module.exports = function (config) {
        testRunner.config(config, {
            basePath: __dirname,
            testRegexp: '(.+)\\.test(?:\\.jsx?)$',
            testApps: { myApp: { path: 'src' } }
        });
    };
    ```
    See `Required configuration` below for details on how to customize these settings for your project.
    Also, note that `config` is a regular Karma configuration object. If needed, the configuration can
    be manually edited further.

4. Start test runs like you usually do with Karma: `karma start` (if `karma-cli` is installed). This
package also provides the `splunk-karma-unit-test-runner` binary, which forwards arguments to Karma.
 It can be used in your `package.json` scripts, for example:
    ```
    "test": "splunk-karma-unit-test-runner start karma.conf.js --single-run",
    ```

## Required configuration

- `basePath` – Absolute path to your project. All configuration options that accept relative paths
(coverage report output, test result file output, …) make use of this value.
- `testApps` – An object defining test app names as keys and their respective settings as values. The only mandatory
app setting is `path`, which should be a relative path to your application. Limit application
names to alphanumeric strings plus the `_` and `-` characters.
- `testRegexp` - Regular expression string that detects test files. The only requirement is that it includes at least
one capture group, which will be used as test name. Using the example above, the file path
`mycomponent/mytest.test.js` would be considered a test, and displayed as `mycomponent/mytest`.

A Webpack profile is required to build your tests. If one already exists, there's a good
chance the test runner will auto-discover it. See section `Webpack profiles` below for details.

## Optional configuration
- `testStyle` – Sets the active Mocha interface. The default is `bdd`, another supported option is `tdd`.
- `wpVersion` – Let the runner know which webpack version to expect. The default is `2`, `1` is also supported.
- `supportDir` – Relative path where support files for test applications (coverage pattern definitions,
    application hooks, …). The default is `.`
- `outputDir` – Relative path used as a base path for writing reports (coverage, XML results, …). The
default is `.`
- `externalSourcePaths` - An object defining external source code locations. Its values should be absolute
paths, the respective keys should be identifiers. Example: `{ core: '/foo/bar' }`. The default is `{}`.
- `exclusions` – An object defining excluded tests. Files on this list are never compiled or executed.
Keys should be test application names (as defined in `testApps`), values should be arrays of relative
paths or glob patterns. Example: `{ myApp: ['model/foo.js', 'views/**'] }`. The default is `{}`.
- `bootstrapConfig` – Absolute path to a file containing global hooks. See `Hooks` section below.
- `features` – An object enabling/disabling additional test runner features:
    - `coverage` – An object containing two boolean flags, `direct` (default: `false`) and `babel`
    (default: `true`). Note that coverage has to be enabled separately for these settings to have effect.
    See the `Coverage` section for details.
    - `chai` - Injects a global `chai` variable for tests to use (default: `false`). The included Chai
    version is 3.x. This also adds the globals `assert`, `expect` and `should`.
    - `sinon` - Injects a global `sinon` variable for tests to use (default: `false`). The included sinon
    version is 1.x.
    - `pcssmStub` - Causes `*.pcssm` files to be stubbed out (default: `false`). `*.pcss` files aren't included.
    - `stubModules` - Array of module identifiers to replace with an empty function (default: `[]`).
    - `timezone` – Most browsers support the `TZ` environment variable to fix the current timezone. Use
    a string, for example `US/Pacific`. The default is `undefined`.

### Deprecated configuration

* Any setting related to auto-discovery of test applications, e.g. `appDir` and `testDir`. Please contact
the package maintainers for migration support.

# Options and arguments

All options and arguments are forwarded to Karma. Some of the frequently used options are:

- `--browsers <list>` – Instructs Karma to launch one or more browsers and to have them connect to the Karma server for test execution. Use a comma-separated list to specify multiple browsers for parallel execution. The default is `PhantomJS`. In addition to common browsers `ChromeCanary` is supported, as is `PhantomJSDebug`.
- `--reporters <list>` – Tells Karma to use one or more test result reporters. The following are supported: `progress` (simple counter), `dots` (similar to other test frameworks), `junit` (xml output), `nyan`, `mocha` (detailed, includes diff output on assertion error). The default is `mocha`. Note that here are reporters that incorrectly mangle parallel browser output.
- `--single-run` – If single run is enabled, Karma executes all tests once, reports the results, and exits. This matches other test runners and works well with CI systems. If single run is disabled (the default), Karma will keep running once started, watching files for changes. If changes are detected all tests are run again. This is intended for developers actively working on code/tests. Note: It's actually Webpack doing the watching, not Karma. Webpack watches all files related to the build, meaning all active test files and all used modules. New files or changes to unused modules won't be detected.
- `--log-level` – Can be one of `disable`, `error`, `warn`, `info`, or `debug` (default: `info`). Applies
to both infrastructure logging (in Karma) and test logging (in browsers). `console.log` statements in tests
are treated as info. A lot of setup code (webpack compilation, test file loading, …) is hidden by default,
using `--log-level debug` is essential for debugging test runner-related issues.
- `--disableExclusions` – A flag to circumvent all exclusions (see `Optional configuration` above). Be
aware that typically tests are disabled for a reason.

In addition, the `splunk-karma-unit-test-runner` binary supports the following options:

- `--apps <list>` - Only want to run tests from certain apps? Specify them (comma-separated). The default
behavior is to run tests from all apps. Example: `--apps myApp`.
- `--filter <list>` – Optional (comma-separated) list of filter strings to limit the set of active tests.
Example: `--filter **/foo/bar.js`. Filters use glob patterns (\*\*, \*, ranges, etc.). Patterns are applied
to the base path, not test application source paths. Alphanumeric filter strings are embedded in `**` (`foo` -> `**/foo/**`).
- `--coverage` and `--coverage-maps` – See `Coverage` section below.

A special reporter named `performance` is included. Activating it will output test durations at the
end of a run.

Note that certain Karma features and settings might be incompatible with the test runner.

## Webpack profiles

Tests should always consume application source, not prebuilt files. This means that the test runner
has to compile all test files before executing them. Additionally, considering the differences in
browser support for modern JavaScript standards, transpilation is a common step required as part of
the test build.

The test runner is designed to read your existing Webpack configuration file/profile. It applies a
few modifications (depending on the activated feature set) before spawning a separate Webpack
compilation process for each test application.

One important modification applied is that the runner replaces all existing entry points. This
implies that, in a lot of cases, existing Webpack profiles can be reused as they are. However, a
separate profile for testing (modifying the main build profile) might be desirable for some edge
cases, e.g. if your build includes plugins for file copying, compression, etc.

Profiles are discovered automatically, starting in the `profiles` subdirectory of each test
application's main directory. The test runner will try to load different combinations of names and
file extensions. If it's unable to locate a profile, it will try the parent directory. It will never
look for profiles outside the global base path.

If no profile is found, an empty Webpack configuration is used. The various combinations used for
discovering a profile include variations of the keyword `test`, `build`, `webpack`, `pages`,
`pages-enterprise`, either embedded in `webpack.{x}.config` or just `{x}.config`. Both `.js` and
`.es` files are supported. A commonly used file name is `webpack.test.config.js`.

## Hooks

Similar to common test hooks ('before a test', 'before all tests in a suite', …) the test runner
supports hooking into certain stages of a test run. Application-level hooks are the recommended way
to add those kind of hooks to your tests. Global hooks are available if you need to influence the
test bootstrapping behavior, though this shouldn't be needed in a typical scenario.

Hooks are an optional feature, no hook module are required to run tests.

#### Test application hooks

In the support directory of a test application (default: the application directory itself), add a file
named `hooks.js`. The hook module must call `setupTestApp` with one argument: A function that returns
an object where the keys are hook names and the values functions to execute for each hook invocation.

The available hooks are:

- `loadSetup` – Called once before test file loading for the current application begins.
- `loadFileSetup` – Called before each test file is loaded.
- `appSetup` – Called once before test execution for the current application begins.
- `appTeardown` – Called once after test execution for the current application has finished.
- `fileSetup` – Called before tests defined in a test file start running, receives the test file name as argument.
- `fileTeardown` – Called after all tests defined in a test file have finished running, receives the test file name as argument.
- `testSetup` – Called before each test.
- `testTeardown` – Called after each test.

Example:
```
setupTestApp(() => ({
    loadSetup: function () {
        console.debug('myApp test files are loading');
        […]
    },

    testTeardown: function () {
        console.log('ensuring clean state after test');
    },
}));
```

#### Global hooks

Setting `bootstrapConfig` to a module path enables global test hooks. The module must export an object,
the following keys are supported:

- `hooks` – Similar to application-level hooks, the value for this setting should be an object
containing hook names and functions. Supported names:
    - `beforeSetup` – Called once at the beginning of test loading.
    - `beforeEachAppLoad` – Called before test loading for a test application begins.
    - `afterEachAppLoad` – Called after test loading for a test application has finished.
    - `beforeEachApp` – Called before test execution for a test application begins.
    - `afterEachApp` – Called after test execution for a test application has finished.
- `testHelpers` - A function returning an object, the properties of which are moved to the global
scope during test execution.

## Coverage

The test runner supports instrumenting your application source (and tests) and retrieving code
coverage results for each file included in the compilation. Istanbul is used for this purpose.
Coverage support has to be activated by adding the `--coverage` and/or `-coverage-maps` options.

If `--coverage` is set, a summarized coverage table will be output to the console at the end of each
run. Additionally, a more comprehensive HTML report is written to disk. If `--coverage-maps` is set,
JSON files containing Istanbul `CoverageMap` objects are written to disk. Both options can be active
at the same time.

Coverage patterns are required for each test file, so that the instrumentation plugins know which
files to include and which to ignore. There are two ways to specify patterns:

- Creating a`coverage-patterns.json` file in an application's support directory. The file must
contain a JSON object with test names as keys and coverage patterns as values. Regular expressions can
be used for the patterns, for example:
```
{
    "util/test_foo": "util/.*foo_functions",
    "util/test_bar": "util/bar"
}
```
- Adding a `coveragePatterns` object to the test runner configuration (`karma.conf.js`). This objects
must use test application names as keys, and pattern functions as values. These functions should accept
a pattern object (read from each app's `coverage-patterns.json`, if exists), and are expected to
return a modified pattern object for each application.

Hint: Setting the log level to `debug` allows for easy inspection of used coverage patterns.

There are two coverage modes, `direct` and `babel`, the latter being the default (see `Optional
configuration`). Direct coverage is intended for legacy scenarios. It uses a webpack loader,
operates on `*.js` files only, and exclusively supports ES5. Babel coverage uses a babel plugin,
meaning it operates on all files included by babel itself, depending on the active babel
configuration. This mode supports source maps and ES6.

Both modes can be enabled at the same time, results are combined automatically.

## References

- [Karma](https://github.com/karma-runner)
- [Webpack](https://webpack.github.io)
- [Babel](https://github.com/babel)
- [Istanbul](https://github.com/istanbuljs)
