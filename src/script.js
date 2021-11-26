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

  function receiveAttack(cell) {
    const shotFired = board[cell];
    // console.log(shotFired);
    shotFired.hit(1);
    // console.log(shotFired.status);
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
console.log(carrier.coords);
carrier.hit(carrier.coords.indexOf('A1'));
console.log(carrier.status);
b1.receiveAttack('A0');
// console.log(carrier);
// console.log(carrier.status);
// s1.hit(1);
// console.log(s1.status);

// const o = {
//   one: carrier,
//   two: carrier,
//   three: 'empty',
// };

// console.log(o);
// o.one.hit(1);
// console.log(o.one.status);
// console.log(carrier.status);
// o.two.hit(2);
// console.log(o.one.status);
// console.log(carrier.status);
