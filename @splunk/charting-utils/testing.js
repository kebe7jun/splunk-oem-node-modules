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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(30);
var defined = __webpack_require__(12);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createGlobalReference = exports.gaugeAddTestingMetadata = exports.gaugeUpdate = exports.initializeTestingMetaData = exports.getPointCoordinates = undefined;

var _keys = __webpack_require__(23);

var _keys2 = _interopRequireDefault(_keys);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitizeClassName = function sanitizeClassName(className) {
    // the className can potentially come from the search results, so make sure it is valid before
    // attempting to insert it...

    // first remove any leading white space
    className = className.replace(/\s/g, '');
    // if the className doesn't start with a letter or a '-' followed by a letter, it should not be inserted
    if (!/^[-]?[A-Za-z]/.test(className)) {
        return '';
    }
    // now filter out anything that is not a letter, number, '-', or '_'
    return className.replace(/[^A-Za-z0-9_-]/g, '');
};

var addClassToElement = function addClassToElement(elem, className) {
    if (!elem) {
        return;
    }
    className = sanitizeClassName(className);
    if (className === '') {
        return;
    }
    if (elem.className.baseVal) {
        elem.className.baseVal += ' ' + className;
    } else {
        elem.className.baseVal = className;
    }
};

var getPointCoordinates = exports.getPointCoordinates = function getPointCoordinates(hcChart, seriesIndex, pointIndex) {
    var series = hcChart.series[seriesIndex];
    var seriesType = series.type;
    var point = series.data[pointIndex];
    var containerOffset = (0, _jquery2.default)(hcChart.container).offset();

    if (seriesType in { line: true, area: true, scatter: true }) {
        // handle the chart overlay case for bar charts
        if (hcChart.inverted) {
            return {
                x: series.yAxis.translate(point.y) + containerOffset.left + hcChart.plotLeft,
                y: hcChart.plotHeight + hcChart.plotTop + containerOffset.top - series.xAxis.translate(point.x)
            };
        }
        return {
            x: point.plotX + containerOffset.left + hcChart.plotLeft,
            y: point.plotY + containerOffset.top + hcChart.plotTop
        };
    }
    if (seriesType === 'column') {
        var shapeArgs = point.shapeArgs;
        return {
            x: point.plotX + containerOffset.left + hcChart.plotLeft,
            y: point.plotY + containerOffset.top + hcChart.plotTop + shapeArgs.height / 2
        };
    }
    if (seriesType === 'bar') {
        return {
            x: containerOffset.left + hcChart.plotLeft + hcChart.plotWidth - point.shapeArgs.y - point.shapeArgs.height / 2,
            y: containerOffset.top + hcChart.plotTop + hcChart.plotHeight - series.xAxis.translate(point.x) - series.barW / 2 - series.pointXOffset
        };
    }
    if (seriesType === 'pie') {
        var centerX = series.center[0];
        var centerY = series.center[1];
        var labelX = point.labelPos[0];
        var labelY = point.labelPos[1];

        return {
            x: (centerX + labelX) / 2 + containerOffset.left + hcChart.plotLeft,
            y: (centerY + labelY) / 2 + containerOffset.top + hcChart.plotTop
        };
    }
    return {};
};

var addDataClasses = function addDataClasses(chart) {
    var seriesName = void 0;
    var dataElements = void 0;

    (0, _jquery2.default)('.highcharts-series', (0, _jquery2.default)(chart.container)).each(function (i, series) {
        seriesName = chart.series[i].name;
        (0, _jquery2.default)(series).attr('id', seriesName + '-series');
        dataElements = (0, _jquery2.default)('rect, path', (0, _jquery2.default)(series));
        dataElements.each(function (j, elem) {
            addClassToElement(elem, 'spl-display-object');
        });
    });
};

var addAxisClasses = function addAxisClasses(chart) {
    var labelElements = void 0;
    var i = void 0;
    (0, _underscore2.default)(chart.xAxis).each(function (axis, j) {
        var className = chart.inverted ? 'vertical-axis' : 'horizontal-axis';
        addClassToElement(axis.axisGroup.element, className);
        addClassToElement(axis.labelGroup.element, className);
        addClassToElement(axis.gridGroup.element, 'x-axis-' + j + '-grid-group');
    });
    (0, _underscore2.default)(chart.yAxis).each(function (axis, j) {
        var className = chart.inverted ? 'horizontal-axis' : 'vertical-axis';
        addClassToElement(axis.axisGroup.element, className);
        addClassToElement(axis.labelGroup.element, className);
        addClassToElement(axis.gridGroup.element, 'y-axis-' + j + '-grid-group');
    });
    (0, _jquery2.default)('.highcharts-axis, .highcharts-axis-labels', (0, _jquery2.default)(chart.container)).each(function (k, elem) {
        labelElements = (0, _jquery2.default)('text', (0, _jquery2.default)(elem));
        labelElements.each(function (j, label) {
            addClassToElement(label, 'spl-text-label');
        });
    });

    var labelAxisTickmarks = function labelAxisTickmarks(axis) {
        (0, _underscore2.default)(axis.ticks).each(function (tick) {
            if (tick.mark && tick.mark.element) {
                addClassToElement(tick.mark.element, 'highcharts-axis-tickmark');
            }
        });
    };

    for (i = 0; i < chart.xAxis.length; i++) {
        if (chart.xAxis[i].axisTitle) {
            addClassToElement(chart.xAxis[i].axisTitle.element, 'x-axis-title');
        }
        labelAxisTickmarks(chart.xAxis[i]);
    }
    for (i = 0; i < chart.yAxis.length; i++) {
        if (chart.yAxis[i].axisTitle) {
            addClassToElement(chart.yAxis[i].axisTitle.element, 'y-axis-title');
        }
        labelAxisTickmarks(chart.yAxis[i]);
    }
};

var addLegendClasses = function addLegendClasses(chart) {
    var loopSeriesName = void 0;

    if (chart.legend && chart.legend.down) {
        addClassToElement(chart.legend.down.element, 'page-down-button');
    }
    if (chart.legend && chart.legend.up) {
        addClassToElement(chart.legend.up.element, 'page-up-button');
    }
    (0, _jquery2.default)(chart.series).each(function (i, series) {
        if (!series.legendItem) {
            return;
        }
        loopSeriesName = series.legendItem.textStr;
        if (series.legendSymbol) {
            addClassToElement(series.legendSymbol.element, 'symbol');
            addClassToElement(series.legendSymbol.element, loopSeriesName + '-symbol');
        }
        if (series.legendLine) {
            addClassToElement(series.legendLine.element, 'symbol');
            addClassToElement(series.legendLine.element, loopSeriesName + '-symbol');
        }
        if (series.legendItem) {
            addClassToElement(series.legendItem.element, 'legend-label');
        }
    });
};

var addTimeTooltipClasses = function addTimeTooltipClasses() {
    var i = void 0;
    var loopSplit = void 0;
    var toolTipCells = void 0;
    var $tooltip = (0, _jquery2.default)('.highcharts-tooltip');
    var tooltipElements = (0, _jquery2.default)('tr', $tooltip);

    for (i = 0; i < tooltipElements.length; i++) {
        toolTipCells = (0, _jquery2.default)('td', tooltipElements[i]);
        if (i === 0) {
            (0, _jquery2.default)(toolTipCells[0]).addClass('time-value');
            (0, _jquery2.default)(toolTipCells[0]).addClass('time');
        } else {
            loopSplit = tooltipElements[i].textContent.split(':');
            (0, _jquery2.default)(toolTipCells[0]).addClass('key');
            (0, _jquery2.default)(toolTipCells[0]).addClass(sanitizeClassName(loopSplit[0] + '-key'));
            (0, _jquery2.default)(toolTipCells[1]).addClass('value');
            (0, _jquery2.default)(toolTipCells[1]).addClass(sanitizeClassName(loopSplit[0] + '-value'));
        }
    }
};

var addTooltipClasses = function addTooltipClasses() {
    var i = void 0;
    var loopSplit = void 0;
    var toolTipCells = void 0;
    var $tooltip = (0, _jquery2.default)('.highcharts-tooltip');
    var tooltipElements = (0, _jquery2.default)('tr', $tooltip);

    for (i = 0; i < tooltipElements.length; i++) {
        toolTipCells = (0, _jquery2.default)('td', tooltipElements[i]);
        loopSplit = tooltipElements[i].textContent;
        (0, _jquery2.default)(toolTipCells[0]).addClass('key');
        (0, _jquery2.default)(toolTipCells[0]).addClass(sanitizeClassName(loopSplit[0] + '-key'));
        (0, _jquery2.default)(toolTipCells[1]).addClass('value');
        (0, _jquery2.default)(toolTipCells[1]).addClass(sanitizeClassName(loopSplit[0] + '-value'));
    }
};

var initializeTestingMetaData = exports.initializeTestingMetaData = function initializeTestingMetaData(chartWrapper, xFields, type) {
    chartWrapper.$container.addClass('highcharts-wrapper');
    // make sure the wrapper container has an id, this will be used in createGlobalReference
    if (!chartWrapper.$container.attr('id')) {
        chartWrapper.$container.attr('id', chartWrapper.id);
    }
    var chart = chartWrapper.hcChart;
    (0, _jquery2.default)(chart.container).addClass(type);
    addDataClasses(chart);
    addAxisClasses(chart);
    if (chart.options.legend.enabled) {
        addLegendClasses(chart);
    }
    if (chart.tooltip && chart.tooltip.refresh) {
        var tooltipRefresh = chart.tooltip.refresh;

        var decorateTooltip = _underscore2.default.find(xFields, function (field) {
            return field === '_time';
        }) === '_time' ? addTimeTooltipClasses : addTooltipClasses;

        chart.tooltip.refresh = function (point) {
            tooltipRefresh.call(chart.tooltip, point);
            decorateTooltip(chart);
        };
    }
    chart.getPointCoordinates = (0, _underscore2.default)(getPointCoordinates).bind(null, chart);
};

// ////////////////////////
// Gauge specific testing

var gaugeUpdate = exports.gaugeUpdate = function gaugeUpdate(container, value) {
    container.attr('data-gauge-value', value);
};

var gaugeAddTestingMetadata = exports.gaugeAddTestingMetadata = function gaugeAddTestingMetadata(gaugeWrapper, elements, typeName, value) {
    // make sure the wrapper container has an id, this will be used in createGlobalReference
    if (!gaugeWrapper.$container.attr('id')) {
        gaugeWrapper.$container.attr('id', gaugeWrapper.id);
    }
    var innerContainer = gaugeWrapper.$hcContainer;
    innerContainer.addClass(typeName);
    gaugeUpdate(innerContainer, value);
    if (elements.valueDisplay) {
        addClassToElement(elements.valueDisplay.element, 'gauge-value');
    }
    var elementKeys = (0, _keys2.default)(elements);
    elementKeys.filter(function (key) {
        return (/^tickLabel_/.test(key)
        );
    }).forEach(function (key) {
        addClassToElement(elements[key].element, 'gauge-tick-label');
    });
    elementKeys.filter(function (key) {
        return (/^colorBand/.test(key)
        );
    }).forEach(function (key) {
        addClassToElement(elements[key].element, 'gauge-color-band');
    });

    (0, _jquery2.default)('.gauge-color-band').each(function addDataColorBand() {
        (0, _jquery2.default)(this).attr('data-band-color', (0, _jquery2.default)(this).attr('fill'));
    });

    // this is bad OOP but I think it's better to keep all of this code in one method
    if (elements.fill) {
        (0, _jquery2.default)(elements.fill.element).attr('data-indicator-color', (0, _jquery2.default)(elements.fill.element).attr('fill'));
    }
    if (elements.needle) {
        addClassToElement(elements.needle.element, 'gauge-indicator');
    }
    if (elements.markerLine) {
        addClassToElement(elements.markerLine.element, 'gauge-indicator');
    }
};

var createGlobalReference = exports.createGlobalReference = function createGlobalReference(wrapperObject, chartObject) {
    var Splunk = window.Splunk;
    if (!Splunk) {
        return;
    }
    Splunk.JSCharting = Splunk.JSCharting || {};
    Splunk.JSCharting.chartByIdMap = Splunk.JSCharting.chartByIdMap || {};
    var id = wrapperObject.$container.attr('id');
    Splunk.JSCharting.chartByIdMap[id] = chartObject;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
module.exports = __webpack_require__(8).Object.keys;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(26);
var $keys = __webpack_require__(27);

__webpack_require__(39)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(12);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(28);
var enumBugKeys = __webpack_require__(38);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(29);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(32)(false);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');

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
/* 29 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(34);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(36)('keys');
var uid = __webpack_require__(37);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(40);
var core = __webpack_require__(8);
var fails = __webpack_require__(11);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var core = __webpack_require__(8);
var ctx = __webpack_require__(41);
var hide = __webpack_require__(43);
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(42);
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
/* 42 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(44);
var createDesc = __webpack_require__(49);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(45);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(48);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(47)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(7).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
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
/* 49 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ })
/******/ ]);