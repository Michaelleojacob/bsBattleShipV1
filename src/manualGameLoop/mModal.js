import dom from '../domCreator/domCreator';
import cached from '../cacheDom/cacheDom';
import renderBoard from '../domComponents/makeboards';
import enableRotateFunctionality from './rotateObj';
import handleMModalClick from './handleClick';

function myManualModal() {
  //* dom
  const { container, nonModalContent } = cached;
  const manualModal = dom({ attributes: [{ id: 'manualModal' }], classes: ['modal'] });
  const mModalContent = dom({ classes: ['mModalContent'] });
  const rotateBtn = dom({ tag: 'button', text: 'rotate', attributes: [{ id: 'rotate' }] });
  const staticRotationText = dom({
    text: 'ship placement: ',
    attributes: [{ id: 'staticRotationText' }],
  });
  const dynamicRotationText = dom({ tag: 'span', attributes: [{ id: 'dynamicRotationText' }] });
  const modalGrid = dom({ attributes: [{ id: 'modalGrid' }], classes: ['grid'] });
  const shipName = dom({ text: 'placeholder ship name', attributes: [{ id: 'shipName' }] });
  //* dom

  //* logic
  const removeBackDrop = () => nonModalContent.remove();
  // const returnbackDrop = () => // re render backdrop (nonModalContent)
  const removeModal = () => {
    manualModal.remove();
    // returnbackDrop();
  };

  function displayModal() {
    mModalContent.appendChild(rotateBtn);
    staticRotationText.appendChild(dynamicRotationText);
    mModalContent.appendChild(staticRotationText);
    mModalContent.appendChild(shipName);
    mModalContent.appendChild(modalGrid);
    manualModal.appendChild(mModalContent);
    container.appendChild(manualModal);
    removeBackDrop();
  }
  //! going to try removing the true/false
  function renderModalBoard(boardObject) {
    renderBoard(boardObject, modalGrid);
  }
  //* rotate logic
  const rotate = enableRotateFunctionality(rotateBtn, dynamicRotationText);
  rotate.init();
  //* rotate logic

  //* click to place ship logic
  function allowClickToPlace(pObject) {
    modalGrid.addEventListener('click', (e) => {
      if (e.target.classList.contains('cell')) {
        const target = e.target.classList[0];
        const shiplength = 5;
        const arr = handleMModalClick(target, rotate, shiplength);
        if (arr.length !== shiplength) return 'error';
        console.log(arr);
        // board.placeship(ship, coords)
        console.log(pObject);
        const thing = pObject.placeShip(pObject.getShips.carrier, arr);
        console.log(thing);
        console.log(pObject.getboard);
        renderModalBoard(pObject);
      }
      return false;
    });
  }
  //* click to place ship logic
  //* mouseover logic
  function mouseOverEffect() {
    modalGrid.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains('cell')) {
        const target = e.target.classList[0];
        const shiplength = 5;
        const arr = handleMModalClick(target, rotate, shiplength);
        if (arr === 'error') return 'error';
        let addClass;
        if (arr.length === shiplength) addClass = 'highlighted';
        if (arr.length !== shiplength) addClass = 'danger';
        arr.forEach((item) => {
          modalGrid.querySelector(`.${item}`).classList.add(addClass);
        });
      }
      return false;
    });
    //* mouseover logic
    //* mouseout logic
    modalGrid.addEventListener('mouseout', (e) => {
      if (e.target.classList.contains('highlighted') || e.target.classList.contains('danger')) {
        const foo = Array.from(modalGrid.childNodes);
        foo.forEach((item) => {
          item.classList.remove('highlighted', 'danger');
        });
      }
    });
    //* mouseout logic
  }

  function init(playerObject) {
    displayModal();
    renderModalBoard(playerObject);
    allowClickToPlace(playerObject);
    mouseOverEffect();
  }
  //* logic

  //* outward facing functions
  return {
    init,
    displayModal,
    removeModal,
    renderModalBoard,
    allowClickToPlace,
    mouseOverEffect,
  };
  //* outward facing functions
}

const modal = myManualModal();
export default modal;
