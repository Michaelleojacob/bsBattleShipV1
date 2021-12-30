import modalDom from './domModal';
import enableRotateFunctionality from './rotateObj';
import manualModalEvents from './events';

export default function myManualModal(playerObject) {
  const rotateObject = enableRotateFunctionality(modalDom);
  rotateObject.init();

  const updateRenderedGrid = () => modalDom.renderGrid(playerObject);

  manualModalEvents({
    domElement: modalDom.modalGrid,
    updateRenderedGrid,
    checkRotate: rotateObject.checkVert,
    getCurrShip: playerObject.getCurrentShipForManualGameLoop,
    placeShip: playerObject.placeShip,
    playerBoard: playerObject.getboard,
  });

  function init() {
    const currShip = playerObject.getCurrentShipForManualGameLoop();
    modalDom.renderModal();
    updateRenderedGrid();
    modalDom.updateShipName(currShip);
  }

  return {
    init,
  };
}
