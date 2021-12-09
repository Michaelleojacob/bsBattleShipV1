import './style.css';
import Player from './player/player';
import makeHiddenBoard from './domComponents/makeboards';
import cached from './cacheDom/cacheDom';

const { playerGridArea, botGridArea } = cached;

const user = Player();

const bot = Player();

makeHiddenBoard(user.getboard, playerGridArea, true);

makeHiddenBoard(bot.getboard, botGridArea, false);

const getRandomLegalCell = (obj) => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

function sendUserAttack() {
  const target = getRandomLegalCell(user.legalMoves);
  user.receiveAttack(target);
  makeHiddenBoard(user.getboard, playerGridArea, true);
}

function sendBotAttack(target) {
  const thing = bot.receiveAttack(target);
  if (thing === 'error illegal shot') return;
  makeHiddenBoard(bot.getboard, botGridArea, false);
  sendUserAttack();
}
function sendAttack(e) {
  if (e.target.classList.contains('cell')) {
    sendBotAttack(e.target.classList[0]);
  }
}

botGridArea.addEventListener('click', sendAttack);
