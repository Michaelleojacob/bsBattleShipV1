import boardObj from './gameboardFac/boardObj';
import runAllChecks from './gameboardFac/checks';
import placeShipRandomly from './gameboardFac/placeRandomly';
import mockShips from './mockshipsObj/mockshipsObj';

export default function Gameboard(shipObj) {
  const board = { ...boardObj };
  const legalMoves = { ...boardObj };
  const recordAllShots = [];

  function markBoard(shipToMark, coordinates) {
    coordinates.forEach((coord) => {
      board[coord] = shipToMark.name;
    });
    shipToMark.setCoords(coordinates);
  }

  function placeShip(ship, coords) {
    const foo = runAllChecks(board, ship.size, coords);
    if (!foo) return 'Error: one or more checks failed';
    if (foo) {
      return markBoard(ship, coords);
    }
    return { ...board };
  }
  function randomlyPlaceShip(ship) {
    let shipWasPlaced;
    const coordsToCheck = placeShipRandomly(ship);
    const didCoordsPass = runAllChecks(board, ship.size, coordsToCheck);
    if (!didCoordsPass) {
      shipWasPlaced = false;
      return randomlyPlaceShip(ship);
    }
    if (didCoordsPass) {
      console.log(coordsToCheck);
      shipWasPlaced = true;
      return markBoard(ship, coordsToCheck);
    }
    return shipWasPlaced;
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

const ms1 = { ...mockShips };
const b1 = Gameboard(ms1);

Object.values(ms1).forEach((ship) => b1.randomlyPlaceShip(ship));

console.log(b1.board);

// Object.values(ms1).forEach((ship) => {
//   ship.randomlyPlaceShip();
// });
