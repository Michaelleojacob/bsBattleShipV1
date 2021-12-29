export default function enableRotateFunctionality({ rotateBtn, updateDyanmicRotateText }) {
  const rotate = rotateBtn;
  let isVert = true;
  // let isVert = false;

  const checkVert = () => isVert;

  function updatetextBasedOnState() {
    const state = checkVert();
    switch (state) {
      case true:
        updateDyanmicRotateText('vertical');
        break;
      case false:
        updateDyanmicRotateText('horizontal');
        break;
      default:
        break;
    }
  }
  updatetextBasedOnState();

  function switchState() {
    const state = checkVert();
    switch (state) {
      case true:
        isVert = false;
        updatetextBasedOnState();
        break;
      case false:
        isVert = true;
        updatetextBasedOnState();
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
