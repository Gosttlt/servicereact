"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/navBar/ItemNav.js":
/*!******************************************!*\
  !*** ./src/components/navBar/ItemNav.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemNav; }\n/* harmony export */ });\n/* harmony import */ var _s_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./s.module.css */ \"./src/components/navBar/s.module.css\");\n/* harmony import */ var _s_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_s_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/viktortursunkulov/Desktop/servicereact/client/src/components/navBar/ItemNav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction ItemNav({\n  url,\n  nameMenu,\n  classN = '',\n  metaName = ''\n}) {\n  _s();\n\n  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  console.log(router);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n      href: url,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n        className: (_s_module_css__WEBPACK_IMPORTED_MODULE_3___default().metaName),\n        children: [nameMenu && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          className: classN,\n          children: [\" \", nameMenu]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 34\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          children: metaName\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ItemNav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = ItemNav;\n\nvar _c;\n\n$RefreshReg$(_c, \"ItemNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZCYXIvSXRlbU5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLE9BQVQsQ0FBaUI7QUFBRUMsRUFBQUEsR0FBRjtBQUFPQyxFQUFBQSxRQUFQO0FBQWlCQyxFQUFBQSxNQUFNLEdBQUcsRUFBMUI7QUFBOEJDLEVBQUFBLFFBQVEsR0FBRztBQUF6QyxDQUFqQixFQUFnRTtBQUFBOztBQUMzRSxRQUFNQyxNQUFNLEdBQUdOLGtFQUFTLEVBQXhCO0FBQ0FPLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRUosR0FBWjtBQUFBLDZCQUNJO0FBQUcsaUJBQVMsRUFBRUosK0RBQWQ7QUFBQSxtQkFDS0ssUUFBUSxpQkFBSTtBQUFNLG1CQUFTLEVBQUVDLE1BQWpCO0FBQUEsMEJBQTJCRCxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGpCLGVBRUk7QUFBQSxvQkFDS0U7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0FmdUJKO1VBQ0xEOzs7S0FES0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2QmFyL0l0ZW1OYXYuanM/Yzc3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcyBmcm9tICcuL3MubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbU5hdih7IHVybCwgbmFtZU1lbnUsIGNsYXNzTiA9ICcnLCBtZXRhTmFtZSA9ICcnIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VybH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzLm1ldGFOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge25hbWVNZW51ICYmIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOfT4ge25hbWVNZW51fTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICApXG59XG4iXSwibmFtZXMiOlsicyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJJdGVtTmF2IiwidXJsIiwibmFtZU1lbnUiLCJjbGFzc04iLCJtZXRhTmFtZSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navBar/ItemNav.js\n");

/***/ })

});