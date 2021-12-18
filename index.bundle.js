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
___CSS_LOADER_EXPORT___.push([module.id, "/* The Modal (background) */\n.modal {\n  display: flex; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0); /* Black w/ opacity */\n  justify-content: center;\n  align-content: center;\n}\n\n/* Modal Content/Box */\n.mModalContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n", "",{"version":3,"sources":["webpack://./src/manualGameLoop/manualGameLoop.css"],"names":[],"mappings":"AAAA,2BAA2B;AAC3B;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,kCAAkC,EAAE,qBAAqB;EACzD,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA,sBAAsB;AACtB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV","sourcesContent":["/* The Modal (background) */\n.modal {\n  display: flex; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0); /* Black w/ opacity */\n  justify-content: center;\n  align-content: center;\n}\n\n/* Modal Content/Box */\n.mModalContent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n"],"sourceRoot":""}]);
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
    for (let i = startingPoint; i < endPoint; i += 1) {
      arr.push(startingLetter + i);
    }
    return arr;
  };
  const getHorizonalCoords = () => {
    const startingPoint = letters[letters.indexOf(startingLetter)];
    const endPoint = letters[letters.indexOf(startingLetter) + size];
    if (endPoint === undefined) return console.log('error');
    const arr = [];
    for (let i = letters.indexOf(startingPoint); i < letters.indexOf(endPoint); i += 1) {
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
    const target = e.target.classList[0];
    const thing = (0,_handleClick__WEBPACK_IMPORTED_MODULE_4__["default"])(target, rotate, 5);
    console.log(thing);
  });

  //* click to place ship logic

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9tYW51YWxHYW1lTG9vcC9tYW51YWxHYW1lTG9vcC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3N0YXJ0R2FtZU1vZGFsL3N0YXJ0R2FtZU1vZGFsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvY2FjaGVEb20vY2FjaGVEb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2RvbUNvbXBvbmVudHMvbWFrZWJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZG9tQ3JlYXRvci9kb21DcmVhdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvYm9hcmRPYmouanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2dhbWVib2FyZEZhYy9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2dhbWVib2FyZEZhYy9jaGVja3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2dhbWVib2FyZEZhYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2dhbWVib2FyZEZhYy9wbGFjZVJhbmRvbWx5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9tYW51YWxHYW1lTG9vcC9oYW5kbGVDbGljay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvbWFudWFsR2FtZUxvb3AvbU1vZGFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9tYW51YWxHYW1lTG9vcC9yb3RhdGVPYmouanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3JlbW92ZUFsbENoaWxkcmVuL3JlbW92ZUFsbENoaWxkcmVuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9zaGlwRmFjdG9yeS9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tTW9kYWxDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYW51YWxHYW1lTG9vcC9tYW51YWxHYW1lTG9vcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxrQ0FBa0MsRUFBRSxxQkFBcUI7RUFDekQsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tTW9kYWxDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLnN0YXJ0TW9kYWxDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuI3BsYWNlT3duU2hpcHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuI3BsYWNlU2hpcHNSYW5kb21seSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXG59XFxuXFxuLnN0YXJ0TW9kYWxPcHRpb25zIHtcXG4gIGhlaWdodDogMTByZW07XFxuICB3aWR0aDogMTByZW07XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdGFydEdhbWVNb2RhbC9zdGFydEdhbWVNb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7RUFDM0QsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLnN0YXJ0TW9kYWxDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuI3BsYWNlT3duU2hpcHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuI3BsYWNlU2hpcHNSYW5kb21seSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcXG59XFxuXFxuLnN0YXJ0TW9kYWxPcHRpb25zIHtcXG4gIGhlaWdodDogMTByZW07XFxuICB3aWR0aDogMTByZW07XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMvZ2FtZWJvYXJkcy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydEdhbWVNb2RhbC9zdGFydEdhbWVNb2RhbC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYW51YWxHYW1lTG9vcC9tYW51YWxHYW1lTG9vcC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNwbGF5ZXJHcmlkQXJlYSxcXG4jYm90R3JpZEFyZWEsXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCk7XFxufVxcblxcbi5wYnVmZmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjZWQ0ZGE7XFxufVxcblxcbi5wY2FycmllcixcXG4ucGJhdHRsZXNoaXAsXFxuLnBkZXN0cm95ZXIsXFxuLnBzdWJtYXJpbmUsXFxuLnBwYXRyb2wge1xcbiAgYmFja2dyb3VuZDogcmdiKDY4LCA2OCwgNjgpO1xcbn1cXG5cXG4ucGhpdCxcXG4uaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDEzMywgMTMzKTtcXG59XFxuXFxuLnBtaXNzLFxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzMsIDI1NSwgMTc5KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7OztFQUtFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsOEJBQThCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwbGF5ZXJHcmlkQXJlYSxcXG4jYm90R3JpZEFyZWEsXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCk7XFxufVxcblxcbi5wYnVmZmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjZWQ0ZGE7XFxufVxcblxcbi5wY2FycmllcixcXG4ucGJhdHRsZXNoaXAsXFxuLnBkZXN0cm95ZXIsXFxuLnBzdWJtYXJpbmUsXFxuLnBwYXRyb2wge1xcbiAgYmFja2dyb3VuZDogcmdiKDY4LCA2OCwgNjgpO1xcbn1cXG5cXG4ucGhpdCxcXG4uaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDEzMywgMTMzKTtcXG59XFxuXFxuLnBtaXNzLFxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzMsIDI1NSwgMTc5KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjYWNoZURvbSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICBjb25zdCBub25Nb2RhbENvbnRlbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI25vbk1vZGFsQ29udGVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBub25Nb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICBjb25zdCBib2FyZHMgPSBub25Nb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcignI2JvYXJkcycpO1xuICBjb25zdCBwbGF5ZXJHcmlkQXJlYSA9IGJvYXJkcy5xdWVyeVNlbGVjdG9yKCcjcGxheWVyR3JpZEFyZWEnKTtcbiAgY29uc3QgYm90R3JpZEFyZWEgPSBib2FyZHMucXVlcnlTZWxlY3RvcignI2JvdEdyaWRBcmVhJyk7XG4gIGNvbnN0IGZvb3RlciA9IG5vbk1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXIsXG4gICAgbm9uTW9kYWxDb250ZW50LFxuICAgIGhlYWRlcixcbiAgICBib2FyZHMsXG4gICAgcGxheWVyR3JpZEFyZWEsXG4gICAgYm90R3JpZEFyZWEsXG4gICAgZm9vdGVyLFxuICB9O1xufVxuXG5jb25zdCBjYWNoZWQgPSBjYWNoZURvbSgpO1xuZXhwb3J0IGRlZmF1bHQgY2FjaGVkO1xuIiwiaW1wb3J0IGRvbSBmcm9tICcuLi9kb21DcmVhdG9yL2RvbUNyZWF0b3InO1xuaW1wb3J0IHJlbW92ZUFsbENoaWxkTm9kZXMgZnJvbSAnLi4vcmVtb3ZlQWxsQ2hpbGRyZW4vcmVtb3ZlQWxsQ2hpbGRyZW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJCb2FyZChvYmosIHBhcmVudCwgcGxheWVyID0gZmFsc2UpIHtcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpO1xuICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMob2JqKTtcbiAgZW50cmllcy5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAocGxheWVyKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9tKHsgY2xhc3NlczogW2tleSwgYHAke3ZhbHVlfWAsICdjZWxsJ10gfSk7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmICghcGxheWVyKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICdoaXQnIHx8IHZhbHVlID09PSAnbWlzcycpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbSh7IGNsYXNzZXM6IFtrZXksIGAke3ZhbHVlfWAsICdjZWxsJ10gfSk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb20oeyBjbGFzc2VzOiBba2V5LCAnY2VsbCddIH0pO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvbShvYmopIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnRhZyB8fCAnZGl2Jyk7XG4gIE9iamVjdC5rZXlzKG9iaikubWFwKChwcm9wKSA9PiB7XG4gICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLnRleHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xhc3Nlcyc6XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmouY2xhc3NlcykpIHJldHVybiBjb25zb2xlLmxvZygnY2xhc3NlcyBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgICAgIG9iai5jbGFzc2VzLm1hcCgoYykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iai5hdHRyaWJ1dGVzKSkgcmV0dXJuIGNvbnNvbGUubG9nKGBhdHRyaWJ1dGVzIG11c3QgYmUgYW4gYXJyYXlgKTtcbiAgICAgICAgb2JqLmF0dHJpYnV0ZXMubWFwKChhdHRyKSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShPYmplY3Qua2V5cyhhdHRyKSwgT2JqZWN0LnZhbHVlcyhhdHRyKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V2ZW50cyc6XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmouZXZlbnRzKSkgcmV0dXJuIGNvbnNvbGUubG9nKGBldmVudHMgbXVzdCBiZSBhbiBhcnJheWApO1xuICAgICAgICBvYmouZXZlbnRzLm1hcCgoeyB0eXBlLCBoYW5kbGVyIH0pID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hpbGRyZW4nOlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqLmNoaWxkcmVuKSkgcmV0dXJuIGNvbnNvbGUubG9nKGBjaGlsZHJlbiBtdXN0IGJlIGFuIGFycmF5YCk7XG4gICAgICAgIG9iai5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgQTA6ICdlbXB0eScsXG4gIEIwOiAnZW1wdHknLFxuICBDMDogJ2VtcHR5JyxcbiAgRDA6ICdlbXB0eScsXG4gIEUwOiAnZW1wdHknLFxuICBGMDogJ2VtcHR5JyxcbiAgRzA6ICdlbXB0eScsXG4gIEgwOiAnZW1wdHknLFxuICBJMDogJ2VtcHR5JyxcbiAgSjA6ICdlbXB0eScsXG4gIEExOiAnZW1wdHknLFxuICBCMTogJ2VtcHR5JyxcbiAgQzE6ICdlbXB0eScsXG4gIEQxOiAnZW1wdHknLFxuICBFMTogJ2VtcHR5JyxcbiAgRjE6ICdlbXB0eScsXG4gIEcxOiAnZW1wdHknLFxuICBIMTogJ2VtcHR5JyxcbiAgSTE6ICdlbXB0eScsXG4gIEoxOiAnZW1wdHknLFxuICBBMjogJ2VtcHR5JyxcbiAgQjI6ICdlbXB0eScsXG4gIEMyOiAnZW1wdHknLFxuICBEMjogJ2VtcHR5JyxcbiAgRTI6ICdlbXB0eScsXG4gIEYyOiAnZW1wdHknLFxuICBHMjogJ2VtcHR5JyxcbiAgSDI6ICdlbXB0eScsXG4gIEkyOiAnZW1wdHknLFxuICBKMjogJ2VtcHR5JyxcbiAgQTM6ICdlbXB0eScsXG4gIEIzOiAnZW1wdHknLFxuICBDMzogJ2VtcHR5JyxcbiAgRDM6ICdlbXB0eScsXG4gIEUzOiAnZW1wdHknLFxuICBGMzogJ2VtcHR5JyxcbiAgRzM6ICdlbXB0eScsXG4gIEgzOiAnZW1wdHknLFxuICBJMzogJ2VtcHR5JyxcbiAgSjM6ICdlbXB0eScsXG4gIEE0OiAnZW1wdHknLFxuICBCNDogJ2VtcHR5JyxcbiAgQzQ6ICdlbXB0eScsXG4gIEQ0OiAnZW1wdHknLFxuICBFNDogJ2VtcHR5JyxcbiAgRjQ6ICdlbXB0eScsXG4gIEc0OiAnZW1wdHknLFxuICBINDogJ2VtcHR5JyxcbiAgSTQ6ICdlbXB0eScsXG4gIEo0OiAnZW1wdHknLFxuICBBNTogJ2VtcHR5JyxcbiAgQjU6ICdlbXB0eScsXG4gIEM1OiAnZW1wdHknLFxuICBENTogJ2VtcHR5JyxcbiAgRTU6ICdlbXB0eScsXG4gIEY1OiAnZW1wdHknLFxuICBHNTogJ2VtcHR5JyxcbiAgSDU6ICdlbXB0eScsXG4gIEk1OiAnZW1wdHknLFxuICBKNTogJ2VtcHR5JyxcbiAgQTY6ICdlbXB0eScsXG4gIEI2OiAnZW1wdHknLFxuICBDNjogJ2VtcHR5JyxcbiAgRDY6ICdlbXB0eScsXG4gIEU2OiAnZW1wdHknLFxuICBGNjogJ2VtcHR5JyxcbiAgRzY6ICdlbXB0eScsXG4gIEg2OiAnZW1wdHknLFxuICBJNjogJ2VtcHR5JyxcbiAgSjY6ICdlbXB0eScsXG4gIEE3OiAnZW1wdHknLFxuICBCNzogJ2VtcHR5JyxcbiAgQzc6ICdlbXB0eScsXG4gIEQ3OiAnZW1wdHknLFxuICBFNzogJ2VtcHR5JyxcbiAgRjc6ICdlbXB0eScsXG4gIEc3OiAnZW1wdHknLFxuICBINzogJ2VtcHR5JyxcbiAgSTc6ICdlbXB0eScsXG4gIEo3OiAnZW1wdHknLFxuICBBODogJ2VtcHR5JyxcbiAgQjg6ICdlbXB0eScsXG4gIEM4OiAnZW1wdHknLFxuICBEODogJ2VtcHR5JyxcbiAgRTg6ICdlbXB0eScsXG4gIEY4OiAnZW1wdHknLFxuICBHODogJ2VtcHR5JyxcbiAgSDg6ICdlbXB0eScsXG4gIEk4OiAnZW1wdHknLFxuICBKODogJ2VtcHR5JyxcbiAgQTk6ICdlbXB0eScsXG4gIEI5OiAnZW1wdHknLFxuICBDOTogJ2VtcHR5JyxcbiAgRDk6ICdlbXB0eScsXG4gIEU5OiAnZW1wdHknLFxuICBGOTogJ2VtcHR5JyxcbiAgRzk6ICdlbXB0eScsXG4gIEg5OiAnZW1wdHknLFxuICBJOTogJ2VtcHR5JyxcbiAgSjk6ICdlbXB0eScsXG59O1xuXG5jb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5jb25zdCBudW1iZXJzID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J107XG5cbmV4cG9ydCB7IGxldHRlcnMsIG51bWJlcnMgfTtcbiIsImZ1bmN0aW9uIGJ1ZmZlclNpbmdsZUNvb3JkKGNlbGwpIHtcbiAgY29uc3QgW2xldHRlciwgbnVtSXNTdHJpbmddID0gY2VsbC5zcGxpdCgnJyk7XG4gIGNvbnN0IG51bXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gIGNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQobnVtSXNTdHJpbmcsIDEwKTtcbiAgY29uc3QgYXJyT2ZMZXR0ZXJzID0gW107XG4gIGNvbnN0IGFyck9mTnVtcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIFVwcGVyQW5kTG93ZXJMZXR0ZXJzKCkge1xuICAgIGlmIChsZXR0ZXJzLmluY2x1ZGVzKGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikgLSAxXSkpIHtcbiAgICAgIGFyck9mTGV0dGVycy5wdXNoKGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikgLSAxXSk7XG4gICAgfVxuICAgIGFyck9mTGV0dGVycy5wdXNoKGxldHRlcik7XG4gICAgaWYgKGxldHRlcnMuaW5jbHVkZXMobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSArIDFdKSkge1xuICAgICAgYXJyT2ZMZXR0ZXJzLnB1c2gobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSArIDFdKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gVXBwZXJBbmRMb3dlck51bWJlcnMoKSB7XG4gICAgaWYgKG51bXMuaW5jbHVkZXMobnVtc1tudW1zLmluZGV4T2YobnVtKSAtIDFdKSkge1xuICAgICAgYXJyT2ZOdW1zLnB1c2gobnVtc1tudW1zLmluZGV4T2YobnVtKSAtIDFdKTtcbiAgICB9XG4gICAgYXJyT2ZOdW1zLnB1c2gobnVtKTtcbiAgICBpZiAobnVtcy5pbmNsdWRlcyhudW1zW251bXMuaW5kZXhPZihudW0pICsgMV0pKSB7XG4gICAgICBhcnJPZk51bXMucHVzaChudW1zW251bXMuaW5kZXhPZihudW0pICsgMV0pO1xuICAgIH1cbiAgfVxuXG4gIFVwcGVyQW5kTG93ZXJMZXR0ZXJzKCk7XG4gIFVwcGVyQW5kTG93ZXJOdW1iZXJzKCk7XG5cbiAgZnVuY3Rpb24gY29tYmluZUxldHRlcnNBbmROdW1iZXJzKCkge1xuICAgIGNvbnN0IG5ld0FyciA9IFtdO1xuICAgIGFyck9mTGV0dGVycy5mb3JFYWNoKChlYWNobGV0dGVyKSA9PiB7XG4gICAgICBhcnJPZk51bXMuZm9yRWFjaCgoZWFjaG51bSkgPT4ge1xuICAgICAgICBuZXdBcnIucHVzaChlYWNobGV0dGVyICsgZWFjaG51bSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3QXJyO1xuICB9XG4gIGNvbnN0IGJ1ZmZlckNlbGwgPSBjb21iaW5lTGV0dGVyc0FuZE51bWJlcnMoKTtcbiAgY29uc3QgcmVtb3ZlRHVwbGljYXRlc2Zyb21CdWZmZXJDZWxsID0gWy4uLm5ldyBTZXQoYnVmZmVyQ2VsbCldO1xuICByZXR1cm4gcmVtb3ZlRHVwbGljYXRlc2Zyb21CdWZmZXJDZWxsO1xufVxuXG5mdW5jdGlvbiBidWZmZXJBbGxDb29yZHMoYXJyKSB7XG4gIGNvbnN0IG5ld0FyciA9IFtdO1xuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGJ1ZmZlckVhY2hDZWxsID0gYnVmZmVyU2luZ2xlQ29vcmQoaXRlbSk7XG4gICAgbmV3QXJyLnB1c2goLi4uYnVmZmVyRWFjaENlbGwpO1xuICB9KTtcbiAgY29uc3QgYWxsQ2VsbHNUb0J1ZmZlciA9IFsuLi5uZXcgU2V0KG5ld0FycildO1xuICByZXR1cm4gYWxsQ2VsbHNUb0J1ZmZlcjtcbn1cblxuZnVuY3Rpb24gZ2V0QnVmZmVyWm9uZUFycmF5KGNvb3Jkcykge1xuICBjb25zdCBidWZmZXJNaW51c1NoaXAgPSBbXG4gICAgLi4ubmV3IFNldChidWZmZXJBbGxDb29yZHMoY29vcmRzKS5maWx0ZXIoKGl0ZW0pID0+ICFjb29yZHMuaW5jbHVkZXMoaXRlbSkpKSxcbiAgXTtcbiAgcmV0dXJuIGJ1ZmZlck1pbnVzU2hpcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QnVmZmVyWm9uZUFycmF5O1xuIiwiZnVuY3Rpb24gY2hlY2tTaXplKHNpemUsIGNvb3Jkc0xlbmd0aCkge1xuICBjb25zdCBpc01hdGNoaW5nU2l6ZSA9IHNpemUgPT09IGNvb3Jkc0xlbmd0aDtcbiAgcmV0dXJuIGlzTWF0Y2hpbmdTaXplO1xufVxuXG5mdW5jdGlvbiBjaGVja0NlbGxJc0VtcHR5KGJvYXJkLCBjb29yZGluYXRlcykge1xuICBjb25zdCBhcmVDZWxsc0VtcHR5ID0gY29vcmRpbmF0ZXMuZXZlcnkoKGNvb3JkKSA9PiBib2FyZFtjb29yZF0gPT09ICdlbXB0eScpO1xuICByZXR1cm4gYXJlQ2VsbHNFbXB0eTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDZWxsRXhpc3RzKGJvYXJkLCBjb29yZGluYXRlcykge1xuICBjb25zdCBkb0NlbGxzRXhpc3QgPSBjb29yZGluYXRlcy5ldmVyeSgoY29vcmQpID0+XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGJvYXJkLCBjb29yZClcbiAgKTtcbiAgcmV0dXJuIGRvQ2VsbHNFeGlzdDtcbn1cblxuY29uc3QgcnVuQWxsQ2hlY2tzID0gKGdhbWVCLCBzaGlwU2l6ZSwgY29vcmRpbmF0ZXMpID0+IHtcbiAgY29uc3QgY2hlY2sxID0gY2hlY2tTaXplKHNoaXBTaXplLCBjb29yZGluYXRlcy5sZW5ndGgpO1xuICBjb25zdCBjaGVjazIgPSBjaGVja0NlbGxJc0VtcHR5KGdhbWVCLCBjb29yZGluYXRlcyk7XG4gIGNvbnN0IGNoZWNrMyA9IGNoZWNrQ2VsbEV4aXN0cyhnYW1lQiwgY29vcmRpbmF0ZXMpO1xuICBjb25zdCBhbGxDaGVja3MgPSBjaGVjazEgJiYgY2hlY2syICYmIGNoZWNrMztcbiAgcmV0dXJuIGFsbENoZWNrcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bkFsbENoZWNrcztcbiIsImltcG9ydCBib2FyZE9iaiBmcm9tICcuL2JvYXJkT2JqJztcbmltcG9ydCBydW5BbGxDaGVja3MgZnJvbSAnLi9jaGVja3MnO1xuaW1wb3J0IHBsYWNlUmFuZG9tbHkgZnJvbSAnLi9wbGFjZVJhbmRvbWx5JztcbmltcG9ydCBnZXRCdWZmZXJab25lQXJyYXkgZnJvbSAnLi9idWZmZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoc2hpcE9iaikge1xuICBjb25zdCBib2FyZCA9IHsgLi4uYm9hcmRPYmogfTtcbiAgY29uc3QgbGVnYWxNb3ZlcyA9IHsgLi4uYm9hcmRPYmogfTtcbiAgY29uc3QgcmVjb3JkQWxsU2hvdHMgPSBbXTtcblxuICBmdW5jdGlvbiBtYXJrYm9hcmRIaXRPck1pc3MoaGl0T3JNaXNzLCBjb29yZGluYXRlKSB7XG4gICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBoaXRPck1pc3M7XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrQm9hcmRXaXRoU2hpcChzaGlwVG9NYXJrLCBjb29yZGluYXRlcykge1xuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBib2FyZFtjb29yZF0gPSBzaGlwVG9NYXJrLm5hbWU7XG4gICAgfSk7XG4gICAgc2hpcFRvTWFyay5zZXRDb29yZHMoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFya0J1ZmZlclpvbmUoYnVmZmVyQXJyYXkpIHtcbiAgICBidWZmZXJBcnJheS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgYm9hcmRbY29vcmRdID0gJ2J1ZmZlcic7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzKSB7XG4gICAgY29uc3QgZm9vID0gcnVuQWxsQ2hlY2tzKGJvYXJkLCBzaGlwLnNpemUsIGNvb3Jkcyk7XG4gICAgaWYgKCFmb28pIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZm9vKSB7XG4gICAgICBjb25zdCBidWZmZXJab25lID0gZ2V0QnVmZmVyWm9uZUFycmF5KGNvb3Jkcyk7XG4gICAgICBtYXJrQnVmZmVyWm9uZShidWZmZXJab25lKTtcbiAgICAgIG1hcmtCb2FyZFdpdGhTaGlwKHNoaXAsIGNvb3Jkcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIHJhbmRvbWx5UGxhY2VTaGlwKHNoaXApIHtcbiAgICBjb25zdCBjb29yZHNUb0NoZWNrID0gcGxhY2VSYW5kb21seShzaGlwKTtcbiAgICBjb25zdCBkaWRDb29yZHNQYXNzID0gcnVuQWxsQ2hlY2tzKGJvYXJkLCBzaGlwLnNpemUsIGNvb3Jkc1RvQ2hlY2spO1xuICAgIGlmICghZGlkQ29vcmRzUGFzcykge1xuICAgICAgcmV0dXJuIHJhbmRvbWx5UGxhY2VTaGlwKHNoaXApO1xuICAgIH1cbiAgICBpZiAoZGlkQ29vcmRzUGFzcykge1xuICAgICAgcmV0dXJuIHBsYWNlU2hpcChzaGlwLCBjb29yZHNUb0NoZWNrKTtcbiAgICB9XG4gICAgcmV0dXJuICdlcnJvciBzb21ldGhpbmcgd2VudCBob3JyaWJseSB3cm9uZyc7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21seVBsYWNlQWxsU2hpcHMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhzaGlwT2JqKS5mb3JFYWNoKChzaGlwKSA9PiByYW5kb21seVBsYWNlU2hpcChzaGlwKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhcmVBbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoc2hpcE9iaikuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUxlZ2FsTW92ZXNBbmRBZGRUb1JlY29yZFNob3RzKGlkKSB7XG4gICAgZGVsZXRlIGxlZ2FsTW92ZXNbaWRdO1xuICAgIHJlY29yZEFsbFNob3RzLnB1c2goaWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjZWxsKSB7XG4gICAgaWYgKHJlY29yZEFsbFNob3RzLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICByZXR1cm4gJ2Vycm9yIGlsbGVnYWwgc2hvdCc7XG4gICAgfVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2hpcE9iaiwgYm9hcmRbY2VsbF0pKSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcE9ialtib2FyZFtjZWxsXV07XG4gICAgICBzaGlwLmhpdChzaGlwLmNvb3Jkcy5pbmRleE9mKGNlbGwpKTtcbiAgICAgIHJlbW92ZUZyb21MZWdhbE1vdmVzQW5kQWRkVG9SZWNvcmRTaG90cyhjZWxsKTtcbiAgICAgIGNvbnN0IGNoZWNrSWZBbGxTaGlwc0FyZVN1bmsgPSBhcmVBbGxTaGlwc1N1bmsoKTtcbiAgICAgIGNvbnN0IGhpdE9yQWxsU3VuayA9IGNoZWNrSWZBbGxTaGlwc0FyZVN1bmsgPyAnYWxsIHNoaXBzIGFyZSBzdW5rIScgOiAnaGl0JztcbiAgICAgIG1hcmtib2FyZEhpdE9yTWlzcygnaGl0JywgY2VsbCk7XG4gICAgICByZXR1cm4gaGl0T3JBbGxTdW5rO1xuICAgIH1cbiAgICBpZiAoYm9hcmRbY2VsbF0gPT09ICdlbXB0eScgfHwgYm9hcmRbY2VsbF0gPT09ICdidWZmZXInKSB7XG4gICAgICBtYXJrYm9hcmRIaXRPck1pc3MoJ21pc3MnLCBjZWxsKTtcbiAgICAgIHJlbW92ZUZyb21MZWdhbE1vdmVzQW5kQWRkVG9SZWNvcmRTaG90cyhjZWxsKTtcbiAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgfVxuICAgIHJldHVybiAnc29tZXRoaW5nIHdlbnQgaG9ycmlibHkgd3JvbmcnO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4geyAuLi5ib2FyZCB9O1xuICAgIH0sXG4gICAgZ2V0IGdldExlZ2FsTW92ZXMoKSB7XG4gICAgICByZXR1cm4geyAuLi5sZWdhbE1vdmVzIH07XG4gICAgfSxcbiAgICBnZXQgZ2V0UmVjb3JkQWxsU2hvdHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnJlY29yZEFsbFNob3RzXTtcbiAgICB9LFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHJhbmRvbWx5UGxhY2VTaGlwLFxuICAgIHJhbmRvbWx5UGxhY2VBbGxTaGlwcyxcbiAgfTtcbn1cbiIsImNvbnN0IG51bXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5jb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbmNvbnN0IHJhbmRvbUZyb21FbnRpcmVBcnIgPSAoYXJyKSA9PiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xuY29uc3QgcmFuZG9tRnJvbVN0YXJ0aW5nUG9pbnQgPSAoYXJyLCBzaXplKSA9PiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGFyci5sZW5ndGggLSBzaXplKSldO1xuXG5mdW5jdGlvbiByYW5kb21WZXJ0aWNhbChzaGlwc2l6ZSkge1xuICBjb25zdCBwaWNrUm93ID0gcmFuZG9tRnJvbUVudGlyZUFycihsZXR0ZXJzKTtcbiAgY29uc3Qgc3RhcnRpbmdOdW0gPSByYW5kb21Gcm9tU3RhcnRpbmdQb2ludChudW1zLCBzaGlwc2l6ZSk7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnRpbmdOdW07IGkgPCBzdGFydGluZ051bSArIHNoaXBzaXplOyBpICs9IDEpIHtcbiAgICBjb29yZHMucHVzaChgJHtwaWNrUm93fSR7bnVtc1tpXX1gKTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5mdW5jdGlvbiByYW5kb21Ib3Jpem9udGFsKHNoaXBzaXplKSB7XG4gIGNvbnN0IHBpY2tDb2x1bW4gPSByYW5kb21Gcm9tRW50aXJlQXJyKG51bXMpO1xuICBjb25zdCBzdGFydGluZ0xldHRlciA9IHJhbmRvbUZyb21TdGFydGluZ1BvaW50KG51bXMsIHNoaXBzaXplKTtcbiAgY29uc3QgY29vcmRzID0gW107XG4gIGZvciAobGV0IGkgPSBzdGFydGluZ0xldHRlcjsgaSA8IHN0YXJ0aW5nTGV0dGVyICsgc2hpcHNpemU7IGkgKz0gMSkge1xuICAgIGNvb3Jkcy5wdXNoKGAke2xldHRlcnNbaV19JHtwaWNrQ29sdW1ufWApO1xuICB9XG4gIHJldHVybiBjb29yZHM7XG59XG5cbmZ1bmN0aW9uIHBsYWNlUmFuZG9tbHkoeyBzaXplIH0pIHtcbiAgY29uc3QgZmlmdHlmaWZ0eSA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gIGlmIChmaWZ0eWZpZnR5KSB7XG4gICAgcmV0dXJuIHJhbmRvbUhvcml6b250YWwoc2l6ZSk7XG4gIH1cbiAgaWYgKCFmaWZ0eWZpZnR5KSB7XG4gICAgcmV0dXJuIHJhbmRvbVZlcnRpY2FsKHNpemUpO1xuICB9XG4gIHJldHVybiAnZXJyb3Igc29tZXRoaW5nIHdlbnQgaG9ycmlibHkgd3JvbmcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwbGFjZVJhbmRvbWx5O1xuIiwiZnVuY3Rpb24gZ2V0VmVydE9ySG9pekFyckJhc2VkT25TaXplKGNlbGwsIHJvdGF0ZUluc3RhbmNlLCBsZW5ndGgpIHtcbiAgY29uc3QgaXNWZXJ0ID0gcm90YXRlSW5zdGFuY2UuZ2V0VmVydDtcbiAgY29uc3Qgc2l6ZSA9IHBhcnNlSW50KGxlbmd0aCwgMTApO1xuICBjb25zdCBbc3RhcnRpbmdMZXR0ZXIsIHVucGFyc2VkU3RhcnROdW1dID0gY2VsbC5zcGxpdCgnJyk7XG4gIGNvbnN0IHN0YXJ0TnVtID0gcGFyc2VJbnQodW5wYXJzZWRTdGFydE51bSwgMTApO1xuXG4gIGNvbnN0IG51bXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gIGNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuICBjb25zdCBnZXRWZXJ0aWNhbENvb3JkcyA9ICgpID0+IHtcbiAgICBjb25zdCBzdGFydGluZ1BvaW50ID0gbnVtc1tudW1zLmluZGV4T2Yoc3RhcnROdW0pXTtcbiAgICBjb25zdCBlbmRQb2ludCA9IG51bXNbbnVtcy5pbmRleE9mKHN0YXJ0TnVtKSArIHNpemVdO1xuICAgIGlmIChlbmRQb2ludCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nUG9pbnQ7IGkgPCBlbmRQb2ludDsgaSArPSAxKSB7XG4gICAgICBhcnIucHVzaChzdGFydGluZ0xldHRlciArIGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuICBjb25zdCBnZXRIb3Jpem9uYWxDb29yZHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRpbmdQb2ludCA9IGxldHRlcnNbbGV0dGVycy5pbmRleE9mKHN0YXJ0aW5nTGV0dGVyKV07XG4gICAgY29uc3QgZW5kUG9pbnQgPSBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihzdGFydGluZ0xldHRlcikgKyBzaXplXTtcbiAgICBpZiAoZW5kUG9pbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBsZXR0ZXJzLmluZGV4T2Yoc3RhcnRpbmdQb2ludCk7IGkgPCBsZXR0ZXJzLmluZGV4T2YoZW5kUG9pbnQpOyBpICs9IDEpIHtcbiAgICAgIGFyci5wdXNoKGxldHRlcnNbaV0gKyBzdGFydE51bSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgbGV0IHJlc3VsdEFycjtcblxuICBzd2l0Y2ggKGlzVmVydCkge1xuICAgIGNhc2UgdHJ1ZTpcbiAgICAgIGlmIChudW1zW251bXMuaW5kZXhPZihzdGFydE51bSArIHNpemUpXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICByZXN1bHRBcnIgPSBnZXRWZXJ0aWNhbENvb3JkcygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBmYWxzZTpcbiAgICAgIGlmIChsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihzdGFydGluZ0xldHRlcikgKyBzaXplXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICByZXN1bHRBcnIgPSBnZXRIb3Jpem9uYWxDb29yZHMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gcmVzdWx0QXJyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRWZXJ0T3JIb2l6QXJyQmFzZWRPblNpemU7XG4iLCJpbXBvcnQgZG9tIGZyb20gJy4uL2RvbUNyZWF0b3IvZG9tQ3JlYXRvcic7XG5pbXBvcnQgY2FjaGVkIGZyb20gJy4uL2NhY2hlRG9tL2NhY2hlRG9tJztcbmltcG9ydCByZW5kZXJCb2FyZCBmcm9tICcuLi9kb21Db21wb25lbnRzL21ha2Vib2FyZHMnO1xuaW1wb3J0IGVuYWJsZVJvdGF0ZUZ1bmN0aW9uYWxpdHkgZnJvbSAnLi9yb3RhdGVPYmonO1xuaW1wb3J0IGhhbmRsZU1Nb2RhbENsaWNrIGZyb20gJy4vaGFuZGxlQ2xpY2snO1xuXG5mdW5jdGlvbiBteU1hbnVhbE1vZGFsKCkge1xuICAvLyogZG9tXG4gIGNvbnN0IHsgY29udGFpbmVyLCBub25Nb2RhbENvbnRlbnQgfSA9IGNhY2hlZDtcbiAgY29uc3QgbWFudWFsTW9kYWwgPSBkb20oeyBhdHRyaWJ1dGVzOiBbeyBpZDogJ21hbnVhbE1vZGFsJyB9XSwgY2xhc3NlczogWydtb2RhbCddIH0pO1xuICBjb25zdCBtTW9kYWxDb250ZW50ID0gZG9tKHsgY2xhc3NlczogWydtTW9kYWxDb250ZW50J10gfSk7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvbSh7IHRhZzogJ2J1dHRvbicsIHRleHQ6ICdyb3RhdGUnLCBhdHRyaWJ1dGVzOiBbeyBpZDogJ3JvdGF0ZScgfV0gfSk7XG4gIGNvbnN0IHN0YXRpY1JvdGF0aW9uVGV4dCA9IGRvbSh7XG4gICAgdGV4dDogJ3NoaXAgcGxhY2VtZW50OiAnLFxuICAgIGF0dHJpYnV0ZXM6IFt7IGlkOiAnc3RhdGljUm90YXRpb25UZXh0JyB9XSxcbiAgfSk7XG4gIGNvbnN0IGR5bmFtaWNSb3RhdGlvblRleHQgPSBkb20oeyB0YWc6ICdzcGFuJywgYXR0cmlidXRlczogW3sgaWQ6ICdkeW5hbWljUm90YXRpb25UZXh0JyB9XSB9KTtcbiAgY29uc3QgbW9kYWxHcmlkID0gZG9tKHsgYXR0cmlidXRlczogW3sgaWQ6ICdtb2RhbEdyaWQnIH1dLCBjbGFzc2VzOiBbJ2dyaWQnXSB9KTtcbiAgY29uc3Qgc2hpcE5hbWUgPSBkb20oeyB0ZXh0OiAncGxhY2Vob2xkZXIgc2hpcCBuYW1lJywgYXR0cmlidXRlczogW3sgaWQ6ICdzaGlwTmFtZScgfV0gfSk7XG4gIC8vKiBkb21cblxuICAvLyogbG9naWNcbiAgY29uc3QgcmVtb3ZlQmFja0Ryb3AgPSAoKSA9PiBub25Nb2RhbENvbnRlbnQucmVtb3ZlKCk7XG4gIC8vIGNvbnN0IHJldHVybmJhY2tEcm9wID0gKCkgPT4gLy8gcmUgcmVuZGVyIGJhY2tkcm9wIChub25Nb2RhbENvbnRlbnQpXG4gIGNvbnN0IHJlbW92ZU1vZGFsID0gKCkgPT4ge1xuICAgIG1hbnVhbE1vZGFsLnJlbW92ZSgpO1xuICAgIC8vIHJldHVybmJhY2tEcm9wKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlzcGxheU1vZGFsKCkge1xuICAgIG1Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcbiAgICBzdGF0aWNSb3RhdGlvblRleHQuYXBwZW5kQ2hpbGQoZHluYW1pY1JvdGF0aW9uVGV4dCk7XG4gICAgbU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzdGF0aWNSb3RhdGlvblRleHQpO1xuICAgIG1Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoc2hpcE5hbWUpO1xuICAgIG1Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxHcmlkKTtcbiAgICBtYW51YWxNb2RhbC5hcHBlbmRDaGlsZChtTW9kYWxDb250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFudWFsTW9kYWwpO1xuICAgIHJlbW92ZUJhY2tEcm9wKCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyTW9kYWxCb2FyZChwbGF5ZXJCb2FyZE9iaikge1xuICAgIHJlbmRlckJvYXJkKHBsYXllckJvYXJkT2JqLCBtb2RhbEdyaWQsIHRydWUpO1xuICB9XG4gIC8vKiByb3RhdGUgbG9naWNcbiAgY29uc3Qgcm90YXRlID0gZW5hYmxlUm90YXRlRnVuY3Rpb25hbGl0eShyb3RhdGVCdG4sIGR5bmFtaWNSb3RhdGlvblRleHQpO1xuICByb3RhdGUuaW5pdCgpO1xuICAvLyogcm90YXRlIGxvZ2ljXG5cbiAgLy8qIGNsaWNrIHRvIHBsYWNlIHNoaXAgbG9naWNcblxuICBtb2RhbEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICBjb25zdCB0aGluZyA9IGhhbmRsZU1Nb2RhbENsaWNrKHRhcmdldCwgcm90YXRlLCA1KTtcbiAgICBjb25zb2xlLmxvZyh0aGluZyk7XG4gIH0pO1xuXG4gIC8vKiBjbGljayB0byBwbGFjZSBzaGlwIGxvZ2ljXG5cbiAgLy8qIGxvZ2ljXG5cbiAgLy8qIG91dHdhcmQgZmFjaW5nIGZ1bmN0aW9uc1xuICByZXR1cm4ge1xuICAgIGRpc3BsYXlNb2RhbCxcbiAgICByZW1vdmVNb2RhbCxcbiAgICByZW5kZXJNb2RhbEJvYXJkLFxuICB9O1xuICAvLyogb3V0d2FyZCBmYWNpbmcgZnVuY3Rpb25zXG59XG5cbmNvbnN0IG1vZGFsID0gbXlNYW51YWxNb2RhbCgpO1xuZXhwb3J0IGRlZmF1bHQgbW9kYWw7XG4iLCJmdW5jdGlvbiB1cGRhdGVUZXh0KG5vZGVFbGVtZW50LCBtZXNzYWdlKSB7XG4gIGNvbnN0IHRoaXNOb2RlRWxlbWVudCA9IG5vZGVFbGVtZW50O1xuICB0aGlzTm9kZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xufVxuXG5mdW5jdGlvbiBlbmFibGVSb3RhdGVGdW5jdGlvbmFsaXR5KGRvbUVsZW1lbnQsIHRleHRUb1VwZGF0ZSkge1xuICBjb25zdCByb3RhdGUgPSBkb21FbGVtZW50O1xuICBjb25zdCB0ZXh0ZGlzcGxheSA9IHRleHRUb1VwZGF0ZTtcbiAgdXBkYXRlVGV4dCh0ZXh0ZGlzcGxheSwgJ3ZlcnRpY2FsJyk7XG4gIGxldCBpc1ZlcnQgPSB0cnVlO1xuXG4gIGNvbnN0IGNoZWNrVmVydCA9ICgpID0+IGlzVmVydDtcblxuICBmdW5jdGlvbiBzd2l0Y2hTdGF0ZSgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGNoZWNrVmVydCgpO1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgaXNWZXJ0ID0gZmFsc2U7XG4gICAgICAgIHVwZGF0ZVRleHQodGV4dGRpc3BsYXksICdob3Jpem9udGFsJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgaXNWZXJ0ID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlVGV4dCh0ZXh0ZGlzcGxheSwgJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkRXZlbnRUb1JvdGF0ZUJ0biA9ICgpID0+IHtcbiAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hTdGF0ZSk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZUV2ZW50RnJvbVJvdGF0ZUJ0biA9ICgpID0+IHtcbiAgICByb3RhdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hTdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgZ2V0VmVydCgpIHtcbiAgICAgIGNvbnN0IHRydWVPckZhbHNlID0gY2hlY2tWZXJ0KCk7XG4gICAgICByZXR1cm4gdHJ1ZU9yRmFsc2U7XG4gICAgfSxcbiAgICBpbml0OiBhZGRFdmVudFRvUm90YXRlQnRuLFxuICAgIGVuZDogcmVtb3ZlRXZlbnRGcm9tUm90YXRlQnRuLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmFibGVSb3RhdGVGdW5jdGlvbmFsaXR5O1xuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuLi9nYW1lYm9hcmRGYWMvZ2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4uL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKCkge1xuICBjb25zdCBwbGF5ZXJzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJywgNSksXG4gICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcsIDQpLFxuICAgIGRlc3Ryb3llcjogU2hpcCgnZGVzdHJveWVyJywgMyksXG4gICAgc3VibWFyaW5lOiBTaGlwKCdzdWJtYXJpbmUnLCAzKSxcbiAgICBwYXRyb2w6IFNoaXAoJ3BhdHJvbCcsIDIpLFxuICB9O1xuICBjb25zdCBwbGF5ZXJib2FyZCA9IGdhbWVib2FyZChwbGF5ZXJzaGlwcyk7XG4gIGNvbnN0IHsgcmVjZWl2ZUF0dGFjaywgcmFuZG9tbHlQbGFjZUFsbFNoaXBzLCBwbGFjZVNoaXAgfSA9IHBsYXllcmJvYXJkO1xuICByZXR1cm4ge1xuICAgIGdldCBnZXRib2FyZCgpIHtcbiAgICAgIHJldHVybiB7IC4uLnBsYXllcmJvYXJkLmJvYXJkIH07XG4gICAgfSxcbiAgICBnZXQgbGVnYWxNb3ZlcygpIHtcbiAgICAgIHJldHVybiB7IC4uLnBsYXllcmJvYXJkLmdldExlZ2FsTW92ZXMgfTtcbiAgICB9LFxuICAgIGdldCBnZXRTaGlwcygpIHtcbiAgICAgIHJldHVybiB7IC4uLnBsYXllcnNoaXBzIH07XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHJhbmRvbWx5UGxhY2VBbGxTaGlwcyxcbiAgICBwbGFjZVNoaXAsXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKG5hbWUsIHNpemUpIHtcbiAgY29uc3Qgc2hpcCA9IEFycmF5LmZyb20oQXJyYXkoc2l6ZSkua2V5cygpKTtcblxuICBjb25zdCBoaXQgPSAobnVtKSA9PiB7XG4gICAgc2hpcFtzaGlwLmluZGV4T2YobnVtKV0gPSAnWCc7XG4gICAgcmV0dXJuIFsuLi5zaGlwXTtcbiAgfTtcblxuICBjb25zdCBzZXRDb29yZHMgPSAoY29vcmRzKSA9PiB7XG4gICAgc2hpcC5jb29yZGluYXRlcyA9IGNvb3JkcztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwLmV2ZXJ5KChpdGVtKSA9PiBpdGVtID09PSAnWCcpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemU7XG4gICAgfSxcbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwXTtcbiAgICB9LFxuICAgIGdldCBsb2coKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coc2hpcCk7XG4gICAgfSxcbiAgICBnZXQgbmFtZUFuZFNpemUoKSB7XG4gICAgICByZXR1cm4geyBuYW1lLCBzaXplIH07XG4gICAgfSxcblxuICAgIGdldCBjb29yZHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXAuY29vcmRpbmF0ZXNdO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBzZXRDb29yZHMsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8hIDwgZG8gbm90IGdldCByaWQgb2YgdGhpcyBsaW5lIGxvbCA+ICFcXFxcXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vISA8LyBkbyBub3QgZ2V0IHJpZCBvZiB0aGlzIGxpbmUgbG9sID4gIVxcXFxcbi8vID8gIDwgYXBwIHRlc3RpbmcgPiAhXFxcXFxuLy8gaW1wb3J0IGFwcCBmcm9tICcuL2FwcC9hcHAnO1xuXG4vLyBhcHAoKTtcbi8vID8gIDwvIGFwcCB0ZXN0aW5nID4gIVxcXFxcbi8vKiB0ZXN0aW5nIG1hbnVhbCBtb2RhbFxuXG4vLyogdGVzdGluZyBtYW51YWwgbW9kYWxcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIvcGxheWVyJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21hbnVhbEdhbWVMb29wL21Nb2RhbCc7XG5cbmNvbnN0IHVzZXIgPSBQbGF5ZXIoKTtcbm1vZGFsLmRpc3BsYXlNb2RhbCgpO1xubW9kYWwucmVuZGVyTW9kYWxCb2FyZCh1c2VyLmdldGJvYXJkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==