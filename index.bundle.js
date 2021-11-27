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
    const selectedShot = board[cell];
    if (selectedShot === 'empty') {
      console.log('miss');
    }
    if (selectedShot !== 'empty') {
      selectedShot.hit(selectedShot.coords.indexOf(cell));
    }
    removeFromLegalMovesAndAddToRecordShots(cell);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUMxR2I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZTtBQUNmLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0Y7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLGtCQUFrQixHQUFHLDhEQUFRO0FBQzdCLHVCQUF1QixHQUFHLDhEQUFRO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0VBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9nYW1lYm9hcmRGYWMvYm9hcmRPYmouanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NoaXBGYWN0b3J5L3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXB2MS8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBBMDogJ2VtcHR5JyxcbiAgQjA6ICdlbXB0eScsXG4gIEMwOiAnZW1wdHknLFxuICBEMDogJ2VtcHR5JyxcbiAgRTA6ICdlbXB0eScsXG4gIEYwOiAnZW1wdHknLFxuICBHMDogJ2VtcHR5JyxcbiAgSDA6ICdlbXB0eScsXG4gIEkwOiAnZW1wdHknLFxuICBKMDogJ2VtcHR5JyxcbiAgQTE6ICdlbXB0eScsXG4gIEIxOiAnZW1wdHknLFxuICBDMTogJ2VtcHR5JyxcbiAgRDE6ICdlbXB0eScsXG4gIEUxOiAnZW1wdHknLFxuICBGMTogJ2VtcHR5JyxcbiAgRzE6ICdlbXB0eScsXG4gIEgxOiAnZW1wdHknLFxuICBJMTogJ2VtcHR5JyxcbiAgSjE6ICdlbXB0eScsXG4gIEEyOiAnZW1wdHknLFxuICBCMjogJ2VtcHR5JyxcbiAgQzI6ICdlbXB0eScsXG4gIEQyOiAnZW1wdHknLFxuICBFMjogJ2VtcHR5JyxcbiAgRjI6ICdlbXB0eScsXG4gIEcyOiAnZW1wdHknLFxuICBIMjogJ2VtcHR5JyxcbiAgSTI6ICdlbXB0eScsXG4gIEoyOiAnZW1wdHknLFxuICBBMzogJ2VtcHR5JyxcbiAgQjM6ICdlbXB0eScsXG4gIEMzOiAnZW1wdHknLFxuICBEMzogJ2VtcHR5JyxcbiAgRTM6ICdlbXB0eScsXG4gIEYzOiAnZW1wdHknLFxuICBHMzogJ2VtcHR5JyxcbiAgSDM6ICdlbXB0eScsXG4gIEkzOiAnZW1wdHknLFxuICBKMzogJ2VtcHR5JyxcbiAgQTQ6ICdlbXB0eScsXG4gIEI0OiAnZW1wdHknLFxuICBDNDogJ2VtcHR5JyxcbiAgRDQ6ICdlbXB0eScsXG4gIEU0OiAnZW1wdHknLFxuICBGNDogJ2VtcHR5JyxcbiAgRzQ6ICdlbXB0eScsXG4gIEg0OiAnZW1wdHknLFxuICBJNDogJ2VtcHR5JyxcbiAgSjQ6ICdlbXB0eScsXG4gIEE1OiAnZW1wdHknLFxuICBCNTogJ2VtcHR5JyxcbiAgQzU6ICdlbXB0eScsXG4gIEQ1OiAnZW1wdHknLFxuICBFNTogJ2VtcHR5JyxcbiAgRjU6ICdlbXB0eScsXG4gIEc1OiAnZW1wdHknLFxuICBINTogJ2VtcHR5JyxcbiAgSTU6ICdlbXB0eScsXG4gIEo1OiAnZW1wdHknLFxuICBBNjogJ2VtcHR5JyxcbiAgQjY6ICdlbXB0eScsXG4gIEM2OiAnZW1wdHknLFxuICBENjogJ2VtcHR5JyxcbiAgRTY6ICdlbXB0eScsXG4gIEY2OiAnZW1wdHknLFxuICBHNjogJ2VtcHR5JyxcbiAgSDY6ICdlbXB0eScsXG4gIEk2OiAnZW1wdHknLFxuICBKNjogJ2VtcHR5JyxcbiAgQTc6ICdlbXB0eScsXG4gIEI3OiAnZW1wdHknLFxuICBDNzogJ2VtcHR5JyxcbiAgRDc6ICdlbXB0eScsXG4gIEU3OiAnZW1wdHknLFxuICBGNzogJ2VtcHR5JyxcbiAgRzc6ICdlbXB0eScsXG4gIEg3OiAnZW1wdHknLFxuICBJNzogJ2VtcHR5JyxcbiAgSjc6ICdlbXB0eScsXG4gIEE4OiAnZW1wdHknLFxuICBCODogJ2VtcHR5JyxcbiAgQzg6ICdlbXB0eScsXG4gIEQ4OiAnZW1wdHknLFxuICBFODogJ2VtcHR5JyxcbiAgRjg6ICdlbXB0eScsXG4gIEc4OiAnZW1wdHknLFxuICBIODogJ2VtcHR5JyxcbiAgSTg6ICdlbXB0eScsXG4gIEo4OiAnZW1wdHknLFxuICBBOTogJ2VtcHR5JyxcbiAgQjk6ICdlbXB0eScsXG4gIEM5OiAnZW1wdHknLFxuICBEOTogJ2VtcHR5JyxcbiAgRTk6ICdlbXB0eScsXG4gIEY5OiAnZW1wdHknLFxuICBHOTogJ2VtcHR5JyxcbiAgSDk6ICdlbXB0eScsXG4gIEk5OiAnZW1wdHknLFxuICBKOTogJ2VtcHR5Jyxcbn07XG5cbmNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbmNvbnN0IG51bWJlcnMgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXTtcblxuZXhwb3J0IHsgbGV0dGVycywgbnVtYmVycyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChuYW1lLCBzaXplKSB7XG4gIGNvbnN0IHNoaXAgPSBBcnJheS5mcm9tKEFycmF5KHNpemUpLmtleXMoKSk7XG5cbiAgY29uc3QgaGl0ID0gKG51bSkgPT4ge1xuICAgIHNoaXBbc2hpcC5pbmRleE9mKG51bSldID0gJ1gnO1xuICAgIHJldHVybiBbLi4uc2hpcF07XG4gIH07XG5cbiAgY29uc3Qgc2V0Q29vcmRzID0gKGNvb3JkcykgPT4ge1xuICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBjb29yZHM7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcC5ldmVyeSgoaXRlbSkgPT4gaXRlbSA9PT0gJ1gnKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH0sXG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgIHJldHVybiBbLi4uc2hpcF07XG4gICAgfSxcbiAgICBnZXQgbG9nKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHNoaXApO1xuICAgIH0sXG4gICAgZ2V0IG5hbWVBbmRTaXplKCkge1xuICAgICAgcmV0dXJuIHsgbmFtZSwgc2l6ZSB9O1xuICAgIH0sXG5cbiAgICBnZXQgY29vcmRzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwLmNvb3JkaW5hdGVzXTtcbiAgICB9LFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgc2V0Q29vcmRzLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYm9hcmRPYmogZnJvbSAnLi9nYW1lYm9hcmRGYWMvYm9hcmRPYmonO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwRmFjdG9yeS9zaGlwRmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGNoZWNrU2l6ZShzaXplLCBjb29yZHNMZW5ndGgpIHtcbiAgY29uc3QgaXNNYXRjaGluZ1NpemUgPSBzaXplID09PSBjb29yZHNMZW5ndGg7XG4gIHJldHVybiBpc01hdGNoaW5nU2l6ZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDZWxsSXNFbXB0eShib2FyZCwgY29vcmRpbmF0ZXMpIHtcbiAgY29uc3QgYXJlQ2VsbHNFbXB0eSA9IGNvb3JkaW5hdGVzLmV2ZXJ5KChjb29yZCkgPT4gYm9hcmRbY29vcmRdID09PSAnZW1wdHknKTtcbiAgcmV0dXJuIGFyZUNlbGxzRW1wdHk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2VsbEV4aXN0cyhib2FyZCwgY29vcmRpbmF0ZXMpIHtcbiAgY29uc3QgZG9DZWxsc0V4aXN0ID0gY29vcmRpbmF0ZXMuZXZlcnkoKGNvb3JkKSA9PlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChib2FyZCwgY29vcmQpXG4gICk7XG4gIHJldHVybiBkb0NlbGxzRXhpc3Q7XG59XG5cbmNvbnN0IHJ1bkFsbENoZWNrcyA9IChnYW1lQiwgc2hpcFNpemUsIGNvb3JkaW5hdGVzKSA9PiB7XG4gIGNvbnN0IGNoZWNrMSA9IGNoZWNrU2l6ZShzaGlwU2l6ZSwgY29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgY29uc3QgY2hlY2syID0gY2hlY2tDZWxsSXNFbXB0eShnYW1lQiwgY29vcmRpbmF0ZXMpO1xuICBjb25zdCBjaGVjazMgPSBjaGVja0NlbGxFeGlzdHMoZ2FtZUIsIGNvb3JkaW5hdGVzKTtcbiAgY29uc3QgYWxsQ2hlY2tzID0gY2hlY2sxICYmIGNoZWNrMiAmJiBjaGVjazM7XG4gIHJldHVybiBhbGxDaGVja3M7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkID0geyAuLi5ib2FyZE9iaiB9O1xuICBjb25zdCBsZWdhbE1vdmVzID0geyAuLi5ib2FyZE9iaiB9O1xuICBjb25zdCByZWNvcmRBbGxTaG90cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZHMpIHtcbiAgICBjb25zdCBmb28gPSBydW5BbGxDaGVja3MoYm9hcmQsIHNoaXAuc2l6ZSwgY29vcmRzKTtcbiAgICBpZiAoIWZvbykgcmV0dXJuICdFcnJvcjogb25lIG9yIG1vcmUgY2hlY2tzIGZhaWxlZCc7XG4gICAgaWYgKGZvbykge1xuICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIGJvYXJkW2Nvb3JkXSA9IHNoaXA7XG4gICAgICB9KTtcbiAgICAgIHNoaXAuc2V0Q29vcmRzKGNvb3Jkcyk7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmJvYXJkIH07XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoaWQpIHtcbiAgICBkZWxldGUgbGVnYWxNb3Zlc1tpZF07XG4gICAgcmVjb3JkQWxsU2hvdHMucHVzaChpZCk7XG4gICAgY29uc29sZS5sb2coeyAuLi5sZWdhbE1vdmVzIH0pO1xuICAgIGNvbnNvbGUubG9nKFsuLi5yZWNvcmRBbGxTaG90c10pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjZWxsKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaG90ID0gYm9hcmRbY2VsbF07XG4gICAgaWYgKHNlbGVjdGVkU2hvdCA9PT0gJ2VtcHR5Jykge1xuICAgICAgY29uc29sZS5sb2coJ21pc3MnKTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkU2hvdCAhPT0gJ2VtcHR5Jykge1xuICAgICAgc2VsZWN0ZWRTaG90LmhpdChzZWxlY3RlZFNob3QuY29vcmRzLmluZGV4T2YoY2VsbCkpO1xuICAgIH1cbiAgICByZW1vdmVGcm9tTGVnYWxNb3Zlc0FuZEFkZFRvUmVjb3JkU2hvdHMoY2VsbCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIHJldHVybiB7IC4uLmJvYXJkIH07XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgfTtcbn1cblxuY29uc3QgYjEgPSBHYW1lYm9hcmQoKTtcbmNvbnN0IGNhcnJpZXIgPSBTaGlwKCdjYXJyaWVyJywgNSk7XG5iMS5wbGFjZVNoaXAoY2FycmllciwgWydBMCcsICdBMScsICdBMicsICdBMycsICdBNCddKTtcbmIxLnJlY2VpdmVBdHRhY2soJ0EwJyk7XG5iMS5yZWNlaXZlQXR0YWNrKCdBMScpO1xuYjEucmVjZWl2ZUF0dGFjaygnQTInKTtcbmNvbnNvbGUubG9nKGNhcnJpZXIuc3RhdHVzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==