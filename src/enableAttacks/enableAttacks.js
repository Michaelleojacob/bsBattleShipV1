import ps from '../pubsub/pubsub';
import cached from '../cacheDom/cacheDom';
import endGameLoop from '../endGame/endGame';
import messages from './messageObject';

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

  ps.publish('updateTooltip', { newText: 'click on the enemy board to fire an attack', color: '' });

  const { gameArea } = cached;
  const botGridArea = gameArea.querySelector('#botGridArea');
  const playerGridArea = gameArea.querySelector('#playerGridArea');

  const getRandomLegalCell = (obj) => {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const clearEventListener = (element) => {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  };

  function declareWinner(winner) {
    const renderEndModal = endGameLoop(winner);
    renderEndModal.init();
  }

  function botToFireBack() {
    const target = getRandomLegalCell(userLegalMoves());
    const valueFromBotAttack = userUnderAttack(target);
    updatePlayerGrid();
    if (valueFromBotAttack === 'all ships are sunk!') {
      clearEventListener(botGridArea);
      ps.publish('updateTooltip', {
        newText: 'You lost to a bot, better luck next time!',
        color: '',
      });
      declareWinner(false);
    }
  }

  function sendAttack(e) {
    if (e.target.classList.contains('cell')) {
      const valueFromUserAttack = botUnderAttack(e.target.classList[0]);
      const msgs = messages();
      switch (valueFromUserAttack) {
        case 'miss':
          ps.publish('updateTooltip', { newText: msgs.msgForMiss(), color: 'ttmiss' });
          botToFireBack();
          updateBotGrid();
          break;
        case 'hit':
          ps.publish('updateTooltip', { newText: msgs.msgForHit(), color: 'tthit' });
          botToFireBack();
          updateBotGrid();
          break;
        case 'error illegal shot':
          break;
        case 'all ships are sunk!':
          console.log('You are victorious');
          updateBotGrid();
          clearEventListener(botGridArea);
          ps.publish('updateTooltip', { newText: 'You are victorious!', color: '' });
          declareWinner(true);
          break;
        default:
          break;
      }
    }
  }

  const publishTooltip = () =>
    ps.publish('updateTooltip', { newText: `wrong board silly`, color: '' });

  playerGridArea.addEventListener('click', publishTooltip, true);
  botGridArea.addEventListener('click', sendAttack, true);
}

export default enableAttacking;
