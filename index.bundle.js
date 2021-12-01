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

function placeShipRandomly({ size }) {
  const fiftyfifty = Math.random() < 0.5;
  if (fiftyfifty) {
    return randomVertical(size);
  }
  if (!fiftyfifty) {
    return randomHorizontal(size);
  }
  return 'error something went horribly wrong';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeShipRandomly);


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
/* harmony import */ var _gameboardFac_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFac/checks */ "./src/gameboardFac/checks.js");
/* harmony import */ var _gameboardFac_placeRandomly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboardFac/placeRandomly */ "./src/gameboardFac/placeRandomly.js");
/* harmony import */ var _mockshipsObj_mockshipsObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mockshipsObj/mockshipsObj */ "./src/mockshipsObj/mockshipsObj.js");





function Gameboard(shipObj) {
  const board = { ..._gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_0__["default"] };
  const legalMoves = { ..._gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_0__["default"] };
  const recordAllShots = [];

  function markBoard(shipToMark, coordinates) {
    coordinates.forEach((coord) => {
      board[coord] = shipToMark.name;
    });
    shipToMark.setCoords(coordinates);
  }

  function placeShip(ship, coords) {
    const foo = (0,_gameboardFac_checks__WEBPACK_IMPORTED_MODULE_1__["default"])(board, ship.size, coords);
    if (!foo) return 'Error: one or more checks failed';
    if (foo) {
      return markBoard(ship, coords);
    }
    return { ...board };
  }
  function randomlyPlaceShip(ship) {
    let shipWasPlaced;
    const coordsToCheck = (0,_gameboardFac_placeRandomly__WEBPACK_IMPORTED_MODULE_2__["default"])(ship);
    const didCoordsPass = (0,_gameboardFac_checks__WEBPACK_IMPORTED_MODULE_1__["default"])(board, ship.size, coordsToCheck);
    if (!didCoordsPass) {
      shipWasPlaced = false;
      return randomlyPlaceShip(ship);
    }
    if (didCoordsPass) {
      console.log(coordsToCheck);
      shipWasPlaced = true;
      return markBoard(ship, coordsToCheck);
    }
    return shipWasPlaced;
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
      return hitOrAllSunk;
    }
    if (board[cell] === 'empty') {
      board[cell] = 'miss';
      removeFromLegalMovesAndAddToRecordShots(cell);
      return 'miss';
    }
    return 'something went horribly wrong';
  }

  return {
    get board() {
      return { ...board };
    },
    placeShip,
    receiveAttack,
    randomlyPlaceShip,
  };
}

const ms1 = { ..._mockshipsObj_mockshipsObj__WEBPACK_IMPORTED_MODULE_3__["default"] };
const b1 = Gameboard(ms1);

Object.values(ms1).forEach((ship) => b1.randomlyPlaceShip(ship));

console.log(b1.board);

// Object.values(ms1).forEach((ship) => {
//   ship.randomlyPlaceShip();
// });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUMxRzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pCNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRCQUE0QjtBQUN4RCxtQkFBbUIsUUFBUSxFQUFFLFFBQVE7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtCQUErQjtBQUM5RCxtQkFBbUIsV0FBVyxFQUFFLFdBQVc7QUFDM0M7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDYTs7QUFFOUM7QUFDQSxXQUFXLG9FQUFJO0FBQ2YsY0FBYyxvRUFBSTtBQUNsQixhQUFhLG9FQUFJO0FBQ2pCLGFBQWEsb0VBQUk7QUFDakIsVUFBVSxvRUFBSTtBQUNkOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVlY7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZTtBQUNmLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDRTtBQUNZO0FBQ1Q7O0FBRXJDO0FBQ2Ysa0JBQWtCLEdBQUcsOERBQVE7QUFDN0IsdUJBQXVCLEdBQUcsOERBQVE7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsZ0VBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVFQUFpQjtBQUMzQywwQkFBMEIsZ0VBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLEdBQUcsa0VBQVM7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2JvYXJkT2JqLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvY2hlY2tzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvcGxhY2VSYW5kb21seS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvbW9ja3NoaXBzT2JqL21vY2tzaGlwc09iai5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc2hpcEZhY3Rvcnkvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIEEwOiAnZW1wdHknLFxuICBCMDogJ2VtcHR5JyxcbiAgQzA6ICdlbXB0eScsXG4gIEQwOiAnZW1wdHknLFxuICBFMDogJ2VtcHR5JyxcbiAgRjA6ICdlbXB0eScsXG4gIEcwOiAnZW1wdHknLFxuICBIMDogJ2VtcHR5JyxcbiAgSTA6ICdlbXB0eScsXG4gIEowOiAnZW1wdHknLFxuICBBMTogJ2VtcHR5JyxcbiAgQjE6ICdlbXB0eScsXG4gIEMxOiAnZW1wdHknLFxuICBEMTogJ2VtcHR5JyxcbiAgRTE6ICdlbXB0eScsXG4gIEYxOiAnZW1wdHknLFxuICBHMTogJ2VtcHR5JyxcbiAgSDE6ICdlbXB0eScsXG4gIEkxOiAnZW1wdHknLFxuICBKMTogJ2VtcHR5JyxcbiAgQTI6ICdlbXB0eScsXG4gIEIyOiAnZW1wdHknLFxuICBDMjogJ2VtcHR5JyxcbiAgRDI6ICdlbXB0eScsXG4gIEUyOiAnZW1wdHknLFxuICBGMjogJ2VtcHR5JyxcbiAgRzI6ICdlbXB0eScsXG4gIEgyOiAnZW1wdHknLFxuICBJMjogJ2VtcHR5JyxcbiAgSjI6ICdlbXB0eScsXG4gIEEzOiAnZW1wdHknLFxuICBCMzogJ2VtcHR5JyxcbiAgQzM6ICdlbXB0eScsXG4gIEQzOiAnZW1wdHknLFxuICBFMzogJ2VtcHR5JyxcbiAgRjM6ICdlbXB0eScsXG4gIEczOiAnZW1wdHknLFxuICBIMzogJ2VtcHR5JyxcbiAgSTM6ICdlbXB0eScsXG4gIEozOiAnZW1wdHknLFxuICBBNDogJ2VtcHR5JyxcbiAgQjQ6ICdlbXB0eScsXG4gIEM0OiAnZW1wdHknLFxuICBENDogJ2VtcHR5JyxcbiAgRTQ6ICdlbXB0eScsXG4gIEY0OiAnZW1wdHknLFxuICBHNDogJ2VtcHR5JyxcbiAgSDQ6ICdlbXB0eScsXG4gIEk0OiAnZW1wdHknLFxuICBKNDogJ2VtcHR5JyxcbiAgQTU6ICdlbXB0eScsXG4gIEI1OiAnZW1wdHknLFxuICBDNTogJ2VtcHR5JyxcbiAgRDU6ICdlbXB0eScsXG4gIEU1OiAnZW1wdHknLFxuICBGNTogJ2VtcHR5JyxcbiAgRzU6ICdlbXB0eScsXG4gIEg1OiAnZW1wdHknLFxuICBJNTogJ2VtcHR5JyxcbiAgSjU6ICdlbXB0eScsXG4gIEE2OiAnZW1wdHknLFxuICBCNjogJ2VtcHR5JyxcbiAgQzY6ICdlbXB0eScsXG4gIEQ2OiAnZW1wdHknLFxuICBFNjogJ2VtcHR5JyxcbiAgRjY6ICdlbXB0eScsXG4gIEc2OiAnZW1wdHknLFxuICBINjogJ2VtcHR5JyxcbiAgSTY6ICdlbXB0eScsXG4gIEo2OiAnZW1wdHknLFxuICBBNzogJ2VtcHR5JyxcbiAgQjc6ICdlbXB0eScsXG4gIEM3OiAnZW1wdHknLFxuICBENzogJ2VtcHR5JyxcbiAgRTc6ICdlbXB0eScsXG4gIEY3OiAnZW1wdHknLFxuICBHNzogJ2VtcHR5JyxcbiAgSDc6ICdlbXB0eScsXG4gIEk3OiAnZW1wdHknLFxuICBKNzogJ2VtcHR5JyxcbiAgQTg6ICdlbXB0eScsXG4gIEI4OiAnZW1wdHknLFxuICBDODogJ2VtcHR5JyxcbiAgRDg6ICdlbXB0eScsXG4gIEU4OiAnZW1wdHknLFxuICBGODogJ2VtcHR5JyxcbiAgRzg6ICdlbXB0eScsXG4gIEg4OiAnZW1wdHknLFxuICBJODogJ2VtcHR5JyxcbiAgSjg6ICdlbXB0eScsXG4gIEE5OiAnZW1wdHknLFxuICBCOTogJ2VtcHR5JyxcbiAgQzk6ICdlbXB0eScsXG4gIEQ5OiAnZW1wdHknLFxuICBFOTogJ2VtcHR5JyxcbiAgRjk6ICdlbXB0eScsXG4gIEc5OiAnZW1wdHknLFxuICBIOTogJ2VtcHR5JyxcbiAgSTk6ICdlbXB0eScsXG4gIEo5OiAnZW1wdHknLFxufTtcblxuY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuY29uc3QgbnVtYmVycyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddO1xuXG5leHBvcnQgeyBsZXR0ZXJzLCBudW1iZXJzIH07XG4iLCJmdW5jdGlvbiBjaGVja1NpemUoc2l6ZSwgY29vcmRzTGVuZ3RoKSB7XG4gIGNvbnN0IGlzTWF0Y2hpbmdTaXplID0gc2l6ZSA9PT0gY29vcmRzTGVuZ3RoO1xuICByZXR1cm4gaXNNYXRjaGluZ1NpemU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2VsbElzRW1wdHkoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGFyZUNlbGxzRW1wdHkgPSBjb29yZGluYXRlcy5ldmVyeSgoY29vcmQpID0+IGJvYXJkW2Nvb3JkXSA9PT0gJ2VtcHR5Jyk7XG4gIHJldHVybiBhcmVDZWxsc0VtcHR5O1xufVxuXG5mdW5jdGlvbiBjaGVja0NlbGxFeGlzdHMoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGRvQ2VsbHNFeGlzdCA9IGNvb3JkaW5hdGVzLmV2ZXJ5KChjb29yZCkgPT5cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYm9hcmQsIGNvb3JkKVxuICApO1xuICByZXR1cm4gZG9DZWxsc0V4aXN0O1xufVxuXG5jb25zdCBydW5BbGxDaGVja3MgPSAoZ2FtZUIsIHNoaXBTaXplLCBjb29yZGluYXRlcykgPT4ge1xuICBjb25zdCBjaGVjazEgPSBjaGVja1NpemUoc2hpcFNpemUsIGNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gIGNvbnN0IGNoZWNrMiA9IGNoZWNrQ2VsbElzRW1wdHkoZ2FtZUIsIGNvb3JkaW5hdGVzKTtcbiAgY29uc3QgY2hlY2szID0gY2hlY2tDZWxsRXhpc3RzKGdhbWVCLCBjb29yZGluYXRlcyk7XG4gIGNvbnN0IGFsbENoZWNrcyA9IGNoZWNrMSAmJiBjaGVjazIgJiYgY2hlY2szO1xuICByZXR1cm4gYWxsQ2hlY2tzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcnVuQWxsQ2hlY2tzO1xuIiwiY29uc3QgbnVtcyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbmNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuY29uc3QgcmFuZG9tRnJvbUVudGlyZUFyciA9IChhcnIpID0+IGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG5jb25zdCByYW5kb21Gcm9tU3RhcnRpbmdQb2ludCA9IChhcnIsIHNpemUpID0+IGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXJyLmxlbmd0aCAtIHNpemUpKV07XG5cbmZ1bmN0aW9uIHJhbmRvbUhvcml6b250YWwoc2hpcHNpemUpIHtcbiAgY29uc3QgcGlja1JvdyA9IHJhbmRvbUZyb21FbnRpcmVBcnIobGV0dGVycyk7XG4gIGNvbnN0IHN0YXJ0aW5nTnVtID0gcmFuZG9tRnJvbVN0YXJ0aW5nUG9pbnQobnVtcywgc2hpcHNpemUpO1xuICBjb25zdCBjb29yZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nTnVtOyBpIDwgc3RhcnRpbmdOdW0gKyBzaGlwc2l6ZTsgaSArPSAxKSB7XG4gICAgY29vcmRzLnB1c2goYCR7cGlja1Jvd30ke251bXNbaV19YCk7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZnVuY3Rpb24gcmFuZG9tVmVydGljYWwoc2hpcHNpemUpIHtcbiAgY29uc3QgcGlja0NvbHVtbiA9IHJhbmRvbUZyb21FbnRpcmVBcnIobnVtcyk7XG4gIGNvbnN0IHN0YXJ0aW5nTGV0dGVyID0gcmFuZG9tRnJvbVN0YXJ0aW5nUG9pbnQobnVtcywgc2hpcHNpemUpO1xuICBjb25zdCBjb29yZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nTGV0dGVyOyBpIDwgc3RhcnRpbmdMZXR0ZXIgKyBzaGlwc2l6ZTsgaSArPSAxKSB7XG4gICAgY29vcmRzLnB1c2goYCR7bGV0dGVyc1tpXX0ke3BpY2tDb2x1bW59YCk7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwUmFuZG9tbHkoeyBzaXplIH0pIHtcbiAgY29uc3QgZmlmdHlmaWZ0eSA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gIGlmIChmaWZ0eWZpZnR5KSB7XG4gICAgcmV0dXJuIHJhbmRvbVZlcnRpY2FsKHNpemUpO1xuICB9XG4gIGlmICghZmlmdHlmaWZ0eSkge1xuICAgIHJldHVybiByYW5kb21Ib3Jpem9udGFsKHNpemUpO1xuICB9XG4gIHJldHVybiAnZXJyb3Igc29tZXRoaW5nIHdlbnQgaG9ycmlibHkgd3JvbmcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwbGFjZVNoaXBSYW5kb21seTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4uL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5JztcblxuY29uc3QgbW9ja1NoaXBzID0ge1xuICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJywgNSksXG4gIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KSxcbiAgZGVzdHJveWVyOiBTaGlwKCdkZXN0cm95ZXInLCAzKSxcbiAgc3VibWFyaW5lOiBTaGlwKCdzdWJtYXJpbmUnLCAzKSxcbiAgcGF0cm9sOiBTaGlwKCdwYXRyb2wnLCAyKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vY2tTaGlwcztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobmFtZSwgc2l6ZSkge1xuICBjb25zdCBzaGlwID0gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpO1xuXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcbiAgICBzaGlwW3NoaXAuaW5kZXhPZihudW0pXSA9ICdYJztcbiAgICByZXR1cm4gWy4uLnNoaXBdO1xuICB9O1xuXG4gIGNvbnN0IHNldENvb3JkcyA9IChjb29yZHMpID0+IHtcbiAgICBzaGlwLmNvb3JkaW5hdGVzID0gY29vcmRzO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHNoaXAuZXZlcnkoKGl0ZW0pID0+IGl0ZW0gPT09ICdYJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZTtcbiAgICB9LFxuICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXBdO1xuICAgIH0sXG4gICAgZ2V0IGxvZygpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhzaGlwKTtcbiAgICB9LFxuICAgIGdldCBuYW1lQW5kU2l6ZSgpIHtcbiAgICAgIHJldHVybiB7IG5hbWUsIHNpemUgfTtcbiAgICB9LFxuXG4gICAgZ2V0IGNvb3JkcygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcC5jb29yZGluYXRlc107XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIHNldENvb3JkcyxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJvYXJkT2JqIGZyb20gJy4vZ2FtZWJvYXJkRmFjL2JvYXJkT2JqJztcbmltcG9ydCBydW5BbGxDaGVja3MgZnJvbSAnLi9nYW1lYm9hcmRGYWMvY2hlY2tzJztcbmltcG9ydCBwbGFjZVNoaXBSYW5kb21seSBmcm9tICcuL2dhbWVib2FyZEZhYy9wbGFjZVJhbmRvbWx5JztcbmltcG9ydCBtb2NrU2hpcHMgZnJvbSAnLi9tb2Nrc2hpcHNPYmovbW9ja3NoaXBzT2JqJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKHNoaXBPYmopIHtcbiAgY29uc3QgYm9hcmQgPSB7IC4uLmJvYXJkT2JqIH07XG4gIGNvbnN0IGxlZ2FsTW92ZXMgPSB7IC4uLmJvYXJkT2JqIH07XG4gIGNvbnN0IHJlY29yZEFsbFNob3RzID0gW107XG5cbiAgZnVuY3Rpb24gbWFya0JvYXJkKHNoaXBUb01hcmssIGNvb3JkaW5hdGVzKSB7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGJvYXJkW2Nvb3JkXSA9IHNoaXBUb01hcmsubmFtZTtcbiAgICB9KTtcbiAgICBzaGlwVG9NYXJrLnNldENvb3Jkcyhjb29yZGluYXRlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzKSB7XG4gICAgY29uc3QgZm9vID0gcnVuQWxsQ2hlY2tzKGJvYXJkLCBzaGlwLnNpemUsIGNvb3Jkcyk7XG4gICAgaWYgKCFmb28pIHJldHVybiAnRXJyb3I6IG9uZSBvciBtb3JlIGNoZWNrcyBmYWlsZWQnO1xuICAgIGlmIChmb28pIHtcbiAgICAgIHJldHVybiBtYXJrQm9hcmQoc2hpcCwgY29vcmRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uYm9hcmQgfTtcbiAgfVxuICBmdW5jdGlvbiByYW5kb21seVBsYWNlU2hpcChzaGlwKSB7XG4gICAgbGV0IHNoaXBXYXNQbGFjZWQ7XG4gICAgY29uc3QgY29vcmRzVG9DaGVjayA9IHBsYWNlU2hpcFJhbmRvbWx5KHNoaXApO1xuICAgIGNvbnN0IGRpZENvb3Jkc1Bhc3MgPSBydW5BbGxDaGVja3MoYm9hcmQsIHNoaXAuc2l6ZSwgY29vcmRzVG9DaGVjayk7XG4gICAgaWYgKCFkaWRDb29yZHNQYXNzKSB7XG4gICAgICBzaGlwV2FzUGxhY2VkID0gZmFsc2U7XG4gICAgICByZXR1cm4gcmFuZG9tbHlQbGFjZVNoaXAoc2hpcCk7XG4gICAgfVxuICAgIGlmIChkaWRDb29yZHNQYXNzKSB7XG4gICAgICBjb25zb2xlLmxvZyhjb29yZHNUb0NoZWNrKTtcbiAgICAgIHNoaXBXYXNQbGFjZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIG1hcmtCb2FyZChzaGlwLCBjb29yZHNUb0NoZWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBXYXNQbGFjZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBhcmVBbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoc2hpcE9iaikuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUxlZ2FsTW92ZXNBbmRBZGRUb1JlY29yZFNob3RzKGlkKSB7XG4gICAgZGVsZXRlIGxlZ2FsTW92ZXNbaWRdO1xuICAgIHJlY29yZEFsbFNob3RzLnB1c2goaWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjZWxsKSB7XG4gICAgaWYgKHJlY29yZEFsbFNob3RzLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICByZXR1cm4gJ2Vycm9yIGlsbGVnYWwgc2hvdCc7XG4gICAgfVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc2hpcE9iaiwgYm9hcmRbY2VsbF0pKSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcE9ialtib2FyZFtjZWxsXV07XG4gICAgICBzaGlwLmhpdChzaGlwLmNvb3Jkcy5pbmRleE9mKGNlbGwpKTtcbiAgICAgIHJlbW92ZUZyb21MZWdhbE1vdmVzQW5kQWRkVG9SZWNvcmRTaG90cyhjZWxsKTtcbiAgICAgIGNvbnN0IGNoZWNrSWZBbGxTaGlwc0FyZVN1bmsgPSBhcmVBbGxTaGlwc1N1bmsoKTtcbiAgICAgIGNvbnN0IGhpdE9yQWxsU3VuayA9IGNoZWNrSWZBbGxTaGlwc0FyZVN1bmsgPyAnYWxsIHNoaXBzIGFyZSBzdW5rIScgOiAnaGl0JztcbiAgICAgIHJldHVybiBoaXRPckFsbFN1bms7XG4gICAgfVxuICAgIGlmIChib2FyZFtjZWxsXSA9PT0gJ2VtcHR5Jykge1xuICAgICAgYm9hcmRbY2VsbF0gPSAnbWlzcyc7XG4gICAgICByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoY2VsbCk7XG4gICAgICByZXR1cm4gJ21pc3MnO1xuICAgIH1cbiAgICByZXR1cm4gJ3NvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIHsgLi4uYm9hcmQgfTtcbiAgICB9LFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHJhbmRvbWx5UGxhY2VTaGlwLFxuICB9O1xufVxuXG5jb25zdCBtczEgPSB7IC4uLm1vY2tTaGlwcyB9O1xuY29uc3QgYjEgPSBHYW1lYm9hcmQobXMxKTtcblxuT2JqZWN0LnZhbHVlcyhtczEpLmZvckVhY2goKHNoaXApID0+IGIxLnJhbmRvbWx5UGxhY2VTaGlwKHNoaXApKTtcblxuY29uc29sZS5sb2coYjEuYm9hcmQpO1xuXG4vLyBPYmplY3QudmFsdWVzKG1zMSkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuLy8gICBzaGlwLnJhbmRvbWx5UGxhY2VTaGlwKCk7XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==