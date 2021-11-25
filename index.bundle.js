/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  const ship = Array.from(Array(size).keys()).map((i) => i + 1);

  const hit = (num) => {
    ship[ship.indexOf(num)] = 'X';
    return [...ship];
    // return ship.map((x) => x);
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
    hit,
    isSunk,
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
/******/ 			// no module.id needed
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
/* harmony import */ var _gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFac/boardObj */ "./src/gameboardFac/boardObj.js");
/* harmony import */ var _shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory/shipFactory */ "./src/shipFactory/shipFactory.js");



function checkSize(size, coords) {
  console.log(size);
  console.log(coords);
  console.log(typeof size);
  console.log(typeof coords);
  let state = false;
  if (size !== coords.length) {
    console.log('error size and coords.length do not match');
    return state;
  }
  state = true;
  return state;
}

// console.log(checkSize(2, [1, 2]));
// console.log(checkSize(2, [1, 2, 3]));

function checkCellIsEmpty(board, coordinates) {
  let state = false;
  if (!coordinates.every((coord) => board[coord] === 'empty')) {
    console.log('error one or more cells were not empty');
    return state;
  }
  state = true;
  return state;
}

// const mockB = { ...boardObj };

// checkCellIsEmpty(mockB, ['A0', 'A1', 'B9']);
// console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9']));
// console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'A12']));
// console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'J9']));

function checkCellExists(board, coordinates) {
  let state = false;
  if (!coordinates.every((coord) => Object.prototype.hasOwnProperty.call(board, coord))) {
    console.log('error one or more cells do not exist');
    return state;
  }
  state = true;
  return state;
}
// console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9']));
// console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9', 'P9']));

function runAllChecks(shipSize, gboard, coordinates) {
  let state = false;
  if (
    (checkSize(shipSize, coordinates.length) === true &&
      checkCellIsEmpty(gboard, coordinates) === true &&
      checkCellExists(gboard, coordinates)) === true
  ) {
    state = true;
    return state;
  }
  console.log('one of the checks failed');
  return state;
}

function Gameboard() {
  const board = { ..._gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_0__["default"] };

  function placeShip({ name, size }, coords) {
    const checkAll = runAllChecks(size, board, coords);
    if (checkAll) {
      coords.forEach((coord) => {
        board[coord] = name;
      });
    }
    return 'error';
  }

  return {
    get board() {
      return { ...board };
    },
    placeShip,
  };
}

const b1 = Gameboard();
const s1 = (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('s1', 2);

// b1.placeShip(s1, ['A0']);
b1.placeShip(s1, ['A0', 'A1']);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUMxR2I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDRjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLEdBQUcsOERBQVE7O0FBRTdCLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLG9FQUFJOztBQUVmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2JvYXJkT2JqLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9zaGlwRmFjdG9yeS9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgQTA6ICdlbXB0eScsXG4gIEIwOiAnZW1wdHknLFxuICBDMDogJ2VtcHR5JyxcbiAgRDA6ICdlbXB0eScsXG4gIEUwOiAnZW1wdHknLFxuICBGMDogJ2VtcHR5JyxcbiAgRzA6ICdlbXB0eScsXG4gIEgwOiAnZW1wdHknLFxuICBJMDogJ2VtcHR5JyxcbiAgSjA6ICdlbXB0eScsXG4gIEExOiAnZW1wdHknLFxuICBCMTogJ2VtcHR5JyxcbiAgQzE6ICdlbXB0eScsXG4gIEQxOiAnZW1wdHknLFxuICBFMTogJ2VtcHR5JyxcbiAgRjE6ICdlbXB0eScsXG4gIEcxOiAnZW1wdHknLFxuICBIMTogJ2VtcHR5JyxcbiAgSTE6ICdlbXB0eScsXG4gIEoxOiAnZW1wdHknLFxuICBBMjogJ2VtcHR5JyxcbiAgQjI6ICdlbXB0eScsXG4gIEMyOiAnZW1wdHknLFxuICBEMjogJ2VtcHR5JyxcbiAgRTI6ICdlbXB0eScsXG4gIEYyOiAnZW1wdHknLFxuICBHMjogJ2VtcHR5JyxcbiAgSDI6ICdlbXB0eScsXG4gIEkyOiAnZW1wdHknLFxuICBKMjogJ2VtcHR5JyxcbiAgQTM6ICdlbXB0eScsXG4gIEIzOiAnZW1wdHknLFxuICBDMzogJ2VtcHR5JyxcbiAgRDM6ICdlbXB0eScsXG4gIEUzOiAnZW1wdHknLFxuICBGMzogJ2VtcHR5JyxcbiAgRzM6ICdlbXB0eScsXG4gIEgzOiAnZW1wdHknLFxuICBJMzogJ2VtcHR5JyxcbiAgSjM6ICdlbXB0eScsXG4gIEE0OiAnZW1wdHknLFxuICBCNDogJ2VtcHR5JyxcbiAgQzQ6ICdlbXB0eScsXG4gIEQ0OiAnZW1wdHknLFxuICBFNDogJ2VtcHR5JyxcbiAgRjQ6ICdlbXB0eScsXG4gIEc0OiAnZW1wdHknLFxuICBINDogJ2VtcHR5JyxcbiAgSTQ6ICdlbXB0eScsXG4gIEo0OiAnZW1wdHknLFxuICBBNTogJ2VtcHR5JyxcbiAgQjU6ICdlbXB0eScsXG4gIEM1OiAnZW1wdHknLFxuICBENTogJ2VtcHR5JyxcbiAgRTU6ICdlbXB0eScsXG4gIEY1OiAnZW1wdHknLFxuICBHNTogJ2VtcHR5JyxcbiAgSDU6ICdlbXB0eScsXG4gIEk1OiAnZW1wdHknLFxuICBKNTogJ2VtcHR5JyxcbiAgQTY6ICdlbXB0eScsXG4gIEI2OiAnZW1wdHknLFxuICBDNjogJ2VtcHR5JyxcbiAgRDY6ICdlbXB0eScsXG4gIEU2OiAnZW1wdHknLFxuICBGNjogJ2VtcHR5JyxcbiAgRzY6ICdlbXB0eScsXG4gIEg2OiAnZW1wdHknLFxuICBJNjogJ2VtcHR5JyxcbiAgSjY6ICdlbXB0eScsXG4gIEE3OiAnZW1wdHknLFxuICBCNzogJ2VtcHR5JyxcbiAgQzc6ICdlbXB0eScsXG4gIEQ3OiAnZW1wdHknLFxuICBFNzogJ2VtcHR5JyxcbiAgRjc6ICdlbXB0eScsXG4gIEc3OiAnZW1wdHknLFxuICBINzogJ2VtcHR5JyxcbiAgSTc6ICdlbXB0eScsXG4gIEo3OiAnZW1wdHknLFxuICBBODogJ2VtcHR5JyxcbiAgQjg6ICdlbXB0eScsXG4gIEM4OiAnZW1wdHknLFxuICBEODogJ2VtcHR5JyxcbiAgRTg6ICdlbXB0eScsXG4gIEY4OiAnZW1wdHknLFxuICBHODogJ2VtcHR5JyxcbiAgSDg6ICdlbXB0eScsXG4gIEk4OiAnZW1wdHknLFxuICBKODogJ2VtcHR5JyxcbiAgQTk6ICdlbXB0eScsXG4gIEI5OiAnZW1wdHknLFxuICBDOTogJ2VtcHR5JyxcbiAgRDk6ICdlbXB0eScsXG4gIEU5OiAnZW1wdHknLFxuICBGOTogJ2VtcHR5JyxcbiAgRzk6ICdlbXB0eScsXG4gIEg5OiAnZW1wdHknLFxuICBJOTogJ2VtcHR5JyxcbiAgSjk6ICdlbXB0eScsXG59O1xuXG5jb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5jb25zdCBudW1iZXJzID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J107XG5cbmV4cG9ydCB7IGxldHRlcnMsIG51bWJlcnMgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobmFtZSwgc2l6ZSkge1xuICBjb25zdCBzaGlwID0gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpLm1hcCgoaSkgPT4gaSArIDEpO1xuXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcbiAgICBzaGlwW3NoaXAuaW5kZXhPZihudW0pXSA9ICdYJztcbiAgICByZXR1cm4gWy4uLnNoaXBdO1xuICAgIC8vIHJldHVybiBzaGlwLm1hcCgoeCkgPT4geCk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcC5ldmVyeSgoaXRlbSkgPT4gaXRlbSA9PT0gJ1gnKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH0sXG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcF07XG4gICAgfSxcbiAgICBnZXQgbG9nKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHNoaXApO1xuICAgIH0sXG4gICAgZ2V0IG5hbWVBbmRTaXplKCkge1xuICAgICAgcmV0dXJuIHsgbmFtZSwgc2l6ZSB9O1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJvYXJkT2JqIGZyb20gJy4vZ2FtZWJvYXJkRmFjL2JvYXJkT2JqJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcEZhY3Rvcnkvc2hpcEZhY3RvcnknO1xuXG5mdW5jdGlvbiBjaGVja1NpemUoc2l6ZSwgY29vcmRzKSB7XG4gIGNvbnNvbGUubG9nKHNpemUpO1xuICBjb25zb2xlLmxvZyhjb29yZHMpO1xuICBjb25zb2xlLmxvZyh0eXBlb2Ygc2l6ZSk7XG4gIGNvbnNvbGUubG9nKHR5cGVvZiBjb29yZHMpO1xuICBsZXQgc3RhdGUgPSBmYWxzZTtcbiAgaWYgKHNpemUgIT09IGNvb3Jkcy5sZW5ndGgpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3Igc2l6ZSBhbmQgY29vcmRzLmxlbmd0aCBkbyBub3QgbWF0Y2gnKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgc3RhdGUgPSB0cnVlO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbi8vIGNvbnNvbGUubG9nKGNoZWNrU2l6ZSgyLCBbMSwgMl0pKTtcbi8vIGNvbnNvbGUubG9nKGNoZWNrU2l6ZSgyLCBbMSwgMiwgM10pKTtcblxuZnVuY3Rpb24gY2hlY2tDZWxsSXNFbXB0eShib2FyZCwgY29vcmRpbmF0ZXMpIHtcbiAgbGV0IHN0YXRlID0gZmFsc2U7XG4gIGlmICghY29vcmRpbmF0ZXMuZXZlcnkoKGNvb3JkKSA9PiBib2FyZFtjb29yZF0gPT09ICdlbXB0eScpKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yIG9uZSBvciBtb3JlIGNlbGxzIHdlcmUgbm90IGVtcHR5Jyk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIHN0YXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vLyBjb25zdCBtb2NrQiA9IHsgLi4uYm9hcmRPYmogfTtcblxuLy8gY2hlY2tDZWxsSXNFbXB0eShtb2NrQiwgWydBMCcsICdBMScsICdCOSddKTtcbi8vIGNvbnNvbGUubG9nKGNoZWNrQ2VsbElzRW1wdHkobW9ja0IsIFsnQTAnLCAnQTEnLCAnQjknXSkpO1xuLy8gY29uc29sZS5sb2coY2hlY2tDZWxsSXNFbXB0eShtb2NrQiwgWydBMCcsICdBMScsICdCOScsICdBMTInXSkpO1xuLy8gY29uc29sZS5sb2coY2hlY2tDZWxsSXNFbXB0eShtb2NrQiwgWydBMCcsICdBMScsICdCOScsICdKOSddKSk7XG5cbmZ1bmN0aW9uIGNoZWNrQ2VsbEV4aXN0cyhib2FyZCwgY29vcmRpbmF0ZXMpIHtcbiAgbGV0IHN0YXRlID0gZmFsc2U7XG4gIGlmICghY29vcmRpbmF0ZXMuZXZlcnkoKGNvb3JkKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYm9hcmQsIGNvb3JkKSkpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3Igb25lIG9yIG1vcmUgY2VsbHMgZG8gbm90IGV4aXN0Jyk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIHN0YXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuLy8gY29uc29sZS5sb2coY2hlY2tDZWxsRXhpc3RzKG1vY2tCLCBbJ0EwJywgJ0ExJywgJ0I5JywgJ0o5J10pKTtcbi8vIGNvbnNvbGUubG9nKGNoZWNrQ2VsbEV4aXN0cyhtb2NrQiwgWydBMCcsICdBMScsICdCOScsICdKOScsICdQOSddKSk7XG5cbmZ1bmN0aW9uIHJ1bkFsbENoZWNrcyhzaGlwU2l6ZSwgZ2JvYXJkLCBjb29yZGluYXRlcykge1xuICBsZXQgc3RhdGUgPSBmYWxzZTtcbiAgaWYgKFxuICAgIChjaGVja1NpemUoc2hpcFNpemUsIGNvb3JkaW5hdGVzLmxlbmd0aCkgPT09IHRydWUgJiZcbiAgICAgIGNoZWNrQ2VsbElzRW1wdHkoZ2JvYXJkLCBjb29yZGluYXRlcykgPT09IHRydWUgJiZcbiAgICAgIGNoZWNrQ2VsbEV4aXN0cyhnYm9hcmQsIGNvb3JkaW5hdGVzKSkgPT09IHRydWVcbiAgKSB7XG4gICAgc3RhdGUgPSB0cnVlO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zb2xlLmxvZygnb25lIG9mIHRoZSBjaGVja3MgZmFpbGVkJyk7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBib2FyZCA9IHsgLi4uYm9hcmRPYmogfTtcblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoeyBuYW1lLCBzaXplIH0sIGNvb3Jkcykge1xuICAgIGNvbnN0IGNoZWNrQWxsID0gcnVuQWxsQ2hlY2tzKHNpemUsIGJvYXJkLCBjb29yZHMpO1xuICAgIGlmIChjaGVja0FsbCkge1xuICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIGJvYXJkW2Nvb3JkXSA9IG5hbWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICdlcnJvcic7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIHJldHVybiB7IC4uLmJvYXJkIH07XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gIH07XG59XG5cbmNvbnN0IGIxID0gR2FtZWJvYXJkKCk7XG5jb25zdCBzMSA9IFNoaXAoJ3MxJywgMik7XG5cbi8vIGIxLnBsYWNlU2hpcChzMSwgWydBMCddKTtcbmIxLnBsYWNlU2hpcChzMSwgWydBMCcsICdBMSddKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==