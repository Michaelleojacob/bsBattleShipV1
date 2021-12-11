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

  makeHiddenBoard(user.getboard, playerGridArea, true);
  makeHiddenBoard(bot.getboard, botGridArea, true);

  function sendUserAttack() {
    const target = getRandomLegalCell(user.legalMoves);
    const valueFromBotAttack = user.receiveAttack(target);
    if (valueFromBotAttack === 'all ships are sunk!') {
      // run end logic for bot winning
      console.log('the bot is victorious');
    }
    makeHiddenBoard(user.getboard, playerGridArea, true);
  }

  function sendBotAttack(target) {
    const valueFromUserAttack = bot.receiveAttack(target);
    if (valueFromUserAttack === 'error illegal shot') return;
    if (valueFromUserAttack === 'all ships are sunk!') {
      // run end logic for player winning
      console.log('You are victorious');
    }
    makeHiddenBoard(bot.getboard, botGridArea, true);
    sendUserAttack();
  }
  function sendAttack(e) {
    if (e.target.classList.contains('cell')) {
      sendBotAttack(e.target.classList[0]);
    }
  }

  botGridArea.addEventListener('click', sendAttack);
}

// user.receiveAttack('A0');
// user.receiveAttack('A1');
// user.receiveAttack('A2');
// user.receiveAttack('A3');
// user.receiveAttack('A4');
// user.receiveAttack('A5');
// user.receiveAttack('A6');
// user.receiveAttack('A7');
// user.receiveAttack('A8');
// user.receiveAttack('A9');

// user.receiveAttack('B0');
// user.receiveAttack('B1');
// user.receiveAttack('B2');
// user.receiveAttack('B3');
// user.receiveAttack('B4');
// user.receiveAttack('B5');
// user.receiveAttack('B6');
// user.receiveAttack('B7');
// user.receiveAttack('B8');
// user.receiveAttack('B9');

// user.receiveAttack('C0');
// user.receiveAttack('C1');
// user.receiveAttack('C2');
// user.receiveAttack('C3');
// user.receiveAttack('C4');
// user.receiveAttack('C5');
// user.receiveAttack('C6');
// user.receiveAttack('C7');
// user.receiveAttack('C8');
// user.receiveAttack('C9');

// user.receiveAttack('D0');
// user.receiveAttack('D1');
// user.receiveAttack('D2');
// user.receiveAttack('D3');
// user.receiveAttack('D4');
// user.receiveAttack('D5');
// user.receiveAttack('D6');
// user.receiveAttack('D7');
// user.receiveAttack('D8');
// user.receiveAttack('D9');

// user.receiveAttack('E0');
// user.receiveAttack('E1');
// user.receiveAttack('E2');
// user.receiveAttack('E3');
// user.receiveAttack('E4');
// user.receiveAttack('E5');
// user.receiveAttack('E6');
// user.receiveAttack('E7');
// user.receiveAttack('E8');
// user.receiveAttack('E9');

// user.receiveAttack('F0');
// user.receiveAttack('F1');
// user.receiveAttack('F2');
// user.receiveAttack('F3');
// user.receiveAttack('F4');
// user.receiveAttack('F5');
// user.receiveAttack('F6');
// user.receiveAttack('F7');
// user.receiveAttack('F8');
// user.receiveAttack('F9');

// user.receiveAttack('G0');
// user.receiveAttack('G1');
// user.receiveAttack('G2');
// user.receiveAttack('G3');
// user.receiveAttack('G4');
// user.receiveAttack('G5');
// user.receiveAttack('G6');
// user.receiveAttack('G7');
// user.receiveAttack('G8');
// user.receiveAttack('G9');

// user.receiveAttack('H0');
// user.receiveAttack('H1');
// user.receiveAttack('H2');
// user.receiveAttack('H3');
// user.receiveAttack('H4');
// user.receiveAttack('H5');
// user.receiveAttack('H6');
// user.receiveAttack('H7');
// user.receiveAttack('H8');
// user.receiveAttack('H9');

// user.receiveAttack('I0');
// user.receiveAttack('I1');
// user.receiveAttack('I2');
// user.receiveAttack('I3');
// user.receiveAttack('I4');
// user.receiveAttack('I5');
// user.receiveAttack('I6');
// user.receiveAttack('I7');
// user.receiveAttack('I8');
// user.receiveAttack('I9');
