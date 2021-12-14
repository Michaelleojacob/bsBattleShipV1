import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import randomGameLoop from '../randomGameLoop/randomGameLoop';

export default function gameStartModal() {
  //* dom stuff
  const { container } = cached;
  const startModal = dom({ attributes: [{ id: 'startModal' }], classes: ['modal'] });
  const startModalContent = dom({ classes: ['startModalContent'] });
  startModal.appendChild(startModalContent);

  const placeShipsManually = dom({
    tag: 'button',
    text: 'Manually place ships',
    attributes: [{ id: 'placeShipsManually' }],
    classes: ['startModalOptions'],
  });
  const placeShipsRandomly = dom({
    tag: 'button',
    text: 'Randomly place ships',
    attributes: [{ id: 'placeShipsRandomly' }],
    classes: ['startModalOptions'],
  });
  //* dom stuff

  //* logic
  const removeModal = () => startModal.remove();

  function userClickedPlaceManually() {
    placeShipsManually.addEventListener('click', () => {
      // console.log(e);
      removeModal();
      randomGameLoop();
    });
  }

  function userClickedPlaceRandomly() {
    placeShipsRandomly.addEventListener('click', () => {
      removeModal();
      // ManualGameLoop();
    });
  }

  function displayModal() {
    startModalContent.appendChild(placeShipsManually);
    startModalContent.appendChild(placeShipsRandomly);
    startModal.appendChild(startModalContent);
    container.appendChild(startModal);

    userClickedPlaceManually();
    userClickedPlaceRandomly();
  }

  //* logic
  return {
    displayModal,
    removeModal,
  };
}
