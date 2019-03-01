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
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("@splunk/splunk-utils/fetch");

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_fetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Dropdown__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Paginator__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Paginator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Paginator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_react_ui_Text__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__splunk_react_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__splunk_react_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_utils_TestSupport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_modals_Error__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_modals_Error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_modals_Error__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/table/Filters.jsx';

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

var TableFilters = function (_Component) {
    _inherits(TableFilters, _Component);

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */
    function TableFilters() {
        var _ref;

        _classCallCheck(this, TableFilters);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = TableFilters.__proto__ || Object.getPrototypeOf(TableFilters)).call.apply(_ref, [this].concat(args)));

        _this.setShouldRefreshOnClose = function () {
            _this.setState({
                shouldRefreshOnClose: true
            });
        };

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

        _this.handleRequestErrorModalClose = function () {
            _this.setState({
                errorModalOpen: false
            });
        };

        _this.handleRequestClose = function () {
            if (_this.state.shouldRefreshOnClose) {
                _this.props.handleRefreshListing();
            } else {
                _this.props.handleClearRowSelection();
            }
            _this.setState({
                action: '',
                errorModalOpen: false,
                errorMessage: '',
                isBulkActionModalOpen: false,
                ModalToOpen: null,
                shouldRefreshOnClose: false
            });
        };

        _this.state = {
            action: '',
            errorModalOpen: false,
            errorMessage: '',
            isBulkActionModalOpen: false,
            ModalToOpen: null,
            apps: [],
            users: [],
            /** Indicates whether the listing should refresh when a modal is closed */
            shouldRefreshOnClose: false
        };
        return _this;
    }

    _createClass(TableFilters, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.showOwnerFilter) {
                this.fetchUsers();
            }

            if (this.props.showAppFilter) {
                this.fetchApps();
            }
        }

        /**
         * Function that builds the bulk actions list.
         */

    }, {
        key: 'setupBulkActions',
        value: function setupBulkActions() {
            var _this2 = this;

            this.BULK_ACTIONS = [].concat(_toConsumableArray(this.props.permissions.canEditPermissions && this.props.permissions.canBulkEditPermissions ? [__WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.BULK_ACTION_EDIT_PERMS] : []), _toConsumableArray(this.props.permissions.canChangeStatus && this.props.permissions.canBulkChangeStatus ? [__WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.BULK_ACTION_ENABLE, __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.BULK_ACTION_DISABLE] : []), _toConsumableArray(Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"])(this.props.customBulkActions, function (customBulkAction) {
                if (typeof customBulkAction.isVisible === 'function') {
                    return customBulkAction.isVisible(_this2.props);
                }
                return true;
            })), _toConsumableArray(this.props.permissions.delete && this.props.permissions.canBulkDelete ? [__WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.BULK_ACTION_DELETE] : []));
        }

        /**
         * Builds the label of the object count:
         * Example: 25 Objects
         * @returns {string} the count label
         */

    }, {
        key: 'getCountLabel',
        value: function getCountLabel() {
            if (this.props.fetching) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 121
                        },
                        __self: this
                    },
                    gettext('Loading...')
                );
            }
            var label = this.props.objectsCount !== 1 ? this.props.objectNamePlural : this.props.objectNameSingular;
            return this.props.objectsCount + ' ' + label;
        }
    }, {
        key: 'getMenuHeadingLabel',
        value: function getMenuHeadingLabel() {
            return Object(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__["sprintf"])(gettext('Edit Selected %s'), this.props.selectedRows.length).toUpperCase();
        }
    }, {
        key: 'fetchApps',
        value: function fetchApps() {
            var _this3 = this;

            var appsURL = this.props.appsCollectionPath;
            // TODO: make this as a prop to make this component generic
            var fetchData = {
                output_mode: 'json',
                sort_key: 'name',
                sort_dir: 'asc',
                search: 'disabled=0',
                count: -1
            };
            fetch(appsURL + '?' + __WEBPACK_IMPORTED_MODULE_2_querystring___default.a.stringify(fetchData), __WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_fetch__["defaultFetchInit"]).then(Object(__WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_fetch__["handleResponse"])(200)).then(function (data) {
                _this3.setState({
                    apps: data.entry ? data.entry : data
                });
            }).catch(function (response) {
                _this3.handleError(gettext('Fetch apps collection failed.'), response);
            });
        }
    }, {
        key: 'fetchUsers',
        value: function fetchUsers() {
            var _this4 = this;

            var usersCollectionURL = this.props.usersCollectionPath;
            // TODO: make this as a prop to make this component generic
            var fetchData = {
                output_mode: 'json'
            };
            fetch(usersCollectionURL + '?' + __WEBPACK_IMPORTED_MODULE_2_querystring___default.a.stringify(fetchData), __WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_fetch__["defaultFetchInit"]).then(Object(__WEBPACK_IMPORTED_MODULE_5__splunk_splunk_utils_fetch__["handleResponse"])(200)).then(function (data) {
                _this4.setState({
                    users: data.entry ? data.entry : data
                });
            }).catch(function (response) {
                _this4.handleError(gettext('Fetch users collection failed.'), response);
            });
        }
    }, {
        key: 'handleMenuItemClicked',
        value: function handleMenuItemClicked(actionKey) {
            var _this5 = this;

            if (this.props.selectedRows.length === 0) {
                this.handleError(gettext('Must select at least one row.'));
                return;
            }
            // Workaround of SUI-1247
            var isDefaultObjectSelected = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["some"])(this.props.selectedRows, function (row) {
                var obj = {};
                obj[_this5.props.idAttribute] = row;
                return _this5.props.isDefaultObject(obj);
            });
            if (isDefaultObjectSelected) {
                this.handleError(gettext('Default object cannot be selected for bulk action.'));
                return;
            }
            switch (actionKey) {
                case __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.BULK_ACTION_EDIT_PERMS.key:
                    this.setState({
                        isBulkActionModalOpen: true,
                        ModalToOpen: this.props.ModalEditPerms
                    });
                    break;
                case __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.BULK_ACTION_ENABLE.key:
                    this.setState({
                        action: 'bulk_enable',
                        isBulkActionModalOpen: true,
                        ModalToOpen: this.props.ModalChangeStatus
                    });
                    break;
                case __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.BULK_ACTION_DISABLE.key:
                    this.setState({
                        action: 'bulk_disable',
                        isBulkActionModalOpen: true,
                        ModalToOpen: this.props.ModalChangeStatus
                    });
                    break;
                case __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.BULK_ACTION_DELETE.key:
                    this.setState({
                        isBulkActionModalOpen: true,
                        ModalToOpen: this.props.ModalDelete
                    });
                    break;
                default:
                    this.setState({
                        isBulkActionModalOpen: true,
                        ModalToOpen: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["find"])(this.props.customBulkActions, function (customAction) {
                            return customAction.key === actionKey;
                        }).ModalToOpen
                    });
                    break;
            }
        }

        /**
         * Error handler
         * @param {String} message error message.
         * @param {String} response request response containing some more useful information.
         */

    }, {
        key: 'renderErrorModal',


        /**
         * Render a modal containing a user friendly error message.
         * @returns {XML} Markup of the error modal.
         */
        value: function renderErrorModal() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__splunk_base_lister_modals_Error___default.a, {
                open: this.state.errorModalOpen,
                errorMessage: this.state.errorMessage,
                handleRequestClose: this.handleRequestErrorModalClose,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 285
                },
                __self: this
            });
        }

        /**
         * Render a Menu.Item for the current bulk action to be added to the bulk actions menu.
         * @param bulkAction label of the current bulk action
         * @returns {*}
         */

    }, {
        key: 'renderBulkMenuItem',
        value: function renderBulkMenuItem(bulkAction) {
            var _this6 = this;

            if (bulkAction.key === 'divider') {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Menu___default.a.Divider, { key: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqueId"])('divider_'), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 300
                    },
                    __self: this
                });
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Menu___default.a.Item,
                {
                    key: bulkAction.key,
                    style: { whiteSpace: 'no-wrap' },
                    onClick: function onClick() {
                        return _this6.handleMenuItemClicked(bulkAction.key);
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 303
                    },
                    __self: this
                },
                bulkAction.label
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var _props = this.props,
                objectNameSingular = _props.objectNameSingular,
                objectNamePlural = _props.objectNamePlural,
                selectedRows = _props.selectedRows,
                errorFormatter = _props.errorFormatter,
                isDefaultObject = _props.isDefaultObject,
                idAttribute = _props.idAttribute,
                filterApp = _props.filterApp,
                filterOwner = _props.filterOwner,
                filterString = _props.filterString,
                handleAppFilterChange = _props.handleAppFilterChange,
                handleCountPerChange = _props.handleCountPerChange,
                handleOwnerFilterChange = _props.handleOwnerFilterChange,
                handlePaginatorChange = _props.handlePaginatorChange,
                handleTextFilterChange = _props.handleTextFilterChange,
                showAppFilter = _props.showAppFilter,
                showOwnerFilter = _props.showOwnerFilter,
                isSingleRowTableFilter = _props.isSingleRowTableFilter,
                page = _props.page,
                objectsCount = _props.objectsCount,
                countPerPage = _props.countPerPage,
                otherProps = _objectWithoutProperties(_props, ['objectNameSingular', 'objectNamePlural', 'selectedRows', 'errorFormatter', 'isDefaultObject', 'idAttribute', 'filterApp', 'filterOwner', 'filterString', 'handleAppFilterChange', 'handleCountPerChange', 'handleOwnerFilterChange', 'handlePaginatorChange', 'handleTextFilterChange', 'showAppFilter', 'showOwnerFilter', 'isSingleRowTableFilter', 'page', 'objectsCount', 'countPerPage']);

            var containerStyle = {
                lineHeight: '36px',
                display: 'inline-block',
                marginRight: '10px',
                verticalAlign: 'middle'
            };
            var paginator = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__splunk_react_ui_Paginator___default.a, {
                'data-test-name': 'paginator',
                onChange: handlePaginatorChange,
                current: page,
                alwaysShowLastPageLink: true,
                totalPages: Math.ceil(objectsCount / countPerPage),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 344
                },
                __self: this
            });
            this.setupBulkActions();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                _extends({
                    style: {
                        minHeight: '36px',
                        verticalAlign: 'middle'
                    }
                }, Object(__WEBPACK_IMPORTED_MODULE_13__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 354
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        'data-test': isSingleRowTableFilter ? 'filters-row' : 'filters-row-1',
                        style: {
                            margin: '0 20px',
                            textAlign: 'left',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center'
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 361
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                            'data-test': 'object-count',
                            style: {
                                float: 'left',
                                lineHeight: '36px',
                                marginRight: '10px',
                                verticalAlign: 'middle'
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 371
                            },
                            __self: this
                        },
                        this.getCountLabel()
                    ),
                    this.BULK_ACTIONS.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                            style: {
                                textAlign: 'left',
                                float: 'left',
                                lineHeight: '36px',
                                marginRight: '10px',
                                verticalAlign: 'middle'
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 383
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7__splunk_react_ui_Dropdown___default.a,
                            {
                                'data-test-name': 'bulk-actions-dropdown',
                                toggle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { style: { display: 'flex' }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 395
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Button___default.a, {
                                        label: gettext('Bulk Action'),
                                        style: { flexShrink: 0 },
                                        isMenu: true,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 396
                                        },
                                        __self: this
                                    })
                                ),
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 392
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Menu___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 404
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_8__splunk_react_ui_Menu___default.a.Heading,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 405
                                        },
                                        __self: this
                                    },
                                    this.getMenuHeadingLabel()
                                ),
                                this.BULK_ACTIONS.map(function (bulkAction) {
                                    return _this7.renderBulkMenuItem(bulkAction);
                                })
                            )
                        ),
                        this.state.ModalToOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(this.state.ModalToOpen, _extends({
                            isBulk: true,
                            action: this.state.action,
                            open: this.state.isBulkActionModalOpen,
                            object: {},
                            objectNameSingular: objectNameSingular,
                            objectNamePlural: objectNamePlural,
                            idAttribute: idAttribute,
                            isDefaultObject: isDefaultObject,
                            errorFormatter: errorFormatter,
                            handleRequestClose: this.handleRequestClose,
                            setShouldRefreshOnClose: this.setShouldRefreshOnClose,
                            selectedRows: selectedRows
                        }, Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["omit"])(otherProps, 'ModalChangeStatus', 'ModalDelete', 'ModalEditPerms', 'fetching', 'handleClearRowSelection', 'customBulkActions'), {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 412
                            },
                            __self: this
                        }))
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                            style: {
                                lineHeight: '36px',
                                display: 'inline-block',
                                marginRight: '10px',
                                verticalAlign: 'middle'
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 438
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__splunk_react_ui_Text___default.a, {
                            'data-test-name': 'text-filter',
                            inline: true,
                            placeholder: gettext('filter'),
                            appearance: 'search',
                            value: filterString,
                            onChange: handleTextFilterChange,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 446
                            },
                            __self: this
                        })
                    ),
                    showAppFilter && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { style: containerStyle, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 456
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select___default.a,
                            {
                                'data-test-name': 'app-filter',
                                filter: true,
                                placeholder: gettext('App'),
                                prefixLabel: gettext('App'),
                                onChange: handleAppFilterChange,
                                style: { maxWidth: '200px' },
                                value: filterApp,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 457
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select___default.a.Option, { key: '-1', label: gettext('All'), value: 'all', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 466
                                },
                                __self: this
                            }),
                            this.state.apps.map(function (app) {
                                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select___default.a.Option, {
                                    key: app.name,
                                    label: app.content.label,
                                    value: app.name,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 468
                                    },
                                    __self: _this7
                                });
                            })
                        )
                    ),
                    showOwnerFilter && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { style: containerStyle, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 478
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select___default.a,
                            {
                                'data-test-name': 'owner-filter',
                                filter: true,
                                placeholder: gettext('Owner'),
                                prefixLabel: gettext('Owner'),
                                onChange: handleOwnerFilterChange,
                                style: { maxWidth: '200px' },
                                value: filterOwner,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 479
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select___default.a.Option, { key: '-1', label: gettext('All'), value: 'all', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 488
                                },
                                __self: this
                            }),
                            this.state.users.map(function (user) {
                                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select___default.a.Option, {
                                    key: user.name,
                                    label: user.name,
                                    value: user.name,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 490
                                    },
                                    __self: _this7
                                });
                            })
                        )
                    ),
                    objectsCount > __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.COUNTS_PER_PAGE[0] && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                            style: {
                                textAlign: 'right',
                                lineHeight: '36px',
                                verticalAlign: 'middle',
                                flexGrow: 1
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 500
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select___default.a,
                            {
                                'data-test-name': 'page-count-selector',
                                value: countPerPage,
                                onChange: handleCountPerChange,
                                style: { marginRight: '10px' },
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 508
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_12__splunk_base_lister_utils_Constants___default.a.COUNTS_PER_PAGE.map(function (count) {
                                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__splunk_react_ui_Select___default.a.Option, {
                                    key: count,
                                    label: Object(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__["sprintf"])(gettext('%s per page'), count),
                                    value: count,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 515
                                    },
                                    __self: _this7
                                });
                            })
                        ),
                        isSingleRowTableFilter && paginator
                    )
                ),
                !isSingleRowTableFilter && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        'data-test': isSingleRowTableFilter ? 'filters-row' : 'filters-row-2',
                        style: {
                            textAlign: 'right',
                            lineHeight: '36px',
                            margin: '0 20px',
                            padding: '5px',
                            verticalAlign: 'middle'
                        },
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 527
                        },
                        __self: this
                    },
                    paginator
                ),
                this.renderErrorModal()
            );
        }
    }]);

    return TableFilters;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

TableFilters.propTypes = {
    appsCollectionPath: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    usersCollectionPath: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    fetching: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    errorFormatter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    objectsCount: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    objectNamePlural: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    objectNameSingular: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    idAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    isDefaultObject: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleRefreshListing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    page: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    countPerPage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    customBulkActions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    filterApp: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    filterString: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    filterOwner: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    permissions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    isSingleRowTableFilter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    ModalChangeStatus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    ModalDelete: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    ModalEditPerms: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleCountPerChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleAppFilterChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleOwnerFilterChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleTextFilterChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handlePaginatorChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleClearRowSelection: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    showAppFilter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    showOwnerFilter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
    selectedRows: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired
};
TableFilters.defaultProps = {};


/* harmony default export */ __webpack_exports__["default"] = (TableFilters);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/table/Filters.jsx"))

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Paginator");

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Select");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/Error");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/TestSupport");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Dropdown");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Menu");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/format");

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Button");

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Text");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/Constants");

/***/ })

/******/ });