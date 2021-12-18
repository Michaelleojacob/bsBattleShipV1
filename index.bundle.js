/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/manualGameLoop/manualGameLoop.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/manualGameLoop/manualGameLoop.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\n.modal {\n  display: flex; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0); /* Black w/ opacity */\n  justify-content: center;\n  align-content: center;\n}\n\n/* Modal Content/Box */\n.mModalContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n\n.highlighted {\n  background-color: lime;\n}\n", "",{"version":3,"sources":["webpack://./src/manualGameLoop/manualGameLoop.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,kCAAkC,EAAE,qBAAqB;EACzD,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["/* The Modal (background) */\n.modal {\n  display: flex; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0); /* Black w/ opacity */\n  justify-content: center;\n  align-content: center;\n}\n\n/* Modal Content/Box */\n.mModalContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n\n.highlighted {\n  background-color: lime;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/startGameModal/startGameModal.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/startGameModal/startGameModal.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\n.modal {\n  display: flex; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  justify-content: center;\n  align-content: center;\n}\n\n/* Modal Content/Box */\n.startModalContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n\n#placeOwnShips {\n  background-color: lightgreen;\n}\n#placeShipsRandomly {\n  background-color: yellowgreen;\n}\n\n.startModalOptions {\n  height: 10rem;\n  width: 10rem;\n  border-radius: 6px;\n}\n", "",{"version":3,"sources":["webpack://./src/startGameModal/startGameModal.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;EAC3D,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,4BAA4B;AAC9B;AACA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["/* The Modal (background) */\n.modal {\n  display: flex; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  justify-content: center;\n  align-content: center;\n}\n\n/* Modal Content/Box */\n.startModalContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n\n#placeOwnShips {\n  background-color: lightgreen;\n}\n#placeShipsRandomly {\n  background-color: yellowgreen;\n}\n\n.startModalOptions {\n  height: 10rem;\n  width: 10rem;\n  border-radius: 6px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_gameboards_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/gameboards.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboards.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_startGameModal_startGameModal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./startGameModal/startGameModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/startGameModal/startGameModal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_manualGameLoop_manualGameLoop_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./manualGameLoop/manualGameLoop.css */ "./node_modules/css-loader/dist/cjs.js!./src/manualGameLoop/manualGameLoop.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_gameboards_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_startGameModal_startGameModal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_manualGameLoop_manualGameLoop_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboards.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboards.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#playerGridArea,\n#botGridArea,\n.grid {\n  display: grid;\n  width: 300px;\n  height: 300px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  border: 1px solid black;\n  margin-bottom: 10px;\n}\n\n.cell {\n  border: 1px solid rgb(34, 34, 34);\n}\n\n.pbuffer {\n  background: #ced4da;\n}\n\n.pcarrier,\n.pbattleship,\n.pdestroyer,\n.psubmarine,\n.ppatrol {\n  background: rgb(68, 68, 68);\n}\n\n.phit,\n.hit {\n  background: rgb(255, 133, 133);\n}\n\n.pmiss,\n.miss {\n  background: rgb(133, 255, 179);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboards.css"],"names":[],"mappings":"AAAA;;;EAGE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,sCAAsC;EACtC,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;;EAKE,2BAA2B;AAC7B;;AAEA;;EAEE,8BAA8B;AAChC;;AAEA;;EAEE,8BAA8B;AAChC","sourcesContent":["#playerGridArea,\n#botGridArea,\n.grid {\n  display: grid;\n  width: 300px;\n  height: 300px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  border: 1px solid black;\n  margin-bottom: 10px;\n}\n\n.cell {\n  border: 1px solid rgb(34, 34, 34);\n}\n\n.pbuffer {\n  background: #ced4da;\n}\n\n.pcarrier,\n.pbattleship,\n.pdestroyer,\n.psubmarine,\n.ppatrol {\n  background: rgb(68, 68, 68);\n}\n\n.phit,\n.hit {\n  background: rgb(255, 133, 133);\n}\n\n.pmiss,\n.miss {\n  background: rgb(133, 255, 179);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cacheDom/cacheDom.js":
/*!**********************************!*\
  !*** ./src/cacheDom/cacheDom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cacheDom() {
  const container = document.querySelector('#container');
  const nonModalContent = container.querySelector('#nonModalContent');
  const header = nonModalContent.querySelector('#header');
  const boards = nonModalContent.querySelector('#boards');
  const playerGridArea = boards.querySelector('#playerGridArea');
  const botGridArea = boards.querySelector('#botGridArea');
  const footer = nonModalContent.querySelector('#footer');

  return {
    container,
    nonModalContent,
    header,
    boards,
    playerGridArea,
    botGridArea,
    footer,
  };
}

const cached = cacheDom();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cached);


/***/ }),

/***/ "./src/domComponents/makeboards.js":
/*!*****************************************!*\
  !*** ./src/domComponents/makeboards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderBoard)
/* harmony export */ });
/* harmony import */ var _domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domCreator/domCreator */ "./src/domCreator/domCreator.js");
/* harmony import */ var _removeAllChildren_removeAllChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../removeAllChildren/removeAllChildren */ "./src/removeAllChildren/removeAllChildren.js");



function renderBoard(obj, parent, player = false) {
  (0,_removeAllChildren_removeAllChildren__WEBPACK_IMPORTED_MODULE_1__["default"])(parent);
  const entries = Object.entries(obj);
  entries.forEach(([key, value]) => {
    if (player) {
      const element = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({ classes: [key, `p${value}`, 'cell'] });
      parent.appendChild(element);
    }
    if (!player) {
      if (value === 'hit' || value === 'miss') {
        const element = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({ classes: [key, `${value}`, 'cell'] });
        parent.appendChild(element);
      } else {
        const element = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({ classes: [key, 'cell'] });
        parent.appendChild(element);
      }
    }
  });
}


/***/ }),

/***/ "./src/domCreator/domCreator.js":
/*!**************************************!*\
  !*** ./src/domCreator/domCreator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dom)
/* harmony export */ });
function dom(obj) {
  const element = document.createElement(obj.tag || 'div');
  Object.keys(obj).map((prop) => {
    switch (prop) {
      case 'tag':
        break;
      case 'text':
        element.textContent = obj.text;
        break;
      case 'classes':
        if (!Array.isArray(obj.classes)) return console.log('classes must be an array');
        obj.classes.map((c) => element.classList.add(c));
        break;
      case 'attributes':
        if (!Array.isArray(obj.attributes)) return console.log(`attributes must be an array`);
        obj.attributes.map((attr) => element.setAttribute(Object.keys(attr), Object.values(attr)));
        break;
      case 'events':
        if (!Array.isArray(obj.events)) return console.log(`events must be an array`);
        obj.events.map(({ type, handler }) => element.addEventListener(type, handler));
        break;
      case 'children':
        if (!Array.isArray(obj.children)) return console.log(`children must be an array`);
        obj.children.map((child) => element.appendChild(child));
        break;
      default:
    }
    return element;
  });
  return element;
}


/***/ }),

/***/ "./src/gameboardFac/boardObj.js":
/*!**************************************!*\
  !*** ./src/gameboardFac/boardObj.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "letters": () => (/* binding */ letters),
/* harmony export */   "numbers": () => (/* binding */ numbers)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  A0: 'empty',
  B0: 'empty',
  C0: 'empty',
  D0: 'empty',
  E0: 'empty',
  F0: 'empty',
  G0: 'empty',
  H0: 'empty',
  I0: 'empty',
  J0: 'empty',
  A1: 'empty',
  B1: 'empty',
  C1: 'empty',
  D1: 'empty',
  E1: 'empty',
  F1: 'empty',
  G1: 'empty',
  H1: 'empty',
  I1: 'empty',
  J1: 'empty',
  A2: 'empty',
  B2: 'empty',
  C2: 'empty',
  D2: 'empty',
  E2: 'empty',
  F2: 'empty',
  G2: 'empty',
  H2: 'empty',
  I2: 'empty',
  J2: 'empty',
  A3: 'empty',
  B3: 'empty',
  C3: 'empty',
  D3: 'empty',
  E3: 'empty',
  F3: 'empty',
  G3: 'empty',
  H3: 'empty',
  I3: 'empty',
  J3: 'empty',
  A4: 'empty',
  B4: 'empty',
  C4: 'empty',
  D4: 'empty',
  E4: 'empty',
  F4: 'empty',
  G4: 'empty',
  H4: 'empty',
  I4: 'empty',
  J4: 'empty',
  A5: 'empty',
  B5: 'empty',
  C5: 'empty',
  D5: 'empty',
  E5: 'empty',
  F5: 'empty',
  G5: 'empty',
  H5: 'empty',
  I5: 'empty',
  J5: 'empty',
  A6: 'empty',
  B6: 'empty',
  C6: 'empty',
  D6: 'empty',
  E6: 'empty',
  F6: 'empty',
  G6: 'empty',
  H6: 'empty',
  I6: 'empty',
  J6: 'empty',
  A7: 'empty',
  B7: 'empty',
  C7: 'empty',
  D7: 'empty',
  E7: 'empty',
  F7: 'empty',
  G7: 'empty',
  H7: 'empty',
  I7: 'empty',
  J7: 'empty',
  A8: 'empty',
  B8: 'empty',
  C8: 'empty',
  D8: 'empty',
  E8: 'empty',
  F8: 'empty',
  G8: 'empty',
  H8: 'empty',
  I8: 'empty',
  J8: 'empty',
  A9: 'empty',
  B9: 'empty',
  C9: 'empty',
  D9: 'empty',
  E9: 'empty',
  F9: 'empty',
  G9: 'empty',
  H9: 'empty',
  I9: 'empty',
  J9: 'empty',
});

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




/***/ }),

/***/ "./src/gameboardFac/buffer.js":
/*!************************************!*\
  !*** ./src/gameboardFac/buffer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function bufferSingleCoord(cell) {
  const [letter, numIsString] = cell.split('');
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const num = parseInt(numIsString, 10);
  const arrOfLetters = [];
  const arrOfNums = [];

  function UpperAndLowerLetters() {
    if (letters.includes(letters[letters.indexOf(letter) - 1])) {
      arrOfLetters.push(letters[letters.indexOf(letter) - 1]);
    }
    arrOfLetters.push(letter);
    if (letters.includes(letters[letters.indexOf(letter) + 1])) {
      arrOfLetters.push(letters[letters.indexOf(letter) + 1]);
    }
  }
  function UpperAndLowerNumbers() {
    if (nums.includes(nums[nums.indexOf(num) - 1])) {
      arrOfNums.push(nums[nums.indexOf(num) - 1]);
    }
    arrOfNums.push(num);
    if (nums.includes(nums[nums.indexOf(num) + 1])) {
      arrOfNums.push(nums[nums.indexOf(num) + 1]);
    }
  }

  UpperAndLowerLetters();
  UpperAndLowerNumbers();

  function combineLettersAndNumbers() {
    const newArr = [];
    arrOfLetters.forEach((eachletter) => {
      arrOfNums.forEach((eachnum) => {
        newArr.push(eachletter + eachnum);
      });
    });
    return newArr;
  }
  const bufferCell = combineLettersAndNumbers();
  const removeDuplicatesfromBufferCell = [...new Set(bufferCell)];
  return removeDuplicatesfromBufferCell;
}

function bufferAllCoords(arr) {
  const newArr = [];
  arr.forEach((item) => {
    const bufferEachCell = bufferSingleCoord(item);
    newArr.push(...bufferEachCell);
  });
  const allCellsToBuffer = [...new Set(newArr)];
  return allCellsToBuffer;
}

function getBufferZoneArray(coords) {
  const bufferMinusShip = [
    ...new Set(bufferAllCoords(coords).filter((item) => !coords.includes(item))),
  ];
  return bufferMinusShip;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBufferZoneArray);


/***/ }),

/***/ "./src/gameboardFac/checks.js":
/*!************************************!*\
  !*** ./src/gameboardFac/checks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkSize(size, coordsLength) {
  const isMatchingSize = size === coordsLength;
  return isMatchingSize;
}

function checkCellIsEmpty(board, coordinates) {
  const areCellsEmpty = coordinates.every((coord) => board[coord] === 'empty');
  return areCellsEmpty;
}

function checkCellExists(board, coordinates) {
  const doCellsExist = coordinates.every((coord) =>
    Object.prototype.hasOwnProperty.call(board, coord)
  );
  return doCellsExist;
}

const runAllChecks = (gameB, shipSize, coordinates) => {
  const check1 = checkSize(shipSize, coordinates.length);
  const check2 = checkCellIsEmpty(gameB, coordinates);
  const check3 = checkCellExists(gameB, coordinates);
  const allChecks = check1 && check2 && check3;
  return allChecks;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runAllChecks);


/***/ }),

/***/ "./src/gameboardFac/gameboard.js":
/*!***************************************!*\
  !*** ./src/gameboardFac/gameboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _boardObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardObj */ "./src/gameboardFac/boardObj.js");
/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checks */ "./src/gameboardFac/checks.js");
/* harmony import */ var _placeRandomly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeRandomly */ "./src/gameboardFac/placeRandomly.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffer */ "./src/gameboardFac/buffer.js");





function Gameboard(shipObj) {
  const board = { ..._boardObj__WEBPACK_IMPORTED_MODULE_0__["default"] };
  const legalMoves = { ..._boardObj__WEBPACK_IMPORTED_MODULE_0__["default"] };
  const recordAllShots = [];

  function markboardHitOrMiss(hitOrMiss, coordinate) {
    board[coordinate] = hitOrMiss;
  }

  function markBoardWithShip(shipToMark, coordinates) {
    coordinates.forEach((coord) => {
      board[coord] = shipToMark.name;
    });
    shipToMark.setCoords(coordinates);
  }

  function markBufferZone(bufferArray) {
    bufferArray.forEach((coord) => {
      board[coord] = 'buffer';
    });
  }

  function placeShip(ship, coords) {
    const foo = (0,_checks__WEBPACK_IMPORTED_MODULE_1__["default"])(board, ship.size, coords);
    if (!foo) return false;
    if (foo) {
      const bufferZone = (0,_buffer__WEBPACK_IMPORTED_MODULE_3__["default"])(coords);
      markBufferZone(bufferZone);
      markBoardWithShip(ship, coords);
      return true;
    }
    return false;
  }
  function randomlyPlaceShip(ship) {
    const coordsToCheck = (0,_placeRandomly__WEBPACK_IMPORTED_MODULE_2__["default"])(ship);
    const didCoordsPass = (0,_checks__WEBPACK_IMPORTED_MODULE_1__["default"])(board, ship.size, coordsToCheck);
    if (!didCoordsPass) {
      return randomlyPlaceShip(ship);
    }
    if (didCoordsPass) {
      return placeShip(ship, coordsToCheck);
    }
    return 'error something went horribly wrong';
  }

  function randomlyPlaceAllShips() {
    Object.values(shipObj).forEach((ship) => randomlyPlaceShip(ship));
  }

  function areAllShipsSunk() {
    return Object.values(shipObj).every((ship) => ship.isSunk());
  }

  function removeFromLegalMovesAndAddToRecordShots(id) {
    delete legalMoves[id];
    recordAllShots.push(id);
  }

  function receiveAttack(cell) {
    if (recordAllShots.includes(cell)) {
      return 'error illegal shot';
    }
    if (Object.prototype.hasOwnProperty.call(shipObj, board[cell])) {
      const ship = shipObj[board[cell]];
      ship.hit(ship.coords.indexOf(cell));
      removeFromLegalMovesAndAddToRecordShots(cell);
      const checkIfAllShipsAreSunk = areAllShipsSunk();
      const hitOrAllSunk = checkIfAllShipsAreSunk ? 'all ships are sunk!' : 'hit';
      markboardHitOrMiss('hit', cell);
      return hitOrAllSunk;
    }
    if (board[cell] === 'empty' || board[cell] === 'buffer') {
      markboardHitOrMiss('miss', cell);
      removeFromLegalMovesAndAddToRecordShots(cell);
      return 'miss';
    }
    return 'something went horribly wrong';
  }

  return {
    get board() {
      return { ...board };
    },
    get getLegalMoves() {
      return { ...legalMoves };
    },
    get getRecordAllShots() {
      return [...recordAllShots];
    },
    placeShip,
    receiveAttack,
    randomlyPlaceShip,
    randomlyPlaceAllShips,
  };
}


/***/ }),

/***/ "./src/gameboardFac/placeRandomly.js":
/*!*******************************************!*\
  !*** ./src/gameboardFac/placeRandomly.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const randomFromEntireArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomFromStartingPoint = (arr, size) => arr[Math.floor(Math.random() * (arr.length - size))];

function randomVertical(shipsize) {
  const pickRow = randomFromEntireArr(letters);
  const startingNum = randomFromStartingPoint(nums, shipsize);
  const coords = [];
  for (let i = startingNum; i < startingNum + shipsize; i += 1) {
    coords.push(`${pickRow}${nums[i]}`);
  }
  return coords;
}

function randomHorizontal(shipsize) {
  const pickColumn = randomFromEntireArr(nums);
  const startingLetter = randomFromStartingPoint(nums, shipsize);
  const coords = [];
  for (let i = startingLetter; i < startingLetter + shipsize; i += 1) {
    coords.push(`${letters[i]}${pickColumn}`);
  }
  return coords;
}

function placeRandomly({ size }) {
  const fiftyfifty = Math.random() < 0.5;
  if (fiftyfifty) {
    return randomHorizontal(size);
  }
  if (!fiftyfifty) {
    return randomVertical(size);
  }
  return 'error something went horribly wrong';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeRandomly);


/***/ }),

/***/ "./src/manualGameLoop/handleClick.js":
/*!*******************************************!*\
  !*** ./src/manualGameLoop/handleClick.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getVertOrHoizArrBasedOnSize(cell, rotateInstance, length) {
  const isVert = rotateInstance.getVert;
  const size = parseInt(length, 10);
  const [startingLetter, unparsedStartNum] = cell.split('');
  const startNum = parseInt(unparsedStartNum, 10);

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const getVerticalCoords = () => {
    const startingPoint = nums[nums.indexOf(startNum)];
    const endPoint = nums[nums.indexOf(startNum) + size];
    if (endPoint === undefined) return console.log('error');
    const arr = [];
    for (let i = startingPoint; i <= endPoint; i += 1) {
      arr.push(startingLetter + i);
    }
    return arr;
  };
  const getHorizonalCoords = () => {
    const startingPoint = letters[letters.indexOf(startingLetter)];
    const endPoint = letters[letters.indexOf(startingLetter) + size];
    if (endPoint === undefined) return console.log('error');
    const arr = [];
    for (let i = letters.indexOf(startingPoint); i <= letters.indexOf(endPoint); i += 1) {
      arr.push(letters[i] + startNum);
    }
    return arr;
  };

  let resultArr;

  switch (isVert) {
    case true:
      if (nums[nums.indexOf(startNum + size)] === undefined) return console.log('error');
      resultArr = getVerticalCoords();
      break;
    case false:
      if (letters[letters.indexOf(startingLetter) + size] === undefined)
        return console.log('error');
      resultArr = getHorizonalCoords();
      break;
    default:
      break;
  }
  return resultArr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getVertOrHoizArrBasedOnSize);


/***/ }),

/***/ "./src/manualGameLoop/mModal.js":
/*!**************************************!*\
  !*** ./src/manualGameLoop/mModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domCreator/domCreator */ "./src/domCreator/domCreator.js");
/* harmony import */ var _cacheDom_cacheDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cacheDom/cacheDom */ "./src/cacheDom/cacheDom.js");
/* harmony import */ var _domComponents_makeboards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domComponents/makeboards */ "./src/domComponents/makeboards.js");
/* harmony import */ var _rotateObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotateObj */ "./src/manualGameLoop/rotateObj.js");
/* harmony import */ var _handleClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleClick */ "./src/manualGameLoop/handleClick.js");






function myManualModal() {
  //* dom
  const { container, nonModalContent } = _cacheDom_cacheDom__WEBPACK_IMPORTED_MODULE_1__["default"];
  const manualModal = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({ attributes: [{ id: 'manualModal' }], classes: ['modal'] });
  const mModalContent = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({ classes: ['mModalContent'] });
  const rotateBtn = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({ tag: 'button', text: 'rotate', attributes: [{ id: 'rotate' }] });
  const staticRotationText = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({
    text: 'ship placement: ',
    attributes: [{ id: 'staticRotationText' }],
  });
  const dynamicRotationText = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({ tag: 'span', attributes: [{ id: 'dynamicRotationText' }] });
  const modalGrid = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({ attributes: [{ id: 'modalGrid' }], classes: ['grid'] });
  const shipName = (0,_domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"])({ text: 'placeholder ship name', attributes: [{ id: 'shipName' }] });
  //* dom

  //* logic
  const removeBackDrop = () => nonModalContent.remove();
  // const returnbackDrop = () => // re render backdrop (nonModalContent)
  const removeModal = () => {
    manualModal.remove();
    // returnbackDrop();
  };

  function displayModal() {
    mModalContent.appendChild(rotateBtn);
    staticRotationText.appendChild(dynamicRotationText);
    mModalContent.appendChild(staticRotationText);
    mModalContent.appendChild(shipName);
    mModalContent.appendChild(modalGrid);
    manualModal.appendChild(mModalContent);
    container.appendChild(manualModal);
    removeBackDrop();
  }
  function renderModalBoard(playerBoardObj) {
    (0,_domComponents_makeboards__WEBPACK_IMPORTED_MODULE_2__["default"])(playerBoardObj, modalGrid, true);
  }
  //* rotate logic
  const rotate = (0,_rotateObj__WEBPACK_IMPORTED_MODULE_3__["default"])(rotateBtn, dynamicRotationText);
  rotate.init();
  //* rotate logic

  //* click to place ship logic
  modalGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
      const target = e.target.classList[0];
      const thing = (0,_handleClick__WEBPACK_IMPORTED_MODULE_4__["default"])(target, rotate, 5);
      console.log(thing);
    }
  });
  //* click to place ship logic

  modalGrid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('cell')) {
      const target = e.target.classList[0];
      const arr = (0,_handleClick__WEBPACK_IMPORTED_MODULE_4__["default"])(target, rotate, 5);
      console.log(arr);
      arr.forEach((item) => {
        modalGrid.querySelector(`.${item}`).classList.add('highlighted');
      });
    }
  });
  modalGrid.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('highlighted')) {
      const foo = Array.from(modalGrid.childNodes);
      foo.forEach((item) => item.classList.remove('highlighted'));
    }
  });

  //* logic

  //* outward facing functions
  return {
    displayModal,
    removeModal,
    renderModalBoard,
  };
  //* outward facing functions
}

const modal = myManualModal();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/manualGameLoop/rotateObj.js":
/*!*****************************************!*\
  !*** ./src/manualGameLoop/rotateObj.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateText(nodeElement, message) {
  const thisNodeElement = nodeElement;
  thisNodeElement.textContent = message;
}

function enableRotateFunctionality(domElement, textToUpdate) {
  const rotate = domElement;
  const textdisplay = textToUpdate;
  updateText(textdisplay, 'vertical');
  let isVert = true;

  const checkVert = () => isVert;

  function switchState() {
    const state = checkVert();
    switch (state) {
      case true:
        isVert = false;
        updateText(textdisplay, 'horizontal');
        break;
      case false:
        isVert = true;
        updateText(textdisplay, 'vertical');
        break;
      default:
        break;
    }
  }

  const addEventToRotateBtn = () => {
    rotate.addEventListener('click', switchState);
  };
  const removeEventFromRotateBtn = () => {
    rotate.removeEventListener('click', switchState);
  };

  return {
    get getVert() {
      const trueOrFalse = checkVert();
      return trueOrFalse;
    },
    init: addEventToRotateBtn,
    end: removeEventFromRotateBtn,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enableRotateFunctionality);


/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboardFac_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboardFac/gameboard */ "./src/gameboardFac/gameboard.js");
/* harmony import */ var _shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shipFactory/shipFactory */ "./src/shipFactory/shipFactory.js");



function Player() {
  const playerships = {
    carrier: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier', 5),
    battleship: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('battleship', 4),
    destroyer: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('destroyer', 3),
    submarine: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('submarine', 3),
    patrol: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('patrol', 2),
  };
  const playerboard = (0,_gameboardFac_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(playerships);
  const { receiveAttack, randomlyPlaceAllShips, placeShip } = playerboard;
  return {
    get getboard() {
      return { ...playerboard.board };
    },
    get legalMoves() {
      return { ...playerboard.getLegalMoves };
    },
    get getShips() {
      return { ...playerships };
    },
    receiveAttack,
    randomlyPlaceAllShips,
    placeShip,
  };
}


/***/ }),

/***/ "./src/removeAllChildren/removeAllChildren.js":
/*!****************************************************!*\
  !*** ./src/removeAllChildren/removeAllChildren.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


/***/ }),

/***/ "./src/shipFactory/shipFactory.js":
/*!****************************************!*\
  !*** ./src/shipFactory/shipFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(name, size) {
  const ship = Array.from(Array(size).keys());

  const hit = (num) => {
    ship[ship.indexOf(num)] = 'X';
    return [...ship];
  };

  const setCoords = (coords) => {
    ship.coordinates = coords;
  };

  const isSunk = () => ship.every((item) => item === 'X');

  return {
    get name() {
      return name;
    },
    get size() {
      return size;
    },
    get status() {
      return [...ship];
    },
    get log() {
      return console.log(ship);
    },
    get nameAndSize() {
      return { name, size };
    },

    get coords() {
      return [...ship.coordinates];
    },
    hit,
    isSunk,
    setCoords,
  };
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");
/* harmony import */ var _manualGameLoop_mModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manualGameLoop/mModal */ "./src/manualGameLoop/mModal.js");
//! < do not get rid of this line lol > !\\

//! </ do not get rid of this line lol > !\\
// ?  < app testing > !\\
// import app from './app/app';

// app();
// ?  </ app testing > !\\
//* testing manual modal

//* testing manual modal



const user = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
_manualGameLoop_mModal__WEBPACK_IMPORTED_MODULE_2__["default"].displayModal();
_manualGameLoop_mModal__WEBPACK_IMPORTED_MODULE_2__["default"].renderModalBoard(user.getboard);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3FCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDcUM7QUFDTzs7QUFFNUMsYUFBYSwwREFBTTtBQUNuQiwyRUFBa0I7QUFDbEIsK0VBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL21hbnVhbEdhbWVMb29wL21hbnVhbEdhbWVMb29wLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc3RhcnRHYW1lTW9kYWwvc3RhcnRHYW1lTW9kYWwuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmRzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9jYWNoZURvbS9jYWNoZURvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZG9tQ29tcG9uZW50cy9tYWtlYm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9kb21DcmVhdG9yL2RvbUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2dhbWVib2FyZEZhYy9ib2FyZE9iai5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2NoZWNrcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL3BsYWNlUmFuZG9tbHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL21hbnVhbEdhbWVMb29wL2hhbmRsZUNsaWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9tYW51YWxHYW1lTG9vcC9tTW9kYWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL21hbnVhbEdhbWVMb29wL3JvdGF0ZU9iai5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvcmVtb3ZlQWxsQ2hpbGRyZW4vcmVtb3ZlQWxsQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4OyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1Nb2RhbENvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmhpZ2hsaWdodGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYW51YWxHYW1lTG9vcC9tYW51YWxHYW1lTG9vcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxrQ0FBa0MsRUFBRSxxQkFBcUI7RUFDekQsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tTW9kYWxDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5oaWdobGlnaHRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5zdGFydE1vZGFsQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbiNwbGFjZU93blNoaXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcbiNwbGFjZVNoaXBzUmFuZG9tbHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XFxufVxcblxcbi5zdGFydE1vZGFsT3B0aW9ucyB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3RhcnRHYW1lTW9kYWwvc3RhcnRHYW1lTW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJCQUEyQjtBQUMzQjtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyw4QkFBOEIsRUFBRSxtQkFBbUI7RUFDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0VBQzNELHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5zdGFydE1vZGFsQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbiNwbGFjZU93blNoaXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcbiNwbGFjZVNoaXBzUmFuZG9tbHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XFxufVxcblxcbi5zdGFydE1vZGFsT3B0aW9ucyB7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzL2dhbWVib2FyZHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnRHYW1lTW9kYWwvc3RhcnRHYW1lTW9kYWwuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFudWFsR2FtZUxvb3AvbWFudWFsR2FtZUxvb3AuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcGxheWVyR3JpZEFyZWEsXFxuI2JvdEdyaWRBcmVhLFxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM0LCAzNCwgMzQpO1xcbn1cXG5cXG4ucGJ1ZmZlciB7XFxuICBiYWNrZ3JvdW5kOiAjY2VkNGRhO1xcbn1cXG5cXG4ucGNhcnJpZXIsXFxuLnBiYXR0bGVzaGlwLFxcbi5wZGVzdHJveWVyLFxcbi5wc3VibWFyaW5lLFxcbi5wcGF0cm9sIHtcXG4gIGJhY2tncm91bmQ6IHJnYig2OCwgNjgsIDY4KTtcXG59XFxuXFxuLnBoaXQsXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxMzMsIDEzMyk7XFxufVxcblxcbi5wbWlzcyxcXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTMzLCAyNTUsIDE3OSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7RUFLRSwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjcGxheWVyR3JpZEFyZWEsXFxuI2JvdEdyaWRBcmVhLFxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM0LCAzNCwgMzQpO1xcbn1cXG5cXG4ucGJ1ZmZlciB7XFxuICBiYWNrZ3JvdW5kOiAjY2VkNGRhO1xcbn1cXG5cXG4ucGNhcnJpZXIsXFxuLnBiYXR0bGVzaGlwLFxcbi5wZGVzdHJveWVyLFxcbi5wc3VibWFyaW5lLFxcbi5wcGF0cm9sIHtcXG4gIGJhY2tncm91bmQ6IHJnYig2OCwgNjgsIDY4KTtcXG59XFxuXFxuLnBoaXQsXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxMzMsIDEzMyk7XFxufVxcblxcbi5wbWlzcyxcXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTMzLCAyNTUsIDE3OSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY2FjaGVEb20oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgY29uc3Qgbm9uTW9kYWxDb250ZW50ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNub25Nb2RhbENvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyID0gbm9uTW9kYWxDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgY29uc3QgYm9hcmRzID0gbm9uTW9kYWxDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZHMnKTtcbiAgY29uc3QgcGxheWVyR3JpZEFyZWEgPSBib2FyZHMucXVlcnlTZWxlY3RvcignI3BsYXllckdyaWRBcmVhJyk7XG4gIGNvbnN0IGJvdEdyaWRBcmVhID0gYm9hcmRzLnF1ZXJ5U2VsZWN0b3IoJyNib3RHcmlkQXJlYScpO1xuICBjb25zdCBmb290ZXIgPSBub25Nb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcignI2Zvb3RlcicpO1xuXG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIG5vbk1vZGFsQ29udGVudCxcbiAgICBoZWFkZXIsXG4gICAgYm9hcmRzLFxuICAgIHBsYXllckdyaWRBcmVhLFxuICAgIGJvdEdyaWRBcmVhLFxuICAgIGZvb3RlcixcbiAgfTtcbn1cblxuY29uc3QgY2FjaGVkID0gY2FjaGVEb20oKTtcbmV4cG9ydCBkZWZhdWx0IGNhY2hlZDtcbiIsImltcG9ydCBkb20gZnJvbSAnLi4vZG9tQ3JlYXRvci9kb21DcmVhdG9yJztcbmltcG9ydCByZW1vdmVBbGxDaGlsZE5vZGVzIGZyb20gJy4uL3JlbW92ZUFsbENoaWxkcmVuL3JlbW92ZUFsbENoaWxkcmVuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQm9hcmQob2JqLCBwYXJlbnQsIHBsYXllciA9IGZhbHNlKSB7XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KTtcbiAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG9iaik7XG4gIGVudHJpZXMuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKHBsYXllcikge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvbSh7IGNsYXNzZXM6IFtrZXksIGBwJHt2YWx1ZX1gLCAnY2VsbCddIH0pO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgaWYgKHZhbHVlID09PSAnaGl0JyB8fCB2YWx1ZSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb20oeyBjbGFzc2VzOiBba2V5LCBgJHt2YWx1ZX1gLCAnY2VsbCddIH0pO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9tKHsgY2xhc3NlczogW2tleSwgJ2NlbGwnXSB9KTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb20ob2JqKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50YWcgfHwgJ2RpdicpO1xuICBPYmplY3Qua2V5cyhvYmopLm1hcCgocHJvcCkgPT4ge1xuICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG9iai50ZXh0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsYXNzZXMnOlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqLmNsYXNzZXMpKSByZXR1cm4gY29uc29sZS5sb2coJ2NsYXNzZXMgbXVzdCBiZSBhbiBhcnJheScpO1xuICAgICAgICBvYmouY2xhc3Nlcy5tYXAoKGMpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmouYXR0cmlidXRlcykpIHJldHVybiBjb25zb2xlLmxvZyhgYXR0cmlidXRlcyBtdXN0IGJlIGFuIGFycmF5YCk7XG4gICAgICAgIG9iai5hdHRyaWJ1dGVzLm1hcCgoYXR0cikgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMoYXR0ciksIE9iamVjdC52YWx1ZXMoYXR0cikpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdldmVudHMnOlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqLmV2ZW50cykpIHJldHVybiBjb25zb2xlLmxvZyhgZXZlbnRzIG11c3QgYmUgYW4gYXJyYXlgKTtcbiAgICAgICAgb2JqLmV2ZW50cy5tYXAoKHsgdHlwZSwgaGFuZGxlciB9KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcikpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoaWxkcmVuJzpcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iai5jaGlsZHJlbikpIHJldHVybiBjb25zb2xlLmxvZyhgY2hpbGRyZW4gbXVzdCBiZSBhbiBhcnJheWApO1xuICAgICAgICBvYmouY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIEEwOiAnZW1wdHknLFxuICBCMDogJ2VtcHR5JyxcbiAgQzA6ICdlbXB0eScsXG4gIEQwOiAnZW1wdHknLFxuICBFMDogJ2VtcHR5JyxcbiAgRjA6ICdlbXB0eScsXG4gIEcwOiAnZW1wdHknLFxuICBIMDogJ2VtcHR5JyxcbiAgSTA6ICdlbXB0eScsXG4gIEowOiAnZW1wdHknLFxuICBBMTogJ2VtcHR5JyxcbiAgQjE6ICdlbXB0eScsXG4gIEMxOiAnZW1wdHknLFxuICBEMTogJ2VtcHR5JyxcbiAgRTE6ICdlbXB0eScsXG4gIEYxOiAnZW1wdHknLFxuICBHMTogJ2VtcHR5JyxcbiAgSDE6ICdlbXB0eScsXG4gIEkxOiAnZW1wdHknLFxuICBKMTogJ2VtcHR5JyxcbiAgQTI6ICdlbXB0eScsXG4gIEIyOiAnZW1wdHknLFxuICBDMjogJ2VtcHR5JyxcbiAgRDI6ICdlbXB0eScsXG4gIEUyOiAnZW1wdHknLFxuICBGMjogJ2VtcHR5JyxcbiAgRzI6ICdlbXB0eScsXG4gIEgyOiAnZW1wdHknLFxuICBJMjogJ2VtcHR5JyxcbiAgSjI6ICdlbXB0eScsXG4gIEEzOiAnZW1wdHknLFxuICBCMzogJ2VtcHR5JyxcbiAgQzM6ICdlbXB0eScsXG4gIEQzOiAnZW1wdHknLFxuICBFMzogJ2VtcHR5JyxcbiAgRjM6ICdlbXB0eScsXG4gIEczOiAnZW1wdHknLFxuICBIMzogJ2VtcHR5JyxcbiAgSTM6ICdlbXB0eScsXG4gIEozOiAnZW1wdHknLFxuICBBNDogJ2VtcHR5JyxcbiAgQjQ6ICdlbXB0eScsXG4gIEM0OiAnZW1wdHknLFxuICBENDogJ2VtcHR5JyxcbiAgRTQ6ICdlbXB0eScsXG4gIEY0OiAnZW1wdHknLFxuICBHNDogJ2VtcHR5JyxcbiAgSDQ6ICdlbXB0eScsXG4gIEk0OiAnZW1wdHknLFxuICBKNDogJ2VtcHR5JyxcbiAgQTU6ICdlbXB0eScsXG4gIEI1OiAnZW1wdHknLFxuICBDNTogJ2VtcHR5JyxcbiAgRDU6ICdlbXB0eScsXG4gIEU1OiAnZW1wdHknLFxuICBGNTogJ2VtcHR5JyxcbiAgRzU6ICdlbXB0eScsXG4gIEg1OiAnZW1wdHknLFxuICBJNTogJ2VtcHR5JyxcbiAgSjU6ICdlbXB0eScsXG4gIEE2OiAnZW1wdHknLFxuICBCNjogJ2VtcHR5JyxcbiAgQzY6ICdlbXB0eScsXG4gIEQ2OiAnZW1wdHknLFxuICBFNjogJ2VtcHR5JyxcbiAgRjY6ICdlbXB0eScsXG4gIEc2OiAnZW1wdHknLFxuICBINjogJ2VtcHR5JyxcbiAgSTY6ICdlbXB0eScsXG4gIEo2OiAnZW1wdHknLFxuICBBNzogJ2VtcHR5JyxcbiAgQjc6ICdlbXB0eScsXG4gIEM3OiAnZW1wdHknLFxuICBENzogJ2VtcHR5JyxcbiAgRTc6ICdlbXB0eScsXG4gIEY3OiAnZW1wdHknLFxuICBHNzogJ2VtcHR5JyxcbiAgSDc6ICdlbXB0eScsXG4gIEk3OiAnZW1wdHknLFxuICBKNzogJ2VtcHR5JyxcbiAgQTg6ICdlbXB0eScsXG4gIEI4OiAnZW1wdHknLFxuICBDODogJ2VtcHR5JyxcbiAgRDg6ICdlbXB0eScsXG4gIEU4OiAnZW1wdHknLFxuICBGODogJ2VtcHR5JyxcbiAgRzg6ICdlbXB0eScsXG4gIEg4OiAnZW1wdHknLFxuICBJODogJ2VtcHR5JyxcbiAgSjg6ICdlbXB0eScsXG4gIEE5OiAnZW1wdHknLFxuICBCOTogJ2VtcHR5JyxcbiAgQzk6ICdlbXB0eScsXG4gIEQ5OiAnZW1wdHknLFxuICBFOTogJ2VtcHR5JyxcbiAgRjk6ICdlbXB0eScsXG4gIEc5OiAnZW1wdHknLFxuICBIOTogJ2VtcHR5JyxcbiAgSTk6ICdlbXB0eScsXG4gIEo5OiAnZW1wdHknLFxufTtcblxuY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuY29uc3QgbnVtYmVycyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddO1xuXG5leHBvcnQgeyBsZXR0ZXJzLCBudW1iZXJzIH07XG4iLCJmdW5jdGlvbiBidWZmZXJTaW5nbGVDb29yZChjZWxsKSB7XG4gIGNvbnN0IFtsZXR0ZXIsIG51bUlzU3RyaW5nXSA9IGNlbGwuc3BsaXQoJycpO1xuICBjb25zdCBudW1zID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICBjb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KG51bUlzU3RyaW5nLCAxMCk7XG4gIGNvbnN0IGFyck9mTGV0dGVycyA9IFtdO1xuICBjb25zdCBhcnJPZk51bXMgPSBbXTtcblxuICBmdW5jdGlvbiBVcHBlckFuZExvd2VyTGV0dGVycygpIHtcbiAgICBpZiAobGV0dGVycy5pbmNsdWRlcyhsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpIC0gMV0pKSB7XG4gICAgICBhcnJPZkxldHRlcnMucHVzaChsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpIC0gMV0pO1xuICAgIH1cbiAgICBhcnJPZkxldHRlcnMucHVzaChsZXR0ZXIpO1xuICAgIGlmIChsZXR0ZXJzLmluY2x1ZGVzKGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikgKyAxXSkpIHtcbiAgICAgIGFyck9mTGV0dGVycy5wdXNoKGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikgKyAxXSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIFVwcGVyQW5kTG93ZXJOdW1iZXJzKCkge1xuICAgIGlmIChudW1zLmluY2x1ZGVzKG51bXNbbnVtcy5pbmRleE9mKG51bSkgLSAxXSkpIHtcbiAgICAgIGFyck9mTnVtcy5wdXNoKG51bXNbbnVtcy5pbmRleE9mKG51bSkgLSAxXSk7XG4gICAgfVxuICAgIGFyck9mTnVtcy5wdXNoKG51bSk7XG4gICAgaWYgKG51bXMuaW5jbHVkZXMobnVtc1tudW1zLmluZGV4T2YobnVtKSArIDFdKSkge1xuICAgICAgYXJyT2ZOdW1zLnB1c2gobnVtc1tudW1zLmluZGV4T2YobnVtKSArIDFdKTtcbiAgICB9XG4gIH1cblxuICBVcHBlckFuZExvd2VyTGV0dGVycygpO1xuICBVcHBlckFuZExvd2VyTnVtYmVycygpO1xuXG4gIGZ1bmN0aW9uIGNvbWJpbmVMZXR0ZXJzQW5kTnVtYmVycygpIHtcbiAgICBjb25zdCBuZXdBcnIgPSBbXTtcbiAgICBhcnJPZkxldHRlcnMuZm9yRWFjaCgoZWFjaGxldHRlcikgPT4ge1xuICAgICAgYXJyT2ZOdW1zLmZvckVhY2goKGVhY2hudW0pID0+IHtcbiAgICAgICAgbmV3QXJyLnB1c2goZWFjaGxldHRlciArIGVhY2hudW0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0FycjtcbiAgfVxuICBjb25zdCBidWZmZXJDZWxsID0gY29tYmluZUxldHRlcnNBbmROdW1iZXJzKCk7XG4gIGNvbnN0IHJlbW92ZUR1cGxpY2F0ZXNmcm9tQnVmZmVyQ2VsbCA9IFsuLi5uZXcgU2V0KGJ1ZmZlckNlbGwpXTtcbiAgcmV0dXJuIHJlbW92ZUR1cGxpY2F0ZXNmcm9tQnVmZmVyQ2VsbDtcbn1cblxuZnVuY3Rpb24gYnVmZmVyQWxsQ29vcmRzKGFycikge1xuICBjb25zdCBuZXdBcnIgPSBbXTtcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBidWZmZXJFYWNoQ2VsbCA9IGJ1ZmZlclNpbmdsZUNvb3JkKGl0ZW0pO1xuICAgIG5ld0Fyci5wdXNoKC4uLmJ1ZmZlckVhY2hDZWxsKTtcbiAgfSk7XG4gIGNvbnN0IGFsbENlbGxzVG9CdWZmZXIgPSBbLi4ubmV3IFNldChuZXdBcnIpXTtcbiAgcmV0dXJuIGFsbENlbGxzVG9CdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGdldEJ1ZmZlclpvbmVBcnJheShjb29yZHMpIHtcbiAgY29uc3QgYnVmZmVyTWludXNTaGlwID0gW1xuICAgIC4uLm5ldyBTZXQoYnVmZmVyQWxsQ29vcmRzKGNvb3JkcykuZmlsdGVyKChpdGVtKSA9PiAhY29vcmRzLmluY2x1ZGVzKGl0ZW0pKSksXG4gIF07XG4gIHJldHVybiBidWZmZXJNaW51c1NoaXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEJ1ZmZlclpvbmVBcnJheTtcbiIsImZ1bmN0aW9uIGNoZWNrU2l6ZShzaXplLCBjb29yZHNMZW5ndGgpIHtcbiAgY29uc3QgaXNNYXRjaGluZ1NpemUgPSBzaXplID09PSBjb29yZHNMZW5ndGg7XG4gIHJldHVybiBpc01hdGNoaW5nU2l6ZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDZWxsSXNFbXB0eShib2FyZCwgY29vcmRpbmF0ZXMpIHtcbiAgY29uc3QgYXJlQ2VsbHNFbXB0eSA9IGNvb3JkaW5hdGVzLmV2ZXJ5KChjb29yZCkgPT4gYm9hcmRbY29vcmRdID09PSAnZW1wdHknKTtcbiAgcmV0dXJuIGFyZUNlbGxzRW1wdHk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2VsbEV4aXN0cyhib2FyZCwgY29vcmRpbmF0ZXMpIHtcbiAgY29uc3QgZG9DZWxsc0V4aXN0ID0gY29vcmRpbmF0ZXMuZXZlcnkoKGNvb3JkKSA9PlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChib2FyZCwgY29vcmQpXG4gICk7XG4gIHJldHVybiBkb0NlbGxzRXhpc3Q7XG59XG5cbmNvbnN0IHJ1bkFsbENoZWNrcyA9IChnYW1lQiwgc2hpcFNpemUsIGNvb3JkaW5hdGVzKSA9PiB7XG4gIGNvbnN0IGNoZWNrMSA9IGNoZWNrU2l6ZShzaGlwU2l6ZSwgY29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgY29uc3QgY2hlY2syID0gY2hlY2tDZWxsSXNFbXB0eShnYW1lQiwgY29vcmRpbmF0ZXMpO1xuICBjb25zdCBjaGVjazMgPSBjaGVja0NlbGxFeGlzdHMoZ2FtZUIsIGNvb3JkaW5hdGVzKTtcbiAgY29uc3QgYWxsQ2hlY2tzID0gY2hlY2sxICYmIGNoZWNrMiAmJiBjaGVjazM7XG4gIHJldHVybiBhbGxDaGVja3M7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBydW5BbGxDaGVja3M7XG4iLCJpbXBvcnQgYm9hcmRPYmogZnJvbSAnLi9ib2FyZE9iaic7XG5pbXBvcnQgcnVuQWxsQ2hlY2tzIGZyb20gJy4vY2hlY2tzJztcbmltcG9ydCBwbGFjZVJhbmRvbWx5IGZyb20gJy4vcGxhY2VSYW5kb21seSc7XG5pbXBvcnQgZ2V0QnVmZmVyWm9uZUFycmF5IGZyb20gJy4vYnVmZmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKHNoaXBPYmopIHtcbiAgY29uc3QgYm9hcmQgPSB7IC4uLmJvYXJkT2JqIH07XG4gIGNvbnN0IGxlZ2FsTW92ZXMgPSB7IC4uLmJvYXJkT2JqIH07XG4gIGNvbnN0IHJlY29yZEFsbFNob3RzID0gW107XG5cbiAgZnVuY3Rpb24gbWFya2JvYXJkSGl0T3JNaXNzKGhpdE9yTWlzcywgY29vcmRpbmF0ZSkge1xuICAgIGJvYXJkW2Nvb3JkaW5hdGVdID0gaGl0T3JNaXNzO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFya0JvYXJkV2l0aFNoaXAoc2hpcFRvTWFyaywgY29vcmRpbmF0ZXMpIHtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgYm9hcmRbY29vcmRdID0gc2hpcFRvTWFyay5uYW1lO1xuICAgIH0pO1xuICAgIHNoaXBUb01hcmsuc2V0Q29vcmRzKGNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtCdWZmZXJab25lKGJ1ZmZlckFycmF5KSB7XG4gICAgYnVmZmVyQXJyYXkuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGJvYXJkW2Nvb3JkXSA9ICdidWZmZXInO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3Jkcykge1xuICAgIGNvbnN0IGZvbyA9IHJ1bkFsbENoZWNrcyhib2FyZCwgc2hpcC5zaXplLCBjb29yZHMpO1xuICAgIGlmICghZm9vKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGZvbykge1xuICAgICAgY29uc3QgYnVmZmVyWm9uZSA9IGdldEJ1ZmZlclpvbmVBcnJheShjb29yZHMpO1xuICAgICAgbWFya0J1ZmZlclpvbmUoYnVmZmVyWm9uZSk7XG4gICAgICBtYXJrQm9hcmRXaXRoU2hpcChzaGlwLCBjb29yZHMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiByYW5kb21seVBsYWNlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgY29vcmRzVG9DaGVjayA9IHBsYWNlUmFuZG9tbHkoc2hpcCk7XG4gICAgY29uc3QgZGlkQ29vcmRzUGFzcyA9IHJ1bkFsbENoZWNrcyhib2FyZCwgc2hpcC5zaXplLCBjb29yZHNUb0NoZWNrKTtcbiAgICBpZiAoIWRpZENvb3Jkc1Bhc3MpIHtcbiAgICAgIHJldHVybiByYW5kb21seVBsYWNlU2hpcChzaGlwKTtcbiAgICB9XG4gICAgaWYgKGRpZENvb3Jkc1Bhc3MpIHtcbiAgICAgIHJldHVybiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzVG9DaGVjayk7XG4gICAgfVxuICAgIHJldHVybiAnZXJyb3Igc29tZXRoaW5nIHdlbnQgaG9ycmlibHkgd3JvbmcnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tbHlQbGFjZUFsbFNoaXBzKCkge1xuICAgIE9iamVjdC52YWx1ZXMoc2hpcE9iaikuZm9yRWFjaCgoc2hpcCkgPT4gcmFuZG9tbHlQbGFjZVNoaXAoc2hpcCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHNoaXBPYmopLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21MZWdhbE1vdmVzQW5kQWRkVG9SZWNvcmRTaG90cyhpZCkge1xuICAgIGRlbGV0ZSBsZWdhbE1vdmVzW2lkXTtcbiAgICByZWNvcmRBbGxTaG90cy5wdXNoKGlkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY2VsbCkge1xuICAgIGlmIChyZWNvcmRBbGxTaG90cy5pbmNsdWRlcyhjZWxsKSkge1xuICAgICAgcmV0dXJuICdlcnJvciBpbGxlZ2FsIHNob3QnO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNoaXBPYmosIGJvYXJkW2NlbGxdKSkge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBPYmpbYm9hcmRbY2VsbF1dO1xuICAgICAgc2hpcC5oaXQoc2hpcC5jb29yZHMuaW5kZXhPZihjZWxsKSk7XG4gICAgICByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoY2VsbCk7XG4gICAgICBjb25zdCBjaGVja0lmQWxsU2hpcHNBcmVTdW5rID0gYXJlQWxsU2hpcHNTdW5rKCk7XG4gICAgICBjb25zdCBoaXRPckFsbFN1bmsgPSBjaGVja0lmQWxsU2hpcHNBcmVTdW5rID8gJ2FsbCBzaGlwcyBhcmUgc3VuayEnIDogJ2hpdCc7XG4gICAgICBtYXJrYm9hcmRIaXRPck1pc3MoJ2hpdCcsIGNlbGwpO1xuICAgICAgcmV0dXJuIGhpdE9yQWxsU3VuaztcbiAgICB9XG4gICAgaWYgKGJvYXJkW2NlbGxdID09PSAnZW1wdHknIHx8IGJvYXJkW2NlbGxdID09PSAnYnVmZmVyJykge1xuICAgICAgbWFya2JvYXJkSGl0T3JNaXNzKCdtaXNzJywgY2VsbCk7XG4gICAgICByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoY2VsbCk7XG4gICAgICByZXR1cm4gJ21pc3MnO1xuICAgIH1cbiAgICByZXR1cm4gJ3NvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIHsgLi4uYm9hcmQgfTtcbiAgICB9LFxuICAgIGdldCBnZXRMZWdhbE1vdmVzKCkge1xuICAgICAgcmV0dXJuIHsgLi4ubGVnYWxNb3ZlcyB9O1xuICAgIH0sXG4gICAgZ2V0IGdldFJlY29yZEFsbFNob3RzKCkge1xuICAgICAgcmV0dXJuIFsuLi5yZWNvcmRBbGxTaG90c107XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICByYW5kb21seVBsYWNlU2hpcCxcbiAgICByYW5kb21seVBsYWNlQWxsU2hpcHMsXG4gIH07XG59XG4iLCJjb25zdCBudW1zID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuXG5jb25zdCByYW5kb21Gcm9tRW50aXJlQXJyID0gKGFycikgPT4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbmNvbnN0IHJhbmRvbUZyb21TdGFydGluZ1BvaW50ID0gKGFyciwgc2l6ZSkgPT4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhcnIubGVuZ3RoIC0gc2l6ZSkpXTtcblxuZnVuY3Rpb24gcmFuZG9tVmVydGljYWwoc2hpcHNpemUpIHtcbiAgY29uc3QgcGlja1JvdyA9IHJhbmRvbUZyb21FbnRpcmVBcnIobGV0dGVycyk7XG4gIGNvbnN0IHN0YXJ0aW5nTnVtID0gcmFuZG9tRnJvbVN0YXJ0aW5nUG9pbnQobnVtcywgc2hpcHNpemUpO1xuICBjb25zdCBjb29yZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nTnVtOyBpIDwgc3RhcnRpbmdOdW0gKyBzaGlwc2l6ZTsgaSArPSAxKSB7XG4gICAgY29vcmRzLnB1c2goYCR7cGlja1Jvd30ke251bXNbaV19YCk7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZnVuY3Rpb24gcmFuZG9tSG9yaXpvbnRhbChzaGlwc2l6ZSkge1xuICBjb25zdCBwaWNrQ29sdW1uID0gcmFuZG9tRnJvbUVudGlyZUFycihudW1zKTtcbiAgY29uc3Qgc3RhcnRpbmdMZXR0ZXIgPSByYW5kb21Gcm9tU3RhcnRpbmdQb2ludChudW1zLCBzaGlwc2l6ZSk7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnRpbmdMZXR0ZXI7IGkgPCBzdGFydGluZ0xldHRlciArIHNoaXBzaXplOyBpICs9IDEpIHtcbiAgICBjb29yZHMucHVzaChgJHtsZXR0ZXJzW2ldfSR7cGlja0NvbHVtbn1gKTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5mdW5jdGlvbiBwbGFjZVJhbmRvbWx5KHsgc2l6ZSB9KSB7XG4gIGNvbnN0IGZpZnR5ZmlmdHkgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICBpZiAoZmlmdHlmaWZ0eSkge1xuICAgIHJldHVybiByYW5kb21Ib3Jpem9udGFsKHNpemUpO1xuICB9XG4gIGlmICghZmlmdHlmaWZ0eSkge1xuICAgIHJldHVybiByYW5kb21WZXJ0aWNhbChzaXplKTtcbiAgfVxuICByZXR1cm4gJ2Vycm9yIHNvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VSYW5kb21seTtcbiIsImZ1bmN0aW9uIGdldFZlcnRPckhvaXpBcnJCYXNlZE9uU2l6ZShjZWxsLCByb3RhdGVJbnN0YW5jZSwgbGVuZ3RoKSB7XG4gIGNvbnN0IGlzVmVydCA9IHJvdGF0ZUluc3RhbmNlLmdldFZlcnQ7XG4gIGNvbnN0IHNpemUgPSBwYXJzZUludChsZW5ndGgsIDEwKTtcbiAgY29uc3QgW3N0YXJ0aW5nTGV0dGVyLCB1bnBhcnNlZFN0YXJ0TnVtXSA9IGNlbGwuc3BsaXQoJycpO1xuICBjb25zdCBzdGFydE51bSA9IHBhcnNlSW50KHVucGFyc2VkU3RhcnROdW0sIDEwKTtcblxuICBjb25zdCBudW1zID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICBjb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbiAgY29uc3QgZ2V0VmVydGljYWxDb29yZHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRpbmdQb2ludCA9IG51bXNbbnVtcy5pbmRleE9mKHN0YXJ0TnVtKV07XG4gICAgY29uc3QgZW5kUG9pbnQgPSBudW1zW251bXMuaW5kZXhPZihzdGFydE51bSkgKyBzaXplXTtcbiAgICBpZiAoZW5kUG9pbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1BvaW50OyBpIDw9IGVuZFBvaW50OyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKHN0YXJ0aW5nTGV0dGVyICsgaSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG4gIGNvbnN0IGdldEhvcml6b25hbENvb3JkcyA9ICgpID0+IHtcbiAgICBjb25zdCBzdGFydGluZ1BvaW50ID0gbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2Yoc3RhcnRpbmdMZXR0ZXIpXTtcbiAgICBjb25zdCBlbmRQb2ludCA9IGxldHRlcnNbbGV0dGVycy5pbmRleE9mKHN0YXJ0aW5nTGV0dGVyKSArIHNpemVdO1xuICAgIGlmIChlbmRQb2ludCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IGxldHRlcnMuaW5kZXhPZihzdGFydGluZ1BvaW50KTsgaSA8PSBsZXR0ZXJzLmluZGV4T2YoZW5kUG9pbnQpOyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKGxldHRlcnNbaV0gKyBzdGFydE51bSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgbGV0IHJlc3VsdEFycjtcblxuICBzd2l0Y2ggKGlzVmVydCkge1xuICAgIGNhc2UgdHJ1ZTpcbiAgICAgIGlmIChudW1zW251bXMuaW5kZXhPZihzdGFydE51bSArIHNpemUpXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICByZXN1bHRBcnIgPSBnZXRWZXJ0aWNhbENvb3JkcygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBmYWxzZTpcbiAgICAgIGlmIChsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihzdGFydGluZ0xldHRlcikgKyBzaXplXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICByZXN1bHRBcnIgPSBnZXRIb3Jpem9uYWxDb29yZHMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gcmVzdWx0QXJyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRWZXJ0T3JIb2l6QXJyQmFzZWRPblNpemU7XG4iLCJpbXBvcnQgZG9tIGZyb20gJy4uL2RvbUNyZWF0b3IvZG9tQ3JlYXRvcic7XG5pbXBvcnQgY2FjaGVkIGZyb20gJy4uL2NhY2hlRG9tL2NhY2hlRG9tJztcbmltcG9ydCByZW5kZXJCb2FyZCBmcm9tICcuLi9kb21Db21wb25lbnRzL21ha2Vib2FyZHMnO1xuaW1wb3J0IGVuYWJsZVJvdGF0ZUZ1bmN0aW9uYWxpdHkgZnJvbSAnLi9yb3RhdGVPYmonO1xuaW1wb3J0IGhhbmRsZU1Nb2RhbENsaWNrIGZyb20gJy4vaGFuZGxlQ2xpY2snO1xuXG5mdW5jdGlvbiBteU1hbnVhbE1vZGFsKCkge1xuICAvLyogZG9tXG4gIGNvbnN0IHsgY29udGFpbmVyLCBub25Nb2RhbENvbnRlbnQgfSA9IGNhY2hlZDtcbiAgY29uc3QgbWFudWFsTW9kYWwgPSBkb20oeyBhdHRyaWJ1dGVzOiBbeyBpZDogJ21hbnVhbE1vZGFsJyB9XSwgY2xhc3NlczogWydtb2RhbCddIH0pO1xuICBjb25zdCBtTW9kYWxDb250ZW50ID0gZG9tKHsgY2xhc3NlczogWydtTW9kYWxDb250ZW50J10gfSk7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvbSh7IHRhZzogJ2J1dHRvbicsIHRleHQ6ICdyb3RhdGUnLCBhdHRyaWJ1dGVzOiBbeyBpZDogJ3JvdGF0ZScgfV0gfSk7XG4gIGNvbnN0IHN0YXRpY1JvdGF0aW9uVGV4dCA9IGRvbSh7XG4gICAgdGV4dDogJ3NoaXAgcGxhY2VtZW50OiAnLFxuICAgIGF0dHJpYnV0ZXM6IFt7IGlkOiAnc3RhdGljUm90YXRpb25UZXh0JyB9XSxcbiAgfSk7XG4gIGNvbnN0IGR5bmFtaWNSb3RhdGlvblRleHQgPSBkb20oeyB0YWc6ICdzcGFuJywgYXR0cmlidXRlczogW3sgaWQ6ICdkeW5hbWljUm90YXRpb25UZXh0JyB9XSB9KTtcbiAgY29uc3QgbW9kYWxHcmlkID0gZG9tKHsgYXR0cmlidXRlczogW3sgaWQ6ICdtb2RhbEdyaWQnIH1dLCBjbGFzc2VzOiBbJ2dyaWQnXSB9KTtcbiAgY29uc3Qgc2hpcE5hbWUgPSBkb20oeyB0ZXh0OiAncGxhY2Vob2xkZXIgc2hpcCBuYW1lJywgYXR0cmlidXRlczogW3sgaWQ6ICdzaGlwTmFtZScgfV0gfSk7XG4gIC8vKiBkb21cblxuICAvLyogbG9naWNcbiAgY29uc3QgcmVtb3ZlQmFja0Ryb3AgPSAoKSA9PiBub25Nb2RhbENvbnRlbnQucmVtb3ZlKCk7XG4gIC8vIGNvbnN0IHJldHVybmJhY2tEcm9wID0gKCkgPT4gLy8gcmUgcmVuZGVyIGJhY2tkcm9wIChub25Nb2RhbENvbnRlbnQpXG4gIGNvbnN0IHJlbW92ZU1vZGFsID0gKCkgPT4ge1xuICAgIG1hbnVhbE1vZGFsLnJlbW92ZSgpO1xuICAgIC8vIHJldHVybmJhY2tEcm9wKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlzcGxheU1vZGFsKCkge1xuICAgIG1Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcbiAgICBzdGF0aWNSb3RhdGlvblRleHQuYXBwZW5kQ2hpbGQoZHluYW1pY1JvdGF0aW9uVGV4dCk7XG4gICAgbU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzdGF0aWNSb3RhdGlvblRleHQpO1xuICAgIG1Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoc2hpcE5hbWUpO1xuICAgIG1Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxHcmlkKTtcbiAgICBtYW51YWxNb2RhbC5hcHBlbmRDaGlsZChtTW9kYWxDb250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFudWFsTW9kYWwpO1xuICAgIHJlbW92ZUJhY2tEcm9wKCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyTW9kYWxCb2FyZChwbGF5ZXJCb2FyZE9iaikge1xuICAgIHJlbmRlckJvYXJkKHBsYXllckJvYXJkT2JqLCBtb2RhbEdyaWQsIHRydWUpO1xuICB9XG4gIC8vKiByb3RhdGUgbG9naWNcbiAgY29uc3Qgcm90YXRlID0gZW5hYmxlUm90YXRlRnVuY3Rpb25hbGl0eShyb3RhdGVCdG4sIGR5bmFtaWNSb3RhdGlvblRleHQpO1xuICByb3RhdGUuaW5pdCgpO1xuICAvLyogcm90YXRlIGxvZ2ljXG5cbiAgLy8qIGNsaWNrIHRvIHBsYWNlIHNoaXAgbG9naWNcbiAgbW9kYWxHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICAgIGNvbnN0IHRoaW5nID0gaGFuZGxlTU1vZGFsQ2xpY2sodGFyZ2V0LCByb3RhdGUsIDUpO1xuICAgICAgY29uc29sZS5sb2codGhpbmcpO1xuICAgIH1cbiAgfSk7XG4gIC8vKiBjbGljayB0byBwbGFjZSBzaGlwIGxvZ2ljXG5cbiAgbW9kYWxHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF07XG4gICAgICBjb25zdCBhcnIgPSBoYW5kbGVNTW9kYWxDbGljayh0YXJnZXQsIHJvdGF0ZSwgNSk7XG4gICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbW9kYWxHcmlkLnF1ZXJ5U2VsZWN0b3IoYC4ke2l0ZW19YCkuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIG1vZGFsR3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0ZWQnKSkge1xuICAgICAgY29uc3QgZm9vID0gQXJyYXkuZnJvbShtb2RhbEdyaWQuY2hpbGROb2Rlcyk7XG4gICAgICBmb28uZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHRlZCcpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vKiBsb2dpY1xuXG4gIC8vKiBvdXR3YXJkIGZhY2luZyBmdW5jdGlvbnNcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5TW9kYWwsXG4gICAgcmVtb3ZlTW9kYWwsXG4gICAgcmVuZGVyTW9kYWxCb2FyZCxcbiAgfTtcbiAgLy8qIG91dHdhcmQgZmFjaW5nIGZ1bmN0aW9uc1xufVxuXG5jb25zdCBtb2RhbCA9IG15TWFudWFsTW9kYWwoKTtcbmV4cG9ydCBkZWZhdWx0IG1vZGFsO1xuIiwiZnVuY3Rpb24gdXBkYXRlVGV4dChub2RlRWxlbWVudCwgbWVzc2FnZSkge1xuICBjb25zdCB0aGlzTm9kZUVsZW1lbnQgPSBub2RlRWxlbWVudDtcbiAgdGhpc05vZGVFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlUm90YXRlRnVuY3Rpb25hbGl0eShkb21FbGVtZW50LCB0ZXh0VG9VcGRhdGUpIHtcbiAgY29uc3Qgcm90YXRlID0gZG9tRWxlbWVudDtcbiAgY29uc3QgdGV4dGRpc3BsYXkgPSB0ZXh0VG9VcGRhdGU7XG4gIHVwZGF0ZVRleHQodGV4dGRpc3BsYXksICd2ZXJ0aWNhbCcpO1xuICBsZXQgaXNWZXJ0ID0gdHJ1ZTtcblxuICBjb25zdCBjaGVja1ZlcnQgPSAoKSA9PiBpc1ZlcnQ7XG5cbiAgZnVuY3Rpb24gc3dpdGNoU3RhdGUoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBjaGVja1ZlcnQoKTtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIGlzVmVydCA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVUZXh0KHRleHRkaXNwbGF5LCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGlzVmVydCA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVRleHQodGV4dGRpc3BsYXksICd2ZXJ0aWNhbCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZEV2ZW50VG9Sb3RhdGVCdG4gPSAoKSA9PiB7XG4gICAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoU3RhdGUpO1xuICB9O1xuICBjb25zdCByZW1vdmVFdmVudEZyb21Sb3RhdGVCdG4gPSAoKSA9PiB7XG4gICAgcm90YXRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoU3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGdldFZlcnQoKSB7XG4gICAgICBjb25zdCB0cnVlT3JGYWxzZSA9IGNoZWNrVmVydCgpO1xuICAgICAgcmV0dXJuIHRydWVPckZhbHNlO1xuICAgIH0sXG4gICAgaW5pdDogYWRkRXZlbnRUb1JvdGF0ZUJ0bixcbiAgICBlbmQ6IHJlbW92ZUV2ZW50RnJvbVJvdGF0ZUJ0bixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5hYmxlUm90YXRlRnVuY3Rpb25hbGl0eTtcbiIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi4vZ2FtZWJvYXJkRmFjL2dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuLi9zaGlwRmFjdG9yeS9zaGlwRmFjdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcigpIHtcbiAgY29uc3QgcGxheWVyc2hpcHMgPSB7XG4gICAgY2FycmllcjogU2hpcCgnY2FycmllcicsIDUpLFxuICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KSxcbiAgICBkZXN0cm95ZXI6IFNoaXAoJ2Rlc3Ryb3llcicsIDMpLFxuICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJywgMyksXG4gICAgcGF0cm9sOiBTaGlwKCdwYXRyb2wnLCAyKSxcbiAgfTtcbiAgY29uc3QgcGxheWVyYm9hcmQgPSBnYW1lYm9hcmQocGxheWVyc2hpcHMpO1xuICBjb25zdCB7IHJlY2VpdmVBdHRhY2ssIHJhbmRvbWx5UGxhY2VBbGxTaGlwcywgcGxhY2VTaGlwIH0gPSBwbGF5ZXJib2FyZDtcbiAgcmV0dXJuIHtcbiAgICBnZXQgZ2V0Ym9hcmQoKSB7XG4gICAgICByZXR1cm4geyAuLi5wbGF5ZXJib2FyZC5ib2FyZCB9O1xuICAgIH0sXG4gICAgZ2V0IGxlZ2FsTW92ZXMoKSB7XG4gICAgICByZXR1cm4geyAuLi5wbGF5ZXJib2FyZC5nZXRMZWdhbE1vdmVzIH07XG4gICAgfSxcbiAgICBnZXQgZ2V0U2hpcHMoKSB7XG4gICAgICByZXR1cm4geyAuLi5wbGF5ZXJzaGlwcyB9O1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICByYW5kb21seVBsYWNlQWxsU2hpcHMsXG4gICAgcGxhY2VTaGlwLFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChuYW1lLCBzaXplKSB7XG4gIGNvbnN0IHNoaXAgPSBBcnJheS5mcm9tKEFycmF5KHNpemUpLmtleXMoKSk7XG5cbiAgY29uc3QgaGl0ID0gKG51bSkgPT4ge1xuICAgIHNoaXBbc2hpcC5pbmRleE9mKG51bSldID0gJ1gnO1xuICAgIHJldHVybiBbLi4uc2hpcF07XG4gIH07XG5cbiAgY29uc3Qgc2V0Q29vcmRzID0gKGNvb3JkcykgPT4ge1xuICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBjb29yZHM7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcC5ldmVyeSgoaXRlbSkgPT4gaXRlbSA9PT0gJ1gnKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH0sXG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcF07XG4gICAgfSxcbiAgICBnZXQgbG9nKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHNoaXApO1xuICAgIH0sXG4gICAgZ2V0IG5hbWVBbmRTaXplKCkge1xuICAgICAgcmV0dXJuIHsgbmFtZSwgc2l6ZSB9O1xuICAgIH0sXG5cbiAgICBnZXQgY29vcmRzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwLmNvb3JkaW5hdGVzXTtcbiAgICB9LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgc2V0Q29vcmRzLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vISA8IGRvIG5vdCBnZXQgcmlkIG9mIHRoaXMgbGluZSBsb2wgPiAhXFxcXFxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyEgPC8gZG8gbm90IGdldCByaWQgb2YgdGhpcyBsaW5lIGxvbCA+ICFcXFxcXG4vLyA/ICA8IGFwcCB0ZXN0aW5nID4gIVxcXFxcbi8vIGltcG9ydCBhcHAgZnJvbSAnLi9hcHAvYXBwJztcblxuLy8gYXBwKCk7XG4vLyA/ICA8LyBhcHAgdGVzdGluZyA+ICFcXFxcXG4vLyogdGVzdGluZyBtYW51YWwgbW9kYWxcblxuLy8qIHRlc3RpbmcgbWFudWFsIG1vZGFsXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyL3BsYXllcic7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tYW51YWxHYW1lTG9vcC9tTW9kYWwnO1xuXG5jb25zdCB1c2VyID0gUGxheWVyKCk7XG5tb2RhbC5kaXNwbGF5TW9kYWwoKTtcbm1vZGFsLnJlbmRlck1vZGFsQm9hcmQodXNlci5nZXRib2FyZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=