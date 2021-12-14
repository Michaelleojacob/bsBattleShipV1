import Player from '../player/player';
import cached from '../cacheDom/cacheDom';
import renderBoard from '../domComponents/makeboards';

const getRandomLegalCell = (obj) => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

export default function randomGameLoop() {
  const { playerGridArea, botGridArea } = cached;
  const user = Player();
  const bot = Player();

  user.randomlyPlaceAllShips();
  bot.randomlyPlaceAllShips();

  const clearEventListener = (element) => {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  };

  renderBoard(user.getboard, playerGridArea, true);
  renderBoard(bot.getboard, botGridArea, false);

  function sendUserAttack() {
    const target = getRandomLegalCell(user.legalMoves);
    const valueFromBotAttack = user.receiveAttack(target);
    renderBoard(user.getboard, playerGridArea, true);
    if (valueFromBotAttack === 'all ships are sunk!') {
      console.log('the bot is victorious');
      clearEventListener(botGridArea);
    }
  }

  function sendBotAttack(target) {
    const valueFromUserAttack = bot.receiveAttack(target);
    if (valueFromUserAttack === 'error illegal shot') return;
    renderBoard(bot.getboard, botGridArea, false);
    if (valueFromUserAttack === 'all ships are sunk!') {
      console.log('You are victorious');
      clearEventListener(botGridArea);
    }
    sendUserAttack();
  }
  function sendAttack(e) {
    if (e.target.classList.contains('cell')) {
      sendBotAttack(e.target.classList[0]);
    }
  }

  botGridArea.addEventListener('click', sendAttack, true);
}
