import boardObj from './boardObj';

function Gameboard() {
  const board = { ...boardObj };

  return {
    get board() {
      return { ...board };
    },
  };
}

const mockBoard = Gameboard();

export default mockBoard;
