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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/TestSupport");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/format");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/Constants");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/ChangeStatus");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/Delete");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@splunk/splunk-utils/fetch");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/EditPerms");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/NewEditClone");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/Error");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/Columns");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/columns/Actions");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/Content");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/Header");

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/table/Filters");

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_config__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_ErrorBoundary__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_ErrorBoundary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_ErrorBoundary__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_table_Columns__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_table_Columns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_table_Columns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_table_columns_Actions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_table_columns_Actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_table_columns_Actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_utils_Constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_utils_Constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_utils_Constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_TestSupport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_modals_ChangeStatus__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_modals_ChangeStatus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_modals_ChangeStatus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_Delete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_modals_EditPerms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_modals_EditPerms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_modals_EditPerms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_modals_NewEditClone__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_modals_NewEditClone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_modals_NewEditClone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_modals_Error__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_modals_Error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_modals_Error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__splunk_base_lister_table_Content__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__splunk_base_lister_table_Content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__splunk_base_lister_table_Content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__splunk_base_lister_table_Filters__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__splunk_base_lister_table_Filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__splunk_base_lister_table_Filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__splunk_base_lister_table_Header__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__splunk_base_lister_table_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__splunk_base_lister_table_Header__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/Main.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



























// SPL-152165: Provide a default global gettext if none is available, as a
// stopgap to allow this component to function in non-Splunk environments.
window.gettext = window.gettext || function (message) {
    return message;
};

/**
 * This is the main class of the base-lister component.
 * Each usage of the base-lister component should be done through this class.
 * All components (TableContent, TableFilters, Modals...) are customizable and can be overridden.
 */

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.handleError = function (message, response) {
            if (response && response.text && typeof response.text === 'function') {
                response.text().then(function (body) {
                    var enrichedError = response;
                    enrichedError.responseText = body;
                    _this.setState({
                        errorModalOpen: true,
                        errorMessage: _this.props.errorFormatter(message, enrichedError)
                    });
                });
            } else {
                _this.setState({
                    errorModalOpen: true,
                    errorMessage: message
                });
            }
        };

        _this.handleRefreshListing = function (newData) {
            _this.setState({
                fetchingCollection: true,
                fetchingCount: true,
                selectedRows: [],
                errorMessage: ''
            });
            _this.handleRefreshListingInternal(newData);
        };

        _this.handleUpdateItem = function (item) {
            var index = _this.state.objects.findIndex(function (object) {
                return object[_this.props.idAttribute] === item[_this.props.idAttribute];
            });
            if (index === -1) {
                _this.handleError(Object(__WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format__["sprintf"])(gettext('Update item with key "%s" failed.'), item[_this.props.idAttribute]));
            } else {
                _this.setState({
                    objects: [].concat(_toConsumableArray(_this.state.objects.slice(0, index)), [Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["merge"])({}, _this.state.objects[index], item)], _toConsumableArray(_this.state.objects.slice(index + 1)))
                });
            }
        };

        _this.handleRefreshListingInternal = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["debounce"])(function (newData) {
            var collectionData = _this.props.getObjectsCollectionFetchData(_this.state, newData);

            if (typeof _this.fetchCount === 'function') {
                _this.fetchCount(newData);
            }

            var collectionURL = '' + _this.props.objectsCollectionPath;
            fetch(collectionURL + '?' + __WEBPACK_IMPORTED_MODULE_2_querystring___default.a.stringify(collectionData), __WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["defaultFetchInit"]).then(Object(__WEBPACK_IMPORTED_MODULE_4__splunk_splunk_utils_fetch__["handleResponse"])(200)).then(function (data) {
                var newState = {
                    objects: data.entry ? data.entry : data,
                    fetchingCollection: false
                };
                if (data.paging) {
                    newState.objectsCount = data.paging.total;
                    newState.fetchingCount = false;
                }
                _this.setState(newState);
            }).catch(function (response) {
                _this.handleError(Object(__WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format__["sprintf"])(gettext('Fetch %s collection failed.'), _this.props.objectNamePlural.toLowerCase()), response);
            });
        }, 500);

        _this.handleToggleRow = function (event, idAttribute) {
            var data = _this.state.selectedRows;
            if (data.indexOf(idAttribute) !== -1) {
                data.splice(data.indexOf(idAttribute), 1);
            } else {
                data.push(idAttribute);
            }
            _this.setState({ selectedRows: data });
        };

        _this.handleToggleAllRows = function () {
            var selected = _this.rowSelectionState() !== 'all';
            var data = selected ? _this.state.objects.map(function (object) {
                if (_this.isDisabled(object)) {
                    return false;
                }
                return object[_this.props.idAttribute];
            }) : [];
            data = data.filter(function (object) {
                return !!object;
            });
            _this.setState({ selectedRows: data });
        };

        _this.handleClearRowSelection = function () {
            _this.setState({ selectedRows: [] });
        };

        _this.rowSelectionState = function () {
            var selectedCount = _this.state.selectedRows.length;
            var disabledCount = _this.state.objects.reduce(function (count, object) {
                return _this.isDisabled(object) ? count + 1 : count;
            }, 0);

            if (selectedCount === 0) {
                return 'none';
            }
            if (selectedCount + disabledCount === _this.state.objects.length) {
                return 'all';
            }
            return 'some';
        };

        _this.handleColumnSort = function (e, _ref) {
            var sortKey = _ref.sortKey;

            var prevSortKey = _this.state.sortKey;
            var prevSortDir = prevSortKey === sortKey ? _this.state.sortDirection : 'none';
            var nextSortDir = prevSortDir === 'asc' ? 'desc' : 'asc';
            _this.setState({
                sortKey: sortKey,
                sortDirection: nextSortDir
            });

            // 'sort_dir' is used to as a query parameter
            _this.handleRefreshListing({
                sort_key: sortKey,
                sort_dir: nextSortDir
            });
        };

        _this.handlePaginatorChange = function (e, _ref2) {
            var page = _ref2.page;

            var newOffset = _this.state.countPerPage * page - _this.state.countPerPage;
            _this.setState({
                page: page,
                offset: newOffset
            });

            _this.handleRefreshListing({
                offset: newOffset
            });
        };

        _this.handleDeleteChange = function (numberOfObjectsDeleted) {
            if (_this.state.page > 1 && numberOfObjectsDeleted >= _this.state.objects.length) {
                var newPage = _this.state.page - 1;
                var newOffset = _this.state.countPerPage * newPage - _this.state.countPerPage;
                _this.setState({
                    page: newPage,
                    offset: newOffset
                });
            }
        };

        _this.handleCountPerChange = function (e, _ref3) {
            var value = _ref3.value;

            // Reset page to page 1 and offset to 0.
            _this.setState({
                countPerPage: value,
                page: 1,
                offset: 0
            });

            _this.handleRefreshListing({
                count: value,
                offset: 0
            });
        };

        _this.handleTextFilterChange = function (e, _ref4) {
            var value = _ref4.value;

            // Reset page to page 1 and offset to 0.
            // Leave the filterString as is for the UI
            _this.setState({
                fetchingCollection: true,
                fetchingCount: true,
                filterString: value,
                offset: 0,
                page: 1
            });

            _this.handleRefreshListing({
                filterString: value,
                offset: 0
            });
        };

        _this.handleAppFilterChange = function (e, _ref5) {
            var value = _ref5.value;

            // Reset page to page 1 and offset to 0.
            _this.setState({
                filterApp: value,
                offset: 0,
                page: 1
            });
            _this.handleRefreshListing({
                filterApp: value,
                offset: 0
            });
        };

        _this.handleOwnerFilterChange = function (e, _ref6) {
            var value = _ref6.value;

            // Reset page to page 1 and offset to 0.
            _this.setState({
                filterOwner: value,
                offset: 0,
                page: 1
            });
            _this.handleRefreshListing({
                filterOwner: value,
                offset: 0
            });
        };

        _this.handleRequestClose = function () {
            _this.setState({
                errorModalOpen: false
            });
        };

        _this.state = {
            errorModalOpen: false,
            errorMessage: '',
            objects: [],
            fetchingCollection: false,
            fetchingCount: false,
            offset: 0,
            page: 1,
            filterApp: _this.props.initialAppFilter,
            filterOwner: _this.props.initialOwnerFilter,
            filterString: _this.props.initialStringFilter,
            sortKey: _this.props.nameSortAttribute,
            sortDirection: 'asc',
            fields: _this.props.objectCollectionFields,
            countPerPage: __WEBPACK_IMPORTED_MODULE_10__splunk_base_lister_utils_Constants___default.a.DEFAULT_OBJECTS_COUNT_PER_PAGE,
            objectsCount: 0,
            /** array containing the IDs of the selected objects */
            selectedRows: []
        };
        return _this;
    }

    _createClass(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setPageTitle();
            this.handleRefreshListing(null);
        }
    }, {
        key: 'setPageTitle',
        value: function setPageTitle() {
            document.title = this.props.objectNamePlural + ' | Splunk ' + (__WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_config__["versionLabel"] || '');
        }

        /**
         * Error handler
         * @param {String} message error message.
         * @param {String} response request response containing some more useful information.
         */


        /**
         * Handler for refreshing the listing. Change the state to fetching before debounce the server request.
         */


        /**
         * Handler for refreshing a single object.
         * @param {object} item - set of fields to update, this will ensure update is applied to state
         */


        /**
         * Handler for refreshing the listing.
         * Fetches the collection of objects given the fetch data.
         * May also fetch the count endpoint if paging is not provided in the object collection.
         */


        /**
         * Override this method if the end point is not standard, i.e.: the collection doesn't return a paging object.
         * This method should set state fetchingCount to false when done.
         */
        // fetchCount(newData) { }

        /**
         * Handler for check a row.
         */


        /**
         * Handler for check all rows.
         */


        /**
         * Clear selection handler.
         */


        /**
         * Gives the current state of row selection.
         * - none, none of the rows are selected
         * - all, all the rows are selected
         * - some, some of the rows are selected
         * @returns {String}
         */

    }, {
        key: 'isDisabled',
        value: function isDisabled(object) {
            return this.props.isDefaultObject(object) || !this.props.permissions.write || (object.permissions ? !object.permissions.write : false);
        }

        /**
         * Handles the click event of the table head cell that sort the data
         * Right now, the sort key won't change, only the sort direction will change.
         */


        /**
         * Handles the clicks on the paginator component
         * @param {Event} e click event
         * @param {Number} next page number
         */


        /**
         * Go back to previous page if deleting all objects on current page.
         * @param {Number} numberOfObjectsDeleted number of objects that were deleted
         */


        /**
         * Handles the clicks on the count per page Select component
         * @param {Event} e click event
         * @param {Number} new count per page value
         */


        /**
         * Handles the text filter change event
         * @param {Event} e click event
         * @param {String} value target filter text
         */


        /**
         * Handles the app filter change event
         * @param {Event} e click event
         * @param {String} value target app
         */


        /**
         * Handles the owner filter change event
         * @param {Event} e click event
         * @param {String} value target owner
         */


        /**
         * Handles the close of the error modal.
         */

    }, {
        key: 'renderErrorModal',


        /**
         * Render a modal containing a user friendly error message.
         * @returns {XML} Markup of the error modal.
         */
        value: function renderErrorModal() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__splunk_base_lister_modals_Error___default.a, {
                open: this.state.errorModalOpen,
                errorMessage: this.state.errorMessage,
                handleRequestClose: this.handleRequestClose,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 846
                },
                __self: this
            });
        }

        /**
         * Renders the element.
         * @returns {XML} Markup of the Main component.
         */

    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                errorMessage = _state.errorMessage,
                fetchingCollection = _state.fetchingCollection,
                fetchingCount = _state.fetchingCount,
                sortKey = _state.sortKey,
                sortDirection = _state.sortDirection,
                filterApp = _state.filterApp,
                filterString = _state.filterString,
                filterOwner = _state.filterOwner,
                countPerPage = _state.countPerPage,
                page = _state.page,
                objects = _state.objects,
                objectsCount = _state.objectsCount,
                selectedRows = _state.selectedRows;

            var _props = this.props,
                objectsCollectionPath = _props.objectsCollectionPath,
                idAttribute = _props.idAttribute,
                nameAttribute = _props.nameAttribute,
                nameSortAttribute = _props.nameSortAttribute,
                isDefaultObject = _props.isDefaultObject,
                isEnabled = _props.isEnabled,
                hasRowExpansion = _props.hasRowExpansion,
                canMoveColumns = _props.canMoveColumns,
                headerDescription = _props.headerDescription,
                additionalCreateOptions = _props.additionalCreateOptions,
                objectNamePlural = _props.objectNamePlural,
                objectNameSingular = _props.objectNameSingular,
                permissions = _props.permissions,
                emptyMessage = _props.emptyMessage,
                getEditUrl = _props.getEditUrl,
                getExpansionRow = _props.getExpansionRow,
                customActions = _props.customActions,
                customBulkActions = _props.customBulkActions,
                customColumns = _props.customColumns,
                errorFormatter = _props.errorFormatter,
                ModalChangeStatus = _props.ModalChangeStatus,
                ModalClone = _props.ModalClone,
                ModalNew = _props.ModalNew,
                ModalDelete = _props.ModalDelete,
                ModalEdit = _props.ModalEdit,
                ModalEditTitleOrDescription = _props.ModalEditTitleOrDescription,
                ModalEditPerms = _props.ModalEditPerms,
                appsCollectionPath = _props.appsCollectionPath,
                usersCollectionPath = _props.usersCollectionPath,
                initialAppFilter = _props.initialAppFilter,
                initialOwnerFilter = _props.initialOwnerFilter,
                initialStringFilter = _props.initialStringFilter,
                TableContent = _props.TableContent,
                TableFilters = _props.TableFilters,
                TableHeader = _props.TableHeader,
                isSingleRowTableFilter = _props.isSingleRowTableFilter,
                ColumnsView = _props.ColumnsView,
                ColumnActions = _props.ColumnActions,
                showActionsColumn = _props.showActionsColumn,
                showAppColumn = _props.showAppColumn,
                showOwnerColumn = _props.showOwnerColumn,
                showSharingColumn = _props.showSharingColumn,
                showStatusColumn = _props.showStatusColumn,
                showAppFilter = _props.showAppFilter,
                showOwnerFilter = _props.showOwnerFilter,
                showHeader = _props.showHeader,
                showFilters = _props.showFilters,
                otherProps = _objectWithoutProperties(_props, ['objectsCollectionPath', 'idAttribute', 'nameAttribute', 'nameSortAttribute', 'isDefaultObject', 'isEnabled', 'hasRowExpansion', 'canMoveColumns', 'headerDescription', 'additionalCreateOptions', 'objectNamePlural', 'objectNameSingular', 'permissions', 'emptyMessage', 'getEditUrl', 'getExpansionRow', 'customActions', 'customBulkActions', 'customColumns', 'errorFormatter', 'ModalChangeStatus', 'ModalClone', 'ModalNew', 'ModalDelete', 'ModalEdit', 'ModalEditTitleOrDescription', 'ModalEditPerms', 'appsCollectionPath', 'usersCollectionPath', 'initialAppFilter', 'initialOwnerFilter', 'initialStringFilter', 'TableContent', 'TableFilters', 'TableHeader', 'isSingleRowTableFilter', 'ColumnsView', 'ColumnActions', 'showActionsColumn', 'showAppColumn', 'showOwnerColumn', 'showSharingColumn', 'showStatusColumn', 'showAppFilter', 'showOwnerFilter', 'showHeader', 'showFilters']);

            if (errorMessage) {
                return this.renderErrorModal();
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_ErrorBoundary___default.a,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 928
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    _extends({}, Object(__WEBPACK_IMPORTED_MODULE_11__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 929
                        },
                        __self: this
                    }),
                    showHeader && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableHeader, _extends({
                        objects: objects,
                        objectNamePlural: objectNamePlural,
                        objectNameSingular: objectNameSingular,
                        objectsCollectionPath: objectsCollectionPath,
                        idAttribute: idAttribute,
                        nameAttribute: nameAttribute,
                        permissions: permissions,
                        headerDescription: headerDescription,
                        additionalCreateOptions: additionalCreateOptions,
                        ModalNew: ModalNew,
                        errorFormatter: errorFormatter,
                        handleRefreshListing: this.handleRefreshListing
                    }, Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["omit"])(otherProps, 'getObjectsCollectionFetchData', 'getObjectsCountFetchData'), {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 931
                        },
                        __self: this
                    })),
                    showFilters && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableFilters, _extends({
                        fetching: fetchingCount,
                        objects: objects,
                        objectsCollectionPath: objectsCollectionPath,
                        objectsCount: objectsCount,
                        objectNamePlural: objectNamePlural,
                        objectNameSingular: objectNameSingular,
                        appsCollectionPath: appsCollectionPath,
                        usersCollectionPath: usersCollectionPath,
                        page: page,
                        countPerPage: countPerPage,
                        filterApp: filterApp,
                        filterString: filterString,
                        filterOwner: filterOwner,
                        permissions: permissions,
                        ModalChangeStatus: ModalChangeStatus,
                        ModalDelete: ModalDelete,
                        ModalEditPerms: ModalEditPerms,
                        customBulkActions: customBulkActions,
                        showAppFilter: showAppFilter,
                        showOwnerFilter: showOwnerFilter,
                        idAttribute: idAttribute,
                        nameAttribute: nameAttribute,
                        isDefaultObject: isDefaultObject,
                        isEnabled: isEnabled,
                        isSingleRowTableFilter: isSingleRowTableFilter,
                        handleAppFilterChange: this.handleAppFilterChange,
                        handleTextFilterChange: this.handleTextFilterChange,
                        handleOwnerFilterChange: this.handleOwnerFilterChange,
                        handlePaginatorChange: this.handlePaginatorChange,
                        handleCountPerChange: this.handleCountPerChange,
                        handleClearRowSelection: this.handleClearRowSelection,
                        handleRefreshListing: this.handleRefreshListing,
                        handleUpdateItem: this.handleUpdateItem,
                        handleDeleteChange: this.handleDeleteChange,
                        selectedRows: selectedRows,
                        errorFormatter: errorFormatter
                    }, Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["omit"])(otherProps, 'getObjectsCollectionFetchData', 'getObjectsCountFetchData', 'headerDescription', 'additionalCreateOptions'), {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 952
                        },
                        __self: this
                    })),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableContent, _extends({
                        fetching: fetchingCollection,
                        objects: objects,
                        objectNamePlural: objectNamePlural,
                        objectNameSingular: objectNameSingular,
                        objectsCollectionPath: objectsCollectionPath,
                        idAttribute: idAttribute,
                        nameAttribute: nameAttribute,
                        nameSortAttribute: nameSortAttribute,
                        isDefaultObject: isDefaultObject,
                        isEnabled: isEnabled,
                        hasRowExpansion: hasRowExpansion,
                        canMoveColumns: canMoveColumns,
                        sortKey: sortKey,
                        sortDirection: sortDirection,
                        getEditUrl: getEditUrl,
                        getExpansionRow: getExpansionRow,
                        permissions: permissions,
                        showActionsColumn: showActionsColumn,
                        showAppColumn: showAppColumn,
                        showOwnerColumn: showOwnerColumn,
                        showSharingColumn: showSharingColumn,
                        showStatusColumn: showStatusColumn,
                        handleToggleRow: this.handleToggleRow,
                        handleToggleAllRows: this.handleToggleAllRows,
                        handleRefreshListing: this.handleRefreshListing,
                        handleUpdateItem: this.handleUpdateItem,
                        handleColumnSort: this.handleColumnSort,
                        handleDeleteChange: this.handleDeleteChange,
                        emptyMessage: emptyMessage,
                        filterApp: filterApp,
                        filterString: filterString,
                        filterOwner: filterOwner,
                        initialAppFilter: initialAppFilter,
                        initialOwnerFilter: initialOwnerFilter,
                        initialStringFilter: initialStringFilter,
                        selectedRows: selectedRows,
                        rowSelectionState: this.rowSelectionState,
                        ColumnsView: ColumnsView,
                        ColumnActions: ColumnActions,
                        ModalChangeStatus: ModalChangeStatus,
                        ModalClone: ModalClone,
                        ModalDelete: ModalDelete,
                        ModalEdit: ModalEdit,
                        ModalEditTitleOrDescription: ModalEditTitleOrDescription,
                        ModalEditPerms: ModalEditPerms,
                        customActions: customActions,
                        customColumns: customColumns,
                        customBulkActions: customBulkActions,
                        errorFormatter: errorFormatter
                    }, Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["omit"])(otherProps, 'getObjectsCollectionFetchData', 'getObjectsCountFetchData', 'headerDescription', 'additionalCreateOptions'), {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 998
                        },
                        __self: this
                    }))
                )
            );
        }
    }]);

    return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Main.propTypes = {
    /**
     * Relative URL path of the collection of objects.
     * Should include ROOT_PATH if defined.
     * Example:
     *   /en-US/splunkd/__raw/servicesNS/-/-/saved/searches
     *   /en-US/custom/SA-ITOA/itoa_interface/nobody/team
     *   /splunk-gs/en-US/custom/SA-ITOA/itoa_interface/nobody/services
     */
    objectsCollectionPath: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
    /**
     * String used to display type specific messages instead of the generic 'Objects' string.
     */
    objectNamePlural: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
    /**
     * String used to display type specific messages instead of the generic 'Object' string.
     */
    objectNameSingular: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
    /**
     *  Object containing the permissions.
     *
     *  To enable bulk change status (canBulkChangeStatus), canChangeStatus should also be true.
     *  To enable bulk delete (canBulkDelete), delete should also be true.
     *  To enable bulk edit permissions (canBulkEditPermissions), canEditPermissions should also be true.
     *
     *  -  read: true, // Define whether the user can see an object. Same as canRead.
     *  Note: read is not used anywhere. Ideally, it should be handled by the end point.
     *  -  write: true, // Define whether the user can see 'Edit' dropdown. Same as canEdit, canWrite.
     *  Note: If false, the 'View' link is shown.
     *  -  delete: true, // Define whether the user can see the delete action link. Same as canDelete
     *  -  canCreate: true, // Define whether the user can see the create object action button.
     *  -  canClone: true, // Define whether the user can see the clone action link.
     *  -  canChangeStatus: true, // Define whether the user can see the change status link.
     *  -  canEditTitleAndDescription: true, // Define whether the user can see the edit title and description link.
     *  -  canEditPermissions: true, // Define whether the user can see the edit permissions link.
     *  -  canBulkChangeStatus: true, // Define whether the user can see the change status link in bulk actions.
     *  -  canBulkDelete: true, // Define whether the user can see the delete action link in bulk actions.
     *  -  canBulkEditPermissions: true // Define whether the user can see the edit permissions link in bulk actions.
     */
    permissions: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    /**
     * Function that returns the URL that is used to redirect to the detail view of the object to edit it.
     */
    getEditUrl: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * ID attribute of the object. Default is 'id'
     * Example:
     *   _key
     */
    idAttribute: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Function that will return an object containing the data necessary to fetch
     * the end point that return the objects.
     * Default is the following function:
     *
     * getObjectsCollectionFetchData(state, newData) {
        // 'sort_dir' is used to as a query parameter for sortDirection state
        // 'sort_key' is used to as a query parameter for sortKey state
        // 'filter'   is used to as a query parameter for filterString state
        // 'count'    is used to as a query parameter for countPerPage state
        return assignIn(
            {},
            {
                count: state.countPerPage,
                sort_key: state.sortKey,
                sort_dir: state.sortDirection,
                offset: state.offset,
                filter: state.filterString,
                output_mode: 'json'
            },
            newData
        );
       }
     */
    getObjectsCollectionFetchData: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Comma separated string identifying which fields are needed to load the lister
     * If not specified, the request will load the entire object per page
     * If specified, the objects will only contain the fields requested
     * Example:
     *  '_key,title,identifying_name'
     *
     *  Will return:
     *  [{<uuid>,'title','identifying_name'},...]
     */
    objectCollectionFields: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Function that will return an object containing the data necessary to fetch
     * the end point that return the objects.
     * Default is the following function:
     *
     * getObjectsCountFetchData(state, newData) {
        return {
            count: 0,
            filter: newData && newData.filter ? newData.filter : state.filterString,
        }
      }
     */
    getObjectsCountFetchData: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Name attribute of the object. Default is 'name'.
     * Example:
     *   name (most of Core objects)
     *   title (most of ITSI objects)
     */
    nameAttribute: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Sort attribute of the object. Default is the default value of nameAttribute 'name'.
     * Example:
     *   name (most of Core objects)
     *   identifying_name (most of ITSI objects)
     */
    nameSortAttribute: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Function that evaluates whether the current object is enable.
     * Default is a function always returning "!object.content.disabled".
     */
    isEnabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Function that evaluates whether the current object is the default object.
     * Default is a function always returning false.
     */
    isDefaultObject: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Indicates whether the table rows have row expansion. Default is true.
     */
    hasRowExpansion: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Indicates whether the user can re-order the table's columns. Default is false.
     */
    canMoveColumns: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Description text in the header section. Default is an empty string.
     */
    headerDescription: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Array of additional create options objects. Default is an empty array.
     * In addition to the create object button, this array allows user to give
     * more options in the create object button which becomes a menu.
     * Each create option object should be defined as follows:
     *
     * Example 1:
     *  {
     *      key: <MENU_KEY>, type: String (mandatory)
     *      label: <MENU_LABEL>, type: String (mandatory)
     *      url: <REDIRECTION_URL> type: String (either url or handleMenuItemClicked)
     *  }
     *  In this example, the 'url' object is a string where user will be redirected when clicking on the menu item.
     *
     *  Example 2:
     *  {
     *      key: <MENU_KEY>, type: String (mandatory)
     *      label: <MENU_LABEL>, type: String (mandatory)
     *      handleMenuItemClicked: <FUNCTION>, type: Function (either url or handleMenuItemClicked)
     *  }
     *  In this example, the 'handleMenuItemClicked' parameter is a function that will be executed
     *  when clicking on the menu item. Props will be propagated down and available in the function.
     */
    additionalCreateOptions: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    /**
     * Function that returns markup for the expansion row.
     * See default value in columns/Main.jsx
     */
    getExpansionRow: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Array of custom actions. Default is an empty array.
     * Each custom action should be defined as follows:
     *
     * Example:
     *  {
     *      key: <KEY>, type: String (mandatory)
     *      label: <COLUMN_HEADER_LABEL>, type: String (mandatory)
     *      ModalToOpen: <REACT_MODAL_COMPONENT>, type: Component (mandatory)
     *      isVisible: <FUNCTION> type: Function (optional)
     *  }
     *  Props will be propagated down and will be available in the ModalToOpen component.
     *  'isVisible' attribute is a function that indicates whether the action should be visible. Default is true.
     */
    customActions: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    /**
     * Array of custom bulk actions. Default is an empty array.
     * Each custom bulk action should be defined as follows:
     *
     * Example:
     *  {
     *      key: <KEY>, type: String (mandatory)
     *      label: <COLUMN_HEADER_LABEL>, type: String (mandatory)
     *      ModalToOpen: <REACT_MODAL_COMPONENT>, type: Component (mandatory)
     *      isVisible: <FUNCTION> type: Function (optional)
     *  }
     *  Props will be propagated down and will be available in the ModalToOpen component.
     *  'isVisible' attribute is a function that indicates whether the bulk action should be visible. Default is true.
     */
    customBulkActions: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    /**
     * Array of custom column objects. Default is an empty array.
     * Each custom column object should be defined as follows:
     *
     * Example 1:
     *  {
     *      key: <KEY>, type: String (mandatory)
     *      sortKey: <SORT_KEY>, type: String (optional)
     *      label: <COLUMN_HEADER_LABEL>, type: String (mandatory)
     *      content: <FUNCTION> type: Function (either content or Component)
     *  }
     *  In this example, the 'content' object is a function that returns mark up.
     *  We suggest the following function signature:
     *      content(object, otherProps) => {
     *           // renders the markup of the column's cell.
     *      }
     *  Props will be propagated down to the content function and will be available in the second argument as 'otherProps'.
     *
     *  Example 2: sortKey not defined means column sorting is disabled.
     *  {
     *      key: <KEY>, (mandatory)
     *      label: <COLUMN_HEADER_LABEL>, (mandatory)
     *      Component: <COLUMN_REACT_COMPONENT>, (either content or Component)
     *  }
     *  In this example, the 'Component' object is a React Component with a render method.
     *  Props will be propagated down and available in the Component.
     */
    customColumns: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    /**
     * Function that allows for customization of error messages.
     *
     * Default is:
     * (message, error) {
     *   return sprintf(gettext('%s Details: %s'), message, error);
     * }
     */
    errorFormatter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Default is:
     *      'No <this.props.objectNamePlural.toLowerCase()> found.'
     *
     * Note: if filters are applied, the empty message defaults to:
     *      'No <this.props.objectNamePlural.toLowerCase()> found with the current filters.'
     */
    emptyMessage: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Provides a way of overriding the ChangeStatus modal './modals/ChangeStatus' which is the default.
     */
    ModalChangeStatus: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Provides a way of overriding the Clone modal './modals/NewEditClone' which is the default.
     */
    ModalClone: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Provides a way of overriding the New modal './modals/NewEditClone' which is the default.
     */
    ModalNew: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Provides a way of overriding the Delete modal './modals/Delete' which is the default.
     */
    ModalDelete: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Provides a way of overriding the Edit modal './modals/NewEditClone' which is the default.
     * Two options:
     * - If 'redirect' or any other string is passed, clicking the Edit menu in the actions columns
     *   will redirect to the object detail view. See getEditUrl.
     * - If a component ('func') is being passed, the default Edit modal will be replaced with the
     *   component provided.
     */
    ModalEdit: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string]),
    /**
     * Provides a way of overriding the Edit Title Or Description modal './modals/NewEditClone' which is the default.
     */
    ModalEditTitleOrDescription: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Provides a way of overriding the Edit Permissions modal './modals/EditPerms' which is the default.
     */
    ModalEditPerms: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Provides a way of overriding the Table Content './table/Content' which is the default.
     */
    TableContent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Provides a way of overriding the Table Filters './table/Filters' which is the default.
     */
    TableFilters: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Provides a way of overriding the Table Filters './table/Filters' which is the default.
     */
    TableHeader: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Indicates whether the TableFilters should render in a single row when paginator is visible. Default is false.
     */
    isSingleRowTableFilter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Provides a way of overriding the ColumnsView './table/Columns' which is the default.
     */
    ColumnsView: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Provides a way of overriding the ColumnActions './table/columns/Actions' which is the default.
     */
    ColumnActions: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    /**
     * Initial value of the app filter. Default is 'all'.
     */
    initialAppFilter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Initial value of the owner filter. Default is 'all'.
     */
    initialOwnerFilter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Initial value of the owner filter. Default is ''.
     */
    initialStringFilter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Indicates whether the actions column should be displayed. Default is true.
     */
    showActionsColumn: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Indicates whether the app column should be displayed. Default is true.
     */
    showAppColumn: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Indicates whether the owner column should be displayed. Default is true.
     */
    showOwnerColumn: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Indicates whether the sharing column should be displayed. Default is true.
     */
    showSharingColumn: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Indicates whether the status column should be displayed. Default is true.
     */
    showStatusColumn: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Indicates whether the app filter should be displayed. Default is true.
     */
    showAppFilter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Indicates whether the owner filter should be displayed. Default is true.
     */
    showOwnerFilter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Indicates whether the header should be shown. Default is true.
     */
    showHeader: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Indicates whether the table filters should be displayed. Default is true.
     */
    showFilters: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    /**
     * Relative URL path of the collection of apps.
     * Should include ROOT_PATH if defined.
     * Example:
     *   `${rootPath}/${locale}/splunkd/__raw/servicesNS/admin/-/apps/local`
     */
    appsCollectionPath: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    /**
     * Relative URL path of the collection of users.
     * Should include ROOT_PATH if defined.
     * Example:
     *   `${rootPath}/${locale}/splunkd/__raw/services/authentication/users`
     */
    usersCollectionPath: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
};
Main.defaultProps = {
    TableContent: __WEBPACK_IMPORTED_MODULE_17__splunk_base_lister_table_Content___default.a,
    TableFilters: __WEBPACK_IMPORTED_MODULE_18__splunk_base_lister_table_Filters___default.a,
    TableHeader: __WEBPACK_IMPORTED_MODULE_19__splunk_base_lister_table_Header___default.a,
    ColumnsView: __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_table_Columns___default.a,
    ColumnActions: __WEBPACK_IMPORTED_MODULE_9__splunk_base_lister_table_columns_Actions___default.a,
    ModalChangeStatus: __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_modals_ChangeStatus___default.a,
    ModalClone: __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_modals_NewEditClone___default.a,
    ModalDelete: __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_modals_Delete___default.a,
    ModalNew: __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_modals_NewEditClone___default.a,
    ModalEdit: __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_modals_NewEditClone___default.a,
    ModalEditTitleOrDescription: __WEBPACK_IMPORTED_MODULE_15__splunk_base_lister_modals_NewEditClone___default.a,
    ModalEditPerms: __WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_modals_EditPerms___default.a,
    headerDescription: '',
    additionalCreateOptions: [],
    nameAttribute: 'name',
    nameSortAttribute: 'name',
    idAttribute: 'id',
    customActions: [],
    customBulkActions: [],
    customColumns: [],
    hasRowExpansion: true,
    canMoveColumns: false,
    initialAppFilter: 'all',
    initialOwnerFilter: 'all',
    initialStringFilter: '',
    appsCollectionPath: '',
    usersCollectionPath: '',
    isSingleRowTableFilter: false,
    showHeader: true,
    showFilters: true,
    showActionsColumn: true,
    showAppColumn: true,
    showOwnerColumn: true,
    showSharingColumn: true,
    showStatusColumn: true,
    showAppFilter: true,
    showOwnerFilter: true,
    /**
     * Default method returning the fetch data necessary for the collection fetch. Allows for override.
     * @param {Object} state current state of the component
     * @param {Object} newData data that is being passed to handleRefreshListing but not yet saved in the state
     * @returns {Object} an object containing the fetch data necessary for the collection fetch.
     */
    getObjectsCollectionFetchData: function getObjectsCollectionFetchData(state, newData) {
        // 'sort_dir' is used to as a query parameter for sortDirection state
        // 'sort_key' is used to as a query parameter for sortKey state
        // 'filter'   is used to as a query parameter for filterString state
        // 'count'    is used to as a query parameter for countPerPage state
        return Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assignIn"])({}, {
            count: state.countPerPage,
            sort_key: state.sortKey,
            sort_dir: state.sortDirection,
            offset: state.offset,
            fields: state.fields,
            filter: state.filterString,
            output_mode: 'json'
        }, newData);
    },

    /**
     * Default method returning the fetch data necessary for the count fetch. Allows for override.
     * @param {Object} state current state of the component
     * @param {Object} newData data that is being passed to handleRefreshListing but not yet saved in the state
     * @returns {Object} an object containing the fetch data necessary for the count fetch.
     */
    getObjectsCountFetchData: function getObjectsCountFetchData(state, newData) {
        return {
            count: 0,
            filter: newData && newData.filterString ? newData.filterString : state.filterString
        };
    },

    /**
     * Indicates whether the current object is enabled.
     * @param {Object} object object to evaluate
     * @returns {boolean} true if enabled, false otherwise
     */
    isEnabled: function isEnabled(object) {
        return !object.content.disabled;
    },

    /**
     * Function that evaluates whether the given object is the default object.
     * May vary depending on the object type
     * - param {Object} object the team object to evaluate
     * @returns {boolean} true is the object is the default object, false otherwise
     */
    isDefaultObject: function isDefaultObject() {
        return false;
    },

    /**
     * Default error formatter function. Allows for override.
     * @param {String} message custom error message defined in the UI code
     * @param {Object} response response returned by the backend
     * @returns {string} the user friendly error message.
     */
    errorFormatter: function errorFormatter(message, response) {
        return Object(__WEBPACK_IMPORTED_MODULE_6__splunk_ui_utils_format__["sprintf"])(gettext('%s Details: %s'), message, response);
    }
};


/* harmony default export */ __webpack_exports__["default"] = (Main);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/Main.jsx"))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@splunk/splunk-utils/config");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/ErrorBoundary");

/***/ })
/******/ ]);