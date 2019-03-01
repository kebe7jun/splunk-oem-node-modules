# Contributing

## The plan for the package
This package will contain utils that do not depend on the Splunk runtime.

Utilities are grouped into modules by domain and each module should use named exports rather than default.

The currently planned domains are:
* browser (ex: import { isIE } from '@splunk/ui-utils/browser')
* color (ex: import { saturate } from '@splunk/ui-utils/color')
* cookies (ex: import { getCookie } from '@splunk/ui-utils/cookies')
* filter (ex: { filterByKeywords } from '@splunk/ui-utils/filter')
* focus (ex: import { takeFocus } from '@splunk/ui-utils/focus')
* format (ex: import { abbreviateNumber } from '@splunk/ui-utils/format')
* id (ex: import { createDOMID } from '@splunk/ui-utils/id')
* keyboard (ex: import { isNumeric } from '@splunk/ui-utils/keyboard')
* math (ex: import { strictParseFloat } from '@splunk/ui-utils/math')
* selection (ex: import { setCaretPosition } from '@splunk/ui-utils/selection')
* style (ex: import { toClassName } from '@splunk/ui-utils/style')
* test (Currently used, but may be removed)
