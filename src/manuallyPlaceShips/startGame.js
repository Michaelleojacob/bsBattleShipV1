import ps from '../pubsub/pubsub';
import dom from '../domCreator/domCreator';
import Player from '../player/player';
import cached from '../cacheDom/cacheDom';
import renderGameArea from '../domComponents/gameAreaDom';
import renderPlayerGrid from '../domComponents/renderPlayerGrid';
import renderBotGrid from '../domComponents/renderBotGrid';
import enableAttacking from '../enableAttacks/enableAttacks';

export default function startGame(userObj) {
  ps.publish('wipeGameArea');

  const { gameArea } = cached;

  const bot = Player();
  bot.randomlyPlaceAllShips();

  const grids = renderGameArea();
  const manualGridWrap = dom({ attributes: [{ id: 'manualGridWrap' }] });
  manualGridWrap.appendChild(grids.playerGridArea);
  manualGridWrap.appendChild(grids.botGridArea);
  gameArea.appendChild(manualGridWrap);

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

  function init() {
    enableAttacking(objPassedToEnableAttacking);
  }

  return {
    init,
  };
}
