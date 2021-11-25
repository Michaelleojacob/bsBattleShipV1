import Gameboard from './gameboardFacV1';
import Ship from '../shipFactory/shipFactory';

const mockBoard = Gameboard();

test('mockBoard.bord() returns an object', () => {
  expect(typeof mockBoard.board).toBe('object');
});

test('mockBoard.board.length is 100', () => {
  expect(Object.keys(mockBoard.board).length).toBe(100);
});

test('mockBoard.board all values are "empty" on creation', () => {
  expect(Object.values(mockBoard.board).every((item) => item === 'empty'));
});

const mBoard = Gameboard();
const carrier = Ship('carrier', 1);
mBoard.placeShip(carrier, ['A0']);

test('mBoard.placeShip changes the correct object key value pairs', () => {
  expect(mBoard.board).toHaveProperty('A0', 'carrier');
});
test('mBoard.board .every === empty should be false', () => {
  expect(Object.values(mBoard.board).every((item) => item === 'empty')).toBe(false);
});

const b1 = Gameboard();
const s1 = Ship('s1', 2);
test('b1.placeShip(s1, [A0]) should be mismatched size and coords', () => {
  expect(b1.placeShip(s1, ['A0'])).toBe('error mismatched ship.size and coords.length');
});
test('b1 should still be all empty due to the above placeShip being error"ed out', () => {
  expect(Object.values(b1.board).every((item) => item === 'empty')).toBe(true);
});

const b2 = Gameboard();
const s2 = Ship('s2', 1);
test('b2.placeShip(s1, [P2]) to give an error', () => {
  expect(b2.placeShip(s2, ['P2'])).toBe('error one or more coordinates are not valid spaces');
});
test('b2 should still be all empty due to the above placeShip being error"ed out', () => {
  expect(Object.values(b2.board).every((item) => item === 'empty')).toBe(true);
});

const b3 = Gameboard();
const s3 = Ship('s3', 5);
test('b3 should error out if I place even 1/5 coordinates are invalid', () => {
  expect(b3.placeShip(s3, ['A0', 'A1', 'A2', 'A3', 'M12'])).toBe(
    'error one or more coordinates are not valid spaces'
  );
});
test('b3.board should still be empty', () => {
  expect(Object.values(b3.board).every((item) => item === 'empty')).toBe(true);
});
