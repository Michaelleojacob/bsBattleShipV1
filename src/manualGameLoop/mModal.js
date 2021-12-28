import modalDom from './domModal';
import enableRotateFunctionality from './rotateObj';
import arrayBasedOnSize from './getArrayBasedOnSize';

export default function myManualModal(playerObject) {
  //* dom stuff
  const modalDomObject = modalDom.getModalDomPieces();
  const { modalGrid, rotateBtn, dynamicRotationText, shipName } = modalDomObject;
  //* dom stuff

  //* rotateObject stuff
  const rotateObject = enableRotateFunctionality(rotateBtn, dynamicRotationText);
  rotateObject.init();
  //* rotateObject stuff

  function updateText(ship) {
    shipName.textContent = ship.name;
  }

  function init() {
    const currShip = playerObject.getCurrentShipForManualGameLoop();
    modalDom.renderModal();
    modalDom.renderGrid(playerObject);
    updateText(currShip);
  }

  console.log(modalGrid, arrayBasedOnSize);

  function addMouseOverAndClick(ship) {
    modalGrid.addEventListener('click', fnName);
    modalGrid.addEventListener('mouseover', fnName);
    modalGrid.addEventListener('mouseout', fnName);
  }

  return {
    init,
  };
}

//! use case examples:
// // playerObject.placeShip(playerObject.getShips.carrier, ['A0', 'A1', 'A2', 'A3', 'A4']);
// playerObject.randomlyPlaceAllShips();
// const foo = playerObject.getCurrentShipForManualGameLoop();
// console.log(foo);

// function addMouseOver() {
//   modalGrid.addEventListener('mouseover', (e) => {
//     if (e.target.classList.contains('cell')) {
//       const target = e.target.classList[0];
//       const coordsArr = arrayBasedOnSize(target, 5);
//       console.log(`horizontal : ${coordsArr.horizontalArr}`);
//       console.log(`vertical : ${coordsArr.verticalArr}`);
//     }
//   });
// }
