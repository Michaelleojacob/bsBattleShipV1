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
/* harmony import */ var _shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory/shipFactory */ "./src/shipFactory/shipFactory.js");
/* harmony import */ var _gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFac/boardObj */ "./src/gameboardFac/boardObj.js");



const ms1 = {
  one: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('one', 1),
  two: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('two', 2),
  three: (0,_shipFactory_shipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('three', 3),
};

function gboard(shipsObj) {
  const board = { ..._gameboardFac_boardObj__WEBPACK_IMPORTED_MODULE_1__["default"] };

  function placeShip(ship, coordinates) {
    coordinates.forEach((coord) => {
      board[coord] = ship.name;
    });
  }

  return {
    get board() {
      return { ...board };
    },
    get getShips() {
      return { ...shipsObj };
    },
    placeShip,
  };
}

const b1 = gboard(ms1);
b1.placeShip(ms1.one, ['A0']);
console.log(b1.board);

// coord = b1
// how to get all surrounding coordinates
// a0 a1 a2
// b0 b1 b2
// c0 c1 c2

// we would want a0 a1 a2 b0 b2 c0 c1 c2

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

function breakThingsDown(cell) {
  const [letter, numIsString] = cell.split('');
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

  console.log(arrOfLetters, arrOfNums);

  function combineLettersAndNumbers() {
    const newArr = [];
    arrOfLetters.forEach((eachletter) => {
      arrOfNums.forEach((eachnum) => {
        newArr.push(eachletter + eachnum);
      });
    });
    return newArr;
  }
  const foo = combineLettersAndNumbers();
  console.log(foo);
}
breakThingsDown('B1');
breakThingsDown('A0');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUMxR2I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZTtBQUNmLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ0U7O0FBRS9DO0FBQ0EsT0FBTyxvRUFBSTtBQUNYLE9BQU8sb0VBQUk7QUFDWCxTQUFTLG9FQUFJO0FBQ2I7O0FBRUE7QUFDQSxrQkFBa0IsR0FBRyw4REFBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0EsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL2dhbWVib2FyZEZhYy9ib2FyZE9iai5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc2hpcEZhY3Rvcnkvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXB2MS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHYxLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIEEwOiAnZW1wdHknLFxuICBCMDogJ2VtcHR5JyxcbiAgQzA6ICdlbXB0eScsXG4gIEQwOiAnZW1wdHknLFxuICBFMDogJ2VtcHR5JyxcbiAgRjA6ICdlbXB0eScsXG4gIEcwOiAnZW1wdHknLFxuICBIMDogJ2VtcHR5JyxcbiAgSTA6ICdlbXB0eScsXG4gIEowOiAnZW1wdHknLFxuICBBMTogJ2VtcHR5JyxcbiAgQjE6ICdlbXB0eScsXG4gIEMxOiAnZW1wdHknLFxuICBEMTogJ2VtcHR5JyxcbiAgRTE6ICdlbXB0eScsXG4gIEYxOiAnZW1wdHknLFxuICBHMTogJ2VtcHR5JyxcbiAgSDE6ICdlbXB0eScsXG4gIEkxOiAnZW1wdHknLFxuICBKMTogJ2VtcHR5JyxcbiAgQTI6ICdlbXB0eScsXG4gIEIyOiAnZW1wdHknLFxuICBDMjogJ2VtcHR5JyxcbiAgRDI6ICdlbXB0eScsXG4gIEUyOiAnZW1wdHknLFxuICBGMjogJ2VtcHR5JyxcbiAgRzI6ICdlbXB0eScsXG4gIEgyOiAnZW1wdHknLFxuICBJMjogJ2VtcHR5JyxcbiAgSjI6ICdlbXB0eScsXG4gIEEzOiAnZW1wdHknLFxuICBCMzogJ2VtcHR5JyxcbiAgQzM6ICdlbXB0eScsXG4gIEQzOiAnZW1wdHknLFxuICBFMzogJ2VtcHR5JyxcbiAgRjM6ICdlbXB0eScsXG4gIEczOiAnZW1wdHknLFxuICBIMzogJ2VtcHR5JyxcbiAgSTM6ICdlbXB0eScsXG4gIEozOiAnZW1wdHknLFxuICBBNDogJ2VtcHR5JyxcbiAgQjQ6ICdlbXB0eScsXG4gIEM0OiAnZW1wdHknLFxuICBENDogJ2VtcHR5JyxcbiAgRTQ6ICdlbXB0eScsXG4gIEY0OiAnZW1wdHknLFxuICBHNDogJ2VtcHR5JyxcbiAgSDQ6ICdlbXB0eScsXG4gIEk0OiAnZW1wdHknLFxuICBKNDogJ2VtcHR5JyxcbiAgQTU6ICdlbXB0eScsXG4gIEI1OiAnZW1wdHknLFxuICBDNTogJ2VtcHR5JyxcbiAgRDU6ICdlbXB0eScsXG4gIEU1OiAnZW1wdHknLFxuICBGNTogJ2VtcHR5JyxcbiAgRzU6ICdlbXB0eScsXG4gIEg1OiAnZW1wdHknLFxuICBJNTogJ2VtcHR5JyxcbiAgSjU6ICdlbXB0eScsXG4gIEE2OiAnZW1wdHknLFxuICBCNjogJ2VtcHR5JyxcbiAgQzY6ICdlbXB0eScsXG4gIEQ2OiAnZW1wdHknLFxuICBFNjogJ2VtcHR5JyxcbiAgRjY6ICdlbXB0eScsXG4gIEc2OiAnZW1wdHknLFxuICBINjogJ2VtcHR5JyxcbiAgSTY6ICdlbXB0eScsXG4gIEo2OiAnZW1wdHknLFxuICBBNzogJ2VtcHR5JyxcbiAgQjc6ICdlbXB0eScsXG4gIEM3OiAnZW1wdHknLFxuICBENzogJ2VtcHR5JyxcbiAgRTc6ICdlbXB0eScsXG4gIEY3OiAnZW1wdHknLFxuICBHNzogJ2VtcHR5JyxcbiAgSDc6ICdlbXB0eScsXG4gIEk3OiAnZW1wdHknLFxuICBKNzogJ2VtcHR5JyxcbiAgQTg6ICdlbXB0eScsXG4gIEI4OiAnZW1wdHknLFxuICBDODogJ2VtcHR5JyxcbiAgRDg6ICdlbXB0eScsXG4gIEU4OiAnZW1wdHknLFxuICBGODogJ2VtcHR5JyxcbiAgRzg6ICdlbXB0eScsXG4gIEg4OiAnZW1wdHknLFxuICBJODogJ2VtcHR5JyxcbiAgSjg6ICdlbXB0eScsXG4gIEE5OiAnZW1wdHknLFxuICBCOTogJ2VtcHR5JyxcbiAgQzk6ICdlbXB0eScsXG4gIEQ5OiAnZW1wdHknLFxuICBFOTogJ2VtcHR5JyxcbiAgRjk6ICdlbXB0eScsXG4gIEc5OiAnZW1wdHknLFxuICBIOTogJ2VtcHR5JyxcbiAgSTk6ICdlbXB0eScsXG4gIEo5OiAnZW1wdHknLFxufTtcblxuY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuY29uc3QgbnVtYmVycyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddO1xuXG5leHBvcnQgeyBsZXR0ZXJzLCBudW1iZXJzIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKG5hbWUsIHNpemUpIHtcbiAgY29uc3Qgc2hpcCA9IEFycmF5LmZyb20oQXJyYXkoc2l6ZSkua2V5cygpKTtcblxuICBjb25zdCBoaXQgPSAobnVtKSA9PiB7XG4gICAgc2hpcFtzaGlwLmluZGV4T2YobnVtKV0gPSAnWCc7XG4gICAgcmV0dXJuIFsuLi5zaGlwXTtcbiAgfTtcblxuICBjb25zdCBzZXRDb29yZHMgPSAoY29vcmRzKSA9PiB7XG4gICAgc2hpcC5jb29yZGluYXRlcyA9IGNvb3JkcztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwLmV2ZXJ5KChpdGVtKSA9PiBpdGVtID09PSAnWCcpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemU7XG4gICAgfSxcbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwXTtcbiAgICB9LFxuICAgIGdldCBsb2coKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coc2hpcCk7XG4gICAgfSxcbiAgICBnZXQgbmFtZUFuZFNpemUoKSB7XG4gICAgICByZXR1cm4geyBuYW1lLCBzaXplIH07XG4gICAgfSxcblxuICAgIGdldCBjb29yZHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnNoaXAuY29vcmRpbmF0ZXNdO1xuICAgIH0sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBzZXRDb29yZHMsXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcEZhY3Rvcnkvc2hpcEZhY3RvcnknO1xuaW1wb3J0IGJvYXJkT2JqIGZyb20gJy4vZ2FtZWJvYXJkRmFjL2JvYXJkT2JqJztcblxuY29uc3QgbXMxID0ge1xuICBvbmU6IFNoaXAoJ29uZScsIDEpLFxuICB0d286IFNoaXAoJ3R3bycsIDIpLFxuICB0aHJlZTogU2hpcCgndGhyZWUnLCAzKSxcbn07XG5cbmZ1bmN0aW9uIGdib2FyZChzaGlwc09iaikge1xuICBjb25zdCBib2FyZCA9IHsgLi4uYm9hcmRPYmogfTtcblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpIHtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgYm9hcmRbY29vcmRdID0gc2hpcC5uYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4geyAuLi5ib2FyZCB9O1xuICAgIH0sXG4gICAgZ2V0IGdldFNoaXBzKCkge1xuICAgICAgcmV0dXJuIHsgLi4uc2hpcHNPYmogfTtcbiAgICB9LFxuICAgIHBsYWNlU2hpcCxcbiAgfTtcbn1cblxuY29uc3QgYjEgPSBnYm9hcmQobXMxKTtcbmIxLnBsYWNlU2hpcChtczEub25lLCBbJ0EwJ10pO1xuY29uc29sZS5sb2coYjEuYm9hcmQpO1xuXG4vLyBjb29yZCA9IGIxXG4vLyBob3cgdG8gZ2V0IGFsbCBzdXJyb3VuZGluZyBjb29yZGluYXRlc1xuLy8gYTAgYTEgYTJcbi8vIGIwIGIxIGIyXG4vLyBjMCBjMSBjMlxuXG4vLyB3ZSB3b3VsZCB3YW50IGEwIGExIGEyIGIwIGIyIGMwIGMxIGMyXG5cbmNvbnN0IG51bXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5jb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbmZ1bmN0aW9uIGJyZWFrVGhpbmdzRG93bihjZWxsKSB7XG4gIGNvbnN0IFtsZXR0ZXIsIG51bUlzU3RyaW5nXSA9IGNlbGwuc3BsaXQoJycpO1xuICBjb25zdCBudW0gPSBwYXJzZUludChudW1Jc1N0cmluZywgMTApO1xuICBjb25zdCBhcnJPZkxldHRlcnMgPSBbXTtcbiAgY29uc3QgYXJyT2ZOdW1zID0gW107XG5cbiAgZnVuY3Rpb24gVXBwZXJBbmRMb3dlckxldHRlcnMoKSB7XG4gICAgaWYgKGxldHRlcnMuaW5jbHVkZXMobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSAtIDFdKSkge1xuICAgICAgYXJyT2ZMZXR0ZXJzLnB1c2gobGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YobGV0dGVyKSAtIDFdKTtcbiAgICB9XG4gICAgYXJyT2ZMZXR0ZXJzLnB1c2gobGV0dGVyKTtcbiAgICBpZiAobGV0dGVycy5pbmNsdWRlcyhsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpICsgMV0pKSB7XG4gICAgICBhcnJPZkxldHRlcnMucHVzaChsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihsZXR0ZXIpICsgMV0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBVcHBlckFuZExvd2VyTnVtYmVycygpIHtcbiAgICBpZiAobnVtcy5pbmNsdWRlcyhudW1zW251bXMuaW5kZXhPZihudW0pIC0gMV0pKSB7XG4gICAgICBhcnJPZk51bXMucHVzaChudW1zW251bXMuaW5kZXhPZihudW0pIC0gMV0pO1xuICAgIH1cbiAgICBhcnJPZk51bXMucHVzaChudW0pO1xuICAgIGlmIChudW1zLmluY2x1ZGVzKG51bXNbbnVtcy5pbmRleE9mKG51bSkgKyAxXSkpIHtcbiAgICAgIGFyck9mTnVtcy5wdXNoKG51bXNbbnVtcy5pbmRleE9mKG51bSkgKyAxXSk7XG4gICAgfVxuICB9XG5cbiAgVXBwZXJBbmRMb3dlckxldHRlcnMoKTtcbiAgVXBwZXJBbmRMb3dlck51bWJlcnMoKTtcblxuICBjb25zb2xlLmxvZyhhcnJPZkxldHRlcnMsIGFyck9mTnVtcyk7XG5cbiAgZnVuY3Rpb24gY29tYmluZUxldHRlcnNBbmROdW1iZXJzKCkge1xuICAgIGNvbnN0IG5ld0FyciA9IFtdO1xuICAgIGFyck9mTGV0dGVycy5mb3JFYWNoKChlYWNobGV0dGVyKSA9PiB7XG4gICAgICBhcnJPZk51bXMuZm9yRWFjaCgoZWFjaG51bSkgPT4ge1xuICAgICAgICBuZXdBcnIucHVzaChlYWNobGV0dGVyICsgZWFjaG51bSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3QXJyO1xuICB9XG4gIGNvbnN0IGZvbyA9IGNvbWJpbmVMZXR0ZXJzQW5kTnVtYmVycygpO1xuICBjb25zb2xlLmxvZyhmb28pO1xufVxuYnJlYWtUaGluZ3NEb3duKCdCMScpO1xuYnJlYWtUaGluZ3NEb3duKCdBMCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9