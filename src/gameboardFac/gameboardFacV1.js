import boardObj from './boardObj';

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

  function placeShip({ name, size }, coords) {
    const foo = runAllChecks(board, size, coords);

    if (!foo) return 'Error: one or more checks failed';

    if (foo) {
      coords.forEach((coord) => {
        board[coord] = name;
      });
    }

    return { ...board };
  }

  return {
    get board() {
      return { ...board };
    },
    placeShip,
  };
}
