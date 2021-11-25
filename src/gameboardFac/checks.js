const checkIfSpaceExists = (obj, coords) =>
  coords.every((coord) => Object.prototype.hasOwnProperty.call(obj, coord));

const checkIfSpaceIsEmpty = (obj, coords) => {
  coords.every((coord) => obj[coord] === 'empty');
};

const checkIfValid = (obj, coords) => {
  coords.every(
    (coord) => Object.prototype.hasOwnProperty.call(obj, coord) && obj[coord] === 'empty'
  );
};

export { checkIfSpaceExists, checkIfSpaceIsEmpty, checkIfValid };
