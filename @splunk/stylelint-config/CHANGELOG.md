Change Log
============

1.3.0 - January 4, 2017
----------
* Upgrades dependencies.

1.2.0 - July 24, 2017
----------
* Adds support for using Prettier to format css (SUI-926).

1.1.0 - May 25, 2017
----------

The name of the package was changed from `stylelint-config-splunk` to `@splunk/stylelint-config`.

To upgrade uninstall `stylelint-config-splunk`, install `@splunk/stylelint-config`, and update your `stylelint.config.js` to point to the new package:

```
module.exports = {
    extends: '@splunk/stylelint-config',
};
```

1.0.0 - March 14, 2017
-----------

Initial release.
