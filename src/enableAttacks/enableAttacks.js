import cached from '../cacheDom/cacheDom';
import ps from '../pubsub/pubsub';

function enableAttacking({ manualOrRandom, botUnderAttack, userUnderAttack, userLegalMoves }) {
  let updatePlayerGrid;
  let updateBotGrid;
  switch (manualOrRandom) {
    case true:
      updatePlayerGrid = () => ps.publish('updatePlayerGridManualGame');
      updateBotGrid = () => ps.publish('updateBotGridManualGame');
      break;
    case false:
      updatePlayerGrid = () => ps.publish('updatePlayerGridRandomGame');
      updateBotGrid = () => ps.publish('updateBotGridManualGame');
      break;
    default:
      break;
  }

  const { gameArea } = cached;
  const botGridArea = gameArea.querySelector('#botGridArea');

  const getRandomLegalCell = (obj) => {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const clearEventListener = (element) => {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  };

  function sendUserAttack() {
    const target = getRandomLegalCell(userLegalMoves());
    const valueFromBotAttack = userUnderAttack(target);
    updatePlayerGrid();
    if (valueFromBotAttack === 'all ships are sunk!') {
      console.log('the bot is victorious');
      clearEventListener(botGridArea);
    }
  }

  function sendAttack(e) {
    if (e.target.classList.contains('cell')) {
      const valueFromUserAttack = botUnderAttack(e.target.classList[0]);
      if (valueFromUserAttack === 'error illegal shot') return;
      updateBotGrid();
      if (valueFromUserAttack === 'all ships are sunk!') {
        console.log('You are victorious');
        clearEventListener(botGridArea);
      }
      sendUserAttack();
    }
  }

  botGridArea.addEventListener('click', sendAttack, true);
}

export default enableAttacking;
