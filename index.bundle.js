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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFac/boardObj */ "./src/gameboardFac/boardObj.js");
/* harmony import */ var _shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory/shipFactory */ "./src/shipFactory/shipFactory.js");



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

function Gameboard() {
  const board = { ..._gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_0__["default"] };

  function placeShip(ship, coords) {
    const foo = runAllChecks(board, ship.size, coords);
    if (!foo) return 'Error: one or more checks failed';
    if (foo) {
      coords.forEach((coord) => {
        board[coord] = ship;
      });
      ship.setCoords(coords);
    }
    return { ...board };
  }

  function receiveAttack(cell) {
    const shotFired = board[cell];
    // console.log(shotFired);
    shotFired.hit(1);
    // console.log(shotFired.status);
  }

  return {
    get board() {
      return { ...board };
    },
    placeShip,
    receiveAttack,
  };
}

const b1 = Gameboard();
const carrier = (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier', 5);
b1.placeShip(carrier, ['A0', 'A1', 'A2', 'A3', 'A4']);
console.log(carrier.coords);
carrier.hit(carrier.coords.indexOf('A1'));
console.log(carrier.status);
b1.receiveAttack('A0');
// console.log(carrier);
// console.log(carrier.status);
// s1.hit(1);
// console.log(s1.status);

// const o = {
//   one: carrier,
//   two: carrier,
//   three: 'empty',
// };

// console.log(o);
// o.one.hit(1);
// console.log(o.one.status);
// console.log(carrier.status);
// o.two.hit(2);
// console.log(o.one.status);
// console.log(carrier.status);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUMxR2I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZTtBQUNmLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0Y7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLGtCQUFrQixHQUFHLDhEQUFROztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0VBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2JvYXJkT2JqLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9zaGlwRmFjdG9yeS9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgQTA6ICdlbXB0eScsXG4gIEIwOiAnZW1wdHknLFxuICBDMDogJ2VtcHR5JyxcbiAgRDA6ICdlbXB0eScsXG4gIEUwOiAnZW1wdHknLFxuICBGMDogJ2VtcHR5JyxcbiAgRzA6ICdlbXB0eScsXG4gIEgwOiAnZW1wdHknLFxuICBJMDogJ2VtcHR5JyxcbiAgSjA6ICdlbXB0eScsXG4gIEExOiAnZW1wdHknLFxuICBCMTogJ2VtcHR5JyxcbiAgQzE6ICdlbXB0eScsXG4gIEQxOiAnZW1wdHknLFxuICBFMTogJ2VtcHR5JyxcbiAgRjE6ICdlbXB0eScsXG4gIEcxOiAnZW1wdHknLFxuICBIMTogJ2VtcHR5JyxcbiAgSTE6ICdlbXB0eScsXG4gIEoxOiAnZW1wdHknLFxuICBBMjogJ2VtcHR5JyxcbiAgQjI6ICdlbXB0eScsXG4gIEMyOiAnZW1wdHknLFxuICBEMjogJ2VtcHR5JyxcbiAgRTI6ICdlbXB0eScsXG4gIEYyOiAnZW1wdHknLFxuICBHMjogJ2VtcHR5JyxcbiAgSDI6ICdlbXB0eScsXG4gIEkyOiAnZW1wdHknLFxuICBKMjogJ2VtcHR5JyxcbiAgQTM6ICdlbXB0eScsXG4gIEIzOiAnZW1wdHknLFxuICBDMzogJ2VtcHR5JyxcbiAgRDM6ICdlbXB0eScsXG4gIEUzOiAnZW1wdHknLFxuICBGMzogJ2VtcHR5JyxcbiAgRzM6ICdlbXB0eScsXG4gIEgzOiAnZW1wdHknLFxuICBJMzogJ2VtcHR5JyxcbiAgSjM6ICdlbXB0eScsXG4gIEE0OiAnZW1wdHknLFxuICBCNDogJ2VtcHR5JyxcbiAgQzQ6ICdlbXB0eScsXG4gIEQ0OiAnZW1wdHknLFxuICBFNDogJ2VtcHR5JyxcbiAgRjQ6ICdlbXB0eScsXG4gIEc0OiAnZW1wdHknLFxuICBINDogJ2VtcHR5JyxcbiAgSTQ6ICdlbXB0eScsXG4gIEo0OiAnZW1wdHknLFxuICBBNTogJ2VtcHR5JyxcbiAgQjU6ICdlbXB0eScsXG4gIEM1OiAnZW1wdHknLFxuICBENTogJ2VtcHR5JyxcbiAgRTU6ICdlbXB0eScsXG4gIEY1OiAnZW1wdHknLFxuICBHNTogJ2VtcHR5JyxcbiAgSDU6ICdlbXB0eScsXG4gIEk1OiAnZW1wdHknLFxuICBKNTogJ2VtcHR5JyxcbiAgQTY6ICdlbXB0eScsXG4gIEI2OiAnZW1wdHknLFxuICBDNjogJ2VtcHR5JyxcbiAgRDY6ICdlbXB0eScsXG4gIEU2OiAnZW1wdHknLFxuICBGNjogJ2VtcHR5JyxcbiAgRzY6ICdlbXB0eScsXG4gIEg2OiAnZW1wdHknLFxuICBJNjogJ2VtcHR5JyxcbiAgSjY6ICdlbXB0eScsXG4gIEE3OiAnZW1wdHknLFxuICBCNzogJ2VtcHR5JyxcbiAgQzc6ICdlbXB0eScsXG4gIEQ3OiAnZW1wdHknLFxuICBFNzogJ2VtcHR5JyxcbiAgRjc6ICdlbXB0eScsXG4gIEc3OiAnZW1wdHknLFxuICBINzogJ2VtcHR5JyxcbiAgSTc6ICdlbXB0eScsXG4gIEo3OiAnZW1wdHknLFxuICBBODogJ2VtcHR5JyxcbiAgQjg6ICdlbXB0eScsXG4gIEM4OiAnZW1wdHknLFxuICBEODogJ2VtcHR5JyxcbiAgRTg6ICdlbXB0eScsXG4gIEY4OiAnZW1wdHknLFxuICBHODogJ2VtcHR5JyxcbiAgSDg6ICdlbXB0eScsXG4gIEk4OiAnZW1wdHknLFxuICBKODogJ2VtcHR5JyxcbiAgQTk6ICdlbXB0eScsXG4gIEI5OiAnZW1wdHknLFxuICBDOTogJ2VtcHR5JyxcbiAgRDk6ICdlbXB0eScsXG4gIEU5OiAnZW1wdHknLFxuICBGOTogJ2VtcHR5JyxcbiAgRzk6ICdlbXB0eScsXG4gIEg5OiAnZW1wdHknLFxuICBJOTogJ2VtcHR5JyxcbiAgSjk6ICdlbXB0eScsXG59O1xuXG5jb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5jb25zdCBudW1iZXJzID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J107XG5cbmV4cG9ydCB7IGxldHRlcnMsIG51bWJlcnMgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobmFtZSwgc2l6ZSkge1xuICBjb25zdCBzaGlwID0gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpO1xuXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcbiAgICBzaGlwW3NoaXAuaW5kZXhPZihudW0pXSA9ICdYJztcbiAgICByZXR1cm4gWy4uLnNoaXBdO1xuICB9O1xuXG4gIGNvbnN0IHNldENvb3JkcyA9IChjb29yZHMpID0+IHtcbiAgICBzaGlwLmNvb3JkaW5hdGVzID0gY29vcmRzO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHNoaXAuZXZlcnkoKGl0ZW0pID0+IGl0ZW0gPT09ICdYJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZTtcbiAgICB9LFxuICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBdO1xuICAgIH0sXG4gICAgZ2V0IGxvZygpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhzaGlwKTtcbiAgICB9LFxuICAgIGdldCBuYW1lQW5kU2l6ZSgpIHtcbiAgICAgIHJldHVybiB7IG5hbWUsIHNpemUgfTtcbiAgICB9LFxuXG4gICAgZ2V0IGNvb3JkcygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcC5jb29yZGluYXRlc107XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIHNldENvb3JkcyxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJvYXJkT2JqIGZyb20gJy4vZ2FtZWJvYXJkRmFjL2JvYXJkT2JqJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcEZhY3Rvcnkvc2hpcEZhY3RvcnknO1xuXG5mdW5jdGlvbiBjaGVja1NpemUoc2l6ZSwgY29vcmRzTGVuZ3RoKSB7XG4gIGNvbnN0IGlzTWF0Y2hpbmdTaXplID0gc2l6ZSA9PT0gY29vcmRzTGVuZ3RoO1xuICByZXR1cm4gaXNNYXRjaGluZ1NpemU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2VsbElzRW1wdHkoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGFyZUNlbGxzRW1wdHkgPSBjb29yZGluYXRlcy5ldmVyeSgoY29vcmQpID0+IGJvYXJkW2Nvb3JkXSA9PT0gJ2VtcHR5Jyk7XG4gIHJldHVybiBhcmVDZWxsc0VtcHR5O1xufVxuXG5mdW5jdGlvbiBjaGVja0NlbGxFeGlzdHMoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGRvQ2VsbHNFeGlzdCA9IGNvb3JkaW5hdGVzLmV2ZXJ5KChjb29yZCkgPT5cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYm9hcmQsIGNvb3JkKVxuICApO1xuICByZXR1cm4gZG9DZWxsc0V4aXN0O1xufVxuXG5jb25zdCBydW5BbGxDaGVja3MgPSAoZ2FtZUIsIHNoaXBTaXplLCBjb29yZGluYXRlcykgPT4ge1xuICBjb25zdCBjaGVjazEgPSBjaGVja1NpemUoc2hpcFNpemUsIGNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gIGNvbnN0IGNoZWNrMiA9IGNoZWNrQ2VsbElzRW1wdHkoZ2FtZUIsIGNvb3JkaW5hdGVzKTtcbiAgY29uc3QgY2hlY2szID0gY2hlY2tDZWxsRXhpc3RzKGdhbWVCLCBjb29yZGluYXRlcyk7XG4gIGNvbnN0IGFsbENoZWNrcyA9IGNoZWNrMSAmJiBjaGVjazIgJiYgY2hlY2szO1xuICByZXR1cm4gYWxsQ2hlY2tzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBib2FyZCA9IHsgLi4uYm9hcmRPYmogfTtcblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzKSB7XG4gICAgY29uc3QgZm9vID0gcnVuQWxsQ2hlY2tzKGJvYXJkLCBzaGlwLnNpemUsIGNvb3Jkcyk7XG4gICAgaWYgKCFmb28pIHJldHVybiAnRXJyb3I6IG9uZSBvciBtb3JlIGNoZWNrcyBmYWlsZWQnO1xuICAgIGlmIChmb28pIHtcbiAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBib2FyZFtjb29yZF0gPSBzaGlwO1xuICAgICAgfSk7XG4gICAgICBzaGlwLnNldENvb3Jkcyhjb29yZHMpO1xuICAgIH1cbiAgICByZXR1cm4geyAuLi5ib2FyZCB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjZWxsKSB7XG4gICAgY29uc3Qgc2hvdEZpcmVkID0gYm9hcmRbY2VsbF07XG4gICAgLy8gY29uc29sZS5sb2coc2hvdEZpcmVkKTtcbiAgICBzaG90RmlyZWQuaGl0KDEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNob3RGaXJlZC5zdGF0dXMpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4geyAuLi5ib2FyZCB9O1xuICAgIH0sXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbmNvbnN0IGIxID0gR2FtZWJvYXJkKCk7XG5jb25zdCBjYXJyaWVyID0gU2hpcCgnY2FycmllcicsIDUpO1xuYjEucGxhY2VTaGlwKGNhcnJpZXIsIFsnQTAnLCAnQTEnLCAnQTInLCAnQTMnLCAnQTQnXSk7XG5jb25zb2xlLmxvZyhjYXJyaWVyLmNvb3Jkcyk7XG5jYXJyaWVyLmhpdChjYXJyaWVyLmNvb3Jkcy5pbmRleE9mKCdBMScpKTtcbmNvbnNvbGUubG9nKGNhcnJpZXIuc3RhdHVzKTtcbmIxLnJlY2VpdmVBdHRhY2soJ0EwJyk7XG4vLyBjb25zb2xlLmxvZyhjYXJyaWVyKTtcbi8vIGNvbnNvbGUubG9nKGNhcnJpZXIuc3RhdHVzKTtcbi8vIHMxLmhpdCgxKTtcbi8vIGNvbnNvbGUubG9nKHMxLnN0YXR1cyk7XG5cbi8vIGNvbnN0IG8gPSB7XG4vLyAgIG9uZTogY2Fycmllcixcbi8vICAgdHdvOiBjYXJyaWVyLFxuLy8gICB0aHJlZTogJ2VtcHR5Jyxcbi8vIH07XG5cbi8vIGNvbnNvbGUubG9nKG8pO1xuLy8gby5vbmUuaGl0KDEpO1xuLy8gY29uc29sZS5sb2coby5vbmUuc3RhdHVzKTtcbi8vIGNvbnNvbGUubG9nKGNhcnJpZXIuc3RhdHVzKTtcbi8vIG8udHdvLmhpdCgyKTtcbi8vIGNvbnNvbGUubG9nKG8ub25lLnN0YXR1cyk7XG4vLyBjb25zb2xlLmxvZyhjYXJyaWVyLnN0YXR1cyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=