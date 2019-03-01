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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Message");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(12)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/@splunk/css-loader/lib/index.js!./ViewCapabilities.css", function() {
			var newContent = require("!!../../../node_modules/@splunk/css-loader/lib/index.js!./ViewCapabilities.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Heading__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Text__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Message__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_splunk_utils_capabilities__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_splunk_utils_capabilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_splunk_utils_capabilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ViewCapabilities_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ViewCapabilities_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ViewCapabilities_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CapabilitiesTable__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

var ViewCapabilities = function (_Component) {
    _inherits(ViewCapabilities, _Component);

    function ViewCapabilities(props) {
        _classCallCheck(this, ViewCapabilities);

        var _this = _possibleConstructorReturn(this, (ViewCapabilities.__proto__ || Object.getPrototypeOf(ViewCapabilities)).call(this, props));

        _this.getEntityData = function (results) {
            var filteredObjList = [];
            var rolesArray = null;
            if (Array.isArray(results)) {
                rolesArray = results;
            } else {
                filteredObjList.push(_this.getTruncatedObj(results));
                rolesArray = results.roles;
            }
            rolesArray.forEach(function (each) {
                filteredObjList.push(_this.getTruncatedObj(each));
            });
            return filteredObjList;
        };

        _this.getTruncatedObj = function (obj) {
            return {
                name: obj.name,
                capabilities: obj.capabilities,
                imported_capabilities: obj.imported_capabilities
            };
        };

        _this.getFilteredCapabilities = function () {
            return _this.state.capabilities.filter(function (each) {
                return each.indexOf(_this.state.activeFilter) >= 0;
            });
        };

        _this.handleActiveFilterChange = function () {
            var filter = _this.state.filter;
            _this.setState({ activeFilter: filter.trim() });
        };

        _this.handleChangeFilter = function (e, _ref) {
            var value = _ref.value;

            _this.setState({
                filter: value
            });
            _this.handleActiveFilterChange();
        };

        _this.state = {
            entities: [],
            capabilities: [],
            filter: '',
            activeFilter: '',
            errorMsg: ''
        };
        _this.handleActiveFilterChange = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["debounce"])(_this.handleActiveFilterChange, 500);
        return _this;
    }

    _createClass(ViewCapabilities, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var promises = [];
            var getSubject = this.props.entityType === 'roles' ? __WEBPACK_IMPORTED_MODULE_7__splunk_splunk_utils_capabilities__["getRole"] : __WEBPACK_IMPORTED_MODULE_7__splunk_splunk_utils_capabilities__["getUser"];
            var subjectDepth = this.props.entityType === 'roles' ? 1 : 2;
            promises.push(Object(__WEBPACK_IMPORTED_MODULE_7__splunk_splunk_utils_capabilities__["fetchCapabilities"])());
            promises.push(getSubject(this.props.entity, subjectDepth));
            Promise.all(promises).then(function (results) {
                var capabilitiesList = results[0].entry[0].content.capabilities;
                var entities = _this2.getEntityData(results[1]);
                _this2.setState({
                    capabilities: capabilitiesList,
                    entities: entities
                });
            }).catch(function (e) {
                _this2.setState({
                    errorMsg: e.message
                });
            });
        }

        /**
         * Flatten out results for Capabilities Table
         * @param results
         * @returns {Array}
         */


        /**
         * Takes in the entity object with capabilities, imported_capabilities, roles, etc,
         * truncated the object to the properties expected by CapabilitiesTable
         * @param obj
         * @returns {null | {name, capabilities, imported_capabilities: *|string[]|string[]|string[]}}
         */


        /**
         * Returns the list of capabilities that match the current filter
         * @returns {*[]}
         */


        /**
         * Update component state property activeFilter
         */


        /**
         * Change handler for filter bar
         * @param {object} e
         * @param {string} value - new search string
         */

    }, {
        key: 'render',
        value: function render() {
            var filter = this.state.activeFilter;
            var filteredCapabilities = this.state.capabilities;
            if (filter !== '') {
                filteredCapabilities = this.getFilteredCapabilities();
            }
            if (this.state.errorMsg.length > 0) {
                var entityType = this.props.entityType === 'roles' ? gettext('Role') : gettext('User');
                var errorMsg = Object(__WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format__["sprintf"])(gettext('%(entityType)s %(entity)s fetch failed. %(errorMsg)s'), {
                    entityType: entityType,
                    entity: this.props.entity,
                    errorMsg: this.state.errorMsg
                });
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_8__ViewCapabilities_css___default.a.container, 'data-test': 'view-capabilities-view' },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Message___default.a,
                        { type: 'error' },
                        errorMsg
                    )
                );
            }
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_8__ViewCapabilities_css___default.a.container, 'data-test': 'view-capabilities-view' },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_8__ViewCapabilities_css___default.a.matchManagerPage },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Heading___default.a,
                        { level: 3 },
                        Object(__WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format__["sprintf"])(gettext('View Capabilities for %(entity)s'), {
                            entity: this.props.entity
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Text___default.a, {
                        inline: true,
                        appearance: 'search',
                        placeholder: gettext('Filter'),
                        onChange: this.handleChangeFilter,
                        value: this.state.filter,
                        style: { margin: '5px 0px' },
                        'data-test': 'filter-text'
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__CapabilitiesTable__["a" /* default */], {
                    entities: this.state.entities,
                    capabilities: filteredCapabilities
                })
            );
        }
    }]);

    return ViewCapabilities;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ViewCapabilities.propTypes = {
    entityType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['roles', 'users']),
    entity: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
ViewCapabilities.defaultProps = {
    entityType: 'roles',
    entity: 'admin'
};


/* harmony default export */ __webpack_exports__["default"] = (ViewCapabilities);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Heading");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Text");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/format");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@splunk/splunk-utils/capabilities");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {
                    var styles = {"enterprise":".tableContainer_ViewCapabilities__guid__55022f{display:inline}.matchManagerPage_ViewCapabilities__guid__55022f{background-color:#f2f5f4;padding-top:10px}.container_ViewCapabilities__guid__55022f{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-webkit-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;columns:auto;-webkit-column-count:auto;column-count:auto;-webkit-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;column-span:1;-webkit-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;font-family:Splunk Platform Sans,Proxima Nova,Roboto,Droid,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:#3c444d;box-sizing:border-box;display:inline;border-width:1px;visibility:inherit;outline:medium none #00a4fd;outline:medium none invert;display:inline-block;font-size:16px;margin:0 20px 10px;background-color:#fff;color:#5c6773}","lite":".tableContainer_ViewCapabilities__guid__55022f{display:inline}.matchManagerPage_ViewCapabilities__guid__55022f{background-color:#f2f5f4;padding-top:10px}.container_ViewCapabilities__guid__55022f{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-webkit-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;columns:auto;-webkit-column-count:auto;column-count:auto;-webkit-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;column-span:1;-webkit-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;font-family:Splunk Platform Sans,Proxima Nova,Roboto,Droid,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:#3c444d;box-sizing:border-box;display:inline;border-width:1px;visibility:inherit;outline:medium none #00a4fd;outline:medium none invert;display:inline-block;font-size:16px;margin:0 20px 10px;background-color:#fff;color:#5c6773}"};
                    var themeLocals = {"enterprise":{"tableContainer":"tableContainer_ViewCapabilities__guid__55022f","matchManagerPage":"matchManagerPage_ViewCapabilities__guid__55022f","container":"container_ViewCapabilities__guid__55022f"},"lite":{"tableContainer":"tableContainer_ViewCapabilities__guid__55022f","matchManagerPage":"matchManagerPage_ViewCapabilities__guid__55022f","container":"container_ViewCapabilities__guid__55022f"}};

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
                
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 11 */
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
/* 12 */
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


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_icons_Check__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_icons_Check___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_react_icons_Check__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_icons_CircleFilled__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_icons_CircleFilled___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_react_icons_CircleFilled__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ViewCapabilities_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ViewCapabilities_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ViewCapabilities_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

var CapabilitiesTable = function (_Component) {
    _inherits(CapabilitiesTable, _Component);

    function CapabilitiesTable(props) {
        _classCallCheck(this, CapabilitiesTable);

        var _this = _possibleConstructorReturn(this, (CapabilitiesTable.__proto__ || Object.getPrototypeOf(CapabilitiesTable)).call(this, props));

        _this.getTableCell = function (row, capability) {
            if (row.capabilities.indexOf(capability) > -1) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__splunk_react_icons_Check___default.a, { 'data-test': 'table-check', style: { color: '#006297' } });
            } else if (row.imported_capabilities.indexOf(capability) > -1) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__splunk_react_icons_CircleFilled___default.a, {
                    'data-test': 'table-circle-filled',
                    style: { color: '#818d99', height: '0.4em' }
                });
            }
            return null;
        };

        _this.handleTableSort = function (e, _ref) {
            var sortKey = _ref.sortKey;

            var prevSortKey = _this.state.sortKey;
            var prevSortDir = prevSortKey === sortKey ? _this.state.sortDir : 'none';
            var nextSortDir = prevSortDir === 'asc' ? 'desc' : 'asc';
            _this.setState({
                sortKey: sortKey,
                sortDir: nextSortDir
            });
        };

        _this.state = {
            sortKey: 'capability',
            sortDir: 'asc',
            isLoading: true
        };
        return _this;
    }

    _createClass(CapabilitiesTable, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.setState({
                isLoading: false
            });
        }

        /**
         * Return the table cell with correct style
         * @param {string} row - role object
         * @param {string} capability - capability name
         * @returns {*}
         */


        /**
         * callback invoked when this head cell is clicked.
         * @param {object} e
         * @param {string} sortKey
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                entities = _props.entities,
                capabilities = _props.capabilities;
            var sortDir = this.state.sortDir;

            var capabilityListClone = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["clone"])(capabilities);
            capabilityListClone.sort(function (rowA, rowB) {
                if (sortDir === 'asc') {
                    return rowA > rowB ? 1 : -1;
                }
                return rowB > rowA ? 1 : -1;
            });

            if (capabilityListClone.length > 0) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_7__ViewCapabilities_css___default.a.tableContainer },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table___default.a,
                        {
                            stripeRows: true,
                            'data-test': 'capabilities-table',
                            outerStyle: { border: '1px solid #e1e6eb', width: '960px' }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table___default.a.Head,
                            null,
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table___default.a.HeadCell,
                                {
                                    sortKey: 'capability',
                                    onSort: this.handleTableSort,
                                    sortDir: this.state.sortKey === 'capability' ? this.state.sortDir : 'none'
                                },
                                gettext('Name')
                            ),
                            entities.map(function (row) {
                                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table___default.a.HeadCell,
                                    { key: row.name, sortKey: row.name },
                                    row.name
                                );
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table___default.a.Body,
                            null,
                            capabilityListClone.map(function (cap) {
                                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table___default.a.Row,
                                    { key: cap, 'data-test': 'row-' + cap },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table___default.a.Cell,
                                        null,
                                        cap
                                    ),
                                    _this2.props.entities.map(function (row) {
                                        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                            __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Table___default.a.Cell,
                                            {
                                                'data-test': row.name + '-' + cap + '-table-check',
                                                key: row.name + '-' + cap
                                            },
                                            _this2.getTableCell(row, cap)
                                        );
                                    })
                                );
                            })
                        )
                    )
                );
            }
            if (this.state.isLoading) {
                return null;
            }
            var emptyBodyMsg = gettext('No capabilities found.');
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_7__ViewCapabilities_css___default.a.tableContainer },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Message___default.a,
                    { type: 'error' },
                    emptyBodyMsg
                )
            );
        }
    }]);

    return CapabilitiesTable;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

CapabilitiesTable.propTypes = {
    entities: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
    capabilities: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
};
CapabilitiesTable.defaultProps = {
    entities: [],
    capabilities: []
};


/* harmony default export */ __webpack_exports__["a"] = (CapabilitiesTable);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-icons/Check");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-icons/CircleFilled");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Table");

/***/ })
/******/ ]);