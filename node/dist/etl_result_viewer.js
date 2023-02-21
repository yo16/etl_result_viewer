/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\r\\ncss\\r\\n*/\\r\\n\\r\\n#etl_result_datearea_rect {\\r\\n    fill: #EEE;\\r\\n    opacity: 70%;\\r\\n}\\r\\n#etl_result_job_name_rect {\\r\\n    fill: #EEE;\\r\\n    opacity: 70%;\\r\\n}\\r\\n#etl_result_result_rect {\\r\\n    fill: #CCC;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://etl_result_viewer/./src/style/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://etl_result_viewer/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://etl_result_viewer/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://etl_result_viewer/./src/style/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://etl_result_viewer/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://etl_result_viewer/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://etl_result_viewer/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://etl_result_viewer/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://etl_result_viewer/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://etl_result_viewer/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/background/draw_background.js":
/*!*******************************************!*\
  !*** ./src/background/draw_background.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("`use strict`\r\n/*\r\n背景を描画する\r\n数字等は描かない\r\n*/\r\nconst cv = __webpack_require__(/*! ../common_value */ \"./src/common_value.js\");\r\n\r\nfunction _draw_background(svg_top) {\r\n    let isDevelopment = \"development\" === 'development';\r\n\r\n    // background全体を描画\r\n    let svg_whole = svg_top\r\n        .append('svg')\r\n        .attr('id', cv.id.WHOLE_AREA)\r\n        .attr('x', cv.pos.whole_area.X)\r\n        .attr('y', cv.pos.whole_area.Y)\r\n        .attr('width', cv.pos.whole_area.WIDTH)\r\n        .attr('height', cv.pos.whole_area.HEIGHT)\r\n    ;\r\n    if (isDevelopment) {\r\n        svg_whole\r\n            .append('rect')\r\n            .attr('id', 'debug_whole_rect')\r\n            .attr('x', 0)\r\n            .attr('y', 0)\r\n            .attr('width', cv.pos.whole_area.WIDTH)\r\n            .attr('height', cv.pos.whole_area.HEIGHT)\r\n            .attr('stroke-width', 5)\r\n            .attr('stroke', '#333')\r\n            .attr('fill', 'none')\r\n        ;\r\n    }\r\n\r\n    // 日時エリア を描画\r\n    svg_date = svg_whole\r\n        .append('svg')\r\n        .attr('id', cv.id.DATETIME_AREA)\r\n        .attr('x', cv.pos.datetime_area.X)\r\n        .attr('y', cv.pos.datetime_area.Y)\r\n        .attr('width', cv.pos.datetime_area.WIDTH)\r\n        .attr('height', cv.pos.datetime_area.HEIGHT)\r\n    ;\r\n    svg_date\r\n        .append('rect')\r\n        .attr('id', cv.id.DATETIME_AREA_RECT)\r\n        .attr('x', 0)\r\n        .attr('y', 0)\r\n        .attr('width', cv.pos.datetime_area.WIDTH)\r\n        .attr('height', cv.pos.datetime_area.HEIGHT)\r\n    ;\r\n    if (isDevelopment) {\r\n        svg_date\r\n            .append('rect')\r\n            .attr('x', 0)\r\n            .attr('y', 0)\r\n            .attr('width', cv.pos.datetime_area.WIDTH)\r\n            .attr('height', cv.pos.datetime_area.HEIGHT)\r\n            .attr('stroke-width', 5)\r\n            .attr('stroke', '#f00')\r\n            .attr('fill', 'none')\r\n        ;\r\n    }\r\n\r\n    // ジョブ名エリア を描画\r\n    svg_jobname = svg_whole\r\n        .append('svg')\r\n        .attr('id', cv.id.JOBNAME_AREA)\r\n        .attr('x', cv.pos.jobname_area.X)\r\n        .attr('y', cv.pos.jobname_area.Y)\r\n        .attr('width', cv.pos.jobname_area.WIDTH)\r\n        .attr('height', cv.pos.jobname_area.HEIGHT)\r\n    ;\r\n    svg_jobname\r\n        .append('rect')\r\n        .attr('id', cv.id.JOBNAME_AREA_RECT)\r\n        .attr('x', 0)\r\n        .attr('y', 0)\r\n        .attr('width', cv.pos.jobname_area.WIDTH)\r\n        .attr('height', cv.pos.jobname_area.HEIGHT)\r\n    ;\r\n    if (isDevelopment) {\r\n        svg_jobname\r\n            .append('rect')\r\n            .attr('x', 0)\r\n            .attr('y', 0)\r\n            .attr('width', cv.pos.jobname_area.WIDTH)\r\n            .attr('height', cv.pos.jobname_area.HEIGHT)\r\n            .attr('stroke-width', 5)\r\n            .attr('stroke', '#0f0')\r\n            .attr('fill', 'none')\r\n        ;\r\n    }\r\n\r\n    // 結果エリア を描画\r\n    svg_result = svg_whole\r\n        .append('svg')\r\n        .attr('id', cv.id.RESULT_AREA)\r\n        .attr('x', cv.pos.result_area.X)\r\n        .attr('y', cv.pos.result_area.Y)\r\n        .attr('width', cv.pos.result_area.WIDTH)\r\n        .attr('height', cv.pos.result_area.HEIGHT)\r\n    ;\r\n    let filter = svg_result\r\n        .append('filter')\r\n        .attr('id', cv.id.RESULT_AREA_FILTER)\r\n    filter\r\n        .append('feOffset')\r\n        .attr('dx', 0)\r\n        .attr('dy', 0)\r\n    ;\r\n    filter\r\n        .append('feGaussianBlur')\r\n        .attr('stdDeviation', 8)\r\n        .attr('result', 'offset-blur')\r\n    ;\r\n    filter\r\n        .append('feComposite')\r\n        .attr('operator', 'out')\r\n        .attr('in', 'SourceGraphic')\r\n        .attr('in2', 'offset-blur')\r\n    ;\r\n    svg_result\r\n        .append('rect')\r\n        .attr('id', cv.id.RESULT_AREA_RECT)\r\n        .attr('x', 0)\r\n        .attr('y', 0)\r\n        .attr('width', cv.pos.result_area.WIDTH)\r\n        .attr('height', cv.pos.result_area.HEIGHT)\r\n        .attr('filter', 'url(#'+cv.id.RESULT_AREA_FILTER+')')\r\n;\r\n    if (isDevelopment) {\r\n        svg_result\r\n            .append('rect')\r\n            .attr('x', 0)\r\n            .attr('y', 0)\r\n            .attr('width', cv.pos.result_area.WIDTH)\r\n            .attr('height', cv.pos.result_area.HEIGHT)\r\n            .attr('stroke-width', 5)\r\n            .attr('stroke', '#00f')\r\n            .attr('fill', 'none')\r\n        ;\r\n    }\r\n\r\n    return svg_whole;\r\n}\r\n\r\nmodule.exports.draw_background = _draw_background\r\n\n\n//# sourceURL=webpack://etl_result_viewer/./src/background/draw_background.js?");

/***/ }),

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("`use strict`\r\n/*\r\n背景部分の描画\r\n*/\r\n\r\nconst draw_bg = __webpack_require__(/*! ./draw_background */ \"./src/background/draw_background.js\");\r\n\r\nmodule.exports = {\r\n    draw_background: draw_bg.draw_background\r\n}\r\n\n\n//# sourceURL=webpack://etl_result_viewer/./src/background/index.js?");

/***/ }),

/***/ "./src/common_value.js":
/*!*****************************!*\
  !*** ./src/common_value.js ***!
  \*****************************/
/***/ ((module) => {

eval("`use strict`\r\n/*\r\n共有値・固定値\r\n\r\n位置について\r\n    svg要素のx,yは絶対座標だが、\r\n    svg内のrectなどは、svgに対する相対座標。\r\n    （svg要素に座標値を持たない場合はrectの値が絶対座標になるが\r\n    　このシステムでは、トップを除きsvg要素に座標値を持つこととする）\r\n*/\r\n// 全体のsize\r\nconst svg_area_size = [700, 400];\r\n\r\n// whole_areaのpadding\r\nconst whole_padding = [10, 10, 10, 10];\r\n\r\n// whole_area\r\nconst whole_width = svg_area_size[0] - whole_padding[1] - whole_padding[3];\r\nconst whole_height = svg_area_size[1] - whole_padding[0] - whole_padding[2];\r\n\r\n// datetime_area\r\n// jobname_area\r\nconst jobname_width = 200;\r\nconst datetime_width = whole_width - jobname_width;\r\nconst datetime_height = 50;\r\nconst jobname_height = whole_height - datetime_height;\r\n\r\n\r\nmodule.exports = {\r\n    pos: {\r\n        svg: {\r\n            WIDTH: svg_area_size[0],\r\n            HEIGHT: svg_area_size[1],\r\n        },\r\n        whole_area: {\r\n            X: whole_padding[3],\r\n            Y: whole_padding[0],\r\n            WIDTH: whole_width,\r\n            HEIGHT: whole_height,\r\n        },\r\n        datetime_area: {\r\n            X: jobname_width,\r\n            Y: 0,\r\n            WIDTH: datetime_width,\r\n            HEIGHT: datetime_height,\r\n        },\r\n        jobname_area: {\r\n            X: 0,\r\n            Y: datetime_height,\r\n            WIDTH: jobname_width,\r\n            HEIGHT: jobname_height,\r\n        },\r\n        result_area: {\r\n            X: jobname_width,\r\n            Y: datetime_height,\r\n            WIDTH: datetime_width,\r\n            HEIGHT: jobname_height,\r\n        },\r\n    },\r\n    id: {\r\n        WHOLE_AREA: \"etl_result_wholearea\",\r\n        DATETIME_AREA: \"etl_result_datearea\",\r\n        DATETIME_AREA_RECT: \"etl_result_datearea_rect\",\r\n        JOBNAME_AREA: \"etl_result_jobname\",\r\n        JOBNAME_AREA_RECT: \"etl_result_job_name_rect\",\r\n        RESULT_AREA: \"etl_result_result\",\r\n        RESULT_AREA_RECT: \"etl_result_result_rect\",\r\n        RESULT_AREA_FILTER: \"etl_result_result_filter\",\r\n    },\r\n    exec_status: {\r\n        'SUCCESS': 0,\r\n        'RUNNING': 1,\r\n        'ERROR': 9,\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://etl_result_viewer/./src/common_value.js?");

/***/ }),

/***/ "./src/data_parser/index.js":
/*!**********************************!*\
  !*** ./src/data_parser/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("`use strict`\r\n/*\r\nデータをパース\r\n*/\r\nconst sr = __webpack_require__(/*! ./structured_results */ \"./src/data_parser/structured_results.js\");\r\n\r\nfunction check_and_parse_main(data) {\r\n    // チェックと構造化\r\n    let results = check_and_classify_data(data)\r\n\r\n    // 情報の抽出\r\n    return parse_data(results);\r\n}\r\n\r\n// dataの内容を確認しながらクラス化する\r\nfunction check_and_classify_data(data) {\r\n    let results = new sr.Results();\r\n    for (let i=0; i<data.length; i++) {\r\n        results.add(data[i]);\r\n    }\r\n    return results;\r\n}\r\n\r\n// パース\r\nfunction parse_data(structured_data) {\r\n    // 下記を作って返す\r\n    // resultsは、親子関係をツリー上に並べた順にする\r\n    let ret_data = {\r\n        results: [\r\n            /*\r\n            {\r\n                id,\r\n                title,\r\n                status_str,     // [ SUCCESS | RUNNING | ERROR ]\r\n                status,         // [ 0(S) | 1(R) | 9(E) ]\r\n                parent_id,      // null if top job\r\n                start_dt,\r\n                start_dt_str,\r\n                end_dt,\r\n                end_dt_str,\r\n                depth,          // 0 if top job\r\n                children_num\r\n            }*/\r\n        ],\r\n        scale: {\r\n            min_dt: null,\r\n            max_dt: null,\r\n        },\r\n    };\r\n\r\n    // result部\r\n    function *get_ret_data(id) {\r\n        // 自分\r\n        yield structured_data.result(id);\r\n\r\n        // 子\r\n        let gen_child_id = structured_data.children_ids_itr(id);\r\n        let child_id = gen_child_id.next();\r\n        while (!child_id.done) {\r\n            yield get_ret_data(child_id.value);\r\n    \r\n            child_id = gen_child_id.next();\r\n        }\r\n    }\r\n    let gen_top_id = structured_data.top_ids_iter();\r\n    let top_id = gen_top_id.next();\r\n    while (!top_id.done) {\r\n        let gen_top_id_sub = get_ret_data(top_id.value);\r\n        let top_id_sub = gen_top_id_sub.next();\r\n        while (!top_id_sub.done) {\r\n            ret_data.results.push(\r\n                get_ret_data(top_id_sub.value)\r\n            );\r\n            top_id_sub = gen_top_id_sub.next();\r\n        }\r\n\r\n        top_id = gen_top_id.next();\r\n    }\r\n\r\n    // scale部\r\n    ret_data.scale.min_dt = structured_data.min_dt;\r\n    ret_data.scale.max_dt = structured_data.max_dt;\r\n\r\n    return ret_data;\r\n}\r\n\r\n\r\nmodule.exports = {\r\n    parse: check_and_parse_main\r\n}\r\n\n\n//# sourceURL=webpack://etl_result_viewer/./src/data_parser/index.js?");

/***/ }),

/***/ "./src/data_parser/structured_results.js":
/*!***********************************************!*\
  !*** ./src/data_parser/structured_results.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("`use strict`\r\n/*\r\n構造化した処理結果\r\n*/\r\nconst cv = __webpack_require__(/*! ../common_value */ \"./src/common_value.js\");\r\n\r\n// 処理結果群\r\nclass StructuredResults {\r\n    constructor() {\r\n        this.results = [];\r\n        this.id_map = {};   // idからindexを得るためのマップ\r\n    }\r\n\r\n    add(d) {\r\n        let rslt = new OneResult(d);\r\n        this.id_map[rslt.id] = this.results.length;\r\n\r\n        // 自分を登録\r\n        this.results.push(rslt);\r\n\r\n        // 親要素を更新、親要素の情報から自分も更新\r\n        if (rslt.parent_id) {\r\n            // parent_idが登録されてなかったらエラー\r\n            // 順番的に後にあるかもしれないけど、エラーにする！\r\n            if (!Object.keys(this.id_map).includes(rslt.parent_id)) {\r\n                throw new Error('Parent('+rslt.parent_id+') is not registered');\r\n            }\r\n            // 親に自分を登録\r\n            let parent_index = this.id_map[rslt.parent_id];\r\n            this.results[parent_index].add_child(rslt.id);\r\n            // depthを設定\r\n            this.depth = this.results[parent_index].depth + 1;\r\n        } else {\r\n            // depthを設定\r\n            this.depth = 0;\r\n        }\r\n    }\r\n\r\n    // idからresultを返す\r\n    result(id) {\r\n        return this.results[this.id_map[id]];\r\n    }\r\n\r\n    // 開始時刻のminを取得して返す\r\n    get min_dt() {\r\n        let cur_min_dt = this.results[0].start_dt;\r\n        for (let i=1; i<this.results.length; i++) {\r\n            if (this.results[i].start_dt < cur_min_dt) {\r\n                cur_min_dt = this.results[i].start_dt;\r\n            }\r\n        }\r\n        return cur_min_dt;\r\n    }\r\n\r\n    // 開始時刻、終了時刻のmaxを取得して返す\r\n    // 終了していないジョブもありうるため、開始時刻も見る\r\n    get max_dt() {\r\n        let cur_max_dt = this.results[0].start_dt;\r\n        for (let i=0; i<this.results.length; i++) {\r\n            if (cur_max_dt < this.results[i].start_dt) {\r\n                cur_max_dt = this.results[i].start_dt;\r\n            }\r\n            if (\r\n                (this.results[i].end_dt) &&\r\n                (cur_max_dt < this.results[i].end_dt)\r\n            ) {\r\n                cur_max_dt = this.results[i].end_dt;\r\n            }\r\n        }\r\n        return cur_max_dt;\r\n    }\r\n\r\n    // top_idのイテレータ\r\n    *top_ids_iter() {\r\n        for (let i=0; i<this.results.length; i++) {\r\n            // parent_idがnullのidがtop_id\r\n            if (!this.results[i].parent_id) {\r\n                yield this.results[i].id;\r\n            }\r\n        }\r\n    }\r\n\r\n    // 子idのイテレータ\r\n    *children_ids_itr(parent_id) {\r\n        for (let i=0; i<this.results[this.id_map[parent_id]].children.length; i++) {\r\n            yield this.results[this.id_map[parent_id]].children[i];\r\n        }\r\n    }\r\n}\r\n\r\n// １つの処理結果\r\nclass OneResult {\r\n    constructor(input_result) {\r\n        // id\r\n        this.id = input_result.id;\r\n        // 親id\r\n        this.parent_id = input_result.parent_id || null;\r\n        // タイトル\r\n        this.title = input_result.title || null;\r\n        // 開始時刻\r\n        this.start_dt_str = input_result.start;\r\n        // 終了時刻\r\n        this.end_dt_str = input_result.end || null;\r\n        // ステータス\r\n        this.status_str = input_result.status;\r\n        // depth\r\n        this.depth = -1;    // まだ計算していない\r\n        // 子id群\r\n        this.children = [];\r\n\r\n        // 必須項目が未登録\r\n        if (\r\n            (this.id === undefined) ||\r\n            (this.start_dt_str === undefined) ||\r\n            (this.status_str === undefined)\r\n        ) {\r\n            throw new Error('Mandatory item not entered.');\r\n        }\r\n        // statusが想定外\r\n        if (!Object.keys(cv.exec_status).includes(this.status_str)) {\r\n            throw new Error('Invalid Status value.');\r\n        }\r\n        \r\n        // 変換\r\n        this.status = cv.exec_status[this.status_str];\r\n        this.start_dt = new Date(this.start_dt_str);\r\n        this.end_dt = this.end_dt_str ? new Date(this.end_dt_str) : null;\r\n    }\r\n\r\n    add_child(child_id) {\r\n        this.children.push(child_id);\r\n    }\r\n\r\n    get children_num() {\r\n        return this.children.length;\r\n    }\r\n\r\n    // 自分自身をほしい形のObject型にして返す\r\n    to_object() {\r\n        return {\r\n            id: this.id,\r\n            title: this.title,\r\n            status_str: this.status_str,\r\n            status: this.status,\r\n            parent_id: this.parent_id,\r\n            start_dt: this.start_dt,\r\n            start_dt_str: this.start_dt_str,\r\n            end_dt: this.end_dt,\r\n            end_dt_str: this.end_dt_str,\r\n            depth: this.depth,\r\n            chidlren_num: this.children_num,\r\n        };\r\n    }\r\n}\r\n\r\nmodule.exports.Results = StructuredResults;\r\n\n\n//# sourceURL=webpack://etl_result_viewer/./src/data_parser/structured_results.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("`use strict`\r\n/*\r\netl_result_viewer\r\nCopyright (c) 2023 yo16\r\nReleased under the MIT license.\r\n*/\r\nconst style = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\r\n\r\n\r\nconst parser = __webpack_require__(/*! ./data_parser */ \"./src/data_parser/index.js\");\r\nconst bg = __webpack_require__(/*! ./background */ \"./src/background/index.js\");\r\nconst cv = __webpack_require__(/*! ./common_value */ \"./src/common_value.js\");\r\nconst data_parser = __webpack_require__(/*! ./data_parser */ \"./src/data_parser/index.js\");\r\n\r\n\r\n// 描画メイン\r\nfunction main(dom_id, data) {\r\n    console.log({dom_id});\r\n    console.log({data});\r\n\r\n    // パース\r\n    let result_objs = data_parser.parse(data)\r\n    console.log({result_objs})\r\n\r\n    // 背景を描画\r\n    const svg = d3.select(dom_id)\r\n        .append('svg')\r\n        .attr('width', cv.pos.svg.WIDTH)\r\n        .attr('height', cv.pos.svg.HEIGHT)\r\n    ;\r\n    bg.draw_background(svg);\r\n\r\n    // エンティティを描画\r\n\r\n}\r\n\r\nmodule.exports.etl_result_viewer = main;\r\n\r\n\n\n//# sourceURL=webpack://etl_result_viewer/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});