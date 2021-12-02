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
  const [letter, numIsString] = cell.split('');
  const num = parseInt(numIsString, 10);
  const arrOfLetters = [];
  const arrOfNums = [];

  function UpperAndLowerLetters() {
    if (letters.includes(letters[letters.indexOf(letter) - 1])) {
      arrOfLetters.push(letters[letters.indexOf(letter) - 1]);
    }
    arrOfLetters.push(letter);
    if (letters.includes(letters[letters.indexOf(letter) + 1])) {
      arrOfLetters.push(letters[letters.indexOf(letter) + 1]);
    }
  }
  function UpperAndLowerNumbers() {
    if (nums.includes(nums[nums.indexOf(num) - 1])) {
      arrOfNums.push(nums[nums.indexOf(num) - 1]);
    }
    arrOfNums.push(num);
    if (nums.includes(nums[nums.indexOf(num) + 1])) {
      arrOfNums.push(nums[nums.indexOf(num) + 1]);
    }
  }

  UpperAndLowerLetters();
  UpperAndLowerNumbers();

  console.log(arrOfLetters, arrOfNums);

  function combineLettersAndNumbers() {
    const newArr = [];
    arrOfLetters.forEach((eachletter) => {
      arrOfNums.forEach((eachnum) => {
        newArr.push(eachletter + eachnum);
      });
    });
    return newArr;
  }
  const foo = combineLettersAndNumbers();
  console.log(foo);
}
breakThingsDown('B1');
breakThingsDown('A0');
