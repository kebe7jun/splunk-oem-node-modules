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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(27);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(18);
var toPrimitive = __webpack_require__(20);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _escape = __webpack_require__(22);

var _escape2 = _interopRequireDefault(_escape);

var _color = __webpack_require__(37);

var _Formatter = __webpack_require__(38);

var _Formatter2 = _interopRequireDefault(_Formatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_COLOR = '#000000'; /* eslint-disable arrow-parens,comma-dangle,no-invalid-this,no-unused-expressions */

var DEFAULT_STROKE_WIDTH = 1;
var DEFAULT_CATEGORY = '-no-category';
var HOVER_TRIANGLE_INACTIVE_OPACITY = 0;
var TOOLTIP_MAX_WIDTH = 500;

var Annotation = function () {
    function Annotation(_ref) {
        var axis = _ref.axis,
            value = _ref.value,
            label = _ref.label,
            color = _ref.color,
            category = _ref.category,
            renderer = _ref.renderer,
            originalIndex = _ref.originalIndex,
            onMouseOver = _ref.onMouseOver,
            onMouseOut = _ref.onMouseOut;
        (0, _classCallCheck3.default)(this, Annotation);

        this.axis = axis;
        this.value = value;
        this.label = label;
        this.color = (0, _color.normalizeColor)(color) || DEFAULT_COLOR;
        this.originalIndex = originalIndex;
        this.category = category || DEFAULT_CATEGORY;
        this.renderer = renderer;
        this.onMouseOver = onMouseOver;
        this.onMouseOut = onMouseOut;
        this.rendered = false;
    }

    (0, _createClass3.default)(Annotation, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var x = this.axis.toPixels(this.value);
            var xAxisY = this.axis.top + this.axis.height;
            var yAxisMaxY = this.axis.top;

            // this adds a `highcharts-splunk-annotation` classname to each annotation element group
            this.group = this.renderer.g('splunk-annotation');

            this.stroke = this.renderer.path(['M', x, yAxisMaxY, 'V', xAxisY + 1]).attr({
                stroke: this.color,
                'stroke-width': DEFAULT_STROKE_WIDTH,
                'stroke-dasharray': '3, 3',
                zIndex: 3,
                'data-role': 'annotation-line'
            }).add(this.group);

            var triangleOffsetTop = -8;
            var triangleSize = 5;
            var hoverTriangleSize = 10;

            this.triangle = this.renderer.path(['M', x - triangleSize, yAxisMaxY + triangleOffsetTop, 'H', x + triangleSize, 'L', x, yAxisMaxY, 'Z']).attr({
                fill: this.color,
                zIndex: 3,
                'data-role': 'marker-triangle'
            }).add(this.group);

            // Draw a slightly bigger triangle as hover target area
            this.triangleShadow = this.renderer.path(['M', x - hoverTriangleSize, yAxisMaxY + triangleOffsetTop, 'H', x + hoverTriangleSize, 'L', x, yAxisMaxY + (hoverTriangleSize - triangleSize), 'Z']).attr({
                fill: this.color,
                opacity: HOVER_TRIANGLE_INACTIVE_OPACITY,
                zIndex: 4,
                'data-role': 'hover-triangle'
            }).add(this.group);

            if (this.onMouseOver) {
                this.triangleShadow.on('mouseover', function () {
                    return _this.hover();
                }).on('mouseout', function () {
                    return _this.unhover();
                });
            }
            this.rendered = true;
            return this.group;
        }
    }, {
        key: 'hover',
        value: function hover() {
            if (this.rendered) {
                var x = this.axis.toPixels(this.value);
                var yAxisMaxY = this.axis.top;
                this.stroke.attr({
                    'stroke-width': 2
                });
                this.onMouseOver({
                    annotation: this,
                    xPosition: x,
                    yAxisMaxY: yAxisMaxY
                });
            }
        }
    }, {
        key: 'unhover',
        value: function unhover() {
            if (this.rendered) {
                this.stroke.attr({
                    'stroke-width': DEFAULT_STROKE_WIDTH
                });
            }
            this.onMouseOut({
                annotation: this
            });
        }
    }, {
        key: 'dim',
        value: function dim(isDimmed) {
            if (this.rendered) {
                var targetOpacity = isDimmed ? 0.3 : 1;
                this.stroke.attr({ opacity: targetOpacity });
                this.triangle.attr({ opacity: targetOpacity });
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.triangleShadow && this.triangleShadow.destroy();
            this.triangleShadow = null;
            this.triangle && this.triangle.destroy();
            this.triangle = null;
            this.stroke && this.stroke.destroy();
            this.stroke = null;
            this.group && this.group.destroy();
            this.group = null;
            this.rendered = false;
        }
    }]);
    return Annotation;
}();

var AnnotationsLayer = function () {
    function AnnotationsLayer(_ref2) {
        var axis = _ref2.axis,
            Tooltip = _ref2.tooltipCls;
        (0, _classCallCheck3.default)(this, AnnotationsLayer);

        this.axis = axis;
        this.renderer = axis.chart.renderer;
        this.points = [];
        this.tooltip = new Tooltip(this.axis.chart, {
            enabled: true,
            padding: 8,
            useHTML: true,
            backgroundColor: '#000000',
            hideDelay: 0,
            style: {
                color: '#fff',
                'font-size': '12px',
                'pointer-events': 'none',
                r: 3
            },
            tooltipRole: 'splunk-annotation-tooltip'
        });
        this.labelFormatter = new _Formatter2.default(this.renderer);
    }

    (0, _createClass3.default)(AnnotationsLayer, [{
        key: 'update',
        value: function update(annotations) {
            this.clear();
            this.render(annotations);
        }
    }, {
        key: 'showTooltip',
        value: function showTooltip(annotation, x) {
            this.points.forEach(function (other) {
                other.dim(other !== annotation);
            });
            var value = annotation.value,
                _annotation$label = annotation.label,
                label = _annotation$label === undefined ? '' : _annotation$label,
                color = annotation.color,
                category = annotation.category;

            var yAxisMaxY = this.axis.top;
            var labelEl = this.tooltip.getLabel();

            var _ref3 = this.axis.options['splunk-tooltip'] || {},
                formatter = _ref3.formatter;

            var formattedDateValue = formatter ? formatter(value) : '';
            var catVal = category === DEFAULT_CATEGORY ? '' : category;
            // eslint-disable-next-line no-underscore-dangle
            var predictedTimeWidth = this.labelFormatter._predictLineWidth(formattedDateValue, 11) + 20;
            // eslint-disable-next-line no-underscore-dangle
            var predictedCatWidth = catVal ? this.labelFormatter._predictLineWidth(category, 11) + 20 : 0;
            // eslint-disable-next-line no-underscore-dangle
            var predictedLabelWidth = label ? this.labelFormatter._predictLineWidth(label, 12) + 20 : 0;
            var predictedMaxTextWidth = Math.max(predictedTimeWidth, predictedCatWidth, predictedLabelWidth);
            var spaceLeftOfPoint = x - 10;
            var spaceRightOfPoint = this.axis.chart.chartWidth - x - 10;
            var predictedTooltipRightEdge = x + predictedMaxTextWidth;
            var rightPlotEdge = this.axis.chart.plotLeft + this.axis.chart.plotWidth;
            var rightEdgeOverflow = predictedTooltipRightEdge - rightPlotEdge;
            var leftEdgeOverflow = predictedMaxTextWidth - (x - this.axis.chart.plotLeft);
            var showRightOfPoint = Math.min(rightEdgeOverflow, leftEdgeOverflow) > 0 ? rightEdgeOverflow <= leftEdgeOverflow : rightEdgeOverflow < 0;
            var maxTextWidth = Math.floor(Math.min(TOOLTIP_MAX_WIDTH, showRightOfPoint ? spaceRightOfPoint : spaceLeftOfPoint)) - 16;

            var lum = (0, _color.getLuminance)((0, _color.hexFromColor)(color));
            var lumThreshold = 170;
            var textColor1 = lum > lumThreshold ? '#333' : '#fff';
            var textColor2 = lum > lumThreshold ? '#555' : '#ddd';

            var style = 'max-width: ' + maxTextWidth + 'px; overflow: hidden; text-overflow: ellipsis;';
            var catTimeStyle = 'font-size: 11px; color: ' + textColor2;
            labelEl.attr({
                text: '\n                ' + (label ? '<div data-role="tooltip-label" style="margin-bottom: 2px; color: ' + textColor1 + '; ' + style + '">' + (0, _escape2.default)(label) + '</div>' : '') + '\n                ' + (catVal ? '<div data-role="tooltip-category" style="margin-bottom: 2px; ' + catTimeStyle + '; ' + style + '">' + (0, _escape2.default)(category) + '</div>' : '') + '\n                <div data-role="tooltip-timestamp" style="' + catTimeStyle + '; ' + style + '">' + (0, _escape2.default)(formattedDateValue) + '</div>\n            '
            });

            this.tooltip.move(showRightOfPoint ? x : x - labelEl.width, yAxisMaxY - 8);
            labelEl.attr({
                fill: color
            });
            labelEl.show();
            labelEl.toFront();
        }
    }, {
        key: 'hideTooltip',
        value: function hideTooltip() {
            this.points.forEach(function (annotation) {
                annotation.dim(false);
            });
            this.tooltip.getLabel().hide(0);
        }
    }, {
        key: 'getVisibleDataPoints',
        value: function getVisibleDataPoints(dataPoints) {
            var _this2 = this;

            var xAxisWidth = this.axis.width;
            var xAxisOffsetLeft = this.axis.left;
            var xAxisMaxX = xAxisOffsetLeft + xAxisWidth;
            var inCache = function (cache) {
                return function (x) {
                    if (cache[x]) {
                        return true;
                    }
                    cache[x] = true; // eslint-disable-line no-param-reassign
                    return false;
                };
            }({});
            var inVisibleSpace = function inVisibleSpace(x) {
                return x >= xAxisOffsetLeft && x <= xAxisMaxX;
            };

            var maxIndex = dataPoints.length - 1;

            return dataPoints.filter(function (d, index) {
                var x = _this2.axis.toPixels(d.value);
                // calculating original index, maxIndex - index because datapoint array was reversed
                d.originalIndex = maxIndex - index; // eslint-disable-line no-param-reassign
                return !inCache(x) && inVisibleSpace(x);
            });
        }
    }, {
        key: 'render',
        value: function render(dataPoints) {
            var _this3 = this;

            if (this.axis.isXAxis) {
                this.clear();
                var handleMouseOver = function handleMouseOver(_ref4) {
                    var annotation = _ref4.annotation,
                        xPosition = _ref4.xPosition;

                    _this3.showTooltip(annotation, xPosition);
                };
                var handleMouseOut = function handleMouseOut() {
                    _this3.hideTooltip();
                };
                this.annotationLayerGroup = this.renderer.g('splunk-annotation-layer');
                // reversing datapoints makes sure only the latest
                // annotation for an x coordinate will be initialized
                this.points = this.getVisibleDataPoints(dataPoints.slice().reverse()).reverse().map(function (_ref5) {
                    var value = _ref5.value,
                        label = _ref5.label,
                        color = _ref5.color,
                        category = _ref5.category,
                        originalIndex = _ref5.originalIndex;

                    var annotation = new Annotation({
                        axis: _this3.axis,
                        renderer: _this3.renderer,
                        value: value,
                        label: label,
                        color: color,
                        category: category,
                        originalIndex: originalIndex,
                        onMouseOver: handleMouseOver,
                        onMouseOut: handleMouseOut
                    });
                    annotation.render().add(_this3.annotationLayerGroup);

                    return annotation;
                });

                this.annotationLayerGroup.add().toFront();
                // Make sure global tooltip is still front-most
                var globalTooltipLabel = this.axis.chart.tooltip.label;
                if (globalTooltipLabel) {
                    globalTooltipLabel.toFront();
                }
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.hideTooltip();
            this.points.forEach(function (a) {
                return a.destroy();
            });
            this.annotationLayerGroup && this.annotationLayerGroup.destroy();
            this.annotationLayerGroup = null;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.clear();
            this.tooltip.destroy();
            this.labelFormatter.destroy();
        }
    }]);
    return AnnotationsLayer;
}();

var AnnotationsPlugin = function AnnotationsPlugin(Highcharts) {
    Highcharts.wrap(Highcharts.Axis.prototype, 'render', function annoationsRender(proceed) {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        proceed.call.apply(proceed, [this].concat(rest));
        var options = this.options;
        if ('annotations' in options && options.annotations.length) {
            if (!this.annotations) {
                this.annotations = new AnnotationsLayer({
                    axis: this,
                    tooltipCls: Highcharts.Tooltip
                });
            }
            this.annotations.update(options.annotations);
        } else if (this.annotations) {
            this.annotations.destroy();
            this.annotations = null;
        }
    });

    Highcharts.wrap(Highcharts.Axis.prototype, 'destroy', function annotationsDestroy(proceed) {
        if (this.annotations) {
            this.annotations.destroy();
            this.annotations = null;
        }
        proceed.apply(this);
    });
};

exports.default = AnnotationsPlugin;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(10);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(4);
var ctx = __webpack_require__(14);
var hide = __webpack_require__(16);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
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
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(21);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var escapeHtmlChar = __webpack_require__(23),
    toString = __webpack_require__(25);

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(24);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

module.exports = escapeHtmlChar;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(26);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2),
    arrayMap = __webpack_require__(30),
    isArray = __webpack_require__(31),
    isSymbol = __webpack_require__(32);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(28);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(33),
    isObjectLike = __webpack_require__(36);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2),
    getRawTag = __webpack_require__(34),
    objectToString = __webpack_require__(35);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2);

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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/color");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@splunk/charting-utils/Formatter");

/***/ })
/******/ ]);