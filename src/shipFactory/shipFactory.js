export default function makeShip(leng) {
  if (typeof leng !== 'number') return 'error';
  const ship = Array.from(Array(leng).keys()).map((i) => i + 1);
  return ship;
}
