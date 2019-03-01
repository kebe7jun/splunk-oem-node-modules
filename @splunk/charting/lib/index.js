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
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/lang");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/parsing");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/math");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

exports.setTheme = setTheme;
exports.getThemeProperty = getThemeProperty;
exports.getCurrentTheme = getCurrentTheme;

var _constants = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Themes = {
    default: (0, _extends3.default)({}, _constants.COLORS, {
        // legends
        LEGEND_OVERFLOW_ARROW_COLOR_ACTIVE: '#003399', // highcharts default
        LEGEND_OVERFLOW_ARROW_COLOR_INACTIVE: '#cccccc', // highcharts default
        LEGEND_OVERFLOW_FONT_COLOR: _constants.COLORS.DEFAULT_FONT_COLOR,
        // tooltips
        TOOLTIP_BACKGROUND_COLOR: '#000000',
        TOOLTIP_FONT_COLOR: '#ffffff',
        TOOLTIP_FONT_COLOR_SOFT: '#cccccc',
        TOOLTIP_BORDER_COLOR: '#ffffff'
    }),
    dark: (0, _extends3.default)({}, _constants.COLORS_DARK_MODE, {
        // legends
        LEGEND_OVERFLOW_ARROW_COLOR_ACTIVE: _constants.COLORS_DARK_MODE.DEFAULT_FONT_COLOR,
        LEGEND_OVERFLOW_ARROW_COLOR_INACTIVE: _constants.COLORS_DARK_MODE.DEFAULT_LINE_COLOR_SOFTER,
        LEGEND_OVERFLOW_FONT_COLOR: _constants.COLORS_DARK_MODE.DEFAULT_FONT_COLOR,
        // tooltips
        TOOLTIP_BACKGROUND_COLOR: '#ffffff',
        TOOLTIP_FONT_COLOR: '#171d21', // $gray20
        TOOLTIP_FONT_COLOR_SOFT: '#5c6773', // $gray45
        TOOLTIP_BORDER_COLOR: 'none'
    })
};

var currentTheme = Themes.default;
var currentThemeKey = 'default';

function setTheme(themeKey) {
    if (!Themes[themeKey]) {
        console.warn('Theme "' + themeKey + '" not available - falling back to default'); // eslint-disable-line no-console
        currentThemeKey = 'default';
    } else {
        currentThemeKey = themeKey;
    }
    currentTheme = Themes[currentThemeKey];
}

function getThemeProperty(propertyName) {
    if (!currentTheme[propertyName]) {
        console.log('Theme property "' + propertyName + '" not available in ' + currentThemeKey + ' theme'); // eslint-disable-line no-console
        return undefined;
    }
    return currentTheme[propertyName];
}

function getCurrentTheme() {
    return currentThemeKey;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(70);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/color");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@splunk/highcharts");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    on: function on(eventType, callback) {
        (0, _jquery2.default)(this).on(eventType, callback);
    },
    off: function off(eventType, callback) {
        (0, _jquery2.default)(this).off(eventType, callback);
    },
    trigger: function trigger(eventType, extraParams) {
        (0, _jquery2.default)(this).trigger(eventType, extraParams);
    }
};
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/Formatter");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(61)('wks');
var uid = __webpack_require__(62);
var Symbol = __webpack_require__(13).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/i18n");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports) {

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
/* 15 */
/***/ (function(module, exports) {

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
/* 16 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var createDesc = __webpack_require__(33);
module.exports = __webpack_require__(20) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(110);
var toPrimitive = __webpack_require__(111);
var dP = Object.defineProperty;

exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(32)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FONT_FAMILY = exports.FONT_FAMILY = '"Splunk Platform Sans", "Proxima Nova", "Lucinda Grande", Roboto, ' + 'Droid, "Helvetica Neue", Helvetica, Arial, sans-serif';

var FONT_SIZE = exports.FONT_SIZE = '12px';

var COLORS = exports.COLORS = {
    DEFAULT_BACKGROUND_COLOR: '#ffffff', // $white
    DEFAULT_FOREGROUND_COLOR: '#000000', // $black
    DEFAULT_FONT_COLOR: '#3c444d', // $gray30
    DEFAULT_LINE_COLOR: '#000000', // $black
    DEFAULT_LINE_COLOR_SOFT: '#c3cbd4', // $gray80
    DEFAULT_LINE_COLOR_SOFTER: '#e1e6eb', // $gray92

    SEMANTIC_SUCCESS: '#53a051',
    SEMANTIC_WARNING: '#f8be34',
    SEMANTIC_ERROR: '#dc4e41'
};

var COLORS_DARK_MODE = exports.COLORS_DARK_MODE = {
    DEFAULT_BACKGROUND_COLOR: '#212527', // $gray21
    DEFAULT_FOREGROUND_COLOR: '#ffffff', // $white
    DEFAULT_FONT_COLOR: '#ffffff', // $white
    DEFAULT_LINE_COLOR: '#000000', // $black
    DEFAULT_LINE_COLOR_SOFT: '#D9DDE1', // @TODO: check w/ Mei
    DEFAULT_LINE_COLOR_SOFTER: '#324147', // @TODO: check w/ Mei

    SEMANTIC_SUCCESS: '#53a051',
    SEMANTIC_WARNING: '#f8be34',
    SEMANTIC_ERROR: '#dc4e41'
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(69),
    getRawTag = __webpack_require__(132),
    objectToString = __webpack_require__(133);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(39),
    isObject = __webpack_require__(14);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _moment = __webpack_require__(87);

var _moment2 = _interopRequireDefault(_moment);

var _bowser = __webpack_require__(46);

var _bowser2 = _interopRequireDefault(_bowser);

var _highcharts = __webpack_require__(8);

var _highcharts2 = _interopRequireDefault(_highcharts);

var _lang = __webpack_require__(2);

var _testing = __webpack_require__(89);

var testingUtils = _interopRequireWildcard(_testing);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _color = __webpack_require__(7);

var colorUtils = _interopRequireWildcard(_color);

var _time = __webpack_require__(47);

var _time2 = _interopRequireDefault(_time);

var _async = __webpack_require__(188);

var _field = __webpack_require__(88);

var fieldUtils = _interopRequireWildcard(_field);

var _logger = __webpack_require__(64);

var logger = _interopRequireWildcard(_logger);

var _Visualization = __webpack_require__(90);

var _Visualization2 = _interopRequireDefault(_Visualization);

var _ColorPalette = __webpack_require__(45);

var _ColorPalette2 = _interopRequireDefault(_ColorPalette);

var _TimeAxis = __webpack_require__(189);

var _TimeAxis2 = _interopRequireDefault(_TimeAxis);

var _CategoryAxis = __webpack_require__(190);

var _CategoryAxis2 = _interopRequireDefault(_CategoryAxis);

var _NumericAxis = __webpack_require__(49);

var _NumericAxis2 = _interopRequireDefault(_NumericAxis);

var _Legend = __webpack_require__(192);

var _Legend2 = _interopRequireDefault(_Legend);

var _Tooltip = __webpack_require__(193);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _SelectionWindow = __webpack_require__(194);

var _SelectionWindow2 = _interopRequireDefault(_SelectionWindow);

var _PanButtons = __webpack_require__(198);

var _PanButtons2 = _interopRequireDefault(_PanButtons);

var _ZoomOutButton = __webpack_require__(201);

var _ZoomOutButton2 = _interopRequireDefault(_ZoomOutButton);

var _HoverEventThrottler = __webpack_require__(28);

var _HoverEventThrottler2 = _interopRequireDefault(_HoverEventThrottler);

var _CartesianDataLabels = __webpack_require__(202);

var _CartesianDataLabels2 = _interopRequireDefault(_CartesianDataLabels);

var _series_factory = __webpack_require__(203);

var _series_factory2 = _interopRequireDefault(_series_factory);

var _constants = __webpack_require__(22);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MULTISERIES_MODE = 'seriesCompare';

function Chart(container, properties) {
    _Visualization2.default.call(this, container, properties);
}
(0, _lang.inherit)(Chart, _Visualization2.default);

_jquery2.default.extend(Chart.prototype, {
    HOVER_DELAY: 160,
    EXPORT_WIDTH: 600,
    EXPORT_HEIGHT: 400,
    FALLBACK_HEIGHT: 250,
    FALLBACK_WIDTH: 600,

    PROGRESSIVE_DRAW_THRESHOLD: 1000,

    ANNOTATION_COLORS: ['#E19747', '#5F7395', '#3E9887', '#784772', '#A24940'].map(colorUtils.hexFromColor),

    hasLegend: true,
    hasTooltip: true,
    hasXAxis: true,
    hasYAxis: true,
    legendMode: 'standard',

    requiresExternalColors: true,
    externalPaletteMapping: {},
    externalPaletteSize: 0,

    prepare: function prepare(dataSet, properties) {
        this.benchmark('Prepare Started');
        var wasEmpty = this.isEmpty();
        var hadTimeXAxis = this.hasTimeXAxis();
        _Visualization2.default.prototype.prepare.call(this, dataSet, properties);
        if (this.showLabels === 'all' || this.showLabels === 'minmax') {
            this.initializeDataLabels();
        }
        this.initializeFields();
        this.isiOS = !!_bowser2.default.ios;
        var isEmpty = this.isEmpty();
        var hasTimeXAxis = this.hasTimeXAxis();
        if (isEmpty !== wasEmpty || hadTimeXAxis !== hasTimeXAxis) {
            this._isDirty = true;
        }
        if (this.shouldUpdateInPlace()) {
            this.updateSeriesProperties();
            this.updateAxisProperties();
            if (!isEmpty) {
                this.setAllSeriesData();
            }
        } else {
            if (!isEmpty) {
                this.initializeColorPalette();
            }
            this.initializeSeriesList();
            // Determine orientation based on the chart type, not the series types (SPL-86199).
            this.axesAreInverted = this.type === 'bar';
            if (this.hasXAxis) {
                this.initializeXAxisList();
            }
            if (this.hasYAxis) {
                this.initializeYAxisList();
            }
            if (isEmpty) {
                if (this.legend) {
                    this.legend.destroy();
                    this.legend = null;
                }
                if (this.tooltip) {
                    this.tooltip.destroy();
                    this.tooltip = null;
                }
            } else {
                if (this.hasLegend) {
                    this.initializeLegend();
                }
                if (this.hasTooltip) {
                    this.initializeTooltip();
                }
                this.setAllSeriesData();
                this.bindSeriesEvents();
            }
        }
    },
    initializeDataLabels: function initializeDataLabels() {
        this.dataLabels = new _CartesianDataLabels2.default({
            showLabels: this.showLabels,
            splitSeries: this.splitSeries
        });
    },
    getFieldList: function getFieldList() {
        return (0, _underscore2.default)(this.seriesList).chain().invoke('getFieldList').flatten(true).compact().value();
    },
    setExternalColorPalette: function setExternalColorPalette(fieldIndexMap, paletteTotalSize) {
        this.externalPaletteMapping = _jquery2.default.extend({}, fieldIndexMap);
        this.externalPaletteSize = paletteTotalSize;
    },
    handleDraw: function handleDraw(callback) {
        logger.debug('drawing a chart with dimensions:', {
            width: this.width,
            height: this.height
        });
        logger.debug('drawing a chart with properties:', this.properties);
        logger.debug('drawing a chart with data:', this.dataSet.toJSON());
        this.benchmark('Draw Started');
        this.applyColorPalette();
        // if there is already a draw in progress, cancel it
        this.cancelPendingDraw();

        if (this.shouldUpdateInPlace()) {
            this.redrawInPlace(callback);
            return;
        }

        this.hcConfig = this.getConfig();
        logger.debug('config object to be sent to highcharts:', this.hcConfig);
        if (this.hcChart) {
            this.destroy();
            this.bindSeriesEvents();
            if (this.legend) {
                this.bindLegendEvents();
            }
        }
        if (this.shouldProgressiveDraw()) {
            this.hcConfig.firstRenderOverride = (0, _underscore2.default)(this.firstRenderOverride).bind(this);
            this.hcConfig.renderOverride = (0, _underscore2.default)(this.renderOverride).bind(this);
        }
        var that = this;
        // eslint-disable-next-line no-new
        new _highcharts2.default.Chart(this.hcConfig, function (chart) {
            that.hcChart = chart;
            if (that.testMode) {
                testingUtils.initializeTestingMetaData(that, that.xFields, that.getClassName());
                testingUtils.createGlobalReference(that, chart);
            }
            that.onChartLoad(chart);
            that.onChartLoadOrRedraw(chart);
            if (that.hasTooltip && !that.isEmpty()) {
                that.enableTooltip(chart);
            }
            that.cacheDrawnDimensions();
            that.benchmark('Draw Finished');
            callback(that, that.benchmarks);
            // DEBUGGING
            // window.chart = that
        });
    },
    redrawInPlace: function redrawInPlace(callback) {
        var _this = this;

        logger.debug('in place redraw!');
        if (!this.hcChart) {
            throw new Error('Cannot call redrawInPlace if chart does not already exist');
        }

        // redraw all series in the list
        (0, _underscore2.default)(this.seriesList).invoke('redraw', false);
        var existingChartSeries = this.hcChart.series;
        var incomingSeriesConfigs = this.getSeriesConfigList();

        // if there are more existing series than incoming, remove the extras
        if (existingChartSeries.length > incomingSeriesConfigs.length) {
            (0, _underscore2.default)(existingChartSeries.slice(incomingSeriesConfigs.length)).invoke('remove', false);
        } else if (existingChartSeries.length < incomingSeriesConfigs.length) {
            // if there are more incoming series than existing, add the new ones
            (0, _underscore2.default)(incomingSeriesConfigs.slice(existingChartSeries.length)).each(function (seriesConfig) {
                _this.hcChart.addSeries(seriesConfig, false, false);
            });
        }

        var preUpdateExtremes = void 0;
        var postUpdateExtremes = void 0;
        var xAxis = this.xAxisList[0];
        var axisWasZoomed = xAxis.isZoomed;

        if (axisWasZoomed) {
            preUpdateExtremes = this.hcChart.xAxis[0].getExtremes();
            preUpdateExtremes.max -= xAxis.hasTickmarksBetween() ? 0 : 1;
        } else if (this.selectionWindow) {
            preUpdateExtremes = this.selectionWindow.getExtremes();
            preUpdateExtremes.min += xAxis.hasTickmarksBetween() ? 1 : 0;
        }
        if (preUpdateExtremes) {
            postUpdateExtremes = this.calculatePostUpdateExtremes(preUpdateExtremes);
        }
        // redraw the axes
        (0, _underscore2.default)(this.xAxisList).invoke('redraw', false);
        (0, _underscore2.default)(this.yAxisList).invoke('redraw', false);
        if (axisWasZoomed) {
            if (postUpdateExtremes.min === null || postUpdateExtremes.max === null) {
                this.hcChart.xAxis[0].zoom();
            } else {
                postUpdateExtremes.max += xAxis.hasTickmarksBetween() ? 0 : 1;
                this.hcChart.xAxis[0].zoom(postUpdateExtremes.min, postUpdateExtremes.max);
            }
        } else if (this.selectionWindow) {
            if (postUpdateExtremes.max === null) {
                this.selectionWindow.destroy();
                this.selectionWindow = null;
            } else {
                postUpdateExtremes.min = (postUpdateExtremes.min || 0) - (xAxis.hasTickmarksBetween() ? 1 : 0);
                this.selectionWindow.setExtremes(postUpdateExtremes);
            }
        }

        // force Highcharts to redraw
        this.hcChart.redraw();
        this.benchmark('Series Redraw Finished');
        callback(this, this.benchmarks);
    },
    cancelPendingDraw: function cancelPendingDraw() {
        if (this.pendingDraw && this.pendingDraw.state() === 'pending') {
            this.pendingDraw.cancel();
            // TODO [sff] do we need to do anything with the deferred that draw() returned? currently it just stays pending
        }
    },
    setSize: function setSize(width, height) {
        if (!this.hcChart) {
            return;
        }
        var xAxis = this.hcChart.xAxis[0];
        // SPL-80149: userMin and userMax should always be set if chart is zoomed
        if (xAxis && this.xAxisList[0].isZoomed) {
            xAxis.userMin = xAxis.userMin || xAxis.oldUserMin;
            xAxis.userMax = xAxis.userMax || xAxis.oldUserMax;
        }
        this.hcChart.setSize(width, height, false);
        this.cacheDrawnDimensions();
    },
    destroy: function destroy() {
        this.cancelPendingDraw();
        if (this.hcChart) {
            this.onChartDestroy();
            // SPL-85851, for some reason the default Highcharts destroy routine does not remove listeners added
            // by the Pointer object, so we explicitly remove them here.
            if (this.hcChart.pointer) {
                this.hcChart.pointer.reset();
            }
            this.hcChart.destroy();
            this.hcChart = null;
        }
    },
    getSVG: function getSVG() {
        var chart = this.hcChart;
        if (this.hcConfig.legend.enabled) {
            if (chart.legend.nav) {
                chart.legend.nav.destroy();
            }
        }

        (0, _jquery2.default)(chart.series).each(function (i, loopSeries) {
            // If the area has been set to zero opacity, just remove the element entirely (SPL-80429 and SPL-84442).
            if (loopSeries.area && colorUtils.getComputedOpacity(loopSeries.area) === 0) {
                loopSeries.area.destroy();
                delete loopSeries.area;
            }
        });
        var $svg = (0, _jquery2.default)('.highcharts-container').find('svg');
        $svg.siblings().remove();
        $svg.find('.highcharts-tracker').remove();

        // SPL-65745, remove the clip path that is being applied to the legend, or it will cause labels to be hidden
        $svg.find('.highcharts-legend g[clip-path]').each(function removeClipPath() {
            (0, _jquery2.default)(this).removeAttr('clip-path');
        });

        return $svg.parent().html();
    },


    // ///////////////////////////////////////////////////////////////////////////////////////
    // [end of public interface]

    processProperties: function processProperties() {
        var _this2 = this;

        _Visualization2.default.prototype.processProperties.call(this);

        // handle enabling chart/legend clicks, there are an annoying number of different ways to specify this
        // the "drilldown" property trumps all others
        // eslint-disable-next-line no-prototype-builtins
        if (this.properties.hasOwnProperty('drilldown')) {
            // eslint-disable-next-line no-multi-assign
            this.chartClickEnabled = this.legendClickEnabled = this.properties['drilldown'] === 'all';
        } else {
            // eslint-disable-next-line no-prototype-builtins
            if (this.properties.hasOwnProperty('chart.clickEnabled')) {
                this.chartClickEnabled = parsingUtils.normalizeBoolean(this.properties['chart.clickEnabled']);
            } else {
                this.chartClickEnabled = parsingUtils.normalizeBoolean(this.properties['enableChartClick']);
            }
            // eslint-disable-next-line no-prototype-builtins
            if (this.properties.hasOwnProperty('chart.legend.clickEnabled')) {
                this.legendClickEnabled = parsingUtils.normalizeBoolean(this.properties['chart.legend.clickEnabled']);
            } else {
                this.legendClickEnabled = parsingUtils.normalizeBoolean(this.properties['enableLegendClick']);
            }
        }

        var metricsChartTypes = ['line', 'area'];
        this.legendMode = (0, _underscore2.default)(metricsChartTypes).indexOf(this.type) === -1 ? 'standard' : _jquery2.default.trim(this.properties['legend.mode']);

        if (this.legendMode !== MULTISERIES_MODE && this.properties['legend.placement'] === 'none') {
            this.hasLegend = false;
        }

        if (this.hasXAxis || this.hasYAxis) {
            this.axisColorScheme = {
                'axis.foregroundColorSoft': this.axisColorSoft,
                'axis.foregroundColorSofter': this.axisColorSofter,
                'axis.fontColor': this.fontColor
            };
        }
        if (
        // eslint-disable-next-line no-prototype-builtins
        this.properties.hasOwnProperty('legend.masterLegend') && (!this.properties['legend.masterLegend'] || _jquery2.default.trim(this.properties['legend.masterLegend']) === 'null')) {
            this.requiresExternalColors = false;
        }
        this.stackMode = this.properties['chart.stackMode'] || 'default';
        this.legendLabels = parsingUtils.stringToArray(this.properties['legend.labels'] || '[]');
        this.showHideMode = this.properties['data.fieldListMode'] === 'show_hide';
        this.fieldHideList = _underscore2.default.union(this.properties['fieldHideList'] || [], parsingUtils.stringToArray(this.properties['data.fieldHideList']) || []);
        this.fieldShowList = parsingUtils.stringToArray(this.properties['data.fieldShowList']) || [];

        var seriesColorsSetting = this.properties['chart.seriesColors'] || this.properties['seriesColors'];
        this.seriesColors = parsingUtils.stringToHexArray(seriesColorsSetting) || null;
        var fieldColorsSetting = this.properties['chart.fieldColors'] || this.properties['fieldColors'];
        this.internalFieldColors = parsingUtils.stringToHexObject(fieldColorsSetting || '{}');

        var annotationCategoryColorsSettings = this.properties['annotation.categoryColors'];
        this.annotationCategoryColors = parsingUtils.stringToHexObject(annotationCategoryColorsSettings || '{}');

        this.overlayFields = parsingUtils.stringToFieldList(this.properties['chart.overlayFields']);

        this.seriesTypeMapping = {};
        (0, _underscore2.default)(this.overlayFields).each(function (field) {
            _this2.seriesTypeMapping[field] = 'line';
        });

        this.yAxisMapping = {};
        var secondYAxis = parsingUtils.normalizeBoolean(this.properties['axisY2.enabled']);
        if (secondYAxis) {
            var secondYAxisFields = this.properties['axisY2.fields'] ? parsingUtils.stringToFieldList(this.properties['axisY2.fields']) : this.overlayFields;

            (0, _underscore2.default)(secondYAxisFields).each(function (field) {
                _this2.yAxisMapping[field] = 1;
            });
        }
        this.enableAnimation = parsingUtils.normalizeBoolean(this.properties['enableAnimation'], false);

        var zoomTypes = ['x', 'y', 'xy', 'off'];
        if ((0, _underscore2.default)(zoomTypes).indexOf(this.properties['zoomType']) !== -1) {
            this.zoomType = this.properties['zoomType'];
        }
        this.showLabels = this.properties['chart.showDataLabels'];
        if (typeof this.showLabels === 'undefined') {
            this.showLabels = 'none';
        }

        this.splitSeries = parsingUtils.normalizeBoolean(this.properties['layout.splitSeries'], false);
        this.splitSeriesAllowIndependentYRanges = parsingUtils.normalizeBoolean(this.properties['layout.splitSeries.allowIndependentYRanges'], false);
    },


    // prettier-ignore
    firstRenderOverride: function firstRenderOverride(chart) {
        // make this reference available here for testing
        this.hcChart = chart;

        var Pointer = _highcharts2.default.Pointer,
            fireEvent = _highcharts2.default.fireEvent,
            each = _highcharts2.default.each;
        var options = chart.options;

        /* eslint-disable */
        // BEGIN: copied from Highcharts source Chart#firstRender

        // Check whether the chart is ready to render

        if (!chart.isReadyToRender()) {
            return;
        }

        // Create the container
        chart.getContainer();

        // Run an early event after the container and renderer are established
        fireEvent(chart, 'init');

        chart.resetMargins();
        chart.setChartSize();

        // Set the common chart properties (mainly invert) from the given series
        chart.propFromSeries();

        // get axes
        chart.getAxes();

        // Initialize the series
        each(options.series || [], function (serieOptions) {
            chart.initSeries(serieOptions);
        });

        chart.linkSeries();

        // Run an event after axes and series are initialized, but before render. At this stage,
        // the series data is indexed and cached in the xData and yData arrays, so we can access
        // those before rendering. Used in Highstock.
        fireEvent(chart, 'beforeRender');

        // depends on inverted and on margins being set
        if (Pointer) {
            chart.pointer = new Pointer(chart, options);
        }

        // MODIFIED: treat render() an asynchronous method
        chart.render(function () {

            // RESUME: remainder of Highcharts Chart#firstRender source code

            // Fire the load event if there are no external images
            if (!chart.renderer.imgCount && chart.onload) {
                chart.onload();
            }

            // If the chart was rendered outside the top container, put it back in (#3679)
            chart.temporaryDisplay(true);

            // END: Highcharts Chart#firstRender source code
        });
        /* eslint-enable */
    },


    // prettier-ignore
    renderOverride: function renderOverride(chart, callback) {
        var each = _highcharts2.default.each;
        var axes = chart.axes,
            renderer = chart.renderer,
            options = chart.options;

        /* eslint-disable */
        // BEGIN: copied from Highcharts source Chart#render

        var tempWidth, tempHeight, redoHorizontal, redoVertical;

        // Title
        chart.setTitle();

        // Legend
        chart.legend = new _highcharts2.default.Legend(chart, options.legend);

        // Get stacks
        if (chart.getStacks) {
            chart.getStacks();
        }

        // Get chart margins
        chart.getMargins(true);
        chart.setChartSize();

        // Record preliminary dimensions for later comparison
        tempWidth = chart.plotWidth;
        tempHeight = chart.plotHeight = chart.plotHeight - 21; // 21 is the most common correction for X axis labels

        // Get margins by pre-rendering axes
        each(axes, function (axis) {
            axis.setScale();
        });
        chart.getAxisMargins();

        // If the plot area size has changed significantly, calculate tick positions again
        redoHorizontal = tempWidth / chart.plotWidth > 1.1;
        redoVertical = tempHeight / chart.plotHeight > 1.05; // Height is more sensitive

        if (redoHorizontal || redoVertical) {

            each(axes, function (axis) {
                if (axis.horiz && redoHorizontal || !axis.horiz && redoVertical) {
                    axis.setTickInterval(true); // update to reflect the new margins
                }
            });
            chart.getMargins(); // second pass to check for new labels
        }

        // Draw the borders and backgrounds
        chart.drawChartBox();

        // Axes
        if (chart.hasCartesianSeries) {
            each(axes, function (axis) {
                if (axis.visible) {
                    axis.render();
                }
            });
        }

        // The series
        if (!chart.seriesGroup) {
            chart.seriesGroup = renderer.g('series-group').attr({
                zIndex: 3
            }).add();
        }

        // MODIFIED: use an async loop to draw the series, body of iterator is the same as Highcharts Chart#renderSeries()
        this.pendingDraw = (0, _async.asyncEach)(chart.series, function (serie) {
            serie.translate();
            serie.render();
        });

        this.pendingDraw.done(function () {

            // Labels
            chart.renderLabels();

            // Credits
            chart.addCredits();

            // Handle responsiveness
            if (chart.setResponsive) {
                chart.setResponsive();
            }

            // Set flag
            chart.hasRendered = true;

            // END: Highcharts Chart#render source

            callback();
        });
        /* eslint-enable */
    },


    // ////////////////////////////////////////////////////////////////////////////////////////////
    // methods for initializing chart components

    initializeFields: function initializeFields() {
        // TODO: this is where user settings could determine the x-axis field(s)

        var baseFields = this.dataSet.getFieldData();
        this.xFields = baseFields.xFields;
        this.yFields = baseFields.yFields;

        var fieldWhiteList = _jquery2.default.extend([], this.fieldShowList);
        var fieldBlackList = _jquery2.default.extend([], this.fieldHideList);
        var intersection = _underscore2.default.intersection(fieldWhiteList, fieldBlackList);

        if (this.showHideMode) {
            fieldBlackList = _underscore2.default.difference(fieldBlackList, intersection);
        } else {
            fieldWhiteList = _underscore2.default.difference(fieldWhiteList, intersection);
        }

        this.yFields = _underscore2.default.difference(this.yFields, fieldBlackList);
        if (fieldWhiteList.length > 0) {
            this.yFields = _underscore2.default.intersection(this.yFields, fieldWhiteList);
        }
        // handle the user-specified legend labels
        if (this.yFields.length > 0 && this.legendLabels.length > 0) {
            this.yFields = _underscore2.default.union(this.legendLabels, this.yFields);
        }
    },
    isEmpty: function isEmpty() {
        return !this.yFields || this.yFields.length === 0;
    },
    hasTimeXAxis: function hasTimeXAxis() {
        return (0, _underscore2.default)(this.xFields || []).any(this.seriesIsTimeBased, this);
    },


    // Assume that the presence of an _span field in the data set means we are dealing with a binned and sorted
    // time series.  Otherwise the time series is assumed to be un-ordered an un-evenly distributed.
    hasBinnedTimeXAxis: function hasBinnedTimeXAxis() {
        return this.hasTimeXAxis() && this.dataSet.hasField('_span');
    },
    shouldProgressiveDraw: function shouldProgressiveDraw() {
        if (this.isEmpty()) {
            return false;
        }
        var totalPoints = this.yFields.length * this.dataSet.getSeries(this.yFields[0]).length;
        return totalPoints > this.PROGRESSIVE_DRAW_THRESHOLD;
    },
    shouldUpdateInPlace: function shouldUpdateInPlace() {
        return this.hcChart && !this.isDirty();
    },
    initializeColorPalette: function initializeColorPalette() {
        this.colorPalette = new _ColorPalette2.default(this.seriesColors);
        this.annotationColorPalette = new _ColorPalette2.default(this.ANNOTATION_COLORS, true);
    },
    initializeSeriesList: function initializeSeriesList() {
        this.seriesList = (0, _underscore2.default)(this.initializeSeriesPropertiesList()).map(function (properties) {
            return _series_factory2.default.create(properties);
        });
    },
    updateSeriesProperties: function updateSeriesProperties() {
        var _this3 = this;

        var propsList = this.initializeSeriesPropertiesList();
        var reinitializeSeriesList = false;

        // compare the type of every series from seriesList with the propsList
        // if there is at least one mismatch then re-initialize the seriesList
        _underscore2.default.each(this.seriesList, function (series, i) {
            if (propsList[i] && series.getType() !== propsList[i].type) {
                reinitializeSeriesList = true;
            }
        });

        if (!reinitializeSeriesList) {
            // if there are more existing series that in the props list, loop through and remove the extras
            // while updating the remaining ones
            if (this.seriesList.length > propsList.length) {
                this.seriesList = (0, _underscore2.default)(this.seriesList).filter(function (series, i) {
                    if (i >= propsList.length) {
                        series.destroy();
                        return false;
                    }
                    series.update(propsList[i]);
                    return true;
                }, this);
            } else if (this.seriesList.length <= propsList.length) {
                // if there are less existing series than in the props list (or the same amount),
                // loop through and create the new ones while updating the existing ones
                this.seriesList = (0, _underscore2.default)(propsList).map(function (props, i) {
                    if (i < _this3.seriesList.length) {
                        _this3.seriesList[i].update(props);
                        return _this3.seriesList[i];
                    }
                    var newSeries = _series_factory2.default.create(props);
                    _this3.bindIndividualSeries(newSeries);
                    return newSeries;
                });
            }
        } else {
            this.seriesList = null;
            this._isDirty = true;
            this.initializeSeriesList();
        }
    },
    initializeSeriesPropertiesList: function initializeSeriesPropertiesList() {
        var _this4 = this;

        if (this.isEmpty()) {
            return [{ type: this.type }];
        }

        var rangeFieldNames = void 0;
        var isRangeSeriesMode = fieldUtils.isRangeSeriesDataSet(this.dataSet);
        var rangeSeriesConfig = isRangeSeriesMode ? fieldUtils.getRangeSeriesConfig(this.dataSet) : [];
        var dashStyle = this.getDashStyle();

        if (isRangeSeriesMode) {
            rangeFieldNames = (0, _underscore2.default)(rangeSeriesConfig).pluck('predicted');
        }

        return (0, _underscore2.default)(this.yFields).map(function (field) {
            // TODO: this is where user settings could determine series type and/or axis mappings
            var customType = void 0;
            if (rangeFieldNames && (0, _underscore2.default)(rangeFieldNames).contains(field)) {
                customType = 'range';
                // eslint-disable-next-line no-prototype-builtins
            } else if (_this4.seriesTypeMapping.hasOwnProperty(field)) {
                customType = _this4.seriesTypeMapping[field];
            }

            var pointPlacement = null;
            if (_this4.hasTimeXAxis() && _this4.type !== 'column' && _this4.type !== 'bar') {
                pointPlacement = 'on';
            }
            var properties = _jquery2.default.extend(true, {}, _this4.properties, {
                type: customType || _this4.type,
                name: field,
                pointPlacement: pointPlacement,
                stacking: isRangeSeriesMode ? 'default' : _this4.stackMode,
                // TODO [sff] should we just deal with this in the chart click handler?
                clickEnabled: _this4.chartClickEnabled,
                dashStyle: dashStyle
            });

            if (customType === 'range') {
                properties.names = (0, _underscore2.default)(rangeSeriesConfig).findWhere({ predicted: field });
            }

            // allow series to be assigned to y-axes via the 'yAxisMapping' property
            // eslint-disable-next-line no-prototype-builtins
            if (_this4.yAxisMapping.hasOwnProperty(field)) {
                properties.yAxis = _this4.yAxisMapping[field];
            }
            return properties;
        });
    },
    initializeXAxisList: function initializeXAxisList() {
        var _this5 = this;

        var isEmpty = this.isEmpty();

        // TODO: this is where user settings could specify multiple x-axes
        // TODO: this is where the x-axis type can be inferred from the series types attached to each axis
        this.xAxisList = (0, _underscore2.default)(this.xFields).map(function (field, i) {
            var tickmarksBetween = (0, _underscore2.default)(_this5.seriesList).any(function (series) {
                return series.getXAxisIndex() === i &&
                // eslint-disable-next-line no-prototype-builtins
                { column: true, bar: true }.hasOwnProperty(series.getType());
            });
            var axisProperties = _jquery2.default.extend(parsingUtils.getXAxisProperties(_this5.properties), _this5.axisColorScheme, {
                'axis.orientation': _this5.axesAreInverted ? 'vertical' : 'horizontal',
                isEmpty: isEmpty,
                crosshair: _this5.legendMode === MULTISERIES_MODE
            });

            axisProperties['axisTitle.text'] = _this5._getComputedXAxisTitle(axisProperties, field);
            if (_this5.seriesIsTimeBased(field)) {
                axisProperties['axisLabels.tickmarkPlacement'] = tickmarksBetween ? 'between' : 'on';
                var maximumValue = _this5._getComputedTimeAxisMaxValue(tickmarksBetween);
                if (maximumValue !== null) {
                    axisProperties['axis.maximumValue'] = maximumValue;
                }
                if (_this5.isAnnotationSupported()) {
                    axisProperties['axis.annotations'] = _this5.getFormattedAnnotations();
                }
                return new _TimeAxis2.default(axisProperties);
            }
            axisProperties['axis.categories'] = _this5.dataSet.getSeries(field);
            axisProperties['axisLabels.tickmarkPlacement'] = 'between';
            return new _CategoryAxis2.default(axisProperties);
        });
    },
    initializeYAxisList: function initializeYAxisList() {
        // TODO: this is where user settings could specify multiple y-axes
        var that = this;

        var isEmpty = this.isEmpty();
        this.yAxisList = [];
        var maxAxisIndex = (0, _underscore2.default)(this.seriesList).chain().invoke('getYAxisIndex').max().value();
        (0, _underscore2.default)(maxAxisIndex + 1).times(function (i) {
            that._initializeYAxis(i, isEmpty);
        });
    },
    _initializeYAxis: function _initializeYAxis(yAxisIndex, isEmpty) {
        var axisProperties = this.initializeYAxisProperties(yAxisIndex, isEmpty);
        // FIXME: we should do something more intelligent here
        // currently if there is only one series for an axis, use that series's name as the default title
        axisProperties['axisTitle.text'] = this._getComputedYAxisTitle(axisProperties, yAxisIndex);

        // log scale is not respected if the chart has stacking
        if (this.stackMode !== 'default') {
            axisProperties['axis.scale'] = 'linear';
        }
        var yAxesShareRanges = this.splitSeries && !this.splitSeriesAllowIndependentYRanges;
        if (this.stackMode === 'stacked100' && this.isStackable() && (yAxesShareRanges || yAxisIndex === 0)) {
            axisProperties['sharedMin'] = 0;
            axisProperties['sharedMax'] = 100;
        }

        this.yAxisList.push(new _NumericAxis2.default(axisProperties));
    },
    initializeYAxisProperties: function initializeYAxisProperties(yAxisIndex, isEmpty) {
        var opposite = yAxisIndex % 2 !== 0;
        var axisProperties = _jquery2.default.extend(parsingUtils.getYAxisProperties(this.properties, yAxisIndex), this.axisColorScheme, {
            'axis.orientation': this.axesAreInverted ? 'horizontal' : 'vertical',
            isEmpty: isEmpty,
            opposite: opposite,
            sharedMax: opposite ? this.properties.overlayAxisMax : this.properties.yAxisMax,
            sharedMin: opposite ? this.properties.overlayAxisMin : this.properties.yAxisMin
        });
        return axisProperties;
    },
    updateAxisProperties: function updateAxisProperties() {
        var _this6 = this;

        // make sure the x-axis gets updated categories, if needed
        // TODO [sff] remove assumption that there is only one x-axis
        if (this.hasXAxis) {
            var xAxis = this.xAxisList[0];
            var xField = this.xFields[0];

            if (xAxis instanceof _CategoryAxis2.default) {
                xAxis.setCategories(this.dataSet.getSeries(xField));
            } else if (xAxis instanceof _TimeAxis2.default) {
                var tickmarksBetween = xAxis.hasTickmarksBetween();
                var maximumValue = this._getComputedTimeAxisMaxValue(tickmarksBetween);
                if (maximumValue !== null) {
                    xAxis.setMaximumValue(maximumValue);
                }
                if (this.isAnnotationSupported()) {
                    xAxis.setAnnotations(this.getFormattedAnnotations());
                }
            }
            var xAxisProperties = parsingUtils.getXAxisProperties(this.properties);
            xAxis.setTitle(this._getComputedXAxisTitle(xAxisProperties, xField));
        }
        // check if we need to draw two y-axis on the chart
        if (this.hasYAxis) {
            var maxAxisIndex = (0, _underscore2.default)(this.seriesList).chain().invoke('getYAxisIndex').max().value();
            if (this.yAxisList.length < maxAxisIndex + 1) {
                this.initializeYAxisList();
                this._isDirty = true;
            }
        }

        _underscore2.default.each(this.yAxisList, function (yAxis, i) {
            var yAxisProperties = parsingUtils.getYAxisProperties(_this6.properties, i);
            yAxis.setTitle(_this6._getComputedYAxisTitle(yAxisProperties, i));
        });
    },
    getFormattedAnnotations: function getFormattedAnnotations() {
        var _this7 = this;

        var validAnnotations = _underscore2.default.filter(this.dataSet.getAnnotations(), function (annotation) {
            return annotation.time && (0, _moment2.default)(annotation.time).isValid();
        });
        var uniqCategories = _underscore2.default.uniq(_underscore2.default.pluck(validAnnotations, 'category'));
        return _underscore2.default.map(validAnnotations, function (annotation) {
            var category = annotation.category;
            var date = (0, _moment2.default)(annotation.time).toDate();
            var color = annotation.color;
            if (!color) {
                // no color specify, try get color from settings or color palette
                // eslint-disable-next-line no-prototype-builtins
                if (_this7.annotationCategoryColors.hasOwnProperty(category)) {
                    color = colorUtils.colorFromHex(_this7.annotationCategoryColors[category]);
                } else {
                    color = _this7.annotationColorPalette.getColorAsRgb(category, uniqCategories.indexOf(category), uniqCategories.length);
                }
            }
            return {
                value: date,
                color: color,
                label: annotation.label,
                category: category
            };
        });
    },
    _getComputedXAxisTitle: function _getComputedXAxisTitle(axisProperties, field) {
        return _underscore2.default.isUndefined(axisProperties['axisTitle.text']) || axisProperties['axisTitle.text'] === '' ? this._getDefaultXAxisTitleFromField(field) : axisProperties['axisTitle.text'];
    },
    _getComputedYAxisTitle: function _getComputedYAxisTitle(axisProperties, yAxisIndex) {
        return _underscore2.default.isUndefined(axisProperties['axisTitle.text']) || axisProperties['axisTitle.text'] === '' ? this._getDefaultYAxisTitle(yAxisIndex) : axisProperties['axisTitle.text'];
    },
    _getDefaultXAxisTitleFromField: function _getDefaultXAxisTitleFromField(field) {
        return field;
    },
    _getDefaultYAxisTitle: function _getDefaultYAxisTitle(yAxisIndex) {
        var axisSeries = (0, _underscore2.default)(this.seriesList).filter(function (series) {
            return series.getYAxisIndex() === yAxisIndex;
        });
        return axisSeries.length === 1 ? axisSeries[0].getName() : undefined;
    },
    _getComputedTimeAxisMaxValue: function _getComputedTimeAxisMaxValue(tickmarksBetween) {
        // If the axis has tickmarks on points, pad the axis maximum by one point span
        // to create more room for the last axis label.
        if (!tickmarksBetween && this.hasBinnedTimeXAxis()) {
            var timeSeries = this.dataSet.getSeriesAsEpochTimes(this.xFields[0]);
            var spanSeries = this.dataSet.getSeriesAsFloats('_span');
            return _underscore2.default.last(timeSeries) + _underscore2.default.last(spanSeries) * 1000;
        }
        return null;
    },
    initializeLegend: function initializeLegend() {
        var legendProps = parsingUtils.getLegendProperties(this.properties);
        if ((0, _underscore2.default)(legendProps['clickEnabled']).isUndefined()) {
            legendProps['clickEnabled'] = this.legendClickEnabled;
        }
        _jquery2.default.extend(legendProps, {
            fontColor: this.fontColor,
            isMultiSeries: this.legendMode === MULTISERIES_MODE,
            isExportMode: this.exportMode
        });
        this.legend = new _Legend2.default(legendProps);
        this.bindLegendEvents();
    },
    bindLegendEvents: function bindLegendEvents() {
        var that = this;

        var properties = {
            highlightDelay: 125,
            unhighlightDelay: 50,
            onMouseOver: function onMouseOver(fieldName) {
                that.handleLegendMouseOver(fieldName);
            },
            onMouseOut: function onMouseOut(fieldName) {
                that.handleLegendMouseOut(fieldName);
            }
        };

        var throttle = new _HoverEventThrottler2.default(properties);

        this.legend.on('mouseover', function (e, fieldName) {
            throttle.mouseOverHappened(fieldName);
        });
        this.legend.on('mouseout', function (e, fieldName) {
            throttle.mouseOutHappened(fieldName);
        });
        this.legend.on('click', function (e, fieldName) {
            that.handleLegendClick(e, fieldName);
        });
    },
    initializeTooltip: function initializeTooltip() {
        var tooltipProps = {
            borderColor: this.foregroundColorSoft,
            mode: this.legendMode
        };
        this.tooltip = new _Tooltip2.default(tooltipProps);
    },
    setAllSeriesData: function setAllSeriesData() {
        var _this8 = this;

        (0, _underscore2.default)(this.seriesList).each(function (series) {
            if (series.getType() === 'range') {
                _this8.setRangeSeriesData(series);
            } else {
                _this8.setBasicSeriesData(series);
            }
        });
    },
    setBasicSeriesData: function setBasicSeriesData(series) {
        var xInfo = this.getSeriesXInfo(series);
        var yInfo = this.getSeriesYInfo(series);

        if (xInfo.axis instanceof _NumericAxis2.default) {
            series.setData({
                x: this.formatNumericAxisData(xInfo.axis, xInfo.fieldName),
                y: this.formatNumericAxisData(yInfo.axis, yInfo.fieldName)
            });
        } else if (xInfo.axis instanceof _TimeAxis2.default) {
            series.setData({
                x: this.formatTimeAxisData(xInfo.axis, xInfo.fieldName),
                y: this.formatNumericAxisData(yInfo.axis, yInfo.fieldName)
            }, { sortXValues: !this.hasBinnedTimeXAxis() });
        } else {
            series.setData({
                y: this.formatNumericAxisData(yInfo.axis, yInfo.fieldName)
            });
        }
    },
    setRangeSeriesData: function setRangeSeriesData(series) {
        var xInfo = this.getSeriesXInfo(series);
        var yInfo = this.getSeriesYInfo(series);
        var rangeConfig = (0, _underscore2.default)(fieldUtils.getRangeSeriesConfig(this.dataSet)).findWhere({
            predicted: series.getName()
        });

        var rangeData = {
            predicted: this.formatNumericAxisData(yInfo.axis, rangeConfig.predicted),
            lower: this.formatNumericAxisData(yInfo.axis, rangeConfig.lower),
            upper: this.formatNumericAxisData(yInfo.axis, rangeConfig.upper)
        };

        if (xInfo.axis instanceof _NumericAxis2.default) {
            rangeData.x = this.formatNumericAxisData(xInfo.axis, xInfo.fieldName);
        } else if (xInfo.axis instanceof _TimeAxis2.default) {
            rangeData.x = this.formatTimeAxisData(xInfo.axis, xInfo.fieldName);
        }
        series.setData(rangeData);
    },
    bindSeriesEvents: function bindSeriesEvents() {
        var that = this;
        this.throttle = new _HoverEventThrottler2.default({
            highlightDelay: 125,
            unhighlightDelay: 50,
            onMouseOver: function onMouseOver(point, series) {
                if (that.legendMode !== MULTISERIES_MODE) {
                    that.handlePointMouseOver(point, series);
                }
            },
            onMouseOut: function onMouseOut(point, series) {
                if (that.legendMode !== MULTISERIES_MODE) {
                    that.handlePointMouseOut(point, series);
                } else if (that.legend) {
                    that.legend.resetLegend();
                }
            }
        });
        (0, _underscore2.default)(this.seriesList).each(this.bindIndividualSeries, this);
    },
    bindIndividualSeries: function bindIndividualSeries(series) {
        var that = this;
        series.on('mouseover', function (e, targetPoint, targetSeries) {
            that.throttle.mouseOverHappened(targetPoint, targetSeries);
        });
        series.on('mouseout', function (e, targetPoint, targetSeries) {
            that.throttle.mouseOutHappened(targetPoint, targetSeries);
        });
        series.on('click', function (e, targetPoint, targetSeries) {
            that.handlePointClick(e, targetPoint, targetSeries);
        });
    },
    handlePointClick: function handlePointClick(event, point, series) {
        var _this9 = this;

        var rowContext = {};
        var pointIndex = point.originalIndex;
        var pointInfo = this.getSeriesPointInfo(series, point);

        var pointClickEvent = {
            type: 'pointClick',
            modifierKey: event.modifierKey,
            name: pointInfo.xAxisName,
            // 'value' will be inserted later based on the x-axis type
            name2: pointInfo.yAxisName,
            value2: pointInfo.yValue
        };

        if (pointInfo.xAxisIsTime) {
            var isoTimeString = this.dataSet.getSeries(pointInfo.xAxisName)[pointIndex];
            pointClickEvent.value = _time2.default.getEpochTimeFromISO(isoTimeString);
            rowContext['row.' + pointInfo.xAxisName] = pointClickEvent.value;
            if (this.hasBinnedTimeXAxis()) {
                pointClickEvent._span = this.dataSet.getSeriesAsFloats('_span')[pointIndex];
            } else {
                pointClickEvent._span = 0.001;
            }
        } else {
            pointClickEvent.value = pointInfo.xValue;
            rowContext['row.' + pointInfo.xAxisName] = pointInfo.xValue;
        }

        (0, _underscore2.default)(this.yFields).each(function (fieldName) {
            rowContext['row.' + fieldName] = _this9.dataSet.getSeries(fieldName)[pointIndex];
        });
        pointClickEvent.rowContext = rowContext;
        this.trigger(pointClickEvent);
    },
    handlePointMouseOver: function handlePointMouseOver(targetPoint, targetSeries) {
        (0, _underscore2.default)(this.seriesList).each(function (series) {
            if (series.matchesName(targetSeries.getName())) {
                series.handlePointMouseOver(targetPoint);
            } else {
                series.unHighlight();
            }
        });
        if (this.legend) {
            this.legend.selectField(targetSeries.getLegendKey());
        }
    },
    handlePointMouseOut: function handlePointMouseOut(targetPoint, targetSeries) {
        (0, _underscore2.default)(this.seriesList).each(function (series) {
            if (series.matchesName(targetSeries.getName())) {
                series.handlePointMouseOut(targetPoint);
            } else {
                series.highlight();
            }
        });
        if (this.legend) {
            this.legend.unSelectField(targetSeries.getLegendKey());
        }
    },
    handleLegendClick: function handleLegendClick(event, fieldName) {
        var legendClickEvent = {
            type: 'legendClick',
            modifierKey: event.modifierKey,
            name2: fieldName
        };
        this.trigger(legendClickEvent);
    },
    handleLegendMouseOver: function handleLegendMouseOver(fieldName) {
        (0, _underscore2.default)(this.seriesList).each(function (series) {
            if (series.matchesName(fieldName)) {
                series.handleLegendMouseOver(fieldName);
            } else {
                series.unHighlight();
            }
        });
    },
    handleLegendMouseOut: function handleLegendMouseOut(fieldName) {
        (0, _underscore2.default)(this.seriesList).each(function (series) {
            if (series.matchesName(fieldName)) {
                series.handleLegendMouseOut(fieldName);
            } else {
                series.highlight();
            }
        });
    },
    applyColorPalette: function applyColorPalette() {
        var _this10 = this;

        if (this.isEmpty()) {
            return;
        }
        var colorMapping = {};
        (0, _underscore2.default)(this.getFieldList()).each(function (field, i, fieldList) {
            colorMapping[field] = _this10.computeFieldColor(field, i, fieldList);
        });
        (0, _underscore2.default)(this.seriesList).invoke('applyColorMapping', colorMapping);
    },


    // ////////////////////////////////////////////////////////////////////////////////
    // methods for generating config objects from chart objects

    getConfig: function getConfig() {
        var that = this;
        var config = _jquery2.default.extend(true, {
            chart: {
                animation: this.enableAnimation
            },
            plotOptions: {
                series: {
                    animation: this.enableAnimation
                }
            },
            tooltip: {
                animation: this.enableAnimation,
                // Disable followTouchMove for zoomable charts so that the single-finger drag pans the chart.
                followTouchMove: !this.isZoomable()
            }
        }, this.BASE_CONFIG, {
            chart: this.getChartConfig(),
            series: this.getSeriesConfigList(),
            xAxis: this.getXAxisConfig(),
            yAxis: this.getYAxisConfig(),
            legend: this.getLegendConfig(),
            tooltip: this.getTooltipConfig(),
            plotOptions: this.getPlotOptionsConfig(),
            pointerDragStartPreHook: (0, _underscore2.default)(this.pointerDragStartPreHook).bind(this),
            pointerDragOverride: (0, _underscore2.default)(this.pointerDragOverride).bind(this),
            pointerDropPreHook: (0, _underscore2.default)(this.pointerDropPreHook).bind(this),
            pointerDropPostHook: (0, _underscore2.default)(this.pointerDropPostHook).bind(this),
            pointerPinchOverride: (0, _underscore2.default)(this.pointerPinchOverride).bind(this)
        });
        if (this.exportMode) {
            if (this.seriesIsTimeBased(this.xFields)) {
                (0, _underscore2.default)(config.xAxis).each(function (xAxis) {
                    var xAxisMargin = void 0;
                    if (that.axesAreInverted) {
                        xAxisMargin = -50;
                    } else {
                        var spanSeries = that.dataSet.getSeriesAsFloats('_span');
                        var span = spanSeries && spanSeries.length > 0 ? parseInt(spanSeries[0], 10) : 1;
                        var secsPerDay = 60 * 60 * 24;
                        var secsPerYear = secsPerDay * 365;

                        if (span >= secsPerYear) {
                            xAxisMargin = 15;
                        } else if (span >= secsPerDay) {
                            xAxisMargin = 25;
                        } else {
                            xAxisMargin = 35;
                        }
                    }
                    xAxis.title.margin = xAxisMargin;
                });
            }
            _jquery2.default.extend(true, config, {
                plotOptions: {
                    series: {
                        enableMouseTracking: false,
                        shadow: false
                    }
                }
            });
        }
        return config;
    },
    getSeriesConfigList: function getSeriesConfigList() {
        return (0, _underscore2.default)(this.seriesList).chain().invoke('getConfig').flatten(true).value();
    },
    getXAxisConfig: function getXAxisConfig() {
        if (!this.hasXAxis) {
            return [];
        }
        return (0, _underscore2.default)(this.xAxisList).map(function (axis, i) {
            var config = axis.getConfig();
            if (i > 0) {
                config.offset = 40;
            }
            return config;
        }, this);
    },
    getYAxisConfig: function getYAxisConfig() {
        if (!this.hasYAxis) {
            return [];
        }
        return (0, _underscore2.default)(this.yAxisList).map(function (axis) {
            return axis.getConfig();
        });
    },
    getLegendConfig: function getLegendConfig() {
        if (!this.hasLegend || !this.legend) {
            return {};
        }
        return this.legend.getConfig();
    },
    getTooltipConfig: function getTooltipConfig() {
        if (!this.tooltip) {
            return {};
        }
        return _jquery2.default.extend(this.tooltip.getConfig(), {
            // initially disable the tooltip, it will be re-enabled when the draw has completed
            // this is to support progressive draw where some content is visible but the chart is not yet interactive
            formatter: function formatter() {
                return false;
            }
        });
    },
    formatTooltip: function formatTooltip(series, hcPoint) {
        var pointInfo = this.getSeriesPointInfo(series, hcPoint);
        // in metrics legend mode, we have a single common tooltip showing only
        // the x-axis value
        if (this.legendMode === MULTISERIES_MODE) {
            return pointInfo.xValueDisplay;
        }
        return series.getTooltipHtml(pointInfo, this.hcChart);
    },
    getChartConfig: function getChartConfig() {
        var that = this;
        var config = {
            type: this.type,
            renderTo: this.container,
            backgroundColor: this.backgroundColor,
            borderColor: this.backgroundColor,
            events: {
                redraw: function redraw() {
                    // Highcharts calls this handler in the scope of the current chart object
                    var chart = this;
                    that.onChartRedraw(chart);
                    that.onChartLoadOrRedraw(chart);
                },

                endResize: this.onChartResize.bind(this),
                tooltipRefresh: this.onTooltipRefresh.bind(this)
            }
        };
        if (this.hasXAxis) {
            config.events.selection = this.onChartSelection.bind(this);
        }
        // in export mode we need to set explicit width and height
        // we'll honor the width and height of the parent node, unless they are zero
        if (this.exportMode) {
            config.width = this.width || this.EXPORT_WIDTH;
            config.height = this.height || this.EXPORT_HEIGHT;
        } else if (!this.$container.is(':visible')) {
            // If the container is not visible as the chart is being drawn, set some default dimensions
            // so that the chart will resize correctly when made visible (SPL-101997)
            config.width = this.FALLBACK_WIDTH;
            config.height = this.FALLBACK_HEIGHT;
        }
        // allow zoom for column, line, area charts only
        if (this.isZoomable()) {
            if (this.zoomType !== 'off') {
                config.zoomType = this.zoomType || 'x';
            }
        }
        // don't align the ticks when we have multiple y-axis in the chart and at least one of the axes has either explicit min or explicit max (SPL-113709)
        // similarly, trying to align log axes will often create empty space at the top end of the axis, so disable alignment if any axis has log scale
        if (this.yAxisList && this.yAxisList.length > 1) {
            var hasExplicitMinOrMax = _underscore2.default.find(this.yAxisList, function (yAxis) {
                return yAxis.hasExplicitMin || yAxis.hasExplicitMax;
            });
            var hasLogAxis = _underscore2.default.any(this.yAxisList, function (yAxis) {
                return yAxis.isLogScale();
            });
            if (hasExplicitMinOrMax || hasLogAxis) {
                config.alignTicks = false;
            }
        }
        return config;
    },
    getDataLabelConfig: function getDataLabelConfig() {
        if (this.showLabels === 'none' || typeof this.dataLabels === 'undefined') {
            return {
                enabled: false
            };
        }
        var that = this;
        var dataLabelsWithFormatter = _jquery2.default.extend(true, {}, this.dataLabels.getConfig(), {
            formatter: function formatter() {
                for (var i = 0; i < that.seriesList.length; i++) {
                    var seriesId = this.series.options.id;
                    var splunkSeriesId = that.seriesList[i].id;
                    // To use helper, we need to identity the associated splunk series.
                    if (seriesId === splunkSeriesId) {
                        var pointInfo = that.getSeriesPointInfo(that.seriesList[i], this.point);
                        if (pointInfo) {
                            return pointInfo.yValueDisplay;
                        }
                    }
                }
                return undefined;
            }
        });
        return dataLabelsWithFormatter;
    },
    getPlotOptionsConfig: function getPlotOptionsConfig() {
        // SPL-74520, track-by-area only works well if the series do not overlap eachother,
        // so it is disabled for a non-stacked chart or a range series chart
        var trackByArea = this.stackMode !== 'default' && !fieldUtils.isRangeSeriesDataSet(this.dataSet);
        return _jquery2.default.extend(true, {}, this.BASE_PLOT_OPTIONS_CONFIG, {
            series: {
                cursor: this.chartClickEnabled ? 'pointer' : 'default',
                dataLabels: this.getDataLabelConfig()
            },
            area: {
                trackByArea: trackByArea
            }
        });
    },
    isAnnotationSupported: function isAnnotationSupported() {
        return _underscore2.default.indexOf(['area', 'line', 'column'], this.type) >= 0;
    },
    isZoomable: function isZoomable() {
        return this.type === 'area' || this.type === 'line' || this.type === 'column';
    },
    isStackable: function isStackable() {
        return this.type !== 'line';
    },


    // //////////////////////////////////////////////////////////////////////////////////////
    // methods for managing event handlers and effects

    enableTooltip: function enableTooltip(hcChart) {
        var that = this;
        hcChart.tooltip.options.formatter = function tooltipFormatter() {
            // now with the shared tooltip functionality, we need to determine if this is an array of points
            // or a single point
            var curPoint = this.points && this.points.length ? this.points[0] : this;

            // need to look up the instance of Splunk.JSCharting.BaseSeries, not the HighCharts series
            var series = curPoint.series.splSeries;

            return that.formatTooltip(series, curPoint.point);
        };
    },
    onTooltipRefresh: function onTooltipRefresh() {
        var _this11 = this;

        if (this.legend && this.legendMode === MULTISERIES_MODE) {
            var points = this.hcChart.hoverPoints.map(function (hcPoint) {
                var series = _this11.getSeriesByName(hcPoint.series.name);
                var pointInfo = _this11.getSeriesPointInfo(series, hcPoint);
                return {
                    seriesIndex: hcPoint.series.index,
                    value: pointInfo.yValue,
                    formattedValue: pointInfo.yValueDisplay
                };
            });
            this.legend.updateLegend(points);
        }
    },
    onChartLoad: function onChartLoad(chart) {
        if (this.legend) {
            this.legend.onChartLoad(chart);
        }
        if (this.dataLabels) {
            this.dataLabels.onChartLoad(chart);
        }
        (0, _underscore2.default)(this.xAxisList).invoke('onChartLoad', chart);
        (0, _underscore2.default)(this.yAxisList).invoke('onChartLoad', chart);
        (0, _underscore2.default)(this.seriesList).invoke('onChartLoad', chart);
        if (this.isZoomable()) {
            this.triggerRangeSelectionEvent();
        }
    },
    onChartRedraw: function onChartRedraw(chart) {
        var that = this;
        if (this.selectionWindow) {
            this.selectionWindow.onChartRedraw(chart);
        } else if (this.isZoomable() && !this.isiOS) {
            var xAxis = this.xAxisList[0];
            if (xAxis && xAxis.isZoomed) {
                if (!this.resetZoomButton) {
                    this.resetZoomButton = new _ZoomOutButton2.default(this.hcChart);
                }
                if (this.panButtons) {
                    this.panButtons.onChartRedraw(chart);
                } else {
                    this.panButtons = new _PanButtons2.default(this.hcChart, this.panDistanceResolver.bind(this));
                    this.panButtons.on('pan', function () {
                        that.triggerRangeSelectionEvent();
                    });
                }
            } else {
                if (this.resetZoomButton) {
                    this.resetZoomButton.destroy();
                    this.resetZoomButton = null;
                }
                if (this.panButtons) {
                    this.panButtons.destroy();
                    this.panButtons = null;
                }
            }
        }
        if (this.isZoomable() && !this.selectionTriggeredBeforeRedraw) {
            var skipNormalization = !this.selectionWindow || this.updateHasRebinned;
            this.triggerRangeSelectionEvent(null, { skipNormalization: skipNormalization });
        }
        this.selectionTriggeredBeforeRedraw = false;
    },
    onChartLoadOrRedraw: function onChartLoadOrRedraw(chart) {
        if (this.legend) {
            this.legend.onChartLoadOrRedraw(chart);
        }
        if (this.dataLabels) {
            this.dataLabels.onChartLoadOrRedraw(chart);
        }
        (0, _underscore2.default)(this.xAxisList).invoke('onChartLoadOrRedraw', chart);
        (0, _underscore2.default)(this.yAxisList).invoke('onChartLoadOrRedraw', chart);
        (0, _underscore2.default)(this.seriesList).invoke('onChartLoadOrRedraw', chart);
    },
    onChartDestroy: function onChartDestroy() {
        if (this.legend) {
            this.legend.destroy();
        }

        if (this.dataLabels) {
            this.dataLabels.destroy();
        }
        (0, _underscore2.default)(this.xAxisList).invoke('destroy');
        (0, _underscore2.default)(this.yAxisList).invoke('destroy');
        (0, _underscore2.default)(this.seriesList).invoke('destroy');
        if (this.selectionWindow) {
            this.selectionWindow.destroy();
            this.selectionWindow = null;
        }
        if (this.panButtons) {
            this.panButtons.destroy();
            this.panButtons = undefined;
        }
    },
    onChartSelection: function onChartSelection(originalEvent) {
        var xAxis = this.xAxisList[0];
        if (!originalEvent.resetSelection) {
            var xAxisInfo = originalEvent.xAxis[0];
            var normalizedExtremes = this.getNormalizedAxisExtremes(xAxisInfo.min, xAxisInfo.max);

            // TODO [sff] maybe this should be handled elsewhere?
            xAxisInfo.min = normalizedExtremes.min;
            xAxisInfo.max = normalizedExtremes.max;
            if (!this.hasTimeXAxis()) {
                xAxisInfo.max += xAxis.hasTickmarksBetween() ? 0 : 1;
            }
            // This is the one place where the range selection event if triggered with explicit extremes,
            // at this stage in the event lifecycle the new extremes have not yet been applied to the axis.
            var rangeSelectionEvent = this.triggerRangeSelectionEvent(normalizedExtremes);
            if (rangeSelectionEvent.isDefaultPrevented()) {
                originalEvent.preventDefault();
                // cancel a pending range reset event since we are creating a new selection window
                this.hasPendingRangeResetEvent = false;
                if (xAxis.getZoomed(xAxisInfo.min, xAxisInfo.max)) {
                    this.selectionWindow = new _SelectionWindow2.default(this.hcChart, this.xAxisValueSnapper.bind(this));
                    var that = this;
                    this.selectionWindow.on('rangeSelect', function () {
                        that.triggerRangeSelectionEvent();
                    });
                }
            } else {
                // Since we are triggering the event before the chart redraws, set a flag that will suppress what
                // would be a duplicate event trigger in onChartRedraw.
                this.selectionTriggeredBeforeRedraw = true;
            }
        }
    },
    onChartResize: function onChartResize(chart) {
        if (this.panButtons) {
            this.panButtons.onChartResize(chart);
        }
    },


    // Will be called by components like the pan buttons to determine how far an individual panning action should shift the axis.
    // Returns an object with `min` and `max` to indicate a value change for both extremes
    panDistanceResolver: function panDistanceResolver(axis, direction) {
        // For a category axis, always shift the axis by one category at a time.
        if (!this.hasTimeXAxis()) {
            return { min: 1, max: 1 };
        }
        // For an un-binned time axis, shift the axis by one tick interval at a time.
        if (!this.hasBinnedTimeXAxis()) {
            var tickInterval = axis.normalizeTimeTickInterval(axis.tickInterval, axis.options.units).unitRange;
            return { min: tickInterval, max: tickInterval };
        }
        // For a binned time axis, we can use the span information to shift one point at a time.
        var extremes = axis.getExtremes();
        var timeSeries = this.dataSet.getSeriesAsEpochTimes(this.xFields[0]);
        var spanSeries = this.dataSet.getSeriesAsFloats('_span');
        var previousMinIndex = this.findNearestTimeBinIndex(extremes.min, timeSeries);
        var previousMaxIndex = this.findNearestTimeBinIndex(extremes.max, timeSeries);

        // When panning to the left, compute the span of the previous point to each extreme, and shift that far.
        if (direction === 'left') {
            if (previousMinIndex === 0) {
                return { min: 0, max: 0 };
            }
            return {
                min: spanSeries[previousMinIndex - 1] * 1000,
                max: spanSeries[previousMaxIndex - 1] * 1000
            };
        }
        // When panning to the right, compute the span of the current point at each extreme, and shift that far.
        if (direction === 'right') {
            if (previousMaxIndex >= spanSeries.length) {
                return { min: 0, max: 0 };
            }
            return {
                min: spanSeries[previousMinIndex] * 1000,
                max: spanSeries[previousMaxIndex] * 1000
            };
        }
        return undefined;
    },


    // Called by components like the selection window to have a raw x-axis value snapped to align with the nearest data point.
    // In addition to the raw value, accepts a "snap strategy", which can be "round", "floor", or "ceil".
    // Returns the snapped x-axis value.
    xAxisValueSnapper: function xAxisValueSnapper(value, snapStrategy) {
        snapStrategy = snapStrategy || 'round';
        // For a category axis, snap to integer values.
        if (!this.hasTimeXAxis()) {
            return Math[snapStrategy](value);
        }
        // For an un-binned time axis the point distribution is unknown, so punt and don't even try to snap.
        if (!this.hasBinnedTimeXAxis()) {
            return value;
        }
        // For a binned time axis, find the nearest time bin to the raw value.
        var timeSeries = this.dataSet.getSeriesAsEpochTimes(this.xFields[0]);
        var binIndex = this.findNearestTimeBinIndex(value, timeSeries);
        var roundedTimeValue = timeSeries[binIndex];
        // The `findNearestTimeBinIndex` performs a rounding operation,
        // so adjust for that if the strategy is "floor" or "ceil".
        if (snapStrategy === 'floor' && value < roundedTimeValue && binIndex > 0) {
            binIndex--;
        } else if (snapStrategy === 'ceil' && value > roundedTimeValue) {
            binIndex++;
        }
        // It's allowed to snap past the last data point, by using its span value to find where the next point would be.
        if (binIndex === timeSeries.length) {
            return timeSeries[binIndex - 1] + this.dataSet.getSeriesAsFloats('_span')[binIndex - 1] * 1000;
        }
        return timeSeries[binIndex];
    },
    getNormalizedAxisExtremes: function getNormalizedAxisExtremes(min, max) {
        var hcAxis = this.hcChart.xAxis[0];
        var axisMax = hcAxis.dataMax;
        var axisMin = hcAxis.dataMin;

        var enforceAxisBounds = function enforceAxisBounds(extreme) {
            if (extreme > axisMax) {
                extreme = axisMax;
            }
            if (extreme < axisMin) {
                extreme = axisMin;
            }
            return extreme;
        };

        min = enforceAxisBounds(min);
        max = enforceAxisBounds(max);

        if (this.hasTimeXAxis()) {
            return this.getNormalizedTimeAxisExtremes(min, max);
        }
        return this.getNormalizedCategoryAxisExtremes(min, max);
    },
    getNormalizedTimeAxisExtremes: function getNormalizedTimeAxisExtremes(min, max) {
        if (!this.hasBinnedTimeXAxis()) {
            return { min: min, max: max };
        }
        var axis = this.xAxisList[0];
        var timeSeries = this.dataSet.getSeriesAsEpochTimes(this.xFields[0]);
        var spanSeries = this.dataSet.getSeriesAsFloats('_span');
        var minIndex = this.findNearestTimeBinIndex(min, timeSeries);
        var maxIndex = this.findNearestTimeBinIndex(max, timeSeries);
        return {
            min: timeSeries[minIndex],
            max: timeSeries[maxIndex] + (axis.hasTickmarksBetween() ? 0 : spanSeries[maxIndex] * 1000)
        };
    },
    getNormalizedCategoryAxisExtremes: function getNormalizedCategoryAxisExtremes(min, max) {
        var axis = this.xAxisList[0];
        var hcAxis = this.hcChart.xAxis[0];
        var axisMax = hcAxis.dataMax;
        var normalizedMin = Math.round(min);
        var normalizedMax = Math.round(max);
        var isTouch = this.isiOS && this.hcChart.pointer.selectionMarker;
        var isTouchPan = isTouch && this.hcChart.pointer.selectionMarker.width === this.hcChart.plotWidth;
        var isTouchZoom = isTouch && this.hcChart.pointer.selectionMarker.width !== this.hcChart.plotWidth;

        if (isTouchPan && normalizedMax > normalizedMin && normalizedMax !== axisMax) {
            // If max and min are not equal, and if the event was a touch pan, normalize the max for non-column charts.
            // Except when panning to the end of the chart.
            normalizedMax -= axis.hasTickmarksBetween() ? 0 : 1;
        }

        if (isTouchZoom && max - min < 1 && !axis.hasTickmarksBetween()) {
            // User is zoomed in on 1 point. Do not let them zoom in further
            normalizedMax = normalizedMin;
        }

        return {
            min: normalizedMin,
            max: normalizedMax
        };
    },
    findNearestTimeBinIndex: function findNearestTimeBinIndex(timeValue, timeSeries) {
        var index = _underscore2.default.sortedIndex(timeSeries, timeValue);
        if (index === 0) {
            return 0;
        }
        var distanceFromPrevious = timeValue - timeSeries[index - 1];
        var distanceFromNext = timeSeries[index] - timeValue;
        return distanceFromPrevious < distanceFromNext ? index - 1 : index;
    },
    calculatePostUpdateExtremes: function calculatePostUpdateExtremes(preUpdateExtremes) {
        var xAxis = this.xAxisList[0];
        if (!this.hasTimeXAxis()) {
            var updatedCategories = xAxis.getCategories();
            return updatedCategories.length > preUpdateExtremes.max ? preUpdateExtremes : { min: null, max: null };
        }
        if (!this.hasBinnedTimeXAxis()) {
            return preUpdateExtremes;
        }
        var timeSeries = this.dataSet.getSeriesAsEpochTimes(this.xFields[0]);
        var spanSeries = this.dataSet.getSeriesAsFloats('_span');
        var incomingExtremes = {
            min: timeSeries[0],
            max: _underscore2.default.last(timeSeries) + _underscore2.default.last(spanSeries) * 1000
        };
        if (incomingExtremes.max < preUpdateExtremes.max || incomingExtremes.min > preUpdateExtremes.min) {
            return { min: null, max: null };
        }
        var min = timeSeries[this.findNearestTimeBinIndex(preUpdateExtremes.min, timeSeries)];
        var max = timeSeries[this.findNearestTimeBinIndex(preUpdateExtremes.max, timeSeries)];
        if (timeSeries.indexOf(preUpdateExtremes.min) === -1 || timeSeries.indexOf(preUpdateExtremes.max) === -1) {
            this.updateHasRebinned = true;
        }
        return { min: min, max: max };
    },
    triggerRangeSelectionEvent: function triggerRangeSelectionEvent(extremes, options) {
        var e = void 0;
        var xAxis = this.xAxisList[0];

        // The range is being reset if there are no explicit extremes, there is no selection window,
        // and the axis is not zoomed.
        var isReset = !extremes && !this.selectionWindow && !xAxis.isZoomed;

        if (!extremes) {
            if (this.selectionWindow) {
                extremes = this.selectionWindow.getExtremes();
                extremes.min += xAxis.hasTickmarksBetween() ? 1 : 0;
            } else {
                extremes = this.hcChart.xAxis[0].getExtremes();
                if (xAxis.isZoomed) {
                    extremes.max -= xAxis.hasTickmarksBetween() ? 0 : 1;
                }
            }
            if (!options || !options.skipNormalization) {
                extremes = this.getNormalizedAxisExtremes(extremes.min, extremes.max);
            }
        }

        if (this.hasTimeXAxis()) {
            var timeSeries = this.dataSet.getSeriesAsEpochTimes(this.xFields[0]);
            var span = 0;
            var endXIndex = _underscore2.default.sortedIndex(timeSeries, extremes.max);

            if (this.hasBinnedTimeXAxis() && xAxis.hasTickmarksBetween() && !this.selectionWindow) {
                var spanSeries = this.dataSet.getSeriesAsFloats('_span');
                span = spanSeries[endXIndex];
            } else if (this.hasBinnedTimeXAxis() && (!xAxis.hasTickmarksBetween() || this.selectionWindow)) {
                endXIndex--;
            }
            e = _jquery2.default.Event('chartRangeSelect', {
                startXIndex: _underscore2.default.sortedIndex(timeSeries, extremes.min),
                endXIndex: endXIndex,
                startXValue: extremes.min / 1000,
                endXValue: extremes.max / 1000 + span,
                isReset: !!isReset
            });
        } else {
            var categories = this.dataSet.getSeries(this.xFields[0]);
            e = _jquery2.default.Event('chartRangeSelect', {
                startXIndex: extremes.min,
                endXIndex: extremes.max,
                startXValue: categories[extremes.min],
                endXValue: categories[extremes.max],
                isReset: !!isReset
            });
        }
        this.trigger(e);
        return e;
    },
    pointerDragStartPreHook: function pointerDragStartPreHook(pointer, e) {
        if (this.selectionWindow) {
            var handled = this.selectionWindow.handleDragStartEvent(e);
            if (!handled) {
                this.destroySelectionWindow();
            }
        }
    },


    /*
     * Override the default behavior of the Highcharts Pointer#pinch method, so that we can remap
     * gestures into manipulations of the range selection window (if it's there) as opposed to axis zoom/pan.
     */
    pointerPinchOverride: function pointerPinchOverride(pointer, e, originalFn) {
        if (this.selectionWindow) {
            if (e.type === 'touchstart') {
                // For touchstart, the original function needs to run because it sets some stateful reference
                // co-ordinates that are used later to compute drag distances.  We can prevent Highcharts from
                // doing any axis zoom work by disabling the zoomEnabled flag for the x-axis.
                this.hcChart.xAxis[0].zoomEnabled = false;
                originalFn.call(pointer, e);
                var handled = this.selectionWindow.handleDragStartEvent(e);
                if (!handled) {
                    this.destroySelectionWindow();
                }
                this.hcChart.xAxis[0].zoomEnabled = true;
            } else if (e.type === 'touchmove') {
                this.selectionWindow.handleDragEvent(e);
            } else if (e.type === 'touchend') {
                this.selectionWindow.handleDropEvent(e);
            }
        } else {
            originalFn.call(pointer, e);
        }
    },
    destroySelectionWindow: function destroySelectionWindow() {
        if (this.selectionWindow) {
            this.selectionWindow.destroy();
            this.selectionWindow = null;
            // note that a range reset event is pending, to be handled in pointerDropPostHook
            // this can potentially be cancelled if the current drag event results in creating a new selected range
            this.hasPendingRangeResetEvent = true;
        }
    },
    pointerDragOverride: function pointerDragOverride(pointer, e, originalFn) {
        if (this.selectionWindow) {
            this.selectionWindow.handleDragEvent(e);
        } else {
            originalFn.call(pointer, e);
            if (this.hcChart.pointer.selectionMarker) {
                this.hcChart.pointer.selectionMarker.attr({
                    'stroke-width': 2,
                    stroke: this.foregroundColorSofter
                });
            }
        }
    },
    pointerDropPreHook: function pointerDropPreHook(pointer, e) {
        if (this.selectionWindow) {
            this.selectionWindow.handleDropEvent(e);
        }
    },
    pointerDropPostHook: function pointerDropPostHook() {
        if (this.hasPendingRangeResetEvent) {
            this.triggerRangeSelectionEvent();
            this.hasPendingRangeResetEvent = false;
        }
    },


    // ///////////////////////////////////////////////////////////////////////////////////
    // re-usable helpers

    getSeriesByName: function getSeriesByName(name) {
        return (0, _underscore2.default)(this.seriesList).find(function (series) {
            return series.hcSeries.name === name;
        });
    },
    getSeriesXInfo: function getSeriesXInfo(series) {
        var xIndex = series.getXAxisIndex();
        return {
            axis: this.xAxisList[xIndex],
            fieldName: this.xFields[xIndex]
        };
    },
    getSeriesYInfo: function getSeriesYInfo(series) {
        return {
            axis: this.yAxisList[series.getYAxisIndex()],
            fieldName: series.getName()
        };
    },
    getSeriesPointInfo: function getSeriesPointInfo(series, hcPoint) {
        var pointIndex = _underscore2.default.has(hcPoint, 'originalIndex') ? hcPoint.originalIndex : hcPoint.index;
        var xInfo = this.getSeriesXInfo(series);
        var yInfo = this.getSeriesYInfo(series);
        var categories = this.dataSet.getSeries(xInfo.fieldName);
        var ySeries = this.dataSet.getSeries(yInfo.fieldName);

        return {
            xAxisIsTime: xInfo.axis instanceof _TimeAxis2.default,
            xAxisName: xInfo.fieldName,
            xValue: categories[pointIndex],
            xValueDisplay: xInfo.axis.formatValue(categories[pointIndex], hcPoint),
            yAxisName: yInfo.fieldName,
            yValue: ySeries[pointIndex],
            yValueDisplay: yInfo.axis.formatValue(ySeries[pointIndex], hcPoint)
        };
    },
    getDashStyle: function getDashStyle() {
        // convert first char to upper case as HighCharts expects options to have this convention
        var dashStyle = this.properties['lineDashStyle'];
        if (dashStyle) {
            return parsingUtils.capitalize(dashStyle);
        }
        return undefined;
    },


    // by convention, we consider a series to be time-based if it is called _time
    seriesIsTimeBased: function seriesIsTimeBased(fieldName) {
        return (/^_time/.test(fieldName)
        );
    },
    formatNumericAxisData: function formatNumericAxisData(axis, fieldName) {
        if (!this.dataSet.hasField(fieldName)) {
            return [];
        }
        return this.dataSet.getSeriesAsFloats(fieldName, {
            scale: axis.isLogScale() ? 'log' : 'linear',
            nullValueMode: this.properties['chart.nullValueMode']
        });
    },
    formatTimeAxisData: function formatTimeAxisData(axis, fieldName) {
        if (!this.dataSet.hasField(fieldName)) {
            return [];
        }
        return this.dataSet.getSeriesAsEpochTimes(fieldName);
    },
    computeFieldColor: function computeFieldColor(field, index, fieldList) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.internalFieldColors.hasOwnProperty(field)) {
            return colorUtils.colorFromHex(this.internalFieldColors[field]);
        }
        var useExternalPalette = !this.seriesColors && !(0, _underscore2.default)(this.externalPaletteMapping).isEmpty();
        var paletteIndex = useExternalPalette ? this.externalPaletteMapping[field] : index;
        var paletteSize = useExternalPalette ? this.externalPaletteSize : fieldList.length;

        return this.colorPalette.getColorAsRgb(field, paletteIndex, paletteSize);
    },


    // ///////////////////////////////////////////////////////////////////////////////////
    // templates and default settings

    BASE_CONFIG: {
        chart: {
            showAxes: true,
            reflow: false,
            selectionMarkerFill: 'rgba(0,0,0,0)',
            spacingTop: 16,
            style: {
                fontFamily: _constants.FONT_FAMILY,
                fontSize: _constants.FONT_SIZE
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                states: {
                    // series start out with their hover state disabled, it is enabled after draw is complete
                    hover: {
                        enabled: false
                    }
                },
                events: {
                    legendItemClick: function legendItemClick() {
                        return false;
                    }
                },
                borderWidth: 0,
                shadow: false,
                turboThreshold: 0
            }
        },
        title: {
            text: null
        },
        tooltip: {
            enabled: false,
            useHTML: true
        }
    },

    BASE_PLOT_OPTIONS_CONFIG: {
        line: {
            stickyTracking: true,
            states: {
                hover: {
                    marker: {
                        enabled: true,
                        radius: 6
                    }
                }
            },
            marker: {
                enabled: false,
                radius: 2,
                symbol: 'circle'
            }
        },
        area: {
            stickyTracking: true,
            lineWidth: 1,
            states: {
                hover: {
                    marker: {
                        enabled: true,
                        radius: 6
                    }
                }
            },
            marker: {
                symbol: 'circle',
                radius: 2,
                enabled: false
            }
        },
        column: {
            markers: {
                enabled: false
            },
            stickyTracking: false,
            fillOpacity: 1,
            trackByArea: true
        },
        bar: {
            markers: {
                enabled: false
            },
            stickyTracking: false,
            fillOpacity: 1,
            trackByArea: true
        }
    }
});

exports.default = Chart;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Throttler(properties) {
    properties = properties || {};
    this.highlightDelay = properties.highlightDelay || 200;
    this.unhighlightDelay = properties.unhighlightDelay || 100;
    this.timer = null;
    this.timer2 = null;
    this.mouseStatus = 'over';
    this.isSelected = false;
    this.onMouseOver = properties.onMouseOver;
    this.onMouseOut = properties.onMouseOut;
}

_jquery2.default.extend(Throttler.prototype, {
    setMouseStatus: function setMouseStatus(status) {
        this.mouseStatus = status;
    },
    getMouseStatus: function getMouseStatus() {
        return this.mouseStatus;
    },
    mouseOverHappened: function mouseOverHappened() {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (Throttler._synchronousBehavior) {
            this.onMouseOver.apply(null, args);
            return;
        }

        this.mouseOverFn = function () {
            _this.onMouseOver.apply(null, args);
        };
        clearTimeout(this.timer);
        clearTimeout(this.timer2);
        this.setMouseStatus('over');
        this.timeOutManager();
    },
    mouseOutHappened: function mouseOutHappened() {
        var _this2 = this;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        if (Throttler._synchronousBehavior) {
            this.onMouseOut.apply(null, args);
            return;
        }
        this.mouseOutFn = function () {
            _this2.onMouseOut.apply(null, args);
        };
        this.setMouseStatus('out');
        this.timeOutManager();
    },
    timeOutManager: function timeOutManager() {
        var that = this;

        clearTimeout(this.timer);
        if (this.isSelected) {
            if (this.getMouseStatus() === 'over') {
                this.mouseEventManager();
            } else {
                this.timer2 = setTimeout(function () {
                    that.setMouseStatus('out');
                    that.mouseEventManager();
                }, that.unhighlightDelay);
            }
        } else {
            this.timer = setTimeout(function () {
                that.isSelected = true;
                that.mouseEventManager();
            }, that.highlightDelay);
        }
    },
    mouseEventManager: function mouseEventManager() {
        if (this.getMouseStatus() === 'over') {
            this.mouseOverFn();
            this.isSelected = true;
            this.setMouseStatus('out');
        } else {
            this.mouseOutFn();
            this.isSelected = false;
            this.setMouseStatus('over');
        }
    }
});

_jquery2.default.extend(Throttler, {
    _synchronousBehavior: false,

    useSynchronousBehavior: function useSynchronousBehavior() {
        Throttler._synchronousBehavior = true;
    },
    restoreDefaultBehavior: function restoreDefaultBehavior() {
        Throttler._synchronousBehavior = false;
    }
});

exports.default = Throttler;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _Formatter = __webpack_require__(10);

var _Formatter2 = _interopRequireDefault(_Formatter);

var _color = __webpack_require__(7);

var _parsing = __webpack_require__(3);

var _EventMixin = __webpack_require__(9);

var _EventMixin2 = _interopRequireDefault(_EventMixin);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Point(hcPoint) {
    this.index = hcPoint.index;
    // The original index is used track where the point appeared in the original data set,
    // which is not always the same as its index in the chart series (see setData below).
    this.originalIndex = _underscore2.default.has(hcPoint, 'originalIndex') ? hcPoint.originalIndex : this.index;
    this.seriesName = hcPoint.series.name;
    this.name = hcPoint.name;
    this.y = hcPoint.y;
}

function Series(properties) {
    this.properties = this.normalizeProperties(properties || {});
    this.processProperties();
    this.id = _underscore2.default.uniqueId('series_');
    this.data = [];
    this._isDirty = false;
    this._dataIsDirty = false;
    this.UNHIGHLIGHTED_COLOR = (0, _color.addAlphaToColor)(this.UNHIGHLIGHTED_BASE_COLOR, this.UNHIGHLIGHTED_OPACITY);
    this.UNHIGHLIGHTED_BORDER_COLOR = (0, _color.addAlphaToColor)(this.UNHIGHLIGHTED_BORDER_BASE_COLOR, this.UNHIGHLIGHTED_OPACITY);
}

Series.prototype = _jquery2.default.extend({}, _EventMixin2.default, {
    STACK_MODE_MAP: {
        default: null,
        stacked: 'normal',
        stacked100: 'percent'
    },
    CHART_PROPERTY_PREFIX_REGEX: /^chart\./,

    UNHIGHLIGHTED_OPACITY: 0.3,
    UNHIGHLIGHTED_BASE_COLOR: 'rgb(150, 150, 150)',
    UNHIGHLIGHTED_BORDER_BASE_COLOR: 'rgb(200, 200, 200)',
    DEFAULT_STACK_MODE: null,
    CHARTING_PROPERTY_WHITELIST: [],

    // a centralized normalization method for series properties, subclasses override or extend the
    // CHARTING_PROPERTY_WHITELIST with a list of property names (without the leading "chart.")
    // to be parsed from the chart properties passed to the constructor
    normalizeProperties: function normalizeProperties(rawProps) {
        var _this = this;

        var normalizedProps = _jquery2.default.extend(true, {}, rawProps);
        (0, _underscore2.default)(normalizedProps).each(function (value, key) {
            if (_this.CHART_PROPERTY_PREFIX_REGEX.test(key)) {
                delete normalizedProps[key];
                var strippedKey = key.replace(_this.CHART_PROPERTY_PREFIX_REGEX, '');
                if ((0, _underscore2.default)(_this.CHARTING_PROPERTY_WHITELIST).contains(strippedKey)) {
                    normalizedProps[strippedKey] = value;
                }
            }
        });
        return normalizedProps;
    },


    // no-op to be overridden by sub-classes
    processProperties: function processProperties() {},
    redraw: function redraw(redrawChart) {
        if (!this.hcSeries) {
            // this is not an error state, there are cases where a new series is added dynamically in an update
            return;
        }
        if (this.isDirty()) {
            this.hcSeries.update(this.getConfig(), redrawChart);
        } else if (this.dataIsDirty()) {
            this.hcSeries.setData(this.hasPrettyData ? this.prettyData : this.data, redrawChart);
        }
    },
    update: function update(properties) {
        var oldProperties = this.properties;
        this.properties = this.normalizeProperties(properties);
        if (!_underscore2.default.isEqual(this.properties, oldProperties)) {
            this.processProperties();
            this._isDirty = true;
        }
    },
    setData: function setData(inputData, options) {
        options = options || {};
        var oldData = this.data;
        if (!_underscore2.default.isArray(inputData.y) || inputData.y.length === 0) {
            this.data = [];
        } else if ((0, _underscore2.default)(inputData.x).isUndefined()) {
            this.data = inputData.y;
        } else if (options.sortXValues) {
            // If the x-values need to be sorted, first put them in a format that allows for tracking the original index.
            this.data = (0, _underscore2.default)(inputData.x).chain().map(function (value, i) {
                return { x: value, y: inputData.y[i], originalIndex: i };
            }).sortBy(function (datum) {
                return datum.x;
            }).value();
        } else {
            this.data = (0, _underscore2.default)(inputData.x).map(function (value, i) {
                return [value, inputData.y[i]];
            });
        }
        if (!_underscore2.default.isEqual(this.data, oldData)) {
            this._dataIsDirty = true;
        }
    },
    getData: function getData() {
        return this.data;
    },
    isDirty: function isDirty() {
        return this._isDirty;
    },
    dataIsDirty: function dataIsDirty() {
        return this._dataIsDirty;
    },
    getXAxisIndex: function getXAxisIndex() {
        return this.properties.xAxis || 0;
    },
    getYAxisIndex: function getYAxisIndex() {
        return this.properties.yAxis || 0;
    },
    getName: function getName() {
        return this.properties.name;
    },
    getLegendKey: function getLegendKey() {
        return this.properties.legendKey || this.getName();
    },
    getFieldList: function getFieldList() {
        return [this.getName()];
    },
    matchesName: function matchesName(name) {
        return name === this.getName();
    },
    applyColorMapping: function applyColorMapping(colorMapping) {
        var oldColor = this.color;
        this.color = colorMapping[this.getName()];
        if (this.color !== oldColor) {
            this._isDirty = true;
        }
    },
    getColor: function getColor() {
        return this.color;
    },
    getStackMode: function getStackMode() {
        return this.STACK_MODE_MAP[this.properties['stacking']] || this.DEFAULT_STACK_MODE;
    },
    getType: function getType() {
        return this.type;
    },
    getConfig: function getConfig() {
        return {
            type: this.type,
            id: this.id,
            name: this.getName(),
            color: this.color,
            data: this.hasPrettyData ? this.prettyData : this.data,
            xAxis: this.getXAxisIndex(),
            yAxis: this.getYAxisIndex(),
            stacking: this.getStackMode()
        };
    },
    onChartLoad: function onChartLoad() {},
    onChartLoadOrRedraw: function onChartLoadOrRedraw(chart) {
        this.hcSeries = chart.get(this.id);
        // create a back-reference so we can get from the HighCharts series to this object
        this.hcSeries.splSeries = this;
        this._isDirty = false;
        this._dataIsDirty = false;
        this.hcSeries.options.states.hover.enabled = true;
        this.addEventHandlers(this.hcSeries);
    },
    addEventHandlers: function addEventHandlers(hcSeries) {
        hcSeries.options.point.events = hcSeries.options.point.events || {};
        var that = this;
        var pointEvents = hcSeries.options.point.events;

        pointEvents.mouseOver = function handleMouseOver() {
            var hcPoint = this;
            var point = new Point(hcPoint);
            that.trigger('mouseover', [point, that]);
        };
        pointEvents.mouseOut = function handleMouseOut() {
            var hcPoint = this;
            var point = new Point(hcPoint);
            that.trigger('mouseout', [point, that]);
        };

        if ((0, _parsing.normalizeBoolean)(this.properties['clickEnabled'])) {
            pointEvents.click = function handleClick(e) {
                var hcPoint = this;
                var point = new Point(hcPoint);

                var clickEvent = {
                    type: 'click',
                    modifierKey: e.ctrlKey || e.metaKey
                };

                that.trigger(clickEvent, [point, that]);
            };
        }
    },
    destroy: function destroy() {
        this.off();
        // remove the back-reference to avoid any reference loops that might confuse the GC
        if (this.hcSeries && this.hcSeries.splSeries) {
            this.hcSeries.splSeries = null;
        }
        this.hcSeries = null;
    },
    handlePointMouseOver: function handlePointMouseOver() {
        this.bringToFront();
    },
    handleLegendMouseOver: function handleLegendMouseOver() {
        this.bringToFront();
        this.highlight();
    },
    bringToFront: function bringToFront() {
        if (this.hcSeries.group) {
            this.hcSeries.group.toFront();
        }
        if (this.hcSeries.trackerGroup) {
            this.hcSeries.trackerGroup.toFront();
        }
    },
    estimateMaxColumnWidths: function estimateMaxColumnWidths(hcChart, leftColData, rightColData) {
        var formatter = new _Formatter2.default(hcChart.renderer);
        var fontSize = hcChart.options.tooltip.style.fontSize.replace('px', '');

        // Use the text in the columns to roughly estimate which column requires more space
        var maxLeftColWidth = -Infinity;

        var maxRightColWidth = -Infinity;

        _underscore2.default.each(leftColData, function (datum) {
            var colWidth = formatter.predictTextWidth(datum, fontSize);
            if (colWidth > maxLeftColWidth) {
                maxLeftColWidth = colWidth;
            }
        });

        _underscore2.default.each(rightColData, function (datum) {
            var colWidth = formatter.predictTextWidth(datum, fontSize);
            if (colWidth > maxRightColWidth) {
                maxRightColWidth = colWidth;
            }
        });

        formatter.destroy();

        return { maxLeftColWidth: maxLeftColWidth, maxRightColWidth: maxRightColWidth };
    },


    // To be overridden by subclasses
    getTooltipRows: function getTooltipRows(info) {
        var rows = [];
        if (info.xAxisIsTime) {
            rows.push([info.xValueDisplay]);
        } else {
            rows.push([info.xAxisName, info.xValueDisplay]);
        }
        rows.push([{ color: info.seriesColor, text: info.seriesName }, info.yValueDisplay]);
        return rows;
    },


    // find a way to send the target series and target point to the handler just like a click event
    getTooltipHtml: function getTooltipHtml(info, hcChart) {
        info.seriesName = this.getName();
        info.seriesColor = this.getColor();

        var normalizeToText = function normalizeToText(cellInfo) {
            return (0, _underscore2.default)(cellInfo).isString() ? cellInfo : cellInfo.text;
        };

        var normalizeToColor = function normalizeToColor(cellInfo) {
            return (0, _underscore2.default)(cellInfo).isString() ? null : cellInfo.color;
        };

        var tooltipRows = this.getTooltipRows(info);
        var maxTooltipWidth = hcChart.chartWidth - 50;
        var leftColData = (0, _underscore2.default)(tooltipRows).map(function (row) {
            return normalizeToText(row[0] || '');
        });
        var rightColData = (0, _underscore2.default)(tooltipRows).map(function (row) {
            return normalizeToText(row[1] || '');
        });
        var colResults = this.estimateMaxColumnWidths(hcChart, leftColData, rightColData);
        var leftColRatio = colResults.maxLeftColWidth / (colResults.maxLeftColWidth + colResults.maxRightColWidth);

        // Make sure one column doesn't completely dominate the other
        if (leftColRatio > 0.9) {
            leftColRatio = 0.9;
        } else if (leftColRatio < 0.1) {
            leftColRatio = 0.1;
        }

        info.scaledMaxLeftColWidth = leftColRatio * maxTooltipWidth + 'px';
        info.scaledMaxRightColWidth = (1 - leftColRatio) * maxTooltipWidth + 'px';
        info.willWrap = colResults.maxLeftColWidth + colResults.maxRightColWidth > maxTooltipWidth;

        return (0, _underscore2.default)(this.tooltipTemplate).template(_jquery2.default.extend(info, {
            rows: tooltipRows,
            normalizeToText: normalizeToText,
            normalizeToColor: normalizeToColor,
            getThemeProperty: _theme.getThemeProperty
        }));
    },


    // stub methods to be overridden as needed by subclasses
    handlePointMouseOut: function handlePointMouseOut() {},
    handleLegendMouseOut: function handleLegendMouseOut() {},
    highlight: function highlight() {},
    unHighlight: function unHighlight() {},


    tooltipTemplate: '\n        <table class="highcharts-tooltip"\n            <% if(willWrap) { %>\n                style="word-wrap: break-word; white-space: normal;"\n            <% } %>>\n            <% _(rows).each(function(row) { %>\n                <tr>\n                    <% if(row.length === 1) { %>\n                        <td style="text-align: left; color: <%= normalizeToColor(row[0]) || getThemeProperty(\'TOOLTIP_FONT_COLOR\') %>;" colpsan="2"><%- normalizeToText(row[0]) %></td>\n                    <% } else { %>\n                        <td style="text-align: left; color: <%= normalizeToColor(row[0]) || getThemeProperty(\'TOOLTIP_FONT_COLOR_SOFT\') %>; max-width: <%= scaledMaxLeftColWidth %>;"><%- normalizeToText(row[0]) %>:&nbsp;&nbsp;</td>\n                        <td style="text-align: right; color: <%= normalizeToColor(row[1]) || getThemeProperty(\'TOOLTIP_FONT_COLOR\') %>; max-width: <%= scaledMaxRightColWidth %>;"><%- normalizeToText(row[1]) %></td>\n                    <% } %>\n                </tr>\n            <% }); %>\n        </table>\n    '
});

Series.Point = Point;

exports.default = Series;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(16);
var ctx = __webpack_require__(54);
var hide = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(61)('keys');
var uid = __webpack_require__(62);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(34);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(39),
    baseLodash = __webpack_require__(41);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

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
/* 43 */
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _color = __webpack_require__(7);

var colorUtils = _interopRequireWildcard(_color);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var baseColors = ['#1e93c6', '#f2b827', '#d6563c', '#6a5c9e', '#31a35f'].map(colorUtils.hexFromColor);

function ColorPalette(colors, useInterpolation) {
    this.setColors(colors);
    this.useInterpolation = parsingUtils.normalizeBoolean(useInterpolation, false);
}

ColorPalette.prototype = {
    setColors: function setColors(colors) {
        this.colors = colors || baseColors;
    },
    getColor: function getColor(field, index, count) {
        var p = void 0;
        var numColors = this.colors.length;

        if (numColors === 0) {
            return 0x000000;
        }
        if (index < 0) {
            index = 0;
        }
        if (!this.useInterpolation) {
            return this.colors[index % numColors];
        }
        if (count < 1) {
            count = 1;
        }
        if (index > count) {
            index = count;
        }
        p = count === 1 ? 0 : (numColors - 1) * (index / (count - 1));
        var index1 = Math.floor(p);
        var index2 = Math.min(index1 + 1, numColors - 1);
        p -= index1;

        return colorUtils.interpolateColors(this.colors[index1], this.colors[index2], p);
    },
    getColorAsRgb: function getColorAsRgb(field, index, count) {
        var hexColor = this.getColor(field, index, count);
        return colorUtils.colorFromHex(hexColor);
    }
};

ColorPalette.setBaseColors = function (newBaseColors) {
    baseColors = newBaseColors.map(colorUtils.hexFromColor);
};

exports.default = ColorPalette;
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("bowser");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/time");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _Formatter = __webpack_require__(10);

var _Formatter2 = _interopRequireDefault(_Formatter);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _dom = __webpack_require__(91);

var domUtils = _interopRequireWildcard(_dom);

var _constants = __webpack_require__(22);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AxisBase(properties) {
    this.properties = properties || {};
    this.id = _underscore2.default.uniqueId('axis_');
    this.isVertical = this.properties['axis.orientation'] === 'vertical';
    this.isZoomed = false;
    this._titleIsDirty = false;
    if (!this.labelRotation) {
        this.labelRotation = this.isVertical ? 0 : parsingUtils.getRotation(this.properties['axisLabels.majorLabelStyle.rotation']);
    }
}

AxisBase.prototype = {
    getZoomed: function getZoomed(newMin, newMax) {
        var axis = this.hcAxis;
        if (axis.hasData()) {
            return newMin !== undefined && newMin > axis.dataMin || newMax !== undefined && newMax < (axis.options.tickmarkPlacement === 'between' ? axis.dataMax : axis.dataMax + 1);
        }
        if (axis.categories && axis.categories.length > 0) {
            return newMin !== undefined && newMin > 0 || newMax !== undefined && newMax < axis.categories.length - 1;
        }
        return undefined;
    },
    clone: function clone() {
        return new this.constructor(_jquery2.default.extend(true, {}, this.properties));
    },
    getConfig: function getConfig() {
        var titleText = null;
        var that = this;
        if (!this.properties['isEmpty'] && this.properties['axisTitle.visibility'] !== 'collapsed' && !!this.properties['axisTitle.text'] && !/^\s+$/.test(this.properties['axisTitle.text'])) {
            titleText = parsingUtils.escapeSVG(this.properties['axisTitle.text']);
        }
        return _jquery2.default.extend(true, this.getOrientationDependentConfig(), {
            id: this.id,
            labels: {
                enabled: this.properties['axisLabels.majorLabelVisibility'] !== 'hide',
                formatter: function formatter() {
                    var formatInfo = this;
                    return that.formatLabel(formatInfo);
                },

                style: {
                    color: this.properties['axis.fontColor'] || _constants.COLORS.DEFAULT_FONT_COLOR,
                    textOverflow: 'none'
                }
            },
            title: {
                style: {
                    color: this.properties['axis.fontColor'] || _constants.COLORS.DEFAULT_FONT_COLOR,
                    fontSize: '12px',
                    // Hack to make sure we can render literal '<' and '>'
                    HcTextStroke: true
                },
                text: titleText
            },
            opposite: this.properties['opposite'],

            lineColor: this.properties['axis.foregroundColorSoft'] || _constants.COLORS.DEFAULT_LINE_COLOR_SOFT,
            lineWidth: this.properties['axisLabels.axisVisibility'] === 'hide' ? 0 : 1,
            gridLineColor: this.properties['axis.foregroundColorSofter'] || _constants.COLORS.DEFAULT_LINE_COLOR_SOFTER,
            gridLineWidth: parsingUtils.normalizeBoolean(this.properties['gridLines.showMajorLines']) ? 1 : 0,

            tickLength: parseInt(this.properties['axisLabels.majorTickSize'], 10) || 6,
            tickColor: this.properties['axis.foregroundColorSoft'] || _constants.COLORS.DEFAULT_LINE_COLOR_SOFT,
            tickWidth: this.properties['axisLabels.majorTickVisibility'] === 'hide' ? 0 : 1,
            tickRenderPostHook: (0, _underscore2.default)(this.tickRenderPostHook).bind(this),
            getOffsetPreHook: (0, _underscore2.default)(this.getOffsetPreHook).bind(this),
            zoomPostHook: (0, _underscore2.default)(this.zoomPostHook).bind(this),
            getLabelSizeOverride: (0, _underscore2.default)(this.getLabelSizeOverride).bind(this)
        });
    },
    zoomPostHook: function zoomPostHook(axis, newMin, newMax) {
        this.isZoomed = this.getZoomed(newMin, newMax);
        // Prevent Highcharts from display the reset zoom button, since we have our own custom version.
        axis.displayBtn = false;
    },
    getOrientationDependentConfig: function getOrientationDependentConfig() {
        if (this.isVertical) {
            return _jquery2.default.extend(true, {}, this.BASE_VERT_CONFIG, this.getVerticalConfig());
        }
        return _jquery2.default.extend(true, {}, this.BASE_HORIZ_CONFIG, this.getHorizontalConfig());
    },
    onChartLoad: function onChartLoad() {},
    redraw: function redraw(redrawChart) {
        if (!this.hcAxis) {
            throw new Error('cannot redraw an axis that has not been drawn yet');
        }
        if (this.titleIsDirty()) {
            this.hcAxis.setTitle({ text: this.properties['axisTitle.text'] }, redrawChart);
        }
    },
    titleIsDirty: function titleIsDirty() {
        return this._titleIsDirty;
    },
    setTitle: function setTitle(title) {
        this.previousAxisTitle = this.properties['axisTitle.text'];
        this.properties['axisTitle.text'] = title;

        if (!_underscore2.default.isEqual(this.properties['axisTitle.text'], this.previousAxisTitle)) {
            this._titleIsDirty = true;
        }
    },
    onChartLoadOrRedraw: function onChartLoadOrRedraw(chart) {
        this.hcAxis = chart.get(this.id);
        this.initializeTicks();
        this._titleIsDirty = false;
    },


    // convert the ticks to an array in ascending order by 'pos'
    initializeTicks: function initializeTicks() {
        var key = void 0;
        var ticks = this.hcAxis.ticks;
        var tickArray = [];

        // eslint-disable-next-line no-restricted-syntax
        for (key in ticks) {
            // eslint-disable-next-line no-prototype-builtins
            if (ticks.hasOwnProperty(key)) {
                tickArray.push(ticks[key]);
            }
        }
        tickArray.sort(function (t1, t2) {
            return t1.pos - t2.pos;
        });
        this.ticks = tickArray;
    },
    tickRenderPostHook: function tickRenderPostHook(tick) {
        // the purpose of this function is to show or hide data label
        // to prevent long label text or label close to the chart's boundary to overflow
        // https://confluence.splunk.com/display/~ftan/Splunk-charting+axis+label+overflow+calculation
        var axis = tick.axis;

        // If the tick has no label, then overflow calculations are not needed.
        if (!tick.label) {
            return;
        }

        // If there's only one tick, show it.
        // other conditions could refer to
        // https://confluence.splunk.com/display/~ftan/Splunk-charting+axis+label+overflow+calculation
        // Use early return to avoid calculation cost
        if (tick.isFirst && tick.isLast || !tick.isFirst && !tick.isLast || tick.isFirst && (axis.horiz || axis.reversed) || tick.isLast && !axis.horiz && !axis.reversed) {
            domUtils.showTickLabel(tick);
            return;
        }

        var tolerancePixel = 1;
        // allow 1 pixel or less slightly overflow the axis's boundary
        var isOutOfBoundary = false;
        if (axis.horiz && axis.reversed) {
            var boundaryPixelX = axis.left - tolerancePixel;
            var labelExtremesPixelX = this.getTickLabelExtremesX(tick)['left'];
            isOutOfBoundary = boundaryPixelX > labelExtremesPixelX;
        } else if (axis.horiz && !axis.reversed) {
            var _boundaryPixelX = axis.left + axis.len + tolerancePixel;
            var _labelExtremesPixelX = this.getTickLabelExtremesX(tick)['right'];
            isOutOfBoundary = _labelExtremesPixelX > _boundaryPixelX;
        } else {
            var boundaryPixelY = axis.top + axis.len + tolerancePixel;
            var labelExtremesPixelY = this.getTickLabelExtremesY(tick)['bottom'];
            isOutOfBoundary = labelExtremesPixelY > boundaryPixelY;
        }

        if (isOutOfBoundary) {
            domUtils.hideTickLabel(tick);
            return;
        }

        // Make sure that previously hidden label will be re-shown if it shifts position (e.g. while panning)
        domUtils.showTickLabel(tick);
    },
    getOffsetPreHook: function getOffsetPreHook(axis) {
        if (axis.userOptions.title.text) {
            var chart = axis.chart;
            var formatter = new _Formatter2.default(chart.renderer);
            var axisTitle = axis.userOptions.title.text;
            var fontSize = 12;
            var elidedTitle = void 0;

            if (axis.horiz) {
                elidedTitle = formatter.ellipsize(axisTitle, chart.chartWidth - 100, fontSize, {
                    fontWeight: 'bold'
                });
            } else {
                elidedTitle = formatter.ellipsize(axisTitle, chart.chartHeight - 100, fontSize, {
                    fontWeight: 'bold'
                });
            }

            axis.options.title.text = elidedTitle;
            if (axis.axisTitle) {
                axis.axisTitle.attr({ text: elidedTitle });
            }

            formatter.destroy();
        }
    },
    hasTickmarksBetween: function hasTickmarksBetween() {
        return this.properties['axisLabels.tickmarkPlacement'] === 'between';
    },
    getTickLabelExtremesX: function getTickLabelExtremesX(tick) {
        var bBox = tick.label.getBBox();
        var alignment = tick.axis.labelAlign;
        var labelX = tick.label.xy.x;
        var labelSize = bBox.width;

        var leftSide = void 0;
        if (alignment === 'left') {
            leftSide = labelX;
        } else if (alignment === 'center') {
            leftSide = labelX - labelSize * 0.5;
        } else {
            leftSide = labelX - labelSize;
        }
        return { left: leftSide, right: leftSide + labelSize };
    },
    getTickLabelExtremesY: function getTickLabelExtremesY(tick) {
        var labelBottom = tick.label.xy.y;
        return { top: labelBottom - tick.label.getBBox().height, bottom: labelBottom };
    },


    // An override of the Highcharts routine for determining a label size perpendicular to its axis,
    // which is used to set axis margins.
    getLabelSizeOverride: function getLabelSizeOverride(tick) {
        if (!tick.label) {
            return 0;
        }
        var isHoriz = this.properties['axis.orientation'] === 'horizontal';
        tick.labelBBox = tick.label.getBBox();
        // If this is the last visible tick of a horizontal axis of an area/line chart, then
        // the tick label is not visible (only the tick mark is rendered) so we return 0.
        if (isHoriz && this.properties['axisLabels.tickmarkPlacement'] === 'on' && tick.isLast && !tick.isFirst) {
            return 0;
        }
        return tick.labelBBox[isHoriz ? 'height' : 'width'];
    },
    destroy: function destroy() {
        this.hcAxis = null;
    },
    getVerticalConfig: function getVerticalConfig() {
        return {};
    },
    getHorizontalConfig: function getHorizontalConfig() {
        return {
            labels: {
                rotation: this.labelRotation
            }
        };
    },


    BASE_HORIZ_CONFIG: {
        title: {
            margin: 6
        },
        labels: {
            y: 15
        }
    },

    BASE_VERT_CONFIG: {
        title: {
            margin: 6
        }
    },

    CROSSHAIR_CONFIG: {
        snap: false,
        color: '#cccccc',
        width: 1,
        zIndex: 10000 // arbitrarily high zIndex to ensure we are above all content
    }
};

exports.default = AxisBase;
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _i18n = __webpack_require__(12);

var _i18n2 = _interopRequireDefault(_i18n);

var _Formatter = __webpack_require__(10);

var _Formatter2 = _interopRequireDefault(_Formatter);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _lang = __webpack_require__(2);

var langUtils = _interopRequireWildcard(_lang);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

var _format = __webpack_require__(191);

var formatNumberUtils = _interopRequireWildcard(_format);

var _highcharts = __webpack_require__(8);

var _highcharts2 = _interopRequireDefault(_highcharts);

var _Axis = __webpack_require__(48);

var _Axis2 = _interopRequireDefault(_Axis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NumericAxis(properties) {
    _Axis2.default.call(this, properties);
    // SPL-72638, always include zero if the axis has log scale
    this.includeZero = this.determineIncludeZero();
    this.hasExplicitMin = this.validateNumericProperty('axis.minimumNumber');
    this.hasExplicitMax = this.validateNumericProperty('axis.maximumNumber');
    this.hasExplicitMajorUnit = this.validateNumericProperty('axisLabels.majorUnit');

    this.extendAxisRange = !_underscore2.default.isUndefined(this.properties['axisLabels.extendsAxisRange']) ? parsingUtils.normalizeBoolean(this.properties['axisLabels.extendsAxisRange'], true) : true;

    this.startOnTick = this.hasExplicitMin ? false : this.extendAxisRange;
    this.endOnTick = this.hasExplicitMax ? false : this.extendAxisRange;

    if (properties) {
        this.sharedMin = properties.sharedMin;
        this.sharedMax = properties.sharedMax;
        this.abbreviation = properties['axis.abbreviation'];
    }
}

langUtils.inherit(NumericAxis, _Axis2.default);
_jquery2.default.extend(NumericAxis.prototype, {
    getConfig: function getConfig() {
        var config = _Axis2.default.prototype.getConfig.call(this);
        var showMinorTicks = this.properties['axisLabels.minorTickVisibility'] === 'show';
        var showMinorGridLines = parsingUtils.normalizeBoolean(this.properties['gridLines.showMinorLines']);

        _jquery2.default.extend(true, config, {
            tickInterval: this.properties['isEmpty'] && this.properties['axis.scale'] === 'log' ? 10 : this.properties['isEmpty'] ? 10 : parseFloat(this.properties['axisLabels.majorUnit']) || null,
            endOnTick: this.endOnTick,
            startOnTick: this.startOnTick,
            tickWidth: this.properties['axisLabels.majorTickVisibility'] === 'show' ? 1 : 0,

            allowDecimals: !parsingUtils.normalizeBoolean(this.properties['axisLabels.integerUnits']),

            minorTickColor: this.properties['axis.foregroundColorSoft'],
            minorTickLength: parseInt(this.properties['axisLabels.minorTickSize'], 10) || 10,
            minorTickInterval: showMinorTicks || showMinorGridLines ? 'auto' : null,
            minorTickWidth: showMinorTicks ? 1 : 0,
            minorGridLineWidth: showMinorGridLines ? 1 : 0,
            // FIXME: clear min/max up so that reader can understand why we check for 'isEmpty'
            min: this.properties['isEmpty'] ? 0 : null,
            max: this.properties['isEmpty'] && this.properties['axis.scale'] === 'log' ? 2 : this.properties['isEmpty'] ? 100 : null,
            // Override superclass behavior because gridlines are shown by default for numeric axes
            gridLineWidth: parsingUtils.normalizeBoolean(this.properties['gridLines.showMajorLines'], true) ? 1 : 0,
            setTickIntervalPreHook: (0, _underscore2.default)(this.setTickIntervalPreHook).bind(this),
            labels: {
                maxStaggerLines: 1
            },
            lineWidth: this.properties['axisLabels.axisVisibility'] === 'show' ? 1 : 0
        });

        this.addMinAndMaxToConfig(config);
        return config;
    },
    validateNumericProperty: function validateNumericProperty(propName) {
        var value = this.properties[propName];
        // Zero is the only falsy value that is a valid numeric property value, so get that out of the way.
        if (value === 0) {
            return true;
        }
        return !!value && !_underscore2.default.isNaN(parseFloat(value));
    },
    addMinAndMaxToConfig: function addMinAndMaxToConfig(config) {
        var min = this.hasExplicitMin ? parseFloat(this.properties['axis.minimumNumber']) : !_underscore2.default.isUndefined(this.sharedMin) ? this.sharedMin : -Infinity;

        var max = this.hasExplicitMax ? parseFloat(this.properties['axis.maximumNumber']) : !_underscore2.default.isUndefined(this.sharedMax) ? this.sharedMax : Infinity;

        if (min > max) {
            var temp = min;
            min = max;
            max = temp;
        }
        if (min > -Infinity) {
            this.addMinToConfig(config, min, this.includeZero);
        }
        if (max < Infinity) {
            this.addMaxToConfig(config, max, this.includeZero);
        }
    },
    addMinToConfig: function addMinToConfig(config, min, includeZero) {
        if (includeZero && min > 0) {
            min = 0;
        } else if (this.isLogScale()) {
            min = mathUtils.absLogBaseTen(min);
        }
        config.min = min;
        config.minPadding = 0;
        config.startOnTick = this.startOnTick;
    },
    addMaxToConfig: function addMaxToConfig(config, max, includeZero) {
        if (includeZero && max < 0) {
            max = 0;
        } else if (this.isLogScale()) {
            max = mathUtils.absLogBaseTen(max);
        }
        config.max = max;
        config.maxPadding = 0;
        config.endOnTick = this.endOnTick;
    },
    getVerticalConfig: function getVerticalConfig() {
        var config = _Axis2.default.prototype.getVerticalConfig.call(this);

        var tickSizeOffset = parseInt(this.properties['axisLabels.majorTickSize'], 10) || 0;
        var xDelta = tickSizeOffset + 6;
        return _jquery2.default.extend(true, config, {
            labels: {
                x: this.properties['opposite'] === true ? xDelta : -xDelta,
                y: 4
            }
        });
    },
    getHorizontalConfig: function getHorizontalConfig() {
        var config = _Axis2.default.prototype.getHorizontalConfig.call(this);
        var tickSizeOffset = parseInt(this.properties['axisLabels.majorTickSize'], 10) || 0;
        var xDelta = null;
        var yDelta = null;
        var alignment = void 0;

        // NOTE: Deltas are set here based on experimentation,
        // this code relies on the fact that fontSize for Numeric Axes
        // does not change.
        if (this.labelRotation === -45) {
            alignment = 'right';
            xDelta = 5;
            yDelta = 10;
        } else if (this.labelRotation === -90) {
            alignment = 'right';
            xDelta = 4;
            yDelta = 6;
        } else if (this.labelRotation === 45) {
            alignment = 'left';
            xDelta = 0;
            yDelta = 10;
        } else if (this.labelRotation === 90) {
            alignment = 'left';
            xDelta = -4;
            yDelta = 6;
        } else {
            alignment = 'center';
            yDelta = 14;
        }

        return _jquery2.default.extend(true, config, {
            labels: {
                align: alignment,
                x: xDelta,
                y: this.properties['opposite'] === true ? -6 - tickSizeOffset // Measurements are a little different on the opposite side
                : yDelta + tickSizeOffset
            }
        });
    },
    formatLabel: function formatLabel(info) {
        if (this.isLogScale() && this.properties['stackMode'] !== 'stacked100') {
            if (this.abbreviation === 'auto') {
                return formatNumberUtils.abbreviateNumber(mathUtils.absPowerTen(info.value));
            }
            return NumericAxis.formatNumber(mathUtils.absPowerTen(info.value));
        }
        // we only want to abbreviate the labels if the maximum is equal or greater to 1000
        var max = Math.max(info.axis.max, Math.abs(info.axis.min));
        if (this.abbreviation === 'auto' && max >= 1000) {
            // special case: we set the decimal to 0, when there is only 1 tick
            // we want to calculated the number of decimals to retain in order to preserve precision
            var decimal = info.axis.tickPositions.length === 1 ? 0 : this.calculateDecimal(max, info.axis.tickInterval.toString());
            // we get the unit of the maximum value on the scale to standardize by
            var unit = formatNumberUtils.getSIUnit(max);
            return formatNumberUtils.abbreviateByUnit(info.value, unit, decimal);
        }
        return NumericAxis.formatNumber(info.value);
    },
    calculateDecimal: function calculateDecimal(max, tickInterval) {
        if (!max || !tickInterval) {
            return 0;
        }
        // calculate the number of decimals we need to round to
        // by counting how many significant digits of the tickInterval that are being cutoff by the SI suffix that we are abbreviatiing to

        // number of trailing zeros in the tickInterval
        var zeros = tickInterval.length - tickInterval.replace(/0+$/, '').length;
        // number of digits we are cutting by approximating
        var power = formatNumberUtils.getSIPower(max);
        // the difference of the two; the number of decimals we want to keep to maintain precision
        var decimal = power - zeros;
        if (decimal < 0) {
            return 0;
        }
        return decimal;
    },
    formatValue: function formatValue(value) {
        // handle the edge case where the value is not a valid number but the nullValueMode property has rendered it as a zero
        var formatted = NumericAxis.formatNumber(value);
        return formatted !== 'NaN' ? formatted : _i18n2.default.format_decimal('0');
    },
    isLogScale: function isLogScale() {
        return this.properties['axis.scale'] === 'log';
    },


    /**
     * Get actual extremes for axis, most of the code is copied from highcharts.Axis.setTickInterval
     * @param {*} axis
     */
    getExtremes: function getExtremes(axis) {
        var options = axis.options;
        var hardMin = _highcharts2.default.pick(axis.userMin, options.min);
        var hardMax = _highcharts2.default.pick(axis.userMax, options.max);
        var softThreshold = axis.softThreshold;
        var threshold = axis.threshold;
        var thresholdMin = void 0;
        var thresholdMax = void 0;
        // Adjust to hard threshold
        if (!softThreshold && _highcharts2.default.defined(threshold)) {
            if (axis.dataMin >= threshold) {
                thresholdMin = threshold;
            } else if (axis.dataMax <= threshold) {
                thresholdMax = threshold;
            }
        }
        var extremes = {
            dataMin: axis.dataMin,
            dataMax: axis.dataMax,
            min: _highcharts2.default.pick(options.min, hardMin, thresholdMin, axis.dataMin),
            max: _highcharts2.default.pick(options.max, hardMax, thresholdMax, axis.dataMax)
        };
        return extremes;
    },
    setTickIntervalPreHook: function setTickIntervalPreHook(axis) {
        var options = axis.options;
        var extremes = this.getExtremes(axis);
        var chart = axis.chart;

        if (!this.properties['isEmpty']) {
            var formatter = new _Formatter2.default(chart.renderer);
            var tickInterval = void 0;
            // if we can't read a tickInterval from the options, estimate it from the tick pixel interval

            var range = Math.abs(extremes.max - extremes.min);

            if (this.isVertical) {
                tickInterval = options.tickInterval || options.tickPixelInterval / chart.plotHeight * range;
            } else {
                tickInterval = options.tickInterval || options.tickPixelInterval / chart.plotWidth * range;
            }

            if (this.isLogScale()) {
                if (_underscore2.default.isNumber(extremes.min) && _underscore2.default.isNumber(extremes.max) && extremes.min >= 0 && extremes.max < 1) {
                    options.tickPositions = [0, mathUtils.absLogBaseTen(0.01), mathUtils.absLogBaseTen(0.1), mathUtils.absLogBaseTen(1)];
                } else {
                    // SPL-72638, always use tick interval of 1 if the axis has log scale, since we will force the axis to start at zero
                    options.tickInterval = 1;
                }
            } else {
                this.checkMajorUnitFit(tickInterval, extremes, options, formatter, chart);
            }

            if (this.includeZero) {
                this.enforceIncludeZero(options, extremes);
            } else {
                this.adjustAxisRange(options, extremes, tickInterval);
            }

            if (options.allowDecimals !== false) {
                this.enforceIntegerMajorUnit(options, extremes);
            }
            formatter.destroy();
        } else {
            this.handleNoData(options);
        }
    },
    checkMajorUnitFit: function checkMajorUnitFit(unit, extremes, options, formatter, chart) {
        var range = Math.abs(extremes.max - extremes.min);
        var axisLength = this.isVertical ? chart.plotHeight : chart.plotWidth;
        var tickSpacing = unit * axisLength / range;
        var largestExtreme = Math.max(Math.abs(extremes.min), Math.abs(extremes.max));
        var tickLabelPadding = this.isVertical ? 5 : 15;
        var fontSize = parseInt(options.labels.style.fontSize.split('px')[0], 10);

        var getTickInterval = function getTickInterval(labelSize) {
            return labelSize * range / axisLength;
        };

        if (this.isVertical) {
            var maxHeight = formatter.predictTextHeight(this.formatValue(largestExtreme), fontSize);
            if (tickSpacing < maxHeight + 2 * tickLabelPadding) {
                options.tickInterval = Math.ceil(getTickInterval(maxHeight + 2 * tickLabelPadding));
            }
        } else {
            var maxWidth = formatter.predictTextWidth(this.formatValue(largestExtreme), fontSize) + 2 * tickLabelPadding;
            if (tickSpacing < maxWidth || tickSpacing > 2 * maxWidth) {
                var tickInterval = getTickInterval(maxWidth);
                // eslint-disable-next-line no-restricted-properties
                var magnitude = Math.pow(10, Math.floor(Math.log(tickInterval) / Math.LN10));

                options.tickInterval = this.fitTickIntervalToWidth(tickInterval, null, magnitude, options.allowDecimals);
            }
        }
    },
    determineIncludeZero: function determineIncludeZero() {
        if (parsingUtils.normalizeBoolean(this.properties['axis.includeZero'])) {
            return true;
        }
        // SPL-72638, always include zero if the axis has log scale, unless the user has explicitly set a min or max that contradicts
        if (this.isLogScale()) {
            var userMin = parseFloat(this.properties['axis.minimumNumber']);
            var userMax = parseFloat(this.properties['axis.maximumNumber']);

            if ((_underscore2.default.isNaN(userMin) || userMin <= 0) && (_underscore2.default.isNaN(userMax) || userMax >= 0)) {
                return true;
            }
        }
        return false;
    },
    enforceIncludeZero: function enforceIncludeZero(options, extremes) {
        // if there are no extremes (i.e. no meaningful data was extracted), go with 0 to 100
        if (!extremes.min && !extremes.max) {
            this.handleNoData(options);
            return;
        }
        if (extremes.min >= 0) {
            options.min = 0;
            options.minPadding = 0;
        } else if (extremes.max <= 0) {
            options.max = 0;
            options.maxPadding = 0;
        }
    },


    // clean up various issues that can arise from the axis extremes
    adjustAxisRange: function adjustAxisRange(options, extremes, tickInterval) {
        // this method will add artificial min/max values that did not come from the user
        // clear them here so that each run will do the right thing
        if (!this.hasExplicitMin && _underscore2.default.isUndefined(this.sharedMin)) {
            delete options.min;
        }
        if (!this.hasExplicitMax && _underscore2.default.isUndefined(this.sharedMax)) {
            delete options.max;
        }
        // if there are no extremes (i.e. no meaningful data was extracted), go with 0 to 100
        if (!extremes.dataMin && !extremes.dataMax && !this.hasExplicitMax && !this.hasExplicitMin) {
            this.handleNoData(options);
            return;
        }
        // if the min or max is such that no data makes it onto the chart, we hard-code some reasonable extremes
        if (extremes.min > extremes.dataMax && extremes.min > 0 && !this.hasExplicitMax) {
            options.max = this.isLogScale() ? extremes.min + 2 : extremes.min * 2;
            return;
        }
        if (extremes.max < extremes.dataMin && extremes.max < 0 && !this.hasExplicitMin) {
            options.min = this.isLogScale() ? extremes.max - 2 : extremes.max * 2;
            return;
        }
        // if either data extreme within one tick interval of zero,
        // remove the padding on that side so the axis doesn't extend beyond zero
        if (extremes.dataMin >= 0 && extremes.dataMin <= tickInterval) {
            if (!this.hasExplicitMin) {
                options.min = 0;
            }
            options.minPadding = 0;
        }
        if (extremes.dataMax <= 0 && extremes.dataMax >= -1 * tickInterval) {
            if (!this.hasExplicitMax) {
                options.max = 0;
            }
            options.maxPadding = 0;
        }
    },
    handleNoData: function handleNoData(axisOptions) {
        var logScale = this.isLogScale();
        axisOptions.min = !_underscore2.default.isUndefined(this.sharedMin) ? this.sharedMin : 0;
        axisOptions.max = !_underscore2.default.isUndefined(this.sharedMax) ? this.sharedMax : logScale ? 2 : 100;
        if (logScale) {
            axisOptions.tickInterval = 1;
        }
    },
    enforceIntegerMajorUnit: function enforceIntegerMajorUnit(options, extremes) {
        var range = extremes.max - extremes.min;
        // if the axis range is ten or greater, require that the major unit be an integer
        if (range >= 10) {
            options.allowDecimals = false;
        }
    },


    // This is a custom version of Highcharts' normalizeTickInterval method. For some reason, Highcharts
    // wasn't collapsing axis tick intervals early enough (SPL-72905), so we elected to choose one multiple
    // higher than what they would have recommended (e.g. choose 5,000,000 instead of 2,500,000).
    fitTickIntervalToWidth: function fitTickIntervalToWidth(interval, multiples, magnitude, allowDecimals) {
        var normalized = interval / magnitude;

        if (!multiples) {
            multiples = [1, 2, 2.5, 5, 10, 20];
            // the allowDecimals option
            if (allowDecimals === false) {
                if (magnitude === 1) {
                    multiples = [1, 2, 5, 10];
                } else if (magnitude <= 0.1) {
                    multiples = [1 / magnitude];
                }
            }
        }

        if (multiples.length === 1) {
            interval = multiples[0];
        } else {
            // normalize the interval to the nearest multiple
            for (var i = 0; i < multiples.length - 1; i++) {
                interval = multiples[i];
                if (normalized <= (multiples[i] + (multiples[i + 1] || multiples[i])) / 2) {
                    interval = multiples[i + 1];
                    break;
                }
            }
        }

        // multiply back to the correct magnitude
        interval *= magnitude;
        if (this.hasExplicitMajorUnit) {
            return Math.max(mathUtils.parseFloat(this.properties['axisLabels.majorUnit']), interval);
        }
        return interval;
    }
});

_jquery2.default.extend(NumericAxis, {
    formatNumber: function formatNumber(value) {
        value = mathUtils.parseFloat(value);
        var absValue = Math.abs(value);
        if (absValue > 0 && absValue < 0.000001) {
            return _i18n2.default.format_scientific(value, '#.###E0');
        }

        // Hackery to avoid floating point errors...
        // First calculate the decimal precision needed to display the number, then add that many characters after
        // the decimal point to the number format.  Then add a small number to the value, which will be truncated
        // by the formatting logic but prevents a round-down due to floating point errors.
        var precision = mathUtils.getDecimalPrecision(value);

        var numberFormat = '#,##0.';

        (0, _underscore2.default)(precision).times(function () {
            numberFormat += '#';
        });
        // eslint-disable-next-line no-restricted-properties
        value += Math.pow(10, -1 * precision - 1);
        return _i18n2.default.format_decimal(value, numberFormat);
    }
});

exports.default = NumericAxis;
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(196)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/@splunk/css-loader/lib/index.js??ref--0-1!./button-styles.css", function() {
			var newContent = require("!!../../../../node_modules/@splunk/css-loader/lib/index.js??ref--0-1!./button-styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _highcharts = __webpack_require__(8);

var _highcharts2 = _interopRequireDefault(_highcharts);

var _lang = __webpack_require__(2);

var _Series = __webpack_require__(29);

var _Series2 = _interopRequireDefault(_Series);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ManyShapeOptimizedSeries(properties) {
    _Series2.default.call(this, properties);
}
(0, _lang.inherit)(ManyShapeOptimizedSeries, _Series2.default);

_jquery2.default.extend(ManyShapeOptimizedSeries.prototype, {
    CHARTING_PROPERTY_WHITELIST: _underscore2.default.union(['seriesSpacing'], _Series2.default.prototype.CHARTING_PROPERTY_WHITELIST),

    DEFAULT_COLUMN_SPACING: 0.01,
    DEFAULT_COLUMN_GROUP_SPACING: 0.05,
    DEFAULT_BAR_SPACING: 0.02,
    DEFAULT_BAR_GROUP_SPACING: 0.05,

    getConfig: function getConfig() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _jquery2.default.extend(true, {}, _Series2.default.prototype.getConfig.apply(this, args), {
            lineWidth: 0,
            states: {
                hover: {
                    lineWidthPlus: 0
                }
            },
            drawGraphOverride: (0, _underscore2.default)(this.drawGraphOverride).bind(this),
            drawTrackerOverride: (0, _underscore2.default)(this.drawTrackerOverride).bind(this),
            drawPointsOverride: (0, _underscore2.default)(this.drawPointsOverride).bind(this),
            getGraphPathOverride: (0, _underscore2.default)(this.getGraphPathOverride).bind(this),
            getValidPointsOverride: (0, _underscore2.default)(this.getValidPointsOverride).bind(this)
        });
    },


    // Normally drawGraph would be a no-op for a column/bar/scatter series, with each point being drawn with its own SVG element in drawPoints.
    // We are instead drawing the entire series as one discontinuous path element, so we bypass the no-op behavior.
    drawGraphOverride: function drawGraphOverride(series) {
        // This tells Highcharts not to assume a 1:1 correspondence between points and SVG elements for the purposes of pointer events.
        // With this set to false, Highcharts will compute the currently hovered point based on the pointer location.
        series.directTouch = false;
        // This tells Highcarts to fill in the path element that shows the series, instead of just drawing the outline.
        series.fillGraph = true;
        _highcharts2.default.Series.prototype.drawGraph.call(series);
    },


    // A consequence of disabling direct touch above is that Highcharts will ignore points that are outside the chart area
    // (e.g. clipped by an explicit y-axis min or max).  This override tells Highcharts to consider those points for hover effects.
    getValidPointsOverride: function getValidPointsOverride(series, points /* insideOnly */) {
        return _highcharts2.default.Series.prototype.getValidPoints.call(series, points, false);
    },


    // All series graphics are drawn with drawGraph above, so drawPoints becomes a no-op.
    drawPointsOverride: function drawPointsOverride() {},


    // The tracker is a layer of invisble SVG elements that capture pointer events for a series.
    // We are hijacking the behavior of a Highcharts area series, which draws a tracker with a single path element based on the
    // path used to draw the visible series.
    drawTrackerOverride: function drawTrackerOverride(series) {
        series.areaPath = series.graphPath;
        _highcharts2.default.seriesTypes.area.prototype.drawTracker.call(series);
    },


    // getGraphPath is called internally by drawGraph, the path definition returned is what will be rendered for the series.
    getGraphPathOverride: function getGraphPathOverride(series) {
        var path = [];
        (0, _underscore2.default)(series.points).each(function (point) {
            var shapeArgs = point.shapeArgs;
            var x = shapeArgs.x || 0;
            var y = shapeArgs.y || 0;
            var width = shapeArgs.width || 0;
            var height = shapeArgs.height || 0;

            path.push('M', x, y, 'L', x + width, y, 'L', x + width, y + height, 'L', x, y + height, 'Z');
        });
        series.graphPath = path;
        return path;
    },
    destroy: function destroy() {
        this.unSelectPoint();
        _Series2.default.prototype.destroy.call(this);
    },
    handlePointMouseOver: function handlePointMouseOver(point) {
        _Series2.default.prototype.handlePointMouseOver.call(this, point);
        this.unHighlight();
        this.selectPoint(point);
    },
    handlePointMouseOut: function handlePointMouseOut(point) {
        _Series2.default.prototype.handlePointMouseOut.call(this, point);
        this.highlight();
        this.unSelectPoint();
    },
    highlight: function highlight() {
        _Series2.default.prototype.highlight.call(this);
        if (!this.hcSeries || !this.hcSeries.graph) {
            return;
        }
        var seriesColor = this.getColor();
        this.hcSeries.graph.attr({ fill: seriesColor, 'stroke-width': 0 });
    },
    unHighlight: function unHighlight() {
        _Series2.default.prototype.unHighlight.call(this);
        this.unSelectPoint();
        if (!this.hcSeries.graph) {
            return;
        }
        this.hcSeries.graph.attr({
            fill: this.UNHIGHLIGHTED_COLOR,
            stroke: this.UNHIGHLIGHTED_BORDER_COLOR,
            'stroke-width': 1
        });
    },
    selectPoint: function selectPoint(point) {
        var matchingPoint = this.hcSeries.data[point.index];
        var shapeArgs = matchingPoint.shapeArgs;
        var renderer = this.hcSeries.chart.renderer;
        var seriesGroup = this.hcSeries.group;

        this.selectedPointGraphic = renderer.rect(shapeArgs.x, shapeArgs.y, shapeArgs.width, shapeArgs.height).attr({ fill: this.getColor(), zIndex: 1 }).add(seriesGroup);
    },
    unSelectPoint: function unSelectPoint() {
        if (this.selectedPointGraphic) {
            this.selectedPointGraphic.destroy();
            this.selectedPointGraphic = null;
        }
    },
    computeColumnSpacing: function computeColumnSpacing(str) {
        var value = parseFloat(str);
        if ((0, _underscore2.default)(value).isNaN()) {
            return this.DEFAULT_COLUMN_SPACING;
        }
        return value * this.DEFAULT_COLUMN_SPACING;
    },
    computeColumnGroupSpacing: function computeColumnGroupSpacing(str) {
        var value = parseFloat(str);
        if ((0, _underscore2.default)(value).isNaN()) {
            return this.DEFAULT_COLUMN_GROUP_SPACING;
        }
        return this.DEFAULT_COLUMN_GROUP_SPACING * (1 + value);
    },
    computeBarSpacing: function computeBarSpacing(str) {
        var value = parseFloat(str);
        if ((0, _underscore2.default)(value).isNaN()) {
            return this.DEFAULT_BAR_SPACING;
        }
        return value * this.DEFAULT_BAR_SPACING;
    },
    computeBarGroupSpacing: function computeBarGroupSpacing(str) {
        var value = parseFloat(str);
        if ((0, _underscore2.default)(value).isNaN()) {
            return this.DEFAULT_BAR_GROUP_SPACING;
        }
        return this.DEFAULT_BAR_GROUP_SPACING * (1 + value);
    }
});

exports.default = ManyShapeOptimizedSeries;
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _highcharts = __webpack_require__(8);

var _highcharts2 = _interopRequireDefault(_highcharts);

var _i18n = __webpack_require__(12);

var _i18n2 = _interopRequireDefault(_i18n);

var _Formatter = __webpack_require__(10);

var _Formatter2 = _interopRequireDefault(_Formatter);

var _lang = __webpack_require__(2);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _testing = __webpack_require__(89);

var testingUtils = _interopRequireWildcard(_testing);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

var _color = __webpack_require__(7);

var colorUtils = _interopRequireWildcard(_color);

var _Visualization = __webpack_require__(90);

var _Visualization2 = _interopRequireDefault(_Visualization);

var _ColorPalette = __webpack_require__(45);

var _ColorPalette2 = _interopRequireDefault(_ColorPalette);

var _constants = __webpack_require__(22);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Gauge(container, properties) {
    _Visualization2.default.call(this, container, properties);
    // for consistency with other chart types, create a <div> inside this container where the gauge will draw
    this.$hcContainer = (0, _jquery2.default)('<div />').addClass('highcharts-container').appendTo(this.container);
    this.elements = {};
    this.hasRendered = false;
    this.needsRedraw = true;
}
(0, _lang.inherit)(Gauge, _Visualization2.default);

_jquery2.default.extend(Gauge.prototype, {
    WINDOW_RESIZE_DELAY: 100,

    EXPORT_HEIGHT: 400,
    EXPORT_WIDTH: 600,

    MIN_GAUGE_HEIGHT: 25,
    RESIZED_GAUGE_HEIGHT: 200,

    DEFAULT_COLORS: [colorUtils.hexFromColor(_constants.COLORS.SEMANTIC_SUCCESS), colorUtils.hexFromColor(_constants.COLORS.SEMANTIC_WARNING), colorUtils.hexFromColor(_constants.COLORS.SEMANTIC_ERROR)],
    DEFAULT_RANGES: [0, 30, 70, 100],
    MAX_TICKS_PER_RANGE: 10,

    showValueByDefault: true,
    showMinorTicksByDefault: true,

    getFieldList: function getFieldList() {
        return [];
    },


    // in export mode we need to set explicit width and height
    // we'll honor the width and height of the parent node, unless they are zero
    getWidth: function getWidth() {
        var width = _Visualization2.default.prototype.getWidth.call(this);
        if (this.exportMode) {
            return width || this.EXPORT_WIDTH;
        }
        return width;
    },
    getHeight: function getHeight() {
        var height = _Visualization2.default.prototype.getHeight.call(this);
        if (this.exportMode) {
            return height || this.EXPORT_HEIGHT;
        }
        // Fix for SPL-61657 - make sure the height of the gauge div can't be below a certain threshold
        height = height < this.MIN_GAUGE_HEIGHT ? this.RESIZED_GAUGE_HEIGHT : height;
        return height;
    },
    prepare: function prepare(dataSet, properties) {
        var oldRanges = _jquery2.default.extend([], this.ranges);
        _Visualization2.default.prototype.prepare.call(this, dataSet, properties);
        if (!parsingUtils.arraysAreEquivalent(oldRanges, this.ranges)) {
            this.needsRedraw = true;
        }
    },
    handleDraw: function handleDraw(callback) {
        if (this.needsRedraw) {
            this.teardownGauge();
            this.renderer = new _highcharts2.default.Renderer(this.$hcContainer[0], this.getWidth(), this.getHeight());
            this.renderer.setStyle({
                fontFamily: _constants.FONT_FAMILY,
                fontSize: _constants.FONT_SIZE
            });
            this.formatter = new _Formatter2.default(this.renderer);
            this.$container.css('backgroundColor', this.backgroundColor);
            this.renderGauge();
            this.hasRendered = true;
            if (this.testMode) {
                testingUtils.gaugeAddTestingMetadata(this, this.elements, this.getClassName(), this.value);
                testingUtils.createGlobalReference(this, this.getChartObject());
            }
            this.needsRedraw = false;
            this.cacheDrawnDimensions();
        } else {
            this.updateValue(this.previousValue || 0, this.value);
        }
        callback(this);
    },
    setSize: function setSize(width, height) {
        if (!this.hasRendered) {
            return;
        }
        this.teardownGauge();
        this.renderer = new _highcharts2.default.Renderer(this.$hcContainer[0], width, height);
        this.formatter = new _Formatter2.default(this.renderer);
        this.renderGauge();
        if (this.testMode) {
            testingUtils.gaugeAddTestingMetadata(this, this.elements, this.getClassName(), this.value);
        }
        this.hasRendered = true;
        this.cacheDrawnDimensions();
    },
    destroy: function destroy() {
        this.teardownGauge();
        this.$hcContainer.remove();
    },
    teardownGauge: function teardownGauge() {
        var key = void 0;
        // stop any running animations
        this.stopWobble();
        this.$container.stop();
        // eslint-disable-next-line no-restricted-syntax
        for (key in this.elements) {
            // eslint-disable-next-line no-prototype-builtins
            if (this.elements.hasOwnProperty(key)) {
                this.elements[key].destroy();
            }
        }
        if (this.renderer) {
            this.renderer.destroy();
        }
        if (this.formatter) {
            this.formatter.destroy();
        }
        this.elements = {};
        this.$hcContainer.empty();
        this.$container.css('backgroundColor', '');
        this.hasRendered = false;
    },
    getSVG: function getSVG() {
        return this.$container.find('svg').eq(0).parent().html();
    },
    processProperties: function processProperties() {
        _Visualization2.default.prototype.processProperties.call(this);
        this.colors = this.computeColors();
        this.colorPalette = new _ColorPalette2.default(this.colors, true);
        this.ranges = this.computeRanges();
        this.previousValue = this.value;
        this.value = this.computeValue();

        this.majorUnit = parseInt(this.properties['chart.majorUnit'], 10) || null;
        this.showMajorTicks = parsingUtils.normalizeBoolean(this.properties['chart.showMajorTicks'], true);
        this.showMinorTicks = parsingUtils.normalizeBoolean(this.properties['chart.showMinorTicks'], this.showMinorTicksByDefault);
        this.showLabels = parsingUtils.normalizeBoolean(this.properties['chart.showLabels'], true);
        this.showValue = parsingUtils.normalizeBoolean(this.properties['chart.showValue'], this.showValueByDefault);
        this.showRangeBand = parsingUtils.normalizeBoolean(this.properties['chart.showRangeBand'], true);
        this.usePercentageRange = parsingUtils.normalizeBoolean(this.properties['chart.usePercentageRange']);
        this.usePercentageValue = parsingUtils.normalizeBoolean(this.properties['chart.usePercentageValue']);
        this.isShiny = this.properties['chart.style'] !== 'minimal';
    },
    computeColors: function computeColors() {
        var userColors = parsingUtils.stringToHexArray(this.properties['chart.gaugeColors'] || this.properties['gaugeColors']);
        return userColors && userColors.length > 0 ? userColors : this.DEFAULT_COLORS;
    },
    computeRanges: function computeRanges() {
        var _this = this;

        var ranges = void 0;
        var userRanges = parsingUtils.stringToArray(this.properties['chart.rangeValues']);

        if (userRanges && userRanges.length > 1) {
            ranges = userRanges;
        } else {
            var dataFields = this.dataSet.allDataFields();
            ranges = (0, _underscore2.default)(dataFields.slice(1)).map(function (field) {
                return _this.dataSet.getSeries(field)[0];
            });
        }
        var prevRange = -Infinity;
        var floatRanges = [];

        (0, _underscore2.default)(ranges).each(function (range) {
            var floatRange = mathUtils.parseFloat(range);
            if (!(0, _underscore2.default)(floatRange).isNaN() && floatRange > prevRange) {
                floatRanges.push(floatRange);
                prevRange = floatRange;
            }
        });

        return floatRanges.length > 1 ? floatRanges : this.DEFAULT_RANGES;
    },
    computeValue: function computeValue() {
        var dataFields = this.dataSet.allDataFields();
        return dataFields.length > 0 ? mathUtils.parseFloat(this.dataSet.getSeries(dataFields[0])[0]) || 0 : 0;
    },
    updateValue: function updateValue(oldValue, newValue) {
        // if the value didn't change, do nothing
        if (oldValue === newValue) {
            return;
        }
        if (this.shouldAnimateTransition(oldValue, newValue)) {
            this.stopWobble();
            this.animateTransition(oldValue, newValue, (0, _underscore2.default)(this.drawIndicator).bind(this), (0, _underscore2.default)(this.onAnimationFinished).bind(this));
        }
        if (this.showValue) {
            var valueText = this.formatValue(newValue);
            this.updateValueDisplay(valueText);
        }
        if (this.testMode) {
            testingUtils.gaugeUpdate(this.$container, newValue);
        }
    },
    shouldAnimateTransition: function shouldAnimateTransition(oldValue, newValue) {
        // if we were already out of range, no need to animate the indicator
        return this.normalizedTranslateValue(oldValue) !== this.normalizedTranslateValue(newValue);
    },
    drawTicks: function drawTicks() {
        var i = void 0;
        var loopTranslation = void 0;
        var loopText = void 0;
        var tickValues = this.calculateTickValues(this.ranges[0], this.ranges[this.ranges.length - 1], this.MAX_TICKS_PER_RANGE);

        for (i = 0; i < tickValues.length; i++) {
            loopTranslation = this.translateValue(tickValues[i]);
            if (this.showMajorTicks) {
                this.elements['tickMark_' + tickValues[i]] = this.drawMajorTick(loopTranslation);
            }
            if (this.showLabels) {
                loopText = this.formatTickLabel(tickValues[i]);
                this.elements['tickLabel_' + tickValues[i]] = this.drawMajorTickLabel(loopTranslation, loopText);
            }
        }
        // if the labels are visible, check for collisions and remove ticks if needed before drawing the minors
        if (this.showLabels) {
            tickValues = this.removeTicksIfOverlap(tickValues);
        }

        if (this.showMinorTicks) {
            var majorInterval = tickValues[1] - tickValues[0];
            var minorInterval = majorInterval / this.minorsPerMajor;

            var startValue = this.usePercentageRange ? this.ranges[0] : tickValues[0] - Math.floor((tickValues[0] - this.ranges[0]) / minorInterval) * minorInterval;

            for (i = startValue; i <= this.ranges[this.ranges.length - 1]; i += minorInterval) {
                if (!this.showMajorTicks || _jquery2.default.inArray(i, tickValues) < 0) {
                    loopTranslation = this.translateValue(i);
                    this.elements['minorTickMark_' + i] = this.drawMinorTick(loopTranslation);
                }
            }
        }
    },
    removeTicksIfOverlap: function removeTicksIfOverlap(tickValues) {
        while (tickValues.length > 2 && this.tickLabelsOverlap(tickValues)) {
            tickValues = this.removeEveryOtherTick(tickValues);
        }
        return tickValues;
    },
    tickLabelsOverlap: function tickLabelsOverlap(tickValues) {
        var i = void 0;
        var labelOne = void 0;
        var labelTwo = void 0;
        var marginX = 3;
        var marginY = 1;
        var renderer = this.renderer;

        // Highcharts is doing a little too good of a job cache-ing the bounding boxes of numerical text elements.
        // We have to bust the per-renderer cache unless there is per-element cached value (SPL-83393).
        var getBBox = function getBBox(wrapper) {
            if (wrapper.bBox) {
                return wrapper.bBox;
            }
            renderer.cache = {};
            return wrapper.getBBox();
        };

        for (i = 0; i < tickValues.length - 1; i++) {
            labelOne = this.elements['tickLabel_' + tickValues[i]];
            labelTwo = this.elements['tickLabel_' + tickValues[i + 1]];
            if (this.formatter.bBoxesOverlap(getBBox(labelOne), getBBox(labelTwo), marginX, marginY)) {
                return true;
            }
        }
        return false;
    },
    removeEveryOtherTick: function removeEveryOtherTick(tickValues) {
        var i = void 0;
        var newTickValues = [];

        for (i = 0; i < tickValues.length; i++) {
            if (i % 2 === 0) {
                newTickValues.push(tickValues[i]);
            } else {
                if (this.elements['tickMark_' + tickValues[i]]) {
                    this.elements['tickMark_' + tickValues[i]].destroy();
                    delete this.elements['tickMark_' + tickValues[i]];
                }
                if (this.elements['tickLabel_' + tickValues[i]]) {
                    this.elements['tickLabel_' + tickValues[i]].destroy();
                    delete this.elements['tickLabel_' + tickValues[i]];
                }
            }
        }
        return newTickValues;
    },


    // we can't use the jQuery animation library explicitly to perform complex SVG animations, but
    // we can take advantage of their implementation using a meaningless css property and a custom step function
    animateTransition: function animateTransition(startVal, endVal, drawFn, finishCallback) {
        var animationRange = endVal - startVal;
        var duration = 500;

        var animationProperties = {
            duration: duration,
            step: function step(now) {
                drawFn(startVal + now);
            }
        };

        if (finishCallback) {
            animationProperties.complete = function () {
                finishCallback(endVal);
            };
        }
        // for the animation start and end values, use 0 and animationRange for consistency with the way jQuery handles
        // css properties that it doesn't recognize
        this.$container.stop(true, true).css({ 'animation-progress': 0 }).animate({ 'animation-progress': animationRange }, animationProperties);
    },
    onAnimationFinished: function onAnimationFinished(val) {
        this.checkOutOfRange(val);
    },
    checkOutOfRange: function checkOutOfRange(val) {
        var totalRange = void 0;
        var wobbleCenter = void 0;
        var wobbleRange = void 0;

        if (val < this.ranges[0]) {
            totalRange = this.ranges[this.ranges.length - 1] - this.ranges[0];
            wobbleRange = totalRange * 0.005;
            wobbleCenter = this.ranges[0] + wobbleRange;
            this.wobble(wobbleCenter, wobbleRange, this.drawIndicator);
        } else if (val > this.ranges[this.ranges.length - 1]) {
            totalRange = this.ranges[this.ranges.length - 1] - this.ranges[0];
            wobbleRange = totalRange * 0.005;
            wobbleCenter = this.ranges[this.ranges.length - 1] - wobbleRange;
            this.wobble(wobbleCenter, wobbleRange, this.drawIndicator);
        }
    },
    formatValue: function formatValue(val) {
        return this.usePercentageValue ? this.formatPercent((val - this.ranges[0]) / (this.ranges[this.ranges.length - 1] - this.ranges[0])) : this.formatNumber(val);
    },
    formatTickLabel: function formatTickLabel(val) {
        return this.usePercentageRange ? this.formatPercent((val - this.ranges[0]) / (this.ranges[this.ranges.length - 1] - this.ranges[0])) : this.formatNumber(val);
    },
    formatNumber: function formatNumber(val) {
        var parsedVal = parseFloat(val);
        var absVal = Math.abs(parsedVal);
        // if the magnitude is 1 billion or greater or less than one thousandth (and non-zero), express it in scientific notation
        if (absVal >= 1e9 || absVal !== 0 && absVal < 1e-3) {
            return _i18n2.default.format_scientific(parsedVal, '#.###E0');
        }
        return _i18n2.default.format_decimal(parsedVal);
    },
    formatPercent: function formatPercent(val) {
        return _i18n2.default.format_percent(val);
    },
    wobble: function wobble(center, range, drawFn) {
        var self = this;
        var wobbleCounter = 0;

        this.wobbleInterval = setInterval(function () {
            var wobbleVal = center + (wobbleCounter % 3 - 1) * range;
            drawFn.call(self, wobbleVal);
            wobbleCounter = (wobbleCounter + 1) % 3;
        }, 75);
    },
    stopWobble: function stopWobble() {
        clearInterval(this.wobbleInterval);
    },
    predictTextWidth: function predictTextWidth(text, fontSize) {
        return this.formatter.predictTextWidth(text, fontSize);
    },
    calculateTickValues: function calculateTickValues(start, end, numTicks) {
        var i = void 0;
        var loopStart = void 0;
        var range = end - start;
        var rawTickInterval = range / (numTicks - 1);
        var roundTickInterval = mathUtils.nearestPowerOfTen(rawTickInterval);
        var tickValues = [];

        if (this.usePercentageRange) {
            roundTickInterval = this.majorUnit && !isNaN(this.majorUnit) ? Math.abs(this.majorUnit) : 10;
            for (i = 0; i <= 100; i += roundTickInterval) {
                tickValues.push(start + i / 100 * range);
            }
        } else {
            if (this.majorUnit && !isNaN(this.majorUnit)) {
                roundTickInterval = Math.abs(this.majorUnit);
            } else {
                if (range / roundTickInterval > numTicks) {
                    // if the tick interval creates too many ticks, bump up to a factor of two
                    roundTickInterval *= 2;
                }
                if (range / roundTickInterval > numTicks) {
                    // if there are still too many ticks, bump up to a factor of five (of the original)
                    roundTickInterval *= 5 / 2;
                }
                if (range / roundTickInterval > numTicks) {
                    // if there are still too many ticks, bump up to a factor of ten (of the original)
                    roundTickInterval *= 2;
                }
            }
            // in normal mode we label in whole numbers, so the tick discovery loop starts at 0 or an appropriate negative number
            // but in percent mode we force it to label the first range value and go from there
            loopStart = this.usePercentageRange ? start : start >= 0 ? 0 : start - start % roundTickInterval;
            for (i = loopStart; i <= end; i += roundTickInterval) {
                if (i >= start) {
                    // work-around to deal with floating-point rounding errors
                    tickValues.push(parseFloat(i.toFixed(14)));
                }
            }
        }
        return tickValues;
    },
    getColorByIndex: function getColorByIndex(index) {
        return colorUtils.colorFromHex(this.colorPalette.getColor(null, index, this.ranges.length - 1));
    },


    // this is just creating a stub interface so automated tests won't fail
    getChartObject: function getChartObject() {
        return {
            series: [{
                data: [{
                    y: this.value,
                    onMouseOver: function onMouseOver() {}
                }]
            }]
        };
    },


    // to be implemented by subclasses
    renderGauge: function renderGauge() {
        this.updateDimensions();
    },
    translateValue: function translateValue() {},
    normalizedTranslateValue: function normalizedTranslateValue() {}
});

exports.default = Gauge;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(109);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31);
var document = __webpack_require__(13).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(113);
var enumBugKeys = __webpack_require__(63);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(58);
var defined = __webpack_require__(34);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(59);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/logger");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(23);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(127),
    shortOut = __webpack_require__(71);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(130),
    getValue = __webpack_require__(137);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isObject = __webpack_require__(14);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(131)))

/***/ }),
/* 71 */
/***/ (function(module, exports) {

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(23),
    metaMap = __webpack_require__(73);

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(139);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(75),
    composeArgsRight = __webpack_require__(76),
    countHolders = __webpack_require__(142),
    createCtor = __webpack_require__(25),
    createRecurry = __webpack_require__(77),
    getHolder = __webpack_require__(43),
    reorder = __webpack_require__(157),
    replaceHolders = __webpack_require__(26),
    root = __webpack_require__(6);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(143),
    setData = __webpack_require__(81),
    setWrapToString = __webpack_require__(82);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(73),
    noop = __webpack_require__(144);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(39),
    baseLodash = __webpack_require__(41);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(72),
    shortOut = __webpack_require__(71);

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__(149),
    insertWrapDetails = __webpack_require__(150),
    setToString = __webpack_require__(66),
    updateWrapDetails = __webpack_require__(151);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

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
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(68),
    isLength = __webpack_require__(85);

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
/* 87 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/field");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/testing");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _color = __webpack_require__(7);

var _parsing = __webpack_require__(3);

var _EventMixin = __webpack_require__(9);

var _EventMixin2 = _interopRequireDefault(_EventMixin);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Visualization(container, properties) {
    this.container = container;
    this.$container = (0, _jquery2.default)(container);
    this.properties = _jquery2.default.extend(true, {}, properties);
    this.id = _underscore2.default.uniqueId('viz_');
    this._isDirty = false;
    this.updateDimensions();
    this.lastDrawnWidth = null;
    this.lastDrawnHeight = null;
    // used for performance profiling
    this.benchmarks = [];
}

Visualization.prototype = _jquery2.default.extend({}, _EventMixin2.default, {
    requiresExternalColors: false,

    getWidth: function getWidth() {
        return this.$container.width();
    },
    getHeight: function getHeight() {
        return this.$container.height();
    },
    getCurrentDisplayProperties: function getCurrentDisplayProperties() {
        return this.properties;
    },
    isDirty: function isDirty() {
        return this._isDirty;
    },


    // To be called before a draw or resize, updates local values of the container width and height.
    updateDimensions: function updateDimensions() {
        this.width = this.getWidth();
        this.height = this.getHeight();
    },


    // To be called after a successful draw or resize, caches the most recent drawn dimensions
    // to be used in resize() below.
    cacheDrawnDimensions: function cacheDrawnDimensions() {
        this.lastDrawnWidth = this.width;
        this.lastDrawnHeight = this.height;
    },
    getClassName: function getClassName() {
        return this.type + '-chart';
    },
    prepare: function prepare(dataSet, properties) {
        var oldProperties = _jquery2.default.extend(true, {}, this.properties);
        // properties is an optional parameter, will layer on top of
        // the properties passed to the constructor
        if (properties) {
            _jquery2.default.extend(true, this.properties, properties);
            if (!_underscore2.default.isEqual(this.properties, oldProperties)) {
                this._isDirty = true;
            }
        }
        this.dataSet = dataSet;
        this.updateDimensions();
        this.processProperties();
    },
    draw: function draw(callback) {
        var that = this;
        var dfd = _jquery2.default.Deferred();

        this.handleDraw(function () {
            that._isDirty = false;
            if (callback) {
                callback.apply(undefined, arguments);
            }
            dfd.resolve.apply(dfd, arguments);
        });
        return dfd;
    },
    prepareAndDraw: function prepareAndDraw(dataSet, properties, callback) {
        this.prepare(dataSet, properties);
        return this.draw(callback);
    },
    requiresExternalColorPalette: function requiresExternalColorPalette() {
        return this.requiresExternalColors;
    },
    processProperties: function processProperties() {
        this.type = this.properties.chart || 'column';

        // set up the color skinning
        this.backgroundColor = this.properties['chart.backgroundColor'] || this.properties.backgroundColor || (0, _theme.getThemeProperty)('DEFAULT_BACKGROUND_COLOR');
        this.foregroundColor = this.properties['chart.foregroundColor'] || this.properties.foregroundColor || (0, _theme.getThemeProperty)('DEFAULT_FOREGROUND_COLOR');
        this.fontColor = this.properties['chart.fontColor'] || this.properties.fontColor || (0, _theme.getThemeProperty)('DEFAULT_FONT_COLOR');
        this.foregroundColorSoft = (0, _color.addAlphaToColor)(this.foregroundColor, 0.25);
        this.foregroundColorSofter = (0, _color.addAlphaToColor)(this.foregroundColor, 0.15);
        if (this.properties['chart.foregroundColor'] || this.properties.foregroundColor) {
            this.axisColorSoft = this.foregroundColorSoft;
            this.axisColorSofter = this.foregroundColorSofter;
        } else {
            this.axisColorSoft = (0, _theme.getThemeProperty)('DEFAULT_LINE_COLOR_SOFT');
            this.axisColorSofter = (0, _theme.getThemeProperty)('DEFAULT_LINE_COLOR_SOFTER');
        }

        // handle special modes
        this.testMode = (0, _parsing.normalizeBoolean)(this.properties['chart.testMode']) || (0, _parsing.normalizeBoolean)(this.properties.testMode);
        this.exportMode = (0, _parsing.normalizeBoolean)(this.properties['chart.exportMode']) || (0, _parsing.normalizeBoolean)(this.properties.exportMode);
    },
    resize: function resize() {
        this.updateDimensions();
        if (!this.width || !this.height || this.width === this.lastDrawnWidth && this.height === this.lastDrawnHeight) {
            return;
        }
        this.setSize(this.width, this.height);
    },


    // stub methods to be overridden by sub-classes
    handleDraw: function handleDraw() {},
    destroy: function destroy() {},
    getSVG: function getSVG() {},


    // this method is a no-op if we're not in test mode, otherwise adds an entry to the list of benchmarks
    benchmark: function benchmark(name) {
        if (!this.testMode) {
            return;
        }
        if (this.benchmarks.length === 0) {
            this.benchmarks.push([name, new Date().getTime()]);
        } else {
            var lastTimestamp = (0, _underscore2.default)(this.benchmarks).reduce(function (time, mark) {
                return time + mark[1];
            }, 0);
            this.benchmarks.push([name, new Date().getTime() - lastTimestamp]);
        }
    }
});

exports.default = Visualization;
module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/dom");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1500 1500\" width=\"10px\" height=\"9px\"><path d=\"M 750 0 c 203 0 397 82 532 218 136 135 218 329 218 532 0 210 -82 393 -218 529 -135 135 -329 221 -532 221 -210 0 -393 -86 -529 -221 C 86 1143 0 960 0 750 c 0 -203 86 -397 221 -532 C 357 82 540 0 750 0 z m 567 896 V 604 H 184 v 292 h 1133 z\" fill=\"currentColor\"></path></svg>"

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _EventMixin = __webpack_require__(9);

var _EventMixin2 = _interopRequireDefault(_EventMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DataLabels(properties) {
    this.properties = properties || {};
    return this;
}

DataLabels.prototype = _jquery2.default.extend({}, _EventMixin2.default, {
    getConfig: function getConfig() {
        return {
            enabled: true
        };
    }
});
exports.default = DataLabels;
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _SingleShapeSeries = __webpack_require__(95);

var _SingleShapeSeries2 = _interopRequireDefault(_SingleShapeSeries);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LineSeries(properties) {
    _SingleShapeSeries2.default.call(this, properties);
}
(0, _lang.inherit)(LineSeries, _SingleShapeSeries2.default);

_jquery2.default.extend(LineSeries.prototype, {
    CHARTING_PROPERTY_WHITELIST: _underscore2.default.union(['showMarkers'], _SingleShapeSeries2.default.prototype.CHARTING_PROPERTY_WHITELIST),

    type: 'line',

    highlight: function highlight() {
        _SingleShapeSeries2.default.prototype.highlight.call(this);
        if (this.hcSeries.graph) {
            var seriesColor = this.getColor();
            this.hcSeries.graph.attr({
                stroke: seriesColor,
                'stroke-opacity': this.HIGHLIGHTED_OPACITY
            });
        }
        (0, _underscore2.default)(this.hcSeries.data).each(this.highlightPoint, this);
    },
    unHighlight: function unHighlight() {
        _SingleShapeSeries2.default.prototype.unHighlight.call(this);
        if (this.hcSeries.graph) {
            this.hcSeries.graph.attr('stroke', this.UNHIGHLIGHTED_COLOR);
        }
        (0, _underscore2.default)(this.hcSeries.data).each(this.unHighlightPoint, this);
    },
    highlightPoint: function highlightPoint(hcPoint) {
        var seriesColor = this.getColor();
        if (hcPoint.graphic) {
            hcPoint.graphic.attr('fill', seriesColor);
        }
    },
    unHighlightPoint: function unHighlightPoint(hcPoint) {
        if (hcPoint.graphic) {
            hcPoint.graphic.attr('fill', this.UNHIGHLIGHTED_COLOR);
        }
    },
    translatePostHook: function translatePostHook() {
        if (this.hcSeries) {
            var chart = this.hcSeries.chart;
            var xAxis = this.hcSeries.xAxis;
            var points = this.hcSeries.points;
            // If the series is an overlay on a column chart and there is only 1 point displayed
            // then we override the x-coordinates of the neightboring points so that the 1-point overlay is rendered correctly
            if (Math.round(xAxis.min) === Math.round(xAxis.max) && this.hcSeries.options.type === 'line') {
                var isOverlay = _underscore2.default.any(chart.series, function (s) {
                    return s.options.type === 'column';
                });

                if (isOverlay) {
                    var zoomedPointIndex = Math.round(xAxis.min);
                    if (points[zoomedPointIndex - 1]) {
                        points[zoomedPointIndex - 1].plotX = points[zoomedPointIndex].plotX - xAxis.width;
                    }
                    if (points[zoomedPointIndex + 1]) {
                        points[zoomedPointIndex + 1].plotX = points[zoomedPointIndex].plotX + xAxis.width;
                    }
                }
            }
        }
    },
    getConfig: function getConfig() {
        var fieldName = this.getName();
        var fieldDashStyles = parsingUtils.stringToObject(this.properties['fieldDashStyles'] || '{}');

        var config = _SingleShapeSeries2.default.prototype.getConfig.call(this);
        _jquery2.default.extend(config, {
            connectNulls: this.properties['nullValueMode'] === 'connect',
            marker: {
                enabled: parsingUtils.normalizeBoolean(this.properties['showMarkers'], false)
            },
            stacking: this.STACK_MODE_MAP['default'],
            // line series has a higher z-index for chart overlay
            zIndex: 2,
            translatePostHook: (0, _underscore2.default)(this.translatePostHook).bind(this),
            // eslint-disable-next-line no-prototype-builtins
            dashStyle: fieldDashStyles.hasOwnProperty(fieldName) ? fieldDashStyles[fieldName] : this.properties['dashStyle'],
            lineWidth: parseFloat(this.properties['lineWidth']) || 2
        });

        return config;
    }
});

exports.default = LineSeries;
module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _Series = __webpack_require__(29);

var _Series2 = _interopRequireDefault(_Series);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SingleShapeSeries(properties) {
    _Series2.default.call(this, properties);
}
(0, _lang.inherit)(SingleShapeSeries, _Series2.default);

_jquery2.default.extend(SingleShapeSeries.prototype, {
    CHARTING_PROPERTY_WHITELIST: _underscore2.default.union(['lineStyle', 'nullValueMode'], _Series2.default.prototype.CHARTING_PROPERTY_WHITELIST),

    HIGHLIGHTED_OPACITY: 1.0,

    getConfig: function getConfig() {
        var config = _Series2.default.prototype.getConfig.call(this);
        config.dashStyle = this.properties['lineStyle'] === 'dashed' ? 'Dash' : 'Solid';
        config.pointPlacement = this.properties['pointPlacement'];
        config.drawPointsPreHook = (0, _underscore2.default)(this.drawPointsPreHook).bind(this);
        return config;
    },
    handlePointMouseOver: function handlePointMouseOver(point) {
        _Series2.default.prototype.handlePointMouseOver.call(this, point);
        this.highlight();
    },
    drawPointsPreHook: function drawPointsPreHook(series) {
        // SPL-55213, we want to handle the case where a single point is not connected to any others
        // and would not be visible.  These points are given a marker so that they become visible.

        // If nulls are being converted to zeros, then there is no need for this logic.
        if (this.properties.nullValueMode === 'zero') {
            return;
        }

        // If the points already have markers, then there is no need for this logic.
        if (series.options.marker && series.options.marker.enabled) {
            return;
        }

        // When connecting nulls, we only have to intervene if the series contains exactly one non-null point.
        if (series.options.connectNulls) {
            var nonNulls = _underscore2.default.filter(series.data, function (point) {
                return !point.isNull;
            });
            if (nonNulls.length === 1) {
                nonNulls[0].update({
                    marker: {
                        enabled: true,
                        radius: 4
                    }
                }, false);
            }
            // If nulls are not connected, we look for any point that has nulls on both sides.
        } else {
            series.data.forEach(function (point, i) {
                if (point.isNull) {
                    return;
                }
                var prevPoint = series.data[i - 1];
                var nextPoint = series.data[i + 1];

                if ((!prevPoint || prevPoint.isNull) && (!nextPoint || nextPoint.isNull)) {
                    point.update({
                        marker: {
                            enabled: true,
                            radius: 4
                        }
                    }, false);
                }
            });
        }
    }
});

exports.default = SingleShapeSeries;
module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _color = __webpack_require__(7);

var colorUtils = _interopRequireWildcard(_color);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

var _SingleShapeSeries = __webpack_require__(95);

var _SingleShapeSeries2 = _interopRequireDefault(_SingleShapeSeries);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AreaSeries(properties) {
    _SingleShapeSeries2.default.call(this, properties);
    this.UNHIGHLIGHTED_LINE_COLOR = colorUtils.addAlphaToColor(this.UNHIGHLIGHTED_BASE_COLOR, this.UNHIGHLIGHTED_LINE_OPACITY);
}
(0, _lang.inherit)(AreaSeries, _SingleShapeSeries2.default);

_jquery2.default.extend(AreaSeries.prototype, {
    HIGHLIGHTED_OPACITY: 0.75,
    UNHIGHLIGHTED_LINE_OPACITY: 0.4,

    CHARTING_PROPERTY_WHITELIST: _underscore2.default.union(['showLines', 'areaFillOpacity'], _SingleShapeSeries2.default.prototype.CHARTING_PROPERTY_WHITELIST),

    type: 'area',

    processProperties: function processProperties() {
        var rawFillOpacity = mathUtils.parseFloat(this.properties.areaFillOpacity);
        this.fillOpacity = rawFillOpacity <= 1 && rawFillOpacity >= 0 ? rawFillOpacity : this.HIGHLIGHTED_OPACITY;
    },
    getConfig: function getConfig() {
        var config = _SingleShapeSeries2.default.prototype.getConfig.call(this);
        config.fillOpacity = this.fillOpacity;
        config.connectNulls = this.properties['nullValueMode'] === 'connect';
        config.lineWidth = parsingUtils.normalizeBoolean(this.properties['showLines'], true) ? 1 : 0;
        config.getStackPointsPreHook = (0, _underscore2.default)(this.getStackPointsPreHook).bind(this);
        config.setStackedPointsPostHook = (0, _underscore2.default)(this.setStackedPointsPostHook).bind(this);
        return config;
    },
    onChartLoadOrRedraw: function onChartLoadOrRedraw(chart) {
        _SingleShapeSeries2.default.prototype.onChartLoadOrRedraw.call(this, chart);
        this.hasLines = this.hcSeries.options.lineWidth > 0;
        // FIXME: shouldn't have to do this here, try to make it work with highcharts settings
        this.hcSeries.area.attr('fill-opacity', this.fillOpacity);
    },
    highlight: function highlight() {
        _SingleShapeSeries2.default.prototype.highlight.call(this);
        var seriesColor = this.getColor();
        this.hcSeries.area.attr({
            fill: seriesColor,
            'fill-opacity': this.fillOpacity
        });
        if (this.hcSeries.graph && this.hasLines) {
            this.hcSeries.graph.attr({
                stroke: seriesColor,
                'stroke-opacity': 1
            });
        }
        (0, _underscore2.default)(this.hcSeries.data).each(this.highlightPoint, this);
    },
    unHighlight: function unHighlight() {
        _SingleShapeSeries2.default.prototype.unHighlight.call(this);
        this.hcSeries.area.attr({
            fill: this.UNHIGHLIGHTED_COLOR
        });
        if (this.hcSeries.graph && this.hasLines) {
            this.hcSeries.graph.attr('stroke', this.UNHIGHLIGHTED_LINE_COLOR);
        }
        (0, _underscore2.default)(this.hcSeries.data).each(this.unHighlightPoint, this);
    },
    highlightPoint: function highlightPoint(hcPoint) {
        var seriesColor = this.getColor();
        if (hcPoint.graphic) {
            hcPoint.graphic.attr('fill', seriesColor);
        }
    },
    unHighlightPoint: function unHighlightPoint(hcPoint) {
        if (hcPoint.graphic) {
            hcPoint.graphic.attr('fill', this.UNHIGHLIGHTED_COLOR);
        }
    },


    // This is a workaround patch for the highchart bug
    // https://github.com/highcharts/highcharts/issues/7326,
    // SetData with updatePoints parameter is not working correctly with stacked area series with null points
    // This bug is fixed in highchart 6.0.3 and this workaround should be removed if we upgrade to 6.0.3
    getStackPointsPreHook: function getStackPointsPreHook(area, points) {
        points = points || area.points;
        if (area.options.stacking) {
            points.forEach(function (p) {
                p.leftNull = null;
                p.rightNull = null;
            });
        }

        return points;
    },


    // This is a workaround for the highchart bug https://github.com/highcharts/highcharts/issues/7493
    // Stacked area chart with null value render incorrectly after redraw
    // This workaround should be removed after we upgrade highchart to 6.0.4
    setStackedPointsPostHook: function setStackedPointsPostHook(series) {
        // handle if any require object is undefined
        if (series.yAxis === undefined || series.yAxis.stacks === undefined || series.yAxis.stacks['area'] === undefined) {
            return;
        }

        var areaStacks = series.yAxis.stacks['area'];
        var yData = series.processedYData;
        var nullValuesDataIndexes = [];

        yData.forEach(function (value, index) {
            if (value === null) nullValuesDataIndexes.push(index);
        });

        // no need to apply the patch if no null value
        if (nullValuesDataIndexes.length === 0) return;

        var xData = series.processedXData;
        var stackIndicator = void 0;
        nullValuesDataIndexes.forEach(function (index) {
            var x = xData[index];
            stackIndicator = series.getStackIndicator(stackIndicator, x, series.index);
            var stack = areaStacks[x];
            stack.points[stackIndicator.key] = null;
            stack.points[series.index] = null;
        });
    }
});

exports.default = AreaSeries;
module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _Series = __webpack_require__(29);

var _Series2 = _interopRequireDefault(_Series);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ManyShapeSeries(properties) {
    _Series2.default.call(this, properties);
}
(0, _lang.inherit)(ManyShapeSeries, _Series2.default);

_jquery2.default.extend(ManyShapeSeries.prototype, {
    CHARTING_PROPERTY_WHITELIST: _underscore2.default.union(['seriesSpacing'], _Series2.default.prototype.CHARTING_PROPERTY_WHITELIST),

    destroy: function destroy() {
        this.unSelectPoint();
        _Series2.default.prototype.destroy.call(this);
    },
    handlePointMouseOver: function handlePointMouseOver(point) {
        _Series2.default.prototype.handlePointMouseOver.call(this, point);
        this.selectPoint(point);
    },
    handlePointMouseOut: function handlePointMouseOut(point) {
        _Series2.default.prototype.handlePointMouseOut.call(this, point);
        this.unSelectPoint(point);
    },
    selectPoint: function selectPoint(point) {
        var matchingPoint = this.hcSeries.data[point.index];
        this.highlightPoint(matchingPoint);
        (0, _underscore2.default)(this.hcSeries.data).chain().without(matchingPoint).each(this.unHighlightPoint, this);
    },
    unSelectPoint: function unSelectPoint(point) {
        if (!point) {
            return;
        }
        var matchingPoint = this.hcSeries.data[point.index];
        (0, _underscore2.default)(this.hcSeries.data).chain().without(matchingPoint).each(this.highlightPoint, this);
    },
    highlight: function highlight() {
        _Series2.default.prototype.highlight.call(this);
        (0, _underscore2.default)(this.hcSeries.data).each(this.highlightPoint, this);
    },
    unHighlight: function unHighlight() {
        _Series2.default.prototype.unHighlight.call(this);
        (0, _underscore2.default)(this.hcSeries.data).each(this.unHighlightPoint, this);
    },
    highlightPoint: function highlightPoint(hcPoint) {
        if (!hcPoint.graphic) {
            return;
        }
        var seriesColor = this.getColor();
        hcPoint.graphic.attr({
            fill: seriesColor,
            'fill-opacity': this.HIGHLIGHTED_OPACITY,
            stroke: seriesColor
        });
    },
    unHighlightPoint: function unHighlightPoint(hcPoint) {
        if (!hcPoint.graphic) {
            return;
        }
        hcPoint.graphic.attr({
            fill: this.UNHIGHLIGHTED_COLOR,
            'stroke-width': 1,
            stroke: this.UNHIGHLIGHTED_BORDER_COLOR
        });
    }
});

exports.default = ManyShapeSeries;
module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(99);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _highcharts = __webpack_require__(8);

var _highcharts2 = _interopRequireDefault(_highcharts);

var _lang = __webpack_require__(2);

var _ManyShapeOptimizedSeries = __webpack_require__(51);

var _ManyShapeOptimizedSeries2 = _interopRequireDefault(_ManyShapeOptimizedSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ScatterSeries(properties) {
    _ManyShapeOptimizedSeries2.default.call(this, properties);
}
(0, _lang.inherit)(ScatterSeries, _ManyShapeOptimizedSeries2.default);

_jquery2.default.extend(ScatterSeries.prototype, {
    type: 'scatter',

    getConfig: function getConfig() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var config = _ManyShapeOptimizedSeries2.default.prototype.getConfig.apply(this, args);
        config.renderPostHook = (0, _underscore2.default)(this.renderPostHook).bind(this);
        return config;
    },


    // Override for the getGraphPath implementation from the superclass, which only works for bar and column series.
    // This implementation reads the symbol definition for the given series and combines each one into a single path definition.
    getGraphPathOverride: function getGraphPathOverride(series) {
        var chart = series.chart;
        var path = [];

        (0, _underscore2.default)(series.points).each(function (point) {
            var plotX = Math.floor(point.plotX);
            var plotY = point.plotY;

            if (!_underscore2.default.isUndefined(plotY) && !isNaN(plotY) && point.y !== null) {
                var pointMarkerOptions = point.marker || {};
                var isInside = chart.isInsidePlot(plotX, plotY, chart.inverted);
                var markerAttrs = series.markerAttribs(point, point.selected ? 'select' : undefined);
                var width = markerAttrs.width;
                var symbol = _highcharts2.default.pick(pointMarkerOptions.symbol, series.symbol);

                if (isInside && width > 0) {
                    var symbolPath = chart.renderer.symbols[symbol](plotX - width / 2, plotY - width / 2, width, width);
                    path.push.apply(path, (0, _toConsumableArray3.default)(symbolPath));
                }
            }
        });
        series.graphPath = path;
        return path;
    },
    renderPostHook: function renderPostHook(series) {
        // SPL-79730, the series group (which contains the mouse tracker) needs to be in front of the marker group
        // otherwise when a hover event happens the marker blocks the tracker and triggers a mouse out
        if (series.group) {
            series.group.toFront();
        }
    },


    // Highcharts will create a stateMarkerGraphic to show the selected state of the point
    // per SPL-79730, move that element to show up on top of the existing point but under the mouse tracker
    selectPoint: function selectPoint(point) {
        var matchingPoint = this.hcSeries.data[point.index];
        var matchingSeries = matchingPoint.series;

        if (matchingSeries.stateMarkerGraphic) {
            this.selectedPointGraphic = matchingSeries.stateMarkerGraphic;
            // remove Highcharts's reference so it doesn't try to destroy the marker
            matchingSeries.stateMarkerGraphic = null;
            (0, _jquery2.default)(this.selectedPointGraphic.element).insertBefore(matchingSeries.tracker.element);
        }
    },
    getTooltipRows: function getTooltipRows(info) {
        var rows = [];
        if (info.isMultiSeries) {
            rows.push([info.labelSeriesName, { text: info.seriesName, color: info.seriesColor }]);
        }
        if (info.markName) {
            rows.push([info.markName, info.markValue]);
        }
        rows.push([info.xAxisName, info.xValue], [info.yAxisName, info.yValue]);
        return rows;
    }
});

exports.default = ScatterSeries;
module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(207);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(18).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _Chart = __webpack_require__(27);

var _Chart2 = _interopRequireDefault(_Chart);

var _NumericAxis = __webpack_require__(49);

var _NumericAxis2 = _interopRequireDefault(_NumericAxis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ScatterChart(container, properties) {
    _Chart2.default.call(this, container, properties);
    // Nulls should always be treated as zeros for scatter charts (SPL-114835).
    this.properties['chart.nullValueMode'] = 'zero';
}
(0, _lang.inherit)(ScatterChart, _Chart2.default);

_jquery2.default.extend(ScatterChart.prototype, {
    NUM_DIMENSION_FIELDS: 2,
    TYPE: 'scatter',

    initializeFields: function initializeFields() {
        _Chart2.default.prototype.initializeFields.call(this);
        // to support the pivot interface, scatter charts ignore the first column if it is the result of a group-by
        var dataFields = this.dataSet.allDataFields();
        if (this.dataSet.fieldIsGroupby(dataFields[0])) {
            this.markField = dataFields[0];
            dataFields = dataFields.slice(1);
        }
        this.initializeNonMarkFields(dataFields);
    },
    initializeNonMarkFields: function initializeNonMarkFields(dataFields) {
        if (dataFields.length > this.NUM_DIMENSION_FIELDS) {
            this.isMultiSeries = true;
            this.labelField = dataFields[0];
            this.xField = dataFields[1];
            this.yField = dataFields[2];
            this.hasLegend = this.properties['legend.placement'] !== 'none';
        } else {
            this.isMultiSeries = false;
            this.xField = dataFields[0];
            this.yField = dataFields[1];
            this.hasLegend = false;
        }
    },


    // Override chart data label init. Scatter chart does not support data labels
    initializeDataLabels: function initializeDataLabels() {
        // Do nothing
    },
    isEmpty: function isEmpty() {
        return (0, _underscore2.default)(this.xField).isUndefined() || (0, _underscore2.default)(this.yField).isUndefined();
    },
    hasTimeXAxis: function hasTimeXAxis() {
        return false;
    },
    initializeSeriesPropertiesList: function initializeSeriesPropertiesList() {
        var _this = this;

        var propertiesList = void 0;
        if (this.isMultiSeries) {
            propertiesList = (0, _underscore2.default)(this.dataSet.getSeries(this.labelField)).chain().uniq().compact().map(function (label) {
                return {
                    name: label,
                    type: _this.TYPE,
                    clickEnabled: _this.chartClickEnabled
                };
            }).value();
        } else {
            var seriesProps = {
                name: _underscore2.default.uniqueId(this.TYPE + '_field_'),
                type: this.TYPE,
                clickEnabled: this.chartClickEnabled
            };
            propertiesList = [seriesProps];
        }
        return propertiesList;
    },
    initializeXAxisList: function initializeXAxisList() {
        var axisProps = _jquery2.default.extend(parsingUtils.getXAxisProperties(this.properties), this.axisColorScheme, {
            'axis.orientation': 'horizontal',
            isEmpty: this.isEmpty()
        });

        axisProps['axisTitle.text'] = this._getComputedXAxisTitle(axisProps, this.xField);

        axisProps['gridLines.showMajorLines'] = false;
        this.xAxisList = [new _NumericAxis2.default(axisProps)];
    },
    initializeYAxisList: function initializeYAxisList() {
        var axisProps = _jquery2.default.extend(parsingUtils.getYAxisProperties(this.properties), this.axisColorScheme, {
            'axis.orientation': 'vertical',
            isEmpty: this.isEmpty()
        });

        axisProps['axisTitle.text'] = this._getComputedYAxisTitle(axisProps, null);

        this.yAxisList = [new _NumericAxis2.default(axisProps)];
    },
    setAllSeriesData: function setAllSeriesData() {
        var _this2 = this;

        var xData = this.formatNumericAxisData(this.xAxisList[0], this.xField);
        var yData = this.formatNumericAxisData(this.yAxisList[0], this.yField);

        if (this.isMultiSeries) {
            (0, _underscore2.default)(this.seriesList).each(function (series) {
                var seriesName = series.getName();
                series.setData({
                    x: _this2.filterDataByNameMatch(xData, seriesName),
                    y: _this2.filterDataByNameMatch(yData, seriesName)
                });
            });
        } else {
            this.seriesList[0].setData({
                x: xData,
                y: yData
            });
        }
    },


    // Overrides the base class because scatter chart has different
    // default axis label behavior
    _getDefaultYAxisTitle: function _getDefaultYAxisTitle() {
        return this.yField;
    },


    // Overrides the base class because scatter chart has different
    // default axis label behavior
    _getDefaultXAxisTitleFromField: function _getDefaultXAxisTitleFromField() {
        return this.xField;
    },
    getPlotOptionsConfig: function getPlotOptionsConfig() {
        var markerSize = parseInt(this.properties['chart.markerSize'], 10);
        return {
            scatter: {
                stickyTracking: false,
                fillOpacity: 1,
                trackByArea: true,
                marker: {
                    radius: markerSize ? Math.ceil(markerSize * 6 / 4) : 6,
                    symbol: 'square'
                },
                tooltip: {
                    followPointer: false
                },
                cursor: this.chartClickEnabled ? 'pointer' : 'default'
            }
        };
    },
    handlePointClick: function handlePointClick(event, point, series) {
        var pointIndex = point.originalIndex;
        var seriesName = series.getName();
        var xSeries = this.dataSet.getSeries(this.xField);
        var ySeries = this.dataSet.getSeries(this.yField);
        var xValue = this.isMultiSeries ? this.filterDataByNameMatch(xSeries, seriesName)[pointIndex] : xSeries[pointIndex];
        var yValue = this.isMultiSeries ? this.filterDataByNameMatch(ySeries, seriesName)[pointIndex] : ySeries[pointIndex];
        var rowContext = {};

        var markValue = void 0;
        if (this.markField) {
            var markSeries = this.dataSet.getSeries(this.markField);
            markValue = this.isMultiSeries ? this.filterDataByNameMatch(markSeries, seriesName)[pointIndex] : markSeries[pointIndex];
            rowContext['row.' + this.markField] = markValue;
        }

        var pointClickEvent = {
            type: 'pointClick',
            modifierKey: event.modifierKey,
            name: this.markField ? this.markField : this.isMultiSeries ? this.labelField : this.xField,
            value: this.markField ? markValue : this.isMultiSeries ? seriesName : xValue,
            name2: this.markField && this.isMultiSeries ? this.labelField : this.yField,
            value2: this.markField && this.isMultiSeries ? seriesName : yValue,
            rowContext: rowContext
        };

        rowContext['row.' + this.xField] = xValue;
        rowContext['row.' + this.yField] = yValue;
        if (this.isMultiSeries) {
            rowContext['row.' + this.labelField] = seriesName;
        }
        this.trigger(pointClickEvent);
    },
    handleLegendClick: function handleLegendClick(event, fieldName) {
        var rowContext = {};

        var legendClickEvent = {
            type: 'legendClick',
            modifierKey: event.modifierKey,
            name: this.labelField,
            value: fieldName,
            rowContext: rowContext
        };

        rowContext['row.' + this.labelField] = fieldName;
        this.trigger(legendClickEvent);
    },
    getSeriesPointInfo: function getSeriesPointInfo(series, hcPoint) {
        var pointIndex = hcPoint.index;
        var xAxis = this.xAxisList[0];
        var yAxis = this.yAxisList[0];
        var seriesName = series.getName();
        var xSeries = this.dataSet.getSeries(this.xField);
        var ySeries = this.dataSet.getSeries(this.yField);
        var xValue = this.isMultiSeries ? this.filterDataByNameMatch(xSeries, seriesName)[pointIndex] : xSeries[pointIndex];
        var yValue = this.isMultiSeries ? this.filterDataByNameMatch(ySeries, seriesName)[pointIndex] : ySeries[pointIndex];

        var pointInfo = {
            isMultiSeries: this.isMultiSeries,
            xAxisName: this.xField,
            xValue: xAxis.formatValue(xValue),
            yAxisName: this.yField,
            yValue: yAxis.formatValue(yValue),
            markName: null,
            markValue: null
        };

        if (this.markField) {
            var markSeries = this.dataSet.getSeries(this.markField);
            var markValue = this.isMultiSeries ? this.filterMarkByNameMatch(seriesName)[pointIndex] : markSeries[pointIndex];

            _jquery2.default.extend(pointInfo, {
                markName: this.markField,
                markValue: markValue
            });
        }

        if (this.isMultiSeries) {
            _jquery2.default.extend(pointInfo, {
                labelSeriesName: this.labelField
            });
        }
        return pointInfo;
    },
    filterDataByNameMatch: function filterDataByNameMatch(dataSeries, name) {
        var labelData = this.dataSet.getSeries(this.labelField);
        return (0, _underscore2.default)(dataSeries).filter(function (point, i) {
            return labelData[i] === name;
        });
    },
    filterMarkByNameMatch: function filterMarkByNameMatch(name) {
        var labelData = this.dataSet.getSeries(this.labelField);
        var markData = this.dataSet.getSeries(this.markField);

        return (0, _underscore2.default)(markData).filter(function (point, i) {
            return labelData[i] === name;
        });
    }
});

exports.default = ScatterChart;
module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _lang = __webpack_require__(2);

var _math = __webpack_require__(4);

var _color = __webpack_require__(7);

var colorUtils = _interopRequireWildcard(_color);

var _Gauge = __webpack_require__(53);

var _Gauge2 = _interopRequireDefault(_Gauge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FillerGauge(container, properties) {
    _Gauge2.default.call(this, container, properties);
    this.minorsPerMajor = 5;
    this.minorTickWidth = 1;
}
(0, _lang.inherit)(FillerGauge, _Gauge2.default);

_jquery2.default.extend(FillerGauge.prototype, {
    processProperties: function processProperties() {
        _Gauge2.default.prototype.processProperties.call(this);
    },
    onAnimationFinished: function onAnimationFinished() {
        // no-op for filler gauges
    },
    renderGauge: function renderGauge() {
        _Gauge2.default.prototype.renderGauge.call(this);
        this.tickColor = this.foregroundColor;
        this.tickFontColor = this.fontColor;
        this.defaultValueColor = this.isShiny ? 'black' : this.fontColor;
        this.drawBackground();
        this.drawTicks();
        this.drawIndicator(this.value);
    },


    // use the decimal precision of the old and new values to set things up for a smooth animation
    updateValue: function updateValue(oldValue, newValue) {
        var oldPrecision = (0, _math.getDecimalPrecision)(oldValue, 3);
        var newPrecision = (0, _math.getDecimalPrecision)(newValue, 3);

        this.valueAnimationPrecision = Math.max(oldPrecision, newPrecision);
        _Gauge2.default.prototype.updateValue.call(this, oldValue, newValue);
    },
    getDisplayValue: function getDisplayValue(rawVal) {
        // unless this we are displaying a final value, round the value to the animation precision for a smooth transition
        // eslint-disable-next-line no-restricted-properties
        var multiplier = Math.pow(10, this.valueAnimationPrecision);
        return rawVal !== this.value ? Math.round(rawVal * multiplier) / multiplier : rawVal;
    },
    updateValueDisplay: function updateValueDisplay() {
        // no-op, value display is updated as part of drawIndicator
    },


    // filler gauges animate the change in the value display,
    // so they always animate transitions, even when the values are out of range
    shouldAnimateTransition: function shouldAnimateTransition() {
        return true;
    },
    getFillColor: function getFillColor(val) {
        var i = void 0;
        for (i = 0; i < this.ranges.length - 2; i++) {
            if (val <= this.ranges[i + 1]) {
                break;
            }
        }
        return this.getColorByIndex(i);
    },


    // use the value to determine the fill color, then use that color's luminance determine
    // if a light or dark font color should be used
    getValueColor: function getValueColor(fillColor) {
        var fillColorHex = colorUtils.hexFromColor(fillColor);
        var luminanceThreshold = 128;
        var darkColor = 'black';
        var lightColor = 'white';
        var fillLuminance = colorUtils.getLuminance(fillColorHex);

        return fillLuminance < luminanceThreshold ? lightColor : darkColor;
    }
});

exports.default = FillerGauge;
module.exports = exports['default'];

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _lang = __webpack_require__(2);

var _Gauge = __webpack_require__(53);

var _Gauge2 = _interopRequireDefault(_Gauge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MarkerGauge(container, properties) {
    _Gauge2.default.call(this, container, properties);
    this.bandCornerRad = 0;
    this.tickLabelPaddingRight = 10;
    this.minorsPerMajor = 5;
    this.minorTickWidth = 1;
    this.tickWidth = 1;
}
(0, _lang.inherit)(MarkerGauge, _Gauge2.default);

_jquery2.default.extend(MarkerGauge.prototype, {
    showValueByDefault: false,

    renderGauge: function renderGauge() {
        _Gauge2.default.prototype.renderGauge.call(this);
        this.tickColor = this.isShiny ? 'black' : this.foregroundColor;
        this.tickFontColor = this.isShiny ? 'black' : this.fontColor;
        this.valueOffset = this.isShiny ? this.markerSideWidth + 10 : this.valueFontSize;
        this.drawBackground();
        if (this.showRangeBand) {
            this.drawBand();
        }
        this.drawTicks();
        this.drawIndicator(this.value);
        this.checkOutOfRange(this.value);
    },
    updateValueDisplay: function updateValueDisplay() {
        // no-op, value display is updated as part of drawIndicator
    }
});

exports.default = MarkerGauge;
module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLoggingConsole = exports.setTheme = exports.setTimezone = exports.setColorPalette = exports._enableVisualTestMode = exports._disableVisualTestMode = exports.useSplunkMoment = exports.useSplunkI18nLibrary = exports.createChart = exports.extractChartReadyData = undefined;

var _theme = __webpack_require__(5);

Object.defineProperty(exports, 'setTheme', {
    enumerable: true,
    get: function get() {
        return _theme.setTheme;
    }
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _highcharts = __webpack_require__(8);

var _highcharts2 = _interopRequireDefault(_highcharts);

var _highchartsMore = __webpack_require__(118);

var _highchartsMore2 = _interopRequireDefault(_highchartsMore);

var _highchartsTimeAxis = __webpack_require__(119);

var _highchartsTimeAxis2 = _interopRequireDefault(_highchartsTimeAxis);

var _highchartsAnnotations = __webpack_require__(120);

var _highchartsAnnotations2 = _interopRequireDefault(_highchartsAnnotations);

var _highchartsTestHooks = __webpack_require__(121);

var _highchartsTestHooks2 = _interopRequireDefault(_highchartsTestHooks);

var _parsing = __webpack_require__(3);

var _logger = __webpack_require__(64);

var _patches = __webpack_require__(122);

var _patches2 = _interopRequireDefault(_patches);

var _ColorPalette = __webpack_require__(45);

var _ColorPalette2 = _interopRequireDefault(_ColorPalette);

var _DataSet = __webpack_require__(187);

var _DataSet2 = _interopRequireDefault(_DataSet);

var _Chart = __webpack_require__(27);

var _Chart2 = _interopRequireDefault(_Chart);

var _SplitSeriesChart = __webpack_require__(229);

var _SplitSeriesChart2 = _interopRequireDefault(_SplitSeriesChart);

var _PieChart = __webpack_require__(230);

var _PieChart2 = _interopRequireDefault(_PieChart);

var _ScatterChart = __webpack_require__(101);

var _ScatterChart2 = _interopRequireDefault(_ScatterChart);

var _BubbleChart = __webpack_require__(232);

var _BubbleChart2 = _interopRequireDefault(_BubbleChart);

var _RadialGauge = __webpack_require__(233);

var _RadialGauge2 = _interopRequireDefault(_RadialGauge);

var _HorizontalFillerGauge = __webpack_require__(234);

var _HorizontalFillerGauge2 = _interopRequireDefault(_HorizontalFillerGauge);

var _VerticalFillerGauge = __webpack_require__(235);

var _VerticalFillerGauge2 = _interopRequireDefault(_VerticalFillerGauge);

var _HorizontalMarkerGauge = __webpack_require__(236);

var _HorizontalMarkerGauge2 = _interopRequireDefault(_HorizontalMarkerGauge);

var _VerticalMarkerGauge = __webpack_require__(237);

var _VerticalMarkerGauge2 = _interopRequireDefault(_VerticalMarkerGauge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Install Plugins, apply custom patches
(0, _highchartsMore2.default)(_highcharts2.default);
_patches2.default.applyPatches(_highcharts2.default);
_highcharts2.default.splunkTimeAxisPlugin = (0, _highchartsTimeAxis2.default)(_highcharts2.default);
(0, _highchartsAnnotations2.default)(_highcharts2.default);
(0, _highchartsTestHooks2.default)(_highcharts2.default);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// namespace-level methods

var extractChartReadyData = exports.extractChartReadyData = function extractChartReadyData(rawData) {
    if (!rawData || !rawData.fields || !rawData.columns) {
        throw new Error('The data object passed to extractChartReadyData did not contain fields and columns');
    }
    if (rawData.fields.length !== rawData.columns.length) {
        throw new Error('The data object passed to extractChartReadyData must have the same number of fields and columns');
    }
    return new _DataSet2.default(rawData);
};

var createChart = exports.createChart = function createChart(container, properties) {
    if (container instanceof _jquery2.default) {
        container = container[0];
    }
    if (!(0, _underscore2.default)(container).isElement()) {
        throw new Error('Invalid first argument to createChart, container must be a valid DOM element or a jQuery object');
    }
    properties = properties || {};
    var chartType = properties['chart'];
    if (chartType === 'pie') {
        return new _PieChart2.default(container, properties);
    }
    if (chartType === 'scatter') {
        return new _ScatterChart2.default(container, properties);
    }
    if (chartType === 'bubble') {
        return new _BubbleChart2.default(container, properties);
    }
    if (chartType === 'radialGauge') {
        return new _RadialGauge2.default(container, properties);
    }
    if (chartType === 'fillerGauge') {
        return properties['chart.orientation'] === 'x' ? new _HorizontalFillerGauge2.default(container, properties) : new _VerticalFillerGauge2.default(container, properties);
    }
    if (chartType === 'markerGauge') {
        return properties['chart.orientation'] === 'x' ? new _HorizontalMarkerGauge2.default(container, properties) : new _VerticalMarkerGauge2.default(container, properties);
    }
    // only the basic cartesian chart types (bar/column/line/area) support split-series mode
    return (0, _parsing.normalizeBoolean)(properties['layout.splitSeries']) ? new _SplitSeriesChart2.default(container, properties) : new _Chart2.default(container, properties);
};

var useSplunkI18nLibrary = exports.useSplunkI18nLibrary = _highcharts2.default.splunkTimeAxisPlugin.useSplunkI18nLibrary;
var useSplunkMoment = exports.useSplunkMoment = _highcharts2.default.splunkTimeAxisPlugin.useSplunkMoment;

// var originalTooltipPrototype;
var _disableVisualTestMode = exports._disableVisualTestMode = function _disableVisualTestMode() {
    // if (originalTooltipPrototype) {
    //     console.log('[jscharting] disabling visual test mode');
    //     Highcharts.Tooltip.prototype= originalTooltipPrototype;
    //     originalTooltipPrototype = null;
    // }
};
var _enableVisualTestMode = exports._enableVisualTestMode = function _enableVisualTestMode() {
    // disableVisualTestMode();
    // console.warn('[jscharting] enabling visual test mode');
    // originalTooltipPrototype = Highcharts.Tooltip.prototype;
    // var newPrototype = {};
    // _.each(originalTooltipPrototype, function(value, key) {
    //     newPrototype[key] = function() {
    //         console.warn('Tooltip#' + key + ': ', arguments);
    //         return originalTooltipPrototype[key].apply(this, arguments);
    //     };
    // });
    // Highcharts.Tooltip.prototype = newPrototype;
};

var setColorPalette = exports.setColorPalette = _ColorPalette2.default.setBaseColors;
var setTimezone = exports.setTimezone = _highcharts2.default.splunkTimeAxisPlugin.setTimezone;
exports.setLoggingConsole = _logger.setLoggingConsole;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(106);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
module.exports = __webpack_require__(16).Object.assign;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(30);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(112) });


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(20) && !__webpack_require__(32)(function () {
  return Object.defineProperty(__webpack_require__(55)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(31);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(56);
var gOPS = __webpack_require__(116);
var pIE = __webpack_require__(117);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(58);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(32)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(57);
var arrayIndexOf = __webpack_require__(114)(false);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(57);
var toLength = __webpack_require__(60);
var toAbsoluteIndex = __webpack_require__(115);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("@splunk/highcharts/highcharts-more");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("@splunk/highcharts-time-axis");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("@splunk/highcharts-annotations");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("@splunk/highcharts-test-hooks");

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wrap = __webpack_require__(123);

var _wrap2 = _interopRequireDefault(_wrap);

var _last = __webpack_require__(164);

var _last2 = _interopRequireDefault(_last);

var _each = __webpack_require__(165);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patch = function patch(obj, patches) {
    var proto = obj.prototype;
    (0, _each2.default)(patches, function (wrapperFn, fnName) {
        proto[fnName] = (0, _wrap2.default)(proto[fnName], wrapperFn);
    });
};

var callHook = function callHook(hook) {
    for (var _len = arguments.length, restArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        restArgs[_key - 1] = arguments[_key];
    }

    if (typeof hook === 'function') {
        hook.apply(undefined, restArgs);
    }
};

var callHookOrOriginal = function callHookOrOriginal(hook, originalFn, originalObj) {
    for (var _len2 = arguments.length, restArgs = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        restArgs[_key2 - 3] = arguments[_key2];
    }

    if (typeof hook === 'function') {
        // for the hook, pass the original object as the first parameter
        return hook.apply(undefined, [originalObj].concat(restArgs));
    }
    // for the original function, apply it in the scope of the original object
    return originalFn.apply(originalObj, restArgs);
};

var applyPatches = function applyHighchartsPatches(Highcharts) {
    patch(Highcharts.Chart, {
        firstRender: function firstRender(originalFn) {
            callHookOrOriginal(this.options.firstRenderOverride, originalFn, this);
        },
        render: function render(originalFn, callback) {
            callHookOrOriginal(this.options.renderOverride, originalFn, this, callback);
        }
    });

    patch(Highcharts.Tooltip, {
        getAnchor: function getAnchor(originalFn, points, mouseEvent) {
            var anchor = originalFn.call(this, points, mouseEvent);
            callHook(this.options.getAnchorPostHook, points, mouseEvent, anchor);
            return anchor;
        },


        // Allow the chart events configuration to include a "tooltipRefresh" event,
        // which will be fired whenever the tooltip is shown or update.
        refresh: function refresh(originalFn, pointOrPoints, mouseEvent) {
            originalFn.call(this, pointOrPoints, mouseEvent);
            if (this.chart.options.chart.events && this.chart.options.chart.events.tooltipRefresh) {
                this.chart.options.chart.events.tooltipRefresh();
            }
        }
    });

    patch(Highcharts.Legend, {
        render: function render(originalFn) {
            callHook(this.options.renderPreHook, this);
            originalFn.call(this);
            callHook(this.options.renderPostHook, this);
        },
        renderItem: function renderItem(originalFn, item) {
            var options = this.options;
            var allItems = this.allItems;

            if (typeof options.renderItemsPreHook === 'function' && item === allItems[0]) {
                options.renderItemsPreHook(this);
                originalFn.call(this, item);
            } else if (typeof options.renderItemsPostHook === 'function' && item === (0, _last2.default)(allItems)) {
                originalFn.call(this, item);
                options.renderItemsPostHook(this);
            } else {
                originalFn.call(this, item);
            }
        }
    });

    patch(Highcharts.Series, {
        drawPoints: function drawPoints(originalFn) {
            var options = this.options;
            callHook(options.drawPointsPreHook, this);
            originalFn.call(this);
        },
        plotGroup: function plotGroup(originalFn, prop, name, visibility, zIndex, parent) {
            var group = originalFn.call(this, prop, name, visibility, zIndex, parent);
            callHook(this.options.plotGroupPostHook, this, group);
            return group;
        },
        render: function render(originalFn) {
            originalFn.call(this);
            callHook(this.options.renderPostHook, this);
        },
        afterAnimate: function afterAnimate(originalFn) {
            originalFn.call(this);
            callHook(this.options.afterAnimate, this);
        },
        destroy: function destroy(originalFn) {
            callHook(this.options.destroyPreHook, this);
            originalFn.call(this);
        },
        translate: function translate(originalFn) {
            originalFn.call(this);
            callHook(this.options.translatePostHook, this);
        }
    });

    var seriesTypes = Highcharts.seriesTypes;

    // patches to certain series types to support customized rendering routines
    // the patches to column series will affect bar series as well, since it inherits from column
    [seriesTypes.column, seriesTypes.scatter].forEach(function (seriesConstructor) {
        patch(seriesConstructor, {
            drawPoints: function drawPoints(originalFn) {
                callHookOrOriginal(this.options.drawPointsOverride, originalFn, this);
            },
            drawGraph: function drawGraph(originalFn) {
                callHookOrOriginal(this.options.drawGraphOverride, originalFn, this);
            },
            drawTracker: function drawTracker(originalFn) {
                callHookOrOriginal(this.options.drawTrackerOverride, originalFn, this);
            },
            getGraphPath: function getGraphPath(originalFn) {
                return callHookOrOriginal(this.options.getGraphPathOverride, originalFn, this);
            },
            getValidPoints: function getValidPoints(originalFn, points, insideOnly) {
                return callHookOrOriginal(this.options.getValidPointsOverride, originalFn, this, points, insideOnly);
            }
        });
    });

    patch(seriesTypes.area, {
        // This is a workaround patch for the highchart bug
        // https://github.com/highcharts/highcharts/issues/7326,
        // SetData with updatePoints parameter is not working correctly with stacked area series with null points
        // This bug is fixed in highchart 6.0.3 and this workaround should be removed if we upgrade to 6.0.3
        getStackPoints: function getStackPoints(originalFn, points) {
            var modifiedPoints = callHook(this.options.getStackPointsPreHook, this, points);
            return originalFn.call(this, modifiedPoints);
        },


        // This is a workaround for the highchart bug https://github.com/highcharts/highcharts/issues/7493
        // Stacked area chart with null value render incorrectly after redraw
        // This workaround should be removed after we upgrade highchart to 6.0.4
        setStackedPoints: function setStackedPoints(originalFn) {
            originalFn.call(this);
            callHook(this.options.setStackedPointsPostHook, this);
        }
    });

    patch(seriesTypes.pie, {
        translate: function translate(originalFn) {
            callHook(this.options.translatePreHook, this);
            originalFn.call(this);
        },
        drawDataLabels: function drawDataLabels(originalFn) {
            var dataLabelOptions = this.options.dataLabels;
            callHook(dataLabelOptions.drawDataLabelsPreHook, this);
            originalFn.call(this);
            callHook(dataLabelOptions.drawDataLabelsPostHook, this);
        },
        placeDataLabels: function placeDataLabels(originalFn) {
            var dataLabelOptions = this.options.dataLabels;
            callHook(dataLabelOptions.placeDataLabelsPreHook, this);
            originalFn.call(this);
        }
    });

    patch(Highcharts.Axis, {
        getOffset: function getOffset(originalFn) {
            callHook(this.options.getOffsetPreHook, this);
            originalFn.call(this);
        },
        getSeriesExtremes: function getSeriesExtremes(originalFn) {
            originalFn.call(this);
            callHook(this.options.getSeriesExtremesPostHook, this);
        },
        setTickInterval: function setTickInterval(originalFn, secondPass) {
            callHook(this.options.setTickIntervalPreHook, this, secondPass);
            originalFn.call(this, secondPass);
        },
        setTickPositions: function setTickPositions(originalFn) {
            var options = this.options;
            callHook(options.setTickPositionsPreHook, this);
            originalFn.call(this);
            callHook(options.setTickPositionsPostHook, this);
        },
        setAxisSize: function setAxisSize(originalFn) {
            callHook(this.options.setSizePreHook, this);
            originalFn.call(this);
        },
        render: function render(originalFn) {
            callHook(this.options.renderPreHook, this);
            originalFn.call(this);
        },
        zoom: function zoom(originalFn, newMin, newMax) {
            var ret = originalFn.call(this, newMin, newMax);
            callHook(this.options.zoomPostHook, this, newMin, newMax);
            return ret;
        }
    });

    patch(Highcharts.Tick, {
        render: function render(originalFn, index, old, opacity) {
            originalFn.call(this, index, old, opacity);
            callHook(this.axis.options.tickRenderPostHook, this, index, old, opacity);
        },
        getLabelSize: function getLabelSize(originalFn) {
            return callHookOrOriginal(this.axis.options.getLabelSizeOverride, originalFn, this);
        }
    });

    patch(Highcharts.Pointer, {
        runPointActions: function runPointActions(originalFn, e, p) {
            var hoverSeries = this.chart.hoverSeries;
            if (hoverSeries && typeof hoverSeries.options.pointActionsPreHook === 'function') {
                hoverSeries.options.pointActionsPreHook(hoverSeries, e, p);
            }
            originalFn.call(this, e, p);
        },
        dragStart: function dragStart(originalFn, e) {
            callHook(this.chart.options.pointerDragStartPreHook, this, e);
            originalFn.call(this, e);
        },
        drag: function drag(originalFn, e) {
            return callHookOrOriginal(this.chart.options.pointerDragOverride, originalFn, this, e, originalFn);
        },
        drop: function drop(originalFn, e) {
            // SPL-80321, due to our customizations, it's possible for the drop event of one chart to cause another
            // chart to be destroyed while its drop event handler is still pending
            // detect that the chart has been destroyed by its lack of an 'index' and suppress the drop handler
            // eslint-disable-next-line no-prototype-builtins
            if (this.chart.hasOwnProperty('index')) {
                callHook(this.chart.options.pointerDropPreHook, this, e);
                originalFn.call(this, e);
                callHook(this.chart.options.pointerDropPostHook, this, e);
            }
        },
        pinch: function pinch(originalFn, e) {
            return callHookOrOriginal(this.chart.options.pointerPinchOverride, originalFn, this, e, originalFn);
        }
    });
};

exports.default = { applyPatches: applyPatches };
module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var castFunction = __webpack_require__(65),
    partial = __webpack_require__(124);

/**
 * Creates a function that provides `value` to `wrapper` as its first
 * argument. Any additional arguments provided to the function are appended
 * to those provided to the `wrapper`. The wrapper is invoked with the `this`
 * binding of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {*} value The value to wrap.
 * @param {Function} [wrapper=identity] The wrapper function.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var p = _.wrap(_.escape, function(func, text) {
 *   return '<p>' + func(text) + '</p>';
 * });
 *
 * p('fred, barney, & pebbles');
 * // => '<p>fred, barney, &amp; pebbles</p>'
 */
function wrap(value, wrapper) {
  return partial(castFunction(wrapper), value);
}

module.exports = wrap;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(125),
    createWrap = __webpack_require__(138),
    getHolder = __webpack_require__(43),
    replaceHolders = __webpack_require__(26);

/** Used to compose bitmasks for function metadata. */
var WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */
var partial = baseRest(function(func, partials) {
  var holders = replaceHolders(partials, getHolder(partial));
  return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partial.placeholder = {};

module.exports = partial;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(23),
    overRest = __webpack_require__(126),
    setToString = __webpack_require__(66);

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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(38);

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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(128),
    defineProperty = __webpack_require__(129),
    identity = __webpack_require__(23);

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
/* 128 */
/***/ (function(module, exports) {

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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(67);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(68),
    isMasked = __webpack_require__(134),
    isObject = __webpack_require__(14),
    toSource = __webpack_require__(136);

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
/* 131 */
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
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(69);

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
/* 133 */
/***/ (function(module, exports) {

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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(135);

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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

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
/* 137 */
/***/ (function(module, exports) {

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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(72),
    createBind = __webpack_require__(140),
    createCurry = __webpack_require__(141),
    createHybrid = __webpack_require__(74),
    createPartial = __webpack_require__(158),
    getData = __webpack_require__(78),
    mergeData = __webpack_require__(159),
    setData = __webpack_require__(81),
    setWrapToString = __webpack_require__(82),
    toInteger = __webpack_require__(160);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(67),
    root = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(25),
    root = __webpack_require__(6);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(38),
    createCtor = __webpack_require__(25),
    createHybrid = __webpack_require__(74),
    createRecurry = __webpack_require__(77),
    getHolder = __webpack_require__(43),
    replaceHolders = __webpack_require__(26),
    root = __webpack_require__(6);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(40),
    getData = __webpack_require__(78),
    getFuncName = __webpack_require__(145),
    lodash = __webpack_require__(147);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(146);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(40),
    LodashWrapper = __webpack_require__(79),
    baseLodash = __webpack_require__(41),
    isArray = __webpack_require__(42),
    isObjectLike = __webpack_require__(15),
    wrapperClone = __webpack_require__(148);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(40),
    LodashWrapper = __webpack_require__(79),
    copyArray = __webpack_require__(80);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(83),
    arrayIncludes = __webpack_require__(152);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(153);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(154),
    baseIsNaN = __webpack_require__(155),
    strictIndexOf = __webpack_require__(156);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 154 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 155 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 156 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(80),
    isIndex = __webpack_require__(84);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(38),
    createCtor = __webpack_require__(25),
    root = __webpack_require__(6);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(75),
    composeArgsRight = __webpack_require__(76),
    replaceHolders = __webpack_require__(26);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(161);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(162);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14),
    isSymbol = __webpack_require__(163);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isObjectLike = __webpack_require__(15);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(166);


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(83),
    baseEach = __webpack_require__(167),
    castFunction = __webpack_require__(65),
    isArray = __webpack_require__(42);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(168),
    createBaseEach = __webpack_require__(186);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(169),
    keys = __webpack_require__(171);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(170);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 170 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(172),
    baseKeys = __webpack_require__(182),
    isArrayLike = __webpack_require__(86);

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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(173),
    isArguments = __webpack_require__(174),
    isArray = __webpack_require__(42),
    isBuffer = __webpack_require__(176),
    isIndex = __webpack_require__(84),
    isTypedArray = __webpack_require__(178);

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
/* 173 */
/***/ (function(module, exports) {

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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(175),
    isObjectLike = __webpack_require__(15);

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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isObjectLike = __webpack_require__(15);

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
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(6),
    stubFalse = __webpack_require__(177);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module)))

/***/ }),
/* 177 */
/***/ (function(module, exports) {

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
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(179),
    baseUnary = __webpack_require__(180),
    nodeUtil = __webpack_require__(181);

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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isLength = __webpack_require__(85),
    isObjectLike = __webpack_require__(15);

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
/* 180 */
/***/ (function(module, exports) {

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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(70);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module)))

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(183),
    nativeKeys = __webpack_require__(184);

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
/* 183 */
/***/ (function(module, exports) {

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
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(185);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(86);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _moment = __webpack_require__(87);

var _moment2 = _interopRequireDefault(_moment);

var _field = __webpack_require__(88);

var fieldUtils = _interopRequireWildcard(_field);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DataSet(data) {
    var _this = this;

    var fields = data.fields || {};
    var series = data.columns || {};

    this.fields = [];
    this.seriesList = [];
    this.fieldMetadata = {};
    this.annotations = data.annotations || [];

    (0, _underscore2.default)(fields).each(function (field, i) {
        var fieldName = void 0;
        if (_underscore2.default.isObject(field)) {
            fieldName = field.name;
            _this.fieldMetadata[fieldName] = field;
        } else {
            fieldName = field;
        }
        if (_this.ALLOWED_HIDDEN_FIELDS_REGEX.test(fieldName) || _this.isDataField(fieldName)) {
            _this.fields.push(fieldName);
            _this.seriesList.push(_jquery2.default.extend([], series[i]));
        }
    });
    this.length = this.fields.length;

    // create instance-specific memoized copies of getSeriesAsFloats and getSeriesAsEpochTimes
    this.getSeriesAsFloats = _underscore2.default.memoize(this.getSeriesAsFloats, this.seriesAsFloatsMemoizeHash);
    this.getSeriesAsEpochTimes = _underscore2.default.memoize(this.getSeriesAsEpochTimes);
}

DataSet.prototype = {
    ALLOWED_HIDDEN_FIELDS_REGEX: /^(_span|_tc|_lower.*|_predicted.*|_upper.*)$/,
    DATA_FIELD_REGEX: /^[^_]|^_time$/,

    allFields: function allFields() {
        return this.fields.slice();
    },
    allDataFields: function allDataFields() {
        return (0, _underscore2.default)(this.fields).filter(this.isDataField, this);
    },
    isDataField: function isDataField(field) {
        return this.DATA_FIELD_REGEX.test(field);
    },
    isTotalValue: function isTotalValue(value) {
        return value === 'ALL';
    },
    hasField: function hasField(name) {
        return (0, _underscore2.default)(this.fields).indexOf(name) > -1;
    },
    fieldAt: function fieldAt(index) {
        return this.fields[index];
    },
    fieldIsGroupby: function fieldIsGroupby(name) {
        // eslint-disable-next-line no-prototype-builtins
        return this.fieldMetadata[name] && this.fieldMetadata[name].hasOwnProperty('groupby_rank');
    },
    getFieldData: function getFieldData() {
        var allDataFields = this.allDataFields();

        var xFields = [allDataFields[0]];

        if (fieldUtils.isRangeSeriesDataSet(this)) {
            var rangeConfig = fieldUtils.getRangeSeriesConfig(this);
            (0, _underscore2.default)(rangeConfig).each(function (configEntry) {
                allDataFields = (0, _underscore2.default)(allDataFields).without(configEntry.lower, configEntry.upper);
            });
        }
        // push overlay fields to end of yFields array so that they render in front
        var yFields = (0, _underscore2.default)(allDataFields).difference(xFields);

        return {
            xFields: xFields,
            yFields: yFields
        };
    },
    seriesAt: function seriesAt(index) {
        return this.seriesList[index];
    },
    getSeries: function getSeries(name) {
        var index = (0, _underscore2.default)(this.fields).indexOf(name);
        if (index === -1) {
            return [];
        }
        return (0, _underscore2.default)(this.seriesList[index]).map(function (value) {
            return value === null ? '' : value;
        });
    },
    getSeriesAsFloats: function getSeriesAsFloats(name, options) {
        options = options || {};
        var series = this.getSeries(name);
        var nullsToZero = options.nullValueMode === 'zero';
        var logScale = options.scale === 'log';
        var asFloats = [];

        for (var i = 0; i < series.length; i++) {
            var floatVal = mathUtils.parseFloat(series[i]);
            if (_underscore2.default.isNaN(floatVal)) {
                asFloats.push(nullsToZero ? 0 : null);
                // eslint-disable-next-line no-continue
                continue;
            }
            asFloats.push(logScale ? mathUtils.absLogBaseTen(floatVal) : floatVal);
        }
        return asFloats;
    },
    getSeriesAsEpochTimes: function getSeriesAsEpochTimes(name) {
        return this.getSeries(name).map(function (timestamp) {
            // For Splunk field names that are known to sometimes be mixed in with timestamps,
            // return NaN explicitly, this avoids warnings from moment.js
            if (timestamp === 'ALL' || timestamp === 'OTHER') {
                return NaN;
            }
            var date = (0, _moment2.default)(timestamp);
            if (!date.isValid()) {
                return NaN;
            }
            return date.valueOf();
        });
    },


    // this is a targeted fix for the case where the back-end adds an 'ALL' data point to the end of a time series
    // but could be expanded into a more generic handler as we grow into it
    getSeriesAsTimestamps: function getSeriesAsTimestamps(name) {
        var series = this.getSeries(name);
        if (this.isTotalValue((0, _underscore2.default)(series).last())) {
            return series.slice(0, -1);
        }
        return series;
    },
    seriesAsFloatsMemoizeHash: function seriesAsFloatsMemoizeHash(name, options) {
        options = options || {};
        return name + options.scale + options.nullValueMode;
    },
    getAnnotations: function getAnnotations() {
        return this.annotations;
    },
    toJSON: function toJSON() {
        return {
            fields: this.fields,
            columns: this.seriesList
        };
    }
};

exports.default = DataSet;
module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/async");

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var langUtils = _interopRequireWildcard(_lang);

var _parsing = __webpack_require__(3);

var _Axis = __webpack_require__(48);

var _Axis2 = _interopRequireDefault(_Axis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TimeAxis(properties) {
    _Axis2.default.call(this, properties);
    this.tickLabelPadding = this.isVertical ? 2 : 3;
    this._annotationsAreDirty = false;
}
langUtils.inherit(TimeAxis, _Axis2.default);

_jquery2.default.extend(TimeAxis.prototype, {
    getConfig: function getConfig() {
        var config = _Axis2.default.prototype.getConfig.call(this);
        var isCrosshairEnabled = (0, _parsing.normalizeBoolean)(this.properties['crosshair']);
        _jquery2.default.extend(true, config, {
            type: 'datetime',
            showLastLabel: true,
            crosshair: isCrosshairEnabled && _Axis2.default.prototype.CROSSHAIR_CONFIG,
            tickmarkPlacement: this.hasTickmarksBetween() ? 'between' : 'on',
            max: this.properties['axis.maximumValue'],
            annotations: this.properties['axis.annotations']
        });
        delete config.labels.formatter;
        delete config.labels.y;
        return config;
    },
    formatValue: function formatValue(value, point) {
        if (!this.hcAxis) {
            return null;
        }
        return this.hcAxis.options['splunk-tooltip'].formatter(point.x);
    },
    setMaximumValue: function setMaximumValue(maximumValue) {
        this.hcAxis.options.max = maximumValue;
    },
    setAnnotations: function setAnnotations(annotations) {
        var previousAnnotations = this.properties['axis.annotations'];
        if (!_underscore2.default.isEqual(annotations, previousAnnotations)) {
            this.properties['axis.annotations'] = annotations;
            // the annotation plugin will later pickup the array and renders them
            this.hcAxis.options.annotations = this.properties['axis.annotations'];
            this._annotationsAreDirty = true;
        }
    },
    isAnnotationDirty: function isAnnotationDirty() {
        return this._annotationsAreDirty;
    },
    redraw: function redraw(redrawChart) {
        var _Axis$prototype$redra;

        for (var _len = arguments.length, restArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            restArgs[_key - 1] = arguments[_key];
        }

        (_Axis$prototype$redra = _Axis2.default.prototype.redraw).call.apply(_Axis$prototype$redra, [this, redrawChart].concat(restArgs));
        if (this.hcAxis && this.isAnnotationDirty()) {
            this.hcAxis.redraw(redrawChart);
        }
    },
    onChartLoadOrRedraw: function onChartLoadOrRedraw() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        _Axis2.default.prototype.onChartLoadOrRedraw.apply(this, args);
        this._annotationsAreDirty = false;
    }
});

exports.default = TimeAxis;
module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _bowser = __webpack_require__(46);

var _bowser2 = _interopRequireDefault(_bowser);

var _Formatter = __webpack_require__(10);

var _Formatter2 = _interopRequireDefault(_Formatter);

var _lang = __webpack_require__(2);

var langUtils = _interopRequireWildcard(_lang);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _Axis = __webpack_require__(48);

var _Axis2 = _interopRequireDefault(_Axis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TICK_LABEL_PADDING = 5;

function CategoryAxis(properties) {
    _Axis2.default.call(this, properties);
    properties = properties || {};
    // the property is exposed for testing only
    this.skipLabelsToAvoidCollisions = parsingUtils.normalizeBoolean(properties['axis.skipLabelsToAvoidCollisions']);
    this.ellipsize = properties['axisLabels.majorLabelStyle.overflowMode'] === 'ellipsisMiddle';
    this.properties['axis.categories'] = this.processCategories(properties['axis.categories']);
    this._categoriesAreDirty = false;
    this.isiOS = !!_bowser2.default.ios;
}
langUtils.inherit(CategoryAxis, _Axis2.default);

_jquery2.default.extend(CategoryAxis.prototype, {
    DEFAULT_FONT_SIZE: 12,
    MIN_FONT_SIZE: 9,

    getConfig: function getConfig() {
        var that = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var config = _Axis2.default.prototype.getConfig.apply(this, args);
        var isCrosshairEnabled = parsingUtils.normalizeBoolean(this.properties['crosshair']);
        var hideAxis = parsingUtils.normalizeBoolean(this.properties['axisLabels.hideCategories']);

        _jquery2.default.extend(true, config, {
            categories: this.properties['axis.categories'].slice(0),
            labels: {
                formatter: function formatter() {
                    return that.formatLabel(this.value);
                },

                enabled: config.labels.enabled && !hideAxis,
                maxStaggerLines: 2,
                style: {
                    whiteSpace: 'nowrap',
                    // Hack to make sure we can render literal '<' and '>'
                    HcTextStroke: true
                }
            },
            crosshair: isCrosshairEnabled && _Axis2.default.prototype.CROSSHAIR_CONFIG,
            startOnTick: !this.hasTickmarksBetween(),
            showLastLabel: this.hasTickmarksBetween(),
            tickWidth: hideAxis ? 0 : config.tickWidth,
            tickmarkPlacement: this.properties['axisLabels.tickmarkPlacement'],
            tickPositioner: function tickPositioner(min, max) {
                // will be called by Highcharts in the scope of the Highcharts axis object
                return that.tickPositioner(this, min, max);
            },

            setTickPositionsPreHook: (0, _underscore2.default)(this.setTickPositionsPreHook).bind(this),
            setTickPositionsPostHook: (0, _underscore2.default)(this.setTickPositionsPostHook).bind(this),
            renderPreHook: (0, _underscore2.default)(this.renderPreHook).bind(this)
        });
        return config;
    },
    getVerticalConfig: function getVerticalConfig() {
        var config = _Axis2.default.prototype.getVerticalConfig.call(this);
        return _jquery2.default.extend(true, config, {
            labels: {
                align: 'right',
                x: -7
            }
        });
    },
    getHorizontalConfig: function getHorizontalConfig() {
        var config = _Axis2.default.prototype.getHorizontalConfig.call(this);
        var minRange = void 0;
        if (this.isiOS && this.hasTickmarksBetween() && this.originalCategories.length > 1) {
            minRange = 1;
        }
        return _jquery2.default.extend(true, config, {
            labels: {
                align: 'center'
            },
            endOnTick: !this.hasTickmarksBetween(),
            showLastLabel: false,
            startOnTick: true,
            minRange: minRange || -1
        });
    },
    processCategories: function processCategories(categories) {
        this.originalCategories = categories;
        return categories.slice(0);
    },
    getCategories: function getCategories() {
        return this.properties['axis.categories'];
    },
    getPreviousCategories: function getPreviousCategories() {
        return this.previousCategories || [];
    },
    categoriesAreDirty: function categoriesAreDirty() {
        return this._categoriesAreDirty;
    },
    setCategories: function setCategories(categories) {
        this.previousCategories = this.properties['axis.categories'];
        this.properties['axis.categories'] = this.processCategories(categories);

        if (!_underscore2.default.isEqual(this.properties['axis.categories'], this.previousCategories)) {
            this._categoriesAreDirty = true;
        }
    },
    redraw: function redraw(redrawChart) {
        var _Axis$prototype$redra;

        for (var _len2 = arguments.length, restArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            restArgs[_key2 - 1] = arguments[_key2];
        }

        (_Axis$prototype$redra = _Axis2.default.prototype.redraw).call.apply(_Axis$prototype$redra, [this, redrawChart].concat(restArgs));

        if (this.categoriesAreDirty()) {
            this.hcAxis.setCategories(this.properties['axis.categories'].slice(0), redrawChart);
        }

        if (this.isiOS && this.hasTickmarksBetween()) {
            var axisConfig = this.getConfig();
            this.hcAxis['minRange'] = axisConfig['minRange'];
        }
    },
    onChartLoadOrRedraw: function onChartLoadOrRedraw() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        _Axis2.default.prototype.onChartLoadOrRedraw.apply(this, args);
        this._categoriesAreDirty = false;
    },


    /**
     * @author sfishel
     *
     * Do some intelligent manipulation of axis label step and ellipsization of axis labels (if needed)
     * before the getOffset routine runs.
     */

    getOffsetPreHook: function getOffsetPreHook(axis) {
        // super
        _Axis2.default.prototype.getOffsetPreHook.call(this, axis);

        var options = axis.options;
        var chart = axis.chart;

        if (!options.labels.enabled) {
            return;
        }

        var maxWidth = void 0;
        var tickSpacing = void 0;
        var minLabelSpacing = void 0;
        var labelStep = void 0;
        var labelSpacing = void 0;
        var formatter = new _Formatter2.default(chart.renderer);
        var categories = this.getCurrentlyVisibleCategories(axis);
        var numCategories = categories.length;
        var labelLineHeight = void 0;
        var i = void 0;

        if (this.isVertical) {
            maxWidth = Math.floor(chart.chartWidth / 6);

            // Returns a dictionary with new labels as well as font info
            var labelAdjustments = formatter.adjustLabels(categories, maxWidth, this.MIN_FONT_SIZE, this.DEFAULT_FONT_SIZE, 'middle');

            for (i = 0; i < labelAdjustments.labels.length; i++) {
                options.categories[i] = labelAdjustments.labels[i];
            }

            options.labels.style['font-size'] = labelAdjustments.fontSize + 'px';
            labelLineHeight = formatter.predictTextHeight('Test', labelAdjustments.fontSize);
            var axisHeight = chart.plotHeight;

            tickSpacing = axisHeight / (categories.length || 1);
            minLabelSpacing = 25;
            labelStep = this.skipLabelsToAvoidCollisions ? Math.ceil(minLabelSpacing / tickSpacing) : 1;

            // This centers the lables a bit better in all cases.
            // The 3 is essentially determined by trial and error
            options.labels.y = labelLineHeight / 3;
            options.labels.x = -options.tickLength;

            options.labels.step = labelStep;
        } else {
            var fontSize = void 0;
            var labelSpacingUpperBound = 100;
            var axisWidth = chart.plotWidth;
            var maxWidths = formatter.getMaxWidthForFontRange(categories, this.MIN_FONT_SIZE, this.DEFAULT_FONT_SIZE);
            var xDelta = 0;
            var yDelta = 0;

            tickSpacing = axisWidth / (numCategories || 1);

            // Check the width of the longest label for each font
            // take the largest font size that will make that width less than the tick spacing if possible
            // will return the largest font size that fits in the tick spacing, or zero if none fit
            var subTickSpacingFont = this.findBestFontForSpacing(maxWidths, tickSpacing - 2 * TICK_LABEL_PADDING);
            if (subTickSpacingFont > 0 && this.labelRotation === 0) {
                fontSize = subTickSpacingFont;
                labelStep = 1;
                labelSpacing = tickSpacing;
                maxWidth = labelSpacing;
            } else {
                // Otherwise use the width for smallest font size as minLabelSpacing, with the upper bound
                minLabelSpacing = Math.min(maxWidths[this.MIN_FONT_SIZE] + 2 * TICK_LABEL_PADDING, labelSpacingUpperBound);
                fontSize = this.MIN_FONT_SIZE;
                labelStep = this.skipLabelsToAvoidCollisions ? Math.ceil(minLabelSpacing / tickSpacing) : 1;
                labelSpacing = tickSpacing * labelStep;

                var deg2rad = Math.PI * 2 / 360;
                var rad = this.labelRotation * deg2rad;
                var cosRad = Math.abs(Math.cos(rad));
                var tickLabelSpacing = labelSpacing - 2 * TICK_LABEL_PADDING;
                var maxLabelHeight = void 0;
                var maxLabelWidth = void 0;

                switch (this.labelRotation) {
                    case 0:
                        break;
                    case -45:
                        maxWidth = [];
                        maxLabelHeight = chart.chartHeight / 2 / Math.abs(Math.sin(rad));
                        for (i = 0; i < numCategories; i++) {
                            // how far each label has from the leftmost edge of the chart before overflowing
                            maxLabelWidth = tickSpacing * (i + 1) / cosRad;
                            // leftmost label only has space to the left of the chart to fill
                            if (i === 0) {
                                maxLabelWidth = Math.min(chart.xAxis[0].left + tickSpacing / 2, maxLabelWidth);
                            }
                            // how far each label has from the bottom edge of the chart before overflowing
                            // note: permitted margin below x-axis is capped at half of chart height so that chart is still visible
                            // ellipsize to smallest of maxLabelWidth or maxLabelHeight to prevent cut-off on both left and bottom of panel
                            if (this.ellipsize) {
                                // if user wants to ellipsize label, then use space between ticks as label length if smallest
                                maxWidth[i] = Math.min(maxLabelWidth, maxLabelHeight, tickLabelSpacing);
                            } else {
                                maxWidth[i] = Math.min(maxLabelWidth, maxLabelHeight);
                            }
                        }
                        break;
                    case 45:
                        maxWidth = [];
                        maxLabelHeight = chart.chartHeight / 2 / Math.abs(Math.sin(rad));
                        for (i = 0; i < numCategories; i++) {
                            maxLabelWidth = tickSpacing * (i + 1) / cosRad;
                            if (this.ellipsize) {
                                maxWidth[numCategories - i - 1] = Math.min(maxLabelWidth, maxLabelHeight, tickLabelSpacing);
                            } else {
                                maxWidth[numCategories - i - 1] = Math.min(maxLabelWidth, maxLabelHeight);
                            }
                        }
                        break;
                    default:
                        // this.labelRotation === -90 || 90
                        // label length is capped at half of chart height, so that chart is still visible
                        if (this.ellipsize) {
                            maxWidth = Math.min(chart.chartHeight / 2, tickLabelSpacing);
                        } else {
                            maxWidth = chart.chartHeight / 2;
                        }
                        break;
                }
            }

            options.labels.style['font-size'] = fontSize + 'px';
            // For non-rotated labels, the current axis sizing is not accurate enough to correctly
            // elide the labels.  This will happen instead within the renderPreHook below.
            if (this.labelRotation !== 0) {
                this.ellipsizeLabels(axis, formatter, maxWidth, fontSize);
            }

            labelLineHeight = formatter.predictTextHeight('Test', fontSize);

            if (this.labelRotation === -45) {
                options.labels.align = 'right';
                xDelta = 0;
                yDelta = labelLineHeight / 4 + options.tickLength;
            } else if (this.labelRotation === 45) {
                options.labels.align = 'left';
                xDelta = 0;
                yDelta = labelLineHeight / 4 + options.tickLength;
            } else if (this.labelRotation === -90) {
                options.labels.align = 'right';
                xDelta = labelLineHeight / 4;
                yDelta = options.tickLength;
            } else if (this.labelRotation === 90) {
                options.labels.align = 'left';
                xDelta = -labelLineHeight / 4;
                yDelta = options.tickLength;
            } else {
                options.labels.align = 'center';
                xDelta = 0;
                // Division by 2 is trial and error, adding tick length keeps
                // the labels at the end of the tick
                yDelta = labelLineHeight / 2 + options.tickLength;
            }

            // If the labels are on the tick mark we add a little more padding
            if (!this.hasTickmarksBetween()) {
                yDelta += 6;
            }
            options.labels.step = labelStep;

            options.labels.x = xDelta;
            options.labels.y = yDelta;
        }
        formatter.destroy();
    },


    // An elision routine for non-rotated labels.  This must render after the axis is fully prepared to
    // render so that all measurements are completely accurate.  Unlike the work done in getOffsetPreHook
    // above, this happens after the ticks have been created, so they must be updated in place.
    renderPreHook: function renderPreHook(axis) {
        var options = axis.options;
        if (!axis.horiz || this.labelRotation !== 0 || !options.labels.enabled) {
            return;
        }
        var chart = axis.chart;
        var axisWidth = chart.plotWidth;
        var formatter = new _Formatter2.default(axis.chart.renderer);
        var fontSize = parseInt(options.labels.style['font-size'], 10);
        var categories = this.getCurrentlyVisibleCategories(axis);
        var tickSpacing = axisWidth / (categories.length || 1) - 2 * TICK_LABEL_PADDING;

        this.ellipsizeLabels(axis, formatter, tickSpacing, fontSize);
        axis.tickPositions.forEach(function (pos) {
            var tick = axis.ticks[pos];
            tick.label.css(options.labels.style);
            tick.addLabel();
        });
        formatter.destroy();
    },
    findBestFontForSpacing: function findBestFontForSpacing(fontWidths, spacing) {
        var bestFontSize = 0;
        (0, _underscore2.default)(fontWidths).each(function (width, fontSize) {
            if (width <= spacing) {
                bestFontSize = Math.max(bestFontSize, parseInt(fontSize, 10));
            }
        });
        return bestFontSize;
    },
    ellipsizeLabels: function ellipsizeLabels(axis, formatter, maxWidth, fontSize) {
        var i = void 0;
        var categories = this.getCurrentlyVisibleCategories(axis);
        var extremesMin = Math.round(axis.getExtremes().min);

        var adjustedLabels = (0, _underscore2.default)(categories).map(function (label, j) {
            return formatter.ellipsize(label, _underscore2.default.isArray(maxWidth) ? maxWidth[j] : maxWidth, fontSize, {}, 'middle');
        });

        for (i = 0; i < adjustedLabels.length; i++) {
            categories[i] = adjustedLabels[i];
        }
        (0, _underscore2.default)(categories).each(function (category, j) {
            axis.options.categories[extremesMin + j] = category;
        });
    },
    getCurrentlyVisibleCategories: function getCurrentlyVisibleCategories(axis) {
        var extremes = axis.getExtremes();
        var extremesMin = Math.round(extremes.min);
        var extremesMax = Math.round(extremes.max);
        var numCategories = extremesMax - extremesMin + (this.hasTickmarksBetween() ? 1 : 0);
        return this.originalCategories.slice(extremesMin, extremesMin + numCategories);
    },
    setTickPositionsPreHook: function setTickPositionsPreHook(axis) {
        if (!this.hasTickmarksBetween()) {
            // this will make sure Highcharts renders space for the last label
            axis.options.max = this.properties['axis.categories'].length;
        }
    },
    tickPositioner: function tickPositioner(axis, min, max) {
        if (this.shouldHideTicks(axis)) {
            // SPL-80164, return a small array with the correct extremes to avoid a Highcharts "too many ticks" error
            // per SPL-80436, we can't return an empty array here, the tick positions will be emptied in setTickPositionsPostHook
            return [min, max];
        }
        // returning null instructs Highcharts to use its default tick positioning routine
        return null;
    },
    setTickPositionsPostHook: function setTickPositionsPostHook(axis) {
        if (this.shouldHideTicks(axis)) {
            axis.tickPositions = [];
        }
        // Prevent Highcharts' adjustForMinRange from creating floating point axis min and max
        // when attempting to zoom into 1 column on iOS
        if (this.isiOS && this.hasTickmarksBetween() && this.originalCategories.length > 1) {
            axis.min = Math.round(axis.min);
            axis.max = Math.round(axis.max);
        }
    },
    shouldHideTicks: function shouldHideTicks(axis) {
        var threshold = this.isVertical ? 15 : 20;
        var extremes = axis.getExtremes();
        var numCategories = extremes.max - extremes.min + (this.hasTickmarksBetween() ? 1 : 0);
        var pixelsPerCategory = axis.len / numCategories;

        return pixelsPerCategory < threshold;
    },
    tickRenderPostHook: function tickRenderPostHook(tick, index, old, opacity) {
        var axisOptions = tick.axis.options;
        axisOptions.labels = axisOptions.labels || {};
        if (!axisOptions.labels.enabled || axisOptions.tickWidth === 0) {
            return;
        }
        _Axis2.default.prototype.tickRenderPostHook.call(this, tick, index, old, opacity);
    },
    formatValue: function formatValue(value) {
        return value;
    },
    formatLabel: function formatLabel(info) {
        return parsingUtils.escapeSVG(info);
    }
});

exports.default = CategoryAxis;
module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/format");

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _Formatter = __webpack_require__(10);

var _Formatter2 = _interopRequireDefault(_Formatter);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _color = __webpack_require__(7);

var colorUtils = _interopRequireWildcard(_color);

var _dom = __webpack_require__(91);

var domUtils = _interopRequireWildcard(_dom);

var _EventMixin = __webpack_require__(9);

var _EventMixin2 = _interopRequireDefault(_EventMixin);

var _HoverEventThrottler = __webpack_require__(28);

var _HoverEventThrottler2 = _interopRequireDefault(_HoverEventThrottler);

var _theme = __webpack_require__(5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Legend(properties) {
    this.properties = properties || {};
    this.id = _underscore2.default.uniqueId('legend_');
    this.clickEnabled = parsingUtils.normalizeBoolean(this.properties.clickEnabled);
    this.ellipsisMode = this.OVERFLOW_TO_ELLIPSIS_MAP[this.properties['labelStyle.overflowMode']] || this.DEFAULT_ELLIPSIS_MODE;
    this.UNHIGHLIGHTED_COLOR = colorUtils.addAlphaToColor(this.UNHIGHLIGHTED_BASE_COLOR, this.UNHIGHLIGHTED_OPACITY);
    this.isMultiSeries = properties.isMultiSeries;
    this.isExportMode = properties.isExportMode;
} /* eslint-disable func-names */


Legend.prototype = _jquery2.default.extend({}, _EventMixin2.default, {
    VALUE_LABEL_COLOR: 'rgba(150, 150, 150, 0.6)',
    HIGHLIGHTED_OPACITY: 1.0,
    HIGHLIGHTED_SYMBOL_OPACITY: 1.0,
    UNHIGHLIGHTED_OPACITY: 0.3,
    UNHIGHLIGHTED_BASE_COLOR: 'rgb(150, 150, 150)',
    DEFAULT_PLACEMENT: 'right',
    DEFAULT_ELLIPSIS_MODE: 'middle',
    POINT_VALUE_WIDTH: 60,
    BASE_CONFIG: {
        borderWidth: 0,
        symbolRadius: 0,
        squareSymbol: false
    },

    PLACEMENT_OPTIONS: {
        top: true,
        left: true,
        bottom: true,
        right: true,
        none: true
    },

    PLACEMENT_TO_MARGIN_MAP: {
        top: 12,
        left: 15,
        bottom: 2,
        right: 2
    },

    OVERFLOW_TO_ELLIPSIS_MAP: {
        ellipsisStart: 'start',
        ellipsisMiddle: 'middle',
        ellipsisEnd: 'end',
        ellipsisNone: 'none',
        default: 'start'
    },

    getConfig: function getConfig() {
        var placement =
        // eslint-disable-next-line no-prototype-builtins
        !this.isMultiSeries && this.PLACEMENT_OPTIONS.hasOwnProperty(this.properties['placement']) ? this.properties['placement'] : this.DEFAULT_PLACEMENT;

        // eslint-disable-next-line no-prototype-builtins
        var isVertical = { left: true, right: true }.hasOwnProperty(placement);
        var itemCursorStyle = this.clickEnabled ? 'pointer' : 'default';
        return _jquery2.default.extend(true, {}, this.BASE_CONFIG, {
            enabled: !this.properties['isEmpty'],
            align: isVertical ? placement : 'center',
            verticalAlign: isVertical ? 'middle' : placement,
            layout: isVertical ? 'vertical' : 'horizontal',

            // We put a fixed item width here in order to properly compute the max width
            // based on this value and how much space we want to allocate to our point value
            // portion of the legend, controlled by POINT_VALUE_WIDTH
            itemWidth: this.isMultiSeries ? 150 : null,
            margin: this.PLACEMENT_TO_MARGIN_MAP[placement],
            navigation: {
                activeColor: (0, _theme.getThemeProperty)('LEGEND_OVERFLOW_ARROW_COLOR_ACTIVE'),
                inactiveColor: (0, _theme.getThemeProperty)('LEGEND_OVERFLOW_ARROW_COLOR_INACTIVE'),
                style: {
                    color: (0, _theme.getThemeProperty)('LEGEND_OVERFLOW_FONT_COLOR')
                }
            },
            itemStyle: {
                cursor: itemCursorStyle,
                color: this.properties['fontColor'] || (0, _theme.getThemeProperty)('DEFAULT_FONT_COLOR'),
                fontWeight: 'normal',
                // Hack to make sure we can render literal '<' and '>'
                HcTextStroke: true
            },
            itemHoverStyle: {
                cursor: itemCursorStyle,
                color: this.properties['fontColor'] || (0, _theme.getThemeProperty)('DEFAULT_FONT_COLOR')
            },
            renderItemsPreHook: (0, _underscore2.default)(this.renderItemsPreHook).bind(this),
            renderItemsPostHook: (0, _underscore2.default)(this.renderItemsPostHook).bind(this),
            renderPreHook: (0, _underscore2.default)(this.renderPreHook).bind(this),
            renderPostHook: (0, _underscore2.default)(this.renderPostHook).bind(this)
        });
    },
    onChartLoad: function onChartLoad(chart) {
        // Works but may need to be changed in the future
        this.hcSeriesList = (0, _underscore2.default)(chart.series).filter(function (series) {
            return series.options.showInLegend !== false;
        });
        this.setSymbolFillOpacity(this.hcSeriesList[0]);
    },
    onChartLoadOrRedraw: function onChartLoadOrRedraw(chart) {
        this.hcSeriesList = (0, _underscore2.default)(chart.series).filter(function (series) {
            return series.options.showInLegend !== false;
        });
        this.removeEventHandlers();
        this.addEventHandlers();
    },
    setSymbolFillOpacity: function setSymbolFillOpacity(series) {
        // Line chart has a "legendLine" instead of a "legendSymbol"
        var symbol = series.legendSymbol || series.legendLine;
        // Highcharts SVG wrapper's 'attr' method returns 0 if fill-opacity attribute is not set (which behaves like fill-opacity = 1)
        var computedOpacity = colorUtils.getComputedOpacity(symbol);
        if (computedOpacity === 0) {
            // Highcharts attr method when used to set fill-opacity seems to treat fill-opacity 0 as 0, as opposed 1 (as the above would indicate)
            this.HIGHLIGHTED_SYMBOL_OPACITY = 1;
        } else {
            this.HIGHLIGHTED_SYMBOL_OPACITY = computedOpacity;
        }
    },
    addEventHandlers: function addEventHandlers() {
        var that = this;

        var properties = {
            highlightDelay: 125,
            unhighlightDelay: 50,
            onMouseOver: function onMouseOver(fieldName) {
                that.selectField(fieldName);
                that.trigger('mouseover', [fieldName]);
            },
            onMouseOut: function onMouseOut(fieldName) {
                that.unSelectField(fieldName);
                that.trigger('mouseout', [fieldName]);
            }
        };

        var throttle = new _HoverEventThrottler2.default(properties);

        (0, _underscore2.default)(this.hcSeriesList).each(function (series) {
            var fieldName = series.name;
            (0, _underscore2.default)(this.getSeriesLegendObjects(series)).each(function (graphic) {
                (0, _jquery2.default)(graphic.element).on('mouseover.' + this.id, function () {
                    throttle.mouseOverHappened(fieldName);
                });
                (0, _jquery2.default)(graphic.element).on('mouseout.' + this.id, function () {
                    throttle.mouseOutHappened(fieldName);
                });
                if (this.clickEnabled) {
                    (0, _jquery2.default)(graphic.element).on('click.' + this.id, function (e) {
                        var clickEvent = {
                            type: 'click',
                            modifierKey: e.ctrlKey || e.metaKey
                        };
                        that.trigger(clickEvent, [fieldName]);
                    });
                }
            }, this);
        }, this);
    },
    removeEventHandlers: function removeEventHandlers() {
        (0, _underscore2.default)(this.hcSeriesList).each(function (series) {
            (0, _underscore2.default)(this.getSeriesLegendObjects(series)).each(function (graphic) {
                (0, _jquery2.default)(graphic.element).off('.' + this.id);
            }, this);
        }, this);
    },
    selectField: function selectField(fieldName) {
        (0, _underscore2.default)(this.hcSeriesList).each(function (series) {
            if (series.name !== fieldName) {
                this.unHighlightField(fieldName, series);
            } else {
                this.highlightField(fieldName, series);
            }
        }, this);
    },
    unSelectField: function unSelectField(fieldName) {
        (0, _underscore2.default)(this.hcSeriesList).each(function (series) {
            if (series.name !== fieldName) {
                this.highlightField(fieldName, series);
            }
        }, this);
    },
    highlightField: function highlightField(fieldName, series) {
        series = series || this.getSeriesByFieldName(fieldName);
        var objects = this.getSeriesLegendObjects(series);
        var seriesColor = series.color;
        if (objects.item) {
            objects.item.attr('fill-opacity', this.HIGHLIGHTED_OPACITY);
        }
        if (objects.line) {
            objects.line.attr('stroke', seriesColor);
        }
        if (objects.symbol) {
            objects.symbol.attr({
                fill: seriesColor,
                stroke: seriesColor,
                'fill-opacity': this.HIGHLIGHTED_SYMBOL_OPACITY
            });
        }
    },
    unHighlightField: function unHighlightField(fieldName, series) {
        series = series || this.getSeriesByFieldName(fieldName);
        var objects = this.getSeriesLegendObjects(series);
        if (objects.item) {
            objects.item.attr('fill-opacity', this.UNHIGHLIGHTED_OPACITY);
        }
        if (objects.line) {
            objects.line.attr('stroke', this.UNHIGHLIGHTED_COLOR);
        }
        if (objects.symbol) {
            objects.symbol.attr({
                fill: this.UNHIGHLIGHTED_COLOR,
                stroke: this.UNHIGHLIGHTED_COLOR,
                'fill-opacity': this.UNHIGHLIGHTED_OPACITY
            });
        }
    },
    updateLegend: function updateLegend(points) {
        var that = this;
        if (!(that.hcSeriesList && that.hcSeriesList.length) || !points) {
            return;
        }

        that.hcSeriesList.forEach(function (series, i) {
            var point = points.filter(function (e) {
                return e.seriesIndex === i;
            });
            if (!point.length) {
                domUtils.setLegendItemText(series.legendItem, series.ellipsizedName);
            } else {
                // these spans get transformed into <tspan> SVG elements during render of the chart
                var newLegendText = '<span>' + series.ellipsizedName + ' </span><span style="color: ' + that.VALUE_LABEL_COLOR + '">' + point[0].formattedValue + '</span>';
                domUtils.setLegendItemText(series.legendItem, newLegendText);
            }
        });
    },
    resetLegend: function resetLegend() {
        if (!this.hcSeriesList) {
            return;
        }
        this.hcSeriesList.forEach(function (series) {
            domUtils.setLegendItemText(series.legendItem, series.ellipsizedName);
        });
    },
    getSeriesByFieldName: function getSeriesByFieldName(fieldName) {
        return (0, _underscore2.default)(this.hcSeriesList).find(function (series) {
            return series.name === fieldName;
        });
    },
    getSeriesLegendObjects: function getSeriesLegendObjects(series) {
        var objects = {};

        if (series.legendItem) {
            objects.item = series.legendItem;
        }
        if (series.legendSymbol) {
            objects.symbol = series.legendSymbol;
        }
        if (series.legendLine) {
            objects.line = series.legendLine;
        }
        return objects;
    },
    destroy: function destroy() {
        this.off();
        this.removeEventHandlers();
        this.hcSeriesList = null;
    },


    /**
     * @author sfishel
     *
     * Do some intelligent ellipsizing of the legend labels (if needed) before they are rendered.
     */

    renderItemsPreHook: function renderItemsPreHook(legend) {
        var i = void 0;
        var fixedWidth = void 0;
        var maxWidth = void 0;
        var options = legend.options;
        var itemStyle = legend.itemStyle;
        var items = legend.allItems;
        var chart = legend.chart;
        var renderer = chart.renderer;
        var spacingBox = chart.spacingBox;
        var horizontalLayout = options.layout === 'horizontal';
        var defaultFontSize = 12;
        var minFontSize = 10;
        var symbolWidth = legend.symbolWidth;
        var symbolPadding = options.symbolPadding;
        var boxPadding = legend.padding || 0;
        var itemHorizSpacing = 10;
        var labels = [];
        var formatter = new _Formatter2.default(renderer);

        if (horizontalLayout) {
            maxWidth = items.length > 5 ? // With more than 5 items, don't try to fit them all on one line.
            Math.floor(spacingBox.width / 6) : // With >= 5 items, determine the width allowed for each item to fit all on one line, taking into account
            // the space needed for the symbol and padding between items
            Math.floor(spacingBox.width / items.length) - (symbolWidth + symbolPadding + itemHorizSpacing);
        } else {
            maxWidth = this.isMultiSeries && !this.isExportMode ? options.itemWidth - this.POINT_VALUE_WIDTH : Math.floor(spacingBox.width / 6) - (symbolWidth + symbolPadding + boxPadding);
        }

        // make a copy of the original formatting function, since we're going to clobber it
        if (!options.originalFormatter) {
            options.originalFormatter = options.labelFormatter;
        }
        // get all of the legend labels
        for (i = 0; i < items.length; i++) {
            labels.push(options.originalFormatter.call(items[i]));
        }

        var adjusted = formatter.adjustLabels(labels, maxWidth, minFontSize, defaultFontSize, this.ellipsisMode);

        // in case of horizontal layout with ellipsized labels, set a fixed width for nice alignment
        if (adjusted.areEllipsized && horizontalLayout && items.length > 5) {
            fixedWidth = maxWidth + symbolWidth + symbolPadding + itemHorizSpacing;
            options.itemWidth = fixedWidth;
        } else if (!this.isMultiSeries || this.isExportMode) {
            options.itemWidth = undefined;
        }

        // set the new labels to the name field of each item
        for (i = 0; i < items.length; i++) {
            items[i].ellipsizedName = adjusted.labels[i];
            // if the legendItem is already set this is a resize event, so we need to explicitly reformat the item
            if (items[i].legendItem) {
                domUtils.setLegendItemText(items[i].legendItem, parsingUtils.escapeSVG(adjusted.labels[i]));
                items[i].legendItem.css({ 'font-size': adjusted.fontSize + 'px' });
            }
        }
        // now that the ellipsizedName field has the pre-formatted labels, update the label formatter
        options.labelFormatter = function () {
            return parsingUtils.escapeSVG(this.ellipsizedName);
        };
        // adjust the font size
        itemStyle['font-size'] = adjusted.fontSize + 'px';
        legend.itemMarginTop = defaultFontSize - adjusted.fontSize;
        formatter.destroy();
    },


    /**
     * @author sfishel
     *
     * Detect if the legend items will overflow the container (in which case navigation buttons will be shown)
     * and adjust the default values for the vertical positioning and width
     *
     * FIXME: it would be better to do this work after the nav has been rendered instead of
     * hard-coding an expected width
     */

    renderItemsPostHook: function renderItemsPostHook(legend) {
        var NAV_WIDTH = 55;
        var options = legend.options;
        var padding = legend.padding;
        var legendHeight = legend.lastItemY + legend.lastLineHeight;
        var availableHeight = legend.chart.spacingBox.height - padding;

        if (legendHeight > availableHeight) {
            options.verticalAlign = 'top';
            options.y = -padding;
            if (legend.offsetWidth < NAV_WIDTH) {
                options.width = NAV_WIDTH;
            }
        } else {
            // SPL-70551, make sure to set things back to defaults in case the chart was resized to a larger height
            var config = this.getConfig();
            _jquery2.default.extend(options, {
                verticalAlign: config.verticalAlign,
                y: config.y,
                width: config.width
            });
        }
    },


    // SPL-88618
    // Highcharts works around some rendering bugs in Firefox and IE 11 by delaying the positioning of legend items.
    // However, this results in a split second where all of the legend items are on top of each other.
    // Some basic testing indicates that these bugs no longer exist in latest versions of Firefox and IE 11,
    // so we trick Highcharts into not delaying by pretending to be in export mode, just for the legend render.
    renderPreHook: function renderPreHook(legend) {
        var renderer = legend.chart.renderer;
        this._rendererForExport = renderer.forExport;
        renderer.forExport = true;
    },
    renderPostHook: function renderPostHook(legend) {
        legend.chart.renderer.forExport = this._rendererForExport;
    }
});

exports.default = Legend;
module.exports = exports['default'];

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tooltip(properties) {
    this.properties = properties || {};
}

var TOOLTIP_MODES = {
    seriesCompare: {
        positioner: function positioner(boxWidth, boxHeight, point) {
            var plotWidth = this.chart.plotWidth;
            var plotHeight = this.chart.plotHeight;

            var rightmostBound = this.chart.plotLeft + plotWidth - boxWidth;
            var curPosition = point.plotX + this.chart.plotLeft - boxWidth / 2;
            var position = {
                // this positions our x point between the left and right bounds of our
                // plot area, taking into account our tooltip dimensions
                x: Math.max(this.chart.plotLeft, Math.min(curPosition, rightmostBound)),
                y: plotHeight + boxHeight / 2 + 1
            };

            return position;
        },


        // This option removes the "arrow" on the tooltip
        shape: 'square',
        shared: true
    }
};
Tooltip.prototype = {
    BASE_CONFIG: {
        enabled: true,
        backgroundColor: (0, _theme.getThemeProperty)('TOOLTIP_BACKGROUND_COLOR'),
        borderColor: (0, _theme.getThemeProperty)('TOOLTIP_BORDER_COLOR'),
        hideDelay: 0,
        style: {
            color: (0, _theme.getThemeProperty)('TOOLTIP_FONT_COLOR_SOFT')
        },
        /**
         * @author sfishel
         *
         * If the tooltip is too wide for the plot area, clip it left not right.
         *
         * unit test: js_charting/components/test_tooltip.html
         */
        positioner: function positioner(boxWidth, boxHeight, point) {
            var position = this.getPosition(boxWidth, boxHeight, point);
            var plotWidth = this.chart.plotWidth;
            var plotHeight = this.chart.plotHeight;
            var resetZoomButton = (0, _jquery2.default)(this.chart.container).find('[name="reset-zoom"]');

            // If the point lies outside of the plot, we move the tooltip
            // back into the plot area. The numeric constants are to account
            // for the tooltip 'tail'
            // NOTE: points that are within the plot handle the tooltip
            // correctly by default, so we don't have to worry about
            // cases where just the tooltip box overflows the plot.
            if (point.plotX > plotWidth) {
                position.x = this.chart.plotLeft + plotWidth - boxWidth - 8;
            }
            if (point.plotX < 0) {
                position.x = this.chart.plotLeft + 8;
            }
            if (point.plotY < 0) {
                position.y = 0 + 17;
            }
            if (point.plotY > plotHeight) {
                position.y = plotHeight - boxHeight + 3;
            }

            // Prevent tooltip from blocking the reset zoom button
            if (resetZoomButton.length > 0) {
                var buttonPos = resetZoomButton.position();
                if (buttonPos) {
                    var buttonTop = buttonPos.top;
                    var buttonHeight = resetZoomButton.height();
                    var buttonBottom = buttonTop + buttonHeight;
                    var tooltipTop = position.y;
                    if (tooltipTop < buttonBottom) {
                        // Tooltip is overlapping reset button -> shift tooltip to below point
                        position.y = point.plotY + 17; // height of tooltip 'tail': ~ 17
                    }
                }
            }

            return position;
        },

        /**
         * @author sfishel
         *
         * Adjust the tooltip anchor position for column charts.
         * Use a position relative to the selected column instead of a shared one for the series group.
         *
         * unit test: js_charting/components/test_tooltip.html
         */
        getAnchorPostHook: function getAnchorPostHook(points, mouseEvent, anchor) {
            if (points && !_underscore2.default.isArray(points) && points.series.options.type === 'column') {
                anchor[0] = points.barX;
            }
            return anchor;
        }
    },

    getConfig: function getConfig() {
        var mode = this.properties['mode'];

        return _jquery2.default.extend(true, {}, this.BASE_CONFIG,
        // runtime theme configuration
        {
            backgroundColor: (0, _theme.getThemeProperty)('TOOLTIP_BACKGROUND_COLOR'),
            borderColor: (0, _theme.getThemeProperty)('TOOLTIP_BORDER_COLOR'),
            style: {
                color: (0, _theme.getThemeProperty)('TOOLTIP_FONT_COLOR_SOFT')
            }
        }, {
            borderColor: this.properties['borderColor']
        }, TOOLTIP_MODES[mode]);
    },
    destroy: function destroy() {}
};

exports.default = Tooltip;
module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _i18n = __webpack_require__(12);

var _i18n2 = _interopRequireDefault(_i18n);

var _bowser = __webpack_require__(46);

var _bowser2 = _interopRequireDefault(_bowser);

var _EventMixin = __webpack_require__(9);

var _EventMixin2 = _interopRequireDefault(_EventMixin);

var _buttonStyles = __webpack_require__(50);

var _buttonStyles2 = _interopRequireDefault(_buttonStyles);

var _iconCircleMinus = __webpack_require__(92);

var _iconCircleMinus2 = _interopRequireDefault(_iconCircleMinus);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getThemedResetZoomButtonCls() {
    if ((0, _theme.getCurrentTheme)() === 'dark') {
        return _buttonStyles2.default.resetZoomButtonDark;
    }
    return _buttonStyles2.default.resetZoomButton;
}

function SelectionWindow(hcChart, axisValueSnapper) {
    this.id = _underscore2.default.uniqueId('selection_window');
    this.hcChart = hcChart;
    this.renderer = hcChart.renderer;
    this.axis = hcChart.xAxis[0];
    this.axisHasTickmarksBetween = this.axis.options.tickmarkPlacement === 'between';
    this.axisValueOffset = this.axis.tickmarkOffset;
    this.axisValueSnapper = axisValueSnapper;
    this.isiOS = !!_bowser2.default.ios;

    var selectionMarkerX = void 0;
    var selectionMarkerWidth = void 0;
    this.pointer = hcChart.pointer;
    if (this.pointer.selectionMarker.renderer) {
        // SelectionMarker was created by mouse drag
        this.zIndex = this.pointer.selectionMarker.attr('zIndex');
        selectionMarkerX = this.pointer.selectionMarker.attr('x');
        selectionMarkerWidth = this.pointer.selectionMarker.attr('width');
    } else {
        // SelectionMarker was created by touch pinch
        this.zIndex = 7; // default Highcharts pointer selection marker z-index
        selectionMarkerX = this.pointer.selectionMarker.x;
        selectionMarkerWidth = this.pointer.selectionMarker.width;
    }
    var rawX = selectionMarkerX;
    var right = this.snapXValue(rawX + selectionMarkerWidth, this.axisHasTickmarksBetween ? 'ceil' : 'round', 'max');
    this.x = this.snapXValue(rawX, this.axisHasTickmarksBetween ? 'floor' : 'round', 'min');

    this.width = right - this.x;
    this.createResizeHandles();
    this.ownedElements = [this.resizeHandleLeft.element, this.resizeHandleRight.element];
    this.updateExtremesValues();
    var $chartContainer = (0, _jquery2.default)(this.hcChart.container);
    this.defaultContainerCursor = $chartContainer.css('cursor');
    $chartContainer.on('mousemove.' + this.id, (0, _underscore2.default)(this.onContainerMouseMove).bind(this));
    this.initialized = true;
}

SelectionWindow.prototype = _jquery2.default.extend({}, _EventMixin2.default, {
    handleWidth: _bowser2.default.ios ? 25 : 10,
    handleHeight: 50,
    handleBorderColor: 'rgb(255,255,255)',
    handleBgColor: 'rgba(79,79,79,0.5)',
    handleBorderRadius: 5,
    shadedAreaColor: 'rgba(100,100,100,0.3)',

    handleDragStartEvent: function handleDragStartEvent(e) {
        var target = e.target;

        var isSelectionDrag = target === this.hcChart.chartBackground.element && this.hcChart.isInsidePlot(e.chartX - this.hcChart.plotLeft, e.chartY - this.hcChart.plotTop);

        if (isSelectionDrag || (0, _underscore2.default)(this.ownedElements).contains(target)) {
            this.originalTarget = target;
            this.mouseDownX = this.getCurrentX();
            this.mouseDownWidth = this.getCurrentWidth();
            this.isDragging = true;
            return true;
        }
        return false;
    },
    handleDragEvent: function handleDragEvent(e) {
        if (this.originalTarget === this.hcChart.chartBackground.element) {
            this.dragSelectionMarker(e);
        }
        if (this.originalTarget === this.resizeHandleLeft.element) {
            this.resizeSelectionLeft(e);
        }
        if (this.originalTarget === this.resizeHandleRight.element) {
            this.resizeSelectionRight(e);
        }
    },
    handleDropEvent: function handleDropEvent() {
        if (this.isDragging) {
            this.updateExtremesValues();
            this.emitSelectionEvent();
            this.isDragging = false;
        }
    },
    getExtremes: function getExtremes() {
        return { min: this.startValue, max: this.endValue };
    },
    setExtremes: function setExtremes(extremes) {
        this.startValue = extremes.min;
        this.endValue = extremes.max;
    },
    onContainerMouseMove: function onContainerMouseMove(e) {
        e = this.pointer.normalize(e);
        if (e.target === this.hcChart.chartBackground.element && this.hcChart.isInsidePlot(e.chartX - this.hcChart.plotLeft, e.chartY - this.hcChart.plotTop)) {
            (0, _jquery2.default)(this.hcChart.container).css('cursor', 'move');
        } else {
            (0, _jquery2.default)(this.hcChart.container).css('cursor', this.defaultContainerCursor);
        }
    },
    onChartRedraw: function onChartRedraw() {
        this.axisValueOffset = this.axis.tickmarkOffset;
        this.x = Math.round(this.axis.toPixels(this.startValue + this.axisValueOffset));
        this.width = Math.round(this.axis.toPixels(this.endValue + this.axisValueOffset)) - this.x;
        this.resizeHandleLeft.attr({
            y: this.hcChart.plotTop + this.hcChart.plotHeight / 2 - this.handleHeight / 2
        });
        this.resizeHandleRight.attr({
            y: this.hcChart.plotTop + this.hcChart.plotHeight / 2 - this.handleHeight / 2
        });
        this.shadedRegionLeft.attr({
            x: this.hcChart.plotLeft,
            y: this.hcChart.plotTop,
            height: this.hcChart.plotHeight
        });
        this.shadedRegionRight.attr({
            y: this.hcChart.plotTop,
            height: this.hcChart.plotHeight
        });
        this.positionResizeHandles('both');
    },
    destroy: function destroy() {
        if (this.initialized) {
            this.resizeHandleLeft.destroy();
            this.resizeHandleRight.destroy();
            this.handleVerticalLineLeft.destroy();
            this.handleVerticalLineRight.destroy();
            this.shadedRegionRight.destroy();
            this.shadedRegionLeft.destroy();
            this.$resetButton.remove();
            this.initialized = false;
        }
        (0, _jquery2.default)(this.hcChart.container).off('mousemove.' + this.id);
        this.off();
    },
    dragSelectionMarker: function dragSelectionMarker(e) {
        var chartMouseDownX = this.getChartMouseDownX();
        this.x = this.snapXValue(this.mouseDownX + e.chartX - chartMouseDownX, 'round');
        // don't let the marker outside the plot area
        this.x = Math.max(this.x, this.hcChart.plotLeft);
        this.x = Math.min(this.x, this.hcChart.plotLeft + this.hcChart.plotWidth - this.getCurrentWidth());
        this.positionResizeHandles('both');
    },
    resizeSelectionLeft: function resizeSelectionLeft(e) {
        var currentX = this.getCurrentX();
        var currentWidth = this.getCurrentWidth();
        var chartMouseDownX = this.getChartMouseDownX();

        // set the new x based on how far the mouse was dragged
        this.x = this.snapXValue(this.mouseDownX + e.chartX - chartMouseDownX, 'round');
        // don't let the marker outside the plot area
        this.x = Math.max(this.x, this.hcChart.plotLeft);
        // don't let the handle meet the other handle
        var right = currentX + currentWidth;
        this.x = Math.min(this.x, this.axis.toPixels(this.axis.toValue(right) - 1));
        this.width = currentWidth - this.x + currentX;
        this.positionResizeHandles('left');
    },
    resizeSelectionRight: function resizeSelectionRight(e) {
        this.x = this.getCurrentX();

        // set the new width based on how far the mouse was dragged
        var chartMouseDownX = this.getChartMouseDownX();

        var newWidth = this.mouseDownWidth + e.chartX - chartMouseDownX;
        var right = this.snapXValue(this.x + newWidth, 'round');

        this.width = right - this.x;
        // don't let the marker outside the plot area
        this.width = Math.min(this.width, this.hcChart.plotLeft + this.hcChart.plotWidth - this.x);
        // don't let the handle meet the other handle, i.e. width must be >= 1 axis unit
        this.width = Math.max(this.width, this.axis.toPixels(1) - this.axis.toPixels(0));
        this.positionResizeHandles('right');
    },
    getChartMouseDownX: function getChartMouseDownX() {
        return this.pointer.pinchDown[0] ? this.pointer.pinchDown[0].chartX : this.pointer.mouseDownX;
    },
    emitSelectionEvent: function emitSelectionEvent() {
        var xAxis = this.axis;
        var rangeStart = xAxis.toValue(this.x) + this.axisValueOffset;
        var rangeEnd = xAxis.toValue(this.x + this.width) - this.axisValueOffset;

        this.trigger('rangeSelect', [rangeStart, rangeEnd]);
    },
    createResizeHandles: function createResizeHandles() {
        var handleAttrs = {
            zIndex: this.zIndex + 1,
            fill: {
                linearGradient: { x1: 0, y1: 0.5, x2: 1, y2: 0.5 },
                stops: [[0, this.handleBgColor], [1 / 6, this.handleBorderColor], [2 / 6, this.handleBgColor], [3 / 6, this.handleBorderColor], [4 / 6, this.handleBgColor], [5 / 6, this.handleBorderColor], [1, this.handleBgColor]]
            },
            'stroke-width': 2,
            stroke: this.handleBgColor
        };

        var handleLineAttrs = {
            'stroke-width': 2,
            stroke: this.handleBgColor,
            zIndex: this.zIndex
        };
        var shadedRegionAttrs = { zIndex: this.zIndex, fill: this.shadedAreaColor };
        var top = this.hcChart.plotTop + this.hcChart.plotHeight / 2 - this.handleHeight / 2;

        this.shadedRegionRight = this.renderer.rect(0, this.hcChart.plotTop, 0, this.hcChart.plotHeight).attr(shadedRegionAttrs).add();
        this.handleVerticalLineRight = this.renderer.path().attr(handleLineAttrs).add();
        this.resizeHandleRight = this.renderer.rect(0, top, this.handleWidth, this.handleHeight, this.handleBorderRadius).attr(handleAttrs).css({ cursor: 'ew-resize' }).add();

        this.shadedRegionLeft = this.renderer.rect(this.hcChart.plotLeft, this.hcChart.plotTop, 0, this.hcChart.plotHeight).attr(shadedRegionAttrs).add();
        this.handleVerticalLineLeft = this.renderer.path().attr(handleLineAttrs).add();

        this.resizeHandleLeft = this.renderer.rect(0, top, this.handleWidth, this.handleHeight, this.handleBorderRadius).attr(handleAttrs).css({ cursor: 'ew-resize' }).add();

        this.positionResizeHandles('both');

        this.$resetButton = (0, _jquery2.default)((0, _underscore2.default)(this.resetButtonTemplate).template({ i18n: _i18n2.default, getThemedResetZoomButtonCls: getThemedResetZoomButtonCls }));
        this.$resetButton.on('click', function (e) {
            e.preventDefault();
        });
        this.$resetButton.css({
            top: this.hcChart.yAxis[0].top + 'px',
            right: this.hcChart.xAxis[0].right + 'px',
            position: 'absolute'
        });
        this.$resetButton.appendTo(this.hcChart.container);
    },
    positionResizeHandles: function positionResizeHandles(whichOnes) {
        var markerLeft = this.x;
        var markerRight = markerLeft + this.width;
        var plotTop = this.hcChart.plotTop;
        var plotBottom = plotTop + this.hcChart.plotHeight;
        var plotLeft = this.hcChart.plotLeft;
        var plotRight = plotLeft + this.hcChart.plotWidth;

        if (whichOnes === 'both' || whichOnes === 'left') {
            this.shadedRegionLeft.attr({ width: markerLeft - plotLeft });
            this.handleVerticalLineLeft.attr({
                d: ['M', markerLeft, plotTop, 'L', markerLeft, plotBottom]
            });
            this.resizeHandleLeft.attr({ x: markerLeft - this.handleWidth / 2 });
        }
        if (whichOnes === 'both' || whichOnes === 'right') {
            this.shadedRegionRight.attr({ x: markerRight, width: plotRight - markerRight });
            this.handleVerticalLineRight.attr({
                d: ['M', markerRight, plotTop, 'L', markerRight, plotBottom]
            });
            this.resizeHandleRight.attr({ x: markerRight - this.handleWidth / 2 });
        }
    },
    getCurrentX: function getCurrentX() {
        return this.resizeHandleLeft.attr('x') + this.handleWidth / 2;
    },
    getCurrentWidth: function getCurrentWidth() {
        return this.resizeHandleRight.attr('x') + this.handleWidth / 2 - this.getCurrentX();
    },
    snapXValue: function snapXValue(rawXValue, mathOperation) {
        var axis = this.axis;
        var axisValue = axis.toValue(rawXValue);

        return axis.toPixels(this.axisValueSnapper(axisValue - this.axisValueOffset, mathOperation) + this.axisValueOffset);
    },
    updateExtremesValues: function updateExtremesValues() {
        this.startValue = Math.round(this.axis.toValue(this.x) - this.axisValueOffset);
        this.endValue = Math.round(this.axis.toValue(this.x + this.width) - this.axisValueOffset);
    },


    resetButtonTemplate: '<button class="<%= getThemedResetZoomButtonCls() %>" name="reset-zoom"><span class="' + _buttonStyles2.default.resetZoomIcon + '">' + _iconCircleMinus2.default + '</span><%= i18n._("Reset") %></button>'
});

exports.default = SelectionWindow;
module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {
                    var styles = {"lite":".button_button-styles__guid__2c08f0{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-webkit-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;columns:auto;-webkit-column-count:auto;column-count:auto;-webkit-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;column-span:1;-webkit-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;font-family:Splunk Platform Sans,Proxima Nova,Roboto,Droid,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:#3c444d;box-sizing:border-box;display:inline-block;border-width:1px;visibility:inherit;outline:medium none #00a4fd;outline:medium none invert;background:rgba(60,68,77,.4);border-radius:3px;color:#fff;cursor:pointer;font-size:12px;line-height:27px;padding:0 10px;z-index:9999}.button_button-styles__guid__2c08f0::-moz-focus-inner{border:0;padding:0}.button_button-styles__guid__2c08f0:active,.button_button-styles__guid__2c08f0:hover{background:rgba(60,68,77,.35);color:#fff}.button_button-styles__guid__2c08f0:focus{border-color:rgba(0,164,253,.8);color:#00a4fd}.button_button-styles__guid__2c08f0[disabled]{background:transparent;color:#c3cbd4;cursor:default}.button_button-styles__guid__2c08f0[disabled]:hover{background:transparent;color:#c3cbd4;cursor:default}.button-dark-theme_button-styles__guid__2c08f0{background:#3c444d}.button-dark-theme_button-styles__guid__2c08f0:active,.button-dark-theme_button-styles__guid__2c08f0:hover{background:#5c6773;color:#fff}.button-dark-theme_button-styles__guid__2c08f0:focus{background:#2b3033;color:#006eaa}.panButton_button-styles__guid__2c08f0{border-radius:1px;line-height:10px;padding:4px 5px}.panButtonDark_button-styles__guid__2c08f0{border-radius:1px;line-height:10px;padding:4px 5px}.resetZoomButton_button-styles__guid__2c08f0{margin-top:5px;margin-right:10px}.resetZoomButtonDark_button-styles__guid__2c08f0{margin-top:5px;margin-right:10px}.resetZoomIcon_button-styles__guid__2c08f0{margin-right:3px}","enterprise":".button_button-styles__guid__2c08f0{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-webkit-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;columns:auto;-webkit-column-count:auto;column-count:auto;-webkit-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;column-span:1;-webkit-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;font-family:Splunk Platform Sans,Proxima Nova,Roboto,Droid,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:#3c444d;box-sizing:border-box;display:inline-block;border-width:1px;visibility:inherit;outline:medium none #00a4fd;outline:medium none invert;background:rgba(60,68,77,.4);border-radius:3px;color:#fff;cursor:pointer;font-size:12px;line-height:27px;padding:0 10px;z-index:9999}.button_button-styles__guid__2c08f0::-moz-focus-inner{border:0;padding:0}.button_button-styles__guid__2c08f0:active,.button_button-styles__guid__2c08f0:hover{background:rgba(60,68,77,.35);color:#fff}.button_button-styles__guid__2c08f0:focus{border-color:rgba(0,164,253,.8);color:#00a4fd}.button_button-styles__guid__2c08f0[disabled]{background:transparent;color:#c3cbd4;cursor:default}.button_button-styles__guid__2c08f0[disabled]:hover{background:transparent;color:#c3cbd4;cursor:default}.button-dark-theme_button-styles__guid__2c08f0{background:#3c444d}.button-dark-theme_button-styles__guid__2c08f0:active,.button-dark-theme_button-styles__guid__2c08f0:hover{background:#5c6773;color:#fff}.button-dark-theme_button-styles__guid__2c08f0:focus{background:#2b3033;color:#006eaa}.panButton_button-styles__guid__2c08f0{border-radius:1px;line-height:10px;padding:4px 5px}.panButtonDark_button-styles__guid__2c08f0{border-radius:1px;line-height:10px;padding:4px 5px}.resetZoomButton_button-styles__guid__2c08f0{margin-top:5px;margin-right:10px}.resetZoomButtonDark_button-styles__guid__2c08f0{margin-top:5px;margin-right:10px}.resetZoomIcon_button-styles__guid__2c08f0{margin-right:3px}"};
                    var themeLocals = {"lite":{"button":"button_button-styles__guid__2c08f0","button-dark-theme":"button-dark-theme_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","panButton":"panButton_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","panButtonDark":"panButtonDark_button-styles__guid__2c08f0 button-dark-theme_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","resetZoomButton":"resetZoomButton_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","resetZoomButtonDark":"resetZoomButtonDark_button-styles__guid__2c08f0 button-dark-theme_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","resetZoomIcon":"resetZoomIcon_button-styles__guid__2c08f0"},"enterprise":{"button":"button_button-styles__guid__2c08f0","button-dark-theme":"button-dark-theme_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","panButton":"panButton_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","panButtonDark":"panButtonDark_button-styles__guid__2c08f0 button-dark-theme_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","resetZoomButton":"resetZoomButton_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","resetZoomButtonDark":"resetZoomButtonDark_button-styles__guid__2c08f0 button-dark-theme_button-styles__guid__2c08f0 button_button-styles__guid__2c08f0","resetZoomIcon":"resetZoomIcon_button-styles__guid__2c08f0"}};

                    var partialsTheme =
                        window.__splunkd_partials__ &&
                        window.__splunkd_partials__['/services/server/info'] &&
                        window.__splunkd_partials__['/services/server/info']
                            .entry[0].content.product_type;
                    var windowTheme = window.__splunk_ui_theme__;
                    var cTheme = window.$C && window.$C.SPLUNK_UI_THEME;
                    var targetTheme = windowTheme || cTheme || partialsTheme;

                    /* Ensure theme defaults to 'enterprise'. It's possible targetTheme is set to an
                    /* unsupported value, such as 'splunkbase', 'enterprise2018' or false. */
                    var theme = targetTheme === 'lite' ? 'lite' : 'enterprise';

                    function s4() {
                      return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                    }
                    var guid = module.guid ||  s4() + s4() + s4() + s4();
                    // Add guid to locals
                    Object.keys(themeLocals[theme]).forEach(function(className) {
                        var value = themeLocals[theme][className];
                        themeLocals[theme][className] =
                            value.replace(/_guid_/g, guid);
                    });
                    //  Add guid to styles
                    styles[theme] = styles[theme].replace(/_guid_/g, guid);
                    module.exports = [[module.i, styles[theme], '']];
                    module.exports.locals = themeLocals[theme];
                    module.guid = guid;
                
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)(module)))

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(197);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 197 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _i18n = __webpack_require__(12);

var _i18n2 = _interopRequireDefault(_i18n);

var _EventMixin = __webpack_require__(9);

var _EventMixin2 = _interopRequireDefault(_EventMixin);

var _buttonStyles = __webpack_require__(50);

var _buttonStyles2 = _interopRequireDefault(_buttonStyles);

var _iconChevronLeft = __webpack_require__(199);

var _iconChevronLeft2 = _interopRequireDefault(_iconChevronLeft);

var _iconChevronRight = __webpack_require__(200);

var _iconChevronRight2 = _interopRequireDefault(_iconChevronRight);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getThemedPanButtonCls() {
    if ((0, _theme.getCurrentTheme)() === 'dark') {
        return _buttonStyles2.default.panButtonDark;
    }
    return _buttonStyles2.default.panButton;
}

function PanButtons(hcChart, distanceResolver) {
    this.hcChart = hcChart;
    this.distanceResolver = distanceResolver;
    this.initialize();
}

PanButtons.prototype = _jquery2.default.extend({}, _EventMixin2.default, {
    initialize: function initialize() {
        var axis = this.hcChart.xAxis[0];
        var extremes = axis.getExtremes();

        var leftButtonTemplate = '<button class="' + getThemedPanButtonCls() + '" name="pan-left" title="' + _i18n2.default._('Pan Left') + '">' + _iconChevronLeft2.default + '</button>';

        var rightButtonTemplate = '<button class="' + getThemedPanButtonCls() + '" name="pan-right" title="' + _i18n2.default._('Pan Right') + '">' + _iconChevronRight2.default + '</button>';

        if (!this.panRightButton) {
            this.panRightButton = (0, _jquery2.default)(rightButtonTemplate);
            // zoomed into left edge of chart - disable left pan
            if (this.hcChart.xAxis[0].options.tickmarkPlacement === 'between' && extremes.max >= extremes.dataMax || this.hcChart.xAxis[0].options.tickmarkPlacement === 'on' && extremes.max > extremes.dataMax) {
                this.panRightButton.attr('disabled', 'disabled');
            }
            (0, _jquery2.default)(this.hcChart.container).append(this.panRightButton);
        }

        if (!this.panLeftButton) {
            this.panLeftButton = (0, _jquery2.default)(leftButtonTemplate);
            // zoomed into left edge of chart - disable left pan
            if (extremes.min <= extremes.dataMin) {
                this.panLeftButton.attr('disabled', 'disabled');
            }
            (0, _jquery2.default)(this.hcChart.container).append(this.panLeftButton);
        }

        var that = this;
        this.debouncedPanLeft = _underscore2.default.debounce(function () {
            that.handlePan('left');
            that.positionButtons();
        });
        this.debouncedPanRight = _underscore2.default.debounce(function () {
            that.handlePan('right');
            that.positionButtons();
        });

        this.positionButtons();
        this.bindPanListeners();
    },
    positionButtons: function positionButtons() {
        var legendOptions = this.hcChart.legend.options;
        var topPos = this.hcChart.plotHeight + this.hcChart.plotTop + 4;
        var leftPos = this.hcChart.xAxis[0].left - 20;
        var rightPos = this.hcChart.xAxis[0].right - (legendOptions.align === 'right' ? 20 : 0);

        this.panRightButton.css({
            position: 'absolute',
            top: topPos + 'px',
            right: rightPos + 'px'
        });
        this.panLeftButton.css({
            position: 'absolute',
            top: topPos + 'px',
            left: leftPos + 'px'
        });
    },
    handlePan: function handlePan(direction) {
        var axis = this.hcChart.xAxis[0];
        var extremes = axis.getExtremes();
        var prevMin = Math.round(extremes.min);
        var prevMax = Math.round(extremes.max);
        var panDistance = this.distanceResolver(axis, direction);
        var doRedraw = void 0;
        var newMin = void 0;
        var newMax = void 0;
        var globalMin = void 0;
        var globalMax = void 0;

        if (direction === 'left') {
            globalMin = extremes.dataMin;
            newMin = Math.max(globalMin, prevMin - panDistance.min);
            newMax = prevMax - panDistance.max;
            if (newMin < prevMin) {
                if (newMin <= globalMin) {
                    // disable pan left button as we are now at the left chart edge
                    this.panLeftButton.attr('disabled', 'disabled');
                }
                // enable pan right button as we are no longer at the right chart edge
                if (this.panRightButton.attr('disabled')) {
                    this.panRightButton.removeAttr('disabled');
                }
                doRedraw = true;
            }
        } else if (direction === 'right') {
            globalMax = extremes.dataMax + (this.hcChart.xAxis[0].options.tickmarkPlacement === 'between' ? 0 : 1);
            if (_underscore2.default.has(this.hcChart.xAxis[0].options, 'max')) {
                globalMax = Math.max(globalMax, this.hcChart.xAxis[0].options.max);
            }
            newMax = Math.min(globalMax, prevMax + panDistance.max);
            newMin = prevMin + panDistance.min;
            if (newMax > prevMax) {
                if (newMax >= globalMax) {
                    // disable pan right button as we are now at the right chart edge
                    this.panRightButton.attr('disabled', 'disabled');
                }
                // enable pan left button as we are no longer at the left chart edge
                if (this.panLeftButton.attr('disabled')) {
                    this.panLeftButton.removeAttr('disabled');
                }
                doRedraw = true;
            }
        }

        axis.setExtremes(newMin, newMax, false, false, { trigger: 'pan' });

        if (doRedraw) {
            this.hcChart.redraw(false);
        }
    },
    bindPanListeners: function bindPanListeners() {
        var that = this;
        var pressTimer = void 0;

        var clearPanTimeout = function clearPanTimeout() {
            if (pressTimer) {
                clearInterval(pressTimer);
            }
        };

        var xAxis = this.hcChart.xAxis[0];
        var extremes = void 0;

        if (this.panLeftButton) {
            this.panLeftButton.on('click', function (e) {
                e.preventDefault();
                that.debouncedPanLeft();
            });
            this.panLeftButton.on('mousedown', function () {
                clearPanTimeout();
                pressTimer = window.setInterval(function () {
                    that.handlePan('left');
                }, 200);
            });
            this.panLeftButton.on('mouseup', function () {
                clearPanTimeout();
                extremes = xAxis.getExtremes();
                that.trigger('pan', [extremes.min, extremes.max]);
            });
        }
        if (this.panRightButton) {
            this.panRightButton.on('click', function (e) {
                e.preventDefault();
                that.debouncedPanRight();
            });
            this.panRightButton.on('mousedown', function () {
                clearPanTimeout();
                pressTimer = window.setInterval(function () {
                    that.handlePan('right');
                }, 200);
            });
            this.panRightButton.on('mouseup', function () {
                clearPanTimeout();
                extremes = xAxis.getExtremes();
                that.trigger('pan', [extremes.min, extremes.max]);
            });
        }
    },
    onChartResize: function onChartResize() {
        if (this.panLeftButton && this.panRightButton) {
            this.positionButtons();
        }
    },
    onChartRedraw: function onChartRedraw() {
        if (this.panLeftButton && this.panRightButton) {
            this.positionButtons();
        }
    },
    destroy: function destroy() {
        if (this.panLeftButton) {
            this.panLeftButton.remove();
            this.panLeftButton = undefined;
        }
        if (this.panRightButton) {
            this.panRightButton.remove();
            this.panRightButton = undefined;
        }
        this.off();
    }
});

exports.default = PanButtons;
module.exports = exports['default'];

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 885 1500\" width=\"6px\" height=\"10px\"><path d=\"M 751.027 1500 L 0 750 750 0 l 134.59 134.59 L 269.177 750 l 615.41 615.41\" fill=\"currentColor\"></path></svg>"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 885 1500\" width=\"6px\" height=\"10px\"><path d=\"M134.59 0 l 750 750 -751.028 750 L 0 1365.41 615.41 750 0 134.59\" fill=\"currentColor\"></path></svg>"

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _i18n = __webpack_require__(12);

var _i18n2 = _interopRequireDefault(_i18n);

var _EventMixin = __webpack_require__(9);

var _EventMixin2 = _interopRequireDefault(_EventMixin);

var _buttonStyles = __webpack_require__(50);

var _buttonStyles2 = _interopRequireDefault(_buttonStyles);

var _iconCircleMinus = __webpack_require__(92);

var _iconCircleMinus2 = _interopRequireDefault(_iconCircleMinus);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ZoomOutButton(hcChart) {
    this.hcChart = hcChart;
    this.initialize();
    this.debouncedZoomOut = _underscore2.default.debounce(function () {
        hcChart.zoomOut();
    });
}

ZoomOutButton.prototype = _jquery2.default.extend({}, _EventMixin2.default, {
    initialize: function initialize() {
        var axis = this.hcChart.xAxis[0];
        axis.getExtremes(); // TODO needed to be called? Result was assigned to a variable. @sfishel

        var btnTemplate = '<button class="' + ((0, _theme.getCurrentTheme)() === 'dark' ? _buttonStyles2.default.resetZoomButtonDark : _buttonStyles2.default.resetZoomButton) + '" name="reset-zoom"><span class="' + _buttonStyles2.default.resetZoomIcon + '">' + _iconCircleMinus2.default + '</span>' + _i18n2.default._('Reset Zoom') + '</button>';

        if (!this.zoomOutBtn) {
            this.zoomOutBtn = (0, _jquery2.default)(btnTemplate);
            (0, _jquery2.default)(this.hcChart.container).append(this.zoomOutBtn);
        }
        var topPos = this.hcChart.yAxis[0].top;
        var rightPos = this.hcChart.xAxis[0].right;
        this.zoomOutBtn.css({
            position: 'absolute',
            top: topPos + 'px',
            right: rightPos + 'px'
        });
        this.addEventHandlers();
    },
    addEventHandlers: function addEventHandlers() {
        var that = this;

        if (this.zoomOutBtn) {
            this.zoomOutBtn.on('click', function (e) {
                e.preventDefault();
                that.debouncedZoomOut();
            });
        }
    },
    destroy: function destroy() {
        if (this.zoomOutBtn) {
            this.zoomOutBtn.remove();
            this.zoomOutBtn = undefined;
        }
        this.off();
    }
});

exports.default = ZoomOutButton;
module.exports = exports['default'];

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _DataLabels = __webpack_require__(93);

var _DataLabels2 = _interopRequireDefault(_DataLabels);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CartesianDataLabels(properties) {
    _DataLabels2.default.call(this, properties);
    this.showLabels = properties.showLabels;
    this.splitSeries = properties.splitSeries;
}

(0, _lang.inherit)(CartesianDataLabels, _DataLabels2.default);

CartesianDataLabels.prototype = _jquery2.default.extend(CartesianDataLabels.prototype, {
    onChartLoadOrRedraw: function onChartLoadOrRedraw(chart) {
        if (this.showLabels === 'minmax') {
            this.displayMinMax(chart.series);
        }
        if (this.showLabels === 'all') {
            this.removeRepeatedZeroValues(chart.series);
        }
    },
    destroy: function destroy() {
        this.off();
    },
    onChartLoad: function onChartLoad() {},
    displayMinMax: function displayMinMax(series) {
        var points = _underscore2.default.flatten(_underscore2.default.pluck(series, 'points'));
        _underscore2.default.each(points, function (point) {
            if (point.dataLabel && point.dataLabel.element) {
                point.dataLabel.element.setAttribute('display', 'none');
            }
        });
        var i = void 0;
        var j = void 0;
        var sc = series.length;
        var visiblePointsPerSeries = [];
        var visiblePoints = [];

        for (i = 0; i < sc; i++) {
            var point = void 0;
            var xValue = void 0;
            var seriesExtremes = series[i].xAxis.getExtremes();
            var minIndex = seriesExtremes.userMin || seriesExtremes.dataMin;
            var maxIndex = seriesExtremes.userMax || seriesExtremes.dataMax;
            visiblePoints = [];
            for (j = 0; j < series[i].points.length; j++) {
                point = series[i].points[j];
                xValue = point.x;
                if (xValue >= minIndex && xValue <= maxIndex) {
                    visiblePoints.push(point);
                }
            }
            visiblePointsPerSeries.push(visiblePoints);
        }

        if (!this.splitSeries) {
            // if we dont split the series we don't want to show multiple extrema
            visiblePointsPerSeries = [_underscore2.default.flatten(visiblePointsPerSeries)];
        }

        for (i = 0; i < visiblePointsPerSeries.length; i++) {
            // we only want to find extremas for points with y values
            // that have a dataLabel that could be shown
            var currentVisiblePoints = _underscore2.default.filter(visiblePointsPerSeries[i], function (point) {
                return !_underscore2.default.isNull(point.y) && point.dataLabel;
            });
            var minPoint = _underscore2.default.min(currentVisiblePoints, function (point) {
                return point.y;
            });
            var maxPoint = _underscore2.default.max(currentVisiblePoints, function (point) {
                return point.y;
            });

            if (maxPoint.dataLabel) {
                maxPoint.dataLabel.element.removeAttribute('display');
            }

            if (minPoint.dataLabel) {
                minPoint.dataLabel.element.removeAttribute('display');
            }
        }
    },
    getConfig: function getConfig() {
        return _jquery2.default.extend(true, _DataLabels2.default.prototype.getConfig.call(this), {
            style: {
                color: (0, _theme.getThemeProperty)('DEFAULT_FONT_COLOR'),
                fontWeight: 'normal',
                textOutline: 'none'
            },
            allowOverlap: true
        });
    },
    removeRepeatedZeroValues: function removeRepeatedZeroValues(series) {
        var points = _underscore2.default.flatten(_underscore2.default.pluck(series, 'points'));
        _underscore2.default.each(points, function (point) {
            if (point.dataLabel && point.dataLabel.element) {
                point.dataLabel.element.removeAttribute('display');
            }
        });
        var yMin = _underscore2.default.min(_underscore2.default.pluck(points, 'y'));
        if (yMin >= 0) {
            _underscore2.default.each(points, function (point) {
                if (point.y === 0) {
                    if (point.dataLabel && point.dataLabel.element) {
                        point.dataLabel.element.setAttribute('display', 'none');
                    }
                }
            });
        }
    }
});
exports.default = CartesianDataLabels;
module.exports = exports['default'];

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ColumnSeries = __webpack_require__(204);

var _ColumnSeries2 = _interopRequireDefault(_ColumnSeries);

var _BarSeries = __webpack_require__(205);

var _BarSeries2 = _interopRequireDefault(_BarSeries);

var _LineSeries = __webpack_require__(94);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _AreaSeries = __webpack_require__(96);

var _AreaSeries2 = _interopRequireDefault(_AreaSeries);

var _PieSeries = __webpack_require__(206);

var _PieSeries2 = _interopRequireDefault(_PieSeries);

var _ScatterSeries = __webpack_require__(98);

var _ScatterSeries2 = _interopRequireDefault(_ScatterSeries);

var _BubbleSeries = __webpack_require__(226);

var _BubbleSeries2 = _interopRequireDefault(_BubbleSeries);

var _RangeSeries = __webpack_require__(227);

var _RangeSeries2 = _interopRequireDefault(_RangeSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    create: function create(properties) {
        if (properties.type === 'column') {
            return new _ColumnSeries2.default(properties);
        }
        if (properties.type === 'bar') {
            return new _BarSeries2.default(properties);
        }
        if (properties.type === 'line') {
            return new _LineSeries2.default(properties);
        }
        if (properties.type === 'area') {
            return new _AreaSeries2.default(properties);
        }
        if (properties.type === 'pie') {
            return new _PieSeries2.default(properties);
        }
        if (properties.type === 'scatter') {
            return new _ScatterSeries2.default(properties);
        }
        if (properties.type === 'bubble') {
            return new _BubbleSeries2.default(properties);
        }
        if (properties.type === 'range') {
            return new _RangeSeries2.default(properties);
        }
        return new _ColumnSeries2.default(properties);
    }
};
module.exports = exports['default'];

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _ManyShapeOptimizedSeries = __webpack_require__(51);

var _ManyShapeOptimizedSeries2 = _interopRequireDefault(_ManyShapeOptimizedSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ColumnSeries(properties) {
    _ManyShapeOptimizedSeries2.default.call(this, properties);
}
(0, _lang.inherit)(ColumnSeries, _ManyShapeOptimizedSeries2.default);

_jquery2.default.extend(ColumnSeries.prototype, {
    CHARTING_PROPERTY_WHITELIST: _underscore2.default.union(['columnSpacing'], _ManyShapeOptimizedSeries2.default.prototype.CHARTING_PROPERTY_WHITELIST),

    type: 'column',

    getConfig: function getConfig() {
        var config = _ManyShapeOptimizedSeries2.default.prototype.getConfig.call(this);
        config.pointPadding = this.computeColumnSpacing(this.properties['columnSpacing']);
        config.groupPadding = this.computeColumnGroupSpacing(this.properties['seriesSpacing']);

        return config;
    },


    // SPL-68694, this should be a no-op for column series or it will interfere with click handlers
    bringToFront: function bringToFront() {}
});

exports.default = ColumnSeries;
module.exports = exports['default'];

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _ManyShapeOptimizedSeries = __webpack_require__(51);

var _ManyShapeOptimizedSeries2 = _interopRequireDefault(_ManyShapeOptimizedSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BarSeries(properties) {
    _ManyShapeOptimizedSeries2.default.call(this, properties);
}
(0, _lang.inherit)(BarSeries, _ManyShapeOptimizedSeries2.default);

_jquery2.default.extend(BarSeries.prototype, {
    CHARTING_PROPERTY_WHITELIST: _underscore2.default.union(['barSpacing'], _ManyShapeOptimizedSeries2.default.prototype.CHARTING_PROPERTY_WHITELIST),

    type: 'bar',

    getConfig: function getConfig() {
        var config = _ManyShapeOptimizedSeries2.default.prototype.getConfig.call(this);
        config.pointPadding = this.computeBarSpacing(this.properties['barSpacing']);
        config.groupPadding = this.computeBarGroupSpacing(this.properties['seriesSpacing']);
        return config;
    },


    // SPL-68694, this should be a no-op for bar series or it will interfere with click handlers
    bringToFront: function bringToFront() {}
});

exports.default = BarSeries;
module.exports = exports['default'];

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _time = __webpack_require__(47);

var timeUtils = _interopRequireWildcard(_time);

var _ManyShapeSeries = __webpack_require__(97);

var _ManyShapeSeries2 = _interopRequireDefault(_ManyShapeSeries);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PieSeries(properties) {
    _ManyShapeSeries2.default.call(this, properties);
}
(0, _lang.inherit)(PieSeries, _ManyShapeSeries2.default);

_jquery2.default.extend(PieSeries.prototype, {
    UNHIGHLIGHTED_OPACITY: 1,
    UNHIGHLIGHTED_BASE_COLOR: 'rgb(225, 225, 225)',

    CHARTING_PROPERTY_WHITELIST: _underscore2.default.union(['sliceCollapsingThreshold', 'sliceCollapsingLabel', 'showPercent'], _ManyShapeSeries2.default.prototype.CHARTING_PROPERTY_WHITELIST),

    type: 'pie',
    hasPrettyData: false,

    fieldList: [],

    processProperties: function processProperties() {
        this.collapseFieldName = this.properties.sliceCollapsingLabel || 'other';
        this.collapsePercent = 0.01;
        // eslint-disable-next-line no-prototype-builtins
        if (this.properties.hasOwnProperty('sliceCollapsingThreshold')) {
            var collapsePercentInput = parseFloat(this.properties.sliceCollapsingThreshold);
            if (collapsePercentInput >= 0 && collapsePercentInput <= 1) {
                this.collapsePercent = collapsePercentInput;
            }
        }
    },
    getConfig: function getConfig() {
        return _jquery2.default.extend(_ManyShapeSeries2.default.prototype.getConfig.call(this), {
            translatePreHook: (0, _underscore2.default)(this.translatePreHook).bind(this)
        });
    },
    setData: function setData(inputData) {
        var _this = this;

        var oldData = this.data;
        this.data = [];
        this.prettyData = [];
        var that = this;
        var nameSeries = inputData.names;
        var sizeSeries = inputData.sizes;
        var spanSeries = inputData.spans;
        var isTimeBased = inputData.isTimeBased;
        var totalSize = (0, _underscore2.default)(sizeSeries).reduce(function (sum, value) {
            return sum + value;
        }, 0);
        var cardinality = sizeSeries.length;
        var collapsedSize = 0;
        var numCollapsed = 0;
        var numLessThanThresh = 0;
        var granularity = null;

        var passesThreshold = function passesThreshold(value) {
            return value > 0 && value / totalSize > that.collapsePercent;
        };

        if (isTimeBased) {
            granularity = timeUtils.determineLabelGranularity(nameSeries);
            this.hasPrettyData = true;
        }

        this.fieldList = (0, _underscore2.default)(nameSeries).map(parsingUtils.escapeSVG, parsingUtils);
        (0, _underscore2.default)(sizeSeries).each(function (value, i) {
            if (!passesThreshold(sizeSeries[i])) {
                numLessThanThresh++;
            }
        }, this);

        (0, _underscore2.default)(nameSeries).each(function (name, i) {
            var sizeValue = sizeSeries[i];
            if (passesThreshold(sizeValue) || numLessThanThresh === 1 || cardinality <= 10) {
                if (isTimeBased) {
                    var bdTime = timeUtils.extractBdTime(name);
                    var humanizedName = timeUtils.formatBdTimeAsAxisLabel(bdTime, null, granularity).join(' ');
                    var spanValue = spanSeries[i];
                    _this.data.push([name, sizeValue, spanValue]);
                    _this.prettyData.push([humanizedName, sizeValue, spanValue]);
                } else {
                    _this.data.push([name, sizeValue]);
                }
            } else {
                collapsedSize += sizeValue;
                numCollapsed++;
                _this.fieldList = (0, _underscore2.default)(_this.fieldList).without(name);
            }
        });

        if (numCollapsed > 0) {
            var collapsedName = this.collapseFieldName + ' (' + numCollapsed + ')';
            this.data.push([collapsedName, collapsedSize]);
            // Doesn't make sense to attach a span value to the collapsed section
            this.prettyData.push([collapsedName, collapsedSize, null]);
            this.fieldList.push('__other');
        }

        if (!_underscore2.default.isEqual(this.data, oldData)) {
            this._dataIsDirty = true;
        }
    },
    getFieldList: function getFieldList() {
        return this.fieldList;
    },


    // returns the series data after any processing (like slice collapsing) has been applied
    getData: function getData() {
        return this.data;
    },
    getPrettyData: function getPrettyData() {
        return this.prettyData;
    },
    highlightPoint: function highlightPoint(hcPoint) {
        if (!hcPoint.graphic) {
            return;
        }
        var pointColor = hcPoint.color;
        hcPoint.graphic.attr({
            fill: pointColor,
            'stroke-width': 0,
            stroke: pointColor
        });
    },
    getTooltipRows: function getTooltipRows(info) {
        return [[info.sliceFieldName, info.sliceName], [{ text: info.seriesName, color: info.sliceColor }, info.yValue], [{ text: info.seriesName + '%', color: info.sliceColor }, info.yPercent]];
    },


    /**
     * @author sfishel
     *
     * Dynamically adjust the pie size based on the height and width of the container.
     * If labels are showing, don't allow it to take up more than one third of the width.
     */

    translatePreHook: function translatePreHook(pieSeries) {
        var chart = pieSeries.chart;
        if (pieSeries.options.dataLabels.enabled) {
            pieSeries.options.size = Math.min(chart.plotHeight * 0.75, chart.plotWidth / 3);
        } else {
            pieSeries.options.size = Math.min(chart.plotHeight * 0.75, chart.plotWidth * 0.75);
        }
    }
});

exports.default = PieSeries;
module.exports = exports['default'];

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(208), __esModule: true };

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(209);
__webpack_require__(219);
module.exports = __webpack_require__(16).Array.from;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(210)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(211)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var defined = __webpack_require__(34);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(212);
var $export = __webpack_require__(30);
var redefine = __webpack_require__(213);
var hide = __webpack_require__(17);
var has = __webpack_require__(21);
var Iterators = __webpack_require__(52);
var $iterCreate = __webpack_require__(214);
var setToStringTag = __webpack_require__(100);
var getPrototypeOf = __webpack_require__(218);
var ITERATOR = __webpack_require__(11)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(215);
var descriptor = __webpack_require__(33);
var setToStringTag = __webpack_require__(100);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(17)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(216);
var enumBugKeys = __webpack_require__(63);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(55)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(217).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(56);

module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(13).document;
module.exports = document && document.documentElement;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(54);
var $export = __webpack_require__(30);
var toObject = __webpack_require__(37);
var call = __webpack_require__(220);
var isArrayIter = __webpack_require__(221);
var toLength = __webpack_require__(60);
var createProperty = __webpack_require__(222);
var getIterFn = __webpack_require__(223);

$export($export.S + $export.F * !__webpack_require__(225)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(19);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(52);
var ITERATOR = __webpack_require__(11)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(18);
var createDesc = __webpack_require__(33);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(224);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(52);
module.exports = __webpack_require__(16).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(59);
var TAG = __webpack_require__(11)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(11)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _ManyShapeSeries = __webpack_require__(97);

var _ManyShapeSeries2 = _interopRequireDefault(_ManyShapeSeries);

var _ScatterSeries = __webpack_require__(98);

var _ScatterSeries2 = _interopRequireDefault(_ScatterSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BubbleSeries(container, properties) {
    _ManyShapeSeries2.default.call(this, container, properties);
}
(0, _lang.inherit)(BubbleSeries, _ManyShapeSeries2.default);

_jquery2.default.extend(BubbleSeries.prototype, {
    HIGHLIGHTED_OPACITY: 0.5,

    type: 'bubble',

    setData: function setData(inputData) {
        var oldData = this.data;
        this.data = (0, _underscore2.default)(inputData.x).map(function (value, i) {
            return [value, inputData.y[i], inputData.z[i]];
        });
        if (!_underscore2.default.isEqual(this.data, oldData)) {
            this._dataIsDirty = true;
        }
    },
    getTooltipRows: function getTooltipRows(info) {
        var _ScatterSeries$protot;

        for (var _len = arguments.length, restArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            restArgs[_key - 1] = arguments[_key];
        }

        var rows = (_ScatterSeries$protot = _ScatterSeries2.default.prototype.getTooltipRows).call.apply(_ScatterSeries$protot, [this, info].concat(restArgs));
        rows.push([info.zAxisName, info.zValue]);
        return rows;
    }
});

exports.default = BubbleSeries;
module.exports = exports['default'];

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _AreaSeries = __webpack_require__(96);

var _AreaSeries2 = _interopRequireDefault(_AreaSeries);

var _LineSeries = __webpack_require__(94);

var _LineSeries2 = _interopRequireDefault(_LineSeries);

var _MultiSeries = __webpack_require__(228);

var _MultiSeries2 = _interopRequireDefault(_MultiSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LowerRangeSeries(properties) {
    this.threshold = 0;
    _AreaSeries2.default.call(this, properties);
}
(0, _lang.inherit)(LowerRangeSeries, _AreaSeries2.default);

_jquery2.default.extend(LowerRangeSeries.prototype, {
    HIGHLIGHTED_OPACITY: 0,
    UNHIGHLIGHTED_OPACITY: 0,
    UNHIGHLIGHTED_LINE_OPACITY: 0.25,

    normalizeProperties: function normalizeProperties() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _jquery2.default.extend({}, _AreaSeries2.default.prototype.normalizeProperties.apply(this, args), {
            lineStyle: 'dashed',
            stacking: 'stacked'
        });
    },
    setData: function setData(inputData) {
        _AreaSeries2.default.prototype.setData.call(this, inputData);
        var minValue = (0, _underscore2.default)(inputData.y).min();
        var oldThreshold = this.threshold;
        this.threshold = Math.min(minValue, 0);
        if (this.threshold !== oldThreshold) {
            this._isDirty = true;
        }
    },
    getConfig: function getConfig() {
        var config = _AreaSeries2.default.prototype.getConfig.call(this);
        config.showInLegend = false;
        config.threshold = this.threshold;
        config.stack = this.properties.stack;
        return config;
    }
});

function UpperRangeSeries(properties) {
    _AreaSeries2.default.call(this, properties);
}
(0, _lang.inherit)(UpperRangeSeries, _AreaSeries2.default);

_jquery2.default.extend(UpperRangeSeries.prototype, {
    HIGHLIGHTED_OPACITY: 0.25,
    UNHIGHLIGHTED_OPACITY: 0.1,
    UNHIGHLIGHTED_LINE_OPACITY: 0.25,

    normalizeProperties: function normalizeProperties() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _jquery2.default.extend({}, _AreaSeries2.default.prototype.normalizeProperties.apply(this, args), {
            lineStyle: 'dashed',
            stacking: 'stacked'
        });
    },
    getConfig: function getConfig() {
        var config = _AreaSeries2.default.prototype.getConfig.call(this);
        config.showInLegend = false;
        config.stack = this.properties.stack;
        return config;
    }
});

function RangeSeries(properties) {
    _MultiSeries2.default.call(this, properties);
    this.rangeStackId = _underscore2.default.uniqueId('rangeStack_');

    this.predictedSeries = new _LineSeries2.default(this.getPredictedSeriesProperties());
    this.lowerSeries = new LowerRangeSeries(this.getLowerSeriesProperties());
    this.upperSeries = new UpperRangeSeries(this.getUpperSeriesProperties());
    this.nestedSeriesList = [this.upperSeries, this.lowerSeries, this.predictedSeries];
    this.bindNestedSeries();
}
(0, _lang.inherit)(RangeSeries, _MultiSeries2.default);

_jquery2.default.extend(RangeSeries.prototype, {
    type: 'range',

    update: function update(properties) {
        this.properties = this.normalizeProperties(properties);
        this.predictedSeries.update(this.getPredictedSeriesProperties());
        this.lowerSeries.update(this.getLowerSeriesProperties());
        this.upperSeries.update(this.getUpperSeriesProperties());
    },
    setData: function setData(inputData) {
        this.predictedSeries.setData({
            y: inputData.predicted,
            x: inputData.x
        });
        this.lowerSeries.setData({
            y: inputData.lower,
            x: inputData.x
        });

        // TODO: will this work for log scale?
        inputData.upper = (0, _underscore2.default)(inputData.upper).map(function (point, i) {
            if ((0, _underscore2.default)(point).isNull()) {
                return null;
            }
            var diff = point - inputData.lower[i];
            return Math.max(diff, 0);
        });
        this.upperSeries.setData({
            y: inputData.upper,
            x: inputData.x
        });
    },
    getPredictedSeriesProperties: function getPredictedSeriesProperties() {
        return this.properties;
    },
    getLowerSeriesProperties: function getLowerSeriesProperties() {
        return _jquery2.default.extend({}, this.properties, {
            name: this.properties.names.lower,
            legendKey: this.predictedSeries.getLegendKey(),
            stack: this.rangeStackId
        });
    },
    getUpperSeriesProperties: function getUpperSeriesProperties() {
        return _jquery2.default.extend({}, this.properties, {
            name: this.properties.names.upper,
            legendKey: this.predictedSeries.getLegendKey(),
            stack: this.rangeStackId
        });
    },
    getFieldList: function getFieldList() {
        return this.predictedSeries.getFieldList();
    },


    // to get the right color effects, we have to force the upper and lower series
    // to take on the same color as the predicted series
    applyColorMapping: function applyColorMapping(colorMapping) {
        this.predictedSeries.applyColorMapping(colorMapping);
        var predictedColor = this.predictedSeries.getColor();
        var lowerSeriesColorMapping = {};
        var upperSeriesColorMapping = {};

        lowerSeriesColorMapping[this.lowerSeries.getName()] = predictedColor;
        this.lowerSeries.applyColorMapping(lowerSeriesColorMapping);

        upperSeriesColorMapping[this.upperSeries.getName()] = predictedColor;
        this.upperSeries.applyColorMapping(upperSeriesColorMapping);
    },
    handlePointMouseOver: function handlePointMouseOver() {
        this.bringToFront();
        this.highlight();
    },
    handlePointMouseOut: function handlePointMouseOut() {},
    handleLegendMouseOver: function handleLegendMouseOver() {
        this.bringToFront();
        this.highlight();
    },
    handleLegendMouseOut: function handleLegendMouseOut() {}
});

exports.default = RangeSeries;
module.exports = exports['default'];

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _Series = __webpack_require__(29);

var _Series2 = _interopRequireDefault(_Series);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MultiSeries(properties) {
    _Series2.default.call(this, properties);
    this.nestedSeriesList = [];
}
(0, _lang.inherit)(MultiSeries, _Series2.default);

_jquery2.default.extend(MultiSeries.prototype, {
    // leave any normalization to child series
    normalizeProperties: function normalizeProperties(rawProps) {
        return rawProps;
    },
    isDirty: function isDirty() {
        return (0, _underscore2.default)(this.nestedSeriesList).any(function (series) {
            return series.isDirty();
        });
    },
    dataIsDirty: function dataIsDirty() {
        return (0, _underscore2.default)(this.nestedSeriesList).any(function (series) {
            return series.dataIsDirty();
        });
    },
    getFieldList: function getFieldList() {
        return (0, _underscore2.default)(this.nestedSeriesList).invoke('getFieldList');
    },
    applyColorMapping: function applyColorMapping(colorMapping) {
        (0, _underscore2.default)(this.nestedSeriesList).invoke('applyColorMapping', colorMapping);
    },
    matchesName: function matchesName(name) {
        return (0, _underscore2.default)(this.nestedSeriesList).any(function (series) {
            return series.matchesName(name);
        });
    },
    getConfig: function getConfig() {
        return (0, _underscore2.default)(this.nestedSeriesList).invoke('getConfig');
    },
    bindNestedSeries: function bindNestedSeries() {
        var that = this;
        (0, _underscore2.default)(this.nestedSeriesList).each(function (series) {
            series.on('mouseover', function (e, point, targetSeries) {
                that.trigger(e, [point, targetSeries]);
            });
            series.on('mouseout', function (e, point, targetSeries) {
                that.trigger(e, [point, targetSeries]);
            });
            series.on('click', function (e, point, targetSeries) {
                that.trigger(e, [point, targetSeries]);
            });
        });
    },
    handlePointMouseOver: function handlePointMouseOver(point) {
        var seriesName = point.seriesName;
        (0, _underscore2.default)(this.nestedSeriesList).each(function (series) {
            if (series.matchesName(seriesName)) {
                series.handlePointMouseOver(point);
            } else {
                series.unHighlight();
            }
        });
    },
    handlePointMouseOut: function handlePointMouseOut(point) {
        var seriesName = point.seriesName;
        (0, _underscore2.default)(this.nestedSeriesList).each(function (series) {
            if (series.matchesName(seriesName)) {
                series.handlePointMouseOut(point);
            } else {
                series.highlight();
            }
        });
    },
    handleLegendMouseOver: function handleLegendMouseOver(fieldName) {
        (0, _underscore2.default)(this.nestedSeriesList).each(function (series) {
            if (series.matchesName(fieldName)) {
                series.handleLegendMouseOver(fieldName);
            } else {
                series.unHighlight();
            }
        });
    },
    handleLegendMouseOut: function handleLegendMouseOut(fieldName) {
        (0, _underscore2.default)(this.nestedSeriesList).each(function (series) {
            if (series.matchesName(fieldName)) {
                series.handleLegendMouseOut(fieldName);
            } else {
                series.highlight();
            }
        });
    },
    onChartLoad: function onChartLoad(chart) {
        (0, _underscore2.default)(this.nestedSeriesList).invoke('onChartLoad', chart);
    },
    onChartLoadOrRedraw: function onChartLoadOrRedraw(chart) {
        (0, _underscore2.default)(this.nestedSeriesList).invoke('onChartLoadOrRedraw', chart);
    },
    redraw: function redraw(redrawChart) {
        (0, _underscore2.default)(this.nestedSeriesList).invoke('redraw', redrawChart);
    },
    destroy: function destroy() {
        this.off();
        (0, _underscore2.default)(this.nestedSeriesList).invoke('destroy');
    },
    bringToFront: function bringToFront() {
        (0, _underscore2.default)(this.nestedSeriesList).invoke('bringToFront');
    },
    highlight: function highlight() {
        (0, _underscore2.default)(this.nestedSeriesList).invoke('highlight');
    },
    unHighlight: function unHighlight() {
        (0, _underscore2.default)(this.nestedSeriesList).invoke('unHighlight');
    }
});

exports.default = MultiSeries;
module.exports = exports['default'];

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(99);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _Chart = __webpack_require__(27);

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SplitSeriesChart(container, properties) {
    _Chart2.default.call(this, container, properties);
}
(0, _lang.inherit)(SplitSeriesChart, _Chart2.default);

_jquery2.default.extend(SplitSeriesChart.prototype, {
    interAxisSpacing: 10,

    shouldUpdateInPlace: function shouldUpdateInPlace() {
        if (this.selectionWindow) {
            return this.hcChart && !this.isDirty();
        }
        return false;
    },
    processProperties: function processProperties() {
        _Chart2.default.prototype.processProperties.call(this);
        this.allowIndependentYRanges = parsingUtils.normalizeBoolean(this.properties['layout.splitSeries.allowIndependentYRanges'], false);
    },
    initializeSeriesPropertiesList: function initializeSeriesPropertiesList() {
        var propertiesList = _Chart2.default.prototype.initializeSeriesPropertiesList.call(this);
        // give each series its own y-axis
        (0, _underscore2.default)(propertiesList).each(function (props, i) {
            props.yAxis = i;
        });
        return propertiesList;
    },
    initializeYAxisProperties: function initializeYAxisProperties(axisIndex, isEmpty) {
        // If split-series chart, disable Y2 axes
        var axisProperties = _jquery2.default.extend(parsingUtils.getYAxisProperties(this.properties, 0), this.axisColorScheme, {
            'axis.orientation': this.axesAreInverted ? 'horizontal' : 'vertical',
            isEmpty: isEmpty,
            opposite: false
        });
        return axisProperties;
    },
    setAllSeriesData: function setAllSeriesData() {
        var _this = this;

        _Chart2.default.prototype.setAllSeriesData.call(this);
        // memoize the global min and max across all data
        this.globalMin = Infinity;
        this.globalMax = -Infinity;
        (0, _underscore2.default)(this.yFields).each(function (field, i) {
            var axis = _this.yAxisList[i];

            var data = _this.formatNumericAxisData(axis, field);

            _this.globalMin = Math.min(_this.globalMin, Math.min.apply(Math, (0, _toConsumableArray3.default)(data)));
            _this.globalMax = Math.max(_this.globalMax, Math.max.apply(Math, (0, _toConsumableArray3.default)(data)));
        });
    },
    getYAxisConfig: function getYAxisConfig() {
        var config = _Chart2.default.prototype.getYAxisConfig.call(this);
        // eslint-disable-next-line func-names
        (0, _underscore2.default)(config).each(function (axisConfig, i) {
            _jquery2.default.extend(axisConfig, {
                opposite: false,
                offset: 0,
                // eslint-disable-next-line func-names
                setSizePreHook: (0, _underscore2.default)(function (axis) {
                    _jquery2.default.extend(axis.options, this.getAdjustedAxisPosition(axis, i, this.yAxisList.length));
                }).bind(this)
            });
            var originalExtremesHook = axisConfig.getSeriesExtremesPostHook;
            // eslint-disable-next-line func-names
            axisConfig.getSeriesExtremesPostHook = (0, _underscore2.default)(function (axis) {
                // if stackmode is 100, we want to keep the default 0-100 range
                if (!this.allowIndependentYRanges && this.stackMode !== 'stacked100') {
                    axis.dataMax = Math.max(axis.dataMax, this.globalMax);
                    axis.dataMin = Math.min(axis.dataMin, this.globalMin);
                }
                // make sure to invoke the original hook if it's there
                if (originalExtremesHook) {
                    originalExtremesHook(axis);
                }
            }).bind(this);
        }, this);
        return config;
    },
    getSeriesConfigList: function getSeriesConfigList() {
        var _this2 = this;

        var config = _Chart2.default.prototype.getSeriesConfigList.call(this);
        (0, _underscore2.default)(config).each(function (seriesConfig) {
            seriesConfig.afterAnimatePostHook = (0, _underscore2.default)(_this2.updateSeriesClipRect).bind(_this2);
            seriesConfig.renderPostHook = (0, _underscore2.default)(_this2.updateSeriesClipRect).bind(_this2);
            seriesConfig.destroyPreHook = (0, _underscore2.default)(_this2.destroySplitSeriesClipRect).bind(_this2);
        });
        return config;
    },
    getAdjustedAxisPosition: function getAdjustedAxisPosition(axis, index, numAxes) {
        var chart = axis.chart;
        if (chart.inverted) {
            var plotWidth = chart.plotWidth;
            var axisWidth = (plotWidth - this.interAxisSpacing * (numAxes - 1)) / numAxes;

            return {
                left: chart.plotLeft + (axisWidth + this.interAxisSpacing) * index,
                width: axisWidth
            };
        }
        var plotHeight = chart.plotHeight;
        var axisHeight = (plotHeight - this.interAxisSpacing * (numAxes - 1)) / numAxes;

        return {
            top: chart.plotTop + (axisHeight + this.interAxisSpacing) * index,
            height: axisHeight
        };
    },
    getTooltipConfig: function getTooltipConfig() {
        var config = _Chart2.default.prototype.getTooltipConfig.call(this);
        var that = this;
        config.getAnchorPostHook = function (points, mouseEvent, anchor) {
            if (that.axesAreInverted) {
                anchor[0] = points.series.yAxis.left + (points.pointWidth || 0);
            }
            return anchor;
        };
        return config;
    },
    updateSeriesClipRect: function updateSeriesClipRect(series) {
        var chart = series.chart;
        var yAxis = series.yAxis;

        this.destroySplitSeriesClipRect(series);
        if (chart.inverted) {
            // this looks wrong, but this is happening before the 90 degree rotation so x is y and y is x
            series.splitSeriesClipRect = chart.renderer.clipRect(0, -0, chart.plotHeight, yAxis.width);
        } else {
            series.splitSeriesClipRect = chart.renderer.clipRect(0, 0, chart.plotWidth, yAxis.height);
        }
        series.group.clip(series.splitSeriesClipRect);
    },
    destroySplitSeriesClipRect: function destroySplitSeriesClipRect(series) {
        // eslint-disable-next-line no-prototype-builtins
        if (series.hasOwnProperty('splitSeriesClipRect')) {
            series.splitSeriesClipRect.destroy();
            delete series.splitSeriesClipRect;
        }
    }
});

exports.default = SplitSeriesChart;
module.exports = exports['default'];

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _i18n = __webpack_require__(12);

var _i18n2 = _interopRequireDefault(_i18n);

var _highcharts = __webpack_require__(8);

var _highcharts2 = _interopRequireDefault(_highcharts);

var _lang = __webpack_require__(2);

var _parsing = __webpack_require__(3);

var parsingUtils = _interopRequireWildcard(_parsing);

var _time = __webpack_require__(47);

var _time2 = _interopRequireDefault(_time);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

var _Chart = __webpack_require__(27);

var _Chart2 = _interopRequireDefault(_Chart);

var _PieChartDataLabels = __webpack_require__(231);

var _PieChartDataLabels2 = _interopRequireDefault(_PieChartDataLabels);

var _HoverEventThrottler = __webpack_require__(28);

var _HoverEventThrottler2 = _interopRequireDefault(_HoverEventThrottler);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PieChart(container, properties) {
    _Chart2.default.call(this, container, properties);
}
(0, _lang.inherit)(PieChart, _Chart2.default);

_jquery2.default.extend(PieChart.prototype, {
    SLICE_NAME_FIELD_INDEX: 0,
    SLICE_SIZE_FIELD_INDEX: 1,

    hasLegend: false,
    hasXAxis: false,
    hasYAxis: false,

    shouldUpdateInPlace: function shouldUpdateInPlace() {
        return false;
    },
    processProperties: function processProperties() {
        _Chart2.default.prototype.processProperties.call(this);
        this.showLabels = this.isEmpty() ? false : parsingUtils.normalizeBoolean(this.properties['chart.showLabels'], true);
    },
    prepare: function prepare(dataSet, properties) {
        _Chart2.default.prototype.prepare.call(this, dataSet, properties);
        if (this.showLabels) {
            this.initializeDataLabels();
        }
    },
    handleDraw: function handleDraw(callback) {
        this.destroyCustomRenderer();
        if (this.isEmpty()) {
            this.benchmark('Draw Started');
            this.drawEmptyPieChart();
            this.benchmark('Draw Finished');
            callback(this, this.benchmarks);
            return;
        }
        _Chart2.default.prototype.handleDraw.call(this, callback);
    },
    initializeFields: function initializeFields() {
        var dataFields = this.dataSet.allDataFields();
        this.sliceNameField = dataFields[this.SLICE_NAME_FIELD_INDEX];
        this.sliceSizeField = dataFields[this.SLICE_SIZE_FIELD_INDEX];
    },
    isEmpty: function isEmpty() {
        if (this.dataSet) {
            return !this._sizeValuesAreNumeric() || this.dataSet.allDataFields().length < 2;
        }

        return false;
    },
    hasTimeXAxis: function hasTimeXAxis() {
        return false;
    },
    _sizeValuesAreNumeric: function _sizeValuesAreNumeric() {
        return mathUtils.valuesAreNumeric(this.dataSet.seriesList[this.SLICE_SIZE_FIELD_INDEX]);
    },
    _getInvalidDataMessage: function _getInvalidDataMessage() {
        // If there is not enough data, message is no results
        if (!this.dataSet || this.dataSet.allDataFields().length < 2) {
            return _i18n2.default._('No Results');
        }

        // Note: we never expect to return 'Invalid data' it is here for completeness
        return this._sizeValuesAreNumeric() ? _i18n2.default._('Invalid Data') : _i18n2.default._('Numeric Data Required');
    },
    shouldProgressiveDraw: function shouldProgressiveDraw() {
        return false;
    },
    initializeSeriesPropertiesList: function initializeSeriesPropertiesList() {
        var seriesProps = _jquery2.default.extend({}, this.properties, {
            name: this.sliceSizeField,
            type: 'pie',
            clickEnabled: this.chartClickEnabled
        });
        return [seriesProps];
    },
    setAllSeriesData: function setAllSeriesData() {
        var isTimeBased = this.seriesIsTimeBased(this.sliceNameField);
        var spans = void 0;

        if (isTimeBased) {
            spans = this.dataSet.getSeriesAsFloats('_span');
        }

        this.seriesList[0].setData({
            names: this.dataSet.getSeries(this.sliceNameField),
            sizes: this.dataSet.getSeriesAsFloats(this.sliceSizeField, { nullValueMode: 'zero' }),
            spans: spans,
            isTimeBased: isTimeBased
        });
    },
    handlePointMouseOver: function handlePointMouseOver(targetPoint) {
        this.seriesList[0].handlePointMouseOver(targetPoint);
        if (this.dataLabels) {
            this.dataLabels.selectLabel(targetPoint);
        }
    },
    handlePointMouseOut: function handlePointMouseOut(targetPoint) {
        this.seriesList[0].handlePointMouseOut(targetPoint);
        if (this.dataLabels) {
            this.dataLabels.unSelectLabel(targetPoint);
        }
    },
    handlePointClick: function handlePointClick(event, point) {
        var pointIndex = point.originalIndex;
        var pointData = this.seriesList[0].getData()[pointIndex];
        var sliceName = pointData[0];
        var sliceSize = pointData[1].toString();
        var collapseFieldName = new RegExp('^' + this.seriesList[0].collapseFieldName);
        var rowContext = {};

        var pointClickEvent = {
            type: 'pointClick',
            modifierKey: event.modifierKey,
            name: this.sliceNameField,
            // 'value' will be inserted later based on series type
            name2: this.sliceSizeField,
            value2: sliceSize,
            rowContext: rowContext
        };

        // Clicking on the collapsed slice for a _time based pie chart should just return a normal pointClickEvent,
        // not the special time-based one
        if (this.seriesIsTimeBased(this.sliceNameField) && !collapseFieldName.test(pointData[0])) {
            var isoTimeString = pointData[0];
            pointClickEvent.value = _time2.default.getEpochTimeFromISO(isoTimeString);
            pointClickEvent._span = pointData[2];
            rowContext['row.' + this.sliceNameField] = pointClickEvent.value;
        } else {
            pointClickEvent.value = sliceName;
            rowContext['row.' + this.sliceNameField] = sliceName;
        }

        rowContext['row.' + this.sliceSizeField] = sliceSize;
        this.trigger(pointClickEvent);
    },
    initializeDataLabels: function initializeDataLabels() {
        var labelProps = {
            fontColor: this.fontColor,
            foregroundColorSoft: this.foregroundColorSoft,
            clickEnabled: parsingUtils.normalizeBoolean(this.properties['chart.clickEnabled']) || parsingUtils.normalizeBoolean(this.properties['enableChartClick'])
        };
        if (this.dataLabels) {
            this.dataLabels.destroy();
        }
        this.dataLabels = new _PieChartDataLabels2.default(labelProps);
        var that = this;

        var properties = {
            highlightDelay: 75,
            unhighlightDelay: 50,
            onMouseOver: function onMouseOver(point) {
                that.seriesList[0].selectPoint(point);
            },
            onMouseOut: function onMouseOut(point) {
                that.seriesList[0].unSelectPoint(point);
            }
        };

        var throttle = new _HoverEventThrottler2.default(properties);

        this.dataLabels.on('mouseover', function (e, point) {
            throttle.mouseOverHappened(point);
        });
        this.dataLabels.on('mouseout', function (e, point) {
            throttle.mouseOutHappened(point);
        });
        // TODO [sff] add a click handler here for data label drilldown
    },
    getPlotOptionsConfig: function getPlotOptionsConfig() {
        var that = this;
        return {
            pie: {
                dataLabels: _jquery2.default.extend(this.getDataLabelConfig(), {
                    formatter: function formatter() {
                        var formatInfo = this;
                        return parsingUtils.escapeSVG(that.formatDataLabel(formatInfo));
                    }
                }),
                borderWidth: 0,
                stickyTracking: false,
                cursor: this.chartClickEnabled ? 'pointer' : 'default',
                states: {
                    hover: {
                        brightness: 0
                    }
                },
                tooltip: {
                    followPointer: false
                }
            }
        };
    },
    getDataLabelConfig: function getDataLabelConfig() {
        if (!this.showLabels) {
            return {
                enabled: false
            };
        }
        return this.dataLabels.getConfig();
    },
    applyColorPalette: function applyColorPalette() {
        // FIXME: this is bad, find a way to encapsulate this in the PieSeries object
        this.BASE_CONFIG = _jquery2.default.extend({}, this.BASE_CONFIG, {
            colors: (0, _underscore2.default)(this.getFieldList()).map(this.computeFieldColor, this)
        });
    },
    addPercentToName: function addPercentToName(name, percentage) {
        if (parsingUtils.normalizeBoolean(this.properties['chart.showPercent'])) {
            return name + ', ' + _i18n2.default.format_percent(percentage / 100);
        }
        return name;
    },
    formatDataLabel: function formatDataLabel(info) {
        return this.addPercentToName(info.point.name, info.percentage);
    },
    getSeriesPointInfo: function getSeriesPointInfo(series, hcPoint) {
        var pointIndex = hcPoint.index;
        var pointData = series.hasPrettyData ? series.getPrettyData()[pointIndex] : series.getData()[pointIndex];
        var pointName = this.addPercentToName(pointData[0], hcPoint.percentage);
        var pointValue = pointData[1];

        return {
            sliceFieldName: this.sliceNameField,
            sliceName: pointName,
            sliceColor: hcPoint.color,
            yValue: _i18n2.default.format_decimal(pointValue),
            yPercent: _i18n2.default.format_percent(hcPoint.percentage / 100)
        };
    },
    drawEmptyPieChart: function drawEmptyPieChart() {
        var width = this.$container.width();
        var height = this.$container.height();

        // TODO [sff] this logic is duplicated in PieSeries translatePreHook()
        var circleRadius = Math.min(height * 0.75, width / 3) / 2;

        this.renderer = new _highcharts2.default.Renderer(this.container, width, height);

        this.renderer.circle(width / 2, height / 2, circleRadius).attr({
            fill: 'rgba(150, 150, 150, 0.3)',
            stroke: 'rgb(200, 200, 200)',
            'stroke-width': 1,
            title: _i18n2.default._('Invalid data: second column must be numeric for a pie chart')
        }).add();

        this.renderer.text(this._getInvalidDataMessage(), width / 2, height / 2).attr({
            align: 'center'
        }).css({
            fontSize: '20px',
            color: 'rgb(200, 200, 200)'
        }).add();
    },
    setSize: function setSize(width, height) {
        if (this.isEmpty()) {
            this.destroyCustomRenderer();
            this.drawEmptyPieChart();
        } else {
            _Chart2.default.prototype.setSize.call(this, width, height);
        }
    },
    destroy: function destroy() {
        this.destroyCustomRenderer();
        _Chart2.default.prototype.destroy.call(this);
    },
    destroyCustomRenderer: function destroyCustomRenderer() {
        if (this.renderer) {
            this.renderer.destroy();
            this.renderer = null;
            this.$container.empty();
        }
    }
});

exports.default = PieChart;
module.exports = exports['default'];

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _Formatter = __webpack_require__(10);

var _Formatter2 = _interopRequireDefault(_Formatter);

var _lang = __webpack_require__(2);

var _HoverEventThrottler = __webpack_require__(28);

var _HoverEventThrottler2 = _interopRequireDefault(_HoverEventThrottler);

var _DataLabels = __webpack_require__(93);

var _DataLabels2 = _interopRequireDefault(_DataLabels);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PieChartDataLabels(properties) {
    _DataLabels2.default.call(this, properties);
    this.id = _underscore2.default.uniqueId('data_labels_');
}

(0, _lang.inherit)(PieChartDataLabels, _DataLabels2.default);
PieChartDataLabels.prototype = _jquery2.default.extend(PieChartDataLabels.prototype, {
    HIGHLIGHTED_OPACITY: 1.0,
    UNHIGHLIGHTED_OPACITY: 0.3,

    getConfig: function getConfig() {
        return {
            color: this.properties['fontColor'] || (0, _theme.getThemeProperty)('DEFAULT_FONT_COLOR'),
            connectorColor: this.properties['foregroundColorSoft'],
            connectorPadding: 5,
            softConnector: false,
            distance: 20,
            style: {
                cursor: this.properties['clickEnabled'] ? 'pointer' : 'default',
                fontWeight: 'normal',
                textOutline: 'none',
                // Hack to make sure we can render literal '<' and '>'
                HcTextStroke: true
            },
            x: 0.01,
            drawDataLabelsPreHook: (0, _underscore2.default)(this.drawDataLabelsPreHook).bind(this),
            drawDataLabelsPostHook: (0, _underscore2.default)(this.drawDataLabelsPostHook).bind(this),
            placeDataLabelsPreHook: (0, _underscore2.default)(this.placeDataLabelsPreHook).bind(this)
        };
    },
    onChartLoad: function onChartLoad() {},
    onChartLoadOrRedraw: function onChartLoadOrRedraw(chart) {
        this.removeEventHandlers();
        this.hcSeries = chart.series[0];
        this.addEventHandlers();
    },
    addEventHandlers: function addEventHandlers() {
        var _this = this;

        var that = this;

        var properties = {
            highlightDelay: 125,
            unhighlightDelay: 50,
            onMouseOver: function onMouseOver(point) {
                that.selectLabel(point);
                that.trigger('mouseover', [point]);
            },
            onMouseOut: function onMouseOut(point) {
                that.unSelectLabel(point);
                that.trigger('mouseout', [point]);
            }
        };

        var throttle = new _HoverEventThrottler2.default(properties);

        (0, _underscore2.default)(this.hcSeries.data).each(function (point) {
            var label = point.dataLabel.element;
            (0, _jquery2.default)(label).on('mouseover.' + _this.id, function () {
                throttle.mouseOverHappened(point);
            });
            (0, _jquery2.default)(label).on('mouseout.' + _this.id, function () {
                throttle.mouseOutHappened(point);
            });
            (0, _jquery2.default)(label).on('click.' + _this.id, function () {
                that.trigger('click', [point]);
            });
        });
    },
    removeEventHandlers: function removeEventHandlers() {
        var _this2 = this;

        if (!this.hcSeries) {
            return;
        }
        (0, _underscore2.default)(this.hcSeries.data).each(function (point) {
            var label = point.dataLabel.element;
            (0, _jquery2.default)(label).off('.' + _this2.id);
        });
    },
    destroy: function destroy() {
        this.off();
        this.removeEventHandlers();
        this.hcSeries = null;
    },
    selectLabel: function selectLabel(point) {
        var _this3 = this;

        var matchingPoint = this.hcSeries.data[point.index];
        matchingPoint.dataLabel.attr('fill-opacity', this.HIGHLIGHTED_OPACITY);
        (0, _underscore2.default)(this.hcSeries.data).chain().without(matchingPoint).each(function (hcPoint) {
            hcPoint.dataLabel.attr('fill-opacity', _this3.UNHIGHLIGHTED_OPACITY);
        });
    },
    unSelectLabel: function unSelectLabel(point) {
        var _this4 = this;

        var matchingPoint = this.hcSeries.data[point.index];
        (0, _underscore2.default)(this.hcSeries.data).chain().without(matchingPoint).each(function (hcPoint) {
            hcPoint.dataLabel.attr('fill-opacity', _this4.HIGHLIGHTED_OPACITY);
        });
    },


    /**
     * @author sfishel
     *
     * Before the data label draw routine, overwrite the series getX method so that labels will be aligned vertically.
     * Then make sure all labels will fit in the plot area.
     */

    drawDataLabelsPreHook: function drawDataLabelsPreHook(pieSeries) {
        var chart = pieSeries.chart;
        var distance = pieSeries.options.dataLabels.distance;
        var center = pieSeries.center;
        var radius = center[2] / 2;

        pieSeries.getX = function (y, left) {
            return chart.plotLeft + center[0] + (left ? -radius - distance : radius + distance / 2);
        };

        this.fitLabelsToPlotArea(pieSeries);
    },
    fitLabelsToPlotArea: function fitLabelsToPlotArea(series) {
        var i = void 0;
        var options = series.options;
        var labelDistance = options.dataLabels.distance;
        var size = options.size; // assumes size in pixels TODO: handle percents
        var chart = series.chart;
        var renderer = chart.renderer;
        var formatter = new _Formatter2.default(renderer);
        var defaultFontSize = 11;
        var minFontSize = 9;
        var maxWidth = (chart.plotWidth - (size + 2 * labelDistance)) / 2;
        var labels = [];
        for (i = 0; i < series.data.length; i++) {
            if (typeof series.options.data[i][0] !== 'undefined') {
                labels.push(series.options.data[i][0]);
            } else {
                labels.push(series.options.data[i].name);
            }
        }
        var adjusted = formatter.adjustLabels(labels, maxWidth, minFontSize, defaultFontSize, 'middle');

        for (i = 0; i < series.data.length; i++) {
            series.data[i].name = adjusted.labels[i];
            // check for a redraw, update the font size in place
            if (series.data[i].dataLabel && series.data[i].dataLabel.css) {
                series.data[i].dataLabel.css({ fontSize: adjusted.fontSize + 'px' });
            }
        }
        _jquery2.default.extend(true, options.dataLabels, {
            style: {
                fontSize: adjusted.fontSize + 'px'
            },
            y: Math.floor(adjusted.fontSize / 4) - 3
        });
        formatter.destroy();
    },


    // Highcharts will try to do its own elision of labels that overflow the container,
    // we disable that since we're doing our own elision.
    placeDataLabelsPreHook: function placeDataLabelsPreHook(pieSeries) {
        pieSeries.points.forEach(function (point) {
            point.dataLabel.sideOverflow = false;
        });
    },


    /**
     * @author sfishel
     *
     * After the data labels have been drawn, update the connector paths in place.
     */

    drawDataLabelsPostHook: function drawDataLabelsPostHook(pieSeries) {
        var _this5 = this;

        (0, _underscore2.default)(pieSeries.points).each(function (point) {
            if (point.connector) {
                var path = point.connector.attr('d').split(' ');
                point.connector.attr({ d: _this5.updateConnectorPath(path) });
            }
        });
    },
    updateConnectorPath: function updateConnectorPath(path) {
        // the default path consists of three points that create a two-segment line
        // we are going to move the middle point so the outer segment is horizontal

        // first extract the actual points from the SVG-style path declaration
        var firstPoint = {
            x: parseFloat(path[1]),
            y: parseFloat(path[2])
        };

        var secondPoint = {
            x: parseFloat(path[4]),
            y: parseFloat(path[5])
        };

        var thirdPoint = {
            x: parseFloat(path[7]),
            y: parseFloat(path[8])
        };

        // find the slope of the second line segment, use it to calculate the new middle point
        var secondSegmentSlope = (thirdPoint.y - secondPoint.y) / (thirdPoint.x - secondPoint.x);

        var newSecondPoint = {
            x: thirdPoint.x + (firstPoint.y - thirdPoint.y) / secondSegmentSlope,
            y: firstPoint.y
        };

        // define the update path and swap it into the original array
        // if the resulting path would back-track on the x-axis (or is a horizontal line),
        // just draw a line directly from the first point to the last
        var lineIsVertical = !_underscore2.default.isFinite(secondSegmentSlope);

        var wouldBacktrack = isNaN(newSecondPoint.x) || firstPoint.x >= newSecondPoint.x && newSecondPoint.x <= thirdPoint.x || firstPoint.x <= newSecondPoint.x && newSecondPoint.x >= thirdPoint.x;

        var newPath = !lineIsVertical && wouldBacktrack ? ['M', firstPoint.x, firstPoint.y, 'L', thirdPoint.x, thirdPoint.y] : ['M', firstPoint.x, firstPoint.y, 'L', newSecondPoint.x, newSecondPoint.y, 'L', thirdPoint.x, thirdPoint.y];

        return newPath;
    }
});

exports.default = PieChartDataLabels;
module.exports = exports['default'];

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _ScatterChart = __webpack_require__(101);

var _ScatterChart2 = _interopRequireDefault(_ScatterChart);

var _NumericAxis = __webpack_require__(49);

var _NumericAxis2 = _interopRequireDefault(_NumericAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BubbleChart(container, properties) {
    _ScatterChart2.default.call(this, container, properties);
}
(0, _lang.inherit)(BubbleChart, _ScatterChart2.default);

_jquery2.default.extend(BubbleChart.prototype, {
    NUM_DIMENSION_FIELDS: 3,
    TYPE: 'bubble',

    initializeNonMarkFields: function initializeNonMarkFields(dataFields) {
        _ScatterChart2.default.prototype.initializeNonMarkFields.call(this, dataFields);
        if (dataFields.length > this.NUM_DIMENSION_FIELDS) {
            this.zField = dataFields[3];
        } else {
            this.zField = dataFields[2];
        }
    },
    isEmpty: function isEmpty() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ScatterChart2.default.prototype.isEmpty.apply(this, args) || (0, _underscore2.default)(this.zField).isUndefined();
    },
    processProperties: function processProperties() {
        _ScatterChart2.default.prototype.processProperties.call(this);

        var defaults = { bubbleMaximumSize: 50, bubbleMinimumSize: 10, bubbleSizeBy: 'area' };

        this.bubbleMaximumSize = this.properties['chart.bubbleMaximumSize'] && parseInt(this.properties['chart.bubbleMaximumSize'], 10);
        this.bubbleMinimumSize = this.properties['chart.bubbleMinimumSize'] && parseInt(this.properties['chart.bubbleMinimumSize'], 10);
        this.bubbleSizeBy = this.properties['chart.bubbleSizeBy'] || defaults['bubbleSizeBy'];

        if (isNaN(this.bubbleMaximumSize) || this.bubbleMaximumSize <= 0) {
            this.bubbleMaximumSize = defaults['bubbleMaximumSize'];
        }

        if (isNaN(this.bubbleMinimumSize) || this.bubbleMinimumSize <= 0) {
            this.bubbleMinimumSize = defaults['bubbleMinimumSize'];
        }

        if (this.bubbleSizeBy === 'diameter') {
            this.bubbleSizeBy = 'width';
        } else if (this.bubbleSizeBy !== 'area') {
            this.bubbleSizeBy = defaults['bubbleSizeBy'];
        }
    },
    setAllSeriesData: function setAllSeriesData() {
        var _this = this;

        var xData = this.formatNumericAxisData(this.xAxisList[0], this.xField);
        var yData = this.formatNumericAxisData(this.yAxisList[0], this.yField);
        var zData = this.formatNumericAxisData(this.yAxisList[0], this.zField);

        if (this.isMultiSeries) {
            (0, _underscore2.default)(this.seriesList).each(function (series) {
                var seriesName = series.getName();
                series.setData({
                    x: _this.filterDataByNameMatch(xData, seriesName),
                    y: _this.filterDataByNameMatch(yData, seriesName),
                    z: _this.filterDataByNameMatch(zData, seriesName)
                });
            });
        } else {
            this.seriesList[0].setData({
                x: xData,
                y: yData,
                z: zData
            });
        }
    },
    getPlotOptionsConfig: function getPlotOptionsConfig() {
        var minSize = this.bubbleMinimumSize;
        var maxSize = this.bubbleMaximumSize;
        var sizeBy = this.bubbleSizeBy;
        return {
            bubble: {
                stickyTracking: false,
                minSize: minSize,
                maxSize: maxSize,
                sizeBy: sizeBy,
                tooltip: {
                    followPointer: false
                },
                cursor: this.chartClickEnabled ? 'pointer' : 'default'
            }
        };
    },
    getSeriesPointInfo: function getSeriesPointInfo(series, hcPoint) {
        var _ScatterChart$prototy;

        for (var _len2 = arguments.length, restArgs = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            restArgs[_key2 - 2] = arguments[_key2];
        }

        var pointInfo = (_ScatterChart$prototy = _ScatterChart2.default.prototype.getSeriesPointInfo).call.apply(_ScatterChart$prototy, [this, series, hcPoint].concat(restArgs));
        var pointIndex = hcPoint.index;
        var seriesName = series.getName();
        var zSeries = this.dataSet.getSeries(this.zField);
        var zValue = this.isMultiSeries ? this.filterDataByNameMatch(zSeries, seriesName)[pointIndex] : zSeries[pointIndex];

        pointInfo.zAxisName = this.zField;
        pointInfo.zValue = _NumericAxis2.default.formatNumber(zValue);
        return pointInfo;
    }
});

exports.default = BubbleChart;
module.exports = exports['default'];

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(1);

var _underscore2 = _interopRequireDefault(_underscore);

var _lang = __webpack_require__(2);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

var _Gauge = __webpack_require__(53);

var _Gauge2 = _interopRequireDefault(_Gauge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RadialGauge(container, properties) {
    _Gauge2.default.call(this, container, properties);
}
(0, _lang.inherit)(RadialGauge, _Gauge2.default);

_jquery2.default.extend(RadialGauge.prototype, {
    showMinorTicksByDefault: false,

    updateDimensions: function updateDimensions() {
        _Gauge2.default.prototype.updateDimensions.call(this);
        // since the gauge is circular, have to handle when the container is narrower than it is tall
        if (this.width < this.height && this.width >= this.MIN_GAUGE_HEIGHT) {
            this.$container.height(this.width);
            this.height = this.width;
        }
    },
    processProperties: function processProperties() {
        _Gauge2.default.prototype.processProperties.call(this);
        this.verticalPadding = 10;
        this.minorsPerMajor = 10;
        this.tickWidth = 1;

        this.startAngle = this.computeStartAngle();
        this.arcAngle = this.computeArcAngle();
    },
    computeStartAngle: function computeStartAngle() {
        var angle = parseInt(this.properties['chart.rangeStartAngle'], 10);
        if ((0, _underscore2.default)(angle).isNaN()) {
            angle = 45;
        }
        // add 90 to startAngle because we start at south instead of east
        return mathUtils.degreeToRadian(angle + 90);
    },
    computeArcAngle: function computeArcAngle() {
        var angle = parseInt(this.properties['chart.rangeArcAngle'], 10) || 270;
        return mathUtils.degreeToRadian(angle);
    },
    renderGauge: function renderGauge() {
        _Gauge2.default.prototype.renderGauge.call(this);
        this.borderWidth = mathUtils.roundWithMin(this.height / 60, 3);
        this.tickOffset = mathUtils.roundWithMin(this.height / 100, 3);
        this.tickLabelOffset = this.borderWidth;
        this.tickFontSize = mathUtils.roundWithMin(this.height / 25, 10); // in pixels
        this.valueFontSize = mathUtils.roundWithMin(this.height / 15, 15); // in pixels
        if (this.isShiny) {
            this.needleTailLength = mathUtils.roundWithMin(this.height / 15, 10);
            this.needleTailWidth = mathUtils.roundWithMin(this.height / 50, 6);
            this.knobWidth = mathUtils.roundWithMin(this.height / 30, 7);
        } else {
            this.needleWidth = mathUtils.roundWithMin(this.height / 60, 3);
        }
        if (!this.isShiny) {
            this.bandOffset = 0;
            this.bandThickness = mathUtils.roundWithMin(this.height / 30, 7);
        } else {
            this.bandOffset = this.borderWidth;
            this.bandThickness = mathUtils.roundWithMin(this.height / 40, 4);
        }
        this.tickColor = !this.isShiny ? this.foregroundColor : 'silver';
        this.tickFontColor = !this.isShiny ? this.fontColor : 'silver';
        this.valueColor = !this.isShiny ? this.fontColor : '#b8b167';
        this.tickLength = mathUtils.roundWithMin(this.height / 20, 4);
        this.minorTickLength = this.tickLength / 2;
        this.radius = (this.height - 2 * (this.verticalPadding + this.borderWidth)) / 2;
        this.valueHeight = this.height - (this.radius / 4 + this.verticalPadding + this.borderWidth);
        this.needleLength = !this.isShiny ? this.radius - this.bandThickness / 2 : this.radius;

        this.tickStart = this.radius - this.bandOffset - this.bandThickness - this.tickOffset;
        this.tickEnd = this.tickStart - this.tickLength;
        this.tickLabelPosition = this.tickEnd - this.tickLabelOffset;
        this.minorTickEnd = this.tickStart - this.minorTickLength;

        if (this.isShiny) {
            this.elements.border = this.renderer.circle(this.width / 2, this.height / 2, this.radius + this.borderWidth).attr({
                fill: '#edede7',
                stroke: 'silver',
                'stroke-width': 1
            }).add();

            this.elements.background = this.renderer.circle(this.width / 2, this.height / 2, this.radius).attr({
                fill: '#000000'
            }).add();
        }

        if (this.showRangeBand) {
            this.drawColorBand();
        }
        this.drawTicks();
        this.drawIndicator(this.value);
        if (this.showValue) {
            this.drawValueDisplay();
        }

        this.checkOutOfRange(this.value);
    },
    updateValueDisplay: function updateValueDisplay(valueText) {
        this.elements.valueDisplay.attr({
            text: valueText
        });
    },
    drawColorBand: function drawColorBand() {
        var i = void 0;
        var startAngle = void 0;
        var endAngle = void 0;
        var outerRadius = this.radius - this.bandOffset;
        var innerRadius = outerRadius - this.bandThickness;

        for (i = 0; i < this.ranges.length - 1; i++) {
            startAngle = this.translateValue(this.ranges[i]);
            endAngle = this.translateValue(this.ranges[i + 1]);

            this.elements['colorBand' + i] = this.renderer.arc(this.width / 2, this.height / 2, outerRadius, innerRadius, startAngle, endAngle).attr({
                fill: this.getColorByIndex(i)
            }).add();
        }
    },
    drawMajorTick: function drawMajorTick(angle) {
        return this.renderer.path(['M', this.width / 2 + this.tickStart * Math.cos(angle), this.height / 2 + this.tickStart * Math.sin(angle), 'L', this.width / 2 + this.tickEnd * Math.cos(angle), this.height / 2 + this.tickEnd * Math.sin(angle)]).attr({
            stroke: this.tickColor,
            'stroke-width': this.tickWidth
        }).add();
    },
    drawMajorTickLabel: function drawMajorTickLabel(angle, text) {
        var sin = Math.sin(angle);
        var labelWidth = this.predictTextWidth(text, this.tickFontSize);
        var textAlignment = angle < 1.5 * Math.PI ? 'left' : 'right';

        var xOffset = angle < 1.5 * Math.PI ? -labelWidth / 2 * sin * sin : labelWidth / 2 * sin * sin;

        var yOffset = this.tickFontSize / 4 * sin;

        return this.renderer.text(text, this.width / 2 + this.tickLabelPosition * Math.cos(angle) + xOffset, this.height / 2 + (this.tickLabelPosition - 4) * sin + this.tickFontSize / 4 - yOffset).attr({
            align: textAlignment
        }).css({
            color: this.tickFontColor,
            fontSize: this.tickFontSize + 'px'
        }).add();
    },
    drawMinorTick: function drawMinorTick(angle) {
        return this.renderer.path(['M', this.width / 2 + this.tickStart * Math.cos(angle), this.height / 2 + this.tickStart * Math.sin(angle), 'L', this.width / 2 + this.minorTickEnd * Math.cos(angle), this.height / 2 + this.minorTickEnd * Math.sin(angle)]).attr({
            stroke: this.tickColor,
            'stroke-width': this.tickWidth
        }).add();
    },
    drawIndicator: function drawIndicator(val) {
        var needlePath = void 0;
        var needleStroke = void 0;
        var needleStrokeWidth = void 0;
        var needleFill = void 0;
        var needleRidgePath = void 0;
        var knobFill = void 0;
        var valueAngle = this.normalizedTranslateValue(val);
        var myCos = Math.cos(valueAngle);
        var mySin = Math.sin(valueAngle);

        if (!this.isShiny) {
            needlePath = ['M', this.width / 2, this.height / 2, 'L', this.width / 2 + myCos * this.needleLength, this.height / 2 + mySin * this.needleLength];
            needleStroke = this.foregroundColor;
            needleStrokeWidth = this.needleWidth;
        } else {
            needlePath = ['M', this.width / 2 - this.needleTailLength * myCos, this.height / 2 - this.needleTailLength * mySin, 'L', this.width / 2 - this.needleTailLength * myCos + this.needleTailWidth * mySin, this.height / 2 - this.needleTailLength * mySin - this.needleTailWidth * myCos, this.width / 2 + this.needleLength * myCos, this.height / 2 + this.needleLength * mySin, this.width / 2 - this.needleTailLength * myCos - this.needleTailWidth * mySin, this.height / 2 - this.needleTailLength * mySin + this.needleTailWidth * myCos, this.width / 2 - this.needleTailLength * myCos, this.height / 2 - this.needleTailLength * mySin];
            needleFill = {
                linearGradient: [this.width / 2 - this.needleTailLength * myCos, this.height / 2 - this.needleTailLength * mySin, this.width / 2 - this.needleTailLength * myCos - this.needleTailWidth * mySin, this.height / 2 - this.needleTailLength * mySin + this.needleTailWidth * myCos],
                stops: [[0, '#999999'], [0.2, '#cccccc']]
            };
            needleRidgePath = ['M', this.width / 2 - (this.needleTailLength - 2) * myCos, this.height / 2 - (this.needleTailLength - 2) * mySin, 'L', this.width / 2 + (this.needleLength - this.bandOffset / 2) * myCos, this.height / 2 + (this.needleLength - this.bandOffset / 2) * mySin];
            knobFill = {
                linearGradient: [this.width / 2 + this.knobWidth * mySin, this.height / 2 - this.knobWidth * myCos, this.width / 2 - this.knobWidth * mySin, this.height / 2 + this.knobWidth * myCos],
                stops: [[0, 'silver'], [0.5, 'black'], [1, 'silver']]
            };
        }
        if (this.isShiny) {
            if (this.elements.centerKnob) {
                this.elements.centerKnob.destroy();
            }
            this.elements.centerKnob = this.renderer.circle(this.width / 2, this.height / 2, this.knobWidth).attr({
                fill: knobFill
            }).add();
        }
        if (this.elements.needle) {
            this.elements.needle.destroy();
        }
        this.elements.needle = this.renderer.path(needlePath).attr({
            fill: needleFill || '',
            stroke: needleStroke || '',
            'stroke-width': needleStrokeWidth || ''
        }).add();
        if (this.isShiny) {
            if (this.elements.needleRidge) {
                this.elements.needleRidge.destroy();
            }
            this.elements.needleRidge = this.renderer.path(needleRidgePath).attr({
                stroke: '#cccccc',
                'stroke-width': 1
            }).add();
        }
    },
    drawValueDisplay: function drawValueDisplay() {
        var valueText = this.formatValue(this.value);
        this.elements.valueDisplay = this.renderer.text(valueText, this.width / 2, this.valueHeight).css({
            color: this.valueColor,
            fontSize: this.valueFontSize + 'px',
            lineHeight: this.valueFontSize + 'px',
            fontWeight: 'bold'
        }).attr({
            align: 'center'
        }).add();
    },
    getSVG: function getSVG() {
        // a little bit of cleanup is required here since the export renderer doesn't support gradients
        if (this.elements.centerKnob) {
            this.elements.centerKnob.attr({ fill: '#999999' });
        }
        this.elements.needle.attr({ fill: '#bbbbbb' });
        if (this.elements.needleRidge) {
            this.elements.needleRidge.attr({ stroke: '#999999' });
        }
        return _Gauge2.default.prototype.getSVG.call(this);
    },
    normalizedTranslateValue: function normalizedTranslateValue(val) {
        if (val < this.ranges[0]) {
            return this.translateValue(this.ranges[0]);
        }
        if (val > this.ranges[this.ranges.length - 1]) {
            return this.translateValue(this.ranges[this.ranges.length - 1]);
        }
        return this.translateValue(val);
    },
    translateValue: function translateValue(val) {
        var dataRange = this.ranges[this.ranges.length - 1] - this.ranges[0];
        var normalizedValue = val - this.ranges[0];

        return this.startAngle + normalizedValue / dataRange * this.arcAngle;
    }
});

exports.default = RadialGauge;
module.exports = exports['default'];

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _lang = __webpack_require__(2);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

var _FillerGauge = __webpack_require__(102);

var _FillerGauge2 = _interopRequireDefault(_FillerGauge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HorizontalFillerGauge(container, properties) {
    _FillerGauge2.default.call(this, container, properties);
    this.horizontalPadding = 20;
    this.tickOffset = 5;
    this.tickLength = 15;
    this.tickWidth = 1;
    this.tickLabelOffset = 5;
    this.minorTickLength = Math.floor(this.tickLength / 2);
}
(0, _lang.inherit)(HorizontalFillerGauge, _FillerGauge2.default);

_jquery2.default.extend(HorizontalFillerGauge.prototype, {
    renderGauge: function renderGauge() {
        this.tickFontSize = mathUtils.roundWithMinMax(this.width / 50, 10, 20); // in pixels
        this.backgroundCornerRad = mathUtils.roundWithMinMax(this.width / 120, 3, 5);
        this.valueFontSize = mathUtils.roundWithMinMax(this.width / 40, 15, 25); // in pixels
        this.backgroundHeight = this.valueFontSize * 3;
        this.valueBottomPadding = mathUtils.roundWithMinMax(this.width / 100, 5, 10);
        _FillerGauge2.default.prototype.renderGauge.call(this);
    },
    drawBackground: function drawBackground() {
        var tickValues = this.calculateTickValues(this.ranges[0], this.ranges[this.ranges.length - 1], this.MAX_TICKS_PER_RANGE);
        var maxTickValue = tickValues[tickValues.length - 1];
        var maxTickWidth = this.predictTextWidth(this.formatValue(maxTickValue), this.tickFontSize);

        this.horizontalPadding = Math.max(this.horizontalPadding, maxTickWidth);
        this.backgroundWidth = this.width - 2 * this.horizontalPadding;

        if (this.isShiny) {
            this.elements.background = this.renderer.rect(this.horizontalPadding, (this.height - this.backgroundHeight) / 2, this.backgroundWidth, this.backgroundHeight, this.backgroundCornerRad).attr({
                fill: '#edede7',
                stroke: 'silver',
                'stroke-width': 1
            }).add();
        }

        // no actual dependency here, but want to be consistent with sibling class
        this.tickStartY = (this.height + this.backgroundHeight) / 2 + this.tickOffset;
        this.tickEndY = this.tickStartY + this.tickLength;
        this.tickLabelStartY = this.tickEndY + this.tickLabelOffset;
    },
    drawMajorTick: function drawMajorTick(offset) {
        var tickOffset = this.horizontalPadding + offset;

        return this.renderer.path(['M', tickOffset, this.tickStartY, 'L', tickOffset, this.tickEndY]).attr({
            stroke: this.tickColor,
            'stroke-width': this.tickWidth
        }).add();
    },
    drawMajorTickLabel: function drawMajorTickLabel(offset, text) {
        var tickOffset = this.horizontalPadding + offset;

        return this.renderer.text(text, tickOffset, this.tickLabelStartY + this.tickFontSize).attr({
            align: 'center'
        }).css({
            color: this.tickFontColor,
            fontSize: this.tickFontSize + 'px',
            lineHeight: this.tickFontSize + 'px'
        }).add();
    },
    drawMinorTick: function drawMinorTick(offset) {
        var tickOffset = this.horizontalPadding + offset;

        return this.renderer.path(['M', tickOffset, this.tickStartY, 'L', tickOffset, this.tickStartY + this.minorTickLength]).attr({
            stroke: this.tickColor,
            'stroke-width': this.minorTickWidth
        }).add();
    },
    drawIndicator: function drawIndicator(val) {
        // TODO: implement calculation of gradient based on user-defined colors
        // for not we are using solid colors

        var // fillGradient = this.getFillGradient(val),
        fillColor = this.getFillColor(val);

        var fillOffset = this.normalizedTranslateValue(val);
        var fillTopX = void 0;
        var fillPath = void 0;
        if (fillOffset > 0) {
            fillOffset = Math.max(fillOffset, this.backgroundCornerRad);
            fillTopX = this.horizontalPadding + fillOffset;
            if (!this.isShiny) {
                fillPath = ['M', this.horizontalPadding, (this.height - this.backgroundHeight) / 2, 'L', fillTopX, (this.height - this.backgroundHeight) / 2, fillTopX, (this.height + this.backgroundHeight) / 2, this.horizontalPadding, (this.height + this.backgroundHeight) / 2, this.horizontalPadding, (this.height - this.backgroundHeight) / 2];
            } else {
                fillPath = ['M', this.horizontalPadding + this.backgroundCornerRad, (this.height - this.backgroundHeight - 2) / 2, 'C', this.horizontalPadding + this.backgroundCornerRad, (this.height - this.backgroundHeight - 2) / 2, this.horizontalPadding, (this.height - this.backgroundHeight - 2) / 2, this.horizontalPadding, (this.height - this.backgroundHeight - 2) / 2 + this.backgroundCornerRad, 'L', this.horizontalPadding, (this.height + this.backgroundHeight) / 2 - this.backgroundCornerRad, 'C', this.horizontalPadding, (this.height + this.backgroundHeight) / 2 - this.backgroundCornerRad, this.horizontalPadding, (this.height + this.backgroundHeight) / 2, this.horizontalPadding + this.backgroundCornerRad, (this.height + this.backgroundHeight) / 2, 'L', fillTopX, (this.height + this.backgroundHeight) / 2, fillTopX, (this.height - this.backgroundHeight - 2) / 2, this.horizontalPadding + this.backgroundCornerRad, (this.height - this.backgroundHeight - 2) / 2];
            }
        } else {
            fillPath = [];
        }

        if (this.elements.fill) {
            this.elements.fill.destroy();
        }
        this.elements.fill = this.renderer.path(fillPath).attr({
            fill: fillColor
        }).add();
        if (this.showValue) {
            this.drawValueDisplay(val, fillColor, fillOffset);
        }
    },
    drawValueDisplay: function drawValueDisplay(val, fillColor, fillOffset) {
        var displayVal = this.getDisplayValue(val);
        var fillTopX = this.horizontalPadding + fillOffset;
        var valueColor = this.getValueColor(fillColor);
        var valueStartX = void 0;
        var valueText = this.formatValue(displayVal);
        var valueTotalWidth = this.predictTextWidth(valueText, this.valueFontSize) + this.valueBottomPadding;

        // determine if the value display can (horizontally) fit inside the fill,
        // if not orient it to the right of the fill
        if (fillOffset >= valueTotalWidth) {
            valueStartX = fillTopX - valueTotalWidth;
        } else {
            valueStartX = fillTopX + this.valueBottomPadding;
            valueColor = this.defaultValueColor;
        }
        if (this.elements.valueDisplay) {
            this.elements.valueDisplay.attr({
                text: valueText,
                x: valueStartX
            }).css({
                color: valueColor,
                fontSize: this.valueFontSize + 'px',
                fontWeight: 'bold'
            }).toFront();
        } else {
            this.elements.valueDisplay = this.renderer.text(valueText, valueStartX, this.height / 2 + this.valueFontSize / 4).css({
                color: valueColor,
                fontSize: this.valueFontSize + 'px',
                lineHeight: this.valueFontSize + 'px',
                fontWeight: 'bold'
            }).attr({
                align: 'left'
            }).add();
        }
    },
    normalizedTranslateValue: function normalizedTranslateValue(val) {
        if (val < this.ranges[0]) {
            return 0;
        }
        if (val > this.ranges[this.ranges.length - 1]) {
            return this.translateValue(this.ranges[this.ranges.length - 1]);
        }
        return this.translateValue(val);
    },
    translateValue: function translateValue(val) {
        var dataRange = this.ranges[this.ranges.length - 1] - this.ranges[0];
        var normalizedValue = val - this.ranges[0];

        return Math.round(normalizedValue / dataRange * this.backgroundWidth);
    }
});

exports.default = HorizontalFillerGauge;
module.exports = exports['default'];

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _lang = __webpack_require__(2);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

var _FillerGauge = __webpack_require__(102);

var _FillerGauge2 = _interopRequireDefault(_FillerGauge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VerticalFillerGauge(container, properties) {
    _FillerGauge2.default.call(this, container, properties);
    this.tickWidth = 1;
}
(0, _lang.inherit)(VerticalFillerGauge, _FillerGauge2.default);

_jquery2.default.extend(VerticalFillerGauge.prototype, {
    renderGauge: function renderGauge() {
        this.tickOffset = mathUtils.roundWithMin(this.height / 100, 3);
        this.tickLength = mathUtils.roundWithMin(this.height / 20, 4);
        this.tickLabelOffset = mathUtils.roundWithMin(this.height / 60, 3);
        this.tickFontSize = mathUtils.roundWithMin(this.height / 20, 10); // in pixels
        this.minorTickLength = this.tickLength / 2;
        this.backgroundCornerRad = mathUtils.roundWithMin(this.height / 60, 3);
        this.valueBottomPadding = mathUtils.roundWithMin(this.height / 30, 5);
        this.valueFontSize = mathUtils.roundWithMin(this.height / 20, 12); // in pixels
        _FillerGauge2.default.prototype.renderGauge.call(this);
    },
    drawBackground: function drawBackground() {
        this.verticalPadding = 10 + this.tickFontSize / 2;
        this.backgroundWidth = mathUtils.roundWithMin(this.height / 4, 50);
        this.backgroundHeight = this.height - 2 * this.verticalPadding;

        // rather than trying to dynamically increase the width as the values come in, we
        // provide enough room for an order of magnitude greater than the highest range value
        var maxValueWidth = this.determineMaxValueWidth(this.ranges, this.valueFontSize) + 10;

        this.backgroundWidth = Math.max(this.backgroundWidth, maxValueWidth);

        if (this.isShiny) {
            this.elements.background = this.renderer.rect((this.width - this.backgroundWidth) / 2, this.verticalPadding, this.backgroundWidth, this.backgroundHeight, this.backgroundCornerRad).attr({
                fill: '#edede7',
                stroke: 'silver',
                'stroke-width': 1
            }).add();
        }

        // these values depend on the adjusted width of the background
        this.tickStartX = (this.width + this.backgroundWidth) / 2 + this.tickOffset;
        this.tickEndX = this.tickStartX + this.tickLength;
        this.tickLabelStartX = this.tickEndX + this.tickLabelOffset;
    },
    determineMaxValueWidth: function determineMaxValueWidth(ranges, fontSize) {
        // in percent mode, we can hard-code what the max-width value can be
        if (this.usePercentageValue) {
            return this.predictTextWidth('100.00%', fontSize);
        }
        var i = void 0;
        var valueString = void 0;
        var maxWidth = 0;

        // loop through all ranges and determine which has the greatest width (because of scientific notation, we can't just look at the extremes)
        // additionally add an extra digit to the min and max ranges to accomodate out-of-range values
        for (i = 0; i < ranges.length; i++) {
            valueString = '' + ranges[i];
            if (i === 0 || i === ranges.length - 1) {
                valueString += '0';
            }
            maxWidth = Math.max(maxWidth, this.predictTextWidth(valueString, fontSize));
        }
        return maxWidth;
    },
    drawMajorTick: function drawMajorTick(height) {
        var tickHeight = this.verticalPadding + this.backgroundHeight - height;

        return this.renderer.path(['M', this.tickStartX, tickHeight, 'L', this.tickEndX, tickHeight]).attr({
            stroke: this.tickColor,
            'stroke-width': this.tickWidth
        }).add();
    },
    drawMajorTickLabel: function drawMajorTickLabel(height, text) {
        var tickHeight = this.verticalPadding + this.backgroundHeight - height;

        return this.renderer.text(text, this.tickLabelStartX, tickHeight + this.tickFontSize / 4).attr({
            align: 'left'
        }).css({
            color: this.tickFontColor,
            fontSize: this.tickFontSize + 'px',
            lineHeight: this.tickFontSize + 'px'
        }).add();
    },
    drawMinorTick: function drawMinorTick(height) {
        var tickHeight = this.verticalPadding + this.backgroundHeight - height;

        return this.renderer.path(['M', this.tickStartX, tickHeight, 'L', this.tickStartX + this.minorTickLength, tickHeight]).attr({
            stroke: this.tickColor,
            'stroke-width': this.minorTickWidth
        }).add();
    },
    drawIndicator: function drawIndicator(val) {
        // TODO: implement calculation of gradient based on user-defined colors
        // for now we are using solid colors

        var // fillGradient = this.getFillGradient(val),
        fillColor = this.getFillColor(val);

        var fillHeight = this.normalizedTranslateValue(val);
        var fillTopY = void 0;
        var fillPath = void 0;
        if (fillHeight > 0) {
            fillHeight = Math.max(fillHeight, this.backgroundCornerRad);
            fillTopY = this.verticalPadding + this.backgroundHeight - fillHeight;
            if (!this.isShiny) {
                fillPath = ['M', (this.width - this.backgroundWidth) / 2, this.height - this.verticalPadding, 'L', (this.width + this.backgroundWidth) / 2, this.height - this.verticalPadding, (this.width + this.backgroundWidth) / 2, fillTopY, (this.width - this.backgroundWidth) / 2, fillTopY, (this.width - this.backgroundWidth) / 2, this.height - this.verticalPadding];
            } else {
                fillPath = ['M', (this.width - this.backgroundWidth - 2) / 2, this.height - this.verticalPadding - this.backgroundCornerRad, 'C', (this.width - this.backgroundWidth - 2) / 2, this.height - this.verticalPadding - this.backgroundCornerRad, (this.width - this.backgroundWidth - 2) / 2, this.height - this.verticalPadding, (this.width - this.backgroundWidth - 2) / 2 + this.backgroundCornerRad, this.height - this.verticalPadding, 'L', (this.width + this.backgroundWidth - 2) / 2 - this.backgroundCornerRad, this.height - this.verticalPadding, 'C', (this.width + this.backgroundWidth - 2) / 2 - this.backgroundCornerRad, this.height - this.verticalPadding, (this.width + this.backgroundWidth - 2) / 2, this.height - this.verticalPadding, (this.width + this.backgroundWidth - 2) / 2, this.height - this.verticalPadding - this.backgroundCornerRad, 'L', (this.width + this.backgroundWidth - 2) / 2, fillTopY, (this.width - this.backgroundWidth - 2) / 2, fillTopY, (this.width - this.backgroundWidth - 2) / 2, this.height - this.verticalPadding - this.backgroundCornerRad];
            }
        } else {
            fillPath = [];
        }

        if (this.elements.fill) {
            this.elements.fill.destroy();
        }
        this.elements.fill = this.renderer.path(fillPath).attr({
            fill: fillColor
        }).add();
        if (this.showValue) {
            this.drawValueDisplay(val, fillColor);
        }
    },
    drawValueDisplay: function drawValueDisplay(val, fillColor) {
        var displayVal = this.getDisplayValue(val);
        var fillHeight = this.normalizedTranslateValue(val);
        var fillTopY = this.verticalPadding + this.backgroundHeight - fillHeight;
        var valueTotalHeight = this.valueFontSize + this.valueBottomPadding;
        var valueColor = this.getValueColor(fillColor);
        var valueBottomY = void 0;
        var valueText = this.formatValue(displayVal);

        // determine if the value display can (vertically) fit inside the fill,
        // if not orient it to the bottom of the fill
        if (fillHeight >= valueTotalHeight) {
            valueBottomY = fillTopY + valueTotalHeight - this.valueBottomPadding;
        } else {
            valueBottomY = fillTopY - this.valueBottomPadding;
            valueColor = this.defaultValueColor;
        }
        if (this.elements.valueDisplay) {
            this.elements.valueDisplay.attr({
                text: valueText,
                y: valueBottomY
            }).css({
                color: valueColor,
                fontSize: this.valueFontSize + 'px',
                fontWeight: 'bold'
            }).toFront();
        } else {
            this.elements.valueDisplay = this.renderer.text(valueText, this.width / 2, valueBottomY).css({
                color: valueColor,
                fontSize: this.valueFontSize + 'px',
                lineHeight: this.valueFontSize + 'px',
                fontWeight: 'bold'
            }).attr({
                align: 'center'
            }).add();
        }
    },
    normalizedTranslateValue: function normalizedTranslateValue(val) {
        if (val < this.ranges[0]) {
            return 0;
        }
        if (val > this.ranges[this.ranges.length - 1]) {
            return this.translateValue(this.ranges[this.ranges.length - 1]) + 5;
        }
        return this.translateValue(val);
    },
    translateValue: function translateValue(val) {
        var dataRange = this.ranges[this.ranges.length - 1] - this.ranges[0];
        var normalizedValue = val - this.ranges[0];

        return Math.round(normalizedValue / dataRange * this.backgroundHeight);
    }
});

exports.default = VerticalFillerGauge;
module.exports = exports['default'];

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _lang = __webpack_require__(2);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

var _MarkerGauge = __webpack_require__(103);

var _MarkerGauge2 = _interopRequireDefault(_MarkerGauge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HorizontalMarkerGauge(container, properties) {
    _MarkerGauge2.default.call(this, container, properties);
    this.horizontalPadding = 20;
    this.tickOffset = 5;
    this.tickLength = 15;
    this.tickWidth = 1;
    this.tickLabelOffset = 5;
    this.minorTickLength = Math.floor(this.tickLength / 2);
    this.bandHeight = !this.isShiny ? 35 : 15;
}
(0, _lang.inherit)(HorizontalMarkerGauge, _MarkerGauge2.default);

_jquery2.default.extend(HorizontalMarkerGauge.prototype, {
    renderGauge: function renderGauge() {
        this.markerWindowHeight = mathUtils.roundWithMinMax(this.width / 30, 30, 80);
        this.markerSideWidth = this.markerWindowHeight / 2;
        this.markerSideCornerRad = this.markerSideWidth / 3;
        this.bandOffsetBottom = 5 + this.markerWindowHeight / 2;
        this.bandOffsetTop = 5 + this.markerWindowHeight / 2;
        this.tickFontSize = mathUtils.roundWithMinMax(this.width / 50, 10, 20); // in pixels
        this.backgroundCornerRad = mathUtils.roundWithMinMax(this.width / 120, 3, 5);
        this.valueFontSize = mathUtils.roundWithMinMax(this.width / 40, 15, 25); // in pixels
        this.valueOffset = this.markerSideWidth + 10;
        this.tickLabelPadding = this.tickFontSize / 2;
        this.bandOffsetX = !this.isShiny ? 0 : this.tickLabelPadding;
        this.backgroundHeight = this.bandOffsetX + this.bandHeight + this.tickOffset + this.tickLength + this.tickLabelOffset + this.tickFontSize + this.tickLabelPadding;
        _MarkerGauge2.default.prototype.renderGauge.call(this);
    },
    drawBackground: function drawBackground(tickValues) {
        tickValues = this.calculateTickValues(this.ranges[0], this.ranges[this.ranges.length - 1], this.MAX_TICKS_PER_RANGE);
        var maxTickValue = tickValues[tickValues.length - 1];
        var maxTickWidth = this.predictTextWidth(this.formatValue(maxTickValue), this.tickFontSize);

        this.bandOffsetBottom = Math.max(this.bandOffsetBottom, maxTickWidth);
        this.bandOffsetTop = Math.max(this.bandOffsetTop, maxTickWidth);
        this.backgroundWidth = this.width - 2 * this.horizontalPadding;
        this.bandWidth = this.backgroundWidth - (this.bandOffsetBottom + this.bandOffsetTop);

        if (this.isShiny) {
            this.elements.background = this.renderer.rect(this.horizontalPadding, (this.height - this.backgroundHeight) / 2, this.backgroundWidth, this.backgroundHeight, this.backgroundCornerRad).attr({
                fill: '#edede7',
                stroke: 'silver',
                'stroke-width': 1
            }).add();
        }
    },
    drawBand: function drawBand() {
        var i = void 0;
        var startOffset = void 0;
        var endOffset = void 0;
        var bandStartX = this.horizontalPadding + this.bandOffsetBottom;
        var bandTopY = (this.height - this.backgroundHeight) / 2 + this.bandOffsetX;

        for (i = 0; i < this.ranges.length - 1; i++) {
            startOffset = this.translateValue(this.ranges[i]);
            endOffset = this.translateValue(this.ranges[i + 1]);
            this.elements['colorBand' + i] = this.renderer.rect(bandStartX + startOffset, bandTopY, endOffset - startOffset, this.bandHeight, this.bandCornerRad).attr({
                fill: this.getColorByIndex(i)
            }).add();
        }

        this.tickStartY = (this.height - this.backgroundHeight) / 2 + (this.bandOffsetX + this.bandHeight) + this.tickOffset;
        this.tickEndY = this.tickStartY + this.tickLength;
        this.tickLabelStartY = this.tickEndY + this.tickLabelOffset;
    },
    drawMajorTick: function drawMajorTick(offset) {
        var tickOffset = this.horizontalPadding + this.bandOffsetBottom + offset;

        return this.renderer.path(['M', tickOffset, this.tickStartY, 'L', tickOffset, this.tickEndY]).attr({
            stroke: this.tickColor,
            'stroke-width': this.tickWidth
        }).add();
    },
    drawMajorTickLabel: function drawMajorTickLabel(offset, text) {
        var tickOffset = this.horizontalPadding + this.bandOffsetBottom + offset;

        return this.renderer.text(text, tickOffset, this.tickLabelStartY + this.tickFontSize).attr({
            align: 'center'
        }).css({
            color: this.tickFontColor,
            fontSize: this.tickFontSize + 'px',
            lineHeight: this.tickFontSize + 'px'
        }).add();
    },
    drawMinorTick: function drawMinorTick(offset) {
        var tickOffset = this.horizontalPadding + this.bandOffsetBottom + offset;

        return this.renderer.path(['M', tickOffset, this.tickStartY, 'L', tickOffset, this.tickStartY + this.minorTickLength]).attr({
            stroke: this.tickColor,
            'stroke-width': this.minorTickWidth
        }).add();
    },
    drawIndicator: function drawIndicator(val) {
        var markerOffset = this.normalizedTranslateValue(val);
        var markerStartY = !this.isShiny ? (this.height - this.backgroundHeight) / 2 - 10 : (this.height - this.backgroundHeight) / 2;
        var markerEndY = !this.isShiny ? markerStartY + this.bandHeight + 20 : markerStartY + this.backgroundHeight;
        var markerStartX = this.horizontalPadding + this.bandOffsetBottom + markerOffset;
        var markerLineWidth = 3; // set to 1 for shiny
        var markerLineStroke = this.foregroundColor; // set to red for shiny

        var markerLinePath = ['M', markerStartX, markerStartY, 'L', markerStartX, markerEndY];

        if (this.isShiny) {
            var markerLHSPath = ['M', markerStartX - this.markerWindowHeight / 2, markerStartY, 'L', markerStartX - this.markerWindowHeight / 2, markerStartY - (this.markerSideWidth - this.markerSideCornerRad), 'C', markerStartX - this.markerWindowHeight / 2, markerStartY - (this.markerSideWidth - this.markerSideCornerRad), markerStartX - this.markerWindowHeight / 2, markerStartY - this.markerSideWidth, markerStartX - this.markerWindowHeight / 2 + this.markerSideCornerRad, markerStartY - this.markerSideWidth, 'L', markerStartX + this.markerWindowHeight / 2 - this.markerSideCornerRad, markerStartY - this.markerSideWidth, 'C', markerStartX + this.markerWindowHeight / 2 - this.markerSideCornerRad, markerStartY - this.markerSideWidth, markerStartX + this.markerWindowHeight / 2, markerStartY - this.markerSideWidth, markerStartX + this.markerWindowHeight / 2, markerStartY - (this.markerSideWidth - this.markerSideCornerRad), 'L', markerStartX + this.markerWindowHeight / 2, markerStartY, markerStartX - this.markerWindowHeight, markerStartY];

            var markerRHSPath = ['M', markerStartX - this.markerWindowHeight / 2, markerEndY, 'L', markerStartX - this.markerWindowHeight / 2, markerEndY + (this.markerSideWidth - this.markerSideCornerRad), 'C', markerStartX - this.markerWindowHeight / 2, markerEndY + (this.markerSideWidth - this.markerSideCornerRad), markerStartX - this.markerWindowHeight / 2, markerEndY + this.markerSideWidth, markerStartX - this.markerWindowHeight / 2 + this.markerSideCornerRad, markerEndY + this.markerSideWidth, 'L', markerStartX + this.markerWindowHeight / 2 - this.markerSideCornerRad, markerEndY + this.markerSideWidth, 'C', markerStartX + this.markerWindowHeight / 2 - this.markerSideCornerRad, markerEndY + this.markerSideWidth, markerStartX + this.markerWindowHeight / 2, markerEndY + this.markerSideWidth, markerStartX + this.markerWindowHeight / 2, markerEndY + (this.markerSideWidth - this.markerSideCornerRad), 'L', markerStartX + this.markerWindowHeight / 2, markerEndY, markerStartX - this.markerWindowHeight, markerEndY];

            var markerBorderPath = ['M', markerStartX - this.markerWindowHeight / 2, markerStartY, 'L', markerStartX - this.markerWindowHeight / 2, markerEndY, markerStartX + this.markerWindowHeight / 2, markerEndY, markerStartX + this.markerWindowHeight / 2, markerStartY, markerStartX - this.markerWindowHeight / 2, markerStartY];

            var markerUnderlinePath = ['M', markerStartX - 1, markerStartY, 'L', markerStartX - 1, markerEndY];

            markerLineStroke = 'red';
            markerLineWidth = 1;

            if (this.elements.markerLHS) {
                this.elements.markerLHS.destroy();
            }
            this.elements.markerLHS = this.renderer.path(markerLHSPath).attr({
                fill: '#cccccc'
            }).add();
            if (this.elements.markerRHS) {
                this.elements.markerRHS.destroy();
            }
            this.elements.markerRHS = this.renderer.path(markerRHSPath).attr({
                fill: '#cccccc'
            }).add();
            if (this.elements.markerWindow) {
                this.elements.markerWindow.destroy();
            }
            this.elements.markerWindow = this.renderer.rect(markerStartX - this.markerWindowHeight / 2, markerStartY, this.markerWindowHeight, this.backgroundHeight, 0).attr({
                fill: 'rgba(255, 255, 255, 0.3)'
            }).add();
            if (this.elements.markerBorder) {
                this.elements.markerBorder.destroy();
            }
            this.elements.markerBorder = this.renderer.path(markerBorderPath).attr({
                stroke: 'white',
                'stroke-width': 2
            }).add();
            if (this.elements.markerUnderline) {
                this.elements.markerUnderline.destroy();
            }
            this.elements.markerUnderline = this.renderer.path(markerUnderlinePath).attr({
                stroke: 'white',
                'stroke-width': 2
            }).add();
        }

        if (this.elements.markerLine) {
            this.elements.markerLine.destroy();
        }
        this.elements.markerLine = this.renderer.path(markerLinePath).attr({
            stroke: markerLineStroke,
            'stroke-width': markerLineWidth
        }).add();
        if (this.showValue) {
            this.drawValueDisplay(val);
        }
    },
    drawValueDisplay: function drawValueDisplay(val) {
        var valueText = this.formatValue(val);
        var markerOffset = this.normalizedTranslateValue(val);
        var valueX = this.horizontalPadding + this.bandOffsetBottom + markerOffset;

        if (this.elements.valueDisplay) {
            this.elements.valueDisplay.attr({
                text: valueText,
                x: valueX
            });
        } else {
            this.elements.valueDisplay = this.renderer.text(valueText, valueX, (this.height - this.backgroundHeight) / 2 - this.valueOffset).css({
                color: 'black',
                fontSize: this.valueFontSize + 'px',
                lineHeight: this.valueFontSize + 'px',
                fontWeight: 'bold'
            }).attr({
                align: 'center'
            }).add();
        }
    },
    normalizedTranslateValue: function normalizedTranslateValue(val) {
        if (val < this.ranges[0]) {
            return 0;
        }
        if (val > this.ranges[this.ranges.length - 1]) {
            return this.translateValue(this.ranges[this.ranges.length - 1]);
        }
        return this.translateValue(val);
    },
    translateValue: function translateValue(val) {
        var dataRange = this.ranges[this.ranges.length - 1] - this.ranges[0];
        var normalizedValue = val - this.ranges[0];

        return Math.round(normalizedValue / dataRange * this.bandWidth);
    }
});

exports.default = HorizontalMarkerGauge;
module.exports = exports['default'];

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _lang = __webpack_require__(2);

var _math = __webpack_require__(4);

var mathUtils = _interopRequireWildcard(_math);

var _MarkerGauge = __webpack_require__(103);

var _MarkerGauge2 = _interopRequireDefault(_MarkerGauge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VerticalMarkerGauge(container, properties) {
    _MarkerGauge2.default.call(this, container, properties);
    this.verticalPadding = 10;
}
(0, _lang.inherit)(VerticalMarkerGauge, _MarkerGauge2.default);

_jquery2.default.extend(VerticalMarkerGauge.prototype, {
    renderGauge: function renderGauge() {
        this.markerWindowHeight = mathUtils.roundWithMin(this.height / 7, 20);
        this.markerSideWidth = this.markerWindowHeight / 2;
        this.markerSideCornerRad = this.markerSideWidth / 3;
        this.bandOffsetBottom = 5 + this.markerWindowHeight / 2;
        this.bandOffsetTop = 5 + this.markerWindowHeight / 2;
        this.tickOffset = mathUtils.roundWithMin(this.height / 100, 3);
        this.tickLength = mathUtils.roundWithMin(this.height / 20, 4);
        this.tickLabelOffset = mathUtils.roundWithMin(this.height / 60, 3);
        this.tickFontSize = mathUtils.roundWithMin(this.height / 20, 10); // in pixels
        this.minorTickLength = this.tickLength / 2;
        this.backgroundCornerRad = mathUtils.roundWithMin(this.height / 60, 3);
        this.valueFontSize = mathUtils.roundWithMin(this.height / 15, 15); // in pixels

        this.bandOffsetX = !this.isShiny ? 0 : mathUtils.roundWithMin(this.height / 60, 3);
        _MarkerGauge2.default.prototype.renderGauge.call(this);
    },
    drawBackground: function drawBackground() {
        this.backgroundWidth = mathUtils.roundWithMin(this.height / 4, 50);
        var tickValues = this.calculateTickValues(this.ranges[0], this.ranges[this.ranges.length - 1], this.MAX_TICKS_PER_RANGE);
        this.backgroundHeight = this.height - 2 * this.verticalPadding;
        this.bandHeight = this.backgroundHeight - (this.bandOffsetBottom + this.bandOffsetTop);
        this.bandWidth = !this.isShiny ? 30 : 10;

        var maxTickValue = tickValues[tickValues.length - 1];

        var maxLabelWidth = this.predictTextWidth(this.formatValue(maxTickValue), this.tickFontSize);
        var totalWidthNeeded = this.bandOffsetX + this.bandWidth + this.tickOffset + this.tickLength + this.tickLabelOffset + maxLabelWidth + this.tickLabelPaddingRight;

        this.backgroundWidth = Math.max(this.backgroundWidth, totalWidthNeeded);

        if (this.isShiny) {
            this.elements.background = this.renderer.rect((this.width - this.backgroundWidth) / 2, this.verticalPadding, this.backgroundWidth, this.backgroundHeight, this.backgroundCornerRad).attr({
                fill: '#edede7',
                stroke: 'silver',
                'stroke-width': 1
            }).add();
        }

        // these values depend on the adjusted background width
        this.tickStartX = (this.width - this.backgroundWidth) / 2 + (this.bandOffsetX + this.bandWidth) + this.tickOffset;
        this.tickEndX = this.tickStartX + this.tickLength;
        this.tickLabelStartX = this.tickEndX + this.tickLabelOffset;
    },
    drawBand: function drawBand() {
        var i = void 0;
        var startHeight = void 0;
        var endHeight = void 0;
        var bandLeftX = (this.width - this.backgroundWidth) / 2 + this.bandOffsetX;
        var bandBottomY = this.height - this.verticalPadding - this.bandOffsetBottom;

        for (i = 0; i < this.ranges.length - 1; i++) {
            startHeight = this.translateValue(this.ranges[i]);
            endHeight = this.translateValue(this.ranges[i + 1]);
            this.elements['colorBand' + i] = this.renderer.rect(bandLeftX, bandBottomY - endHeight, this.bandWidth, endHeight - startHeight, this.bandCornerRad).attr({
                fill: this.getColorByIndex(i)
            }).add();
        }
    },
    drawMajorTick: function drawMajorTick(height) {
        var tickHeight = this.verticalPadding + this.backgroundHeight - (this.bandOffsetBottom + height);

        return this.renderer.path(['M', this.tickStartX, tickHeight, 'L', this.tickEndX, tickHeight]).attr({
            stroke: this.tickColor,
            'stroke-width': this.tickWidth
        }).add();
    },
    drawMajorTickLabel: function drawMajorTickLabel(height, text) {
        var tickHeight = this.verticalPadding + this.backgroundHeight - (this.bandOffsetBottom + height);

        return this.renderer.text(text, this.tickLabelStartX, tickHeight + this.tickFontSize / 4).attr({
            align: 'left'
        }).css({
            color: this.tickFontColor,
            fontSize: this.tickFontSize + 'px',
            lineHeight: this.tickFontSize + 'px'
        }).add();
    },
    drawMinorTick: function drawMinorTick(height) {
        var tickHeight = this.verticalPadding + this.backgroundHeight - (this.bandOffsetBottom + height);

        return this.renderer.path(['M', this.tickStartX, tickHeight, 'L', this.tickStartX + this.minorTickLength, tickHeight]).attr({
            stroke: this.tickColor,
            'stroke-width': this.minorTickWidth
        }).add();
    },
    drawIndicator: function drawIndicator(val) {
        var markerLHSPath = void 0;
        var markerRHSPath = void 0;
        var markerBorderPath = void 0;
        var markerUnderlinePath = void 0;
        var markerHeight = this.normalizedTranslateValue(val);

        var markerStartY = this.verticalPadding + this.backgroundHeight - (this.bandOffsetBottom + markerHeight);

        var markerStartX = !this.isShiny ? (this.width - this.backgroundWidth) / 2 - 10 : (this.width - this.backgroundWidth) / 2;
        var markerEndX = !this.isShiny ? markerStartX + this.bandWidth + 20 : markerStartX + this.backgroundWidth;
        var markerLineStroke = this.foregroundColor; // will be changed to red for shiny
        var markerLineWidth = 3; // wil be changed to 1 for shiny

        var markerLinePath = ['M', markerStartX, markerStartY, 'L', markerEndX, markerStartY];

        if (this.isShiny) {
            markerLHSPath = ['M', markerStartX, markerStartY - this.markerWindowHeight / 2, 'L', markerStartX - (this.markerSideWidth - this.markerSideCornerRad), markerStartY - this.markerWindowHeight / 2, 'C', markerStartX - (this.markerSideWidth - this.markerSideCornerRad), markerStartY - this.markerWindowHeight / 2, markerStartX - this.markerSideWidth, markerStartY - this.markerWindowHeight / 2, markerStartX - this.markerSideWidth, markerStartY - this.markerWindowHeight / 2 + this.markerSideCornerRad, 'L', markerStartX - this.markerSideWidth, markerStartY + this.markerWindowHeight / 2 - this.markerSideCornerRad, 'C', markerStartX - this.markerSideWidth, markerStartY + this.markerWindowHeight / 2 - this.markerSideCornerRad, markerStartX - this.markerSideWidth, markerStartY + this.markerWindowHeight / 2, markerStartX - (this.markerSideWidth - this.markerSideCornerRad), markerStartY + this.markerWindowHeight / 2, 'L', markerStartX, markerStartY + this.markerWindowHeight / 2, markerStartX, markerStartY - this.markerWindowHeight / 2];
            markerRHSPath = ['M', markerEndX, markerStartY - this.markerWindowHeight / 2, 'L', markerEndX + (this.markerSideWidth - this.markerSideCornerRad), markerStartY - this.markerWindowHeight / 2, 'C', markerEndX + (this.markerSideWidth - this.markerSideCornerRad), markerStartY - this.markerWindowHeight / 2, markerEndX + this.markerSideWidth, markerStartY - this.markerWindowHeight / 2, markerEndX + this.markerSideWidth, markerStartY - this.markerWindowHeight / 2 + this.markerSideCornerRad, 'L', markerEndX + this.markerSideWidth, markerStartY + this.markerWindowHeight / 2 - this.markerSideCornerRad, 'C', markerEndX + this.markerSideWidth, markerStartY + this.markerWindowHeight / 2 - this.markerSideCornerRad, markerEndX + this.markerSideWidth, markerStartY + this.markerWindowHeight / 2, markerEndX + (this.markerSideWidth - this.markerSideCornerRad), markerStartY + this.markerWindowHeight / 2, 'L', markerEndX, markerStartY + this.markerWindowHeight / 2, markerEndX, markerStartY - this.markerWindowHeight / 2];
            markerBorderPath = ['M', markerStartX, markerStartY - this.markerWindowHeight / 2, 'L', markerEndX, markerStartY - this.markerWindowHeight / 2, markerEndX, markerStartY + this.markerWindowHeight / 2, markerStartX, markerStartY + this.markerWindowHeight / 2, markerStartX, markerStartY - this.markerWindowHeight / 2];
            markerUnderlinePath = ['M', markerStartX, markerStartY + 1, 'L', markerEndX, markerStartY + 1];
            markerLineStroke = 'red';
            markerLineWidth = 1;
        }

        if (this.isShiny) {
            if (this.elements.markerLHS) {
                this.elements.markerLHS.destroy();
            }
            this.elements.markerLHS = this.renderer.path(markerLHSPath).attr({
                fill: '#cccccc'
            }).add();
            if (this.elements.markerRHS) {
                this.elements.markerRHS.destroy();
            }
            this.elements.markerRHS = this.renderer.path(markerRHSPath).attr({
                fill: '#cccccc'
            }).add();
            if (this.elements.markerWindow) {
                this.elements.markerWindow.destroy();
            }
            this.elements.markerWindow = this.renderer.rect(markerStartX, markerStartY - this.markerWindowHeight / 2, this.backgroundWidth, this.markerWindowHeight, 0).attr({
                fill: 'rgba(255, 255, 255, 0.3)'
            }).add();
            if (this.elements.markerBorder) {
                this.elements.markerBorder.destroy();
            }
            this.elements.markerBorder = this.renderer.path(markerBorderPath).attr({
                stroke: 'white',
                'stroke-width': 2
            }).add();
            if (this.elements.markerUnderline) {
                this.elements.markerUnderline.destroy();
            }
            this.elements.markerUnderline = this.renderer.path(markerUnderlinePath).attr({
                stroke: 'white',
                'stroke-width': 2
            }).add();
        }
        if (this.elements.markerLine) {
            this.elements.markerLine.destroy();
        }
        this.elements.markerLine = this.renderer.path(markerLinePath).attr({
            stroke: markerLineStroke,
            'stroke-width': markerLineWidth
        }).add();
        if (this.showValue) {
            this.drawValueDisplay(val);
        }
    },
    drawValueDisplay: function drawValueDisplay(val) {
        var valueText = this.formatValue(val);
        var markerHeight = this.normalizedTranslateValue(val);
        var valueY = this.verticalPadding + this.backgroundHeight - this.bandOffsetBottom - markerHeight;

        if (this.elements.valueDisplay) {
            this.elements.valueDisplay.attr({
                text: valueText,
                y: valueY + this.valueFontSize / 4
            });
        } else {
            this.elements.valueDisplay = this.renderer.text(valueText, (this.width - this.backgroundWidth) / 2 - this.valueOffset, valueY + this.valueFontSize / 4).css({
                color: 'black',
                fontSize: this.valueFontSize + 'px',
                lineHeight: this.valueFontSize + 'px',
                fontWeight: 'bold'
            }).attr({
                align: 'right'
            }).add();
        }
    },
    normalizedTranslateValue: function normalizedTranslateValue(val) {
        if (val < this.ranges[0]) {
            return 0;
        }
        if (val > this.ranges[this.ranges.length - 1]) {
            return this.translateValue(this.ranges[this.ranges.length - 1]);
        }
        return this.translateValue(val);
    },
    translateValue: function translateValue(val) {
        var dataRange = this.ranges[this.ranges.length - 1] - this.ranges[0];
        var normalizedValue = val - this.ranges[0];

        return Math.round(normalizedValue / dataRange * this.bandHeight);
    }
});

exports.default = VerticalMarkerGauge;
module.exports = exports['default'];

/***/ })
/******/ ]);