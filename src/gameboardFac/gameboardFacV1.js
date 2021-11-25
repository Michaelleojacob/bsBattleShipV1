import boardObj from './boardObj';

function Gameboard() {
  const board = { ...boardObj };

  const placeShip = ({ name, size }, coords) => {
    if (size !== coords.length) return 'error mismatched ship.size and coords.length';

    coords.forEach((coord) => {
      board[coord] = name;
    });
    console.log({ ...board });
    return { ...board };
  };

  return {
    get board() {
      return { ...board };
    },
    placeShip,
  };
}

export default Gameboard;
