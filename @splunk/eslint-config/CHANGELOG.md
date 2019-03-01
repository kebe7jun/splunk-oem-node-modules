Change Log
============

1.2.0 - September 13, 2018
----------
* Relicensed to `Splunk Software License Agreement`.

1.1.0 - April 23, 2018
----------
* `import/prefer-default-export` is now disabled.

1.0.0 - January 4, 2018
----------
* Version bump.

0.4.0 - September 25, 2017
----------
* Now using `eslint-config-prettier` instead of manually disabling certain rules. This results in a slightly more relaxed formatting ruleset.
* The following rules are now enabled:
    * `react/no-unescaped-entities`
    * `react/no-unused-prop-types`
* The following rule is now enabled for all code blocks, not just for blocks with multiple lines:
    * `curly`


0.3.1 - July 24, 2017
----------
* Upgrades dependencies.

0.3.0 - May 25, 2017
----------

The name of the package was changed from `eslint-config-splunk` to `@splunk/eslint-config`.

To upgrade uninstall `eslint-config-splunk`, install `@splunk/eslint-config`, and update your `.eslintrc` to point to the new package:

```
extends: '@splunk/eslint-config/node-prettier'
```

New Features:
* Two new base configurations were added, `browser-prettier` and `node-prettier`, for use with the code formatting tool [prettier](https://github.com/prettier/prettier).


0.2.0 - April 20, 2017
----------

Initial release.
