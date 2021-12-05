import './style.css';
import cached from './cacheDom/cacheDom';
import dom from './domCreator/domCreator';
import mb1 from './mockboards/board1';
import mb2 from './mockboards/board2';

const { playerboard, botboard } = cached;

function makeHidden(obj, parent, player = false) {
  const keys = Object.keys(obj);
  keys.forEach((item) => {
    if (player) {
      const element = dom({ classes: [item, `p${obj[item]}`, 'cell'] });
      parent.appendChild(element);
    }
    if (!player) {
      const element = dom({ classes: [item, 'cell'] });
      parent.appendChild(element);
    }
  });
}

makeHidden(mb1, playerboard, true);

makeHidden(mb2, botboard);

botboard.addEventListener('click', (e) => {
  if (e.target.classList.contains('cell')) {
    console.log(e.target.classList[0]);
    // board.receiveAttack(e.target.classList[0])
  }
});
