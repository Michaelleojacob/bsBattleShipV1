import createModalDom from './domModal';
import renderBoard from '../domComponents/makeboards';
import enableRotateFunctionality from './rotateObj';
import handleMModalClick from './handleClick';

export default function myManualModal(playerObject) {
  //* dom stuff
  const modalDom = createModalDom();
  const modalDomObject = modalDom.getModalDomPieces();
  const { modalGrid, rotateBtn, dynamicRotationText } = modalDomObject;
  modalDom.renderModal();
  //* dom stuff

  //* rotate stuff
  const rotate = enableRotateFunctionality(rotateBtn, dynamicRotationText);
  rotate.init();
  //* rotate stuff

  //* click to place ship logic
  function allowClickToPlace() {
    modalGrid.addEventListener('click', (e) => {
      if (e.target.classList.contains('cell')) {
        const target = e.target.classList[0];
        const shiplength = 5;
        const arr = handleMModalClick(target, rotate, shiplength);
        if (arr.length !== shiplength) return 'error';
        const wasShipPlaced = playerObject.placeShip(playerObject.getShips.carrier, arr);
        // renderModalBoard(playerObject.getboard);
        return wasShipPlaced;
      }
      return false;
    });
  }

  function init() {
    allowClickToPlace();
    renderBoard(playerObject, modalGrid);
  }

  return {
    init,
    allowClickToPlace,
  };
}
