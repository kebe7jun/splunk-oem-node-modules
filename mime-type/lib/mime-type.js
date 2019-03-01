// Generated by CoffeeScript 1.12.6

/*
 * Module variables.
 * @private
 */

(function() {
  var MimeTypes, defineProperty, extractTypeRegExp, isArray, isFunction, isString, mediaTyper, minimatch, path, textTypeRegExp,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  mediaTyper = require('media-typer');

  minimatch = require('minimatch');

  isArray = require('util-ex/lib/is/type/array');

  isString = require('util-ex/lib/is/type/string');

  isFunction = require('util-ex/lib/is/type/function');

  defineProperty = require('util-ex/lib/defineProperty');

  path = require('path.js');

  extractTypeRegExp = /^\s*([^;\s]*)(?:;|\s|$)/;

  textTypeRegExp = /^text\//i;


  /*
   * Module exports.
   * @public
   */

  module.exports = MimeTypes = (function() {
    'use strict';
    var refSources;

    MimeTypes.prototype.dupDefault = 0;

    MimeTypes.prototype.dupSkip = 1;

    MimeTypes.prototype.dupOverwrite = 2;

    MimeTypes.prototype.dupAppend = 3;

    function MimeTypes(db, duplicationProcessWay) {
      if (!(this instanceof MimeTypes)) {
        return new MimeTypes(db, duplicationProcessWay);
      }
      defineProperty(this, 'types', {});
      defineProperty(this, 'dup', this.dupDefault);
      defineProperty(this, 'extensions', void 0, {
        get: function() {
          var j, k, len, mime, ref, result;
          result = {};
          ref = Object.keys(this);
          for (j = 0, len = ref.length; j < len; j++) {
            k = ref[j];
            mime = this[k];
            result[k] = mime.extensions;
          }
          return result;
        }
      });
      if (duplicationProcessWay && indexOf.call([0, 1, 2, 3], duplicationProcessWay) >= 0) {
        this.dup = duplicationProcessWay;
      }
      if (db) {
        this.load(db);
      }
    }


    /*
     * Get the default charset for a MIME type.
     *
     * @param {string} type
     * @return {boolean|string}
     */

    MimeTypes.prototype.charset = function(type) {
      var obj, result;
      if (type && isString(type)) {
        try {
          obj = mediaTyper.parse(type);
          result = obj.parameters.charset;
          if (!result) {
            obj.parameters = void 0;
            type = mediaTyper.format(obj);
            result = this[type] && this[type].charset;
          }
          if (!result && obj.type === 'text') {
            result = 'utf-8';
          }
        } catch (error) {}
      }
      return result;
    };


    /*
     * Create a full Content-Type header given a MIME type or extension.
     *
     * @param {string} str
     * @return {boolean|string}
     */

    MimeTypes.prototype.contentType = function(str) {
      var charset;
      var charset, mime;
      if (str && isString(str)) {
        mime = str.indexOf('/') === -1 ? this.lookup(str) : str;
        if (mime) {
          if (mime.indexOf('charset') === -1) {
            charset = this.charset(mime);
            if (charset) {
              mime += '; charset=' + charset.toLowerCase();
            }
          }
        }
      }
      return mime;
    };


    /*
     * Get the default extension for a MIME type.
     *
     * @param {string} type
     * @return {boolean|string}
     */

    MimeTypes.prototype.extension = function(type) {
      var result;
      if (type && isString(type)) {
        result = extractTypeRegExp.exec(type);
        result = result && this[result[1].toLowerCase()];
        if (result) {
          result = result.defaultExtension || result.extensions[0];
        }
      }
      return result;
    };


    /*
     * Lookup the MIME types for a file path/extension.
     *
     * @param {string} path
     * @return {undefined|string|array}
     */

    MimeTypes.prototype.lookup = function(aPath) {
      var extension, result;
      if (aPath && isString(aPath)) {
        extension = path.extname('x.' + aPath).toLowerCase().substr(1);
        if (extension) {
          result = this.types[extension];
        }
      }
      return result;
    };


    /*
     * Return all MIME types which matching a pattern
     *   [spec](http://tools.ietf.org/html/rfc2616#section-14.1)
     * @param {string} pattern the mime type pattern, For example "video/*", "audio/*", ..
     * @return {array}
     */

    MimeTypes.prototype.glob = function(pattern) {
      var result;
      if (pattern === '*/*') {
        return ['application/octet-stream'];
      }
      result = Object.keys(this).filter(function(name) {
        return minimatch(name, pattern);
      });
      return result;
    };


    /*
     * Whether the mime type is exist.
     * @param {string} type the mime type
     * @return {boolean}
     */

    MimeTypes.prototype.exist = Object.prototype.hasOwnProperty;

    refSources = ['nginx', 'apache', void 0, 'iana'];


    /*
     * Add a custom mime/extension mapping
     * @param (string) type:  mime type
     * @param (object) mime:  mime object
     *  * "source": "iana",
     *  * "charset": "UTF-8",
     *  * "compressible": true,
     *  * "extensions": ["js"]
     * @return {array}: the added extensions
     */

    MimeTypes.prototype.define = function(type, mime, dup) {
      var extension, exts, from, j, len, ref, t, to;
      if (!(type && mime && mime.extensions && !this.hasOwnProperty(type))) {
        return;
      }
      if (dup == null) {
        dup = this.dup;
      }
      exts = mime.extensions;
      if (!isArray(exts)) {
        mime.extensions = [exts];
      }
      exts = [];
      if (mime.charset) {
        mime.charset = mime.charset.toLowerCase();
      }
      ref = mime.extensions;
      for (j = 0, len = ref.length; j < len; j++) {
        extension = ref[j];
        t = this.types[extension];
        if (t) {
          switch (dup) {
            case this.dupSkip:
              continue;
            case this.dupAppend:
              if (isString(t)) {
                t = [t];
              }
              if (indexOf.call(t, type) < 0) {
                t.push(type);
              }
              break;
            case this.dupOverwrite:
              t = type;
              break;
            case this.dupDefault:
              if (isArray(t)) {
                t = t[0];
              }
              from = refSources.indexOf(this[t].source);
              to = refSources.indexOf(mime.source);
              if (t !== 'application/octet-stream' && from > to || from === to && t.substr(0, 12) === 'application/') {
                if (process.env.DEBUG_MIME) {
                  console.warn("defineMime(" + type + "): the " + extension + " extension is exists on\n" + t + " skipped it.");
                }
                continue;
              } else {
                t = type;
              }
          }
        } else {
          t = type;
        }
        this.types[extension] = t;
        exts.push(extension);
      }
      if (exts.length) {
        mime.extensions = exts;
        this[type] = mime;
      }
      return exts;
    };


    /*
     * load mime-types from db.
     */

    MimeTypes.prototype.load = function(mimes, duplicationProcessWay) {
      var result;
      result = 0;
      Object.keys(mimes).forEach((function(_this) {
        return function(type) {
          var t;
          t = _this.define(type, mimes[type], duplicationProcessWay);
          if (t && t.length) {
            return result++;
          }
        };
      })(this));
      return result;
    };


    /*
     * remove the specified mime-type.
     */

    MimeTypes.prototype["delete"] = function(type) {
      var i, k, ref, result, v;
      result = this.exist(type);
      if (result) {
        ref = this.types;
        for (k in ref) {
          v = ref[k];
          if (isArray(v)) {
            i = v.indexOf(type);
            if (i !== -1) {
              v.splice(i, 1);
              if (v.length === 1) {
                this.types[k] = v[0];
              }
            }
          } else if (type === v) {
            delete this.types[k];
          }
        }
        delete this[type];
      }
      return result;
    };


    /*
     * clear the mime-types.
     */

    MimeTypes.prototype.clear = function(filter) {
      var k, ref, result, v;
      result = 0;
      ref = this;
      for (k in ref) {
        v = ref[k];
        if (this.hasOwnProperty(k)) {
          if (isFunction(filter)) {
            if (filter(k, v)) {
              this["delete"](k);
              result++;
            }
          } else if (isString(filter)) {
            if (minimatch(k, filter)) {
              this["delete"](k);
              result++;
            }
          } else {
            this["delete"](k);
            result++;
          }
        }
      }
      return result;
    };

    return MimeTypes;

  })();

}).call(this);
