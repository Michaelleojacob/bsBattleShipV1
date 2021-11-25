import boardObj from './gameboardFac/boardObj';
import Ship from './shipFactory/shipFactory';

function Gameboard() {
  const board = { ...boardObj };

  const placeShip = ({ name, size }, coords) => {
    if (size !== coords.length) return console.log('error');
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

const carrier = Ship('carrier', 5);

const mockBoard = Gameboard();

mockBoard.placeShip(carrier, ['A1', 'A2', 'A3', 'A4', 'A5']);

console.log(mockBoard.board.A1);

console.log(Object.prototype.hasOwnProperty.call(mockBoard.board, 'l2'));

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

console.log(checkIfCellIsValid(mockBoard.board, ['A1', 'A2', 'Z8']));

// Gameboard.placeShip(ship, [coords])
// ship = {ship.name, ship.length};
// coords = ['a1', 'a2', 'a3', 'a4','a5'];
