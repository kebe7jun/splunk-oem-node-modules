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
/******/ 	return __webpack_require__(__webpack_require__.s = 113);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SVG_css__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SVG_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SVG_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var propTypes = {
    /** @private */
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
    /**
     *  This defaults to the value of the size prop. Height can be defined as a number of ems, or as
     * a string with any other unit.
     */
    height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    /**
     * Setting inline to false will remove vertical-align: middle, and center the icon horizonatally.
     */
    inline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    /** A string to display to screen readers instead of the 'icon' value. Set the prop to null or
     * an empty string to hide the icon from screen readers, such as when there is already a text
     * label beside the icon. All icons have a default value that matches the icon name. */
    screenReaderText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['null'])]),
    /**
     * For convenience, the size prop the value for width or height (which ever is larger), and
     * scales the other dimension proportionally.
     * The default size of 0.75 makes the icon a similar size as the font
     * size. Size can be defined as a number of ems, or as a string with any other unit.
     */
    size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    /**
     * This defaults to the value of the size prop. Width can be defined as  a number of ems, or as
     * a string with any other unit.
     */
    width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    /** @private . */
    viewBox: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    /**
     * By default, the aspect ratio is preserved and the height and width define a max dimension,
     * and the icon is centered in the space. These are the standard svg values.  */
    preserveAspectRatio: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['none', 'xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid', 'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax'])
};

var defaultProps = {
    inline: true,
    size: 0.75,
    viewBox: '0 0 1500 1500',
    preserveAspectRatio: 'xMidYMid'
};

function SVG(props) {
    var children = props.children,
        height = props.height,
        inline = props.inline,
        preserveAspectRatio = props.preserveAspectRatio,
        screenReaderText = props.screenReaderText,
        size = props.size,
        width = props.width,
        viewBox = props.viewBox,
        otherProps = _objectWithoutProperties(props, ['children', 'height', 'inline', 'preserveAspectRatio', 'screenReaderText', 'size', 'width', 'viewBox']);

    var sizeValue = parseFloat(size);
    var sizeUnit = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"])(size) ? size.match(/[^\d]+/) : 'em';

    var vbHeight = parseInt(viewBox.split(' ')[3], 10);
    var vbWidth = parseInt(viewBox.split(' ')[2], 10);
    var maxDimension = Math.max(vbWidth, vbHeight);

    var cHeight = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"])(height) ? vbHeight / maxDimension * sizeValue : height;
    var cWidth = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"])(width) ? vbWidth / maxDimension * sizeValue : width;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        _extends({
            focusable: 'false',
            height: Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"])(cHeight) ? cHeight : '' + cHeight.toFixed(4) + sizeUnit,
            width: Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"])(cWidth) ? cWidth : '' + cWidth.toFixed(4) + sizeUnit,
            viewBox: viewBox,
            'aria-hidden': !screenReaderText,
            preserveAspectRatio: preserveAspectRatio,
            xmlns: 'http://www.w3.org/2000/svg'
        }, otherProps, {
            className: inline ? __WEBPACK_IMPORTED_MODULE_3__SVG_css___default.a.inline : __WEBPACK_IMPORTED_MODULE_3__SVG_css___default.a.block
        }),
        screenReaderText && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            null,
            screenReaderText
        ),
        children
    );
}
/* harmony default export */ __webpack_exports__["default"] = (SVG);

SVG.propTypes = propTypes;
SVG.defaultProps = defaultProps;

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(119)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/lib/index.js!./SVG.css", function() {
			var newContent = require("!!../../css-loader/lib/index.js!./SVG.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {
                    var styles = {"enterprise":".main_SVG__guid__bd959f{-webkit-box-flex:0;flex:0 0 auto}.main_SVG__guid__bd959f circle,.main_SVG__guid__bd959f ellipse,.main_SVG__guid__bd959f path,.main_SVG__guid__bd959f polygon,.main_SVG__guid__bd959f rect{fill:currentColor}.inline_SVG__guid__bd959f{vertical-align:middle;display:inline-block}.block_SVG__guid__bd959f{display:block;margin:0 auto}","lite":".main_SVG__guid__bd959f{-webkit-box-flex:0;flex:0 0 auto}.main_SVG__guid__bd959f circle,.main_SVG__guid__bd959f ellipse,.main_SVG__guid__bd959f path,.main_SVG__guid__bd959f polygon,.main_SVG__guid__bd959f rect{fill:currentColor}.inline_SVG__guid__bd959f{vertical-align:middle;display:inline-block}.block_SVG__guid__bd959f{display:block;margin:0 auto}"};
                    var themeLocals = {"enterprise":{"main":"main_SVG__guid__bd959f","inline":"inline_SVG__guid__bd959f main_SVG__guid__bd959f","block":"block_SVG__guid__bd959f main_SVG__guid__bd959f"},"lite":{"main":"main_SVG__guid__bd959f","inline":"inline_SVG__guid__bd959f main_SVG__guid__bd959f","block":"block_SVG__guid__bd959f main_SVG__guid__bd959f"}};

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
                
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(118)(module)))

/***/ }),

/***/ 118:
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

/***/ 119:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })

/******/ });