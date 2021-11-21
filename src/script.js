function Ship(name, size) {
  const ship = Array.from(Array(size).keys()).map((i) => i + 1);

  const hit = (num) => {
    ship[ship.indexOf(num)] = 'X';
  };

  const isSunk = () => ship.every((item) => item === 'X');

  return {
    get name() {
      return name;
    },
    get size() {
      return size;
    },
    get status() {
      return [...ship];
    },
    get log() {
      return console.log(ship);
    },
    hit,
    isSunk,
  };
}

const mock = Ship('s', 4);
console.log(mock.status);
