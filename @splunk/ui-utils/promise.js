/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

/* eslint-disable import/prefer-default-export */

/**
 * Adds a cancel function on your promise to cancel future execution of then or catch functions.
 * makeCancelable will also cancel all callbacks attached to new promises returned by then/catch.
 *
 * @param {Promise} promise - The value to be evaluated.
 * @returns {Promise}
 * @public
 */

var makeCancelable = exports.makeCancelable = function makeCancelable(promise) {
    var isCanceled = false;

    var wrappedPromise = new Promise(function (resolve, reject) {
        promise.then(function (val) {
            if (isCanceled) {
                reject({ isCanceled: true });
            } else {
                resolve(val);
            }
        });
        promise.catch(function (error) {
            if (isCanceled) {
                reject({ isCanceled: true });
            } else {
                reject(error);
            }
        });
    });

    return {
        promise: wrappedPromise,
        cancel: function cancel() {
            isCanceled = true;
        }
    };
};