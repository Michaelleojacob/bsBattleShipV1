import modalDom from './domModal';
import enableRotateFunctionality from './rotateObj';

export default function myManualModal(playerObject) {
  const rotateObject = enableRotateFunctionality(modalDom);
  rotateObject.init();

  function init() {
    const currShip = playerObject.getCurrentShipForManualGameLoop();
    modalDom.renderModal();
    modalDom.renderGrid(playerObject);
    modalDom.updateShipName(currShip);
  }

  return {
    init,
  };
}
