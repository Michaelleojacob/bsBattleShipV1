import boardObj from './boardObj';

const checkIfCellIsValid = (obj, coords) => {
  let state = true;

  coords.forEach((coord) => {
    if (!Object.prototype.hasOwnProperty.call(obj, coord)) {
      state = false;
      return state;
    }
    return state;
  });
  return state;
};

function Gameboard() {
  const board = { ...boardObj };

  // const hasProperty = Object.prototype.hasOwnProperty.call()

  const placeShip = ({ name, size }, coords) => {
    if (size !== coords.length) return 'error mismatched ship.size and coords.length';
    const isValid = checkIfCellIsValid(board, coords);
    if (!isValid) return 'error one or more coordinates are not valid spaces';

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
