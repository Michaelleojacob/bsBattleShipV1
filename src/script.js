import boardObj from './gameboardFac/boardObj';
import Ship from './shipFactory/shipFactory';

function checkSize(size, coordsLength) {
  const isMatchingSize = size === coordsLength;
  return isMatchingSize;
}

function checkCellIsEmpty(board, coordinates) {
  const areCellsEmpty = coordinates.every((coord) => board[coord] === 'empty');
  return areCellsEmpty;
}

function checkCellExists(board, coordinates) {
  const doCellsExist = coordinates.every((coord) =>
    Object.prototype.hasOwnProperty.call(board, coord)
  );
  return doCellsExist;
}

const runAllChecks = (gameB, shipSize, coordinates) => {
  const check1 = checkSize(shipSize, coordinates.length);
  const check2 = checkCellIsEmpty(gameB, coordinates);
  const check3 = checkCellExists(gameB, coordinates);
  const allChecks = check1 && check2 && check3;
  return allChecks;
};

export default function Gameboard() {
  const board = { ...boardObj };
  const legalMoves = { ...boardObj };
  const recordAllShots = [];

  function placeShip(ship, coords) {
    const foo = runAllChecks(board, ship.size, coords);
    if (!foo) return 'Error: one or more checks failed';
    if (foo) {
      coords.forEach((coord) => {
        board[coord] = ship;
      });
      ship.setCoords(coords);
    }
    return { ...board };
  }

  function removeFromLegalMovesAndAddToRecordShots(id) {
    delete legalMoves[id];
    recordAllShots.push(id);
    console.log({ ...legalMoves });
    console.log([...recordAllShots]);
  }

  function receiveAttack(cell) {
    const selectedShot = board[cell];
    if (selectedShot === 'empty') {
      console.log('miss');
    }
    if (selectedShot !== 'empty') {
      selectedShot.hit(selectedShot.coords.indexOf(cell));
    }
    removeFromLegalMovesAndAddToRecordShots(cell);
  }

  return {
    get board() {
      return { ...board };
    },
    placeShip,
    receiveAttack,
  };
}

const b1 = Gameboard();
const carrier = Ship('carrier', 5);
b1.placeShip(carrier, ['A0', 'A1', 'A2', 'A3', 'A4']);
b1.receiveAttack('A0');
b1.receiveAttack('A1');
b1.receiveAttack('A2');
console.log(carrier.status);
