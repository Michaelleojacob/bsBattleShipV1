import boardObj from './boardObj';
import runAllChecks from './checks';
import placeRandomly from './placeRandomly';
import getBufferZoneArray from './buffer';

export default function Gameboard(shipObj) {
  const board = { ...boardObj };
  const legalMoves = { ...boardObj };
  const recordAllShots = [];

  const fetchLegalMoves = () => ({ ...legalMoves });

  function markboardHitOrMiss(hitOrMiss, coordinate) {
    board[coordinate] = hitOrMiss;
  }

  function markBoardWithShip(shipToMark, coordinates) {
    coordinates.forEach((coord) => {
      board[coord] = shipToMark.name;
    });
  }

  function markBufferZone(bufferArray) {
    bufferArray.forEach((coord) => {
      board[coord] = 'buffer';
    });
  }

  function placeShip(ship, coords) {
    const foo = runAllChecks(board, ship.size, coords);
    if (!foo) return false;
    if (foo) {
      const bufferZone = getBufferZoneArray(coords);
      markBufferZone(bufferZone);
      markBoardWithShip(ship, coords);
      ship.setCoords(coords);
      ship.setIsPlaced(true);
      return true;
    }
    return false;
  }
  function randomlyPlaceShip(ship) {
    const coordsToCheck = placeRandomly(ship);
    const didCoordsPass = runAllChecks(board, ship.size, coordsToCheck);
    if (!didCoordsPass) {
      return randomlyPlaceShip(ship);
    }
    if (didCoordsPass) {
      return placeShip(ship, coordsToCheck);
    }
    return 'error something went horribly wrong';
  }

  function randomlyPlaceAllShips() {
    Object.values(shipObj).forEach((ship) => randomlyPlaceShip(ship));
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
      markboardHitOrMiss('hit', cell);
      return hitOrAllSunk;
    }
    if (board[cell] === 'empty' || board[cell] === 'buffer') {
      markboardHitOrMiss('miss', cell);
      removeFromLegalMovesAndAddToRecordShots(cell);
      return 'miss';
    }
    return 'something went horribly wrong';
  }

  const areAllShipsPlaced = () => Object.values(shipObj).every((ship) => ship.getPlaced === true);

  const getCurrentShipForManualGameLoop = () => {
    if (shipObj.carrier.getPlaced === false) return shipObj.carrier;
    if (shipObj.battleship.getPlaced === false) return shipObj.battleship;
    if (shipObj.destroyer.getPlaced === false) return shipObj.destroyer;
    if (shipObj.submarine.getPlaced === false) return shipObj.submarine;
    if (shipObj.patrol.getPlaced === false) return shipObj.patrol;
    return areAllShipsPlaced();
  };

  return {
    get board() {
      return { ...board };
    },
    get getLegalMoves() {
      return { ...legalMoves };
    },
    get getRecordAllShots() {
      return [...recordAllShots];
    },
    placeShip,
    receiveAttack,
    fetchLegalMoves,
    randomlyPlaceShip,
    randomlyPlaceAllShips,
    getCurrentShipForManualGameLoop,
  };
}
