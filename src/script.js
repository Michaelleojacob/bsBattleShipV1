import './style.css';
import Player from './player/player';
import makeHiddenBoard from './domComponents/makeboards';
import cached from './cacheDom/cacheDom';

const { playerGridArea, botGridArea } = cached;

const user = Player();

const bot = Player();

makeHiddenBoard(user.getboard, playerGridArea, true);

makeHiddenBoard(bot.getboard, botGridArea, false);

// call bot.receiveAttack(cell) =>
// get return value
// add to array which shows {cell : 'hit'} or {cell: 'miss'}

// example:

//  const result = bot.receiveAttack('E5') =>
// if (result === 'hit') // markSpot();
// if(result === 'miss') // markSpot();

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
  // console.log(thing);
  // console.log(bot.getboard);
  makeHiddenBoard(bot.getboard, botGridArea, false);
  sendUserAttack();
}
function sendAttack(e) {
  if (e.target.classList.contains('cell')) {
    sendBotAttack(e.target.classList[0]);
  }
}

botGridArea.addEventListener('click', sendAttack);
