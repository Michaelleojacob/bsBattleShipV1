import Player from '../player/player';
import cached from '../cacheDom/cacheDom';
import makeHiddenBoard from '../domComponents/makeboards';

const getRandomLegalCell = (obj) => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

export default function randomGameLoop() {
  const { playerGridArea, botGridArea } = cached;
  const user = Player();
  const bot = Player();

  const clearEventListener = (element) => {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  };

  makeHiddenBoard(user.getboard, playerGridArea, true);
  makeHiddenBoard(bot.getboard, botGridArea, false);

  function sendUserAttack() {
    const target = getRandomLegalCell(user.legalMoves);
    const valueFromBotAttack = user.receiveAttack(target);
    makeHiddenBoard(user.getboard, playerGridArea, true);
    if (valueFromBotAttack === 'all ships are sunk!') {
      console.log('the bot is victorious');
      clearEventListener(botGridArea);
    }
  }

  function sendBotAttack(target) {
    const valueFromUserAttack = bot.receiveAttack(target);
    if (valueFromUserAttack === 'error illegal shot') return;
    makeHiddenBoard(bot.getboard, botGridArea, false);
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

function lotsOfAttacks(name) {
  name.receiveAttack('A0');
  name.receiveAttack('A1');
  name.receiveAttack('A2');
  name.receiveAttack('A3');
  name.receiveAttack('A4');
  name.receiveAttack('A5');
  name.receiveAttack('A6');
  name.receiveAttack('A7');
  name.receiveAttack('A8');
  name.receiveAttack('A9');

  name.receiveAttack('B0');
  name.receiveAttack('B1');
  name.receiveAttack('B2');
  name.receiveAttack('B3');
  name.receiveAttack('B4');
  name.receiveAttack('B5');
  name.receiveAttack('B6');
  name.receiveAttack('B7');
  name.receiveAttack('B8');
  name.receiveAttack('B9');

  name.receiveAttack('C0');
  name.receiveAttack('C1');
  name.receiveAttack('C2');
  name.receiveAttack('C3');
  name.receiveAttack('C4');
  name.receiveAttack('C5');
  name.receiveAttack('C6');
  name.receiveAttack('C7');
  name.receiveAttack('C8');
  name.receiveAttack('C9');

  name.receiveAttack('D0');
  name.receiveAttack('D1');
  name.receiveAttack('D2');
  name.receiveAttack('D3');
  name.receiveAttack('D4');
  name.receiveAttack('D5');
  name.receiveAttack('D6');
  name.receiveAttack('D7');
  name.receiveAttack('D8');
  name.receiveAttack('D9');

  name.receiveAttack('E0');
  name.receiveAttack('E1');
  name.receiveAttack('E2');
  name.receiveAttack('E3');
  name.receiveAttack('E4');
  name.receiveAttack('E5');
  name.receiveAttack('E6');
  name.receiveAttack('E7');
  name.receiveAttack('E8');
  name.receiveAttack('E9');

  name.receiveAttack('F0');
  name.receiveAttack('F1');
  name.receiveAttack('F2');
  name.receiveAttack('F3');
  name.receiveAttack('F4');
  name.receiveAttack('F5');
  name.receiveAttack('F6');
  name.receiveAttack('F7');
  name.receiveAttack('F8');
  name.receiveAttack('F9');

  name.receiveAttack('G0');
  name.receiveAttack('G1');
  name.receiveAttack('G2');
  name.receiveAttack('G3');
  name.receiveAttack('G4');
  name.receiveAttack('G5');
  name.receiveAttack('G6');
  name.receiveAttack('G7');
  name.receiveAttack('G8');
  name.receiveAttack('G9');

  name.receiveAttack('H0');
  name.receiveAttack('H1');
  name.receiveAttack('H2');
  name.receiveAttack('H3');
  name.receiveAttack('H4');
  name.receiveAttack('H5');
  name.receiveAttack('H6');
  name.receiveAttack('H7');
  name.receiveAttack('H8');
  name.receiveAttack('H9');

  name.receiveAttack('I0');
  name.receiveAttack('I1');
  name.receiveAttack('I2');
  name.receiveAttack('I3');
  name.receiveAttack('I4');
  name.receiveAttack('I5');
  name.receiveAttack('I6');
  name.receiveAttack('I7');
  name.receiveAttack('I8');
  name.receiveAttack('I9');
}

// console.log(lotsOfAttacks);
