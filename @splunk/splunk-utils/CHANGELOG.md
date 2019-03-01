Change Log
============

1.2.0 - September 13, 2018
----------
* Added `themes` utils, including `defaultTheme` helper.
* Relicensed to `Splunk Software License Agreement`.

1.1.1 - April 23, 2018
----------
* `createSearchJob` supports custom `output_mode` as a search parameter (SUI-1448).

1.1.0 - February 14, 2018
----------
* Added `capabilities` utils.

1.0.0 - January 4, 2018
----------
* Version bump.

0.6.1 - December 18, 2017
----------
Bug Fix:
* Fetch no longer fails on an expected 204 response (SUI-1285).

0.6.0 - November 20, 2017
----------
New Features
* Support for Node environment (SUI-1172, SUI-1166).
* One shot search (SUI-1203).

API Changes:
* `@splunk/time-range-utils` moved into `@splunk/splunk-utils` package (SUI-1150). `timeParser` and `presets` moved into `time`. `fetchISO` renamed to `getISO`. `fetchPresets` renamed `getPresets`.

0.5.0 - September 25, 2017
----------
New Utils:
* Search (SUI-953)
* SavedSearch (SUI-1059)
* Fetch (SUI-1122)

New Features:
* `createRESTURL` added to `url` (SUI-938).
* `createDocsURL` and `createAppDocsURL` added to `url` (SUI-1083).

API Changes:
* renamed the package to splunk-utils
* `makeURL` renamed to `createURL`.
* `makeStaticURL` renamed to `createStaticURL`.

0.4.0 - July 24, 2017
----------

New Features:
* `makeURL` added to `url` (SUI-947).
* `normalizeBoolean` added to `boolean` (SUI-952).

API Changes:
* `browser` renamed to `userAgent` (SUI-958).

0.3.0 - May 25, 2017
----------

Initial release.
