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



function Gameboard(shipObj) {
  const board = { ..._gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_0__["default"] };
  const legalMoves = { ..._gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_0__["default"] };
  const recordAllShots = [];

  function placeShip(ship, coords) {
    const foo = (0,_gameboardFac_checks__WEBPACK_IMPORTED_MODULE_1__["default"])(board, ship.size, coords);
    if (!foo) return 'Error: one or more checks failed';
    if (foo) {
      coords.forEach((coord) => {
        board[coord] = ship.name;
      });
      ship.setCoords(coords);
    }
    return { ...board };
  }

  function removeFromLegalMovesAndAddToRecordShots(id) {
    delete legalMoves[id];
    recordAllShots.push(id);
  }

  function receiveAttack(cell) {
    if (recordAllShots.includes(cell)) {
      return 'error, move is not legal';
    }
    if (Object.prototype.hasOwnProperty.call(shipObj, board[cell])) {
      const ship = shipObj[board[cell]];
      ship.hit(ship.coords.indexOf(cell));
    }
    if (board[cell] === 'empty') {
      board[cell] = 'miss';
    }
    return removeFromLegalMovesAndAddToRecordShots(cell);
  }

  return {
    get board() {
      return { ...board };
    },
    placeShip,
    receiveAttack,
  };
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUMxRzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7VUN6QjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0U7O0FBRWxDO0FBQ2Ysa0JBQWtCLEdBQUcsOERBQVE7QUFDN0IsdUJBQXVCLEdBQUcsOERBQVE7QUFDbEM7O0FBRUE7QUFDQSxnQkFBZ0IsZ0VBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvYm9hcmRPYmouanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2dhbWVib2FyZEZhYy9jaGVja3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIEEwOiAnZW1wdHknLFxuICBCMDogJ2VtcHR5JyxcbiAgQzA6ICdlbXB0eScsXG4gIEQwOiAnZW1wdHknLFxuICBFMDogJ2VtcHR5JyxcbiAgRjA6ICdlbXB0eScsXG4gIEcwOiAnZW1wdHknLFxuICBIMDogJ2VtcHR5JyxcbiAgSTA6ICdlbXB0eScsXG4gIEowOiAnZW1wdHknLFxuICBBMTogJ2VtcHR5JyxcbiAgQjE6ICdlbXB0eScsXG4gIEMxOiAnZW1wdHknLFxuICBEMTogJ2VtcHR5JyxcbiAgRTE6ICdlbXB0eScsXG4gIEYxOiAnZW1wdHknLFxuICBHMTogJ2VtcHR5JyxcbiAgSDE6ICdlbXB0eScsXG4gIEkxOiAnZW1wdHknLFxuICBKMTogJ2VtcHR5JyxcbiAgQTI6ICdlbXB0eScsXG4gIEIyOiAnZW1wdHknLFxuICBDMjogJ2VtcHR5JyxcbiAgRDI6ICdlbXB0eScsXG4gIEUyOiAnZW1wdHknLFxuICBGMjogJ2VtcHR5JyxcbiAgRzI6ICdlbXB0eScsXG4gIEgyOiAnZW1wdHknLFxuICBJMjogJ2VtcHR5JyxcbiAgSjI6ICdlbXB0eScsXG4gIEEzOiAnZW1wdHknLFxuICBCMzogJ2VtcHR5JyxcbiAgQzM6ICdlbXB0eScsXG4gIEQzOiAnZW1wdHknLFxuICBFMzogJ2VtcHR5JyxcbiAgRjM6ICdlbXB0eScsXG4gIEczOiAnZW1wdHknLFxuICBIMzogJ2VtcHR5JyxcbiAgSTM6ICdlbXB0eScsXG4gIEozOiAnZW1wdHknLFxuICBBNDogJ2VtcHR5JyxcbiAgQjQ6ICdlbXB0eScsXG4gIEM0OiAnZW1wdHknLFxuICBENDogJ2VtcHR5JyxcbiAgRTQ6ICdlbXB0eScsXG4gIEY0OiAnZW1wdHknLFxuICBHNDogJ2VtcHR5JyxcbiAgSDQ6ICdlbXB0eScsXG4gIEk0OiAnZW1wdHknLFxuICBKNDogJ2VtcHR5JyxcbiAgQTU6ICdlbXB0eScsXG4gIEI1OiAnZW1wdHknLFxuICBDNTogJ2VtcHR5JyxcbiAgRDU6ICdlbXB0eScsXG4gIEU1OiAnZW1wdHknLFxuICBGNTogJ2VtcHR5JyxcbiAgRzU6ICdlbXB0eScsXG4gIEg1OiAnZW1wdHknLFxuICBJNTogJ2VtcHR5JyxcbiAgSjU6ICdlbXB0eScsXG4gIEE2OiAnZW1wdHknLFxuICBCNjogJ2VtcHR5JyxcbiAgQzY6ICdlbXB0eScsXG4gIEQ2OiAnZW1wdHknLFxuICBFNjogJ2VtcHR5JyxcbiAgRjY6ICdlbXB0eScsXG4gIEc2OiAnZW1wdHknLFxuICBINjogJ2VtcHR5JyxcbiAgSTY6ICdlbXB0eScsXG4gIEo2OiAnZW1wdHknLFxuICBBNzogJ2VtcHR5JyxcbiAgQjc6ICdlbXB0eScsXG4gIEM3OiAnZW1wdHknLFxuICBENzogJ2VtcHR5JyxcbiAgRTc6ICdlbXB0eScsXG4gIEY3OiAnZW1wdHknLFxuICBHNzogJ2VtcHR5JyxcbiAgSDc6ICdlbXB0eScsXG4gIEk3OiAnZW1wdHknLFxuICBKNzogJ2VtcHR5JyxcbiAgQTg6ICdlbXB0eScsXG4gIEI4OiAnZW1wdHknLFxuICBDODogJ2VtcHR5JyxcbiAgRDg6ICdlbXB0eScsXG4gIEU4OiAnZW1wdHknLFxuICBGODogJ2VtcHR5JyxcbiAgRzg6ICdlbXB0eScsXG4gIEg4OiAnZW1wdHknLFxuICBJODogJ2VtcHR5JyxcbiAgSjg6ICdlbXB0eScsXG4gIEE5OiAnZW1wdHknLFxuICBCOTogJ2VtcHR5JyxcbiAgQzk6ICdlbXB0eScsXG4gIEQ5OiAnZW1wdHknLFxuICBFOTogJ2VtcHR5JyxcbiAgRjk6ICdlbXB0eScsXG4gIEc5OiAnZW1wdHknLFxuICBIOTogJ2VtcHR5JyxcbiAgSTk6ICdlbXB0eScsXG4gIEo5OiAnZW1wdHknLFxufTtcblxuY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuY29uc3QgbnVtYmVycyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddO1xuXG5leHBvcnQgeyBsZXR0ZXJzLCBudW1iZXJzIH07XG4iLCJmdW5jdGlvbiBjaGVja1NpemUoc2l6ZSwgY29vcmRzTGVuZ3RoKSB7XG4gIGNvbnN0IGlzTWF0Y2hpbmdTaXplID0gc2l6ZSA9PT0gY29vcmRzTGVuZ3RoO1xuICByZXR1cm4gaXNNYXRjaGluZ1NpemU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2VsbElzRW1wdHkoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGFyZUNlbGxzRW1wdHkgPSBjb29yZGluYXRlcy5ldmVyeSgoY29vcmQpID0+IGJvYXJkW2Nvb3JkXSA9PT0gJ2VtcHR5Jyk7XG4gIHJldHVybiBhcmVDZWxsc0VtcHR5O1xufVxuXG5mdW5jdGlvbiBjaGVja0NlbGxFeGlzdHMoYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGRvQ2VsbHNFeGlzdCA9IGNvb3JkaW5hdGVzLmV2ZXJ5KChjb29yZCkgPT5cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYm9hcmQsIGNvb3JkKVxuICApO1xuICByZXR1cm4gZG9DZWxsc0V4aXN0O1xufVxuXG5jb25zdCBydW5BbGxDaGVja3MgPSAoZ2FtZUIsIHNoaXBTaXplLCBjb29yZGluYXRlcykgPT4ge1xuICBjb25zdCBjaGVjazEgPSBjaGVja1NpemUoc2hpcFNpemUsIGNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gIGNvbnN0IGNoZWNrMiA9IGNoZWNrQ2VsbElzRW1wdHkoZ2FtZUIsIGNvb3JkaW5hdGVzKTtcbiAgY29uc3QgY2hlY2szID0gY2hlY2tDZWxsRXhpc3RzKGdhbWVCLCBjb29yZGluYXRlcyk7XG4gIGNvbnN0IGFsbENoZWNrcyA9IGNoZWNrMSAmJiBjaGVjazIgJiYgY2hlY2szO1xuICByZXR1cm4gYWxsQ2hlY2tzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcnVuQWxsQ2hlY2tzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYm9hcmRPYmogZnJvbSAnLi9nYW1lYm9hcmRGYWMvYm9hcmRPYmonO1xuaW1wb3J0IHJ1bkFsbENoZWNrcyBmcm9tICcuL2dhbWVib2FyZEZhYy9jaGVja3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoc2hpcE9iaikge1xuICBjb25zdCBib2FyZCA9IHsgLi4uYm9hcmRPYmogfTtcbiAgY29uc3QgbGVnYWxNb3ZlcyA9IHsgLi4uYm9hcmRPYmogfTtcbiAgY29uc3QgcmVjb3JkQWxsU2hvdHMgPSBbXTtcblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzKSB7XG4gICAgY29uc3QgZm9vID0gcnVuQWxsQ2hlY2tzKGJvYXJkLCBzaGlwLnNpemUsIGNvb3Jkcyk7XG4gICAgaWYgKCFmb28pIHJldHVybiAnRXJyb3I6IG9uZSBvciBtb3JlIGNoZWNrcyBmYWlsZWQnO1xuICAgIGlmIChmb28pIHtcbiAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBib2FyZFtjb29yZF0gPSBzaGlwLm5hbWU7XG4gICAgICB9KTtcbiAgICAgIHNoaXAuc2V0Q29vcmRzKGNvb3Jkcyk7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmJvYXJkIH07XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoaWQpIHtcbiAgICBkZWxldGUgbGVnYWxNb3Zlc1tpZF07XG4gICAgcmVjb3JkQWxsU2hvdHMucHVzaChpZCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNlbGwpIHtcbiAgICBpZiAocmVjb3JkQWxsU2hvdHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgIHJldHVybiAnZXJyb3IsIG1vdmUgaXMgbm90IGxlZ2FsJztcbiAgICB9XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzaGlwT2JqLCBib2FyZFtjZWxsXSkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwT2JqW2JvYXJkW2NlbGxdXTtcbiAgICAgIHNoaXAuaGl0KHNoaXAuY29vcmRzLmluZGV4T2YoY2VsbCkpO1xuICAgIH1cbiAgICBpZiAoYm9hcmRbY2VsbF0gPT09ICdlbXB0eScpIHtcbiAgICAgIGJvYXJkW2NlbGxdID0gJ21pc3MnO1xuICAgIH1cbiAgICByZXR1cm4gcmVtb3ZlRnJvbUxlZ2FsTW92ZXNBbmRBZGRUb1JlY29yZFNob3RzKGNlbGwpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4geyAuLi5ib2FyZCB9O1xuICAgIH0sXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=