# Themes

A collection of Splunk theme variables and mixins. This package is framework-agnostic. Themes consist
of plain objects containing primitives such as strings and numbers. Functions are used for mixins.

## Install
```
yarn add --dev @splunk/themes
```
Or
```
npm install --save-dev @splunk/themes
```

## Use

Every theme is delivered as a single module exporting `variables` and `mixins`.

```js
import { variables, mixins } from '@splunk/themes/enterprise';
import { variables, mixins } from '@splunk/themes/lite';
```

Hardcoding theme choices into an application/component must be avoided. Higher-level packages
(such as `@splunk/css-loader`) handle theme selection automatically. Manually determining the
active theme depends on the environment. For example, recent versions of Splunk Enteprise/Lite
provide `window.$C.SPLUNK_UI_THEME`.

### Variables

Variables are a flat object following a `variableName: string|number` scheme:
```js
{
    brandColor: '#5cc05c',
    overlayShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    [...]
    zindexModal: 1050,
}
```

### Mixins

Mixins are a flat object following the `variableName: function` scheme:

```js
{
    reset: function(display),
    clearfix: function(),
    [...]
}
```
