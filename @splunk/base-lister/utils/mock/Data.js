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
/******/ 	return __webpack_require__(__webpack_require__.s = 147);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoAppLabel", function() { return demoAppLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userName", function() { return userName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharingGlobal", function() { return sharingGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharingPrivate", function() { return sharingPrivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharingApp", function() { return sharingApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectNamePlural", function() { return objectNamePlural; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectNameSingular", function() { return objectNameSingular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appsCollectionPath", function() { return appsCollectionPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectsCollectionPath", function() { return objectsCollectionPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersCollectionPath", function() { return usersCollectionPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerDescription", function() { return headerDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissions", function() { return permissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockApps", function() { return mockApps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockUsers", function() { return mockUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockObjects", function() { return mockObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockObjectsSplunk", function() { return mockObjectsSplunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockObjectsAlternative", function() { return mockObjectsAlternative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockAdditionalCreateObject", function() { return mockAdditionalCreateObject; });
/* harmony export (immutable) */ __webpack_exports__["getEditUrl"] = getEditUrl;
/* harmony export (immutable) */ __webpack_exports__["errorFormatter"] = errorFormatter;
/* harmony export (immutable) */ __webpack_exports__["getExpansionRow"] = getExpansionRow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_format__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Table__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_DefinitionList__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_DefinitionList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_DefinitionList__);
var _jsxFileName = '/Users/ahebert/workflow-components/packages/base-lister/src/utils/mock/Data.jsx';





var demoAppLabel = 'demo_app';
var searchAppLabel = 'search';
var ITSIAppLabel = 'ITSI';
var ESAppLabel = 'ES';
var nobodyName = 'nobody';
var adminName = 'admin';
var itoaAdminName = 'itoa_admin';
var userName = 'user';
var sharingGlobal = 'global';
var sharingPrivate = 'private';
var sharingApp = 'app';
var objectNamePlural = 'Objects';
var objectNameSingular = 'Object';
var appsCollectionPath = '/en-US/apps/dummy/end/point';
var objectsCollectionPath = '/en-US/objects/dummy/end/point';
var usersCollectionPath = '/en-US/users/dummy/end/point';
var headerDescription = 'Test page for listing objects';
var permissions = {
    read: true, // same as canRead
    write: true, // same as canEdit
    delete: true, // same as canDelete
    canCreate: true,
    canClone: true,
    canChangeStatus: true,
    canEditTitleAndDescription: true,
    canEditPermissions: false, // TODO to be supported
    canBulkChangeStatus: true,
    canBulkDelete: true,
    canBulkEditPermissions: true
};
var mockApps = [{
    name: searchAppLabel,
    content: {
        label: 'Search & Reporting'
    }
}, {
    name: demoAppLabel,
    content: {
        label: 'Base Lister demo app'
    }
}, {
    name: ITSIAppLabel,
    content: {
        label: 'ITSI app'
    }
}, {
    name: ESAppLabel,
    content: {
        label: 'ES app'
    }
}];
var mockUsers = [{
    name: adminName
}, {
    name: nobodyName
}, {
    name: itoaAdminName
}, {
    name: userName
}];
var mockObjects = [{
    id: 'annu',
    name: 'Annu',
    description: 'this is object annu',
    acl: {
        app: demoAppLabel,
        owner: nobodyName,
        sharing: sharingGlobal
    },
    content: {
        disabled: 0
    }
}, {
    id: 'rehan',
    name: 'Rehan',
    description: 'this is object rehan',
    acl: {
        app: demoAppLabel,
        owner: adminName,
        sharing: sharingApp
    },
    content: {
        disabled: 1
    }
}, {
    id: 'dhananjay',
    name: 'Dhananjay',
    description: 'this is object dhananjay',
    acl: {
        app: searchAppLabel,
        owner: adminName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 0
    }
}, {
    id: 'arnaud',
    name: 'Arnaud',
    acl: {
        app: ITSIAppLabel,
        owner: nobodyName,
        sharing: sharingApp
    },
    content: {
        disabled: 1
    }
}, {
    id: 'daniel',
    name: 'Daniel',
    acl: {
        app: ESAppLabel,
        owner: userName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 0
    }
}, {
    id: 'marc',
    name: 'Marc',
    acl: {
        app: ESAppLabel,
        owner: userName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 1
    }
}, {
    id: 'martin',
    name: 'Martin',
    description: 'this is object martin',
    acl: {
        app: ITSIAppLabel,
        owner: itoaAdminName,
        sharing: sharingApp
    },
    content: {
        disabled: 0
    }
}, {
    id: 'kunal',
    name: 'Kunal',
    acl: {
        app: ITSIAppLabel,
        owner: adminName,
        sharing: sharingGlobal
    },
    content: {
        disabled: 0
    }
}, {
    id: 'vivian',
    name: 'Vivian',
    description: 'this is object vivian',
    acl: {
        app: searchAppLabel,
        owner: adminName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 0
    }
}, {
    id: 'vilas',
    name: 'Vilas',
    acl: {
        app: searchAppLabel,
        owner: adminName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 0
    }
}, {
    id: 'elmar',
    name: 'Elmar',
    description: 'this is object elmar',
    acl: {
        app: demoAppLabel,
        owner: nobodyName,
        sharing: sharingGlobal
    },
    content: {
        disabled: 0
    }
}, {
    id: 'erik',
    name: 'Erik',
    description: 'this is object erik',
    acl: {
        app: demoAppLabel,
        owner: adminName,
        sharing: sharingApp
    },
    content: {
        disabled: 0
    }
}, {
    id: 'an_object_with_a_very_long_long_long_long_long_long_long_long_long_long_long_name',
    name: 'An object with a very long long long long long long long long long long long name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel ' + 'dignissim enim, eget elementum mauris. Integer id dictum odio. Etiam risus est, convallis ' + 'id dolor ac, facilisis ultrices nibh. Class aptent taciti sociosqu ad litora torquent per ' + 'conubia nostra, per inceptos himenaeos. Duis aliquet ex lacus, et fringilla orci semper a. ' + 'Aenean sem metus, gravida eu risus ut, tincidunt laoreet neque. Etiam egestas ut lacus ' + 'egestas varius. Quisque sagittis, nisi eu tempus tempus, nisi metus pulvinar ex, vel ' + 'scelerisque lorem nisi a turpis. Sed tellus leo, fermentum sit amet cursus ut, sagittis ' + 'sed nibh. Nam velit nulla, laoreet at pretium.',
    acl: {
        app: searchAppLabel,
        owner: adminName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 0
    }
}, {
    id: 'robb',
    name: 'Robb',
    description: 'this is object robb',
    acl: {
        app: ITSIAppLabel,
        owner: nobodyName,
        sharing: sharingApp
    },
    content: {
        disabled: 0
    }
}, {
    id: 'nick',
    name: 'Nick',
    acl: {
        app: demoAppLabel,
        owner: nobodyName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 1
    }
}, {
    id: 'lan',
    name: 'Lan',
    acl: {
        app: demoAppLabel,
        owner: adminName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 0
    }
}, {
    id: 'alok',
    name: 'Alok',
    description: 'this is object alok',
    acl: {
        app: demoAppLabel,
        owner: itoaAdminName,
        sharing: sharingApp
    },
    content: {
        disabled: 0
    }
}, {
    id: 'everett',
    name: 'Everett',
    acl: {
        app: ITSIAppLabel,
        owner: adminName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 0
    }
}, {
    id: 'james',
    name: 'James',
    description: 'this is object james',
    acl: {
        app: searchAppLabel,
        owner: adminName,
        sharing: sharingApp
    },
    content: {
        disabled: 0
    }
}, {
    id: 'holly',
    name: 'Holly',
    acl: {
        app: searchAppLabel,
        owner: adminName,
        sharing: sharingApp
    },
    content: {
        disabled: 1
    }
}, {
    id: 'sherry',
    name: 'Sherry',
    description: 'this is object sherry',
    acl: {
        app: demoAppLabel,
        owner: adminName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 1
    }
}, {
    id: 'yann',
    name: 'Yann',
    description: 'this is object yann',
    acl: {
        app: demoAppLabel,
        owner: adminName,
        sharing: sharingApp
    },
    content: {
        disabled: 1
    }
}, {
    id: 'jared',
    name: 'Jared',
    acl: {
        app: searchAppLabel,
        owner: itoaAdminName,
        sharing: sharingPrivate
    },
    content: {
        disabled: 1
    }
}, {
    id: 'ross',
    name: 'Ross',
    description: 'this is object ross',
    acl: {
        app: ITSIAppLabel,
        owner: itoaAdminName,
        sharing: sharingApp
    },
    content: {
        disabled: 1
    }
}];
var mockObjectsSplunk = {
    entry: mockObjects,
    paging: {
        total: mockObjects.length
    }
};
var mockObjectsAlternative = [{
    _key: '1213-wewew-12134131-qweqeqe',
    identifying_name: 'Franck',
    description: 'this is object franck',
    acl: {
        app: demoAppLabel,
        owner: nobodyName,
        sharing: sharingGlobal
    },
    enabled: 0
}, {
    _key: '23242-wrst-241311341-etwtew',
    identifying_name: 'Charlie',
    description: 'this is object charlie',
    acl: {
        app: demoAppLabel,
        owner: nobodyName,
        sharing: sharingGlobal
    },
    enabled: 1
}];
var mockAdditionalCreateObject = [{
    key: 'url',
    label: 'URL',
    url: 'mock/url'
}, {
    key: 'function',
    label: 'Function',
    handleMenuItemClicked: function handleMenuItemClicked() {
        // handleMenuItemClicked triggered!
    }
}];
function getEditUrl(object) {
    return 'object/' + object.id;
};
function errorFormatter(message, response) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__splunk_ui_utils_format__["sprintf"])('%s Details: %s', message, response);
}
function getExpansionRow(object, colSpan) {
    var objectKey = object[this.props.idAttribute];
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Table___default.a.Row,
        { key: 'expansion-row-' + objectKey, __source: {
                fileName: _jsxFileName,
                lineNumber: 439
            },
            __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__splunk_react_ui_Table___default.a.Cell,
            {
                key: 'expansion-cell-' + objectKey,
                style: { borderTop: 'none' },
                colSpan: colSpan,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 440
                },
                __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_DefinitionList___default.a,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 445
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_DefinitionList___default.a.Term,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 446
                        },
                        __self: this
                    },
                    'Description'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3__splunk_react_ui_DefinitionList___default.a.Description,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 447
                        },
                        __self: this
                    },
                    object.description
                )
            )
        )
    );
}

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Table");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@splunk/ui-utils/format");

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/DefinitionList");

/***/ })

/******/ });