import boardObj from './gameboardFac/boardObj';
import Ship from './shipFactory/shipFactory';

function checkSize(size, coordsLength) {
  const isMatchingSize = size === coordsLength;
  return isMatchingSize;
}

function checkCellIsEmpty(board, coordinates) {
  const areCellsEmpty = coordinates.every((coord) => board[coord] === 'empty');
  return areCellsEmpty;
}

function checkCellExists(board, coordinates) {
  const doCellsExist = coordinates.every((coord) =>
    Object.prototype.hasOwnProperty.call(board, coord)
  );
  return doCellsExist;
}

const runAllChecks = (gameB, shipSize, coordinates) => {
  const check1 = checkSize(shipSize, coordinates.length);
  const check2 = checkCellIsEmpty(gameB, coordinates);
  const check3 = checkCellExists(gameB, coordinates);
  const allChecks = check1 && check2 && check3;
  return allChecks;
};

export default function Gameboard(shipObj) {
  const board = { ...boardObj };
  const legalMoves = { ...boardObj };
  const recordAllShots = [];

  function placeShip(ship, coords) {
    const foo = runAllChecks(board, ship.size, coords);
    if (!foo) return 'Error: one or more checks failed';
    if (foo) {
      coords.forEach((coord) => {
        board[coord] = ship.name;
      });
      ship.setCoords(coords);
    }
    return { ...board };
  }

  function removeFromLegalMovesAndAddToRecordShots(id) {
    delete legalMoves[id];
    recordAllShots.push(id);
  }

  function receiveAttack(cell) {
    if (recordAllShots.includes(cell)) {
      console.log('not legal');
      return 'error, move is not legal';
    }
    if (Object.prototype.hasOwnProperty.call(shipObj, board[cell])) {
      console.log('hit');
      const ship = shipObj[board[cell]];
      console.log(ship);
      // shipObj[board[cell]].hit(shipObj.board[cell].coords.indexOf(cell));
    }
    if (board[cell] === 'empty') {
      console.log('miss');
    }
    return removeFromLegalMovesAndAddToRecordShots(cell);
    // if (recordAllShots.includes(cell)) {
    //   return 'error that shot has already been made';
    // }
    // const isEmpty = board[cell] === 'empty';
    // function shotLanded() {
    //   const shipExists = Object.prototype.hasOwnProperty.call(shipObj, board[cell]);
    //   if (shipExists) {
    //     const ship = shipObj[board[cell]];
    //     ship.hit(ship.coords.indexOf(cell));
    //     board[cell] = 'hit';
    //   }
    // }
    // switch (isEmpty) {
    //   case true:
    //     board[cell] = 'miss';
    //     break;
    //   case false:
    //     shotLanded();
    //     break;
    //   default:
    //     break;
    // }

    // return removeFromLegalMovesAndAddToRecordShots(cell);
  }

  return {
    get board() {
      return { ...board };
    },
    placeShip,
    receiveAttack,
  };
}

const ships = {
  carrier: Ship('carrier', 5),
  battleship: Ship('battleship', 4),
  destroyer: Ship('destroyer', 3),
  submarine: Ship('submarine', 3),
  patrol: Ship('patrol', 2),
};

const b1 = Gameboard(ships);
b1.placeShip(ships.carrier, ['A0', 'A1', 'A2', 'A3', 'A4']);
b1.placeShip(ships.battleship, ['B1', 'C1', 'D1', 'E1']);
b1.receiveAttack('A0');
b1.receiveAttack('A1');
b1.receiveAttack('A1');
b1.receiveAttack('A1');
b1.receiveAttack('A2');
b1.receiveAttack('B1');
b1.receiveAttack('B0');
b1.receiveAttack('B0');
console.log(ships.carrier.status);
console.log(b1.board);
