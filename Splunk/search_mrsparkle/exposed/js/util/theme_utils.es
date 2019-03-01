const defaultTheme = 'light';

export function getCurrentTheme() {
    // eslint-disable-next-line no-underscore-dangle
    return window.__splunk_page_theme__ || defaultTheme;
}

export function getXmlEditorTheme() {
    const pageTheme = getCurrentTheme();
    return pageTheme === 'dark' ? 'ace/theme/xml-dark' : 'ace/theme/chrome';
}

export function getSearchEditorTheme() {
    const pageTheme = getCurrentTheme();
    return pageTheme === 'dark' ? 'dark' : 'light';
}
