import boardObj from './boardObj';
import runAllChecks from './checks';

export default function Gameboard(shipObj) {
  const board = { ...boardObj };
  const legalMoves = { ...boardObj };
  const recordAllShots = [];

  function placeShip(ship, coords) {
    const foo = runAllChecks(board, ship.size, coords);
    if (!foo) return 'Error: one or more checks failed';
    if (foo) {
      coords.forEach((coord) => {
        board[coord] = ship.name;
      });
      ship.setCoords(coords);
    }
    return { ...board };
  }

  function areAllShipsSunk() {
    return Object.values(shipObj).every((ship) => ship.isSunk());
  }

  function removeFromLegalMovesAndAddToRecordShots(id) {
    delete legalMoves[id];
    recordAllShots.push(id);
  }

  function receiveAttack(cell) {
    if (recordAllShots.includes(cell)) {
      return 'error, move is not legal';
    }
    if (Object.prototype.hasOwnProperty.call(shipObj, board[cell])) {
      const ship = shipObj[board[cell]];
      ship.hit(ship.coords.indexOf(cell));
      removeFromLegalMovesAndAddToRecordShots(cell);
      const checkIfAllShipsAreSunk = areAllShipsSunk();
      const hitOrAllSunk = checkIfAllShipsAreSunk ? 'all ships are sunk!' : 'hit';
      return hitOrAllSunk;
    }
    if (board[cell] === 'empty') {
      board[cell] = 'miss';
      removeFromLegalMovesAndAddToRecordShots(cell);
      return 'miss';
    }
    return 'something went horribly wrong';
  }

  return {
    get board() {
      return { ...board };
    },
    placeShip,
    receiveAttack,
  };
}
