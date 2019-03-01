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
    brandColorL50: '#fef8f2',
    brandColorL40: '#fde6d2',
    brandColorL30: '#fbcda5',
    brandColorL20: '#f9b479',
    brandColorL10: '#f79b4c',
    brandColor: '#f58220',
    brandColorD10: '#ed740b',
    brandColorD20: '#d2670a',
    brandColorD30: '#b85b09',
    brandColorD40: '#9e4e07',
    brandColorD50: '#844106'
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