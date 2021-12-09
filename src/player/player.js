import mockShips from '../mockshipsObj/mockshipsObj';
import gameboard from '../gameboardFac/gameboard';

export default function Player() {
  const playerships = { ...mockShips };
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
