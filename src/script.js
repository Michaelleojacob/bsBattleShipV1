import Ship from './shipFactory/shipFactory';
import boardObj from './gameboardFac/boardObj';

const ms1 = {
  one: Ship('one', 1),
  two: Ship('two', 2),
  three: Ship('three', 3),
};

function gboard(shipsObj) {
  const board = { ...boardObj };

  function placeShip(ship, coordinates) {
    coordinates.forEach((coord) => {
      board[coord] = ship.name;
    });
  }

  return {
    get board() {
      return { ...board };
    },
    get getShips() {
      return { ...shipsObj };
    },
    placeShip,
  };
}

const b1 = gboard(ms1);
b1.placeShip(ms1.one, ['A0']);
console.log(b1.board);

// coord = b1
// how to get all surrounding coordinates
// a0 a1 a2
// b0 b1 b2
// c0 c1 c2

// we would want a0 a1 a2 b0 b2 c0 c1 c2

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

function breakThingsDown(cell) {
  const [letter, num] = cell.split('');
  console.log(letter, num);

  function UpperAndLowerLetters() {
    const upperLetter = letters[letters.indexOf(letter) - 1];
    const lowerLetter = letters[letters.indexOf(letter) + 1];
    const arrOfLetters = [upperLetter, letter, lowerLetter];
    return arrOfLetters;
  }

  function UpperAndLowerNumbers() {
    //! NUM IS NOT TYPEOF NUMBER !!!!!!!!! !\\
    //! NUM IS A STRING!!

    console.log(nums);
    console.log(num);
    const upperNum = nums[num - 1];
    const lowerNum = nums[num + 1];
    const arrOfNums = [upperNum, num, lowerNum];
    return arrOfNums;
  }

  const lol = UpperAndLowerLetters();
  const haha = UpperAndLowerNumbers();
  console.log(lol, haha);
}
breakThingsDown('B1');
