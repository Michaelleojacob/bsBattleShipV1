import gameboard from '../gameboardFac/gameboard';
import Ship from '../shipFactory/shipFactory';

export default function Player() {
  const playerships = {
    carrier: Ship('carrier', 5),
    battleship: Ship('battleship', 4),
    destroyer: Ship('destroyer', 3),
    submarine: Ship('submarine', 3),
    patrol: Ship('patrol', 2),
  };
  const playerboard = gameboard(playerships);
  playerboard.randomlyPlaceAllShips();
  const { receiveAttack } = playerboard;
  return {
    get getboard() {
      return { ...playerboard.board };
    },
    get legalMoves() {
      return { ...playerboard.getLegalMoves };
    },
    get getShips() {
      return { ...playerships };
    },
    receiveAttack,
  };
}

//! failsafe => working version (legalmoves.length does not work)
// export default function Player() {
//   const playerships = { ...mockShips };
//   const playerboard = gameboard(playerships);
//   const { receiveAttack, getLegalMoves, getRecordAllShots } = playerboard;
//   playerboard.randomlyPlaceAllShips();
//   return {
//     get getboard() {
//       return { ...playerboard.board };
//     },
//     receiveAttack,
//     getLegalMoves,
//     getRecordAllShots,
//   };
// }
