import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import ps from '../pubsub/pubsub';
import removeAllChildNodes from '../removeAllChildren/removeAllChildren';

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

  button1.addEventListener('click', () => {
    console.log('btn1 was clicked');
  });

  button2.addEventListener('click', () => {
    console.log('btn2 was clicked');
  });

  function init() {
    removeAllChildNodes(gameArea);
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
