'use strict';

var _karmaConfigFactory = require('./karma-config-factory');

var _karmaConfigFactory2 = _interopRequireDefault(_karmaConfigFactory);

var _childLog = require('./compilation/child-log');

var _childLog2 = _interopRequireDefault(_childLog);

var _virtualModuleLoader = require('./compilation/virtual-module-loader');

var _virtualModuleLoader2 = _interopRequireDefault(_virtualModuleLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    config: _karmaConfigFactory2.default,
    utils: { childLog: _childLog2.default, virtualModuleLoader: _virtualModuleLoader2.default }
};