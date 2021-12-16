import dom from '../domCreator/domCreator';
import cached from '../cacheDom/cacheDom';
import renderBoard from '../domComponents/makeboards';

function myManualModal() {
  //* dom
  const { container, nonModalContent } = cached;

  const manualModal = dom({ attributes: [{ id: 'manualModal' }], classes: ['modal'] });
  const mModalContent = dom({ classes: ['mModalContent'] });

  const rotateBtn = dom({ tag: 'button', text: 'rotate', attributes: [{ id: 'rotate' }] });
  const modalGrid = dom({ attributes: [{ id: 'modalGrid' }], classes: ['grid'] });
  const shipName = dom({ attributes: [{ id: 'shipName' }] });
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
    mModalContent.appendChild(shipName);
    mModalContent.appendChild(modalGrid);
    manualModal.appendChild(mModalContent);
    container.appendChild(manualModal);
    removeBackDrop();
  }
  function renderModalBoard(playerBoardObj) {
    renderBoard(playerBoardObj, modalGrid, true);
  }

  //* logic

  return {
    displayModal,
    removeModal,
    renderModalBoard,
  };
}

const modal = myManualModal();
export default modal;
