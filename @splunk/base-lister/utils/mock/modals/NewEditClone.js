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
/******/ 	return __webpack_require__(__webpack_require__.s = 153);
/******/ })
/************************************************************************/
/******/ ({

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_mock_Data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_mock_Data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_mock_Data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_modals_NewEditClone__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_modals_NewEditClone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_modals_NewEditClone__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MockModalNewEditClone = function (_ModalNewEditClone) {
    _inherits(MockModalNewEditClone, _ModalNewEditClone);

    function MockModalNewEditClone() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MockModalNewEditClone);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MockModalNewEditClone.__proto__ || Object.getPrototypeOf(MockModalNewEditClone)).call.apply(_ref, [this].concat(args))), _this), _this.handleSave = function () {
            if (Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["find"])(_this.props.objects, function (object) {
                return object.name.toLowerCase() === _this.state.title.toLowerCase();
            })) {
                _this.setState(_this.handleError('Cannot create object with duplicate name.'));
            } else {
                var object = _this.props.object;
                var oldId = '';
                if (_this.props.action === 'new' || _this.props.action === 'clone') {
                    // If new or clone, create a new instance
                    object = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["create"])(_this.props.object);
                } else {
                    // If edit, save oldID
                    oldId = _this.props.object[_this.props.idAttribute];
                }
                object[_this.props.nameAttribute] = _this.state.title;
                object[_this.props.idAttribute] = _this.state.title.toLowerCase();
                if (_this.state.description) {
                    object.description = _this.state.description;
                }
                switch (_this.props.action) {
                    case 'new':
                        object.acl = {
                            app: __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_mock_Data__["demoAppLabel"],
                            owner: __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_mock_Data__["userName"],
                            sharing: __WEBPACK_IMPORTED_MODULE_1__splunk_base_lister_utils_mock_Data__["sharingGlobal"]
                        };
                        object.content = {
                            disabled: 0
                        };
                        _this.props.handleRefreshListing({
                            toCreate: object
                        });
                        _this.handleSuccess();
                        break;
                    case 'clone':
                        _this.props.handleRefreshListing({
                            toCreate: object
                        });
                        _this.handleSuccess();
                        break;
                    default:
                        // Edit and edit title or description
                        _this.props.handleRefreshListing({
                            toEdit: object,
                            oldId: oldId
                        });
                        _this.handleSuccess();
                        break;
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return MockModalNewEditClone;
}(__WEBPACK_IMPORTED_MODULE_2__splunk_base_lister_modals_NewEditClone___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MockModalNewEditClone);

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/modals/NewEditClone");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@splunk/base-lister/utils/mock/Data");

/***/ })

/******/ });