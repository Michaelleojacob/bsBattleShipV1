function enableRotateFunctionality(domElement) {
  const rotate = domElement;
  let isVert = true;

  const checkVert = () => isVert;

  function switchState() {
    const state = checkVert();
    switch (state) {
      case true:
        isVert = false;
        break;
      case false:
        isVert = true;
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

export default enableRotateFunctionality;
