import React from 'react';
import Link from '@splunk/react-ui/Link';

export default () => (
    <div>
        <Link data-test="link_regular" to="https://duckduckgo.com">
            Go to DuckDuckGo
        </Link>
        <Link data-test="link_newtab" to="https://duckduckgo.com" openInNewContext>
            Go to DuckDuckGo in new window
        </Link>
        <Link data-test="link_disabled" to="https://duckduckgo.com" disabled>
            Do not go to DuckDuckGo
        </Link>
    </div>
);
