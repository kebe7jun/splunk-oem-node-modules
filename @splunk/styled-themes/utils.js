'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lightOrDark = exports.ifLight = exports.ifDark = exports.registerDefault = exports.resetRegistry = exports.transformVariable = exports.registerMixins = exports.registerVariables = exports.mixins = exports.variables = exports.fixThemeProp = exports.defaultThemeId = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _endsWith = require('lodash/endsWith');

var _endsWith2 = _interopRequireDefault(_endsWith);

var _mapValues = require('lodash/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _styledTheming = require('styled-theming');

var _styledTheming2 = _interopRequireDefault(_styledTheming);

var _enterprise = require('@splunk/themes/enterprise');

var _enterprise2 = require('@splunk/themes/enterprise.dark');

var _lite = require('@splunk/themes/lite');

var _makeResetMixin = require('./makeResetMixin');

var _makeResetMixin2 = _interopRequireDefault(_makeResetMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultThemeId = exports.defaultThemeId = function defaultThemeId() {
    var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

    if (!scope) {
        return 'enterprise.light';
    }

    /* eslint-disable no-underscore-dangle */
    var partialsTheme = scope.__splunkd_partials__ && scope.__splunkd_partials__['/services/server/info'] && scope.__splunkd_partials__['/services/server/info'].entry[0].content.product_type;
    var scopeTheme = scope.__splunk_ui_theme__;
    var scopeMode = scope.__splunk_ui_theme_mode__;
    /* eslint-enable no-underscore-dangle */

    var cTheme = scope.$C && scope.$C.SPLUNK_UI_THEME;
    var cMode = scope.$C && scope.$C.SPLUNK_UI_THEME_MODE;

    var targetTheme = scopeTheme || cTheme || partialsTheme || 'enterprise';
    var targetMode = scopeMode || cMode || 'light';

    return targetTheme + '.' + targetMode;
};

// TODO: performance / caching for all of this?

var defaultThemeIdCached = defaultThemeId();
var fixThemeProp = exports.fixThemeProp = function fixThemeProp(props) {
    if (!(props.theme && props.theme.id)) {
        props.theme = { id: defaultThemeIdCached }; // eslint-disable-line no-param-reassign
    }
};

var variablesRegistry = {}; // holds theme ids and variables
var mixinsRegistry = {}; // holds theme ids and mixins
var variables = exports.variables = {}; // holds theme ids and styled-theming helpers
var mixins = exports.mixins = {}; // holds theme ids and styled-theming helpers

var registerVariables = exports.registerVariables = function registerVariables(id, newVariables) {
    variablesRegistry[id] = _extends({}, variablesRegistry[id], newVariables);

    Object.keys(newVariables).forEach(function (name) {
        variables[name] = function (props) {
            fixThemeProp(props);

            var themedVariable = (0, _mapValues2.default)(variablesRegistry, function (themeVariables) {
                return themeVariables[name];
            });
            // apply base theme if themed overrides aren't available
            if (!themedVariable[props.theme.id]) {
                themedVariable[props.theme.id] = themedVariable['enterprise.light'];
            }
            return (0, _styledTheming2.default)('id', themedVariable);
        };
    });
};

var registerMixins = exports.registerMixins = function registerMixins(id, newMixins) {
    mixinsRegistry[id] = _extends({}, mixinsRegistry[id], newMixins);

    Object.keys(newMixins).forEach(function (name) {
        mixins[name] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return function (props) {
                fixThemeProp(props);
                var themedMixin = (0, _styledTheming2.default)('id', (0, _mapValues2.default)(mixinsRegistry, function (themeMixins) {
                    return themeMixins[name].apply(themeMixins, args);
                }));
                // TODO: for reset mixin, do we need to delete all:initial for IE11?
                // TODO: add an enterprise.light fallback?
                return name === 'reset' ? (0, _makeResetMixin2.default)(themedMixin) : themedMixin;
            };
        };
    });
};

var transformVariable = exports.transformVariable = function transformVariable(variableName, transform) {
    return function (props) {
        fixThemeProp(props);
        return (0, _styledTheming2.default)('id', (0, _mapValues2.default)(variablesRegistry, function (themedVariables) {
            return transform(themedVariables[variableName]);
        }));
    };
};

var resetRegistry = exports.resetRegistry = function resetRegistry() {
    [variablesRegistry, mixinsRegistry, variables, mixins].forEach(function (toClear) {
        // eslint-disable-next-line no-param-reassign
        Object.keys(toClear).forEach(function (name) {
            return delete toClear[name];
        });
    });
};

var registerDefault = exports.registerDefault = function registerDefault() {
    registerVariables('enterprise.light', _enterprise.variables);
    registerMixins('enterprise.light', _enterprise.mixins);
    registerVariables('enterprise.dark', _enterprise2.variables);
    registerMixins('enterprise.dark', _enterprise2.mixins);
    registerVariables('lite.light', _lite.variables);
    registerMixins('lite.light', _lite.mixins);
};

registerDefault();

// const scrollbarsDark = css`
//     &::-webkit-scrollbar {
//         background-color: ${variables.backgroundColor};
//         width: 8px;
//     }

//     &::-webkit-scrollbar-thumb {
//         background: ${variables.textColor};
//         border-radius: 4px;
//         width: 8px;
//     }

//     &::-webkit-scrollbar-track {
//         background: ${variables.backgroundColor};
//         border-radius: 4px;
//     }
// `;
// ${props => (props.theme && props.theme.id === 'enterprise.dark' ? scrollbarsDark : null)};

var ifDark = exports.ifDark = function ifDark(dark) {
    return function (props) {
        fixThemeProp(props);
        return (0, _endsWith2.default)(props.theme.id, '.dark') ? dark : null;
    };
};

var ifLight = exports.ifLight = function ifLight(light) {
    return function (props) {
        fixThemeProp(props);
        return !(0, _endsWith2.default)(props.theme.id, '.dark') ? light : null;
    };
};

var lightOrDark = exports.lightOrDark = function lightOrDark(light, dark) {
    return function (props) {
        fixThemeProp(props);
        return (0, _endsWith2.default)(props.theme.id, '.dark') ? dark : light;
    };
};