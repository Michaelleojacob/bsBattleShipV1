import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import ps from '../pubsub/pubsub';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';
import manuallyPlaceShips from '../manuallyPlaceShips/manuallyPlaceShips';
import randomLoop from '../randomGameLoop/randomLoop';

export default function startGameLoop() {
  const { tooltipAndGameAreaWrap } = cached;

  const gameArea = dom({ attributes: [{ id: 'gameArea' }] });

  const startLoopBtnWrap = dom({ attributes: [{ id: 'startLoopBtnWrap' }] });

  const manualloopbtn = dom({
    tag: 'button',
    text: 'Manually place ships',
    attributes: [{ id: 'manual' }],
  });
  const randomloopbtn = dom({
    tag: 'button',
    text: 'randomly place ships',
    attributes: [{ id: 'random' }],
  });

  startLoopBtnWrap.appendChild(manualloopbtn);
  startLoopBtnWrap.appendChild(randomloopbtn);

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
    gameArea.appendChild(startLoopBtnWrap);
    tooltipAndGameAreaWrap.appendChild(gameArea);
    ps.publish('updateTooltip', { newText: 'please select an option', color: 'black' });
  }

  return {
    init,
  };
}
