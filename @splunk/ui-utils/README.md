# UI Utils

A library of common UI utilities.


## Install
```
yarn add --dev @splunk/ui-utils
```
Or
```
npm install --save-dev @splunk/ui-utils
```

## Import

Individual functions can be imported from several named modules.

Boolean example:
```
import { normalizeBoolean } from '@splunk/ui-utils/boolean';
```

Cookie example:
```
import { getEntry } from '@splunk/ui-utils/cookie';
```

Filter example:
```
import { filterByKeywords } from '@splunk/ui-utils/filter';
```

Focus example:
```
import { takeFocus } from '@splunk/ui-utils/focus';
```

Format example:
```
import { smartTrim } from '@splunk/ui-utils/format';
```

Id example:
```
import { createDOMID } from '@splunk/ui-utils/id';
```

Internationalization example:
```
import { _ } from '@splunk/ui-utils/i18n';
```

Keyboard example:
```
import { isNumber } from '@splunk/ui-utils/keyboard';
```

Math example:
```
import { strictParseFloat } from '@splunk/ui-utils/math';
```

Style example:
```
import { toClassName } from '@splunk/ui-utils/style';
```

User Agent example:
```
import { isIE11 } from '@splunk/ui-utils/userAgent';
```
