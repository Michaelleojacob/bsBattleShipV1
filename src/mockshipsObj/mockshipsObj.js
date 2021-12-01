import Ship from '../shipFactory/shipFactory';

const mockShips = {
  carrier: Ship('carrier', 5),
  battleship: Ship('battleship', 4),
  destroyer: Ship('destroyer', 3),
  submarine: Ship('submarine', 3),
  patrol: Ship('patrol', 2),
};

export default mockShips;
