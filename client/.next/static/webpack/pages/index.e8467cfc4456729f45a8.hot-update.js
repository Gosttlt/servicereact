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

/***/ "./src/components/cotegoryBlock/index.js":
/*!***********************************************!*\
  !*** ./src/components/cotegoryBlock/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CotegoryBlock; }\n/* harmony export */ });\n/* harmony import */ var components_shared_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/shared/container */ \"./src/components/shared/container/index.js\");\n/* harmony import */ var _cotegoryHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cotegoryHead */ \"./src/components/cotegoryBlock/cotegoryHead/index.js\");\n/* harmony import */ var _cotegoryItems_cotegoryItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cotegoryItems/cotegoryItems */ \"./src/components/cotegoryBlock/cotegoryItems/cotegoryItems.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/viktortursunkulov/Desktop/servicereact/client/src/components/cotegoryBlock/index.js\";\n\n\n\n\nconst rows = [{\n  _id: 3,\n  model: 'iphone5s',\n  service: 'Замена аккумулятора (Original)',\n  present: 'glass',\n  timeRepair: '15 мин',\n  price: '2 090 р.',\n  oldPrice: '4 090 р.',\n  discountContent: 'акция до 3 мая'\n}];\nconst company = [{\n  key: 'apple',\n  name: 'Apple',\n  img: 'apple/apple.jpeg'\n}];\nconst device = [{\n  key: 'iphone',\n  name: 'iPhone',\n  img: 'apple/iphone.jpg',\n  keyCompany: 'apple'\n}];\nconst models = [{\n  key: 'iphone5s',\n  name: 'iPhone 5s',\n  deviceKey: 'iphone',\n  typeDevice: 'mob'\n}];\nfunction CotegoryBlock({\n  activityWatcher,\n  setActive,\n  name,\n  wh\n}) {\n  console.log('render cotegory block');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components_shared_container__WEBPACK_IMPORTED_MODULE_0__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_cotegoryHead__WEBPACK_IMPORTED_MODULE_1__.default, {\n      head: \"\\u0412\\u044B\\u0431\\u0438\\u0440\\u0438\\u0442\\u0435 \\u0444\\u0438\\u0440\\u043C\\u0443\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_cotegoryItems_cotegoryItems__WEBPACK_IMPORTED_MODULE_2__.default, {\n      cotegory: company,\n      active: activityWatcher,\n      setActive: setActive,\n      wh: \"100\",\n      name: \"company\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, this);\n}\n_c = CotegoryBlock;\n\nvar _c;\n\n$RefreshReg$(_c, \"CotegoryBlock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb3RlZ29yeUJsb2NrL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1HLElBQUksR0FBRyxDQUNUO0FBQ0lDLEVBQUFBLEdBQUcsRUFBRSxDQURUO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxVQUZYO0FBR0lDLEVBQUFBLE9BQU8sRUFBRSxnQ0FIYjtBQUlJQyxFQUFBQSxPQUFPLEVBQUUsT0FKYjtBQUtJQyxFQUFBQSxVQUFVLEVBQUUsUUFMaEI7QUFNSUMsRUFBQUEsS0FBSyxFQUFFLFVBTlg7QUFPSUMsRUFBQUEsUUFBUSxFQUFFLFVBUGQ7QUFRSUMsRUFBQUEsZUFBZSxFQUFFO0FBUnJCLENBRFMsQ0FBYjtBQWFBLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0FBQUVDLEVBQUFBLEdBQUcsRUFBRSxPQUFQO0FBQWdCQyxFQUFBQSxJQUFJLEVBQUUsT0FBdEI7QUFBK0JDLEVBQUFBLEdBQUcsRUFBRTtBQUFwQyxDQUFELENBQWhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBRUgsRUFBQUEsR0FBRyxFQUFFLFFBQVA7QUFBaUJDLEVBQUFBLElBQUksRUFBRSxRQUF2QjtBQUFpQ0MsRUFBQUEsR0FBRyxFQUFFLGtCQUF0QztBQUEwREUsRUFBQUEsVUFBVSxFQUFFO0FBQXRFLENBQUQsQ0FBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUFDO0FBQUVMLEVBQUFBLEdBQUcsRUFBRSxVQUFQO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUUsV0FBekI7QUFBc0NLLEVBQUFBLFNBQVMsRUFBRSxRQUFqRDtBQUEyREMsRUFBQUEsVUFBVSxFQUFFO0FBQXZFLENBQUQsQ0FBZjtBQUVlLFNBQVNDLGFBQVQsQ0FBdUI7QUFBRUMsRUFBQUEsZUFBRjtBQUFtQkMsRUFBQUEsU0FBbkI7QUFBOEJULEVBQUFBLElBQTlCO0FBQW9DVSxFQUFBQTtBQUFwQyxDQUF2QixFQUFpRTtBQUM1RUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSxzQkFDSSw4REFBQyxnRUFBRDtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQWMsVUFBSSxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLGlFQUFEO0FBQ0ksY0FBUSxFQUFFZCxPQURkO0FBRUksWUFBTSxFQUFFVSxlQUZaO0FBR0ksZUFBUyxFQUFFQyxTQUhmO0FBSUksUUFBRSxFQUFDLEtBSlA7QUFLSSxVQUFJLEVBQUM7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDtLQWJ1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY290ZWdvcnlCbG9jay9pbmRleC5qcz9iZTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9zaGFyZWQvY29udGFpbmVyJztcbmltcG9ydCBDb3RlZ29yeUhlYWQgZnJvbSAnLi9jb3RlZ29yeUhlYWQnXG5pbXBvcnQgQ290ZWdvcnlJdGVtcyBmcm9tICcuL2NvdGVnb3J5SXRlbXMvY290ZWdvcnlJdGVtcydcblxuY29uc3Qgcm93cyA9IFtcbiAgICB7XG4gICAgICAgIF9pZDogMyxcbiAgICAgICAgbW9kZWw6ICdpcGhvbmU1cycsXG4gICAgICAgIHNlcnZpY2U6ICfQl9Cw0LzQtdC90LAg0LDQutC60YPQvNGD0LvRj9GC0L7RgNCwIChPcmlnaW5hbCknLFxuICAgICAgICBwcmVzZW50OiAnZ2xhc3MnLFxuICAgICAgICB0aW1lUmVwYWlyOiAnMTUg0LzQuNC9JyxcbiAgICAgICAgcHJpY2U6ICcyIDA5MCDRgC4nLFxuICAgICAgICBvbGRQcmljZTogJzQgMDkwINGALicsXG4gICAgICAgIGRpc2NvdW50Q29udGVudDogJ9Cw0LrRhtC40Y8g0LTQviAzINC80LDRjydcbiAgICB9XG5dXG5cbmNvbnN0IGNvbXBhbnkgPSBbeyBrZXk6ICdhcHBsZScsIG5hbWU6ICdBcHBsZScsIGltZzogJ2FwcGxlL2FwcGxlLmpwZWcnIH1dXG5jb25zdCBkZXZpY2UgPSBbeyBrZXk6ICdpcGhvbmUnLCBuYW1lOiAnaVBob25lJywgaW1nOiAnYXBwbGUvaXBob25lLmpwZycsIGtleUNvbXBhbnk6ICdhcHBsZScgfV1cbmNvbnN0IG1vZGVscyA9IFt7IGtleTogJ2lwaG9uZTVzJywgbmFtZTogJ2lQaG9uZSA1cycsIGRldmljZUtleTogJ2lwaG9uZScsIHR5cGVEZXZpY2U6ICdtb2InIH1dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdGVnb3J5QmxvY2soeyBhY3Rpdml0eVdhdGNoZXIsIHNldEFjdGl2ZSwgbmFtZSwgd2ggfSkge1xuICAgIGNvbnNvbGUubG9nKCdyZW5kZXIgY290ZWdvcnkgYmxvY2snKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPENvdGVnb3J5SGVhZCBoZWFkPVwi0JLRi9Cx0LjRgNC40YLQtSDRhNC40YDQvNGDXCIgLz5cbiAgICAgICAgICAgIDxDb3RlZ29yeUl0ZW1zXG4gICAgICAgICAgICAgICAgY290ZWdvcnk9e2NvbXBhbnl9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3Rpdml0eVdhdGNoZXJ9XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlPXtzZXRBY3RpdmV9XG4gICAgICAgICAgICAgICAgd2g9XCIxMDBcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55XCIgLz5cbiAgICAgICAgPC9Db250YWluZXIgPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJDb3RlZ29yeUhlYWQiLCJDb3RlZ29yeUl0ZW1zIiwicm93cyIsIl9pZCIsIm1vZGVsIiwic2VydmljZSIsInByZXNlbnQiLCJ0aW1lUmVwYWlyIiwicHJpY2UiLCJvbGRQcmljZSIsImRpc2NvdW50Q29udGVudCIsImNvbXBhbnkiLCJrZXkiLCJuYW1lIiwiaW1nIiwiZGV2aWNlIiwia2V5Q29tcGFueSIsIm1vZGVscyIsImRldmljZUtleSIsInR5cGVEZXZpY2UiLCJDb3RlZ29yeUJsb2NrIiwiYWN0aXZpdHlXYXRjaGVyIiwic2V0QWN0aXZlIiwid2giLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cotegoryBlock/index.js\n");

/***/ })

});