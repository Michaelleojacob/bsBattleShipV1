import cached from '../cacheDom/cacheDom';
import dom from '../domCreator/domCreator';
import Player from '../player/player';
import renderPlayerGrid from '../domComponents/renderPlayerGrid';
import makeRotateComponent from '../domComponents/rotateComponent';
import ps from '../pubsub/pubsub';

function manuallyPlaceShips() {
  ps.publish('wipeGameArea');

  const { gameArea } = cached;

  const rotate = makeRotateComponent();
  gameArea.appendChild(rotate.rotateWrap);

  const playerGridArea = dom({ attributes: [{ id: 'playerGridArea' }] });
  gameArea.appendChild(playerGridArea);

  const user = Player();
  // const bot = Player();

  const updatePlayerGrid = () => renderPlayerGrid(user.getboard, playerGridArea);
  ps.subscribe('updatePlayerGrid', updatePlayerGrid);
  ps.publish('updatePlayerGrid');

  ps.publish('updateTooltip', { newText: 'click to place your ships', color: '' });
}

export default manuallyPlaceShips;
