import Player from '../player/player';
import renderBoard from '../domComponents/makeboards';
import cached from '../cacheDom/cacheDom';

const { playerGridArea } = cached;
const user = Player();
renderBoard(user.getboard, playerGridArea, true);

function enableRotateBtnFunctionality() {
  let isVert = true;
  const rotate = document.querySelector('#rotate');
  const checkVert = () => isVert;
  function switchState() {
    const state = checkVert();
    switch (state) {
      case true:
        isVert = false;
        // console.log(checkVert());
        break;
      case false:
        isVert = true;
        // console.log(checkVert());
        break;
      default:
        break;
    }
  }
  const addEventToRotateBtn = () => {
    rotate.addEventListener('click', switchState);
  };
  const removeEventFromRotateBtn = () => {
    rotate.removeEventListener('click', switchState);
  };
  return {
    get getVert() {
      const trueOrFalse = checkVert();
      return trueOrFalse;
    },
    init: addEventToRotateBtn,
    end: removeEventFromRotateBtn,
  };
}
const bar = enableRotateBtnFunctionality();
bar.init();

// function runManuallyPlaceShips(e) {
//   // console.log(e);
//   const getCoords = e.target.classList[0];
//   // console.log(getCoords);
//   // const verticleFive = getCoords.split('');
//   // console.log(verticleFive);

//   // const didShipGetPlaced = user.placeShip(user.getShips.carrier, [getCoords]);
//   // console.log(didShipGetPlaced);
//   renderBoard(user.getboard, playerGridArea, true);
// }

// playerGridArea.addEventListener('click', runManuallyPlaceShips);
