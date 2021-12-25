import modalDom from './domModal';
import enableRotateFunctionality from './rotateObj';
import arrayBasedOnSize from './getArrayBasedOnSize';

export default function myManualModal(playerObject) {
  //* dom stuff
  const modalDomObject = modalDom.getModalDomPieces();
  const { modalGrid, rotateBtn, dynamicRotationText } = modalDomObject;
  //* dom stuff

  //* rotateObject stuff
  const rotateObject = enableRotateFunctionality(rotateBtn, dynamicRotationText);
  rotateObject.init();
  //* rotateObject stuff

  function addMouseOver() {
    modalGrid.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains('cell')) {
        const target = e.target.classList[0];
        const thing = arrayBasedOnSize(target, 5);
        console.log(`horizontal : ${thing.horizontalArr}`);
        console.log(`vertical : ${thing.verticalArr}`);
      }
    });
  }

  function init() {
    modalDom.renderModal();
    modalDom.renderGrid(playerObject);
    addMouseOver();
  }

  return {
    init,
  };
}
