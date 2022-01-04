import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import ps from '../pubsub/pubsub';

export default function renderGameArea() {
  const { gameArea } = cached;
  ps.publish('wipeGameArea');

  const playerGridArea = dom({ attributes: [{ id: 'playerGridArea' }] });
  const botGridArea = dom({ attributes: [{ id: 'botGridArea' }] });

  function init() {
    gameArea.appendChild(playerGridArea);
    gameArea.appendChild(botGridArea);
  }

  return {
    playerGridArea,
    botGridArea,
    init,
  };
}
