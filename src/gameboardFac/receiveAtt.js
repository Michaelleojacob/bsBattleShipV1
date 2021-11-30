// const shipsObj = {
//   carrier: Ship('carrier', 5),
//   battleship: Ship('battleship', 3),
//   destroyer: Ship('destroyer', 3),
//   submarine: Ship('submarine', 3),
//   patrol: Ship('patrol', 2),
// };

//   function receiveAttack(cell) {
//     const shotFired = board[cell];

//     //* this approach assumes the ship is a value on board
//     //* board['A0'] = { ...carrier }
//     //* board['A0].hit(1) // board.carrier.hit(1)
//     console.log(shotFired);
//     shotFired.hit(1);
//     console.log(shotFired.status);

//     //* this approach assumes shipObj exists (above)
//     //* where as the above example does NOT require the shipObj
//     // const ship = shipsObj[shotFired];
//     // console.log(ship);
//     // ship.hit(2);

//     //* this approach uses eval() which is gross
//     // console.log(ship.status);
//     // const ship = eval(shotFired);
//     // ship.hit(1);
//     // console.log(ship.status);

//! version 2

// export default function Gameboard(shipObj) {
//   const board = { ...boardObj };
//   const legalMoves = { ...boardObj };
//   const recordAllShots = [];

//   function placeShip(ship, coords) {
//     const foo = runAllChecks(board, ship.size, coords);
//     if (!foo) return 'Error: one or more checks failed';
//     if (foo) {
//       coords.forEach((coord) => {
//         board[coord] = ship.name;
//       });
//       ship.setCoords(coords);
//     }
//     return { ...board };
//   }

//   function removeFromLegalMovesAndAddToRecordShots(id) {
//     delete legalMoves[id];
//     recordAllShots.push(id);
//   }

//   function receiveAttack(cell) {
//     if (recordAllShots.includes(cell)) {
//       return 'error that shot has already been made';
//     }
//     const isEmpty = board[cell] === 'empty';
//     function shotLanded() {
//       const shipExists = Object.prototype.hasOwnProperty.call(shipObj, board[cell]);
//       if (shipExists) {
//         const ship = shipObj[board[cell]];
//         ship.hit(ship.coords.indexOf(cell));
//         board[cell] = 'hit';
//       }
//     }

//     if (!isEmpty) {
//       shotLanded();
//     }

//     return removeFromLegalMovesAndAddToRecordShots(cell);
//   }

//   return {
//     get board() {
//       return { ...board };
//     },
//     placeShip,
//     receiveAttack,
//   };
// }
