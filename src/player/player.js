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
  const { receiveAttack, randomlyPlaceAllShips, placeShip, getCurrentShipForManualGameLoop } =
    playerboard;
  const checkboard = () => ({ ...playerboard.board });
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
    randomlyPlaceAllShips,
    placeShip,
    getCurrentShipForManualGameLoop,
    checkboard,
  };
}
