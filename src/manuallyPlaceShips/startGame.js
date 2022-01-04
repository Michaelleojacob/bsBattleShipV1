import ps from '../pubsub/pubsub';
import Player from '../player/player';
import cached from '../cacheDom/cacheDom';
import renderGameArea from '../domComponents/gameAreaDom';
import renderPlayerGrid from '../domComponents/renderPlayerGrid';
import renderBotGrid from '../domComponents/renderBotGrid';

function startGame(userObj) {
  ps.publish('wipeGameArea');

  const { gameArea } = cached;

  const bot = Player();
  bot.randomlyPlaceAllShips();

  const grids = renderGameArea();
  gameArea.appendChild(grids.playerGridArea);
  gameArea.appendChild(grids.botGridArea);

  const updatePlayerGridGame = () => renderPlayerGrid(userObj.getboard, grids.playerGridArea);
  ps.subscribe('updatePlayerGridGame', updatePlayerGridGame);
  ps.publish('updatePlayerGridGame');

  const updateBotGridGame = () => renderBotGrid(bot.getboard, grids.botGridArea);
  ps.subscribe('updateBotGridGame', updateBotGridGame);
  ps.publish('updateBotGridGame');
}

export default startGame;
