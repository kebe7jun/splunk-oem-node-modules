Change Log
============

1.2.0 - September 17, 2018
---------
Bugfix:
* `createRelativeTimeLabel()` and `createRealTimeLabel()` now use sprintf to prevent localization issue (APPLAT-2269).

Notes:
* Relicensed to `Splunk Software License Agreement`.

1.1.2 - June 26, 2018
---------
Bugfix:
* `createRangeLabel()` now returns correct labels for through date ranges that end on the last day of a month (SUI-1480).
* `createRangeLabel()` now returns correct labels for complex through date ranges (SUI-1482).

1.1.1 - May 24, 2018
---------
New Feature:
* `isWholeDay()` now accepts a moment instance.

Bugfix:
* `createRangeLabel()` now returns full labels for some ranges where times match but dates differ (SUI-1460).

1.1.0 - May 3, 2018
---------
New Feature:
* Added function: `formatDuration` (APPLAT-626)

1.0.2 - April 25, 2018
----------
Bugfix:
* `@w7` is now supported (SUI-1453).
* `parseTimeString` correctly parses `@w`.

1.0.1 - January 24, 2018
----------
Bugfix:
* `isISO()` correctly returns false for years before 0000 or after 9999.

1.0.0 - January 4, 2018
----------
* Version bump.

0.5.0 - November 20, 2017
----------
New Feature:
* `getUnitLabel()` converts a unit abbreviation, such as 's' or 'sec', into an unabbreviated form,
  such as 'second' or 'seconds'.

API Change:
* `fetchISO()` renamed to `getISO()` and is no longer the default export from `timeParser`.
* `fetchPresets()` renamed to `getPresets()` and is no longer the default export from `presets`.
* `generateLabel()` renamed to `createRangeLabel()`.

0.4.0 - September 25, 2017
----------
New Feature:
* Time range AST util (SUI-980)

API Change:
* `isValid` now returns `false` instead of `undefined`.

0.3.1 - September 1, 2017
----------
Bugfix:
* `removeRealTime()` returns `'now'` instead of empty string to ensure correct processing by the time parser (SUI-1067).

0.3.0 - July 24, 2017
----------
* Improved support for multi-segment time strings (SUI-846).

0.2.0 - May 25, 2017
----------
Initial release.
