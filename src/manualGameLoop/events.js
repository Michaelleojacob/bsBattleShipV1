import arrayBasedOnSize from './getArrayBasedOnSize';

// export default function manualModalEvents(domObj, playerObj, rotateObj){}
export default function manualModalEvents({
  domElement,
  updateRenderedGrid,
  checkRotate,
  getCurrShip,
  placeShip,
  playerBoard,
}) {
  const currShip = getCurrShip();
  const { size } = currShip;

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
      console.log(arr);
      const foo = placeShip(currShip, arr);
      console.log(foo);
      if (foo) updateRenderedGrid();
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
          domElement.querySelector(`.${item}`).classList.add('highlighted');
        }
        if (playerBoard[item] !== 'empty') {
          domElement.querySelector(`.${item}`).classList.add('danger');
        }
        domElement.querySelector(`.${item}`).classList.add(addClass);
      });
    }
    return false;
  }

  function handleMouseout(e) {
    if (e.target.classList.contains('highlighted') || e.target.classList.contains('danger')) {
      const foo = Array.from(domElement.childNodes);
      foo.forEach((item) => {
        item.classList.remove('highlighted', 'danger');
      });
    }
  }

  function addEvents() {
    domElement.addEventListener('click', handleClick);
    domElement.addEventListener('mouseover', handleMouseover);
    domElement.addEventListener('mouseout', handleMouseout);
  }
  // function removeEvents() {
  //   domElement.removeEventListener('click', handleClick);
  //   domElement.removeEventListener('mouseover', handleMouseover);
  //   domElement.removeEventListener('mouseout', handleMouseout);
  // }

  addEvents();
}
