'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixins = exports.variables = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _mixins = require('./mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * # Brand Colors
 *
 *  @colorSet
 */
var brandColors = {
    brandColorL50: '#f5fbf5',
    brandColorL40: '#dff2df',
    brandColorL30: '#bee6be',
    brandColorL20: '#9ed99e',
    brandColorL10: '#7ecd7e',
    brandColor: '#5cc05c',
    brandColorD10: '#49b849',
    brandColorD20: '#40a540',
    brandColorD30: '#389038',
    brandColorD40: '#307b30',
    brandColorD50: '#286728'
};

var variables = exports.variables = _extends({}, _base2.default, brandColors);

var mixins = exports.mixins = {
    reset: (0, _mixins.createReset)(variables),
    clearfix: _mixins.clearfix,
    ellipsis: _mixins.ellipsis,
    printWidth100Percent: _mixins.printWidth100Percent,
    printHide: _mixins.printHide,
    printNoBackground: _mixins.printNoBackground,
    printWrapAll: _mixins.printWrapAll
};