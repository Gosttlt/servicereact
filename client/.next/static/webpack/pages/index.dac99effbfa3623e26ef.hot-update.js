"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/catalog/cotegoryItems/cotegoryItem.js":
/*!**************************************************************!*\
  !*** ./src/components/catalog/cotegoryItems/cotegoryItem.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CotegoryItem; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/catalog/s.module.css */ \"./src/components/catalog/s.module.css\");\n/* harmony import */ var components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/viktortursunkulov/Desktop/servicereact/client/src/components/catalog/cotegoryItems/cotegoryItem.js\";\n\n\n\n\nfunction CotegoryItem({\n  img,\n  name,\n  w,\n  h,\n  active,\n  keyName,\n  onClick\n}) {\n  const pathImg = __webpack_require__(\"./src/images/categories sync recursive ^\\\\.\\\\/.*$\")(`./${img}`);\n\n  const isActive = active[name] === keyName ? (components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : '';\n  console.log(name, 'name');\n  console.log(keyName, 'keyName');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    onClick: onClick,\n    className: (components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3___default().cotegoryItem) + ' ' + isActive,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      alt: name,\n      src: pathImg.default,\n      width: w,\n      height: h\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: (components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3___default().cotegoryName),\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n_c = CotegoryItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"CotegoryItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRhbG9nL2NvdGVnb3J5SXRlbXMvY290ZWdvcnlJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdlLFNBQVNHLFlBQVQsQ0FBc0I7QUFBRUMsRUFBQUEsR0FBRjtBQUFPQyxFQUFBQSxJQUFQO0FBQWFDLEVBQUFBLENBQWI7QUFBZ0JDLEVBQUFBLENBQWhCO0FBQW1CQyxFQUFBQSxNQUFuQjtBQUEyQkMsRUFBQUEsT0FBM0I7QUFBb0NDLEVBQUFBO0FBQXBDLENBQXRCLEVBQXFFO0FBQ2hGLFFBQU1DLE9BQU8sR0FBR0MseUVBQVMsS0FBb0JSLEdBQUksRUFBMUIsQ0FBdkI7O0FBQ0EsUUFBTVMsUUFBUSxHQUFHTCxNQUFNLENBQUNILElBQUQsQ0FBTixLQUFpQkksT0FBakIsR0FBMkJSLCtFQUEzQixHQUFzQyxFQUF2RDtBQUNBYSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsSUFBWixFQUFrQixNQUFsQjtBQUNBUyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBWixFQUFxQixTQUFyQjtBQUNBLHNCQUNJO0FBQUssV0FBTyxFQUFFQyxPQUFkO0FBQXVCLGFBQVMsRUFBRVQscUZBQUEsR0FBaUIsR0FBakIsR0FBdUJZLFFBQXpEO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVSLElBQVo7QUFBa0IsU0FBRyxFQUFFTSxPQUFPLENBQUNNLE9BQS9CO0FBQXdDLFdBQUssRUFBRVgsQ0FBL0M7QUFBa0QsWUFBTSxFQUFFQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBRU4scUZBQWhCO0FBQUEsZ0JBQWlDSTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDtLQVh1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2F0YWxvZy9jb3RlZ29yeUl0ZW1zL2NvdGVnb3J5SXRlbS5qcz9jZDc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzIGZyb20gJ2NvbXBvbmVudHMvY2F0YWxvZy9zLm1vZHVsZS5jc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3RlZ29yeUl0ZW0oeyBpbWcsIG5hbWUsIHcsIGgsIGFjdGl2ZSwga2V5TmFtZSwgb25DbGljayB9KSB7XG4gICAgY29uc3QgcGF0aEltZyA9IHJlcXVpcmUoYGltYWdlcy9jYXRlZ29yaWVzLyR7aW1nfWApXG4gICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVbbmFtZV0gPT09IGtleU5hbWUgPyBzLmFjdGl2ZSA6ICcnXG4gICAgY29uc29sZS5sb2cobmFtZSwgJ25hbWUnKTtcbiAgICBjb25zb2xlLmxvZyhrZXlOYW1lLCAna2V5TmFtZScpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtzLmNvdGVnb3J5SXRlbSArICcgJyArIGlzQWN0aXZlfT5cbiAgICAgICAgICAgIDxJbWFnZSBhbHQ9e25hbWV9IHNyYz17cGF0aEltZy5kZWZhdWx0fSB3aWR0aD17d30gaGVpZ2h0PXtofSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY290ZWdvcnlOYW1lfT57bmFtZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInMiLCJJbWFnZSIsIkNvdGVnb3J5SXRlbSIsImltZyIsIm5hbWUiLCJ3IiwiaCIsImFjdGl2ZSIsImtleU5hbWUiLCJvbkNsaWNrIiwicGF0aEltZyIsInJlcXVpcmUiLCJpc0FjdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJjb3RlZ29yeUl0ZW0iLCJkZWZhdWx0IiwiY290ZWdvcnlOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/catalog/cotegoryItems/cotegoryItem.js\n");

/***/ })

});