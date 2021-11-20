export default function makeShip(leng) {
  if (typeof leng !== 'number') return 'error';
  const ship = Array.from(Array(leng).keys()).map((i) => i + 1);

  const getStatus = () => {
    console.log(ship);
    return ship;
  };

  const hit = (num) => {
    if (typeof num !== 'number') return 'error';
    ship[ship.indexOf(num)] = 'X';
    return getStatus();
  };

  return { getStatus, hit };
}

const shipObj = {
  carrier: makeShip(5),
  battleship: makeShip(4),
  destroyer: makeShip(3),
  submarine: makeShip(3),
  patrol: makeShip(2),
};

export { shipObj };
