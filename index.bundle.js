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
___CSS_LOADER_EXPORT___.push([module.id, "#playerGridArea,\n#botGridArea {\n  display: grid;\n  width: 200px;\n  height: 200px;\n  border: 1px solid black;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  margin-bottom: 10px;\n}\n\n.cell {\n  border: 1px solid black;\n}\n\n.pbuffer {\n  background: rgb(176, 170, 238);\n}\n\n.pcarrier,\n.pbattleship,\n.pdestroyer,\n.psubmarine,\n.ppatrol {\n  background: gray;\n}\n\n.phit,\n.hit {\n  background: red;\n}\n\n.pmiss,\n.miss {\n  background: green;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,sCAAsC;EACtC,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE,gBAAgB;AAClB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;AACnB","sourcesContent":["#playerGridArea,\n#botGridArea {\n  display: grid;\n  width: 200px;\n  height: 200px;\n  border: 1px solid black;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  margin-bottom: 10px;\n}\n\n.cell {\n  border: 1px solid black;\n}\n\n.pbuffer {\n  background: rgb(176, 170, 238);\n}\n\n.pcarrier,\n.pbattleship,\n.pdestroyer,\n.psubmarine,\n.ppatrol {\n  background: gray;\n}\n\n.phit,\n.hit {\n  background: red;\n}\n\n.pmiss,\n.miss {\n  background: green;\n}\n"],"sourceRoot":""}]);
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

(0,_domComponents_makeboards__WEBPACK_IMPORTED_MODULE_2__["default"])(bot.getboard, botGridArea, false);

// call bot.receiveAttack(cell) =>
// get return value
// add to array which shows {cell : 'hit'} or {cell: 'miss'}

// example:

//  const result = bot.receiveAttack('E5') =>
// if (result === 'hit') // markSpot();
// if(result === 'miss') // markSpot();

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
  // console.log(thing);
  // console.log(bot.getboard);
  (0,_domComponents_makeboards__WEBPACK_IMPORTED_MODULE_2__["default"])(bot.getboard, botGridArea, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7QUFFRjtBQUNBOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7O0FDMUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3RGxDO0FBQ0E7QUFDQTtBQUNB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QUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2dCO0FBQ29CO0FBQ2hCOztBQUV6QyxRQUFRLDhCQUE4QixFQUFFLDBEQUFNOztBQUU5QyxhQUFhLDBEQUFNOztBQUVuQixZQUFZLDBEQUFNOztBQUVsQixxRUFBZTs7QUFFZixxRUFBZTs7QUFFZjtBQUNBO0FBQ0EsNkJBQTZCLGNBQWMsSUFBSTs7QUFFL0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUVBQWU7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2NhY2hlRG9tL2NhY2hlRG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9kb21Db21wb25lbnRzL21ha2Vib2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2RvbUNyZWF0b3IvZG9tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2JvYXJkT2JqLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvYnVmZmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvY2hlY2tzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvcGxhY2VSYW5kb21seS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvbW9ja3NoaXBzT2JqL21vY2tzaGlwc09iai5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvcmVtb3ZlQWxsQ2hpbGRyZW4vcmVtb3ZlQWxsQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3BsYXllckdyaWRBcmVhLFxcbiNib3RHcmlkQXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGJ1ZmZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTc2LCAxNzAsIDIzOCk7XFxufVxcblxcbi5wY2FycmllcixcXG4ucGJhdHRsZXNoaXAsXFxuLnBkZXN0cm95ZXIsXFxuLnBzdWJtYXJpbmUsXFxuLnBwYXRyb2wge1xcbiAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuXFxuLnBoaXQsXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5wbWlzcyxcXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwbGF5ZXJHcmlkQXJlYSxcXG4jYm90R3JpZEFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBidWZmZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDE3NiwgMTcwLCAyMzgpO1xcbn1cXG5cXG4ucGNhcnJpZXIsXFxuLnBiYXR0bGVzaGlwLFxcbi5wZGVzdHJveWVyLFxcbi5wc3VibWFyaW5lLFxcbi5wcGF0cm9sIHtcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcblxcbi5waGl0LFxcbi5oaXQge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4ucG1pc3MsXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY2FjaGVEb20oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgY29uc3QgYm9hcmRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNib2FyZHMnKTtcbiAgY29uc3QgcGxheWVyR3JpZEFyZWEgPSBib2FyZHMucXVlcnlTZWxlY3RvcignI3BsYXllckdyaWRBcmVhJyk7XG4gIGNvbnN0IGJvdEdyaWRBcmVhID0gYm9hcmRzLnF1ZXJ5U2VsZWN0b3IoJyNib3RHcmlkQXJlYScpO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBib2FyZHMsXG4gICAgcGxheWVyR3JpZEFyZWEsXG4gICAgYm90R3JpZEFyZWEsXG4gIH07XG59XG5cbmNvbnN0IGNhY2hlZCA9IGNhY2hlRG9tKCk7XG5leHBvcnQgZGVmYXVsdCBjYWNoZWQ7XG4iLCJpbXBvcnQgZG9tIGZyb20gJy4uL2RvbUNyZWF0b3IvZG9tQ3JlYXRvcic7XG5pbXBvcnQgcmVtb3ZlQWxsQ2hpbGROb2RlcyBmcm9tICcuLi9yZW1vdmVBbGxDaGlsZHJlbi9yZW1vdmVBbGxDaGlsZHJlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VIaWRkZW5Cb2FyZChvYmosIHBhcmVudCwgcGxheWVyID0gZmFsc2UpIHtcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpO1xuICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMob2JqKTtcbiAgZW50cmllcy5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAocGxheWVyKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9tKHsgY2xhc3NlczogW2tleSwgYHAke3ZhbHVlfWAsICdjZWxsJ10gfSk7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIGlmICghcGxheWVyKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICdoaXQnIHx8IHZhbHVlID09PSAnbWlzcycpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbSh7IGNsYXNzZXM6IFtrZXksIGAke3ZhbHVlfWAsICdjZWxsJ10gfSk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb20oeyBjbGFzc2VzOiBba2V5LCAnY2VsbCddIH0pO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLy8hIGZhaWxzYWZlIHByaW9yIHRvIHRyeWluZyB0byBpbXBsaW1lbnQgaGl0IGFuZCBtaXNzIHRvIGJvdCBib2FyZFxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUhpZGRlbkJvYXJkKG9iaiwgcGFyZW50LCBwbGF5ZXIgPSBmYWxzZSkge1xuLy8gICByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCk7XG4vLyAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhvYmopO1xuLy8gICBlbnRyaWVzLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuLy8gICAgIGlmIChwbGF5ZXIpIHtcbi8vICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb20oeyBjbGFzc2VzOiBba2V5LCBgcCR7dmFsdWV9YCwgJ2NlbGwnXSB9KTtcbi8vICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbi8vICAgICB9XG4vLyAgICAgaWYgKCFwbGF5ZXIpIHtcbi8vICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb20oeyBjbGFzc2VzOiBba2V5LCAnY2VsbCddIH0pO1xuLy8gICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG5cbi8vIGhvdyB0byB1c2UgZXhhbXBsZXM6XG4vLyBtYWtlSGlkZGVuKG1iMSwgcGxheWVyYm9hcmQsIHRydWUpO1xuLy8gbWFrZUhpZGRlbihtYjIsIGJvdGJvYXJkKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvbShvYmopIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnRhZyB8fCAnZGl2Jyk7XG4gIE9iamVjdC5rZXlzKG9iaikubWFwKChwcm9wKSA9PiB7XG4gICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLnRleHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xhc3Nlcyc6XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmouY2xhc3NlcykpIHJldHVybiBjb25zb2xlLmxvZygnY2xhc3NlcyBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgICAgIG9iai5jbGFzc2VzLm1hcCgoYykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iai5hdHRyaWJ1dGVzKSkgcmV0dXJuIGNvbnNvbGUubG9nKGBhdHRyaWJ1dGVzIG11c3QgYmUgYW4gYXJyYXlgKTtcbiAgICAgICAgb2JqLmF0dHJpYnV0ZXMubWFwKChhdHRyKSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShPYmplY3Qua2V5cyhhdHRyKSwgT2JqZWN0LnZhbHVlcyhhdHRyKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V2ZW50cyc6XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmouZXZlbnRzKSkgcmV0dXJuIGNvbnNvbGUubG9nKGBldmVudHMgbXVzdCBiZSBhbiBhcnJheWApO1xuICAgICAgICBvYmouZXZlbnRzLm1hcCgoeyB0eXBlLCBoYW5kbGVyIH0pID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hpbGRyZW4nOlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqLmNoaWxkcmVuKSkgcmV0dXJuIGNvbnNvbGUubG9nKGBjaGlsZHJlbiBtdXN0IGJlIGFuIGFycmF5YCk7XG4gICAgICAgIG9iai5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgQTA6ICdlbXB0eScsXG4gIEIwOiAnZW1wdHknLFxuICBDMDogJ2VtcHR5JyxcbiAgRDA6ICdlbXB0eScsXG4gIEUwOiAnZW1wdHknLFxuICBGMDogJ2VtcHR5JyxcbiAgRzA6ICdlbXB0eScsXG4gIEgwOiAnZW1wdHknLFxuICBJMDogJ2VtcHR5JyxcbiAgSjA6ICdlbXB0eScsXG4gIEExOiAnZW1wdHknLFxuICBCMTogJ2VtcHR5JyxcbiAgQzE6ICdlbXB0eScsXG4gIEQxOiAnZW1wdHknLFxuICBFMTogJ2VtcHR5JyxcbiAgRjE6ICdlbXB0eScsXG4gIEcxOiAnZW1wdHknLFxuICBIMTogJ2VtcHR5JyxcbiAgSTE6ICdlbXB0eScsXG4gIEoxOiAnZW1wdHknLFxuICBBMjogJ2VtcHR5JyxcbiAgQjI6ICdlbXB0eScsXG4gIEMyOiAnZW1wdHknLFxuICBEMjogJ2VtcHR5JyxcbiAgRTI6ICdlbXB0eScsXG4gIEYyOiAnZW1wdHknLFxuICBHMjogJ2VtcHR5JyxcbiAgSDI6ICdlbXB0eScsXG4gIEkyOiAnZW1wdHknLFxuICBKMjogJ2VtcHR5JyxcbiAgQTM6ICdlbXB0eScsXG4gIEIzOiAnZW1wdHknLFxuICBDMzogJ2VtcHR5JyxcbiAgRDM6ICdlbXB0eScsXG4gIEUzOiAnZW1wdHknLFxuICBGMzogJ2VtcHR5JyxcbiAgRzM6ICdlbXB0eScsXG4gIEgzOiAnZW1wdHknLFxuICBJMzogJ2VtcHR5JyxcbiAgSjM6ICdlbXB0eScsXG4gIEE0OiAnZW1wdHknLFxuICBCNDogJ2VtcHR5JyxcbiAgQzQ6ICdlbXB0eScsXG4gIEQ0OiAnZW1wdHknLFxuICBFNDogJ2VtcHR5JyxcbiAgRjQ6ICdlbXB0eScsXG4gIEc0OiAnZW1wdHknLFxuICBINDogJ2VtcHR5JyxcbiAgSTQ6ICdlbXB0eScsXG4gIEo0OiAnZW1wdHknLFxuICBBNTogJ2VtcHR5JyxcbiAgQjU6ICdlbXB0eScsXG4gIEM1OiAnZW1wdHknLFxuICBENTogJ2VtcHR5JyxcbiAgRTU6ICdlbXB0eScsXG4gIEY1OiAnZW1wdHknLFxuICBHNTogJ2VtcHR5JyxcbiAgSDU6ICdlbXB0eScsXG4gIEk1OiAnZW1wdHknLFxuICBKNTogJ2VtcHR5JyxcbiAgQTY6ICdlbXB0eScsXG4gIEI2OiAnZW1wdHknLFxuICBDNjogJ2VtcHR5JyxcbiAgRDY6ICdlbXB0eScsXG4gIEU2OiAnZW1wdHknLFxuICBGNjogJ2VtcHR5JyxcbiAgRzY6ICdlbXB0eScsXG4gIEg2OiAnZW1wdHknLFxuICBJNjogJ2VtcHR5JyxcbiAgSjY6ICdlbXB0eScsXG4gIEE3OiAnZW1wdHknLFxuICBCNzogJ2VtcHR5JyxcbiAgQzc6ICdlbXB0eScsXG4gIEQ3OiAnZW1wdHknLFxuICBFNzogJ2VtcHR5JyxcbiAgRjc6ICdlbXB0eScsXG4gIEc3OiAnZW1wdHknLFxuICBINzogJ2VtcHR5JyxcbiAgSTc6ICdlbXB0eScsXG4gIEo3OiAnZW1wdHknLFxuICBBODogJ2VtcHR5JyxcbiAgQjg6ICdlbXB0eScsXG4gIEM4OiAnZW1wdHknLFxuICBEODogJ2VtcHR5JyxcbiAgRTg6ICdlbXB0eScsXG4gIEY4OiAnZW1wdHknLFxuICBHODogJ2VtcHR5JyxcbiAgSDg6ICdlbXB0eScsXG4gIEk4OiAnZW1wdHknLFxuICBKODogJ2VtcHR5JyxcbiAgQTk6ICdlbXB0eScsXG4gIEI5OiAnZW1wdHknLFxuICBDOTogJ2VtcHR5JyxcbiAgRDk6ICdlbXB0eScsXG4gIEU5OiAnZW1wdHknLFxuICBGOTogJ2VtcHR5JyxcbiAgRzk6ICdlbXB0eScsXG4gIEg5OiAnZW1wdHknLFxuICBJOTogJ2VtcHR5JyxcbiAgSjk6ICdlbXB0eScsXG59O1xuXG5jb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5jb25zdCBudW1iZXJzID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J107XG5cbmV4cG9ydCB7IGxldHRlcnMsIG51bWJlcnMgfTtcbiIsImZ1bmN0aW9uIGJ1ZmZlclNpbmdsZUNvb3JkKGNlbGwpIHtcbiAgY29uc3QgW2xldHRlciwgbnVtSXNTdHJpbmddID0gY2VsbC5zcGxpdCgnJyk7XG4gIGNvbnN0IG51bXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gIGNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQobnVtSXNTdHJpbmcsIDEwKTtcbiAgY29uc3QgYXJyT2ZMZXR0ZXJzID0gW107XG4gIGNvbnN0IGFyck9mTnVtcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIFVwcGVyQW5kTG93ZXJMZXR0ZXJzKCkge1xuICAgIGlmIChsZXR0ZXJzLmluY2x1ZGVzKGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikgLSAxXSkpIHtcbiAgICAgIGFyck9mTGV0dGVycy5wdXNoKGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGxldHRlcikgLSAxXSk7XG4gICAgfVxuICAgIGFyck9mTGV0dGVycy5wdXNoKGxldHRlcik7XG4gICAgaWYgKGxldHRlcnMuaW5jbHVkZXMobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSArIDFdKSkge1xuICAgICAgYXJyT2ZMZXR0ZXJzLnB1c2gobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSArIDFdKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gVXBwZXJBbmRMb3dlck51bWJlcnMoKSB7XG4gICAgaWYgKG51bXMuaW5jbHVkZXMobnVtc1tudW1zLmluZGV4T2YobnVtKSAtIDFdKSkge1xuICAgICAgYXJyT2ZOdW1zLnB1c2gobnVtc1tudW1zLmluZGV4T2YobnVtKSAtIDFdKTtcbiAgICB9XG4gICAgYXJyT2ZOdW1zLnB1c2gobnVtKTtcbiAgICBpZiAobnVtcy5pbmNsdWRlcyhudW1zW251bXMuaW5kZXhPZihudW0pICsgMV0pKSB7XG4gICAgICBhcnJPZk51bXMucHVzaChudW1zW251bXMuaW5kZXhPZihudW0pICsgMV0pO1xuICAgIH1cbiAgfVxuXG4gIFVwcGVyQW5kTG93ZXJMZXR0ZXJzKCk7XG4gIFVwcGVyQW5kTG93ZXJOdW1iZXJzKCk7XG5cbiAgZnVuY3Rpb24gY29tYmluZUxldHRlcnNBbmROdW1iZXJzKCkge1xuICAgIGNvbnN0IG5ld0FyciA9IFtdO1xuICAgIGFyck9mTGV0dGVycy5mb3JFYWNoKChlYWNobGV0dGVyKSA9PiB7XG4gICAgICBhcnJPZk51bXMuZm9yRWFjaCgoZWFjaG51bSkgPT4ge1xuICAgICAgICBuZXdBcnIucHVzaChlYWNobGV0dGVyICsgZWFjaG51bSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3QXJyO1xuICB9XG4gIGNvbnN0IGJ1ZmZlckNlbGwgPSBjb21iaW5lTGV0dGVyc0FuZE51bWJlcnMoKTtcbiAgY29uc3QgcmVtb3ZlRHVwbGljYXRlc2Zyb21CdWZmZXJDZWxsID0gWy4uLm5ldyBTZXQoYnVmZmVyQ2VsbCldO1xuICByZXR1cm4gcmVtb3ZlRHVwbGljYXRlc2Zyb21CdWZmZXJDZWxsO1xufVxuXG5mdW5jdGlvbiBidWZmZXJBbGxDb29yZHMoYXJyKSB7XG4gIGNvbnN0IG5ld0FyciA9IFtdO1xuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGJ1ZmZlckVhY2hDZWxsID0gYnVmZmVyU2luZ2xlQ29vcmQoaXRlbSk7XG4gICAgbmV3QXJyLnB1c2goLi4uYnVmZmVyRWFjaENlbGwpO1xuICB9KTtcbiAgY29uc3QgYWxsQ2VsbHNUb0J1ZmZlciA9IFsuLi5uZXcgU2V0KG5ld0FycildO1xuICByZXR1cm4gYWxsQ2VsbHNUb0J1ZmZlcjtcbn1cblxuZnVuY3Rpb24gZ2V0QnVmZmVyWm9uZUFycmF5KGNvb3Jkcykge1xuICBjb25zdCBidWZmZXJNaW51c1NoaXAgPSBbXG4gICAgLi4ubmV3IFNldChidWZmZXJBbGxDb29yZHMoY29vcmRzKS5maWx0ZXIoKGl0ZW0pID0+ICFjb29yZHMuaW5jbHVkZXMoaXRlbSkpKSxcbiAgXTtcbiAgcmV0dXJuIGJ1ZmZlck1pbnVzU2hpcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QnVmZmVyWm9uZUFycmF5O1xuIiwiZnVuY3Rpb24gY2hlY2tTaXplKHNpemUsIGNvb3Jkc0xlbmd0aCkge1xuICBjb25zdCBpc01hdGNoaW5nU2l6ZSA9IHNpemUgPT09IGNvb3Jkc0xlbmd0aDtcbiAgcmV0dXJuIGlzTWF0Y2hpbmdTaXplO1xufVxuXG5mdW5jdGlvbiBjaGVja0NlbGxJc0VtcHR5KGJvYXJkLCBjb29yZGluYXRlcykge1xuICBjb25zdCBhcmVDZWxsc0VtcHR5ID0gY29vcmRpbmF0ZXMuZXZlcnkoKGNvb3JkKSA9PiBib2FyZFtjb29yZF0gPT09ICdlbXB0eScpO1xuICByZXR1cm4gYXJlQ2VsbHNFbXB0eTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDZWxsRXhpc3RzKGJvYXJkLCBjb29yZGluYXRlcykge1xuICBjb25zdCBkb0NlbGxzRXhpc3QgPSBjb29yZGluYXRlcy5ldmVyeSgoY29vcmQpID0+XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGJvYXJkLCBjb29yZClcbiAgKTtcbiAgcmV0dXJuIGRvQ2VsbHNFeGlzdDtcbn1cblxuY29uc3QgcnVuQWxsQ2hlY2tzID0gKGdhbWVCLCBzaGlwU2l6ZSwgY29vcmRpbmF0ZXMpID0+IHtcbiAgY29uc3QgY2hlY2sxID0gY2hlY2tTaXplKHNoaXBTaXplLCBjb29yZGluYXRlcy5sZW5ndGgpO1xuICBjb25zdCBjaGVjazIgPSBjaGVja0NlbGxJc0VtcHR5KGdhbWVCLCBjb29yZGluYXRlcyk7XG4gIGNvbnN0IGNoZWNrMyA9IGNoZWNrQ2VsbEV4aXN0cyhnYW1lQiwgY29vcmRpbmF0ZXMpO1xuICBjb25zdCBhbGxDaGVja3MgPSBjaGVjazEgJiYgY2hlY2syICYmIGNoZWNrMztcbiAgcmV0dXJuIGFsbENoZWNrcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bkFsbENoZWNrcztcbiIsImltcG9ydCBib2FyZE9iaiBmcm9tICcuL2JvYXJkT2JqJztcbmltcG9ydCBydW5BbGxDaGVja3MgZnJvbSAnLi9jaGVja3MnO1xuaW1wb3J0IHBsYWNlUmFuZG9tbHkgZnJvbSAnLi9wbGFjZVJhbmRvbWx5JztcbmltcG9ydCBnZXRCdWZmZXJab25lQXJyYXkgZnJvbSAnLi9idWZmZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoc2hpcE9iaikge1xuICBjb25zdCBib2FyZCA9IHsgLi4uYm9hcmRPYmogfTtcbiAgY29uc3QgbGVnYWxNb3ZlcyA9IHsgLi4uYm9hcmRPYmogfTtcbiAgY29uc3QgcmVjb3JkQWxsU2hvdHMgPSBbXTtcblxuICBmdW5jdGlvbiBtYXJrYm9hcmRIaXRPck1pc3MoaGl0T3JNaXNzLCBjb29yZGluYXRlKSB7XG4gICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBoaXRPck1pc3M7XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrQm9hcmRXaXRoU2hpcChzaGlwVG9NYXJrLCBjb29yZGluYXRlcykge1xuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBib2FyZFtjb29yZF0gPSBzaGlwVG9NYXJrLm5hbWU7XG4gICAgfSk7XG4gICAgc2hpcFRvTWFyay5zZXRDb29yZHMoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFya0J1ZmZlclpvbmUoYnVmZmVyQXJyYXkpIHtcbiAgICBidWZmZXJBcnJheS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgYm9hcmRbY29vcmRdID0gJ2J1ZmZlcic7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzKSB7XG4gICAgY29uc3QgZm9vID0gcnVuQWxsQ2hlY2tzKGJvYXJkLCBzaGlwLnNpemUsIGNvb3Jkcyk7XG4gICAgaWYgKCFmb28pIHJldHVybiAnRXJyb3I6IG9uZSBvciBtb3JlIGNoZWNrcyBmYWlsZWQnO1xuICAgIGlmIChmb28pIHtcbiAgICAgIGNvbnN0IGJ1ZmZlclpvbmUgPSBnZXRCdWZmZXJab25lQXJyYXkoY29vcmRzKTtcbiAgICAgIG1hcmtCdWZmZXJab25lKGJ1ZmZlclpvbmUpO1xuICAgICAgcmV0dXJuIG1hcmtCb2FyZFdpdGhTaGlwKHNoaXAsIGNvb3Jkcyk7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmJvYXJkIH07XG4gIH1cbiAgZnVuY3Rpb24gcmFuZG9tbHlQbGFjZVNoaXAoc2hpcCkge1xuICAgIGNvbnN0IGNvb3Jkc1RvQ2hlY2sgPSBwbGFjZVJhbmRvbWx5KHNoaXApO1xuICAgIGNvbnN0IGRpZENvb3Jkc1Bhc3MgPSBydW5BbGxDaGVja3MoYm9hcmQsIHNoaXAuc2l6ZSwgY29vcmRzVG9DaGVjayk7XG4gICAgaWYgKCFkaWRDb29yZHNQYXNzKSB7XG4gICAgICByZXR1cm4gcmFuZG9tbHlQbGFjZVNoaXAoc2hpcCk7XG4gICAgfVxuICAgIGlmIChkaWRDb29yZHNQYXNzKSB7XG4gICAgICByZXR1cm4gcGxhY2VTaGlwKHNoaXAsIGNvb3Jkc1RvQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gJ2Vycm9yIHNvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbWx5UGxhY2VBbGxTaGlwcygpIHtcbiAgICBPYmplY3QudmFsdWVzKHNoaXBPYmopLmZvckVhY2goKHNoaXApID0+IHJhbmRvbWx5UGxhY2VTaGlwKHNoaXApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzaGlwT2JqKS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoaWQpIHtcbiAgICBkZWxldGUgbGVnYWxNb3Zlc1tpZF07XG4gICAgcmVjb3JkQWxsU2hvdHMucHVzaChpZCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNlbGwpIHtcbiAgICBpZiAocmVjb3JkQWxsU2hvdHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgIHJldHVybiAnZXJyb3IgaWxsZWdhbCBzaG90JztcbiAgICB9XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzaGlwT2JqLCBib2FyZFtjZWxsXSkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwT2JqW2JvYXJkW2NlbGxdXTtcbiAgICAgIHNoaXAuaGl0KHNoaXAuY29vcmRzLmluZGV4T2YoY2VsbCkpO1xuICAgICAgcmVtb3ZlRnJvbUxlZ2FsTW92ZXNBbmRBZGRUb1JlY29yZFNob3RzKGNlbGwpO1xuICAgICAgY29uc3QgY2hlY2tJZkFsbFNoaXBzQXJlU3VuayA9IGFyZUFsbFNoaXBzU3VuaygpO1xuICAgICAgY29uc3QgaGl0T3JBbGxTdW5rID0gY2hlY2tJZkFsbFNoaXBzQXJlU3VuayA/ICdhbGwgc2hpcHMgYXJlIHN1bmshJyA6ICdoaXQnO1xuICAgICAgbWFya2JvYXJkSGl0T3JNaXNzKCdoaXQnLCBjZWxsKTtcbiAgICAgIHJldHVybiBoaXRPckFsbFN1bms7XG4gICAgfVxuICAgIGlmIChib2FyZFtjZWxsXSA9PT0gJ2VtcHR5JyB8fCBib2FyZFtjZWxsXSA9PT0gJ2J1ZmZlcicpIHtcbiAgICAgIG1hcmtib2FyZEhpdE9yTWlzcygnbWlzcycsIGNlbGwpO1xuICAgICAgcmVtb3ZlRnJvbUxlZ2FsTW92ZXNBbmRBZGRUb1JlY29yZFNob3RzKGNlbGwpO1xuICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9XG4gICAgcmV0dXJuICdzb21ldGhpbmcgd2VudCBob3JyaWJseSB3cm9uZyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIHJldHVybiB7IC4uLmJvYXJkIH07XG4gICAgfSxcbiAgICBnZXQgZ2V0TGVnYWxNb3ZlcygpIHtcbiAgICAgIHJldHVybiB7IC4uLmxlZ2FsTW92ZXMgfTtcbiAgICB9LFxuICAgIGdldCBnZXRSZWNvcmRBbGxTaG90cygpIHtcbiAgICAgIHJldHVybiBbLi4ucmVjb3JkQWxsU2hvdHNdO1xuICAgIH0sXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcmFuZG9tbHlQbGFjZVNoaXAsXG4gICAgcmFuZG9tbHlQbGFjZUFsbFNoaXBzLFxuICB9O1xufVxuIiwiY29uc3QgbnVtcyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbmNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuY29uc3QgcmFuZG9tRnJvbUVudGlyZUFyciA9IChhcnIpID0+IGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG5jb25zdCByYW5kb21Gcm9tU3RhcnRpbmdQb2ludCA9IChhcnIsIHNpemUpID0+IGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXJyLmxlbmd0aCAtIHNpemUpKV07XG5cbmZ1bmN0aW9uIHJhbmRvbUhvcml6b250YWwoc2hpcHNpemUpIHtcbiAgY29uc3QgcGlja1JvdyA9IHJhbmRvbUZyb21FbnRpcmVBcnIobGV0dGVycyk7XG4gIGNvbnN0IHN0YXJ0aW5nTnVtID0gcmFuZG9tRnJvbVN0YXJ0aW5nUG9pbnQobnVtcywgc2hpcHNpemUpO1xuICBjb25zdCBjb29yZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nTnVtOyBpIDwgc3RhcnRpbmdOdW0gKyBzaGlwc2l6ZTsgaSArPSAxKSB7XG4gICAgY29vcmRzLnB1c2goYCR7cGlja1Jvd30ke251bXNbaV19YCk7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZnVuY3Rpb24gcmFuZG9tVmVydGljYWwoc2hpcHNpemUpIHtcbiAgY29uc3QgcGlja0NvbHVtbiA9IHJhbmRvbUZyb21FbnRpcmVBcnIobnVtcyk7XG4gIGNvbnN0IHN0YXJ0aW5nTGV0dGVyID0gcmFuZG9tRnJvbVN0YXJ0aW5nUG9pbnQobnVtcywgc2hpcHNpemUpO1xuICBjb25zdCBjb29yZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nTGV0dGVyOyBpIDwgc3RhcnRpbmdMZXR0ZXIgKyBzaGlwc2l6ZTsgaSArPSAxKSB7XG4gICAgY29vcmRzLnB1c2goYCR7bGV0dGVyc1tpXX0ke3BpY2tDb2x1bW59YCk7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZnVuY3Rpb24gcGxhY2VSYW5kb21seSh7IHNpemUgfSkge1xuICBjb25zdCBmaWZ0eWZpZnR5ID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgaWYgKGZpZnR5ZmlmdHkpIHtcbiAgICByZXR1cm4gcmFuZG9tVmVydGljYWwoc2l6ZSk7XG4gIH1cbiAgaWYgKCFmaWZ0eWZpZnR5KSB7XG4gICAgcmV0dXJuIHJhbmRvbUhvcml6b250YWwoc2l6ZSk7XG4gIH1cbiAgcmV0dXJuICdlcnJvciBzb21ldGhpbmcgd2VudCBob3JyaWJseSB3cm9uZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYWNlUmFuZG9tbHk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuLi9zaGlwRmFjdG9yeS9zaGlwRmFjdG9yeSc7XG5cbmNvbnN0IG1vY2tTaGlwcyA9IHtcbiAgY2FycmllcjogU2hpcCgnY2FycmllcicsIDUpLFxuICBiYXR0bGVzaGlwOiBTaGlwKCdiYXR0bGVzaGlwJywgNCksXG4gIGRlc3Ryb3llcjogU2hpcCgnZGVzdHJveWVyJywgMyksXG4gIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJywgMyksXG4gIHBhdHJvbDogU2hpcCgncGF0cm9sJywgMiksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2NrU2hpcHM7XG4iLCJpbXBvcnQgbW9ja1NoaXBzIGZyb20gJy4uL21vY2tzaGlwc09iai9tb2Nrc2hpcHNPYmonO1xuaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuLi9nYW1lYm9hcmRGYWMvZ2FtZWJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKCkge1xuICBjb25zdCBwbGF5ZXJzaGlwcyA9IHsgLi4ubW9ja1NoaXBzIH07XG4gIGNvbnN0IHBsYXllcmJvYXJkID0gZ2FtZWJvYXJkKHBsYXllcnNoaXBzKTtcbiAgcGxheWVyYm9hcmQucmFuZG9tbHlQbGFjZUFsbFNoaXBzKCk7XG4gIGNvbnN0IHsgcmVjZWl2ZUF0dGFjayB9ID0gcGxheWVyYm9hcmQ7XG4gIHJldHVybiB7XG4gICAgZ2V0IGdldGJvYXJkKCkge1xuICAgICAgcmV0dXJuIHsgLi4ucGxheWVyYm9hcmQuYm9hcmQgfTtcbiAgICB9LFxuICAgIGdldCBsZWdhbE1vdmVzKCkge1xuICAgICAgcmV0dXJuIHsgLi4ucGxheWVyYm9hcmQuZ2V0TGVnYWxNb3ZlcyB9O1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgfTtcbn1cblxuLy8hIGZhaWxzYWZlID0+IHdvcmtpbmcgdmVyc2lvbiAobGVnYWxtb3Zlcy5sZW5ndGggZG9lcyBub3Qgd29yaylcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcigpIHtcbi8vICAgY29uc3QgcGxheWVyc2hpcHMgPSB7IC4uLm1vY2tTaGlwcyB9O1xuLy8gICBjb25zdCBwbGF5ZXJib2FyZCA9IGdhbWVib2FyZChwbGF5ZXJzaGlwcyk7XG4vLyAgIGNvbnN0IHsgcmVjZWl2ZUF0dGFjaywgZ2V0TGVnYWxNb3ZlcywgZ2V0UmVjb3JkQWxsU2hvdHMgfSA9IHBsYXllcmJvYXJkO1xuLy8gICBwbGF5ZXJib2FyZC5yYW5kb21seVBsYWNlQWxsU2hpcHMoKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBnZXQgZ2V0Ym9hcmQoKSB7XG4vLyAgICAgICByZXR1cm4geyAuLi5wbGF5ZXJib2FyZC5ib2FyZCB9O1xuLy8gICAgIH0sXG4vLyAgICAgcmVjZWl2ZUF0dGFjayxcbi8vICAgICBnZXRMZWdhbE1vdmVzLFxuLy8gICAgIGdldFJlY29yZEFsbFNob3RzLFxuLy8gICB9O1xuLy8gfVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChuYW1lLCBzaXplKSB7XG4gIGNvbnN0IHNoaXAgPSBBcnJheS5mcm9tKEFycmF5KHNpemUpLmtleXMoKSk7XG5cbiAgY29uc3QgaGl0ID0gKG51bSkgPT4ge1xuICAgIHNoaXBbc2hpcC5pbmRleE9mKG51bSldID0gJ1gnO1xuICAgIHJldHVybiBbLi4uc2hpcF07XG4gIH07XG5cbiAgY29uc3Qgc2V0Q29vcmRzID0gKGNvb3JkcykgPT4ge1xuICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBjb29yZHM7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcC5ldmVyeSgoaXRlbSkgPT4gaXRlbSA9PT0gJ1gnKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH0sXG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcF07XG4gICAgfSxcbiAgICBnZXQgbG9nKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHNoaXApO1xuICAgIH0sXG4gICAgZ2V0IG5hbWVBbmRTaXplKCkge1xuICAgICAgcmV0dXJuIHsgbmFtZSwgc2l6ZSB9O1xuICAgIH0sXG5cbiAgICBnZXQgY29vcmRzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwLmNvb3JkaW5hdGVzXTtcbiAgICB9LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgc2V0Q29vcmRzLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IG1ha2VIaWRkZW5Cb2FyZCBmcm9tICcuL2RvbUNvbXBvbmVudHMvbWFrZWJvYXJkcyc7XG5pbXBvcnQgY2FjaGVkIGZyb20gJy4vY2FjaGVEb20vY2FjaGVEb20nO1xuXG5jb25zdCB7IHBsYXllckdyaWRBcmVhLCBib3RHcmlkQXJlYSB9ID0gY2FjaGVkO1xuXG5jb25zdCB1c2VyID0gUGxheWVyKCk7XG5cbmNvbnN0IGJvdCA9IFBsYXllcigpO1xuXG5tYWtlSGlkZGVuQm9hcmQodXNlci5nZXRib2FyZCwgcGxheWVyR3JpZEFyZWEsIHRydWUpO1xuXG5tYWtlSGlkZGVuQm9hcmQoYm90LmdldGJvYXJkLCBib3RHcmlkQXJlYSwgZmFsc2UpO1xuXG4vLyBjYWxsIGJvdC5yZWNlaXZlQXR0YWNrKGNlbGwpID0+XG4vLyBnZXQgcmV0dXJuIHZhbHVlXG4vLyBhZGQgdG8gYXJyYXkgd2hpY2ggc2hvd3Mge2NlbGwgOiAnaGl0J30gb3Ige2NlbGw6ICdtaXNzJ31cblxuLy8gZXhhbXBsZTpcblxuLy8gIGNvbnN0IHJlc3VsdCA9IGJvdC5yZWNlaXZlQXR0YWNrKCdFNScpID0+XG4vLyBpZiAocmVzdWx0ID09PSAnaGl0JykgLy8gbWFya1Nwb3QoKTtcbi8vIGlmKHJlc3VsdCA9PT0gJ21pc3MnKSAvLyBtYXJrU3BvdCgpO1xuXG5jb25zdCBnZXRSYW5kb21MZWdhbENlbGwgPSAob2JqKSA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICByZXR1cm4ga2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBrZXlzLmxlbmd0aCldO1xufTtcblxuZnVuY3Rpb24gc2VuZFVzZXJBdHRhY2soKSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldFJhbmRvbUxlZ2FsQ2VsbCh1c2VyLmxlZ2FsTW92ZXMpO1xuICB1c2VyLnJlY2VpdmVBdHRhY2sodGFyZ2V0KTtcbiAgbWFrZUhpZGRlbkJvYXJkKHVzZXIuZ2V0Ym9hcmQsIHBsYXllckdyaWRBcmVhLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gc2VuZEJvdEF0dGFjayh0YXJnZXQpIHtcbiAgY29uc3QgdGhpbmcgPSBib3QucmVjZWl2ZUF0dGFjayh0YXJnZXQpO1xuICBpZiAodGhpbmcgPT09ICdlcnJvciBpbGxlZ2FsIHNob3QnKSByZXR1cm47XG4gIC8vIGNvbnNvbGUubG9nKHRoaW5nKTtcbiAgLy8gY29uc29sZS5sb2coYm90LmdldGJvYXJkKTtcbiAgbWFrZUhpZGRlbkJvYXJkKGJvdC5nZXRib2FyZCwgYm90R3JpZEFyZWEsIGZhbHNlKTtcbiAgc2VuZFVzZXJBdHRhY2soKTtcbn1cbmZ1bmN0aW9uIHNlbmRBdHRhY2soZSkge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICBzZW5kQm90QXR0YWNrKGUudGFyZ2V0LmNsYXNzTGlzdFswXSk7XG4gIH1cbn1cblxuYm90R3JpZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZW5kQXR0YWNrKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==