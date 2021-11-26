//* I think I have all checks working and they look rather clean. I am keeping a clone of this code.

//* if I remove the new Error('')'s and just return foo =>
//* I can change run all checks. As returning new Error('') returns true;

// import boardObj from './gameboardFac/boardObj';
// import Ship from './shipFactory/shipFactory';

// function checkSize(size, coordsLength) {
//   const foo = size === coordsLength;
//   if (!foo) return new Error('ship size and coords array do not match up');
//   return foo;
// }

// // console.log(checkSize(2, [1, 2]));
// // console.log(checkSize(2, [1, 2, 3]));
// // console.log(checkSize(2, [1]));

// function checkCellIsEmpty(board, coordinates) {
//   const foo = coordinates.every((coord) => board[coord] === 'empty');
//   if (!foo) return new Error('cell is not empty');
//   return foo;
// }

// // const mockB = { ...boardObj };
// // console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9']));
// // console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'A12']));
// // console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'J9']));
// // console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'J9', 'P1']));

// function checkCellExists(board, coordinates) {
//   const foo = coordinates.every((coord) => Object.prototype.hasOwnProperty.call(board, coord));
//   if (!foo) return new Error('cell does not exist');
//   return foo;
// }
// // console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9']));
// // console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9', 'P9']));

// const runAllChecks = (gameB, shipSize, coordinates) => {
//   const check1 = checkSize(shipSize, coordinates.length);
//   console.log(`check1: ${check1}`);
//   const check2 = checkCellIsEmpty(gameB, coordinates);
//   console.log(`check2: ${check2}`);
//   const check3 = checkCellExists(gameB, coordinates);
//   console.log(`check3: ${check3}`);
//   const foo = check1 === true && check2 === true && check3 === true;
//   return foo;
// };

// function Gameboard() {
//   const board = { ...boardObj };

//   function placeShip({ name, size }, coords) {
//     const foo = runAllChecks(board, size, coords);
//     console.log(`placeship foo: ${foo}`);
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

// // b1.placeShip(s1, ['A0']);
// // b1.placeShip(s1, ['A0', 'A1']);
// b1.placeShip(s1, ['A0', 'A1', 'A2']);
// // console.log(b1.board);

//! without comments, and testing features:

// import boardObj from './gameboardFac/boardObj';
// import Ship from './shipFactory/shipFactory';

// function checkSize(size, coordsLength) {
//   const isMatchingSize = size === coordsLength;
//   return isMatchingSize;
// }

// function checkCellIsEmpty(board, coordinates) {
//   const areCellsEmpty = coordinates.every((coord) => board[coord] === 'empty');
//   return areCellsEmpty;
// }

// function checkCellExists(board, coordinates) {
//   const doCellsExist = coordinates.every((coord) =>
//     Object.prototype.hasOwnProperty.call(board, coord)
//   );
//   return doCellsExist;
// }

// const runAllChecks = (gameB, shipSize, coordinates) => {
//   const check1 = checkSize(shipSize, coordinates.length);
//   const check2 = checkCellIsEmpty(gameB, coordinates);
//   const check3 = checkCellExists(gameB, coordinates);
//   const allChecks = check1 && check2 && check3;
//   return allChecks;
// };

// function Gameboard() {
//   const board = { ...boardObj };

//   function placeShip({ name, size }, coords) {
//     const foo = runAllChecks(board, size, coords);
//     console.log(`placeship foo: ${foo}`);
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

// // b1.placeShip(s1, ['A0']);
// // b1.placeShip(s1, ['A0', 'A1']);
// b1.placeShip(s1, ['A0', 'A1', 'A2']);
// // console.log(b1.board);

//! runAllChecks with troubleshooting:

// const runAllChecks = (gameB, shipSize, coordinates) => {
//   const check1 = checkSize(shipSize, coordinates.length);
//   console.log(`check1: ${check1}`);
//   const check2 = checkCellIsEmpty(gameB, coordinates);
//   console.log(`check2: ${check2}`);
//   const check3 = checkCellExists(gameB, coordinates);
//   console.log(`check3: ${check3}`);
//   const foo = check1 === true && check2 === true && check3 === true;
//   return foo;
// };

//! harder to read runAllChecks

// const runAllChecks = (gameB, shipSize, coordinates) => {
//   const allChecks =
//     checkSize(shipSize, coordinates.length) &&
//     checkCellIsEmpty(gameB, coordinates) &&
//     checkCellExists(gameB, coordinates);
//   return allChecks;
// };
