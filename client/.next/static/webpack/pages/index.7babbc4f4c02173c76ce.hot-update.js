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

/***/ "./src/components/catalog/tablePrice/tableItem.js":
/*!********************************************************!*\
  !*** ./src/components/catalog/tablePrice/tableItem.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TableItem; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _s_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./s.module.css */ \"./src/components/catalog/tablePrice/s.module.css\");\n/* harmony import */ var _s_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_s_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/viktortursunkulov/Desktop/servicereact/client/src/components/catalog/tablePrice/tableItem.js\";\n\n\n\nfunction TableItem({\n  service,\n  time,\n  price,\n  present,\n  oldPrice,\n  discountContent\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n    className: (_s_module_css__WEBPACK_IMPORTED_MODULE_2___default().tableRow),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n      children: [service, present === 'glass' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PresentGlass, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 41\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n      children: time\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), oldPrice ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OldPrice, {\n      oldPrice: oldPrice,\n      price: price,\n      discountContent: discountContent\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n      children: price\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}\n_c = TableItem;\n\nfunction OldPrice({\n  oldPrice,\n  price,\n  discountContent\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_s_module_css__WEBPACK_IMPORTED_MODULE_2___default().priceBlock),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: (_s_module_css__WEBPACK_IMPORTED_MODULE_2___default().newPrice),\n        children: price\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n        className: (_s_module_css__WEBPACK_IMPORTED_MODULE_2___default().oldPrice),\n        children: oldPrice\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_s_module_css__WEBPACK_IMPORTED_MODULE_2___default().discountContent),\n      children: discountContent\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = OldPrice;\n\nfunction PresentGlass() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n    className: (_s_module_css__WEBPACK_IMPORTED_MODULE_2___default().protectionGift),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      className: `material-icons ${(_s_module_css__WEBPACK_IMPORTED_MODULE_2___default().protectionIcon)}`,\n      children: \"gpp_good\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), \"+ \\u0437\\u0430\\u0449\\u0438\\u0442\\u0430 \\u0432 \\u043F\\u043E\\u0434\\u0430\\u0440\\u043E\\u043A\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n}\n\n_c3 = PresentGlass;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TableItem\");\n$RefreshReg$(_c2, \"OldPrice\");\n$RefreshReg$(_c3, \"PresentGlass\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRhbG9nL3RhYmxlUHJpY2UvdGFibGVJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0UsU0FBVCxDQUFtQjtBQUFFQyxFQUFBQSxPQUFGO0FBQVdDLEVBQUFBLElBQVg7QUFBaUJDLEVBQUFBLEtBQWpCO0FBQXdCQyxFQUFBQSxPQUF4QjtBQUFpQ0MsRUFBQUEsUUFBakM7QUFBMkNDLEVBQUFBO0FBQTNDLENBQW5CLEVBQWlGO0FBRTVGLHNCQUNJO0FBQUksYUFBUyxFQUFFUCwrREFBZjtBQUFBLDRCQUNJO0FBQUEsaUJBQUtFLE9BQUwsRUFDS0csT0FBTyxLQUFLLE9BQVosaUJBQXVCLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUEsZ0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLEVBS0tHLFFBQVEsZ0JBQ0wsOERBQUMsUUFBRDtBQUFVLGNBQVEsRUFBRUEsUUFBcEI7QUFBOEIsV0FBSyxFQUFFRixLQUFyQztBQUE0QyxxQkFBZSxFQUFFRztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZ0JBRUw7QUFBQSxnQkFBS0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDtLQWR1Qkg7O0FBZXhCLFNBQVNRLFFBQVQsQ0FBa0I7QUFBRUgsRUFBQUEsUUFBRjtBQUFZRixFQUFBQSxLQUFaO0FBQW1CRyxFQUFBQTtBQUFuQixDQUFsQixFQUF3RDtBQUVwRCxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFUCxpRUFBaEI7QUFBQSw4QkFDSTtBQUFNLGlCQUFTLEVBQUVBLCtEQUFqQjtBQUFBLGtCQUE4Qkk7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFFSiwrREFBakI7QUFBQSxrQkFBOEJNO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUssZUFBUyxFQUFFTixzRUFBaEI7QUFBQSxnQkFBb0NPO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztNQVpRRTs7QUFhVCxTQUFTRyxZQUFULEdBQXdCO0FBQ3BCLHNCQUNJO0FBQU0sYUFBUyxFQUFFWixxRUFBakI7QUFBQSw0QkFDSTtBQUFNLGVBQVMsRUFBRyxrQkFBaUJBLHFFQUFpQixFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O01BUlFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhdGFsb2cvdGFibGVQcmljZS90YWJsZUl0ZW0uanM/ZmEzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgcyBmcm9tICcuL3MubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVJdGVtKHsgc2VydmljZSwgdGltZSwgcHJpY2UsIHByZXNlbnQsIG9sZFByaWNlLCBkaXNjb3VudENvbnRlbnQgfSkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17cy50YWJsZVJvd30+XG4gICAgICAgICAgICA8bGk+e3NlcnZpY2V9XG4gICAgICAgICAgICAgICAge3ByZXNlbnQgPT09ICdnbGFzcycgJiYgPFByZXNlbnRHbGFzcyAvPn1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+e3RpbWV9PC9saT5cbiAgICAgICAgICAgIHtvbGRQcmljZSA/XG4gICAgICAgICAgICAgICAgPE9sZFByaWNlIG9sZFByaWNlPXtvbGRQcmljZX0gcHJpY2U9e3ByaWNlfSBkaXNjb3VudENvbnRlbnQ9e2Rpc2NvdW50Q29udGVudH0gLz4gOlxuICAgICAgICAgICAgICAgIDxsaT57cHJpY2V9PC9saT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5mdW5jdGlvbiBPbGRQcmljZSh7IG9sZFByaWNlLCBwcmljZSwgZGlzY291bnRDb250ZW50IH0pIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnByaWNlQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5uZXdQcmljZX0+e3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Mub2xkUHJpY2V9PntvbGRQcmljZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmRpc2NvdW50Q29udGVudH0+e2Rpc2NvdW50Q29udGVudH08L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICApXG5cbn1cbmZ1bmN0aW9uIFByZXNlbnRHbGFzcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MucHJvdGVjdGlvbkdpZnR9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbWF0ZXJpYWwtaWNvbnMgJHtzLnByb3RlY3Rpb25JY29ufWB9PmdwcF9nb29kPC9zcGFuPlxuICAgICAgICAgICAgKyDQt9Cw0YnQuNGC0LAg0LIg0L/QvtC00LDRgNC+0LpcbiAgICAgICAgPC9zcGFuPlxuICAgIClcblxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInMiLCJUYWJsZUl0ZW0iLCJzZXJ2aWNlIiwidGltZSIsInByaWNlIiwicHJlc2VudCIsIm9sZFByaWNlIiwiZGlzY291bnRDb250ZW50IiwidGFibGVSb3ciLCJPbGRQcmljZSIsInByaWNlQmxvY2siLCJuZXdQcmljZSIsIlByZXNlbnRHbGFzcyIsInByb3RlY3Rpb25HaWZ0IiwicHJvdGVjdGlvbkljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/catalog/tablePrice/tableItem.js\n");

/***/ })

});