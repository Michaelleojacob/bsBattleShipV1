//! this is the only line that changed:
// function placeShip(ship, coords) {
//   const foo = runAllChecks(board, ship.size, coords);
//   if (!foo) return 'Error: one or more checks failed';
//   if (foo) {
//     coords.forEach((coord) => {
//  //** board[coord] = ship; **//
// //**  to => **//
//  //** board[coord] = ship.name; **//
//     });
//     ship.setCoords(coords);
//   }
//   return { ...board };
// }

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

// export default function Gameboard() {
//   const board = { ...boardObj };
//   const legalMoves = { ...boardObj };
//   const recordAllShots = [];

//   function placeShip(ship, coords) {
//     const foo = runAllChecks(board, ship.size, coords);
//     if (!foo) return 'Error: one or more checks failed';
//     if (foo) {
//       coords.forEach((coord) => {
//         board[coord] = ship;
//       });
//       ship.setCoords(coords);
//     }
//     return { ...board };
//   }

//   function removeFromLegalMovesAndAddToRecordShots(id) {
//     delete legalMoves[id];
//     recordAllShots.push(id);
//     console.log({ ...legalMoves });
//     console.log([...recordAllShots]);
//   }

//   function receiveAttack(cell) {
//     if (recordAllShots.includes(cell)) {
//       return 'error that shot has already been made';
//     }

//     function attackMissed() {
//       board[cell] = 'miss';
//       return removeFromLegalMovesAndAddToRecordShots(cell);
//     }
//     function attackLanded() {
//       board[cell].hit(board[cell].coords.indexOf(cell));
//       board[cell] = 'hit';
//       return removeFromLegalMovesAndAddToRecordShots(cell);
//     }

//     const lol = board[cell] === 'empty' ? attackMissed : attackLanded;

//     return lol;
//   }

//   return {
//     get board() {
//       return { ...board };
//     },
//     placeShip,
//     receiveAttack,
//   };
// }

// const b1 = Gameboard();
// const carrier = Ship('carrier', 5);
// b1.placeShip(carrier, ['A0', 'A1', 'A2', 'A3', 'A4']);
// b1.receiveAttack('A0');
// b1.receiveAttack('A1');
// b1.receiveAttack('A2');
// console.log(carrier.status);
// console.log(b1.board);
