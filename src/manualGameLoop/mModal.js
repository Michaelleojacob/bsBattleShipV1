import modalDom from './domModal';
import enableRotateFunctionality from './rotateObj';
import manualModalEvents from './events';
import ps from '../pubsub/pubsub';

export default function myManualModal(playerObject) {
  const rotateObject = enableRotateFunctionality(modalDom);
  rotateObject.init();

  const updateGrid = () => modalDom.renderGrid(playerObject);
  ps.subscribe('updateGrid', updateGrid);

  function enableEvents() {
    const currentShip = playerObject.getCurrentShipForManualGameLoop();
    modalDom.updateShipName(currentShip);

    if (currentShip === true) {
      // end modal start game!
    }

    manualModalEvents({
      checkRotate: rotateObject.checkVert,
      currentShip,
      placeShip: playerObject.placeShip,
      playerBoard: playerObject.getboard,
    });
  }
  ps.subscribe('shipWasPlaced', enableEvents);

  function init() {
    modalDom.renderModal();
    ps.publish('updateGrid');
    ps.publish('shipWasPlaced');
  }

  return {
    init,
  };
}
