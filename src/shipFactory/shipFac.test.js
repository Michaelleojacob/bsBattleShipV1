import Ship from './shipFactory';

//* mock ships

const carrier = Ship('carrier', 5);
const battleship = Ship('battleship', 4);
const destroyer = Ship('destroyer', 3);
const submarine = Ship('submarine', 3);
const patrol = Ship('patrol', 2);

//* testing constructor
//! these are outdated. Decided not to check the params

// xtest('Ship() param should only be number', () => {
//   expect(Ship('ship', 'lol')).toBe('error');
// });
// xtest('Ship() param should only be number', () => {
//   expect(Ship('ship', '4')).toBe('error');
// });

//* testing makeship makes an array based on the number in the param

test('Ship(4) should return an array', () => {
  expect(Ship('ship', 4).status).toStrictEqual([1, 2, 3, 4]);
});
test('Ship(2) should return an array', () => {
  expect(Ship('s', 2).status).toStrictEqual([1, 2]);
});
test('carrier should be [1,2,3,4,5]', () => {
  expect(carrier.status).toStrictEqual([1, 2, 3, 4, 5]);
});
test('battleship should be [1,2,3,4]', () => {
  expect(battleship.status).toStrictEqual([1, 2, 3, 4]);
});
test('destroyer should be [1,2,3]', () => {
  expect(destroyer.status).toStrictEqual([1, 2, 3]);
});
test('submarine should be [1,2,3]', () => {
  expect(submarine.status).toStrictEqual([1, 2, 3]);
});
test('patrol should be [1,2]', () => {
  expect(patrol.status).toStrictEqual([1, 2]);
});

//* testing hit

// xtest('hit should only take number params', () => {
//   expect(Ship('s', 2).hit('hello world')).toBe('error');
// });

test('Ship(2).hit(1) should return [X, 2]', () => {
  expect(Ship('s', 2).hit(1)).toStrictEqual(['X', 2]);
});

// const m2 = Ship('s', 4);
test('Ship(4).hit(4) should return [1,2,3,X]', () => {
  expect(Ship('s', 4).hit(4)).toStrictEqual([1, 2, 3, 'X']);
});

const mockShip = Ship('s', 2);
mockShip.hit(1);
mockShip.hit(2);

test('mockship should return [X, X]', () => {
  expect(mockShip.status).toStrictEqual(['X', 'X']);
});

const ms2 = Ship('s', 5);
ms2.hit(1);
ms2.hit(2);
ms2.hit(5);

test('ms2 should return [x,x,3,4,x]', () => {
  expect(ms2.status).toStrictEqual(['X', 'X', 3, 4, 'X']);
});

//* testing isSunk()

test('mockship.isSunk() should be true', () => {
  expect(mockShip.isSunk()).toBe(true);
});
test('ms2.isSunk() should be false', () => {
  expect(ms2.isSunk()).toBe(false);
});
test('Ship(2).isSunk() to be false', () => {
  expect(Ship('s', 2).isSunk()).toBe(false);
});
