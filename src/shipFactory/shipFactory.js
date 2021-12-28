export default function Ship(name, size) {
  const ship = Array.from(Array(size).keys());

  const hit = (num) => {
    ship[ship.indexOf(num)] = 'X';
    return [...ship];
  };

  const setCoords = (coords) => {
    ship.coordinates = coords;
  };

  const isSunk = () => ship.every((item) => item === 'X');

  let placed = false;

  const setIsPlaced = (isPlaced) => {
    placed = isPlaced;
    return placed;
  };

  return {
    get name() {
      return name;
    },
    get size() {
      return size;
    },
    get status() {
      return [...ship];
    },
    get nameAndSize() {
      return { name, size };
    },

    get coords() {
      return [...ship.coordinates];
    },
    get getPlaced() {
      return placed;
    },
    /**
     * @param {boolean} isPlaced
     */
    set setPlaced(isPlaced) {
      this.placed = isPlaced;
      return placed;
    },
    hit,
    isSunk,
    setCoords,
    setIsPlaced,
  };
}
