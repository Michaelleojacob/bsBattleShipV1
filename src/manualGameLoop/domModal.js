import dom from '../domCreator/domCreator';
import cached from '../cacheDom/cacheDom';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';
import renderBoard from '../domComponents/makeboards';

function createModalDom() {
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

  function appendModal() {
    mModalContent.appendChild(rotateBtn);
    staticRotationText.appendChild(dynamicRotationText);
    mModalContent.appendChild(staticRotationText);
    mModalContent.appendChild(shipName);
    mModalContent.appendChild(modalGrid);
    manualModal.appendChild(mModalContent);
    container.appendChild(manualModal);
  }

  const getModalDomPieces = () => ({
    manualModal,
    mModalContent,
    rotateBtn,
    staticRotationText,
    dynamicRotationText,
    modalGrid,
    shipName,
  });

  const renderGrid = (playerObj) => renderBoard(playerObj, modalGrid);

  const renderModal = () => {
    removeAllChildNodes(nonModalContent);
    return appendModal();
  };

  const removeModal = () => removeAllChildNodes(manualModal);

  return {
    getModalDomPieces,
    renderModal,
    removeModal,
    renderGrid,
  };
}

const modalDom = createModalDom();
export default modalDom;
