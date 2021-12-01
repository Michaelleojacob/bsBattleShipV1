import boardObj from './boardObj';
import runAllChecks from './checks';
import placeShipRandomly from './placeRandomly';

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
  function randomlyPlaceShip(ship) {
    const coordsToCheck = placeShipRandomly(ship);
    const didCoordsPass = runAllChecks(board, ship.size, coordsToCheck);
    switch (didCoordsPass) {
      case true:
        coordsToCheck.forEach((coord) => {
          board[coord] = ship.name;
        });
        break;
      case false:
        randomlyPlaceShip();
        break;
      default:
        break;
    }
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
      return 'error illegal shot';
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
    randomlyPlaceShip,
  };
}
