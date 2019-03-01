import React from 'react';
import { _ } from '@splunk/ui-utils/i18n';

export default function Peek() {
    return (
        <svg
            viewBox="0 0 24 24"
            focusable="false"
            style={{
                display: 'block',
                height: '16px',
                width: '16px',
                fill: 'currentColor',
                margin: '2px auto 0 auto',
            }}
        >
            <title>{_('Peek behind modal')}</title>
            <path d="M7 1h4v3H7zM13 1h4v3h-4zM3 3H1v2h4V1H3M1 7h3v4H1zM1 13h3v4H1zM1 19v2h2v2h2v-4H3M7 20h4v3H7zM13 20h4v3h-4zM19 19v4h2v-2h2v-2h-2M20 13h3v4h-3zM20 7h3v4h-3zM21 3V1h-2v4h4V3" />
        </svg>
    );
}
