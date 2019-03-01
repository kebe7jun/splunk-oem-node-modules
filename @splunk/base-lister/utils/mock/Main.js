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
/******/ 	return __webpack_require__(__webpack_require__.s = 148);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_Main__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_Main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_Main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_utils_mock_Data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_utils_mock_Data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_utils_mock_Data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MockMain = function (_Main) {
    _inherits(MockMain, _Main);

    function MockMain() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MockMain);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MockMain.__proto__ || Object.getPrototypeOf(MockMain)).call.apply(_ref, [this].concat(args))), _this), _this.handleTextFilterChange = function (e, _ref2) {
            var value = _ref2.value;

            // Reset page to page 1 and offset to 0.
            // Leave the filterString as is for the UI
            _this.setState({
                filterString: value,
                offset: 0,
                page: 1
            });

            _this.handleRefreshListing({
                filterString: value,
                offset: 0
            });
        }, _this.handleRefreshListing = function (newData) {
            // Apply pagination and offset
            if (newData) {
                if (newData.toDelete) {
                    // Handle delete
                    var newObjectFullList = void 0;
                    if (typeof newData.toDelete === 'string') {
                        // Handle single delete
                        newObjectFullList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(_this.state.objectsFullList, function (object) {
                            return object[_this.props.idAttribute] !== newData.toDelete;
                        });
                    } else {
                        // handle bulk delete
                        newObjectFullList = _this.state.objectsFullList;
                        Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"])(newData.toDelete, function (idToDelete) {
                            return newObjectFullList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(newObjectFullList, function (object) {
                                return object[_this.props.idAttribute] !== idToDelete;
                            });
                        });
                    }
                    if (_this.state.page > 1 && (typeof newData.toDelete !== 'string' && newData.toDelete.length >= _this.state.objects.length || typeof newData.toDelete === 'string' && _this.state.objects.length === 1)) {
                        _this.setState({
                            objectsFullList: newObjectFullList,
                            objects: _this.applyPagination(newObjectFullList, _this.state.offset - _this.state.countPerPage, _this.state.countPerPage),
                            page: _this.state.page - 1,
                            objectsCount: newObjectFullList.length
                        });
                    } else {
                        _this.setState({
                            objectsFullList: newObjectFullList,
                            objects: _this.applyPagination(newObjectFullList, _this.state.offset, _this.state.countPerPage),
                            objectsCount: newObjectFullList.length
                        });
                    }
                } else if (newData.objectsFullList) {
                    // Handle sorting
                    _this.setState({
                        objectsFullList: newData.objectsFullList,
                        objects: _this.applyPagination(newData.objectsFullList, _this.state.offset, _this.state.countPerPage),
                        objectsCount: newData.objectsFullList.length
                    });
                } else if (newData.toCreate) {
                    var newObjectList = _this.state.objectsFullList;
                    newObjectList.push(newData.toCreate);

                    // Apply titleSort
                    newObjectList = _this.applySorting(newObjectList);

                    // Save a full list before filtering
                    var newObjectListFull = newObjectList;

                    // Apply filter app
                    newObjectList = _this.applyFilterApp(newObjectList);

                    // Apply filter owner
                    newObjectList = _this.applyFilterOwner(newObjectList);

                    // Apply filter string
                    newObjectList = _this.applyFilterString(newObjectList);

                    _this.setState({
                        objectsFullList: newObjectListFull,
                        objects: _this.applyPagination(newObjectList, _this.state.offset, _this.state.countPerPage),
                        objectsCount: newObjectList.length
                    });
                } else if (newData.toEdit) {
                    var _newObjectList = _this.state.objectsFullList;

                    // Apply titleSort
                    _newObjectList = _this.applySorting(_newObjectList);

                    // Apply filter app
                    _newObjectList = _this.applyFilterApp(_newObjectList);

                    // Apply filter owner
                    _newObjectList = _this.applyFilterOwner(_newObjectList);

                    // Apply filter string
                    _newObjectList = _this.applyFilterString(_newObjectList);

                    _this.setState({
                        objectsFullList: _newObjectList,
                        objects: _this.applyPagination(_newObjectList, _this.state.offset, _this.state.countPerPage),
                        objectsCount: _newObjectList.length
                    });
                } else if (newData.filterOwner) {
                    // handleOwnerFilterChange
                    var _newObjectList2 = newData.filterOwner === 'all' ? _this.state.objectsFullList : Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(_this.state.objectsFullList, function (key) {
                        return key.acl.owner === newData.filterOwner;
                    });
                    // Apply filter app
                    _newObjectList2 = _this.applyFilterApp(_newObjectList2);

                    // Apply filter string
                    _newObjectList2 = _this.applyFilterString(_newObjectList2);

                    _this.setState({
                        objects: _this.applyPagination(_newObjectList2, _this.state.offset, _this.state.countPerPage),
                        objectsCount: _newObjectList2.length
                    });
                } else if (newData.filterApp) {
                    // handleAppFilterChange
                    var _newObjectList3 = newData.filterApp === 'all' ? _this.state.objectsFullList : Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(_this.state.objectsFullList, function (key) {
                        return key.acl.app === newData.filterApp;
                    });
                    // Apply filter owner
                    _newObjectList3 = _this.applyFilterOwner(_newObjectList3);

                    // Apply filter string
                    _newObjectList3 = _this.applyFilterString(_newObjectList3);

                    _this.setState({
                        objects: _this.applyPagination(_newObjectList3, _this.state.offset, _this.state.countPerPage),
                        objectsCount: _newObjectList3.length
                    });
                } else if (newData.filterString || newData.filterString === '') {
                    // handleTextFilterChange
                    var _newObjectList4 = newData.filterString === '' ? _this.state.objectsFullList : Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(_this.state.objectsFullList, function (key) {
                        return key.name.toLowerCase().indexOf(newData.filterString.toLowerCase()) !== -1;
                    });
                    // Apply filter app
                    _newObjectList4 = _this.applyFilterApp(_newObjectList4);

                    // Apply filter owner
                    _newObjectList4 = _this.applyFilterOwner(_newObjectList4);

                    _this.setState({
                        objects: _this.applyPagination(_newObjectList4, _this.state.offset, _this.state.countPerPage),
                        objectsCount: _newObjectList4.length
                    });
                } else if (newData.count) {
                    // Handle handleCountPerChange
                    _this.setState({
                        objects: _this.applyPagination(_this.state.objectsFullList, _this.state.offset, newData.count)
                    });
                } else if (typeof newData.offset === 'number') {
                    // Handle handlePaginatorChange
                    _this.setState({
                        objects: _this.applyPagination(_this.state.objectsFullList, newData.offset, _this.state.countPerPage)
                    });
                } else if (newData.newStatusForId) {
                    // Handle change status
                    // TODO fix this

                    var item = {
                        _key: _this.props.object[_this.props.idAttribute],
                        enabled: _this.props.object.enabled === 0 ? 1 : 0
                    };
                    var index = _this.state.objects.findIndex(function (object) {
                        return object[_this.props.idAttribute] === item[_this.props.idAttribute];
                    });
                    if (index === -1) {
                        _this.handleError(Object(__WEBPACK_IMPORTED_MODULE_4__splunk_ui_utils_format__["sprintf"])('Update item with key "%s" failed.', item[_this.props.idAttribute]));
                    } else {
                        _this.setState({
                            objects: [].concat(_toConsumableArray(_this.state.objects.slice(0, index)), [Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["merge"])({}, _this.state.objects[index], item)], _toConsumableArray(_this.state.objects.slice(index + 1)))
                        });
                    }

                    // LEGACY
                    var toUpdateInPartialListIndex = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"])(_this.state.objects, function (object) {
                        return object[_this.props.idAttribute] === newData.newStatusForId[0];
                    });
                    var object1 = _this.state.objects[toUpdateInPartialListIndex];
                    Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assignIn"])(object1, {
                        content: {
                            disabled: !_this.state.objects[toUpdateInPartialListIndex].content.disabled
                        }
                    });
                    var toUpdateInFullListIndex = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"])(_this.state.objectsFullList, function (object) {
                        return object[_this.props.idAttribute] === newData.newStatusForId[0];
                    });
                    var object2 = _this.state.objectsFullList[toUpdateInFullListIndex];
                    Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assignIn"])(object2, {
                        content: {
                            disabled: !_this.state.objectsFullList[toUpdateInFullListIndex].content.disabled
                        }
                    });
                    // this.setState({
                    //     // objectsFullList: newObjectFullList,
                    //     objects: newObjectList,
                    // });
                }
            }
        }, _this.handleColumnSort = function (e, _ref3) {
            var sortKey = _ref3.sortKey;

            var prevSortKey = _this.state.sortKey;
            var prevSortDir = prevSortKey === sortKey ? _this.state.sortDirection : 'none';
            var nextSortDir = prevSortDir === 'asc' ? 'desc' : 'asc';

            var objectsFullList = void 0;

            _this.setState({
                sortKey: sortKey,
                sortDirection: nextSortDir
            });

            if (sortKey === 'name') {
                objectsFullList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(_this.state.objectsFullList, function (o) {
                    return o[_this.props.nameAttribute].toLowerCase();
                });
            } else if (sortKey === 'owner') {
                objectsFullList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(_this.state.objectsFullList, function (o) {
                    return o.acl.owner;
                });
            } else if (sortKey === 'app') {
                objectsFullList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(_this.state.objectsFullList, function (o) {
                    return o.acl.app;
                });
            } else if (sortKey === 'sharing') {
                objectsFullList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(_this.state.objectsFullList, function (o) {
                    return o.acl.sharing;
                });
            }
            if (nextSortDir === 'desc') {
                objectsFullList = objectsFullList.reverse();
            }
            _this.handleRefreshListing({
                objectsFullList: objectsFullList
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MockMain, [{
        key: 'componentDidMount',


        /**
         * Override componentDidMount to add "Splunk Demo" to page title.
         * VersionLabel is not available here.
         */
        value: function componentDidMount() {
            document.title = this.props.objectNamePlural + ' | Base Lister Demo';
            this.setInitialState();
        }
    }, {
        key: 'setInitialState',
        value: function setInitialState() {
            var _this2 = this;

            var initialObjects = this.props.initialObjects;
            if (initialObjects.length > this.state.countPerPage) {
                this.setState({
                    objectsFullList: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(initialObjects, function (o) {
                        return o[_this2.props.nameAttribute].toLowerCase();
                    }),
                    objects: this.applyPagination(Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(initialObjects, function (o) {
                        return o[_this2.props.nameAttribute].toLowerCase();
                    }), this.state.offset, this.state.countPerPage),
                    objectsCount: initialObjects.length
                });
            } else {
                this.setState({
                    objectsFullList: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(initialObjects, function (o) {
                        return o[_this2.props.nameAttribute].toLowerCase();
                    }),
                    objects: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(initialObjects, function (o) {
                        return o[_this2.props.nameAttribute].toLowerCase();
                    }),
                    objectsCount: initialObjects.length
                });
            }
        }

        // Override in order to avoid fetchingCollection and fetchingCount to be set to true


        /**
         * Override handleRefreshListing because this demo doesn't use a back-end to process requests.
         * This components relies on a back-end that:
         * - returns a paginated collection of objects.
         * - handles sorting
         * optional:
         * - handles filtering (owner, app, regex) optional
         */

    }, {
        key: 'applyFilterApp',
        value: function applyFilterApp(list) {
            var _this3 = this;

            var filteredAppList = list;
            if (this.state.filterApp !== 'all') {
                filteredAppList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(filteredAppList, function (key) {
                    return key.acl.app === _this3.state.filterApp;
                });
            }
            return filteredAppList;
        }
    }, {
        key: 'applyFilterOwner',
        value: function applyFilterOwner(list) {
            var _this4 = this;

            var filteredAppList = list;
            if (this.state.filterOwner !== 'all') {
                filteredAppList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(filteredAppList, function (key) {
                    return key.acl.owner === _this4.state.filterOwner;
                });
            }
            return filteredAppList;
        }
    }, {
        key: 'applyFilterString',
        value: function applyFilterString(list) {
            var _this5 = this;

            var filteredAppList = list;
            if (this.state.filterString !== '') {
                filteredAppList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(filteredAppList, function (key) {
                    return key.name.toLowerCase().indexOf(_this5.state.filterString.toLowerCase()) !== -1;
                });
            }
            return filteredAppList;
        }
    }, {
        key: 'applySorting',
        value: function applySorting(list) {
            var _this6 = this;

            var sortedList = list;
            if (this.state.sortKey === 'name') {
                sortedList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(sortedList, function (o) {
                    return o[_this6.props.nameAttribute].toLowerCase();
                });
            } else if (this.state.sortKey === 'owner') {
                sortedList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(sortedList, function (o) {
                    return o.acl.owner;
                });
            } else if (this.state.sortKey === 'app') {
                sortedList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(sortedList, function (o) {
                    return o.acl.app;
                });
            } else if (this.state.sortKey === 'sharing') {
                sortedList = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"])(sortedList, function (o) {
                    return o.acl.sharing;
                });
            }
            if (this.state.sortDirection === 'desc') {
                sortedList = sortedList.reverse();
            }
            return sortedList;
        }

        // eslint-disable-next-line class-methods-use-this

    }, {
        key: 'applyPagination',
        value: function applyPagination(list, offset, count) {
            return list.slice(offset, offset + count);
        }

        /* override */

    }]);

    return MockMain;
}(__WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_Main___default.a);

MockMain.propTypes = _extends({}, __WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_Main___default.a.propTypes, {
    initialObjects: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array
});
MockMain.defaultProps = _extends({}, __WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_Main___default.a.defaultProps, {
    initialObjects: __WEBPACK_IMPORTED_MODULE_3__splunk_base_lister_utils_mock_Data__["mockObjects"]
});


/* harmony default export */ __webpack_exports__["default"] = (MockMain);

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/Main");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/format");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/Data");

/***/ })

/******/ });