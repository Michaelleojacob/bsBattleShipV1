import mockBoard from './gameboardFacV1';

test('mockBoard.bord() returns an object', () => {
  expect(typeof mockBoard.board).toBe('object');
});

test('mockBoard.board.length is 100', () => {
  expect(Object.keys(mockBoard.board).length).toBe(100);
});
