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
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Dropdown__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Link__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/table/columns/Actions.jsx';

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
 * Actions column component.
 * By default, the Actions column content is a 'Edit' link with several actions if actions are possible for the object.
 * Otherwise, it's just a 'View' link.
 * This component is also responsible for rendering the modals corresponding to the action taken by the user.
 * Modals are fully customizable and can be overridden from the Main component.
 */

var ColumnActions = function (_Component) {
    _inherits(ColumnActions, _Component);

    /**
     * See base-lister/src/Main.jsx for propTypes definition.
     */
    function ColumnActions() {
        var _ref;

        _classCallCheck(this, ColumnActions);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ColumnActions.__proto__ || Object.getPrototypeOf(ColumnActions)).call.apply(_ref, [this].concat(args)));

        _this.setShouldRefreshOnClose = function () {
            _this.setState({
                shouldRefreshOnClose: true
            });
        };

        _this.handleRequestClose = function () {
            if (_this.state.shouldRefreshOnClose) {
                _this.props.handleRefreshListing();
            } else {
                _this.setState({
                    ModalToOpen: null,
                    shouldRefreshOnClose: false,
                    isModalOpen: false
                });
            }
        };

        _this.state = {
            /**
             * 'action' parameter for the default ModalEditTitleOrDescription modal.
             * Can be one of the following:
             *  - 'edit' (default)
             *  - 'edit_title_desc'
             *  - 'clone'
             *  - 'new' Not accessible from the edit actions here, only accessible from table.Header
             */
            action: 'edit',
            /** boolean indicating whether the current action modal is open */
            isModalOpen: false,
            /** current action modal component to open when the user clicks an action */
            ModalToOpen: null,
            /** Indicates whether the listing should refresh when a modal is closed */
            shouldRefreshOnClose: false
        };

        _this.objectPermissions = _this.objectPermissions();
        return _this;
    }

    /**
     * Builds the action list dropdown. If user doesn't have write permission on object,
     * then a View link is rendered.
     */


    _createClass(ColumnActions, [{
        key: 'setupActions',
        value: function setupActions() {
            var _this2 = this;

            var isDefaultObject = this.props.isDefaultObject(this.props.object);

            if (this.isReadOnly()) {
                this.ACTIONS_GROUP_1 = [__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_VIEW];
                this.ACTIONS_GROUP_2 = [];
            } else {
                this.ACTIONS_GROUP_1 = [].concat(_toConsumableArray(typeof this.props.ModalEdit === 'function' ? [__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_EDIT] : [Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["extend"])(__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_EDIT, {
                    link: true
                })]), _toConsumableArray(this.props.permissions.canEditTitleAndDescription ? [__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_EDIT_TITLE_DESC] : []), _toConsumableArray(this.props.permissions.canEditPermissions ? [__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_EDIT_PERMS] : []), _toConsumableArray(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"])(this.props.customActions, function (customAction) {
                    if (typeof customAction.isVisible === 'function') {
                        return customAction.isVisible(_this2.props);
                    }
                    return true;
                })));

                this.ACTIONS_GROUP_2 = [].concat(_toConsumableArray(this.props.permissions.canClone ? [__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_CLONE] : []), _toConsumableArray(this.props.permissions.delete && this.objectPermissions.delete && !isDefaultObject ? [__WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_DELETE] : []));
            }
        }
    }, {
        key: 'isReadOnly',
        value: function isReadOnly() {
            return !(this.props.permissions.write && this.objectPermissions.write);
        }

        /**
         * Handles the Menu.Item click event.
         * @param {String} actionKey key of the action clicked.
         */

    }, {
        key: 'handleMenuItemClicked',
        value: function handleMenuItemClicked(actionKey) {
            switch (actionKey) {
                case __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_EDIT.key:
                    this.setState({
                        isModalOpen: true,
                        action: 'edit',
                        ModalToOpen: this.props.ModalEdit
                    });
                    break;
                case __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_EDIT_TITLE_DESC.key:
                    this.setState({
                        isModalOpen: true,
                        action: 'edit_title_desc',
                        ModalToOpen: this.props.ModalEditTitleOrDescription
                    });
                    break;
                case __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_EDIT_PERMS.key:
                    this.setState({
                        isModalOpen: true,
                        ModalToOpen: this.props.ModalEditPerms
                    });
                    break;
                case __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_CLONE.key:
                    this.setState({
                        isModalOpen: true,
                        action: 'clone',
                        ModalToOpen: this.props.ModalClone
                    });
                    break;
                case __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_DELETE.key:
                    this.setState({
                        isModalOpen: true,
                        ModalToOpen: this.props.ModalDelete
                    });
                    break;
                default:
                    this.setState({
                        isModalOpen: true,
                        ModalToOpen: Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["find"])(this.props.customActions, function (customAction) {
                            return customAction.key === actionKey;
                        }).ModalToOpen
                    });
                    break;
            }
        }

        /**
         * Check the object permissions.
         */

    }, {
        key: 'objectPermissions',
        value: function objectPermissions() {
            var objectPerms = {
                read: true,
                write: true,
                delete: true
            };
            if (this.props.object.permissions) {
                objectPerms.read = this.props.object.permissions.read;
                objectPerms.write = this.props.object.permissions.write;
                objectPerms.delete = this.props.object.permissions.delete;
            }
            return objectPerms;
        }

        /**
         * Handles the close action of the currently opened Modal (this.state.ModalToOpen).
         */

    }, {
        key: 'renderMenuItem',


        /**
         * Render a Menu.Item for the current action to be added to the actions menu.
         * @param action label of the current action
         * @returns {*}
         */
        value: function renderMenuItem(action) {
            var _this3 = this;

            if (action.key === 'divider') {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Menu___default.a.Divider, { key: Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["uniqueId"])('divider_'), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 214
                    },
                    __self: this
                });
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Menu___default.a.Item,
                {
                    'data-test-name': '' + action.label.toLowerCase(),
                    key: action.key,
                    style: { whiteSpace: 'nowrap' },
                    to: action.link ? this.props.getEditUrl(this.props.object) : null,
                    onClick: action.link ? function () {} : function () {
                        return _this3.handleMenuItemClicked(action.key);
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 217
                    },
                    __self: this
                },
                action.label
            );
        }

        /**
         * Renders the element.
         * @returns {XML} Markup of the Actions column.
         */

    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                object = _props.object,
                idAttribute = _props.idAttribute,
                isDefaultObject = _props.isDefaultObject,
                getEditUrl = _props.getEditUrl,
                permissions = _props.permissions,
                otherProps = _objectWithoutProperties(_props, ['object', 'idAttribute', 'isDefaultObject', 'getEditUrl', 'permissions']);

            var _state = this.state,
                action = _state.action,
                ModalToOpen = _state.ModalToOpen,
                isModalOpen = _state.isModalOpen;

            this.setupActions();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                _extends({
                    style: {
                        textAlign: 'left'
                    }
                }, Object(__WEBPACK_IMPORTED_MODULE_8__splunk_base_lister_utils_TestSupport__["createTestHook"])(__filename), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 245
                    },
                    __self: this
                }),
                this.isReadOnly() ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { padding: '4px 12px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 252
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5__splunk_react_ui_Link___default.a,
                        { key: __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_VIEW.key, to: getEditUrl(object), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 253
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_7__splunk_base_lister_utils_Constants___default.a.ACTION_VIEW.label
                    )
                ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4__splunk_react_ui_Dropdown___default.a,
                    {
                        'date-test-name': 'actions-dropdown',
                        toggle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_Button___default.a, {
                            style: { float: 'left' },
                            label: gettext('Edit'),
                            appearance: 'pill',
                            isMenu: true,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 261
                            },
                            __self: this
                        }),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 258
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Menu___default.a,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 269
                            },
                            __self: this
                        },
                        this.ACTIONS_GROUP_1.map(function (_action) {
                            return _this4.renderMenuItem(_action);
                        }),
                        this.ACTIONS_GROUP_1.length > 0 && this.ACTIONS_GROUP_2.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__splunk_react_ui_Menu___default.a.Divider, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 272
                            },
                            __self: this
                        }),
                        this.ACTIONS_GROUP_2.map(function (_action) {
                            return _this4.renderMenuItem(_action);
                        })
                    )
                ),
                ModalToOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalToOpen, _extends({
                    object: object,
                    idAttribute: idAttribute,
                    isDefaultObject: isDefaultObject,
                    isBulk: false,
                    action: action,
                    permissions: permissions,
                    open: isModalOpen,
                    selectedRows: [],
                    handleRequestClose: this.handleRequestClose,
                    setShouldRefreshOnClose: this.setShouldRefreshOnClose
                }, Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["omit"])(otherProps, 'ModalChangeStatus', 'ModalClone', 'ModalDelete', 'ModalEdit', 'ModalEditTitleOrDescription', 'ModalEditPerms', 'customActions', 'customBulkActions'), {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 278
                    },
                    __self: this
                }))
            );
        }
    }]);

    return ColumnActions;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ColumnActions.propTypes = {
    object: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
    idAttribute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    isDefaultObject: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    handleRefreshListing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    getEditUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    customActions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    ModalClone: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    ModalDelete: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    ModalEdit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
    ModalEditTitleOrDescription: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    ModalEditPerms: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    permissions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
ColumnActions.defaultProps = {};


/* harmony default export */ __webpack_exports__["default"] = (ColumnActions);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src/table/columns/Actions.jsx"))

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

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Button");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Link");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/Constants");

/***/ })

/******/ });