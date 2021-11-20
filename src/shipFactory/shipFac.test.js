import makeShip, { shipObj } from './shipFactory';

const { carrier, battleship, destroyer, submarine, patrol } = shipObj;

//* testing constructor

test('makeShip() param should only be number', () => {
  expect(makeShip('lol')).toBe('error');
});
test('makeShip() param should only be number', () => {
  expect(makeShip('4')).toBe('error');
});

//* testing makeship makes an array based on the number in the param

test('makeShip(4) should return an array', () => {
  expect(makeShip(4).getStatus()).toStrictEqual([1, 2, 3, 4]);
});
test('makeShip(2) should return an array', () => {
  expect(makeShip(2).getStatus()).toStrictEqual([1, 2]);
});
test('carrier should be [1,2,3,4,5]', () => {
  expect(carrier.getStatus()).toStrictEqual([1, 2, 3, 4, 5]);
});
test('battleship should be [1,2,3,4]', () => {
  expect(battleship.getStatus()).toStrictEqual([1, 2, 3, 4]);
});
test('destroyer should be [1,2,3]', () => {
  expect(destroyer.getStatus()).toStrictEqual([1, 2, 3]);
});
test('submarine should be [1,2,3]', () => {
  expect(submarine.getStatus()).toStrictEqual([1, 2, 3]);
});
test('patrol should be [1,2]', () => {
  expect(patrol.getStatus()).toStrictEqual([1, 2]);
});
