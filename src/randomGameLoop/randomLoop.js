import ps from '../pubsub/pubsub';
import dom from '../domCreator/domCreator';
import cached from '../cacheDom/cacheDom';
import Player from '../player/player';
import renderGameArea from '../domComponents/gameAreaDom';
import renderPlayerGrid from '../domComponents/renderPlayerGrid';
import renderBotGrid from '../domComponents/renderBotGrid';
import enableAttacking from '../enableAttacks/enableAttacks';

function randomLoop() {
  ps.publish('wipeGameArea');
  const user = Player();
  user.randomlyPlaceAllShips();
  const bot = Player();
  bot.randomlyPlaceAllShips();

  const grids = renderGameArea();
  const { gameArea } = cached;
  const randomGridWrap = dom({ attributes: [{ id: 'randomGridWrap' }] });
  randomGridWrap.appendChild(grids.playerGridArea);
  randomGridWrap.appendChild(grids.botGridArea);
  gameArea.appendChild(randomGridWrap);

  const updatePlayerGridRandomGame = () => renderPlayerGrid(user.getboard, grids.playerGridArea);
  ps.subscribe('updatePlayerGridRandomGame', updatePlayerGridRandomGame);
  ps.publish('updatePlayerGridRandomGame');

  const updateBotGridManualGame = () => renderBotGrid(bot.getboard, grids.botGridArea);
  ps.subscribe('updateBotGridManualGame', updateBotGridManualGame);
  ps.publish('updateBotGridManualGame');

  const objPassedToEnableAttacking = {
    manualOrRandom: false,
    botUnderAttack: bot.receiveAttack,
    userLegalMoves: user.fetchLegalMoves,
    userUnderAttack: user.receiveAttack,
  };

  enableAttacking(objPassedToEnableAttacking);
}

export default randomLoop;
