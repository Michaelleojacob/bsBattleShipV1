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
  const legalMoves = { ..._gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_0__["default"] };
  const recordAllShots = [];

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

  function removeFromLegalMovesAndAddToRecordShots(id) {
    delete legalMoves[id];
    recordAllShots.push(id);
    console.log({ ...legalMoves });
    console.log([...recordAllShots]);
  }

  function receiveAttack(cell) {
    if (recordAllShots.includes(cell)) {
      return 'error that shot has already been made';
    }

    function attackMissed() {
      board[cell] = 'miss';
      return removeFromLegalMovesAndAddToRecordShots(cell);
    }
    function attackLanded() {
      board[cell].hit(board[cell].coords.indexOf(cell));
      board[cell] = 'hit';
      return removeFromLegalMovesAndAddToRecordShots(cell);
    }

    const lol = board[cell] === 'empty' ? attackMissed : attackLanded;

    return lol;
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
b1.receiveAttack('A0');
b1.receiveAttack('A1');
b1.receiveAttack('A2');
console.log(carrier.status);
console.log(b1.board);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUMxR2I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZTtBQUNmLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0Y7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLGtCQUFrQixHQUFHLDhEQUFRO0FBQzdCLHVCQUF1QixHQUFHLDhEQUFRO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0VBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2dhbWVib2FyZEZhYy9ib2FyZE9iai5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc2hpcEZhY3Rvcnkvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIEEwOiAnZW1wdHknLFxuICBCMDogJ2VtcHR5JyxcbiAgQzA6ICdlbXB0eScsXG4gIEQwOiAnZW1wdHknLFxuICBFMDogJ2VtcHR5JyxcbiAgRjA6ICdlbXB0eScsXG4gIEcwOiAnZW1wdHknLFxuICBIMDogJ2VtcHR5JyxcbiAgSTA6ICdlbXB0eScsXG4gIEowOiAnZW1wdHknLFxuICBBMTogJ2VtcHR5JyxcbiAgQjE6ICdlbXB0eScsXG4gIEMxOiAnZW1wdHknLFxuICBEMTogJ2VtcHR5JyxcbiAgRTE6ICdlbXB0eScsXG4gIEYxOiAnZW1wdHknLFxuICBHMTogJ2VtcHR5JyxcbiAgSDE6ICdlbXB0eScsXG4gIEkxOiAnZW1wdHknLFxuICBKMTogJ2VtcHR5JyxcbiAgQTI6ICdlbXB0eScsXG4gIEIyOiAnZW1wdHknLFxuICBDMjogJ2VtcHR5JyxcbiAgRDI6ICdlbXB0eScsXG4gIEUyOiAnZW1wdHknLFxuICBGMjogJ2VtcHR5JyxcbiAgRzI6ICdlbXB0eScsXG4gIEgyOiAnZW1wdHknLFxuICBJMjogJ2VtcHR5JyxcbiAgSjI6ICdlbXB0eScsXG4gIEEzOiAnZW1wdHknLFxuICBCMzogJ2VtcHR5JyxcbiAgQzM6ICdlbXB0eScsXG4gIEQzOiAnZW1wdHknLFxuICBFMzogJ2VtcHR5JyxcbiAgRjM6ICdlbXB0eScsXG4gIEczOiAnZW1wdHknLFxuICBIMzogJ2VtcHR5JyxcbiAgSTM6ICdlbXB0eScsXG4gIEozOiAnZW1wdHknLFxuICBBNDogJ2VtcHR5JyxcbiAgQjQ6ICdlbXB0eScsXG4gIEM0OiAnZW1wdHknLFxuICBENDogJ2VtcHR5JyxcbiAgRTQ6ICdlbXB0eScsXG4gIEY0OiAnZW1wdHknLFxuICBHNDogJ2VtcHR5JyxcbiAgSDQ6ICdlbXB0eScsXG4gIEk0OiAnZW1wdHknLFxuICBKNDogJ2VtcHR5JyxcbiAgQTU6ICdlbXB0eScsXG4gIEI1OiAnZW1wdHknLFxuICBDNTogJ2VtcHR5JyxcbiAgRDU6ICdlbXB0eScsXG4gIEU1OiAnZW1wdHknLFxuICBGNTogJ2VtcHR5JyxcbiAgRzU6ICdlbXB0eScsXG4gIEg1OiAnZW1wdHknLFxuICBJNTogJ2VtcHR5JyxcbiAgSjU6ICdlbXB0eScsXG4gIEE2OiAnZW1wdHknLFxuICBCNjogJ2VtcHR5JyxcbiAgQzY6ICdlbXB0eScsXG4gIEQ2OiAnZW1wdHknLFxuICBFNjogJ2VtcHR5JyxcbiAgRjY6ICdlbXB0eScsXG4gIEc2OiAnZW1wdHknLFxuICBINjogJ2VtcHR5JyxcbiAgSTY6ICdlbXB0eScsXG4gIEo2OiAnZW1wdHknLFxuICBBNzogJ2VtcHR5JyxcbiAgQjc6ICdlbXB0eScsXG4gIEM3OiAnZW1wdHknLFxuICBENzogJ2VtcHR5JyxcbiAgRTc6ICdlbXB0eScsXG4gIEY3OiAnZW1wdHknLFxuICBHNzogJ2VtcHR5JyxcbiAgSDc6ICdlbXB0eScsXG4gIEk3OiAnZW1wdHknLFxuICBKNzogJ2VtcHR5JyxcbiAgQTg6ICdlbXB0eScsXG4gIEI4OiAnZW1wdHknLFxuICBDODogJ2VtcHR5JyxcbiAgRDg6ICdlbXB0eScsXG4gIEU4OiAnZW1wdHknLFxuICBGODogJ2VtcHR5JyxcbiAgRzg6ICdlbXB0eScsXG4gIEg4OiAnZW1wdHknLFxuICBJODogJ2VtcHR5JyxcbiAgSjg6ICdlbXB0eScsXG4gIEE5OiAnZW1wdHknLFxuICBCOTogJ2VtcHR5JyxcbiAgQzk6ICdlbXB0eScsXG4gIEQ5OiAnZW1wdHknLFxuICBFOTogJ2VtcHR5JyxcbiAgRjk6ICdlbXB0eScsXG4gIEc5OiAnZW1wdHknLFxuICBIOTogJ2VtcHR5JyxcbiAgSTk6ICdlbXB0eScsXG4gIEo5OiAnZW1wdHknLFxufTtcblxuY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuY29uc3QgbnVtYmVycyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddO1xuXG5leHBvcnQgeyBsZXR0ZXJzLCBudW1iZXJzIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKG5hbWUsIHNpemUpIHtcbiAgY29uc3Qgc2hpcCA9IEFycmF5LmZyb20oQXJyYXkoc2l6ZSkua2V5cygpKTtcblxuICBjb25zdCBoaXQgPSAobnVtKSA9PiB7XG4gICAgc2hpcFtzaGlwLmluZGV4T2YobnVtKV0gPSAnWCc7XG4gICAgcmV0dXJuIFsuLi5zaGlwXTtcbiAgfTtcblxuICBjb25zdCBzZXRDb29yZHMgPSAoY29vcmRzKSA9PiB7XG4gICAgc2hpcC5jb29yZGluYXRlcyA9IGNvb3JkcztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwLmV2ZXJ5KChpdGVtKSA9PiBpdGVtID09PSAnWCcpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemU7XG4gICAgfSxcbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwXTtcbiAgICB9LFxuICAgIGdldCBsb2coKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coc2hpcCk7XG4gICAgfSxcbiAgICBnZXQgbmFtZUFuZFNpemUoKSB7XG4gICAgICByZXR1cm4geyBuYW1lLCBzaXplIH07XG4gICAgfSxcblxuICAgIGdldCBjb29yZHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXAuY29vcmRpbmF0ZXNdO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBzZXRDb29yZHMsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBib2FyZE9iaiBmcm9tICcuL2dhbWVib2FyZEZhYy9ib2FyZE9iaic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5JztcblxuZnVuY3Rpb24gY2hlY2tTaXplKHNpemUsIGNvb3Jkc0xlbmd0aCkge1xuICBjb25zdCBpc01hdGNoaW5nU2l6ZSA9IHNpemUgPT09IGNvb3Jkc0xlbmd0aDtcbiAgcmV0dXJuIGlzTWF0Y2hpbmdTaXplO1xufVxuXG5mdW5jdGlvbiBjaGVja0NlbGxJc0VtcHR5KGJvYXJkLCBjb29yZGluYXRlcykge1xuICBjb25zdCBhcmVDZWxsc0VtcHR5ID0gY29vcmRpbmF0ZXMuZXZlcnkoKGNvb3JkKSA9PiBib2FyZFtjb29yZF0gPT09ICdlbXB0eScpO1xuICByZXR1cm4gYXJlQ2VsbHNFbXB0eTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDZWxsRXhpc3RzKGJvYXJkLCBjb29yZGluYXRlcykge1xuICBjb25zdCBkb0NlbGxzRXhpc3QgPSBjb29yZGluYXRlcy5ldmVyeSgoY29vcmQpID0+XG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGJvYXJkLCBjb29yZClcbiAgKTtcbiAgcmV0dXJuIGRvQ2VsbHNFeGlzdDtcbn1cblxuY29uc3QgcnVuQWxsQ2hlY2tzID0gKGdhbWVCLCBzaGlwU2l6ZSwgY29vcmRpbmF0ZXMpID0+IHtcbiAgY29uc3QgY2hlY2sxID0gY2hlY2tTaXplKHNoaXBTaXplLCBjb29yZGluYXRlcy5sZW5ndGgpO1xuICBjb25zdCBjaGVjazIgPSBjaGVja0NlbGxJc0VtcHR5KGdhbWVCLCBjb29yZGluYXRlcyk7XG4gIGNvbnN0IGNoZWNrMyA9IGNoZWNrQ2VsbEV4aXN0cyhnYW1lQiwgY29vcmRpbmF0ZXMpO1xuICBjb25zdCBhbGxDaGVja3MgPSBjaGVjazEgJiYgY2hlY2syICYmIGNoZWNrMztcbiAgcmV0dXJuIGFsbENoZWNrcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgYm9hcmQgPSB7IC4uLmJvYXJkT2JqIH07XG4gIGNvbnN0IGxlZ2FsTW92ZXMgPSB7IC4uLmJvYXJkT2JqIH07XG4gIGNvbnN0IHJlY29yZEFsbFNob3RzID0gW107XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3Jkcykge1xuICAgIGNvbnN0IGZvbyA9IHJ1bkFsbENoZWNrcyhib2FyZCwgc2hpcC5zaXplLCBjb29yZHMpO1xuICAgIGlmICghZm9vKSByZXR1cm4gJ0Vycm9yOiBvbmUgb3IgbW9yZSBjaGVja3MgZmFpbGVkJztcbiAgICBpZiAoZm9vKSB7XG4gICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgYm9hcmRbY29vcmRdID0gc2hpcDtcbiAgICAgIH0pO1xuICAgICAgc2hpcC5zZXRDb29yZHMoY29vcmRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uYm9hcmQgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21MZWdhbE1vdmVzQW5kQWRkVG9SZWNvcmRTaG90cyhpZCkge1xuICAgIGRlbGV0ZSBsZWdhbE1vdmVzW2lkXTtcbiAgICByZWNvcmRBbGxTaG90cy5wdXNoKGlkKTtcbiAgICBjb25zb2xlLmxvZyh7IC4uLmxlZ2FsTW92ZXMgfSk7XG4gICAgY29uc29sZS5sb2coWy4uLnJlY29yZEFsbFNob3RzXSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNlbGwpIHtcbiAgICBpZiAocmVjb3JkQWxsU2hvdHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgIHJldHVybiAnZXJyb3IgdGhhdCBzaG90IGhhcyBhbHJlYWR5IGJlZW4gbWFkZSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXR0YWNrTWlzc2VkKCkge1xuICAgICAgYm9hcmRbY2VsbF0gPSAnbWlzcyc7XG4gICAgICByZXR1cm4gcmVtb3ZlRnJvbUxlZ2FsTW92ZXNBbmRBZGRUb1JlY29yZFNob3RzKGNlbGwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRhY2tMYW5kZWQoKSB7XG4gICAgICBib2FyZFtjZWxsXS5oaXQoYm9hcmRbY2VsbF0uY29vcmRzLmluZGV4T2YoY2VsbCkpO1xuICAgICAgYm9hcmRbY2VsbF0gPSAnaGl0JztcbiAgICAgIHJldHVybiByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoY2VsbCk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9sID0gYm9hcmRbY2VsbF0gPT09ICdlbXB0eScgPyBhdHRhY2tNaXNzZWQgOiBhdHRhY2tMYW5kZWQ7XG5cbiAgICByZXR1cm4gbG9sO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4geyAuLi5ib2FyZCB9O1xuICAgIH0sXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG5cbmNvbnN0IGIxID0gR2FtZWJvYXJkKCk7XG5jb25zdCBjYXJyaWVyID0gU2hpcCgnY2FycmllcicsIDUpO1xuYjEucGxhY2VTaGlwKGNhcnJpZXIsIFsnQTAnLCAnQTEnLCAnQTInLCAnQTMnLCAnQTQnXSk7XG5iMS5yZWNlaXZlQXR0YWNrKCdBMCcpO1xuYjEucmVjZWl2ZUF0dGFjaygnQTEnKTtcbmIxLnJlY2VpdmVBdHRhY2soJ0EyJyk7XG5jb25zb2xlLmxvZyhjYXJyaWVyLnN0YXR1cyk7XG5jb25zb2xlLmxvZyhiMS5ib2FyZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=