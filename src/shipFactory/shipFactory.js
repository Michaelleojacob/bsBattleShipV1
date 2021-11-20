export default function makeShip(leng) {
  if (typeof leng !== 'number') return 'error';
  const ship = Array.from(Array(leng).keys()).map((i) => i + 1);

  const getStatus = () => {
    const mappedShip = ship.map((x) => x);
    console.log(mappedShip);
    return mappedShip;
  };

  const hit = (num) => {
    if (typeof num !== 'number') return 'error';
    ship[ship.indexOf(num)] = 'X';
    return getStatus();
  };

  const isSunk = () => {
    const mappedShip = getStatus();
    console.log(mappedShip.every((item) => item === 'X'));
    return mappedShip.every((item) => item === 'X');
  };

  return { getStatus, hit, isSunk };
}

const shipObj = {
  carrier: makeShip(5),
  battleship: makeShip(4),
  destroyer: makeShip(3),
  submarine: makeShip(3),
  patrol: makeShip(2),
};

export { shipObj };
