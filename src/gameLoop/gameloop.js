import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import ps from '../pubsub/pubsub';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';
import manuallyPlaceShips from '../manuallyPlaceShips/manuallyPlaceShips';
import randomLoop from '../randomGameLoop/randomLoop';

function startGameLoop() {
  const { gameArea } = cached;

  const button1 = dom({
    tag: 'button',
    text: 'I will place my ship manually',
    attributes: [{ id: 'manual' }],
  });
  const button2 = dom({
    tag: 'button',
    text: 'place ships for me',
    attributes: [{ id: 'random' }],
  });

  // run manually place ships
  button1.addEventListener('click', () => {
    manuallyPlaceShips();
  });

  // run randomly place ships
  button2.addEventListener('click', () => {
    randomLoop();
  });

  function wipeGameArea() {
    removeAllChildNodes(gameArea);
    ps.publish('updateTooltip', { newText: '', color: '' });
  }
  ps.subscribe('wipeGameArea', wipeGameArea);

  function init() {
    ps.publish('wipeGameArea');
    gameArea.appendChild(button1);
    gameArea.appendChild(button2);
    ps.publish('updateTooltip', { newText: 'please select an option', color: 'black' });
  }

  return {
    init,
  };
}

const startComponent = startGameLoop();
export default startComponent;
