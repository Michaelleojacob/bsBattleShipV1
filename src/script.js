import boardObj from './gameboardFac/boardObj';
import Ship from './shipFactory/shipFactory';

function checkSize(size, coords) {
  console.log(size);
  console.log(coords);
  console.log(typeof size);
  console.log(typeof coords);
  let state = false;
  if (size !== coords.length) {
    console.log('error size and coords.length do not match');
    return state;
  }
  state = true;
  return state;
}

// console.log(checkSize(2, [1, 2]));
// console.log(checkSize(2, [1, 2, 3]));

function checkCellIsEmpty(board, coordinates) {
  let state = false;
  if (!coordinates.every((coord) => board[coord] === 'empty')) {
    console.log('error one or more cells were not empty');
    return state;
  }
  state = true;
  return state;
}

// const mockB = { ...boardObj };

// checkCellIsEmpty(mockB, ['A0', 'A1', 'B9']);
// console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9']));
// console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'A12']));
// console.log(checkCellIsEmpty(mockB, ['A0', 'A1', 'B9', 'J9']));

function checkCellExists(board, coordinates) {
  let state = false;
  if (!coordinates.every((coord) => Object.prototype.hasOwnProperty.call(board, coord))) {
    console.log('error one or more cells do not exist');
    return state;
  }
  state = true;
  return state;
}
// console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9']));
// console.log(checkCellExists(mockB, ['A0', 'A1', 'B9', 'J9', 'P9']));

function runAllChecks(shipSize, gboard, coordinates) {
  let state = false;
  if (
    (checkSize(shipSize, coordinates.length) === true &&
      checkCellIsEmpty(gboard, coordinates) === true &&
      checkCellExists(gboard, coordinates)) === true
  ) {
    state = true;
    return state;
  }
  console.log('one of the checks failed');
  return state;
}

function Gameboard() {
  const board = { ...boardObj };

  function placeShip({ name, size }, coords) {
    const checkAll = runAllChecks(size, board, coords);
    if (checkAll) {
      coords.forEach((coord) => {
        board[coord] = name;
      });
    }
    return 'error';
  }

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
