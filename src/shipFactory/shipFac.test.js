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
  expect(Ship('ship', 4).status).toStrictEqual([0, 1, 2, 3]);
});
test('Ship(2) should return an array', () => {
  expect(Ship('s', 2).status).toStrictEqual([0, 1]);
});
test('carrier should be [0,1,2,3,4]', () => {
  expect(carrier.status).toStrictEqual([0, 1, 2, 3, 4]);
});
test('battleship should be [0,1,2,3]', () => {
  expect(battleship.status).toStrictEqual([0, 1, 2, 3]);
});
test('destroyer should be [0,1,2]', () => {
  expect(destroyer.status).toStrictEqual([0, 1, 2]);
});
test('submarine should be [0,1,2]', () => {
  expect(submarine.status).toStrictEqual([0, 1, 2]);
});
test('patrol should be [0,1]', () => {
  expect(patrol.status).toStrictEqual([0, 1]);
});

//* testing hit

// xtest('hit should only take number params', () => {
//   expect(Ship('s', 2).hit('hello world')).toBe('error');
// });

test('Ship(2).hit(0) should return [X, 1]', () => {
  expect(Ship('s', 2).hit(0)).toStrictEqual(['X', 1]);
});

// const m2 = Ship('s', 4);
test('Ship(4).hit(3) should return [0,1,2,X]', () => {
  expect(Ship('s', 4).hit(3)).toStrictEqual([0, 1, 2, 'X']);
});

const mockShip = Ship('s', 2);
mockShip.hit(0);
mockShip.hit(1);

test('mockship should return [X, X]', () => {
  expect(mockShip.status).toStrictEqual(['X', 'X']);
});

const ms2 = Ship('s', 5);
ms2.hit(0);
ms2.hit(1);
ms2.hit(4);

test('ms2 should return [x,x,2,3,x]', () => {
  expect(ms2.status).toStrictEqual(['X', 'X', 2, 3, 'X']);
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
