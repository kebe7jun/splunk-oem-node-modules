'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createRegistry = undefined;

var _templateObject = _taggedTemplateLiteral(['\n            ', ';\n        '], ['\n            ', ';\n        ']);

var _each = require('lodash/each');

var _each2 = _interopRequireDefault(_each);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _mapValues = require('lodash/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheming = require('styled-theming');

var _styledTheming2 = _interopRequireDefault(_styledTheming);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var createRegistry = exports.createRegistry = function createRegistry() {
    var styleRegistry = {};

    var createStyledComponent = function createStyledComponent(componentStyles, elementOrComponent) {
        var styledTheme = function styledTheme(props) {
            (0, _utils.fixThemeProp)(props);
            // apply base theme if themed overrides aren't available
            if (!componentStyles[props.theme.id]) {
                // eslint-disable-next-line no-param-reassign
                componentStyles[props.theme.id] = componentStyles['enterprise.light'];
            }
            return (0, _styledTheming2.default)('id', componentStyles);
        };

        return (0, _styledComponents2.default)(elementOrComponent)(_templateObject, styledTheme);
    };

    var registerStyles = function registerStyles(compName, themeId, styleDefs) {
        (0, _each2.default)(styleDefs, function (_ref, subCompName) {
            var component = _ref.component,
                styles = _ref.styles;

            var componentStyles = (0, _get2.default)(styleRegistry, [compName, subCompName, 'styles'], {});
            componentStyles[themeId] = styles;

            (0, _set2.default)(styleRegistry, [compName, subCompName], {
                component: createStyledComponent(componentStyles, component),
                styles: componentStyles
            });
        });
    };

    var getStyled = function getStyled(compName) {
        if (!styleRegistry[compName]) {
            throw new Error('No styled component available for component: ' + compName);
        }
        return (0, _mapValues2.default)(styleRegistry[compName], 'component');
    };

    var getStyledSubcomponent = function getStyledSubcomponent(compName, subCompName) {
        var styledComponent = (0, _get2.default)(styleRegistry, [compName, subCompName, 'component']);
        if (!styledComponent) {
            throw new Error('No styled component available for component: ' + compName + ', subcomponent: ' + subCompName);
        }
        return styledComponent;
    };

    var getReference = function getReference() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return function () {
            return getStyledSubcomponent.apply(undefined, args);
        };
    };

    return { registerStyles: registerStyles, getStyled: getStyled, getReference: getReference };
};