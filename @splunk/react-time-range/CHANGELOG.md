Change Log
============

2.0.0 - September 17, 2018
----------
New Features:
* Now uses `@splunk/react-ui` 2.x and supports theming.
* Support for dark mode.

API Changes:
* The `@splunk/react-ui` peer dependency is now `^2`.
* The `react` and `react-dom` peer dependencies are now `^16.3`.
* `styled-components` is now a peer dependency.

Notes:
* Relicensed to `Splunk Software License Agreement`.

1.3.0 - July 24, 2018
----------
New Features:
* Added `disabled` prop in `Dropdown` (SUI-1523).

1.2.5 - June 26, 2018
----------
Bug Fix:
* Date range no longer adds a day when type is between (SUI-1459).
* Date range now shows a more appropriate label for `latest` when type is between.
* Date time range now shows an error for equivalent times (SUI-1479).
* Updates a dependency that fixes `Dropdown` labels for some date time ranges (SUI-1460, SUI-1480, SUI-1482).

1.2.4 - April 26, 2018
----------
Bug Fix:
* `Dropdown` now focuses toggle on close (SUI-1215).
* `Dropdown` no longer incorrectly propagates `data-test` down to `Dialog`.

1.2.3 - April 12, 2018
----------
Migrated package to `workflow-components` repository.

1.2.2 - March 6, 2018
----------
Bug Fix:
* `Dropdown` reopens to correct panel when a date range is specified (SUI-1411).

1.2.1 - N/A
----------
Was not published.

1.2.0 - March 2, 2018
----------
New Feature:
* `SplunkwebConnector` now supports transforming presets (SUI-1383).

Bug Fix:
* Date range no longer subtracts a day when instantiating a time range of type before (SUI-1397).
* Corrected date range help text when type is between.

1.1.0 - February 5, 2018
----------
Style Update:
* The apply button of pertinent panels was moved to the lower left of the panel and forms inputs were extended to the full width of the panel (SUI-1361).

Bug Fix:
* Adds missing test hook to columns in presets panel (SUI-1362).

1.0.1 - January 24, 2018
----------
Bug Fixes:
* Date panel no longer errors when searching dates before 1970 (SUI-1337).
* Date and date-time panels populate with appropriate data when `earliest` and `latest` match a preset (SUI-1322).
* RealTime and Relative Panels prevent unsupported dates from being entered (SUI-1330).

1.0.0 - January 4, 2018
----------
* New visual design.
