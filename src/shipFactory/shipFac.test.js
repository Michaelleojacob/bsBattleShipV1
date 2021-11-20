import makeShip from './shipFactory';

//* testing constructor

test('makeShip() param should only be number', () => {
  expect(makeShip('lol')).toBe('error');
});
test('makeShip() param should only be number', () => {
  expect(makeShip('4')).toBe('error');
});
