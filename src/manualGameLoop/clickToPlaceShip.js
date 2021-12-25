import modalDom from './domModal';
import arrayBasedOnSize from './getArrayBasedOnSize';

export default function allowClickToPlace(playerObj) {
  const modalDomObject = modalDom.getModalDomPieces();
  const { modalGrid } = modalDomObject;
  modalGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
      const target = e.target.classList[0];
      const shiplength = 5;
      const arr = arrayBasedOnSize(target, shiplength);
      if (arr.length !== shiplength) return 'error';
      console.log(arr);
      const wasShipPlaced = playerObj.placeShip(playerObj.getShips.carrier, arr);
      // renderModalBoard(playerObj.getboard);
      return wasShipPlaced;
    }
    return false;
  });
}
