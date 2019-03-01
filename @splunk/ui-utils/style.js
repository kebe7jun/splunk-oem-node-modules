/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toClassName = toClassName;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable import/prefer-default-export */

/**
 * A simple utility for conditionally joining class names together for React components. It will
 * extract all of the strings from the provided arguments and join them together with spaces. If an
 * object is passed, the keys with truthy values will be used. Arguments like `false`, `null`, and
 * `undefined` will be ignored. Adapted from
 * [JedWatson's classnames](https://github.com/JedWatson/classnames).
 * @param {...Any}
 * @returns {String} className suitable for a React component.
 * @public
 */
function toClassName() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return args.reduce(function (accum, arg) {
        if (!arg) {
            return accum;
        }
        var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
        if (argType === 'string') {
            accum.push(arg);
        } else if (Array.isArray(arg)) {
            accum.push(toClassName.apply(undefined, _toConsumableArray(arg)));
        } else if (argType === 'object') {
            return accum.concat(Object.keys(arg).filter(function (key) {
                return arg[key];
            }));
        }
        return accum;
    }, []).join(' ');
}