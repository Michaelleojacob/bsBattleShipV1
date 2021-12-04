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

  function markBoard(shipToMark, coordinates) {
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
      return markBoard(ship, coords);
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
      // console.log(coordsToCheck);
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
      return hitOrAllSunk;
    }
    if (board[cell] === 'empty' || board[cell] === 'buffer') {
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
  const playerships = _mockshipsObj_mockshipsObj__WEBPACK_IMPORTED_MODULE_0__["default"];
  const playerboard = (0,_gameboardFac_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(playerships);
  playerboard.randomlyPlaceAllShips();
  const { board, receiveAttack, getLegalMoves, getRecordAllShots } = playerboard;
  return {
    board,
    receiveAttack,
    getLegalMoves,
    getRecordAllShots,
  };
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
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/player */ "./src/player/player.js");


const me = (0,_player_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
console.log(me.board);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFDOztBQUVyQyxXQUFXLDBEQUFNO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2dhbWVib2FyZEZhYy9ib2FyZE9iai5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2NoZWNrcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvZ2FtZWJvYXJkRmFjL3BsYWNlUmFuZG9tbHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL21vY2tzaGlwc09iai9tb2Nrc2hpcHNPYmouanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBBMDogJ2VtcHR5JyxcbiAgQjA6ICdlbXB0eScsXG4gIEMwOiAnZW1wdHknLFxuICBEMDogJ2VtcHR5JyxcbiAgRTA6ICdlbXB0eScsXG4gIEYwOiAnZW1wdHknLFxuICBHMDogJ2VtcHR5JyxcbiAgSDA6ICdlbXB0eScsXG4gIEkwOiAnZW1wdHknLFxuICBKMDogJ2VtcHR5JyxcbiAgQTE6ICdlbXB0eScsXG4gIEIxOiAnZW1wdHknLFxuICBDMTogJ2VtcHR5JyxcbiAgRDE6ICdlbXB0eScsXG4gIEUxOiAnZW1wdHknLFxuICBGMTogJ2VtcHR5JyxcbiAgRzE6ICdlbXB0eScsXG4gIEgxOiAnZW1wdHknLFxuICBJMTogJ2VtcHR5JyxcbiAgSjE6ICdlbXB0eScsXG4gIEEyOiAnZW1wdHknLFxuICBCMjogJ2VtcHR5JyxcbiAgQzI6ICdlbXB0eScsXG4gIEQyOiAnZW1wdHknLFxuICBFMjogJ2VtcHR5JyxcbiAgRjI6ICdlbXB0eScsXG4gIEcyOiAnZW1wdHknLFxuICBIMjogJ2VtcHR5JyxcbiAgSTI6ICdlbXB0eScsXG4gIEoyOiAnZW1wdHknLFxuICBBMzogJ2VtcHR5JyxcbiAgQjM6ICdlbXB0eScsXG4gIEMzOiAnZW1wdHknLFxuICBEMzogJ2VtcHR5JyxcbiAgRTM6ICdlbXB0eScsXG4gIEYzOiAnZW1wdHknLFxuICBHMzogJ2VtcHR5JyxcbiAgSDM6ICdlbXB0eScsXG4gIEkzOiAnZW1wdHknLFxuICBKMzogJ2VtcHR5JyxcbiAgQTQ6ICdlbXB0eScsXG4gIEI0OiAnZW1wdHknLFxuICBDNDogJ2VtcHR5JyxcbiAgRDQ6ICdlbXB0eScsXG4gIEU0OiAnZW1wdHknLFxuICBGNDogJ2VtcHR5JyxcbiAgRzQ6ICdlbXB0eScsXG4gIEg0OiAnZW1wdHknLFxuICBJNDogJ2VtcHR5JyxcbiAgSjQ6ICdlbXB0eScsXG4gIEE1OiAnZW1wdHknLFxuICBCNTogJ2VtcHR5JyxcbiAgQzU6ICdlbXB0eScsXG4gIEQ1OiAnZW1wdHknLFxuICBFNTogJ2VtcHR5JyxcbiAgRjU6ICdlbXB0eScsXG4gIEc1OiAnZW1wdHknLFxuICBINTogJ2VtcHR5JyxcbiAgSTU6ICdlbXB0eScsXG4gIEo1OiAnZW1wdHknLFxuICBBNjogJ2VtcHR5JyxcbiAgQjY6ICdlbXB0eScsXG4gIEM2OiAnZW1wdHknLFxuICBENjogJ2VtcHR5JyxcbiAgRTY6ICdlbXB0eScsXG4gIEY2OiAnZW1wdHknLFxuICBHNjogJ2VtcHR5JyxcbiAgSDY6ICdlbXB0eScsXG4gIEk2OiAnZW1wdHknLFxuICBKNjogJ2VtcHR5JyxcbiAgQTc6ICdlbXB0eScsXG4gIEI3OiAnZW1wdHknLFxuICBDNzogJ2VtcHR5JyxcbiAgRDc6ICdlbXB0eScsXG4gIEU3OiAnZW1wdHknLFxuICBGNzogJ2VtcHR5JyxcbiAgRzc6ICdlbXB0eScsXG4gIEg3OiAnZW1wdHknLFxuICBJNzogJ2VtcHR5JyxcbiAgSjc6ICdlbXB0eScsXG4gIEE4OiAnZW1wdHknLFxuICBCODogJ2VtcHR5JyxcbiAgQzg6ICdlbXB0eScsXG4gIEQ4OiAnZW1wdHknLFxuICBFODogJ2VtcHR5JyxcbiAgRjg6ICdlbXB0eScsXG4gIEc4OiAnZW1wdHknLFxuICBIODogJ2VtcHR5JyxcbiAgSTg6ICdlbXB0eScsXG4gIEo4OiAnZW1wdHknLFxuICBBOTogJ2VtcHR5JyxcbiAgQjk6ICdlbXB0eScsXG4gIEM5OiAnZW1wdHknLFxuICBEOTogJ2VtcHR5JyxcbiAgRTk6ICdlbXB0eScsXG4gIEY5OiAnZW1wdHknLFxuICBHOTogJ2VtcHR5JyxcbiAgSDk6ICdlbXB0eScsXG4gIEk5OiAnZW1wdHknLFxuICBKOTogJ2VtcHR5Jyxcbn07XG5cbmNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbmNvbnN0IG51bWJlcnMgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXTtcblxuZXhwb3J0IHsgbGV0dGVycywgbnVtYmVycyB9O1xuIiwiZnVuY3Rpb24gYnVmZmVyU2luZ2xlQ29vcmQoY2VsbCkge1xuICBjb25zdCBbbGV0dGVyLCBudW1Jc1N0cmluZ10gPSBjZWxsLnNwbGl0KCcnKTtcbiAgY29uc3QgbnVtcyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBjb25zdCBudW0gPSBwYXJzZUludChudW1Jc1N0cmluZywgMTApO1xuICBjb25zdCBhcnJPZkxldHRlcnMgPSBbXTtcbiAgY29uc3QgYXJyT2ZOdW1zID0gW107XG5cbiAgZnVuY3Rpb24gVXBwZXJBbmRMb3dlckxldHRlcnMoKSB7XG4gICAgaWYgKGxldHRlcnMuaW5jbHVkZXMobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSAtIDFdKSkge1xuICAgICAgYXJyT2ZMZXR0ZXJzLnB1c2gobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSAtIDFdKTtcbiAgICB9XG4gICAgYXJyT2ZMZXR0ZXJzLnB1c2gobGV0dGVyKTtcbiAgICBpZiAobGV0dGVycy5pbmNsdWRlcyhsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpICsgMV0pKSB7XG4gICAgICBhcnJPZkxldHRlcnMucHVzaChsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpICsgMV0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBVcHBlckFuZExvd2VyTnVtYmVycygpIHtcbiAgICBpZiAobnVtcy5pbmNsdWRlcyhudW1zW251bXMuaW5kZXhPZihudW0pIC0gMV0pKSB7XG4gICAgICBhcnJPZk51bXMucHVzaChudW1zW251bXMuaW5kZXhPZihudW0pIC0gMV0pO1xuICAgIH1cbiAgICBhcnJPZk51bXMucHVzaChudW0pO1xuICAgIGlmIChudW1zLmluY2x1ZGVzKG51bXNbbnVtcy5pbmRleE9mKG51bSkgKyAxXSkpIHtcbiAgICAgIGFyck9mTnVtcy5wdXNoKG51bXNbbnVtcy5pbmRleE9mKG51bSkgKyAxXSk7XG4gICAgfVxuICB9XG5cbiAgVXBwZXJBbmRMb3dlckxldHRlcnMoKTtcbiAgVXBwZXJBbmRMb3dlck51bWJlcnMoKTtcblxuICBmdW5jdGlvbiBjb21iaW5lTGV0dGVyc0FuZE51bWJlcnMoKSB7XG4gICAgY29uc3QgbmV3QXJyID0gW107XG4gICAgYXJyT2ZMZXR0ZXJzLmZvckVhY2goKGVhY2hsZXR0ZXIpID0+IHtcbiAgICAgIGFyck9mTnVtcy5mb3JFYWNoKChlYWNobnVtKSA9PiB7XG4gICAgICAgIG5ld0Fyci5wdXNoKGVhY2hsZXR0ZXIgKyBlYWNobnVtKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdBcnI7XG4gIH1cbiAgY29uc3QgYnVmZmVyQ2VsbCA9IGNvbWJpbmVMZXR0ZXJzQW5kTnVtYmVycygpO1xuICBjb25zdCByZW1vdmVEdXBsaWNhdGVzZnJvbUJ1ZmZlckNlbGwgPSBbLi4ubmV3IFNldChidWZmZXJDZWxsKV07XG4gIHJldHVybiByZW1vdmVEdXBsaWNhdGVzZnJvbUJ1ZmZlckNlbGw7XG59XG5cbmZ1bmN0aW9uIGJ1ZmZlckFsbENvb3JkcyhhcnIpIHtcbiAgY29uc3QgbmV3QXJyID0gW107XG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgYnVmZmVyRWFjaENlbGwgPSBidWZmZXJTaW5nbGVDb29yZChpdGVtKTtcbiAgICBuZXdBcnIucHVzaCguLi5idWZmZXJFYWNoQ2VsbCk7XG4gIH0pO1xuICBjb25zdCBhbGxDZWxsc1RvQnVmZmVyID0gWy4uLm5ldyBTZXQobmV3QXJyKV07XG4gIHJldHVybiBhbGxDZWxsc1RvQnVmZmVyO1xufVxuXG5mdW5jdGlvbiBnZXRCdWZmZXJab25lQXJyYXkoY29vcmRzKSB7XG4gIGNvbnN0IGJ1ZmZlck1pbnVzU2hpcCA9IFtcbiAgICAuLi5uZXcgU2V0KGJ1ZmZlckFsbENvb3Jkcyhjb29yZHMpLmZpbHRlcigoaXRlbSkgPT4gIWNvb3Jkcy5pbmNsdWRlcyhpdGVtKSkpLFxuICBdO1xuICByZXR1cm4gYnVmZmVyTWludXNTaGlwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRCdWZmZXJab25lQXJyYXk7XG4iLCJmdW5jdGlvbiBjaGVja1NpemUoc2l6ZSwgY29vcmRzTGVuZ3RoKSB7XG4gIGNvbnN0IGlzTWF0Y2hpbmdTaXplID0gc2l6ZSA9PT0gY29vcmRzTGVuZ3RoO1xuICByZXR1cm4gaXNNYXRjaGluZ1NpemU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2VsbElzRW1wdHkoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGFyZUNlbGxzRW1wdHkgPSBjb29yZGluYXRlcy5ldmVyeSgoY29vcmQpID0+IGJvYXJkW2Nvb3JkXSA9PT0gJ2VtcHR5Jyk7XG4gIHJldHVybiBhcmVDZWxsc0VtcHR5O1xufVxuXG5mdW5jdGlvbiBjaGVja0NlbGxFeGlzdHMoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGRvQ2VsbHNFeGlzdCA9IGNvb3JkaW5hdGVzLmV2ZXJ5KChjb29yZCkgPT5cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYm9hcmQsIGNvb3JkKVxuICApO1xuICByZXR1cm4gZG9DZWxsc0V4aXN0O1xufVxuXG5jb25zdCBydW5BbGxDaGVja3MgPSAoZ2FtZUIsIHNoaXBTaXplLCBjb29yZGluYXRlcykgPT4ge1xuICBjb25zdCBjaGVjazEgPSBjaGVja1NpemUoc2hpcFNpemUsIGNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gIGNvbnN0IGNoZWNrMiA9IGNoZWNrQ2VsbElzRW1wdHkoZ2FtZUIsIGNvb3JkaW5hdGVzKTtcbiAgY29uc3QgY2hlY2szID0gY2hlY2tDZWxsRXhpc3RzKGdhbWVCLCBjb29yZGluYXRlcyk7XG4gIGNvbnN0IGFsbENoZWNrcyA9IGNoZWNrMSAmJiBjaGVjazIgJiYgY2hlY2szO1xuICByZXR1cm4gYWxsQ2hlY2tzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcnVuQWxsQ2hlY2tzO1xuIiwiaW1wb3J0IGJvYXJkT2JqIGZyb20gJy4vYm9hcmRPYmonO1xuaW1wb3J0IHJ1bkFsbENoZWNrcyBmcm9tICcuL2NoZWNrcyc7XG5pbXBvcnQgcGxhY2VSYW5kb21seSBmcm9tICcuL3BsYWNlUmFuZG9tbHknO1xuaW1wb3J0IGdldEJ1ZmZlclpvbmVBcnJheSBmcm9tICcuL2J1ZmZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZChzaGlwT2JqKSB7XG4gIGNvbnN0IGJvYXJkID0geyAuLi5ib2FyZE9iaiB9O1xuICBjb25zdCBsZWdhbE1vdmVzID0geyAuLi5ib2FyZE9iaiB9O1xuICBjb25zdCByZWNvcmRBbGxTaG90cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIG1hcmtCb2FyZChzaGlwVG9NYXJrLCBjb29yZGluYXRlcykge1xuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBib2FyZFtjb29yZF0gPSBzaGlwVG9NYXJrLm5hbWU7XG4gICAgfSk7XG4gICAgc2hpcFRvTWFyay5zZXRDb29yZHMoY29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFya0J1ZmZlclpvbmUoYnVmZmVyQXJyYXkpIHtcbiAgICBidWZmZXJBcnJheS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgYm9hcmRbY29vcmRdID0gJ2J1ZmZlcic7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzKSB7XG4gICAgY29uc3QgZm9vID0gcnVuQWxsQ2hlY2tzKGJvYXJkLCBzaGlwLnNpemUsIGNvb3Jkcyk7XG4gICAgaWYgKCFmb28pIHJldHVybiAnRXJyb3I6IG9uZSBvciBtb3JlIGNoZWNrcyBmYWlsZWQnO1xuICAgIGlmIChmb28pIHtcbiAgICAgIGNvbnN0IGJ1ZmZlclpvbmUgPSBnZXRCdWZmZXJab25lQXJyYXkoY29vcmRzKTtcbiAgICAgIG1hcmtCdWZmZXJab25lKGJ1ZmZlclpvbmUpO1xuICAgICAgcmV0dXJuIG1hcmtCb2FyZChzaGlwLCBjb29yZHMpO1xuICAgIH1cbiAgICByZXR1cm4geyAuLi5ib2FyZCB9O1xuICB9XG4gIGZ1bmN0aW9uIHJhbmRvbWx5UGxhY2VTaGlwKHNoaXApIHtcbiAgICBjb25zdCBjb29yZHNUb0NoZWNrID0gcGxhY2VSYW5kb21seShzaGlwKTtcbiAgICBjb25zdCBkaWRDb29yZHNQYXNzID0gcnVuQWxsQ2hlY2tzKGJvYXJkLCBzaGlwLnNpemUsIGNvb3Jkc1RvQ2hlY2spO1xuICAgIGlmICghZGlkQ29vcmRzUGFzcykge1xuICAgICAgcmV0dXJuIHJhbmRvbWx5UGxhY2VTaGlwKHNoaXApO1xuICAgIH1cbiAgICBpZiAoZGlkQ29vcmRzUGFzcykge1xuICAgICAgLy8gY29uc29sZS5sb2coY29vcmRzVG9DaGVjayk7XG4gICAgICByZXR1cm4gcGxhY2VTaGlwKHNoaXAsIGNvb3Jkc1RvQ2hlY2spO1xuICAgIH1cbiAgICByZXR1cm4gJ2Vycm9yIHNvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbWx5UGxhY2VBbGxTaGlwcygpIHtcbiAgICBPYmplY3QudmFsdWVzKHNoaXBPYmopLmZvckVhY2goKHNoaXApID0+IHJhbmRvbWx5UGxhY2VTaGlwKHNoaXApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzaGlwT2JqKS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoaWQpIHtcbiAgICBkZWxldGUgbGVnYWxNb3Zlc1tpZF07XG4gICAgcmVjb3JkQWxsU2hvdHMucHVzaChpZCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNlbGwpIHtcbiAgICBpZiAocmVjb3JkQWxsU2hvdHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgIHJldHVybiAnZXJyb3IgaWxsZWdhbCBzaG90JztcbiAgICB9XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzaGlwT2JqLCBib2FyZFtjZWxsXSkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwT2JqW2JvYXJkW2NlbGxdXTtcbiAgICAgIHNoaXAuaGl0KHNoaXAuY29vcmRzLmluZGV4T2YoY2VsbCkpO1xuICAgICAgcmVtb3ZlRnJvbUxlZ2FsTW92ZXNBbmRBZGRUb1JlY29yZFNob3RzKGNlbGwpO1xuICAgICAgY29uc3QgY2hlY2tJZkFsbFNoaXBzQXJlU3VuayA9IGFyZUFsbFNoaXBzU3VuaygpO1xuICAgICAgY29uc3QgaGl0T3JBbGxTdW5rID0gY2hlY2tJZkFsbFNoaXBzQXJlU3VuayA/ICdhbGwgc2hpcHMgYXJlIHN1bmshJyA6ICdoaXQnO1xuICAgICAgcmV0dXJuIGhpdE9yQWxsU3VuaztcbiAgICB9XG4gICAgaWYgKGJvYXJkW2NlbGxdID09PSAnZW1wdHknIHx8IGJvYXJkW2NlbGxdID09PSAnYnVmZmVyJykge1xuICAgICAgYm9hcmRbY2VsbF0gPSAnbWlzcyc7XG4gICAgICByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoY2VsbCk7XG4gICAgICByZXR1cm4gJ21pc3MnO1xuICAgIH1cbiAgICByZXR1cm4gJ3NvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIHsgLi4uYm9hcmQgfTtcbiAgICB9LFxuICAgIGdldCBnZXRMZWdhbE1vdmVzKCkge1xuICAgICAgcmV0dXJuIHsgLi4ubGVnYWxNb3ZlcyB9O1xuICAgIH0sXG4gICAgZ2V0IGdldFJlY29yZEFsbFNob3RzKCkge1xuICAgICAgcmV0dXJuIFsuLi5yZWNvcmRBbGxTaG90c107XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICByYW5kb21seVBsYWNlU2hpcCxcbiAgICByYW5kb21seVBsYWNlQWxsU2hpcHMsXG4gIH07XG59XG4iLCJjb25zdCBudW1zID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuXG5jb25zdCByYW5kb21Gcm9tRW50aXJlQXJyID0gKGFycikgPT4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbmNvbnN0IHJhbmRvbUZyb21TdGFydGluZ1BvaW50ID0gKGFyciwgc2l6ZSkgPT4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhcnIubGVuZ3RoIC0gc2l6ZSkpXTtcblxuZnVuY3Rpb24gcmFuZG9tSG9yaXpvbnRhbChzaGlwc2l6ZSkge1xuICBjb25zdCBwaWNrUm93ID0gcmFuZG9tRnJvbUVudGlyZUFycihsZXR0ZXJzKTtcbiAgY29uc3Qgc3RhcnRpbmdOdW0gPSByYW5kb21Gcm9tU3RhcnRpbmdQb2ludChudW1zLCBzaGlwc2l6ZSk7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnRpbmdOdW07IGkgPCBzdGFydGluZ051bSArIHNoaXBzaXplOyBpICs9IDEpIHtcbiAgICBjb29yZHMucHVzaChgJHtwaWNrUm93fSR7bnVtc1tpXX1gKTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5mdW5jdGlvbiByYW5kb21WZXJ0aWNhbChzaGlwc2l6ZSkge1xuICBjb25zdCBwaWNrQ29sdW1uID0gcmFuZG9tRnJvbUVudGlyZUFycihudW1zKTtcbiAgY29uc3Qgc3RhcnRpbmdMZXR0ZXIgPSByYW5kb21Gcm9tU3RhcnRpbmdQb2ludChudW1zLCBzaGlwc2l6ZSk7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnRpbmdMZXR0ZXI7IGkgPCBzdGFydGluZ0xldHRlciArIHNoaXBzaXplOyBpICs9IDEpIHtcbiAgICBjb29yZHMucHVzaChgJHtsZXR0ZXJzW2ldfSR7cGlja0NvbHVtbn1gKTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5mdW5jdGlvbiBwbGFjZVJhbmRvbWx5KHsgc2l6ZSB9KSB7XG4gIGNvbnN0IGZpZnR5ZmlmdHkgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICBpZiAoZmlmdHlmaWZ0eSkge1xuICAgIHJldHVybiByYW5kb21WZXJ0aWNhbChzaXplKTtcbiAgfVxuICBpZiAoIWZpZnR5ZmlmdHkpIHtcbiAgICByZXR1cm4gcmFuZG9tSG9yaXpvbnRhbChzaXplKTtcbiAgfVxuICByZXR1cm4gJ2Vycm9yIHNvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VSYW5kb21seTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4uL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5JztcblxuY29uc3QgbW9ja1NoaXBzID0ge1xuICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJywgNSksXG4gIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KSxcbiAgZGVzdHJveWVyOiBTaGlwKCdkZXN0cm95ZXInLCAzKSxcbiAgc3VibWFyaW5lOiBTaGlwKCdzdWJtYXJpbmUnLCAzKSxcbiAgcGF0cm9sOiBTaGlwKCdwYXRyb2wnLCAyKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vY2tTaGlwcztcbiIsImltcG9ydCBtb2NrU2hpcHMgZnJvbSAnLi4vbW9ja3NoaXBzT2JqL21vY2tzaGlwc09iaic7XG5pbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4uL2dhbWVib2FyZEZhYy9nYW1lYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIoKSB7XG4gIGNvbnN0IHBsYXllcnNoaXBzID0gbW9ja1NoaXBzO1xuICBjb25zdCBwbGF5ZXJib2FyZCA9IGdhbWVib2FyZChwbGF5ZXJzaGlwcyk7XG4gIHBsYXllcmJvYXJkLnJhbmRvbWx5UGxhY2VBbGxTaGlwcygpO1xuICBjb25zdCB7IGJvYXJkLCByZWNlaXZlQXR0YWNrLCBnZXRMZWdhbE1vdmVzLCBnZXRSZWNvcmRBbGxTaG90cyB9ID0gcGxheWVyYm9hcmQ7XG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRMZWdhbE1vdmVzLFxuICAgIGdldFJlY29yZEFsbFNob3RzLFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChuYW1lLCBzaXplKSB7XG4gIGNvbnN0IHNoaXAgPSBBcnJheS5mcm9tKEFycmF5KHNpemUpLmtleXMoKSk7XG5cbiAgY29uc3QgaGl0ID0gKG51bSkgPT4ge1xuICAgIHNoaXBbc2hpcC5pbmRleE9mKG51bSldID0gJ1gnO1xuICAgIHJldHVybiBbLi4uc2hpcF07XG4gIH07XG5cbiAgY29uc3Qgc2V0Q29vcmRzID0gKGNvb3JkcykgPT4ge1xuICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBjb29yZHM7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcC5ldmVyeSgoaXRlbSkgPT4gaXRlbSA9PT0gJ1gnKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH0sXG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcF07XG4gICAgfSxcbiAgICBnZXQgbG9nKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHNoaXApO1xuICAgIH0sXG4gICAgZ2V0IG5hbWVBbmRTaXplKCkge1xuICAgICAgcmV0dXJuIHsgbmFtZSwgc2l6ZSB9O1xuICAgIH0sXG5cbiAgICBnZXQgY29vcmRzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwLmNvb3JkaW5hdGVzXTtcbiAgICB9LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgc2V0Q29vcmRzLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyL3BsYXllcic7XG5cbmNvbnN0IG1lID0gUGxheWVyKCk7XG5jb25zb2xlLmxvZyhtZS5ib2FyZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=