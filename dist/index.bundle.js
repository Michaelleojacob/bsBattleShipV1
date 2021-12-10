/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#playerGridArea,\n#botGridArea {\n  display: grid;\n  width: 350px;\n  height: 350px;\n  border: 1px solid rgb(34, 34, 34);\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  margin-bottom: 10px;\n}\n\n.cell {\n  border: 1px solid rgb(34, 34, 34);\n}\n\n.pbuffer {\n  background: #ced4da;\n}\n\n.pcarrier,\n.pbattleship,\n.pdestroyer,\n.psubmarine,\n.ppatrol {\n  background: rgb(68, 68, 68);\n}\n\n.phit,\n.hit {\n  background: rgb(255, 133, 133);\n}\n\n.pmiss,\n.miss {\n  background: rgb(133, 255, 179);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,sCAAsC;EACtC,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;;EAKE,2BAA2B;AAC7B;;AAEA;;EAEE,8BAA8B;AAChC;;AAEA;;EAEE,8BAA8B;AAChC","sourcesContent":["#playerGridArea,\n#botGridArea {\n  display: grid;\n  width: 350px;\n  height: 350px;\n  border: 1px solid rgb(34, 34, 34);\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  margin-bottom: 10px;\n}\n\n.cell {\n  border: 1px solid rgb(34, 34, 34);\n}\n\n.pbuffer {\n  background: #ced4da;\n}\n\n.pcarrier,\n.pbattleship,\n.pdestroyer,\n.psubmarine,\n.ppatrol {\n  background: rgb(68, 68, 68);\n}\n\n.phit,\n.hit {\n  background: rgb(255, 133, 133);\n}\n\n.pmiss,\n.miss {\n  background: rgb(133, 255, 179);\n}\n"],"sourceRoot":""}]);
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
  const boards = container.querySelector('#boards');
  const playerGridArea = boards.querySelector('#playerGridArea');
  const botGridArea = boards.querySelector('#botGridArea');
  return {
    container,
    boards,
    playerGridArea,
    botGridArea,
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
/* harmony export */   "default": () => (/* binding */ makeHiddenBoard)
/* harmony export */ });
/* harmony import */ var _domCreator_domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domCreator/domCreator */ "./src/domCreator/domCreator.js");
/* harmony import */ var _removeAllChildren_removeAllChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../removeAllChildren/removeAllChildren */ "./src/removeAllChildren/removeAllChildren.js");



function makeHiddenBoard(obj, parent, player = false) {
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

//! failsafe prior to trying to impliment hit and miss to bot board
// export default function makeHiddenBoard(obj, parent, player = false) {
//   removeAllChildNodes(parent);
//   const entries = Object.entries(obj);
//   entries.forEach(([key, value]) => {
//     if (player) {
//       const element = dom({ classes: [key, `p${value}`, 'cell'] });
//       parent.appendChild(element);
//     }
//     if (!player) {
//       const element = dom({ classes: [key, 'cell'] });
//       parent.appendChild(element);
//     }
//   });
// }

// how to use examples:
// makeHidden(mb1, playerboard, true);
// makeHidden(mb2, botboard);


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
    if (!foo) return 'Error: one or more checks failed';
    if (foo) {
      const bufferZone = (0,_buffer__WEBPACK_IMPORTED_MODULE_3__["default"])(coords);
      markBufferZone(bufferZone);
      return markBoardWithShip(ship, coords);
    }
    return { ...board };
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

function randomHorizontal(shipsize) {
  const pickRow = randomFromEntireArr(letters);
  const startingNum = randomFromStartingPoint(nums, shipsize);
  const coords = [];
  for (let i = startingNum; i < startingNum + shipsize; i += 1) {
    coords.push(`${pickRow}${nums[i]}`);
  }
  return coords;
}

function randomVertical(shipsize) {
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
    return randomVertical(size);
  }
  if (!fiftyfifty) {
    return randomHorizontal(size);
  }
  return 'error something went horribly wrong';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeRandomly);


/***/ }),

/***/ "./src/mockshipsObj/mockshipsObj.js":
/*!******************************************!*\
  !*** ./src/mockshipsObj/mockshipsObj.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shipFactory/shipFactory */ "./src/shipFactory/shipFactory.js");


const mockShips = {
  carrier: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('carrier', 5),
  battleship: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('battleship', 4),
  destroyer: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('destroyer', 3),
  submarine: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('submarine', 3),
  patrol: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('patrol', 2),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mockShips);


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
/* harmony import */ var _mockshipsObj_mockshipsObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mockshipsObj/mockshipsObj */ "./src/mockshipsObj/mockshipsObj.js");
/* harmony import */ var _gameboardFac_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameboardFac/gameboard */ "./src/gameboardFac/gameboard.js");



function Player() {
  const playerships = { ..._mockshipsObj_mockshipsObj__WEBPACK_IMPORTED_MODULE_0__["default"] };
  const playerboard = (0,_gameboardFac_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(playerships);
  playerboard.randomlyPlaceAllShips();
  const { receiveAttack } = playerboard;
  return {
    get getboard() {
      return { ...playerboard.board };
    },
    get legalMoves() {
      return { ...playerboard.getLegalMoves };
    },
    receiveAttack,
  };
}

//! failsafe => working version (legalmoves.length does not work)
// export default function Player() {
//   const playerships = { ...mockShips };
//   const playerboard = gameboard(playerships);
//   const { receiveAttack, getLegalMoves, getRecordAllShots } = playerboard;
//   playerboard.randomlyPlaceAllShips();
//   return {
//     get getboard() {
//       return { ...playerboard.board };
//     },
//     receiveAttack,
//     getLegalMoves,
//     getRecordAllShots,
//   };
// }


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
/* harmony import */ var _domComponents_makeboards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domComponents/makeboards */ "./src/domComponents/makeboards.js");
/* harmony import */ var _cacheDom_cacheDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cacheDom/cacheDom */ "./src/cacheDom/cacheDom.js");





const { playerGridArea, botGridArea } = _cacheDom_cacheDom__WEBPACK_IMPORTED_MODULE_3__["default"];

const user = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])();

const bot = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])();

(0,_domComponents_makeboards__WEBPACK_IMPORTED_MODULE_2__["default"])(user.getboard, playerGridArea, true);

(0,_domComponents_makeboards__WEBPACK_IMPORTED_MODULE_2__["default"])(bot.getboard, botGridArea, true);

const getRandomLegalCell = (obj) => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

function sendUserAttack() {
  const target = getRandomLegalCell(user.legalMoves);
  user.receiveAttack(target);
  (0,_domComponents_makeboards__WEBPACK_IMPORTED_MODULE_2__["default"])(user.getboard, playerGridArea, true);
}

function sendBotAttack(target) {
  const thing = bot.receiveAttack(target);
  if (thing === 'error illegal shot') return;
  (0,_domComponents_makeboards__WEBPACK_IMPORTED_MODULE_2__["default"])(bot.getboard, botGridArea, true);
  sendUserAttack();
}
function sendAttack(e) {
  if (e.target.classList.contains('cell')) {
    sendBotAttack(e.target.classList[0]);
  }
}

botGridArea.addEventListener('click', sendAttack);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7QUFFRjtBQUNBOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7O0FDMUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3RGxDO0FBQ0E7QUFDQTtBQUNB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QUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2dCO0FBQ29CO0FBQ2hCOztBQUV6QyxRQUFRLDhCQUE4QixFQUFFLDBEQUFNOztBQUU5QyxhQUFhLDBEQUFNOztBQUVuQixZQUFZLDBEQUFNOztBQUVsQixxRUFBZTs7QUFFZixxRUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFFQUFlO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2NhY2hlRG9tL2NhY2hlRG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9kb21Db21wb25lbnRzL21ha2Vib2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2RvbUNyZWF0b3IvZG9tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2JvYXJkT2JqLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvYnVmZmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvY2hlY2tzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvcGxhY2VSYW5kb21seS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvbW9ja3NoaXBzT2JqL21vY2tzaGlwc09iai5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvcmVtb3ZlQWxsQ2hpbGRyZW4vcmVtb3ZlQWxsQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3BsYXllckdyaWRBcmVhLFxcbiNib3RHcmlkQXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzNCwgMzQsIDM0KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCk7XFxufVxcblxcbi5wYnVmZmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjZWQ0ZGE7XFxufVxcblxcbi5wY2FycmllcixcXG4ucGJhdHRsZXNoaXAsXFxuLnBkZXN0cm95ZXIsXFxuLnBzdWJtYXJpbmUsXFxuLnBwYXRyb2wge1xcbiAgYmFja2dyb3VuZDogcmdiKDY4LCA2OCwgNjgpO1xcbn1cXG5cXG4ucGhpdCxcXG4uaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDEzMywgMTMzKTtcXG59XFxuXFxuLnBtaXNzLFxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzMsIDI1NSwgMTc5KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7O0VBS0UsMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3BsYXllckdyaWRBcmVhLFxcbiNib3RHcmlkQXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzNCwgMzQsIDM0KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCk7XFxufVxcblxcbi5wYnVmZmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjZWQ0ZGE7XFxufVxcblxcbi5wY2FycmllcixcXG4ucGJhdHRsZXNoaXAsXFxuLnBkZXN0cm95ZXIsXFxuLnBzdWJtYXJpbmUsXFxuLnBwYXRyb2wge1xcbiAgYmFja2dyb3VuZDogcmdiKDY4LCA2OCwgNjgpO1xcbn1cXG5cXG4ucGhpdCxcXG4uaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDEzMywgMTMzKTtcXG59XFxuXFxuLnBtaXNzLFxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzMsIDI1NSwgMTc5KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjYWNoZURvbSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICBjb25zdCBib2FyZHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI2JvYXJkcycpO1xuICBjb25zdCBwbGF5ZXJHcmlkQXJlYSA9IGJvYXJkcy5xdWVyeVNlbGVjdG9yKCcjcGxheWVyR3JpZEFyZWEnKTtcbiAgY29uc3QgYm90R3JpZEFyZWEgPSBib2FyZHMucXVlcnlTZWxlY3RvcignI2JvdEdyaWRBcmVhJyk7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyLFxuICAgIGJvYXJkcyxcbiAgICBwbGF5ZXJHcmlkQXJlYSxcbiAgICBib3RHcmlkQXJlYSxcbiAgfTtcbn1cblxuY29uc3QgY2FjaGVkID0gY2FjaGVEb20oKTtcbmV4cG9ydCBkZWZhdWx0IGNhY2hlZDtcbiIsImltcG9ydCBkb20gZnJvbSAnLi4vZG9tQ3JlYXRvci9kb21DcmVhdG9yJztcbmltcG9ydCByZW1vdmVBbGxDaGlsZE5vZGVzIGZyb20gJy4uL3JlbW92ZUFsbENoaWxkcmVuL3JlbW92ZUFsbENoaWxkcmVuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUhpZGRlbkJvYXJkKG9iaiwgcGFyZW50LCBwbGF5ZXIgPSBmYWxzZSkge1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCk7XG4gIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhvYmopO1xuICBlbnRyaWVzLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb20oeyBjbGFzc2VzOiBba2V5LCBgcCR7dmFsdWV9YCwgJ2NlbGwnXSB9KTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKCFwbGF5ZXIpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2hpdCcgfHwgdmFsdWUgPT09ICdtaXNzJykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9tKHsgY2xhc3NlczogW2tleSwgYCR7dmFsdWV9YCwgJ2NlbGwnXSB9KTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbSh7IGNsYXNzZXM6IFtrZXksICdjZWxsJ10gfSk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vLyEgZmFpbHNhZmUgcHJpb3IgdG8gdHJ5aW5nIHRvIGltcGxpbWVudCBoaXQgYW5kIG1pc3MgdG8gYm90IGJvYXJkXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlSGlkZGVuQm9hcmQob2JqLCBwYXJlbnQsIHBsYXllciA9IGZhbHNlKSB7XG4vLyAgIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KTtcbi8vICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG9iaik7XG4vLyAgIGVudHJpZXMuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4vLyAgICAgaWYgKHBsYXllcikge1xuLy8gICAgICAgY29uc3QgZWxlbWVudCA9IGRvbSh7IGNsYXNzZXM6IFtrZXksIGBwJHt2YWx1ZX1gLCAnY2VsbCddIH0pO1xuLy8gICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuLy8gICAgIH1cbi8vICAgICBpZiAoIXBsYXllcikge1xuLy8gICAgICAgY29uc3QgZWxlbWVudCA9IGRvbSh7IGNsYXNzZXM6IFtrZXksICdjZWxsJ10gfSk7XG4vLyAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cblxuLy8gaG93IHRvIHVzZSBleGFtcGxlczpcbi8vIG1ha2VIaWRkZW4obWIxLCBwbGF5ZXJib2FyZCwgdHJ1ZSk7XG4vLyBtYWtlSGlkZGVuKG1iMiwgYm90Ym9hcmQpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9tKG9iaikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudGFnIHx8ICdkaXYnKTtcbiAgT2JqZWN0LmtleXMob2JqKS5tYXAoKHByb3ApID0+IHtcbiAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBvYmoudGV4dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iai5jbGFzc2VzKSkgcmV0dXJuIGNvbnNvbGUubG9nKCdjbGFzc2VzIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgb2JqLmNsYXNzZXMubWFwKChjKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYykpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqLmF0dHJpYnV0ZXMpKSByZXR1cm4gY29uc29sZS5sb2coYGF0dHJpYnV0ZXMgbXVzdCBiZSBhbiBhcnJheWApO1xuICAgICAgICBvYmouYXR0cmlidXRlcy5tYXAoKGF0dHIpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKGF0dHIpLCBPYmplY3QudmFsdWVzKGF0dHIpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXZlbnRzJzpcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iai5ldmVudHMpKSByZXR1cm4gY29uc29sZS5sb2coYGV2ZW50cyBtdXN0IGJlIGFuIGFycmF5YCk7XG4gICAgICAgIG9iai5ldmVudHMubWFwKCh7IHR5cGUsIGhhbmRsZXIgfSkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGlsZHJlbic6XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmouY2hpbGRyZW4pKSByZXR1cm4gY29uc29sZS5sb2coYGNoaWxkcmVuIG11c3QgYmUgYW4gYXJyYXlgKTtcbiAgICAgICAgb2JqLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBBMDogJ2VtcHR5JyxcbiAgQjA6ICdlbXB0eScsXG4gIEMwOiAnZW1wdHknLFxuICBEMDogJ2VtcHR5JyxcbiAgRTA6ICdlbXB0eScsXG4gIEYwOiAnZW1wdHknLFxuICBHMDogJ2VtcHR5JyxcbiAgSDA6ICdlbXB0eScsXG4gIEkwOiAnZW1wdHknLFxuICBKMDogJ2VtcHR5JyxcbiAgQTE6ICdlbXB0eScsXG4gIEIxOiAnZW1wdHknLFxuICBDMTogJ2VtcHR5JyxcbiAgRDE6ICdlbXB0eScsXG4gIEUxOiAnZW1wdHknLFxuICBGMTogJ2VtcHR5JyxcbiAgRzE6ICdlbXB0eScsXG4gIEgxOiAnZW1wdHknLFxuICBJMTogJ2VtcHR5JyxcbiAgSjE6ICdlbXB0eScsXG4gIEEyOiAnZW1wdHknLFxuICBCMjogJ2VtcHR5JyxcbiAgQzI6ICdlbXB0eScsXG4gIEQyOiAnZW1wdHknLFxuICBFMjogJ2VtcHR5JyxcbiAgRjI6ICdlbXB0eScsXG4gIEcyOiAnZW1wdHknLFxuICBIMjogJ2VtcHR5JyxcbiAgSTI6ICdlbXB0eScsXG4gIEoyOiAnZW1wdHknLFxuICBBMzogJ2VtcHR5JyxcbiAgQjM6ICdlbXB0eScsXG4gIEMzOiAnZW1wdHknLFxuICBEMzogJ2VtcHR5JyxcbiAgRTM6ICdlbXB0eScsXG4gIEYzOiAnZW1wdHknLFxuICBHMzogJ2VtcHR5JyxcbiAgSDM6ICdlbXB0eScsXG4gIEkzOiAnZW1wdHknLFxuICBKMzogJ2VtcHR5JyxcbiAgQTQ6ICdlbXB0eScsXG4gIEI0OiAnZW1wdHknLFxuICBDNDogJ2VtcHR5JyxcbiAgRDQ6ICdlbXB0eScsXG4gIEU0OiAnZW1wdHknLFxuICBGNDogJ2VtcHR5JyxcbiAgRzQ6ICdlbXB0eScsXG4gIEg0OiAnZW1wdHknLFxuICBJNDogJ2VtcHR5JyxcbiAgSjQ6ICdlbXB0eScsXG4gIEE1OiAnZW1wdHknLFxuICBCNTogJ2VtcHR5JyxcbiAgQzU6ICdlbXB0eScsXG4gIEQ1OiAnZW1wdHknLFxuICBFNTogJ2VtcHR5JyxcbiAgRjU6ICdlbXB0eScsXG4gIEc1OiAnZW1wdHknLFxuICBINTogJ2VtcHR5JyxcbiAgSTU6ICdlbXB0eScsXG4gIEo1OiAnZW1wdHknLFxuICBBNjogJ2VtcHR5JyxcbiAgQjY6ICdlbXB0eScsXG4gIEM2OiAnZW1wdHknLFxuICBENjogJ2VtcHR5JyxcbiAgRTY6ICdlbXB0eScsXG4gIEY2OiAnZW1wdHknLFxuICBHNjogJ2VtcHR5JyxcbiAgSDY6ICdlbXB0eScsXG4gIEk2OiAnZW1wdHknLFxuICBKNjogJ2VtcHR5JyxcbiAgQTc6ICdlbXB0eScsXG4gIEI3OiAnZW1wdHknLFxuICBDNzogJ2VtcHR5JyxcbiAgRDc6ICdlbXB0eScsXG4gIEU3OiAnZW1wdHknLFxuICBGNzogJ2VtcHR5JyxcbiAgRzc6ICdlbXB0eScsXG4gIEg3OiAnZW1wdHknLFxuICBJNzogJ2VtcHR5JyxcbiAgSjc6ICdlbXB0eScsXG4gIEE4OiAnZW1wdHknLFxuICBCODogJ2VtcHR5JyxcbiAgQzg6ICdlbXB0eScsXG4gIEQ4OiAnZW1wdHknLFxuICBFODogJ2VtcHR5JyxcbiAgRjg6ICdlbXB0eScsXG4gIEc4OiAnZW1wdHknLFxuICBIODogJ2VtcHR5JyxcbiAgSTg6ICdlbXB0eScsXG4gIEo4OiAnZW1wdHknLFxuICBBOTogJ2VtcHR5JyxcbiAgQjk6ICdlbXB0eScsXG4gIEM5OiAnZW1wdHknLFxuICBEOTogJ2VtcHR5JyxcbiAgRTk6ICdlbXB0eScsXG4gIEY5OiAnZW1wdHknLFxuICBHOTogJ2VtcHR5JyxcbiAgSDk6ICdlbXB0eScsXG4gIEk5OiAnZW1wdHknLFxuICBKOTogJ2VtcHR5Jyxcbn07XG5cbmNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbmNvbnN0IG51bWJlcnMgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXTtcblxuZXhwb3J0IHsgbGV0dGVycywgbnVtYmVycyB9O1xuIiwiZnVuY3Rpb24gYnVmZmVyU2luZ2xlQ29vcmQoY2VsbCkge1xuICBjb25zdCBbbGV0dGVyLCBudW1Jc1N0cmluZ10gPSBjZWxsLnNwbGl0KCcnKTtcbiAgY29uc3QgbnVtcyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBjb25zdCBudW0gPSBwYXJzZUludChudW1Jc1N0cmluZywgMTApO1xuICBjb25zdCBhcnJPZkxldHRlcnMgPSBbXTtcbiAgY29uc3QgYXJyT2ZOdW1zID0gW107XG5cbiAgZnVuY3Rpb24gVXBwZXJBbmRMb3dlckxldHRlcnMoKSB7XG4gICAgaWYgKGxldHRlcnMuaW5jbHVkZXMobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSAtIDFdKSkge1xuICAgICAgYXJyT2ZMZXR0ZXJzLnB1c2gobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSAtIDFdKTtcbiAgICB9XG4gICAgYXJyT2ZMZXR0ZXJzLnB1c2gobGV0dGVyKTtcbiAgICBpZiAobGV0dGVycy5pbmNsdWRlcyhsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpICsgMV0pKSB7XG4gICAgICBhcnJPZkxldHRlcnMucHVzaChsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpICsgMV0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBVcHBlckFuZExvd2VyTnVtYmVycygpIHtcbiAgICBpZiAobnVtcy5pbmNsdWRlcyhudW1zW251bXMuaW5kZXhPZihudW0pIC0gMV0pKSB7XG4gICAgICBhcnJPZk51bXMucHVzaChudW1zW251bXMuaW5kZXhPZihudW0pIC0gMV0pO1xuICAgIH1cbiAgICBhcnJPZk51bXMucHVzaChudW0pO1xuICAgIGlmIChudW1zLmluY2x1ZGVzKG51bXNbbnVtcy5pbmRleE9mKG51bSkgKyAxXSkpIHtcbiAgICAgIGFyck9mTnVtcy5wdXNoKG51bXNbbnVtcy5pbmRleE9mKG51bSkgKyAxXSk7XG4gICAgfVxuICB9XG5cbiAgVXBwZXJBbmRMb3dlckxldHRlcnMoKTtcbiAgVXBwZXJBbmRMb3dlck51bWJlcnMoKTtcblxuICBmdW5jdGlvbiBjb21iaW5lTGV0dGVyc0FuZE51bWJlcnMoKSB7XG4gICAgY29uc3QgbmV3QXJyID0gW107XG4gICAgYXJyT2ZMZXR0ZXJzLmZvckVhY2goKGVhY2hsZXR0ZXIpID0+IHtcbiAgICAgIGFyck9mTnVtcy5mb3JFYWNoKChlYWNobnVtKSA9PiB7XG4gICAgICAgIG5ld0Fyci5wdXNoKGVhY2hsZXR0ZXIgKyBlYWNobnVtKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdBcnI7XG4gIH1cbiAgY29uc3QgYnVmZmVyQ2VsbCA9IGNvbWJpbmVMZXR0ZXJzQW5kTnVtYmVycygpO1xuICBjb25zdCByZW1vdmVEdXBsaWNhdGVzZnJvbUJ1ZmZlckNlbGwgPSBbLi4ubmV3IFNldChidWZmZXJDZWxsKV07XG4gIHJldHVybiByZW1vdmVEdXBsaWNhdGVzZnJvbUJ1ZmZlckNlbGw7XG59XG5cbmZ1bmN0aW9uIGJ1ZmZlckFsbENvb3JkcyhhcnIpIHtcbiAgY29uc3QgbmV3QXJyID0gW107XG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgYnVmZmVyRWFjaENlbGwgPSBidWZmZXJTaW5nbGVDb29yZChpdGVtKTtcbiAgICBuZXdBcnIucHVzaCguLi5idWZmZXJFYWNoQ2VsbCk7XG4gIH0pO1xuICBjb25zdCBhbGxDZWxsc1RvQnVmZmVyID0gWy4uLm5ldyBTZXQobmV3QXJyKV07XG4gIHJldHVybiBhbGxDZWxsc1RvQnVmZmVyO1xufVxuXG5mdW5jdGlvbiBnZXRCdWZmZXJab25lQXJyYXkoY29vcmRzKSB7XG4gIGNvbnN0IGJ1ZmZlck1pbnVzU2hpcCA9IFtcbiAgICAuLi5uZXcgU2V0KGJ1ZmZlckFsbENvb3Jkcyhjb29yZHMpLmZpbHRlcigoaXRlbSkgPT4gIWNvb3Jkcy5pbmNsdWRlcyhpdGVtKSkpLFxuICBdO1xuICByZXR1cm4gYnVmZmVyTWludXNTaGlwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRCdWZmZXJab25lQXJyYXk7XG4iLCJmdW5jdGlvbiBjaGVja1NpemUoc2l6ZSwgY29vcmRzTGVuZ3RoKSB7XG4gIGNvbnN0IGlzTWF0Y2hpbmdTaXplID0gc2l6ZSA9PT0gY29vcmRzTGVuZ3RoO1xuICByZXR1cm4gaXNNYXRjaGluZ1NpemU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2VsbElzRW1wdHkoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGFyZUNlbGxzRW1wdHkgPSBjb29yZGluYXRlcy5ldmVyeSgoY29vcmQpID0+IGJvYXJkW2Nvb3JkXSA9PT0gJ2VtcHR5Jyk7XG4gIHJldHVybiBhcmVDZWxsc0VtcHR5O1xufVxuXG5mdW5jdGlvbiBjaGVja0NlbGxFeGlzdHMoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGRvQ2VsbHNFeGlzdCA9IGNvb3JkaW5hdGVzLmV2ZXJ5KChjb29yZCkgPT5cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYm9hcmQsIGNvb3JkKVxuICApO1xuICByZXR1cm4gZG9DZWxsc0V4aXN0O1xufVxuXG5jb25zdCBydW5BbGxDaGVja3MgPSAoZ2FtZUIsIHNoaXBTaXplLCBjb29yZGluYXRlcykgPT4ge1xuICBjb25zdCBjaGVjazEgPSBjaGVja1NpemUoc2hpcFNpemUsIGNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gIGNvbnN0IGNoZWNrMiA9IGNoZWNrQ2VsbElzRW1wdHkoZ2FtZUIsIGNvb3JkaW5hdGVzKTtcbiAgY29uc3QgY2hlY2szID0gY2hlY2tDZWxsRXhpc3RzKGdhbWVCLCBjb29yZGluYXRlcyk7XG4gIGNvbnN0IGFsbENoZWNrcyA9IGNoZWNrMSAmJiBjaGVjazIgJiYgY2hlY2szO1xuICByZXR1cm4gYWxsQ2hlY2tzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcnVuQWxsQ2hlY2tzO1xuIiwiaW1wb3J0IGJvYXJkT2JqIGZyb20gJy4vYm9hcmRPYmonO1xuaW1wb3J0IHJ1bkFsbENoZWNrcyBmcm9tICcuL2NoZWNrcyc7XG5pbXBvcnQgcGxhY2VSYW5kb21seSBmcm9tICcuL3BsYWNlUmFuZG9tbHknO1xuaW1wb3J0IGdldEJ1ZmZlclpvbmVBcnJheSBmcm9tICcuL2J1ZmZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZChzaGlwT2JqKSB7XG4gIGNvbnN0IGJvYXJkID0geyAuLi5ib2FyZE9iaiB9O1xuICBjb25zdCBsZWdhbE1vdmVzID0geyAuLi5ib2FyZE9iaiB9O1xuICBjb25zdCByZWNvcmRBbGxTaG90cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIG1hcmtib2FyZEhpdE9yTWlzcyhoaXRPck1pc3MsIGNvb3JkaW5hdGUpIHtcbiAgICBib2FyZFtjb29yZGluYXRlXSA9IGhpdE9yTWlzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtCb2FyZFdpdGhTaGlwKHNoaXBUb01hcmssIGNvb3JkaW5hdGVzKSB7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGJvYXJkW2Nvb3JkXSA9IHNoaXBUb01hcmsubmFtZTtcbiAgICB9KTtcbiAgICBzaGlwVG9NYXJrLnNldENvb3Jkcyhjb29yZGluYXRlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrQnVmZmVyWm9uZShidWZmZXJBcnJheSkge1xuICAgIGJ1ZmZlckFycmF5LmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBib2FyZFtjb29yZF0gPSAnYnVmZmVyJztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZHMpIHtcbiAgICBjb25zdCBmb28gPSBydW5BbGxDaGVja3MoYm9hcmQsIHNoaXAuc2l6ZSwgY29vcmRzKTtcbiAgICBpZiAoIWZvbykgcmV0dXJuICdFcnJvcjogb25lIG9yIG1vcmUgY2hlY2tzIGZhaWxlZCc7XG4gICAgaWYgKGZvbykge1xuICAgICAgY29uc3QgYnVmZmVyWm9uZSA9IGdldEJ1ZmZlclpvbmVBcnJheShjb29yZHMpO1xuICAgICAgbWFya0J1ZmZlclpvbmUoYnVmZmVyWm9uZSk7XG4gICAgICByZXR1cm4gbWFya0JvYXJkV2l0aFNoaXAoc2hpcCwgY29vcmRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uYm9hcmQgfTtcbiAgfVxuICBmdW5jdGlvbiByYW5kb21seVBsYWNlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgY29vcmRzVG9DaGVjayA9IHBsYWNlUmFuZG9tbHkoc2hpcCk7XG4gICAgY29uc3QgZGlkQ29vcmRzUGFzcyA9IHJ1bkFsbENoZWNrcyhib2FyZCwgc2hpcC5zaXplLCBjb29yZHNUb0NoZWNrKTtcbiAgICBpZiAoIWRpZENvb3Jkc1Bhc3MpIHtcbiAgICAgIHJldHVybiByYW5kb21seVBsYWNlU2hpcChzaGlwKTtcbiAgICB9XG4gICAgaWYgKGRpZENvb3Jkc1Bhc3MpIHtcbiAgICAgIHJldHVybiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzVG9DaGVjayk7XG4gICAgfVxuICAgIHJldHVybiAnZXJyb3Igc29tZXRoaW5nIHdlbnQgaG9ycmlibHkgd3JvbmcnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tbHlQbGFjZUFsbFNoaXBzKCkge1xuICAgIE9iamVjdC52YWx1ZXMoc2hpcE9iaikuZm9yRWFjaCgoc2hpcCkgPT4gcmFuZG9tbHlQbGFjZVNoaXAoc2hpcCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHNoaXBPYmopLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21MZWdhbE1vdmVzQW5kQWRkVG9SZWNvcmRTaG90cyhpZCkge1xuICAgIGRlbGV0ZSBsZWdhbE1vdmVzW2lkXTtcbiAgICByZWNvcmRBbGxTaG90cy5wdXNoKGlkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY2VsbCkge1xuICAgIGlmIChyZWNvcmRBbGxTaG90cy5pbmNsdWRlcyhjZWxsKSkge1xuICAgICAgcmV0dXJuICdlcnJvciBpbGxlZ2FsIHNob3QnO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNoaXBPYmosIGJvYXJkW2NlbGxdKSkge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBPYmpbYm9hcmRbY2VsbF1dO1xuICAgICAgc2hpcC5oaXQoc2hpcC5jb29yZHMuaW5kZXhPZihjZWxsKSk7XG4gICAgICByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoY2VsbCk7XG4gICAgICBjb25zdCBjaGVja0lmQWxsU2hpcHNBcmVTdW5rID0gYXJlQWxsU2hpcHNTdW5rKCk7XG4gICAgICBjb25zdCBoaXRPckFsbFN1bmsgPSBjaGVja0lmQWxsU2hpcHNBcmVTdW5rID8gJ2FsbCBzaGlwcyBhcmUgc3VuayEnIDogJ2hpdCc7XG4gICAgICBtYXJrYm9hcmRIaXRPck1pc3MoJ2hpdCcsIGNlbGwpO1xuICAgICAgcmV0dXJuIGhpdE9yQWxsU3VuaztcbiAgICB9XG4gICAgaWYgKGJvYXJkW2NlbGxdID09PSAnZW1wdHknIHx8IGJvYXJkW2NlbGxdID09PSAnYnVmZmVyJykge1xuICAgICAgbWFya2JvYXJkSGl0T3JNaXNzKCdtaXNzJywgY2VsbCk7XG4gICAgICByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoY2VsbCk7XG4gICAgICByZXR1cm4gJ21pc3MnO1xuICAgIH1cbiAgICByZXR1cm4gJ3NvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIHsgLi4uYm9hcmQgfTtcbiAgICB9LFxuICAgIGdldCBnZXRMZWdhbE1vdmVzKCkge1xuICAgICAgcmV0dXJuIHsgLi4ubGVnYWxNb3ZlcyB9O1xuICAgIH0sXG4gICAgZ2V0IGdldFJlY29yZEFsbFNob3RzKCkge1xuICAgICAgcmV0dXJuIFsuLi5yZWNvcmRBbGxTaG90c107XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICByYW5kb21seVBsYWNlU2hpcCxcbiAgICByYW5kb21seVBsYWNlQWxsU2hpcHMsXG4gIH07XG59XG4iLCJjb25zdCBudW1zID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuXG5jb25zdCByYW5kb21Gcm9tRW50aXJlQXJyID0gKGFycikgPT4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbmNvbnN0IHJhbmRvbUZyb21TdGFydGluZ1BvaW50ID0gKGFyciwgc2l6ZSkgPT4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhcnIubGVuZ3RoIC0gc2l6ZSkpXTtcblxuZnVuY3Rpb24gcmFuZG9tSG9yaXpvbnRhbChzaGlwc2l6ZSkge1xuICBjb25zdCBwaWNrUm93ID0gcmFuZG9tRnJvbUVudGlyZUFycihsZXR0ZXJzKTtcbiAgY29uc3Qgc3RhcnRpbmdOdW0gPSByYW5kb21Gcm9tU3RhcnRpbmdQb2ludChudW1zLCBzaGlwc2l6ZSk7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnRpbmdOdW07IGkgPCBzdGFydGluZ051bSArIHNoaXBzaXplOyBpICs9IDEpIHtcbiAgICBjb29yZHMucHVzaChgJHtwaWNrUm93fSR7bnVtc1tpXX1gKTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5mdW5jdGlvbiByYW5kb21WZXJ0aWNhbChzaGlwc2l6ZSkge1xuICBjb25zdCBwaWNrQ29sdW1uID0gcmFuZG9tRnJvbUVudGlyZUFycihudW1zKTtcbiAgY29uc3Qgc3RhcnRpbmdMZXR0ZXIgPSByYW5kb21Gcm9tU3RhcnRpbmdQb2ludChudW1zLCBzaGlwc2l6ZSk7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnRpbmdMZXR0ZXI7IGkgPCBzdGFydGluZ0xldHRlciArIHNoaXBzaXplOyBpICs9IDEpIHtcbiAgICBjb29yZHMucHVzaChgJHtsZXR0ZXJzW2ldfSR7cGlja0NvbHVtbn1gKTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5mdW5jdGlvbiBwbGFjZVJhbmRvbWx5KHsgc2l6ZSB9KSB7XG4gIGNvbnN0IGZpZnR5ZmlmdHkgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICBpZiAoZmlmdHlmaWZ0eSkge1xuICAgIHJldHVybiByYW5kb21WZXJ0aWNhbChzaXplKTtcbiAgfVxuICBpZiAoIWZpZnR5ZmlmdHkpIHtcbiAgICByZXR1cm4gcmFuZG9tSG9yaXpvbnRhbChzaXplKTtcbiAgfVxuICByZXR1cm4gJ2Vycm9yIHNvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VSYW5kb21seTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4uL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5JztcblxuY29uc3QgbW9ja1NoaXBzID0ge1xuICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJywgNSksXG4gIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KSxcbiAgZGVzdHJveWVyOiBTaGlwKCdkZXN0cm95ZXInLCAzKSxcbiAgc3VibWFyaW5lOiBTaGlwKCdzdWJtYXJpbmUnLCAzKSxcbiAgcGF0cm9sOiBTaGlwKCdwYXRyb2wnLCAyKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vY2tTaGlwcztcbiIsImltcG9ydCBtb2NrU2hpcHMgZnJvbSAnLi4vbW9ja3NoaXBzT2JqL21vY2tzaGlwc09iaic7XG5pbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4uL2dhbWVib2FyZEZhYy9nYW1lYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIoKSB7XG4gIGNvbnN0IHBsYXllcnNoaXBzID0geyAuLi5tb2NrU2hpcHMgfTtcbiAgY29uc3QgcGxheWVyYm9hcmQgPSBnYW1lYm9hcmQocGxheWVyc2hpcHMpO1xuICBwbGF5ZXJib2FyZC5yYW5kb21seVBsYWNlQWxsU2hpcHMoKTtcbiAgY29uc3QgeyByZWNlaXZlQXR0YWNrIH0gPSBwbGF5ZXJib2FyZDtcbiAgcmV0dXJuIHtcbiAgICBnZXQgZ2V0Ym9hcmQoKSB7XG4gICAgICByZXR1cm4geyAuLi5wbGF5ZXJib2FyZC5ib2FyZCB9O1xuICAgIH0sXG4gICAgZ2V0IGxlZ2FsTW92ZXMoKSB7XG4gICAgICByZXR1cm4geyAuLi5wbGF5ZXJib2FyZC5nZXRMZWdhbE1vdmVzIH07XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICB9O1xufVxuXG4vLyEgZmFpbHNhZmUgPT4gd29ya2luZyB2ZXJzaW9uIChsZWdhbG1vdmVzLmxlbmd0aCBkb2VzIG5vdCB3b3JrKVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKCkge1xuLy8gICBjb25zdCBwbGF5ZXJzaGlwcyA9IHsgLi4ubW9ja1NoaXBzIH07XG4vLyAgIGNvbnN0IHBsYXllcmJvYXJkID0gZ2FtZWJvYXJkKHBsYXllcnNoaXBzKTtcbi8vICAgY29uc3QgeyByZWNlaXZlQXR0YWNrLCBnZXRMZWdhbE1vdmVzLCBnZXRSZWNvcmRBbGxTaG90cyB9ID0gcGxheWVyYm9hcmQ7XG4vLyAgIHBsYXllcmJvYXJkLnJhbmRvbWx5UGxhY2VBbGxTaGlwcygpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGdldCBnZXRib2FyZCgpIHtcbi8vICAgICAgIHJldHVybiB7IC4uLnBsYXllcmJvYXJkLmJvYXJkIH07XG4vLyAgICAgfSxcbi8vICAgICByZWNlaXZlQXR0YWNrLFxuLy8gICAgIGdldExlZ2FsTW92ZXMsXG4vLyAgICAgZ2V0UmVjb3JkQWxsU2hvdHMsXG4vLyAgIH07XG4vLyB9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKG5hbWUsIHNpemUpIHtcbiAgY29uc3Qgc2hpcCA9IEFycmF5LmZyb20oQXJyYXkoc2l6ZSkua2V5cygpKTtcblxuICBjb25zdCBoaXQgPSAobnVtKSA9PiB7XG4gICAgc2hpcFtzaGlwLmluZGV4T2YobnVtKV0gPSAnWCc7XG4gICAgcmV0dXJuIFsuLi5zaGlwXTtcbiAgfTtcblxuICBjb25zdCBzZXRDb29yZHMgPSAoY29vcmRzKSA9PiB7XG4gICAgc2hpcC5jb29yZGluYXRlcyA9IGNvb3JkcztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwLmV2ZXJ5KChpdGVtKSA9PiBpdGVtID09PSAnWCcpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemU7XG4gICAgfSxcbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwXTtcbiAgICB9LFxuICAgIGdldCBsb2coKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coc2hpcCk7XG4gICAgfSxcbiAgICBnZXQgbmFtZUFuZFNpemUoKSB7XG4gICAgICByZXR1cm4geyBuYW1lLCBzaXplIH07XG4gICAgfSxcblxuICAgIGdldCBjb29yZHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXAuY29vcmRpbmF0ZXNdO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBzZXRDb29yZHMsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyL3BsYXllcic7XG5pbXBvcnQgbWFrZUhpZGRlbkJvYXJkIGZyb20gJy4vZG9tQ29tcG9uZW50cy9tYWtlYm9hcmRzJztcbmltcG9ydCBjYWNoZWQgZnJvbSAnLi9jYWNoZURvbS9jYWNoZURvbSc7XG5cbmNvbnN0IHsgcGxheWVyR3JpZEFyZWEsIGJvdEdyaWRBcmVhIH0gPSBjYWNoZWQ7XG5cbmNvbnN0IHVzZXIgPSBQbGF5ZXIoKTtcblxuY29uc3QgYm90ID0gUGxheWVyKCk7XG5cbm1ha2VIaWRkZW5Cb2FyZCh1c2VyLmdldGJvYXJkLCBwbGF5ZXJHcmlkQXJlYSwgdHJ1ZSk7XG5cbm1ha2VIaWRkZW5Cb2FyZChib3QuZ2V0Ym9hcmQsIGJvdEdyaWRBcmVhLCB0cnVlKTtcblxuY29uc3QgZ2V0UmFuZG9tTGVnYWxDZWxsID0gKG9iaikgPT4ge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgcmV0dXJuIGtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoga2V5cy5sZW5ndGgpXTtcbn07XG5cbmZ1bmN0aW9uIHNlbmRVc2VyQXR0YWNrKCkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRSYW5kb21MZWdhbENlbGwodXNlci5sZWdhbE1vdmVzKTtcbiAgdXNlci5yZWNlaXZlQXR0YWNrKHRhcmdldCk7XG4gIG1ha2VIaWRkZW5Cb2FyZCh1c2VyLmdldGJvYXJkLCBwbGF5ZXJHcmlkQXJlYSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRCb3RBdHRhY2sodGFyZ2V0KSB7XG4gIGNvbnN0IHRoaW5nID0gYm90LnJlY2VpdmVBdHRhY2sodGFyZ2V0KTtcbiAgaWYgKHRoaW5nID09PSAnZXJyb3IgaWxsZWdhbCBzaG90JykgcmV0dXJuO1xuICBtYWtlSGlkZGVuQm9hcmQoYm90LmdldGJvYXJkLCBib3RHcmlkQXJlYSwgdHJ1ZSk7XG4gIHNlbmRVc2VyQXR0YWNrKCk7XG59XG5mdW5jdGlvbiBzZW5kQXR0YWNrKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgc2VuZEJvdEF0dGFjayhlLnRhcmdldC5jbGFzc0xpc3RbMF0pO1xuICB9XG59XG5cbmJvdEdyaWRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VuZEF0dGFjayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=