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

/***/ "./src/components/catalog/cotegoryItems/index.js":
/*!*******************************************************!*\
  !*** ./src/components/catalog/cotegoryItems/index.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CotegoryItems; }\n/* harmony export */ });\n/* harmony import */ var components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/catalog/s.module.css */ \"./src/components/catalog/s.module.css\");\n/* harmony import */ var components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_catalog_cotegoryItems_cotegoryItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/catalog/cotegoryItems/cotegoryItem */ \"./src/components/catalog/cotegoryItems/cotegoryItem.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/viktortursunkulov/Desktop/servicereact/client/src/components/catalog/cotegoryItems/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction CotegoryItems({\n  data,\n  active,\n  setActive,\n  wh,\n  cotegory\n}) {\n  _s();\n\n  const Item = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => data.map(r => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(components_catalog_cotegoryItems_cotegoryItem__WEBPACK_IMPORTED_MODULE_0__.default, {\n    onClick: () => {\n      setActive(r.key, cotegory);\n    },\n    active: active,\n    keyName: r.key,\n    img: r.img,\n    name: r.name,\n    cotegory: cotegory,\n    wh: wh\n  }, r.key, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 18\n  }, this)), [data, active, setActive, wh, cotegory]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (components_catalog_s_module_css__WEBPACK_IMPORTED_MODULE_3___default())[cotegory],\n    children: Item\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CotegoryItems, \"HhqMZad+K1g/de2htfY7zbl+/a4=\");\n\n_c = CotegoryItems;\n\nvar _c;\n\n$RefreshReg$(_c, \"CotegoryItems\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRhbG9nL2NvdGVnb3J5SXRlbXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNHLGFBQVQsQ0FBdUI7QUFBRUMsRUFBQUEsSUFBRjtBQUFRQyxFQUFBQSxNQUFSO0FBQWdCQyxFQUFBQSxTQUFoQjtBQUEyQkMsRUFBQUEsRUFBM0I7QUFBK0JDLEVBQUFBO0FBQS9CLENBQXZCLEVBQWtFO0FBQUE7O0FBRTdFLFFBQU1DLElBQUksR0FBR1AsOENBQU8sQ0FDaEIsTUFBTUUsSUFBSSxDQUFDTSxHQUFMLENBQ0ZDLENBQUMsaUJBQUksOERBQUMsa0ZBQUQ7QUFFRCxXQUFPLEVBQUUsTUFBTTtBQUFFTCxNQUFBQSxTQUFTLENBQUNLLENBQUMsQ0FBQ0MsR0FBSCxFQUFRSixRQUFSLENBQVQ7QUFBNEIsS0FGNUM7QUFHRCxVQUFNLEVBQUVILE1BSFA7QUFJRCxXQUFPLEVBQUVNLENBQUMsQ0FBQ0MsR0FKVjtBQUtELE9BQUcsRUFBRUQsQ0FBQyxDQUFDRSxHQUxOO0FBTUQsUUFBSSxFQUFFRixDQUFDLENBQUNHLElBTlA7QUFPRCxZQUFRLEVBQUVOLFFBUFQ7QUFRRCxNQUFFLEVBQUVEO0FBUkgsS0FDSUksQ0FBQyxDQUFDQyxHQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESCxDQURVLEVBVUssQ0FBQ1IsSUFBRCxFQUFPQyxNQUFQLEVBQWVDLFNBQWYsRUFBMEJDLEVBQTFCLEVBQThCQyxRQUE5QixDQVZMLENBQXBCO0FBWUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVSLHdFQUFDLENBQUNRLFFBQUQsQ0FBakI7QUFBQSxjQUNLQztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQW5CdUJOOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXRhbG9nL2NvdGVnb3J5SXRlbXMvaW5kZXguanM/NzllMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcyBmcm9tICdjb21wb25lbnRzL2NhdGFsb2cvcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IENvdGVnb3J5SXRlbSBmcm9tICdjb21wb25lbnRzL2NhdGFsb2cvY290ZWdvcnlJdGVtcy9jb3RlZ29yeUl0ZW0nXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ290ZWdvcnlJdGVtcyh7IGRhdGEsIGFjdGl2ZSwgc2V0QWN0aXZlLCB3aCwgY290ZWdvcnkgfSkge1xuXG4gICAgY29uc3QgSXRlbSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IGRhdGEubWFwKFxuICAgICAgICAgICAgciA9PiA8Q290ZWdvcnlJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtyLmtleX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldEFjdGl2ZShyLmtleSwgY290ZWdvcnkpIH19XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgICAgICAga2V5TmFtZT17ci5rZXl9XG4gICAgICAgICAgICAgICAgaW1nPXtyLmltZ31cbiAgICAgICAgICAgICAgICBuYW1lPXtyLm5hbWV9XG4gICAgICAgICAgICAgICAgY290ZWdvcnk9e2NvdGVnb3J5fVxuICAgICAgICAgICAgICAgIHdoPXt3aH0gLz4pLCBbZGF0YSwgYWN0aXZlLCBzZXRBY3RpdmUsIHdoLCBjb3RlZ29yeV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c1tjb3RlZ29yeV19PlxuICAgICAgICAgICAge0l0ZW19XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsicyIsIkNvdGVnb3J5SXRlbSIsInVzZU1lbW8iLCJDb3RlZ29yeUl0ZW1zIiwiZGF0YSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIndoIiwiY290ZWdvcnkiLCJJdGVtIiwibWFwIiwiciIsImtleSIsImltZyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/catalog/cotegoryItems/index.js\n");

/***/ })

});