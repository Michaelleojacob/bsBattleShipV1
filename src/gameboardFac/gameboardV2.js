//* should be able to place ships at coordinates by calling ship factory

//* gameboard should have a receiveAttack function ->
//* takes a pair of coordinates.
//* determines weather or not the attack hit a ship.
//* sends the 'hit' function to the correct ship,
//* or records the coordinates of the missed shot.

//* should keep track of missed attacks so they can display them properly

//* should be able to report weather or not all ships have been sunk

// import boardObj from './gameboardFac/boardObj';

// const lol = { ...boardObj };

// console.log(lol);

// lol.A0 = 'lol';

// console.log(lol);

// console.log(boardObj);

//! fail number one

// import boardObj from './gameboardFac/boardObj';
// import Ship from './shipFactory/shipFactory';

// function checkSize(size, coords) {
//   let state = false;
//   if (size !== coords.length) {
//     return 'error size and coords.length do not match';
//   }
//   state = true;
//   return state;
// }

// // console.log(checkSize(2, [1, 2]));
// // console.log(checkSize(2, [1, 2, 3]));

// function checkCellIsEmpty(board, coordinates) {
//   let state = false;
//   if (!coordinates.every((coord) => board[coord] === 'empty')) {
//     return 'error one or more cells were not empty';
//   }
//   state = true;
//   return state;
// }

// // const mockB = { ...boardObj };

// // checkCellIsEmpty(mockB, ['A0', 'A1', 'B9']);
// // console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9']));
// // console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'A12']));
// // console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'J9']));

// function checkCellExists(board, coordinates) {
//   let state = false;
//   if (!coordinates.every((coord) => Object.prototype.hasOwnProperty.call(board, coord))) {
//     return 'error one or more cells do not exist';
//   }
//   state = true;
//   return state;
// }
// // console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9']));
// // console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9', 'P9']));

// function runAllChecks(shipSize, gboard, coordinates) {
//   let state = false;
//   if (
//     (checkSize(shipSize, coordinates.length) === true &&
//       checkCellIsEmpty(gboard, coordinates) === true &&
//       checkCellExists(gboard, coordinates)) === true
//   ) {
//     state = true;
//     return state;
//   }
//   console.log('one of the checks failed');
//   return state;
// }

// function Gameboard() {
//   const board = { ...boardObj };

//   function placeShip({ name, size }, coords) {
//     const lol = runAllChecks(size, board, coords);
//     console.log(lol);
//   }

//   return {
//     get board() {
//       return { ...board };
//     },
//     placeShip,
//   };
// }

// const b1 = Gameboard();
// const s1 = Ship('s1', 2);

// b1.placeShip(s1, ['A0']);
// // b1.placeShip(s1, ['A0', 'A1']);
