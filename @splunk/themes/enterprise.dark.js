'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixins = exports.variables = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _enterprise = require('./enterprise');

var _mixins = require('./mixins');

var dragHandleDark = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAXEgAAFxIBZ5/SUgAAAW5pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOnN1YmplY3Q+CiAgICAgICAgICAgIDxyZGY6QmFnLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K72CKvQAAADdJREFUOBFj/PDp00cGJCDAx8ePxGUgJM+ErJgc9sAbQI6rh5seRkLxTEh+4KORYhcMtzglxz8AtKEQD3hiWXMAAAAASUVORK5CYII='; // see babel-plugin-base64-png

var dark = {
    backgroundColor: _enterprise.variables.gray25,
    backgroundColorHover: _enterprise.variables.gray30,
    borderColor: _enterprise.variables.gray22,
    borderDarkColor: _enterprise.variables.black,
    borderLightColor: _enterprise.variables.gray60,
    textColor: _enterprise.variables.white,
    textGray: _enterprise.variables.gray92,
    textDisabledColor: _enterprise.variables.gray45,
    linkColor: _enterprise.variables.accentColorL10,
    linkColorHover: _enterprise.variables.accentColorL20,

    border: '1px solid ' + _enterprise.variables.gray22,
    borderDark: '1px solid ' + _enterprise.variables.black,
    borderLight: '1px solid ' + _enterprise.variables.gray60,

    focusShadowInset: 'inset 0 0 2px 1px ' + _enterprise.variables.gray25 + ', inset 0 0 0 2px ' + _enterprise.variables.focusColor,

    draggableBackground: 'url(\'data:image/png;base64,' + dragHandleDark + '\') 0 0 / 8px 8px repeat'
};

var variables = exports.variables = _extends({}, _enterprise.variables, dark);

var mixins = exports.mixins = _extends({}, _enterprise.mixins, {
    reset: (0, _mixins.createReset)(variables)
});