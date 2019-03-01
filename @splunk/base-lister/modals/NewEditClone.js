module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/TestSupport");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/format");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Button");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@splunk/splunk-utils/fetch");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Message");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Modal");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var Symbol = __webpack_require__(28),
    getRawTag = __webpack_require__(44),
    objectToString = __webpack_require__(45);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;



/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;



/***/ }),
/* 20 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;



/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var freeGlobal = __webpack_require__(29);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var isFunction = __webpack_require__(36),
    isLength = __webpack_require__(31);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;



/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var root = __webpack_require__(22);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/
var define = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;



/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseGetTag = __webpack_require__(18),
    isObject = __webpack_require__(19);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseTimes = __webpack_require__(47),
    isArguments = __webpack_require__(48),
    isArray = __webpack_require__(38),
    isBuffer = __webpack_require__(50),
    isIndex = __webpack_require__(39),
    isTypedArray = __webpack_require__(52);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;



/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;



/***/ }),
/* 39 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;



/***/ }),
/* 40 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;



/***/ }),
/* 41 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;



/***/ }),
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var Symbol = __webpack_require__(28);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;



/***/ }),
/* 45 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var arrayLikeKeys = __webpack_require__(37),
    baseKeys = __webpack_require__(56),
    isArrayLike = __webpack_require__(23);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;



/***/ }),
/* 47 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseIsArguments = __webpack_require__(49),
    isObjectLike = __webpack_require__(20);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseGetTag = __webpack_require__(18),
    isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*** IMPORTS FROM imports-loader ***/
var define = false;

var root = __webpack_require__(22),
    stubFalse = __webpack_require__(51);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseIsTypedArray = __webpack_require__(53),
    baseUnary = __webpack_require__(54),
    nodeUtil = __webpack_require__(55);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseGetTag = __webpack_require__(18),
    isLength = __webpack_require__(31),
    isObjectLike = __webpack_require__(20);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;



/***/ }),
/* 54 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*** IMPORTS FROM imports-loader ***/
var define = false;

var freeGlobal = __webpack_require__(29);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var isPrototype = __webpack_require__(40),
    nativeKeys = __webpack_require__(57);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var overArg = __webpack_require__(58);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;



/***/ }),
/* 58 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;



/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Text");

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var assignValue = __webpack_require__(78),
    baseAssignValue = __webpack_require__(65);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var defineProperty = __webpack_require__(66);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var getNative = __webpack_require__(79);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;



/***/ }),
/* 67 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;



/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_create__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_extend__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_ui_utils_format__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_ui_utils_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_ui_utils_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_ControlGroup__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_ControlGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_ControlGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Message__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Modal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Text__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_TestSupport__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/modals/NewEditClone.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-case-declarations */

















// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

var ModalNewEditClone = function (_Component) {
    _inherits(ModalNewEditClone, _Component);

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */
    function ModalNewEditClone(props, context) {
        _classCallCheck(this, ModalNewEditClone);

        var _this = _possibleConstructorReturn(this, (ModalNewEditClone.__proto__ || Object.getPrototypeOf(ModalNewEditClone)).call(this, props, context));

        _this.handleSuccess = function () {
            _this.props.setShouldRefreshOnClose();
            _this.handleClose();
        };

        _this.handleSave = function () {
            _this.setState({
                isWorking: true
            });
            var editObjectURL = _this.props.objectsCollectionPath + '/' + _this.props.object[_this.props.idAttribute];
            var createObjectURL = '' + _this.props.objectsCollectionPath;

            switch (_this.props.action) {
                case 'new':
                    var newObject = __WEBPACK_IMPORTED_MODULE_3_lodash_extend___default()(_this.props.object, {
                        description: _this.state.description
                    });
                    newObject[_this.props.nameAttribute] = _this.state.title;

                    var createFetchInit = __WEBPACK_IMPORTED_MODULE_2_lodash_create___default()(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["defaultFetchInit"]);
                    createFetchInit.method = 'POST';
                    createFetchInit.headers['Content-Type'] = 'application/json';
                    createFetchInit.body = JSON.stringify(newObject);

                    fetch('' + createObjectURL, createFetchInit).then(Object(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["handleResponse"])(200)).then(function () {
                        _this.handleSuccess();
                    }).catch(function (response) {
                        _this.handleError(Object(__WEBPACK_IMPORTED_MODULE_5__splunk_ui_utils_format__["sprintf"])(gettext('Could not create %s.'), _this.props.objectNameSingular.toLowerCase()), response);
                    });
                    break;
                case 'clone':
                    var cloneObject = __WEBPACK_IMPORTED_MODULE_3_lodash_extend___default()(_this.props.object, {
                        description: _this.state.description
                    });
                    cloneObject[_this.props.nameAttribute] = _this.state.title;
                    delete cloneObject[_this.props.idAttribute];

                    var cloneFetchInit = __WEBPACK_IMPORTED_MODULE_2_lodash_create___default()(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["defaultFetchInit"]);
                    cloneFetchInit.method = 'POST';
                    cloneFetchInit.headers['Content-Type'] = 'application/json';
                    cloneFetchInit.body = JSON.stringify(cloneObject);

                    fetch('' + createObjectURL, cloneFetchInit).then(Object(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["handleResponse"])(200)).then(function () {
                        _this.handleSuccess();
                    }).catch(function (response) {
                        _this.handleError(Object(__WEBPACK_IMPORTED_MODULE_5__splunk_ui_utils_format__["sprintf"])(gettext('Could not clone %s.'), _this.props.objectNameSingular.toLowerCase()), response);
                    });
                    break;
                default:
                    var editObject = __WEBPACK_IMPORTED_MODULE_3_lodash_extend___default()(_this.props.object, {
                        description: _this.state.description
                    });
                    editObject[_this.props.nameAttribute] = _this.state.title;

                    var editFetchInit = __WEBPACK_IMPORTED_MODULE_2_lodash_create___default()(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["defaultFetchInit"]);
                    editFetchInit.method = 'PUT';
                    editFetchInit.headers['Content-Type'] = 'application/json';
                    editFetchInit.body = JSON.stringify(editObject);

                    fetch('' + editObjectURL, editFetchInit).then(Object(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["handleResponse"])(200)).then(function () {
                        _this.handleSuccess();
                    }).catch(function (response) {
                        _this.handleError(Object(__WEBPACK_IMPORTED_MODULE_5__splunk_ui_utils_format__["sprintf"])(gettext('Could not edit title or description of %s.'), _this.props.objectNameSingular.toLowerCase()), response);
                    });
                    break;
            }
        };

        _this.handleError = function (message, response) {
            if (response && response.text && typeof response.text === 'function') {
                response.text().then(function (body) {
                    var enrichedError = response;
                    enrichedError.responseText = body;
                    _this.setState({
                        isWorking: false,
                        errorMessage: _this.props.errorFormatter(message, enrichedError)
                    });
                });
            } else {
                _this.setState({
                    isWorking: false,
                    errorMessage: message
                });
            }
        };

        _this.handleClose = function () {
            _this.setState({
                isWorking: false,
                errorMessage: ''
            });
            _this.props.handleRequestClose();
        };

        _this.handleTitleTextChange = function (e, _ref) {
            var value = _ref.value;

            _this.setState({
                title: value
            });
        };

        _this.handleDescriptionTextChange = function (e, _ref2) {
            var value = _ref2.value;

            _this.setState({
                description: value
            });
        };

        _this.state = {
            /** Boolean indicating whether the page is working (saving, deleting, ...). Used to disable button. */
            isWorking: false,
            /** String containing the error message, if any */
            errorMessage: '',
            title: _this.props.object[_this.props.nameAttribute] || '',
            description: _this.props.object.description || ''
        };
        return _this;
    }

    _createClass(ModalNewEditClone, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.setState({
                isWorking: false,
                errorMessage: '',
                title: this.props.object[this.props.nameAttribute],
                description: this.props.object.description
            });
        }
    }, {
        key: 'getModalTitle',
        value: function getModalTitle() {
            switch (this.props.action) {
                case 'new':
                    return gettext('New');
                case 'edit':
                    return gettext('Edit');
                case 'edit_title_desc':
                    return gettext('Edit Title Or Description');
                case 'clone':
                    return gettext('Clone');
                default:
                    return null;
            }
        }
    }, {
        key: 'getButtonLabel',
        value: function getButtonLabel() {
            if (this.state.isWorking) {
                switch (this.props.action) {
                    case 'new':
                        return gettext('Creating...');
                    case 'clone':
                        return gettext('Cloning...');
                    default:
                        return gettext('Saving...');
                }
            } else {
                switch (this.props.action) {
                    case 'new':
                        return gettext('Create');
                    case 'clone':
                        return gettext('Clone');
                    default:
                        return gettext('Save');
                }
            }
        }

        /**
         * Error handler
         * @param {String} message error message.
         * @param {String} response request response containing some more useful information.
         */

    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Modal___default.a,
                _extends({
                    onRequestClose: this.handleClose,
                    open: this.props.open,
                    style: { width: '500px' }
                }, Object(__WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 254
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Modal___default.a.Header, {
                    title: Object(__WEBPACK_IMPORTED_MODULE_5__splunk_ui_utils_format__["sprintf"])('%s %s', this.getModalTitle(), this.props.objectNameSingular),
                    onRequestClose: this.handleClose,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 260
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Modal___default.a.Body,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 264
                        },
                        __self: this
                    },
                    this.state.errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Message___default.a,
                        { type: 'error', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 266
                            },
                            __self: this
                        },
                        this.state.errorMessage
                    ),
                    this.props.warningMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Message___default.a,
                        { type: 'warning', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 269
                            },
                            __self: this
                        },
                        this.props.warningMessage
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_ControlGroup___default.a,
                        { label: gettext('Title'), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 271
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Text___default.a, {
                            'data-test-name': 'title',
                            canClear: true,
                            value: this.state.title,
                            onChange: this.handleTitleTextChange,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 272
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_ControlGroup___default.a,
                        { label: gettext('Description'), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 279
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Text___default.a, {
                            'data-test-name': 'description',
                            canClear: true,
                            placeholder: 'optional',
                            value: this.state.description,
                            onChange: this.handleDescriptionTextChange,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 280
                            },
                            __self: this
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Modal___default.a.Footer,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 289
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Button___default.a, {
                        'data-test-name': 'cancel-btn',
                        onClick: this.handleClose,
                        label: gettext('Cancel'),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 290
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Button___default.a, {
                        appearance: 'primary',
                        'data-test-name': 'save-btn',
                        disabled: this.state.isWorking,
                        onClick: this.handleSave,
                        label: this.getButtonLabel(),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 295
                        },
                        __self: this
                    })
                )
            );
        }
    }]);

    return ModalNewEditClone;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ModalNewEditClone.propTypes = {
    /**
     * 'action' parameter. Can be one of the following:
     *  - 'edit'              triggered from columns.Actions
     *  - 'edit_title_desc'   triggered from columns.Actions
     *  - 'clone'             triggered from columns.Actions
     *  - 'new'               triggered from table.Header
     */
    action: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['new', 'edit', 'edit_title_desc', 'clone']).isRequired,
    open: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    object: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    objects: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired, // eslint-disable-line react/no-unused-prop-types
    objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectNameSingular: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    idAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    nameAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    errorFormatter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleRequestClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    setShouldRefreshOnClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    /** Warning message to display at the top of the modal */
    warningMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
ModalNewEditClone.defaultProps = {
    warningMessage: ''
};


/* harmony default export */ __webpack_exports__["default"] = (ModalNewEditClone);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/modals/NewEditClone.jsx"))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseAssign = __webpack_require__(77),
    baseCreate = __webpack_require__(85);

/**
 * Creates an object that inherits from the `prototype` object. If a
 * `properties` object is given, its own enumerable string keyed properties
 * are assigned to the created object.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Object
 * @param {Object} prototype The object to inherit from.
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new object.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * function Circle() {
 *   Shape.call(this);
 * }
 *
 * Circle.prototype = _.create(Shape.prototype, {
 *   'constructor': Circle
 * });
 *
 * var circle = new Circle;
 * circle instanceof Circle;
 * // => true
 *
 * circle instanceof Shape;
 * // => true
 */
function create(prototype, properties) {
  var result = baseCreate(prototype);
  return properties == null ? result : baseAssign(result, properties);
}

module.exports = create;



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var copyObject = __webpack_require__(64),
    keys = __webpack_require__(46);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseAssignValue = __webpack_require__(65),
    eq = __webpack_require__(67);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseIsNative = __webpack_require__(80),
    getValue = __webpack_require__(84);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var isFunction = __webpack_require__(36),
    isMasked = __webpack_require__(81),
    isObject = __webpack_require__(19),
    toSource = __webpack_require__(83);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var coreJsData = __webpack_require__(82);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var root = __webpack_require__(22);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;



/***/ }),
/* 83 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;



/***/ }),
/* 84 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var isObject = __webpack_require__(19);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

module.exports = __webpack_require__(87);



/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var copyObject = __webpack_require__(64),
    createAssigner = __webpack_require__(88),
    keysIn = __webpack_require__(97);

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseRest = __webpack_require__(89),
    isIterateeCall = __webpack_require__(96);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var identity = __webpack_require__(41),
    overRest = __webpack_require__(90),
    setToString = __webpack_require__(92);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var apply = __webpack_require__(91);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;



/***/ }),
/* 91 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;



/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var baseSetToString = __webpack_require__(93),
    shortOut = __webpack_require__(95);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var constant = __webpack_require__(94),
    defineProperty = __webpack_require__(66),
    identity = __webpack_require__(41);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;



/***/ }),
/* 94 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;



/***/ }),
/* 95 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;



/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var eq = __webpack_require__(67),
    isArrayLike = __webpack_require__(23),
    isIndex = __webpack_require__(39),
    isObject = __webpack_require__(19);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var arrayLikeKeys = __webpack_require__(37),
    baseKeysIn = __webpack_require__(98),
    isArrayLike = __webpack_require__(23);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;



/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

var isObject = __webpack_require__(19),
    isPrototype = __webpack_require__(40),
    nativeKeysIn = __webpack_require__(99);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;



/***/ }),
/* 99 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;



/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/ControlGroup");

/***/ })
/******/ ]);