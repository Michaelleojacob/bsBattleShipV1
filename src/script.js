import boardObj from './gameboardFac/boardObj';
import Ship from './shipFactory/shipFactory';

function checkSize(size, coords) {
  const foo = size === coords.length;
  if (!foo) return new Error('ship size and coords array do not match up');
  return foo;
}

console.log(checkSize(2, [1, 2]));
console.log(checkSize(2, [1, 2, 3]));
console.log(checkSize(2, [1]));

function checkCellIsEmpty(board, coordinates) {
  const foo = coordinates.every((coord) => board[coord] === 'empty');
  if (!foo) return new Error('cell is not empty');
  return foo;
}

const mockB = { ...boardObj };
console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9']));
console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'A12']));
console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'J9']));
console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'J9', 'P1']));

function checkCellExists(board, coordinates) {
  const foo = coordinates.every((coord) => Object.prototype.hasOwnProperty.call(board, coord));
  if (!foo) return new Error('cell does not exist');
  return foo;
}
console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9']));
console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9', 'P9']));

function Gameboard() {
  const board = { ...boardObj };

  function placeShip({ name, size }, coords) {}

  return {
    get board() {
      return { ...board };
    },
    placeShip,
  };
}

const b1 = Gameboard();
const s1 = Ship('s1', 2);

// b1.placeShip(s1, ['A0']);
b1.placeShip(s1, ['A0', 'A1']);
// console.log(b1.board);
