import Gameboard from './gameboardFacV1';
import mockShips from '../mockshipsObj/mockshipsObj';

const ms1 = { ...mockShips };

test('ms1 gives an object', () => {
  expect(typeof ms1).toBe('object');
});

test('Object.keys(ms1).length to be 5', () => {
  expect(Object.keys(ms1).length).toBe(5);
});

const b1 = Gameboard(ms1);
b1.placeShip(ms1.carrier, ['A0', 'A1', 'A2', 'A3', 'A4']);
b1.placeShip(ms1.battleship, ['E8', 'F8', 'G8', 'H8']);
b1.placeShip(ms1.destroyer, ['F3', 'F4', 'F5']);
b1.placeShip(ms1.submarine, ['G0', 'H0', 'I0']);
b1.placeShip(ms1.patrol, ['E5', 'E6']);

test('b1.receiveAttack(A0) to be hit', () => {
  expect(b1.receiveAttack('A0')).toBe('hit');
});
test('b1.receiveAttack(J9) to be hit', () => {
  expect(b1.receiveAttack('J9')).toBe('miss');
});
test('b1.receiveAttack(J9) to be hit', () => {
  expect(b1.receiveAttack('J9')).toBe('error, move is not legal');
});
test('b1.receiveAttack(E5) to be hit', () => {
  expect(b1.receiveAttack('E5')).toBe('hit');
});

const ms2 = { ...mockShips };
const b2 = Gameboard(ms2);
b2.placeShip(ms1.carrier, ['A0', 'A1', 'A2', 'A3', 'A4']);
b2.placeShip(ms1.battleship, ['E8', 'F8', 'G8', 'H8']);
b2.placeShip(ms1.destroyer, ['F3', 'F4', 'F5']);
b2.placeShip(ms1.submarine, ['G0', 'H0', 'I0']);
b2.placeShip(ms1.patrol, ['E5', 'E6']);

b2.receiveAttack('A0');
b2.receiveAttack('A1');
b2.receiveAttack('A2');
b2.receiveAttack('A3');
b2.receiveAttack('A4');

b2.receiveAttack('E8');
b2.receiveAttack('F8');
b2.receiveAttack('G8');
b2.receiveAttack('H8');

b2.receiveAttack('F3');
b2.receiveAttack('F4');
b2.receiveAttack('F5');

b2.receiveAttack('G0');
b2.receiveAttack('H0');
b2.receiveAttack('I0');

b2.receiveAttack('E5');
// b2.receiveAttack('E6');

test('b2.receiveAttack(E6) to be all ships are sunk', () => {
  expect(b2.receiveAttack('E6')).toBe('all ships are sunk!');
});
