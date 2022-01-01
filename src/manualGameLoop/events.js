import ps from '../pubsub/pubsub';
import arrayBasedOnSize from './getArrayBasedOnSize';
import modalDom from './domModal';

const { modalGrid } = modalDom;
export default function manualModalEvents({ checkRotate, currentShip, placeShip, playerBoard }) {
  const { size } = currentShip;

  const getCorrectArray = (targ) => {
    const arr = arrayBasedOnSize(targ, size);
    const state = checkRotate();
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
      const foo = placeShip(currentShip, arr);
      if (foo) {
        ps.publish('updateGrid');
        ps.publish('removeEvents');
        ps.publish('shipWasPlaced');
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
        if (playerBoard[item] === 'empty') {
          modalGrid.querySelector(`.${item}`).classList.add('highlighted');
        }
        if (playerBoard[item] !== 'empty') {
          modalGrid.querySelector(`.${item}`).classList.add('danger');
        }
        modalGrid.querySelector(`.${item}`).classList.add(addClass);
      });
    }
    return false;
  }

  function handleMouseout(e) {
    if (e.target.classList.contains('highlighted') || e.target.classList.contains('danger')) {
      const foo = Array.from(modalGrid.childNodes);
      foo.forEach((item) => {
        item.classList.remove('highlighted', 'danger');
      });
    }
  }

  function addEvents() {
    modalGrid.addEventListener('click', handleClick);
    modalGrid.addEventListener('mouseover', handleMouseover);
    modalGrid.addEventListener('mouseout', handleMouseout);
  }
  function removeEvents() {
    modalGrid.removeEventListener('click', handleClick);
    modalGrid.removeEventListener('mouseover', handleMouseover);
    modalGrid.removeEventListener('mouseout', handleMouseout);
  }
  ps.subscribe('removeEvents', removeEvents);

  addEvents();
}
