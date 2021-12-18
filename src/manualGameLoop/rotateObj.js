function updateText(nodeElement, message) {
  const thisNodeElement = nodeElement;
  thisNodeElement.textContent = message;
}

function enableRotateFunctionality(domElement, textToUpdate) {
  const rotate = domElement;
  const textdisplay = textToUpdate;
  updateText(textdisplay, 'vertical');
  let isVert = true;
  // let isVert = false;

  const checkVert = () => isVert;

  function switchState() {
    const state = checkVert();
    switch (state) {
      case true:
        isVert = false;
        updateText(textdisplay, 'horizontal');
        break;
      case false:
        isVert = true;
        updateText(textdisplay, 'vertical');
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
