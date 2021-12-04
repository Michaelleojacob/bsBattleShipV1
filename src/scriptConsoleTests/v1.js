//* this is testing markbufferzone
//* and buffer zones in general
//* uncomment and copy paste this into script.js

// import boardObj from './gameboardFac/boardObj';
// import runAllChecks from './gameboardFac/checks';
// import placeRandomly from './gameboardFac/placeRandomly';
// import getBufferZoneArray from './gameboardFac/buffer';
// import mockShips from './mockshipsObj/mockshipsObj';

// export default function Gameboard(shipObj) {
//   const board = { ...boardObj };
//   const legalMoves = { ...boardObj };
//   const recordAllShots = [];

//   function markBoard(shipToMark, coordinates) {
//     coordinates.forEach((coord) => {
//       board[coord] = shipToMark.name;
//     });
//     shipToMark.setCoords(coordinates);
//   }

//   function markBufferZone(bufferArray) {
//     bufferArray.forEach((coord) => {
//       board[coord] = 'buffer';
//     });
//   }

//   function placeShip(ship, coords) {
//     const foo = runAllChecks(board, ship.size, coords);
//     if (!foo) return 'Error: one or more checks failed';
//     if (foo) {
//       const bufferZone = getBufferZoneArray(coords);
//       markBufferZone(bufferZone);
//       return markBoard(ship, coords);
//     }
//     return { ...board };
//   }
//   function randomlyPlaceShip(ship) {
//     const coordsToCheck = placeRandomly(ship);
//     const didCoordsPass = runAllChecks(board, ship.size, coordsToCheck);
//     if (!didCoordsPass) {
//       return randomlyPlaceShip(ship);
//     }
//     if (didCoordsPass) {
//       console.log(coordsToCheck);
//       return markBoard(ship, coordsToCheck);
//     }
//     return 'error something went horribly wrong';
//   }

//   function randomlyPlaceAllShips() {
//     Object.values(shipObj).forEach((ship) => randomlyPlaceShip(ship));
//   }

//   function areAllShipsSunk() {
//     return Object.values(shipObj).every((ship) => ship.isSunk());
//   }

//   function removeFromLegalMovesAndAddToRecordShots(id) {
//     delete legalMoves[id];
//     recordAllShots.push(id);
//   }

//   function receiveAttack(cell) {
//     if (recordAllShots.includes(cell)) {
//       return 'error illegal shot';
//     }
//     if (Object.prototype.hasOwnProperty.call(shipObj, board[cell])) {
//       const ship = shipObj[board[cell]];
//       ship.hit(ship.coords.indexOf(cell));
//       removeFromLegalMovesAndAddToRecordShots(cell);
//       const checkIfAllShipsAreSunk = areAllShipsSunk();
//       const hitOrAllSunk = checkIfAllShipsAreSunk ? 'all ships are sunk!' : 'hit';
//       return hitOrAllSunk;
//     }
//     if (board[cell] === 'empty' || board[cell] === 'buffer') {
//       board[cell] = 'miss';
//       removeFromLegalMovesAndAddToRecordShots(cell);
//       return 'miss';
//     }
//     return 'something went horribly wrong';
//   }

//   return {
//     get board() {
//       return { ...board };
//     },
//     placeShip,
//     receiveAttack,
//     randomlyPlaceShip,
//     randomlyPlaceAllShips,
//   };
// }

// const ms1 = { ...mockShips };
// console.log(ms1);
// const gb1 = Gameboard();

// gb1.placeShip(ms1.carrier, ['B2', 'C2', 'C3', 'C4', 'C5']);

// gb1.placeShip(ms1.patrol, ['B7', 'B8']);

// console.log(gb1.board);
