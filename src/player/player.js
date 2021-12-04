import mockShips from '../mockshipsObj/mockshipsObj';
import gameboard from '../gameboardFac/gameboard';

export default function Player() {
  const playerships = mockShips;
  const playerboard = gameboard(playerships);
  playerboard.randomlyPlaceAllShips();
  const { board, receiveAttack, getLegalMoves, getRecordAllShots } = playerboard;
  return {
    board,
    receiveAttack,
    getLegalMoves,
    getRecordAllShots,
  };
}
