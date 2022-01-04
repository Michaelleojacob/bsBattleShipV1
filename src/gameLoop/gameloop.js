import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import ps from '../pubsub/pubsub';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';
import manuallyPlaceShips from '../manuallyPlaceShips/manuallyPlaceShips';
import randomLoop from '../randomGameLoop/randomLoop';

export default function startGameLoop() {
  const { tooltipAndGameAreaWrap } = cached;

  const gameArea = dom({ id: 'gameArea' });

  const manualloopbtn = dom({
    tag: 'button',
    text: 'I will place my ship manually',
    attributes: [{ id: 'manual' }],
  });
  const randomloopbtn = dom({
    tag: 'button',
    text: 'place ships for me',
    attributes: [{ id: 'random' }],
  });

  manualloopbtn.addEventListener('click', () => {
    manuallyPlaceShips();
  });

  randomloopbtn.addEventListener('click', () => {
    randomLoop();
  });

  function wipeGameArea() {
    removeAllChildNodes(gameArea);
    ps.publish('updateTooltip', { newText: '', color: '' });
  }
  ps.subscribe('wipeGameArea', wipeGameArea);

  function init() {
    removeAllChildNodes(gameArea);
    cached.gameArea = gameArea;
    ps.publish('wipeGameArea');
    gameArea.appendChild(manualloopbtn);
    gameArea.appendChild(randomloopbtn);
    tooltipAndGameAreaWrap.appendChild(gameArea);
    ps.publish('updateTooltip', { newText: 'please select an option', color: 'black' });
  }

  return {
    init,
  };
}
