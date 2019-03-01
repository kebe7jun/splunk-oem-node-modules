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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Formatter(renderer) {
    this.renderer = renderer;
    this.ELLIPSIS = '...';
}

Formatter.prototype = {
    ellipsize: function ellipsize(str, maxWidthInPixels, fontSize, css, ellipsisPlacement) {
        if ((0, _underscore2.default)(str).isArray()) {
            str = str.join(',');
        }
        str = _jquery2.default.trim(str);
        var strLen = str.length;
        if (!str || str === '') {
            return '';
        }
        if (strLen <= 3 || !fontSize || isNaN(fontSize) || fontSize <= 0) {
            return str;
        }
        if (!maxWidthInPixels || isNaN(maxWidthInPixels) || maxWidthInPixels <= 0) {
            return this.ELLIPSIS;
        }
        var strWidth = this._predictLineWidth(str, fontSize, css);
        var excessWidth = strWidth - maxWidthInPixels;
        if (excessWidth > 0) {
            var ellipsisWidth = this._predictLineWidth(this.ELLIPSIS, fontSize, css);
            switch (ellipsisPlacement) {
                case 'end':
                    return this.trimStringToWidth(str, maxWidthInPixels - ellipsisWidth, fontSize, css) + '...';
                case 'start':
                    return '...' + this.reverseString(this.trimStringToWidth(this.reverseString(str), maxWidthInPixels - ellipsisWidth, fontSize, css));
                default:
                    {
                        // default to middle ellipsization
                        var availableWidthPerSide = (maxWidthInPixels - ellipsisWidth) / 2;
                        var leftSide = this.trimStringToWidth(str, availableWidthPerSide, fontSize, css);
                        var rightSide = this.reverseString(this.trimStringToWidth(this.reverseString(str), availableWidthPerSide, fontSize, css));
                        return leftSide + '...' + rightSide;
                    }
            }
        } else {
            // no need to ellipsize
            return str;
        }
    },


    // NOTE: it is up to caller to test that the entire string does not already fit
    // even if it does, this method will do log N work and may or may not truncate the last character
    trimStringToWidth: function trimStringToWidth(text, width, fontSize, css) {
        var that = this;

        var binaryFindEndIndex = function binaryFindEndIndex(start, end) {
            var testIndex = void 0;
            while (end > start + 1) {
                testIndex = Math.floor((start + end) / 2);
                if (that.predictTextWidth(text.substr(0, testIndex), fontSize, css) > width) {
                    end = testIndex;
                } else {
                    start = testIndex;
                }
            }
            return start;
        };

        var endIndex = binaryFindEndIndex(0, text.length);

        return text.substr(0, endIndex);
    },
    reverseString: function reverseString(str) {
        return str.split('').reverse().join('');
    },


    // Returns width of string in px units
    predictTextWidth: function predictTextWidth(str, fontSize, css) {
        if ((0, _underscore2.default)(str).isArray()) {
            str = str.join(',');
        }
        if (!str || str === '' || !fontSize || isNaN(fontSize)) {
            return 0;
        }

        // split lines by break tag, trimming leading and trailing whitespaces
        var multilineArray = str.split(/\s*<br\s*\/?>\s*/);

        var multilineArrayLen = multilineArray.length;
        if (multilineArrayLen > 1) {
            // if multiple lines are passed (<br> || <br/> || <br />) then return width of widest line
            var maxWidth = 0;
            for (var i = 0; i < multilineArrayLen; i++) {
                if (multilineArray[i] && multilineArray[i] !== '') {
                    var thisLineWidth = this._predictLineWidth(multilineArray[i], fontSize, css);
                    if (thisLineWidth > maxWidth) {
                        maxWidth = thisLineWidth;
                    }
                }
            }
            return maxWidth;
        }
        // single line string
        var width = this._predictLineWidth(_jquery2.default.trim(str), fontSize, css);
        return width;
    },
    _predictLineWidth: function _predictLineWidth(str, fontSize, css) {
        if (!str || !fontSize) {
            return 0;
        }
        var bBox = this.getTextBBox(str, fontSize, css);
        return bBox ? bBox.width : 0;
    },
    predictTextHeight: function predictTextHeight(text, fontSize, css) {
        if ((0, _underscore2.default)(text).isArray()) {
            text = text.join(',');
        }
        if (!fontSize || !text) {
            return 0;
        }
        var bBox = this.getTextBBox(text, fontSize, css);
        return bBox ? bBox.height : 0;
    },
    getTextBBox: function getTextBBox(text, fontSize, css) {
        // fontSize is required; css is any other styling that determines size (italics, bold, etc.)
        css = _jquery2.default.extend(css, {
            fontSize: fontSize + 'px'
        });

        if (isNaN(parseFloat(fontSize, 10))) {
            return undefined;
        }
        if (this.textPredicter) {
            this.textPredicter.destroy();
        }
        this.textPredicter = this.renderer.text(text, 0, 0).attr({
            visibility: 'hidden'
        }).css(css).add();

        return this.textPredicter.getBBox();
    },
    adjustLabels: function adjustLabels(originalLabels, width, minFont, maxFont, ellipsisMode) {
        var i = void 0;
        var fontSize = void 0;
        var shouldEllipsize = void 0;
        var labels = _jquery2.default.extend(true, [], originalLabels);
        var maxWidths = this.getMaxWidthForFontRange(labels, minFont, maxFont);

        // adjust font and try to fit longest
        if (maxWidths[maxFont] <= width) {
            shouldEllipsize = false;
            fontSize = maxFont;
        } else {
            shouldEllipsize = true;
            for (fontSize = maxFont - 1; fontSize > minFont; fontSize--) {
                if (maxWidths[fontSize] <= width) {
                    shouldEllipsize = false;
                    break;
                }
            }
        }

        if (shouldEllipsize && ellipsisMode !== 'none') {
            for (i = 0; i < labels.length; i++) {
                labels[i] = this.ellipsize(labels[i], width, fontSize, {}, ellipsisMode);
            }
        }
        return {
            labels: labels,
            fontSize: fontSize,
            areEllipsized: shouldEllipsize,
            longestWidth: maxWidths[fontSize]
        };
    },
    getMaxWidthForFontRange: function getMaxWidthForFontRange(labels, minFont, maxFont) {
        var longestLabelIndex = void 0;
        var fontSizeToWidthMap = {};

        // find the longest label
        fontSizeToWidthMap[minFont] = 0;
        for (var i = 0; i < labels.length; i++) {
            var labelLength = this.predictTextWidth(labels[i] || '', minFont);
            if (labelLength > fontSizeToWidthMap[minFont]) {
                longestLabelIndex = i;
                fontSizeToWidthMap[minFont] = labelLength;
            }
        }
        // fill in the widths for the rest of the font sizes
        for (var fontSize = minFont + 1; fontSize <= maxFont; fontSize++) {
            fontSizeToWidthMap[fontSize] = this.predictTextWidth(labels[longestLabelIndex] || '', fontSize);
        }
        return fontSizeToWidthMap;
    },
    bBoxesOverlap: function bBoxesOverlap(bBox1, bBox2, marginX, marginY) {
        marginX = marginX || 0;
        marginY = marginY || 0;
        var box1Left = bBox1.x - marginX;
        var box2Left = bBox2.x - marginX;
        var box1Right = bBox1.x + bBox1.width + 2 * marginX;
        var box2Right = bBox2.x + bBox2.width + 2 * marginX;
        var box1Top = bBox1.y - marginY;
        var box2Top = bBox2.y - marginY;
        var box1Bottom = bBox1.y + bBox1.height + 2 * marginY;
        var box2Bottom = bBox2.y + bBox2.height + 2 * marginY;

        return box1Left < box2Right && box1Right > box2Left && box1Top < box2Bottom && box1Bottom > box2Top;
    },
    destroy: function destroy() {
        if (this.textPredicter) {
            this.textPredicter.destroy();
            this.textPredicter = false;
        }
    }
};

exports.default = Formatter;
module.exports = exports['default'];

/***/ })

/******/ });