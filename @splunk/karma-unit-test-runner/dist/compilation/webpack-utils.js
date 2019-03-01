'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (wpVersion) {
    var getLoaders = function getLoaders(profile) {
        var pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (wpVersion >= 2) {
            return profile.module.rules;
        }
        return profile.module[pre ? 'preLoaders' : 'loaders'];
    };

    var loaderName = function loaderName(l) {
        return _lodash2.default.isString(l) ? l : l.loader;
    };

    var isLoader = function isLoader(l, name) {
        return _lodash2.default.startsWith(loaderName(l), name);
    };

    var addLoader = function addLoader(profile, test, loader) {
        var pre = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        var loaders = getLoaders(profile, pre);
        var newLoader = wpVersion >= 2 ? { test: test, use: [loader] } : _lodash2.default.assign(loader, { test: test });
        if (wpVersion >= 2 && pre) {
            _lodash2.default.first(newLoader.use).enforce = 'pre';
        }
        loaders.push(newLoader);
    };

    var setWp2LoaderOption = function setWp2LoaderOption(rules, lname, option, value, _ref) {
        var makeOption = _ref.makeOption,
            addToOption = _ref.addToOption;

        _lodash2.default.each(rules, function (rule) {
            if (_lodash2.default.has(rule, 'use')) {
                rule.use = _lodash2.default.map(rule.use, function (l) {
                    if (isLoader(l, lname)) {
                        if (_lodash2.default.isString(l) && makeOption) {
                            // eslint-disable-next-line no-param-reassign
                            l = { loader: l };
                        }
                        if (_lodash2.default.isString(l)) {
                            var parsedL = _url2.default.parse(l, true);
                            parsedL.query[option] = value;
                            parsedL.search = _querystring2.default.stringify(parsedL.query);
                            return _url2.default.format(parsedL);
                        }
                        var newValue = addToOption ? _lodash2.default.get(l, 'options.' + option, []).concat([value]) : value;
                        _lodash2.default.set(l, 'options.' + option, newValue);
                    }
                    return l;
                });
            }
        });
    };

    return { getLoaders: getLoaders, isLoader: isLoader, addLoader: addLoader, setWp2LoaderOption: setWp2LoaderOption };
};