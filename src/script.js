import boardObj from './gameboardFac/boardObj';

function Gameboard() {
  const board = { ...boardObj };

  return {
    get board() {
      return { ...board };
    },
  };
}

const mockBoard = Gameboard();

console.log(mockBoard.board);

console.log(typeof mockBoard.board);

const lol = { a: 1, b: 2, c: 3 };
console.log(lol.length);
