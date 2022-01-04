import ps from '../pubsub/pubsub';
import Player from '../player/player';
import cached from '../cacheDom/cacheDom';
import renderGameArea from '../domComponents/gameAreaDom';
import renderPlayerGrid from '../domComponents/renderPlayerGrid';
import renderBotGrid from '../domComponents/renderBotGrid';
import enableAttacking from '../enableAttacks/enableAttacks';

function startGame(userObj) {
  ps.publish('wipeGameArea');

  const { gameArea } = cached;

  const bot = Player();
  bot.randomlyPlaceAllShips();

  const grids = renderGameArea();
  gameArea.appendChild(grids.playerGridArea);
  gameArea.appendChild(grids.botGridArea);

  const updatePlayerGridManualGame = () => renderPlayerGrid(userObj.getboard, grids.playerGridArea);
  ps.subscribe('updatePlayerGridManualGame', updatePlayerGridManualGame);
  ps.publish('updatePlayerGridManualGame');

  const updateBotGridManualGame = () => renderBotGrid(bot.getboard, grids.botGridArea);
  ps.subscribe('updateBotGridManualGame', updateBotGridManualGame);
  ps.publish('updateBotGridManualGame');

  const objPassedToEnableAttacking = {
    manualOrRandom: true,
    botUnderAttack: bot.receiveAttack,
    userLegalMoves: userObj.fetchLegalMoves,
    userUnderAttack: userObj.receiveAttack,
  };

  enableAttacking(objPassedToEnableAttacking);
}

export default startGame;