import ps from '../pubsub/pubsub';
import getArrayFromSize from '../getArrayFromSize/getArrayFromSize';

export default function placeShipsSetup(domEl, rotateState, currentShip, userObj) {
  const { size } = currentShip;
  const getCorrectArray = (targ) => {
    const arr = getArrayFromSize(targ, size);
    const state = rotateState();
    let result;
    switch (state) {
      case true:
        result = arr.verticalArr;
        break;
      case false:
        result = arr.horizontalArr;
        break;
      default:
        break;
    }
    return result;
  };
  function handleClick(e) {
    if (e.target.classList.contains('cell')) {
      const target = e.target.classList[0];
      const arr = getCorrectArray(target);
      const foo = userObj.placeShip(currentShip, arr);
      if (foo) {
        ps.publish('updatePlayerGridPlacement');
        ps.publish('removeEvents');
        ps.publish('shipPlaced');
      }
    }
  }
  function handleMouseover(e) {
    if (e.target.classList.contains('cell')) {
      const target = e.target.classList[0];
      const arr = getCorrectArray(target);
      if (arr === 'error') return 'error';
      let addClass;
      if (arr.length === size) addClass = 'highlighted';
      if (arr.length !== size) addClass = 'danger';
      arr.forEach((item) => {
        if (userObj.getboard[item] === 'empty') {
          domEl.querySelector(`.${item}`).classList.add('highlighted');
        }
        if (userObj.getboard[item] !== 'empty') {
          domEl.querySelector(`.${item}`).classList.add('danger');
        }
        domEl.querySelector(`.${item}`).classList.add(addClass);
      });
    }
    return false;
  }
  function handleMouseout(e) {
    if (e.target.classList.contains('highlighted') || e.target.classList.contains('danger')) {
      const foo = Array.from(domEl.childNodes);
      foo.forEach((item) => {
        item.classList.remove('highlighted', 'danger');
      });
    }
  }
  function addEvents() {
    domEl.addEventListener('click', handleClick);
    domEl.addEventListener('mouseover', handleMouseover);
    domEl.addEventListener('mouseout', handleMouseout);
  }
  function removeEvents() {
    domEl.removeEventListener('click', handleClick);
    domEl.removeEventListener('mouseover', handleMouseover);
    domEl.removeEventListener('mouseout', handleMouseout);
  }
  ps.subscribe('removeEvents', removeEvents);
  addEvents();
}
