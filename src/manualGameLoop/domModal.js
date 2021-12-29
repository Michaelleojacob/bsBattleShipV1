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
  const staticShipName = dom({ text: `placing: `, attributes: [{ id: 'staticShipName' }] });
  const shipName = dom({
    tag: 'span',
    text: 'placeholder ship name',
    attributes: [{ id: 'shipName' }],
  });

  function appendModal() {
    mModalContent.appendChild(rotateBtn);
    staticRotationText.appendChild(dynamicRotationText);
    mModalContent.appendChild(staticRotationText);
    mModalContent.appendChild(staticShipName);
    staticShipName.appendChild(shipName);
    mModalContent.appendChild(modalGrid);
    manualModal.appendChild(mModalContent);
    container.appendChild(manualModal);
  }

  const renderGrid = (playerObj) => renderBoard(playerObj, modalGrid);

  const renderModal = () => {
    removeAllChildNodes(nonModalContent);
    return appendModal();
  };

  const removeModal = () => removeAllChildNodes(manualModal);

  function updateDyanmicRotateText(msg) {
    dynamicRotationText.textContent = msg;
  }

  function updateShipName({ name }) {
    shipName.textContent = name;
  }

  return {
    rotateBtn,
    dynamicRotationText,
    renderModal,
    removeModal,
    renderGrid,
    updateShipName,
    updateDyanmicRotateText,
  };
}

const modalDom = createModalDom();
export default modalDom;
